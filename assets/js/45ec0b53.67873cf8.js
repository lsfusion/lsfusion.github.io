(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[10425],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75750:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=n(74034),o=n(79973),a=(n(67294),n(3905)),i=["components"],p={title:"IF ... THEN operator"},l=void 0,c={unversionedId:"IF_..._THEN_operator",id:"IF_..._THEN_operator",isDocsHomePage:!1,title:"IF ... THEN operator",description:"The IF ... THEN operator creates a property that implements selection with one condition (single form).",source:"@site/docs/IF_..._THEN_operator.md",sourceDirName:".",slug:"/IF_..._THEN_operator",permalink:"/next/IF_..._THEN_operator",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/IF_..._THEN_operator.md",tags:[],version:"current",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"7/7/2021",frontMatter:{title:"IF ... THEN operator"},sidebar:"learn",previous:{title:"IF operator",permalink:"/next/IF_operator"},next:{title:"JOIN operator",permalink:"/next/JOIN_operator"}},s=[{value:"Syntax",id:"syntax",children:[],level:3},{value:"Description",id:"description",children:[],level:3},{value:"Parameters",id:"parameters",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],u={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"IF ... THEN")," operator creates a ",(0,a.kt)("a",{parentName:"p",href:"/next/Properties"},"property")," that implements ",(0,a.kt)("a",{parentName:"p",href:"/next/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE"},"selection")," with one condition (single form)."),(0,a.kt)("h3",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"IF condition \n    THEN value\n    [ELSE alternativeValue]\n")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"IF ... THEN")," operator creates an action that implements conditional selection. The condition is defined using a property. If this condition is met, that is, the value of the property does not equal ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),", then the value of the created property will be the value of the property specified in the ",(0,a.kt)("inlineCode",{parentName:"p"},"THEN")," block; otherwise, the value will be the value of the property in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ELSE")," block, or ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," if no ",(0,a.kt)("inlineCode",{parentName:"p"},"ELSE")," block was specified."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"condition")),(0,a.kt)("p",{parentName:"li"},"  ",(0,a.kt)("a",{parentName:"p",href:"/next/Expression"},"Expression")," defining a condition. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"value")),(0,a.kt)("p",{parentName:"li"},"  An expression whose value will be the value of the created property if the condition is met.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"alternativeValue")),(0,a.kt)("p",{parentName:"li"},"  An expression whose value will be the value of the created property if the condition is not met."))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"price1 = DATA NUMERIC[10,2] (Book);\nprice2 = DATA NUMERIC[10,2] (Book);\nmaxPrice (Book b) = IF price1(b) > price2(b) THEN price1(b) ELSE price2(b);\n\n// if h is of another class, it will be NULL\nsex (Human h) = IF h IS Male THEN 'Male' ELSE ('Female' IF h IS Female); \n\nisDifferent(a, b) = IF a != b THEN TRUE;\n")))}m.isMDXComponent=!0}}]);