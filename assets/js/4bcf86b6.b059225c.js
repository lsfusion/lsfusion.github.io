"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[30859],{46775:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(74848),o=n(28453);const i={title:"Interruption (BREAK)"},s=void 0,a={id:"Interruption_BREAK",title:"Interruption (BREAK)",description:"The interrupt operator creates an action that exits the most nested loop (normal or recursive) within which this action is located. Control is transferred to the first action following the loop. If the created action is not inside a loop, its behavior becomes similar to the action created by the exit operator.",source:"@site/docs/Interruption_BREAK.md",sourceDirName:".",slug:"/Interruption_BREAK",permalink:"/Interruption_BREAK",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Interruption_BREAK.md",tags:[],version:"current",lastUpdatedAt:1623249583e3,frontMatter:{title:"Interruption (BREAK)"},sidebar:"learn",previous:{title:"Recursive loop (WHILE)",permalink:"/Recursive_loop_WHILE"},next:{title:"Next iteration (CONTINUE)",permalink:"/Next_iteration_CONTINUE"}},c={},l=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function p(e){const t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.em,{children:"interrupt operator"})," creates an ",(0,r.jsx)(t.a,{href:"/Actions",children:"action"})," that exits the most nested loop (",(0,r.jsx)(t.a,{href:"/Loop_FOR",children:"normal"})," or ",(0,r.jsx)(t.a,{href:"/Recursive_loop_WHILE",children:"recursive"}),") within which this action is located. Control is transferred to the first action following the loop. If the created action is not inside a loop, its behavior becomes similar to the action created by the ",(0,r.jsx)(t.a,{href:"/Exit_RETURN",children:"exit operator"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,r.jsxs)(t.p,{children:["The interrupt operator syntax is described by the ",(0,r.jsxs)(t.a,{href:"/BREAK_operator",children:[(0,r.jsx)(t.code,{children:"BREAK"})," operator"]}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lsf",children:"testBreak ()  {\n    FOR iterate(INTEGER i, 1, 100) DO {\n        IF i == 50 THEN BREAK; // will only come up to 50\n    }\n}\n"})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(96540);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);