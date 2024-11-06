"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[58594],{73164:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=t(74848),r=t(28453);const a={title:"CHANGECLASS operator"},o=void 0,c={id:"CHANGECLASS_operator",title:"CHANGECLASS operator",description:"The CHANGECLASS operator creates an action that changes objects classes.",source:"@site/docs/CHANGECLASS_operator.md",sourceDirName:".",slug:"/CHANGECLASS_operator",permalink:"/CHANGECLASS_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/CHANGECLASS_operator.md",tags:[],version:"current",lastUpdatedAt:170852507e4,frontMatter:{title:"CHANGECLASS operator"},sidebar:"learn",previous:{title:"CASE operator",permalink:"/CASE_action_operator"},next:{title:"COLLAPSE operator",permalink:"/COLLAPSE_operator"}},i={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"CHANGECLASS"})," operator creates an ",(0,s.jsx)(n.a,{href:"/Actions",children:"action"})," that ",(0,s.jsx)(n.a,{href:"/Class_change_CHANGECLASS_DELETE",children:"changes objects classes"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"CHANGECLASS expr TO className [WHERE whereExpr]\n"})}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"CHANGECLASS"})," operator creates an action that changes the class of objects for which a certain condition is met. This operator can add its local parameter, which will correspond to the objects being iterated. In this case, the ",(0,s.jsx)(n.code,{children:"WHERE"})," block is required. This local parameter will not be a parameter of the action being created."]}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"expr"})}),"\n",(0,s.jsxs)(n.p,{children:["An ",(0,s.jsx)(n.a,{href:"/Expression",children:"expression"})," or ",(0,s.jsx)(n.a,{href:"/IDs#paramid",children:"typed parameter"}),". You can either use an already declared parameter as a typed parameter, or declare a new local parameter. When using an expression, new local parameters cannot be added."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"className"})}),"\n",(0,s.jsxs)(n.p,{children:["The name of the class to which you want to change the object classes. A ",(0,s.jsx)(n.a,{href:"/IDs#cid",children:"composite ID"}),", since the class must be a ",(0,s.jsx)(n.a,{href:"/User_classes",children:"custom"})," class."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"whereExpr"})}),"\n",(0,s.jsxs)(n.p,{children:["An expression whose value is a condition for the created action. If not specified, it is considered equal to ",(0,s.jsx)(n.code,{children:"TRUE"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lsf",children:"CLASS Document;\ndate = DATA DATE (Document);\n\nCLASS ClosedDocument : Document;\n// sets status to closed for all documents with a date older than 2 weeks\nchangeStatus()  {\n    CHANGECLASS Document d TO ClosedDocument WHERE sum(date(d), 14) <= currentDate();\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(96540);const r={},a=s.createContext(r);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);