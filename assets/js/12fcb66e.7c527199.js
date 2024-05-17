"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[248],{93151:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=o(74848),i=o(28453);const r={title:"Selection (CASE, IF, MULTI, OVERRIDE, EXCLUSIVE)"},s=void 0,l={id:"Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE",title:"Selection (CASE, IF, MULTI, OVERRIDE, EXCLUSIVE)",description:"The selection operator creates a property that determines for a set of conditions which condition is met, and returns the value of the result corresponding to that condition. If none of the conditions is met, then the value of the created property will be NULL.",source:"@site/versioned_docs/version-v4/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE.md",sourceDirName:".",slug:"/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE",permalink:"/v4/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE.md",tags:[],version:"v4",lastUpdatedAt:162565152e4,frontMatter:{title:"Selection (CASE, IF, MULTI, OVERRIDE, EXCLUSIVE)"},sidebar:"learn",previous:{title:"Property signature (CLASS)",permalink:"/v4/Property_signature_CLASS"},next:{title:"Set operations",permalink:"/v4/Set_operations"}},a={},c=[{value:"Polymorphic form",id:"poly",level:3},{value:"Mutual exclusion of conditions",id:"exclusive",level:3},{value:"Implicit definition",id:"implicit-definition",level:3},{value:"Single form",id:"single",level:3},{value:"Determining the result class",id:"determining-the-result-class",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"selection"})," operator creates a property that determines for a set of ",(0,t.jsx)(n.em,{children:"conditions"})," which condition is met, and returns the value of the ",(0,t.jsx)(n.em,{children:"result"})," corresponding to that condition. If none of the conditions is met, then the value of the created property will be ",(0,t.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["All conditions and results are defined as some properties and/or parameters. Accordingly, a condition ",(0,t.jsx)(n.em,{children:"is satisfied"})," if the value of the property or parameter by which this condition is set is not equal to ",(0,t.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"poly",children:"Polymorphic form"}),"\n",(0,t.jsxs)(n.p,{children:["The platform also allows you to define a condition and the corresponding result with one property. In this case, the condition may be either matching the property's ",(0,t.jsx)(n.a,{href:"/v4/Property_signature_CLASS",children:"signature"}),", or the property itself. We will call this the ",(0,t.jsx)(n.em,{children:"polymorphic"})," form of the operator."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Note that the ",(0,t.jsx)(n.a,{href:"/v4/Extremum_MAX_MIN",children:"extremum operator"})," and ",(0,t.jsx)(n.a,{href:"/v4/Logical_operators_AND_OR_NOT_XOR",children:"logical operators"})," basically are also varieties of the selection operator (and of its polymorphic form, i.e. the conditions and result are defined by one property)"]})}),"\n",(0,t.jsx)(n.h3,{id:"exclusive",children:"Mutual exclusion of conditions"}),"\n",(0,t.jsxs)(n.p,{children:["The selection operator lets you specify that all its conditions are ",(0,t.jsx)(n.em,{children:"mutually exclusive"}),". If this option is specified, and the conditions are not in fact mutually exclusive, the platform will throw the corresponding error."]}),"\n",(0,t.jsx)(n.p,{children:"It is worth noting that this check is no more than a hint to the platform (for better optimization), and also a kind of self-checking on the part of the developer. However, in many cases it allows you to make the code more transparent and readable (especially with the polymorphic form of the selection operator)."}),"\n",(0,t.jsx)(n.h3,{id:"implicit-definition",children:"Implicit definition"}),"\n",(0,t.jsxs)(n.p,{children:["This operator supports ",(0,t.jsx)(n.a,{href:"/v4/Property_extension",children:"implicit definition"})," using the technique of extensions, which allows, in particular, to implement polymorphism in the form that is common practice in OOP."]}),"\n",(0,t.jsx)(n.h3,{id:"single",children:"Single form"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"single"})," form of the selection operator checks exactly one condition. If this condition is met, the value of the specified result is returned. It is also possible to specify an ",(0,t.jsx)(n.em,{children:"alternative result"})," which value is returned if the condition is not met."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Type of mutual exclusion and implicit definition do not make sense/are not supported for this form of the operator"})}),"\n",(0,t.jsx)(n.h3,{id:"determining-the-result-class",children:"Determining the result class"}),"\n",(0,t.jsxs)(n.p,{children:["The result class of the selection operator is the common ancestor (builtin or ",(0,t.jsx)(n.a,{href:"/v4/User_classes#commonparentclass",children:"user-defined"}),") of its operands."]}),"\n",(0,t.jsx)(n.h3,{id:"language",children:"Language"}),"\n",(0,t.jsxs)(n.p,{children:["To create a property implementing a general form of selection, the ",(0,t.jsx)(n.a,{href:"/v4/CASE_operator",children:(0,t.jsx)(n.code,{children:"CASE"})})," operator is used. The polymorphic form of the selection operator is implemented using the ",(0,t.jsx)(n.a,{href:"/v4/MULTI_operator",children:(0,t.jsx)(n.code,{children:"MULTI"})}),", ",(0,t.jsx)(n.a,{href:"/v4/OVERRIDE_operator",children:(0,t.jsx)(n.code,{children:"OVERRIDE"})})," and ",(0,t.jsx)(n.a,{href:"/v4/EXCLUSIVE_operator",children:(0,t.jsx)(n.code,{children:"EXCLUSIVE"})}),", operators; the single form using the ",(0,t.jsx)(n.a,{href:"/v4/IF_operator",children:(0,t.jsx)(n.code,{children:"IF"})})," and ",(0,t.jsx)(n.a,{href:"/v4/IF_..._THEN_operator",children:(0,t.jsx)(n.code,{children:"IF ... THEN"})})," operator (the only operator that allows the specification of an alternative result)."]}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"CLASS Color;\nid = DATA STRING[100] (Color);\n\nbackground 'Color' (Color c) = CASE\n    WHEN id(c) == 'Black' THEN RGB(0,0,0)\n    WHEN id(c) == 'Red' THEN RGB(255,0,0)\n    WHEN id(c) == 'Green' THEN RGB(0,255,0)\n;\n\nid (TypeExecEnv type) = CASE EXCLUSIVE\n    WHEN type == TypeExecEnv.materialize THEN 3\n    WHEN type == TypeExecEnv.disablenestloop THEN 2\n    WHEN type == TypeExecEnv.none THEN 1\n    ELSE 0\n;\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"nameMulti (Human h) = MULTI 'Male' IF h IS Male, 'Female' IF h IS Female;\n\nCLASS Ledger;\nCLASS InLedger : Ledger;\nquantity = DATA INTEGER (InLedger);\n\nCLASS OutLedger : Ledger;\nquantity = DATA INTEGER (OutLedger);\n\nsignedQuantity (Ledger l) = MULTI quantity[InLedger](l), quantity[OutLedger](l);\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"CLASS Group;\nmarkup = DATA NUMERIC[8,2] (Group);\n\nmarkup = DATA NUMERIC[8,2] (Book);\ngroup = DATA Group (Book);\noverMarkup (Book b) = OVERRIDE markup(b), markup(group(b));\n\nnotNullDate (INTEGER i) = OVERRIDE date(i), 2010_01_01;\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"background 'Color' (INTEGER i) = EXCLUSIVE RGB(255,238,165) IF i <= 5,\n                                                   RGB(255,160,160) IF i > 5;\n\nCLASS Human;\n\nCLASS Male : Human;\nCLASS Female : Human;\n\nname(Human h) = EXCLUSIVE 'Male' IF h IS Male, 'Female' IF h IS Female;\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"name = DATA STRING[100] (Book);\nhasName (Book b) = TRUE IF name(b);\n\nbackground (Book b) = RGB(224, 255, 128) IF b IS Book;\n\ncountTags (Book b) = GROUP SUM 1 IF in(b, Tag t);\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"price1 = DATA NUMERIC[10,2] (Book);\nprice2 = DATA NUMERIC[10,2] (Book);\nmaxPrice (Book b) = IF price1(b) > price2(b) THEN price1(b) ELSE price2(b);\n\n// if h is of another class, it will be NULL\nsex (Human h) = IF h IS Male THEN 'Male' ELSE ('Female' IF h IS Female); \n\nisDifferent(a, b) = IF a != b THEN TRUE;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>l});var t=o(96540);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);