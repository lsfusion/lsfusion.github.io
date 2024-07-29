"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[33750],{50722:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=s(74848),t=s(28453);const o={title:"DATA operator"},i=void 0,a={id:"DATA_operator",title:"DATA operator",description:"The DATA operator creates a data property.",source:"@site/versioned_docs/version-v5/DATA_operator.md",sourceDirName:".",slug:"/DATA_operator",permalink:"/v5/DATA_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/DATA_operator.md",tags:[],version:"v5",lastUpdatedAt:170852507e4,frontMatter:{title:"DATA operator"},sidebar:"learn",previous:{title:"CONCAT operator",permalink:"/v5/CONCAT_operator"},next:{title:"EXCLUSIVE operator",permalink:"/v5/EXCLUSIVE_operator"}},l={},c=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const r={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"DATA"})," operator creates a ",(0,n.jsx)(r.a,{href:"/v5/Data_properties_DATA",children:"data property"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"DATA [LOCAL [NESTED]] returnClass (argumentClass1, ..., argumentClassN)\n"})}),"\n",(0,n.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"DATA"})," operator creates a data property. This ",(0,n.jsx)(r.a,{href:"/v5/Property_operators_paradigm",children:"property operator"})," cannot be used inside ",(0,n.jsx)(r.a,{href:"/v5/Expression",children:"expressions"}),". The data property can be created local by specifying the keyword ",(0,n.jsx)(r.code,{children:"LOCAL"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["This operator cannot be used in the ",(0,n.jsxs)(r.a,{href:"/v5/JOIN_operator",children:[(0,n.jsx)(r.code,{children:"JOIN"})," operator"]})," (inside ",(0,n.jsx)(r.code,{children:"[ ]"}),"), since a name must be specified for the data property."]}),"\n",(0,n.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"LOCAL"})}),"\n",(0,n.jsxs)(r.p,{children:["A keyword that, when specified, creates a ",(0,n.jsx)(r.a,{href:"/v5/Data_properties_DATA#local",children:"local data property"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"NESTED"})}),"\n",(0,n.jsxs)(r.p,{children:["A keyword that, when specified, marks the local property as ",(0,n.jsx)(r.a,{href:"/v5/Session_management#nested",children:"nested"})," that is, all its changes will be visible in new sessions, and when these sessions are closed, changes to this property will be applied to the current session. Note that this behavior is similar to the behavior of a regular local property (not ",(0,n.jsx)(r.code,{children:"NESTED"}),") when using the ",(0,n.jsxs)(r.a,{href:"/v5/NEWSESSION_operator",children:[(0,n.jsx)(r.code,{children:"NEWSESSION"})," operator"]})," with the specified keyword ",(0,n.jsx)(r.code,{children:"NESTED LOCAL"})," (or just ",(0,n.jsx)(r.code,{children:"NESTED"})," if this local property is explicitly specified in the property list)."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"returnClass"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/v5/IDs#classid",children:"Class ID"})," of the return value of a property."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"argumentClass1, ..., argumentClassN"})}),"\n",(0,n.jsx)(r.p,{children:"A list of class IDs for property arguments."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-lsf",children:"CLASS Item;\nquantity = DATA LOCAL INTEGER (Item);\n\nCLASS Country;\nisDayOff = DATA BOOLEAN (Country, DATE);\n"})})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>a});var n=s(96540);const t={},o=n.createContext(t);function i(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);