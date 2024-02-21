"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[86533],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30231:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return l}});var r=n(83117),o=(n(67294),n(3905));const a={title:"IF ... THEN operator"},i=void 0,p={unversionedId:"IF_..._THEN_action_operator",id:"IF_..._THEN_action_operator",title:"IF ... THEN operator",description:"The IF ... THEN operator creates an action that implements branching with one condition (single form).",source:"@site/docs/IF_..._THEN_action_operator.md",sourceDirName:".",slug:"/IF_..._THEN_action_operator",permalink:"/next/IF_..._THEN_action_operator",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/IF_..._THEN_action_operator.md",tags:[],version:"current",lastUpdatedAt:1708525070,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"IF ... THEN operator"},sidebar:"learn",previous:{title:"FOR operator",permalink:"/next/FOR_operator"},next:{title:"IMPORT operator",permalink:"/next/IMPORT_operator"}},c={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}],s={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"IF ... THEN")," operator creates an ",(0,o.kt)("a",{parentName:"p",href:"/next/Actions"},"action")," that implements ",(0,o.kt)("a",{parentName:"p",href:"/next/Branching_CASE_IF_MULTI#single"},"branching")," with one condition (single form)."),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"IF condition \nTHEN action\n[ELSE alternativeAction]\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"IF ... THEN")," operator creates an action that implements branching with one condition. When this action is executed, the condition is checked and, if the condition is met, the action specified after the keyword ",(0,o.kt)("inlineCode",{parentName:"p"},"THEN")," is called. There is also the option of specifying an alternative action with the keyword ",(0,o.kt)("inlineCode",{parentName:"p"},"ELSE"),", which is called if the condition is not met."),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"condition")),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("a",{parentName:"p",href:"/next/Expression"},"Expression")," defining a condition. If the value of the expression does not equal ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL"),", then the condition is met and the action specified after the keyword ",(0,o.kt)("inlineCode",{parentName:"p"},"THEN")," is called.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"action")),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("a",{parentName:"p",href:"/next/Action_operators#contextdependent"},"Context-dependent operator")," that describes the action that will be executed when the corresponding condition is met.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"alternativeAction")),(0,o.kt)("p",{parentName:"li"},"  Context-dependent operator that describes an action that will be executed if the condition is not met."))),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"// Action that compares the value of the count property to 3 and displays a message to the user\nmoreThan3(obj)  {\n    IF count(obj) > 3 THEN\n        MESSAGE '>3';\n    ELSE\n        MESSAGE '<=3';\n}\n\ncheckNullName (Store st) {\n    IF NOT name(st) THEN\n        MESSAGE 'Name is null';\n}\n")))}u.isMDXComponent=!0}}]);