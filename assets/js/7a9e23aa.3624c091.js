"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[10354],{17515:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var i=t(74848),s=t(28453);const l={title:"ABSTRACT operator"},r=void 0,o={id:"ABSTRACT_operator",title:"ABSTRACT operator",description:"The ABSTRACT operator creates an abstract property.",source:"@site/versioned_docs/version-v4/ABSTRACT_operator.md",sourceDirName:".",slug:"/ABSTRACT_operator",permalink:"/v4/ABSTRACT_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/ABSTRACT_operator.md",tags:[],version:"v4",lastUpdatedAt:1708525070,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"ABSTRACT operator"},sidebar:"learn",previous:{title:"[] operator",permalink:"/v4/Brackets_operator"},next:{title:"ACTIVE TAB operator",permalink:"/v4/ACTIVE_TAB_operator"}},c={},a=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"ABSTRACT"})," operator creates an ",(0,i.jsx)(n.a,{href:"/v4/Property_extension",children:"abstract property"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"ABSTRACT [type [exclusionType]] [CHECKED] returnClassName(argClassName1, ..., argClassNameN)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Where ",(0,i.jsx)(n.code,{children:"exclusionType"})," is of two types:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"EXCLUSIVE\nOVERRIDE [FIRST | LAST]\n"})}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"ABSTRACT"})," operator creates an abstract property, the implementations of which can be defined later (for example, in other ",(0,i.jsx)(n.a,{href:"/v4/Modules",children:"modules"})," dependent on the module containing the ",(0,i.jsx)(n.code,{children:"ABSTRACT"})," property). Implementations are added to the property using the ",(0,i.jsxs)(n.a,{href:"/v4/+=_statement",children:[(0,i.jsx)(n.code,{children:"+="})," statement"]}),". When calculating an abstract property, its ",(0,i.jsx)(n.em,{children:"matching"})," implementation is selected and calculated. The selection of the matching implementation depends on the ",(0,i.jsx)(n.em,{children:"selection conditions"})," that are defined when adding implementations, and on the ",(0,i.jsx)(n.code,{children:"ABSTRACT"})," operator type."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"CASE"})," - a general case. The selection condition will be explicitly specified in the implementation using the ",(0,i.jsxs)(n.a,{href:"/v4/+=_statement",children:[(0,i.jsx)(n.code,{children:"WHEN"})," block"]}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"MULTI"})," \u2013 a ",(0,i.jsx)(n.a,{href:"/v4/Property_extension#poly",children:"polymorphic form"}),". The selection condition is that the parameters match the implementation ",(0,i.jsx)(n.a,{href:"/v4/CLASS_operator",children:"signature"}),". This type is the default type and need not to be explicitly specified."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"VALUE"})," - a polymorphic form. The selection condition will be definiteness (a none-",(0,i.jsx)(n.code,{children:"NULL"})," value) of the implementation value (essentially, the implementation itself)."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"/v4/Property_extension#exclusive",children:"type of mutual exclusion"})," of an operator determines whether several conditions for the implementation of an abstract property can simultaneously be met with a certain set of parameters. The ",(0,i.jsx)(n.code,{children:"EXCLUSIVE"})," type indicates that implementation conditions cannot be met simultaneously. The ",(0,i.jsx)(n.code,{children:"OVERRIDE"})," type allows several simultaneously met conditions. In this case, the implementation to be selected is determined by the keywords ",(0,i.jsx)(n.code,{children:"FIRST"})," and ",(0,i.jsx)(n.code,{children:"LAST"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"ABSTRACT"})," operator cannot be used inside ",(0,i.jsx)(n.a,{href:"/v4/Expression",children:"expressions"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"type"})}),"\n",(0,i.jsx)(n.p,{children:"Type of abstract property. It is specified by one of the keywords:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"CASE"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"MULTI"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"VALUE"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The default value is ",(0,i.jsx)(n.code,{children:"MULTI"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"exclusionType"})}),"\n",(0,i.jsxs)(n.p,{children:["Type of mutual exclusion. One of these keywords: ",(0,i.jsx)(n.code,{children:"EXCLUSIVE"})," or ",(0,i.jsx)(n.code,{children:"OVERRIDE"}),". Unless explicitly specified, in a ",(0,i.jsx)(n.code,{children:"MULTI"})," abstract property the default type of mutual exclusion is ",(0,i.jsx)(n.code,{children:"EXCLUSIVE"}),", and in all other cases the default mutual exclusion type is ",(0,i.jsx)(n.code,{children:"OVERRIDE"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"FIRST"})," | ",(0,i.jsx)(n.code,{children:"LAST"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Keywords. Determine which of the matching implementations will be selected. When the word ",(0,i.jsx)(n.code,{children:"FIRST"})," is specified, implementations will be added to the top of the implementations list, so that the last added implementation will be selected. When the word ",(0,i.jsx)(n.code,{children:"LAST"})," is specified, implementations will be added to the end of the implementations list, so that the implementation added first will be selected. If not specified, the default is ",(0,i.jsx)(n.code,{children:"FIRST"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"FULL"})}),"\n",(0,i.jsx)(n.p,{children:"Keyword. If specified, the platform will automatically check that at least one implementation is specified for all child objects of the argument classes (or exactly one if the conditions are mutually exclusive)."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"returnClassName"})}),"\n",(0,i.jsxs)(n.p,{children:["Class of the return value of the property. ",(0,i.jsx)(n.a,{href:"/v4/IDs#classid",children:"Class ID"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"argClassName1, ..., argClassNameN"})}),"\n",(0,i.jsx)(n.p,{children:"List of class names of property arguments. Each name is defined by a class ID."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"CLASS Invoice;\nCLASS InvoiceDetail;\nCLASS Range;\n\n// In this case, ABSTRACT MULTI EXCLUSIVE is created\nrateChargeExchange(invoice) = ABSTRACT NUMERIC[14,6] (Invoice);\n             \n// In this case, ABSTRACT CASE OVERRIDE LAST is created, and if there are\n// several suitable implementations, the first of them will be calculated\nbackgroundSku 'Color' (d) = ABSTRACT CASE FULL COLOR (InvoiceDetail);\n \n// The last matching implementation will be calculated here\noverVAT = ABSTRACT VALUE OVERRIDE FIRST Range (InvoiceDetail);          \n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(96540);const s={},l=i.createContext(s);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);