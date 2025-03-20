"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["96452"],{33149:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>o});var r=JSON.parse('{"id":"Previous_value_PREV","title":"Previous value (PREV)","description":"The previous value operator creates a property that returns the value of the specified property at the beginning of the session (that is, the current value in the database ignoring the session changes).","source":"@site/versioned_docs/version-v4/Previous_value_PREV.md","sourceDirName":".","slug":"/Previous_value_PREV","permalink":"/v4/Previous_value_PREV","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v4/docs/en/Previous_value_PREV.md","tags":[],"version":"v4","lastUpdatedAt":1709302895000,"frontMatter":{"title":"Previous value (PREV)"},"sidebar":"learn","previous":{"title":"New session (NEWSESSION, NESTEDSESSION)","permalink":"/v4/New_session_NEWSESSION_NESTEDSESSION"},"next":{"title":"Change operators (SET, CHANGED, ...)","permalink":"/v4/Change_operators_SET_CHANGED_etc"}}'),s=n("85893"),i=n("50065");let a={title:"Previous value (PREV)"},o=void 0,l={},c=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function u(e){let t={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.em,{children:"previous value"})," operator creates a ",(0,s.jsx)(t.a,{href:"/v4/Properties",children:"property"})," that returns the value of the specified property at the beginning of the session (that is, the current value in the database ignoring the session changes)."]}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsxs)(t.p,{children:["This operator is calculated differently inside the ",(0,s.jsx)(t.a,{href:"/v4/Events#change",children:"event"})," handling: here it returns the value at the time of the previous occurrence of this event (or rather, at the time when all its handling were completed)."]})}),"\n",(0,s.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,s.jsxs)(t.p,{children:["To declare a property that returns a previous value, use the ",(0,s.jsxs)(t.a,{href:"/v4/PREV_operator",children:[(0,s.jsx)(t.code,{children:"PREV"})," operator"]}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lsf",children:"f = DATA INTEGER (A);\n// outputs all changes f(a) in the session one by one\nmessageFChanges  {\n    FOR CHANGED(f(A a)) DO\n        MESSAGE 'In this session f(a) changed from ' + PREV(f(a)) + ' TO ' + f(a);\n}\n\nCLASS Document;\ndate = DATA DATE (Document);\n\nCLASS Article;\nprice = DATA NUMERIC[14,2] (Document, Article);\n// write in the price of the document the last used price in the database\n// PREV is important to ignore the prices entered in this document\n// this is especially important if the last used price is materialized, then the platform can simply read this value from the table\nsetPrice  {\n    price(Document d, Article a) <- PREV((GROUP LAST price(d, a) ORDER date(d), d));\n}\n"})})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return a}});var r=n(67294);let s={},i=r.createContext(s);function a(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);