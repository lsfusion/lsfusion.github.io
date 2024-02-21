"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[10512],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64672:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return l}});var r=n(83117),a=(n(67294),n(3905));const o={title:"EVAL operator"},i=void 0,p={unversionedId:"EVAL_operator",id:"version-v4/EVAL_operator",title:"EVAL operator",description:"The EVAL operator: creating an action that executes code in the lsFusion language.",source:"@site/versioned_docs/version-v4/EVAL_operator.md",sourceDirName:".",slug:"/EVAL_operator",permalink:"/v4/EVAL_operator",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/EVAL_operator.md",tags:[],version:"v4",lastUpdatedAt:1708525070,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"EVAL operator"},sidebar:"learn",previous:{title:"EMAIL operator",permalink:"/v4/EMAIL_operator"},next:{title:"EXEC operator",permalink:"/v4/EXEC_operator"}},s={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"EVAL")," operator: creating an ",(0,a.kt)("a",{parentName:"p",href:"/v4/Actions"},"action")," that ",(0,a.kt)("a",{parentName:"p",href:"/v4/Eval_EVAL"},"executes code")," in the ",(0,a.kt)("strong",{parentName:"p"},"lsFusion")," language."),(0,a.kt)("h3",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"EVAL [ACTION] expression [PARAMS paramExpr1, ..., paramExprN]\n")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"EVAL")," operator is designed to execute program code while the server is running. The operator takes as its argument a string containing source code. This string can be a simple string ",(0,a.kt)("a",{parentName:"p",href:"/v4/Constant"},"constant")," or a more complex ",(0,a.kt)("a",{parentName:"p",href:"/v4/Expression"},"expression")," that evaluates to a string."),(0,a.kt)("p",null,"The code that is passed should consist of a sequence of ",(0,a.kt)("a",{parentName:"p",href:"/v4/Statements"},"statements")," (or ",(0,a.kt)("a",{parentName:"p",href:"/v4/Action_operators_paradigm"},"action operators")," and local property declarations, if the ",(0,a.kt)("inlineCode",{parentName:"p"},"ACTION")," option is specified). When the action is executed, this code is inserted into a ",(0,a.kt)("a",{parentName:"p",href:"/v4/Modules"},"module")," with a unique name. The module header is generated by the system: it declares a unique name for the module and lists all the modules that are in the project in the ",(0,a.kt)("a",{parentName:"p",href:"/v4/Module_header"},(0,a.kt)("inlineCode",{parentName:"a"},"REQUIRE")," statement"),". Thus, you can use all ",(0,a.kt)("a",{parentName:"p",href:"/v4/Element_identification"},"elements")," from other modules in the code passed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"EVAL")," operator. If the ",(0,a.kt)("inlineCode",{parentName:"p"},"ACTION")," option is not specified, it is assumed that one of the passed statements will be the creation of action with the name ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," (it is this action that will be executed)."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"expression")),(0,a.kt)("p",{parentName:"li"},"  An ",(0,a.kt)("a",{parentName:"p",href:"/v4/Expression"},"expression")," whose value is the string to be executed.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"ACTION")),(0,a.kt)("p",{parentName:"li"},"  Keyword.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"paramExpr1, ..., paramExprN")),(0,a.kt)("p",{parentName:"li"},"  A list of expressions whose values will be passed to the action being executed as arguments. The number of expressions must be equal to the number of parameters of the action being executed."))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"// source code consisting of one statement is specified with a string constant\naddProperty  { EVAL ACTION 'MESSAGE \\'Hello World\\''; }  \n\n// a property to which the user can enter the source code\ncode 'Source code' = DATA BPSTRING[2000] ();\n\n// the action executing this code              \nexecute 'Execute code'  { EVAL code(); }\n")))}u.isMDXComponent=!0}}]);