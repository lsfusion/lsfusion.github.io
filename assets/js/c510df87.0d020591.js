(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[14148],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(r),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},18680:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return l}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i={title:"Type conversion operator"},p={unversionedId:"Type_conversion_operator",id:"Type_conversion_operator",isDocsHomePage:!1,title:"Type conversion operator",description:"The type conversion operator creates a property that performs type conversion.",source:"@site/docs/Type_conversion_operator.md",sourceDirName:".",slug:"/Type_conversion_operator",permalink:"/next/Type_conversion_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Type_conversion_operator.md",version:"current",lastUpdatedAt:1622042248,formattedLastUpdatedAt:"5/26/2021",frontMatter:{title:"Type conversion operator"},sidebar:"learn",previous:{title:"Object group operator",permalink:"/next/Object_group_operator"},next:{title:"AND, OR, NOT, XOR operators",permalink:"/next/AND_OR_NOT_XOR_operators"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:c};function l(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The type conversion operator creates a ",(0,a.kt)("a",{parentName:"p",href:"/next/Properties"},"property")," that performs ",(0,a.kt)("a",{parentName:"p",href:"/next/Type_conversion"},"type conversion"),"."),(0,a.kt)("h3",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"typeName(expression) \n")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The operator creates a property that converts the value of a certain expression into a value of a specified ",(0,a.kt)("a",{parentName:"p",href:"/next/Built-in_classes"},"built-in class"),". If conversion is impossible, the value of the property will be ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"typeName")),(0,a.kt)("p",{parentName:"li"},"  The name of the ",(0,a.kt)("a",{parentName:"p",href:"/next/Built-in_classes"},"built-in class")," that the values will be converted into.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"expression")),(0,a.kt)("p",{parentName:"li"},"  The ",(0,a.kt)("a",{parentName:"p",href:"/next/Expression"},"expression")," whose value will be converted into the value of the specified built-in class."))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"itemCount = DATA INTEGER (Store);\nitemCountToString(s) = BPSTRING[10](itemCount(s));\n\nbarcode = DATA STRING[15] (Item);\nlongBarcode(Item i) = LONG(barcode(i));\n")))}l.isMDXComponent=!0}}]);