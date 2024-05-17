"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[777],{94369:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var o=t(74848),r=t(28453);const i={title:"How-to: Documents with lines"},s=void 0,d={id:"How-to_Documents_with_lines",title:"How-to: Documents with lines",description:"Example 1",source:"@site/versioned_docs/version-v5/How-to_Documents_with_lines.md",sourceDirName:".",slug:"/How-to_Documents_with_lines",permalink:"/How-to_Documents_with_lines",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/How-to_Documents_with_lines.md",tags:[],version:"v5",lastUpdatedAt:1685108136e3,frontMatter:{title:"How-to: Documents with lines"},sidebar:"learn",previous:{title:"How-to: CRUD",permalink:"/How-to_CRUD"},next:{title:"How-to: Filtering and ordering",permalink:"/How-to_Filtering_and_ordering"}},l={},a=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,o.jsx)(n.h3,{id:"task",children:"Task"}),"\n",(0,o.jsx)(n.p,{children:"We have the orders and their specification lines."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[100] (Book) IN id;\n\nCLASS Order 'Order';\ndate 'Date' = DATA DATE (Order);\nnumber 'Number' = DATA STRING[10] (Order);\n\nCLASS OrderDetail 'Order line';\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\n\nbook 'Book' = DATA Book (OrderDetail) NONULL;\nnameBook 'Book' (OrderDetail d) = name(book(d));\n\nquantity 'Quantity' = DATA INTEGER (OrderDetail);\nprice 'Price' = DATA NUMERIC[14,2] (OrderDetail);\n"})}),"\n",(0,o.jsx)(n.p,{children:"We need to create a form with a list of orders where the user can add, edit or delete them."}),"\n",(0,o.jsx)(n.h3,{id:"solution",children:"Solution"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"FORM order 'Order'\n    OBJECTS o = Order PANEL\n    PROPERTIES(o) date, number\n\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) nameBook, quantity, price, NEW, DELETE\n    FILTERS order(d) == o\n\n    EDIT Order OBJECT o\n;\n\n\nFORM orders 'Orders'\n    OBJECTS o = Order\n    PROPERTIES(o) READONLY date, number\n    PROPERTIES(o) NEWSESSION NEW, EDIT, DELETE\n;\n\nNAVIGATOR {\n    NEW orders;\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["We do not add a link to the order for the line object on the ",(0,o.jsx)(n.code,{children:"order"})," form, since when adding the object using ",(0,o.jsx)(n.code,{children:"NEW"}),", the system will automatically set up this link based on the ",(0,o.jsx)(n.code,{children:"FILTERS"})," block."]}),"\n",(0,o.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,o.jsx)(n.h3,{id:"task-1",children:"Task"}),"\n",(0,o.jsxs)(n.p,{children:["Similar to ",(0,o.jsx)(n.a,{href:"#example-1",children:(0,o.jsx)(n.strong,{children:"Example 1"})}),"."]}),"\n",(0,o.jsx)(n.p,{children:"We need to add order specification to the order list form."}),"\n",(0,o.jsx)(n.h3,{id:"solution-1",children:"Solution"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"EXTEND FORM orders\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) READONLY nameBook, quantity, price\n    FILTERS order(d) == o\n;\n"})}),"\n",(0,o.jsx)(n.p,{children:"It may be convenient that the user can view the order contents without editing it."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>d});var o=t(96540);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);