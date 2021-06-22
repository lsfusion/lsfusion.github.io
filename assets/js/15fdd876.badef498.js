(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[52141],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32232:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={title:"Type conversion"},p={unversionedId:"Type_conversion",id:"Type_conversion",isDocsHomePage:!1,title:"Type conversion",description:"The type conversion operator creates a property that converts an object of one built-in class to an object of another built-in class. If type conversion is not possible, the property value will be NULL.",source:"@site/docs/Type_conversion.md",sourceDirName:".",slug:"/Type_conversion",permalink:"/next/Type_conversion",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Type_conversion.md",version:"current",lastUpdatedAt:1622042248,formattedLastUpdatedAt:"5/26/2021",frontMatter:{title:"Type conversion"},sidebar:"learn",previous:{title:"Structure operators (STRUCT, [])",permalink:"/next/Structure_operators_STRUCT"},next:{title:"Class operators",permalink:"/next/Class_operators"}},s=[{value:"String and file types",id:"string-and-file-types",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:s};function c(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"type conversion")," operator creates a ",(0,a.kt)("a",{parentName:"p",href:"/next/Properties"},"property")," that converts an object of one ",(0,a.kt)("a",{parentName:"p",href:"/next/Built-in_classes"},"built-in class")," to an object of another built-in class. If type conversion is not possible, the property value will be ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,a.kt)("h3",{id:"string-and-file-types"},"String and file types"),(0,a.kt)("p",null,"String types can be converted to human-readable file types (",(0,a.kt)("inlineCode",{parentName:"p"},"CSVFILE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"XMLFILE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"JSONFILE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"HTMLFILE"),", etc.), and vice versa - human-readable file types can be converted to string types."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Converting dynamic-type files (",(0,a.kt)("inlineCode",{parentName:"p"},"FILE"),") to strings and vice versa is prohibited in the current implementation, but if necessary this can be done via an intermediate human-readable type - for example, by first converting to ",(0,a.kt)("inlineCode",{parentName:"p"},"CSVFILE"),", and only then to ",(0,a.kt)("inlineCode",{parentName:"p"},"FILE")," (the resulting file ",(0,a.kt)("a",{parentName:"p",href:"/next/Built-in_classes#extension"},"will have the extension")," CSV)"))),(0,a.kt)("h3",{id:"language"},"Language"),(0,a.kt)("p",null,"To implement conversion, the ",(0,a.kt)("a",{parentName:"p",href:"/next/Type_conversion_operator"},"type conversion operator")," is used."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"itemCount = DATA INTEGER (Store);\nitemCountToString(s) = BPSTRING[10](itemCount(s));\n\nbarcode = DATA STRING[15] (Item);\nlongBarcode(Item i) = LONG(barcode(i));\n")))}c.isMDXComponent=!0}}]);