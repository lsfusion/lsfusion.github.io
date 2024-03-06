"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[36700],{38158:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var t=s(74848),i=s(28453);const r={title:"Simple constraints"},o=void 0,c={id:"Simple_constraints",title:"Simple constraints",description:"The platform currently supports four types of simple constraints: consequence, exception, equality, and definiteness. For all simple constraints, an automatic resolution mechanism is supported. When this is enabled, instead of throwing an error the platform itself restores system integrity.",source:"@site/versioned_docs/version-v5/Simple_constraints.md",sourceDirName:".",slug:"/Simple_constraints",permalink:"/Simple_constraints",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/Simple_constraints.md",tags:[],version:"v5",lastUpdatedAt:1685108136,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{title:"Simple constraints"},sidebar:"learn",previous:{title:"Constraints",permalink:"/Constraints"},next:{title:"Classes",permalink:"/Classes"}},d={},a=[{value:"Examples",id:"examples",level:3}];function l(e){const n={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The platform currently supports four types of ",(0,t.jsx)(n.em,{children:"simple constraints"}),": ",(0,t.jsx)(n.em,{children:"consequence"}),", ",(0,t.jsx)(n.em,{children:"exception"}),", ",(0,t.jsx)(n.em,{children:"equality"}),", and ",(0,t.jsx)(n.em,{children:"definiteness"}),". For all simple constraints, an ",(0,t.jsx)(n.em,{children:"automatic resolution"})," mechanism is supported. When this is enabled, instead of throwing an error the platform itself restores system integrity."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Consequence"}),(0,t.jsx)(n.th,{children:"Exception"}),(0,t.jsx)(n.th,{children:"Equality"}),(0,t.jsx)(n.th,{children:"Definiteness"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Number of properties"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"2"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"2...N"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"2"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"1"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Description"}),(0,t.jsxs)(n.td,{children:["If the value of one property (the ",(0,t.jsx)(n.em,{children:"premise"}),") is non-",(0,t.jsx)(n.code,{children:"NULL"}),", the value of the second property (the ",(0,t.jsx)(n.em,{children:"consequence"}),") must also be non-",(0,t.jsx)(n.code,{children:"NULL"})]}),(0,t.jsxs)(n.td,{children:["Only one of the values of the specified properties must be non-",(0,t.jsx)(n.code,{children:"NULL"})]}),(0,t.jsxs)(n.td,{children:["If the value of one property is non-",(0,t.jsx)(n.code,{children:"NULL"})," and the value of the second property is non-",(0,t.jsx)(n.code,{children:"NULL"}),", they must be equal"]}),(0,t.jsxs)(n.td,{children:["If all property parameters match specified classes, a non-",(0,t.jsx)(n.code,{children:"NULL"})," value must be specified for them"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Statement"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/=gt_statement",children:(0,t.jsx)(n.code,{children:"=>"})})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Not yet implemented"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Not yet implemented"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"NONULL"})," option when defining properties"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Auto-resolution"}),(0,t.jsxs)(n.td,{children:["Two modes are supported:",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(n.code,{children:"LEFT"})," - if the premise changes to non-",(0,t.jsx)(n.code,{children:"NULL"}),", change* the consequence to non-",(0,t.jsx)(n.code,{children:"NULL"}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(n.code,{children:"RIGHT"})," - if the consequence changes to ",(0,t.jsx)(n.code,{children:"NULL"}),", change the premise to ",(0,t.jsx)(n.code,{children:"NULL"}),(0,t.jsx)("br",{})]}),(0,t.jsxs)(n.td,{children:["If one of the properties changes to non-",(0,t.jsx)(n.code,{children:"NULL"}),", change the rest to ",(0,t.jsx)(n.code,{children:"NULL"})]}),(0,t.jsxs)(n.td,{children:["If one of the properties changes to a non-",(0,t.jsx)(n.code,{children:"NULL"})," value, change the second to the same value"]}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"AGGR"})," - if a property value changes to ",(0,t.jsx)(n.code,{children:"NULL"}),", delete objects corresponding to the parameters.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(n.code,{children:"DEFAULT"})," value - if objects whose classes match the parameters classes are added/reclassified, change the property value for these objects to the default value."]})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["* A change to ",(0,t.jsx)(n.code,{children:"NULL"}),"/non-",(0,t.jsx)(n.code,{children:"NULL"})," is the following:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["For ",(0,t.jsx)(n.a,{href:"/Data_properties_DATA",children:"data"})," properties - ",(0,t.jsx)(n.a,{href:"/Property_change_CHANGE",children:"input"})," ",(0,t.jsx)(n.code,{children:"NULL"})," or the default value for this property value class."]}),"\n",(0,t.jsxs)(n.li,{children:["For ",(0,t.jsx)(n.a,{href:"/Classification_IS_AS",children:"membership"})," to a class - deleting an object / adding an object of a class for which belonging to the class is checked."]}),"\n",(0,t.jsxs)(n.li,{children:["For an ",(0,t.jsx)(n.a,{href:"/Grouping_GROUP",children:"aggregation"})," constraint - (only if changing to non-",(0,t.jsx)(n.code,{children:"NULL"}),") create an object of the base class (",(0,t.jsx)(n.code,{children:"System.Object"}),"), change to non-",(0,t.jsx)(n.code,{children:"NULL"})," conditions of the aggregation constraint, write the values of the corresponding parameters to all grouping values."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Just as for a basic ",(0,t.jsx)(n.a,{href:"/Constraints",children:"constraint"}),", for each simple constraint, a base event must be defined, which determines when the specified constraint will be checked."]}),"\n",(0,t.jsxs)(n.p,{children:["Note that the definiteness constraint is a special case of the consequence, in which the consequence is a property that must be defined, and the premise is its signature (a property obtained from it using the corresponding ",(0,t.jsx)(n.a,{href:"/Property_signature_CLASS",children:"operator"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["There is also an implicit fifth kind of simple constraint, ",(0,t.jsx)(n.em,{children:"uniqueness"}),", but it is combined with an aggregation operator (which returns this most unique value), and therefore it is not considered here. Together with consequences, this type of constraint allows to implement the ",(0,t.jsx)(n.a,{href:"/Aggregations",children:"aggregation"})," mechanism."]}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"is(Sku s) = s IS Sku;\n// the product must have a barcode and name specified\nis(Sku s) => barcode(s);\nis(Sku s) => name(s);\n\n\nCLASS Invoice;\nCLASS InvoiceLine;\ninvoice = DATA Invoice (InvoiceLine);\nis(InvoiceLine l) = l IS InvoiceLine;\n// for a document line, a document must be specified, and when deleting a document, the lines of this document should be deleted\nis(InvoiceLine l) => invoice(l) RESOLVE RIGHT;\n// is equivalent to declaring document = DATA Invoice (InvoiceLine) NONULL DELETE;\n\n// aggregation for f(a, b) create an object of class x, whose property a(x) equals a, and property b(x) equals b\nCLASS A;\nCLASS B;\nf = DATA BOOLEAN (A, B);\n\nCLASS X;\na = DATA A(X);\nb = DATA B(X);\nis (X x) = x IS X;\n\nf(a,b) => [ GROUP AGGR X x WHERE x IS X BY a(x), b(x)](a,b) RESOLVE LEFT;\nis(X x) => f(a(x), b(x)) RESOLVE RIGHT;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var t=s(96540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);