"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[9159],{99520:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var t=r(74848),i=r(28453);const o={title:"How-to: Data import"},a=void 0,s={id:"How-to_Data_import",title:"How-to: Data import",description:"Example 1",source:"@site/versioned_docs/version-v5/How-to_Data_import.md",sourceDirName:".",slug:"/How-to_Data_import",permalink:"/v5/How-to_Data_import",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/How-to_Data_import.md",tags:[],version:"v5",lastUpdatedAt:1685108136e3,frontMatter:{title:"How-to: Data import"},sidebar:"learn",previous:{title:"How-to: Data export",permalink:"/v5/How-to_Data_export"},next:{title:"How-to: Interaction via HTTP protocol",permalink:"/v5/How-to_Interaction_via_HTTP_protocol"}},d={},l=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3},{value:"Example 3",id:"example-3",level:2},{value:"Task",id:"task-2",level:3},{value:"Solution",id:"solution-2",level:3},{value:"Example 4",id:"example-4",level:2},{value:"Task",id:"task-3",level:3},{value:"Solution",id:"solution-3",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsx)(n.h3,{id:"task",children:"Task"}),"\n",(0,t.jsx)(n.p,{children:"We have the books for which names and prices are defined. The order logic is also defined."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"REQUIRE Utils;\n\nCLASS Book 'Book';\nname 'Name' = DATA ISTRING[100] (Book) IN id;\n\nid 'Code' = DATA STRING[20] (Book) IN id;\nbook 'Book' (STRING[20] id) = GROUP AGGR Book b BY id(b);\n\nCLASS Order 'Order';\ndate 'Date' = DATA DATE (Order);\nnumber 'Number' = DATA STRING[10] (Order);\n\nCLASS OrderDetail 'Order line';\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\n\nbook 'Book' = DATA Book (OrderDetail) NONULL;\nnameBook 'Book' (OrderDetail d) = name(book(d));\n\nquantity 'Quantity' = DATA INTEGER (OrderDetail);\nprice 'Price' = DATA NUMERIC[14,2] (OrderDetail);\n\nFORM order 'Order'\n    OBJECTS o = Order PANEL\n    PROPERTIES(o) date, number\n\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) nameBook, quantity, price, NEW, DELETE\n    FILTERS order(d) == o\n\n    EDIT Order OBJECT o\n;\n\nFORM orders 'Orders'\n    OBJECTS o = Order\n    PROPERTIES(o) READONLY date, number\n    PROPERTIES(o) NEWSESSION NEW, EDIT, DELETE\n;\n\nNAVIGATOR {\n    NEW orders;\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"We need to create a button that loads the contents of the order from the Excel file selected by the user on their computer."}),"\n",(0,t.jsx)(n.h3,{id:"solution",children:"Solution"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"importXlsx 'Import from XLS' (Order o)  {\n    INPUT f = EXCELFILE DO {\n\n        LOCAL bookId = STRING[20] (INTEGER);\n        LOCAL quantity = INTEGER (INTEGER);\n        LOCAL price = NUMERIC[14,2] (INTEGER);\n\n        IMPORT XLS FROM f TO bookId = A, quantity = B, price = C;\n\n        FOR imported(INTEGER i) NEW d = OrderDetail DO {\n            order(d) <- o;\n\n            book(d) <- book(bookId(i));\n            quantity(d) <- quantity(i);\n            price(d) <- price(i);\n        }\n    }\n}\n\nEXTEND FORM order\n    PROPERTIES(o) importXlsx\n;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsxs)(n.a,{href:"/v5/INPUT_operator",children:[(0,t.jsx)(n.code,{children:"INPUT"})," operator"]})," which requests a file will display a dialog where the user will be able to choose an .xls or .xlsx file. Once the file is selected successfully, the system will call the ",(0,t.jsx)(n.a,{href:"/v5/Actions",children:"action"})," specified after ",(0,t.jsx)(n.code,{children:"DO"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["It is assumed that a file consists of three columns. The first one ",(0,t.jsx)(n.code,{children:"A"})," contains book codes, the second one ",(0,t.jsx)(n.code,{children:"B"})," contains quantities, and the third one ",(0,t.jsx)(n.code,{children:"C"})," contains prices."]}),"\n",(0,t.jsxs)(n.p,{children:["The  ",(0,t.jsxs)(n.a,{href:"/v5/IMPORT_operator",children:[(0,t.jsx)(n.code,{children:"IMPORT"})," operator"]})," reads the selected file and then writes its contents to local properties which take only one argument \u2014 line number. The numbering starts from 0. The ",(0,t.jsx)(n.code,{children:"imported"})," property will be set to ",(0,t.jsx)(n.code,{children:"TRUE"})," if the file contains a line with the corresponding number. Then, a corresponding line is created in the order for each of these lines."]}),"\n",(0,t.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsx)(n.h3,{id:"task-1",children:"Task"}),"\n",(0,t.jsxs)(n.p,{children:["Similar to ",(0,t.jsx)(n.a,{href:"#example-1",children:(0,t.jsx)(n.strong,{children:"Example 1"})}),". In addition, we have specified a directory to which an external system puts orders. For each order, a separate CSV file is generated for storing the order date and number (in the denormalized form) along with the book code, quantity, and price."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"serverDirectory 'Directory on the server from which orders should be imported' = DATA STRING[100] ();\n\nEXTEND FORM orders PROPERTIES() serverDirectory;\n"})}),"\n",(0,t.jsx)(n.p,{children:"We need to implement an action that will import orders from this folder into the system."}),"\n",(0,t.jsx)(n.h3,{id:"solution-1",children:"Solution"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"importOrders 'Import orders from directory' ()  {\n\n    listFiles('file://' + serverDirectory());\n\n    FOR ISTRING[255] f = fileName(INTEGER j) AND NOT fileIsDirectory(j) DO NEWSESSION {\n\n        LOCAL file = FILE ();\n        READ 'file://' + serverDirectory() + '/' + f TO file;\n\n        LOCAL date = DATE (INTEGER);\n        LOCAL number = STRING[10] (INTEGER);\n\n        LOCAL bookId = STRING[20] (INTEGER);\n        LOCAL quantity = INTEGER (INTEGER);\n        LOCAL price = NUMERIC[14,2] (INTEGER);\n\n        IMPORT CSV '|' NOHEADER CHARSET 'CP1251' FROM file() TO date, number, bookId, quantity, price;\n\n        NEW o = Order {\n            date(o) <- date(0);\n            number(o) <- number(0);\n\n            FOR imported(INTEGER i) NEW d = OrderDetail DO {\n                order(d) <- o;\n\n                book(d) <- book(bookId(i));\n                quantity(d) <- quantity(i);\n                price(d) <- price(i);\n            }\n        }\n\n        APPLY;\n        move('file://' + serverDirectory() + '/' + f, 'file://' + serverDirectory() + '/' + (IF canceled() THEN 'error/' ELSE 'success/') + f);\n    }\n}\n\nEXTEND FORM orders PROPERTIES() importOrders;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"listFiles"})," action is declared in the ",(0,t.jsx)(n.code,{children:"Utils"})," system ",(0,t.jsx)(n.a,{href:"/v5/Modules",children:"module"}),". The action scans the folder specified in the argument and reads all the files from it and writes their contents to the ",(0,t.jsx)(n.code,{children:"fileName"})," and ",(0,t.jsx)(n.code,{children:"fileIsDirectory"})," properties."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsxs)(n.a,{href:"/v5/READ_operator",children:[(0,t.jsx)(n.code,{children:"READ"})," operator"]})," reads the specified file and writes its contents to a local property of the ",(0,t.jsx)(n.code,{children:"FILE"})," type which is then processed by the ",(0,t.jsx)(n.code,{children:"IMPORT"})," operator. Its arguments specify that the file format is CSV without a title in the first line, with a vertical bar as separator, and with the CP1251 encoding."]}),"\n",(0,t.jsx)(n.p,{children:"It is assumed that dates and numbers in each line will have the same values. This is why their values are read from the first line with number 0."}),"\n",(0,t.jsxs)(n.p,{children:["Each file is processed in a separate new ",(0,t.jsx)(n.a,{href:"/v5/Change_sessions",children:"change session"})," and then is saved using the ",(0,t.jsxs)(n.a,{href:"/v5/APPLY_operator",children:[(0,t.jsx)(n.code,{children:"APPLY"})," operator"]}),". This operator writes ",(0,t.jsx)(n.code,{children:"TRUE"})," to the ",(0,t.jsx)(n.code,{children:"canceled"})," property when a certain ",(0,t.jsx)(n.a,{href:"/v5/Constraints",children:"constraint"})," has been violated. Then, the ",(0,t.jsx)(n.code,{children:"MOVE"})," statement of the ",(0,t.jsx)(n.code,{children:"READ"})," operator moves the file either to ",(0,t.jsx)(n.code,{children:"success"})," folder or ",(0,t.jsx)(n.code,{children:"error"})," folder. This allows us to call the action again without processing the same orders several times."]}),"\n",(0,t.jsx)(n.p,{children:"Since the result action has no arguments, we can add it to the scheduler for automatic launch at certain intervals."}),"\n",(0,t.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,t.jsx)(n.h3,{id:"task-2",children:"Task"}),"\n",(0,t.jsxs)(n.p,{children:["Similar to ",(0,t.jsx)(n.a,{href:"#example-1",children:(0,t.jsx)(n.strong,{children:"Example 1"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:"An external database stores a book directory with their codes and names."}),"\n",(0,t.jsx)(n.p,{children:"We need to create an action that will synchronize the book directory with this external database."}),"\n",(0,t.jsx)(n.h3,{id:"solution-2",children:"Solution"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"importBooks 'Import books' ()  {\n    LOCAL file = FILE ();\n    READ 'jdbc:sqlserver://localhost;databaseName=books;User=import;Password=password@SELECT id, name FROM books' TO file;\n\n    LOCAL id = STRING[20] (INTEGER);\n    LOCAL name = ISTRING[100] (INTEGER);\n    IMPORT TABLE FROM file() TO id, name;\n\n    //creating new books\n    FOR id(INTEGER i) AND NOT book(id(i)) NEW b = Book DO {\n        id(b) <- id(i);\n    }\n\n    // changing values\n    FOR id(Book b) == id(INTEGER i) DO {\n        name(b) <- name(i);\n    }\n\n    // deleting books\n    DELETE Book b WHERE b IS Book AND NOT [ GROUP SUM 1 BY id(INTEGER i)](id(b));\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Synchronization consists of the three main actions. First, we create books whose codes can be found in the external database, but not in our database. Then, we update the values for all books that can be found in our database. And finally, books that cannot be found in the external database are removed from our database."}),"\n",(0,t.jsx)(n.p,{children:"This guarantees that when the action is started, the book directory will be absolutely identical to that in the external system. This scheme is useful when some master data is maintained in another system. The result action can be added to the scheduler and triggered at certain relatively small time intervals, thereby ensuring near real-time updates for the directory."}),"\n",(0,t.jsx)(n.h2,{id:"example-4",children:"Example 4"}),"\n",(0,t.jsx)(n.h3,{id:"task-3",children:"Task"}),"\n",(0,t.jsxs)(n.p,{children:["Similar to ",(0,t.jsx)(n.a,{href:"#example-1",children:(0,t.jsx)(n.strong,{children:"Example 1"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:"For each order line, we have added the decoding of this line by color and size."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"CLASS OrderDetailInfo 'Order line (transcript)';\n\ndetail = DATA OrderDetail (OrderDetailInfo) NONULL DELETE;\nsize = DATA STRING[100] (OrderDetailInfo);\ncolor = DATA STRING[100] (OrderDetailInfo);\nquantity = DATA INTEGER (OrderDetailInfo);\n\nEXTEND FORM order\n    OBJECTS i = OrderDetailInfo\n    PROPERTIES(i) size, color, quantity, NEW, DELETE\n    FILTERS detail(i) = d\n;\n"})}),"\n",(0,t.jsx)(n.p,{children:"We need to implement the import of orders from the JSON file of the specified structure. A JSON file may look like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n   "version":"v1",\n   "order":[\n      {\n         "date":"03.01.2018",\n         "number":"430",\n         "detail":[\n            {\n               "item":{\n                  "id":"132",\n                  "info":[\n                     {\n                        "size":"40",\n                        "color":"black",\n                        "quantity":2\n                     },\n                     {\n                        "size":"41",\n                        "color":"white",\n                        "quantity":3\n                     }\n                  ]\n               },\n               "price":1.99\n            },\n            {\n               "item":{\n                  "id":"136",\n                  "info":[\n                     {\n                        "size":"39",\n                        "color":"white",\n                        "quantity":4\n                     },\n                     {\n                        "size":"43",\n                        "color":"red",\n                        "quantity":1\n                     }\n                  ]\n               },\n               "price":2.99\n            }\n         ]\n      },\n      {\n         "date":"04.01.2018",\n         "number":"435",\n         "detail":[\n            {\n               "item":{\n                  "id":"122",\n                  "info":[\n                     {\n                        "size":"L",\n                        "color":"black",\n                        "quantity":1\n                     },\n                     {\n                        "size":"XL",\n                        "color":"white",\n                        "quantity":1\n                     }\n                  ]\n               },\n               "price":11.99\n            },\n            {\n               "item":{\n                  "id":"126",\n                  "info":[\n                     {\n                        "size":"S",\n                        "color":"white",\n                        "quantity":1\n                     },\n                     {\n                        "size":"M",\n                        "color":"red",\n                        "quantity":1\n                     }\n                  ]\n               },\n               "price":12.99\n            }\n         ]\n      },\n   ]\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"solution-3",children:"Solution"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"version = DATA LOCAL STRING[100]();\n\nGROUP item;\nidItem = DATA LOCAL STRING[100] (OrderDetail);\n\nFORM importOrder\n    PROPERTIES() version\n\n    OBJECTS order = Order\n    PROPERTIES(order) date, number\n\n    OBJECTS detail = OrderDetail\n    PROPERTIES(detail) IN item idItem EXTID 'id'\n    PROPERTIES(detail) price\n    FILTERS order(detail) = order\n\n    OBJECTS detailInfo = OrderDetailInfo IN item EXTID 'info'\n    PROPERTIES(detailInfo) size, color, quantity\n    FILTERS detail(detailInfo) = detail\n;\n\nimportOrderFromJSON 'Import from JSON' () {\n    INPUT f = FILE DO {\n        IMPORT importOrder JSON FROM f;\n        book(OrderDetail d) <- book(idItem(d)) WHERE idItem(d);\n        APPLY;\n    }\n}\n\nEXTEND FORM orders\n    PROPERTIES() importOrderFromJSON DRAW o TOOLBAR\n;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To implement the import process, we need to declare the form of the ",(0,t.jsx)(n.a,{href:"/v5/Structured_view",children:"structure"})," matching the structure of the JSON file."]}),"\n",(0,t.jsxs)(n.p,{children:["We declare the ",(0,t.jsx)(n.code,{children:"version"})," tag at the upmost level without inputs and then add it to the form."]}),"\n",(0,t.jsxs)(n.p,{children:["Since the ",(0,t.jsx)(n.code,{children:"order"})," tag is an array, we declare an object with the same name on the form. The platform will create a new object for each array element in the JSON. The ",(0,t.jsx)(n.code,{children:"date"})," and ",(0,t.jsx)(n.code,{children:"number"})," properties for the order will be automatically imported from the corresponding tags in the JSON."]}),"\n",(0,t.jsxs)(n.p,{children:["Similarly, for the ",(0,t.jsx)(n.code,{children:"detail"})," tag, we create an object with the same name and then link this object to the ",(0,t.jsx)(n.code,{children:"order"})," object using ",(0,t.jsx)(n.code,{children:"FILTERS"}),". During the import process, the system will fill the link in the order line based on this filter and the nesting of tags."]}),"\n",(0,t.jsxs)(n.p,{children:["To import values from tags nested in the ",(0,t.jsx)(n.code,{children:"item"})," tag, we create a new ",(0,t.jsx)(n.a,{href:"/v5/Groups_of_properties_and_actions",children:"group"})," called ",(0,t.jsx)(n.code,{children:"item"})," and then place the properties and objects into it. In particular, the local property ",(0,t.jsx)(n.code,{children:"idItem"})," is created and then added to the form in this group. Since the property name does not match the tag name, we specify the corresponding name for the property on the form using the ",(0,t.jsx)(n.code,{children:"EXTID"})," keyword."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>s});var t=r(96540);const i={},o=t.createContext(i);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);