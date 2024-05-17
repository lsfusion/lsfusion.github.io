"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[465],{73403:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=o(74848),t=o(28453);const l={title:"How-to: DELETE"},d=void 0,s={id:"How-to_DELETE",title:"How-to: DELETE",description:"\u041f\u0440\u0438\u043c\u0435\u0440 1",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-v5/How-to_DELETE.md",sourceDirName:".",slug:"/How-to_DELETE",permalink:"/ru/How-to_DELETE",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/ru/How-to_DELETE.md",tags:[],version:"v5",lastUpdatedAt:1685108136e3,frontMatter:{title:"How-to: DELETE"},sidebar:"learn",previous:{title:"How-to: NEW",permalink:"/ru/How-to_NEW"},next:{title:"How-to: FOR",permalink:"/ru/How-to_FOR"}},i={},c=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440 1",id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 2",id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1",level:3}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",children:"\u041f\u0440\u0438\u043c\u0435\u0440 1"}),"\n",(0,r.jsx)(n.h3,{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435",children:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"}),"\n",(0,r.jsx)(n.p,{children:"\u0415\u0441\u0442\u044c \u0437\u0430\u043a\u0430\u0437, \u0441 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0439 \u0434\u0430\u0442\u043e\u0439 \u0438 \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u0435\u043c \u0438 \u0441\u0442\u0440\u043e\u043a\u0430\u043c\u0438 \u0437\u0430\u043a\u0430\u0437\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0441\u0441\u044b\u043b\u0430\u044e\u0442\u0441\u044f \u043d\u0430 \u043a\u043d\u0438\u0433\u0438."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"CLASS Order '\u0417\u0430\u043a\u0430\u0437';\n\nCLASS Book '\u041a\u043d\u0438\u0433\u0430';\nname '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435' = DATA ISTRING[50] (Book);\n\nCLASS OrderDetail '\u0421\u0442\u0440\u043e\u043a\u0430 \u0437\u0430\u043a\u0430\u0437\u0430';\norder '\u0417\u0430\u043a\u0430\u0437' = DATA Order (OrderDetail) NONULL DELETE;\nbook '\u041a\u043d\u0438\u0433\u0430' = DATA Book (OrderDetail);\nnameBook '\u041a\u043d\u0438\u0433\u0430' (OrderDetail d) = name(book(d));\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u041d\u0443\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0443\u0434\u0430\u043b\u0438\u0442 \u043a\u043d\u0438\u0433\u0443, \u0435\u0441\u043b\u0438 \u043f\u043e \u043d\u0435\u0439 \u043d\u0435\u0442\u0443 \u0437\u0430\u043a\u0430\u0437\u043e\u0432."}),"\n",(0,r.jsx)(n.h3,{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"delete (Book b)  {\n    IF NOT [ GROUP SUM 1 BY book(OrderDetail d)](b) THEN\n        DELETE b;\n    ELSE\n        MESSAGE '\u0417\u0430\u043f\u0440\u0435\u0449\u0435\u043d\u043e \u0443\u0434\u0430\u043b\u044f\u0442\u044c \u043a\u043d\u0438\u0433\u0443, \u0442\u0430\u043a \u043a\u0430\u043a \u043f\u043e \u043d\u0435\u0439 \u0435\u0441\u0442\u044c \u0437\u0430\u043a\u0430\u0437';\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",children:"\u041f\u0440\u0438\u043c\u0435\u0440 2"}),"\n",(0,r.jsx)(n.h3,{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1",children:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"}),"\n",(0,r.jsxs)(n.p,{children:["\u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e ",(0,r.jsx)(n.a,{href:"#%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80-1",children:(0,r.jsx)(n.strong,{children:"\u041f\u0440\u0438\u043c\u0435\u0440\u0443 1"})}),"."]}),"\n",(0,r.jsx)(n.p,{children:"\u041d\u0443\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043e\u0447\u0438\u0441\u0442\u0438\u0442 \u0437\u0430\u043a\u0430\u0437, \u0443\u0434\u0430\u043b\u0438\u0432 \u0432\u0441\u0435 \u0435\u0433\u043e \u0441\u0442\u0440\u043e\u043a\u0438."}),"\n",(0,r.jsx)(n.h3,{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1",children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"clear (Order o)  {\n\n    // \u0412\u0430\u0440\u0438\u0430\u043d\u0442 1\n    DELETE OrderDetail d WHERE order(d) == o;\n\n    // \u0412\u0430\u0440\u0438\u0430\u043d\u0442 2\n    FOR order(OrderDetail d) == o DO\n        DELETE d;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u041e\u0431\u0430 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430 \u0440\u0430\u0432\u043d\u043e\u0441\u0438\u043b\u044c\u043d\u044b \u0441 \u0442\u043e\u0447\u043a\u0438 \u0437\u0440\u0435\u043d\u0438\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f."})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>d,x:()=>s});var r=o(96540);const t={},l=r.createContext(t);function d(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);