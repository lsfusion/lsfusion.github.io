"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[89196],{52060:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=n(74848),a=n(28453);const i={title:"Constant"},r=void 0,o={id:"Constant",title:"Constant",description:"The constant operator is used to create properties without parameters which always return the same value. This value can be static objects of custom and built-in classes as well as the special NULL value.",source:"@site/docs/Constant.md",sourceDirName:".",slug:"/Constant",permalink:"/next/Constant",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Constant.md",tags:[],version:"current",lastUpdatedAt:162565152e4,frontMatter:{title:"Constant"},sidebar:"learn",previous:{title:"Composition (JOIN)",permalink:"/next/Composition_JOIN"},next:{title:"Operations with primitives",permalink:"/next/Operations_with_primitives"}},c={},l=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.em,{children:"constant"})," operator is used to create properties without parameters which always return the same value. This value can be ",(0,s.jsx)(t.a,{href:"/next/Static_objects",children:"static objects"})," of ",(0,s.jsx)(t.a,{href:"/next/User_classes",children:"custom"})," and ",(0,s.jsx)(t.a,{href:"/next/Built-in_classes",children:"built-in"})," classes as well as the special ",(0,s.jsx)(t.code,{children:"NULL"})," value."]}),"\n",(0,s.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,s.jsxs)(t.p,{children:["Static objects of custom classes are specified as ",(0,s.jsx)(t.code,{children:"<class name>.<object name>"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Static objects of built-in classes are specified by special ",(0,s.jsx)(t.a,{href:"/next/Literals",children:"literals"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lsf",children:"CLASS Direction {\n    north, east, south, west // declaring static objects\n}\n\n// A constant property is created from a Direction.north object which is then used \n// by the comparison operator to construct the isNorth property\nisNorth (Direction d) = d == Direction.north;  \n\n// A constant property is created from a literal describing the date\ndefaultDate() = 1982_07_13;                         \n\nCLASS Man;\nage 'Age' = DATA INTEGER (Man);\n// A constant property is created from an integer (integer literal)\nisChild (Man m) = age(m) < 17;                        \n"})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(96540);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);