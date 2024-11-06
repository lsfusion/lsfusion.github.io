"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[94527],{33914:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var n=t(74848),o=t(28453);const r={title:"How-to: \u042f\u0432\u043d\u0430\u044f \u0442\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f"},i=void 0,d={id:"How-to_Explicit_typing",title:"How-to: \u042f\u0432\u043d\u0430\u044f \u0442\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f",description:"\u0418\u043d\u043e\u0433\u0434\u0430 \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u044e\u0442 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u043e\u0435 \u0438\u043c\u044f \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u044b\u0445 \u0441\u0432\u043e\u0439\u0441\u0442\u0432 \u0438\u043b\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-v4/How-to_Explicit_typing.md",sourceDirName:".",slug:"/How-to_Explicit_typing",permalink:"/ru/v4/How-to_Explicit_typing",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/ru/How-to_Explicit_typing.md",tags:[],version:"v4",lastUpdatedAt:1620889677e3,frontMatter:{title:"How-to: \u042f\u0432\u043d\u0430\u044f \u0442\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f"},sidebar:"learn",previous:{title:"How-to: \u041f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u0438\u043c\u0435\u043d",permalink:"/ru/v4/How-to_Namespaces"},next:{title:"How-to: \u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f",permalink:"/ru/v4/How-to_Extensions"}},u={},l=[];function J(e){const s={a:"a",code:"code",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["\u0418\u043d\u043e\u0433\u0434\u0430 \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u044e\u0442 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u043e\u0435 ",(0,n.jsx)(s.a,{href:"/ru/v4/Naming",children:"\u0438\u043c\u044f"})," \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u044b\u0445 \u0441\u0432\u043e\u0439\u0441\u0442\u0432 \u0438\u043b\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b."]}),"\n",(0,n.jsxs)(s.p,{children:["\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0441\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u0434\u0432\u0430 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c ",(0,n.jsx)(s.code,{children:"sum"}),", \u043e\u0434\u043d\u043e \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u0441\u0443\u043c\u043c\u0443 \u0441\u0442\u0440\u043e\u043a\u0438 \u0437\u0430\u043a\u0430\u0437\u0430, \u0430 \u0432\u0442\u043e\u0440\u043e\u0435 - \u0441\u0443\u043c\u043c\u0443 \u0432\u0441\u0435\u0433\u043e \u0437\u0430\u043a\u0430\u0437\u0430:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-lsf",children:"sum = DATA NUMERIC[10,2] (OrderDetail);\nsum = GROUP SUM sum(OrderDetail od) BY order(od);\n"})}),"\n",(0,n.jsxs)(s.p,{children:["\u0421\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e, \u043f\u0435\u0440\u0432\u043e\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u043d\u0430 \u0432\u0445\u043e\u0434 \u043e\u0434\u0438\u043d \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u043a\u043b\u0430\u0441\u0441\u0430 ",(0,n.jsx)(s.code,{children:"OrderDetail"}),", \u0430 \u0432\u0442\u043e\u0440\u043e\u0435 - \u043e\u0434\u0438\u043d \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u043a\u043b\u0430\u0441\u0441\u0430 ",(0,n.jsx)(s.code,{children:"Order"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["\u0422\u0435\u043f\u0435\u0440\u044c \u0435\u0441\u043b\u0438 \u0441\u043e\u0437\u0434\u0430\u0442\u044c, \u043a \u043f\u0440\u0438\u043c\u0435\u0440\u0443, \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435 \u0441 \u043e\u0434\u043d\u0438\u043c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u043c, \u0438 \u043f\u043e\u043f\u044b\u0442\u0430\u0442\u044c\u0441\u044f \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u044c\u0441\u044f \u043a \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0443 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c ",(0,n.jsx)(s.code,{children:"sum"})," \u0431\u0435\u0437 \u044f\u0432\u043d\u043e\u0433\u043e \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u043a\u043b\u0430\u0441\u0441\u0430 \u044d\u0442\u043e\u0433\u043e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 \u0432\u044b\u0434\u0430\u0441\u0442 \u043e\u0448\u0438\u0431\u043a\u0443:"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(83660).A+"",width:"646",height:"85"})}),"\n",(0,n.jsx)(s.p,{children:"\u0412\u0441\u0435 \u0442\u0430\u043a\u0438\u0435 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u044f \u0442\u0440\u0435\u0431\u0443\u044e\u0442 \u044f\u0432\u043d\u043e\u0433\u043e \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u043a\u043b\u0430\u0441\u0441\u0430 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-lsf",children:"CONSTRAINT sum(Order o) < 0 MESSAGE '\u0421\u0443\u043c\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439';\n"})})]})}function c(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(J,{...e})}):J(e)}},83660:(e,s,t)=>{t.d(s,{A:()=>n});const n="data:image/png;base64,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"},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>d});var n=t(96540);const o={},r=n.createContext(o);function i(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);