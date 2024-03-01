"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[6827],{14765:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=s(74848),t=s(28453);const i={title:"Apply changes (APPLY)"},o=void 0,r={id:"Apply_changes_APPLY",title:"Apply changes (APPLY)",description:"The apply changes operator saves all changes made to the database, and also triggers the handling of all synchronous global events.",source:"@site/versioned_docs/version-v4/Apply_changes_APPLY.md",sourceDirName:".",slug:"/Apply_changes_APPLY",permalink:"/v4/Apply_changes_APPLY",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Apply_changes_APPLY.md",tags:[],version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"Jun 9, 2021",frontMatter:{title:"Apply changes (APPLY)"},sidebar:"learn",previous:{title:"Session management",permalink:"/v4/Session_management"},next:{title:"Cancel changes (CANCEL)",permalink:"/v4/Cancel_changes_CANCEL"}},c={},l=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.em,{children:"apply changes"})," operator saves all changes made to the database, and also triggers the handling of all synchronous global ",(0,a.jsx)(n.a,{href:"/v4/Events",children:"events"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["For this operator you can also define an ",(0,a.jsx)(n.em,{children:"applied"})," action to be executed before events handling is triggered, but it will be done in the same transaction. Execution within a single transaction increases its performance and integrity. It should be kept in mind, however, that when canceling changes, for example, all changes made in this applied action will also be canceled. During event handling the apply operation may be canceled if the ",(0,a.jsx)(n.a,{href:"/v4/Cancel_changes_CANCEL",children:"cancel changes"})," operator is executed. If this occurs, in the ",(0,a.jsx)(n.code,{children:"System.canceled"})," property a value of ",(0,a.jsx)(n.code,{children:"TRUE"})," is written (if not, then ",(0,a.jsx)(n.code,{children:"NULL"}),")."]}),"\n",(0,a.jsxs)(n.p,{children:["After completion of operation (whether successful or unsuccessful), all messages shown to the user during event handling are written to the special property ",(0,a.jsx)(n.code,{children:"System.applyMessage"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["As with other session management operators, you can explicitly specify ",(0,a.jsx)(n.a,{href:"/v4/Session_management#nested",children:"nested local properties"})," for the apply changes operator, which will preserve their changes after the operator is executed."]}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsxs)(n.p,{children:["This operator works differently if executed inside a ",(0,a.jsx)(n.a,{href:"/v4/New_session_NEWSESSION_NESTEDSESSION#nested",children:"nested session"}),": here all changes are copied back to the session in which this session is nested (and changes are not saved to the database)"]})}),"\n",(0,a.jsx)(n.h3,{id:"language",children:"Language"}),"\n",(0,a.jsxs)(n.p,{children:["To declare an action that applies changes, use the ",(0,a.jsxs)(n.a,{href:"/v4/APPLY_operator",children:[(0,a.jsx)(n.code,{children:"APPLY"})," operator"]}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"CLASS Sku;\nid = DATA INTEGER (Sku);\n\nin = DATA LOCAL BOOLEAN (Sku);\napplyIn()  {\n    in(Sku s) <- TRUE WHERE id(s) == 123;\n    APPLY NESTED (in[Sku]) {};\n    IF canceled() THEN\n        MESSAGE applyMessage();\n    FOR in(Sku s) DO\n        MESSAGE id(s); // shows '123'\n}\n\ncalculateInTransaction()  {\n    APPLY {\n        id(Sku s) <- (GROUP MAX id(Sku ss)) (+) 1; // putting down a new code inside the transaction\n    }\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>r});var a=s(96540);const t={},i=a.createContext(t);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);