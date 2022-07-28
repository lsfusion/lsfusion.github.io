"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[79292],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},31582:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return u}});var r=n(83117),a=(n(67294),n(3905));const o={title:"Comparison operators (=, >, <, ...)"},l=void 0,i={unversionedId:"Comparison_operators_=_etc",id:"Comparison_operators_=_etc",title:"Comparison operators (=, >, <, ...)",description:"Comparison operators create actions which return the result of the comparison operation. The values of the created properties belong to the built-in class BOOLEAN.",source:"@site/docs/Comparison_operators_=_etc.md",sourceDirName:".",slug:"/Comparison_operators_=_etc",permalink:"/next/Comparison_operators_=_etc",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Comparison_operators_=_etc.md",tags:[],version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Comparison operators (=, >, <, ...)"},sidebar:"learn",previous:{title:"Logical operators (AND, OR, NOT, XOR)",permalink:"/next/Logical_operators_AND_OR_NOT_XOR"},next:{title:"Extremum (MAX, MIN)",permalink:"/next/Extremum_MAX_MIN"}},p={},u=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}],s={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Comparison operators")," create ",(0,a.kt)("a",{parentName:"p",href:"/next/Properties"},"actions")," which return the result of the comparison operation. The values of the created properties belong to the ",(0,a.kt)("a",{parentName:"p",href:"/next/Built-in_classes"},"built-in class")," ",(0,a.kt)("inlineCode",{parentName:"p"},"BOOLEAN"),"."),(0,a.kt)("p",null,"The platform currently supports the following comparison operators:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Operator"),(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Example"),(0,a.kt)("th",{parentName:"tr",align:null},"Result"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"=")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"==")),(0,a.kt)("td",{parentName:"tr",align:null},"Equality"),(0,a.kt)("td",{parentName:"tr",align:null},"Takes two operands and returns ",(0,a.kt)("inlineCode",{parentName:"td"},"TRUE")," if the operands are equal"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"5 = 5")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"5 == 5")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"TRUE"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"!=")),(0,a.kt)("td",{parentName:"tr",align:null},"Inequality"),(0,a.kt)("td",{parentName:"tr",align:null},"Accepts two operands and returns ",(0,a.kt)("inlineCode",{parentName:"td"},"TRUE")," if the operands are not equal"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"3 != 5")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"TRUE"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},">"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"<")),(0,a.kt)("td",{parentName:"tr",align:null},"Strict comparison"),(0,a.kt)("td",{parentName:"tr",align:null},"Accepts two operands and returns ",(0,a.kt)("inlineCode",{parentName:"td"},"TRUE")," if the strict comparison condition is met"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"3 > 5")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"NULL"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},">="),", ",(0,a.kt)("inlineCode",{parentName:"td"},"<=")),(0,a.kt)("td",{parentName:"tr",align:null},"Non-strict comparison"),(0,a.kt)("td",{parentName:"tr",align:null},"Accepts two operands and returns ",(0,a.kt)("inlineCode",{parentName:"td"},"TRUE")," if the non-strict comparison condition is met"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"4 <= 5")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"TRUE"))))),(0,a.kt)("p",null,"If one of the operands is ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),", all operators will return ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," as a result."),(0,a.kt)("h3",{id:"language"},"Language"),(0,a.kt)("p",null,"Description of ",(0,a.kt)("a",{parentName:"p",href:"/next/Comparison_operators"},"comparison operators"),"."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"equalBarcodes = barcode(a) == barcode(b);\noutOfIntervalValue1(value, left, right) = value < left OR value > right;\noutOfIntervalValue2(value, left, right) = NOT (value >= left AND value <= right);\n")))}m.isMDXComponent=!0}}]);