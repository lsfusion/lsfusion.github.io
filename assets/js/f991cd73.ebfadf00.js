"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[83409],{40343:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var r=n(74848),s=n(28453);const i={title:"INDEX statement"},a=void 0,d={id:"INDEX_statement",title:"INDEX statement",description:"The INDEX statement creates a new index.",source:"@site/versioned_docs/version-v4/INDEX_statement.md",sourceDirName:".",slug:"/INDEX_statement",permalink:"/v4/INDEX_statement",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/INDEX_statement.md",tags:[],version:"v4",lastUpdatedAt:170852507e4,frontMatter:{title:"INDEX statement"},sidebar:"learn",previous:{title:"TABLE statement",permalink:"/v4/TABLE_statement"},next:{title:"BEFORE statement",permalink:"/v4/BEFORE_statement"}},l={},o=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function c(e){const t={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"INDEX"})," statement creates a new ",(0,r.jsx)(t.a,{href:"/v4/Indexes",children:"index"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"INDEX field1, ..., fieldN;\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Each field of the ",(0,r.jsx)(t.code,{children:"fieldi"})," ",(0,r.jsx)(t.a,{href:"/v4/Tables",children:"table"})," that the system should use to build an index can be described either by specifying a ",(0,r.jsx)(t.a,{href:"/v4/Properties",children:"property"})," stored in this table:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"propertyId(param1, ..., paramN)\n"})}),"\n",(0,r.jsx)(t.p,{children:"or by specifying a typed parameter referring to the corresponding key field:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"param\n"})}),"\n",(0,r.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"INDEX"})," statement adds a new index by an ordered list of fields of a certain table. The list must contain at least one property. The table that the index should be built for is determined by the first property in the list. Also, the parameters passed to this property are used to determine the correspondence of the parameters to the key fields of the table. Accordingly, all other properties in the list should have the same number of parameters and be stored in the same table as the first property. The parameters specified in the list will correspond to the key fields of the table."]}),"\n",(0,r.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"propertyId"})}),"\n",(0,r.jsxs)(t.p,{children:["The ID of the ",(0,r.jsx)(t.a,{href:"/v4/IDs#propertyid",children:"property"})," that should be stored in the table for which the index is being created."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"param1, ..., paramN"})}),"\n",(0,r.jsxs)(t.p,{children:["A list of property parameters. Each element of the list is a ",(0,r.jsx)(t.a,{href:"/v4/IDs#paramid",children:"typed parameter"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"param"})}),"\n",(0,r.jsx)(t.p,{children:"A typed parameter that determines the key field of the table."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lsf",children:"INDEX customer(Order o);\n\ndate = DATA DATE (Order);\nINDEX date(Order o), o;\n\nINDEX supplier(Sku s, DATE d), s, price(s, d), d;\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>d});var r=n(96540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);