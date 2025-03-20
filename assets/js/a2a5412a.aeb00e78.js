"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["28637"],{23245:function(e,t,n){n.r(t),n.d(t,{default:()=>m,frontMatter:()=>r,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"Empty_statement","title":"Empty statement","description":"Empty statement - a special statement that consists of a single semicolon.","source":"@site/versioned_docs/version-v4/Empty_statement.md","sourceDirName":".","slug":"/Empty_statement","permalink":"/v4/Empty_statement","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v4/docs/en/Empty_statement.md","tags":[],"version":"v4","lastUpdatedAt":1708525070000,"frontMatter":{"title":"Empty statement"},"sidebar":"learn","previous":{"title":"AFTER statement","permalink":"/v4/AFTER_statement"},"next":{"title":"Coding conventions","permalink":"/v4/Coding_conventions"}}'),i=n("85893"),o=n("50065");let r={title:"Empty statement"},a=void 0,l={},c=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3}];function d(e){let t={code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"Empty statement"})," - a special statement that consists of a single semicolon."]}),"\n",(0,i.jsx)(t.h3,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:";\n"})}),"\n",(0,i.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"An empty statement is intended to prevent extra semicolons from being diagnosed as an error. For example, statements in which the last character is a closing brace should not end with a semicolon. If a semicolon is inserted, however, no error will be thrown, since this will be interpreted as two different statements."}),"\n",(0,i.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-lsf",children:"CLASS Result {\n    yes 'Yes',\n    no 'No'\n};  // semicolon is not needed here, but its presence is not an error\n\n;;;; // this is valid lsFusion code\n"})})]})}function m(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return r}});var s=n(67294);let i={},o=s.createContext(i);function r(e){let t=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);