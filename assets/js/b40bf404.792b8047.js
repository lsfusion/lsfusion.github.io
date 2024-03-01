"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[32741],{23805:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=s(74848),n=s(28453);const o={title:"AND, OR, NOT, XOR operators"},a=void 0,i={id:"AND_OR_NOT_XOR_operators",title:"AND, OR, NOT, XOR operators",description:"AND, OR, NOT, XOR operators that create properties that implement logical operations.",source:"@site/docs/AND_OR_NOT_XOR_operators.md",sourceDirName:".",slug:"/AND_OR_NOT_XOR_operators",permalink:"/next/AND_OR_NOT_XOR_operators",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/AND_OR_NOT_XOR_operators.md",tags:[],version:"current",lastUpdatedAt:1708525070,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"AND, OR, NOT, XOR operators"},sidebar:"learn",previous:{title:"Type conversion operator",permalink:"/next/Type_conversion_operator"},next:{title:"IS, AS operators",permalink:"/next/IS_AS_operators"}},l={},c=[{value:"Syntax",id:"syntax",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function p(e){const r={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"AND"}),", ",(0,t.jsx)(r.code,{children:"OR"}),", ",(0,t.jsx)(r.code,{children:"NOT"}),", ",(0,t.jsx)(r.code,{children:"XOR"})," operators that create ",(0,t.jsx)(r.a,{href:"/next/Properties",children:"properties"})," that implement ",(0,t.jsx)(r.a,{href:"/next/Logical_operators_AND_OR_NOT_XOR",children:"logical operations"}),"."]}),"\n",(0,t.jsx)(r.h3,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"expression1 AND expression2\r\nexpression1 OR expression2\r\nexpression1 XOR expression2\r\nNOT expression1\n"})}),"\n",(0,t.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"expression1, expression2"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/next/Expression",children:"Expressions"})," whose values will be the operator arguments. Expression values are considered to be ",(0,t.jsx)(r.code,{children:"BOOLEAN"})," class values depending on whether they are ",(0,t.jsx)(r.code,{children:"NULL"})," or not."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lsf",children:"likes = DATA BOOLEAN (Person, Person);\r\nlikes(Person a, Person b, Person c) = likes(a, b) AND likes(a, c);\r\noutOfInterval1(value, left, right) = value < left OR value > right;\r\noutOfInterval2(value, left, right) = NOT (value >= left AND value <= right);\n"})})]})}function d(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>a,x:()=>i});var t=s(96540);const n={},o=t.createContext(n);function a(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);