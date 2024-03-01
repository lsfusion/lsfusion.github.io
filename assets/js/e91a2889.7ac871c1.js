"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[26460],{9492:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var a=o(74848),t=o(28453);const s={title:"Language"},r=void 0,l={id:"Language",title:"Language",description:"lsFusion is a programming language that describes lsFusion modules.",source:"@site/versioned_docs/version-v4/Language.md",sourceDirName:".",slug:"/Language",permalink:"/v4/Language",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Language.md",tags:[],version:"v4",lastUpdatedAt:1640850738,formattedLastUpdatedAt:"Dec 30, 2021",frontMatter:{title:"Language"},sidebar:"learn",previous:{title:"Chat",permalink:"/v4/Chat"},next:{title:"Tokens",permalink:"/v4/Tokens"}},d={},i=[{value:"Example",id:"example",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"lsFusion"})," is a programming language that describes lsFusion ",(0,a.jsx)(n.a,{href:"/v4/Modules",children:"modules"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Each module consists of a sequence of ",(0,a.jsx)(n.a,{href:"/v4/Statements",children:"statements"})," divided into module ",(0,a.jsx)(n.a,{href:"/v4/Module_header",children:(0,a.jsx)(n.em,{children:"header"})})," and ",(0,a.jsx)(n.em,{children:"body"}),". The header may include four special statements: ",(0,a.jsx)(n.code,{children:"MODULE"}),", ",(0,a.jsx)(n.code,{children:"REQUIRE"}),", ",(0,a.jsx)(n.code,{children:"PRIORITY"})," and ",(0,a.jsx)(n.code,{children:"NAMESPACE"}),", which define module parameters. The header is followed by the module body which consists of the remaining statements and describes the logic of this module."]}),"\n",(0,a.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"// Module header\nMODULE LanguageExample;\n\nREQUIRE System;\n\nNAMESPACE Example;\n\n// Module body\n\n// Classes declaration\nCLASS Employee;\nCLASS Company;\n\n// Properties declaration\nname(employee) = DATA BPSTRING[100](Employee);\nage(employee) = DATA INTEGER(Employee);\ncompany(employee) = DATA Company(Employee);\n\nname(company) = DATA BPSTRING[100](Company);\n\n// Form declaration\nFORM employeeForm\n    OBJECTS e = Employee\n    PROPERTIES(e) name, age, company\n;\n\n// Adding a form to the navigator\nNAVIGATOR {\n    NEW employeeForm;\n}\n"})})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>l});var a=o(96540);const t={},s=a.createContext(t);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);