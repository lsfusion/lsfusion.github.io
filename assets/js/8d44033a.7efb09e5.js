"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[65200],{86265:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>E,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var o=t(74848),r=t(28453);const s={title:"How-to: SEEK"},a=void 0,l={id:"How-to_SEEK",title:"How-to: SEEK",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_SEEK.md",sourceDirName:".",slug:"/How-to_SEEK",permalink:"/v4/How-to_SEEK",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/How-to_SEEK.md",tags:[],version:"v4",lastUpdatedAt:1623078033e3,frontMatter:{title:"How-to: SEEK"},sidebar:"learn",previous:{title:"How-to: NEWSESSION",permalink:"/v4/How-to_NEWSESSION"},next:{title:"How-to: Events",permalink:"/v4/How-to_Events"}},c={},i=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3},{value:"Example 2",id:"example-2-1",level:2},{value:"Task",id:"task-2",level:3},{value:"Solution",id:"solution-2",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,o.jsx)(n.h3,{id:"task",children:"Task"}),"\n",(0,o.jsx)(n.p,{children:"We have a defined logic for books and categories. A form has been created with a list of books categorized."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"REQUIRE Time;\n\nCLASS Category 'Category';\nname 'Name' = DATA ISTRING[50] (Category) IN id;\n\nCLASS Book 'Book';\nname 'Name' = DATA ISTRING[50] (Book) IN id;\n\ncategory 'Category' = DATA Category (Book) NONULL;\nnameCategory 'Category' (Book b) = name(category(b));\n\nFORM book 'Book'\n    OBJECTS b = Book PANEL\n    PROPERTIES(b) name, nameCategory\n\n    EDIT Book OBJECT b\n;\n\nFORM books 'Books'\n    OBJECTS c = Category\n    PROPERTIES(c) READONLY name\n    PROPERTIES(c) NEWSESSION NEW, EDIT, DELETE\n\n    OBJECTS b = Book\n    PROPERTIES(b) READONLY name\n    FILTERS category(b) == c\n;\n\nNAVIGATOR {\n    NEW books;\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"We need to create an action that creates a new book, automatically assigns it to the current category and then makes this book active once the user saves and closes the form."}),"\n",(0,o.jsx)(n.h3,{id:"solution",children:"Solution"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"createBook 'Create book' (Category c)  {\n    NEWSESSION {\n        NEW newBook = Book {\n            category(newBook) <- c;\n            DIALOG book OBJECTS b = newBook INPUT DO {\n                SEEK books.b = newBook;\n            }\n        }\n    }\n}\n\nEXTEND FORM books\n    PROPERTIES(c) createBook DRAW b TOOLBAR\n;\n"})}),"\n",(0,o.jsxs)(n.p,{children:["After closing the form, we need to call the ",(0,o.jsxs)(n.a,{href:"/v4/SEEK_operator",children:[(0,o.jsx)(n.code,{children:"SEEK"})," operator"]})," which will make the added object active."]}),"\n",(0,o.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,o.jsx)(n.h3,{id:"task-1",children:"Task"}),"\n",(0,o.jsxs)(n.p,{children:["Similar to ",(0,o.jsx)(n.a,{href:"#example-1",children:(0,o.jsx)(n.strong,{children:"Example 1"})}),". We have also added the customer logic. The user can set a price for each customer and book in the dedicated form."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"CLASS Customer 'Customer';\nname 'Name' = DATA ISTRING[50] (Customer) IN id;\n\nprice 'Price' = DATA NUMERIC[14,2] (Customer, Book);\n\nFORM prices 'Prices'\n    OBJECTS c = Customer PANEL\n    PROPERTIES(c) name SELECTOR\n\n    OBJECTS b = Book\n    PROPERTIES name(b) READONLY, price(c, b)\n;\n\nNAVIGATOR {\n    NEW prices;\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"We need to add a default customer whose data will be populated when the user opens the form."}),"\n",(0,o.jsx)(n.h3,{id:"solution-1",children:"Solution"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"defaultCustomer 'Default customer' = DATA Customer ();\nnameDefaultCustomer 'Default customer' () = name(defaultCustomer());\n\nEXTEND FORM options PROPERTIES() nameDefaultCustomer;\nDESIGN options { commons { MOVE PROPERTY(nameDefaultCustomer()); } }\n\nEXTEND FORM prices\n    EVENTS ON INIT { SEEK prices.c = defaultCustomer(); }\n;\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The property with the default customer is added to the ",(0,o.jsx)(n.code,{children:"'Settings'"})," form on the ",(0,o.jsx)(n.code,{children:"'General'"})," tab. The current object will change once the user opens the form, since the ",(0,o.jsxs)(n.a,{href:"/v4/Event_block",children:[(0,o.jsx)(n.code,{children:"ON INIT"})," event"]})," will be triggered."]}),"\n",(0,o.jsx)(n.h2,{id:"example-2-1",children:"Example 2"}),"\n",(0,o.jsx)(n.h3,{id:"task-2",children:"Task"}),"\n",(0,o.jsx)(n.p,{children:"Let's assume that we have a report form for which a date range is specified."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"FORM report 'Report'\n    OBJECTS dFrom = DATE PANEL, dTo = DATE PANEL\n    PROPERTIES VALUE(dFrom), VALUE(dTo)\n;\n\nNAVIGATOR {\n    NEW report;\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"We need to create buttons that will modify the interval to the last week, current month or last month."}),"\n",(0,o.jsx)(n.h3,{id:"solution-2",children:"Solution"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"setReportLastWeek 'Last week' ()  {\n    SEEK report.dFrom = subtract(currentDate(), 7);\n    SEEK report.dTo = subtract(currentDate(), 1);\n}\nsetReportCurrentMonth 'Current month' ()  {\n    SEEK report.dFrom = firstDayOfMonth(currentDate());\n    SEEK report.dTo = lastDayOfMonth(currentDate());\n}\nsetReportLastMonth 'Last month' ()  {\n    SEEK report.dFrom = firstDayOfMonth(subtract(firstDayOfMonth(currentDate()), 1));\n    SEEK report.dTo = subtract(firstDayOfMonth(currentDate()), 1);\n}\n\nEXTEND FORM report\n    PROPERTIES() setReportLastWeek, setReportCurrentMonth, setReportLastMonth\n;\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Date properties can be found in the ",(0,o.jsx)(n.code,{children:"Time"})," ",(0,o.jsx)(n.a,{href:"/v4/Modules",children:"system module"})," which is loaded at the very beginning using the ",(0,o.jsx)(n.code,{children:"REQUIRE"})," statement."]})]})}function E(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var o=t(96540);const r={},s=o.createContext(r);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);