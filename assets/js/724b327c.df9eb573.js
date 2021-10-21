(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[86533],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},30231:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(74034),o=n(79973),a=(n(67294),n(3905)),i=["components"],p={title:"IF ... THEN operator"},c=void 0,l={unversionedId:"IF_..._THEN_action_operator",id:"IF_..._THEN_action_operator",isDocsHomePage:!1,title:"IF ... THEN operator",description:"The IF ... THEN operator creates an action that implements branching with one condition (single form).",source:"@site/docs/IF_..._THEN_action_operator.md",sourceDirName:".",slug:"/IF_..._THEN_action_operator",permalink:"/next/IF_..._THEN_action_operator",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/IF_..._THEN_action_operator.md",tags:[],version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"IF ... THEN operator"},sidebar:"learn",previous:{title:"FOR operator",permalink:"/next/FOR_operator"},next:{title:"IMPORT operator",permalink:"/next/IMPORT_operator"}},s=[{value:"Syntax",id:"syntax",children:[],level:3},{value:"Description",id:"description",children:[],level:3},{value:"Parameters",id:"parameters",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],d={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"IF ... THEN")," operator creates an ",(0,a.kt)("a",{parentName:"p",href:"/next/Actions"},"action")," that implements ",(0,a.kt)("a",{parentName:"p",href:"/next/Branching_CASE_IF_MULTI#single"},"branching")," with one condition (single form)."),(0,a.kt)("h3",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"IF condition \nTHEN action\n[ELSE alternativeAction]\n")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"IF ... THEN")," operator creates an action that implements branching with one condition. When this action is executed, the condition is checked and, if the condition is met, the action specified after the keyword ",(0,a.kt)("inlineCode",{parentName:"p"},"THEN")," is called. There is also the option of specifying an alternative action with the keyword ",(0,a.kt)("inlineCode",{parentName:"p"},"ELSE"),", which is called if the condition is not met."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"condition")),(0,a.kt)("p",{parentName:"li"},"  ",(0,a.kt)("a",{parentName:"p",href:"/next/Expression"},"Expression")," defining a condition. If the value of the expression does not equal ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),", then the condition is met and the action specified after the keyword ",(0,a.kt)("inlineCode",{parentName:"p"},"THEN")," is called.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"action")),(0,a.kt)("p",{parentName:"li"},"  ",(0,a.kt)("a",{parentName:"p",href:"/next/Action_operators#contextdependent"},"Context-dependent operator")," that describes the action that will be executed when the corresponding condition is met.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"alternativeAction")),(0,a.kt)("p",{parentName:"li"},"  Context-dependent operator that describes an action that will be executed if the condition is not met."))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"// Action that compares the value of the count property to 3 and displays a message to the user\nmoreThan3(obj)  {\n    IF count(obj) > 3 THEN\n        MESSAGE '>3';\n    ELSE\n        MESSAGE '<=3';\n}\n\ncheckNullName (Store st) {\n    IF NOT name(st) THEN\n        MESSAGE 'Name is null';\n}\n")))}u.isMDXComponent=!0}}]);