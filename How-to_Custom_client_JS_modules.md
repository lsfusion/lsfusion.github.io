# How-to: Custom client JS modules

When an application needs its own browser JavaScript — a custom view for an object or property, a function bound by an [`INTERNAL CLIENT`](/INTERNAL_operator/.md) action, or any other client-side code — that code can be kept as ordinary source files in the project and compiled into the web client at build time. The platform bundles each entry file and registers what it exports, so the application does not write any explicit loading or wiring for it. This applies to the web client only.

### Where the files go[​](#where-the-files-go "Direct link to Where the files go")

Browser JavaScript is placed under *src/main/web* in the logic module, for example *src/main/web/OrderBoard.jsx* or *src/main/web/util.js*. The files may be *.js*, *.jsx*, *.ts*, or *.tsx*.

During the build, each file under *src/main/web* (outside the *lib* subfolder) is bundled (with [esbuild](https://esbuild.github.io/)) into a single *web/.compiled/\<name>.js* file on the classpath, where *\<name>* comes from the source path (a file in a subfolder becomes *\<subfolder>\_\<name>.js*). The bundle is loaded automatically when a page opens — no entry in the *onWebClientInit* action is needed for it.

A *src/main/web/lib* subfolder is treated as shared helper code: its files are not compiled into bundles of their own, but they can be imported from the entry files and are bundled in.

### Without the build[​](#without-the-build "Direct link to Without the build")

A project with no build set up — no `node`, no esbuild, no `org.mvnpm` dependencies — can still ship custom client JS as a plain file. Place it under *src/main/resources/web* (not *src/main/web*), register it in the [`onWebClientInit`](/INTERNAL_operator/.md) action, and the platform serves it from */web* and loads it when a page opens. The file is used as written: no bundling, no JSX, no third-party-library resolution. This is also the path `eval` uses.

The file is plain JavaScript, so a React view is written with `React.createElement` against the platform-provided `window.React` instead of JSX, and the component is exposed on the global `window` (the fallback described below) instead of as a named export. A `custom` name matching `[A-Z][A-Za-z0-9_$]*` is still inferred as React:

```
function HelloBoard(props) {
    var React = window.React;
    var rows = (props.data.o || {}).list || [];
    return React.createElement("div", { className: "hello-board" }, rows.length + " orders");
}
```

```
DESIGN orders {
    BOX(o) { custom = 'HelloBoard'; }
}

onWebClientInit() + {
    onWebClientInit('helloBoard.js') <- 1;
}
```

The two paths differ as follows:

|                       | Build path                                       | No-build path                                   |
| --------------------- | ------------------------------------------------ | ----------------------------------------------- |
| Location              | *src/main/web*                                   | *src/main/resources/web*                        |
| Loading               | bundled to *web/.compiled*, loaded automatically | served from */web*, listed in `onWebClientInit` |
| Source                | *.js*/*.jsx*/*.ts*/*.tsx*, JSX allowed           | plain *.js*, `React.createElement`              |
| Registration          | named export                                     | name on `window`                                |
| Third-party libraries | bundled via `org.mvnpm`                          | not bundled                                     |

### Named exports and auto-registration[​](#named-exports-and-auto-registration "Direct link to Named exports and auto-registration")

Each module exposes its components and functions as **named exports**. At load time every named export is registered into the `window.lsfusion.custom` registry under its export name, and the client resolves a custom name against this registry first. So a `DESIGN` `custom = 'OrderBoard'`, a `CUSTOM 'orderBoard'` object view, or an `INTERNAL CLIENT 'formatSum'` action finds the export with the matching name:

```
export function OrderBoard(element, controller, list) {
    // render the list of objects into element
}
```

A name placed directly on the global `window` object still works as a fallback, so existing scripts that define `window.OrderBoard = ...` keep working, but named exports are the preferred form.

React and ReactDOM are **provided by the platform**: a single vendored production build is loaded before any custom script, and `react`, `react-dom`, and `react-dom/client` imports in a module resolve to it. An application must not bundle its own copy of React or ReactDOM.

### Adding a third-party library[​](#adding-a-third-party-library "Direct link to Adding a third-party library")

A third-party browser library is added as an ordinary **offline Maven dependency**, using the [mvnpm](https://mvnpm.org/) coordinates (`org.mvnpm:*`, the Maven Central mirror of npm) — there is no npm or yarn step. The dependency is resolved from the local Maven repository like any other, and the library, together with the npm packages it depends on, is bundled into the modules that import it:

```
<dependency>
    <groupId>org.mvnpm</groupId>
    <artifactId>apexcharts</artifactId>
    <version>3.54.1</version>
</dependency>
```

A scoped npm package (`@scope/name`) uses the group `org.mvnpm.at.<scope>` and the bare name as the artifact id. The module then imports the library by its npm name:

```
import ApexCharts from "apexcharts";
```

### React Compiler[​](#react-compiler "Direct link to React Compiler")

By default the source is bundled as written. The optional **React Compiler** pass (automatic memoization of React components) is enabled by setting the module/plugin option `reactCompiler = true`; it runs every source through the compiler before bundling. Unlike plain bundling, this pass needs `node` available on the build machine. Use it when custom React views benefit from the compiler's auto-memoization; leave it off (the default) otherwise, and plain bundling still works.

### Example[​](#example "Direct link to Example")

Put a tiny module in *src/main/web/orderUtil.js* that exports a formatting function:

```
export function formatSum(amount, currency) {
    return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
}
```

Bind it to a client-side action and call it:

```
formatOrderSum 'Format' (Order o) {
    INTERNAL CLIENT 'formatSum' (sum(o), 'USD');
}
```

The build compiles *orderUtil.js* into *web/.compiled/orderUtil.js* and registers `formatSum`; when the form opens, the action resolves the name from the registry and calls the function. No `onWebClientInit` entry is written for the module.

### Styles[​](#styles "Direct link to Styles")

A module can `import` CSS. esbuild gathers all CSS reachable from the module — its own `import "./styles.css"` and the CSS of any third-party library it imports — into a sibling *web/.compiled/\<name>.css*, which is loaded automatically together with the bundle (no `onWebClientInit` entry, and no separate registration for a library's CSS). Fonts and images that the CSS references through `url()` are inlined into the compiled stylesheet as data URLs, so it is self-contained; load large images separately (for example through `onWebClientInit`) to keep the stylesheet from growing.

Recommended styling:

* **CSS modules** (`import styles from "./Component.module.css"`, used as `className={styles.root}`) for a component's own styles — the class names are scoped per module, so styles of different components on the same form do not collide.
* **Inline `style={{ ... }}`** for values computed from data (per-row colors and sizes, conditional styling).
* A plain `import "./Component.css"` (or a third-party library's CSS) is global; use it for vendor or deliberately global styles, and give the class names a namespace prefix. Do not register the compiled *.css* manually — it is already auto-loaded.

A standalone stylesheet that is not part of the build can still be shipped as a plain file and loaded through the [`onWebClientInit`](/INTERNAL_operator/.md) action, like the CSS of a classic custom component (see [How-to: Custom Components (objects)](/How-to_Custom_components_objects/.md)).

This page covers the generic packaging of any custom browser JavaScript. For the React-specific views and the controller calls a custom view makes back into the server, see [How-to: Custom React views](/How-to_Custom_React_views/.md) and [How-to: Custom view controller API](/How-to_Custom_view_controller/.md).
