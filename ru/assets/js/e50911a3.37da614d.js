"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[18010],{62177:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>i});var t=r(74848),o=r(28453);const l={title:"How-to: PARTITION"},s=void 0,d={id:"How-to_PARTITION",title:"How-to: PARTITION",description:"\u041f\u0440\u0438\u043c\u0435\u0440 1",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-v4/How-to_PARTITION.md",sourceDirName:".",slug:"/How-to_PARTITION",permalink:"/ru/v4/How-to_PARTITION",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/ru/How-to_PARTITION.md",tags:[],version:"v4",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"7 \u0438\u044e\u043b. 2021 \u0433.",frontMatter:{title:"How-to: PARTITION"},sidebar:"learn",previous:{title:"How-to: GROUP CONCAT",permalink:"/ru/v4/How-to_GROUP_CONCAT"},next:{title:"How-to: GUI",permalink:"/ru/v4/How-to_GUI"}},c={},i=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440 1",id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 2",id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 3",id:"\u043f\u0440\u0438\u043c\u0435\u0440-3",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-2",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-2",level:3}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",children:"\u041f\u0440\u0438\u043c\u0435\u0440 1"}),"\n",(0,t.jsx)(n.h3,{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435",children:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"}),"\n",(0,t.jsx)(n.p,{children:"\u0415\u0441\u0442\u044c \u0437\u0430\u043a\u0430\u0437 \u0432\u043c\u0435\u0441\u0442\u0435 \u0441\u043e \u0441\u0442\u0440\u043e\u043a\u0430\u043c\u0438."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"CLASS Order '\u0417\u0430\u043a\u0430\u0437';\r\nCLASS OrderDetail '\u0421\u0442\u0440\u043e\u043a\u0430 \u0437\u0430\u043a\u0430\u0437\u0430';\r\n\r\norder '\u0417\u0430\u043a\u0430\u0437' = DATA Order (OrderDetail) NONULL DELETE;\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0440\u043e\u043d\u0443\u043c\u0435\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0438 \u043e\u0442 1 \u0432 \u0434\u0430\u043d\u043d\u043e\u043c \u0437\u0430\u043a\u0430\u0437\u0435 \u0432 \u043f\u043e\u0440\u044f\u0434\u043a\u0435 \u0438\u0445 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f."}),"\n",(0,t.jsx)(n.h3,{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"index '\u041d\u043e\u043c\u0435\u0440 \u0441\u0442\u0440\u043e\u043a\u0438' (OrderDetail d) = PARTITION SUM 1 ORDER d BY order(d) CHARWIDTH 4;\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u0441\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c \u043f\u043e \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u043c\u0443 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u0443 \u0441\u0442\u0440\u043e\u043a\u0438 \u0437\u0430\u043a\u0430\u0437\u0430, \u0442\u0430\u043a \u043a\u0430\u043a \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044f, \u0447\u0442\u043e \u043e\u043d \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u0435\u0442 \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043d\u043e\u0432\u044b\u0445 \u0441\u0442\u0440\u043e\u043a."}),"\n",(0,t.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",children:"\u041f\u0440\u0438\u043c\u0435\u0440 2"}),"\n",(0,t.jsx)(n.h3,{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1",children:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"}),"\n",(0,t.jsx)(n.p,{children:"\u0415\u0441\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u0435\u0439 \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0434\u0430\u0442\u043e\u0439."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"date '\u0414\u0430\u0442\u0430' = DATA DATE (Order);\r\n\r\nCLASS Customer '\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c';\r\ncustomer '\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c' = DATA Customer (Order);\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043b\u044f \u0437\u0430\u043a\u0430\u0437\u0430 \u043d\u0430\u0439\u0442\u0438 \u0434\u0430\u0442\u0443 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0433\u043e \u0437\u0430\u043a\u0430\u0437\u0430 \u044d\u0442\u043e\u0433\u043e \u0436\u0435 \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044f."}),"\n",(0,t.jsx)(n.h3,{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1",children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"prevOrderDate '\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0439 \u0437\u0430\u043a\u0430\u0437' (Order o) = PARTITION PREV date(o) ORDER date(o), o BY customer(o);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u041a\u0430\u043a \u0438 \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u0441 ",(0,t.jsxs)(n.a,{href:"/ru/v4/How-to_GROUP_CONCAT",children:["How-to: ",(0,t.jsx)(n.code,{children:"GROUP CONCAT"})]}),", \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0434\u0435\u0442\u0435\u0440\u043c\u0438\u043d\u0438\u0440\u043e\u0432\u0430\u043d. \u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u0432 ",(0,t.jsx)(n.code,{children:"ORDER"})," \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u043c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u043c \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u0430\u043c \u0437\u0430\u043a\u0430\u0437 (\u0434\u0435-\u0444\u0430\u043a\u0442\u043e, \u0435\u0433\u043e \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440)."]}),"\n",(0,t.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-3",children:"\u041f\u0440\u0438\u043c\u0435\u0440 3"}),"\n",(0,t.jsx)(n.h3,{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-2",children:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"}),"\n",(0,t.jsx)(n.p,{children:"\u0415\u0441\u0442\u044c \u0442\u0435\u043a\u0443\u0449\u0438\u0435 \u043e\u0441\u0442\u0430\u0442\u043a\u0438 \u043a\u043d\u0438\u0433 \u043f\u043e \u043f\u0430\u0440\u0442\u0438\u044f\u043c \u043d\u0430 \u0441\u043a\u043b\u0430\u0434\u0435."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"CLASS Book '\u041a\u043d\u0438\u0433\u0430';\r\n\r\nCLASS Batch '\u041f\u0430\u0440\u0442\u0438\u044f';\r\nbook '\u041a\u043d\u0438\u0433\u0430' = DATA Book (Batch);\r\ndate '\u0414\u0430\u0442\u0430 \u043f\u0440\u0438\u0445\u043e\u0434\u0430' = DATA DATE (Batch);\r\n\r\nCLASS Stock '\u0421\u043a\u043b\u0430\u0434';\r\n// \u041e\u0441\u0442\u0430\u0442\u043e\u043a \u0441\u0434\u0435\u043b\u0430\u043d \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u044b\u043c \u0434\u043b\u044f \u043f\u0440\u0438\u043c\u0435\u0440\u0430. \u041e\u0431\u044b\u0447\u043d\u043e \u044d\u0442\u043e \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u043c\u043e\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e.\r\ncurrentBalance '\u041e\u0441\u0442\u0430\u0442\u043e\u043a' = DATA INTEGER (Batch, Stock); \n"})}),"\n",(0,t.jsx)(n.p,{children:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043b\u044f \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0433\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u043e\u0434\u043d\u043e\u0439 \u043a\u043d\u0438\u0433\u0438 \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u0442\u044c \u044d\u0442\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043e \u043f\u0430\u0440\u0442\u0438\u044f\u043c \u043f\u043e \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0443 FIFO."}),"\n",(0,t.jsx)(n.h3,{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-2",children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"quantity = DATA LOCAL INTEGER (Book);\r\n\r\nquantityFIFO '\u041a\u043e\u043b-\u0432\u043e \u043f\u043e \u043f\u0430\u0440\u0442\u0438\u0438 FIFO' (Batch b, Stock s) = PARTITION UNGROUP quantity\r\n                                                                    LIMIT STRICT currentBalance(b, s)\r\n                                                                    ORDER date(b), b\r\n                                                                    BY book(b);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,t.jsx)(n.code,{children:"STRICT"})," \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u0435\u0441\u043b\u0438 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0431\u0443\u0434\u0435\u0442 \u0431\u043e\u043b\u044c\u0448\u0435 \u043e\u0441\u0442\u0430\u0442\u043a\u0430 \u043f\u043e \u0432\u0441\u0435\u043c \u043f\u0430\u0440\u0442\u0438\u044f\u043c, \u0442\u043e \u0432\u0441\u044f \u0440\u0430\u0437\u043d\u0438\u0446\u0430 \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430 \u043a \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439 \u043f\u0430\u0440\u0442\u0438\u0438."]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>d});var t=r(96540);const o={},l=t.createContext(o);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);