"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["18269"],{87038:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>s,metadata:()=>t,assets:()=>c,toc:()=>d,contentTitle:()=>l});var t=JSON.parse('{"id":"IF_operator","title":"\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 IF","description":"\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 IF - \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430, \u0440\u0435\u0430\u043B\u0438\u0437\u0443\u044E\u0449\u0435\u0433\u043E \u0432\u044B\u0431\u043E\u0440 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043F\u043E \u0443\u0441\u043B\u043E\u0432\u0438\u044E (\u043E\u0434\u0438\u043D\u043E\u0447\u043D\u0430\u044F \u0444\u043E\u0440\u043C\u0430).","source":"@site/i18n/ru/docusaurus-plugin-content-docs/version-v5/IF_operator.md","sourceDirName":".","slug":"/IF_operator","permalink":"/ru/v5/IF_operator","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v5/docs/ru/IF_operator.md","tags":[],"version":"v5","lastUpdatedAt":1708525070000,"frontMatter":{"title":"\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 IF"},"sidebar":"learn","previous":{"title":"\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 GROUP","permalink":"/ru/v5/GROUP_operator"},"next":{"title":"\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 IF ... THEN","permalink":"/ru/v5/IF_..._THEN_operator"}}'),o=r("85893"),i=r("50065");let s={title:"\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 IF"},l=void 0,c={},d=[{value:"\u0421\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0441",id:"\u0441\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0441",level:3},{value:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",id:"\u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",level:3},{value:"\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B",id:"\u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B",level:3},{value:"\u041F\u0440\u0438\u043C\u0435\u0440\u044B",id:"\u043F\u0440\u0438\u043C\u0435\u0440\u044B",level:3}];function a(e){let n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 ",(0,o.jsx)(n.code,{children:"IF"})," - \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 ",(0,o.jsx)(n.a,{href:"/ru/v5/Properties",children:"\u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430"}),", \u0440\u0435\u0430\u043B\u0438\u0437\u0443\u044E\u0449\u0435\u0433\u043E ",(0,o.jsx)(n.a,{href:"/ru/v5/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE",children:"\u0432\u044B\u0431\u043E\u0440"})," \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043F\u043E \u0443\u0441\u043B\u043E\u0432\u0438\u044E (\u043E\u0434\u0438\u043D\u043E\u0447\u043D\u0430\u044F \u0444\u043E\u0440\u043C\u0430)."]}),"\n",(0,o.jsx)(n.h3,{id:"\u0441\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0441",children:"\u0421\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0441"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"result IF condition \n"})}),"\n",(0,o.jsx)(n.h3,{id:"\u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",children:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"}),"\n",(0,o.jsxs)(n.p,{children:["\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 ",(0,o.jsx)(n.code,{children:"IF"})," \u0441\u043E\u0437\u0434\u0430\u0435\u0442 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0437\u0430\u0434\u0430\u043D\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u0440\u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0438 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0443\u0441\u043B\u043E\u0432\u0438\u044F. \u0415\u0441\u043B\u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u0435 \u043D\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u0442\u0441\u044F, \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 ",(0,o.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"\u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B",children:"\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"result"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/ru/v5/Expression",children:"\u0412\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u0435"}),", \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"condition"})}),"\n",(0,o.jsx)(n.p,{children:"\u0412\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u0435, \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442 \u0443\u0441\u043B\u043E\u0432\u0438\u0435."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"\u043F\u0440\u0438\u043C\u0435\u0440\u044B",children:"\u041F\u0440\u0438\u043C\u0435\u0440\u044B"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"name = DATA STRING[100] (Book);\nhasName (Book b) = TRUE IF name(b);\n\nbackground (Book b) = RGB(224, 255, 128) IF b IS Book;\n\ncountTags (Book b) = GROUP SUM 1 IF in(b, Tag t);\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return s}});var t=r(67294);let o={},i=t.createContext(o);function s(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);