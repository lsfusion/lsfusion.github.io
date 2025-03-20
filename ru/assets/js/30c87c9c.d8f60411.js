"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["34916"],{15994:function(n,e,r){r.r(e),r.d(e,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>l,toc:()=>a,contentTitle:()=>d});var t=JSON.parse('{"id":"How-to_Design","title":"How-to: \u0414\u0438\u0437\u0430\u0439\u043D","description":"\u041F\u0440\u0438\u043C\u0435\u0440 1","source":"@site/i18n/ru/docusaurus-plugin-content-docs/version-v4/How-to_Design.md","sourceDirName":".","slug":"/How-to_Design","permalink":"/ru/v4/How-to_Design","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v4/docs/ru/How-to_Design.md","tags":[],"version":"v4","lastUpdatedAt":1625651520000,"frontMatter":{"title":"How-to: \u0414\u0438\u0437\u0430\u0439\u043D"},"sidebar":"learn","previous":{"title":"How-to: \u0424\u0438\u043B\u044C\u0442\u0440\u0430\u0446\u0438\u044F \u0438 \u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430","permalink":"/ru/v4/How-to_Filtering_and_ordering"},"next":{"title":"How-to: \u0414\u0435\u0440\u0435\u0432\u044C\u044F","permalink":"/ru/v4/How-to_Trees"}}'),o=r("85893"),s=r("50065");let i={title:"How-to: \u0414\u0438\u0437\u0430\u0439\u043D"},d=void 0,l={},a=[{value:"\u041F\u0440\u0438\u043C\u0435\u0440 1",id:"\u043F\u0440\u0438\u043C\u0435\u0440-1",level:2},{value:"\u0423\u0441\u043B\u043E\u0432\u0438\u0435",id:"\u0443\u0441\u043B\u043E\u0432\u0438\u0435",level:3},{value:"\u0420\u0435\u0448\u0435\u043D\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043D\u0438\u0435",level:3},{value:"\u041F\u0440\u0438\u043C\u0435\u0440 2",id:"\u043F\u0440\u0438\u043C\u0435\u0440-2",level:2},{value:"\u0423\u0441\u043B\u043E\u0432\u0438\u0435",id:"\u0443\u0441\u043B\u043E\u0432\u0438\u0435-1",level:3},{value:"\u0420\u0435\u0448\u0435\u043D\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043D\u0438\u0435-1",level:3}];function c(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"\u043F\u0440\u0438\u043C\u0435\u0440-1",children:"\u041F\u0440\u0438\u043C\u0435\u0440 1"}),"\n",(0,o.jsx)(e.h3,{id:"\u0443\u0441\u043B\u043E\u0432\u0438\u0435",children:"\u0423\u0441\u043B\u043E\u0432\u0438\u0435"}),"\n",(0,o.jsx)(e.p,{children:"\u0415\u0441\u0442\u044C \u0444\u043E\u0440\u043C\u0430 \u0441\u043E \u0441\u043F\u0438\u0441\u043A\u043E\u043C \u0437\u0430\u043A\u0430\u0437\u043E\u0432, \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0438\u0437 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0437\u0430\u0434\u0430\u043D \u0441\u043F\u0438\u0441\u043E\u043A \u043A\u043D\u0438\u0433 \u0438 \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u043D\u044B\u0435 \u043F\u043E \u043D\u0435\u043C\u0443 \u043E\u043F\u043B\u0430\u0442\u044B."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-lsf",children:"CLASS Book '\u041A\u043D\u0438\u0433\u0430';\nname '\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435' = DATA ISTRING[100] (Book);\n\nCLASS Order '\u0417\u0430\u043A\u0430\u0437';\ndate '\u0414\u0430\u0442\u0430' = DATA DATE (Order);\nnumber '\u041D\u043E\u043C\u0435\u0440' = DATA INTEGER (Order);\n\nCLASS OrderDetail '\u0421\u0442\u0440\u043E\u043A\u0430 \u0437\u0430\u043A\u0430\u0437\u0430';\norder '\u0417\u0430\u043A\u0430\u0437' = DATA Order (OrderDetail) NONULL DELETE;\n\nbook '\u041A\u043D\u0438\u0433\u0430' = DATA Book (OrderDetail) NONULL;\nnameBook '\u041A\u043D\u0438\u0433\u0430' (OrderDetail d) = name(book(d));\n\nquantity '\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E' = DATA INTEGER (OrderDetail);\nprice '\u0426\u0435\u043D\u0430' = DATA NUMERIC[14,2] (OrderDetail);\n\nCLASS Payment '\u041E\u043F\u043B\u0430\u0442\u0430';\norder '\u0417\u0430\u043A\u0430\u0437' = DATA Order (Payment) NONULL DELETE;\n\ndate '\u0414\u0430\u0442\u0430' = DATA DATE (Payment);\nsum '\u0421\u0443\u043C\u043C\u0430' = DATA NUMERIC[14,2] (Payment);\n\nFORM orders '\u0417\u0430\u043A\u0430\u0437\u044B'\n    OBJECTS o = Order\n    PROPERTIES(o) READONLY date, number\n\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) READONLY nameBook, quantity, price\n    FILTERS order(d) == o\n\n    OBJECTS p = Payment\n    PROPERTIES(p) READONLY date, sum\n    FILTERS order(p) == o\n;\n\nNAVIGATOR {\n    NEW orders;\n}\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0434\u0438\u0437\u0430\u0439\u043D \u0444\u043E\u0440\u043C\u044B \u0442\u0430\u043A\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C, \u0447\u0442\u043E\u0431\u044B \u0441\u0442\u0440\u043E\u043A\u0438 \u0438 \u043E\u043F\u043B\u0430\u0442\u044B \u0448\u043B\u0438 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u043C\u0438 \u0432\u043A\u043B\u0430\u0434\u043A\u0430\u043C\u0438 \u0438 \u043E\u0442\u0434\u0435\u043B\u044F\u043B\u0438\u0441\u044C \u043E\u0442 \u0441\u043F\u0438\u0441\u043A\u0430 \u0437\u0430\u043A\u0430\u0437\u043E\u0432 \u043F\u0440\u0438 \u043F\u043E\u043C\u043E\u0449\u0438 \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u043F\u043B\u0438\u0442\u0442\u0435\u0440\u0430."}),"\n",(0,o.jsx)(e.h3,{id:"\u0440\u0435\u0448\u0435\u043D\u0438\u0435",children:"\u0420\u0435\u0448\u0435\u043D\u0438\u0435"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-lsf",children:"DESIGN orders {\n    // \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u043C \u043D\u043E\u0432\u044B\u0439 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 \u0432 \u0441\u0430\u043C\u043E\u0435 \u043D\u0430\u0447\u0430\u043B\u043E \u0444\u043E\u0440\u043C\u044B\n    NEW orderList FIRST {\n        fill = 1; // \u043F\u043E\u043C\u0435\u0447\u0430\u0435\u043C, \u0447\u0442\u043E \u044D\u0442\u043E\u0442 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 \u0434\u043E\u043B\u0436\u0435\u043D \"\u0440\u0430\u0441\u0442\u044F\u0433\u0438\u0432\u0430\u0442\u044C\u0441\u044F\" \u0432 \u0432\u0435\u0440\u0445\u043D\u0435\u043C \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0435\n        type = SPLITV; // \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u043F\u043B\u0438\u0442\u0442\u0435\u0440 - \u0442\u043E \u0435\u0441\u0442\u044C \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E 2 \u043F\u043E\u0442\u043E\u043C\u043A\u0430\n        MOVE BOX(o); // \u043F\u0435\u0440\u0432\u044B\u043C \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u043E\u043C \u0431\u0443\u0434\u0435\u0442 \u0441\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u043A\u0430\u0437\u043E\u0432\n        NEW orderDetails {\n            // \u0423\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u043C, \u0447\u0442\u043E \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043D\u0438\u043C\u0430\u0442\u044C \u0432 2 \u0440\u0430\u0437\u0430 \u0431\u043E\u043B\u044C\u0448\u0435 \u043C\u0435\u0441\u0442\u0430, \n            // \u0447\u0435\u043C \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 o.box (\u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u0442\u0430\u043A\u0438\u0445 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u043E\u0432 fill, \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E, \u0440\u0430\u0432\u0435\u043D 1)\n            fill = 2; \n            type = TABBED; // \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 \u0431\u0443\u0434\u0435\u0442 \u043F\u0430\u043D\u0435\u043B\u044C\u044E \u0441 \u0432\u043A\u043B\u0430\u0434\u043A\u0430\u043C\u0438\n            MOVE BOX(d) { // \u043F\u0435\u0440\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u043E\u0439 \u0431\u0443\u0434\u0435\u0442 \u0441\u043F\u0438\u0441\u043E\u043A \u0441\u0442\u0440\u043E\u043A \u0441 \u043A\u043D\u0438\u0433\u0430\u043C\u0438\n                caption = '\u0421\u043E\u0441\u0442\u0430\u0432 \u0437\u0430\u043A\u0430\u0437\u0430';\n            }\n            MOVE BOX(p) { // \u0432\u0442\u043E\u0440\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u043E\u0439 \u0431\u0443\u0434\u0435\u0442 \u0441\u043F\u0438\u0441\u043E\u043A \u043E\u043F\u043B\u0430\u0442\n                caption = '\u041F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u043D\u044B\u0435 \u043E\u043F\u043B\u0430\u0442\u044B';\n            }\n        }\n    }\n}\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u0424\u043E\u0440\u043C\u0430 \u0431\u0443\u0434\u0435\u0442 \u0432\u044B\u0433\u043B\u044F\u0434\u0435\u0442\u044C \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C :"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{src:r(13719).Z+"",width:"1535",height:"911"})}),"\n",(0,o.jsx)(e.h2,{id:"\u043F\u0440\u0438\u043C\u0435\u0440-2",children:"\u041F\u0440\u0438\u043C\u0435\u0440 2"}),"\n",(0,o.jsx)(e.h3,{id:"\u0443\u0441\u043B\u043E\u0432\u0438\u0435-1",children:"\u0423\u0441\u043B\u043E\u0432\u0438\u0435"}),"\n",(0,o.jsxs)(e.p,{children:["\u0410\u043D\u0430\u043B\u043E\u0433\u0438\u0447\u043D\u043E ",(0,o.jsx)(e.a,{href:"#%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80-1",children:(0,o.jsx)(e.strong,{children:"\u041F\u0440\u0438\u043C\u0435\u0440\u0443 1"})}),", \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430 \u0444\u043E\u0440\u043C\u0443 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B \u0444\u0438\u043B\u044C\u0442\u0440\u044B \u043F\u043E \u0434\u0430\u0442\u0435 \u0438 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u044E."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-lsf",children:"CLASS Customer '\u041F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u044C';\nname '\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435' = DATA ISTRING[100] (Customer);\n\ncustomer '\u041F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u044C' = DATA Customer (Order);\nnameCustomer '\u041F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u044C' (Order o) = name(customer(o));\n\nfilterCustomer = DATA LOCAL Customer ();\nnameFilterCustomer '\u041F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u044C' = name(filterCustomer());\n\nEXTEND FORM orders\n    PROPERTIES() nameFilterCustomer\n\n    OBJECTS dates = (dateFrom = DATE, dateTo = DATE) BEFORE o PANEL\n    PROPERTIES df = VALUE(dateFrom), dt = VALUE(dateTo)\n\n    PROPERTIES(o) READONLY nameCustomer\n    FILTERS date(o) >= dateFrom, date(o) <= dateTo,\n            customer(o) == filterCustomer() OR NOT filterCustomer()\n;\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u041D\u0443\u0436\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0444\u0438\u043B\u044C\u0442\u0440\u0430\u0446\u0438\u0438 \u0432 \u0434\u0438\u0437\u0430\u0439\u043D \u0440\u0430\u043D\u0435\u0435 \u0441\u043E\u0437\u0434\u0430\u043D\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u044B."}),"\n",(0,o.jsx)(e.h3,{id:"\u0440\u0435\u0448\u0435\u043D\u0438\u0435-1",children:"\u0420\u0435\u0448\u0435\u043D\u0438\u0435"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-lsf",children:"DESIGN orders {\n    orderList {\n        // \u0441\u043E\u0437\u0434\u0430\u0435\u043C \u043D\u043E\u0432\u044B\u0439 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 \u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u043C \u0432 \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u043F\u043B\u0438\u0442\u0442\u0435\u0440 \u043F\u0435\u0440\u0432\u044B\u043C \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u043C\n        NEW orderHeader FIRST { \n            // \u043D\u0443\u0436\u043D\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C, \u0447\u0442\u043E\u0431\u044B \u043E\u043D \"\u0440\u0430\u0441\u0442\u044F\u0433\u0438\u0432\u0430\u043B\u0441\u044F\" \u0432\u043D\u0443\u0442\u0440\u0438 orderList, \u0442\u0430\u043A \u043A\u0430\u043A \u0432 \u043D\u0435\u043C \u0431\u0443\u0434\u0435\u0442 \u0441\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u043A\u0430\u0437\u043E\u0432\n            fill = 1; \n            // \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E, \u0442\u0438\u043F \u043D\u043E\u0432\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0430 CONTAINERV, \u0442\u043E \u0435\u0441\u0442\u044C \u0432\u0441\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B \u0432 \u043D\u0435\u043C \u0440\u0430\u0441\u043F\u043E\u043B\u0430\u0433\u0430\u044E\u0442\u0441\u044F \u0441\u0432\u0435\u0440\u0445\u0443 \u0432\u043D\u0438\u0437\n            // \u0441\u043E\u0437\u0434\u0430\u0435\u043C \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440, \u0432 \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u043E\u043C\u0435\u0441\u0442\u0438\u043C \u0432\u0441\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043E\u0442\u0432\u0435\u0447\u0430\u044E\u0442 \u0437\u0430 \u0444\u0438\u043B\u044C\u0442\u0440\u0430\u0446\u0438\u044E\n            NEW filters { \n                caption = '\u0424\u0438\u043B\u044C\u0442\u0440\u044B';\n                // \u0434\u0435\u043B\u0430\u0435\u043C \u0435\u0433\u043E \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u044B\u043C, \u0447\u0442\u043E\u0431\u044B \u0432\u0441\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B \u0448\u043B\u0438 \u0441\u043B\u0435\u0432\u0430 \u043D\u0430\u043F\u0440\u0430\u0432\u043E\n                type = CONTAINERH; \n                MOVE PROPERTY(df) {\n                    caption = '\u0414\u0430\u0442\u0430 \u0441';\n                }\n                MOVE PROPERTY(dt) {\n                    caption = '\u0414\u0430\u0442\u0430 \u043F\u043E';\n                }\n                MOVE PROPERTY(nameFilterCustomer());\n            }\n            // \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0438\u043C \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 \u0441\u043E \u0441\u043F\u0438\u0441\u043A\u043E\u043C \u0437\u0430\u043A\u0430\u0437\u043E\u043C \u0432 \u043D\u0435\u0433\u043E, \u0442\u0430\u043A \u043A\u0430\u043A \u0432 \u0441\u043F\u043B\u0438\u0442\u0442\u0435\u0440\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0440\u043E\u0432\u043D\u043E \u0434\u0432\u0430 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430\n            MOVE BOX(o); \n        }\n    }\n}\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442:"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{src:r(50837).Z+"",width:"1532",height:"904"})})]})}function u(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(c,{...n})}):c(n)}},13719:function(n,e,r){r.d(e,{Z:function(){return t}});let t=r.p+"assets/images/How-to_Design_ex1-e61d767b2d23f25ba4d185f7ff52153a.png"},50837:function(n,e,r){r.d(e,{Z:function(){return t}});let t=r.p+"assets/images/How-to_Design_ex2-9917b884043cb4dbc2c0a5c491e51227.png"},50065:function(n,e,r){r.d(e,{Z:function(){return d},a:function(){return i}});var t=r(67294);let o={},s=t.createContext(o);function i(n){let e=t.useContext(s);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:i(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);