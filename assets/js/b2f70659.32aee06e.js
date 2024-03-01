"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[69902],{35261:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var t=i(74848),s=i(28453);const c={title:"ABSTRACT operator"},r=void 0,o={id:"ABSTRACT_action_operator",title:"ABSTRACT operator",description:"The ABSTRACT operator - creating an abstract action.",source:"@site/versioned_docs/version-v5/ABSTRACT_action_operator.md",sourceDirName:".",slug:"/ABSTRACT_action_operator",permalink:"/ABSTRACT_action_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/ABSTRACT_action_operator.md",tags:[],version:"v5",lastUpdatedAt:1708525070,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"ABSTRACT operator"},sidebar:"learn",previous:{title:"{...} operator",permalink:"/Braces_operator"},next:{title:"ACTIVATE operator",permalink:"/ACTIVATE_operator"}},l={},a=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"ABSTRACT"})," operator - creating an ",(0,t.jsx)(n.a,{href:"/Action_extension",children:"abstract action"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ABSTRACT [type [exclusionType]] [FIRST | LAST] [CHECKED] (argClassName1, ..., argClassNameN) \n"})}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"ABSTRACT"})," operator creates an abstract action, the implementation of which can be defined later (for example, in other ",(0,t.jsx)(n.a,{href:"/Modules",children:"modules"})," dependent on the module containing the ",(0,t.jsx)(n.code,{children:"ABSTRACT"})," action). Implementations are added to the action using the ",(0,t.jsxs)(n.a,{href:"/ACTION+_statement",children:[(0,t.jsx)(n.code,{children:"ACTION+"})," statement"]}),". When executing ",(0,t.jsx)(n.code,{children:"MULTI"})," or ",(0,t.jsx)(n.code,{children:"CASE"})," type abstract actions, their matching implementation is selected and executed. The selection of the matching implementation depends on the selection conditions that are defined when adding implementations, and on the ",(0,t.jsx)(n.code,{children:"ABSTRACT"})," operator type."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"CASE"})," - a general case. The selection condition will be explicitly specified in the implementation using the ",(0,t.jsxs)(n.a,{href:"/ACTION+_statement",children:[(0,t.jsx)(n.code,{children:"WHEN"})," block"]}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"MULTI"})," - ",(0,t.jsx)(n.a,{href:"/Branching_CASE_IF_MULTI#poly",children:"a polymorphic form"}),". The selection condition is that the parameters match the implementation ",(0,t.jsx)(n.a,{href:"/CLASS_operator",children:"signature"}),". This type is the default type and need not be explicitly specified."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"/Branching_CASE_IF_MULTI#exclusive",children:"type of mutual exclusion"})," of an operator determines whether several conditions for the implementation of an abstract action can simultaneously be met with a certain set of parameters. The ",(0,t.jsx)(n.code,{children:"EXCLUSIVE"})," type indicates that implementation conditions cannot be met simultaneously. The ",(0,t.jsx)(n.code,{children:"OVERRIDE"})," type allows several simultaneously fulfilled conditions, while which implementation is ultimately selected is determined by the keywords ",(0,t.jsx)(n.code,{children:"FIRST"})," and ",(0,t.jsx)(n.code,{children:"LAST"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["When performing a ",(0,t.jsx)(n.code,{children:"LIST"})," abstract action, all implementations are executed sequentially. The implementation order is determined by the keywords ",(0,t.jsx)(n.code,{children:"FIRST"})," and ",(0,t.jsx)(n.code,{children:"LAST"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"ABSTRACT"})," operator cannot be used inside the ",(0,t.jsxs)(n.a,{href:"/Braces_operator",children:[(0,t.jsx)(n.code,{children:"{...}"})," operator"]}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"type"})}),"\n",(0,t.jsx)(n.p,{children:"Type of abstract action. It is specified by one of these keywords:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"CASE"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"MULTI"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"LIST"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The default value is ",(0,t.jsx)(n.code,{children:"MULTI"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"exclusionType"})}),"\n",(0,t.jsxs)(n.p,{children:["Type of mutual exclusion. One of these keywords: ",(0,t.jsx)(n.code,{children:"EXCLUSIVE"})," or ",(0,t.jsx)(n.code,{children:"OVERRIDE"}),". Unless explicitly specified, in a ",(0,t.jsx)(n.code,{children:"MULTI"})," abstract action the default type of mutual exclusion is ",(0,t.jsx)(n.code,{children:"EXCLUSIVE"}),", and in a ",(0,t.jsx)(n.code,{children:"CASE"})," action the default type is ",(0,t.jsx)(n.code,{children:"OVERRIDE"}),". For a ",(0,t.jsx)(n.code,{children:"LIST"})," abstract action the type of mutual exclusion is not specified."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"FIRST"})," | ",(0,t.jsx)(n.code,{children:"LAST"})]}),"\n",(0,t.jsxs)(n.p,{children:["Keywords. When the word ",(0,t.jsx)(n.code,{children:"FIRST"})," is specified, implementations will be added to the top of the implementations list; when ",(0,t.jsx)(n.code,{children:"LAST"})," is specified, implementations will be added to the end of the implementations list. Unless specified, the default is ",(0,t.jsx)(n.code,{children:"FIRST"})," (except ",(0,t.jsx)(n.code,{children:"LIST"}),", where the default is ",(0,t.jsx)(n.code,{children:"LAST"}),")"]}),"\n",(0,t.jsxs)(n.p,{children:["For abstract actions such as ",(0,t.jsx)(n.code,{children:"CASE"})," and ",(0,t.jsx)(n.code,{children:"MULTI"})," with the type of mutual exclusion ",(0,t.jsx)(n.code,{children:"OVERRIDE"}),", specifying ",(0,t.jsx)(n.code,{children:"FIRST"})," will mean that of the matching implementations, the last one added will be executed. For actions such as ",(0,t.jsx)(n.code,{children:"LIST"}),", specifying ",(0,t.jsx)(n.code,{children:"FIRST"})," will mean that implementations will be executed in the reverse order of their addition."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"CHECKED"})}),"\n",(0,t.jsx)(n.p,{children:"Keyword. If specified, the platform will automatically check that at least one implementation is defined for all descendants of the argument classes (or exactly one, if the conditions are mutually exclusive)."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"argClassName1, ..., argClassNameN"})}),"\n",(0,t.jsxs)(n.p,{children:["List of class names of property arguments. Each name is defined by a ",(0,t.jsx)(n.a,{href:"/IDs#classid",children:"class ID"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"exportXls 'Export to Excel' ABSTRACT CASE (Order); // ABSTRACT CASE OVERRIDE LAST is created         \nexportXls (Order o) + WHEN name(currency(o)) == 'USD' THEN {\n    MESSAGE 'Export USD not implemented';\n}\n\nCLASS Task;\nrun 'Execute' ABSTRACT (Task); // ABSTRACT MULTI EXCLUSIVE\n\nCLASS Task1 : Task;\nname = DATA STRING[100] (Task);\nrun (Task1 t) + {\n    MESSAGE 'Run Task1 ' + name(t);\n}\n\n\nCLASS OrderDetail;\nprice = DATA NUMERIC[14,2] (OrderDetail);\n\nCLASS InvoiceDetail;\nprice = DATA NUMERIC[14,2] (InvoiceDetail);\nfill ABSTRACT LIST (OrderDetail, InvoiceDetail); // ABSTRACT LIST LAST\n\nfill (OrderDetail od, InvoiceDetail id) + {\n    price(id) <- price(od);\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var t=i(96540);const s={},c=t.createContext(s);function r(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);