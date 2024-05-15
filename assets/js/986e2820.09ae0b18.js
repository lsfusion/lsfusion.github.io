"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[40803],{45152:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(74848),r=n(28453);const a={title:"CONTINUE operator"},i=void 0,s={id:"CONTINUE_operator",title:"CONTINUE operator",description:"The CONTINUE operator creates an action that implements move to the next iteration of the cycle.",source:"@site/docs/CONTINUE_operator.md",sourceDirName:".",slug:"/CONTINUE_operator",permalink:"/next/CONTINUE_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/CONTINUE_operator.md",tags:[],version:"current",lastUpdatedAt:1715811948,formattedLastUpdatedAt:"May 15, 2024",frontMatter:{title:"CONTINUE operator"},sidebar:"learn",previous:{title:"COLLAPSE operator",permalink:"/next/COLLAPSE_operator"},next:{title:"INTERNAL operator",permalink:"/next/INTERNAL_operator"}},c={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"CONTINUE"})," operator creates an ",(0,o.jsx)(t.a,{href:"/next/Actions",children:"action"})," that implements move to the ",(0,o.jsx)(t.a,{href:"/next/Next_iteration_CONTINUE",children:"next iteration of the cycle"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"syntax",children:"Syntax"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"CONTINUE\n"})}),"\n",(0,o.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"CONTINUE"})," operator creates an action that moves to the next iteration of the cycle."]}),"\n",(0,o.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lsf",children:"testContinue ()  {\n    FOR iterate(INTEGER i, 1, 10) DO {\n        MESSAGE 'before';\n        IF i == 5 THEN CONTINUE; // no message 'after' for i == 5\n        MESSAGE 'after';\n    }\n}\n"})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var o=n(96540);const r={},a=o.createContext(r);function i(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);