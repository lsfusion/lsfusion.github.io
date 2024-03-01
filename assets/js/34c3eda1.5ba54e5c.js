"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[59241],{69969:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=n(74848),o=n(28453);const i={title:"How-to: Design"},s=void 0,a={id:"How-to_Design",title:"How-to: Design",description:"Example 1",source:"@site/docs/How-to_Design.md",sourceDirName:".",slug:"/How-to_Design",permalink:"/next/How-to_Design",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/How-to_Design.md",tags:[],version:"current",lastUpdatedAt:1701332378,formattedLastUpdatedAt:"Nov 30, 2023",frontMatter:{title:"How-to: Design"},sidebar:"learn",previous:{title:"How-to: Filtering and ordering",permalink:"/next/How-to_Filtering_and_ordering"},next:{title:"How-to: Trees",permalink:"/next/How-to_Trees"}},l={},d=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3}];function c(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsx)(r.h3,{id:"task",children:"Task"}),"\n",(0,t.jsx)(r.p,{children:"We have a form with the list of orders, where each order is associated with a list of books and its posted payments."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lsf",children:"CLASS Book 'Book';\r\nname 'Name' = DATA ISTRING[100] (Book);\r\n\r\nCLASS Order 'Order';\r\ndate 'Date' = DATA DATE (Order);\r\nnumber 'Number' = DATA INTEGER (Order);\r\n\r\nCLASS OrderDetail 'Order line';\r\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\r\n\r\nbook 'Book' = DATA Book (OrderDetail) NONULL;\r\nnameBook 'Book' (OrderDetail d) = name(book(d));\r\n\r\nquantity 'Quantity' = DATA INTEGER (OrderDetail);\r\nprice 'Price' = DATA NUMERIC[14,2] (OrderDetail);\r\n\r\nCLASS Payment 'Payment';\r\norder 'Order' = DATA Order (Payment) NONULL DELETE;\r\n\r\ndate 'Date' = DATA DATE (Payment);\r\nsum 'Amount' = DATA NUMERIC[14,2] (Payment);\r\n\r\nFORM orders 'Orders'\r\n    OBJECTS o = Order\r\n    PROPERTIES(o) READONLY date, number\r\n\r\n    OBJECTS d = OrderDetail\r\n    PROPERTIES(d) READONLY nameBook, quantity, price\r\n    FILTERS order(d) == o\r\n\r\n    OBJECTS p = Payment\r\n    PROPERTIES(p) READONLY date, sum\r\n    FILTERS order(p) == o\r\n;\r\n\r\nNAVIGATOR {\r\n    NEW orders;\r\n}\n"})}),"\n",(0,t.jsx)(r.p,{children:"We need to customize the design of the form, so that the lines and payments can be displayed on dedicated tabs which are separated from the list of orders using a vertical splitter."}),"\n",(0,t.jsx)(r.h3,{id:"solution",children:"Solution"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lsf",children:"DESIGN orders {\r\n    // adding a new container to the very beginning of the form\r\n    NEW orderList FIRST {\r\n        fill = 1; // marking that this container should \"stretch\" in the upper container\r\n        MOVE BOX(o); // the first container will be the list of orders\r\n        NEW orderDetails {\r\n            // Specifying that the specification will take up 2 times more space than the o.box container \r\n            // (for all such containers fill, by default, is 1)\r\n            fill = 2;\r\n            tabbed = TRUE; // the container will be a tabbed panel\r\n            MOVE BOX(d) { // the first tab will be a list of rows with books\r\n                caption = 'Order content';\r\n            }\r\n            MOVE BOX(p) { // the second tab will be the list of payments\r\n                caption = 'Payments made';\r\n            }\r\n        }\r\n    }\r\n}\n"})}),"\n",(0,t.jsx)(r.p,{children:"The form will look like this:"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:n(48164).A+"",width:"1535",height:"911"})}),"\n",(0,t.jsx)(r.h2,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsx)(r.h3,{id:"task-1",children:"Task"}),"\n",(0,t.jsxs)(r.p,{children:["Similar to ",(0,t.jsx)(r.a,{href:"#example-1",children:(0,t.jsx)(r.strong,{children:"Example 1"})}),", except we have added filters by date and customer to the form."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lsf",children:"CLASS Customer 'Customer';\r\nname 'Name' = DATA ISTRING[100] (Customer);\r\n\r\ncustomer 'Customer' = DATA Customer (Order);\r\nnameCustomer 'Customer' (Order o) = name(customer(o));\r\n\r\nfilterCustomer = DATA LOCAL Customer ();\r\nnameFilterCustomer 'Customer' = name(filterCustomer());\r\n\r\nEXTEND FORM orders\r\n    PROPERTIES() nameFilterCustomer\r\n\r\n    OBJECTS dates = (dateFrom = DATE, dateTo = DATE) BEFORE o PANEL\r\n    PROPERTIES df = VALUE(dateFrom), dt = VALUE(dateTo)\r\n\r\n    PROPERTIES(o) READONLY nameCustomer\r\n    FILTERS date(o) >= dateFrom, date(o) <= dateTo,\r\n            customer(o) == filterCustomer() OR NOT filterCustomer()\r\n;\n"})}),"\n",(0,t.jsx)(r.p,{children:"We need to add filtering elements to the design of the previously created form."}),"\n",(0,t.jsx)(r.h3,{id:"solution-1",children:"Solution"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lsf",children:"DESIGN orders {\r\n    orderList {\r\n        // creating a new container and adding the first component to the vertical splitter\r\n        NEW orderHeader FIRST { \r\n            // it is necessary to make it \"stretched\" inside the orderList, as it will have a list of orders\r\n            fill = 1; \r\n            // by default, new container is vertical, that is, all the components in it are\r\n            // arranged from top to bottom creating a container in which all the components that are responsible \r\n            // for filtering will be placed\r\n            NEW filters { \r\n                caption = 'Filters';\r\n                // making it horizontal so that all components go from left to right\r\n                horizontal = TRUE; \r\n                MOVE PROPERTY(df) {\r\n                    caption = 'Date from';\r\n                }\r\n                MOVE PROPERTY(dt) {\r\n                    caption = 'Date to';\r\n                }\r\n                MOVE PROPERTY(nameFilterCustomer());\r\n            }\r\n            // moving the container with the order list to it, since there should be exactly two components\r\n            // in the splitter\r\n            MOVE BOX(o); \r\n        }\r\n    }\r\n}\n"})}),"\n",(0,t.jsx)(r.p,{children:"Result:"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:n(33439).A+"",width:"1532",height:"904"})})]})}function m(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},48164:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/How-to_Design_ex1-e61d767b2d23f25ba4d185f7ff52153a.png"},33439:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/How-to_Design_ex2-9917b884043cb4dbc2c0a5c491e51227.png"},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>a});var t=n(96540);const o={},i=t.createContext(o);function s(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);