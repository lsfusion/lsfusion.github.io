"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[24244],{33584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=n(74848),o=n(28453);const a={title:"TRY operator"},c=void 0,i={id:"TRY_operator",title:"TRY operator",description:"The TRY operator creates an action that executes another action with exception handling.",source:"@site/versioned_docs/version-v4/TRY_operator.md",sourceDirName:".",slug:"/TRY_operator",permalink:"/v4/TRY_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/TRY_operator.md",tags:[],version:"v4",lastUpdatedAt:1708525070,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"TRY operator"},sidebar:"learn",previous:{title:"SHOW operator",permalink:"/v4/SHOW_operator"},next:{title:"WHILE operator",permalink:"/v4/WHILE_operator"}},s={},d=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function l(e){const t={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"TRY"})," operator creates an ",(0,r.jsx)(t.a,{href:"/v4/Actions",children:"action"})," that executes another action with ",(0,r.jsx)(t.a,{href:"/v4/Exception_handling_TRY",children:"exception handling"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"TRY action [CATCH catchAction] [FINALLY finallyAction]\n"})}),"\n",(0,r.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"TRY"})," operator creates an action that executes another action and handles exceptions within it."]}),"\n",(0,r.jsxs)(t.p,{children:["An operator form without the ",(0,r.jsx)(t.code,{children:"FINALLY"})," keyword creates an action that executes another action and intercepts errors that are thrown in it. In this case, the error is not passed anywhere."]}),"\n",(0,r.jsxs)(t.p,{children:["An operator form with the ",(0,r.jsx)(t.code,{children:"FINALLY"})," keyword creates an action that executes another action, intercepts errors that occur, then, regardless of whether an error was thrown or not, executes the action specified in the ",(0,r.jsx)(t.code,{children:"FINALLY"})," block, and then, if an error was thrown, passes this error to the top action in the stack."]}),"\n",(0,r.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"action"})}),"\n",(0,r.jsxs)(t.p,{children:["A ",(0,r.jsx)(t.a,{href:"/v4/Action_operators#contextdependent",children:"context-dependent operator"})," that describes an action to be executed with exception handling."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"catchAction"})}),"\n",(0,r.jsxs)(t.p,{children:["A context-dependent operator that describes an action to be executed if an error is thrown while executing the action. Here the error message will be written to the property ",(0,r.jsx)(t.code,{children:"System.messageCaughtException[]"}),", the java error stack will be written to ",(0,r.jsx)(t.code,{children:"System.javaStackTraceCaughtException[]"}),", and the LSF stack will be written to ",(0,r.jsx)(t.code,{children:"System.lsfStackTraceCaughtException[]"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"finallyAction"})}),"\n",(0,r.jsx)(t.p,{children:"A context-dependent operator that describes an action to be executed after the action being executed, regardless of whether or not an error has been thrown."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lsf",children:"tryToImport(FILE f)  {\r\n    TRY {\r\n        LOCAL a = BPSTRING[10] (INTEGER);\r\n\r\n        IMPORT XLS FROM f TO a = A;\r\n    }\r\n}\r\n\r\nCLASS MyLock {\r\n    lock 'Blocking'\r\n}\r\n\r\nsingleDo ()  {\r\n    NEWSESSION {\r\n        lock(MyLock.lock);\r\n        IF lockResult() THEN\r\n        TRY {\r\n            MESSAGE 'Lock Obtained';\r\n        } CATCH {\r\n            MESSAGE messageCaughtException();\r\n        } FINALLY unlock(MyLock.lock);\r\n    }\r\n}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var r=n(96540);const o={},a=r.createContext(o);function c(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);