"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[77444],{44589:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=t(74848),i=t(28453);const r={title:"=> statement"},c=void 0,o={id:"=gt_statement",title:"=> statement",description:"The => statement creates a consequence.",source:"@site/versioned_docs/version-v5/=gt_statement.md",sourceDirName:".",slug:"/=gt_statement",permalink:"/v5/=gt_statement",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/=gt_statement.md",tags:[],version:"v5",lastUpdatedAt:170852507e4,frontMatter:{title:"=> statement"},sidebar:"learn",previous:{title:"CONSTRAINT statement",permalink:"/v5/CONSTRAINT_statement"},next:{title:"CLASS statement",permalink:"/v5/CLASS_statement"}},a={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"=>"})," statement creates a ",(0,s.jsx)(n.a,{href:"/v5/Simple_constraints",children:"consequence"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"leftPropertyId(param1, ..., paramN) => eventClause rightExpr [RESOLVE resolveType];\n"})}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"=>"})," statement creates a consequence. This operator can declare its own local parameters when specifying the property of the consequence premise. These parameters can then be used in the expression of the consequence."]}),"\n",(0,s.jsxs)(n.p,{children:["When creating a consequence a ",(0,s.jsx)(n.a,{href:"/v5/Constraints",children:"constraint"})," will be created, which is pretty similar to the following statement"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"CONSTRAINT eventClause leftPropertyId(param1, ..., paramN) AND NOT rightExpr MESSAGE 'Consequence violated';\n"})}),"\n",(0,s.jsxs)(n.p,{children:["but it allows you to automatically resolve situations where this constraint is violated. So using type ",(0,s.jsx)(n.code,{children:"RESOLVE LEFT"})," is similar to creating ",(0,s.jsx)(n.a,{href:"/v5/Simple_event",children:"a simple event"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"WHEN eventClause SET(leftPropertyId(param1, ..., paramN)) DO \n    SETACTION(rightExpr);\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"RESOLVE RIGHT"}),", similarly:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"WHEN eventClause DROPPED(leftPropertyId(param1, ..., paramN)) DO\n    DROPACTION(rightExpr);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"leftPropertyId"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/v5/IDs#propertyid",children:"ID of the property"})," specifying the consequence premise."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"param1, ..., paramN"})}),"\n",(0,s.jsxs)(n.p,{children:["List of ",(0,s.jsx)(n.a,{href:"/v5/IDs#paramid",children:"parameters"})," of the property that defines the premise of the consequence. The number of these parameters must be equal to the number of parameters of the property."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"rightExpr"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/v5/Expression",children:"Expression"})," whose value determines the consequence."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"resolveType"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/v5/Simple_event",children:"Auto resolution"})," type in case of violation of the consequence. Specified by one of the following options:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"LEFT"}),": if the premise (the left part of the statement) is changed to non-",(0,s.jsx)(n.code,{children:"NULL"}),", then the consequence changes to non ",(0,s.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"RIGHT"}),": if the consequence (the right part of the statement) changes to ",(0,s.jsx)(n.code,{children:"NULL"}),", then the premise changes to ",(0,s.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"LEFT RIGHT"}),": similar to ",(0,s.jsx)(n.code,{children:"LEFT"})," and ",(0,s.jsx)(n.code,{children:"RIGHT"})," together."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"eventClause"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/v5/Event_description_block",children:"Event description block"}),". Describes an ",(0,s.jsx)(n.a,{href:"/v5/Events",children:"event"})," upon the occurrence of which the created consequence will be checked and automatic resolution operations will be performed."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lsf",children:"is(Sku s) = s IS Sku;\n// the product must have a barcode and name specified\nis(Sku s) => barcode(s);\nis(Sku s) => name(s);\n\n\nCLASS Invoice;\nCLASS InvoiceLine;\ninvoice = DATA Invoice (InvoiceLine);\nis(InvoiceLine l) = l IS InvoiceLine;\n// for a document line, a document must be specified, and when deleting a document, the lines of this document should be deleted\nis(InvoiceLine l) => invoice(l) RESOLVE RIGHT;\n// is equivalent to declaring document = DATA Invoice (InvoiceLine) NONULL DELETE;\n\n// aggregation for f(a, b) create an object of class x, whose property a(x) equals a, and property b(x) equals b\nCLASS A;\nCLASS B;\nf = DATA BOOLEAN (A, B);\n\nCLASS X;\na = DATA A(X);\nb = DATA B(X);\nis (X x) = x IS X;\n\nf(a,b) => [ GROUP AGGR X x WHERE x IS X BY a(x), b(x)](a,b) RESOLVE LEFT;\nis(X x) => f(a(x), b(x)) RESOLVE RIGHT;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var s=t(96540);const i={},r=s.createContext(i);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);