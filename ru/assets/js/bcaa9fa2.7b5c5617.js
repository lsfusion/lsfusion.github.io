"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["58342"],{70986:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>s,metadata:()=>t,assets:()=>c,toc:()=>i,contentTitle:()=>d});var t=JSON.parse('{"id":"How-to_PARTITION","title":"How-to: PARTITION","description":"\u041F\u0440\u0438\u043C\u0435\u0440 1","source":"@site/i18n/ru/docusaurus-plugin-content-docs/current/How-to_PARTITION.md","sourceDirName":".","slug":"/How-to_PARTITION","permalink":"/ru/How-to_PARTITION","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/master/docs/ru/How-to_PARTITION.md","tags":[],"version":"current","lastUpdatedAt":1625651520000,"frontMatter":{"title":"How-to: PARTITION"},"sidebar":"learn","previous":{"title":"How-to: GROUP CONCAT","permalink":"/ru/How-to_GROUP_CONCAT"},"next":{"title":"How-to: GUI","permalink":"/ru/How-to_GUI"}}'),l=r("85893"),o=r("50065");let s={title:"How-to: PARTITION"},d=void 0,c={},i=[{value:"\u041F\u0440\u0438\u043C\u0435\u0440 1",id:"\u043F\u0440\u0438\u043C\u0435\u0440-1",level:2},{value:"\u0423\u0441\u043B\u043E\u0432\u0438\u0435",id:"\u0443\u0441\u043B\u043E\u0432\u0438\u0435",level:3},{value:"\u0420\u0435\u0448\u0435\u043D\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043D\u0438\u0435",level:3},{value:"\u041F\u0440\u0438\u043C\u0435\u0440 2",id:"\u043F\u0440\u0438\u043C\u0435\u0440-2",level:2},{value:"\u0423\u0441\u043B\u043E\u0432\u0438\u0435",id:"\u0443\u0441\u043B\u043E\u0432\u0438\u0435-1",level:3},{value:"\u0420\u0435\u0448\u0435\u043D\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043D\u0438\u0435-1",level:3},{value:"\u041F\u0440\u0438\u043C\u0435\u0440 3",id:"\u043F\u0440\u0438\u043C\u0435\u0440-3",level:2},{value:"\u0423\u0441\u043B\u043E\u0432\u0438\u0435",id:"\u0443\u0441\u043B\u043E\u0432\u0438\u0435-2",level:3},{value:"\u0420\u0435\u0448\u0435\u043D\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043D\u0438\u0435-2",level:3}];function a(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u043F\u0440\u0438\u043C\u0435\u0440-1",children:"\u041F\u0440\u0438\u043C\u0435\u0440 1"}),"\n",(0,l.jsx)(n.h3,{id:"\u0443\u0441\u043B\u043E\u0432\u0438\u0435",children:"\u0423\u0441\u043B\u043E\u0432\u0438\u0435"}),"\n",(0,l.jsx)(n.p,{children:"\u0415\u0441\u0442\u044C \u0437\u0430\u043A\u0430\u0437 \u0432\u043C\u0435\u0441\u0442\u0435 \u0441\u043E \u0441\u0442\u0440\u043E\u043A\u0430\u043C\u0438."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lsf",children:"CLASS Order '\u0417\u0430\u043A\u0430\u0437';\nCLASS OrderDetail '\u0421\u0442\u0440\u043E\u043A\u0430 \u0437\u0430\u043A\u0430\u0437\u0430';\n\norder '\u0417\u0430\u043A\u0430\u0437' = DATA Order (OrderDetail) NONULL DELETE;\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043F\u0440\u043E\u043D\u0443\u043C\u0435\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0442\u0440\u043E\u043A\u0438 \u043E\u0442 1 \u0432 \u0434\u0430\u043D\u043D\u043E\u043C \u0437\u0430\u043A\u0430\u0437\u0435 \u0432 \u043F\u043E\u0440\u044F\u0434\u043A\u0435 \u0438\u0445 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044F."}),"\n",(0,l.jsx)(n.h3,{id:"\u0440\u0435\u0448\u0435\u043D\u0438\u0435",children:"\u0420\u0435\u0448\u0435\u043D\u0438\u0435"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lsf",children:"index '\u041D\u043E\u043C\u0435\u0440 \u0441\u0442\u0440\u043E\u043A\u0438' (OrderDetail d) = PARTITION SUM 1 ORDER d BY order(d) CHARWIDTH 4;\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u0412 \u0434\u0430\u043D\u043D\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435, \u0441\u043E\u0440\u0442\u0438\u0440\u0443\u0435\u043C \u043F\u043E \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0435\u043C\u0443 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u0443 \u0441\u0442\u0440\u043E\u043A\u0438 \u0437\u0430\u043A\u0430\u0437\u0430, \u0442\u0430\u043A \u043A\u0430\u043A \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044F, \u0447\u0442\u043E \u043E\u043D \u0432\u043E\u0437\u0440\u0430\u0441\u0442\u0430\u0435\u0442 \u043F\u0440\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u043D\u043E\u0432\u044B\u0445 \u0441\u0442\u0440\u043E\u043A."}),"\n",(0,l.jsx)(n.h2,{id:"\u043F\u0440\u0438\u043C\u0435\u0440-2",children:"\u041F\u0440\u0438\u043C\u0435\u0440 2"}),"\n",(0,l.jsx)(n.h3,{id:"\u0443\u0441\u043B\u043E\u0432\u0438\u0435-1",children:"\u0423\u0441\u043B\u043E\u0432\u0438\u0435"}),"\n",(0,l.jsx)(n.p,{children:"\u0415\u0441\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u043A\u0430\u0437\u043E\u0432 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439 \u0441 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0439 \u0434\u0430\u0442\u043E\u0439."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lsf",children:"date '\u0414\u0430\u0442\u0430' = DATA DATE (Order);\n\nCLASS Customer '\u041F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u044C';\ncustomer '\u041F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u044C' = DATA Customer (Order);\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0434\u043B\u044F \u0437\u0430\u043A\u0430\u0437\u0430 \u043D\u0430\u0439\u0442\u0438 \u0434\u0430\u0442\u0443 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0433\u043E \u0437\u0430\u043A\u0430\u0437\u0430 \u044D\u0442\u043E\u0433\u043E \u0436\u0435 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u044F."}),"\n",(0,l.jsx)(n.h3,{id:"\u0440\u0435\u0448\u0435\u043D\u0438\u0435-1",children:"\u0420\u0435\u0448\u0435\u043D\u0438\u0435"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lsf",children:"prevOrderDate '\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439 \u0437\u0430\u043A\u0430\u0437' (Order o) = PARTITION PREV date(o) ORDER date(o), o BY customer(o);\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u041A\u0430\u043A \u0438 \u0432 \u0441\u043B\u0443\u0447\u0430\u0435 \u0441 ",(0,l.jsxs)(n.a,{href:"/ru/How-to_GROUP_CONCAT",children:["How-to: ",(0,l.jsx)(n.code,{children:"GROUP CONCAT"})]}),", \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u0434\u0435\u0442\u0435\u0440\u043C\u0438\u043D\u0438\u0440\u043E\u0432\u0430\u043D. \u041F\u043E\u044D\u0442\u043E\u043C\u0443 \u0432 ",(0,l.jsx)(n.code,{children:"ORDER"})," \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u043C \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u043C \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0430\u043C \u0437\u0430\u043A\u0430\u0437 (\u0434\u0435-\u0444\u0430\u043A\u0442\u043E, \u0435\u0433\u043E \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0439 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440)."]}),"\n",(0,l.jsx)(n.h2,{id:"\u043F\u0440\u0438\u043C\u0435\u0440-3",children:"\u041F\u0440\u0438\u043C\u0435\u0440 3"}),"\n",(0,l.jsx)(n.h3,{id:"\u0443\u0441\u043B\u043E\u0432\u0438\u0435-2",children:"\u0423\u0441\u043B\u043E\u0432\u0438\u0435"}),"\n",(0,l.jsx)(n.p,{children:"\u0415\u0441\u0442\u044C \u0442\u0435\u043A\u0443\u0449\u0438\u0435 \u043E\u0441\u0442\u0430\u0442\u043A\u0438 \u043A\u043D\u0438\u0433 \u043F\u043E \u043F\u0430\u0440\u0442\u0438\u044F\u043C \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lsf",children:"CLASS Book '\u041A\u043D\u0438\u0433\u0430';\n\nCLASS Batch '\u041F\u0430\u0440\u0442\u0438\u044F';\nbook '\u041A\u043D\u0438\u0433\u0430' = DATA Book (Batch);\ndate '\u0414\u0430\u0442\u0430 \u043F\u0440\u0438\u0445\u043E\u0434\u0430' = DATA DATE (Batch);\n\nCLASS Stock '\u0421\u043A\u043B\u0430\u0434';\n// \u041E\u0441\u0442\u0430\u0442\u043E\u043A \u0441\u0434\u0435\u043B\u0430\u043D \u043F\u0435\u0440\u0432\u0438\u0447\u043D\u044B\u043C \u0434\u043B\u044F \u043F\u0440\u0438\u043C\u0435\u0440\u0430. \u041E\u0431\u044B\u0447\u043D\u043E \u044D\u0442\u043E \u0432\u044B\u0447\u0438\u0441\u043B\u044F\u0435\u043C\u043E\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E.\ncurrentBalance '\u041E\u0441\u0442\u0430\u0442\u043E\u043A' = DATA INTEGER (Batch, Stock); \n"})}),"\n",(0,l.jsx)(n.p,{children:"\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0434\u043B\u044F \u0437\u0430\u0434\u0430\u043D\u043D\u043E\u0433\u043E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u043E\u0434\u043D\u043E\u0439 \u043A\u043D\u0438\u0433\u0438 \u0440\u0430\u0441\u043F\u0438\u0441\u0430\u0442\u044C \u044D\u0442\u043E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u043E \u043F\u0430\u0440\u0442\u0438\u044F\u043C \u043F\u043E \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u0443 FIFO."}),"\n",(0,l.jsx)(n.h3,{id:"\u0440\u0435\u0448\u0435\u043D\u0438\u0435-2",children:"\u0420\u0435\u0448\u0435\u043D\u0438\u0435"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lsf",children:"quantity = DATA LOCAL INTEGER (Book);\n\nquantityFIFO '\u041A\u043E\u043B-\u0432\u043E \u043F\u043E \u043F\u0430\u0440\u0442\u0438\u0438 FIFO' (Batch b, Stock s) = PARTITION UNGROUP quantity\n                                                                    LIMIT STRICT currentBalance(b, s)\n                                                                    ORDER date(b), b\n                                                                    BY book(b);\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 ",(0,l.jsx)(n.code,{children:"STRICT"})," \u043E\u0431\u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043E \u0435\u0441\u043B\u0438 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0431\u0443\u0434\u0435\u0442 \u0431\u043E\u043B\u044C\u0448\u0435 \u043E\u0441\u0442\u0430\u0442\u043A\u0430 \u043F\u043E \u0432\u0441\u0435\u043C \u043F\u0430\u0440\u0442\u0438\u044F\u043C, \u0442\u043E \u0432\u0441\u044F \u0440\u0430\u0437\u043D\u0438\u0446\u0430 \u0431\u0443\u0434\u0435\u0442 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0430 \u043A \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0439 \u043F\u0430\u0440\u0442\u0438\u0438."]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return s}});var t=r(67294);let l={},o=t.createContext(l);function s(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);