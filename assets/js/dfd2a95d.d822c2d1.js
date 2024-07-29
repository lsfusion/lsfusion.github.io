"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[85958],{88556:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var i=t(74848),o=t(28453);const a={title:"Action extension"},s=void 0,r={id:"Action_extension",title:"Action extension",description:'The actions extension technique allows the developer to declare an abstract action in one module and add to it an implementation in other modules. This technique is essentially a "postponed definition" of a branch operator, where the operator\u2019s title is defined when the property is declared, and branching conditions are added as new functionality (of classes or static objects) is added to the system. Furthermore, branching conditions (if branching is not mutually exclusive) can be added both to the beginning and to the end of the abstract action created. Similarly, this technique works with a sequence operator.',source:"@site/docs/Action_extension.md",sourceDirName:".",slug:"/Action_extension",permalink:"/Action_extension",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Action_extension.md",tags:[],version:"current",lastUpdatedAt:1712785486e3,frontMatter:{title:"Action extension"},sidebar:"learn",previous:{title:"Property extension",permalink:"/Property_extension"},next:{title:"Form extension",permalink:"/Form_extension"}},c={},l=[{value:"Polymorphic form",id:"poly",level:3},{value:"Mutual exclusion of conditions",id:"exclusive",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"/Actions",children:"actions"})," ",(0,i.jsx)(n.a,{href:"/Extensions",children:"extension"})," technique allows the developer to declare an abstract action in one ",(0,i.jsx)(n.a,{href:"/Modules",children:"module"}),' and add to it an implementation in other modules. This technique is essentially a "postponed definition" of a ',(0,i.jsx)(n.a,{href:"/Branching_CASE_IF_MULTI",children:"branch operator"}),", where the operator\u2019s title is defined when the property is declared, and branching conditions are added as new functionality (of ",(0,i.jsx)(n.a,{href:"/Classes",children:"classes"})," or ",(0,i.jsx)(n.a,{href:"/Static_objects",children:"static objects"}),") is added to the system. Furthermore, branching conditions (if branching is not mutually exclusive) can be added both to the beginning and to the end of the abstract action created. Similarly, this technique works with a ",(0,i.jsx)(n.a,{href:"/Sequence",children:"sequence operator"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["For abstract actions, the expected classes of parameters must be specified. Then the platform will automatically check that the added implementations match these classes. Also, if necessary, you can check that for all descendants of the parameter classes at least one implementation is specified (or exactly one, if the conditions are ",(0,i.jsx)(n.a,{href:"/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE",children:"mutually exclusive"}),")."]}),"\n",(0,i.jsx)(n.p,{children:"Actions extension allows:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Implement the concept of action polymorphism by analogy with certain object-oriented programming languages."}),"\n",(0,i.jsx)(n.li,{children:'Remove dependency between modules by adding specific "entry points," to which new behavior can be added later.'}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"poly",children:"Polymorphic form"}),"\n",(0,i.jsxs)(n.p,{children:["As with a branching operator, for an abstract action there is a ",(0,i.jsx)(n.em,{children:"polymorphic form"}),", where it is possible not to define a condition explicitly, but to use as a condition ",(0,i.jsx)(n.a,{href:"/Property_signature_CLASS",children:"matching the signature"})," of the action that corresponds to this condition."]}),"\n",(0,i.jsx)(n.h3,{id:"exclusive",children:"Mutual exclusion of conditions"}),"\n",(0,i.jsxs)(n.p,{children:["As for a branch operator, you can specify that all conditions of an abstract action must be ",(0,i.jsx)(n.em,{children:"mutually exclusive"}),". If this option is specified, and the conditions are not in fact mutually exclusive, the platform will throw the corresponding error."]}),"\n",(0,i.jsx)(n.p,{children:"It is worth noting that this check is no more than a hint to the platform (for better optimization), and also a kind of self-checking on the part of the developer. However, in many cases it allows to make the code more transparent and readable (especially in a polymorphic form of the abstract action)."}),"\n",(0,i.jsx)(n.h3,{id:"language",children:"Language"}),"\n",(0,i.jsxs)(n.p,{children:["The key features that implement the extension technique are the ",(0,i.jsxs)(n.a,{href:"/ABSTRACT_action_operator",children:[(0,i.jsx)(n.code,{children:"ABSTRACT"})," operator"]}),", for declaring an abstract action, and the ",(0,i.jsxs)(n.a,{href:"/ACTION+_statement",children:[(0,i.jsx)(n.code,{children:"ACTION+"})," statement"]}),", for adding an implementation to it."]}),"\n",(0,i.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"exportXls 'Export to Excel' ABSTRACT CASE (Order); // ABSTRACT CASE OVERRIDE LAST is created        \nexportXls (Order o) + WHEN name(currency(o)) == 'USD' THEN {\n    MESSAGE 'Export USD not implemented';\n}\n\nCLASS Task;\nrun 'Execute' ABSTRACT (Task); // ABSTRACT MULTI EXCLUSIVE\n\nCLASS Task1 : Task;\nname = DATA STRING[100] (Task);\nrun (Task1 t) + {\n    MESSAGE 'Run Task1 ' + name(t);\n}\n\n\nCLASS OrderDetail;\nprice = DATA NUMERIC[14,2] (OrderDetail);\n\nCLASS InvoiceDetail;\nprice = DATA NUMERIC[14,2] (InvoiceDetail);\nfill ABSTRACT LIST (OrderDetail, InvoiceDetail); // ABSTRACT LIST LAST\n\nfill (OrderDetail od, InvoiceDetail id) + {\n    price(id) <- price(od);\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"CLASS ABSTRACT Animal;\nwhoAmI  ABSTRACT ( Animal);\n\nCLASS Dog : Animal;\nwhoAmI (Dog d) + {  MESSAGE 'I am a dog!'; }\n\nCLASS Cat : Animal;\nwhoAmI (Cat c) + {  MESSAGE 'I am a \u0441at!'; }\n\nask ()  {\n    FOR Animal a IS Animal DO\n        whoAmI(a); // a corresponding message will be shown for each object\n}\n\nonStarted  ABSTRACT LIST ( );\nonStarted () + {\n    name(Sku s) <- '1';\n}\nonStarted () + {\n    name(Sku s) <- '2';\n}\n// first, the 1st action is executed, then the 2nd action\n\nCLASS Human;\nname = DATA STRING[100] (Human);\n\ntestName  ABSTRACT CASE ( Human);\n\ntestName (Human h) + WHEN name(h) == 'John' THEN {  MESSAGE 'I am John'; }\ntestName (Human h) + WHEN name(h) == 'Bob' THEN {  MESSAGE 'I am Bob'; }\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var i=t(96540);const o={},a=i.createContext(o);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);