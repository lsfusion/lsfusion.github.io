"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[73798],{7209:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>i,metadata:()=>s,toc:()=>t});var d=r(74848),o=r(28453);const i={title:"How-to: \u042d\u043a\u0441\u043f\u043e\u0440\u0442 \u0434\u0430\u043d\u043d\u044b\u0445"},c=void 0,s={id:"How-to_Data_export",title:"How-to: \u042d\u043a\u0441\u043f\u043e\u0440\u0442 \u0434\u0430\u043d\u043d\u044b\u0445",description:"\u041f\u0440\u0438\u043c\u0435\u0440 1",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-v5/How-to_Data_export.md",sourceDirName:".",slug:"/How-to_Data_export",permalink:"/ru/How-to_Data_export",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/ru/How-to_Data_export.md",tags:[],version:"v5",lastUpdatedAt:1685108136,formattedLastUpdatedAt:"26 \u043c\u0430\u044f 2023 \u0433.",frontMatter:{title:"How-to: \u042d\u043a\u0441\u043f\u043e\u0440\u0442 \u0434\u0430\u043d\u043d\u044b\u0445"},sidebar:"learn",previous:{title:"How-to: \u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u0432\u043d\u0435\u0448\u043d\u0438\u043c\u0438 \u0444\u043e\u0440\u043c\u0430\u0442\u0430\u043c\u0438",permalink:"/ru/How-to_Working_with_external_formats"},next:{title:"How-to: \u0418\u043c\u043f\u043e\u0440\u0442 \u0434\u0430\u043d\u043d\u044b\u0445",permalink:"/ru/How-to_Data_import"}},l={},t=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440 1",id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 2",id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 3",id:"\u043f\u0440\u0438\u043c\u0435\u0440-3",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-2",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-2",level:3}];function a(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",children:"\u041f\u0440\u0438\u043c\u0435\u0440 1"}),"\n",(0,d.jsx)(n.h3,{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435",children:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"}),"\n",(0,d.jsx)(n.p,{children:"\u0415\u0441\u0442\u044c \u0437\u0430\u043a\u0430\u0437\u044b \u043d\u0430 \u043f\u0440\u043e\u0434\u0430\u0436\u0443 \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044f\u043c \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043a\u043d\u0438\u0433."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-lsf",children:"REQUIRE Time;\n\nCLASS Book '\u041a\u043d\u0438\u0433\u0430';\nname '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435' = DATA ISTRING[100] (Book) IN id;\n\nCLASS Customer '\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c';\nname '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435' = DATA ISTRING[50] (Customer) IN id;\naddress '\u0410\u0434\u0440\u0435\u0441' = DATA ISTRING[50] (Customer) IN base;\n\nCLASS Currency '\u0412\u0430\u043b\u044e\u0442\u0430';\nname '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435' = DATA ISTRING[50] (Currency) IN id;\n\nCLASS Order '\u0417\u0430\u043a\u0430\u0437';\ndate '\u0414\u0430\u0442\u0430' = DATA DATE (Order);\nnumber '\u041d\u043e\u043c\u0435\u0440' = DATA STRING[10] (Order);\n\ncustomer '\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c' = DATA Customer (Order);\nnameCustomer '\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c' (Order o) = name(customer(o));\n\nCLASS OrderDetail '\u0421\u0442\u0440\u043e\u043a\u0430 \u0437\u0430\u043a\u0430\u0437\u0430';\norder '\u0417\u0430\u043a\u0430\u0437' = DATA Order (OrderDetail) NONULL DELETE;\n\nbook '\u041a\u043d\u0438\u0433\u0430' = DATA Book (OrderDetail) NONULL;\nnameBook '\u041a\u043d\u0438\u0433\u0430' (OrderDetail d) = name(book(d));\n\nquantity '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e' = DATA INTEGER (OrderDetail);\nprice '\u0426\u0435\u043d\u0430' = DATA NUMERIC[14,2] (OrderDetail);\n\ncurrency '\u0412\u0430\u043b\u044e\u0442\u0430' = DATA Currency (OrderDetail);\nnameCurrency '\u0412\u0430\u043b\u044e\u0442\u0430' (OrderDetail d) = name(currency(d));\n\nFORM order '\u0417\u0430\u043a\u0430\u0437'\n    OBJECTS o = Order PANEL\n    PROPERTIES(o) date, number, nameCustomer\n\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) nameBook, quantity, nameCurrency, price, NEW, DELETE\n    FILTERS order(d) == o\n\n    EDIT Order OBJECT o\n;\n\nFORM orders '\u0417\u0430\u043a\u0430\u0437\u044b'\n    OBJECTS o = Order\n    PROPERTIES(o) READONLY date, number, nameCustomer\n    PROPERTIES(o) NEWSESSION NEW, EDIT, DELETE\n;\n\nNAVIGATOR {\n    NEW orders;\n}\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u041d\u0443\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0432\u044b\u0433\u0440\u0443\u0437\u0438\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0437\u0430\u043a\u0430\u0437\u0430 \u0432 XML-\u0444\u043e\u0440\u043c\u0430\u0442."}),"\n",(0,d.jsx)(n.h3,{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-lsf",children:"GROUP Info;\nGROUP Customer : Info;\n\nGROUP Specification;\n\nGROUP price;\n\nFORM Order\n    PROPERTIES timeStamp = currentDateTime() ATTR\n\n    OBJECTS order = Order\n    PROPERTIES(order) IN Info date, number\n    PROPERTIES IN Customer nameCustomer(order) EXTID 'name', =address(customer(order)) EXTID 'address'\n\n    PROPERTIES IN Specification count = [GROUP SUM 1 BY order(OrderDetail d)](order) ATTR\n\n    OBJECTS Detail = OrderDetail IN Specification\n    PROPERTIES(Detail) nameBook, quantity,\n                       nameCurrency IN price EXTID 'currency' ATTR, price IN price EXTID 'value'\n    FILTERS order(Detail) = order\n;\n\nexportToXML '\u042d\u043a\u0441\u043f\u043e\u0440\u0442 \u0432 XML' (Order o) {\n    EXPORT Order OBJECTS order = o XML;\n    open(exportFile());\n}\n\nEXTEND FORM orders\n    PROPERTIES(o) exportToXML TOOLBAR\n;\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u0414\u043b\u044f \u0432\u044b\u0433\u0440\u0443\u0437\u043a\u0438 \u0432 XML \u0444\u043e\u0440\u043c\u0430\u0442, \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f \u0444\u043e\u0440\u043c\u0430 ",(0,d.jsx)(n.a,{href:"/ru/Structured_view",children:"\u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b"}),", \u0430 \u0437\u0430\u0442\u0435\u043c \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f ",(0,d.jsxs)(n.a,{href:"/ru/EXPORT_operator",children:["\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 ",(0,d.jsx)(n.code,{children:"EXPORT"})]}),". \u041e\u043d \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0444\u043e\u0440\u043c\u044b \u0444\u043e\u0440\u043c\u0438\u0440\u0443\u0435\u0442 \u0444\u0430\u0439\u043b \u0438 \u0441\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u0435\u0442 \u0435\u0433\u043e \u0432 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e ",(0,d.jsx)(n.code,{children:"exportFile"}),", \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0437\u0430\u0442\u0435\u043c \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0435 \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f ",(0,d.jsx)(n.code,{children:"open"}),". \u041e\u043d\u043e \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0444\u0430\u0439\u043b \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438, \u0430\u0441\u0441\u043e\u0446\u0438\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u043c \u0441 \u0435\u0433\u043e \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435\u043c (\u0432 \u0434\u0430\u043d\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 .xml)."]}),"\n",(0,d.jsx)(n.p,{children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0438\u0440\u0443\u044e\u0449\u0438\u0439 xml \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c :"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-xml",children:'<Order timeStamp="13.11.18 12:28:58">\n   <Info>\n      <date>13.11.18</date>\n      <number>12</number>\n      <Customer>\n         <name>\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c 2</name>\n         <address>\u0410\u0434\u0440\u0435\u0441 2</address>\n      </Customer>\n   </Info>\n   <Specification count="2">\n      <Detail>\n         <nameBook>\u041a\u043d\u0438\u0433\u0430 2</nameBook>\n         <quantity>1</quantity>\n         <price currency="USD">3.99</price>\n      </Detail>\n      <Detail>\n         <nameBook>\u041a\u043d\u0438\u0433\u0430 1</nameBook>\n         <quantity>2</quantity>\n         <price currency="EUR">4.99</price>\n      </Detail>\n   </Specification>\n</Order>\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u0412\u0435\u0440\u0445\u043d\u0438\u0439 \u0442\u044d\u0433 ",(0,d.jsx)(n.code,{children:"Order"})," \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c \u0444\u043e\u0440\u043c\u044b. \u0412\u0441\u0435 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0438\u043c\u0435\u043d\u0430 \u0442\u044d\u0433\u043e\u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442\u0441\u044f \u043b\u0438\u0431\u043e \u0438\u043c\u0435\u043d\u0435\u043c \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e\u043c \u043d\u0430 \u0444\u043e\u0440\u043c\u0435 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,d.jsx)(n.code,{children:"date"}),", ",(0,d.jsx)(n.code,{children:"number"})," \u0438\u043b\u0438 ",(0,d.jsx)(n.code,{children:"count"}),"), \u043b\u0438\u0431\u043e \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 ",(0,d.jsx)(n.code,{children:"EXTID"})," (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,d.jsx)(n.code,{children:"name"})," \u0438 ",(0,d.jsx)(n.code,{children:"address"}),"). \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 ",(0,d.jsx)(n.code,{children:"EXTID"})," \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0442\u0438\u0442\u0435\u043b\u044c\u043d\u0435\u0435 \u0432 \u0442\u0435\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445, \u043a\u043e\u0433\u0434\u0430 \u043d\u0430 \u0444\u043e\u0440\u043c\u0435 \u0431\u0443\u0434\u0443\u0442 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0441 \u043e\u0434\u043d\u0438\u043c \u0438\u043c\u0435\u043d\u0435\u043c, \u043d\u043e \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u044b\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432."]}),"\n",(0,d.jsxs)(n.p,{children:['\u0414\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f "\u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u044b\u0445" \u0442\u044d\u0433\u043e\u0432 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ',(0,d.jsx)(n.code,{children:"Info"}),", ",(0,d.jsx)(n.code,{children:"Customer"})," \u0438\u043b\u0438 ",(0,d.jsx)(n.code,{children:"Specification"}),") \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0433\u0440\u0443\u043f\u043f\u044b, \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0435 \u0434\u0440\u0443\u0433 \u0432 \u0434\u0440\u0443\u0433\u0430, \u043a \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u0437\u0430\u0442\u0435\u043c \u043f\u0440\u0438\u0432\u044f\u0437\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u043d\u0443\u0436\u043d\u044b\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430."]}),"\n",(0,d.jsxs)(n.p,{children:["\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 ",(0,d.jsx)(n.code,{children:"ATTR"}),' \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0435 \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0442\u044d\u0433, \u0430 \u0432 \u0430\u0442\u0440\u0438\u0431\u0443\u0442 \u0432\u0435\u0440\u0445\u043d\u0435\u0433\u043e "\u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e" \u0442\u044d\u0433\u0430 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ',(0,d.jsx)(n.code,{children:"timeStamp"})," \u0438\u043b\u0438 ",(0,d.jsx)(n.code,{children:"count"}),")."]}),"\n",(0,d.jsxs)(n.p,{children:["\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0432 \u0442\u044d\u0433 ",(0,d.jsx)(n.code,{children:"price"})," \u0430\u0442\u0440\u0438\u0431\u0443\u0442 \u0432\u0430\u043b\u044e\u0442\u044b, \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f \u0433\u0440\u0443\u043f\u043f\u0430 \u0441 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u043c \u0438\u043c\u0435\u043d\u0435\u043c, \u0432 \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0437\u0430\u0442\u0435\u043c \u043f\u043e\u043c\u0435\u0449\u0430\u044e\u0442\u0441\u044f \u0434\u0432\u0430 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 : ",(0,d.jsx)(n.code,{children:"nameCurrency"})," (\u0441 \u0432\u0430\u043b\u044e\u0442\u043e\u0439) \u0438 ",(0,d.jsx)(n.code,{children:"price"})," (\u0441\u0430\u043c\u0430 \u0446\u0435\u043d\u0430). \u0414\u043b\u044f \u0432\u0430\u043b\u044e\u0442\u044b \u0437\u0430\u0434\u0430\u0435\u0442\u0441\u044f \u0430\u0442\u0440\u0438\u0431\u0443\u0442 ",(0,d.jsx)(n.code,{children:"ATTR"})," - \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043e\u043d\u0430 \u043f\u043e\u043f\u0430\u0434\u0430\u0435\u0442 \u0432 \u0442\u044d\u0433 ",(0,d.jsx)(n.code,{children:"price"})," \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043e\u043c. \u0414\u043b\u044f \u0446\u0435\u043d\u044b \u0436\u0435 \u0437\u0430\u0434\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u0435\u0434\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0439 ",(0,d.jsx)(n.code,{children:"EXTID 'value'"}),", \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u0447\u0435\u043c\u0443 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u0438\u0448\u0435\u0442\u0441\u044f \u043d\u0435\u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0432 \u0442\u044d\u0433 ",(0,d.jsx)(n.code,{children:"price"}),". \u0411\u0435\u0437 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u0432\u0441\u0435\u0445 \u044d\u0442\u0438\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0431\u044b \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u043b \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-xml",children:"<price><currency>USD</currency><price>4.99</price></price>\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u0415\u0441\u043b\u0438 \u0435\u0441\u0442\u044c \u0444\u043e\u0440\u043c\u0430\u0442 \u0442\u0440\u0435\u0431\u0443\u0435\u043c\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430 XML, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0432\u044b\u0433\u0440\u0443\u0437\u043a\u0443, \u0442\u043e \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 \u043f\u0440\u0430\u0432\u0438\u043b\u0430\u043c\u0438."}),"\n",(0,d.jsx)(n.p,{children:"\u041b\u044e\u0431\u043e\u0439 \u0442\u044d\u0433 \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0438\u0440\u0443\u044e\u0449\u0435\u043c \u0444\u0430\u0439\u043b\u0435 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043e\u0434\u043d\u0438\u043c \u0438\u0437 \u0447\u0435\u0442\u044b\u0440\u0435\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432:"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.em,{children:"\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u043e\u043c"})," (\u043e\u0431\u044a\u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 ",(0,d.jsx)(n.code,{children:"PROPERTIES"}),")."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.em,{children:"\u041e\u0431\u044a\u0435\u043a\u0442\u043e\u043c"})," (\u043e\u0431\u044a\u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 ",(0,d.jsx)(n.code,{children:"OBJECTS"}),")."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.em,{children:"\u0413\u0440\u0443\u043f\u043f\u043e\u0439 \u0441\u0432\u043e\u0439\u0441\u0442\u0432"})," (\u043e\u0431\u044a\u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 ",(0,d.jsx)(n.code,{children:"GROUP"})," \u0437\u0430 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u043c\u0438 \u0444\u043e\u0440\u043c\u044b)."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.em,{children:"\u0424\u043e\u0440\u043c\u043e\u0439"})," (\u0441\u0430\u043c\u044b\u0439 \u0432\u0435\u0440\u0445\u043d\u0438\u0439 \u0442\u044d\u0433)"]}),"\n"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u0415\u0441\u043b\u0438 \u0442\u044d\u0433 \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u0435\u0442\u0441\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437 \u043f\u043e\u0434\u0440\u044f\u0434 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,d.jsx)(n.code,{children:"Detail"}),"), \u0442\u043e \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d ",(0,d.jsx)(n.em,{children:"\u043e\u0431\u044a\u0435\u043a\u0442"})," \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u043c \u0438\u043c\u0435\u043d\u0435\u043c."]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u0415\u0441\u043b\u0438 \u0442\u044d\u0433 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0435 \u0442\u044d\u0433\u0438, \u043d\u043e \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u0441\u0430\u043c \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u0435\u0442\u0441\u044f \u0440\u043e\u0432\u043d\u043e \u043e\u0434\u0438\u043d \u0440\u0430\u0437 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,d.jsx)(n.code,{children:"Specification"}),"), \u0442\u043e \u0434\u043b\u044f \u043d\u0435\u0433\u043e \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0430 ",(0,d.jsx)(n.em,{children:"\u0433\u0440\u0443\u043f\u043f\u0430 \u0441\u0432\u043e\u0439\u0441\u0442\u0432"}),"."]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u0415\u0441\u043b\u0438 \u0442\u044d\u0433 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044b (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,d.jsx)(n.code,{children:'count = "2"'}),"), \u0442\u043e \u043e\u043d \u0434\u043e\u043b\u0436\u0435\u043d \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043b\u0438\u0431\u043e ",(0,d.jsx)(n.em,{children:"\u0433\u0440\u0443\u043f\u043f\u043e\u0439 \u0441\u0432\u043e\u0439\u0441\u0442\u0432"}),", \u043b\u0438\u0431\u043e ",(0,d.jsx)(n.em,{children:"\u043e\u0431\u044a\u0435\u043a\u0442\u043e\u043c"})," (\u043a\u0430\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u043e, \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0442\u043e\u0433\u043e \u043e\u0434\u0438\u043d \u0438\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437 \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u0435\u0442\u0441\u044f \u044d\u0442\u043e\u0442 \u0442\u044d\u0433)."]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u0415\u0441\u043b\u0438 \u0442\u044d\u0433 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435, \u0442\u043e \u043e\u043d \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043b\u0438\u0431\u043e ",(0,d.jsx)(n.em,{children:"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e\u043c"})," (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,d.jsx)(n.code,{children:"nameBook"})," \u0438\u043b\u0438 ",(0,d.jsx)(n.code,{children:"quantity"}),') \u0441 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u043c \u0438\u043c\u0435\u043d\u0435\u043c, \u043b\u0438\u0431\u043e \u0433\u0440\u0443\u043f\u043f\u043e\u0439 \u0441\u0432\u043e\u0439\u0441\u0442\u0432 / \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u043c \u0441 \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c "\u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u043c" \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e\u043c \u0441 ',(0,d.jsx)(n.code,{children:"EXTID 'value'"}),")."]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",children:"\u041f\u0440\u0438\u043c\u0435\u0440 2"}),"\n",(0,d.jsx)(n.h3,{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1",children:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"}),"\n",(0,d.jsxs)(n.p,{children:["\u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e ",(0,d.jsx)(n.a,{href:"#%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80-1",children:(0,d.jsx)(n.strong,{children:"\u041f\u0440\u0438\u043c\u0435\u0440\u0443 1"})}),"."]}),"\n",(0,d.jsx)(n.p,{children:"\u041d\u0443\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0432\u044b\u0433\u0440\u0443\u0437\u0438\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0437\u0430\u043a\u0430\u0437\u0430 \u0432 JSON-\u0444\u043e\u0440\u043c\u0430\u0442."}),"\n",(0,d.jsx)(n.h3,{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1",children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-lsf",children:"exportToJSON '\u042d\u043a\u0441\u043f\u043e\u0440\u0442 \u0432 JSON' (Order o) {\n    EXPORT Order OBJECTS order = o JSON;\n    open(exportFile());\n}\n\nEXTEND FORM orders\n    PROPERTIES(o) exportToJSON TOOLBAR\n;\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0438\u0440\u0443\u044e\u0449\u0438\u0439 \u0444\u0430\u0439\u043b \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{  \n   "timeStamp":"13.11.18 15:11:45",\n   "Info":{  \n      "date":"13.11.18",\n      "number":"12",\n      "Customer":{  \n         "address":"\u0410\u0434\u0440\u0435\u0441 2",\n         "name":"\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c 2"\n      }\n   },\n   "Specification":{  \n      "count":2,\n      "Detail":[  \n         {  \n            "quantity":1,\n            "price":3.99,\n            "nameBook":"\u041a\u043d\u0438\u0433\u0430 2"\n         },\n         {  \n            "quantity":2,\n            "price":4.99,\n            "nameBook":"\u041a\u043d\u0438\u0433\u0430 1"\n         }\n      ]\n   }\n}\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u0421\u043b\u0435\u0434\u0443\u0435\u0442 \u043e\u0442\u043c\u0435\u0442\u0438\u0442\u044c, \u0447\u0442\u043e \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u0432\u044b\u0433\u0440\u0443\u0437\u043a\u0438 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442 JSON \u043e\u043f\u0446\u0438\u044f ",(0,d.jsx)(n.code,{children:"ATTR"})," \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f."]}),"\n",(0,d.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-3",children:"\u041f\u0440\u0438\u043c\u0435\u0440 3"}),"\n",(0,d.jsx)(n.h3,{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-2",children:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"}),"\n",(0,d.jsxs)(n.p,{children:["\u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e ",(0,d.jsx)(n.a,{href:"#%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80-1",children:(0,d.jsx)(n.strong,{children:"\u041f\u0440\u0438\u043c\u0435\u0440\u0443 1"})}),"."]}),"\n",(0,d.jsx)(n.p,{children:"\u041d\u0443\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0432\u044b\u0433\u0440\u0443\u0437\u0438\u0442 \u0432\u0441\u0435 \u0437\u0430\u043a\u0430\u0437\u044b \u0437\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u0443\u044e \u0434\u0430\u0442\u0443 \u0432 CSV \u0444\u043e\u0440\u043c\u0430\u0442."}),"\n",(0,d.jsx)(n.h3,{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-2",children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-lsf",children:"exportToCSV (DATE date) {\n    LOCAL file = FILE();\n    EXPORT CSV HEADER FROM number = number(order(OrderDetail d)),\n                    customer = nameCustomer(order(d)),\n                    book = nameBook(d),\n                    quantity(d),\n                    price(d)\n           WHERE date(order(d)) = date TO file;\n    WRITE CLIENT DIALOG file() TO 'orders';\n}\n\nFORM exportParameters '\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b'\n    OBJECTS d = DATE PANEL\n    PROPERTIES(d) '\u0414\u0430\u0442\u0430' = VALUE\n;\nexportToCSV '\u042d\u043a\u0441\u043f\u043e\u0440\u0442 \u0432 CSV' () {\n    DIALOG exportParameters OBJECTS d INPUT DO\n        exportToCSV(d);\n}\n\nEXTEND FORM orders\n    PROPERTIES() exportToCSV DRAW o TOOLBAR\n;\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u041f\u0435\u0440\u0432\u043e\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u043d\u0430 \u0432\u0445\u043e\u0434 \u0434\u0430\u0442\u0443 \u0438, \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 ",(0,d.jsx)(n.code,{children:"EXPORT"}),", \u0444\u043e\u0440\u043c\u0438\u0440\u0443\u0435\u0442 \u043f\u043b\u043e\u0441\u043a\u0438\u0439 \u0444\u0430\u0439\u043b CSV \u0441 \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u0435\u043c \u0442\u043e\u0447\u043a\u0430 \u0441 \u0437\u0430\u043f\u044f\u0442\u043e\u0439. \u0424\u0430\u0439\u043b \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-csv",children:"number;customer;book;quantity;price\n14;\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c 1;\u041a\u043d\u0438\u0433\u0430 1;2;8.99\n12;\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c 2;\u041a\u043d\u0438\u0433\u0430 2;1;3.99\n12;\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c 2;\u041a\u043d\u0438\u0433\u0430 1;2;4.99\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u0414\u043b\u044f \u043f\u0435\u0440\u0432\u044b\u0445 \u0442\u0440\u0435\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043e \u0438\u043c\u044f \u043a\u043e\u043b\u043e\u043d\u043a\u0438, \u0430 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0432\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u0438\u043c\u044f \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u0441\u0432\u043e\u0439\u0441\u0442\u0432. \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0432 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e ",(0,d.jsx)(n.code,{children:"file"}),", \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0437\u0430\u0442\u0435\u043c, \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 ",(0,d.jsxs)(n.a,{href:"/ru/WRITE_operator",children:["\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 ",(0,d.jsx)(n.code,{children:"WRITE"})]}),", \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0435\u0433\u043e \u043d\u0430 \u0440\u0430\u0431\u043e\u0447\u0438\u0439 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440."]}),"\n",(0,d.jsx)(n.p,{children:"\u0412\u0442\u043e\u0440\u043e\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0435\u0442 \u0444\u043e\u0440\u043c\u0443, \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442 \u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0434\u0430\u0442\u0443 \u0438 \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442 \u043f\u0435\u0440\u0432\u043e\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043f\u043e \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0443 \u0434\u0430\u043d\u043d\u044b\u0445."})]})}function x(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>s});var d=r(96540);const o={},i=d.createContext(o);function c(e){const n=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);