"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[93387],{41346:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=s(74848),a=s(28453);const r={title:"Constant"},i=void 0,o={id:"Constant",title:"Constant",description:"The constant operator is used to create properties without parameters which always return the same value. This value can be static objects of custom and built-in classes as well as the special NULL value.",source:"@site/versioned_docs/version-v4/Constant.md",sourceDirName:".",slug:"/Constant",permalink:"/v4/Constant",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Constant.md",tags:[],version:"v4",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"Jul 7, 2021",frontMatter:{title:"Constant"},sidebar:"learn",previous:{title:"Composition (JOIN)",permalink:"/v4/Composition_JOIN"},next:{title:"Operations with primitives",permalink:"/v4/Operations_with_primitives"}},c={},l=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.em,{children:"constant"})," operator is used to create properties without parameters which always return the same value. This value can be ",(0,n.jsx)(t.a,{href:"/v4/Static_objects",children:"static objects"})," of ",(0,n.jsx)(t.a,{href:"/v4/User_classes",children:"custom"})," and ",(0,n.jsx)(t.a,{href:"/v4/Built-in_classes",children:"built-in"})," classes as well as the special ",(0,n.jsx)(t.code,{children:"NULL"})," value."]}),"\n",(0,n.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,n.jsxs)(t.p,{children:["Static objects of custom classes are specified as ",(0,n.jsx)(t.code,{children:"<class name>.<object name>"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Static objects of built-in classes are specified by special ",(0,n.jsx)(t.a,{href:"/v4/Literals",children:"literals"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lsf",children:"CLASS Direction {\r\n    north, east, south, west // declaring static objects\r\n}\r\n\r\n// A constant property is created from a Direction.north object which is then used \r\n// by the comparison operator to construct the isNorth property\r\nisNorth (Direction d) = d == Direction.north;  \r\n\r\n// A constant property is created from a literal describing the date\r\ndefaultDate() = 1982_07_13;                         \r\n\r\nCLASS Man;\r\nage 'Age' = DATA INTEGER (Man);\r\n// A constant property is created from an integer (integer literal)\r\nisChild (Man m) = age(m) < 17;                        \n"})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>o});var n=s(96540);const a={},r=n.createContext(a);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);