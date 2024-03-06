"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[82172],{65447:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var t=r(74848),o=r(28453);const s={title:"How-to: \u0414\u0438\u0437\u0430\u0439\u043d"},d=void 0,i={id:"How-to_Design",title:"How-to: \u0414\u0438\u0437\u0430\u0439\u043d",description:"\u041f\u0440\u0438\u043c\u0435\u0440 1",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/How-to_Design.md",sourceDirName:".",slug:"/How-to_Design",permalink:"/ru/next/How-to_Design",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/ru/How-to_Design.md",tags:[],version:"current",lastUpdatedAt:1701332378,formattedLastUpdatedAt:"30 \u043d\u043e\u044f\u0431. 2023 \u0433.",frontMatter:{title:"How-to: \u0414\u0438\u0437\u0430\u0439\u043d"},sidebar:"learn",previous:{title:"How-to: \u0424\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f \u0438 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430",permalink:"/ru/next/How-to_Filtering_and_ordering"},next:{title:"How-to: \u0414\u0435\u0440\u0435\u0432\u044c\u044f",permalink:"/ru/next/How-to_Trees"}},a={},l=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440 1",id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 2",id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1",level:3}];function c(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",children:"\u041f\u0440\u0438\u043c\u0435\u0440 1"}),"\n",(0,t.jsx)(e.h3,{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435",children:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"}),"\n",(0,t.jsx)(e.p,{children:"\u0415\u0441\u0442\u044c \u0444\u043e\u0440\u043c\u0430 \u0441\u043e \u0441\u043f\u0438\u0441\u043a\u043e\u043c \u0437\u0430\u043a\u0430\u0437\u043e\u0432, \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0437\u0430\u0434\u0430\u043d \u0441\u043f\u0438\u0441\u043e\u043a \u043a\u043d\u0438\u0433 \u0438 \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0435 \u043f\u043e \u043d\u0435\u043c\u0443 \u043e\u043f\u043b\u0430\u0442\u044b."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-lsf",children:"CLASS Book '\u041a\u043d\u0438\u0433\u0430';\nname '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435' = DATA ISTRING[100] (Book);\n\nCLASS Order '\u0417\u0430\u043a\u0430\u0437';\ndate '\u0414\u0430\u0442\u0430' = DATA DATE (Order);\nnumber '\u041d\u043e\u043c\u0435\u0440' = DATA INTEGER (Order);\n\nCLASS OrderDetail '\u0421\u0442\u0440\u043e\u043a\u0430 \u0437\u0430\u043a\u0430\u0437\u0430';\norder '\u0417\u0430\u043a\u0430\u0437' = DATA Order (OrderDetail) NONULL DELETE;\n\nbook '\u041a\u043d\u0438\u0433\u0430' = DATA Book (OrderDetail) NONULL;\nnameBook '\u041a\u043d\u0438\u0433\u0430' (OrderDetail d) = name(book(d));\n\nquantity '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e' = DATA INTEGER (OrderDetail);\nprice '\u0426\u0435\u043d\u0430' = DATA NUMERIC[14,2] (OrderDetail);\n\nCLASS Payment '\u041e\u043f\u043b\u0430\u0442\u0430';\norder '\u0417\u0430\u043a\u0430\u0437' = DATA Order (Payment) NONULL DELETE;\n\ndate '\u0414\u0430\u0442\u0430' = DATA DATE (Payment);\nsum '\u0421\u0443\u043c\u043c\u0430' = DATA NUMERIC[14,2] (Payment);\n\nFORM orders '\u0417\u0430\u043a\u0430\u0437\u044b'\n    OBJECTS o = Order\n    PROPERTIES(o) READONLY date, number\n\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) READONLY nameBook, quantity, price\n    FILTERS order(d) == o\n\n    OBJECTS p = Payment\n    PROPERTIES(p) READONLY date, sum\n    FILTERS order(p) == o\n;\n\nNAVIGATOR {\n    NEW orders;\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0438\u0437\u0430\u0439\u043d \u0444\u043e\u0440\u043c\u044b \u0442\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0447\u0442\u043e\u0431\u044b \u0441\u0442\u0440\u043e\u043a\u0438 \u0438 \u043e\u043f\u043b\u0430\u0442\u044b \u0448\u043b\u0438 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u043c\u0438 \u0432\u043a\u043b\u0430\u0434\u043a\u0430\u043c\u0438 \u0438 \u043e\u0442\u0434\u0435\u043b\u044f\u043b\u0438\u0441\u044c \u043e\u0442 \u0441\u043f\u0438\u0441\u043a\u0430 \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u043f\u043b\u0438\u0442\u0442\u0435\u0440\u0430."}),"\n",(0,t.jsx)(e.h3,{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-lsf",children:"DESIGN orders {\n    // \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u043d\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0432 \u0441\u0430\u043c\u043e\u0435 \u043d\u0430\u0447\u0430\u043b\u043e \u0444\u043e\u0440\u043c\u044b\n    NEW orderList FIRST {\n        fill = 1; // \u043f\u043e\u043c\u0435\u0447\u0430\u0435\u043c, \u0447\u0442\u043e \u044d\u0442\u043e\u0442 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0434\u043e\u043b\u0436\u0435\u043d \"\u0440\u0430\u0441\u0442\u044f\u0433\u0438\u0432\u0430\u0442\u044c\u0441\u044f\" \u0432 \u0432\u0435\u0440\u0445\u043d\u0435\u043c \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0435\n        MOVE BOX(o); // \u043f\u0435\u0440\u0432\u044b\u043c \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u043c \u0431\u0443\u0434\u0435\u0442 \u0441\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u043a\u0430\u0437\u043e\u0432\n        NEW orderDetails {\n            // \u0423\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c, \u0447\u0442\u043e \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043d\u0438\u043c\u0430\u0442\u044c \u0432 2 \u0440\u0430\u0437\u0430 \u0431\u043e\u043b\u044c\u0448\u0435 \u043c\u0435\u0441\u0442\u0430, \n            // \u0447\u0435\u043c \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 o.box (\u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0442\u0430\u043a\u0438\u0445 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432 fill, \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u0440\u0430\u0432\u0435\u043d 1)\n            fill = 2;\n            tabbed = TRUE; // \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0431\u0443\u0434\u0435\u0442 \u043f\u0430\u043d\u0435\u043b\u044c\u044e \u0441 \u0432\u043a\u043b\u0430\u0434\u043a\u0430\u043c\u0438\n            MOVE BOX(d) { // \u043f\u0435\u0440\u0432\u043e\u0439 \u0432\u043a\u043b\u0430\u0434\u043a\u043e\u0439 \u0431\u0443\u0434\u0435\u0442 \u0441\u043f\u0438\u0441\u043e\u043a \u0441\u0442\u0440\u043e\u043a \u0441 \u043a\u043d\u0438\u0433\u0430\u043c\u0438\n                caption = '\u0421\u043e\u0441\u0442\u0430\u0432 \u0437\u0430\u043a\u0430\u0437\u0430';\n            }\n            MOVE BOX(p) { // \u0432\u0442\u043e\u0440\u043e\u0439 \u0432\u043a\u043b\u0430\u0434\u043a\u043e\u0439 \u0431\u0443\u0434\u0435\u0442 \u0441\u043f\u0438\u0441\u043e\u043a \u043e\u043f\u043b\u0430\u0442\n                caption = '\u041f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0435 \u043e\u043f\u043b\u0430\u0442\u044b';\n            }\n        }\n    }\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u0424\u043e\u0440\u043c\u0430 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c :"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:r(94137).A+"",width:"1535",height:"911"})}),"\n",(0,t.jsx)(e.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",children:"\u041f\u0440\u0438\u043c\u0435\u0440 2"}),"\n",(0,t.jsx)(e.h3,{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1",children:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"}),"\n",(0,t.jsxs)(e.p,{children:["\u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e ",(0,t.jsx)(e.a,{href:"#%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80-1",children:(0,t.jsx)(e.strong,{children:"\u041f\u0440\u0438\u043c\u0435\u0440\u0443 1"})}),", \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u0444\u043e\u0440\u043c\u0443 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u0444\u0438\u043b\u044c\u0442\u0440\u044b \u043f\u043e \u0434\u0430\u0442\u0435 \u0438 \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044e."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-lsf",children:"CLASS Customer '\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c';\nname '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435' = DATA ISTRING[100] (Customer);\n\ncustomer '\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c' = DATA Customer (Order);\nnameCustomer '\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c' (Order o) = name(customer(o));\n\nfilterCustomer = DATA LOCAL Customer ();\nnameFilterCustomer '\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c' = name(filterCustomer());\n\nEXTEND FORM orders\n    PROPERTIES() nameFilterCustomer\n\n    OBJECTS dates = (dateFrom = DATE, dateTo = DATE) BEFORE o PANEL\n    PROPERTIES df = VALUE(dateFrom), dt = VALUE(dateTo)\n\n    PROPERTIES(o) READONLY nameCustomer\n    FILTERS date(o) >= dateFrom, date(o) <= dateTo,\n            customer(o) == filterCustomer() OR NOT filterCustomer()\n;\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u041d\u0443\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438 \u0432 \u0434\u0438\u0437\u0430\u0439\u043d \u0440\u0430\u043d\u0435\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u044b."}),"\n",(0,t.jsx)(e.h3,{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1",children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-lsf",children:"DESIGN orders {\n    orderList {\n        // \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u043d\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0432 \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u043f\u043b\u0438\u0442\u0442\u0435\u0440 \u043f\u0435\u0440\u0432\u044b\u043c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u043c\n        NEW orderHeader FIRST { \n            // \u043d\u0443\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c, \u0447\u0442\u043e\u0431\u044b \u043e\u043d \"\u0440\u0430\u0441\u0442\u044f\u0433\u0438\u0432\u0430\u043b\u0441\u044f\" \u0432\u043d\u0443\u0442\u0440\u0438 orderList, \u0442\u0430\u043a \u043a\u0430\u043a \u0432 \u043d\u0435\u043c \u0431\u0443\u0434\u0435\u0442 \u0441\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u043a\u0430\u0437\u043e\u0432\n            fill = 1; \n            // \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u043d\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439, \u0442\u043e \u0435\u0441\u0442\u044c \u0432\u0441\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0432 \u043d\u0435\u043c \u0440\u0430\u0441\u043f\u043e\u043b\u0430\u0433\u0430\u044e\u0442\u0441\u044f \u0441\u0432\u0435\u0440\u0445\u0443 \u0432\u043d\u0438\u0437\n            // \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u043c\u0435\u0441\u0442\u0438\u043c \u0432\u0441\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0442\u0432\u0435\u0447\u0430\u044e\u0442 \u0437\u0430 \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044e\n            NEW filters { \n                caption = '\u0424\u0438\u043b\u044c\u0442\u0440\u044b';\n                // \u0434\u0435\u043b\u0430\u0435\u043c \u0435\u0433\u043e \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u043c, \u0447\u0442\u043e\u0431\u044b \u0432\u0441\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0448\u043b\u0438 \u0441\u043b\u0435\u0432\u0430 \u043d\u0430\u043f\u0440\u0430\u0432\u043e\n                horizontal = TRUE; \n                MOVE PROPERTY(df) {\n                    caption = '\u0414\u0430\u0442\u0430 \u0441';\n                }\n                MOVE PROPERTY(dt) {\n                    caption = '\u0414\u0430\u0442\u0430 \u043f\u043e';\n                }\n                MOVE PROPERTY(nameFilterCustomer());\n            }\n            // \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u0438\u043c \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0441\u043e \u0441\u043f\u0438\u0441\u043a\u043e\u043c \u0437\u0430\u043a\u0430\u0437\u043e\u043c \u0432 \u043d\u0435\u0433\u043e, \u0442\u0430\u043a \u043a\u0430\u043a \u0432 \u0441\u043f\u043b\u0438\u0442\u0442\u0435\u0440\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0440\u043e\u0432\u043d\u043e \u0434\u0432\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\n            MOVE BOX(o); \n        }\n    }\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:r(80130).A+"",width:"1532",height:"904"})})]})}function u(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}},94137:(n,e,r)=>{r.d(e,{A:()=>t});const t=r.p+"assets/images/How-to_Design_ex1-e61d767b2d23f25ba4d185f7ff52153a.png"},80130:(n,e,r)=>{r.d(e,{A:()=>t});const t=r.p+"assets/images/How-to_Design_ex2-9917b884043cb4dbc2c0a5c491e51227.png"},28453:(n,e,r)=>{r.d(e,{R:()=>d,x:()=>i});var t=r(96540);const o={},s=t.createContext(o);function d(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:d(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);