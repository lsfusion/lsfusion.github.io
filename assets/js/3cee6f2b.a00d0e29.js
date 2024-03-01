"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[12327],{65051:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=n(74848),r=n(28453);const a={title:"Previous value (PREV)"},i=void 0,o={id:"Previous_value_PREV",title:"Previous value (PREV)",description:"The previous value operator creates a property that returns the value of the specified property at the beginning of the session (that is, the current value in the database ignoring the session changes).",source:"@site/docs/Previous_value_PREV.md",sourceDirName:".",slug:"/Previous_value_PREV",permalink:"/next/Previous_value_PREV",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Previous_value_PREV.md",tags:[],version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"Jun 9, 2021",frontMatter:{title:"Previous value (PREV)"},sidebar:"learn",previous:{title:"New session (NEWSESSION, NESTEDSESSION)",permalink:"/next/New_session_NEWSESSION_NESTEDSESSION"},next:{title:"Change operators (SET, CHANGED, ...)",permalink:"/next/Change_operators_SET_CHANGED_etc"}},l={},c=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.em,{children:"previous value"})," operator creates a ",(0,s.jsx)(t.a,{href:"/next/Properties",children:"property"})," that returns the value of the specified property at the beginning of the session (that is, the current value in the database ignoring the session changes)."]}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:["This operator is calculated differently inside the ",(0,s.jsx)(t.a,{href:"/next/Events#change",children:"event"})," handling: here it returns the value at the time of the previous occurrence of this event (or rather, at the time when all its handling were completed)."]})}),"\n",(0,s.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,s.jsxs)(t.p,{children:["To declare a property that returns a previous value, use the ",(0,s.jsxs)(t.a,{href:"/next/PREV_operator",children:[(0,s.jsx)(t.code,{children:"PREV"})," operator"]}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lsf",children:"f = DATA INTEGER (A);\n// outputs all changes f(a) in the session one by one\nmessageFChanges  {\n    FOR CHANGED(f(A a)) DO\n        MESSAGE 'In this session f(a) changed from ' + PREV(f(a)) + ' TO ' + f(a);\n}\n\nCLASS Document;\ndate = DATA DATE (Document);\n\nCLASS Article;\nprice = DATA NUMERIC[14,2] (Document, Article);\n// write in the price of the document the last used price in the database\n// PREV is important to ignore the prices entered in this document\n// this is especially important if the last used price is materialized, then the platform can simply read this value from the table\nsetPrice  {\n    price(Document d, Article a) <- PREV((GROUP LAST price(d, a) ORDER date(d), d));\n}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var s=n(96540);const r={},a=s.createContext(r);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);