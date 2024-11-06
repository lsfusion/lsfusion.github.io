"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[46207],{29462:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>i,frontMatter:()=>s,metadata:()=>a,toc:()=>E});var r=o(74848),t=o(28453);const s={title:"How-to: SEEK"},c=void 0,a={id:"How-to_SEEK",title:"How-to: SEEK",description:"\u041f\u0440\u0438\u043c\u0435\u0440 1",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/How-to_SEEK.md",sourceDirName:".",slug:"/How-to_SEEK",permalink:"/ru/How-to_SEEK",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/ru/How-to_SEEK.md",tags:[],version:"current",lastUpdatedAt:1623249583e3,frontMatter:{title:"How-to: SEEK"},sidebar:"learn",previous:{title:"How-to: NEWSESSION",permalink:"/ru/How-to_NEWSESSION"},next:{title:"How-to: \u0421\u043e\u0431\u044b\u0442\u0438\u044f",permalink:"/ru/How-to_Events"}},l={},E=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440 1",id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 2",id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 3",id:"\u043f\u0440\u0438\u043c\u0435\u0440-3",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-2",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-2",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",children:"\u041f\u0440\u0438\u043c\u0435\u0440 1"}),"\n",(0,r.jsx)(n.h3,{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435",children:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"}),"\n",(0,r.jsx)(n.p,{children:"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0430 \u043b\u043e\u0433\u0438\u043a\u0430 \u043a\u043d\u0438\u0433 \u0438 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439. \u0421\u043e\u0437\u0434\u0430\u043d\u0430 \u0444\u043e\u0440\u043c\u0430 \u0441\u043e \u0441\u043f\u0438\u0441\u043a\u043e\u043c \u043a\u043d\u0438\u0433, \u0440\u0430\u0437\u0431\u0438\u0442\u044b\u0445 \u043f\u043e \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f\u043c."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"REQUIRE Time;\n\nCLASS Category '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f';\nname '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435' = DATA ISTRING[50] (Category) IN id;\n\nCLASS Book '\u041a\u043d\u0438\u0433\u0430';\nname '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435' = DATA ISTRING[50] (Book) IN id;\n\ncategory '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f' = DATA Category (Book) NONULL;\nnameCategory '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f' (Book b) = name(category(b));\n\nFORM book '\u041a\u043d\u0438\u0433\u0430'\n    OBJECTS b = Book PANEL\n    PROPERTIES(b) name, nameCategory\n\n    EDIT Book OBJECT b\n;\n\nFORM books '\u041a\u043d\u0438\u0433\u0438'\n    OBJECTS c = Category\n    PROPERTIES(c) READONLY name\n    PROPERTIES(c) NEWSESSION NEW, EDIT, DELETE\n\n    OBJECTS b = Book\n    PROPERTIES(b) READONLY name\n    FILTERS category(b) == c\n;\n\nNAVIGATOR {\n    NEW books;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u041d\u0443\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0441\u043e\u0437\u0434\u0430\u0441\u0442 \u043d\u043e\u0432\u0443\u044e \u043a\u043d\u0438\u0433\u0443, \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u0440\u043e\u0441\u0442\u0430\u0432\u0438\u0442 \u0442\u0435\u043a\u0443\u0449\u0443\u044e \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e \u0438 \u0432\u044b\u0431\u0435\u0440\u0435\u0442 \u0435\u0435 \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0439 \u043f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442 \u0438 \u0437\u0430\u043a\u0440\u043e\u0435\u0442 \u0444\u043e\u0440\u043c\u0443."}),"\n",(0,r.jsx)(n.h3,{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"createBook '\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u043d\u0438\u0433\u0443' (Category c)  {\n    NEWSESSION {\n        NEW newBook = Book {\n            category(newBook) <- c;\n            DIALOG book OBJECTS b = newBook INPUT DO {\n                SEEK books.b = newBook;\n            }\n        }\n    }\n}\n\nEXTEND FORM books\n    PROPERTIES(c) createBook DRAW b TOOLBAR\n;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u041f\u043e\u0441\u043b\u0435 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f \u0444\u043e\u0440\u043c\u044b \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f ",(0,r.jsxs)(n.a,{href:"/ru/SEEK_operator",children:["\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 ",(0,r.jsx)(n.code,{children:"SEEK"})]}),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0434\u0435\u043b\u0430\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u043e\u0431\u044a\u0435\u043a\u0442 \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u043c."]}),"\n",(0,r.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",children:"\u041f\u0440\u0438\u043c\u0435\u0440 2"}),"\n",(0,r.jsx)(n.h3,{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1",children:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"}),"\n",(0,r.jsxs)(n.p,{children:["\u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e ",(0,r.jsx)(n.a,{href:"#%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80-1",children:(0,r.jsx)(n.strong,{children:"\u041f\u0440\u0438\u043c\u0435\u0440\u0443 1"})}),". \u0422\u0430\u043a\u0436\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430 \u043b\u043e\u0433\u0438\u043a\u0430 \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u0435\u0439. \u0414\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044f \u0438 \u043a\u043d\u0438\u0433\u0438 \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u0434\u0430\u0442\u044c \u0446\u0435\u043d\u0443 \u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u0435."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"CLASS Customer '\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c';\nname '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435' = DATA ISTRING[50] (Customer) IN id;\n\nprice '\u0426\u0435\u043d\u0430' = DATA NUMERIC[14,2] (Customer, Book);\n\nFORM prices '\u0426\u0435\u043d\u044b'\n    OBJECTS c = Customer PANEL\n    PROPERTIES(c) name SELECTOR\n\n    OBJECTS b = Book\n    PROPERTIES name(b) READONLY, price(c, b)\n;\n\nNAVIGATOR {\n    NEW prices;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u041d\u0443\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044f \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u043f\u0440\u0438 \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u0438 \u0444\u043e\u0440\u043c\u044b."}),"\n",(0,r.jsx)(n.h3,{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1",children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"defaultCustomer '\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e' = DATA Customer ();\nnameDefaultCustomer '\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e' () = name(defaultCustomer());\n\nEXTEND FORM options PROPERTIES() nameDefaultCustomer;\nDESIGN options { commons { MOVE PROPERTY(nameDefaultCustomer()); } }\n\nEXTEND FORM prices\n    EVENTS ON INIT { SEEK prices.c = defaultCustomer(); }\n;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u0441 \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u0435\u043c \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043d\u0430 \u0444\u043e\u0440\u043c\u0443 ",(0,r.jsx)(n.code,{children:"'\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430'"})," \u0432\u043e \u0432\u043a\u043b\u0430\u0434\u043a\u0443 ",(0,r.jsx)(n.code,{children:"'\u041e\u0431\u0449\u0438\u0435'"}),". \u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u043e\u0431\u044a\u0435\u043a\u0442 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u0441\u044f \u043f\u0440\u0438 \u0432\u0445\u043e\u0434\u0435 \u043d\u0430 \u0444\u043e\u0440\u043c\u0443, \u0442\u0430\u043a \u043a\u0430\u043a \u0441\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 ",(0,r.jsxs)(n.a,{href:"/ru/Event_block",children:["\u0441\u043e\u0431\u044b\u0442\u0438\u0435 ",(0,r.jsx)(n.code,{children:"ON INIT"})]}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-3",children:"\u041f\u0440\u0438\u043c\u0435\u0440 3"}),"\n",(0,r.jsx)(n.h3,{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-2",children:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"}),"\n",(0,r.jsx)(n.p,{children:"\u041f\u0440\u0435\u0434\u043f\u043e\u043b\u043e\u0436\u0438\u043c, \u0447\u0442\u043e \u0435\u0441\u0442\u044c \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0444\u043e\u0440\u043c\u0430 \u043e\u0442\u0447\u0435\u0442\u043e\u0432, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0437\u0430\u0434\u0430\u043d \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u0434\u0430\u0442."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"FORM report '\u041e\u0442\u0447\u0435\u0442'\n    OBJECTS dFrom = DATE PANEL, dTo = DATE PANEL\n    PROPERTIES VALUE(dFrom), VALUE(dTo)\n;\n\nNAVIGATOR {\n    NEW report;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u041d\u0443\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u043d\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044e\u044e \u043d\u0435\u0434\u0435\u043b\u044e, \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u043c\u0435\u0441\u044f\u0446 \u0438 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u043c\u0435\u0441\u044f\u0446."}),"\n",(0,r.jsx)(n.h3,{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-2",children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"setReportLastWeek '\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u044f\u044f \u043d\u0435\u0434\u0435\u043b\u044f' ()  {\n    SEEK report.dFrom = subtract(currentDate(), 7);\n    SEEK report.dTo = subtract(currentDate(), 1);\n}\nsetReportCurrentMonth '\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u043c\u0435\u0441\u044f\u0446' ()  {\n    SEEK report.dFrom = firstDayOfMonth(currentDate());\n    SEEK report.dTo = lastDayOfMonth(currentDate());\n}\nsetReportLastMonth '\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u043c\u0435\u0441\u044f\u0446' ()  {\n    SEEK report.dFrom = firstDayOfMonth(subtract(firstDayOfMonth(currentDate()), 1));\n    SEEK report.dTo = subtract(firstDayOfMonth(currentDate()), 1);\n}\n\nEXTEND FORM report\n    PROPERTIES() setReportLastWeek, setReportCurrentMonth, setReportLastMonth\n;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u043f\u043e \u0440\u0430\u0431\u043e\u0442\u0435 \u0441 \u0434\u0430\u0442\u0430\u043c\u0438 \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0432 ",(0,r.jsx)(n.a,{href:"/ru/Modules",children:"\u0441\u0438\u0441\u0442\u0435\u043c\u043d\u043e\u043c \u043c\u043e\u0434\u0443\u043b\u0435"})," ",(0,r.jsx)(n.code,{children:"Time"}),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u0432 \u0441\u0430\u043c\u043e\u043c \u043d\u0430\u0447\u0430\u043b\u0435 \u0447\u0435\u0440\u0435\u0437 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044e ",(0,r.jsx)(n.code,{children:"REQUIRE"}),"."]})]})}function i(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>a});var r=o(96540);const t={},s=r.createContext(t);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);