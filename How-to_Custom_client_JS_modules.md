# How-to: Custom client JS modules

This article collects typical tasks solved with client JavaScript modules, each with its solution. The modules are specified in [Client JavaScript modules](/Client_JavaScript_modules.md).

### A folder for a file[​](#file-folder "Direct link to A folder for a file")

We need to choose where a file of client code goes — under *src/main/web* for the build or under *src/main/resources/web* without it — and how it is loaded ([Files without a build](/Client_JavaScript_modules.md#without-the-build)).

**Auto-loaded — put it in *resources/web/init*.** Use it for a self-contained component or stylesheet.

**Registered explicitly — list it in *onWebClientInit*.** Use this when load order matters — a third-party library that must load before the component using it — or to load a file conditionally.

For a large *.jsx* file without the build, set `jsxTransformTimeout` above its transformation time, or move the component to the compiled *src/main/web* tier, which transforms it at build time ([Lightweight .jsx (no build)](/Client_JavaScript_modules.md#lightweight-jsx)).

### A function for a client action[​](#example "Direct link to A function for a client action")

We need an action that formats an order's sum on the client with a JavaScript function of the project. The solution uses a named export of a module the build compiles ([Named exports and auto-registration](/Client_JavaScript_modules.md#named-exports-and-auto-registration)).

Put a tiny module in *src/main/web/orderUtil.js* that exports a formatting function:

```
export function formatSum(amount, currency) {
    return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
}
```

Bind it to a client-side action and call it:

```
formatOrderSum 'Format' (Order o) {
    INTERNAL CLIENT 'formatSum' PARAMS sum(o), 'USD';
}
```

The build compiles *orderUtil.js* into *web/.compiled/orderUtil.js* and registers `formatSum`. When the form opens, the action resolves the name from the registry and calls the function. No `onWebClientInit` entry is written for the module.

### A component's styles[​](#component-styles "Direct link to A component's styles")

We need to style a component of a module the build compiles ([Styles](/Client_JavaScript_modules.md#styles)).

Recommended styling:

* **CSS modules** (`import styles from "./Component.module.css"`, used as `className={styles.root}`) for a component's own styles.
* **Inline `style={{ ... }}`** for values computed from data (per-row colors and sizes, conditional styling).
* A plain `import "./Component.css"` (or a third-party library's CSS) for vendor or deliberately global styles, with a namespace prefix on the class names. Do not register the compiled *.css* manually — it is already auto-loaded.

For a full styling system beyond static class names, add a runtime CSS-in-JS library (such as `styled-components` or `@emotion`) as an `org.mvnpm` dependency. Use the `styled` API or `className={css(...)}`.

Native CSS (nesting, custom properties) and CSS modules cover most of what a preprocessor was used for. If you do need a CSS preprocessor (Sass/SCSS, Less, Stylus) or a utility framework (Tailwind, UnoCSS), generate the CSS with a separate step and ship the result as a plain stylesheet through `onWebClientInit`.

This page covers the generic packaging of any custom browser JavaScript. For the React-specific views and the controller calls a custom view makes back into the server, see [React views](/React_views.md) and [Form and navigator controllers](/Form_and_navigator_controllers.md).
