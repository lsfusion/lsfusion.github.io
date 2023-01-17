"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[66667],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,v=f["".concat(s,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(v,i(i({ref:t},c),{},{components:r})):n.createElement(v,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},34785:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return l}});var n=r(83117),o=(r(67294),r(3905));const a={title:"Type conversion operator"},i=void 0,p={unversionedId:"Type_conversion_operator",id:"version-v4/Type_conversion_operator",title:"Type conversion operator",description:"The type conversion operator creates a property that performs type conversion.",source:"@site/versioned_docs/version-v4/Type_conversion_operator.md",sourceDirName:".",slug:"/Type_conversion_operator",permalink:"/v4/Type_conversion_operator",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Type_conversion_operator.md",tags:[],version:"v4",lastUpdatedAt:1619434733,formattedLastUpdatedAt:"Apr 26, 2021",frontMatter:{title:"Type conversion operator"},sidebar:"version-v4/learn",previous:{title:"Object group operator",permalink:"/v4/Object_group_operator"},next:{title:"AND, OR, NOT, XOR operators",permalink:"/v4/AND_OR_NOT_XOR_operators"}},s={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The type conversion operator creates a ",(0,o.kt)("a",{parentName:"p",href:"/v4/Properties"},"property")," that performs ",(0,o.kt)("a",{parentName:"p",href:"/v4/Type_conversion"},"type conversion"),"."),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"typeName(expression) \n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The operator creates a property that converts the value of a certain expression into a value of a specified ",(0,o.kt)("a",{parentName:"p",href:"/v4/Built-in_classes"},"built-in class"),". If conversion is impossible, the value of the property will be ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"typeName")),(0,o.kt)("p",{parentName:"li"},"  The name of the ",(0,o.kt)("a",{parentName:"p",href:"/v4/Built-in_classes"},"built-in class")," that the values will be converted into.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"expression")),(0,o.kt)("p",{parentName:"li"},"  The ",(0,o.kt)("a",{parentName:"p",href:"/v4/Expression"},"expression")," whose value will be converted into the value of the specified built-in class."))),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"itemCount = DATA INTEGER (Store);\nitemCountToString(s) = BPSTRING[10](itemCount(s));\n\nbarcode = DATA STRING[15] (Item);\nlongBarcode(Item i) = LONG(barcode(i));\n")))}u.isMDXComponent=!0}}]);