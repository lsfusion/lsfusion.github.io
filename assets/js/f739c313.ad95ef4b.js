"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[58348],{85345:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var t=s(74848),a=s(28453);const c={title:"Cancel changes (CANCEL)"},r=void 0,o={id:"Cancel_changes_CANCEL",title:"Cancel changes (CANCEL)",description:"The cancel changes operator completely clears the current change session.",source:"@site/versioned_docs/version-v5/Cancel_changes_CANCEL.md",sourceDirName:".",slug:"/Cancel_changes_CANCEL",permalink:"/v5/Cancel_changes_CANCEL",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/Cancel_changes_CANCEL.md",tags:[],version:"v5",lastUpdatedAt:1709302895e3,frontMatter:{title:"Cancel changes (CANCEL)"},sidebar:"learn",previous:{title:"Apply changes (APPLY)",permalink:"/v5/Apply_changes_APPLY"},next:{title:"New session (NEWSESSION, NESTEDSESSION)",permalink:"/v5/New_session_NEWSESSION_NESTEDSESSION"}},i={},l=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"cancel changes"})," operator completely clears the current ",(0,t.jsx)(n.a,{href:"/v5/Change_sessions",children:"change session"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["As with other session management operators, you can explicitly specify ",(0,t.jsx)(n.a,{href:"/v5/Session_management#nested",children:"nested local properties"})," for the cancel operator."]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["This operator works differently if executed inside ",(0,t.jsx)(n.a,{href:"/v5/Events#change",children:"events"})," handling: in this case, it cancels ",(0,t.jsx)(n.a,{href:"/v5/Apply_changes_APPLY",children:"applying the changes"})," that led to this handling"]})}),"\n",(0,t.jsx)(n.h3,{id:"language",children:"Language"}),"\n",(0,t.jsxs)(n.p,{children:["To declare an action that implements cancellation, use the ",(0,t.jsxs)(n.a,{href:"/v5/CANCEL_operator",children:[(0,t.jsx)(n.code,{children:"CANCEL"})," operator"]}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"dropChanges()  {\n    CANCEL NESTED (in[Sku]); // cancel all changes except the in property\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var t=s(96540);const a={},c=t.createContext(a);function r(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);