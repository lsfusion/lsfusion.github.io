"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[5834],{59977:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>i});var o=l(74848),s=l(28453);const t={title:"How-to: GROUP SUM"},c=void 0,r={id:"How-to_GROUP_SUM",title:"How-to: GROUP SUM",description:"\u041f\u0440\u0438\u043c\u0435\u0440 1",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-v5/How-to_GROUP_SUM.md",sourceDirName:".",slug:"/How-to_GROUP_SUM",permalink:"/ru/How-to_GROUP_SUM",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/ru/How-to_GROUP_SUM.md",tags:[],version:"v5",lastUpdatedAt:1685108136,formattedLastUpdatedAt:"26 \u043c\u0430\u044f 2023 \u0433.",frontMatter:{title:"How-to: GROUP SUM"},sidebar:"learn",previous:{title:"How-to: \u0412\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f",permalink:"/ru/How-to_Computations"},next:{title:"How-to: GROUP MAX/MIN/AGGR",permalink:"/ru/How-to_GROUP_MAX_MIN_AGGR"}},d={},i=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440 1",id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 2",id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 3",id:"\u043f\u0440\u0438\u043c\u0435\u0440-3",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-2",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-2",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 4",id:"\u043f\u0440\u0438\u043c\u0435\u0440-4",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-3",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-3",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 5",id:"\u043f\u0440\u0438\u043c\u0435\u0440-5",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-4",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-4",level:3}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",children:"\u041f\u0440\u0438\u043c\u0435\u0440 1"}),"\n",(0,o.jsx)(n.h3,{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435",children:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"}),"\n",(0,o.jsx)(n.p,{children:"\u0415\u0441\u0442\u044c \u043d\u0430\u0431\u043e\u0440 \u043a\u043d\u0438\u0433, \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0445 \u043a \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"CLASS Book '\u041a\u043d\u0438\u0433\u0430';\nCLASS Category '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f';\n\ncategory '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f' = DATA Category (Book);\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043d\u0438\u0433 \u0432 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438."}),"\n",(0,o.jsx)(n.h3,{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"countBooks '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043d\u0438\u0433' (Category c) = GROUP SUM 1 BY category(Book book);\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",children:"\u041f\u0440\u0438\u043c\u0435\u0440 2"}),"\n",(0,o.jsx)(n.h3,{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1",children:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"}),"\n",(0,o.jsx)(n.p,{children:"\u0415\u0441\u0442\u044c \u043d\u0430\u0431\u043e\u0440 \u043a\u043d\u0438\u0433, \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0445 \u043a \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c \u0442\u0435\u0433\u0430\u043c. \u041a\u0430\u0436\u0434\u0430\u044f \u043a\u043d\u0438\u0433\u0430 \u043c\u043e\u0436\u0435\u0442 \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u044c\u0441\u044f \u043a \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c \u0442\u0435\u0433\u0430\u043c \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"CLASS Tag '\u0422\u0435\u0433';\n\nin '\u0412\u043a\u043b' = DATA BOOLEAN (Tag, Book);\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043d\u0438\u0433 \u0432 \u0442\u0435\u0433\u0435."}),"\n",(0,o.jsx)(n.h3,{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1",children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"countBooks '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043d\u0438\u0433' (Tag t) = GROUP SUM 1 IF in(t, Book b);\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-3",children:"\u041f\u0440\u0438\u043c\u0435\u0440 3"}),"\n",(0,o.jsx)(n.h3,{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-2",children:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"}),"\n",(0,o.jsx)(n.p,{children:"\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u0438 \u043a\u043d\u0438\u0433, \u0433\u0434\u0435 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438 \u0435\u0441\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u043d\u0438\u0433\u0443 \u0438 \u0441\u043a\u043b\u0430\u0434, \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u0431\u044b\u043b\u043e \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u0435, \u0430 \u0442\u0430\u043a\u0436\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0438 \u0442\u0438\u043f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 (\u043f\u0440\u0438\u0445\u043e\u0434/\u0440\u0430\u0441\u0445\u043e\u0434)."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"CLASS Stock '\u0421\u043a\u043b\u0430\u0434';\n\n\nCLASS Ledger '\u0414\u0432\u0438\u0436\u0435\u043d\u0438\u0435';\nbook '\u041a\u043d\u0438\u0433\u0430' = DATA Book (Ledger);\nstock '\u0421\u043a\u043b\u0430\u0434' = DATA Stock (Ledger);\n\nquantity '\u041a\u043e\u043b-\u0432\u043e' = DATA INTEGER (Ledger);\nout '\u0420\u0430\u0441\u0445\u043e\u0434' = DATA BOOLEAN (Ledger);\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u043e\u0441\u0442\u0430\u0442\u043e\u043a \u043f\u043e \u0441\u043a\u043b\u0430\u0434\u0443 \u0434\u043b\u044f \u043a\u043d\u0438\u0433\u0438."}),"\n",(0,o.jsx)(n.h3,{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-2",children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"TABLE bookStock (Book, Stock);\ncurrentBalance '\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u043e\u0441\u0442\u0430\u0442\u043e\u043a' (Book b, Stock s) = GROUP SUM IF out(Ledger l) THEN -quantity(l) ELSE quantity(l) BY book(l), stock(l) MATERIALIZED;\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u043e ",(0,o.jsx)(n.code,{children:"currentBalance"})," \u043b\u0443\u0447\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u043f\u043e\u043c\u0435\u0447\u0430\u0442\u044c \u043a\u0430\u043a ",(0,o.jsx)(n.a,{href:"/ru/Materializations",children:(0,o.jsx)(n.code,{children:"MATERIALIZED"})})," \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438 \u0447\u0442\u0435\u043d\u0438\u0438 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043e\u0441\u0442\u0430\u0442\u043a\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u043d\u0435 \u0441\u0447\u0438\u0442\u0430\u043b\u0430 \u0435\u0433\u043e \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u044f \u0437\u0430 \u0432\u0441\u0435 \u0432\u0440\u0435\u043c\u044f, \u0430 \u043e\u0431\u0440\u0430\u0449\u0430\u043b\u0430\u0441\u044c \u0431\u044b \u043a \u0442\u0430\u0431\u043b\u0438\u0446\u0435 ",(0,o.jsx)(n.code,{children:"bookStock"})," \u0441 \u0443\u0436\u0435 \u0433\u043e\u0442\u043e\u0432\u044b\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c. \u042d\u0442\u043e \u0437\u0430\u043c\u0435\u0434\u043b\u044f\u0435\u0442 \u0437\u0430\u043f\u0438\u0441\u044c (\u0442\u0430\u043a \u043a\u0430\u043a \u043f\u0440\u0438 \u0437\u0430\u043f\u0438\u0441\u0438 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u044f \u0431\u0443\u0434\u0435\u0442 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043e\u0441\u0442\u0430\u0442\u043a\u0430), \u043e\u0434\u043d\u0430\u043a\u043e \u0437\u043d\u0430\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0443\u0441\u043a\u043e\u0440\u044f\u0435\u0442 \u0447\u0442\u0435\u043d\u0438\u0435."]}),"\n",(0,o.jsxs)(n.p,{children:["\u0414\u043b\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 ",(0,o.jsx)(n.code,{children:"currentBalance"})," \u043d\u0438\u0433\u0434\u0435 \u044f\u0432\u043d\u043e \u043d\u0435 \u0437\u0430\u0434\u0430\u0435\u0442\u0441\u044f, \u0432 \u043a\u0430\u043a\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 \u043e\u043d\u043e \u0434\u043e\u043b\u0436\u043d\u043e \u0445\u0440\u0430\u043d\u0438\u0442\u044c\u0441\u044f, \u0442\u0430\u043a \u043a\u0430\u043a \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u043c\u043e\u0436\u0435\u0442 \u0441\u0430\u043c\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043f\u043e \u0441\u0438\u0433\u043d\u0430\u0442\u0443\u0440\u0435, \u0432 \u043a\u0430\u043a\u0443\u044e \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0435\u0433\u043e \u043b\u0443\u0447\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u044c (\u0432 \u0434\u0430\u043d\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u044d\u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u0442\u0430\u0431\u043b\u0438\u0446\u0430 ",(0,o.jsx)(n.code,{children:"bookStock"}),")."]}),"\n",(0,o.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-4",children:"\u041f\u0440\u0438\u043c\u0435\u0440 4"}),"\n",(0,o.jsx)(n.h3,{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-3",children:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"}),"\n",(0,o.jsxs)(n.p,{children:["\u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e ",(0,o.jsx)(n.a,{href:"#%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80-3",children:(0,o.jsx)(n.strong,{children:"\u041f\u0440\u0438\u043c\u0435\u0440\u0443 3"})}),", \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u044f \u0443\u043a\u0430\u0437\u0430\u043d\u0430 \u0434\u0430\u0442\u0430 \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u044f."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"// \u043b\u0443\u0447\u0448\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u0438\u043d\u0434\u0435\u043a\u0441, \u0447\u0442\u043e\u0431\u044b \u0431\u044b\u0441\u0442\u0440\u043e \u0448\u043b\u0430 \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f \u043f\u043e \u0434\u0430\u0442\u0435\ndate '\u0414\u0430\u0442\u0430' = DATA DATE (Ledger) INDEXED; \n"})}),"\n",(0,o.jsx)(n.p,{children:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u043e\u0441\u0442\u0430\u0442\u043e\u043a \u043f\u043e \u0441\u043a\u043b\u0430\u0434\u0443 \u0434\u043b\u044f \u043a\u043d\u0438\u0433\u0438 \u043d\u0430 \u0434\u0430\u0442\u0443 (\u043d\u0430 \u0443\u0442\u0440\u043e, \u0431\u0435\u0437 \u0443\u0447\u0435\u0442\u0430 \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u0439 \u0437\u0430 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u0443\u044e \u0434\u0430\u0442\u0443)."}),"\n",(0,o.jsx)(n.h3,{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-3",children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"// \u0412\u0430\u0440\u0438\u0430\u043d\u0442 1\nbalance1 '\u041e\u0441\u0442\u0430\u0442\u043e\u043a \u043d\u0430 \u0434\u0430\u0442\u0443' (Book b, Stock s, DATE d) = GROUP SUM (IF out(Ledger l) THEN -quantity(l) ELSE quantity(l)) IF date(l) < d BY book(l), stock(l);\n\n// \u0412\u0430\u0440\u0438\u0430\u043d\u0442 2\nbalance2 '\u041e\u0441\u0442\u0430\u0442\u043e\u043a \u043d\u0430 \u0434\u0430\u0442\u0443' (Book b, Stock s, DATE d) = currentBalance(b, s) (-) [ GROUP SUM (IF out(Ledger l) THEN -quantity(l) ELSE quantity(l)) IF date(l) >= d BY book(l), stock(l)](b, s);\n"})}),"\n",(0,o.jsx)(n.p,{children:'\u0412\u0442\u043e\u0440\u043e\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0442\u0438\u0442\u0435\u043b\u044c\u043d\u0435\u0435. \u0422\u0430\u043a \u043a\u0430\u043a \u0447\u0430\u0449\u0435 \u0432\u0441\u0435\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u0431\u0443\u0434\u0443\u0442 \u0438\u0434\u0442\u0438 \u043a \u0434\u0430\u0442\u0430\u043c \u0431\u043b\u0438\u0436\u0435 \u043a \u0442\u0435\u043a\u0443\u0449\u0435\u0439, \u0442\u043e \u0441\u0435\u0440\u0432\u0435\u0440 \u0431\u0443\u0434\u0435\u0442 \u0441\u0447\u0438\u0442\u0430\u0442\u044c \u043e\u0442 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043e\u0441\u0442\u0430\u0442\u043a\u0430 "\u043d\u0430\u0437\u0430\u0434", \u0447\u0442\u043e \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043c\u0435\u043d\u044c\u0448\u0435\u0433\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0437\u0430\u043f\u0438\u0441\u0435\u0439.'}),"\n",(0,o.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-5",children:"\u041f\u0440\u0438\u043c\u0435\u0440 5"}),"\n",(0,o.jsx)(n.h3,{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-4",children:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"}),"\n",(0,o.jsxs)(n.p,{children:["\u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e ",(0,o.jsx)(n.a,{href:"#%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80-3",children:(0,o.jsx)(n.strong,{children:"\u041f\u0440\u0438\u043c\u0435\u0440\u0443 3"})}),", \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0443\u0436\u043d\u043e \u043f\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u043e\u0441\u0442\u0430\u0442\u043e\u043a \u043a\u043d\u0438\u0433\u0438 \u043f\u043e \u0432\u0441\u0435\u043c \u0441\u043a\u043b\u0430\u0434\u0430\u043c."]}),"\n",(0,o.jsx)(n.h3,{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-4",children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"currentBalance '\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u043e\u0441\u0442\u0430\u0442\u043e\u043a' (Book b) = GROUP SUM currentBalance(b, Stock s);\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u042d\u0442\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u0432 \u043e\u0442\u043b\u0438\u0447\u0438\u0438 \u043e\u0442 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043e\u0441\u0442\u0430\u0442\u043a\u0430 \u043f\u043e \u0441\u043a\u043b\u0430\u0434\u0430\u043c \u043d\u0435\u0442 \u0441\u043c\u044b\u0441\u043b\u0430 \u0434\u0435\u043b\u0430\u0442\u044c ",(0,o.jsx)(n.code,{children:"MATERIALIZED"})," \u0432 \u0441\u043b\u0443\u0447\u0430\u0435, \u0435\u0441\u043b\u0438 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043a\u043b\u0430\u0434\u043e\u0432 \u043d\u0435\u0432\u0435\u043b\u0438\u043a\u043e, \u0442\u0430\u043a \u043a\u0430\u043a \u044d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u0442\u044c \u043a UPDATE CONFLICT \u043f\u0440\u0438 \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c\u0438 \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u044f \u043f\u043e \u043e\u0434\u043d\u043e\u0439 \u043a\u043d\u0438\u0433\u0435 \u043f\u043e \u0440\u0430\u0437\u043d\u044b\u043c \u0441\u043a\u043b\u0430\u0434\u0430\u043c."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>c,x:()=>r});var o=l(96540);const s={},t=o.createContext(s);function c(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);