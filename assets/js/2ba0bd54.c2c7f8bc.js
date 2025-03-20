"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["61054"],{6229:function(e,t,n){n.r(t),n.d(t,{default:()=>d,frontMatter:()=>s,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>a});var r=JSON.parse('{"id":"Recursive_loop_WHILE","title":"Recursive loop (WHILE)","description":"The recursive loop operator is similar to a regular loop operator, with the only difference being that iteration is performed recursively until at a certain point the set of objects collections satisfying the condition becomes empty. As a result, there is no sense in defining alternative actions with this operator.","source":"@site/versioned_docs/version-v4/Recursive_loop_WHILE.md","sourceDirName":".","slug":"/Recursive_loop_WHILE","permalink":"/v4/Recursive_loop_WHILE","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v4/docs/en/Recursive_loop_WHILE.md","tags":[],"version":"v4","lastUpdatedAt":1623249583000,"frontMatter":{"title":"Recursive loop (WHILE)"},"sidebar":"learn","previous":{"title":"Branching (CASE, IF, MULTI)","permalink":"/v4/Branching_CASE_IF_MULTI"},"next":{"title":"Interruption (BREAK)","permalink":"/v4/Interruption_BREAK"}}'),o=n("85893"),i=n("50065");let s={title:"Recursive loop (WHILE)"},a=void 0,l={},c=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function u(e){let t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.em,{children:"recursive loop operator"})," is similar to a regular ",(0,o.jsx)(t.a,{href:"/v4/Loop_FOR",children:"loop"})," operator, with the only difference being that iteration is performed recursively until at a certain point the set of objects collections satisfying the condition becomes empty. As a result, there is no sense in defining ",(0,o.jsx)(t.em,{children:"alternative"})," actions with this operator."]}),"\n",(0,o.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,o.jsxs)(t.p,{children:["The syntax of the recursive loop operator is described by the ",(0,o.jsxs)(t.a,{href:"/v4/WHILE_operator",children:[(0,o.jsx)(t.code,{children:"WHILE"})," operator"]}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lsf",children:"iterateDates (DATE dateFrom, DATE dateTo)  {\n    LOCAL dateCur = DATE();\n\n    dateCur() <- dateFrom;\n    WHILE dateCur() <= dateTo DO {\n        MESSAGE 'I have a date ' + dateCur();\n        dateCur() <- sum(dateCur(), 1);\n    }\n}\n"})})]})}function d(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return s}});var r=n(67294);let o={},i=r.createContext(o);function s(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);