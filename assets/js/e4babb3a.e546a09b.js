(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[92126],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},19387:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i={title:"Interruption (BREAK)"},c={unversionedId:"Interruption_BREAK_",id:"version-v4/Interruption_BREAK_",isDocsHomePage:!1,title:"Interruption (BREAK)",description:"The interrupt operator creates an action that exits the most nested loop (normal or recursive) within which this action is located. Control is transferred to the first action following the loop. If the created action is not inside a loop, its behavior becomes similar to the action created by the exit operator.",source:"@site/versioned_docs/version-v4/Interruption_BREAK_.md",sourceDirName:".",slug:"/Interruption_BREAK_",permalink:"/Interruption_BREAK_",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Interruption_BREAK_.md",version:"v4",lastUpdatedAt:1620216094,formattedLastUpdatedAt:"5/5/2021",frontMatter:{title:"Interruption (BREAK)"},sidebar:"version-v4/learn",previous:{title:"Recursive loop (WHILE)",permalink:"/Recursive_loop_WHILE_"},next:{title:"Exit (RETURN)",permalink:"/Exit_RETURN_"}},p=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:p};function s(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"interrupt operator")," creates an ",(0,a.kt)("a",{parentName:"p",href:"/Actions"},"action")," that exits the most nested loop (",(0,a.kt)("a",{parentName:"p",href:"/Loop_FOR_"},"normal")," or ",(0,a.kt)("a",{parentName:"p",href:"/Recursive_loop_WHILE_"},"recursive"),") within which this action is located. Control is transferred to the first action following the loop. If the created action is not inside a loop, its behavior becomes similar to the action created by the ",(0,a.kt)("a",{parentName:"p",href:"/Exit_RETURN_"},"exit operator"),". "),(0,a.kt)("h3",{id:"language"},"Language"),(0,a.kt)("p",null,"The interrupt operator syntax is described by the ",(0,a.kt)("a",{parentName:"p",href:"/BREAK_operator"},(0,a.kt)("inlineCode",{parentName:"a"},"BREAK")," operator"),". "),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"testBreak ()  {\n    FOR iterate(INTEGER i, 1, 100) DO {\n        IF i == 50 THEN BREAK; // will only come up to 50\n    }\n}\n")))}s.isMDXComponent=!0}}]);