"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[94641],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56843:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var a=n(83117),r=(n(67294),n(3905));const o={title:"ACTION statement"},i=void 0,p={unversionedId:"ACTION_statement",id:"ACTION_statement",title:"ACTION statement",description:"The ACTION statement creates an action.",source:"@site/docs/ACTION_statement.md",sourceDirName:".",slug:"/ACTION_statement",permalink:"/next/ACTION_statement",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/ACTION_statement.md",tags:[],version:"current",lastUpdatedAt:1708525070,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"ACTION statement"},sidebar:"learn",previous:{title:"Property options",permalink:"/next/Property_options"},next:{title:"Action operators",permalink:"/next/Action_operators"}},l={},c=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}],s={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ACTION")," statement creates an ",(0,r.kt)("a",{parentName:"p",href:"/next/Actions"},"action"),"."),(0,r.kt)("h3",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[ACTION] name [caption] [(param1, ..., paramN)] { operator } [options];\n[ACTION] name [caption] [(param1, ..., paramN)] contextIndependentOperator [options];\n")),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ACTION")," statement declares a new action and adds it to the current ",(0,r.kt)("a",{parentName:"p",href:"/next/Modules"},"module"),"."),(0,r.kt)("p",null,"The statement has two forms: the first form creates an action using a ",(0,r.kt)("a",{parentName:"p",href:"/next/Action_operators#contextdependent"},"context-dependent")," action operator, the second form creates a ",(0,r.kt)("a",{parentName:"p",href:"/next/Property_operators#contextindependent"},"context-independent")," one."),(0,r.kt)("p",null,"Also, when declaring an action, a set of its options can be specified.   "),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"name")),(0,r.kt)("p",{parentName:"li"},"  Action name. ",(0,r.kt)("a",{parentName:"p",href:"/next/IDs#id"},"Simple ID"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"caption")),(0,r.kt)("p",{parentName:"li"},"  Action caption. ",(0,r.kt)("a",{parentName:"p",href:"/next/Literals#strliteral"},"String literal"),". If no caption is defined, the action name will be its caption.  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"param1, ..., paramN")),(0,r.kt)("p",{parentName:"li"},"  List of parameters. Each of them is defined by a ",(0,r.kt)("a",{parentName:"p",href:"/next/IDs#paramid"},"typed parameter")," These parameters can be later used in the action operator describing the action being created (as well as in some options)."),(0,r.kt)("p",{parentName:"li"},"  If parameters are not defined explicitly, they will be automatically calculated when the operator is processed. The order of the parameters will match the order of their appearance in the operator. It is recommended to explicitly define action parameters. This will help find typos and other errors in the declaration (for example, a mismatch of the number of defined parameters with the number of parameters of the created action).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"operator")),(0,r.kt)("p",{parentName:"li"},"  A ",(0,r.kt)("a",{parentName:"p",href:"/next/Action_operators#contextdependent"},"context-dependent")," action operator describing and creating an action. You can use the parameters defined in this statement (if any) as operator parameters.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"contextIndependentOperator")),(0,r.kt)("p",{parentName:"li"},"  The ",(0,r.kt)("a",{parentName:"p",href:"/next/Action_operators#contextindependent"},"context-independent")," action operator describing and creating an action. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"options")),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("a",{parentName:"p",href:"/next/Action_options"},"Action options"),". "))),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"showMessage  { MESSAGE 'Hello World!'; }                                // action declaration\nloadImage 'Upload image'  ABSTRACT ( Item);\n")))}m.isMDXComponent=!0}}]);