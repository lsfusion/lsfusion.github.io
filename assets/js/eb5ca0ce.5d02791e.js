"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[95457],{54869:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var s=t(74848),a=t(28453);const i={title:"BEFORE statement"},c=void 0,r={id:"BEFORE_statement",title:"BEFORE statement",description:"The BEFORE statement calls an action before calling another action.",source:"@site/docs/BEFORE_statement.md",sourceDirName:".",slug:"/BEFORE_statement",permalink:"/next/BEFORE_statement",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/BEFORE_statement.md",tags:[],version:"current",lastUpdatedAt:1708525070,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"BEFORE statement"},sidebar:"learn",previous:{title:"INDEX statement",permalink:"/next/INDEX_statement"},next:{title:"AFTER statement",permalink:"/next/AFTER_statement"}},l={},o=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"BEFORE"})," statement calls an ",(0,s.jsx)(n.a,{href:"/next/Actions",children:"action"})," before calling another action."]}),"\n",(0,s.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"BEFORE action(param1, ..., paramN) DO aspectAction;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"BEFORE"})," statement defines an action (let's call it an ",(0,s.jsx)(n.em,{children:"aspect"}),") that will be called before the specified one."]}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"action"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"/next/IDs#propertyid",children:"ID"})," of the action before which the aspect will be called."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"param1, ..., paramN"})}),"\n",(0,s.jsxs)(n.p,{children:["List of action parameter names. Each name is defined ",(0,s.jsx)(n.a,{href:"/next/IDs#id",children:"by a simple ID"}),". These parameters can be accessed while defining an aspect."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"aspectAction"})}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.a,{href:"/next/Action_operators#contextdependent",children:"context-dependent action operator"})," describing the aspect."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lsf",children:"changeName(Sku s, STRING[100] name)  { name(s) <- name; }\n\n// The message will be shown before each call to changeName\nBEFORE changeName(Sku s, STRING[100] name) DO MESSAGE 'Changing user name'; \n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var s=t(96540);const a={},i=s.createContext(a);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);