"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[11489],{31988:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=n(74848),o=n(28453);const s={title:"PREV operator"},i=void 0,a={id:"PREV_operator",title:"PREV operator",description:"The PREV operator creates a property using a previous value operator.",source:"@site/docs/PREV_operator.md",sourceDirName:".",slug:"/PREV_operator",permalink:"/next/PREV_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/PREV_operator.md",tags:[],version:"current",lastUpdatedAt:1708525070,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"PREV operator"},sidebar:"learn",previous:{title:"PARTITION operator",permalink:"/next/PARTITION_operator"},next:{title:"RECURSION operator",permalink:"/next/RECURSION_operator"}},c={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"PREV"})," operator creates a ",(0,r.jsx)(t.a,{href:"/next/Properties",children:"property"})," using a ",(0,r.jsx)(t.a,{href:"/next/Previous_value_PREV",children:"previous value operator"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"PREV(propExpr)\n"})}),"\n",(0,r.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"PREV"})," operator creates a property that returns the value of another property at the start of the current session (or at the time of the previous event in ",(0,r.jsx)(t.a,{href:"/next/Events#change",children:"event"})," mode) - i.e., the value that existed before the changes that were made in the current session."]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["It's important to understand that ",(0,r.jsx)(t.code,{children:"PREV"})," is not a built-in property with ",(0,r.jsx)(t.a,{href:"/next/Composition_JOIN",children:"composition"})," but an operator. Thus, in particular ",(0,r.jsx)(t.code,{children:"PREV(f(a))"})," is not equal to ",(0,r.jsx)(t.code,{children:"[PREV(a)](f(a))"}),"."]})}),"\n",(0,r.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"propExpr"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/next/Expression",children:"Expression"})," whose value defines the property for which the previous value must be obtained."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lsf",children:"f = DATA INTEGER (A);\n// outputs all changes f(a) in the session one by one\nmessageFChanges  {\n    FOR CHANGED(f(A a)) DO\n        MESSAGE 'In this session f(a) changed from ' + PREV(f(a)) + ' TO ' + f(a);\n}\n\nCLASS Document;\ndate = DATA DATE (Document);\n\nCLASS Article;\nprice = DATA NUMERIC[14,2] (Document, Article);\n// write in the price of the document the last used price in the database\n// PREV is important to ignore the prices entered in this document\n// this is especially important if the last used price is materialized, then the platform can simply read this value from the table\nsetPrice  {\n    price(Document d, Article a) <- PREV((GROUP LAST price(d, a) ORDER date(d), d));\n}\n"})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(96540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);