"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["6700"],{89111:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>c,metadata:()=>i,assets:()=>l,toc:()=>o,contentTitle:()=>d});var i=JSON.parse('{"id":"IDE","title":"IDE","description":"\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0433\u043E lsFusion \u043F\u0440\u043E\u0435\u043A\u0442\u0430","source":"@site/i18n/ru/docusaurus-plugin-content-docs/version-v4/IDE.md","sourceDirName":".","slug":"/IDE","permalink":"/ru/v4/IDE","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v4/docs/ru/IDE.md","tags":[],"version":"v4","lastUpdatedAt":1623249583000,"frontMatter":{"title":"IDE"},"sidebar":"learn","previous":{"title":"\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u044F \u043A\u043E\u0434\u0430","permalink":"/ru/v4/Coding_conventions"},"next":{"title":"\u041F\u0440\u0438\u043C\u0435\u0440\u044B","permalink":"/ru/v4/Examples"}}'),r=s("85893"),t=s("50065");let c={title:"IDE"},d=void 0,l={},o=[{value:"\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0433\u043E lsFusion \u043F\u0440\u043E\u0435\u043A\u0442\u0430",id:"newproject",level:3},{value:"\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",id:"dev",level:3},{value:"\u0417\u0430\u043F\u0443\u0441\u043A \u0441\u0435\u0440\u0432\u0435\u0440\u0430",id:"run",level:3},{value:"\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0437\u0430\u043F\u0443\u0441\u043A\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430",id:"configuration",level:3},{value:"\u0421\u0431\u043E\u0440\u043A\u0430 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F (\u0441\u043E \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u044B\u043C \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C)",id:"build",level:3}];function a(e){let n={a:"a",code:"code",em:"em",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"newproject",children:"\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0433\u043E lsFusion \u043F\u0440\u043E\u0435\u043A\u0442\u0430"}),"\n",(0,r.jsxs)(n.p,{children:["\u0412\u044B\u0431\u0438\u0440\u0430\u0435\u043C \u043F\u0443\u043D\u043A\u0442 ",(0,r.jsx)(n.code,{children:"Create New Project"})," \u043F\u0440\u0438 \u0441\u0442\u0430\u0440\u0442\u0435 ",(0,r.jsx)(n.strong,{children:"IDEA"}),". \u0418\u043B\u0438, \u0435\u0441\u043B\u0438 ",(0,r.jsx)(n.strong,{children:"IDEA"})," \u0443\u0436\u0435 \u0437\u0430\u043F\u0443\u0449\u0435\u043D\u0430, \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u043C \u0432 \u043C\u0435\u043D\u044E \u043F\u0443\u043D\u043A\u0442 ",(0,r.jsx)(n.code,{children:"File > New > Project"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{src:s(57128).Z+"",width:"664",height:"486"}),(0,r.jsx)(n.img,{src:s(96886).Z+"",width:"461",height:"495"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u0412\u044B\u0431\u0438\u0440\u0430\u0435\u043C \u0442\u0438\u043F \u043F\u0440\u043E\u0435\u043A\u0442\u0430 ",(0,r.jsx)(n.code,{children:"lsFusion"}),". \u041F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C, \u0447\u0442\u043E \u0437\u0430\u0434\u0430\u043D JDK \u0438 \u0432\u044B\u0431\u0440\u0430\u043D\u0430 \u0441\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0443 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C ",(0,r.jsx)(n.code,{children:"lsFusion"})," (\u043F\u0440\u0438 ",(0,r.jsx)(n.a,{href:"/ru/v4/Development_auto",children:"\u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0435"})," \u044D\u0442\u0430 \u0441\u0441\u044B\u043B\u043A\u0430 \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438, \u0435\u0441\u043B\u0438 \u0435\u0435 \u0432\u0441\u0435 \u0436\u0435 \u043D\u0435\u0442 - \u0441\u043A\u0430\u0447\u0438\u0432\u0430\u0435\u043C ",(0,r.jsx)(n.code,{children:"Download"})," \u0438\u043B\u0438 \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u043C \u0443\u0436\u0435 \u0441\u043A\u0430\u0447\u0430\u043D\u043D\u0443\u044E \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0443 ",(0,r.jsx)(n.code,{children:"Create"}),"), \u043D\u0430\u0436\u0438\u043C\u0430\u0435\u043C ",(0,r.jsx)(n.code,{children:"Next"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(63581).Z+"",width:"701",height:"742"})}),"\n",(0,r.jsxs)(n.p,{children:["\u0417\u0430\u043F\u043E\u043B\u043D\u044F\u0435\u043C \u0438\u043C\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u0438 \u043A\u0430\u0442\u0430\u043B\u043E\u0433, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0431\u0443\u0434\u0443\u0442 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u044C\u0441\u044F \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u0435 \u0444\u0430\u0439\u043B\u044B. \u041F\u0440\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u0438\u0437\u043C\u0435\u043D\u044F\u0435\u043C \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u043A \u0431\u0430\u0437\u0435 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439. \u041D\u0430\u0436\u0438\u043C\u0430\u0435\u043C ",(0,r.jsx)(n.code,{children:"Finish"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(49664).Z+"",width:"701",height:"742"})}),"\n",(0,r.jsx)(n.h3,{id:"dev",children:"\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F"}),"\n",(0,r.jsxs)(n.p,{children:["\u0412\u0435\u0441\u044C \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u043A\u043E\u0434 \u043D\u0430 \u044F\u0437\u044B\u043A\u0435 ",(0,r.jsx)(n.strong,{children:"lsFusion"}),", \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E, \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432 \u043F\u0430\u043F\u043A\u0435 ",(0,r.jsx)(n.code,{children:"src/main/lsfusion"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u044B\u0439 ",(0,r.jsx)(n.a,{href:"/ru/v4/Modules",children:"\u043C\u043E\u0434\u0443\u043B\u044C"})," \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u0436\u0430\u0432 \u043F\u0440\u0430\u0432\u043E\u0439 \u043A\u043D\u043E\u043F\u043A\u043E\u0439 \u043C\u044B\u0448\u0438 \u043D\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0439 \u043F\u0430\u043F\u043A\u043E\u0439 \u0438 \u0432\u044B\u0431\u0440\u0430\u0432 \u043F\u0443\u043D\u043A\u0442 \u043C\u0435\u043D\u044E ",(0,r.jsx)(n.code,{children:"New > lsFusion Module"}),":"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(16333).Z+"",width:"952",height:"325"})}),"\n",(0,r.jsxs)(n.p,{children:["\u0410\u043D\u0430\u043B\u043E\u0433\u0438\u0447\u043D\u044B\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C, \u043F\u0440\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438, \u043C\u043E\u0436\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C \u0432\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435 \u043F\u0430\u043F\u043A\u0438 (\u043F\u0443\u043D\u043A\u0442 ",(0,r.jsx)(n.code,{children:"Package"}),"), \u0433\u0440\u0443\u043F\u043F\u0438\u0440\u0443\u044F \u0442\u0435\u043C \u0441\u0430\u043C\u044B\u043C \u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438 \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0435 \u043C\u043E\u0434\u0443\u043B\u0438 \u0432 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u0438."]}),"\n",(0,r.jsxs)(n.p,{children:["\u0411\u043E\u043B\u0435\u0435 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u0439\u0442\u0438 \u0432 \u044D\u0442\u043E\u0439 ",(0,r.jsx)(n.a,{href:"https://habr.com/ru/company/lsfusion/blog/465573/",children:"\u0441\u0442\u0430\u0442\u044C\u0435"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"run",children:"\u0417\u0430\u043F\u0443\u0441\u043A \u0441\u0435\u0440\u0432\u0435\u0440\u0430"}),"\n",(0,r.jsxs)(n.p,{children:["\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E, \u043F\u0440\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u043D\u043E\u0432\u043E\u0433\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u0435\u0442\u0441\u044F \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F \u0437\u0430\u043F\u0443\u0441\u043A\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u0421\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0435\u0435, \u043C\u043E\u0436\u043D\u043E \u0432\u044B\u0431\u0440\u0430\u0432 \u043F\u0443\u043D\u043A\u0442 \u043C\u0435\u043D\u044E ",(0,r.jsx)(n.code,{children:"Run -> Run 'Run lsFusion server'"}),", \u0438\u043B\u0438 \u043D\u0430\u0436\u0430\u0432 \u043D\u0430 \u0437\u043D\u0430\u0447\u043E\u043A ",(0,r.jsx)(n.img,{src:s(43102).Z+"",width:"19",height:"22"})," \u0440\u044F\u0434\u043E\u043C \u0441 \u043D\u0430\u0434\u043F\u0438\u0441\u044C\u044E ",(0,r.jsx)(n.code,{children:"Run lsFusion server"})," \u0432 \u043F\u0440\u0430\u0432\u043E\u043C \u0432\u0435\u0440\u0445\u043D\u0435\u043C \u0443\u0433\u043B\u0443. \u041F\u0440\u0438 \u0443\u0434\u0430\u0447\u043D\u043E\u043C \u0441\u0442\u0430\u0440\u0442\u0435 \u0441\u0430\u043C\u043E\u0439 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0439 \u0441\u0442\u0440\u043E\u043A\u043E\u0439 \u0432 \u043B\u043E\u0433\u0435 \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C ",(0,r.jsx)(n.code,{children:"Server has successfully started"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(37053).Z+"",width:"761",height:"377"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(83941).Z+"",width:"1847",height:"396"})}),"\n",(0,r.jsx)(n.p,{children:"\u041F\u043E\u0441\u043B\u0435 \u0442\u043E\u0433\u043E, \u043A\u0430\u043A \u0441\u0435\u0440\u0432\u0435\u0440 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u043F\u0443\u0449\u0435\u043D, \u043A \u043D\u0435\u043C\u0443 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0442\u044C\u0441\u044F \u043F\u0440\u0438 \u043F\u043E\u043C\u043E\u0449\u0438 \u0432\u0435\u0431 \u0438\u043B\u0438 \u0434\u0435\u0441\u043A\u0442\u043E\u043F \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u0447\u0435\u0440\u0435\u0437 \u044F\u0440\u043B\u044B\u043A \u043D\u0430 \u0440\u0430\u0431\u043E\u0447\u0435\u043C \u0441\u0442\u043E\u043B\u0435."}),"\n",(0,r.jsx)(n.h3,{id:"configuration",children:"\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0437\u0430\u043F\u0443\u0441\u043A\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"}),"\n",(0,r.jsxs)(n.p,{children:["\u0415\u0441\u043B\u0438 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u043A \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u043C\u0443 \u043F\u0440\u043E\u0435\u043A\u0442\u0443 (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 ",(0,r.jsx)(n.a,{href:"/ru/v4/Development_manual#maven",children:"\u0447\u0435\u0440\u0435\u0437 Maven"})," \u043A maven \u043F\u0440\u043E\u0435\u043A\u0442\u0443), \u043C\u043E\u0436\u0435\u0442 \u043F\u043E\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044E \u0437\u0430\u043F\u0443\u0441\u043A\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u0432\u0440\u0443\u0447\u043D\u0443\u044E. \u0414\u0435\u043B\u0430\u0435\u0442\u0441\u044F \u044D\u0442\u043E \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C:"]}),"\n",(0,r.jsxs)(n.p,{children:["\u0412\u044B\u0431\u0438\u0440\u0430\u0435\u043C \u043F\u0443\u043D\u043A\u0442 \u043C\u0435\u043D\u044E ",(0,r.jsx)(n.code,{children:"Edit configurations"}),":"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(98017).Z+"",width:"1387",height:"227"})}),"\n",(0,r.jsxs)(n.p,{children:["\u0412 \u043E\u0442\u043A\u0440\u044B\u0432\u0448\u0435\u043C\u0441\u044F \u043E\u043A\u043D\u0435, \u0436\u043C\u0435\u043C ",(0,r.jsx)(n.code,{children:"+"})," \u0432 \u043B\u0435\u0432\u043E\u043C \u0432\u0435\u0440\u0445\u043D\u0435\u043C \u0443\u0433\u043B\u0443 \u0438 \u0432 \u0432\u044B\u043F\u0430\u0432\u0448\u0435\u043C \u0441\u043F\u0438\u0441\u043A\u0435 \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u043C ",(0,r.jsx)(n.code,{children:"lsFusion Server"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(12305).Z+"",width:"429",height:"356"})}),"\n",(0,r.jsx)(n.p,{children:"\u0417\u0430\u0434\u0430\u0435\u043C \u0438\u043C\u044F \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0438 \u043C\u043E\u0434\u0443\u043B\u044C (\u0435\u0441\u043B\u0438 \u0438\u0445 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E), \u0434\u043B\u044F \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0441\u0442\u0430\u0440\u0442\u043E\u0432\u0430\u0442\u044C \u0441\u0435\u0440\u0432\u0435\u0440 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439 lsFusion. \u0422\u0430\u043A\u0436\u0435 \u0432 \u044D\u0442\u043E\u043C \u043E\u043A\u043D\u0435, \u043F\u0440\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438, \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u0434\u0430\u0442\u044C \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u044B \u0441\u0431\u043E\u0440\u043A\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0430\u0434\u043E \u0432\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u043F\u0435\u0440\u0435\u0434 \u0437\u0430\u043F\u0443\u0441\u043A\u043E\u043C \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438, \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0432\u0438\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u043C\u0430\u0448\u0438\u043D\u044B Java, \u0438 \u0442.\u043F."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(12746).Z+"",width:"1076",height:"692"})}),"\n",(0,r.jsx)(n.h3,{id:"build",children:"\u0421\u0431\u043E\u0440\u043A\u0430 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F (\u0441\u043E \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u044B\u043C \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C)"}),"\n",(0,r.jsxs)(n.p,{children:["\u0414\u043B\u044F \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u0441\u043E\u0431\u0440\u0430\u0442\u044C \u0435\u0434\u0438\u043D\u044B\u0439 jar-\u0444\u0430\u0439\u043B, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u043A\u0430\u043A \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u044B\u0439 \u043A\u043E\u0434, \u0442\u0430\u043A \u0438 \u0441\u0430\u043C \u0441\u0435\u0440\u0432\u0435\u0440 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439, \u043C\u043E\u0436\u043D\u043E \u0432\u043E\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439 ",(0,r.jsx)(n.a,{href:"https://blog.jetbrains.com/idea/2010/08/quickly-create-jar-artifact/",children:"\u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0435\u0439"}),". \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u044B\u0439 jar-\u0444\u0430\u0439\u043B (",(0,r.jsx)(n.em,{children:"artifact"}),") \u043C\u043E\u0436\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0434\u043B\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043D\u0430 \u0440\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u043F\u0443\u043D\u043A\u0442\u043E\u043C ",(0,r.jsx)(n.a,{href:"/ru/v4/Execution_manual#appservice",children:"\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u0430"}),". \u041F\u0440\u0438 \u044D\u0442\u043E\u043C \u0442\u0430\u043A \u043A\u0430\u043A \u0432\u0441\u0435 \u043C\u043E\u0434\u0443\u043B\u0438 \u0438 \u0441\u0430\u043C \u0441\u0435\u0440\u0432\u0435\u0440 \u0431\u0443\u0434\u0443\u0442 \u0432\u043D\u0443\u0442\u0440\u0438 \u043E\u0434\u043D\u043E\u0433\u043E jar-\u0444\u0430\u0439\u043B\u0430, \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u043D\u0435\u043C\u043D\u043E\u0433\u043E \u043E\u0442\u043B\u0438\u0447\u0430\u0435\u0442\u0441\u044F:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u0432 \u043F\u0435\u0440\u0432\u043E\u043C \u043F\u0443\u043D\u043A\u0442\u0435 \u0432\u043C\u0435\u0441\u0442\u043E jar-\u0444\u0430\u0439\u043B\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u0438\u043C\u0435\u043D\u043D\u043E \u044D\u0442\u043E\u0442 \u0444\u0430\u0439\u043B"}),"\n",(0,r.jsx)(n.li,{children:"\u0442\u0440\u0435\u0442\u0438\u0439 \u043F\u0443\u043D\u043A\u0442 (\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0444\u0430\u0439\u043B\u043E\u0432 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440) \u043C\u043E\u0436\u043D\u043E \u043F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C"}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},16333:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/IDE_add_module-f96b6a90d6837c31f9ab841fd7512070.png"},12305:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/IDE_add_server-7899f167483b4e142fb7af0824724254.png"},12746:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/IDE_conf_name-16c8bb42e6a15191a116d9d00c625c46.png"},96886:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/IDE_create_project-213520422c6d0b41d9a366fb514ed100.png"},98017:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/IDE_edit_conf-6d4c9f2696d22cee17e04a988f440f32.png"},49664:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/IDE_project_name-07003f2b6fedfb885d369a1fbfd9efd6.png"},63581:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/IDE_project_type-0fd21524f5cbcc20e6c3e8d89112a5ec.png"},37053:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/IDE_run_command-2ce951636d580b6f84da92d0566d0f57.png"},83941:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/IDE_run_in_operationbar-328e1c6d1b0fa845c094f426403b1d9b.png"},43102:function(e,n,s){s.d(n,{Z:function(){return i}});let i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAWCAYAAAAinad/AAABkElEQVQ4Ee2UO0gDQRCG/9t75eFdxIhFilgYRII2tjZWCoKNgpUoSMDGFIpFqoCFjZWNjYWdjWAhpBMEiVYKIqJiE9TG+CgUTBC9nZWLEjizeQhpBAcGdnZ2vv13dlkln88LNMlYkzglzB+DjexMYuV4Da/vhV91QXrMQCiEo8Il5g7SOH08bxgohWk+Ez7bQtHkSJ+sYv1sEx/k1IVKYVwIQFWhB/wwbRuZ+yyS+2nkXm5rAuUwIjjEQQrATB2mHcSd8ozk4RK2rjIgQVJoFRgHpy93CxWVQQ/6oVl+bOS2sZhdxkPxqQIohTmcw+NEcLUww4BhteDi7QYzeynsXmc9QM0TfQdEVFImyymaq9IHw2AAUzxLpDCHHLBqtycE+qwYFrqn0OEL14eR2y9e+RQ0oWI6Oorx6DCY4lXlUqXKiBy4XjYBdAYiSPUk0GVFy9M/B3Vh7v5jkSEkYhPQmXR5mSnNus+BBEe71opUfBb94d5yQa2BFCa4g8G2AczHE7D0YK16T075/2k9/Wgk+ASZRpR4pMZctgAAAABJRU5ErkJggg=="},57128:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/IDE_welcome_screen-4a4a765ac64129f10a365ad7d971e4d9.png"},50065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return c}});var i=s(67294);let r={},t=i.createContext(r);function c(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);