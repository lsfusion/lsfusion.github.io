"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[96726],{6681:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=i(74848),o=i(28453);const s={title:"\u0420\u0435\u043a\u0443\u0440\u0441\u0438\u044f (RECURSION)"},t=void 0,l={id:"Recursion_RECURSION",title:"\u0420\u0435\u043a\u0443\u0440\u0441\u0438\u044f (RECURSION)",description:"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u0440\u0435\u043a\u0443\u0440\u0441\u0438\u0438 - \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440, \u0441\u043e\u0437\u0434\u0430\u044e\u0449\u0438\u0439 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u0434\u0432\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438:",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-v4/Recursion_RECURSION.md",sourceDirName:".",slug:"/Recursion_RECURSION",permalink:"/ru/v4/Recursion_RECURSION",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/ru/Recursion_RECURSION.md",tags:[],version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"9 \u0438\u044e\u043d. 2021 \u0433.",frontMatter:{title:"\u0420\u0435\u043a\u0443\u0440\u0441\u0438\u044f (RECURSION)"},sidebar:"learn",previous:{title:"\u0420\u0430\u0437\u0431\u0438\u0435\u043d\u0438\u0435 / \u0423\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0432\u0430\u043d\u0438\u0435 (PARTITION ... ORDER)",permalink:"/ru/v4/Partitioning_sorting_PARTITION_..._ORDER"},next:{title:"\u0420\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 (UNGROUP)",permalink:"/ru/v4/Distribution_UNGROUP"}},c={},d=[{value:"\u042f\u0437\u044b\u043a",id:"\u044f\u0437\u044b\u043a",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:3}];function a(e){const n={a:"a",code:"code",em:"em",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 ",(0,r.jsx)(n.em,{children:"\u0440\u0435\u043a\u0443\u0440\u0441\u0438\u0438"})," - \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440, \u0441\u043e\u0437\u0434\u0430\u044e\u0449\u0438\u0439 ",(0,r.jsx)(n.a,{href:"/ru/v4/Properties",children:"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"}),", \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u0434\u0432\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u0420\u0435\u043a\u0443\u0440\u0441\u0438\u0432\u043d\u043e \u0441\u0442\u0440\u043e\u0438\u0442 \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u043e\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e (result) \u0441 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u043f\u0435\u0440\u0432\u044b\u043c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u043c (\u043d\u043e\u043c\u0435\u0440\u043e\u043c \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438) \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c:","\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"result(0, o1, o2, ..., oN) = initial(o1, ..., oN)"}),", \u0433\u0434\u0435 ",(0,r.jsx)(n.code,{children:"initial"})," - ",(0,r.jsx)(n.em,{children:"\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0435"})," \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"result(i+1, o1, o2, ..., oN) = step(o1, ..., oN, $o1, $o2, ..., $oN) IF result(i, $o1, $o2, ..., $oN)"}),", \u0433\u0434\u0435 ",(0,r.jsx)(n.code,{children:"step"})," - \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e ",(0,r.jsx)(n.em,{children:"\u0448\u0430\u0433\u0430"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u0414\u043b\u044f \u0432\u0441\u0435\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u043e\u0433\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u0437\u0430\u0434\u0430\u043d\u043d\u0443\u044e ",(0,r.jsx)(n.a,{href:"/ru/v4/Set_operations#func",children:"\u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u044e\u0449\u0443\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u044e"})," \u0432 \u0440\u0430\u0437\u0440\u0435\u0437\u0435 \u0432\u0441\u0435\u0445 \u0435\u0433\u043e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432, \u0437\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c \u043d\u043e\u043c\u0435\u0440\u0430 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u041d\u0430 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u0440\u0435\u043a\u0443\u0440\u0441\u0438\u0438 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u0432\u0430 \u0432\u0438\u0434\u0430 \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u044e\u0449\u0438\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439 - ",(0,r.jsx)(n.code,{children:"SUM"})," \u0438 ",(0,r.jsx)(n.code,{children:"OR"}),". \u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432 \u0441\u043b\u0443\u0447\u0430\u0435, \u043a\u043e\u0433\u0434\u0430 \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0438 \u0448\u0430\u0433 \u043a\u043b\u0430\u0441\u0441\u0430 ",(0,r.jsx)(n.code,{children:"BOOLEAN"}),". ",(0,r.jsx)(n.code,{children:"SUM"})," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432\u043e \u0432\u0441\u0435\u0445 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445."]}),"\n",(0,r.jsx)(n.p,{children:"\u041e\u0442\u043c\u0435\u0442\u0438\u043c, \u0447\u0442\u043e \u043d\u0430 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0438 \u043d\u0430\u0431\u043e\u0440\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043c\u043e\u0433\u0443\u0442 \u043d\u0430\u0447\u0430\u0442\u044c \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u0442\u044c\u0441\u044f. \u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0431\u0443\u0434\u0435\u043c \u0433\u043e\u0432\u043e\u0440\u0438\u0442\u044c \u0447\u0442\u043e \u043e\u0431\u0440\u0430\u0437\u0443\u0435\u0442\u0441\u044f \u0446\u0438\u043a\u043b. \u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0442\u0440\u0438 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0446\u0438\u043a\u043b\u0430\u043c\u0438:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"CYCLES YES"})," - \u0446\u0438\u043a\u043b\u044b \u0434\u043e\u043f\u0443\u0441\u043a\u0430\u044e\u0442\u0441\u044f. \u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u043f\u0440\u0438 \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u0438\u0438 \u0446\u0438\u043a\u043b\u0430 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0432\u043d\u043e \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e\u043c\u0443 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044e \u0434\u043b\u044f \u043a\u043b\u0430\u0441\u0441\u0430 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u044d\u0442\u043e\u0433\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430. \u0422\u0430\u043a\u0430\u044f \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f, \u043a\u043e\u0433\u0434\u0430 \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0438 \u0448\u0430\u0433 \u043a\u043b\u0430\u0441\u0441\u0430 ",(0,r.jsx)(n.code,{children:"BOOLEAN"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"CYCLES NO"})," (\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e) - \u0446\u0438\u043a\u043b\u044b \u043d\u0435 \u0434\u043e\u043f\u0443\u0441\u043a\u0430\u044e\u0442\u0441\u044f. \u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0439 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0435, \u043d\u043e \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435, \u0447\u0442\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u043e\u0433\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0440\u0430\u0432\u043d\u043e \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u043c\u0443 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044e (\u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043a\u0430\u043a \u0440\u0430\u0437 \u0438 \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u0434\u043b\u044f \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u043d\u0430\u0431\u043e\u0440\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043b\u0441\u044f \u0446\u0438\u043a\u043b)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"CYCLES IMPOSSIBLE"})," - \u0446\u0438\u043a\u043b\u044b \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b. \u041a\u0430\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u043e, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f, \u0435\u0441\u043b\u0438 \u0441\u0440\u0435\u0434\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0435\u0441\u0442\u044c \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u0447\u0435\u0442\u0447\u0438\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0430 \u043a\u0430\u0436\u0434\u043e\u0439 \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0438 \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0438, \u043a\u0430\u043a \u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0438\u0435, \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c\u0441\u044f \u043d\u0435 \u043c\u043e\u0436\u0435\u0442."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u041f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u0440\u0435\u043a\u0443\u0440\u0441\u0438\u0438 \u0432\u0430\u0436\u043d\u043e \u0443\u0434\u043e\u0441\u0442\u043e\u0432\u0435\u0440\u0438\u0442\u044c\u0441\u044f \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e \u0440\u0435\u043a\u0443\u0440\u0441\u0438\u0432\u043d\u043e\u0435 \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438 \u0431\u0443\u0434\u0435\u0442 \u043a\u043e\u043d\u0435\u0447\u043d\u043e, \u0442\u043e \u0435\u0441\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0448\u0430\u0433\u0430 \u0440\u0430\u043d\u043e \u0438\u043b\u0438 \u043f\u043e\u0437\u0434\u043d\u043e \u0441\u0442\u0430\u043d\u0435\u0442 ",(0,r.jsx)(n.code,{children:"NULL"})," (\u043a\u0430\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u043e, \u0440\u0435\u0447\u044c \u0438\u0434\u0435\u0442 \u043e \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0435 ",(0,r.jsx)(n.code,{children:"CYCLES IMPOSSIBLE"}),", \u0442\u0430\u043a \u043a\u0430\u043a \u0432 \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0440\u0435\u043a\u0443\u0440\u0441\u0438\u044f \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u043f\u0440\u0438 \u043f\u0435\u0440\u0432\u043e\u043c \u043d\u0430\u0439\u0434\u0435\u043d\u043d\u043e\u043c \u0446\u0438\u043a\u043b\u0435). \u0415\u0441\u043b\u0438 \u044d\u0442\u043e \u0443\u0441\u043b\u043e\u0432\u0438\u0435 \u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e, \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0438\u043d\u0443\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0430 \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a SQL \u0441\u0435\u0440\u0432\u0435\u0440\u0430."]}),"\n",(0,r.jsx)(n.h3,{id:"\u044f\u0437\u044b\u043a",children:"\u042f\u0437\u044b\u043a"}),"\n",(0,r.jsxs)(n.p,{children:["\u0414\u043b\u044f \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430, \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u044e\u0449\u0435\u0433\u043e \u0440\u0435\u043a\u0443\u0440\u0441\u0438\u044e, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f ",(0,r.jsxs)(n.a,{href:"/ru/v4/RECURSION_operator",children:["\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 ",(0,r.jsx)(n.code,{children:"RECURSION"})]}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"CLASS Node;\nedge = DATA BOOLEAN (Node, Node);\n\n// \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u043e integer \u043e\u0442 from \u043a to (\u044d\u0442\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0432\u0445\u043e\u0434\u0438\u0442 \u0432 \u043c\u043e\u0434\u0443\u043b\u044c System)\niterate(i, from, to) = RECURSION i==from AND from IS INTEGER AND to IS INTEGER STEP i==$i+1 AND i<=to CYCLES IMPOSSIBLE;\n\n// \u0441\u0447\u0438\u0442\u0430\u0435\u0442 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u043f\u0443\u0442\u0435\u0439 \u043e\u0442 a \u0434\u043e b \u0432 \u0433\u0440\u0430\u0444\u0435\npathes '\u041a\u043e\u043b-\u0432\u043e \u043f\u0443\u0442\u0435\u0439' (a, b) = RECURSION 1 AND a IS Node AND b==a STEP 1 IF edge(b, $b);\n\n// \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u043d\u0430 \u043a\u0430\u043a\u043e\u043c \u0443\u0440\u043e\u0432\u043d\u0435 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f child \u043e\u0442 parent, \u0438 null \u0435\u0441\u043b\u0438 \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u043e\u0442\u043e\u043c\u043a\u043e\u043c (\u0442\u0435\u043c \u0441\u0430\u043c\u044b\u043c \u044d\u0442\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0432\u0441\u0435\u0445 child'\u043e\u0432)\nparent = DATA Group (Group);\nlevel '\u0423\u0440\u043e\u0432\u0435\u043d\u044c' (Group child, Group parent) = RECURSION 1 IF child IS Group AND parent == child\n                                                                  STEP 1 IF parent == parent($parent);\n\n// \u0447\u0438\u0441\u043b\u0430 \u0424\u0438\u0431\u043e\u043d\u0430\u0447\u0447\u0438, \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u0432\u044b\u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u0442 \u0432\u0441\u0435 \u0447\u0438\u0441\u043b\u0430 \u0424\u0438\u0431\u043e\u043d\u0430\u0447\u0438 \u0434\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f to, (\u043f\u043e\u0441\u043b\u0435 \u0431\u0443\u0434\u0435\u0442 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044c null)\nfib(i, to) = RECURSION 1 IF (i==0 OR i==1) AND to IS INTEGER STEP 1 IF (i==$i+1 OR i==$i+2) AND i<to CYCLES IMPOSSIBLE;\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>l});var r=i(96540);const o={},s=r.createContext(o);function t(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);