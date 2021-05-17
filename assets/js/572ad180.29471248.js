(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[44308],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,d=m["".concat(c,".").concat(f)]||m[f]||s[f]||o;return r?n.createElement(d,p(p({ref:t},u),{},{components:r})):n.createElement(d,p({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},47712:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return i},toc:function(){return c},default:function(){return u}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),p={title:"MAX operator"},i={unversionedId:"MAX_operator",id:"MAX_operator",isDocsHomePage:!1,title:"MAX operator",description:"The MAX operator creates a property that implements finding maximum value.",source:"@site/docs/MAX_operator.md",sourceDirName:".",slug:"/MAX_operator",permalink:"/next/MAX_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/MAX_operator.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",frontMatter:{title:"MAX operator"},sidebar:"learn",previous:{title:"JOIN operator",permalink:"/next/JOIN_operator"},next:{title:"MIN operator",permalink:"/next/MIN_operator"}},c=[{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:c};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"MAX")," operator creates a ",(0,o.kt)("a",{parentName:"p",href:"/next/Properties"},"property")," that implements finding ",(0,o.kt)("a",{parentName:"p",href:"/next/Extremum_MAX_MIN_"},"maximum")," value."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Syntax"),"\xa0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MAX expr1, ..., exprN\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"MAX")," operator creates a property that returns the maximum value of the values of the specified properties."),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"expr1, ..., exprN")),(0,o.kt)("p",null,"A list of ",(0,o.kt)("a",{parentName:"p",href:"/next/Expression"},"expressions")," of which values the maximum is selected."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"date1 = DATA DATE(INTEGER);\ndate2 = DATA DATE(INTEGER);\nmaxDate (INTEGER i) = MAX date1(i), date2(i);\n\nbalance = DATA INTEGER (Item);\noutcome 'Balance (non-negative)' (Item i) = MAX balance(i), 0;\n")))}u.isMDXComponent=!0}}]);