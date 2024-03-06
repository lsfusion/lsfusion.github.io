"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[13727],{64267:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=t(74848),s=t(28453);const r={title:"How-to: \u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446"},i=void 0,l={id:"How-to_Table_status",title:"How-to: \u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446",description:"\u041f\u0440\u0438\u043c\u0435\u0440 1",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-v5/How-to_Table_status.md",sourceDirName:".",slug:"/How-to_Table_status",permalink:"/ru/How-to_Table_status",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/ru/How-to_Table_status.md",tags:[],version:"v5",lastUpdatedAt:1685108136,formattedLastUpdatedAt:"26 \u043c\u0430\u044f 2023 \u0433.",frontMatter:{title:"How-to: \u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446"},sidebar:"learn",previous:{title:"How-to: \u041c\u0430\u0442\u0440\u0438\u0446\u0430",permalink:"/ru/How-to_Matrix"},next:{title:"How-to: \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b (\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430)",permalink:"/ru/How-to_Custom_components_properties"}},d={},c=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440 1",id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 2",id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1",level:3}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",children:"\u041f\u0440\u0438\u043c\u0435\u0440 1"}),"\n",(0,o.jsx)(n.h3,{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435",children:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"}),"\n",(0,o.jsx)(n.p,{children:"\u0417\u0430\u0434\u0430\u043d\u044b \u043f\u043e\u043d\u044f\u0442\u0438\u044f \u043a\u043d\u0438\u0433, \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u044b \u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435, \u0436\u0430\u043d\u0440 \u0438 \u0446\u0435\u043d\u0430."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"CLASS Book '\u041a\u043d\u0438\u0433\u0430';\nname '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435' = DATA ISTRING[50] (Book) IN id;\ngenre '\u0416\u0430\u043d\u0440' = DATA ISTRING[30] (Book) IN id;\n\nprice '\u0426\u0435\u043d\u0430' = DATA NUMERIC[12,2] (Book) IN id;\n\nFORM books '\u041a\u043d\u0438\u0433\u0438'\n    OBJECTS b = Book\n    PROPERTIES(b) READONLY name, genre, price\n    PROPERTIES(b) NEWSESSION NEW, EDIT, DELETE\n;\n\nNAVIGATOR {\n    NEW books;\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u041d\u0443\u0436\u043d\u043e \u0432\u044b\u0432\u0435\u0441\u0442\u0438 \u043d\u0430 \u0444\u043e\u0440\u043c\u0443 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043d\u0438\u0433 \u0441 \u0443\u0447\u0435\u0442\u043e\u043c \u043e\u0442\u0431\u043e\u0440\u043e\u0432, \u0441\u0434\u0435\u043b\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c."}),"\n",(0,o.jsx)(n.h3,{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"filtered '\u041a\u043d\u0438\u0433\u0430 \u043e\u0442\u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432\u0430\u043d\u0430' (Book b) = FILTER books.b;\nfilteredCount '\u041a\u043e\u043b-\u0432\u043e \u043a\u043d\u0438\u0433' = GROUP SUM 1 IF filtered(Book b);\n\nEXTEND FORM books\n    PROPERTIES() READONLY filteredCount DRAW b TOOLBAR\n;\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u0414\u043b\u044f \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f ",(0,o.jsxs)(n.a,{href:"/ru/Filter_FILTER",children:["\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 ",(0,o.jsx)(n.code,{children:"FILTER"})]}),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 ",(0,o.jsx)(n.code,{children:"TRUE"}),", \u0435\u0441\u043b\u0438 \u043e\u0431\u044a\u0435\u043a\u0442 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u043e\u0442\u0431\u043e\u0440\u0435 \u043d\u0430 \u0444\u043e\u0440\u043c\u0435."]}),"\n",(0,o.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",children:"\u041f\u0440\u0438\u043c\u0435\u0440 2"}),"\n",(0,o.jsx)(n.h3,{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1",children:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"}),"\n",(0,o.jsxs)(n.p,{children:["\u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e ",(0,o.jsx)(n.a,{href:"#%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80-1",children:(0,o.jsx)(n.strong,{children:"\u041f\u0440\u0438\u043c\u0435\u0440\u0443 1"})}),"."]}),"\n",(0,o.jsx)(n.p,{children:"\u041d\u0443\u0436\u043d\u043e \u0432\u044b\u0432\u0435\u0441\u0442\u0438 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0441 \u043a\u043d\u0438\u0433\u0430\u043c\u0438 \u043f\u043e\u0440\u044f\u0434\u043a\u043e\u0432\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u043a\u043d\u0438\u0433\u0438 \u0432 \u0442\u0435\u043a\u0443\u0449\u0435\u043c \u043e\u0442\u0431\u043e\u0440\u0435 \u0438 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0435, \u0441\u0434\u0435\u043b\u0430\u043d\u043d\u044b\u043c\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c."}),"\n",(0,o.jsx)(n.h3,{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1",children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"index '\u041f\u043e\u0440\u044f\u0434\u043e\u043a' (Book b) = PARTITION SUM 1 IF filtered(b) ORDER [ ORDER books.b](b);\n\nEXTEND FORM books\n    PROPERTIES(b) index\n;\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u0441 \u0442\u0435\u043a\u0443\u0449\u0438\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u043e\u043c, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u043c\u043e\u0435 \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 ",(0,o.jsxs)(n.a,{href:"/ru/Order_ORDER",children:["\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 ",(0,o.jsx)(n.code,{children:"ORDER"})]}),", \u043d\u0435 \u0432\u044b\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0435 \u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e, \u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043d\u0435\u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0432 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0438."]}),"\n",(0,o.jsx)(n.p,{children:"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u0430\u044f \u0432 \u043e\u0431\u043e\u0438\u0445 \u043f\u0440\u0438\u043c\u0435\u0440\u0430\u0445 \u0444\u043e\u0440\u043c\u0430 \u0441 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c \u043e\u0442\u0431\u043e\u0440\u043e\u043c \u0438 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u043e\u0439 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c :"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(20418).A+"",width:"701",height:"270"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},20418:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/How-to_Table_status-20ca778d576353ee95d7171002b5fda7.png"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var o=t(96540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);