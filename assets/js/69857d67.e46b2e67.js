"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[8113],{67213:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=r(74848),t=r(28453);const o={title:"{...} operator"},a=void 0,c={id:"Braces_operator",title:"{...} operator",description:"The {...} operator creates actions that executes a sequence of other actions.",source:"@site/versioned_docs/version-v4/Braces_operator.md",sourceDirName:".",slug:"/Braces_operator",permalink:"/v4/Braces_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Braces_operator.md",tags:[],version:"v4",lastUpdatedAt:170852507e4,frontMatter:{title:"{...} operator"},sidebar:"learn",previous:{title:"Action operators",permalink:"/v4/Action_operators"},next:{title:"ABSTRACT operator",permalink:"/v4/ABSTRACT_action_operator"}},i={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"{...}"})," operator creates ",(0,s.jsx)(n.a,{href:"/v4/Actions",children:"actions"})," that executes a ",(0,s.jsx)(n.a,{href:"/v4/Sequence",children:"sequence of other actions"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"{\n    operator1\n    ...\n    operatorN\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Operators can be of two types:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"actionOperator\nLOCAL [NESTED] name1, ..., nameN = returnClass (paramClass1, ..., paramClassN)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["A sequence of ",(0,s.jsx)(n.a,{href:"/v4/Action_operators",children:"action operators"})," and ",(0,s.jsx)(n.code,{children:"LOCAL"})," operators enclosed in braces creates a new action that sequentially executes specified actions and creates specified ",(0,s.jsx)(n.a,{href:"/v4/Data_properties_DATA",children:"local properties"}),". The area of visibility of the local properties created inside the ",(0,s.jsx)(n.code,{children:"{...}"})," operator ends at the end of this operator."]}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"actionOperator"})}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.a,{href:"/v4/Action_operators#contextdependent",children:"context-dependent action operator"}),". Each operator is followed by a semicolon, except for operators ending in a closing brace. Extra semicolons are not an error."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"NESTED"})}),"\n",(0,s.jsxs)(n.p,{children:["A keyword that, when specified, marks the local property as ",(0,s.jsx)(n.a,{href:"/v4/Session_management#nested",children:"nested"}),"; that is, all of its changes will be visible in new sessions, and when these sessions are closed, changes to this property will get to the current session. Note that this behavior is similar to the behavior of a regular local property (not ",(0,s.jsx)(n.code,{children:"NESTED"}),") when using the ",(0,s.jsxs)(n.a,{href:"/v4/NEWSESSION_operator",children:[(0,s.jsx)(n.code,{children:"NEWSESSION"})," operator"]})," with the specified keyword ",(0,s.jsx)(n.code,{children:"NESTED LOCAL"})," (or just ",(0,s.jsx)(n.code,{children:"NESTED"})," if this local property is explicitly specified in the property list)"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"name1, ..., nameN"})}),"\n",(0,s.jsxs)(n.p,{children:["A list of names of the local properties being created. The names are defined by ",(0,s.jsx)(n.a,{href:"/v4/IDs#id",children:"simple ID's"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"returnClass"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"/v4/IDs#classid",children:"class ID"})," of the returned value of the local property."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"argumentClass1, ..., argumentClassN"})}),"\n",(0,s.jsx)(n.p,{children:"A list of argument class ID's of the local property."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lsf",children:"CLASS Currency;\nname = DATA STRING[30] (Currency);\ncode = DATA INTEGER (Currency);\n\nCLASS Order;\ncurrency = DATA Currency (Order);\ncustomer = DATA STRING[100] (Order);\ncopy 'Copy' (Order old)  {\n    NEW new = Order { // an action is created that consists of the sequential execution of two actions\n        currency(new) <- currency(old); // a semicolon is put after each statement\n        customer(new) <- customer(old);\n    } // there is no semicolon in this line, because the operator ends in }\n}\n\nloadDefaultCurrency(ISTRING[30] name, INTEGER code)  {\n    NEW c = Currency {\n        name(c) <- name;\n        code(c) <- code;\n    }\n}\nrun ()  {\n    loadDefaultCurrency('USD', 866);\n    loadDefaultCurrency('EUR', 1251);\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>c});var s=r(96540);const t={},o=s.createContext(t);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);