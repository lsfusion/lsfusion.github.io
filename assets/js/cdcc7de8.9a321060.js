"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[34586],{82479:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var s=n(74848),a=n(28453);const r={title:"META statement"},c=void 0,i={id:"META_statement",title:"META statement",description:"The META statement creates a new metacode.",source:"@site/docs/META_statement.md",sourceDirName:".",slug:"/META_statement",permalink:"/META_statement",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/META_statement.md",tags:[],version:"current",lastUpdatedAt:170852507e4,frontMatter:{title:"META statement"},sidebar:"learn",previous:{title:"ACTION+ statement",permalink:"/ACTION+_statement"},next:{title:"@ statement",permalink:"/commat_statement"}},o={},d=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function l(e){const t={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"META"})," statement creates a new ",(0,s.jsx)(t.a,{href:"/Metaprogramming#metacode",children:"metacode"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"META name(param1, ..., paramN)\n    statement1\n    ...\n    statementM\nEND\n"})}),"\n",(0,s.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"META"})," statement declares a new metacode and adds it to the current ",(0,s.jsx)(t.a,{href:"/Modules",children:"module"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"META"})," statement is an exception - it is not supposed to end with a semicolon."]}),"\n",(0,s.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"name"})}),"\n",(0,s.jsxs)(t.p,{children:["Metacode name. ",(0,s.jsx)(t.a,{href:"/IDs#id",children:"Simple ID"}),". Must be unique within the current namespace among metacodes with the same number of parameters."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"param1, ..., paramN"})}),"\n",(0,s.jsx)(t.p,{children:"List of metacode parameters. Each parameter is defined by a simple ID. The list cannot be empty."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"statement1 ... statementM"})}),"\n",(0,s.jsxs)(t.p,{children:["A sequence of  ",(0,s.jsx)(t.a,{href:"/Statements",children:"statements"})," represented by a block of code. Statements may contain ",(0,s.jsxs)(t.a,{href:"/Metaprogramming#concat",children:["special operators ",(0,s.jsx)(t.code,{children:"##"})," and ",(0,s.jsx)(t.code,{children:"###"})]})," used for concatenating ",(0,s.jsx)(t.a,{href:"/Tokens",children:"lexemes"}),". Statements cannot include another ",(0,s.jsx)(t.code,{children:"META"})," statement."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lsf",children:"META objectProperties(object, type, caption)\n    object##Name 'Name'##caption = DATA BPSTRING[100](###object); // capitalizing the first letter\n    object##Type 'Type'##caption = DATA type (###object);\n    object##Value 'Cost'##caption = DATA INTEGER (###object);\nEND\n\nMETA objectProperties(object, type)\n    @objectProperties(object, type, '');\nEND\n"})})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var s=n(96540);const a={},r=s.createContext(a);function c(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);