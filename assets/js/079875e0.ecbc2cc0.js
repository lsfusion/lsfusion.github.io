"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[90416],{666:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=n(74848),t=n(28453);const o={title:"{...} operator"},a=void 0,c={id:"Braces_operator",title:"{...} operator",description:"The {...} operator creates actions that executes a sequence of other actions.",source:"@site/versioned_docs/version-v5/Braces_operator.md",sourceDirName:".",slug:"/Braces_operator",permalink:"/Braces_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/Braces_operator.md",tags:[],version:"v5",lastUpdatedAt:1708525070,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"{...} operator"},sidebar:"learn",previous:{title:"Action operators",permalink:"/Action_operators"},next:{title:"ABSTRACT operator",permalink:"/ABSTRACT_action_operator"}},i={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const r={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.code,{children:"{...}"})," operator creates ",(0,s.jsx)(r.a,{href:"/Actions",children:"actions"})," that executes a ",(0,s.jsx)(r.a,{href:"/Sequence",children:"sequence of other actions"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"{\r\n    operator1\r\n    ...\r\n    operatorN\r\n}\n"})}),"\n",(0,s.jsx)(r.p,{children:"Operators can be of two types:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"actionOperator\r\nLOCAL [NESTED] name1, ..., nameN = returnClass (paramClass1, ..., paramClassN)\n"})}),"\n",(0,s.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(r.p,{children:["A sequence of ",(0,s.jsx)(r.a,{href:"/Action_operators",children:"action operators"})," and ",(0,s.jsx)(r.code,{children:"LOCAL"})," operators enclosed in braces creates a new action that sequentially executes specified actions and creates specified ",(0,s.jsx)(r.a,{href:"/Data_properties_DATA",children:"local properties"}),". The area of visibility of the local properties created inside the ",(0,s.jsx)(r.code,{children:"{...}"})," operator ends at the end of this operator."]}),"\n",(0,s.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"actionOperator"})}),"\n",(0,s.jsxs)(r.p,{children:["A ",(0,s.jsx)(r.a,{href:"/Action_operators#contextdependent",children:"context-dependent action operator"}),". Each operator is followed by a semicolon, except for operators ending in a closing brace. Extra semicolons are not an error."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"NESTED"})}),"\n",(0,s.jsxs)(r.p,{children:["A keyword that, when specified, marks the local property as ",(0,s.jsx)(r.a,{href:"/Session_management#nested",children:"nested"}),"; that is, all of its changes will be visible in new sessions, and when these sessions are closed, changes to this property will get to the current session. Note that this behavior is similar to the behavior of a regular local property (not ",(0,s.jsx)(r.code,{children:"NESTED"}),") when using the ",(0,s.jsxs)(r.a,{href:"/NEWSESSION_operator",children:[(0,s.jsx)(r.code,{children:"NEWSESSION"})," operator"]})," with the specified keyword ",(0,s.jsx)(r.code,{children:"NESTED LOCAL"})," (or just ",(0,s.jsx)(r.code,{children:"NESTED"})," if this local property is explicitly specified in the property list)"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"name1, ..., nameN"})}),"\n",(0,s.jsxs)(r.p,{children:["A list of names of the local properties being created. The names are defined by ",(0,s.jsx)(r.a,{href:"/IDs#id",children:"simple ID's"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"returnClass"})}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.a,{href:"/IDs#classid",children:"class ID"})," of the returned value of the local property."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"argumentClass1, ..., argumentClassN"})}),"\n",(0,s.jsx)(r.p,{children:"A list of argument class ID's of the local property."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-lsf",children:"CLASS Currency;\r\nname = DATA STRING[30] (Currency);\r\ncode = DATA INTEGER (Currency);\r\n\r\nCLASS Order;\r\ncurrency = DATA Currency (Order);\r\ncustomer = DATA STRING[100] (Order);\r\ncopy 'Copy' (Order old)  {\r\n    NEW new = Order { // an action is created that consists of the sequential execution of two actions\r\n        currency(new) <- currency(old); // a semicolon is put after each statement\r\n        customer(new) <- customer(old);\r\n    } // there is no semicolon in this line, because the operator ends in }\r\n}\r\n\r\nloadDefaultCurrency(ISTRING[30] name, INTEGER code)  {\r\n    NEW c = Currency {\r\n        name(c) <- name;\r\n        code(c) <- code;\r\n    }\r\n}\r\nrun ()  {\r\n    loadDefaultCurrency('USD', 866);\r\n    loadDefaultCurrency('EUR', 1251);\r\n}\n"})})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>c});var s=n(96540);const t={},o=s.createContext(t);function a(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);