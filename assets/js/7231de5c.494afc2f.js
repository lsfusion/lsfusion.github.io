"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[48101],{22546:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(74848),s=r(28453);const a={title:"[] operator"},o=void 0,c={id:"Brackets_operator",title:"[] operator",description:"The ] operator creates a [property that returns an object from a structure.",source:"@site/versioned_docs/version-v4/Brackets_operator.md",sourceDirName:".",slug:"/Brackets_operator",permalink:"/v4/Brackets_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Brackets_operator.md",tags:[],version:"v4",lastUpdatedAt:170852507e4,frontMatter:{title:"[] operator"},sidebar:"learn",previous:{title:"Arithmetic operators",permalink:"/v4/Arithmetic_operators"},next:{title:"ABSTRACT operator",permalink:"/v4/ABSTRACT_operator"}},i={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"[]"})," operator creates a ",(0,n.jsx)(t.a,{href:"/v4/Properties",children:"property"})," that returns an object from a ",(0,n.jsx)(t.a,{href:"/v4/Structure_operators_STRUCT",children:"structure"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"expr [ number ]\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Where ",(0,n.jsx)(t.code,{children:"["})," and ",(0,n.jsx)(t.code,{children:"]"})," are ordinary square brackets."]}),"\n",(0,n.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"[]"})," operator creates a property that takes a structure as input and returns one of the objects of this structure. Objects are accessed using the sequence number of the object."]}),"\n",(0,n.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"expr"})}),"\n",(0,n.jsxs)(t.p,{children:["An ",(0,n.jsx)(t.a,{href:"/v4/Expression",children:"expression"})," whose value must be a structure."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"number"})}),"\n",(0,n.jsxs)(t.p,{children:["The sequence number of an object. ",(0,n.jsx)(t.a,{href:"/v4/Literals#intliteral",children:"Integer literal"}),". Must be within the range of ",(0,n.jsx)(t.code,{children:"[1..N]"}),", where ",(0,n.jsx)(t.code,{children:"N"})," is the number of objects in the structure."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lsf",children:"CLASS Letter;\nattachment1 = DATA FILE (Letter);\nattachment2 = DATA FILE (Letter);\nletterAttachments (Letter l) = STRUCT(attachment1(l), attachment2(l));\nsecondAttachment(Letter l) = letterAttachments(l)[2]; // returns attachment2\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>c});var n=r(96540);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);