"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[17994],{62223:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var s=r(74848),n=r(28453);const a={title:"Property signature (CLASS)"},o=void 0,i={id:"Property_signature_CLASS",title:"Property signature (CLASS)",description:"The signature operator creates a property which determines whether, in terms of classes, a specified property can have a non-NULL value for the arguments passed or not. In fact, this operator deduces possible classes of a given property from its semantics, after which it uses logical operators and the classification operator to create the required property.",source:"@site/docs/Property_signature_CLASS.md",sourceDirName:".",slug:"/Property_signature_CLASS",permalink:"/next/Property_signature_CLASS",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Property_signature_CLASS.md",tags:[],version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"Jun 9, 2021",frontMatter:{title:"Property signature (CLASS)"},sidebar:"learn",previous:{title:"Classification (IS/AS)",permalink:"/next/Classification_IS_AS"},next:{title:"Selection (CASE, IF, MULTI, OVERRIDE, EXCLUSIVE)",permalink:"/next/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE"}},c={},l=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function p(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The signature operator creates a ",(0,s.jsx)(t.a,{href:"/next/Properties",children:"property"})," which determines whether, in terms of ",(0,s.jsx)(t.a,{href:"/next/Classes",children:"classes"}),", a specified property can have a non-",(0,s.jsx)(t.code,{children:"NULL"})," value for the arguments passed or not. In fact, this operator deduces possible classes of a given property from its semantics, after which it uses ",(0,s.jsx)(t.a,{href:"/next/Logical_operators_AND_OR_NOT_XOR",children:"logical"})," operators and the ",(0,s.jsx)(t.a,{href:"/next/Classification_IS_AS",children:"classification"})," operator to create the required property."]}),"\n",(0,s.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,s.jsxs)(t.p,{children:["To implement this operator, use the ",(0,s.jsxs)(t.a,{href:"/next/CLASS_operator",children:[(0,s.jsx)(t.code,{children:"CLASS"})," operator"]}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lsf",children:"CLASS A;\na = ABSTRACT CASE STRING[100] (A);\n\nCLASS B : A;\nb = DATA STRING[100] (B);\n\na(B b) += WHEN CLASS(b(b)) THEN b(b); // is equivalent to WHEN b IS B THEN b(b)\n"})})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var s=r(96540);const n={},a=s.createContext(n);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);