"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[9025],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),s=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return a.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,f=u["".concat(m,".").concat(d)]||u[d]||c[d]||o;return n?a.createElement(f,i(i({ref:t},l),{},{components:n})):a.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},44381:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var a=n(83117),r=(n(67294),n(3905));const o={title:"ACTION+ statement"},i=void 0,p={unversionedId:"ACTION+_statement",id:"version-v4/ACTION+_statement",title:"ACTION+ statement",description:"The ACTION+ statement adds an implementation (branching condition) to an abstract action.",source:"@site/versioned_docs/version-v4/ACTION+_statement.md",sourceDirName:".",slug:"/ACTION+_statement",permalink:"/ACTION+_statement",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/ACTION+_statement.md",tags:[],version:"v4",lastUpdatedAt:1624461640,formattedLastUpdatedAt:"6/23/2021",frontMatter:{title:"ACTION+ statement"},sidebar:"version-v4/learn",previous:{title:"+= statement",permalink:"/+=_statement"},next:{title:"META statement",permalink:"/META_statement"}},m={},s=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}],l={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ACTION+")," statement adds an implementation (branching condition) to an ",(0,r.kt)("a",{parentName:"p",href:"/Action_extension"},"abstract action"),"."),(0,r.kt)("h3",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[ACTION] actionId(param1, ..., paramN) + { implAction }\n[ACTION] actionId(param1, ..., paramN) + WHEN whenExpr THEN { implAction }\n")),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ACTION+")," statement adds an implementation to an abstract action. The syntax for adding an implementation depends on the type of abstract action. If the abstract action is of type ",(0,r.kt)("inlineCode",{parentName:"p"},"CASE"),", then the implementation should be described using ",(0,r.kt)("inlineCode",{parentName:"p"},"WHEN ... THEN ...")," otherwise, the implementation should be described simply as an action. "),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"actionId"),"  "),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("a",{parentName:"p",href:"/IDs#propertyid"},"ID")," of the abstract action. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"param1, ..., paramN")),(0,r.kt)("p",{parentName:"li"},"  List of parameters that will be used to define the implementation. Each element is a ",(0,r.kt)("a",{parentName:"p",href:"/IDs#paramid"},"typed parameter"),". The number of these parameters must be equal to the number of parameters of the abstract action. These parameters can then be used in the implementation operator of the abstract property and in the selection condition expression of this implementation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"implAction")),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("a",{parentName:"p",href:"/Action_operators#contextdependent"},"Context-dependent action operator")," whose value determines the implementation of the abstract action. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"whenExpr")),(0,r.kt)("p",{parentName:"li"},"  An ",(0,r.kt)("a",{parentName:"p",href:"/Expression"},"expression")," whose value determines the selection condition of the implementation of an abstract property (action) that has type ",(0,r.kt)("inlineCode",{parentName:"p"},"CASE"),". "))),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS ABSTRACT Animal;\nwhoAmI  ABSTRACT ( Animal);\n\nCLASS Dog : Animal;\nwhoAmI (Dog d) + {  MESSAGE 'I am a dog!'; }\n\nCLASS Cat : Animal;\nwhoAmI (Cat c) + {  MESSAGE 'I am a \u0441at!'; }\n\nask ()  {\n    FOR Animal a IS Animal DO\n        whoAmI(a); // a corresponding message will be shown for each object\n}\n\nonStarted  ABSTRACT LIST ( );\nonStarted () + {\n    name(Sku s) <- '1';\n}\nonStarted () + {\n    name(Sku s) <- '2';\n}\n// first, the 1st action is executed, then the 2nd action\n\nCLASS Human;\nname = DATA STRING[100] (Human);\n\ntestName  ABSTRACT CASE ( Human);\n\ntestName (Human h) + WHEN name(h) == 'John' THEN {  MESSAGE 'I am John'; }\ntestName (Human h) + WHEN name(h) == 'Bob' THEN {  MESSAGE 'I am Bob'; }\n")))}c.isMDXComponent=!0}}]);