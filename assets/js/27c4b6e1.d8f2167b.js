"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[53409],{5494:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>S,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var s=t(74848),r=t(28453);const a={title:"NESTEDSESSION operator"},o=void 0,i={id:"NESTEDSESSION_operator",title:"NESTEDSESSION operator",description:"The NESTEDSESSION operator creates an action that executes the other action in a nested session.",source:"@site/docs/NESTEDSESSION_operator.md",sourceDirName:".",slug:"/NESTEDSESSION_operator",permalink:"/next/NESTEDSESSION_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/NESTEDSESSION_operator.md",tags:[],version:"current",lastUpdatedAt:1708525070,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"NESTEDSESSION operator"},sidebar:"learn",previous:{title:"NEW operator",permalink:"/next/NEW_operator"},next:{title:"NEWEXECUTOR operator",permalink:"/next/NEWEXECUTOR_operator"}},c={},d=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function l(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"NESTEDSESSION"})," operator creates an ",(0,s.jsx)(n.a,{href:"/next/Actions",children:"action"})," that executes the other action in a ",(0,s.jsx)(n.a,{href:"/next/New_session_NEWSESSION_NESTEDSESSION#nested",children:"nested session"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"NESTEDSESSION action \n"})}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"NESTEDSESSION"})," operator creates an action which executes the other action in a nested session. With that, all changes that have already been made in the current session get into the created nested session. Also, all changes that are made in the nested session will get into the current session when ",(0,s.jsx)(n.a,{href:"/next/Apply_changes_APPLY",children:"the changes are applied"})," in the nested session."]}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"action"})}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.a,{href:"/next/Action_operators#contextdependent",children:"context-dependent action operator"})," that defines an action to be executed in the nested session."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lsf",children:"testNestedSession ()  {\r\n    NESTEDSESSION {\r\n        name(Sku s) <- 'aaa';\r\n        // in fact, the changes will not be applied to the database, but to the \"upper\" session\r\n        APPLY; \r\n    }\r\n\r\n    MESSAGE (GROUP SUM 1 IF name(Sku s) == 'aaa'); // returns all rows\r\n    CANCEL;\r\n    // returns NULL if there was no Sku named aaa in the database before\r\n    MESSAGE (GROUP SUM 1 IF name(Sku s) == 'aaa'); \r\n\r\n}\r\n\r\nFORM sku\r\n    OBJECTS s = Sku PANEL\r\n    PROPERTIES(s) id, name\r\n;\r\nnewNestedSession()  {\r\n    NESTEDSESSION {\r\n        NEW s = Sku {\r\n            // shows the form, but any changes in it will not be applied to the database, \r\n            // but will be saved in the \"upper session\" session\r\n            SHOW sku OBJECTS s = s;\r\n        }\r\n    }\r\n}\n"})})]})}function S(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var s=t(96540);const r={},a=s.createContext(r);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);