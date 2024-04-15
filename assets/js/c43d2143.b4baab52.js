"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[37811],{12555:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(74848),s=n(28453);const a={id:"Property_signature_CLASS",title:"Signature matching (ISCLASS)"},o=void 0,i={id:"Property_signature_CLASS",title:"Signature matching (ISCLASS)",description:"The signature matching operator creates a property that determines, from a class perspective, whether the property specified in the operator can have a non-NULL value for the given arguments. In fact, this operator infers the possible classes of a given property from its semantics, and then, using logical operators and the classification operator, creates the required property.",source:"@site/docs/Property_signature_ISCLASS.md",sourceDirName:".",slug:"/Property_signature_CLASS",permalink:"/next/Property_signature_CLASS",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Property_signature_ISCLASS.md",tags:[],version:"current",lastUpdatedAt:1712785486,formattedLastUpdatedAt:"Apr 10, 2024",frontMatter:{id:"Property_signature_CLASS",title:"Signature matching (ISCLASS)"},sidebar:"learn",previous:{title:"Classification (IS/AS)",permalink:"/next/Classification_IS_AS"},next:{title:"Selection (CASE, IF, MULTI, OVERRIDE, EXCLUSIVE)",permalink:"/next/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE"}},c={},p=[{value:"Language",id:"language",level:3},{value:"Example",id:"example",level:3}];function l(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The signature matching operator creates a ",(0,r.jsx)(t.a,{href:"/next/Properties",children:"property"})," that determines, from a class perspective, whether the property specified in the operator can have a non-",(0,r.jsx)(t.code,{children:"NULL"})," value for the given arguments. In fact, this operator infers the possible classes of a given property from its semantics, and then, using ",(0,r.jsx)(t.a,{href:"/next/Logical_operators_AND_OR_NOT_XOR",children:"logical"})," operators and the ",(0,r.jsx)(t.a,{href:"/next/Classification_IS_AS",children:"classification"})," operator, creates the required property."]}),"\n",(0,r.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,r.jsxs)(t.p,{children:["To implement this operator, use the ",(0,r.jsxs)(t.a,{href:"/next/CLASS_operator",children:[(0,r.jsx)(t.code,{children:"ISCLASS"})," operator"]}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lsf",children:"CLASS Person;\nname = ABSTRACT CASE STRING[100] (Person);\n\nCLASS Student : Person;\nstudentName = DATA STRING[100] (Student);\n\nname(s) += WHEN ISCLASS(studentName(s)) THEN studentName(s); // is equivalent to WHEN s IS Student THEN studentName(s)\n"})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(96540);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);