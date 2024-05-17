"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[89348],{16408:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var o=t(74848),i=t(28453);const s={title:"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439 (TRY)"},c=void 0,r={id:"Exception_handling_TRY",title:"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439 (TRY)",description:"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u0438 \u0435\u0441\u043b\u0438 \u0432 \u044d\u0442\u043e\u043c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0432\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 (\u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435):",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-v5/Exception_handling_TRY.md",sourceDirName:".",slug:"/Exception_handling_TRY",permalink:"/ru/Exception_handling_TRY",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/ru/Exception_handling_TRY.md",tags:[],version:"v5",lastUpdatedAt:1685108136e3,frontMatter:{title:"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439 (TRY)"},sidebar:"learn",previous:{title:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043f\u043e\u0442\u043e\u043a\u043e\u0432 (NEWTHREAD, NEWEXECUTOR)",permalink:"/ru/New_threads_NEWTHREAD_NEWEXECUTOR"},next:{title:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f",permalink:"/ru/State_change"}},l={},d=[{value:"\u042f\u0437\u044b\u043a",id:"\u044f\u0437\u044b\u043a",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:3}];function a(n){const e={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 ",(0,o.jsx)(e.em,{children:"\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439"})," \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u0438 \u0435\u0441\u043b\u0438 \u0432 \u044d\u0442\u043e\u043c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0432\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 (\u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435):"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"\u0438\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u0443 \u043e\u0448\u0438\u0431\u043a\u0443,"}),"\n",(0,o.jsx)(e.li,{children:"\u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0434\u0440\u0443\u0433\u043e\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u043f\u043e\u0441\u043b\u0435 \u0447\u0435\u0433\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u0432\u043e\u0437\u043d\u0438\u043a\u0448\u0443\u044e \u043e\u0448\u0438\u0431\u043a\u0443 \u0432\u0435\u0440\u0445\u043d\u0435\u043c\u0443 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044e (\u043a\u0430\u043a \u0435\u0441\u043b\u0438 \u0431\u044b \u044d\u0442\u043e\u0433\u043e \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u043d\u0435 \u0431\u044b\u043b\u043e)"}),"\n",(0,o.jsx)(e.li,{children:"\u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0434\u0440\u0443\u0433\u043e\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0432 \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0442\u043e\u0433\u043e, \u0431\u044b\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u0438\u043b\u0438 \u043d\u0435\u0442, \u043f\u043e\u0441\u043b\u0435 \u0447\u0435\u0433\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u0432\u043e\u0437\u043d\u0438\u043a\u0448\u0443\u044e \u043e\u0448\u0438\u0431\u043a\u0443 \u0432\u0435\u0440\u0445\u043d\u0435\u043c\u0443 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044e (\u043a\u0430\u043a \u0435\u0441\u043b\u0438 \u0431\u044b \u044d\u0442\u043e\u0433\u043e \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u043d\u0435 \u0431\u044b\u043b\u043e)"}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"\u044f\u0437\u044b\u043a",children:"\u042f\u0437\u044b\u043a"}),"\n",(0,o.jsxs)(e.p,{children:["\u0414\u043b\u044f \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f, \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u044e\u0449\u0435\u0433\u043e \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f ",(0,o.jsxs)(e.a,{href:"/ru/TRY_operator",children:["\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 ",(0,o.jsx)(e.code,{children:"TRY"})]}),"."]}),"\n",(0,o.jsx)(e.h3,{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-lsf",children:"tryToImport(FILE f)  {\n    TRY {\n        LOCAL a = BPSTRING[10] (INTEGER);\n\n        IMPORT XLS FROM f TO a = A;\n    }\n}\n\nCLASS MyLock {\n    lock '\u0411\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0430'\n}\n\nsingleDo ()  {\n    NEWSESSION {\n        lock(MyLock.lock);\n        IF lockResult() THEN\n        TRY {\n            MESSAGE 'Lock Obtained';\n        } CATCH {\n            MESSAGE messageCaughtException();\n        } FINALLY unlock(MyLock.lock);\n    }\n}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(a,{...n})}):a(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>r});var o=t(96540);const i={},s=o.createContext(i);function c(n){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),o.createElement(s.Provider,{value:e},n.children)}}}]);