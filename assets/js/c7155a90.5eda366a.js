(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[15289],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(d,s(s({ref:t},c),{},{components:r})):n.createElement(d,s({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},78016:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return l},default:function(){return c}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),s={title:"Custom formula (FORMULA)"},i={unversionedId:"Custom_formula_FORMULA_",id:"Custom_formula_FORMULA_",isDocsHomePage:!1,title:"Custom formula (FORMULA)",description:"The custom formula operator allows you to create a property that calculates defined formula in SQL. You can specify different implementations of the formula for different SQL servers.\xa0The formula is defined as a string, within which the special character $ and the number of this parameter (starting from 1) are used to access the parameter. Accordingly, the number of parameters of the result property will be equal to the greatest of the numbers of the parameters used.",source:"@site/docs/Custom_formula_FORMULA_.md",sourceDirName:".",slug:"/Custom_formula_FORMULA_",permalink:"/next/Custom_formula_FORMULA_",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Custom_formula_FORMULA_.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",frontMatter:{title:"Custom formula (FORMULA)"},sidebar:"learn",previous:{title:"Internal call (INTERNAL)",permalink:"/next/Internal_call_INTERNAL_"},next:{title:"Eval (EVAL)",permalink:"/next/Eval_EVAL_"}},l=[{value:"Determining the result class",id:"determining-the-result-class",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:l};function c(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"custom formula")," operator allows you to create a ",(0,o.kt)("a",{parentName:"p",href:"/next/Properties"},"property")," that calculates defined formula in SQL. You can specify different implementations of the formula for different SQL servers.\xa0The formula is defined as a string, within which the special character $ and the number of this parameter (starting from 1) are used to access the parameter. Accordingly, the number of parameters of the result property will be equal to the greatest of the numbers of the parameters used.\xa0"),(0,o.kt)("p",null,"Using this operator is recommended only if the task cannot be accomplished using other operators, and only if it is known for certain which specific SQL servers can be used, or if the syntax constructs used comply with one of the latest SQL standards."),(0,o.kt)("h3",{id:"determining-the-result-class"},"Determining the result class"),(0,o.kt)("p",null,"By default, the result class of the custom operator is a\xa0",(0,o.kt)("a",{parentName:"p",href:"/next/Built-in_classes#commonparentclass"},"common ancestor"),"\xa0of all its operands. If necessary, the developer can specify this class explicitly."),(0,o.kt)("h3",{id:"language"},"Language"),(0,o.kt)("p",null,"To declare a property using a custom formula, use the ",(0,o.kt)("a",{parentName:"p",href:"/next/FORMULA_operator"},(0,o.kt)("strong",{parentName:"a"},"FORMULA")," operator"),"."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"round(number, digits) = FORMULA 'round(CAST(($1) as numeric),$2)';  // a property with two parameters: a rounded number and the number of decimal places\ntoString15(str) = FORMULA BPSTRING[15] 'CAST($1 AS character(15))';   // a property that converts the value passed as an argument to a 15-character string.\njumpWorkdays = FORMULA NULL DATE PG 'jumpWorkdays($1, $2, $3)', MS 'dbo.jumpWorkdays($1, $2, $3)'; // a property with two different implementations for different SQL dialects\n")))}c.isMDXComponent=!0}}]);