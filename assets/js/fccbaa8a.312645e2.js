"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["48443"],{90881:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>s,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"Call_EXEC","title":"Call (EXEC)","description":"The EXEC operator creates an action that executes another action, passing it specified properties (arguments).","source":"@site/versioned_docs/version-v5/Call_EXEC.md","sourceDirName":".","slug":"/Call_EXEC","permalink":"/v5/Call_EXEC","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v5/docs/en/Call_EXEC.md","tags":[],"version":"v5","lastUpdatedAt":1685108136000,"frontMatter":{"title":"Call (EXEC)"},"sidebar":"learn","previous":{"title":"Sequence ({...})","permalink":"/v5/Sequence"},"next":{"title":"Loop (FOR)","permalink":"/v5/Loop_FOR"}}'),a=n("85893"),o=n("50065");let s={title:"Call (EXEC)"},i=void 0,l={},c=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function d(e){let t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"EXEC"})," operator creates an ",(0,a.jsx)(t.a,{href:"/v5/Actions",children:"action"})," that executes another action, passing it specified properties (",(0,a.jsx)(t.em,{children:"arguments"}),")."]}),"\n",(0,a.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsxs)(t.a,{href:"/v5/EXEC_operator",children:["Syntax of the ",(0,a.jsx)(t.code,{children:"EXEC"})," operator"]}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-lsf",children:"// declaration of importData action with two parameters\nimportData(Sku sku, Order order)  {\n    MESSAGE 'Run import for ' + id(sku) + ' ' + customer(order);\n}\n\norder = DATA Order (OrderDetail) NONULL DELETE;\n// declaration of the action runImport that calls importData\nrunImport(OrderDetail d)  { importData(sku(d), order(d)); } \n"})})]})}function u(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return s}});var r=n(67294);let a={},o=r.createContext(a);function s(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);