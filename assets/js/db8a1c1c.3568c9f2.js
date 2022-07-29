"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[50233],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},58092:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s}});var n=r(83117),o=(r(67294),r(3905));const a={title:"Recursive loop (WHILE)"},i=void 0,l={unversionedId:"Recursive_loop_WHILE",id:"Recursive_loop_WHILE",title:"Recursive loop (WHILE)",description:"The recursive loop operator is similar to a regular loop operator, with the only difference being that iteration is performed recursively until at a certain point the set of objects collections satisfying the condition becomes empty. As a result, there is no sense in defining alternative actions with this operator.",source:"@site/docs/Recursive_loop_WHILE.md",sourceDirName:".",slug:"/Recursive_loop_WHILE",permalink:"/next/Recursive_loop_WHILE",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Recursive_loop_WHILE.md",tags:[],version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"Jun 9, 2021",frontMatter:{title:"Recursive loop (WHILE)"},sidebar:"learn",previous:{title:"Branching (CASE, IF, MULTI)",permalink:"/next/Branching_CASE_IF_MULTI"},next:{title:"Interruption (BREAK)",permalink:"/next/Interruption_BREAK"}},c={},s=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"recursive loop operator")," is similar to a regular ",(0,o.kt)("a",{parentName:"p",href:"/next/Loop_FOR"},"loop")," operator, with the only difference being that iteration is performed recursively until at a certain point the set of objects collections satisfying the condition becomes empty. As a result, there is no sense in defining ",(0,o.kt)("em",{parentName:"p"},"alternative")," actions with this operator."),(0,o.kt)("h3",{id:"language"},"Language"),(0,o.kt)("p",null,"The syntax of the recursive loop operator is described by the ",(0,o.kt)("a",{parentName:"p",href:"/next/WHILE_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"WHILE")," operator"),"."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"iterateDates (DATE dateFrom, DATE dateTo)  {\n    LOCAL dateCur = DATE();\n\n    dateCur() <- dateFrom;\n    WHILE dateCur() <= dateTo DO {\n        MESSAGE 'I have a date ' + dateCur();\n        dateCur() <- sum(dateCur(), 1);\n    }\n}\n")))}p.isMDXComponent=!0}}]);