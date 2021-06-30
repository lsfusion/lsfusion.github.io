(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[31265],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,d=m["".concat(l,".").concat(f)]||m[f]||s[f]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},49856:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return s}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i={title:"Extremum (MAX, MIN)"},p=void 0,l={unversionedId:"Extremum_MAX_MIN",id:"Extremum_MAX_MIN",isDocsHomePage:!1,title:"Extremum (MAX, MIN)",description:"The extremum operator creates a property which calculates the maximum or minimum between several specified properties. If the value of any of these properties is NULL, this property is ignored. If the values of all properties are NULL, the result value is also NULL.",source:"@site/docs/Extremum_MAX_MIN.md",sourceDirName:".",slug:"/Extremum_MAX_MIN",permalink:"/next/Extremum_MAX_MIN",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Extremum_MAX_MIN.md",version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Extremum (MAX, MIN)"},sidebar:"learn",previous:{title:"Comparison operators (=, >, <, ...)",permalink:"/next/Comparison_operators_=_etc"},next:{title:"String operators (+, CONCAT, SUBSTRING)",permalink:"/next/String_operators_+_CONCAT_SUBSTRING"}},u=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:u};function s(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"extremum operator")," creates a ",(0,o.kt)("a",{parentName:"p",href:"/next/Properties"},"property")," which calculates the maximum or minimum between several specified properties. If the value of any of these properties is ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL"),", this property is ignored. If the values of all properties are ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL"),", the result value is also ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,o.kt)("h3",{id:"language"},"Language"),(0,o.kt)("p",null,"The maximum property is created using the ",(0,o.kt)("a",{parentName:"p",href:"/next/MAX_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"MAX")," operator"),", the minimum - using the ",(0,o.kt)("a",{parentName:"p",href:"/next/MIN_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"MIN")," operator"),"."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"date1 = DATA DATE(INTEGER);\ndate2 = DATA DATE(INTEGER);\nmaxDate (INTEGER i) = MAX date1(i), date2(i);\n\nbalance = DATA INTEGER (Item);\noutcome 'Balance (non-negative)' (Item i) = MAX balance(i), 0;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"minPrice(Book b) = MIN price1(b), price2(b);\n\ndate (INTEGER i) = DATA DATE (INTEGER);\nminDate (INTEGER i) = MIN date(i), 2001_01_01;\n")))}s.isMDXComponent=!0}}]);