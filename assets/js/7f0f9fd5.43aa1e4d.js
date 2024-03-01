"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[63062],{59344:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(74848),o=r(28453);const a={title:"RETURN operator"},s=void 0,i={id:"RETURN_operator",title:"RETURN operator",description:"The RETURN operator creates an action that implements exit from an action created by the EXEC operator.",source:"@site/versioned_docs/version-v5/RETURN_operator.md",sourceDirName:".",slug:"/RETURN_operator",permalink:"/RETURN_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/RETURN_operator.md",tags:[],version:"v5",lastUpdatedAt:1708525070,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"RETURN operator"},sidebar:"learn",previous:{title:"REQUEST operator",permalink:"/REQUEST_operator"},next:{title:"SEEK operator",permalink:"/SEEK_operator"}},c={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"RETURN"})," operator creates an ",(0,n.jsx)(t.a,{href:"/Actions",children:"action"})," that implements ",(0,n.jsx)(t.a,{href:"/Exit_RETURN",children:"exit"})," from an action created by the ",(0,n.jsxs)(t.a,{href:"/Call_EXEC",children:[(0,n.jsx)(t.code,{children:"EXEC"})," operator"]}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"RETURN\n"})}),"\n",(0,n.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"RETURN"})," operator creates an action that exits from the most nested ",(0,n.jsx)(t.a,{href:"/Call_EXEC",children:"action call"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lsf",children:"importFile  {\r\n    LOCAL file = FILE ();\r\n    INPUT f = FILE DO {\r\n        file () <- f;\r\n    }\r\n\r\n    IF NOT file() THEN RETURN;\r\n}\n"})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>i});var n=r(96540);const o={},a=n.createContext(o);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);