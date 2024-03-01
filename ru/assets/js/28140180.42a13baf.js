"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[79727],{84193:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var s=n(74848),i=n(28453);const t={title:"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 EVAL"},o=void 0,d={id:"EVAL_operator",title:"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 EVAL",description:"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 EVAL - \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f, \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u0434 \u043d\u0430 \u044f\u0437\u044b\u043a\u0435 lsFusion.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-v4/EVAL_operator.md",sourceDirName:".",slug:"/EVAL_operator",permalink:"/ru/v4/EVAL_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/ru/EVAL_operator.md",tags:[],version:"v4",lastUpdatedAt:1708525070,formattedLastUpdatedAt:"21 \u0444\u0435\u0432\u0440. 2024 \u0433.",frontMatter:{title:"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 EVAL"},sidebar:"learn",previous:{title:"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 EMAIL",permalink:"/ru/v4/EMAIL_operator"},next:{title:"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 EXEC",permalink:"/ru/v4/EXEC_operator"}},l={},c=[{value:"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441",id:"\u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441",level:3},{value:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",id:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",level:3},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:3}];function a(e){const r={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 ",(0,s.jsx)(r.code,{children:"EVAL"})," - \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 ",(0,s.jsx)(r.a,{href:"/ru/v4/Actions",children:"\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f"}),", ",(0,s.jsx)(r.a,{href:"/ru/v4/Eval_EVAL",children:"\u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u0434"})," \u043d\u0430 \u044f\u0437\u044b\u043a\u0435 ",(0,s.jsx)(r.strong,{children:"lsFusion"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"\u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441",children:"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"EVAL [ACTION] expression [PARAMS paramExpr1, ..., paramExprN]\n"})}),"\n",(0,s.jsx)(r.h3,{id:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),"\n",(0,s.jsxs)(r.p,{children:["\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 ",(0,s.jsx)(r.code,{children:"EVAL"})," \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0434\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u0434\u0430 \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430 \u0441\u0442\u0440\u043e\u043a\u0443, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442\u0441\u044f \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434. \u042d\u0442\u0430 \u0441\u0442\u0440\u043e\u043a\u0430 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0430 \u043a\u0430\u043a \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u043e\u0432\u043e\u0439 ",(0,s.jsx)(r.a,{href:"/ru/v4/Constant",children:"\u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u043e\u0439"}),", \u0442\u0430\u043a \u0438 \u0431\u043e\u043b\u0435\u0435 \u0441\u043b\u043e\u0436\u043d\u044b\u043c ",(0,s.jsx)(r.a,{href:"/ru/v4/Expression",children:"\u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c"}),", \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u0442\u0440\u043e\u043a\u0430."]}),"\n",(0,s.jsxs)(r.p,{children:["\u041f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0439 \u043a\u043e\u0434 \u0434\u043e\u043b\u0436\u0435\u043d \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u0438\u0437 \u0441\u0435\u0431\u044f \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c ",(0,s.jsx)(r.a,{href:"/ru/v4/Statements",children:"\u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0439"})," (\u0438\u043b\u0438 ",(0,s.jsx)(r.a,{href:"/ru/v4/Action_operators_paradigm",children:"\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u043e\u0432-\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439"})," \u0438 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0439 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u0432\u043e\u0439\u0441\u0442\u0432, \u0435\u0441\u043b\u0438 \u0437\u0430\u0434\u0430\u043d\u0430 \u043e\u043f\u0446\u0438\u044f ",(0,s.jsx)(r.code,{children:"ACTION"}),"). \u042d\u0442\u043e\u0442 \u043a\u043e\u0434 \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432 ",(0,s.jsx)(r.a,{href:"/ru/v4/Modules",children:"\u043c\u043e\u0434\u0443\u043b\u044c"})," \u0441 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u043c \u0438\u043c\u0435\u043d\u0435\u043c. \u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u044d\u0442\u043e\u0433\u043e \u043c\u043e\u0434\u0443\u043b\u044f \u0444\u043e\u0440\u043c\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439, \u043e\u043d \u043e\u0431\u044a\u044f\u0432\u043b\u044f\u0435\u0442 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0435 \u0438\u043c\u044f \u043c\u043e\u0434\u0443\u043b\u044f \u0438 \u0432 ",(0,s.jsxs)(r.a,{href:"/ru/v4/Module_header",children:["\u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 ",(0,s.jsx)(r.code,{children:"REQUIRE"})]})," \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u0432\u0441\u0435 \u043c\u043e\u0434\u0443\u043b\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0435\u0441\u0442\u044c \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0435. \u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0438\u0437 \u043a\u043e\u0434\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u0435\u0440\u0435\u0434\u0430\u0435\u0442\u0441\u044f \u0432 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 ",(0,s.jsx)(r.code,{children:"EVAL"}),", \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432\u0441\u0435 ",(0,s.jsx)(r.a,{href:"/ru/v4/Element_identification",children:"\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0441\u0438\u0441\u0442\u0435\u043c\u044b"})," \u0438\u0437 \u0434\u0440\u0443\u0433\u0438\u0445 \u043c\u043e\u0434\u0443\u043b\u0435\u0439. \u0415\u0441\u043b\u0438 \u043e\u043f\u0446\u0438\u044f ",(0,s.jsx)(r.code,{children:"ACTION"})," \u043d\u0435 \u0437\u0430\u0434\u0430\u043d\u0430, \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u0430\u0433\u0430\u0435\u0442\u0441\u044f, \u0447\u0442\u043e \u043e\u0434\u043d\u043e\u0439 \u0438\u0437 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0439 \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0441 \u0438\u043c\u0435\u043d\u0435\u043c ",(0,s.jsx)(r.code,{children:"run"})," (\u0438\u043c\u0435\u043d\u043d\u043e \u044d\u0442\u043e \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0438 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c\u0441\u044f)."]}),"\n",(0,s.jsx)(r.h3,{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",children:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"expression"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/ru/v4/Expression",children:"\u0412\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}),", \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u0442\u0440\u043e\u043a\u0430, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"ACTION"})}),"\n",(0,s.jsx)(r.p,{children:"\u041a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e."}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"paramExpr1, ..., paramExprN"})}),"\n",(0,s.jsx)(r.p,{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0439, \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0431\u0443\u0434\u0443\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c\u0441\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u043e\u043c\u0443 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044e \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432. \u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0443 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u043e\u0433\u043e \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-lsf",children:"// \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434, \u0441\u043e\u0441\u0442\u043e\u044f\u0449\u0438\u0439 \u0438\u0437 \u043e\u0434\u043d\u043e\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438, \u0437\u0430\u0434\u0430\u0435\u0442\u0441\u044f \u0441\u0442\u0440\u043e\u043a\u043e\u0432\u043e\u0439 \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u043e\u0439\r\naddProperty  { EVAL ACTION 'MESSAGE \\'Hello World\\''; }  \r\n\r\n// \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043c\u043e\u0436\u0435\u0442 \u0432\u0432\u0435\u0441\u0442\u0438 \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434\r\ncode '\u0418\u0441\u0445\u043e\u0434\u043d\u044b\u0435 \u043a\u043e\u0434' = DATA BPSTRING[2000] ();\r\n\r\n// \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0449\u0435\u0435 \u044d\u0442\u043e\u0442 \u043a\u043e\u0434\r\nexecute '\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u043a\u043e\u0434'  { EVAL code(); }\n"})})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>d});var s=n(96540);const i={},t=s.createContext(i);function o(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);