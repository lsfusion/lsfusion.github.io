"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["16822"],{46754:function(e,r,n){n.r(r),n.d(r,{default:()=>u,frontMatter:()=>o,metadata:()=>t,assets:()=>d,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"EXEC_operator","title":"\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 EXEC","description":"\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 EXEC - \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F, \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u044E\u0449\u0435\u0433\u043E \u0434\u0440\u0443\u0433\u043E\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435.","source":"@site/i18n/ru/docusaurus-plugin-content-docs/version-v5/EXEC_operator.md","sourceDirName":".","slug":"/EXEC_operator","permalink":"/ru/v5/EXEC_operator","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v5/docs/ru/EXEC_operator.md","tags":[],"version":"v5","lastUpdatedAt":1708525070000,"frontMatter":{"title":"\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 EXEC"},"sidebar":"learn","previous":{"title":"\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 EVAL","permalink":"/ru/v5/EVAL_operator"},"next":{"title":"\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 EXPAND","permalink":"/ru/v5/EXPAND_operator"}}'),i=n("85893"),s=n("50065");let o={title:"\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 EXEC"},l=void 0,d={},c=[{value:"\u0421\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0441",id:"\u0441\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0441",level:3},{value:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",id:"\u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",level:3},{value:"\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B",id:"\u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B",level:3},{value:"\u041F\u0440\u0438\u043C\u0435\u0440\u044B",id:"\u043F\u0440\u0438\u043C\u0435\u0440\u044B",level:3}];function a(e){let r={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:["\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 ",(0,i.jsx)(r.code,{children:"EXEC"})," - \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 ",(0,i.jsx)(r.a,{href:"/ru/v5/Actions",children:"\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F"}),", ",(0,i.jsx)(r.a,{href:"/ru/v5/Call_EXEC",children:"\u0432\u044B\u043F\u043E\u043B\u043D\u044F\u044E\u0449\u0435\u0433\u043E"})," \u0434\u0440\u0443\u0433\u043E\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435."]}),"\n",(0,i.jsx)(r.h3,{id:"\u0441\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0441",children:"\u0421\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0441"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"[EXEC] actionId(expression1, ..., expressionN)\n"})}),"\n",(0,i.jsx)(r.h3,{id:"\u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",children:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"}),"\n",(0,i.jsxs)(r.p,{children:["\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 ",(0,i.jsx)(r.code,{children:"EXEC"})," \u0441\u043E\u0437\u0434\u0430\u0435\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u0442 \u0434\u0440\u0443\u0433\u043E\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u044F \u0435\u043C\u0443 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F ",(0,i.jsx)(r.a,{href:"/ru/v5/Expression",children:"\u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u0439"})," \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432."]}),"\n",(0,i.jsx)(r.h3,{id:"\u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B",children:"\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"actionId"})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/ru/v5/IDs#propertyid",children:"\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"expression1, ..., expressionN"})}),"\n",(0,i.jsx)(r.p,{children:"\u0421\u043F\u0438\u0441\u043E\u043A \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u0439, \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0431\u0443\u0434\u0443\u0442 \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044C\u0441\u044F \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u043C\u043E\u043C\u0443 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044E \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u043E\u0432. \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u0439 \u0434\u043E\u043B\u0436\u043D\u043E \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0443 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432 \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u043C\u043E\u0433\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F."}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"operator"})}),"\n",(0,i.jsx)(r.p,{children:"\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440, \u0441\u043E\u0437\u0434\u0430\u044E\u0449\u0438\u0439 \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u043C\u043E\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"\u043F\u0440\u0438\u043C\u0435\u0440\u044B",children:"\u041F\u0440\u0438\u043C\u0435\u0440\u044B"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-lsf",children:"// \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 importData \u0441 \u0434\u0432\u0443\u043C\u044F \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430\u043C\u0438\nimportData(Sku sku, Order order)  {\n    MESSAGE 'Run import for ' + id(sku) + ' ' + customer(order);\n}\n\norder = DATA Order (OrderDetail) NONULL DELETE;\n// \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F runImport, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0431\u0443\u0434\u0435\u0442 \u0432\u044B\u0437\u044B\u0432\u0430\u0442\u044C importData\nrunImport(OrderDetail d)  { importData(sku(d), order(d)); } \n"})})]})}function u(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},50065:function(e,r,n){n.d(r,{Z:function(){return l},a:function(){return o}});var t=n(67294);let i={},s=t.createContext(i);function o(e){let r=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);