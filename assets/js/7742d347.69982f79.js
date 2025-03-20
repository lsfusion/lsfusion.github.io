"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["70697"],{60573:function(e,n,o){o.r(n),o.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>i,assets:()=>d,toc:()=>a,contentTitle:()=>s});var i=JSON.parse('{"id":"How-to_FOR","title":"How-to: FOR","description":"Example 1","source":"@site/docs/How-to_FOR.md","sourceDirName":".","slug":"/How-to_FOR","permalink":"/How-to_FOR","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/master/docs/en/How-to_FOR.md","tags":[],"version":"current","lastUpdatedAt":1622042248000,"frontMatter":{"title":"How-to: FOR"},"sidebar":"learn","previous":{"title":"How-to: DELETE","permalink":"/How-to_DELETE"},"next":{"title":"How-to: IF/CASE","permalink":"/How-to_IF_CASE"}}'),t=o("85893"),l=o("50065");let r={title:"How-to: FOR"},s=void 0,d={},a=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Task",id:"task-1",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-2",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 3",id:"example-3",level:2},{value:"Task",id:"task-3",level:3},{value:"Solution",id:"solution-1",level:3},{value:"Example 4",id:"example-4",level:2},{value:"Task",id:"task-4",level:3},{value:"Solution",id:"solution-2",level:3}];function c(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsx)(n.h3,{id:"task",children:"Task"}),"\n",(0,t.jsx)(n.p,{children:"We have a list of books with titles."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[50] (Book);\n\nFORM books 'Books'\n    OBJECTS b = Book\n    PROPERTIES(b) name, NEW, DELETE\n;\n\nNAVIGATOR {\n    NEW books;\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"We need to find all the books containing a given line and display a message with their names and internal codes."}),"\n",(0,t.jsx)(n.h3,{id:"task-1",children:"Task"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"findNemo 'Find book' ()  {\n    FOR isSubstring(name(Book b), 'Nemo') DO {\n        MESSAGE 'Found book ' + name (b) + ' with internal code ' + b;\n    }\n}\nEXTEND FORM books\n    PROPERTIES() findNemo\n;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Use the isSubstring property (defined in the ",(0,t.jsx)(n.code,{children:"Utils"})," system ",(0,t.jsx)(n.a,{href:"/Modules",children:"module"}),") to identify whether a given line contains another line."]}),"\n",(0,t.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsx)(n.h3,{id:"task-2",children:"Task"}),"\n",(0,t.jsxs)(n.p,{children:["Similar to ",(0,t.jsx)(n.a,{href:"#example-1",children:(0,t.jsx)(n.strong,{children:"Example 1"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:"We need to create an action that creates 100 new books with certain titles."}),"\n",(0,t.jsx)(n.h3,{id:"solution",children:"Solution"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"add100Books 'Add 100 books' ()  {\n    // Option 1\n    FOR iterate(INTEGER i, 1, 100) NEW b = Book DO {\n        name(b) <- 'Book ' + i;\n    }\n\n    // Option 2\n    FOR iterate(INTEGER i, 1, 100) DO {\n        NEW b = Book {\n            name(b) <- 'Book ' + i;\n        }\n    }\n}\n\nEXTEND FORM books\n    PROPERTIES() add100Books\n;\n"})}),"\n",(0,t.jsx)(n.p,{children:"Both these implementations will provide the same result."}),"\n",(0,t.jsxs)(n.p,{children:["To solve this task, use the ",(0,t.jsx)(n.code,{children:"iterate"})," property (defined in the ",(0,t.jsx)(n.code,{children:"Utils"})," system module) which returns ",(0,t.jsx)(n.code,{children:"TRUE"})," for all integers in the range."]}),"\n",(0,t.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,t.jsx)(n.h3,{id:"task-3",children:"Task"}),"\n",(0,t.jsxs)(n.p,{children:["Similar to ",(0,t.jsx)(n.a,{href:"#example-1",children:(0,t.jsx)(n.strong,{children:"Example 1"})}),", but with the order logic. Each order contains lines where books and discount prices are specified."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"CLASS Order 'Order';\n\nCLASS OrderDetail 'Order line';\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\nbook 'Book' = DATA Book (OrderDetail);\nnameBook 'Book' (OrderDetail d) = name(book(d));\n\nprice 'Price' = DATA NUMERIC[14,2] (OrderDetail);\n\ndiscount 'Discount, %' = DATA NUMERIC[8,2] (OrderDetail);\ndiscountPrice 'Discount price' = DATA NUMERIC[14,2] (OrderDetail);\n"})}),"\n",(0,t.jsx)(n.p,{children:"We need to create an action that applies a discount to all the lines with prices above 100."}),"\n",(0,t.jsx)(n.h3,{id:"solution-1",children:"Solution"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"makeDiscount 'Make discount' (Order o)  {\n    // Option 1\n    FOR order(OrderDetail d) == o AND price(d) > 100 DO {\n        discount(d) <- 10;\n        discountPrice(d) <- price(d) * (100.0 - discount(d)) / 100.0;\n    }\n\n    // Option 2\n    discount(OrderDetail d) <- 10 WHERE order(d) == o AND price(d) > 100;\n    discountPrice(OrderDetail d) <- price(d) * (100.0 - discount(d)) / 100.0 WHERE order(d) == o AND price(d) > 100;\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Both these implementations will provide the same result."}),"\n",(0,t.jsx)(n.h2,{id:"example-4",children:"Example 4"}),"\n",(0,t.jsx)(n.h3,{id:"task-4",children:"Task"}),"\n",(0,t.jsxs)(n.p,{children:["Similar to ",(0,t.jsx)(n.a,{href:"#example-3",children:(0,t.jsx)(n.strong,{children:"Example 3"})}),", but a default price was added for each book."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"price 'Price' = DATA NUMERIC[14,2] (Book);\n"})}),"\n",(0,t.jsx)(n.p,{children:"We need to create an action that adds all the books with prices above 100 to the order."}),"\n",(0,t.jsx)(n.h3,{id:"solution-2",children:"Solution"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"addSelectedBooks 'Add marked books' (Order o)  {\n    // Option 1\n    FOR price(Book b) > 100 NEW d = OrderDetail DO {\n        order(d) <- o;\n        book(d) <- b;\n        price(d) <- price(b);\n    }\n\n    // Option 2\n    FOR price(Book b) == NUMERIC[14,2] p AND p > 100 NEW d = OrderDetail DO {\n        order(d) <- o;\n        book(d) <- b;\n        price(d) <- p;\n    }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Both these implementations will provide the same result."})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},50065:function(e,n,o){o.d(n,{Z:function(){return s},a:function(){return r}});var i=o(67294);let t={},l=i.createContext(t);function r(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);