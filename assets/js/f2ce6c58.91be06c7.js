"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[93101],{74211:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=n(74848),o=n(28453);const s={title:"NEWEXECUTOR operator"},a=void 0,i={id:"NEWEXECUTOR_operator",title:"NEWEXECUTOR operator",description:"The NEWEXECUTOR operator creates an action that enables executing other actions in a new thread pool.",source:"@site/versioned_docs/version-v5/NEWEXECUTOR_operator.md",sourceDirName:".",slug:"/NEWEXECUTOR_operator",permalink:"/NEWEXECUTOR_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/NEWEXECUTOR_operator.md",tags:[],version:"v5",lastUpdatedAt:1708525070,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"NEWEXECUTOR operator"},sidebar:"learn",previous:{title:"NESTEDSESSION operator",permalink:"/NESTEDSESSION_operator"},next:{title:"NEWSESSION operator",permalink:"/NEWSESSION_operator"}},c={},d=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function l(e){const t={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"NEWEXECUTOR"})," operator creates an ",(0,r.jsx)(t.a,{href:"/Actions",children:"action"})," that enables executing other actions in a ",(0,r.jsx)(t.a,{href:"/New_threads_NEWTHREAD_NEWEXECUTOR",children:"new thread pool"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"NEWEXECUTOR action THREADS threadExpr\n"})}),"\n",(0,r.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"NEWEXECUTOR"})," operator creates an action that creates a new thread pool and executes the defined action in such a way that any action created with the ",(0,r.jsxs)(t.a,{href:"/NEWTHREAD_operator",children:[(0,r.jsx)(t.code,{children:"NEWTHREAD"})," operator"]})," will be executed in one of the threads of the created pool."]}),"\n",(0,r.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"action"})}),"\n",(0,r.jsxs)(t.p,{children:["A ",(0,r.jsx)(t.a,{href:"/Action_operators#contextdependent",children:"context-dependent action operator"})," that defines an action to be executed."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"threadExpr"})}),"\n",(0,r.jsxs)(t.p,{children:["An ",(0,r.jsx)(t.a,{href:"/Expression",children:"expression"})," which value determines the number of threads in the pool. Must return the value of the ",(0,r.jsx)(t.code,{children:"INTEGER"})," class."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lsf",children:"testExecutor  {\n    NEWEXECUTOR {\n        FOR id(Sku s) DO {\n            NEWTHREAD {\n                NEWSESSION {\n                    name(s) <- STRING[20](id(s)); // writing the code into the name in 10 threads\n                    APPLY;\n                }\n            }\n        }\n    } THREADS 10;\n}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var r=n(96540);const o={},s=r.createContext(o);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);