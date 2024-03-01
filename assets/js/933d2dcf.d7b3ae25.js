"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[62083],{64750:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>a});var t=r(74848),o=r(28453);const i={title:"How-to: Documents with lines"},d=void 0,s={id:"How-to_Documents_with_lines",title:"How-to: Documents with lines",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_Documents_with_lines.md",sourceDirName:".",slug:"/How-to_Documents_with_lines",permalink:"/v4/How-to_Documents_with_lines",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/How-to_Documents_with_lines.md",tags:[],version:"v4",lastUpdatedAt:1619709222,formattedLastUpdatedAt:"Apr 29, 2021",frontMatter:{title:"How-to: Documents with lines"},sidebar:"learn",previous:{title:"How-to: CRUD",permalink:"/v4/How-to_CRUD"},next:{title:"How-to: Filtering and ordering",permalink:"/v4/How-to_Filtering_and_ordering"}},l={},a=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsx)(n.h3,{id:"task",children:"Task"}),"\n",(0,t.jsx)(n.p,{children:"We have the orders and their specification lines."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"CLASS Book 'Book';\r\nname 'Name' = DATA ISTRING[100] (Book) IN id;\r\n\r\nCLASS Order 'Order';\r\ndate 'Date' = DATA DATE (Order);\r\nnumber 'Number' = DATA STRING[10] (Order);\r\n\r\nCLASS OrderDetail 'Order line';\r\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\r\n\r\nbook 'Book' = DATA Book (OrderDetail) NONULL;\r\nnameBook 'Book' (OrderDetail d) = name(book(d));\r\n\r\nquantity 'Quantity' = DATA INTEGER (OrderDetail);\r\nprice 'Price' = DATA NUMERIC[14,2] (OrderDetail);\n"})}),"\n",(0,t.jsx)(n.p,{children:"We need to create a form with a list of orders where the user can add, edit or delete them."}),"\n",(0,t.jsx)(n.h3,{id:"solution",children:"Solution"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"FORM order 'Order'\r\n    OBJECTS o = Order PANEL\r\n    PROPERTIES(o) date, number\r\n\r\n    OBJECTS d = OrderDetail\r\n    PROPERTIES(d) nameBook, quantity, price, NEW, DELETE\r\n    FILTERS order(d) == o\r\n\r\n    EDIT Order OBJECT o\r\n;\r\n\r\n\r\nFORM orders 'Orders'\r\n    OBJECTS o = Order\r\n    PROPERTIES(o) READONLY date, number\r\n    PROPERTIES(o) NEWSESSION NEW, EDIT, DELETE\r\n;\r\n\r\nNAVIGATOR {\r\n    NEW orders;\r\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["We do not add a link to the order for the line object on the ",(0,t.jsx)(n.code,{children:"order"})," form, since when adding the object using ",(0,t.jsx)(n.code,{children:"NEW"}),", the system will automatically set up this link based on the ",(0,t.jsx)(n.code,{children:"FILTERS"})," block."]}),"\n",(0,t.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsx)(n.h3,{id:"task-1",children:"Task"}),"\n",(0,t.jsxs)(n.p,{children:["Similar to ",(0,t.jsx)(n.a,{href:"#example-1",children:(0,t.jsx)(n.strong,{children:"Example 1"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:"We need to add order specification to the order list form."}),"\n",(0,t.jsx)(n.h3,{id:"solution-1",children:"Solution"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"EXTEND FORM orders\r\n    OBJECTS d = OrderDetail\r\n    PROPERTIES(d) READONLY nameBook, quantity, price\r\n    FILTERS order(d) == o\r\n;\n"})}),"\n",(0,t.jsx)(n.p,{children:"It may be convenient that the user can view the order contents without editing it."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>s});var t=r(96540);const o={},i=t.createContext(o);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);