"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[86646],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38326:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var r=n(83117),a=(n(67294),n(3905));const o={title:"Calculated events"},i=void 0,c={unversionedId:"Calculated_events",id:"version-v5/Calculated_events",title:"Calculated events",description:"Calculated events are events that change the value of a property when the value of some other property (condition) changes to a non-NULL value. Moreover, unlike simple events, this change is not made at the moment the condition is changed but is calculated each time the changed property is accessed. If the property has already been changed in the same session, this change is considered higher priority than the change in the calculated event.",source:"@site/versioned_docs/version-v5/Calculated_events.md",sourceDirName:".",slug:"/Calculated_events",permalink:"/Calculated_events",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/Calculated_events.md",tags:[],version:"v5",lastUpdatedAt:1685108136,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{title:"Calculated events"},sidebar:"learn",previous:{title:"Simple event",permalink:"/Simple_event"},next:{title:"Constraints",permalink:"/Constraints"}},l={},s=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Calculated")," events are events that change the value of a property when the value of some other property (",(0,a.kt)("em",{parentName:"p"},"condition"),") changes to a non-",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," value. Moreover, unlike ",(0,a.kt)("a",{parentName:"p",href:"/Simple_event"},"simple")," events, this change is not made at the moment the condition is changed but is calculated each time the changed property is accessed. If the property has already been ",(0,a.kt)("a",{parentName:"p",href:"/Property_change_CHANGE"},"changed")," in the same session, this change is considered higher priority than the change in the calculated event."),(0,a.kt)("p",null,"For each property, there can only be one calculated event that changes this property.  "),(0,a.kt)("h3",{id:"language"},"Language"),(0,a.kt)("p",null,"To define calculated events, use the ",(0,a.kt)("a",{parentName:"p",href:"/lt-_WHEN_statement"},(0,a.kt)("inlineCode",{parentName:"a"},"<- WHEN")," statement"),"."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"// when adding a client, by default, give him the specified discount\ndefaultDiscount = DATA NUMERIC[6,2] ();\ndiscount = DATA NUMERIC[6,2] (Customer);\ndiscount(Customer c) <- defaultDiscount() WHEN SET(c IS Customer);\n\nquantity = DATA NUMERIC[10,2] (OrderDetail);\nprice = DATA NUMERIC[10,2] (OrderDetail);\nsum = DATA NUMERIC[10,2] (OrderDetail);\n\nsum(OrderDetail d) <- quantity(d) * price(d) WHEN CHANGED(quantity(d)) OR CHANGED(price(d));\n")))}p.isMDXComponent=!0}}]);