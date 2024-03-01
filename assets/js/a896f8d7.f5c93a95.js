"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[41948],{68435:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(74848),o=r(28453);const a={title:"Properties"},s=void 0,i={id:"Properties",title:"Properties",description:"A property is an element of the system that takes a set of objects (parameters) and returns exactly one object (the return value).",source:"@site/versioned_docs/version-v4/Properties.md",sourceDirName:".",slug:"/Properties",permalink:"/v4/Properties",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Properties.md",tags:[],version:"v4",lastUpdatedAt:1640850738,formattedLastUpdatedAt:"Dec 30, 2021",frontMatter:{title:"Properties"},sidebar:"learn",previous:{title:"Domain logic",permalink:"/v4/Domain_logic"},next:{title:"Operators",permalink:"/v4/Property_operators_paradigm"}},p={},c=[{value:"Type constraint",id:"type",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function l(e){const t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["A ",(0,n.jsx)(t.em,{children:"property"})," is an element of the system that takes a set of objects (",(0,n.jsx)(t.em,{children:"parameters"}),") and returns exactly one object (the ",(0,n.jsx)(t.em,{children:"return value"}),")."]}),"\n",(0,n.jsxs)(t.p,{children:["The type and the specifics of how to calculate each property are determined by the ",(0,n.jsx)(t.a,{href:"/v4/Property_operators_paradigm",children:"operator"})," used to create the property."]}),"\n",(0,n.jsx)(t.h3,{id:"type",children:"Type constraint"}),"\n",(0,n.jsxs)(t.p,{children:["Due to implementation features, all non-",(0,n.jsx)(t.code,{children:"NULL"})," property values returned must be of the same type. That is, a property cannot return, for example, a string for one set of parameters and a number for another."]}),"\n",(0,n.jsxs)(t.p,{children:["The same constraint exists for each property parameter: a property cannot have a non-",(0,n.jsx)(t.code,{children:"NULL"})," value for an object collection in which, for example, the first parameter is a string, and at the same time have a non-",(0,n.jsx)(t.code,{children:"NULL"})," value for another object collection, in which the first parameter is an object."]}),"\n",(0,n.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,n.jsxs)(t.p,{children:["To create properties, use the ",(0,n.jsxs)(t.a,{href:"/v4/=_statement",children:[(0,n.jsx)(t.code,{children:"="})," statement"]}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lsf",children:"// property defined by the context-independent DATA property operator\r\ncost 'Cost' (i) = DATA NUMERIC[12,3] (Item);\r\n\r\n// property defined by expression\r\nweightedSum 'Weighted amount' (a, b) = 2*a + 3*b;\r\n\r\n// the caption of this property will be 'diff' and the parameters will be (a, b)\r\ndiff = a - b;\r\n\r\n// property defined by DATA operator with additional property options\r\nteamName 'Team name' = DATA BPSTRING[30](Team) IN baseGroup TABLE team; \n"})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>i});var n=r(96540);const o={},a=n.createContext(o);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);