"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[1864],{2373:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=o(74848),a=o(28453);const l={title:"How-to: GROUP SUM"},s=void 0,i={id:"How-to_GROUP_SUM",title:"How-to: GROUP SUM",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_GROUP_SUM.md",sourceDirName:".",slug:"/How-to_GROUP_SUM",permalink:"/v4/How-to_GROUP_SUM",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/How-to_GROUP_SUM.md",tags:[],version:"v4",lastUpdatedAt:1619709222e3,frontMatter:{title:"How-to: GROUP SUM"},sidebar:"learn",previous:{title:"How-to: Computations",permalink:"/v4/How-to_Computations"},next:{title:"How-to: GROUP MAX/MIN/AGGR",permalink:"/v4/How-to_GROUP_MAX_MIN_AGGR"}},r={},c=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3},{value:"Example 3",id:"example-3",level:2},{value:"Task",id:"task-2",level:3},{value:"Solution",id:"solution-2",level:3},{value:"Example 4",id:"example-4",level:2},{value:"Task",id:"task-3",level:3},{value:"Solution",id:"solution-3",level:3},{value:"Example 5",id:"example-5",level:2},{value:"Task",id:"task-4",level:3},{value:"Solution",id:"solution-4",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"example-1",children:"Example 1"}),"\n",(0,n.jsx)(t.h3,{id:"task",children:"Task"}),"\n",(0,n.jsx)(t.p,{children:"We have a set of books associated with certain category."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lsf",children:"CLASS Book 'Book';\nCLASS Category 'Category';\n\ncategory 'Category' = DATA Category (Book);\n"})}),"\n",(0,n.jsx)(t.p,{children:"We need to calculate the number of books in the category."}),"\n",(0,n.jsx)(t.h3,{id:"solution",children:"Solution"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lsf",children:"countBooks 'Number of books' (Category c) = GROUP SUM 1 BY category(Book book);\n"})}),"\n",(0,n.jsx)(t.h2,{id:"example-2",children:"Example 2"}),"\n",(0,n.jsx)(t.h3,{id:"task-1",children:"Task"}),"\n",(0,n.jsx)(t.p,{children:"We have a set of books associated with certain tags. Each book can be associated with several tags at the same time."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lsf",children:"CLASS Tag 'Tag';\n\nin 'On' = DATA BOOLEAN (Tag, Book);\n"})}),"\n",(0,n.jsx)(t.p,{children:"We need to calculate the number of books in the tag."}),"\n",(0,n.jsx)(t.h3,{id:"solution-1",children:"Solution"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lsf",children:"countBooks 'Number of books' (Tag t) = GROUP SUM 1 IF in(t, Book b);\n"})}),"\n",(0,n.jsx)(t.h2,{id:"example-3",children:"Example 3"}),"\n",(0,n.jsx)(t.h3,{id:"task-2",children:"Task"}),"\n",(0,n.jsx)(t.p,{children:"We have the information about the movement of books: each record is linked to the book itself and the warehouse where the movement occured, and also contains quantity and types of operations (receipt/shipment)."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lsf",children:"CLASS Stock 'Warehouse';\n\n\nCLASS Ledger 'Movement';\nbook 'Book' = DATA Book (Ledger);\nstock 'Warehouse' = DATA Stock (Ledger);\n\nquantity 'Qty' = DATA INTEGER (Ledger);\nout 'Expenses' = DATA BOOLEAN (Ledger);\n"})}),"\n",(0,n.jsx)(t.p,{children:"We need to calculate the current balance for a book at the warehouse."}),"\n",(0,n.jsx)(t.h3,{id:"solution-2",children:"Solution"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lsf",children:"TABLE bookStock (Book, Stock);\ncurrentBalance 'Current balance' (Book b, Stock s) = GROUP SUM IF out(Ledger l) THEN -quantity(l) ELSE quantity(l) BY book(l), stock(l) MATERIALIZED;\n"})}),"\n",(0,n.jsxs)(t.p,{children:["It is recommended to mark the ",(0,n.jsx)(t.code,{children:"currentBalance"})," property as ",(0,n.jsx)(t.a,{href:"/v4/Materializations",children:(0,n.jsx)(t.code,{children:"MATERIALIZED"})}),", so that when reading the current balances, the system could take the calculated value from the ",(0,n.jsx)(t.code,{children:"bookStock"})," table instead of recalculating this value based on all movements. Though this will slow down the writing process (since writing each movement will require updating the current balance), the reading process will become much faster."]}),"\n",(0,n.jsxs)(t.p,{children:["Note that you do not need to define explicitly in which table to keep the ",(0,n.jsx)(t.code,{children:"currentBalance"})," property, since the system will use the signature to find out the most suitable table for it (in this case, this will be ",(0,n.jsx)(t.code,{children:"bookStock"}),")."]}),"\n",(0,n.jsx)(t.h2,{id:"example-4",children:"Example 4"}),"\n",(0,n.jsx)(t.h3,{id:"task-3",children:"Task"}),"\n",(0,n.jsxs)(t.p,{children:["Similar to ",(0,n.jsx)(t.a,{href:"#example-3",children:(0,n.jsx)(t.strong,{children:"Example 3"})}),", except that each movement is associated with the date of movement."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lsf",children:"date 'Date' = DATA DATE (Ledger) INDEXED; // it is better to add an index to filter by date quickly\n"})}),"\n",(0,n.jsx)(t.p,{children:"We need to calculate the current balance for a given book at the warehouse for the specific date (as of the morning, without the movements occured on that day)."}),"\n",(0,n.jsx)(t.h3,{id:"solution-3",children:"Solution"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lsf",children:"// Option 1\nbalance1 'Balance as of date' (Book b, Stock s, DATE d) = GROUP SUM (IF out(Ledger l) THEN -quantity(l) ELSE quantity(l)) IF date(l) < d BY book(l), stock(l);\n\n// Option 2\nbalance2 'Balance as of date' (Book b, Stock s, DATE d) = currentBalance(b, s) (-) [ GROUP SUM (IF out(Ledger l) THEN -quantity(l) ELSE quantity(l)) IF date(l) >= d BY book(l), stock(l)](b, s);\n"})}),"\n",(0,n.jsx)(t.p,{children:'The second option is preferable. Since requests usually refer to recent dates, the server will be calculating the result "retrospectively" from the current balance, thereby analyzing fewer records.'}),"\n",(0,n.jsx)(t.h2,{id:"example-5",children:"Example 5"}),"\n",(0,n.jsx)(t.h3,{id:"task-4",children:"Task"}),"\n",(0,n.jsxs)(t.p,{children:["Similar to ",(0,n.jsx)(t.a,{href:"#example-3",children:(0,n.jsx)(t.strong,{children:"Example 3"})}),", except that we need to calculate the current balance for a given book across all the warehouses."]}),"\n",(0,n.jsx)(t.h3,{id:"solution-4",children:"Solution"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lsf",children:"currentBalance 'Current balance' (Book b) = GROUP SUM currentBalance(b, Stock s);\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Unlike the current balance for all the warehouses, it is not reasonable to mark this property as ",(0,n.jsx)(t.code,{children:"MATERIALIZED"})," if you have only few warehouses \u2014 otherwise, UPDATE CONFLICT may occur when several users try to write the movement of the same book at different warehouses simultaneously."]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>i});var n=o(96540);const a={},l=n.createContext(a);function s(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);