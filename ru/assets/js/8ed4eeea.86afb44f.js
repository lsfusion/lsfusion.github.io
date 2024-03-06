"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[93042],{22359:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var t=d(74848),r=d(28453);const o={title:"How-to: WHILE"},l=void 0,s={id:"How-to_WHILE",title:"How-to: WHILE",description:"\u041f\u0440\u0438\u043c\u0435\u0440 1",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-v5/How-to_WHILE.md",sourceDirName:".",slug:"/How-to_WHILE",permalink:"/ru/How-to_WHILE",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/ru/How-to_WHILE.md",tags:[],version:"v5",lastUpdatedAt:1685108136,formattedLastUpdatedAt:"26 \u043c\u0430\u044f 2023 \u0433.",frontMatter:{title:"How-to: WHILE"},sidebar:"learn",previous:{title:"How-to: IF/CASE",permalink:"/ru/How-to_IF_CASE"},next:{title:"How-to: NEWSESSION",permalink:"/ru/How-to_NEWSESSION"}},a={},i=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440 1",id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 2",id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 3",id:"\u043f\u0440\u0438\u043c\u0435\u0440-3",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-2",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-2",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",children:"\u041f\u0440\u0438\u043c\u0435\u0440 1"}),"\n",(0,t.jsx)(n.h3,{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435",children:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"}),"\n",(0,t.jsx)(n.p,{children:"\u0415\u0441\u0442\u044c \u0437\u0430\u043a\u0430\u0437, \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0437\u0430\u0434\u0430\u043d\u0430 \u0434\u0430\u0442\u0430."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"CLASS Order '\u0417\u0430\u043a\u0430\u0437';\n\ndate '\u0414\u0430\u0442\u0430' = DATA DATE (Order);\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u041d\u0443\u0436\u043d\u043e \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u0434\u0430\u0442\u044b \u0438\u0437 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0430 \u0432\u044b\u0434\u0430\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u0441 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e\u043c \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u0437\u0430 \u044d\u0442\u0443 \u0434\u0430\u0442\u0443."}),"\n",(0,t.jsx)(n.h3,{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"countOrders (DATE date) = GROUP SUM 1 BY date(Order o);\n\nmessageCountOrders '\u041f\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u043a\u043e\u043b-\u0432\u043e \u0437\u0430\u043a\u0430\u0437\u043e\u0432' (DATE dFrom, DATE dTo)  {\n    // \u0412\u0430\u0440\u0438\u0430\u043d\u0442 1\n    LOCAL date = DATE ();\n    date() <- dFrom;\n\n    WHILE date() <= dTo DO {\n        MESSAGE '\u041a\u043e\u043b-\u0432\u043e \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u0437\u0430 ' + date() + ' : ' + OVERRIDE countOrders(date()), 0.0;\n        date() <- sum(date(), 1);\n    }\n\n    // \u0412\u0430\u0440\u0438\u0430\u043d\u0442 2\n    FOR iterate(DATE date, dFrom, dTo) DO\n        MESSAGE '\u041a\u043e\u043b-\u0432\u043e \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u0437\u0430 ' + date + ' : ' + OVERRIDE countOrders(date()), 0.0;\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u041e\u0431\u0430 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430 \u0438\u0434\u0435\u043d\u0442\u0438\u0447\u043d\u044b \u0441 \u0442\u043e\u0447\u043a\u0438 \u0437\u0440\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u043e\u0433\u043e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430."}),"\n",(0,t.jsxs)(n.p,{children:["\u0414\u043b\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043a \u0434\u0430\u0442\u0435 \u043e\u0434\u043d\u043e\u0433\u043e \u0434\u043d\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e ",(0,t.jsx)(n.code,{children:"sum"}),", \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0435 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u043e\u043c ",(0,t.jsx)(n.a,{href:"/ru/Modules",children:"\u043c\u043e\u0434\u0443\u043b\u0435"})," ",(0,t.jsx)(n.code,{children:"Time"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",children:"\u041f\u0440\u0438\u043c\u0435\u0440 2"}),"\n",(0,t.jsx)(n.h3,{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1",children:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"}),"\n",(0,t.jsxs)(n.p,{children:["\u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e ",(0,t.jsx)(n.a,{href:"#%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80-1",children:(0,t.jsx)(n.strong,{children:"\u041f\u0440\u0438\u043c\u0435\u0440\u0443 1"})}),". \u0422\u0430\u043a\u0436\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u044b \u0441\u0442\u0440\u043e\u043a\u0438 \u0437\u0430\u043a\u0430\u0437\u043e\u0432, \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u044b \u0441\u0443\u043c\u043c\u0430 (\u043f\u043e\u043b\u043d\u0430\u044f) \u0438 \u0441\u0443\u043c\u043c\u0430 \u0441\u043a\u0438\u0434\u043a\u0438."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"CLASS OrderDetail '\u0421\u0442\u0440\u043e\u043a\u0430 \u0437\u0430\u043a\u0430\u0437\u0430';\norder '\u0417\u0430\u043a\u0430\u0437' = DATA Order (OrderDetail) NONULL DELETE;\n\nsum '\u0421\u0443\u043c\u043c\u0430' = DATA NUMERIC[14,2] (OrderDetail);\ndiscountSum '\u0421\u0443\u043c\u043c\u0430 \u0441\u043a\u0438\u0434\u043a\u0438' = DATA NUMERIC[14,2] (OrderDetail);\n"})}),"\n",(0,t.jsx)(n.p,{children:'\u041d\u0443\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 "\u0440\u0430\u0441\u043f\u0438\u0448\u0435\u0442" \u0437\u0430\u0434\u0430\u043d\u043d\u0443\u044e \u0441\u0443\u043c\u043c\u0443 \u0441\u043a\u0438\u0434\u043a\u0438 \u043f\u043e \u0441\u0442\u0440\u043e\u043a\u0430\u043c, \u043d\u0430\u0447\u0438\u043d\u0430\u044f \u0441\u043e \u0441\u0442\u0440\u043e\u043a\u0438 \u0441 \u043d\u0430\u0438\u0431\u043e\u043b\u044c\u0448\u0435\u0439 \u0441\u0443\u043c\u043c\u043e\u0439.'}),"\n",(0,t.jsx)(n.h3,{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1",children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"distributeDiscount '\u0420\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u0441\u043a\u0438\u0434\u043a\u0443' (Order o, NUMERIC[14,2] discount)  {\n    LOCAL discount = NUMERIC[14,2] ();\n    discount() <- discount;\n\n    LOCAL leftSum = NUMERIC[14,2] (OrderDetail);\n    leftSum(OrderDetail d) <- sum(d) WHERE order(d) == o;\n\n    WHILE discount() > 0 DO {\n        // \u043d\u0430\u0445\u043e\u0434\u0438\u043c \u0441\u0442\u0440\u043e\u043a\u0443 \u0441 \u043d\u0430\u0438\u0431\u043e\u043b\u044c\u0448\u0435\u0439 \"\u043e\u0441\u0442\u0430\u0432\u0448\u0435\u0439\u0441\u044f\" \u0441\u0443\u043c\u043c\u043e\u0439\n        FOR OrderDetail d == [ GROUP LAST OrderDetail od ORDER leftSum(od), od BY order(od)](o) DO { \n            discountSum(d) <- MIN leftSum(d), discount();\n            discount() <- discount() (-) discountSum(d);\n        }\n        IF (GROUP SUM 1 IF leftSum(OrderDetail d) > 0) THEN\n            BREAK; // \u043d\u0435 \u043e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u0447\u0435\u0433\u043e \u0440\u0430\u0441\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c\n    }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-3",children:"\u041f\u0440\u0438\u043c\u0435\u0440 3"}),"\n",(0,t.jsx)(n.h3,{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-2",children:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"}),"\n",(0,t.jsx)(n.p,{children:"\u0417\u0430\u0434\u0430\u043d\u0430 \u043b\u043e\u0433\u0438\u043a\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043e\u0441\u0442\u0430\u0442\u043a\u0430 \u0434\u043b\u044f \u043a\u043d\u0438\u0433\u0438 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"CLASS Book '\u041a\u043d\u0438\u0433\u0430';\n\nCLASS Ledger '\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043e\u0441\u0442\u0430\u0442\u043a\u0430';\ndate '\u0414\u0430\u0442\u0430' = DATA DATE (Ledger);\nbook '\u041a\u043d\u0438\u0433\u0430' = DATA Book (Ledger);\nquantity '\u041a\u043e\u043b-\u0432\u043e' = DATA NUMERIC[14,2] (Ledger);\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u041d\u0443\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043f\u043e\u0441\u0447\u0438\u0442\u0430\u0435\u0442 \u043d\u0430\u043a\u043e\u043f\u043b\u0435\u043d\u043d\u044b\u0439 \u043e\u0441\u0442\u0430\u0442\u043e\u043a (\u0438\u043d\u0442\u0435\u0433\u0440\u0430\u043b) \u0437\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u0432\u0440\u0435\u043c\u0435\u043d\u0438."}),"\n",(0,t.jsx)(n.h3,{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-2",children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"calculateIntegral (DATE dFrom, DATE dTo)  {\n    LOCAL date = DATE();\n    date() <- dFrom;\n\n    LOCAL balance = NUMERIC[14,2] (Book);\n    balance(Book b) <- [ GROUP SUM quantity(Ledger l) IF date(l) < dFrom BY book(l)](b);\n\n    LOCAL cumBalance = NUMERIC[14,2] (Book);\n\n    WHILE date() <= dTo DO {\n        cumBalance(Book b) <- cumBalance(b) (+) balance(b); //\n        balance(Book b) <- balance(b) (+) [ GROUP SUM quantity(Ledger l) BY book(l), date(l)](b, date());\n        date() <- sum(date(), 1);\n    }\n\n    FOR cumBalance(Book b) DO {\n        MESSAGE '\u041d\u0430\u043a\u043e\u043f\u043b\u0435\u043d\u043d\u044b\u0439 \u043e\u0441\u0442\u0430\u0442\u043e\u043a \u043f\u043e \u043a\u043d\u0438\u0433\u0435 ' + b + ' : ' + cumBalance(b);\n    }\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,d)=>{d.d(n,{R:()=>l,x:()=>s});var t=d(96540);const r={},o=t.createContext(r);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);