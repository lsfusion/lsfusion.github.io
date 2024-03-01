"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[73289],{64106:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>E,frontMatter:()=>t,metadata:()=>s,toc:()=>l});var o=r(74848),i=r(28453);const t={title:"How-to: Using objects as templates"},a=void 0,s={id:"How-to_Using_objects_as_templates",title:"How-to: Using objects as templates",description:"Example 1",source:"@site/versioned_docs/version-v5/How-to_Using_objects_as_templates.md",sourceDirName:".",slug:"/How-to_Using_objects_as_templates",permalink:"/How-to_Using_objects_as_templates",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/How-to_Using_objects_as_templates.md",tags:[],version:"v5",lastUpdatedAt:1685108136,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{title:"How-to: Using objects as templates"},sidebar:"learn",previous:{title:"How-to: Numbering",permalink:"/How-to_Numbering"},next:{title:"How-to: Overriding values",permalink:"/How-to_Overriding_values"}},d={},l=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3},{value:"Example 3",id:"example-3",level:2},{value:"Task",id:"task-2",level:3},{value:"Solution",id:"solution-2",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,o.jsx)(n.h3,{id:"task",children:"Task"}),"\n",(0,o.jsx)(n.p,{children:"We have a book for which a name and price are defined. List and edit forms are defined for the book."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"CLASS Book 'Book';\r\nname 'Name' = DATA ISTRING[50] (Book) IN id;\r\nprice 'Price' = DATA NUMERIC[14,2] (Book);\r\n\r\nFORM book 'Book'\r\n    OBJECTS b = Book PANEL\r\n    PROPERTIES(b) name, price\r\n\r\n    EDIT Book OBJECT b\r\n;\r\n\r\nFORM books 'Books'\r\n    OBJECTS b = Book\r\n    PROPERTIES(b) READONLY name, price\r\n    PROPERTIES(b) NEWSESSION NEW, EDIT, DELETE\r\n;\n"})}),"\n",(0,o.jsx)(n.p,{children:"We need to make a button that creates a new book based on the current one, and opens a form to edit it."}),"\n",(0,o.jsx)(n.h3,{id:"solution",children:"Solution"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"copy 'Copy' (Book book)  {\r\n    NEWSESSION {\r\n        NEW newBook = Book {\r\n            name(newBook) <- name(book);\r\n            price(newBook) <- price(book);\r\n            SHOW book OBJECTS b = newBook DOCKED;\r\n        }\r\n    }\r\n}\r\n\r\nEXTEND FORM books\r\n    PROPERTIES(b) copy TOOLBAR\r\n;\n"})}),"\n",(0,o.jsxs)(n.p,{children:["When the button is pressed, a new ",(0,o.jsx)(n.a,{href:"/Change_sessions",children:"change session"})," will be created within which the book will be created and the new form will work with. If the user closes the form without saving, the new book will not be saved to the database and will be lost. The word ",(0,o.jsx)(n.code,{children:"TOOLBAR"})," specifies that this button should be displayed in the toolbar of the table with the list of orders."]}),"\n",(0,o.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,o.jsx)(n.h3,{id:"task-1",children:"Task"}),"\n",(0,o.jsx)(n.p,{children:"We have the concepts of order documents and invoices, as well as forms for listing and editing them. Lines are defined for each document."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"// Orders\r\nCLASS Order 'Order';\r\ndate 'Date' = DATA DATE (Order);\r\nnumber 'Number' = DATA INTEGER (Order);\r\n\r\nCLASS OrderDetail 'Order line';\r\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\r\n\r\nbook 'Book' = DATA Book (OrderDetail) NONULL;\r\nnameBook 'Book' (OrderDetail d) = name(book(d));\r\n\r\nquantity 'Quantity' = DATA INTEGER (OrderDetail);\r\nprice 'Price' = DATA NUMERIC[14,2] (OrderDetail);\r\n\r\nFORM order 'Order'\r\n    OBJECTS o = Order PANEL\r\n    PROPERTIES(o) date, number\r\n\r\n    OBJECTS d = OrderDetail\r\n    PROPERTIES(d) nameBook, quantity, price, NEW, DELETE\r\n    FILTERS order(d) == o\r\n\r\n    EDIT Order OBJECT o\r\n;\r\n\r\nFORM orders 'Orders'\r\n    OBJECTS o = Order\r\n    PROPERTIES(o) READONLY date, number\r\n    PROPERTIES(o) NEWSESSION NEW, EDIT, DELETE\r\n;\r\n// Accounts\r\nCLASS Invoice 'Invoice';\r\ndate 'Date' = DATA DATE (Invoice);\r\nnumber 'Number' = DATA INTEGER (Invoice);\r\n\r\nCLASS InvoiceDetail 'Invoice line';\r\ninvoice 'Invoice' = DATA Invoice (InvoiceDetail) NONULL DELETE;\r\n\r\nbook 'Book' = DATA Book (InvoiceDetail) NONULL;\r\nnameBook 'Book' (InvoiceDetail d) = name(book(d));\r\n\r\nquantity 'Quantity' = DATA INTEGER (InvoiceDetail);\r\nprice 'Price' = DATA NUMERIC[14,2] (InvoiceDetail);\r\n\r\nFORM invoice 'Invoice'\r\n    OBJECTS i = Invoice PANEL\r\n    PROPERTIES(i) date, number\r\n\r\n    OBJECTS d = InvoiceDetail\r\n    PROPERTIES(d) nameBook, quantity, price, NEW, DELETE\r\n    FILTERS invoice(d) == i\r\n;\n"})}),"\n",(0,o.jsxs)(n.p,{children:["We need to implement an ",(0,o.jsx)(n.a,{href:"/Actions",children:"action"})," that will create an invoice based on an order and open a form for editing it."]}),"\n",(0,o.jsx)(n.h3,{id:"solution-1",children:"Solution"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"createInvoice 'Create invoice' (Order o)  {\r\n    NEWSESSION {\r\n        NEW i = Invoice {\r\n            date(i) <- date(o);\r\n            number(i) <- number(o);\r\n\r\n            FOR order(OrderDetail od) == o NEW id = InvoiceDetail DO {\r\n                invoice(id) <- i;\r\n\r\n                book(id) <- book(od);\r\n\r\n                quantity(id) <- quantity(od);\r\n                price(id) <- price(od);\r\n            }\r\n            SHOW invoice OBJECTS i = i DOCKED;\r\n        }\r\n    }\r\n}\r\n\r\nEXTEND FORM orders\r\n    PROPERTIES(o) createInvoice TOOLBAR\r\n;\n"})}),"\n",(0,o.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,o.jsx)(n.h3,{id:"task-2",children:"Task"}),"\n",(0,o.jsxs)(n.p,{children:["Similar to ",(0,o.jsx)(n.a,{href:"#example-2",children:(0,o.jsx)(n.strong,{children:"Example 2"})}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["We need to implement an ",(0,o.jsx)(n.a,{href:"/Actions",children:"action"})," that will open a dialog for the invoice with a list of orders and add lines from the selected one."]}),"\n",(0,o.jsx)(n.h3,{id:"solution-2",children:"Solution"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"fillOrder 'Fill in by order' (Invoice i)  {\r\n    DIALOG orders OBJECTS o INPUT DO {\r\n        date(i) <- date(o);\r\n        number(i) <- number(o);\r\n\r\n        FOR order(OrderDetail od) == o NEW id = InvoiceDetail DO {\r\n            invoice(id) <- i;\r\n\r\n            book(id) <- book(od);\r\n\r\n            quantity(id) <- quantity(od);\r\n            price(id) <- price(od);\r\n        }\r\n    }\r\n}\r\nEXTEND FORM invoice\r\n    PROPERTIES(i) fillOrder\r\n;\n"})}),"\n",(0,o.jsx)(n.p,{children:"No manipulation with change sessions is required because the button will be called from the account edit form and changes will occur within that session."})]})}function E(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>s});var o=r(96540);const i={},t=o.createContext(i);function a(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);