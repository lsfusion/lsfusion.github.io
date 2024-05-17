"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[43298],{36326:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var i=o(74848),t=o(28453);const s={title:"How-to: FOR"},r=void 0,l={id:"How-to_FOR",title:"How-to: FOR",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_FOR.md",sourceDirName:".",slug:"/How-to_FOR",permalink:"/v4/How-to_FOR",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/How-to_FOR.md",tags:[],version:"v4",lastUpdatedAt:1619768637e3,frontMatter:{title:"How-to: FOR"},sidebar:"learn",previous:{title:"How-to: DELETE",permalink:"/v4/How-to_DELETE"},next:{title:"How-to: IF/CASE",permalink:"/v4/How-to_IF_CASE"}},d={},a=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Task",id:"task-1",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-2",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 3",id:"example-3",level:2},{value:"Task",id:"task-3",level:3},{value:"Solution",id:"solution-1",level:3},{value:"Example 4",id:"example-4",level:2},{value:"Task",id:"task-4",level:3},{value:"Solution",id:"solution-2",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,i.jsx)(n.h3,{id:"task",children:"Task"}),"\n",(0,i.jsx)(n.p,{children:"We have a list of books with titles."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[50] (Book);\n\nFORM books 'Books'\n    OBJECTS b = Book\n    PROPERTIES(b) name, NEW, DELETE\n;\n\nNAVIGATOR {\n    NEW books;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"We need to find all the books containing a given line and display a message with their names and internal codes."}),"\n",(0,i.jsx)(n.h3,{id:"task-1",children:"Task"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"findNemo 'Find book' ()  {\n    FOR isSubstring(name(Book b), 'Nemo') DO {\n        MESSAGE 'Found book ' + name (b) + ' with internal code ' + b;\n    }\n}\nEXTEND FORM books\n    PROPERTIES() findNemo\n;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Use the isSubstring property (defined in the ",(0,i.jsx)(n.code,{children:"Utils"})," system ",(0,i.jsx)(n.a,{href:"/v4/Modules",children:"module"}),") to identify whether a given line contains another line."]}),"\n",(0,i.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,i.jsx)(n.h3,{id:"task-2",children:"Task"}),"\n",(0,i.jsxs)(n.p,{children:["Similar to ",(0,i.jsx)(n.a,{href:"#example-1",children:(0,i.jsx)(n.strong,{children:"Example 1"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:"We need to create an action that creates 100 new books with certain titles."}),"\n",(0,i.jsx)(n.h3,{id:"solution",children:"Solution"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"add100Books 'Add 100 books' ()  {\n    // Option 1\n    FOR iterate(INTEGER i, 1, 100) NEW b = Book DO {\n        name(b) <- 'Book ' + i;\n    }\n\n    // Option 2\n    FOR iterate(INTEGER i, 1, 100) DO {\n        NEW b = Book {\n            name(b) <- 'Book ' + i;\n        }\n    }\n}\n\nEXTEND FORM books\n    PROPERTIES() add100Books\n;\n"})}),"\n",(0,i.jsx)(n.p,{children:"Both these implementations will provide the same result."}),"\n",(0,i.jsxs)(n.p,{children:["To solve this task, use the ",(0,i.jsx)(n.code,{children:"iterate"})," property (defined in the ",(0,i.jsx)(n.code,{children:"Utils"})," system module) which returns ",(0,i.jsx)(n.code,{children:"TRUE"})," for all integers in the range."]}),"\n",(0,i.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,i.jsx)(n.h3,{id:"task-3",children:"Task"}),"\n",(0,i.jsxs)(n.p,{children:["Similar to ",(0,i.jsx)(n.a,{href:"#example-1",children:(0,i.jsx)(n.strong,{children:"Example 1"})}),", but with the order logic. Each order contains lines where books and discount prices are specified."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"CLASS Order 'Order';\n\nCLASS OrderDetail 'Order line';\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\nbook 'Book' = DATA Book (OrderDetail);\nnameBook 'Book' (OrderDetail d) = name(book(d));\n\nprice 'Price' = DATA NUMERIC[14,2] (OrderDetail);\n\ndiscount 'Discount, %' = DATA NUMERIC[8,2] (OrderDetail);\ndiscountPrice 'Discount price' = DATA NUMERIC[14,2] (OrderDetail);\n"})}),"\n",(0,i.jsx)(n.p,{children:"We need to create an action that applies a discount to all the lines with prices above 100."}),"\n",(0,i.jsx)(n.h3,{id:"solution-1",children:"Solution"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"makeDiscount 'Make discount' (Order o)  {\n    // Option 1\n    FOR order(OrderDetail d) == o AND price(d) > 100 DO {\n        discount(d) <- 10;\n        discountPrice(d) <- price(d) * (100.0 - discount(d)) / 100.0;\n    }\n\n    // Option 2\n    discount(OrderDetail d) <- 10 WHERE order(d) == o AND price(d) > 100;\n    discountPrice(OrderDetail d) <- price(d) * (100.0 - discount(d)) / 100.0 WHERE order(d) == o AND price(d) > 100;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Both these implementations will provide the same result."}),"\n",(0,i.jsx)(n.h2,{id:"example-4",children:"Example 4"}),"\n",(0,i.jsx)(n.h3,{id:"task-4",children:"Task"}),"\n",(0,i.jsxs)(n.p,{children:["Similar to ",(0,i.jsx)(n.a,{href:"#example-3",children:(0,i.jsx)(n.strong,{children:"Example 3"})}),", but a default price was added for each book."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"price 'Price' = DATA NUMERIC[14,2] (Book);\n"})}),"\n",(0,i.jsx)(n.p,{children:"We need to create an action that adds all the books with prices above 100 to the order."}),"\n",(0,i.jsx)(n.h3,{id:"solution-2",children:"Solution"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"addSelectedBooks 'Add marked books' (Order o)  {\n    // Option 1\n    FOR price(Book b) > 100 NEW d = OrderDetail DO {\n        order(d) <- o;\n        book(d) <- b;\n        price(d) <- price(b);\n    }\n\n    // Option 2\n    FOR price(Book b) == NUMERIC[14,2] p AND p > 100 NEW d = OrderDetail DO {\n        order(d) <- o;\n        book(d) <- b;\n        price(d) <- p;\n    }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Both these implementations will provide the same result."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>l});var i=o(96540);const t={},s=i.createContext(t);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);