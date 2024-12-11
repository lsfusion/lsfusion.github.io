"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[96166],{28697:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=t(74848),o=t(28453);const s={title:"NEWEXECUTOR operator"},a=void 0,i={id:"NEWEXECUTOR_operator",title:"NEWEXECUTOR operator",description:"The NEWEXECUTOR operator creates an action that enables executing other actions in a new thread pool.",source:"@site/versioned_docs/version-v4/NEWEXECUTOR_operator.md",sourceDirName:".",slug:"/NEWEXECUTOR_operator",permalink:"/v4/NEWEXECUTOR_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/NEWEXECUTOR_operator.md",tags:[],version:"v4",lastUpdatedAt:170852507e4,frontMatter:{title:"NEWEXECUTOR operator"},sidebar:"learn",previous:{title:"NESTEDSESSION operator",permalink:"/v4/NESTEDSESSION_operator"},next:{title:"NEWSESSION operator",permalink:"/v4/NEWSESSION_operator"}},c={},d=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function l(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"NEWEXECUTOR"})," operator creates an ",(0,r.jsx)(n.a,{href:"/v4/Actions",children:"action"})," that enables executing other actions in a ",(0,r.jsx)(n.a,{href:"/v4/New_threads_NEWTHREAD_NEWEXECUTOR",children:"new thread pool"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"NEWEXECUTOR action THREADS threadExpr\n"})}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"NEWEXECUTOR"})," operator creates an action that creates a new thread pool and executes the defined action in such a way that any action created with the ",(0,r.jsxs)(n.a,{href:"/v4/NEWTHREAD_operator",children:[(0,r.jsx)(n.code,{children:"NEWTHREAD"})," operator"]})," will be executed in one of the threads of the created pool."]}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"action"})}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.a,{href:"/v4/Action_operators#contextdependent",children:"context-dependent action operator"})," that defines an action to be executed."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"threadExpr"})}),"\n",(0,r.jsxs)(n.p,{children:["An ",(0,r.jsx)(n.a,{href:"/v4/Expression",children:"expression"})," which value determines the number of threads in the pool. Must return the value of the ",(0,r.jsx)(n.code,{children:"INTEGER"})," class."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"testExecutor  {\n    NEWEXECUTOR {\n        FOR id(Sku s) DO {\n            NEWTHREAD {\n                NEWSESSION {\n                    name(s) <- STRING[20](id(s)); // writing the code into the name in 10 threads\n                    APPLY;\n                }\n            }\n        }\n    } THREADS 10;\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var r=t(96540);const o={},s=r.createContext(o);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);