# How-to: Custom client JS modules

When an application needs its own browser JavaScript — a custom view for an object or property, a function bound by an [`INTERNAL CLIENT`](/INTERNAL_operator/.md) action, or any other client-side code — that code can be kept as ordinary source files in the project and compiled into the web client at build time. The platform bundles each entry file and registers what it exports, so the application does not write any explicit loading or wiring for it. This applies to the web client only.

### Where the files go[​](#where-the-files-go "Direct link to Where the files go")

Browser JavaScript is placed under *src/main/web* in the logic module, for example *src/main/web/OrderBoard.jsx* or *src/main/web/util.js*. The files may be *.js*, *.jsx*, *.ts*, or *.tsx*.

During the build, each file under *src/main/web* (outside the *lib* subfolder) is bundled (with [esbuild](https://esbuild.github.io/)) into a single *web/.compiled/\<name>.js* file on the classpath, where *\<name>* comes from the source path (a file in a subfolder becomes *\<subfolder>\_\<name>.js*). The bundle is loaded automatically when a page opens — no entry in the *onWebClientInit* action is needed for it.

A *src/main/web/lib* subfolder is treated as shared helper code: its files are not compiled into bundles of their own, but they can be imported from the entry files and are bundled in.

### Without the build[​](#without-the-build "Direct link to Without the build")

A project with no build set up — no esbuild, no `org.mvnpm` dependencies — can still ship custom client JS as a plain file under *src/main/resources/web*, used as written: no bundling, no third-party-library resolution. (This is also the path `eval` uses.) A React view in a *.js* file is therefore written with `React.createElement` against the platform-provided `window.React` instead of JSX (a *.jsx* file keeps the JSX syntax — see the lightweight *.jsx* section below), and the component is exposed on the global `window` (the fallback described below) instead of as a named export. A `custom` name matching `[A-Z][A-Za-z0-9_$]*` is still inferred as React:

```
function HelloBoard(props) {
    var React = window.React;
    var rows = (props.data.o || {}).list || [];
    return React.createElement("div", { className: "hello-board" }, rows.length + " orders");
}
```

Because it is not bundled, a no-build file cannot `import` other local modules — it shares code only through globals on `window` (the platform provides `window.React` and `window.ReactDOM`). Importing local helpers and npm packages is what the build adds.

Such a file is loaded one of two ways — the same split that distinguishes the build path's auto-loaded bundles from anything an application lists in `onWebClientInit`.

**Auto-loaded — put it in *resources/web/init*.** A file under *src/main/resources/web/init* is registered automatically when a page opens, with no *onWebClientInit* entry — the no-build counterpart of how *src/main/web* bundles auto-load after the build. Use it for a self-contained component or stylesheet:

```
DESIGN orders {
    BOX(o) { custom = 'HelloBoard'; }   // from resources/web/init/helloBoard.js — nothing else to wire
}
```

Files in *web/init* must be **load-order-independent**: the scan gives them all one load order, so each must register or define at load and use any other library lazily (at render or on an event), never reach into another script at load time.

**Registered explicitly — list it in *onWebClientInit*.** Any file under *src/main/resources/web* outside *web/init* is loaded by naming it in the [`onWebClientInit`](/INTERNAL_operator/.md) action with an integer order. Use this when load order matters — a third-party library that must load before the component using it — or to load a file conditionally:

```
onWebClientInit() + {
    onWebClientInit('helloBoard.js') <- 1;
}
```

The build and no-build paths compare as follows:

|                       | Build (*src/main/web*)                  | No-build, auto (*resources/web/init*)       | No-build, explicit (*resources/web*)      |
| --------------------- | --------------------------------------- | ------------------------------------------- | ----------------------------------------- |
| Loading               | bundled to *web/.compiled*, auto-loaded | auto-loaded by folder scan                  | listed in `onWebClientInit`               |
| Source                | *.js*/*.jsx*/*.ts*/*.tsx*, JSX allowed  | *.js* or *.jsx* (transformed when served)   | *.js* or *.jsx* (transformed when served) |
| Registration          | named export                            | name on `window`                            | name on `window`                          |
| Load order            | one order (bundles are self-contained)  | one order (files must be order-independent) | explicit integer order                    |
| Third-party libraries | bundled via `org.mvnpm`                 | loaded separately, used from `window`       | loaded separately, used from `window`     |

### Lightweight .jsx (no build)[​](#lightweight-jsx-no-build "Direct link to Lightweight .jsx (no build)")

A no-build file can also be written in JSX: a *.jsx* file under *src/main/resources/web* is transformed on the server when it is served, so the JSX syntax works with no `node`, no esbuild, and no build step, and the browser receives a plain script. Only the syntax changes — the file is still a no-build file: the JSX compiles to `React.createElement` calls against the platform-provided `window.React`, and the file runs as a classic top-level script, so a top-level `function` declaration is already a name on `window` — nothing else is needed. An `import` or `export` in a *.jsx* file is an error, reported in the browser console with the file skipped — importing modules is what the build (*src/main/web*) adds. Eligible components are also memoized automatically (React Compiler) during the same server-side transformation, so a no-build component re-renders only when its inputs change — no annotations, no build step. Because that transformation runs on the server, the application server must run on Java 11 or newer; on an older JVM a served *.jsx* reports the requirement to the browser console instead of rendering (a plain *.js* resource is unaffected).

A *.jsx* file is loaded the same two ways as a plain *.js*: dropped into *resources/web/init* it auto-loads with no wiring, and anywhere else under *resources/web* it is listed in `onWebClientInit`:

```
// resources/web/init/helloBoard.jsx — auto-loads, nothing else to wire
function HelloBoard(props) {
    const rows = (props.data.o || {}).list || [];
    return <div className="hello-board">{rows.length} orders</div>;
}
```

```
DESIGN orders {
    BOX(o) { custom = 'HelloBoard'; }
}
```

Load order: a *.jsx* file loads and runs at its resource slot, exactly like a plain *.js* — the `onWebClientInit` order holds verbatim across *.js* and *.jsx* files in both directions, so at load time either kind may read a global defined by any earlier resource; the one reserved range is the platform's own — a *.jsx* registered at an order of -108 or below runs before the platform-provided memoization runtime and is out of contract.

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

### Adding a third-party library without the build[​](#adding-a-third-party-library-without-the-build "Direct link to Adding a third-party library without the build")

Without the build there is no `org.mvnpm` bundling, so a third-party library is loaded as a separate browser script and used from the global name it defines — a build that assigns itself to `window` (a UMD or plain-script build). The component reads it from there (`window.confetti`, `window.dayjs`, …) instead of importing it. There are two ways to supply that script.

Vendored, for an offline project. Place the library's browser build (the *.js* that assigns the global) as a static file under *src/main/resources/web/init* next to the component. Both auto-load, and the component works because it reads the global lazily, at render or on an event — so it does not matter which of the two scripts the scan injects first. Only the committed files are needed — no internet, no `org.mvnpm` dependency, no build:

```
function ConfettiBoard(props) {                        // resources/web/init/confettiBoard.js
    var React = window.React;
    function celebrate() { window.confetti({ particleCount: 200, spread: 120 }); }
    return React.createElement("button", { onClick: celebrate }, "Celebrate");
}
// resources/web/init/confetti.umd.js sets window.confetti — both files auto-load, no onWebClientInit
```

From a URL, when the runtime is allowed to reach the internet. A URL is not a file to drop in *web/init*, so it is passed straight to `onWebClientInit`: a value that is not a local *web/* resource and is an absolute URL is loaded as a `<script src>` on the page (the resolution rule is described under [`INTERNAL`](/INTERNAL_operator/.md)), before the component that uses it:

```
onWebClientInit() + {
    onWebClientInit('https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js') <- 1;
    onWebClientInit('confettiBoard.js') <- 2;
}
```

### React Compiler[​](#react-compiler "Direct link to React Compiler")

A module's JSX (any *.jsx* or *.tsx* source) is run through the **React Compiler**, general automatic memoization of React components that stands in for hand-written `useMemo` / `useCallback` / `React.memo`. It runs whenever the module has JSX — the same as the no-build *.jsx* tier — and a component that violates the rules of React is left untouched, so it needs no configuration. A module with only plain *.js*/*.ts* sources is bundled without it.

Like plain bundling, this pass needs no Node and no other external toolchain: the compiler (Babel with `babel-plugin-react-compiler`) is vendored with the build plugin and runs in-process on the JVM. It is a build-time step only — a runtime / deploy box is unaffected. A module with JSX does require the build JVM to be Java 11 or newer; on an older JVM it fails with that guidance — a *.js*/*.ts*-only module builds regardless, or set `-Dlsfusion.web.skip=true` to skip the web compile entirely. An offline build (`mvn -o`) works as usual.

The pass is not a substitute for [`window.lsfusion.List`](/How-to_Custom_React_views/.md): the common large-grid performance case — re-rendering only the rows that actually changed — is handled by `List` independently.

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

For a full styling system beyond static class names, a **runtime CSS-in-JS** library (such as `styled-components` or `@emotion`) works as an ordinary `org.mvnpm` dependency: it is bundled with the module and injects its styles at runtime. Use the `styled` API or `className={css(...)}`; Emotion's `css` *prop* (`<div css={...} />`) needs a JSX transform that the build does not run, so it is not available.

CSS preprocessors (Sass/SCSS, Less, Stylus) and utility frameworks that generate CSS from a build step (Tailwind, UnoCSS) are **not** part of this build — plain bundling runs the esbuild binary only, with no Node or plugin phase. Native CSS (nesting, custom properties) and CSS modules cover most of what a preprocessor was used for; if you do need one of these tools, generate the CSS with a separate step and ship the result as a plain stylesheet through `onWebClientInit`.

A standalone stylesheet that is not part of the build can still be shipped as a plain file and loaded through the [`onWebClientInit`](/INTERNAL_operator/.md) action, like the CSS of a classic custom component (see [How-to: Custom Components (objects)](/How-to_Custom_components_objects/.md)).

This page covers the generic packaging of any custom browser JavaScript. For the React-specific views and the controller calls a custom view makes back into the server, see [How-to: Custom React views](/How-to_Custom_React_views/.md) and [How-to: Custom view controller API](/How-to_Custom_view_controller/.md).
