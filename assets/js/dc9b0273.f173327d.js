"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[70465],{74649:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>s});var o=t(74848),d=t(28453);const a={title:"How-to: WHILE"},l=void 0,r={id:"How-to_WHILE",title:"How-to: WHILE",description:"Example 1",source:"@site/versioned_docs/version-v5/How-to_WHILE.md",sourceDirName:".",slug:"/How-to_WHILE",permalink:"/v5/How-to_WHILE",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/How-to_WHILE.md",tags:[],version:"v5",lastUpdatedAt:1685108136e3,frontMatter:{title:"How-to: WHILE"},sidebar:"learn",previous:{title:"How-to: IF/CASE",permalink:"/v5/How-to_IF_CASE"},next:{title:"How-to: NEWSESSION",permalink:"/v5/How-to_NEWSESSION"}},i={},s=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3},{value:"Example 3",id:"example-3",level:2},{value:"Task",id:"task-2",level:3},{value:"Solution",id:"solution-2",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,d.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,o.jsx)(n.h3,{id:"task",children:"Task"}),"\n",(0,o.jsx)(n.p,{children:"We have an order for which a date is defined."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"CLASS Order 'Order';\n\ndate 'Date' = DATA DATE (Order);\n"})}),"\n",(0,o.jsx)(n.p,{children:"We need to display a message containing the number of orders for each date from a given interval."}),"\n",(0,o.jsx)(n.h3,{id:"solution",children:"Solution"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"countOrders (DATE date) = GROUP SUM 1 BY date(Order o);\n\nmessageCountOrders 'Count the number of orders' (DATE dFrom, DATE dTo)  {\n    // Option 1\n    LOCAL date = DATE ();\n    date() <- dFrom;\n\n    WHILE date() <= dTo DO {\n        MESSAGE 'Number of orders for ' + date () + ' : ' + OVERRIDE countOrders(date()), 0.0;\n        date() <- sum(date(), 1);\n    }\n\n    // Option 2\n    FOR iterate(DATE date, dFrom, dTo) DO\n        MESSAGE 'Number of orders for ' + date + ' : ' + OVERRIDE countOrders(date()), 0.0;\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Both these options will provide the same result."}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"sum"})," property defined in the ",(0,o.jsx)(n.code,{children:"Time"})," system ",(0,o.jsx)(n.a,{href:"/v5/Modules",children:"module"})," is used to add one day to the given date."]}),"\n",(0,o.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,o.jsx)(n.h3,{id:"task-1",children:"Task"}),"\n",(0,o.jsxs)(n.p,{children:["Similar to ",(0,o.jsx)(n.a,{href:"#example-1",children:(0,o.jsx)(n.strong,{children:"Example 1"})}),". We have also defined order lines, so that each line contains the (full) amount and the discount."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"CLASS OrderDetail 'Order line';\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\n\nsum 'Amount' = DATA NUMERIC[14,2] (OrderDetail);\ndiscountSum 'Discount amount' = DATA NUMERIC[14,2] (OrderDetail);\n"})}),"\n",(0,o.jsx)(n.p,{children:'We need to create an action that "distributes" given discount by line, starting from the line with the largest amount.'}),"\n",(0,o.jsx)(n.h3,{id:"solution-1",children:"Solution"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"distributeDiscount 'Distribute discount' (Order o, NUMERIC[14,2] discount)  {\n    LOCAL discount = NUMERIC[14,2] ();\n    discount() <- discount;\n\n    LOCAL leftSum = NUMERIC[14,2] (OrderDetail);\n    leftSum(OrderDetail d) <- sum(d) WHERE order(d) == o;\n\n    WHILE discount() > 0 DO {\n        // finding the row with the largest \"remaining\" amount\n        FOR OrderDetail d == [ GROUP LAST OrderDetail od ORDER leftSum(od), od BY order(od)](o) DO { \n            discountSum(d) <- MIN leftSum(d), discount();\n            discount() <- discount() (-) discountSum(d);\n        }\n        IF (GROUP SUM 1 IF leftSum(OrderDetail d) > 0) THEN\n            BREAK; // nothing left to break down\n    }\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,o.jsx)(n.h3,{id:"task-2",children:"Task"}),"\n",(0,o.jsx)(n.p,{children:"The logic for changing the balance for the book is defined as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"CLASS Book 'Book';\n\nCLASS Ledger 'Change balance';\ndate 'Date' = DATA DATE (Ledger);\nbook 'Book' = DATA Book (Ledger);\nquantity 'Qty' = DATA NUMERIC[14,2] (Ledger);\n"})}),"\n",(0,o.jsx)(n.p,{children:"We need to create an action that will calculate the accumulated (integral) balance for a given time period."}),"\n",(0,o.jsx)(n.h3,{id:"solution-2",children:"Solution"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"calculateIntegral (DATE dFrom, DATE dTo)  {\n    LOCAL date = DATE();\n    date() <- dFrom;\n\n    LOCAL balance = NUMERIC[14,2] (Book);\n    balance(Book b) <- [ GROUP SUM quantity(Ledger l) IF date(l) < dFrom BY book(l)](b);\n\n    LOCAL cumBalance = NUMERIC[14,2] (Book);\n\n    WHILE date() <= dTo DO {\n        cumBalance(Book b) <- cumBalance(b) (+) balance(b); //\n        balance(Book b) <- balance(b) (+) [ GROUP SUM quantity(Ledger l) BY book(l), date(l)](b, date());\n        date() <- sum(date(), 1);\n    }\n\n    FOR cumBalance(Book b) DO {\n        MESSAGE 'Accumulated balance for book ' + b + ' : ' + cumBalance(b);\n    }\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var o=t(96540);const d={},a=o.createContext(d);function l(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);