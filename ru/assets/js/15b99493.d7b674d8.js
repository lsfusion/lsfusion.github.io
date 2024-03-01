"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[6973],{25942:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var n=t(74848),o=t(28453);const s={title:"\u0412\u044b\u0437\u043e\u0432 (EXEC)"},i=void 0,d={id:"Call_EXEC",title:"\u0412\u044b\u0437\u043e\u0432 (EXEC)",description:"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 EXEC \u0441\u043e\u0437\u0434\u0430\u0435\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u0434\u0440\u0443\u0433\u043e\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u044f \u0435\u043c\u0443 \u043d\u0430 \u0432\u0445\u043e\u0434 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 (\u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b).",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-v4/Call_EXEC.md",sourceDirName:".",slug:"/Call_EXEC",permalink:"/ru/v4/Call_EXEC",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/ru/Call_EXEC.md",tags:[],version:"v4",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"7 \u0438\u044e\u043b. 2021 \u0433.",frontMatter:{title:"\u0412\u044b\u0437\u043e\u0432 (EXEC)"},sidebar:"learn",previous:{title:"\u041f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c ({...})",permalink:"/ru/v4/Sequence"},next:{title:"\u0426\u0438\u043a\u043b (FOR)",permalink:"/ru/v4/Loop_FOR"}},l={},a=[{value:"\u042f\u0437\u044b\u043a",id:"\u044f\u0437\u044b\u043a",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:3}];function c(e){const r={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 ",(0,n.jsx)(r.code,{children:"EXEC"})," \u0441\u043e\u0437\u0434\u0430\u0435\u0442 ",(0,n.jsx)(r.a,{href:"/ru/v4/Actions",children:"\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435"}),", \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u0434\u0440\u0443\u0433\u043e\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u044f \u0435\u043c\u0443 \u043d\u0430 \u0432\u0445\u043e\u0434 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 (",(0,n.jsx)(r.em,{children:"\u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b"}),")."]}),"\n",(0,n.jsx)(r.h3,{id:"\u044f\u0437\u044b\u043a",children:"\u042f\u0437\u044b\u043a"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsxs)(r.a,{href:"/ru/v4/EXEC_operator",children:["C\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 ",(0,n.jsx)(r.code,{children:"EXEC"})]}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-lsf",children:"// \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 importData \u0441 \u0434\u0432\u0443\u043c\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438\r\nimportData(Sku sku, Order order)  {\r\n    MESSAGE 'Run import for ' + id(sku) + ' ' + customer(order);\r\n}\r\n\r\norder = DATA Order (OrderDetail) NONULL DELETE;\r\n// \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f runImport, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0437\u044b\u0432\u0430\u0442\u044c importData\r\nrunImport(OrderDetail d) { importData(sku(d), order(d)); } \n"})})]})}function u(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>d});var n=t(96540);const o={},s=n.createContext(o);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);