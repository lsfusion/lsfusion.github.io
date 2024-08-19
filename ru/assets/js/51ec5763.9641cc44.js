"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[45832],{24339:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>x,frontMatter:()=>r,metadata:()=>d,toc:()=>t});var l=s(74848),c=s(28453);const r={title:"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u0434\u0430"},i=void 0,d={id:"Coding_conventions",title:"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u0434\u0430",description:"\u041e\u0431\u0449\u0438\u0435",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/Coding_conventions.md",sourceDirName:".",slug:"/Coding_conventions",permalink:"/ru/Coding_conventions",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/ru/Coding_conventions.md",tags:[],version:"current",lastUpdatedAt:1622042248e3,frontMatter:{title:"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u0434\u0430"},sidebar:"learn",previous:{title:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438",permalink:"/ru/Comments"},next:{title:"IDE",permalink:"/ru/IDE"}},o={},t=[{value:"\u041e\u0431\u0449\u0438\u0435",id:"\u043e\u0431\u0449\u0438\u0435",level:3},{value:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f",id:"\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f",level:3},{value:"\u0424\u043e\u0440\u043c\u044b",id:"\u0444\u043e\u0440\u043c\u044b",level:3}];function a(n){const e={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h3,{id:"\u043e\u0431\u0449\u0438\u0435",children:"\u041e\u0431\u0449\u0438\u0435"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u0418\u043c\u0435\u043d\u0430 \u043a\u043b\u0430\u0441\u0441\u043e\u0432, \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u0438 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432 \u0438\u043c\u0435\u043d \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0442\u0441\u044f \u0441 \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0431\u0443\u043a\u0432\u044b. \u041e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0438\u043c\u0435\u043d\u0430 (\u0441\u0432\u043e\u0439\u0441\u0442\u0432, \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439, \u0444\u043e\u0440\u043c, \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0438 \u0442. \u0434.) \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0442\u0441\u044f \u0441 \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u043e\u0439 \u0431\u0443\u043a\u0432\u044b. \u0415\u0441\u043b\u0438 \u0438\u043c\u044f \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0441\u043b\u043e\u0432, \u0442\u043e \u043a\u0430\u0436\u0434\u043e\u0435 \u043f\u043e\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 \u0441\u043b\u043e\u0432\u043e \u0432 \u0438\u043c\u0435\u043d\u0438 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0431\u0443\u043a\u0432\u044b."}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-lsf",children:"MODULE MyModule;\n\nNAMESPACE MyNamespace;\n\nCLASS MyClass 'My Class';\n\nmyProperty 'My Property' = DATA BOOLEAN (MyClass);\nmyAction 'My Action' (MyClass o) {\n    myProperty(o) <- TRUE;\n}\n\nFORM myForm\n;\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f \u043c\u043e\u0434\u0443\u043b\u044f, \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u0438 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432 \u0438\u043c\u0435\u043d \u0434\u043e\u043b\u0436\u043d\u044b \u0440\u0430\u0437\u0434\u0435\u043b\u044f\u0442\u044c\u0441\u044f \u043f\u0443\u0441\u0442\u044b\u043c\u0438 \u0441\u0442\u0440\u043e\u043a\u0430\u043c\u0438:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-lsf",children:"MODULE MyModule;\n\nREQUIRE MyModule2;\n\nNAMESPACE MyNamespace;\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b ",(0,l.jsx)(e.code,{children:"="}),", ",(0,l.jsx)(e.code,{children:"<"}),", ",(0,l.jsx)(e.code,{children:">"}),", ",(0,l.jsx)(e.code,{children:"<="}),", ",(0,l.jsx)(e.code,{children:">="}),", ",(0,l.jsx)(e.code,{children:"+"}),", ",(0,l.jsx)(e.code,{children:"-"})," \u043e\u0442\u0434\u0435\u043b\u044f\u044e\u0442\u0441\u044f \u0441 \u043e\u0431\u0435\u0438\u0445 \u0441\u0442\u043e\u0440\u043e\u043d \u043f\u0440\u043e\u0431\u0435\u043b\u0430\u043c\u0438."]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-lsf",children:"value(x) = 324\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0437\u0430\u043f\u044f\u0442\u043e\u0439 \u0441\u0442\u0430\u0432\u0438\u0442\u0441\u044f \u043f\u0440\u043e\u0431\u0435\u043b. \u041f\u0435\u0440\u0435\u0434 \u0437\u0430\u043f\u044f\u0442\u043e\u0439 \u043f\u0440\u043e\u0431\u0435\u043b\u0430 \u0431\u044b\u0442\u044c \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e."}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-lsf",children:"f(x, y, z) = g(x, y, z) + h(x, y);\n\nFORM test\n    OBJECTS a = Class1, b = Class2\n    PROPERTIES VALUE(a), VALUE(b), name(a), name(b)\n;\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043d\u043e\u0432\u043e\u0433\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0438\u043b\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043d\u043e\u0432\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438. \u0415\u0441\u043b\u0438 \u043f\u043e\u0441\u043b\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u0430 ",(0,l.jsx)(e.code,{children:";"})," \u0435\u0441\u0442\u044c \u0434\u0440\u0443\u0433\u043e\u0439 \u043a\u043e\u0434, \u0442\u043e \u043f\u043e\u0441\u043b\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u0430 \u0441\u0442\u0430\u0432\u0438\u0442\u0441\u044f \u043f\u0440\u043e\u0431\u0435\u043b."]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-lsf",children:"runAction1 (X x) = { f(x) <- 1; g(x) <- 1; }\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u041f\u0440\u0438 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0438 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0438\u043b\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043c\u0435\u0436\u0434\u0443 \u0438\u043c\u0435\u043d\u0435\u043c \u0438\u043b\u0438 \u0442\u0438\u043f\u043e\u043c \u0438 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u043c ",(0,l.jsx)(e.code,{children:"("})," \u0441\u0442\u0430\u0432\u0438\u0442\u0441\u044f \u043f\u0440\u043e\u0431\u0435\u043b. \u041f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u043f\u0440\u043e\u0431\u0435\u043b \u043d\u0435 \u0441\u0442\u0430\u0432\u0438\u0442\u0441\u044f."]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-lsf",children:"nameProperty (MyClass o) = name(property(o));\nmyProperty = DATA STRING[10] (MyClass);\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f",children:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:['\u041a\u0430\u0436\u0434\u0430\u044f "\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438 \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u0430\u044f" \u0441\u0442\u0440\u043e\u043a\u0430 \u0441\u043c\u0435\u0449\u0430\u0435\u0442\u0441\u044f \u043e\u0442 \u0432\u0435\u0440\u0445\u043d\u0435\u0439 \u0440\u043e\u0432\u043d\u043e \u043d\u0430 4 \u043f\u0440\u043e\u0431\u0435\u043b\u0430. \u0412\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u043c\u0438 \u0441\u0447\u0438\u0442\u0430\u044e\u0442\u0441\u044f \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043f\u043e\u0441\u043b\u0435 ',(0,l.jsx)(e.code,{children:"IF"}),", ",(0,l.jsx)(e.code,{children:"FOR"}),", ",(0,l.jsx)(e.code,{children:"WHILE"}),", \u0430 \u0442\u0430\u043a\u0436\u0435 \u043f\u043e\u0441\u043b\u0435 \u0441\u0430\u043c\u043e\u0433\u043e \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430:"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-lsf",children:"IF x = 1 THEN\n    f(a) <- TRUE;\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u041f\u0435\u0440\u0435\u0434 \u0438 \u043f\u043e\u0441\u043b\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 ",(0,l.jsx)(e.code,{children:"{"})," \u0438 ",(0,l.jsx)(e.code,{children:"<-"})," \u0441\u0442\u0430\u0432\u044f\u0442\u0441\u044f \u043f\u0440\u043e\u0431\u0435\u043b\u044b."]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-lsf",children:"FOR f(a) DO {\n    x(a) <- TRUE;\n}\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u0438\u043b\u0438"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-lsf",children:"FOR f(a) DO { x(a) <- TRUE; }\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u0444\u043e\u0440\u043c\u044b",children:"\u0424\u043e\u0440\u043c\u044b"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0443\u0441\u0442\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u043e\u0439.","\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-lsf",children:"FORM test\n    OBJECTS a = Object\n    PROPERTIES(a) VALUE\n\n    OBJECTS b = Object\n    PROPERTIES(b) VALUE\n;   \n"})}),"\n"]}),"\n"]})]})}function x(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(a,{...n})}):a(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>i,x:()=>d});var l=s(96540);const c={},r=l.createContext(c);function i(n){const e=l.useContext(r);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:i(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);