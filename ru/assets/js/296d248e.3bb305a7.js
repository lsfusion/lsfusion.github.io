"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["27490"],{1989:function(e,n,r){r.r(n),r.d(n,{default:()=>x,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>t,contentTitle:()=>o});var s=JSON.parse('{"id":"GROUP_operator","title":"\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 GROUP","description":"\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 GROUP - \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430, \u0440\u0435\u0430\u043B\u0438\u0437\u0443\u044E\u0449\u0435\u0433\u043E \u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u043A\u0443.","source":"@site/i18n/ru/docusaurus-plugin-content-docs/version-v5/GROUP_operator.md","sourceDirName":".","slug":"/GROUP_operator","permalink":"/ru/v5/GROUP_operator","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v5/docs/ru/GROUP_operator.md","tags":[],"version":"v5","lastUpdatedAt":1708525070000,"frontMatter":{"title":"\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 GROUP"},"sidebar":"learn","previous":{"title":"\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 FORMULA","permalink":"/ru/v5/FORMULA_operator"},"next":{"title":"\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 IF","permalink":"/ru/v5/IF_operator"}}'),c=r("85893"),d=r("50065");let i={title:"\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 GROUP"},o=void 0,l={},t=[{value:"\u0421\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0441",id:"\u0441\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0441",level:3},{value:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",id:"\u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",level:3},{value:"\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B",id:"\u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B",level:3},{value:"\u041F\u0440\u0438\u043C\u0435\u0440\u044B",id:"\u043F\u0440\u0438\u043C\u0435\u0440\u044B",level:3}];function h(e){let n={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:["\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 ",(0,c.jsx)(n.code,{children:"GROUP"})," - \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 ",(0,c.jsx)(n.a,{href:"/ru/v5/Properties",children:"\u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430"}),", \u0440\u0435\u0430\u043B\u0438\u0437\u0443\u044E\u0449\u0435\u0433\u043E ",(0,c.jsx)(n.a,{href:"/ru/v5/Grouping_GROUP",children:"\u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u043A\u0443"}),"."]}),"\n",(0,c.jsx)(n.h3,{id:"\u0441\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0441",children:"\u0421\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0441"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"GROUP \ntype expr1, ..., exprN\n[ORDER [DESC] orderExpr1, ..., orderExprK]\n[WHERE whereExpr]\n[BY groupExpr1, ..., groupExprM]\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",children:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"}),"\n",(0,c.jsxs)(n.p,{children:["\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 ",(0,c.jsx)(n.code,{children:"GROUP"})," \u0441\u043E\u0437\u0434\u0430\u0435\u0442 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E, \u0440\u0435\u0430\u043B\u0438\u0437\u0443\u044E\u0449\u0435\u0435 \u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u043A\u0443. \u0422\u0438\u043F \u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u043A\u0438 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442\u0441\u044F \u0432\u0438\u0434\u043E\u043C ",(0,c.jsx)(n.a,{href:"/ru/v5/Set_operations",children:"\u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u044E\u0449\u0435\u0439 \u0444\u0443\u043D\u043A\u0446\u0438\u0438"}),". \u042D\u0442\u043E\u0442 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u043E\u0442\u043B\u0438\u0447\u0430\u0435\u0442\u0441\u044F \u043E\u0442 \u0434\u0440\u0443\u0433\u0438\u0445 \u0442\u0435\u043C, \u0447\u0442\u043E \u043C\u043E\u0436\u0435\u0442 \u043D\u0435\u044F\u0432\u043D\u043E \u043E\u0431\u044A\u044F\u0432\u043B\u044F\u0442\u044C \u0441\u0432\u043E\u0438 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0432 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0445 \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u044F\u0445 (\u043F\u043E \u0430\u043D\u0430\u043B\u043E\u0433\u0438\u0438 \u0441 ",(0,c.jsxs)(n.a,{href:"/ru/v5/=_statement",children:["\u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0435\u0439 ",(0,c.jsx)(n.code,{children:"="})]}),', \u043A\u043E\u0433\u0434\u0430 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043D\u0435 \u0437\u0430\u0434\u0430\u043D\u044B \u044F\u0432\u043D\u043E). \u041F\u0440\u0438 \u044D\u0442\u043E\u043C, \u0432\u0430\u0436\u043D\u043E \u043F\u043E\u043D\u0438\u043C\u0430\u0442\u044C, \u0447\u0442\u043E \u044D\u0442\u0438 "\u043D\u0435\u044F\u0432\u043D\u043E \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u043D\u044B\u0435" \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043D\u0435 \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430\u043C\u0438 \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0435\u043C\u043E\u0433\u043E \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 (\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0430 \u0441\u0430\u043C\u043E\u043C \u0434\u0435\u043B\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u044E\u0442\u0441\u044F \u0431\u043B\u043E\u043A\u043E\u043C ',(0,c.jsx)(n.code,{children:"BY"})," \u0438/\u0438\u043B\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u043C\u0438 \u0432\u0435\u0440\u0445\u043D\u0438\u043C\u0438 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430\u043C\u0438)"]}),"\n",(0,c.jsxs)(n.p,{children:["\u0411\u043B\u043E\u043A ",(0,c.jsx)(n.code,{children:"BY"})," \u043E\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u0442 \u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u043E\u0447\u043D\u044B\u0435 \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u044F. \u041A\u0430\u0436\u0434\u043E\u0435 \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0443, \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0435\u043C\u043E\u0433\u043E \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430. \u041A\u0430\u043A \u0438 \u0432 \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u044B\u0445 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430\u0445, \u0432 \u044D\u0442\u043E\u043C \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0432\u0435\u0440\u0445\u043D\u0438\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B, \u043F\u0440\u0438\u0447\u0435\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0442\u0430\u043A\u0436\u0435 \u043D\u0435\u044F\u0432\u043D\u043E \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u043A\u0430\u043C\u0438 \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0435\u043C\u043E\u0433\u043E \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430. \u0421\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E, \u043F\u0440\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430 \u0432 ",(0,c.jsxs)(n.a,{href:"/ru/v5/=_statement",children:["\u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 ",(0,c.jsx)(n.code,{children:"="})]})," \u0438 \u044F\u0432\u043D\u043E\u043C \u0437\u0430\u0434\u0430\u043D\u0438\u0438 \u0432 \u044D\u0442\u043E\u0439 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432 \u0441\u043B\u0435\u0432\u0430, \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0438\u0437 \u0431\u043B\u043E\u043A\u0430 ",(0,c.jsx)(n.code,{children:"BY"})," \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u044E\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430 \u043D\u0435\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B. \u041F\u0440\u0438 \u044D\u0442\u043E\u043C, \u0435\u0441\u043B\u0438 \u043A\u043B\u0430\u0441\u0441\u044B \u0438\u043B\u0438 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u044D\u0442\u0438\u0445 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432 \u0431\u0443\u0434\u0435\u0442 \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0443 / \u043A\u043B\u0430\u0441\u0441\u0430\u043C \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u0439 ",(0,c.jsx)(n.code,{children:"BY"}),", \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0432\u044B\u0434\u0430\u0441\u0442 \u043E\u0448\u0438\u0431\u043A\u0443."]}),"\n",(0,c.jsx)(n.admonition,{type:"info",children:(0,c.jsxs)(n.p,{children:["\u0415\u0441\u043B\u0438 \u0431\u043B\u043E\u043A ",(0,c.jsx)(n.code,{children:"BY"})," \u0437\u0430\u0434\u0430\u043D, \u044D\u0442\u043E\u0442 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u043D\u0435\u043B\u044C\u0437\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0432\u043D\u0443\u0442\u0440\u0438 ",(0,c.jsx)(n.a,{href:"/ru/v5/Expression",children:"\u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u0439"}),"."]})}),"\n",(0,c.jsxs)(n.p,{children:["\u0411\u043B\u043E\u043A ",(0,c.jsx)(n.code,{children:"ORDER"})," \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442 \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0431\u0443\u0434\u0435\u0442 \u0432\u044B\u0447\u0438\u0441\u043B\u044F\u0442\u044C\u0441\u044F \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u044E\u0449\u0430\u044F \u0444\u0443\u043D\u043A\u0446\u0438\u044F. \u041C\u043E\u0436\u0435\u0442 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F ",(0,c.jsx)(n.a,{href:"/ru/v5/Set_operations",children:"\u043D\u0435\u043A\u043E\u043C\u043C\u0443\u0442\u0430\u0442\u0438\u0432\u043D\u044B\u0445"})," \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u044E\u0449\u0438\u0445 \u0444\u0443\u043D\u043A\u0446\u0438\u0439 (",(0,c.jsx)(n.code,{children:"CONCAT"}),", ",(0,c.jsx)(n.code,{children:"LAST"}),") \u0438 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043E\u0434\u043D\u043E\u0437\u043D\u0430\u0447\u043D\u043E \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u043C\u044B\u043C. \u0415\u0441\u043B\u0438 \u0432 \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u044F\u0445, \u0437\u0430\u0434\u0430\u044E\u0449\u0438\u0445 \u043F\u043E\u0440\u044F\u0434\u043E\u043A, \u043E\u0431\u044A\u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 (\u043D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0449\u0438\u0439\u0441\u044F \u0432 \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u044B\u0445 \u0431\u043B\u043E\u043A\u0430\u0445 \u0438 \u0432 \u0432\u0435\u0440\u0445\u043D\u0435\u043C \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u0435), \u0442\u043E \u043F\u0440\u0438 \u0432\u044B\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0438\u0440\u0443\u044E\u0449\u0435\u0433\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0443\u0441\u043B\u043E\u0432\u0438\u0435 \u043D\u0430 \u043D\u0435 ",(0,c.jsx)(n.code,{children:"NULL"})," \u0432\u0441\u0435\u0445 \u044D\u0442\u0438\u0445 \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u0439."]}),"\n",(0,c.jsxs)(n.p,{children:["\u0411\u043B\u043E\u043A ",(0,c.jsx)(n.code,{children:"WHERE"})," \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442 \u0443\u0441\u043B\u043E\u0432\u0438\u0435, \u043F\u0440\u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0438 \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u043D\u0430\u0431\u043E\u0440\u044B \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u0431\u0443\u0434\u0443\u0442 \u0443\u0447\u0430\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0432 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u043A\u0438. \u041C\u043E\u0436\u043D\u043E \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u044E\u0449\u0438\u0445 \u0444\u0443\u043D\u043A\u0446\u0438\u0439 ",(0,c.jsx)(n.code,{children:"AGGR"}),", ",(0,c.jsx)(n.code,{children:"NAGGR"}),", ",(0,c.jsx)(n.code,{children:"LAST"}),"."]}),"\n",(0,c.jsx)(n.admonition,{type:"info",children:(0,c.jsxs)(n.p,{children:["\u0414\u043B\u044F ",(0,c.jsx)(n.code,{children:"AGGR"}),", ",(0,c.jsx)(n.code,{children:"NAGGR"})," \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u044D\u0442\u043E\u0442 \u0431\u043B\u043E\u043A \u044F\u0432\u043D\u043E (\u0430 \u043D\u0435, \u0441\u043A\u0430\u0436\u0435\u043C, ",(0,c.jsxs)(n.a,{href:"/ru/v5/IF_operator",children:["\u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 ",(0,c.jsx)(n.code,{children:"IF"})]})," \u0432 \u0431\u043B\u043E\u043A\u0430\u0445 ",(0,c.jsx)(n.code,{children:"GROUP"})," \u0438 ",(0,c.jsx)(n.code,{children:"BY"}),") \u0438\u043C\u0435\u0435\u0442 \u0441\u043C\u044B\u0441\u043B, \u0442\u043E\u043B\u044C\u043A\u043E \u0441 \u0442\u043E\u0447\u043A\u0438 \u0437\u0440\u0435\u043D\u0438\u044F \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0435\u043C\u043E\u0433\u043E \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 \u043D\u0430 \u043D\u0435 ",(0,c.jsx)(n.code,{children:"NULL"})," \u0432 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043C\u0435\u0445\u0430\u043D\u0438\u0437\u043C\u0430\u0445 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0432 ",(0,c.jsx)(n.a,{href:"/ru/v5/Simple_constraints",children:"\u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u043C \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0438"})," \u043F\u0440\u043E\u0441\u0442\u044B\u0445 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0439)."]})}),"\n",(0,c.jsx)(n.h3,{id:"\u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B",children:"\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"type"})}),"\n",(0,c.jsxs)(n.p,{children:["\u0422\u0438\u043F \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u044E\u0449\u0435\u0439 \u0444\u0443\u043D\u043A\u0446\u0438\u0438. \u041C\u043E\u0436\u0435\u0442 \u0438\u043C\u0435\u0442\u044C \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F: ",(0,c.jsx)(n.code,{children:"SUM"}),", ",(0,c.jsx)(n.code,{children:"MAX"}),", ",(0,c.jsx)(n.code,{children:"MIN"}),", ",(0,c.jsx)(n.code,{children:"CONCAT"}),", ",(0,c.jsx)(n.code,{children:"EQUAL"}),", ",(0,c.jsx)(n.code,{children:"AGGR"}),", ",(0,c.jsx)(n.code,{children:"NAGGR"}),", ",(0,c.jsx)(n.code,{children:"LAST"}),"."]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"expr1, ..., exprN"})}),"\n",(0,c.jsx)(n.p,{children:"\u0421\u043F\u0438\u0441\u043E\u043A \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u0439, \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0438\u0434\u0443\u0442 \u043D\u0430 \u0432\u0445\u043E\u0434 \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u044E\u0449\u0435\u0439 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043E\u043F\u0435\u0440\u0430\u043D\u0434\u043E\u0432. \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u0439 \u0434\u043E\u043B\u0436\u043D\u043E \u0441\u043E\u043E\u0442\u0432\u0435\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0443 \u043E\u043F\u0435\u0440\u0430\u043D\u0434\u043E\u0432 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u043E\u0439 \u0444\u0443\u043D\u043A\u0446\u0438\u0438."}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"groupExpr1, ..., groupExprN"})}),"\n",(0,c.jsx)(n.p,{children:"\u0421\u043F\u0438\u0441\u043E\u043A \u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u043E\u0447\u043D\u044B\u0445 \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u0439 (\u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u043E\u043A)."}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"DESC"})}),"\n",(0,c.jsx)(n.p,{children:"\u041A\u043B\u044E\u0447\u0435\u0432\u043E\u0435 \u0441\u043B\u043E\u0432\u043E. \u0423\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u043D\u0430 \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u0439 \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430 \u043D\u0430\u0431\u043E\u0440\u043E\u0432 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432."}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"orderExpr1, ..., orderExprM"})}),"\n",(0,c.jsx)(n.p,{children:"\u0421\u043F\u0438\u0441\u043E\u043A \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u0439, \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u044E\u0449\u0438\u0445 \u043F\u043E\u0440\u044F\u0434\u043E\u043A, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0431\u0443\u0434\u0443\u0442 \u043F\u0440\u043E\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0430\u0431\u043E\u0440\u044B \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u043F\u0440\u0438 \u0432\u044B\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0438 \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u044E\u0449\u0435\u0439 \u0444\u0443\u043D\u043A\u0446\u0438\u0438. \u0414\u043B\u044F \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F \u043F\u043E\u0440\u044F\u0434\u043A\u0430 \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u044F, \u0437\u0430\u0442\u0435\u043C \u043F\u0440\u0438 \u0440\u0430\u0432\u0435\u043D\u0441\u0442\u0432\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432\u0442\u043E\u0440\u043E\u0433\u043E \u0438 \u0442.\u0434."}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"whereExpr"})}),"\n",(0,c.jsxs)(n.p,{children:["\u0424\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0435\u0435 \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u0435. \u0412 \u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u043A\u0435 \u0431\u0443\u0434\u0443\u0442 \u0443\u0447\u0430\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u0442\u0435 \u043D\u0430\u0431\u043E\u0440\u044B \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432, \u0434\u043B\u044F \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u044E\u0449\u0435\u0433\u043E \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043D\u0435 \u0440\u0430\u0432\u043D\u043E ",(0,c.jsx)(n.code,{children:"NULL"}),"."]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\u043F\u0440\u0438\u043C\u0435\u0440\u044B",children:"\u041F\u0440\u0438\u043C\u0435\u0440\u044B"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lsf",children:"CLASS Game;\nCLASS Team;\nhostGoals = DATA INTEGER (Game);\nhostTeam = DATA Team (Game);\nhostGoalsScored(team) = GROUP SUM hostGoals(Game game) BY hostTeam(game);\n\nname = DATA STRING[100] (Country);\n// \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0441\u044F \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E (STRING[100]) -> Country\ncountryName = GROUP AGGR Country country BY name(country); \n\nCLASS Book;\nCLASS Tag;\nname = DATA STRING[100] (Tag);\nin = DATA BOOLEAN (Book, Tag);\n\ntags(Book b) = GROUP CONCAT name(Tag t) IF in(b, t), ', ' ORDER name(t), t;\n"})})]})}function x(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return i}});var s=r(67294);let c={},d=s.createContext(c);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);