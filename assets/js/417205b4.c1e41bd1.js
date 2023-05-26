"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[83626],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(r),m=a,N=c["".concat(p,".").concat(m)]||c[m]||s[m]||o;return r?n.createElement(N,i(i({ref:t},u),{},{components:r})):n.createElement(N,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},92520:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d}});var n=r(83117),a=(r(67294),r(3905));const o={title:"Change operators (SET, CHANGED, ...)"},i=void 0,l={unversionedId:"Change_operators_SET_CHANGED_etc",id:"Change_operators_SET_CHANGED_etc",title:"Change operators (SET, CHANGED, ...)",description:"Change operators determine whether some types of changes have occurred for a certain property in the current session. All these operators are derived from the previous value operator (PREV), however, it is recommended to use them to improve readability and performance. The following table shows the supported types of changes and their description:",source:"@site/docs/Change_operators_SET_CHANGED_etc.md",sourceDirName:".",slug:"/Change_operators_SET_CHANGED_etc",permalink:"/next/Change_operators_SET_CHANGED_etc",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Change_operators_SET_CHANGED_etc.md",tags:[],version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"Jun 9, 2021",frontMatter:{title:"Change operators (SET, CHANGED, ...)"},sidebar:"learn",previous:{title:"Previous value (PREV)",permalink:"/next/Previous_value_PREV"},next:{title:"User/IS interaction",permalink:"/next/User_IS_interaction"}},p={},d=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}],u={toc:d};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Change operators")," determine whether some types of changes have occurred for a certain property in the current session. All these operators are derived from the ",(0,a.kt)("a",{parentName:"p",href:"/next/Previous_value_PREV"},"previous value operator (",(0,a.kt)("inlineCode",{parentName:"a"},"PREV"),")"),", however, it is recommended to use them to improve readability and performance. The following table shows the supported types of changes and their description:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Operator"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"SET")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"f AND NOT PREV(f)")),(0,a.kt)("td",{parentName:"tr",align:null},"Value is set")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"DROPPED")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"NOT f AND PREV(f)")),(0,a.kt)("td",{parentName:"tr",align:null},"Value is reset")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"CHANGED")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(f OR PREV(f)) AND NOT f==PREV(f)")),(0,a.kt)("td",{parentName:"tr",align:null},"Value is changed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"SETCHANGED")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"f AND NOT f==PREV(f)"),(0,a.kt)("br",null),"or",(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"CHANGED(f) AND NOT DROPPED(f)")),(0,a.kt)("td",{parentName:"tr",align:null},"Value is changed to non-",(0,a.kt)("inlineCode",{parentName:"td"},"NULL"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"DROPCHANGED")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"CHANGED(f) AND NOT SET(f)")),(0,a.kt)("td",{parentName:"tr",align:null},"Value is either reset or changed from one non-",(0,a.kt)("inlineCode",{parentName:"td"},"NULL")," to another non-",(0,a.kt)("inlineCode",{parentName:"td"},"NULL"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"SETDROPPED")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"SET(f) OR DROPPED(f)")),(0,a.kt)("td",{parentName:"tr",align:null},"Value is either reset or changed from ",(0,a.kt)("inlineCode",{parentName:"td"},"NULL")," to non-",(0,a.kt)("inlineCode",{parentName:"td"},"NULL"))))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"These operators are computed differently inside the ",(0,a.kt)("a",{parentName:"p",href:"/next/Events#change"},"event")," handler: in this case, they return changes from the point of the previous occurrence of this event, or rather, from the point at which all its handlers are completed.")),(0,a.kt)("h3",{id:"language"},"Language"),(0,a.kt)("p",null,"To declare a property using change operators, the following ",(0,a.kt)("a",{parentName:"p",href:"/next/Change_operators"},"syntax constructs")," are used. "),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"quantity = DATA NUMERIC[14,2] (OrderDetail);\nprice = DATA NUMERIC[14,2] (OrderDetail);\nsum(OrderDetail d) <- quantity(d) * price(d) WHEN CHANGED(quantity(d)) OR CHANGED(price(d));\n\ncreatedUser = DATA CustomUser (Order);\ncreatedUser (Order o) <- currentUser() WHEN SET(o IS Order);\n\nnumerator = DATA Numerator (Order);\nnumber = DATA STRING[28] (Order);\nseries = DATA BPSTRING[2] (Order);\nWHEN SETCHANGED(numerator(Order o)) AND\n     NOT CHANGED(number(o)) AND\n     NOT CHANGED(series(o))\n     DO {\n        number(o) <- curStringValue(numerator(o));\n        series(o) <- series(numerator(o));\n        incrementValueSession(numerator(o));\n     }\n;\n")))}s.isMDXComponent=!0}}]);