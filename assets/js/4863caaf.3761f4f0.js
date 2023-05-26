"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[6275],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,p(p({ref:t},c),{},{components:r})):n.createElement(d,p({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},95805:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return l}});var n=r(83117),a=(r(67294),r(3905));const o={title:"Properties"},p=void 0,i={unversionedId:"Properties",id:"version-v5/Properties",title:"Properties",description:"A property is an element of the system that takes a set of objects (parameters) and returns exactly one object (the return value).",source:"@site/versioned_docs/version-v5/Properties.md",sourceDirName:".",slug:"/Properties",permalink:"/Properties",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/Properties.md",tags:[],version:"v5",lastUpdatedAt:1685108136,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{title:"Properties"},sidebar:"learn",previous:{title:"Domain logic",permalink:"/Domain_logic"},next:{title:"Operators",permalink:"/Property_operators_paradigm"}},s={},l=[{value:"Type constraint",id:"type",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A ",(0,a.kt)("em",{parentName:"p"},"property")," is an element of the system that takes a set of objects (",(0,a.kt)("em",{parentName:"p"},"parameters"),") and returns exactly one object (the ",(0,a.kt)("em",{parentName:"p"},"return value"),"). "),(0,a.kt)("p",null,"The type and the specifics of how to calculate each property are determined by the ",(0,a.kt)("a",{parentName:"p",href:"/Property_operators_paradigm"},"operator")," used to create the property."),(0,a.kt)("h3",{id:"type"},"Type constraint"),(0,a.kt)("p",null,"Due to implementation features, all non-",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," property values returned must be of the same type. That is, a property cannot return, for example, a string for one set of parameters and a number for another."),(0,a.kt)("p",null,"The same constraint exists for each property parameter: a property cannot have a non-",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," value for an object collection in which, for example, the first parameter is a string, and at the same time have a non-",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," value for another object collection, in which the first parameter is an object."),(0,a.kt)("h3",{id:"language"},"Language"),(0,a.kt)("p",null,"To create properties, use the ",(0,a.kt)("a",{parentName:"p",href:"/=_statement"},(0,a.kt)("inlineCode",{parentName:"a"},"=")," statement"),". "),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"// property defined by the context-independent DATA property operator\ncost 'Cost' (i) = DATA NUMERIC[12,3] (Item);\n\n// property defined by expression\nweightedSum 'Weighted amount' (a, b) = 2*a + 3*b;\n\n// the caption of this property will be 'diff' and the parameters will be (a, b)\ndiff = a - b;\n\n// property defined by DATA operator with additional property options\nteamName 'Team name' = DATA BPSTRING[30](Team) IN baseGroup TABLE team; \n")))}u.isMDXComponent=!0}}]);