"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[14600],{12002:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var t=o(74848),n=o(28453);const s={title:"OVERRIDE operator"},i=void 0,a={id:"OVERRIDE_operator",title:"OVERRIDE operator",description:"The OVERRIDE operator creates a property that implements the selection of one of the values (polymorphic form).",source:"@site/versioned_docs/version-v5/OVERRIDE_operator.md",sourceDirName:".",slug:"/OVERRIDE_operator",permalink:"/v5/OVERRIDE_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/OVERRIDE_operator.md",tags:[],version:"v5",lastUpdatedAt:170852507e4,frontMatter:{title:"OVERRIDE operator"},sidebar:"learn",previous:{title:"MULTI operator",permalink:"/v5/MULTI_operator"},next:{title:"PARTITION operator",permalink:"/v5/PARTITION_operator"}},l={},p=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function c(e){const r={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"OVERRIDE"})," operator creates a ",(0,t.jsx)(r.a,{href:"/v5/Properties",children:"property"})," that implements the ",(0,t.jsx)(r.a,{href:"/v5/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE#exclusive",children:"selection"})," of one of the values (polymorphic form)."]}),"\n",(0,t.jsx)(r.h3,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"OVERRIDE expr1, ..., exprN\n"})}),"\n",(0,t.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"OVERRIDE"})," operator creates a property whose value will be the value of one of the properties specified in the operator. Selection is made among properties with a non-",(0,t.jsx)(r.code,{children:"NULL"})," value. If multiple properties are non-",(0,t.jsx)(r.code,{children:"NULL"}),", the value of the first of these properties is selected."]}),"\n",(0,t.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"expr1, ..., exprN"})}),"\n",(0,t.jsxs)(r.p,{children:["List of ",(0,t.jsx)(r.a,{href:"/v5/Expression",children:"expressions"})," whose values will determine the value of the property."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lsf",children:"CLASS Group;\nmarkup = DATA NUMERIC[8,2] (Group);\n\nmarkup = DATA NUMERIC[8,2] (Book);\ngroup = DATA Group (Book);\noverMarkup (Book b) = OVERRIDE markup(b), markup(group(b));\n\nnotNullDate (INTEGER i) = OVERRIDE date(i), 2010_01_01;\n"})})]})}function d(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,r,o)=>{o.d(r,{R:()=>i,x:()=>a});var t=o(96540);const n={},s=t.createContext(n);function i(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);