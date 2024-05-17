"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[24721],{81911:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var l=r(74848),s=r(28453);const o={title:"How-to: CASE/IF/OVERRIDE"},d=void 0,a={id:"How-to_CASE_IF_OVERRIDE",title:"How-to: CASE/IF/OVERRIDE",description:"\u041f\u0440\u0438\u043c\u0435\u0440 1",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-v5/How-to_CASE_IF_OVERRIDE.md",sourceDirName:".",slug:"/How-to_CASE_IF_OVERRIDE",permalink:"/ru/How-to_CASE_IF_OVERRIDE",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/ru/How-to_CASE_IF_OVERRIDE.md",tags:[],version:"v5",lastUpdatedAt:1685108136e3,frontMatter:{title:"How-to: CASE/IF/OVERRIDE"},sidebar:"learn",previous:{title:"How-to: GROUP MAX/MIN/AGGR",permalink:"/ru/How-to_GROUP_MAX_MIN_AGGR"},next:{title:"How-to: GROUP LAST",permalink:"/ru/How-to_GROUP_LAST"}},t={},c=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440 1",id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 2",id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 3",id:"\u043f\u0440\u0438\u043c\u0435\u0440-3",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-2",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-2",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 4",id:"\u043f\u0440\u0438\u043c\u0435\u0440-4",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-3",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-3",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 5",id:"\u043f\u0440\u0438\u043c\u0435\u0440-5",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-4",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-4",level:3}];function i(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",children:"\u041f\u0440\u0438\u043c\u0435\u0440 1"}),"\n",(0,l.jsx)(n.h3,{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435",children:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"}),"\n",(0,l.jsx)(n.p,{children:"\u0415\u0441\u0442\u044c \u043d\u0430\u0431\u043e\u0440 \u043a\u043d\u0438\u0433, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0431\u0435\u043b\u044b\u043c\u0438 \u0438 \u0447\u0435\u0440\u043d\u044b\u043c\u0438."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lsf",children:"CLASS Color '\u0426\u0432\u0435\u0442' {\n    white '\u0411\u0435\u043b\u044b\u0439',\n    black '\u0427\u0435\u0440\u043d\u044b\u0439'\n}\n\nCLASS Book '\u041a\u043d\u0438\u0433\u0430';\n\ncolor '\u0426\u0432\u0435\u0442' = DATA Color (Book);\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u041d\u0443\u0436\u043d\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0446\u0432\u0435\u0442 \u043a\u043d\u0438\u0433\u0438."}),"\n",(0,l.jsx)(n.h3,{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lsf",children:"// \u0412\u0430\u0440\u0438\u0430\u043d\u0442 1\nnameColor1 '\u0426\u0432\u0435\u0442' (Book b) = staticCaption(color(b));\n\n// \u0412\u0430\u0440\u0438\u0430\u043d\u0442 2\nnameColor2 '\u0426\u0432\u0435\u0442' (Book b) = IF color(b) == Color.white THEN '\u0411\u0435\u043b\u044b\u0439' ELSE '\u0427\u0435\u0440\u043d\u044b\u0439';\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u044d\u0442\u0438 \u0434\u0432\u0430 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430 \u0438\u0434\u0435\u043d\u0442\u0438\u0447\u043d\u044b."}),"\n",(0,l.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",children:"\u041f\u0440\u0438\u043c\u0435\u0440 2"}),"\n",(0,l.jsx)(n.h3,{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1",children:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"}),"\n",(0,l.jsxs)(n.p,{children:["\u0415\u0441\u0442\u044c \u0437\u0430\u043a\u0430\u0437\u044b \u043d\u0430 \u043a\u043d\u0438\u0433\u0438 \u043f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u0430\u043c. \u0414\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0438\u0437 \u043d\u0438\u0445 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043e, \u0431\u044b\u043b \u043b\u0438 \u043e\u043d \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d \u043f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u0443, \u0441\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u043d \u0438 \u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d. \u0412 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u043e\u043d\u0438 \u0432\u0432\u0435\u0434\u0435\u043d\u044b \u043a\u0430\u043a ",(0,l.jsx)(n.a,{href:"/ru/Data_properties_DATA",children:"\u043f\u0435\u0440\u0432\u0438\u0447\u043d\u044b\u0435"})," \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430, \u043d\u043e \u0432 \u0431\u043e\u043b\u0435\u0435 \u0441\u043b\u043e\u0436\u043d\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445 \u043e\u043d\u0438 \u0431\u0443\u0434\u0443\u0442 \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u043c\u044b\u043c\u0438."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lsf",children:"CLASS Order '\u0417\u0430\u043a\u0430\u0437';\n\nsent '\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d' = DATA BOOLEAN (Order);\nagreed '\u0421\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u043d' = DATA BOOLEAN (Order);\naccepted '\u041f\u0440\u0438\u043d\u044f\u0442' = DATA BOOLEAN (Order);\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043a\u0430\u0437\u0430."}),"\n",(0,l.jsx)(n.h3,{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1",children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lsf",children:"// \u0412\u0430\u0440\u0438\u0430\u043d\u0442 1\nnameStatus1 '\u0421\u0442\u0430\u0442\u0443\u0441' (Order o) = CASE WHEN accepted(o) THEN '\u041f\u0440\u0438\u043d\u044f\u0442'\n                                     WHEN agreed(o) THEN '\u0421\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u043d'\n                                     WHEN sent(o) THEN '\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d'\n                                ELSE '\u041d\u043e\u0432\u044b\u0439';\n\n// \u0412\u0430\u0440\u0438\u0430\u043d\u0442 2\nCLASS Status '\u0421\u0442\u0430\u0442\u0443\u0441' {\n    new '\u041d\u043e\u0432\u044b\u0439',\n    sent '\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d',\n    agreed '\u0421\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u043d',\n    accepted '\u041f\u0440\u0438\u043d\u044f\u0442'\n}\n\nstatus '\u0421\u0442\u0430\u0442\u0443\u0441' (Order o) = CASE WHEN accepted(o) THEN Status.accepted\n                                 WHEN agreed(o) THEN Status.agreed\n                                 WHEN sent(o) THEN Status.sent\n                            ELSE Status.new;\nnameStatus2 '\u0421\u0442\u0430\u0442\u0443\u0441' (Order o) = staticCaption(status(o));\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-3",children:"\u041f\u0440\u0438\u043c\u0435\u0440 3"}),"\n",(0,l.jsx)(n.h3,{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-2",children:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"}),"\n",(0,l.jsxs)(n.p,{children:["\u0415\u0441\u0442\u044c \u043d\u0430\u0431\u043e\u0440 \u043a\u043d\u0438\u0433, \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e ",(0,l.jsx)(n.a,{href:"#%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80-1",children:(0,l.jsx)(n.strong,{children:"\u041f\u0440\u0438\u043c\u0435\u0440\u0443 1"})}),"."]}),"\n",(0,l.jsx)(n.p,{children:"\u041d\u0443\u0436\u043d\u043e \u0437\u0430\u0434\u0430\u0442\u044c \u0434\u043b\u044f \u043a\u043d\u0438\u0433\u0438 \u0442\u043e\u0440\u0433\u043e\u0432\u0443\u044e \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0443, \u043d\u043e \u0447\u0442\u043e\u0431\u044b \u043c\u043e\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u0437\u0430\u0434\u0430\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e."}),"\n",(0,l.jsx)(n.h3,{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-2",children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lsf",children:"dataMarkup '\u041d\u0430\u0434\u0431\u0430\u0432\u043a\u0430, %' = DATA NUMERIC[6,2] (Book);\n\ndefaultMarkup '\u041d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e' = DATA NUMERIC[6,2] ();\n\nmarkup1 '\u041d\u0430\u0434\u0431\u0430\u0432\u043a\u0430, %' (Book b) = OVERRIDE dataMarkup(b), defaultMarkup();\n\n// \u042d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u043e :\nmarkup2 '\u041d\u0430\u0434\u0431\u0430\u0432\u043a\u0430, %' (Book b) = IF dataMarkup(b) THEN dataMarkup(b) ELSE defaultMarkup();\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-4",children:"\u041f\u0440\u0438\u043c\u0435\u0440 4"}),"\n",(0,l.jsx)(n.h3,{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-3",children:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"}),"\n",(0,l.jsxs)(n.p,{children:["\u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u0435\u043d ",(0,l.jsx)(n.a,{href:"#%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80-3",children:(0,l.jsx)(n.strong,{children:"\u041f\u0440\u0438\u043c\u0435\u0440\u0443 3"})}),", \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u043a\u043d\u0438\u0433\u0438 \u0437\u0430\u0434\u0430\u043d\u0430 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lsf",children:"CLASS Category '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f';\n\ncategory '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f' = DATA Category (Book);\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u041d\u0443\u0436\u043d\u043e \u0437\u0430\u0434\u0430\u0442\u044c \u0434\u043b\u044f \u043a\u043d\u0438\u0433\u0438 \u0442\u043e\u0440\u0433\u043e\u0432\u0443\u044e \u043d\u0430\u0434\u0431\u0430\u0432\u043a\u0443, \u043d\u043e \u0447\u0442\u043e\u0431\u044b \u043c\u043e\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u0437\u0430\u0434\u0430\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0434\u043b\u044f \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438, \u043a \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043e\u043d\u0430 \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0441\u044f."}),"\n",(0,l.jsx)(n.h3,{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-3",children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lsf",children:"markup '\u041d\u0430\u0434\u0431\u0430\u0432\u043a\u0430, %' = DATA NUMERIC[6,2] (Category);\n\nmarkup '\u041d\u0430\u0434\u0431\u0430\u0432\u043a\u0430, %' (Book b) = OVERRIDE dataMarkup(b), markup(category(b));\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-5",children:"\u041f\u0440\u0438\u043c\u0435\u0440 5"}),"\n",(0,l.jsx)(n.h3,{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-4",children:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"}),"\n",(0,l.jsx)(n.p,{children:"\u0415\u0441\u0442\u044c \u043d\u0430\u0431\u043e\u0440 \u043a\u043d\u0438\u0433, \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0437\u0430\u0434\u0430\u043d \u043d\u043e\u043c\u0435\u0440."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lsf",children:"number '\u041d\u043e\u043c\u0435\u0440' = DATA INTEGER (Book);\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u041d\u0443\u0436\u043d\u043e \u043d\u0430\u0439\u0442\u0438 \u043d\u043e\u043c\u0435\u0440, \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0437\u0430 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u043c."}),"\n",(0,l.jsx)(n.h3,{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-4",children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lsf",children:"freeNumber1 () = (GROUP MAX number(Book b)) (+) 1;\n\n// \u042d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u043e :\nfreeNumber2() = (OVERRIDE 0, (GROUP MAX number(Book b))) + 1;\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 ",(0,l.jsx)(n.code,{children:"(+)"})," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432\u043c\u0435\u0441\u0442\u043e \u043e\u0431\u044b\u0447\u043d\u043e\u0433\u043e \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 ",(0,l.jsx)(n.code,{children:"+"}),", \u0442\u0430\u043a \u043a\u0430\u043a \u0435\u0441\u043b\u0438 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u043d\u0438 \u043e\u0434\u043d\u043e\u0439 \u043a\u043d\u0438\u0433\u0438, \u0442\u043e \u043e\u0431\u044b\u0447\u043d\u043e\u0435 \u0441\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0441 \u0435\u0434\u0438\u043d\u0438\u0446\u0435\u0439 \u0432\u0435\u0440\u043d\u0435\u0442 ",(0,l.jsx)(n.code,{children:"NULL"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(i,{...e})}):i(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>a});var l=r(96540);const s={},o=l.createContext(s);function d(e){const n=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),l.createElement(o.Provider,{value:n},e.children)}}}]);