"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[25008],{68162:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(74848),i=t(28453);const o={title:"IF ... THEN operator"},s=void 0,l={id:"IF_..._THEN_operator",title:"IF ... THEN operator",description:"The IF ... THEN operator creates a property that implements selection with one condition (single form).",source:"@site/versioned_docs/version-v5/IF_..._THEN_operator.md",sourceDirName:".",slug:"/IF_..._THEN_operator",permalink:"/IF_..._THEN_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/IF_..._THEN_operator.md",tags:[],version:"v5",lastUpdatedAt:1708525070,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"IF ... THEN operator"},sidebar:"learn",previous:{title:"IF operator",permalink:"/IF_operator"},next:{title:"JOIN operator",permalink:"/JOIN_operator"}},a={},c=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"IF ... THEN"})," operator creates a ",(0,r.jsx)(n.a,{href:"/Properties",children:"property"})," that implements ",(0,r.jsx)(n.a,{href:"/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE",children:"selection"})," with one condition (single form)."]}),"\n",(0,r.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"IF condition \r\n    THEN value\r\n    [ELSE alternativeValue]\n"})}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"IF ... THEN"})," operator creates an action that implements conditional selection. The condition is defined using a property. If this condition is met, that is, the value of the property does not equal ",(0,r.jsx)(n.code,{children:"NULL"}),", then the value of the created property will be the value of the property specified in the ",(0,r.jsx)(n.code,{children:"THEN"})," block; otherwise, the value will be the value of the property in the ",(0,r.jsx)(n.code,{children:"ELSE"})," block, or ",(0,r.jsx)(n.code,{children:"NULL"})," if no ",(0,r.jsx)(n.code,{children:"ELSE"})," block was specified."]}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"condition"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/Expression",children:"Expression"})," defining a condition."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"value"})}),"\n",(0,r.jsx)(n.p,{children:"An expression whose value will be the value of the created property if the condition is met."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"alternativeValue"})}),"\n",(0,r.jsx)(n.p,{children:"An expression whose value will be the value of the created property if the condition is not met."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"price1 = DATA NUMERIC[10,2] (Book);\r\nprice2 = DATA NUMERIC[10,2] (Book);\r\nmaxPrice (Book b) = IF price1(b) > price2(b) THEN price1(b) ELSE price2(b);\r\n\r\n// if h is of another class, it will be NULL\r\nsex (Human h) = IF h IS Male THEN 'Male' ELSE ('Female' IF h IS Female); \r\n\r\nisDifferent(a, b) = IF a != b THEN TRUE;\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var r=t(96540);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);