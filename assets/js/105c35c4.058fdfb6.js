"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[89241],{41516:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(74848),o=n(28453);const a={title:"How-to: PARTITION"},s=void 0,l={id:"How-to_PARTITION",title:"How-to: PARTITION",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_PARTITION.md",sourceDirName:".",slug:"/How-to_PARTITION",permalink:"/v4/How-to_PARTITION",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/How-to_PARTITION.md",tags:[],version:"v4",lastUpdatedAt:162565152e4,frontMatter:{title:"How-to: PARTITION"},sidebar:"learn",previous:{title:"How-to: GROUP CONCAT",permalink:"/v4/How-to_GROUP_CONCAT"},next:{title:"How-to: GUI",permalink:"/v4/How-to_GUI"}},i={},d=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3},{value:"Example 3",id:"example-3",level:2},{value:"Task",id:"task-2",level:3},{value:"Solution",id:"solution-2",level:3}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(t.h3,{id:"task",children:"Task"}),"\n",(0,r.jsx)(t.p,{children:"We have an order with the lines."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lsf",children:"CLASS Order 'Order';\nCLASS OrderDetail 'Order line';\n\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\n"})}),"\n",(0,r.jsx)(t.p,{children:"We need to number the lines starting from 1 as they are added to the order."}),"\n",(0,r.jsx)(t.h3,{id:"solution",children:"Solution"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lsf",children:"index 'Line number' (OrderDetail d) = PARTITION SUM 1 ORDER d BY order(d) CHARWIDTH 4;\n"})}),"\n",(0,r.jsx)(t.p,{children:"In this case, we sort by internal ID of lines in the order, since we know for sure that this ID increases when the new lines are created."}),"\n",(0,r.jsx)(t.h2,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(t.h3,{id:"task-1",children:"Task"}),"\n",(0,r.jsx)(t.p,{children:"We have a list of customer orders with specified dates."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lsf",children:"date 'Date' = DATA DATE (Order);\n\nCLASS Customer 'Customer';\ncustomer 'Customer' = DATA Customer (Order);\n"})}),"\n",(0,r.jsx)(t.p,{children:"For each order we need to find the date of the previous order placed by the same customer."}),"\n",(0,r.jsx)(t.h3,{id:"solution-1",children:"Solution"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lsf",children:"prevOrderDate 'Previous order' (Order o) = PARTITION PREV date(o) ORDER date(o), o BY customer(o);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Similar to ",(0,r.jsxs)(t.a,{href:"/v4/How-to_GROUP_CONCAT",children:["How-to: ",(0,r.jsx)(t.code,{children:"GROUP CONCAT"})]}),", the order should be uniquely determined. Therefore, we add the order itself (i. e. its internal ID) as the last argument for ",(0,r.jsx)(t.code,{children:"ORDER"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"example-3",children:"Example 3"}),"\n",(0,r.jsx)(t.h3,{id:"task-2",children:"Task"}),"\n",(0,r.jsx)(t.p,{children:"We have the current balance for books by batches."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lsf",children:"CLASS Book 'Book';\n\nCLASS Batch 'Batch';\nbook 'Book' = DATA Book (Batch);\ndate 'Arrival date' = DATA DATE (Batch);\n\nCLASS Stock 'Warehouse';\n// The balance is made data for the example. This is usually a calculated property.\ncurrentBalance 'Balance' = DATA INTEGER (Batch, Stock); \n"})}),"\n",(0,r.jsx)(t.p,{children:"We need to distribute the specified quantity for a specified book by batches according to the FIFO principle."}),"\n",(0,r.jsx)(t.h3,{id:"solution-2",children:"Solution"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lsf",children:"quantity = DATA LOCAL INTEGER (Book);\n\nquantityFIFO 'Quantity by FIFO batch' (Batch b, Stock s) = PARTITION UNGROUP quantity\n                                                                    LIMIT STRICT currentBalance(b, s)\n                                                                    ORDER date(b), b\n                                                                    BY book(b);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"STRICT"})," parameter means that if the quantity is greater than the total balance for all batches, then the remaining difference will be added to the last batch."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var r=n(96540);const o={},a=r.createContext(o);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);