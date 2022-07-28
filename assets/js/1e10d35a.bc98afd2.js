"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[81958],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=l(r),d=a,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},46376:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return l}});var n=r(83117),a=(r(67294),r(3905));const o={title:"Data properties (DATA)"},i=void 0,p={unversionedId:"Data_properties_DATA",id:"version-v4/Data_properties_DATA",title:"Data properties (DATA)",description:"Data property is a property which value is stored in the database and may change through the execution of the corresponding action. Each parameter and the value of a data property must belong to a certain specified class. If a parameter does not belong to the specified class or is NULL, then the property value will return NULL.",source:"@site/versioned_docs/version-v4/Data_properties_DATA.md",sourceDirName:".",slug:"/Data_properties_DATA",permalink:"/Data_properties_DATA",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Data_properties_DATA.md",tags:[],version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Data properties (DATA)"},sidebar:"version-v4/learn",previous:{title:"Operators",permalink:"/Property_operators_paradigm"},next:{title:"Composition (JOIN)",permalink:"/Composition_JOIN"}},s={},l=[{value:"Local data properties",id:"local",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Data property")," is a ",(0,a.kt)("a",{parentName:"p",href:"/Properties"},"property")," which value is stored in the database and may change through the execution of the ",(0,a.kt)("a",{parentName:"p",href:"/Property_change_CHANGE"},"corresponding")," action. Each parameter and the value of a data property must belong to a certain specified ",(0,a.kt)("a",{parentName:"p",href:"/Classes"},"class"),". If a parameter does not belong to the specified class or is ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),", then the property value will return ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),". "),(0,a.kt)("h3",{id:"local"},"Local data properties"),(0,a.kt)("p",null,"Data properties can be ",(0,a.kt)("em",{parentName:"p"},"local"),". Such properties retain their values only within the ",(0,a.kt)("a",{parentName:"p",href:"/Change_sessions"},"session"),", i.e. they are not saved to the database, which means when applying changes these values are reset to ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," by default."),(0,a.kt)("h3",{id:"language"},"Language"),(0,a.kt)("p",null,"To declare a primary property, use the ",(0,a.kt)("a",{parentName:"p",href:"/DATA_operator"},(0,a.kt)("inlineCode",{parentName:"a"},"DATA")," operator"),"."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Item;\nquantity = DATA LOCAL INTEGER (Item);\n\nCLASS Country;\nisDayOff = DATA BOOLEAN (Country, DATE);\n")))}u.isMDXComponent=!0}}]);