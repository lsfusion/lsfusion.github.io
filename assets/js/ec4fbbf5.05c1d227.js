"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[85834],{7509:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var s=t(74848),o=t(28453);const r={title:"Property extension"},a=void 0,i={id:"Property_extension",title:"Property extension",description:'The properties extension technique allows the developer to declare an abstract action in one module and define its implementation in other modules. This technique is essentially a "postponed definition" of a selection operator, where the operator\u2019s title is defined when the property is declared, and as new functionality (of classes or static objects) is added, selection options are added to the system. Furthermore, variants of selection (if it is not mutually exclusive) can be added both to the beginning and to the end of the abstract property created.',source:"@site/versioned_docs/version-v4/Property_extension.md",sourceDirName:".",slug:"/Property_extension",permalink:"/v4/Property_extension",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Property_extension.md",tags:[],version:"v4",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"Jul 7, 2021",frontMatter:{title:"Property extension"},sidebar:"learn",previous:{title:"Class extension",permalink:"/v4/Class_extension"},next:{title:"Action extension",permalink:"/v4/Action_extension"}},l={},c=[{value:"Polymorphic form",id:"poly",level:3},{value:"Mutual exclusion of conditions",id:"exclusive",level:3},{value:"Language",id:"language",level:3},{value:"Example",id:"example",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"/v4/Properties",children:"properties"})," ",(0,s.jsx)(n.a,{href:"/v4/Extensions",children:"extension"})," technique allows the developer to declare an ",(0,s.jsx)(n.em,{children:"abstract action"})," in one ",(0,s.jsx)(n.a,{href:"/v4/Modules",children:"module"}),' and define its implementation in other modules. This technique is essentially a "postponed definition" of a ',(0,s.jsx)(n.a,{href:"/v4/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE",children:"selection operator"}),", where the operator\u2019s title is defined when the property is declared, and as new functionality (of ",(0,s.jsx)(n.a,{href:"/v4/Classes",children:"classes"})," or ",(0,s.jsx)(n.a,{href:"/v4/Static_objects",children:"static objects"}),") is added, selection options are added to the system. Furthermore, variants of selection (if it is not mutually exclusive) can be added both to the beginning and to the end of the abstract property created."]}),"\n",(0,s.jsxs)(n.p,{children:["For abstract properties, the expected classes of parameters must be specified. Then the platform will automatically check that the implementations added match these classes. Also, if necessary, you can check that for all descendants of the parameter classes at least one implementation is specified (or exactly one, if the conditions are ",(0,s.jsx)(n.a,{href:"/v4/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE",children:"mutually exclusive"}),")."]}),"\n",(0,s.jsx)(n.p,{children:"Extension of properties allows you to:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Implement the concept of property polymorphism by analogy with certain object-oriented programming languages."}),"\n",(0,s.jsx)(n.li,{children:'Remove dependency between modules by adding specific "entry points" to change the way properties are calculated.'}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"poly",children:"Polymorphic form"}),"\n",(0,s.jsxs)(n.p,{children:["Just as ",(0,s.jsx)(n.a,{href:"/v4/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE#poly",children:"for a selection operator"}),", for an abstract property there is a ",(0,s.jsx)(n.em,{children:"polymorphic form"})," where the selection condition and the result corresponding to it are set by a single property. Accordingly, as in a selection operator, either belonging to the ",(0,s.jsx)(n.a,{href:"/v4/Property_signature_CLASS",children:"signature "}),"of this property or the property itself can be a condition."]}),"\n",(0,s.jsx)(n.h3,{id:"exclusive",children:"Mutual exclusion of conditions"}),"\n",(0,s.jsxs)(n.p,{children:["As ",(0,s.jsx)(n.a,{href:"/v4/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE#exclusive",children:"for a selection operator"}),", you can specify that all conditions of an abstract property must be ",(0,s.jsx)(n.em,{children:"mutually exclusive"}),". If this option is set, and the conditions are not in fact mutually exclusive, the platform will throw the corresponding error."]}),"\n",(0,s.jsx)(n.p,{children:"It is worth noting that this check is no more than a hint to the platform (for better optimization), and also a kind of self-checking on the part of the developer. However, in many cases it allows you to make the code more transparent and readable (especially given a polymorphic form of the abstract property)."}),"\n",(0,s.jsx)(n.h3,{id:"language",children:"Language"}),"\n",(0,s.jsxs)(n.p,{children:["The key features that implement the extension procedure are the ",(0,s.jsxs)(n.a,{href:"/v4/ABSTRACT_operator",children:[(0,s.jsx)(n.code,{children:"ABSTRACT"})," operator"]}),",for declaring an abstract action, and the ",(0,s.jsxs)(n.a,{href:"/v4/+=_statement",children:[(0,s.jsx)(n.code,{children:"+="})," statement"]}),", for defining its implementation."]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lsf",children:"CLASS Invoice;\r\nCLASS InvoiceDetail;\r\nCLASS Range;\r\n\r\n// ABSTRACT MULTI EXCLUSIVE is created\r\nrateChargeExchange(invoice) = ABSTRACT NUMERIC[14,6] (Invoice);\r\n             \r\n// ABSTRACT CASE OVERRIDE LAST is created, and if there are several suitable implementations, \r\n// the first of them will be calculated\r\nbackgroundSku 'Color' (d) = ABSTRACT CASE FULL COLOR (InvoiceDetail);\r\n \r\n// The last matching implementation will be calculated here\r\noverVAT = ABSTRACT VALUE OVERRIDE FIRST Range (InvoiceDetail);          \n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lsf",children:"CLASS ABSTRACT AClass;\r\nCLASS BClass : AClass;\r\nCLASS CClass : AClass;\r\nCLASS DClass : AClass;\r\n\r\nname(AClass a) = ABSTRACT BPSTRING[50] (AClass);\r\ninnerName(BClass b) = DATA BPSTRING[50] (BClass);\r\ninnerName(CClass c) = DATA BPSTRING[50] (CClass);\r\ninnerName(DClass d) = DATA BPSTRING[50] (DClass);\r\n\r\nname(BClass b) = 'B' + innerName(b);\r\nname(CClass c) = 'C' + innerName(c);\r\n\r\nname[AClass](BClass b) += name(b);\r\n// Here name[AClass] will be found on the left, because the search goes only among abstract properties, \r\n// and on the right name[CClass] will be found\r\nname(CClass c) += name(c); \r\nname(DClass d) += 'DClass' + innerName(d) IF d IS DClass;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var s=t(96540);const o={},r=s.createContext(o);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);