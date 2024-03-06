"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[14522],{52975:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=n(74848),i=n(28453);const o={title:"Empty statement"},r=void 0,a={id:"Empty_statement",title:"Empty statement",description:"Empty statement - a special statement that consists of a single semicolon.",source:"@site/versioned_docs/version-v4/Empty_statement.md",sourceDirName:".",slug:"/Empty_statement",permalink:"/v4/Empty_statement",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Empty_statement.md",tags:[],version:"v4",lastUpdatedAt:1708525070,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"Empty statement"},sidebar:"learn",previous:{title:"AFTER statement",permalink:"/v4/AFTER_statement"},next:{title:"Coding conventions",permalink:"/v4/Coding_conventions"}},c={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3}];function d(e){const t={code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Empty statement"})," - a special statement that consists of a single semicolon."]}),"\n",(0,s.jsx)(t.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:";\n"})}),"\n",(0,s.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"An empty statement is intended to prevent extra semicolons from being diagnosed as an error. For example, statements in which the last character is a closing brace should not end with a semicolon. If a semicolon is inserted, however, no error will be thrown, since this will be interpreted as two different statements."}),"\n",(0,s.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lsf",children:"CLASS Result {\n    yes 'Yes',\n    no 'No'\n};  // semicolon is not needed here, but its presence is not an error\n\n;;;; // this is valid lsFusion code\n"})})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(96540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);