"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[42274],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=o,h=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90968:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s}});var r=n(83117),o=(n(67294),n(3905));const a={title:"Branching (CASE, IF, MULTI)"},i=void 0,l={unversionedId:"Branching_CASE_IF_MULTI",id:"version-v4/Branching_CASE_IF_MULTI",title:"Branching (CASE, IF, MULTI)",description:"The branching operator creates an action that determines for a set of conditions which condition is met, and calls the corresponding action.",source:"@site/versioned_docs/version-v4/Branching_CASE_IF_MULTI.md",sourceDirName:".",slug:"/Branching_CASE_IF_MULTI",permalink:"/v4/Branching_CASE_IF_MULTI",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Branching_CASE_IF_MULTI.md",tags:[],version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"Jun 9, 2021",frontMatter:{title:"Branching (CASE, IF, MULTI)"},sidebar:"learn",previous:{title:"Loop (FOR)",permalink:"/v4/Loop_FOR"},next:{title:"Recursive loop (WHILE)",permalink:"/v4/Recursive_loop_WHILE"}},c={},s=[{value:"Polymorphic form",id:"poly",level:3},{value:"Mutual exclusion of conditions",id:"exclusive",level:3},{value:"Implicit definition",id:"implicit-definition",level:3},{value:"Single form",id:"single",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"The branching operator")," creates an ",(0,o.kt)("a",{parentName:"p",href:"/v4/Actions"},"action")," that determines for a set of ",(0,o.kt)("em",{parentName:"p"},"conditions")," which condition is met, and calls the corresponding action."),(0,o.kt)("p",null,"All conditions are defined as ",(0,o.kt)("a",{parentName:"p",href:"/v4/Properties"},"properties")," and/or parameters. Accordingly, a condition is ",(0,o.kt)("em",{parentName:"p"},"met")," if the value of the property or parameter by which it is set is not equal to ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,o.kt)("h3",{id:"poly"},"Polymorphic form"),(0,o.kt)("p",null,"This operator also allows to define a condition not explicitly but by using as a condition the ",(0,o.kt)("a",{parentName:"p",href:"/v4/Property_signature_CLASS"},"signature")," of the action corresponding to that condition. We will call this the ",(0,o.kt)("em",{parentName:"p"},"polymorphic")," form of the operator."),(0,o.kt)("h3",{id:"exclusive"},"Mutual exclusion of conditions"),(0,o.kt)("p",null,"The branching operator lets you specify that all its conditions are ",(0,o.kt)("em",{parentName:"p"},"mutually exclusive"),". If this option is set, and the conditions are not in fact mutually exclusive, the platform will throw the corresponding error."),(0,o.kt)("p",null,"It is worth noting that this check is no more than a hint to the platform (for better optimization), and also a kind of self-checking on the part of the developer. However, in many cases it allows you to make the code more transparent and readable (especially with the polymorphic form of the selection operator)."),(0,o.kt)("h3",{id:"implicit-definition"},"Implicit definition"),(0,o.kt)("p",null,"This operator has the capability of an ",(0,o.kt)("a",{parentName:"p",href:"/v4/Action_extension"},"implicit definition")," using the technique of ",(0,o.kt)("a",{parentName:"p",href:"/v4/Extensions"},"extensions"),", which allows, in particular, to implement polymorphism in the form that is common practice in OOP."),(0,o.kt)("h3",{id:"single"},"Single form"),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"single")," form of the branching operator checks exactly one condition. If this condition is met, the specified action is called. It is also possible to specify an ",(0,o.kt)("em",{parentName:"p"},"alternative action")," that is called if the condition is not met."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Type of mutual exclusion and implicit definition do not make sense/are not supported for this form of the operator")),(0,o.kt)("h3",{id:"language"},"Language"),(0,o.kt)("p",null,"To declare an action implementing general form of branching, the ",(0,o.kt)("a",{parentName:"p",href:"/v4/CASE_action_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"CASE")," operator")," is used. For the single form of branching, the ",(0,o.kt)("a",{parentName:"p",href:"/v4/IF_..._THEN_action_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"IF")," operator")," is used, and for the polymorphic form the ",(0,o.kt)("a",{parentName:"p",href:"/v4/MULTI_action_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"MULTI")," operator"),". "),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"test = DATA INTEGER (INTEGER);\ncaseActionTest(a)  {\n    CASE\n        WHEN test(a) > 7 THEN MESSAGE '>7';\n        WHEN test(a) > 6 THEN MESSAGE '>6';\n        WHEN test(a) > 5 THEN MESSAGE '>5';\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"// Action that compares the value of the count property to 3 and displays a message to the user\nmoreThan3(obj)  {\n    IF count(obj) > 3 THEN\n        MESSAGE '>3';\n    ELSE\n        MESSAGE '<=3';\n}\n\ncheckNullName (Store st) {\n    IF NOT name(st) THEN\n        MESSAGE 'Name is null';\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Shape;\n\nCLASS Square : Shape;\nCLASS Circle : Shape;\n\nmessage (Square s)  { MESSAGE 'Square'; }\nmessage (Circle c)  { MESSAGE 'Circle'; }\n\nmessage (Shape s) = MULTI message[Square](s), message[Circle](s);\n")))}u.isMDXComponent=!0}}]);