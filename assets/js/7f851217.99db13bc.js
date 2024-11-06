"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[78884],{98284:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(74848),s=r(28453);const i={title:"Extremum (MAX, MIN)"},a=void 0,o={id:"Extremum_MAX_MIN",title:"Extremum (MAX, MIN)",description:"The extremum operator creates a property which calculates the maximum or minimum between several specified properties. If the value of any of these properties is NULL, this property is ignored. If the values of all properties are NULL, the result value is also NULL.",source:"@site/docs/Extremum_MAX_MIN.md",sourceDirName:".",slug:"/Extremum_MAX_MIN",permalink:"/Extremum_MAX_MIN",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Extremum_MAX_MIN.md",tags:[],version:"current",lastUpdatedAt:1623249583e3,frontMatter:{title:"Extremum (MAX, MIN)"},sidebar:"learn",previous:{title:"Rounding operator (ROUND)",permalink:"/Rounding_operator_ROUND"},next:{title:"String operators (+, CONCAT, SUBSTRING)",permalink:"/String_operators_+_CONCAT_SUBSTRING"}},l={},c=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function m(e){const t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.em,{children:"extremum operator"})," creates a ",(0,n.jsx)(t.a,{href:"/Properties",children:"property"})," which calculates the maximum or minimum between several specified properties. If the value of any of these properties is ",(0,n.jsx)(t.code,{children:"NULL"}),", this property is ignored. If the values of all properties are ",(0,n.jsx)(t.code,{children:"NULL"}),", the result value is also ",(0,n.jsx)(t.code,{children:"NULL"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,n.jsxs)(t.p,{children:["The maximum property is created using the ",(0,n.jsxs)(t.a,{href:"/MAX_operator",children:[(0,n.jsx)(t.code,{children:"MAX"})," operator"]}),", the minimum - using the ",(0,n.jsxs)(t.a,{href:"/MIN_operator",children:[(0,n.jsx)(t.code,{children:"MIN"})," operator"]}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lsf",children:"date1 = DATA DATE(INTEGER);\ndate2 = DATA DATE(INTEGER);\nmaxDate (INTEGER i) = MAX date1(i), date2(i);\n\nbalance = DATA INTEGER (Item);\noutcome 'Balance (non-negative)' (Item i) = MAX balance(i), 0;\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lsf",children:"minPrice(Book b) = MIN price1(b), price2(b);\n\ndate (INTEGER i) = DATA DATE (INTEGER);\nminDate (INTEGER i) = MIN date(i), 2001_01_01;\n"})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>o});var n=r(96540);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);