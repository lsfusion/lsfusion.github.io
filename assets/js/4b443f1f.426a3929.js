"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[33847],{54752:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=t(74848),r=t(28453);const i={title:"NEWTHREAD operator"},s=void 0,c={id:"NEWTHREAD_operator",title:"NEWTHREAD operator",description:"The NEWTHREAD operator creates an action that executes another action in a new thread.",source:"@site/versioned_docs/version-v5/NEWTHREAD_operator.md",sourceDirName:".",slug:"/NEWTHREAD_operator",permalink:"/v5/NEWTHREAD_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/NEWTHREAD_operator.md",tags:[],version:"v5",lastUpdatedAt:170852507e4,frontMatter:{title:"NEWTHREAD operator"},sidebar:"learn",previous:{title:"NEWSESSION operator",permalink:"/v5/NEWSESSION_operator"},next:{title:"PRINT operator",permalink:"/v5/PRINT_operator"}},a={},d=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function l(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"NEWTHREAD"})," operator creates an ",(0,o.jsx)(n.a,{href:"/v5/Actions",children:"action"})," that executes another action in a ",(0,o.jsx)(n.a,{href:"/v5/New_threads_NEWTHREAD_NEWEXECUTOR",children:"new thread"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"NEWTHREAD action [CONNECTION connectionExpr]\nNEWTHREAD action SCHEDULE [PERIOD periodExpr] [DELAY delayExpr]\n"})}),"\n",(0,o.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"NEWTHREAD"})," operator creates an action that executes another action in a new thread. When the ",(0,o.jsx)(n.code,{children:"CONNECTION"})," keyword is used, you can specify the connection which will be used during the action execution. There is also a second form of the ",(0,o.jsx)(n.code,{children:"NEWTHREAD"})," operator for triggering an action using the scheduler. This form usage is determined by the presence of the ",(0,o.jsx)(n.code,{children:"SCHEDULE"})," keyword."]}),"\n",(0,o.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"action"})}),"\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.a,{href:"/v5/Action_operators#contextdependent",children:"context dependent operator"})," that defines an action to be executed in the new thread."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"connectionExpr"})}),"\n",(0,o.jsxs)(n.p,{children:["An ",(0,o.jsx)(n.a,{href:"/v5/Expression",children:"expression"})," which value is a ",(0,o.jsx)(n.a,{href:"/v5/Properties",children:"property"})," that returns an object of the ",(0,o.jsx)(n.code,{children:"SystemEvents.Connection"})," class. Defines the connection for which this action will be performed."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"periodExpr"})}),"\n",(0,o.jsx)(n.p,{children:"An expression which value is a property that returns the length of the action repetition period in milliseconds. If not specified, the action will be executed once."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"delayExpr"})}),"\n",(0,o.jsx)(n.p,{children:"An expression which value is a property that returns the delay before the first execution of the action in milliseconds. If not specified, the action will be executed without delay."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"testNewThread ()  {\n    //Showing messages 'Message' to all\n    FOR user(Connection conn) AND connectionStatus(conn) == ConnectionStatus.connectedConnection AND conn != currentConnection() DO {\n        NEWTHREAD MESSAGE 'Message'; CONNECTION conn;\n    }\n\n    //Execution of the 'action' action with a frequency of 10 seconds and a delay of 5 seconds\n    NEWTHREAD MESSAGE 'Hello World'; SCHEDULE PERIOD 10000 DELAY 5000;\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var o=t(96540);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);