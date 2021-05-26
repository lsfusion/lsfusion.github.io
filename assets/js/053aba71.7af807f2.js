(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[654],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(r),f=o,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(d,p(p({ref:t},s),{},{components:r})):n.createElement(d,p({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var c=2;c<a;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},77314:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return i},toc:function(){return l},default:function(){return s}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),p={title:"OVERRIDE operator"},i={unversionedId:"OVERRIDE_operator",id:"OVERRIDE_operator",isDocsHomePage:!1,title:"OVERRIDE operator",description:"The OVERRIDE\xa0operator creates a\xa0property that implements\xa0the selection\xa0of one of the values\xa0(polymorphic form).",source:"@site/docs/OVERRIDE_operator.md",sourceDirName:".",slug:"/OVERRIDE_operator",permalink:"/next/OVERRIDE_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/OVERRIDE_operator.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",frontMatter:{title:"OVERRIDE operator"},sidebar:"learn",previous:{title:"MULTI operator",permalink:"/next/MULTI_operator"},next:{title:"PARTITION operator",permalink:"/next/PARTITION_operator"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:l};function s(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"OVERRIDE"),"\xa0operator creates a\xa0",(0,a.kt)("a",{parentName:"p",href:"/next/Properties"},"property")," that implements\xa0the ",(0,a.kt)("a",{parentName:"p",href:"/next/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_#exclusive"},"selection"),"\xa0of one of the values\xa0(polymorphic form)."),(0,a.kt)("h3",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"OVERRIDE expr1, ..., exprN\n")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"OVERRIDE"),"\xa0operator creates a property whose value will be the value of one of the properties specified in the operator. Selection is made among properties with a non-",(0,a.kt)("strong",{parentName:"p"},"NULL")," value. If multiple properties are non-",(0,a.kt)("strong",{parentName:"p"},"NULL"),", the value of the first of these properties is selected."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"expr1, ..., exprN")),(0,a.kt)("p",null,"List of ",(0,a.kt)("a",{parentName:"p",href:"/next/Expression"},"expressions")," whose values will determine the value of the property."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Group;\nmarkup = DATA NUMERIC[8,2] (Group);\n\nmarkup = DATA NUMERIC[8,2] (Book);\ngroup = DATA Group (Book);\noverMarkup (Book b) = OVERRIDE markup(b), markup(group(b));\n\nnotNullDate (INTEGER i) = OVERRIDE date(i), 2010_01_01;\n")))}s.isMDXComponent=!0}}]);