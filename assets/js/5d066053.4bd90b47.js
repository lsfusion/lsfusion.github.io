"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[2780],{7425:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>g});var r=n(74848),a=n(28453);const o={title:"Aggregations"},i=void 0,s={id:"Aggregations",title:"Aggregations",description:"Aggregation is the creation of a unique (aggregate) of the object corresponding to each non-NULL value of some aggregated property. Each such object is assumed to have properties that map this object to each aggregated property parameter, and, conversely, a property that maps the aggregated property parameters to this object.",source:"@site/versioned_docs/version-v4/Aggregations.md",sourceDirName:".",slug:"/Aggregations",permalink:"/v4/Aggregations",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Aggregations.md",tags:[],version:"v4",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"Jul 7, 2021",frontMatter:{title:"Aggregations"},sidebar:"learn",previous:{title:"User classes",permalink:"/v4/User_classes"},next:{title:"View logic",permalink:"/v4/View_logic"}},c={},g=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function p(e){const t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Aggregation is the creation of a unique (",(0,r.jsx)(t.em,{children:"aggregate"}),") of the object corresponding to each non-",(0,r.jsx)(t.code,{children:"NULL"})," value of some ",(0,r.jsx)(t.em,{children:"aggregated"})," property. Each such object is assumed to have properties that map this object to each aggregated property parameter, and, conversely, a property that maps the aggregated property parameters to this object."]}),"\n",(0,r.jsxs)(t.p,{children:["The aggregated object and each aggregated property parameter must belong to a specified ",(0,r.jsx)(t.a,{href:"/v4/Classes",children:"class"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["The aggregation mechanism is implemented using two ",(0,r.jsx)(t.a,{href:"/v4/Simple_constraints",children:"consequences"})," with automatic resolution and an ",(0,r.jsx)(t.a,{href:"/v4/Grouping_GROUP",children:"aggregation"})," operator. With the help of the aggregation operator, the first consequence creates an object when the aggregated property becomes non-",(0,r.jsx)(t.code,{children:"NULL"}),", and writes the necessary values to all its properties. The second consequence deletes the object when the aggregated property becomes ",(0,r.jsx)(t.code,{children:"NULL"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,r.jsxs)(t.p,{children:["To create aggregations, use the ",(0,r.jsxs)(t.a,{href:"/v4/AGGR_operator",children:["operator",(0,r.jsx)(t.code,{children:"AGGR"})]}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lsf",children:"CLASS A; CLASS B; CLASS C;\r\nf = DATA INTEGER (A, B);\r\nc = AGGR C WHERE f(A a, B b) MATERIALIZED INDEXED;\r\n\r\nCLASS AB;\r\nab = AGGR AB WHERE A a IS A AND B b IS B; // for each A B pair creates an object AB\r\n\r\nCLASS Shipment 'Delivery';\r\ndate = ABSTRACT DATE (Shipment);\r\nCLASS Invoice 'Invoice';\r\ncreateShipment 'Create delivery' = DATA BOOLEAN (Invoice);\r\ndate 'Shipment date' = DATA DATE (Invoice);\r\nCLASS ShipmentInvoice 'Delivery by invoice' : Shipment;\r\n// creating a delivery by invoice, if the option for delivery creation is defined for the invoice\r\nshipment(Invoice invoice) = AGGR ShipmentInvoice WHERE createShipment(invoice); \r\ndate(ShipmentInvoice si) += sum(date(invoice(si)),1); // delivery date = invoice date + 1\n"})})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var r=n(96540);const a={},o=r.createContext(a);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);