"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[46694],{50777:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>i});var o=n(74848),t=n(28453);const a={title:"How-to: NEW"},s=void 0,d={id:"How-to_NEW",title:"How-to: NEW",description:"Example 1",source:"@site/docs/How-to_NEW.md",sourceDirName:".",slug:"/How-to_NEW",permalink:"/next/How-to_NEW",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/How-to_NEW.md",tags:[],version:"current",lastUpdatedAt:1622042248,formattedLastUpdatedAt:"May 26, 2021",frontMatter:{title:"How-to: NEW"},sidebar:"learn",previous:{title:"How-to: EXEC",permalink:"/next/How-to_EXEC"},next:{title:"How-to: DELETE",permalink:"/next/How-to_DELETE"}},l={},i=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3}];function c(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h2,{id:"example-1",children:"Example 1"}),"\n",(0,o.jsx)(r.h3,{id:"task",children:"Task"}),"\n",(0,o.jsx)(r.p,{children:"We have an order with a given date and customer."}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-lsf",children:"CLASS Order 'Order';\r\n\r\nCLASS Customer 'Customer';\r\nname = DATA ISTRING[50] (Customer);\r\n\r\ndate 'Date' = DATA DATE (Order);\r\n\r\ncustomer 'Customer' = DATA Customer (Order);\r\nnameCustomer 'Customer' (Order o) = name(customer(o));\n"})}),"\n",(0,o.jsx)(r.p,{children:"We need to create an action that will create a new order based on the specified one."}),"\n",(0,o.jsx)(r.h3,{id:"solution",children:"Solution"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-lsf",children:"copyOrder 'Copy' (Order o)  {\r\n    NEW n = Order {\r\n        date(n) <- date(o);\r\n        customer(n) <- customer(o);\r\n    }\r\n}\n"})}),"\n",(0,o.jsx)(r.h2,{id:"example-2",children:"Example 2"}),"\n",(0,o.jsx)(r.h3,{id:"task-1",children:"Task"}),"\n",(0,o.jsxs)(r.p,{children:["Similar to ",(0,o.jsx)(r.a,{href:"#example-1",children:(0,o.jsx)(r.strong,{children:"Example 1"})}),", except that the order contains lines with other orders."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-lsf",children:"CLASS Book 'Book';\r\nname 'Name' = DATA ISTRING[50] (Book);\r\n\r\nCLASS OrderDetail 'Order line';\r\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\r\nbook 'Book' = DATA Book (OrderDetail);\r\nnameBook 'Book' (OrderDetail d) = name(book(d));\r\n\r\nprice 'Price' = DATA NUMERIC[14,2] (OrderDetail);\n"})}),"\n",(0,o.jsx)(r.p,{children:"We need to create an action that will create a new order with identical lines based on the selected order."}),"\n",(0,o.jsx)(r.h3,{id:"solution-1",children:"Solution"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-lsf",children:"copyDetail (Order o)  {\r\n    NEW n = Order {\r\n        date(n) <- date(o);\r\n        customer(n) <- customer(o);\r\n        FOR order(OrderDetail od) == o NEW nd = OrderDetail DO {\r\n            order(nd) <- n;\r\n            book(nd) <- book(od);\r\n            price(nd) <- price(od);\r\n        }\r\n    }\r\n}\n"})})]})}function u(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>d});var o=n(96540);const t={},a=o.createContext(t);function s(e){const r=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(a.Provider,{value:r},e.children)}}}]);