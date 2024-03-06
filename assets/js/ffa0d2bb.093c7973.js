"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[46694],{50777:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>i});var t=o(74848),r=o(28453);const a={title:"How-to: NEW"},s=void 0,d={id:"How-to_NEW",title:"How-to: NEW",description:"Example 1",source:"@site/docs/How-to_NEW.md",sourceDirName:".",slug:"/How-to_NEW",permalink:"/next/How-to_NEW",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/How-to_NEW.md",tags:[],version:"current",lastUpdatedAt:1622042248,formattedLastUpdatedAt:"May 26, 2021",frontMatter:{title:"How-to: NEW"},sidebar:"learn",previous:{title:"How-to: EXEC",permalink:"/next/How-to_EXEC"},next:{title:"How-to: DELETE",permalink:"/next/How-to_DELETE"}},l={},i=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsx)(n.h3,{id:"task",children:"Task"}),"\n",(0,t.jsx)(n.p,{children:"We have an order with a given date and customer."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"CLASS Order 'Order';\n\nCLASS Customer 'Customer';\nname = DATA ISTRING[50] (Customer);\n\ndate 'Date' = DATA DATE (Order);\n\ncustomer 'Customer' = DATA Customer (Order);\nnameCustomer 'Customer' (Order o) = name(customer(o));\n"})}),"\n",(0,t.jsx)(n.p,{children:"We need to create an action that will create a new order based on the specified one."}),"\n",(0,t.jsx)(n.h3,{id:"solution",children:"Solution"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"copyOrder 'Copy' (Order o)  {\n    NEW n = Order {\n        date(n) <- date(o);\n        customer(n) <- customer(o);\n    }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsx)(n.h3,{id:"task-1",children:"Task"}),"\n",(0,t.jsxs)(n.p,{children:["Similar to ",(0,t.jsx)(n.a,{href:"#example-1",children:(0,t.jsx)(n.strong,{children:"Example 1"})}),", except that the order contains lines with other orders."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[50] (Book);\n\nCLASS OrderDetail 'Order line';\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\nbook 'Book' = DATA Book (OrderDetail);\nnameBook 'Book' (OrderDetail d) = name(book(d));\n\nprice 'Price' = DATA NUMERIC[14,2] (OrderDetail);\n"})}),"\n",(0,t.jsx)(n.p,{children:"We need to create an action that will create a new order with identical lines based on the selected order."}),"\n",(0,t.jsx)(n.h3,{id:"solution-1",children:"Solution"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"copyDetail (Order o)  {\n    NEW n = Order {\n        date(n) <- date(o);\n        customer(n) <- customer(o);\n        FOR order(OrderDetail od) == o NEW nd = OrderDetail DO {\n            order(nd) <- n;\n            book(nd) <- book(od);\n            price(nd) <- price(od);\n        }\n    }\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>d});var t=o(96540);const r={},a=t.createContext(r);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);