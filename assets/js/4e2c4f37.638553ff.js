"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[51967],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||i;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79415:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l}});var r=n(83117),a=(n(67294),n(3905));const i={title:"AFTER statement"},o=void 0,c={unversionedId:"AFTER_statement",id:"AFTER_statement",title:"AFTER statement",description:"The AFTER statement calls an action after calling another action.",source:"@site/docs/AFTER_statement.md",sourceDirName:".",slug:"/AFTER_statement",permalink:"/next/AFTER_statement",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/AFTER_statement.md",tags:[],version:"current",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"7/7/2021",frontMatter:{title:"AFTER statement"},sidebar:"learn",previous:{title:"BEFORE statement",permalink:"/next/BEFORE_statement"},next:{title:"Empty statement",permalink:"/next/Empty_statement"}},p={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}],s={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"AFTER")," statement calls an ",(0,a.kt)("a",{parentName:"p",href:"/next/Actions"},"action")," after calling another action. "),(0,a.kt)("h3",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"AFTER action(param1, ..., paramN) DO aspectAction;\n")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"AFTER")," statement defines an action (let's call it an ",(0,a.kt)("em",{parentName:"p"},"aspect"),") that will be called after the specified action."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"action")),(0,a.kt)("p",{parentName:"li"},"  The ",(0,a.kt)("a",{parentName:"p",href:"/next/IDs#propertyid"},"ID")," of the action after which the aspect will be called.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"param1, ..., paramN")),(0,a.kt)("p",{parentName:"li"},"  List of action parameter names. Each name is defined ",(0,a.kt)("a",{parentName:"p",href:"/next/IDs#id"},"by a simple ID"),". These parameters can be accessed when defining an aspect.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"aspectAction")),(0,a.kt)("p",{parentName:"li"},"  A ",(0,a.kt)("a",{parentName:"p",href:"/next/Action_operators#contextdependent"},"context-dependent action operator")," describing the aspect."))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"changePrice(Sku s, DATE d, NUMERIC[10,2] price)  { price(s, d) <- price; }\n\n// A message will be shown after each call to changePrice\nAFTER changePrice(Sku s, DATE d, NUMERIC[10,2] price) DO MESSAGE 'Price was changed'; \n")))}m.isMDXComponent=!0}}]);