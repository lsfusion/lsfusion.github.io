"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[82870],{27533:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>i});var o=t(74848),s=t(28453);const r={title:"How-to: NEWSESSION"},a=void 0,l={id:"How-to_NEWSESSION",title:"How-to: NEWSESSION",description:"Example 1",source:"@site/docs/How-to_NEWSESSION.md",sourceDirName:".",slug:"/How-to_NEWSESSION",permalink:"/next/How-to_NEWSESSION",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/How-to_NEWSESSION.md",tags:[],version:"current",lastUpdatedAt:1707820026,formattedLastUpdatedAt:"Feb 13, 2024",frontMatter:{title:"How-to: NEWSESSION"},sidebar:"learn",previous:{title:"How-to: WHILE",permalink:"/next/How-to_WHILE"},next:{title:"How-to: SEEK",permalink:"/next/How-to_SEEK"}},d={},i=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3},{value:"Example 3",id:"example-3",level:2},{value:"Task",id:"task-2",level:3},{value:"Solution",id:"solution-2",level:3},{value:"Example 4",id:"example-4",level:2},{value:"Task",id:"task-3",level:3},{value:"Solution",id:"solution-3",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,o.jsx)(n.h3,{id:"task",children:"Task"}),"\n",(0,o.jsx)(n.p,{children:"We have an order with a number and a posted/not posted flag."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"CLASS Order 'Order';\n\nisPosted 'Completed' = DATA BOOLEAN (Order);\nnumber 'Number' = DATA INTEGER (Order);\n\nFORM orders\n    OBJECTS o = Order\n    PROPERTIES(o) READONLY isPosted, number\n;\n"})}),"\n",(0,o.jsx)(n.p,{children:"We need to create an action that will post this order in a separate change session and then will add it to the form containing the list of orders."}),"\n",(0,o.jsx)(n.h3,{id:"solution",children:"Solution"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"post 'Complete' (Order o)  {\n    NEWSESSION {\n        isPosted(o) <- TRUE;\n        APPLY;\n    }\n}\n\nEXTEND FORM orders\n    PROPERTIES(o) post TOOLBAR\n;\n"})}),"\n",(0,o.jsxs)(n.p,{children:['If you do not "wrap" the action that sets the ',(0,o.jsx)(n.code,{children:"isPosted"})," property in the ",(0,o.jsxs)(n.a,{href:"/next/NEWSESSION_operator",children:[(0,o.jsx)(n.code,{children:"NEWSESSION"})," operator"]}),", then the ",(0,o.jsxs)(n.a,{href:"/next/APPLY_operator",children:[(0,o.jsx)(n.code,{children:"APPLY"})," operator"]})," will also write other changes (including those made on the ",(0,o.jsx)(n.code,{children:"orders"})," form) to the database."]}),"\n",(0,o.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,o.jsx)(n.h3,{id:"task-1",children:"Task"}),"\n",(0,o.jsxs)(n.p,{children:["Similar to ",(0,o.jsx)(n.a,{href:"#example-1",children:(0,o.jsx)(n.strong,{children:"Example 1"})}),", except that the dedicated edit form is available for the order."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"FORM order\n    OBJECTS o = Order PANEL\n    PROPERTIES(o) isPosted, number\n\n    EDIT Order OBJECT o\n;\n"})}),"\n",(0,o.jsx)(n.p,{children:"We need to create an action that creates a new order and open the edit form for it. This action must be added to the form containing the list of orders."}),"\n",(0,o.jsx)(n.h3,{id:"solution-1",children:"Solution"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"newOrder ()  {\n    NEWSESSION {\n        NEW o = Order {\n            number(o) <- (GROUP MAX number(Order oo)) (+) 1;\n            SHOW order OBJECTS o = o;\n        }\n    }\n}\n\nEXTEND FORM orders\n    // Option 1\n    PROPERTIES() newOrder DRAW o TOOLBAR\n\n    // Option 2\n    PROPERTIES(o) NEWSESSION NEW\n;\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If you do not use the ",(0,o.jsx)(n.code,{children:"NEWSESSION"})," operator, then the object for the new order will be created in the ",(0,o.jsx)(n.a,{href:"/next/Change_sessions",children:"change session"})," of the ",(0,o.jsx)(n.code,{children:"orders"}),' form. And if the user closes the form without saving, then all the changes "will remain" in the change session for the form, and the created order will be displayed in the form containing the list of orders.']}),"\n",(0,o.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,o.jsx)(n.h3,{id:"task-2",children:"Task"}),"\n",(0,o.jsxs)(n.p,{children:["Similar to ",(0,o.jsx)(n.a,{href:"#example-2",children:(0,o.jsx)(n.strong,{children:"Example 2"})}),", except that the order can be marked."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"selected 'Mark' = DATA LOCAL BOOLEAN (Order);\nEXTEND FORM orders\n    PROPERTIES(o) selected\n;\n"})}),"\n",(0,o.jsx)(n.p,{children:'We need to create an action that will delete the marked orders and immediately save the changes to the database (so that the user does not need to click "Save").'}),"\n",(0,o.jsx)(n.h3,{id:"solution-2",children:"Solution"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"deleteSelectedOrders 'Delete marked orders' ()  {\n    NEWSESSION NESTED(selected) {\n        DELETE Order o WHERE selected(o);\n        ASK 'You are about to delete ' + (GROUP SUM 1 IF DROPPED(o IS Order)) + ' orders. Continue?' DO {\n            APPLY;\n        }\n    }\n}\n\nEXTEND FORM orders\n    PROPERTIES() deleteSelectedOrders DRAW o TOOLBAR\n;\n"})}),"\n",(0,o.jsxs)(n.p,{children:['By default, a new session ignores changes made in the "upper" session. To make the selected property available in the new session, use the ',(0,o.jsx)(n.code,{children:"NESTED"})," block of operators. Otherwise, the ",(0,o.jsx)(n.code,{children:"selected"})," property will always be ",(0,o.jsx)(n.code,{children:"NULL"}),". Alternatively, you can use the ",(0,o.jsx)(n.code,{children:"NESTED LOCAL"})," block instead of specifying particular properties. In this case, changes made to all local properties in the upper session will be visible."]}),"\n",(0,o.jsx)(n.h2,{id:"example-4",children:"Example 4"}),"\n",(0,o.jsx)(n.h3,{id:"task-3",children:"Task"}),"\n",(0,o.jsxs)(n.p,{children:["Similar to ",(0,o.jsx)(n.a,{href:"#example-2",children:(0,o.jsx)(n.strong,{children:"Example 2"})}),", except that the payment logic for the order has been added."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"CLASS Payment 'Payment';\n\ndate 'Date' = DATA DATE (Payment);\nsum 'Amount' = DATA NUMERIC[14,2] (Payment);\n\norder 'Order' = DATA Order (Payment);\n"})}),"\n",(0,o.jsx)(n.p,{children:"We need to create a button on the form for opening a separate edit form for payments in this order."}),"\n",(0,o.jsx)(n.h3,{id:"solution-3",children:"Solution"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"FORM orderPayments 'Order payments'\n    // Not adding properties so that this object is not visible on the form at all\n    OBJECTS o = Order PANEL \n\n    OBJECTS p = Payment\n    PROPERTIES(p) date, sum, NEW, DELETE\n    FILTERS order(p) == o\n;\n\neditPayments 'Edit payments' (Order o)  {\n    NESTEDSESSION {\n        SHOW orderPayments OBJECTS o = o;\n    }\n}\n\nEXTEND FORM order\n    PROPERTIES(o) editPayments\n;\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If you use the ",(0,o.jsxs)(n.a,{href:"/next/NESTEDSESSION_operator",children:[(0,o.jsx)(n.code,{children:"NESTEDSESSION"})," operator"]}),', then all the changes made in the "upper" change session will be available in the nested session. If the user closes the form without clicking OK, then all changes made directly in the form will be lost. If the user clicks OK, then the changes will be written to the "upper" change session rather than to the database. They will be written to the database along with the changes made in the main ',(0,o.jsx)(n.code,{children:"orders"})," form."]}),"\n",(0,o.jsxs)(n.p,{children:["It is not allowed to use ",(0,o.jsx)(n.code,{children:"NEWSESSION"})," here simply because the ",(0,o.jsx)(n.code,{children:"orderPayments"}),' form will not be able to see the newly created order which has not yet been added to the database (since changes made in the "upper" session are not visible in the nested one), and thus the behavior will be unpredictable.']}),"\n",(0,o.jsxs)(n.p,{children:["If we do not use any session management operator at all, then if the user make any changes in the ",(0,o.jsx)(n.code,{children:"orderPayments"}),' form and clicks the Close button, the changes will still be "saved", though the user might not expect that.']})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var o=t(96540);const s={},r=o.createContext(s);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);