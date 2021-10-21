(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[62628],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(n),m=o,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},54374:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return f}});var r=n(74034),o=n(79973),a=(n(67294),n(3905)),i=["components"],l={title:"Exit (RETURN)"},c=void 0,p={unversionedId:"Exit_RETURN",id:"Exit_RETURN",isDocsHomePage:!1,title:"Exit (RETURN)",description:"The exit operator creates an action that exits from the inmost action call. Control is passed to the first action following that call operator.",source:"@site/docs/Exit_RETURN.md",sourceDirName:".",slug:"/Exit_RETURN",permalink:"/next/Exit_RETURN",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Exit_RETURN.md",tags:[],version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Exit (RETURN)"},sidebar:"learn",previous:{title:"Interruption (BREAK)",permalink:"/next/Interruption_BREAK"},next:{title:"New threads (NEWTHREAD, NEWEXECUTOR)",permalink:"/next/New_threads_NEWTHREAD_NEWEXECUTOR"}},s=[{value:"Language",id:"language",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],u={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"exit operator")," creates an ",(0,a.kt)("a",{parentName:"p",href:"/next/Actions"},"action")," that exits from the inmost ",(0,a.kt)("a",{parentName:"p",href:"/next/Call_EXEC"},"action call"),". Control is passed to the first action following that call operator."),(0,a.kt)("h3",{id:"language"},"Language"),(0,a.kt)("p",null,"The syntax of the exit operator is described by the ",(0,a.kt)("a",{parentName:"p",href:"/next/RETURN_operator"},(0,a.kt)("inlineCode",{parentName:"a"},"RETURN")," operator"),". "),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"importFile  {\n    LOCAL file = FILE ();\n    INPUT f = FILE DO {\n        file () <- f;\n    }\n\n    IF NOT file() THEN RETURN;\n}\n")))}f.isMDXComponent=!0}}]);