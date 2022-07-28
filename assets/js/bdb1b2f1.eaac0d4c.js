"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[26560],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=r,d=u["".concat(c,".").concat(h)]||u[h]||m[h]||o;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},31609:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s}});var a=n(83117),r=(n(67294),n(3905));const o={title:"Branching (CASE, IF, MULTI)"},i=void 0,l={unversionedId:"Branching_CASE_IF_MULTI",id:"Branching_CASE_IF_MULTI",title:"Branching (CASE, IF, MULTI)",description:"The branching operator creates an action that determines for a set of conditions which condition is met, and calls the corresponding action.",source:"@site/docs/Branching_CASE_IF_MULTI.md",sourceDirName:".",slug:"/Branching_CASE_IF_MULTI",permalink:"/next/Branching_CASE_IF_MULTI",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Branching_CASE_IF_MULTI.md",tags:[],version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Branching (CASE, IF, MULTI)"},sidebar:"learn",previous:{title:"Loop (FOR)",permalink:"/next/Loop_FOR"},next:{title:"Recursive loop (WHILE)",permalink:"/next/Recursive_loop_WHILE"}},c={},s=[{value:"Polymorphic form",id:"poly",level:3},{value:"Mutual exclusion of conditions",id:"exclusive",level:3},{value:"Implicit definition",id:"implicit-definition",level:3},{value:"Single form",id:"single",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}],p={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The branching operator")," creates an ",(0,r.kt)("a",{parentName:"p",href:"/next/Actions"},"action")," that determines for a set of ",(0,r.kt)("em",{parentName:"p"},"conditions")," which condition is met, and calls the corresponding action."),(0,r.kt)("p",null,"All conditions are defined as ",(0,r.kt)("a",{parentName:"p",href:"/next/Properties"},"properties")," and/or parameters. Accordingly, a condition is ",(0,r.kt)("em",{parentName:"p"},"met")," if the value of the property or parameter by which it is set is not equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,r.kt)("h3",{id:"poly"},"Polymorphic form"),(0,r.kt)("p",null,"This operator also allows to define a condition not explicitly but by using as a condition the ",(0,r.kt)("a",{parentName:"p",href:"/next/Property_signature_CLASS"},"signature")," of the action corresponding to that condition. We will call this the ",(0,r.kt)("em",{parentName:"p"},"polymorphic")," form of the operator."),(0,r.kt)("h3",{id:"exclusive"},"Mutual exclusion of conditions"),(0,r.kt)("p",null,"The branching operator lets you specify that all its conditions are ",(0,r.kt)("em",{parentName:"p"},"mutually exclusive"),". If this option is set, and the conditions are not in fact mutually exclusive, the platform will throw the corresponding error."),(0,r.kt)("p",null,"It is worth noting that this check is no more than a hint to the platform (for better optimization), and also a kind of self-checking on the part of the developer. However, in many cases it allows you to make the code more transparent and readable (especially with the polymorphic form of the selection operator)."),(0,r.kt)("h3",{id:"implicit-definition"},"Implicit definition"),(0,r.kt)("p",null,"This operator has the capability of an ",(0,r.kt)("a",{parentName:"p",href:"/next/Action_extension"},"implicit definition")," using the technique of ",(0,r.kt)("a",{parentName:"p",href:"/next/Extensions"},"extensions"),", which allows, in particular, to implement polymorphism in the form that is common practice in OOP."),(0,r.kt)("h3",{id:"single"},"Single form"),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"single")," form of the branching operator checks exactly one condition. If this condition is met, the specified action is called. It is also possible to specify an ",(0,r.kt)("em",{parentName:"p"},"alternative action")," that is called if the condition is not met."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Type of mutual exclusion and implicit definition do not make sense/are not supported for this form of the operator"))),(0,r.kt)("h3",{id:"language"},"Language"),(0,r.kt)("p",null,"To declare an action implementing general form of branching, the ",(0,r.kt)("a",{parentName:"p",href:"/next/CASE_action_operator"},(0,r.kt)("inlineCode",{parentName:"a"},"CASE")," operator")," is used. For the single form of branching, the ",(0,r.kt)("a",{parentName:"p",href:"/next/IF_..._THEN_action_operator"},(0,r.kt)("inlineCode",{parentName:"a"},"IF")," operator")," is used, and for the polymorphic form the ",(0,r.kt)("a",{parentName:"p",href:"/next/MULTI_action_operator"},(0,r.kt)("inlineCode",{parentName:"a"},"MULTI")," operator"),". "),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"test = DATA INTEGER (INTEGER);\ncaseActionTest(a)  {\n    CASE\n        WHEN test(a) > 7 THEN MESSAGE '>7';\n        WHEN test(a) > 6 THEN MESSAGE '>6';\n        WHEN test(a) > 5 THEN MESSAGE '>5';\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"// Action that compares the value of the count property to 3 and displays a message to the user\nmoreThan3(obj)  {\n    IF count(obj) > 3 THEN\n        MESSAGE '>3';\n    ELSE\n        MESSAGE '<=3';\n}\n\ncheckNullName (Store st) {\n    IF NOT name(st) THEN\n        MESSAGE 'Name is null';\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Shape;\n\nCLASS Square : Shape;\nCLASS Circle : Shape;\n\nmessage (Square s)  { MESSAGE 'Square'; }\nmessage (Circle c)  { MESSAGE 'Circle'; }\n\nmessage (Shape s) = MULTI message[Square](s), message[Circle](s);\n")))}m.isMDXComponent=!0}}]);