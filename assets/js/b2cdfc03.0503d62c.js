"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[77444],{44589:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=t(74848),r=t(28453);const i={title:"=> statement"},c=void 0,o={id:"=gt_statement",title:"=> statement",description:"The => statement creates a consequence.",source:"@site/versioned_docs/version-v5/=gt_statement.md",sourceDirName:".",slug:"/=gt_statement",permalink:"/=gt_statement",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/=gt_statement.md",tags:[],version:"v5",lastUpdatedAt:1708525070,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"=> statement"},sidebar:"learn",previous:{title:"CONSTRAINT statement",permalink:"/CONSTRAINT_statement"},next:{title:"CLASS statement",permalink:"/CLASS_statement"}},a={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"=>"})," statement creates a ",(0,s.jsx)(n.a,{href:"/Simple_constraints",children:"consequence"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"leftPropertyId(param1, ..., paramN) => eventClause rightExpr [RESOLVE resolveType];\n"})}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"=>"})," statement creates a consequence. This operator can declare its own local parameters when specifying the property of the consequence premise. These parameters can then be used in the expression of the consequence."]}),"\n",(0,s.jsxs)(n.p,{children:["When creating a consequence a ",(0,s.jsx)(n.a,{href:"/Constraints",children:"constraint"})," will be created, which is pretty similar to the following statement"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"CONSTRAINT eventClause leftPropertyId(param1, ..., paramN) AND NOT rightExpr MESSAGE 'Consequence violated';\n"})}),"\n",(0,s.jsxs)(n.p,{children:["but it allows you to automatically resolve situations where this constraint is violated. So using type ",(0,s.jsx)(n.code,{children:"RESOLVE LEFT"})," is similar to creating ",(0,s.jsx)(n.a,{href:"/Simple_event",children:"a simple event"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"WHEN eventClause SET(leftPropertyId(param1, ..., paramN)) DO \r\n    SETACTION(rightExpr);\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"RESOLVE RIGHT"}),", similarly:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"WHEN eventClause DROPPED(leftPropertyId(param1, ..., paramN)) DO\r\n    DROPACTION(rightExpr);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"leftPropertyId"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/IDs#propertyid",children:"ID of the property"})," specifying the consequence premise."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"param1, ..., paramN"})}),"\n",(0,s.jsxs)(n.p,{children:["List of ",(0,s.jsx)(n.a,{href:"/IDs#paramid",children:"parameters"})," of the property that defines the premise of the consequence. The number of these parameters must be equal to the number of parameters of the property."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"rightExpr"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/Expression",children:"Expression"})," whose value determines the consequence."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"resolveType"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/Simple_event",children:"Auto resolution"})," type in case of violation of the consequence. Specified by one of the following options:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"LEFT"}),": if the premise (the left part of the statement) is changed to non-",(0,s.jsx)(n.code,{children:"NULL"}),", then the consequence changes to non ",(0,s.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"RIGHT"}),": if the consequence (the right part of the statement) changes to ",(0,s.jsx)(n.code,{children:"NULL"}),", then the premise changes to ",(0,s.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"LEFT RIGHT"}),": similar to ",(0,s.jsx)(n.code,{children:"LEFT"})," and ",(0,s.jsx)(n.code,{children:"RIGHT"})," together."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"eventClause"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/Event_description_block",children:"Event description block"}),". Describes an ",(0,s.jsx)(n.a,{href:"/Events",children:"event"})," upon the occurrence of which the created consequence will be checked and automatic resolution operations will be performed."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lsf",children:"is(Sku s) = s IS Sku;\r\n// the product must have a barcode and name specified\r\nis(Sku s) => barcode(s);\r\nis(Sku s) => name(s);\r\n\r\n\r\nCLASS Invoice;\r\nCLASS InvoiceLine;\r\ninvoice = DATA Invoice (InvoiceLine);\r\nis(InvoiceLine l) = l IS InvoiceLine;\r\n// for a document line, a document must be specified, and when deleting a document, the lines of this document should be deleted\r\nis(InvoiceLine l) => invoice(l) RESOLVE RIGHT;\r\n// is equivalent to declaring document = DATA Invoice (InvoiceLine) NONULL DELETE;\r\n\r\n// aggregation for f(a, b) create an object of class x, whose property a(x) equals a, and property b(x) equals b\r\nCLASS A;\r\nCLASS B;\r\nf = DATA BOOLEAN (A, B);\r\n\r\nCLASS X;\r\na = DATA A(X);\r\nb = DATA B(X);\r\nis (X x) = x IS X;\r\n\r\nf(a,b) => [ GROUP AGGR X x WHERE x IS X BY a(x), b(x)](a,b) RESOLVE LEFT;\r\nis(X x) => f(a(x), b(x)) RESOLVE RIGHT;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var s=t(96540);const r={},i=s.createContext(r);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);