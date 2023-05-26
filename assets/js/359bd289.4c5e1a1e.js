"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[20923],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},O=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),O=l(r),f=o,m=O["".concat(s,".").concat(f)]||O[f]||u[f]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=O;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}O.displayName="MDXCreateElement"},3459:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return l}});var n=r(83117),o=(r(67294),r(3905));const a={title:"AND, OR, NOT, XOR operators"},i=void 0,p={unversionedId:"AND_OR_NOT_XOR_operators",id:"version-v5/AND_OR_NOT_XOR_operators",title:"AND, OR, NOT, XOR operators",description:"AND, OR, NOT, XOR operators that create properties that implement logical operations.",source:"@site/versioned_docs/version-v5/AND_OR_NOT_XOR_operators.md",sourceDirName:".",slug:"/AND_OR_NOT_XOR_operators",permalink:"/AND_OR_NOT_XOR_operators",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/AND_OR_NOT_XOR_operators.md",tags:[],version:"v5",lastUpdatedAt:1685108136,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{title:"AND, OR, NOT, XOR operators"},sidebar:"learn",previous:{title:"Type conversion operator",permalink:"/Type_conversion_operator"},next:{title:"IS, AS operators",permalink:"/IS_AS_operators"}},s={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"AND"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"OR"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"NOT"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"XOR")," operators that create ",(0,o.kt)("a",{parentName:"p",href:"/Properties"},"properties")," that implement ",(0,o.kt)("a",{parentName:"p",href:"/Logical_operators_AND_OR_NOT_XOR"},"logical operations"),"."),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"expression1 AND expression2\nexpression1 OR expression2\nexpression1 XOR expression2\nNOT expression1\n")),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"expression1, expression2")),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("a",{parentName:"p",href:"/Expression"},"Expressions")," whose values will be the operator arguments. Expression values are considered to be ",(0,o.kt)("inlineCode",{parentName:"p"},"BOOLEAN")," class values depending on whether they are ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL")," or not."))),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"likes = DATA BOOLEAN (Person, Person);\nlikes(Person a, Person b, Person c) = likes(a, b) AND likes(a, c);\noutOfInterval1(value, left, right) = value < left OR value > right;\noutOfInterval2(value, left, right) = NOT (value >= left AND value <= right);\n")))}u.isMDXComponent=!0}}]);