"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[74178],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},21588:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return d}});var r=n(83117),a=(n(67294),n(3905));const o={title:"How-to: NEWSESSION"},l=void 0,i={unversionedId:"How-to_NEWSESSION",id:"version-v4/How-to_NEWSESSION",title:"How-to: NEWSESSION",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_NEWSESSION.md",sourceDirName:".",slug:"/How-to_NEWSESSION",permalink:"/How-to_NEWSESSION",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/How-to_NEWSESSION.md",tags:[],version:"v4",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"Jul 7, 2021",frontMatter:{title:"How-to: NEWSESSION"},sidebar:"version-v4/learn",previous:{title:"How-to: WHILE",permalink:"/How-to_WHILE"},next:{title:"How-to: SEEK",permalink:"/How-to_SEEK"}},s={},d=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3},{value:"Example 3",id:"example-3",level:2},{value:"Task",id:"task-2",level:3},{value:"Solution",id:"solution-2",level:3},{value:"Example 4",id:"example-4",level:2},{value:"Task",id:"task-3",level:3},{value:"Solution",id:"solution-3",level:3}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"example-1"},"Example 1"),(0,a.kt)("h3",{id:"task"},"Task"),(0,a.kt)("p",null,"We have an order with a number and a posted/not posted flag."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Order 'Order';\n\nisPosted 'Completed' = DATA BOOLEAN (Order);\nnumber 'Number' = DATA INTEGER (Order);\n\nFORM orders\n    OBJECTS o = Order\n    PROPERTIES(o) READONLY isPosted, number\n;\n")),(0,a.kt)("p",null,"We need to create an action that will post this order in a separate change session and then will add it to the form containing the list of orders."),(0,a.kt)("h3",{id:"solution"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"post 'Complete' (Order o)  {\n    NEWSESSION {\n        isPosted(o) <- TRUE;\n        APPLY;\n    }\n}\n\nEXTEND FORM orders\n    PROPERTIES(o) post TOOLBAR\n;\n")),(0,a.kt)("p",null,'If you do not "wrap" the action that sets the ',(0,a.kt)("inlineCode",{parentName:"p"},"isPosted")," property in the ",(0,a.kt)("a",{parentName:"p",href:"/NEWSESSION_operator"},(0,a.kt)("inlineCode",{parentName:"a"},"NEWSESSION")," operator"),", then the ",(0,a.kt)("a",{parentName:"p",href:"/APPLY_operator"},(0,a.kt)("inlineCode",{parentName:"a"},"APPLY")," operator")," will also write other changes (including those made on the ",(0,a.kt)("inlineCode",{parentName:"p"},"orders")," form) to the database."),(0,a.kt)("h2",{id:"example-2"},"Example 2"),(0,a.kt)("h3",{id:"task-1"},"Task"),(0,a.kt)("p",null,"Similar to ",(0,a.kt)("a",{parentName:"p",href:"#example-1"},(0,a.kt)("strong",{parentName:"a"},"Example 1")),", except that the dedicated edit form is available for the order."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM order\n    OBJECTS o = Order PANEL\n    PROPERTIES(o) isPosted, number\n\n    EDIT Order OBJECT o\n;\n")),(0,a.kt)("p",null,"We need to create an action that creates a new order and open the edit form for it. This action must be added to the form containing the list of orders."),(0,a.kt)("h3",{id:"solution-1"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"newOrder ()  {\n    NEWSESSION {\n        NEW o = Order {\n            number(o) <- (GROUP MAX number(Order oo)) (+) 1;\n            SHOW order OBJECTS o = o;\n        }\n    }\n}\n\nEXTEND FORM orders\n    // Option 1\n    PROPERTIES() newOrder DRAW o TOOLBAR\n\n    // Option 2\n    PROPERTIES(o) NEWSESSION NEW\n;\n")),(0,a.kt)("p",null,"If you do not use the ",(0,a.kt)("inlineCode",{parentName:"p"},"NEWSESSION")," operator, then the object for the new order will be created in the ",(0,a.kt)("a",{parentName:"p",href:"/Change_sessions"},"change session")," of the ",(0,a.kt)("inlineCode",{parentName:"p"},"orders"),' form. And if the user closes the form without saving, then all the changes "will remain" in the change session for the form, and the created order will be displayed in the form containing the list of orders.'),(0,a.kt)("h2",{id:"example-3"},"Example 3"),(0,a.kt)("h3",{id:"task-2"},"Task"),(0,a.kt)("p",null,"Similar to ",(0,a.kt)("a",{parentName:"p",href:"#example-2"},(0,a.kt)("strong",{parentName:"a"},"Example 2")),", except that the order can be marked."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"selected 'Mark' = DATA LOCAL BOOLEAN (Order);\nEXTEND FORM orders\n    PROPERTIES(o) selected\n;\n")),(0,a.kt)("p",null,'We need to create an action that will delete the marked orders and immediately save the changes to the database (so that the user does not need to click "Save").'),(0,a.kt)("h3",{id:"solution-2"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"deleteSelectedOrders 'Delete marked orders' ()  {\n    NEWSESSION NESTED(selected) {\n        DELETE Order o WHERE selected(o);\n        ASK 'You are about to delete ' + (GROUP SUM 1 IF DROPPED (Order o)) + ' orders. Continue?' DO {\n            APPLY;\n        }\n    }\n}\n\nEXTEND FORM orders\n    PROPERTIES() deleteSelectedOrders DRAW o TOOLBAR\n;\n")),(0,a.kt)("p",null,'By default, a new session ignores changes made in the "upper" session. To make the selected property available in the new session, use the ',(0,a.kt)("inlineCode",{parentName:"p"},"NESTED")," block of operators. Otherwise, the ",(0,a.kt)("inlineCode",{parentName:"p"},"selected")," property will always be ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),". Alternatively, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"NESTED LOCAL")," block instead of specifying particular properties. In this case, changes made to all local properties in the upper session will be visible."),(0,a.kt)("h2",{id:"example-4"},"Example 4"),(0,a.kt)("h3",{id:"task-3"},"Task"),(0,a.kt)("p",null,"Similar to ",(0,a.kt)("a",{parentName:"p",href:"#example-2"},(0,a.kt)("strong",{parentName:"a"},"Example 2")),", except that the payment logic for the order has been added."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Payment 'Payment';\n\ndate 'Date' = DATA DATE (Payment);\nsum 'Amount' = DATA NUMERIC[14,2] (Payment);\n\norder 'Order' = DATA Order (Payment);\n")),(0,a.kt)("p",null,"We need to create a button on the form for opening a separate edit form for payments in this order."),(0,a.kt)("h3",{id:"solution-3"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM orderPayments 'Order payments'\n    // Not adding properties so that this object is not visible on the form at all\n    OBJECTS o = Order PANEL \n\n    OBJECTS p = Payment\n    PROPERTIES(p) date, sum, NEW, DELETE\n    FILTERS order(p) == o\n;\n\neditPayments 'Edit payments' (Order o)  {\n    NESTEDSESSION {\n        SHOW orderPayments OBJECTS o = o;\n    }\n}\n\nEXTEND FORM order\n    PROPERTIES(o) editPayments\n;\n")),(0,a.kt)("p",null,"If you use the ",(0,a.kt)("a",{parentName:"p",href:"/NESTEDSESSION_operator"},(0,a.kt)("inlineCode",{parentName:"a"},"NESTEDSESSION")," operator"),', then all the changes made in the "upper" change session will be available in the nested session. If the user closes the form without clicking OK, then all changes made directly in the form will be lost. If the user clicks OK, then the changes will be written to the "upper" change session rather than to the database. They will be written to the database along with the changes made in the main ',(0,a.kt)("inlineCode",{parentName:"p"},"orders")," form."),(0,a.kt)("p",null,"It is not allowed to use ",(0,a.kt)("inlineCode",{parentName:"p"},"NEWSESSION")," here simply because the ",(0,a.kt)("inlineCode",{parentName:"p"},"orderPayments"),' form will not be able to see the newly created order which has not yet been added to the database (since changes made in the "upper" session are not visible in the nested one), and thus the behavior will be unpredictable.'),(0,a.kt)("p",null,"If we do not use any session management operator at all, then if the user make any changes in the ",(0,a.kt)("inlineCode",{parentName:"p"},"orderPayments"),' form and clicks the Close button, the changes will still be "saved", though the user might not expect that.'))}u.isMDXComponent=!0}}]);