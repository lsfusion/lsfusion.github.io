"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[6276],{40352:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var t=o(74848),i=o(28453);const l={title:"How-to: GROUP MAX/MIN/AGGR"},s=void 0,a={id:"How-to_GROUP_MAX_MIN_AGGR",title:"How-to: GROUP MAX/MIN/AGGR",description:"Example 1",source:"@site/docs/How-to_GROUP_MAX_MIN_AGGR.md",sourceDirName:".",slug:"/How-to_GROUP_MAX_MIN_AGGR",permalink:"/next/How-to_GROUP_MAX_MIN_AGGR",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/How-to_GROUP_MAX_MIN_AGGR.md",tags:[],version:"current",lastUpdatedAt:1669384567,formattedLastUpdatedAt:"Nov 25, 2022",frontMatter:{title:"How-to: GROUP MAX/MIN/AGGR"},sidebar:"learn",previous:{title:"How-to: GROUP SUM",permalink:"/next/How-to_GROUP_SUM"},next:{title:"How-to: CASE/IF/OVERRIDE",permalink:"/next/How-to_CASE_IF_OVERRIDE"}},r={},d=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3},{value:"Example 3",id:"example-3",level:2},{value:"Task",id:"task-2",level:3},{value:"Solution",id:"solution-2",level:3},{value:"Example 4",id:"example-4",level:2},{value:"Task",id:"task-3",level:3},{value:"Solution",id:"solution-3",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsx)(n.h3,{id:"task",children:"Task"}),"\n",(0,t.jsx)(n.p,{children:"We have a set of books, where each book has a unique ID."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"CLASS Book 'Book';\n\nid 'Number' = DATA INTEGER (Book);\n"})}),"\n",(0,t.jsx)(n.p,{children:"We need to find the maximum book ID."}),"\n",(0,t.jsx)(n.h3,{id:"solution",children:"Solution"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"maxId 'Maximum number' () = GROUP MAX id(Book b);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsx)(n.h3,{id:"task-1",children:"Task"}),"\n",(0,t.jsxs)(n.p,{children:["Similar to ",(0,t.jsx)(n.a,{href:"#example-1",children:(0,t.jsx)(n.strong,{children:"Example 1"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["We need to find a ",(0,t.jsx)(n.code,{children:"Book"})," object by book ID."]}),"\n",(0,t.jsx)(n.h3,{id:"solution-1",children:"Solution"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"// Option 1\nbook1 'Book' (INTEGER i) = GROUP MAX Book b BY id(b);\n\n// Option 2\nbook2 'Book' (INTEGER i) = GROUP AGGR Book b BY id(b);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The difference between Option 2 and Option 1 is that declaration of this property puts a ",(0,t.jsx)(n.a,{href:"/next/Constraints",children:"constraint"})," on the uniqueness of book IDs. Any attempt to add two or more books with the same ID will result in the error message."]}),"\n",(0,t.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,t.jsx)(n.h3,{id:"task-2",children:"Task"}),"\n",(0,t.jsx)(n.p,{children:"We have a set of books, where each book is associated with a category and price."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"CLASS Category 'Category';\n\ncategory 'Category' = DATA Category (Book);\nprice 'Price' = DATA NUMERIC[10,2] (Book);\n"})}),"\n",(0,t.jsx)(n.p,{children:"We need to calculate the minimum price per category."}),"\n",(0,t.jsx)(n.h3,{id:"solution-2",children:"Solution"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"minPrice 'Minimum price' (Category c) = GROUP MIN price(Book b) BY category(b);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"example-4",children:"Example 4"}),"\n",(0,t.jsx)(n.h3,{id:"task-3",children:"Task"}),"\n",(0,t.jsx)(n.p,{children:"We have a book shipment document."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"CLASS Shipment 'Shipment';\nCLASS ShipmentDetail 'Shipment line';\nshipment 'Shipment' = DATA Shipment (ShipmentDetail) NONULL DELETE;\n\nbook 'Book' = DATA Book (ShipmentDetail);\n"})}),"\n",(0,t.jsx)(n.p,{children:"We need to find a line with a given shipment by shipment document and book."}),"\n",(0,t.jsx)(n.h3,{id:"solution-3",children:"Solution"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"shipmentDetail 'Shipment line' (Shipment s, Book b) = GROUP MAX ShipmentDetail d BY shipment(d), book(d);\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can use this property to implement the Search functionality when inputting a shipment document."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>a});var t=o(96540);const i={},l=t.createContext(i);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);