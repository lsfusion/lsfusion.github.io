"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[3204],{45635:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>d,toc:()=>l});var r=s(74848),a=s(28453);const c={title:"How-to: \u041f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u0438\u043c\u0435\u043d"},o=void 0,d={id:"How-to_Namespaces",title:"How-to: \u041f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u0438\u043c\u0435\u043d",description:"\u0418\u043d\u043e\u0433\u0434\u0430 \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u044e\u0442 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u043e\u0435 \u0438\u043c\u044f \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u044b\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u044b. \u0414\u043b\u044f \u044d\u0442\u043e\u0439 \u0446\u0435\u043b\u0438 \u0438\u0445 \u043c\u043e\u0436\u043d\u043e \u043e\u0442\u043d\u0435\u0441\u0442\u0438 \u043a \u0440\u0430\u0437\u043d\u044b\u043c \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430\u043c \u0438\u043c\u0435\u043d, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0437\u0430\u0434\u0430\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043c\u043e\u0434\u0443\u043b\u044f \u0447\u0435\u0440\u0435\u0437 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044e NAMESPACE. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e \u0438\u043c\u0435\u043d \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c \u043c\u043e\u0434\u0443\u043b\u044f.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-v4/How-to_Namespaces.md",sourceDirName:".",slug:"/How-to_Namespaces",permalink:"/ru/v4/How-to_Namespaces",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/ru/How-to_Namespaces.md",tags:[],version:"v4",lastUpdatedAt:1620889677e3,frontMatter:{title:"How-to: \u041f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u0438\u043c\u0435\u043d"},sidebar:"learn",previous:{title:"How-to: \u041f\u043e\u0438\u0441\u043a \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432",permalink:"/ru/v4/How-to_Searching_for_elements"},next:{title:"How-to: \u042f\u0432\u043d\u0430\u044f \u0442\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f",permalink:"/ru/v4/How-to_Explicit_typing"}},t={},l=[];function i(e){const n={a:"a",code:"code",img:"img",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u0418\u043d\u043e\u0433\u0434\u0430 \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u044e\u0442 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u043e\u0435 ",(0,r.jsx)(n.a,{href:"/ru/v4/Naming",children:"\u0438\u043c\u044f"})," \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u044b\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u044b. \u0414\u043b\u044f \u044d\u0442\u043e\u0439 \u0446\u0435\u043b\u0438 \u0438\u0445 \u043c\u043e\u0436\u043d\u043e \u043e\u0442\u043d\u0435\u0441\u0442\u0438 \u043a \u0440\u0430\u0437\u043d\u044b\u043c \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430\u043c \u0438\u043c\u0435\u043d, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0437\u0430\u0434\u0430\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043c\u043e\u0434\u0443\u043b\u044f \u0447\u0435\u0440\u0435\u0437 ",(0,r.jsxs)(n.a,{href:"/ru/v4/Module_header",children:["\u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044e ",(0,r.jsx)(n.code,{children:"NAMESPACE"})]}),". \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e \u0438\u043c\u0435\u043d \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c \u043c\u043e\u0434\u0443\u043b\u044f."]}),"\n",(0,r.jsxs)(n.p,{children:["\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u0434\u0432\u0430 \u043c\u043e\u0434\u0443\u043b\u044f ",(0,r.jsx)(n.code,{children:"UseCaseNamePurchase"})," \u0438 ",(0,r.jsx)(n.code,{children:"UseCaseNameSale"}),", \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0431\u044a\u044f\u0432\u043b\u044f\u044e\u0442 \u043b\u043e\u0433\u0438\u043a\u0443 \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u043d\u0430 \u0437\u0430\u043a\u0443\u043f\u043a\u0443 \u0438 \u043f\u0440\u043e\u0434\u0430\u0436\u0443:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"MODULE UseCaseNamePurchase;\n\nNAMESPACE Purchase;\n\nCLASS Order '\u0417\u0430\u043a\u0430\u0437';\ndate '\u0414\u0430\u0442\u0430' = DATA DATE (Order);\nnumber '\u041d\u043e\u043c\u0435\u0440' = DATA INTEGER (Order);\n\nFORM orders '\u0417\u0430\u043a\u0430\u0437\u044b \u043d\u0430 \u0437\u0430\u043a\u0443\u043f\u043a\u0443'\n    OBJECTS o = Order\n    PROPERTIES(o) date, number\n;\n\nNAVIGATOR {\n    NEW orders;\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"MODULE UseCaseNameSale;\n\nNAMESPACE Sale;\n\nCLASS Order '\u0417\u0430\u043a\u0430\u0437';\ndate '\u0414\u0430\u0442\u0430' = DATA DATE (Order);\nnumber '\u041d\u043e\u043c\u0435\u0440' = DATA INTEGER (Order);\n\nFORM orders '\u0417\u0430\u043a\u0430\u0437\u044b \u043d\u0430 \u043f\u0440\u043e\u0434\u0430\u0436\u0443'\n    OBJECTS o = Order\n    PROPERTIES(o) date, number\n;\n\nNAVIGATOR {\n    NEW orders;\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u0412 \u043e\u0431\u043e\u0438\u0445 \u0438\u0437 \u043d\u0438\u0445 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d \u043a\u043b\u0430\u0441\u0441 ",(0,r.jsx)(n.code,{children:"Order"}),", \u043d\u043e \u0442\u0430\u043a \u043a\u0430\u043a \u0443 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u0440\u0430\u0437\u043d\u044b\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u0438\u043c\u0435\u043d, \u0442\u043e \u0443 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0430 \u043e\u043d\u043e \u0431\u0443\u0434\u0435\u0442 ",(0,r.jsx)(n.code,{children:"Purchase"}),", \u0430 \u0443 \u0432\u0442\u043e\u0440\u043e\u0433\u043e ",(0,r.jsx)(n.code,{children:"Sale"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["\u041e\u0431\u044a\u044f\u0432\u0438\u043c \u0442\u0435\u0441\u0442\u043e\u0432\u044b\u0439 \u043c\u043e\u0434\u0443\u043b\u044c \u0441 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e\u043c \u0438\u043c\u0435\u043d ",(0,r.jsx)(n.code,{children:"Test"}),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u0438 \u043e\u0442 \u043f\u0435\u0440\u0432\u043e\u0433\u043e, \u0438 \u043e\u0442 \u0432\u0442\u043e\u0440\u043e\u0433\u043e \u043c\u043e\u0434\u0443\u043b\u044f:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"REQUIRE UseCaseNamePurchase, UseCaseNameSale;\n\nNAMESPACE Test;\n\nmessagePurchaseCount '\u0412\u044b\u0432\u0435\u0441\u0442\u0438 \u043a\u043e\u043b-\u0432\u043e \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u043d\u0430 \u0437\u0430\u043a\u0443\u043f\u043a\u0443' {\n    MESSAGE GROUP SUM 1 IF o IS Purchase.Order;\n}\nmessageSaleCount '\u0412\u044b\u0432\u0435\u0441\u0442\u0438 \u043a\u043e\u043b-\u0432\u043e \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u043d\u0430 \u043f\u0440\u043e\u0434\u0430\u0436\u0443' {\n    MESSAGE GROUP SUM 1 IF o IS Sale.Order;\n}\n\nNAVIGATOR {\n    NEW ACTION messagePurchaseCount;\n    NEW ACTION messageSaleCount;\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u041f\u0440\u0438 \u043f\u043e\u043f\u044b\u0442\u043a\u0435 \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u044c\u0441\u044f \u043a \u043a\u043b\u0430\u0441\u0441\u0443 ",(0,r.jsx)(n.code,{children:"Order"})," \u0431\u0435\u0437 \u044f\u0432\u043d\u043e\u0433\u043e \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u0438\u043c\u0435\u043d \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0434\u0430\u043d\u0430 \u043e\u0448\u0438\u0431\u043a\u0430:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(52992).A+"",width:"446",height:"102"})}),"\n",(0,r.jsx)(n.p,{children:"\u0412\u0441\u0435 \u0442\u0430\u043a\u0438\u0435 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u044f \u0442\u0440\u0435\u0431\u0443\u044e\u0442 \u044f\u0432\u043d\u043e\u0433\u043e \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u0438\u043c\u0435\u043d."}),"\n",(0,r.jsxs)(n.p,{children:["\u0412 \u0441\u043b\u0443\u0447\u0430\u0435, \u0435\u0441\u043b\u0438 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e \u0438\u043c\u0435\u043d \u043c\u043e\u0434\u0443\u043b\u044f \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442 \u0441 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e\u043c \u0438\u0441\u043a\u043e\u043c\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u044b (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,r.jsx)(n.code,{children:"Purchase"}),")"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"NAMESPACE Purchase;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u0438\u043b\u0438 \u0443\u043a\u0430\u0437\u0430\u043d \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432 \u0438\u043c\u0435\u043d \u0447\u0435\u0440\u0435\u0437 ",(0,r.jsxs)(n.a,{href:"/ru/v4/Module_header",children:["\u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044e ",(0,r.jsx)(n.code,{children:"PRIORITY"})]})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"PRIORITY Purchase;\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u0442\u043e \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e \u0438\u043c\u0435\u043d \u043d\u0435 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"messagePurchaseCount '\u0412\u044b\u0432\u0435\u0441\u0442\u0438 \u043a\u043e\u043b-\u0432\u043e \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u043d\u0430 \u0437\u0430\u043a\u0443\u043f\u043a\u0443' {\n    MESSAGE GROUP SUM 1 IF o IS Order;\n}\nmessageSaleCount '\u0412\u044b\u0432\u0435\u0441\u0442\u0438 \u043a\u043e\u043b-\u0432\u043e \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u043d\u0430 \u043f\u0440\u043e\u0434\u0430\u0436\u0443' {\n    MESSAGE GROUP SUM 1 IF o IS Sale.Order;\n}\n\nNAVIGATOR {\n    NEW ACTION messagePurchaseCount;\n    NEW ACTION messageSaleCount;\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u0411\u0435\u0437 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u0438\u043c\u0435\u043d \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043a\u043b\u0430\u0441\u0441 \u0438\u0437 ",(0,r.jsx)(n.code,{children:"Purchase"}),". \u041f\u0440\u0438 \u044d\u0442\u043e\u043c \u043e\u0441\u0442\u0430\u0435\u0442\u0441\u044f \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0432 \u044f\u0432\u043d\u0443\u044e \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e \u0438\u043c\u0435\u043d (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,r.jsx)(n.code,{children:"Sale"}),")."]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},52992:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/How-to_Namespaces-d3869b9262099eff7d50035cbade492e.png"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>d});var r=s(96540);const a={},c=r.createContext(a);function o(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);