"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[68047],{69286:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var s=n(74848),a=n(28453);const c={title:"AFTER statement"},i=void 0,r={id:"AFTER_statement",title:"AFTER statement",description:"The AFTER statement calls an action after calling another action.",source:"@site/docs/AFTER_statement.md",sourceDirName:".",slug:"/AFTER_statement",permalink:"/next/AFTER_statement",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/AFTER_statement.md",tags:[],version:"current",lastUpdatedAt:1708525070,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"AFTER statement"},sidebar:"learn",previous:{title:"BEFORE statement",permalink:"/next/BEFORE_statement"},next:{title:"Empty statement",permalink:"/next/Empty_statement"}},l={},d=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function o(e){const t={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"AFTER"})," statement calls an ",(0,s.jsx)(t.a,{href:"/next/Actions",children:"action"})," after calling another action."]}),"\n",(0,s.jsx)(t.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"AFTER action(param1, ..., paramN) DO aspectAction;\n"})}),"\n",(0,s.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"AFTER"})," statement defines an action (let's call it an ",(0,s.jsx)(t.em,{children:"aspect"}),") that will be called after the specified action."]}),"\n",(0,s.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"action"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"/next/IDs#propertyid",children:"ID"})," of the action after which the aspect will be called."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"param1, ..., paramN"})}),"\n",(0,s.jsxs)(t.p,{children:["List of action parameter names. Each name is defined ",(0,s.jsx)(t.a,{href:"/next/IDs#id",children:"by a simple ID"}),". These parameters can be accessed when defining an aspect."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"aspectAction"})}),"\n",(0,s.jsxs)(t.p,{children:["A ",(0,s.jsx)(t.a,{href:"/next/Action_operators#contextdependent",children:"context-dependent action operator"})," describing the aspect."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lsf",children:"changePrice(Sku s, DATE d, NUMERIC[10,2] price)  { price(s, d) <- price; }\n\n// A message will be shown after each call to changePrice\nAFTER changePrice(Sku s, DATE d, NUMERIC[10,2] price) DO MESSAGE 'Price was changed'; \n"})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var s=n(96540);const a={},c=s.createContext(a);function i(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);