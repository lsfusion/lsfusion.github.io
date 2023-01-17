"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[4687],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||h[m]||o;return n?a.createElement(d,l(l({ref:t},u),{},{components:n})):a.createElement(d,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5553:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var a=n(83117),r=(n(67294),n(3905));const o={title:"Events"},l=void 0,s={unversionedId:"Events",id:"version-v4/Events",title:"Events",description:"Events are a mechanism that allows to execute certain actions at certain points in time (these actions shall be called event handlers).",source:"@site/versioned_docs/version-v4/Events.md",sourceDirName:".",slug:"/Events",permalink:"/v4/Events",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Events.md",tags:[],version:"v4",lastUpdatedAt:1640850738,formattedLastUpdatedAt:"Dec 30, 2021",frontMatter:{title:"Events"},sidebar:"version-v4/learn",previous:{title:"Send mail (EMAIL)",permalink:"/v4/Send_mail_EMAIL"},next:{title:"Simple event",permalink:"/v4/Simple_event"}},i={},c=[{value:"Event types",id:"type",level:3},{value:"Change operators&#39; event mode",id:"change",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}],u={toc:c};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Events")," are a mechanism that allows to execute certain ",(0,r.kt)("a",{parentName:"p",href:"/v4/Actions"},"actions")," at certain points in time (these actions shall be called event ",(0,r.kt)("em",{parentName:"p"},"handlers"),")."),(0,r.kt)("h3",{id:"type"},"Event types"),(0,r.kt)("p",null,"There are two types of events:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Synchronous")," - occur immediately after a data change."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Asynchronous")," - occur at arbitrary points in time as the server manages to complete execution of all defined handlers, and/or after a certain period of time.")),(0,r.kt)("p",null,"In turn, from the perspective of the scope of changes, events can be divided into:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Local")," - occur locally for each change session."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Global")," - occur globally for the entire database.")),(0,r.kt)("p",null,"Thus, events can be synchronous local, synchronous global, asynchronous local, and asynchronous global. Note that by default global events are synchronous and local events are asynchronous (as the most commonly used combinations). Also, by default, all events are global."),(0,r.kt)("p",null,"Advantages of synchronous events:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If necessary, you can cancel the changes in the handler if, for example, these changes do not meet the necessary conditions."),(0,r.kt)("li",{parentName:"ul"},"They guarantee greater integrity, since after the changes have been written the user is guaranteed to be working with the updated data.")),(0,r.kt)("p",null,"Advantages of asynchronous events:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'You can release the user immediately and perform the handling "in the background". This improves system ergonomics; however, it is possible only when updating the data is not critical for the user\'s further work (for global events, for example, within the next 5-10 minutes, until the server has time to complete the next handling cycle).'),(0,r.kt)("li",{parentName:"ul"},"Handlings are grouped for a large number of changes, including those made by different users (in the case of global events), and, accordingly, are performed fewer times, thereby improving the overall system performance.")),(0,r.kt)("p",null,"Advantages of local events:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The user sees the results of event handling immediately, not only after he has saved to the common database.")),(0,r.kt)("p",null,"Advantages of global events:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"They provide better performance and integrity, due both to the fact that the handling is performed only after the changes are saved to the common database (that is, significantly less often), and to the use of the numerous DBMS capabilities for working with transactions.")),(0,r.kt)("p",null,"The platform also allows to additionally specify that the event will occur only if the change session belongs to one of the given forms. If this is not done, then it must be kept in mind that most of the described events occur very often, so their handling should not have side effects (for example, showing messages) if there are no changes in the session. Ideally, events should be ",(0,r.kt)("a",{parentName:"p",href:"/v4/Simple_event"},"simple")," and should generally be used only to optimize the performance of really complex cases."),(0,r.kt)("h3",{id:"change"},"Change operators' event mode"),(0,r.kt)("p",null,"When handling events, you can use a special mode of the ",(0,r.kt)("a",{parentName:"p",href:"/v4/Previous_value_PREV"},"previous value")," operator (it shall be called ",(0,r.kt)("em",{parentName:"p"},"event")," mode). In this mode, the previous value operator will return the property's values not at the beginning of the session, but at the time of the previous occurrence of this event (or rather, the end of its handling). A similar mode is supported for all ",(0,r.kt)("a",{parentName:"p",href:"/v4/Change_operators_SET_CHANGED_etc"},"change")," operators."),(0,r.kt)("p",null,"Event mode is also supported for the ",(0,r.kt)("a",{parentName:"p",href:"/v4/Cancel_changes_CANCEL"},"cancel changes")," operator. In this case, when changes are canceled inside the global event handler, the session is not cleared, but ",(0,r.kt)("a",{parentName:"p",href:"/v4/Apply_changes_APPLY"},"applying changes")," which led to the execution of this handler is canceled. The global event must be synchronous, otherwise the platform will throw an error."),(0,r.kt)("p",null,"By default, the following modes are used in event handling:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"for the previous value operator: standard mode (value at the beginning of the session)"),(0,r.kt)("li",{parentName:"ul"},"for change operators - event (value at the time the previous event occurred). "),(0,r.kt)("li",{parentName:"ul"},"for the cancel changes operator - event mode (canceling the application, not clearing the session).")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For change operators and the previous value operator, when executing global synchronous event handlers, these modes (standard and event) coincide")),(0,r.kt)("h3",{id:"language"},"Language"),(0,r.kt)("p",null,"To create actions that handle events, use the ",(0,r.kt)("a",{parentName:"p",href:"/v4/ON_statement"},(0,r.kt)("inlineCode",{parentName:"a"},"ON")," statement"),"."),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Sku;\nname = DATA STRING[100] (Sku);\n\nON {\n    LOCAL changedName = BOOLEAN (Sku);\n    changedName(Sku s) <- CHANGED(name(s));\n    IF (GROUP SUM 1 IF changedName(Sku s)) THEN {\n        MESSAGE 'Changed ' + (GROUP SUM 1 IF changedName(Sku s)) + ' skus!!!';\n    }\n}\n\nCLASS Order;\n\nCLASS Customer;\nname = DATA STRING[50] (Customer);\n\ncustomer = DATA Customer (Order);\ndiscount = DATA NUMERIC[6,2] (Order);\n\nON LOCAL {\n    FOR CHANGED(customer(Order o)) AND name(customer(o)) == 'Best customer' DO\n        discount(o) <- 50;\n}\n")))}h.isMDXComponent=!0}}]);