"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["72330"],{32006:function(e,n,r){r.r(n),r.d(n,{default:()=>p,frontMatter:()=>c,metadata:()=>l,assets:()=>o,toc:()=>d,contentTitle:()=>t});var l=JSON.parse('{"id":"COLLAPSE_operator","title":"\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 COLLAPSE","description":"\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 COLLAPSE - \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F, \u0440\u0435\u0430\u043B\u0438\u0437\u0443\u044E\u0449\u0435\u0433\u043E \u0441\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0434\u0435\u0440\u0435\u0432\u0430 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432.","source":"@site/i18n/ru/docusaurus-plugin-content-docs/version-v5/COLLAPSE_operator.md","sourceDirName":".","slug":"/COLLAPSE_operator","permalink":"/ru/v5/COLLAPSE_operator","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v5/docs/ru/COLLAPSE_operator.md","tags":[],"version":"v5","lastUpdatedAt":1713867720000,"frontMatter":{"title":"\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 COLLAPSE"},"sidebar":"learn","previous":{"title":"\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 CHANGECLASS","permalink":"/ru/v5/CHANGECLASS_operator"},"next":{"title":"\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 INTERNAL","permalink":"/ru/v5/INTERNAL_operator"}}'),s=r("85893"),i=r("50065");let c={title:"\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 COLLAPSE"},t=void 0,o={},d=[{value:"\u0421\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0441",id:"\u0441\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0441",level:3},{value:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",id:"\u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",level:3},{value:"\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B",id:"\u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B",level:3},{value:"\u041F\u0440\u0438\u043C\u0435\u0440\u044B",id:"\u043F\u0440\u0438\u043C\u0435\u0440\u044B",level:3}];function a(e){let n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 ",(0,s.jsx)(n.code,{children:"COLLAPSE"})," - \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 ",(0,s.jsx)(n.a,{href:"/ru/v5/Actions",children:"\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F"}),", \u0440\u0435\u0430\u043B\u0438\u0437\u0443\u044E\u0449\u0435\u0433\u043E ",(0,s.jsx)(n.a,{href:"/ru/v5/Object_tree_visibility_EXPAND_COLLAPSE",children:"\u0441\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432"})," ",(0,s.jsx)(n.a,{href:"/ru/v5/Interactive_view#tree",children:"\u0434\u0435\u0440\u0435\u0432\u0430 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"\u0441\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0441",children:"\u0421\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0441"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"COLLAPSE [collapseType] formObjectGroupId [OBJECTS objName1 = expr1, ..., objNameN = exprN]\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",children:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"}),"\n",(0,s.jsxs)(n.p,{children:["\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 ",(0,s.jsx)(n.code,{children:"COLLAPSE"})," \u0441\u043E\u0437\u0434\u0430\u0435\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0441\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0434\u0435\u0440\u0435\u0432\u0430 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u043D\u0430 \u0444\u043E\u0440\u043C\u0435. \u042D\u0442\u0438 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u044B \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0431\u043B\u043E\u043A\u0430 ",(0,s.jsx)(n.code,{children:"OBJECTS"}),". \u0415\u0441\u043B\u0438 \u044D\u0442\u043E\u0442 \u0431\u043B\u043E\u043A \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D, \u0442\u043E \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044F \u0441\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u044F \u0431\u0443\u0434\u0435\u0442 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0430 \u043B\u0438\u0431\u043E \u043A \u0442\u0435\u043A\u0443\u0449\u0435\u043C\u0443 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0443 \u0434\u0435\u0440\u0435\u0432\u0430, \u043B\u0438\u0431\u043E \u043A \u0432\u0435\u0440\u0445\u043D\u0435\u043C\u0443 \u0443\u0440\u043E\u0432\u043D\u044E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0439 ",(0,s.jsx)(n.a,{href:"/ru/v5/Form_structure#objects",children:"\u0433\u0440\u0443\u043F\u043F\u044B \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432"}),", \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u0442\u0438\u043F\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438."]}),"\n",(0,s.jsx)(n.h3,{id:"\u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B",children:"\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"collapseType"})}),"\n",(0,s.jsx)(n.p,{children:"\u0422\u0438\u043F \u0441\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u044F. \u0417\u0430\u0434\u0430\u0435\u0442\u0441\u044F \u043E\u0434\u043D\u0438\u043C \u0438\u0437 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0445 \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u0432:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"DOWN"})}),"\n",(0,s.jsxs)(n.p,{children:["\u041A\u043B\u044E\u0447\u0435\u0432\u043E\u0435 \u0441\u043B\u043E\u0432\u043E, \u043F\u0440\u0438 \u0443\u043A\u0430\u0437\u0430\u043D\u0438\u0438 \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0431\u0443\u0434\u0435\u0442 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442\u044C \u0441\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0434\u0435\u0440\u0435\u0432\u0430. \u0415\u0441\u043B\u0438 \u0431\u043B\u043E\u043A ",(0,s.jsx)(n.code,{children:"OBJECTS"})," \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D, \u0442\u043E \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044F \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043A \u0442\u0435\u043A\u0443\u0449\u0435\u043C\u0443 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0443."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"ALL"})}),"\n",(0,s.jsxs)(n.p,{children:["\u041A\u043B\u044E\u0447\u0435\u0432\u043E\u0435 \u0441\u043B\u043E\u0432\u043E, \u043F\u0440\u0438 \u0443\u043A\u0430\u0437\u0430\u043D\u0438\u0438 \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0431\u0443\u0434\u0435\u0442 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442\u044C \u0440\u0435\u043A\u0443\u0440\u0441\u0438\u0432\u043D\u043E\u0435 \u0441\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0434\u0435\u0440\u0435\u0432\u0430 \u0438 \u0432\u0441\u0435\u0445 \u0438\u0445 \u043F\u043E\u0442\u043E\u043C\u043A\u043E\u0432. \u0415\u0441\u043B\u0438 \u0431\u043B\u043E\u043A ",(0,s.jsx)(n.code,{children:"OBJECTS"})," \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D, \u0442\u043E \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044F \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043A \u0442\u0435\u043A\u0443\u0449\u0435\u043C\u0443 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0443."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"ALL TOP"})}),"\n",(0,s.jsxs)(n.p,{children:["\u0414\u0432\u0430 \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u0445 \u0441\u043B\u043E\u0432\u0430, \u043F\u0440\u0438 \u0443\u043A\u0430\u0437\u0430\u043D\u0438\u0438 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0431\u0443\u0434\u0435\u0442 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442\u044C \u0440\u0435\u043A\u0443\u0440\u0441\u0438\u0432\u043D\u043E\u0435 \u0441\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u0435 \u0432\u0441\u0435\u0445 \u0432\u0435\u0440\u0445\u043D\u0438\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0439 \u0433\u0440\u0443\u043F\u043F\u044B \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432. \u0411\u043B\u043E\u043A ",(0,s.jsx)(n.code,{children:"OBJECTS"})," \u0438\u0433\u043D\u043E\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044F."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u0415\u0441\u043B\u0438 \u043D\u0435 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F, \u0442\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435\u043C \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F ",(0,s.jsx)(n.code,{children:"DOWN"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"formObjectGroupId"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/ru/v5/IDs#groupobjectid",children:"\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u0433\u0440\u0443\u043F\u043F\u044B \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432"}),", \u043A \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044F \u0441\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u044F."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"objName1 ... objNameN"})}),"\n",(0,s.jsxs)(n.p,{children:["\u0418\u043C\u0435\u043D\u0430 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u043D\u0430 \u0444\u043E\u0440\u043C\u0435. \u041E\u0431\u044A\u0435\u043A\u0442\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u0432\u0445\u043E\u0434\u0438\u0442\u044C \u0432 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u0443\u044E \u0433\u0440\u0443\u043F\u043F\u0443 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432. \u0418\u043C\u044F \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u0437\u0430\u0434\u0430\u0435\u0442\u0441\u044F ",(0,s.jsx)(n.a,{href:"/ru/v5/IDs#id",children:"\u043F\u0440\u043E\u0441\u0442\u044B\u043C \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u043E\u043C"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"expr1 ... exprN"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/ru/v5/Expression",children:"\u0412\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u044F"}),", \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0438\u0441\u043A\u043E\u043C\u044B\u043C\u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F\u043C\u0438 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u0432 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0439 \u0433\u0440\u0443\u043F\u043F\u0435 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u043F\u0440\u0438\u043C\u0435\u0440\u044B",children:"\u041F\u0440\u0438\u043C\u0435\u0440\u044B"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lsf",children:"FORM expandCollapseTest\n    TREE elements e = NavigatorElement PARENT parent(e)\n    PROPERTIES(e) READONLY BACKGROUND NOT e IS NavigatorFolder VALUE, canonicalName, caption\n;\n\ncollapseDown {\n    COLLAPSE DOWN expandCollapseTest.e OBJECTS e = navigatorElementCanonicalName('System.administration');\n}\n\ncollapseAllTop {\n    COLLAPSE ALL TOP expandCollapseTest.e;\n}\n\nEXTEND FORM expandCollapseTest\n    PROPERTIES() collapseDown, collapseAllTop\n;\n"})})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return t},a:function(){return c}});var l=r(67294);let s={},i=l.createContext(s);function c(e){let n=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);