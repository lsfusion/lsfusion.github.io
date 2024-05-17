"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[33689],{87538:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=r(74848),s=r(28453);const i={title:"\u0412 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u043c \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0438 (EXPORT, IMPORT)"},d=void 0,c={id:"In_a_structured_view_EXPORT_IMPORT",title:"\u0412 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u043c \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0438 (EXPORT, IMPORT)",description:"\u042d\u0442\u043e\u0442 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u0441\u043e\u0437\u0434\u0430\u0435\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0435\u0442 \u0444\u043e\u0440\u043c\u0443 \u0432 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u043c \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0438.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/In_a_structured_view_EXPORT_IMPORT.md",sourceDirName:".",slug:"/In_a_structured_view_EXPORT_IMPORT",permalink:"/ru/next/In_a_structured_view_EXPORT_IMPORT",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/ru/In_a_structured_view_EXPORT_IMPORT.md",tags:[],version:"current",lastUpdatedAt:1623249583e3,frontMatter:{title:"\u0412 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u043c \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0438 (EXPORT, IMPORT)"},sidebar:"learn",previous:{title:"\u0412 \u043f\u0435\u0447\u0430\u0442\u043d\u043e\u043c \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0438 (PRINT)",permalink:"/ru/next/In_a_print_view_PRINT"},next:{title:"\u041d\u0430\u0432\u0438\u0433\u0430\u0442\u043e\u0440",permalink:"/ru/next/Navigator"}},o={},l=[{value:"\u0424\u043e\u0440\u043c\u0430\u0442",id:"format",level:3},{value:"\u0418\u043c\u043f\u043e\u0440\u0442 \u0444\u043e\u0440\u043c\u044b",id:"importForm",level:3},{value:"\u042f\u0437\u044b\u043a",id:"\u044f\u0437\u044b\u043a",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:3}];function u(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["\u042d\u0442\u043e\u0442 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u0441\u043e\u0437\u0434\u0430\u0435\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 ",(0,t.jsx)(n.a,{href:"/ru/next/Open_form",children:"\u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0435\u0442 \u0444\u043e\u0440\u043c\u0443"})," \u0432 ",(0,t.jsx)(n.a,{href:"/ru/next/Structured_view",children:"\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u043c"})," \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0438."]}),"\n",(0,t.jsx)(n.h3,{id:"format",children:"\u0424\u043e\u0440\u043c\u0430\u0442"}),"\n",(0,t.jsxs)(n.p,{children:["\u0412 \u044d\u0442\u043e\u043c \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0435 \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u0434\u0430\u0442\u044c \u0444\u043e\u0440\u043c\u0430\u0442, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0443\u0442 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u044b \u0434\u0430\u043d\u043d\u044b\u0435 \u0444\u043e\u0440\u043c\u044b :  ",(0,t.jsx)(n.strong,{children:"XML"}),", ",(0,t.jsx)(n.strong,{children:"JSON"}),", ",(0,t.jsx)(n.strong,{children:"DBF"}),", ",(0,t.jsx)(n.strong,{children:"CSV"}),", ",(0,t.jsx)(n.strong,{children:"XLS"}),", \u043f\u043e\u0441\u043b\u0435 \u0447\u0435\u0433\u043e \u0441\u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b(\u044b) \u0432 \u044d\u0442\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435 \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0432 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e."]}),"\n",(0,t.jsxs)(n.p,{children:["\u042d\u043a\u0441\u043f\u043e\u0440\u0442 \u0444\u043e\u0440\u043c\u044b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0431\u0449\u0438\u043c \u0441\u043b\u0443\u0447\u0430\u0435\u043c \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 ",(0,t.jsx)(n.a,{href:"/ru/next/Data_export_EXPORT",children:"\u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0430 \u0434\u0430\u043d\u043d\u044b\u0445"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"importForm",children:"\u0418\u043c\u043f\u043e\u0440\u0442 \u0444\u043e\u0440\u043c\u044b"}),"\n",(0,t.jsx)(n.p,{children:"\u0418\u043c\u043f\u043e\u0440\u0442 \u0444\u043e\u0440\u043c\u044b - \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \u043e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u044e \u0444\u043e\u0440\u043c\u044b \u0432 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u043c \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0438. \u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u0438\u043c\u043f\u043e\u0440\u0442\u0430 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u043d\u0430 \u0432\u0445\u043e\u0434 \u0444\u0430\u0439\u043b(\u044b) \u0432 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435, \u043f\u043e\u0441\u043b\u0435 \u0447\u0435\u0433\u043e \u0440\u0430\u0437\u0431\u0438\u0440\u0430\u0435\u0442 \u0435\u0433\u043e (\u0438\u0445) \u0438 \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u044b, \u0442\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0435 \u044d\u0442\u043e\u0439 \u0444\u043e\u0440\u043c\u044b \u043d\u0430\u0437\u0430\u0434 \u0432 \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u0444\u0430\u0439\u043b."}),"\n",(0,t.jsx)(n.p,{children:'\u0422\u0430\u043a \u043a\u0430\u043a \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u0438\u043c\u043f\u043e\u0440\u0442\u0430 \u044d\u0442\u043e \u043f\u043e \u0441\u0443\u0442\u0438 "\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u0432\u0432\u043e\u0434\u0430", \u043d\u0430 \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c\u0443\u044e \u0444\u043e\u0440\u043c\u0443 \u043d\u0430\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f:'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u0412\u0441\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u0444\u043e\u0440\u043c\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c ",(0,t.jsx)(n.a,{href:"/ru/next/Built-in_classes#inheritance",children:"\u0447\u0438\u0441\u043b\u043e\u0432\u044b\u0445"})," \u0438\u043b\u0438 ",(0,t.jsx)(n.a,{href:"/ru/next/User_classes#abstract",children:"\u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u0445"})," ",(0,t.jsx)(n.a,{href:"/ru/next/User_classes",children:"\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0445"})," \u043a\u043b\u0430\u0441\u0441\u043e\u0432, \u043f\u0440\u0438\u0447\u0435\u043c \u0433\u0440\u0443\u043f\u043f\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0440\u043e\u0432\u043d\u043e \u0438\u0437 \u043e\u0434\u043d\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430 (\u044d\u0442\u043e \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435 \u0432\u044b\u0442\u0435\u043a\u0430\u0435\u0442 \u0438\u0437 \u0442\u043e\u0433\u043e \u0447\u0442\u043e \u0432\u0441\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u0444\u043e\u0440\u043c\u0430\u0442\u044b \u044d\u0442\u043e \u043f\u043e \u0441\u0443\u0442\u0438 \u0441\u043f\u0438\u0441\u043a\u0438, \u0442\u043e \u0435\u0441\u0442\u044c \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0447\u0438\u0441\u0435\u043b \u043d\u0430 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f)."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u043d\u0430 \u0444\u043e\u0440\u043c\u0435 \u0438 ",(0,t.jsx)(n.a,{href:"/ru/next/Form_structure#filters",children:"\u0444\u0438\u043b\u044c\u0442\u0440\u044b"})," \u0434\u043e\u043b\u0436\u043d\u044b \u0438\u043c\u0435\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c ",(0,t.jsx)(n.a,{href:"/ru/next/Property_change_CHANGE",children:"\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f"})," \u043d\u0430 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 (\u0442\u043e \u0435\u0441\u0442\u044c, \u043a\u0430\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u043e, \u0431\u044b\u0442\u044c ",(0,t.jsx)(n.a,{href:"/ru/next/Data_properties_DATA",children:"\u043f\u0435\u0440\u0432\u0438\u0447\u043d\u044b\u043c\u0438"}),"). \u041f\u0435\u0440\u0435\u0434 \u0438\u043c\u043f\u043e\u0440\u0442\u043e\u043c \u0432\u0441\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c\u044b\u0445 \u0441\u0432\u043e\u0439\u0441\u0442\u0432 \u0432 \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0441\u0435\u0441\u0441\u0438\u0438 \u043e\u0442\u043c\u0435\u043d\u044f\u044e\u0442\u0441\u044f."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u0424\u0438\u043b\u044c\u0442\u0440\u044b \u043f\u0440\u0438 \u0438\u043c\u043f\u043e\u0440\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u044f\u044e\u0442\u0441\u044f \u043d\u0430 ",(0,t.jsx)(n.a,{href:"/ru/next/Built-in_classes#defaultvalue",children:"\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e"})," \u043a\u043b\u0430\u0441\u0441\u043e\u0432 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u044d\u0442\u0438\u0445 \u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432."]}),"\n",(0,t.jsxs)(n.p,{children:["\u041f\u0440\u0438 \u0438\u043c\u043f\u043e\u0440\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u0447\u0438\u0441\u043b\u043e\u0432\u044b\u0445 \u043a\u043b\u0430\u0441\u0441\u043e\u0432 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f 0-based \u043d\u0443\u043c\u0435\u0440\u0430\u0446\u0438\u044f, \u043f\u0440\u0438\u0447\u0435\u043c \u0432 ",(0,t.jsx)(n.a,{href:"/ru/next/Structured_view#hierarchy",children:"\u0438\u0435\u0440\u0430\u0440\u0445\u0438\u0447\u043d\u044b\u0445"}),' \u0444\u043e\u0440\u043c\u0430\u0442\u0430\u0445 \u043e\u043d\u0430 "\u0441\u043a\u0432\u043e\u0437\u043d\u0430\u044f" (\u0442\u043e \u0435\u0441\u0442\u044c \u043a\u043e\u0433\u0434\u0430 \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u0435\u0442\u0441\u044f \u0432\u0442\u043e\u0440\u043e\u0439 \u0438 \u043f\u043e\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0440\u0430\u0437\u044b, \u043d\u0443\u043c\u0435\u0440\u0430\u0446\u0438\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0432 \u043d\u0435\u0439 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u0442\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0430\u0441\u044c \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0430\u044f).']}),"\n",(0,t.jsxs)(n.p,{children:["\u041f\u0440\u0438 \u0438\u043c\u043f\u043e\u0440\u0442\u0435 \u0438\u0437 XLS \u0438 CSV \u0431\u0435\u0437 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u043e\u0432 (\u0441 \u043e\u043f\u0446\u0438\u0435\u0439 ",(0,t.jsx)(n.code,{children:"NOHEADER"}),"), \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 \u043f\u044b\u0442\u0430\u0435\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043a \u0442\u0440\u0435\u0431\u0443\u0435\u043c\u043e\u043c\u0443 \u0442\u0438\u043f\u0443. \u0415\u0441\u043b\u0438 \u044d\u0442\u043e \u043d\u0435 \u0443\u0434\u0430\u0435\u0442\u0441\u044f, \u0432 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,t.jsx)(n.code,{children:"NULL"}),". \u0418\u043c\u043f\u043e\u0440\u0442\u044b \u0438\u0437 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u0444\u043e\u0440\u043c\u0430\u0442\u043e\u0432 \u0442\u0440\u0435\u0431\u0443\u044e\u0442 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0435 \u0442\u0438\u043f\u044b. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0435\u0441\u043b\u0438 \u043f\u0440\u0438 \u0438\u043c\u043f\u043e\u0440\u0442\u0435 \u0438\u0437 JSON \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0441\u0442\u0440\u043e\u043a\u0430, \u0430 \u0432 JSON \u0431\u0443\u0434\u0435\u0442 \u0447\u0438\u0441\u043b\u043e (\u0442\u043e \u0435\u0441\u0442\u044c \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u043a\u0430\u0432\u044b\u0447\u0435\u043a), \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 \u0432\u044b\u0434\u0430\u0441\u0442 \u043e\u0448\u0438\u0431\u043a\u0443."]}),"\n",(0,t.jsxs)(n.p,{children:["\u0415\u0441\u043b\u0438 \u043f\u0440\u0438 \u0438\u043c\u043f\u043e\u0440\u0442\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e (\u0433\u0440\u0443\u043f\u043f\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432) \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e, \u043e\u043d\u043e \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f (\u0442\u043e \u0435\u0441\u0442\u044c \u0435\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043e\u0441\u0442\u0430\u0435\u0442\u0441\u044f \u0440\u0430\u0432\u043d\u044b\u043c ",(0,t.jsx)(n.code,{children:"NULL"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["\u0418\u043c\u043f\u043e\u0440\u0442 \u0444\u043e\u0440\u043c\u044b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0431\u0449\u0438\u043c \u0441\u043b\u0443\u0447\u0430\u0435\u043c \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 ",(0,t.jsx)(n.a,{href:"/ru/next/Data_import_IMPORT",children:"\u0438\u043c\u043f\u043e\u0440\u0442\u0430 \u0434\u0430\u043d\u043d\u044b\u0445"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"\u044f\u0437\u044b\u043a",children:"\u042f\u0437\u044b\u043a"}),"\n",(0,t.jsxs)(n.p,{children:["\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u044f \u0444\u043e\u0440\u043c\u044b \u0432 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u043c \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f ",(0,t.jsxs)(n.a,{href:"/ru/next/EXPORT_operator",children:["\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u043e\u043c ",(0,t.jsx)(n.code,{children:"EXPORT"})]}),". \u0414\u043b\u044f \u0438\u043c\u043f\u043e\u0440\u0442\u0430 \u0444\u043e\u0440\u043c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f ",(0,t.jsxs)(n.a,{href:"/ru/next/IMPORT_operator",children:["\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 ",(0,t.jsx)(n.code,{children:"IMPORT"})]}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"FORM exportSku\n    OBJECTS st = Store\n\n    OBJECTS s = Sku\n    PROPERTIES(s) id, name, weight\n    FILTERS in(st, s)\n;\n\nexportSku (Store store)  {\n    // \u0432\u044b\u0433\u0440\u0443\u0436\u0430\u0435\u043c \u0432 DBF \u0432\u0441\u0435 Sku, \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0437\u0430\u0434\u0430\u043d\u043e in (Store, Sku) \u0434\u043b\u044f \u043d\u0443\u0436\u043d\u043e\u0433\u043e \u0441\u043a\u043b\u0430\u0434\u0430\n    EXPORT exportSku OBJECTS st = store DBF CHARSET 'CP866';\n    EXPORT exportSku XML;\n    EXPORT exportSku OBJECTS st = store CSV ',';\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"\ndate = DATA DATE (INTEGER);\nsku = DATA BPSTRING[50] (INTEGER);\nprice = DATA NUMERIC[14,2] (INTEGER);\norder = DATA INTEGER (INTEGER);\nFORM import\n    OBJECTS o = INTEGER // \u0437\u0430\u043a\u0430\u0437\u044b\n    OBJECTS od = INTEGER // \u0441\u0442\u0440\u043e\u043a\u0438 \u0437\u0430\u043a\u0430\u0437\u043e\u0432\n    PROPERTIES (o) dateOrder = date // \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c \u0434\u0430\u0442\u0443 \u0438\u0437 \u043f\u043e\u043b\u044f dateOrder\n    PROPERTIES (od) sku = sku, price = price // \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c \u0442\u043e\u0432\u0430\u0440 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439 sku \u0438 price\n    FILTERS order(od) = o // \u0432 order - \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u043c \u0432\u0435\u0440\u0445\u043d\u0438\u0439 \u0437\u0430\u043a\u0430\u0437\n\n;\n\nimportForm()  {\n    INPUT f = FILE DO {\n        IMPORT import JSON FROM f;\n        SHOW import; // \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c \u0447\u0442\u043e \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043b\u043e\u0441\u044c\n\n        // \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u0432 \u0431\u0430\u0437\u0435\n        FOR DATE date = date(INTEGER io) NEW o = Order DO {\n            date(o) <- date;\n            FOR order(INTEGER iod) = io NEW od = OrderDetail DO {\n                price(od) <- price(iod);\n                sku(od) <- GROUP MAX Sku sku IF name(sku) = sku(iod); // \u043d\u0430\u0445\u043e\u0434\u0438\u043c sku \u0441 \u0434\u0430\u043d\u043d\u044b\u043c \u0438\u043c\u0435\u043d\u0435\u043c\n            }\n        }\n    }\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>c});var t=r(96540);const s={},i=t.createContext(s);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);