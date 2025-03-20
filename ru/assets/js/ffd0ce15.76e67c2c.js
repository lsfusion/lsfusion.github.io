"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["48789"],{98651:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>t,assets:()=>s,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"How-to_Documents_with_lines","title":"How-to: \u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u0441\u043E \u0441\u0442\u0440\u043E\u043A\u0430\u043C\u0438","description":"\u041F\u0440\u0438\u043C\u0435\u0440 1","source":"@site/i18n/ru/docusaurus-plugin-content-docs/version-v4/How-to_Documents_with_lines.md","sourceDirName":".","slug":"/How-to_Documents_with_lines","permalink":"/ru/v4/How-to_Documents_with_lines","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v4/docs/ru/How-to_Documents_with_lines.md","tags":[],"version":"v4","lastUpdatedAt":1619709222000,"frontMatter":{"title":"How-to: \u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u0441\u043E \u0441\u0442\u0440\u043E\u043A\u0430\u043C\u0438"},"sidebar":"learn","previous":{"title":"How-to: CRUD","permalink":"/ru/v4/How-to_CRUD"},"next":{"title":"How-to: \u0424\u0438\u043B\u044C\u0442\u0440\u0430\u0446\u0438\u044F \u0438 \u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430","permalink":"/ru/v4/How-to_Filtering_and_ordering"}}'),o=r("85893"),i=r("50065");let d={title:"How-to: \u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u0441\u043E \u0441\u0442\u0440\u043E\u043A\u0430\u043C\u0438"},l=void 0,s={},c=[{value:"\u041F\u0440\u0438\u043C\u0435\u0440 1",id:"\u043F\u0440\u0438\u043C\u0435\u0440-1",level:2},{value:"\u0423\u0441\u043B\u043E\u0432\u0438\u0435",id:"\u0443\u0441\u043B\u043E\u0432\u0438\u0435",level:3},{value:"\u0420\u0435\u0448\u0435\u043D\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043D\u0438\u0435",level:3},{value:"\u041F\u0440\u0438\u043C\u0435\u0440 2",id:"\u043F\u0440\u0438\u043C\u0435\u0440-2",level:2},{value:"\u0423\u0441\u043B\u043E\u0432\u0438\u0435",id:"\u0443\u0441\u043B\u043E\u0432\u0438\u0435-1",level:3},{value:"\u0420\u0435\u0448\u0435\u043D\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043D\u0438\u0435-1",level:3}];function a(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"\u043F\u0440\u0438\u043C\u0435\u0440-1",children:"\u041F\u0440\u0438\u043C\u0435\u0440 1"}),"\n",(0,o.jsx)(n.h3,{id:"\u0443\u0441\u043B\u043E\u0432\u0438\u0435",children:"\u0423\u0441\u043B\u043E\u0432\u0438\u0435"}),"\n",(0,o.jsx)(n.p,{children:"\u0415\u0441\u0442\u044C \u0437\u0430\u043A\u0430\u0437\u044B \u0438 \u0438\u0445 \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u0432 \u0432\u0438\u0434\u0435 \u0441\u0442\u0440\u043E\u043A."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"CLASS Book '\u041A\u043D\u0438\u0433\u0430';\nname '\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435' = DATA ISTRING[100] (Book) IN id;\n\nCLASS Order '\u0417\u0430\u043A\u0430\u0437';\ndate '\u0414\u0430\u0442\u0430' = DATA DATE (Order);\nnumber '\u041D\u043E\u043C\u0435\u0440' = DATA STRING[10] (Order);\n\nCLASS OrderDetail '\u0421\u0442\u0440\u043E\u043A\u0430 \u0437\u0430\u043A\u0430\u0437\u0430';\norder '\u0417\u0430\u043A\u0430\u0437' = DATA Order (OrderDetail) NONULL DELETE;\n\nbook '\u041A\u043D\u0438\u0433\u0430' = DATA Book (OrderDetail) NONULL;\nnameBook '\u041A\u043D\u0438\u0433\u0430' (OrderDetail d) = name(book(d));\n\nquantity '\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E' = DATA INTEGER (OrderDetail);\nprice '\u0426\u0435\u043D\u0430' = DATA NUMERIC[14,2] (OrderDetail);\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0444\u043E\u0440\u043C\u0443 \u0441\u043E \u0441\u043F\u0438\u0441\u043A\u043E\u043C \u0437\u0430\u043A\u0430\u0437\u043E\u0432 \u0441 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C\u044E \u0438\u0445 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044F, \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F."}),"\n",(0,o.jsx)(n.h3,{id:"\u0440\u0435\u0448\u0435\u043D\u0438\u0435",children:"\u0420\u0435\u0448\u0435\u043D\u0438\u0435"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"FORM order '\u0417\u0430\u043A\u0430\u0437'\n    OBJECTS o = Order PANEL\n    PROPERTIES(o) date, number\n\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) nameBook, quantity, price, NEW, DELETE\n    FILTERS order(d) == o\n\n    EDIT Order OBJECT o\n;\n\n\nFORM orders '\u0417\u0430\u043A\u0430\u0437\u044B'\n    OBJECTS o = Order\n    PROPERTIES(o) READONLY date, number\n    PROPERTIES(o) NEWSESSION NEW, EDIT, DELETE\n;\n\nNAVIGATOR {\n    NEW orders;\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u041D\u0430 \u0444\u043E\u0440\u043C\u0435 ",(0,o.jsx)(n.code,{children:"order"})," \u0434\u043B\u044F \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u0441\u0442\u0440\u043E\u043A\u0438 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0437\u0430\u043A\u0430\u0437, \u0442\u0430\u043A \u043A\u0430\u043A \u043F\u0440\u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0438 \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u0447\u0435\u0440\u0435\u0437 ",(0,o.jsx)(n.code,{children:"NEW"}),", \u0441\u0441\u044B\u043B\u043A\u0430 \u0431\u0443\u0434\u0435\u0442 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043F\u0440\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0430 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0438 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 ",(0,o.jsx)(n.code,{children:"FILTERS"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"\u043F\u0440\u0438\u043C\u0435\u0440-2",children:"\u041F\u0440\u0438\u043C\u0435\u0440 2"}),"\n",(0,o.jsx)(n.h3,{id:"\u0443\u0441\u043B\u043E\u0432\u0438\u0435-1",children:"\u0423\u0441\u043B\u043E\u0432\u0438\u0435"}),"\n",(0,o.jsxs)(n.p,{children:["\u0410\u043D\u0430\u043B\u043E\u0433\u0438\u0447\u043D\u043E ",(0,o.jsx)(n.a,{href:"#%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80-1",children:(0,o.jsx)(n.strong,{children:"\u041F\u0440\u0438\u043C\u0435\u0440\u0443 1"})}),"."]}),"\n",(0,o.jsx)(n.p,{children:"\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u0430 \u0444\u043E\u0440\u043C\u0443 \u0441\u043E \u0441\u043F\u0438\u0441\u043A\u043E\u043C \u0437\u0430\u043A\u0430\u0437\u043E\u0432 \u0438\u0445 \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044E."}),"\n",(0,o.jsx)(n.h3,{id:"\u0440\u0435\u0448\u0435\u043D\u0438\u0435-1",children:"\u0420\u0435\u0448\u0435\u043D\u0438\u0435"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"EXTEND FORM orders\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) READONLY nameBook, quantity, price\n    FILTERS order(d) == o\n;\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u042D\u0442\u043E \u0431\u044B\u0432\u0430\u0435\u0442 \u0443\u0434\u043E\u0431\u043D\u043E, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043C\u043E\u0433 \u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0441\u043E\u0441\u0442\u0430\u0432 \u0437\u0430\u043A\u0430\u0437\u0430, \u043D\u0435 \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u044F \u0435\u0433\u043E."})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return d}});var t=r(67294);let o={},i=t.createContext(o);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);