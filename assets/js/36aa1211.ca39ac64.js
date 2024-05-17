"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[75849],{7608:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=t(74848),r=t(28453);const i={title:"How-to: Design"},s=void 0,a={id:"How-to_Design",title:"How-to: Design",description:"Example 1",source:"@site/versioned_docs/version-v5/How-to_Design.md",sourceDirName:".",slug:"/How-to_Design",permalink:"/How-to_Design",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/How-to_Design.md",tags:[],version:"v5",lastUpdatedAt:1685108136e3,frontMatter:{title:"How-to: Design"},sidebar:"learn",previous:{title:"How-to: Filtering and ordering",permalink:"/How-to_Filtering_and_ordering"},next:{title:"How-to: Trees",permalink:"/How-to_Trees"}},l={},d=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,o.jsx)(n.h3,{id:"task",children:"Task"}),"\n",(0,o.jsx)(n.p,{children:"We have a form with the list of orders, where each order is associated with a list of books and its posted payments."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[100] (Book);\n\nCLASS Order 'Order';\ndate 'Date' = DATA DATE (Order);\nnumber 'Number' = DATA INTEGER (Order);\n\nCLASS OrderDetail 'Order line';\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\n\nbook 'Book' = DATA Book (OrderDetail) NONULL;\nnameBook 'Book' (OrderDetail d) = name(book(d));\n\nquantity 'Quantity' = DATA INTEGER (OrderDetail);\nprice 'Price' = DATA NUMERIC[14,2] (OrderDetail);\n\nCLASS Payment 'Payment';\norder 'Order' = DATA Order (Payment) NONULL DELETE;\n\ndate 'Date' = DATA DATE (Payment);\nsum 'Amount' = DATA NUMERIC[14,2] (Payment);\n\nFORM orders 'Orders'\n    OBJECTS o = Order\n    PROPERTIES(o) READONLY date, number\n\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) READONLY nameBook, quantity, price\n    FILTERS order(d) == o\n\n    OBJECTS p = Payment\n    PROPERTIES(p) READONLY date, sum\n    FILTERS order(p) == o\n;\n\nNAVIGATOR {\n    NEW orders;\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"We need to customize the design of the form, so that the lines and payments can be displayed on dedicated tabs which are separated from the list of orders using a vertical splitter."}),"\n",(0,o.jsx)(n.h3,{id:"solution",children:"Solution"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"DESIGN orders {\n    // adding a new container to the very beginning of the form\n    NEW orderList FIRST {\n        fill = 1; // marking that this container should \"stretch\" in the upper container\n        type = SPLITV; // vertical splitter - that is, there can only be 2 children\n        MOVE BOX(o); // the first container will be the list of orders\n        NEW orderDetails {\n            // Specifying that the specification will take up 2 times more space than the o.box container \n            // (for all such containers fill, by default, is 1)\n            fill = 2; \n            type = TABBED; // the container will be a tabbed panel\n            MOVE BOX(d) { // the first tab will be a list of rows with books\n                caption = 'Order content';\n            }\n            MOVE BOX(p) { // the second tab will be the list of payments\n                caption = 'Payments made';\n            }\n        }\n    }\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"The form will look like this:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(99410).A+"",width:"1535",height:"911"})}),"\n",(0,o.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,o.jsx)(n.h3,{id:"task-1",children:"Task"}),"\n",(0,o.jsxs)(n.p,{children:["Similar to ",(0,o.jsx)(n.a,{href:"#example-1",children:(0,o.jsx)(n.strong,{children:"Example 1"})}),", except we have added filters by date and customer to the form."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"CLASS Customer 'Customer';\nname 'Name' = DATA ISTRING[100] (Customer);\n\ncustomer 'Customer' = DATA Customer (Order);\nnameCustomer 'Customer' (Order o) = name(customer(o));\n\nfilterCustomer = DATA LOCAL Customer ();\nnameFilterCustomer 'Customer' = name(filterCustomer());\n\nEXTEND FORM orders\n    PROPERTIES() nameFilterCustomer\n\n    OBJECTS dates = (dateFrom = DATE, dateTo = DATE) BEFORE o PANEL\n    PROPERTIES df = VALUE(dateFrom), dt = VALUE(dateTo)\n\n    PROPERTIES(o) READONLY nameCustomer\n    FILTERS date(o) >= dateFrom, date(o) <= dateTo,\n            customer(o) == filterCustomer() OR NOT filterCustomer()\n;\n"})}),"\n",(0,o.jsx)(n.p,{children:"We need to add filtering elements to the design of the previously created form."}),"\n",(0,o.jsx)(n.h3,{id:"solution-1",children:"Solution"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"DESIGN orders {\n    orderList {\n        // creating a new container and adding the first component to the vertical splitter\n        NEW orderHeader FIRST { \n            // it is necessary to make it \"stretched\" inside the orderList, as it will have a list of orders\n            fill = 1; \n            // by default, the type of the new container is CONTAINERV, that is, all the components in it are\n            // arranged from top to bottom creating a container in which all the components that are responsible \n            // for filtering will be placed\n            NEW filters { \n                caption = 'Filters';\n                // making it horizontal so that all components go from left to right\n                type = CONTAINERH; \n                MOVE PROPERTY(df) {\n                    caption = 'Date from';\n                }\n                MOVE PROPERTY(dt) {\n                    caption = 'Date to';\n                }\n                MOVE PROPERTY(nameFilterCustomer());\n            }\n            // moving the container with the order list to it, since there should be exactly two components\n            // in the splitter\n            MOVE BOX(o); \n        }\n    }\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Result:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(64553).A+"",width:"1532",height:"904"})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},99410:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/How-to_Design_ex1-e61d767b2d23f25ba4d185f7ff52153a.png"},64553:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/How-to_Design_ex2-9917b884043cb4dbc2c0a5c491e51227.png"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var o=t(96540);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);