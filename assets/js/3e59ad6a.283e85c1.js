"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[22465],{90849:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=t(74848),o=t(28453);const s={title:"EXCLUSIVE operator"},a=void 0,i={id:"EXCLUSIVE_operator",title:"EXCLUSIVE operator",description:"The EXCLUSIVE operator creates a property that implements a selection of one of the values (polymorphic form).",source:"@site/docs/EXCLUSIVE_operator.md",sourceDirName:".",slug:"/EXCLUSIVE_operator",permalink:"/EXCLUSIVE_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/EXCLUSIVE_operator.md",tags:[],version:"current",lastUpdatedAt:170852507e4,frontMatter:{title:"EXCLUSIVE operator"},sidebar:"learn",previous:{title:"DATA operator",permalink:"/DATA_operator"},next:{title:"FORMULA operator",permalink:"/FORMULA_operator"}},l={},p=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function c(e){const r={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"EXCLUSIVE"})," operator creates a ",(0,n.jsx)(r.a,{href:"/Properties",children:"property"})," that implements a ",(0,n.jsx)(r.a,{href:"/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE#exclusive",children:"selection"})," of one of the values (polymorphic form)."]}),"\n",(0,n.jsx)(r.h3,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"EXCLUSIVE expr1, ..., exprN\n"})}),"\n",(0,n.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"EXCLUSIVE"})," operator creates a property whose value will be the value of one of the properties specified in the operator. It is assumed that for any set of parameters, at most one of the properties will be non-",(0,n.jsx)(r.code,{children:"NULL"}),". The value of the property will be the value of this single non-",(0,n.jsx)(r.code,{children:"NULL"})," property, or ",(0,n.jsx)(r.code,{children:"NULL"})," if there are no such properties."]}),"\n",(0,n.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"expr1, ..., exprN"})}),"\n",(0,n.jsxs)(r.p,{children:["List of ",(0,n.jsx)(r.a,{href:"/Expression",children:"expressions"})," whose values will determine the value of the property."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-lsf",children:"background 'Color' (INTEGER i) = EXCLUSIVE RGB(255,238,165) IF i <= 5,\n                                                   RGB(255,160,160) IF i > 5;\n\nCLASS Human;\n\nCLASS Male : Human;\nCLASS Female : Human;\n\nname(Human h) = EXCLUSIVE 'Male' IF h IS Male, 'Female' IF h IS Female;\n"})})]})}function d(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>i});var n=t(96540);const o={},s=n.createContext(o);function a(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);