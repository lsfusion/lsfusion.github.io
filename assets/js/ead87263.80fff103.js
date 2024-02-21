"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[87108],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},66004:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var n=r(83117),o=(r(67294),r(3905));const a={title:"Exit (RETURN)"},i=void 0,l={unversionedId:"Exit_RETURN",id:"version-v4/Exit_RETURN",title:"Exit (RETURN)",description:"The exit operator creates an action that exits from the inmost action call. Control is passed to the first action following that call operator.",source:"@site/versioned_docs/version-v4/Exit_RETURN.md",sourceDirName:".",slug:"/Exit_RETURN",permalink:"/v4/Exit_RETURN",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Exit_RETURN.md",tags:[],version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"Jun 9, 2021",frontMatter:{title:"Exit (RETURN)"},sidebar:"learn",previous:{title:"Interruption (BREAK)",permalink:"/v4/Interruption_BREAK"},next:{title:"New threads (NEWTHREAD, NEWEXECUTOR)",permalink:"/v4/New_threads_NEWTHREAD_NEWEXECUTOR"}},c={},p=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"exit operator")," creates an ",(0,o.kt)("a",{parentName:"p",href:"/v4/Actions"},"action")," that exits from the inmost ",(0,o.kt)("a",{parentName:"p",href:"/v4/Call_EXEC"},"action call"),". Control is passed to the first action following that call operator."),(0,o.kt)("h3",{id:"language"},"Language"),(0,o.kt)("p",null,"The syntax of the exit operator is described by the ",(0,o.kt)("a",{parentName:"p",href:"/v4/RETURN_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"RETURN")," operator"),". "),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"importFile  {\n    LOCAL file = FILE ();\n    INPUT f = FILE DO {\n        file () <- f;\n    }\n\n    IF NOT file() THEN RETURN;\n}\n")))}u.isMDXComponent=!0}}]);