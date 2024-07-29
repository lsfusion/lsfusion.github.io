"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[97948],{18329:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=a(74848),n=a(28453);const s={title:"Data properties (DATA)"},o=void 0,i={id:"Data_properties_DATA",title:"Data properties (DATA)",description:"Data property is a property which value is stored in the database and may change through the execution of the corresponding action. Each parameter and the value of a data property must belong to a certain specified class. If a parameter does not belong to the specified class or is NULL, then the property value will return NULL.",source:"@site/docs/Data_properties_DATA.md",sourceDirName:".",slug:"/Data_properties_DATA",permalink:"/Data_properties_DATA",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Data_properties_DATA.md",tags:[],version:"current",lastUpdatedAt:1623249583e3,frontMatter:{title:"Data properties (DATA)"},sidebar:"learn",previous:{title:"Operators",permalink:"/Property_operators_paradigm"},next:{title:"Composition (JOIN)",permalink:"/Composition_JOIN"}},l={},p=[{value:"Local data properties",id:"local",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function c(e){const t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"Data property"})," is a ",(0,r.jsx)(t.a,{href:"/Properties",children:"property"})," which value is stored in the database and may change through the execution of the ",(0,r.jsx)(t.a,{href:"/Property_change_CHANGE",children:"corresponding"})," action. Each parameter and the value of a data property must belong to a certain specified ",(0,r.jsx)(t.a,{href:"/Classes",children:"class"}),". If a parameter does not belong to the specified class or is ",(0,r.jsx)(t.code,{children:"NULL"}),", then the property value will return ",(0,r.jsx)(t.code,{children:"NULL"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"local",children:"Local data properties"}),"\n",(0,r.jsxs)(t.p,{children:["Data properties can be ",(0,r.jsx)(t.em,{children:"local"}),". Such properties retain their values only within the ",(0,r.jsx)(t.a,{href:"/Change_sessions",children:"session"}),", i.e. they are not saved to the database, which means when applying changes these values are reset to ",(0,r.jsx)(t.code,{children:"NULL"})," by default."]}),"\n",(0,r.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,r.jsxs)(t.p,{children:["To declare a primary property, use the ",(0,r.jsxs)(t.a,{href:"/DATA_operator",children:[(0,r.jsx)(t.code,{children:"DATA"})," operator"]}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lsf",children:"CLASS Item;\nquantity = DATA LOCAL INTEGER (Item);\n\nCLASS Country;\nisDayOff = DATA BOOLEAN (Country, DATE);\n"})})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>i});var r=a(96540);const n={},s=r.createContext(n);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);