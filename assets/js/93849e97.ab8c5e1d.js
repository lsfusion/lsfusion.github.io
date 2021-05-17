(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[34084],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},74474:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return s}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={title:"ACTION instruction",sidebar_label:"Overview"},p={unversionedId:"ACTION_instruction",id:"ACTION_instruction",isDocsHomePage:!1,title:"ACTION instruction",description:"The ACTION instruction\xa0creates an\xa0action.",source:"@site/docs/ACTION_instruction.md",sourceDirName:".",slug:"/ACTION_instruction",permalink:"/next/ACTION_instruction",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/ACTION_instruction.md",version:"current",lastUpdatedAt:1617721389,formattedLastUpdatedAt:"4/6/2021",sidebar_label:"Overview",frontMatter:{title:"ACTION instruction",sidebar_label:"Overview"},sidebar:"learn",previous:{title:"Property options",permalink:"/next/Property_options"},next:{title:"Action operator",permalink:"/next/Action_operator"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"ACTION")," instruction\xa0creates an\xa0",(0,o.kt)("a",{parentName:"p",href:"/next/Actions"},"action"),"."),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[ACTION] name [caption] [(param1, ..., paramN)] { operator } [options];\n[ACTION] name [caption] [(param1, ..., paramN)] contextIndependentOperator [options];\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"ACTION\xa0"),"instruction declares a new action and adds it to the current\xa0",(0,o.kt)("a",{parentName:"p",href:"/next/Modules"},"module"),"."),(0,o.kt)("p",null,"The instruction has two forms: the first form creates an action using a\xa0",(0,o.kt)("a",{parentName:"p",href:"/next/Action_operator#contextdependent"},"context-dependent"),"\xa0action operator, the second form creates a\xa0",(0,o.kt)("a",{parentName:"p",href:"/next/Property_operators#contextindependent"},"context-independent")," one."),(0,o.kt)("p",null,"Also, when declaring an action, a set of its options can be specified. \xa0\xa0"),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"name\xa0")),(0,o.kt)("p",null,"Action name.\xa0",(0,o.kt)("a",{parentName:"p",href:"/next/IDs#id-broken"},"Simple ID"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"caption")),(0,o.kt)("p",null,"Action caption.\xa0",(0,o.kt)("a",{parentName:"p",href:"/next/Literals#strliteral-broken"},"String literal"),". If no caption is defined, the action name will be its caption. \xa0"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"param1, ..., paramN")),(0,o.kt)("p",null,"List of parameters. Each of them is defined by a\xa0",(0,o.kt)("a",{parentName:"p",href:"/next/IDs#paramid-broken"},"typed parameter"),"\xa0These parameters can be later used in the action operator describing the action being created (as well as in some options)."),(0,o.kt)("p",null,"If parameters are not defined explicitly, they will be automatically calculated when the operator is processed. The order of the parameters will match the order of their appearance in the operator. It is recommended to explicitly define action parameters. This will help find typos and other errors in the declaration (for example, a mismatch of the number of defined parameters with the number of parameters of the created action)."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"operator")),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"/next/Action_operator#contextdependent"},"context-dependent"),"\xa0action operator describing and creating an action.\xa0You can use the parameters defined in this instruction (if any) as operator parameters."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"contextIndependentOperator")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/next/Action_operator#contextindependent"},"context-independent"),"\xa0action operator describing and creating an action.\xa0"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"options")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/next/Action_options"},"Action options")," .\xa0"),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"showMessage  { MESSAGE 'Hello World!'; }                                // action declaration\nloadImage 'Upload image'  ABSTRACT ( Item);\n")))}s.isMDXComponent=!0}}]);