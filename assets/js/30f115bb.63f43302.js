"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[94107],{7414:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var r=t(74848),o=t(28453);const c={title:"Sequence ({...})"},a=void 0,s={id:"Sequence",title:"Sequence ({...})",description:"To create an action that performs a sequence of other actions, the {...} operator is used - a block enclosed by curly brackets. The body of this block must contain a sequence of action operators and local property declarations.",source:"@site/versioned_docs/version-v5/Sequence.md",sourceDirName:".",slug:"/Sequence",permalink:"/v5/Sequence",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/Sequence.md",tags:[],version:"v5",lastUpdatedAt:1685108136e3,frontMatter:{title:"Sequence ({...})"},sidebar:"learn",previous:{title:"Execution order",permalink:"/v5/Execution_order"},next:{title:"Call (EXEC)",permalink:"/v5/Call_EXEC"}},i={},l=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function u(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["To create an ",(0,r.jsx)(n.a,{href:"/v5/Actions",children:"action"})," that performs a sequence of other actions, the ",(0,r.jsxs)(n.a,{href:"/v5/Braces_operator",children:[(0,r.jsx)(n.code,{children:"{...}"})," operator"]})," is used - a block enclosed by curly brackets. The body of this block must contain a sequence of ",(0,r.jsx)(n.a,{href:"/v5/Action_operators_paradigm",children:"action operators"})," and local property declarations."]}),"\n",(0,r.jsx)(n.h3,{id:"language",children:"Language"}),"\n",(0,r.jsxs)(n.p,{children:["To declare an action that executes a sequence of other actions, use the ",(0,r.jsxs)(n.a,{href:"/v5/Braces_operator",children:[(0,r.jsx)(n.code,{children:"{...}"})," operator"]}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"CLASS Currency;\nname = DATA STRING[30] (Currency);\ncode = DATA INTEGER (Currency);\n\nCLASS Order;\ncurrency = DATA Currency (Order);\ncustomer = DATA STRING[100] (Order);\ncopy 'Copy' (Order old)  {\n    // an action is created that consists of the sequential execution of two actions\n    NEW new = Order {                                   \n        currency(new) <- currency(old); // a semicolon is put after each statement\n        customer(new) <- customer(old);\n    } // there is no semicolon in this line, because the operator ends in }\n}\n\nloadDefaultCurrency(ISTRING[30] name, INTEGER code)  {\n    NEW c = Currency {\n        name(c) <- name;\n        code(c) <- code;\n    }\n}\nrun ()  {\n    loadDefaultCurrency('USD', 866);\n    loadDefaultCurrency('EUR', 1251);\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var r=t(96540);const o={},c=r.createContext(o);function a(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);