"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[43220],{86532:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=n(74848),i=n(28453);const r={title:"Exit (RETURN)"},s=void 0,a={id:"Exit_RETURN",title:"Exit (RETURN)",description:"The exit operator creates an action that exits from the inmost action call. Control is passed to the first action following that call operator.",source:"@site/versioned_docs/version-v5/Exit_RETURN.md",sourceDirName:".",slug:"/Exit_RETURN",permalink:"/v5/Exit_RETURN",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/Exit_RETURN.md",tags:[],version:"v5",lastUpdatedAt:1685108136e3,frontMatter:{title:"Exit (RETURN)"},sidebar:"learn",previous:{title:"Interruption (BREAK)",permalink:"/v5/Interruption_BREAK"},next:{title:"New threads (NEWTHREAD, NEWEXECUTOR)",permalink:"/v5/New_threads_NEWTHREAD_NEWEXECUTOR"}},l={},c=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.em,{children:"exit operator"})," creates an ",(0,o.jsx)(t.a,{href:"/v5/Actions",children:"action"})," that exits from the inmost ",(0,o.jsx)(t.a,{href:"/v5/Call_EXEC",children:"action call"}),". Control is passed to the first action following that call operator."]}),"\n",(0,o.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,o.jsxs)(t.p,{children:["The syntax of the exit operator is described by the ",(0,o.jsxs)(t.a,{href:"/v5/RETURN_operator",children:[(0,o.jsx)(t.code,{children:"RETURN"})," operator"]}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lsf",children:"importFile  {\n    LOCAL file = FILE ();\n    INPUT f = FILE DO {\n        file () <- f;\n    }\n\n    IF NOT file() THEN RETURN;\n}\n"})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var o=n(96540);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);