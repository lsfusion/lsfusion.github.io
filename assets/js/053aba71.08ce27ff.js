"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[61221],{27311:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var o=t(74848),n=t(28453);const s={title:"OVERRIDE operator"},i=void 0,a={id:"OVERRIDE_operator",title:"OVERRIDE operator",description:"The OVERRIDE operator creates a property that implements the selection of one of the values (polymorphic form).",source:"@site/docs/OVERRIDE_operator.md",sourceDirName:".",slug:"/OVERRIDE_operator",permalink:"/OVERRIDE_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/OVERRIDE_operator.md",tags:[],version:"current",lastUpdatedAt:170852507e4,frontMatter:{title:"OVERRIDE operator"},sidebar:"learn",previous:{title:"MULTI operator",permalink:"/MULTI_operator"},next:{title:"PARTITION operator",permalink:"/PARTITION_operator"}},l={},p=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function c(e){const r={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.code,{children:"OVERRIDE"})," operator creates a ",(0,o.jsx)(r.a,{href:"/Properties",children:"property"})," that implements the ",(0,o.jsx)(r.a,{href:"/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE#exclusive",children:"selection"})," of one of the values (polymorphic form)."]}),"\n",(0,o.jsx)(r.h3,{id:"syntax",children:"Syntax"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"OVERRIDE expr1, ..., exprN\n"})}),"\n",(0,o.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.code,{children:"OVERRIDE"})," operator creates a property whose value will be the value of one of the properties specified in the operator. Selection is made among properties with a non-",(0,o.jsx)(r.code,{children:"NULL"})," value. If multiple properties are non-",(0,o.jsx)(r.code,{children:"NULL"}),", the value of the first of these properties is selected."]}),"\n",(0,o.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.code,{children:"expr1, ..., exprN"})}),"\n",(0,o.jsxs)(r.p,{children:["List of ",(0,o.jsx)(r.a,{href:"/Expression",children:"expressions"})," whose values will determine the value of the property."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-lsf",children:"CLASS Group;\nmarkup = DATA NUMERIC[8,2] (Group);\n\nmarkup = DATA NUMERIC[8,2] (Book);\ngroup = DATA Group (Book);\noverMarkup (Book b) = OVERRIDE markup(b), markup(group(b));\n\nnotNullDate (INTEGER i) = OVERRIDE date(i), 2010_01_01;\n"})})]})}function d(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>a});var o=t(96540);const n={},s=o.createContext(n);function i(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);