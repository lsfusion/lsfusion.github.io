"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[98252],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=u(r),m=a,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||o;return r?n.createElement(d,s(s({ref:t},c),{},{components:r})):n.createElement(d,s({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},58081:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return u}});var n=r(83117),a=(r(67294),r(3905));const o={title:"Custom formula (FORMULA)"},s=void 0,i={unversionedId:"Custom_formula_FORMULA",id:"version-v4/Custom_formula_FORMULA",title:"Custom formula (FORMULA)",description:"The custom formula operator allows you to create a property that calculates defined formula in SQL. You can specify different implementations of the formula for different SQL servers. The formula is defined as a string, within which the special character $ and the number of this parameter (starting from 1) are used to access the parameter. Accordingly, the number of parameters of the result property will be equal to the greatest of the numbers of the parameters used.",source:"@site/versioned_docs/version-v4/Custom_formula_FORMULA.md",sourceDirName:".",slug:"/Custom_formula_FORMULA",permalink:"/v4/Custom_formula_FORMULA",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Custom_formula_FORMULA.md",tags:[],version:"v4",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"Jul 7, 2021",frontMatter:{title:"Custom formula (FORMULA)"},sidebar:"version-v4/learn",previous:{title:"Internal call (INTERNAL)",permalink:"/v4/Internal_call_INTERNAL"},next:{title:"Eval (EVAL)",permalink:"/v4/Eval_EVAL"}},l={},u=[{value:"Determining the result class",id:"determining-the-result-class",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"custom formula")," operator allows you to create a ",(0,a.kt)("a",{parentName:"p",href:"/v4/Properties"},"property")," that calculates defined formula in SQL. You can specify different implementations of the formula for different SQL servers. The formula is defined as a string, within which the special character ",(0,a.kt)("inlineCode",{parentName:"p"},"$")," and the number of this parameter (starting from ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),") are used to access the parameter. Accordingly, the number of parameters of the result property will be equal to the greatest of the numbers of the parameters used. "),(0,a.kt)("p",null,"Using this operator is recommended only if the task cannot be accomplished using other operators, and only if it is known for certain which specific SQL servers can be used, or if the syntax constructs used comply with one of the latest SQL standards."),(0,a.kt)("h3",{id:"determining-the-result-class"},"Determining the result class"),(0,a.kt)("p",null,"By default, the result class of the custom operator is a ",(0,a.kt)("a",{parentName:"p",href:"/v4/Built-in_classes#commonparentclass"},"common ancestor")," of all its operands. If necessary, the developer can specify this class explicitly."),(0,a.kt)("h3",{id:"language"},"Language"),(0,a.kt)("p",null,"To declare a property using a custom formula, use the ",(0,a.kt)("a",{parentName:"p",href:"/v4/FORMULA_operator"},(0,a.kt)("inlineCode",{parentName:"a"},"FORMULA")," operator"),"."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"// a property with two parameters: a rounded number and the number of decimal places\nround(number, digits) = FORMULA 'round(CAST(($1) as numeric),$2)';\n  \n// a property that converts the value passed as an argument to a 15-character string.\ntoString15(str) = FORMULA BPSTRING[15] 'CAST($1 AS character(15))';\n   \n// a property with two different implementations for different SQL dialects\njumpWorkdays = FORMULA NULL DATE PG 'jumpWorkdays($1, $2, $3)', MS 'dbo.jumpWorkdays($1, $2, $3)'; \n")))}p.isMDXComponent=!0}}]);