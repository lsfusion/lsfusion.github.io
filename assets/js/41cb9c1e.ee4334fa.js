"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[38995],{98163:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var r=a(74848),i=a(28453);const n={title:"Materializations"},o=void 0,s={id:"Materializations",title:"Materializations",description:"Almost any aggregated property in the platform can be materialized. In this case, the property will be stored in the database permanently and automatically updated when the data on which this property depends is changed. At the same time, when reading the values of the materialized property, these values will be read directly from the database, as if the property was data (and not calculated every time). Accordingly, all data properties are materialized by definition.",source:"@site/versioned_docs/version-v5/Materializations.md",sourceDirName:".",slug:"/Materializations",permalink:"/Materializations",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/Materializations.md",tags:[],version:"v5",lastUpdatedAt:1685108136e3,frontMatter:{title:"Materializations"},sidebar:"learn",previous:{title:"Execution",permalink:"/Execution"},next:{title:"Indexes",permalink:"/Indexes"}},d={},l=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function c(e){const t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Almost any aggregated ",(0,r.jsx)(t.a,{href:"/Properties",children:"property"})," in the platform can be ",(0,r.jsx)(t.em,{children:"materialized"}),". In this case, the property will be stored in the database permanently and automatically updated when the data on which this property depends is changed. At the same time, when reading the values of the materialized property, these values will be read directly from the database, as if the property was ",(0,r.jsx)(t.a,{href:"/Data_properties_DATA",children:"data"})," (and not calculated every time). Accordingly, all data properties are materialized by definition."]}),"\n",(0,r.jsxs)(t.p,{children:["A property can be materialized if and only if for it there is a finite number of object collections for which the value of this property is not ",(0,r.jsx)(t.code,{children:"NULL"})," (that is, the iteration operation for all of its non-",(0,r.jsx)(t.code,{children:"NULL"})," values is ",(0,r.jsx)(t.a,{href:"/Set_operations#correct",children:"correct"}),")"]}),"\n",(0,r.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,r.jsxs)(t.p,{children:["To materialize a property, use the ",(0,r.jsxs)(t.a,{href:"/Property_options#persistent",children:[(0,r.jsx)(t.code,{children:"MATERIALIZED"})," option"]})," in the property options."]}),"\n",(0,r.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lsf",children:"sum = GROUP SUM sum(OrderDetail od) BY order(od) MATERIALIZED;\ndate(OrderDetail od) = date(order(od)) MATERIALIZED;\n\n // such a property cannot be materialized, since it is not NULL for an infinite number of dates\nlastDate(Customer customer, DATE date) = GROUP LAST date(Order order) IF customer(order) = customer AND date(order) < date ORDER order;\n"})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>s});var r=a(96540);const i={},n=r.createContext(i);function o(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);