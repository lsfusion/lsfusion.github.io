(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[23019],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8651:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(74034),a=n(79973),o=(n(67294),n(3905)),i=["components"],c={title:"Eval (EVAL)"},s=void 0,l={unversionedId:"Eval_EVAL",id:"Eval_EVAL",isDocsHomePage:!1,title:"Eval (EVAL)",description:"The eval operator creates an action that executes defined program code in the lsFusion language. Program code is defined as a property whose value should belong to the string class. This is implemented using an action which takes a line of code as an argument.",source:"@site/docs/Eval_EVAL.md",sourceDirName:".",slug:"/Eval_EVAL",permalink:"/next/Eval_EVAL",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Eval_EVAL.md",tags:[],version:"current",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"7/7/2021",frontMatter:{title:"Eval (EVAL)"},sidebar:"learn",previous:{title:"Custom formula (FORMULA)",permalink:"/next/Custom_formula_FORMULA"},next:{title:"Migration",permalink:"/next/Migration"}},u=[{value:"Action execution",id:"action-execution",children:[],level:3},{value:"Executable code restrictions",id:"executable-code-restrictions",children:[],level:3},{value:"Language",id:"language",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The eval operator creates an action that executes defined program code in the ",(0,o.kt)("strong",{parentName:"p"},"lsFusion")," language. Program code is defined as a property whose value should belong to the string class. This is implemented using an ",(0,o.kt)("a",{parentName:"p",href:"/next/Actions"},"action")," which takes a line of code as an argument."),(0,o.kt)("p",null,"The code that is passed to an action must be a sequence of ",(0,o.kt)("a",{parentName:"p",href:"/next/Statements"},"statements"),". It is assumed that one of these statements will create an action named ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," (it is this action that will be executed)."),(0,o.kt)("h3",{id:"action-execution"},"Action execution"),(0,o.kt)("p",null,"This operator can also execute a single action (rather than a set of statements): in this case the code should be a sequence of ",(0,o.kt)("a",{parentName:"p",href:"/next/Action_operators_paradigm"},"action operators")," and local property declarations. To refer to the parameters of the action, you can use the special character ",(0,o.kt)("inlineCode",{parentName:"p"},"$")," and the parameter number (starting from ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),")."),(0,o.kt)("h3",{id:"executable-code-restrictions"},"Executable code restrictions"),(0,o.kt)("p",null,"In the current implementation, executable code must not contain statements that modify existing objects in the system. For example, you cannot add ",(0,o.kt)("a",{parentName:"p",href:"/next/Events"},"events")," or ",(0,o.kt)("a",{parentName:"p",href:"/next/Data_properties_DATA"},"data")," and materialized properties, ",(0,o.kt)("a",{parentName:"p",href:"/next/Extensions"},"extend")," existing objects, etc."),(0,o.kt)("h3",{id:"language"},"Language"),(0,o.kt)("p",null,"To declare an action that executes program code, use the ",(0,o.kt)("a",{parentName:"p",href:"/next/EVAL_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"EVAL")," operator"),"."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"// source code consisting of one statement is specified with a string constant\naddProperty  { EVAL ACTION 'MESSAGE \\'Hello World\\''; }  \n\n// a property to which the user can enter the source code\ncode 'Source code' = DATA BPSTRING[2000] ();\n\n// the action executing this code              \nexecute 'Execute code'  { EVAL code(); }\n")))}d.isMDXComponent=!0}}]);