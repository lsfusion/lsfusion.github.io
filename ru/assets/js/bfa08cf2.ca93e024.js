"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["63117"],{54167:function(e,n,s){s.r(n),s.d(n,{default:()=>d,frontMatter:()=>o,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>a});var r=JSON.parse('{"id":"Access_from_an_internal_system","title":"\u041E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u0435 \u0438\u0437 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u044B","description":"Java-\u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435","source":"@site/i18n/ru/docusaurus-plugin-content-docs/version-v4/Access_from_an_internal_system.md","sourceDirName":".","slug":"/Access_from_an_internal_system","permalink":"/ru/v4/Access_from_an_internal_system","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v4/docs/ru/Access_from_an_internal_system.md","tags":[],"version":"v4","lastUpdatedAt":1623249583000,"frontMatter":{"title":"\u041E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u0435 \u0438\u0437 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u044B"},"sidebar":"learn","previous":{"title":"\u041E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u0435 \u0438\u0437 \u0432\u043D\u0435\u0448\u043D\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u044B","permalink":"/ru/v4/Access_from_an_external_system"},"next":{"title":"\u041E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u0435 \u043A \u0432\u043D\u0435\u0448\u043D\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u0435 (EXTERNAL)","permalink":"/ru/v4/Access_to_an_external_system_EXTERNAL"}}'),t=s("85893"),i=s("50065");let o={title:"\u041E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u0435 \u0438\u0437 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0435\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u044B"},a=void 0,l={},c=[{value:"Java-\u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435",id:"java-\u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435",level:3},{value:"SQL-\u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435",id:"sql-\u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435",level:3},{value:"\u041F\u0440\u0438\u043C\u0435\u0440\u044B",id:"\u043F\u0440\u0438\u043C\u0435\u0440\u044B",level:3}];function u(e){let n={a:"a",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"java-\u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435",children:"Java-\u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435"}),"\n",(0,t.jsx)(n.p,{children:"\u0412 \u0440\u0430\u043C\u043A\u0430\u0445 \u0442\u0430\u043A\u043E\u0433\u043E \u0442\u0438\u043F\u0430 \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F, \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u044F\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u043C\u043E\u0436\u0435\u0442 \u043E\u0431\u0440\u0430\u0449\u0430\u0442\u044C\u0441\u044F \u043D\u0435\u043F\u043E\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u043A Java \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u043C lsFusion \u0441\u0438\u0441\u0442\u0435\u043C\u044B (\u043A\u0430\u043A \u043A \u043E\u0431\u044B\u0447\u043D\u044B\u043C Java \u043E\u0431\u044A\u0435\u043A\u0442\u0430\u043C). \u0422\u0430\u043A\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C, \u043C\u043E\u0436\u043D\u043E \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0442\u044C \u0432\u0441\u0435 \u0442\u0435 \u0436\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u043A\u0430\u043A \u0438 \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0441\u0435\u0442\u0435\u0432\u044B\u0445 \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B\u043E\u0432, \u043D\u043E \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044C \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u043E\u0432\u0435\u0440\u0445\u0435\u0434\u0430 \u0442\u0430\u043A\u043E\u0433\u043E \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043D\u0430 \u0441\u0435\u0440\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044E \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432 / \u0434\u0435\u0441\u0435\u0440\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044E \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430 \u0438 \u0442.\u043F). \u041A\u0440\u043E\u043C\u0435 \u0442\u043E\u0433\u043E, \u0442\u0430\u043A\u043E\u0439 \u0441\u043F\u043E\u0441\u043E\u0431 \u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0433\u043E\u0440\u0430\u0437\u0434\u043E \u0443\u0434\u043E\u0431\u043D\u0435\u0435 \u0438 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u0435\u0435, \u0435\u0441\u043B\u0438 \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043E\u0447\u0435\u043D\u044C \u0442\u0435\u0441\u043D\u043E\u0435 (\u0442\u043E \u0435\u0441\u0442\u044C \u0432 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u043E\u0434\u043D\u043E\u0439 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E\u0433\u043E \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u044F \u0432 \u043E\u0431\u0435 \u0441\u0442\u043E\u0440\u043E\u043D\u044B - \u043E\u0442 lsFusion \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u043A \u0434\u0440\u0443\u0433\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u0435 \u0438 \u043E\u0431\u0440\u0430\u0442\u043D\u043E) \u0438 / \u0438\u043B\u0438 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u0443\u0437\u043B\u0430\u043C \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B."}),"\n",(0,t.jsx)(n.p,{children:"\u0421\u0442\u043E\u0438\u0442 \u043E\u0442\u043C\u0435\u0442\u0438\u0442\u044C, \u0447\u0442\u043E \u0434\u043B\u044F \u0442\u043E\u0433\u043E \u0447\u0442\u043E\u0431\u044B \u043E\u0431\u0440\u0430\u0449\u0430\u0442\u044C\u0441\u044F \u043A Java \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u043C lsFusion \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E, \u043D\u0443\u0436\u043D\u043E \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043E\u0431\u044A\u0435\u043A\u0442, \u0443 \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0431\u0443\u0434\u0443\u0442 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044B \u043F\u043E \u043F\u043E\u0438\u0441\u043A\u0443 \u044D\u0442\u0438\u0445 Java \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432. \u041A\u0430\u043A \u043F\u0440\u0430\u0432\u0438\u043B\u043E \u044D\u0442\u043E \u0434\u0435\u043B\u0430\u0435\u0442\u0441\u044F \u043E\u0434\u043D\u0438\u043C \u0438\u0437 \u0434\u0432\u0443\u0445 \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u0432:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u0415\u0441\u043B\u0438 \u043F\u0435\u0440\u0432\u043E\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u0435 \u0438\u0434\u0435\u0442 \u0438\u0437 lsFusion \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u0447\u0435\u0440\u0435\u0437 \u043C\u0435\u0445\u0430\u043D\u0438\u0437\u043C ",(0,t.jsx)(n.a,{href:"/ru/v4/Access_to_an_internal_system_INTERNAL_FORMULA#javato",children:"Java-\u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F"}),', \u0442\u043E \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 "\u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u043F\u043E\u0438\u0441\u043A\u0430" \u043C\u043E\u0436\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043E\u0431\u044A\u0435\u043A\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F, "\u0447\u0435\u0440\u0435\u0437 \u043A\u043E\u0442\u043E\u0440\u043E\u0435" \u0438\u0434\u0435\u0442 \u044D\u0442\u043E \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u0435 (\u043A\u043B\u0430\u0441\u0441 \u044D\u0442\u043E\u0433\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F, \u0434\u043E\u043B\u0436\u0435\u043D \u043D\u0430\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043E\u0442 ',(0,t.jsx)(n.code,{children:"lsfusion.server.physics.dev.integration.internal.to.InternalAction"}),", \u0443 \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E, \u0432 \u0441\u0432\u043E\u044E \u043E\u0447\u0435\u0440\u0435\u0434\u044C, \u0435\u0441\u0442\u044C \u0432\u0441\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044B)."]}),"\n",(0,t.jsxs)(n.li,{children:["\u0415\u0441\u043B\u0438 \u043E\u0431\u044A\u0435\u043A\u0442, \u0438\u0437 \u043C\u0435\u0442\u043E\u0434\u0430 \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u044C\u0441\u044F \u043A lsFusion \u0441\u0438\u0441\u0442\u0435\u043C\u0435, \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F Spring bean'\u043E\u043C, \u0442\u043E \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u043E\u0431\u044A\u0435\u043A\u0442 \u0431\u0438\u0437\u043D\u0435\u0441-\u043B\u043E\u0433\u0438\u043A\u0438 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F dependency injection (\u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E bean \u043D\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F ",(0,t.jsx)(n.code,{children:"businessLogics"}),")."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"sql-\u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435",children:"SQL-\u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435"}),"\n",(0,t.jsxs)(n.p,{children:["\u0421\u0438\u0441\u0442\u0435\u043C\u044B \u0438\u043C\u0435\u044E\u0449\u0438\u0435 \u0434\u043E\u0441\u0442\u0443\u043F \u043A SQL-\u0441\u0435\u0440\u0432\u0435\u0440\u0443 lsFusion-\u0441\u0438\u0441\u0442\u0435\u043C\u044B (\u043E\u0434\u043D\u043E\u0439 \u0438\u0437 \u0442\u0430\u043A\u0438\u0445 \u0441\u0438\u0441\u0442\u0435\u043C, \u043A \u043F\u0440\u0438\u043C\u0435\u0440\u0443, \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0430\u043C SQL-\u0441\u0435\u0440\u0432\u0435\u0440), \u043C\u043E\u0433\u0443\u0442 \u043E\u0431\u0440\u0430\u0449\u0430\u0442\u044C\u0441\u044F \u043D\u0435\u043F\u043E\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u043A ",(0,t.jsx)(n.a,{href:"/ru/v4/Tables",children:"\u0442\u0430\u0431\u043B\u0438\u0446\u0430\u043C"})," \u0438 ",(0,t.jsx)(n.a,{href:"/ru/v4/Materializations",children:"\u043F\u043E\u043B\u044F\u043C"}),", \u0441\u043E\u0437\u0434\u0430\u043D\u043D\u044B\u043C lsFusion-\u0441\u0438\u0441\u0442\u0435\u043C\u043E\u0439, \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430\u043C\u0438 SQL-\u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u041F\u0440\u0438 \u044D\u0442\u043E\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u0442\u044C \u0447\u0442\u043E, \u0435\u0441\u043B\u0438 \u0447\u0442\u0435\u043D\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E (\u0437\u0430 \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435\u043C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0433\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F / \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0442\u0430\u0431\u043B\u0438\u0446 \u0438 \u0438\u0445 \u043F\u043E\u043B\u0435\u0439), \u0442\u043E \u043F\u0440\u0438 \u0437\u0430\u043F\u0438\u0441\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u043D\u0435 \u0431\u0443\u0434\u0443\u0442 \u0432\u044B\u0437\u0432\u0430\u043D\u044B \u043D\u0438\u043A\u0430\u043A\u0438\u0435 ",(0,t.jsx)(n.a,{href:"/ru/v4/Events",children:"\u0441\u043E\u0431\u044B\u0442\u0438\u044F"})," (\u0438 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u0432\u0441\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0438\u0445 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0449\u0438\u0435 - ",(0,t.jsx)(n.a,{href:"/ru/v4/Constraints",children:"\u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F"}),", ",(0,t.jsx)(n.a,{href:"/ru/v4/Aggregations",children:"\u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u0438"})," \u0438 \u0442.\u043F.), \u0430 \u0442\u0430\u043A\u0436\u0435 \u043D\u0435 \u0431\u0443\u0434\u0443\u0442 \u043F\u0435\u0440\u0435\u0441\u0447\u0438\u0442\u0430\u043D\u044B \u043D\u0438\u043A\u0430\u043A\u0438\u0435 ",(0,t.jsx)(n.a,{href:"/ru/v4/Materializations",children:"\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438"}),". \u041F\u043E\u044D\u0442\u043E\u043C\u0443 \u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E \u0432 \u0442\u0430\u0431\u043B\u0438\u0446\u044B lsFusion-\u0441\u0438\u0441\u0442\u0435\u043C\u044B \u043A\u0440\u0430\u0439\u043D\u0435 \u043D\u0435 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F, \u0430 \u0435\u0441\u043B\u0438 \u044D\u0442\u043E \u0432\u0441\u0435 \u0436\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E, \u0432\u0430\u0436\u043D\u043E \u0443\u0447\u0435\u0441\u0442\u044C \u0432\u0441\u0435 \u0432\u044B\u0448\u0435\u0443\u043F\u043E\u043C\u044F\u043D\u0443\u0442\u044B\u0435 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438."]}),"\n",(0,t.jsx)(n.h3,{id:"\u043F\u0440\u0438\u043C\u0435\u0440\u044B",children:"\u041F\u0440\u0438\u043C\u0435\u0440\u044B"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'package lsfusion.server.logics.property.actions;\n\nimport lsfusion.base.BaseUtils;\nimport lsfusion.base.col.interfaces.immutable.ImMap;\nimport lsfusion.interop.remote.UserInfo;\nimport lsfusion.server.classes.ValueClass;\nimport lsfusion.server.data.SQLHandledException;\nimport lsfusion.server.logics.AuthenticationLogicsModule;\nimport lsfusion.server.logics.DataObject;\nimport lsfusion.server.logics.linear.LCP;\nimport lsfusion.server.logics.property.CalcProperty;\nimport lsfusion.server.logics.property.ClassPropertyInterface;\nimport lsfusion.server.logics.property.ExecutionContext;\nimport lsfusion.server.logics.scripted.ScriptingActionProperty;\nimport lsfusion.server.logics.scripted.ScriptingErrorLog;\n\nimport java.sql.SQLException;\nimport java.util.Iterator;\nimport java.util.Random;\n\npublic class GenerateLoginPasswordActionProperty extends ScriptingActionProperty {\n\n    private LCP email;\n    private LCP loginCustomUser;\n    private LCP sha256PasswordCustomUser;\n\n    private final ClassPropertyInterface customUserInterface;\n\n    public GenerateLoginPasswordActionProperty(AuthenticationLogicsModule LM, ValueClass... classes) throws ScriptingErrorLog.SemanticErrorException {\n        super(LM, classes);\n\n        this.email = findProperty("email[Contact]");\n        this.loginCustomUser = findProperty("login[CustomUser]");\n        this.sha256PasswordCustomUser = findProperty("sha256Password[CustomUser]");\n\n        Iterator<ClassPropertyInterface> i = interfaces.iterator();\n        customUserInterface = i.next();\n    }\n\n    public void executeCustom(ExecutionContext<ClassPropertyInterface> context) throws SQLException, SQLHandledException {\n        DataObject userObject = context.getDataKeyValue(customUserInterface);\n\n        String currentEmail = (String) email.read(context, userObject);\n\n        String login;\n        int indexMail;\n        if(currentEmail != null && (indexMail = currentEmail.indexOf("@"))>=0)\n            login = currentEmail.substring(0, indexMail);\n        else\n            login = "login" + userObject.object;\n\n        Random rand = new Random();\n        String chars = "0123456789abcdefghijklmnopqrstuvwxyz";\n        String password = "";\n        for(int i=0;i<8;i++)\n            password += chars.charAt(rand.nextInt(chars.length()));\n\n        if (loginCustomUser.read(context, userObject) == null)\n            loginCustomUser.change(login, context, userObject);\n        String sha256Password = BaseUtils.calculateBase64Hash("SHA-256", password, UserInfo.salt);\n        sha256PasswordCustomUser.change(sha256Password, context, userObject);\n    }\n}\n'})})]})}function d(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return o}});var r=s(67294);let t={},i=r.createContext(t);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);