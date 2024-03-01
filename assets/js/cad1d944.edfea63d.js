"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[94147],{91553:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=n(74848),r=n(28453);const i={title:"CONSTRAINT statement"},a=void 0,o={id:"CONSTRAINT_statement",title:"CONSTRAINT statement",description:"The CONSTRAINT statement creates a constraint.",source:"@site/docs/CONSTRAINT_statement.md",sourceDirName:".",slug:"/CONSTRAINT_statement",permalink:"/next/CONSTRAINT_statement",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/CONSTRAINT_statement.md",tags:[],version:"current",lastUpdatedAt:1708527726,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"CONSTRAINT statement"},sidebar:"learn",previous:{title:"<- WHEN statement",permalink:"/next/lt-_WHEN_statement"},next:{title:"=> statement",permalink:"/next/=gt_statement"}},l={},c=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"CONSTRAINT"})," statement creates a ",(0,s.jsx)(t.a,{href:"/next/Constraints",children:"constraint"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"CONSTRAINT eventClause constraintExpr [CHECKED [BY propertyId1, ..., propertyIdN]] MESSAGE messageExpr;\n"})}),"\n",(0,s.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"CONSTRAINT"})," statement creates a constraint. If the constraint is violated, the user will be shown the message defined in the statement."]}),"\n",(0,s.jsxs)(t.p,{children:["Also, by using the ",(0,s.jsx)(t.code,{children:"CHECKED"})," option you can use the constraint when showing dialogs for changing properties whose values may violate the constraint if changed. In this instance an additional filter will be set in the dialog so that, when the property value changes, the constraint is not violated. If it is necessary to limit the set of properties for which the above filtering will be performed, the list of properties can be specified after the keyword ",(0,s.jsx)(t.code,{children:"BY"}),"."]}),"\n",(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsx)(t.p,{children:"Creating a constraint is pretty similar to the following statements:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lsf",children:"constraintProperty = constraintExpr;\r\nWHEN eventClause [=GROUP MAX constraintProperty()]() DO {\r\n    PRINT outConstraintPropertyForm MESSAGE NOWAIT;\r\n    CANCEL;\r\n}\n"})}),(0,s.jsxs)(t.p,{children:["but it also has ",(0,s.jsx)(t.a,{href:"/next/Constraints",children:"a number of advantages"}),"."]})]}),"\n",(0,s.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"eventClause"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/next/Event_description_block",children:"Event description block"}),". Describes ",(0,s.jsx)(t.a,{href:"/next/Events",children:"the event"})," upon occurrence of which the created constraint will be checked."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"constraintExpr"})}),"\n",(0,s.jsxs)(t.p,{children:["An ",(0,s.jsx)(t.a,{href:"/next/Expression",children:"expression"})," whose value is a condition for the constraint being created. If the obtained property does not contain the ",(0,s.jsx)(t.code,{children:"PREV"})," operator, the platform automatically wraps it into the ",(0,s.jsx)(t.code,{children:"SET"})," operator."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"propertyId1, ..., propertyIdN"})}),"\n",(0,s.jsxs)(t.p,{children:["List of ",(0,s.jsx)(t.a,{href:"/next/IDs#propertyid",children:"property IDs"}),". When showing change dialog for each property in that list, options that violate the created constraint will be filtered."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"messageExpr"})}),"\n",(0,s.jsxs)(t.p,{children:["An expression whose value is shown as a message to the user when the set constraint is violated. It may be either a ",(0,s.jsx)(t.a,{href:"/next/IDs#strliteral",children:"string literal"})," or a property without parameters."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lsf",children:"// balance not less than 0\r\nCONSTRAINT balance(Sku s, Stock st) < 0\r\n    MESSAGE 'The balance cannot be negative for ' + (GROUP CONCAT 'Product: ' + name(Sku ss) + ' Warehouse: ' + name(Stock sst), '\\n' IF SET(balance(ss, sst) < 0)  ORDER sst);\r\n\r\nbarcode = DATA STRING[15] (Sku);\r\n// \"emulation\" security policy\r\nCONSTRAINT DROPCHANGED(barcode(Sku s)) AND name(currentUser()) != 'admin' MESSAGE 'Only the administrator is allowed to change the barcode for an already created product';\r\n\r\nsku = DATA Sku (OrderDetail);\r\nin = DATA BOOLEAN (Sku, Customer);\r\n\r\nCONSTRAINT sku(OrderDetail d) AND NOT in(sku(d), customer(order(d)))\r\n    CHECKED BY sku[OrderDetail] // a filter by available sku when selecting an item for an order line will be applied\r\n    MESSAGE 'In the order, a product unavailable to the user is selected for the selected customer';\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(96540);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);