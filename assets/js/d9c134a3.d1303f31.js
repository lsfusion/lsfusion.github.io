"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[64311],{61839:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>E,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=o(74848),t=o(28453);const r={title:"How-to: Using objects as templates"},a=void 0,s={id:"How-to_Using_objects_as_templates",title:"How-to: Using objects as templates",description:"Example 1",source:"@site/docs/How-to_Using_objects_as_templates.md",sourceDirName:".",slug:"/How-to_Using_objects_as_templates",permalink:"/next/How-to_Using_objects_as_templates",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/How-to_Using_objects_as_templates.md",tags:[],version:"current",lastUpdatedAt:1622042248e3,frontMatter:{title:"How-to: Using objects as templates"},sidebar:"learn",previous:{title:"How-to: Numbering",permalink:"/next/How-to_Numbering"},next:{title:"How-to: Overriding values",permalink:"/next/How-to_Overriding_values"}},d={},l=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3},{value:"Example 3",id:"example-3",level:2},{value:"Task",id:"task-2",level:3},{value:"Solution",id:"solution-2",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,i.jsx)(n.h3,{id:"task",children:"Task"}),"\n",(0,i.jsx)(n.p,{children:"We have a book for which a name and price are defined. List and edit forms are defined for the book."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[50] (Book) IN id;\nprice 'Price' = DATA NUMERIC[14,2] (Book);\n\nFORM book 'Book'\n    OBJECTS b = Book PANEL\n    PROPERTIES(b) name, price\n\n    EDIT Book OBJECT b\n;\n\nFORM books 'Books'\n    OBJECTS b = Book\n    PROPERTIES(b) READONLY name, price\n    PROPERTIES(b) NEWSESSION NEW, EDIT, DELETE\n;\n"})}),"\n",(0,i.jsx)(n.p,{children:"We need to make a button that creates a new book based on the current one, and opens a form to edit it."}),"\n",(0,i.jsx)(n.h3,{id:"solution",children:"Solution"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"copy 'Copy' (Book book)  {\n    NEWSESSION {\n        NEW newBook = Book {\n            name(newBook) <- name(book);\n            price(newBook) <- price(book);\n            SHOW book OBJECTS b = newBook DOCKED;\n        }\n    }\n}\n\nEXTEND FORM books\n    PROPERTIES(b) copy TOOLBAR\n;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["When the button is pressed, a new ",(0,i.jsx)(n.a,{href:"/next/Change_sessions",children:"change session"})," will be created within which the book will be created and the new form will work with. If the user closes the form without saving, the new book will not be saved to the database and will be lost. The word ",(0,i.jsx)(n.code,{children:"TOOLBAR"})," specifies that this button should be displayed in the toolbar of the table with the list of orders."]}),"\n",(0,i.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,i.jsx)(n.h3,{id:"task-1",children:"Task"}),"\n",(0,i.jsx)(n.p,{children:"We have the concepts of order documents and invoices, as well as forms for listing and editing them. Lines are defined for each document."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"// Orders\nCLASS Order 'Order';\ndate 'Date' = DATA DATE (Order);\nnumber 'Number' = DATA INTEGER (Order);\n\nCLASS OrderDetail 'Order line';\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\n\nbook 'Book' = DATA Book (OrderDetail) NONULL;\nnameBook 'Book' (OrderDetail d) = name(book(d));\n\nquantity 'Quantity' = DATA INTEGER (OrderDetail);\nprice 'Price' = DATA NUMERIC[14,2] (OrderDetail);\n\nFORM order 'Order'\n    OBJECTS o = Order PANEL\n    PROPERTIES(o) date, number\n\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) nameBook, quantity, price, NEW, DELETE\n    FILTERS order(d) == o\n\n    EDIT Order OBJECT o\n;\n\nFORM orders 'Orders'\n    OBJECTS o = Order\n    PROPERTIES(o) READONLY date, number\n    PROPERTIES(o) NEWSESSION NEW, EDIT, DELETE\n;\n// Accounts\nCLASS Invoice 'Invoice';\ndate 'Date' = DATA DATE (Invoice);\nnumber 'Number' = DATA INTEGER (Invoice);\n\nCLASS InvoiceDetail 'Invoice line';\ninvoice 'Invoice' = DATA Invoice (InvoiceDetail) NONULL DELETE;\n\nbook 'Book' = DATA Book (InvoiceDetail) NONULL;\nnameBook 'Book' (InvoiceDetail d) = name(book(d));\n\nquantity 'Quantity' = DATA INTEGER (InvoiceDetail);\nprice 'Price' = DATA NUMERIC[14,2] (InvoiceDetail);\n\nFORM invoice 'Invoice'\n    OBJECTS i = Invoice PANEL\n    PROPERTIES(i) date, number\n\n    OBJECTS d = InvoiceDetail\n    PROPERTIES(d) nameBook, quantity, price, NEW, DELETE\n    FILTERS invoice(d) == i\n;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["We need to implement an ",(0,i.jsx)(n.a,{href:"/next/Actions",children:"action"})," that will create an invoice based on an order and open a form for editing it."]}),"\n",(0,i.jsx)(n.h3,{id:"solution-1",children:"Solution"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"createInvoice 'Create invoice' (Order o)  {\n    NEWSESSION {\n        NEW i = Invoice {\n            date(i) <- date(o);\n            number(i) <- number(o);\n\n            FOR order(OrderDetail od) == o NEW id = InvoiceDetail DO {\n                invoice(id) <- i;\n\n                book(id) <- book(od);\n\n                quantity(id) <- quantity(od);\n                price(id) <- price(od);\n            }\n            SHOW invoice OBJECTS i = i DOCKED;\n        }\n    }\n}\n\nEXTEND FORM orders\n    PROPERTIES(o) createInvoice TOOLBAR\n;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,i.jsx)(n.h3,{id:"task-2",children:"Task"}),"\n",(0,i.jsxs)(n.p,{children:["Similar to ",(0,i.jsx)(n.a,{href:"#example-2",children:(0,i.jsx)(n.strong,{children:"Example 2"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["We need to implement an ",(0,i.jsx)(n.a,{href:"/next/Actions",children:"action"})," that will open a dialog for the invoice with a list of orders and add lines from the selected one."]}),"\n",(0,i.jsx)(n.h3,{id:"solution-2",children:"Solution"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"fillOrder 'Fill in by order' (Invoice i)  {\n    DIALOG orders OBJECTS o INPUT DO {\n        date(i) <- date(o);\n        number(i) <- number(o);\n\n        FOR order(OrderDetail od) == o NEW id = InvoiceDetail DO {\n            invoice(id) <- i;\n\n            book(id) <- book(od);\n\n            quantity(id) <- quantity(od);\n            price(id) <- price(od);\n        }\n    }\n}\nEXTEND FORM invoice\n    PROPERTIES(i) fillOrder\n;\n"})}),"\n",(0,i.jsx)(n.p,{children:"No manipulation with change sessions is required because the button will be called from the account edit form and changes will occur within that session."})]})}function E(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>s});var i=o(96540);const t={},r=i.createContext(t);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);