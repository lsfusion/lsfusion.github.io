"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[83833],{28409:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=n(74848),i=n(28453);const s={title:"Indexes"},o=void 0,a={id:"Indexes",title:"Indexes",description:"Building an index by property allows storing all the values of this property in the database in an ordered form. Accordingly, the index is updated with every change of the indexed property value. Due to the index, if, for example, you filter by an indexed property, you can find the objects you need very quickly, rather than viewing all the objects that exist in the system.",source:"@site/versioned_docs/version-v4/Indexes.md",sourceDirName:".",slug:"/Indexes",permalink:"/v4/Indexes",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Indexes.md",tags:[],version:"v4",lastUpdatedAt:162446164e4,frontMatter:{title:"Indexes"},sidebar:"learn",previous:{title:"Materializations",permalink:"/v4/Materializations"},next:{title:"Tables",permalink:"/v4/Tables"}},d={},l=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function c(e){const t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Building an ",(0,r.jsx)(t.em,{children:"index"})," by property allows storing all the values of this property in the database in an ordered form. Accordingly, the index is updated with every change of the indexed property value. Due to the index, if, for example, you filter by an indexed property, you can find the objects you need very quickly, rather than viewing all the objects that exist in the system."]}),"\n",(0,r.jsxs)(t.p,{children:["Only ",(0,r.jsx)(t.a,{href:"/v4/Materializations",children:"materialized"})," properties can be indexed."]}),"\n",(0,r.jsxs)(t.p,{children:["An index can also be built on several properties at once (this is effective if, for example, you need to filter by several properties simultaneously). In addition, property parameters can be included in a composite index of this kind. The built index will be named as following: ",(0,r.jsx)(t.code,{children:"<table ID>_<property/parameter name 1>_..._<property/parameter name N>"}),". If the specified properties are stored in different ",(0,r.jsx)(t.a,{href:"/v4/Tables",children:"tables"}),", then the corresponding error will be thrown when you try to build the index."]}),"\n",(0,r.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,r.jsxs)(t.p,{children:["To create indexes, you must use the ",(0,r.jsxs)(t.a,{href:"/v4/INDEX_statement",children:[(0,r.jsx)(t.code,{children:"INDEX"})," statement"]})," or the ",(0,r.jsxs)(t.a,{href:"/v4/Property_options#indexed",children:[(0,r.jsx)(t.code,{children:"INDEXED"})," option"]})," in property options."]}),"\n",(0,r.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lsf",children:"INDEX customer(Order o);\n\ndate = DATA DATE (Order);\nINDEX date(Order o), o;\n\nINDEX name(Sku s), price(s, DATE d), d;\n"})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(96540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);