"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[13101],{15874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var r=n(74848),s=n(28453);const i={title:"MULTI operator"},o=void 0,l={id:"MULTI_operator",title:"MULTI operator",description:"The MULTI operator creates a property that implements selection of one of the values (polymorphic form).",source:"@site/docs/MULTI_operator.md",sourceDirName:".",slug:"/MULTI_operator",permalink:"/next/MULTI_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/MULTI_operator.md",tags:[],version:"current",lastUpdatedAt:1712785486e3,frontMatter:{title:"MULTI operator"},sidebar:"learn",previous:{title:"MIN operator",permalink:"/next/MIN_operator"},next:{title:"OVERRIDE operator",permalink:"/next/OVERRIDE_operator"}},c={},a=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"MULTI"})," operator creates a ",(0,r.jsx)(t.a,{href:"/next/Properties",children:"property"})," that implements ",(0,r.jsx)(t.a,{href:"/next/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE#single",children:"selection"})," of one of the values (polymorphic form)."]}),"\n",(0,r.jsx)(t.h3,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"MULTI expr1, ..., exprN [exclusionType]\n"})}),"\n",(0,r.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"MULTI"})," operator creates a property which value will be the value of one of the properties specified in the operator. The property selection condition is that the parameters match this property ",(0,r.jsx)(t.a,{href:"/next/CLASS_operator",children:"signature"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"expr1, ..., exprN"})}),"\n",(0,r.jsxs)(t.p,{children:["A list of ",(0,r.jsx)(t.a,{href:"/next/Expression",children:"expressions"})," defining the properties from which the selection is made."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"exclusionType"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/next/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE#exclusive",children:"Type of mutual exclusion"}),". Determines whether several conditions for the property selection can be met simultaneously with a certain set of parameters. It is specified by one of the keywords:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"EXCLUSIVE"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"OVERRIDE"})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"EXCLUSIVE"})," type indicates that the conditions for the property selection cannot be met simultaneously. The ",(0,r.jsx)(t.code,{children:"OVERRIDE"})," type allows several conditions to be met simultaneously, in which case the first property in the list which selection condition is met will be selected."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"EXCLUSIVE"})," type is used by default."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lsf",children:"nameMulti (Human h) = MULTI 'Male' IF h IS Male, 'Female' IF h IS Female;\n\nCLASS Ledger;\nCLASS InLedger : Ledger;\nquantity = DATA INTEGER (InLedger);\n\nCLASS OutLedger : Ledger;\nquantity = DATA INTEGER (OutLedger);\n\nsignedQuantity (Ledger l) = MULTI quantity[InLedger](l), quantity[OutLedger](l);\n"})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var r=n(96540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);