"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["54956"],{13056:function(e,t,r){r.r(t),r.d(t,{default:()=>h,frontMatter:()=>d,metadata:()=>n,assets:()=>l,toc:()=>o,contentTitle:()=>i});var n=JSON.parse('{"id":"Structure_operators_STRUCT","title":"\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u0441\u043E \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430\u043C\u0438 (STRUCT, [])","description":"\u041F\u043E\u0434 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430\u043C\u0438 \u0432 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435 \u043F\u043E\u043D\u0438\u043C\u0430\u044E\u0442\u0441\u044F \u043A\u043B\u0430\u0441\u0441\u044B, \u043E\u0431\u044A\u0435\u043A\u0442\u044B \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0441\u043E\u0441\u0442\u043E\u044F\u0442 \u0438\u0437 \u043D\u0430\u0431\u043E\u0440\u0430 \u0434\u0440\u0443\u0433\u0438\u0445 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u0432 \u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435. \u0412 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u0434\u0432\u0430 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430 \u0440\u0430\u0431\u043E\u0442\u044B \u0441\u043E \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430\u043C\u0438:","source":"@site/i18n/ru/docusaurus-plugin-content-docs/version-v5/Structure_operators_STRUCT.md","sourceDirName":".","slug":"/Structure_operators_STRUCT","permalink":"/ru/v5/Structure_operators_STRUCT","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v5/docs/ru/Structure_operators_STRUCT.md","tags":[],"version":"v5","lastUpdatedAt":1685108136000,"frontMatter":{"title":"\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u0441\u043E \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430\u043C\u0438 (STRUCT, [])"},"sidebar":"learn","previous":{"title":"\u0421\u0442\u0440\u043E\u043A\u043E\u0432\u044B\u0435 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u044B (+, CONCAT, SUBSTRING)","permalink":"/ru/v5/String_operators_+_CONCAT_SUBSTRING"},"next":{"title":"\u041F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0442\u0438\u043F\u0430","permalink":"/ru/v5/Type_conversion"}}'),s=r("85893"),c=r("50065");let d={title:"\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u0441\u043E \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430\u043C\u0438 (STRUCT, [])"},i=void 0,l={},o=[{value:"\u042F\u0437\u044B\u043A",id:"\u044F\u0437\u044B\u043A",level:3},{value:"\u041F\u0440\u0438\u043C\u0435\u0440\u044B",id:"\u043F\u0440\u0438\u043C\u0435\u0440\u044B",level:3}];function a(e){let t={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["\u041F\u043E\u0434 ",(0,s.jsx)(t.em,{children:"\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430\u043C\u0438"})," \u0432 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435 \u043F\u043E\u043D\u0438\u043C\u0430\u044E\u0442\u0441\u044F ",(0,s.jsx)(t.a,{href:"/ru/v5/Classes",children:"\u043A\u043B\u0430\u0441\u0441\u044B"}),", \u043E\u0431\u044A\u0435\u043A\u0442\u044B \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0441\u043E\u0441\u0442\u043E\u044F\u0442 \u0438\u0437 \u043D\u0430\u0431\u043E\u0440\u0430 \u0434\u0440\u0443\u0433\u0438\u0445 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u0432 \u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435. \u0412 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u0434\u0432\u0430 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430 \u0440\u0430\u0431\u043E\u0442\u044B \u0441\u043E \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430\u043C\u0438:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440"}),(0,s.jsx)(t.th,{children:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"}),(0,s.jsx)(t.th,{children:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"}),(0,s.jsx)(t.th,{children:"\u041F\u0440\u0438\u043C\u0435\u0440"}),(0,s.jsx)(t.th,{children:"\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"STRUCT"})}),(0,s.jsx)(t.td,{children:"\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435"}),(0,s.jsxs)(t.td,{children:["\u0421\u043E\u0437\u0434\u0430\u0435\u0442 ",(0,s.jsx)(t.a,{href:"/ru/v5/Properties",children:"\u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E"}),", \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u044E\u0449\u0435\u0435 \u0441\u043F\u0438\u0441\u043E\u043A \u043E\u043F\u0435\u0440\u0430\u043D\u0434\u043E\u0432 \u043D\u0430 \u0432\u0445\u043E\u0434, \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u044E\u0449\u0435\u0435 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443, \u0441\u043E\u0441\u0442\u043E\u044F\u0449\u0443\u044E \u0438\u0437 \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u043D\u044B\u0445 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432"]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"STRUCT('a', 1)"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"STRUCT('a', 1)"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"[ ]"})}),(0,s.jsx)(t.td,{children:"\u041E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u0435"}),(0,s.jsx)(t.td,{children:"\u0421\u043E\u0437\u0434\u0430\u0435\u0442 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E, \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u044E\u0449\u0435\u0435 \u043D\u0430 \u0432\u0445\u043E\u0434 \u043E\u043F\u0435\u0440\u0430\u043D\u0434 \u0438 \u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u0446\u0435\u043B\u043E\u0435 \u0447\u0438\u0441\u043B\u043E, \u0438 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u044E\u0449\u0435\u0435 \u043E\u0431\u044A\u0435\u043A\u0442 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B, \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0439 \u0432 \u043F\u0435\u0440\u0432\u043E\u043C \u043E\u043F\u0435\u0440\u0430\u043D\u0434\u0435, \u043F\u043E\u0434 \u043D\u043E\u043C\u0435\u0440\u043E\u043C, \u0440\u0430\u0432\u043D\u044B\u043C \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u043C\u0443 \u0446\u0435\u043B\u043E\u043C\u0443 \u0447\u0438\u0441\u043B\u0443"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"STRUCT('a',1)[2]"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"1"})})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"\u0414\u043B\u044F \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u044F, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u044E\u0442\u0441\u044F \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0432\u0445\u043E\u0434\u044F\u0449\u0435\u0433\u043E \u0432 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443 \u043E\u0431\u044A\u0435\u043A\u0442\u0430."}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"\u0427\u0442\u043E\u0431\u044B \u043B\u0443\u0447\u0448\u0435 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043A\u0430\u043A \u044D\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442, \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0441\u043A\u0430\u0437\u0430\u0442\u044C, \u0447\u0442\u043E \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u044D\u0442\u043E \u043F\u0440\u043E\u0441\u0442\u043E \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u043A \u0431\u0438\u0442\u043E\u0432\u044B\u043C \u0441\u0442\u0440\u043E\u043A\u0430\u043C \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432, \u0432\u0445\u043E\u0434\u044F\u0449\u0438\u0445 \u0432 \u044D\u0442\u0443 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443"})}),"\n",(0,s.jsx)(t.h3,{id:"\u044F\u0437\u044B\u043A",children:"\u042F\u0437\u044B\u043A"}),"\n",(0,s.jsxs)(t.p,{children:["\u0414\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430, \u0441\u043E\u0437\u0434\u0430\u044E\u0449\u0435\u0433\u043E \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F ",(0,s.jsxs)(t.a,{href:"/ru/v5/STRUCT_operator",children:["\u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 ",(0,s.jsx)(t.code,{children:"STRUCT"})]}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["\u0414\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430, \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u044E\u0449\u0435\u0433\u043E \u043E\u0431\u044A\u0435\u043A\u0442 \u0438\u0437 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F ",(0,s.jsxs)(t.a,{href:"/ru/v5/Brackets_operator",children:["\u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 ",(0,s.jsx)(t.code,{children:"[ ]"})]}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"\u043F\u0440\u0438\u043C\u0435\u0440\u044B",children:"\u041F\u0440\u0438\u043C\u0435\u0440\u044B"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lsf",children:"objectStruct(a, b) = STRUCT(a, f(b));\nstringStruct() = STRUCT(1, 'two', 3.0);\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lsf",children:"CLASS Letter;\nattachment1 = DATA FILE (Letter);\nattachment2 = DATA FILE (Letter);\nletterAttachments (Letter l) = STRUCT(attachment1(l), attachment2(l));\nsecondAttachment(Letter l) = letterAttachments(l)[2]; // \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 attachment2\n"})})]})}function h(e={}){let{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return i},a:function(){return d}});var n=r(67294);let s={},c=n.createContext(s);function d(e){let t=n.useContext(c);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);