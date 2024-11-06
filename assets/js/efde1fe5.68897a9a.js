"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[23604],{48883:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>S,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var s=t(74848),a=t(28453);const r={title:"NESTEDSESSION operator"},o=void 0,i={id:"NESTEDSESSION_operator",title:"NESTEDSESSION operator",description:"The NESTEDSESSION operator creates an action that executes the other action in a nested session.",source:"@site/versioned_docs/version-v4/NESTEDSESSION_operator.md",sourceDirName:".",slug:"/NESTEDSESSION_operator",permalink:"/v4/NESTEDSESSION_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/NESTEDSESSION_operator.md",tags:[],version:"v4",lastUpdatedAt:170852507e4,frontMatter:{title:"NESTEDSESSION operator"},sidebar:"learn",previous:{title:"NEW operator",permalink:"/v4/NEW_operator"},next:{title:"NEWEXECUTOR operator",permalink:"/v4/NEWEXECUTOR_operator"}},c={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"NESTEDSESSION"})," operator creates an ",(0,s.jsx)(n.a,{href:"/v4/Actions",children:"action"})," that executes the other action in a ",(0,s.jsx)(n.a,{href:"/v4/New_session_NEWSESSION_NESTEDSESSION#nested",children:"nested session"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"NESTEDSESSION action \n"})}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"NESTEDSESSION"})," operator creates an action which executes the other action in a nested session. With that, all changes that have already been made in the current session get into the created nested session. Also, all changes that are made in the nested session will get into the current session when ",(0,s.jsx)(n.a,{href:"/v4/Apply_changes_APPLY",children:"the changes are applied"})," in the nested session."]}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"action"})}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.a,{href:"/v4/Action_operators#contextdependent",children:"context-dependent action operator"})," that defines an action to be executed in the nested session."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lsf",children:"testNestedSession ()  {\n    NESTEDSESSION {\n        name(Sku s) <- 'aaa';\n        // in fact, the changes will not be applied to the database, but to the \"upper\" session\n        APPLY; \n    }\n\n    MESSAGE (GROUP SUM 1 IF name(Sku s) == 'aaa'); // returns all rows\n    CANCEL;\n    // returns NULL if there was no Sku named aaa in the database before\n    MESSAGE (GROUP SUM 1 IF name(Sku s) == 'aaa'); \n\n}\n\nFORM sku\n    OBJECTS s = Sku PANEL\n    PROPERTIES(s) id, name\n;\nnewNestedSession()  {\n    NESTEDSESSION {\n        NEW s = Sku {\n            // shows the form, but any changes in it will not be applied to the database, \n            // but will be saved in the \"upper session\" session\n            SHOW sku OBJECTS s = s;\n        }\n    }\n}\n"})})]})}function S(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var s=t(96540);const a={},r=s.createContext(a);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);