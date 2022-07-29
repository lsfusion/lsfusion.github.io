"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[72448],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,d=p["".concat(l,".").concat(f)]||p[f]||u[f]||i;return n?r.createElement(d,a(a({ref:t},m),{},{components:n})):r.createElement(d,a({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},35580:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var r=n(83117),o=(n(67294),n(3905));const i={title:"Integration"},a=void 0,s={unversionedId:"Integration",id:"version-v4/Integration",title:"Integration",description:"Integration includes everything related to interaction of the lsFusion system with other systems. In terms of the direction of this interaction, integration can be divided into:",source:"@site/versioned_docs/version-v4/Integration.md",sourceDirName:".",slug:"/Integration",permalink:"/Integration",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Integration.md",tags:[],version:"v4",lastUpdatedAt:1640850738,formattedLastUpdatedAt:"Dec 30, 2021",frontMatter:{title:"Integration"},sidebar:"version-v4/learn",previous:{title:"Metaprogramming",permalink:"/Metaprogramming"},next:{title:"Access from an external system",permalink:"/Access_from_an_external_system"}},l={},c=[],m={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Integration includes everything related to interaction of the lsFusion system with other systems. In terms of the direction of this interaction, integration can be divided into: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Access to the lsFusion system from another system."),(0,o.kt)("li",{parentName:"ol"},"Access from the lsFusion system to another system.")),(0,o.kt)("p",null,"In terms of the physical model, integration can be divided into:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Interaction with systems running in "the same environment" as the lsFusion system (that is, in the Java virtual machine (JVM) of the lsFusion server and/or using the same SQL server as the lsFusion system).'),(0,o.kt)("li",{parentName:"ol"},"Interaction with remote systems via network protocols.")),(0,o.kt)("p",null,"Accordingly, we will call the first systems ",(0,o.kt)("em",{parentName:"p"},"internal"),", and the second ",(0,o.kt)("em",{parentName:"p"},"external"),". In turn, interaction with internal systems using Java tools we will call ",(0,o.kt)("em",{parentName:"p"},"Java interaction"),", and using SQL tools \u2013 ",(0,o.kt)("em",{parentName:"p"},"SQL interaction"),"."),(0,o.kt)("p",null,"Thus, the platform has four different types of integration:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Access_from_an_external_system"},"Access from an external system")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Access_from_an_internal_system"},"Access from an internal system")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Access_to_an_external_system_EXTERNAL"},"Access to an external system (",(0,o.kt)("inlineCode",{parentName:"a"},"EXTERNAL"),")")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/Access_to_an_internal_system_INTERNAL_FORMULA"},"Access to an internal system (",(0,o.kt)("inlineCode",{parentName:"a"},"INTERNAL"),", ",(0,o.kt)("inlineCode",{parentName:"a"},"FORMULA"),")"))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Additionally, it is worth noting that the ability to interact with internal systems can be used not only for purposes of integration but also for purposes of extensibility when platform capabilities are insufficient for some reason.")))}u.isMDXComponent=!0}}]);