"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[90349],{3161:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>S});var t=s(74848),a=s(28453);const o={title:"New session (NEWSESSION, NESTEDSESSION)"},r=void 0,i={id:"New_session_NEWSESSION_NESTEDSESSION",title:"New session (NEWSESSION, NESTEDSESSION)",description:"The new session operator allows you to execute an action in a session different from the current one.",source:"@site/versioned_docs/version-v5/New_session_NEWSESSION_NESTEDSESSION.md",sourceDirName:".",slug:"/New_session_NEWSESSION_NESTEDSESSION",permalink:"/New_session_NEWSESSION_NESTEDSESSION",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/New_session_NEWSESSION_NESTEDSESSION.md",tags:[],version:"v5",lastUpdatedAt:1685108136e3,frontMatter:{title:"New session (NEWSESSION, NESTEDSESSION)"},sidebar:"learn",previous:{title:"Cancel changes (CANCEL)",permalink:"/Cancel_changes_CANCEL"},next:{title:"Previous value (PREV)",permalink:"/Previous_value_PREV"}},c={},S=[{value:"Nested sessions",id:"nested",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function l(e){const n={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The new ",(0,t.jsx)(n.a,{href:"/Change_sessions",children:"session"})," operator allows you to execute an action in a session different from the current one."]}),"\n",(0,t.jsxs)(n.p,{children:["As with other session management operators, you can explicitly specify ",(0,t.jsx)(n.a,{href:"/Session_management#nested",children:"nested local properties"})," for the new session operator."]}),"\n",(0,t.jsx)(n.h3,{id:"nested",children:"Nested sessions"}),"\n",(0,t.jsxs)(n.p,{children:["It is also possible to create a new ",(0,t.jsx)(n.em,{children:"nested"})," session. In this case, all changes that occurred in the current session are copied to the nested session (the same happens when ",(0,t.jsx)(n.a,{href:"/Cancel_changes_CANCEL",children:"changes are discarded"})," in a nested session). At the same time, when you ",(0,t.jsx)(n.a,{href:"/Apply_changes_APPLY",children:"apply changes"})," in the nested session, all changes are copied back to the current session (without being saved to the database)."]}),"\n",(0,t.jsx)(n.h3,{id:"language",children:"Language"}),"\n",(0,t.jsxs)(n.p,{children:["To create an action that executes another action in a new session, use the ",(0,t.jsxs)(n.a,{href:"/NEWSESSION_operator",children:[(0,t.jsx)(n.code,{children:"NEWSESSION"})," operator"]})," (for nested sessions, use the ",(0,t.jsxs)(n.a,{href:"/NESTEDSESSION_operator",children:[(0,t.jsx)(n.code,{children:"NESTEDSESSION"})," operator"]}),")."]}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"testNewSession ()  {\n    NEWSESSION {\n        NEW c = Currency {\n            name(c) <- 'USD';\n            code(c) <- 866;\n        }\n        APPLY;\n    }\n    // here a new object of class Currency is already in the database\n\n    LOCAL local = BPSTRING[10] (Currency);\n    local(Currency c) <- 'Local';\n    NEWSESSION {\n        MESSAGE (GROUP SUM 1 IF local(Currency c) == 'Local'); // will return NULL\n    }\n    NEWSESSION NESTED (local) {\n        // will return the number of objects of class Currency\n        MESSAGE (GROUP SUM 1 IF local(Currency c) == 'Local'); \n    }\n\n    NEWSESSION {\n        NEW s = Sku {\n            id(s) <- 1234;\n            name(s) <- 'New Sku';\n            SHOW sku OBJECTS s = s;\n        }\n    }\n\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"testNestedSession ()  {\n    NESTEDSESSION {\n        name(Sku s) <- 'aaa';\n        // in fact, the changes will not be applied to the database, but to the \"upper\" session\n        APPLY; \n    }\n\n    MESSAGE (GROUP SUM 1 IF name(Sku s) == 'aaa'); // returns all rows\n    CANCEL;\n    // returns NULL if there was no Sku named aaa in the database before\n    MESSAGE (GROUP SUM 1 IF name(Sku s) == 'aaa'); \n\n}\n\nFORM sku\n    OBJECTS s = Sku PANEL\n    PROPERTIES(s) id, name\n;\nnewNestedSession()  {\n    NESTEDSESSION {\n        NEW s = Sku {\n            // shows the form, but any changes in it will not be applied to the database,\n            // but will be saved in the \"upper session\" session\n            SHOW sku OBJECTS s = s;\n        }\n    }\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>i});var t=s(96540);const a={},o=t.createContext(a);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);