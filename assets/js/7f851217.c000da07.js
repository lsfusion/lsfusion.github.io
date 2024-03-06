"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[78884],{69125:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(74848),s=r(28453);const a={title:"Extremum (MAX, MIN)"},o=void 0,i={id:"Extremum_MAX_MIN",title:"Extremum (MAX, MIN)",description:"The extremum operator creates a property which calculates the maximum or minimum between several specified properties. If the value of any of these properties is NULL, this property is ignored. If the values of all properties are NULL, the result value is also NULL.",source:"@site/docs/Extremum_MAX_MIN.md",sourceDirName:".",slug:"/Extremum_MAX_MIN",permalink:"/next/Extremum_MAX_MIN",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Extremum_MAX_MIN.md",tags:[],version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"Jun 9, 2021",frontMatter:{title:"Extremum (MAX, MIN)"},sidebar:"learn",previous:{title:"Comparison operators (=, >, <, ...)",permalink:"/next/Comparison_operators_=_etc"},next:{title:"String operators (+, CONCAT, SUBSTRING)",permalink:"/next/String_operators_+_CONCAT_SUBSTRING"}},l={},c=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function m(e){const t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.em,{children:"extremum operator"})," creates a ",(0,n.jsx)(t.a,{href:"/next/Properties",children:"property"})," which calculates the maximum or minimum between several specified properties. If the value of any of these properties is ",(0,n.jsx)(t.code,{children:"NULL"}),", this property is ignored. If the values of all properties are ",(0,n.jsx)(t.code,{children:"NULL"}),", the result value is also ",(0,n.jsx)(t.code,{children:"NULL"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,n.jsxs)(t.p,{children:["The maximum property is created using the ",(0,n.jsxs)(t.a,{href:"/next/MAX_operator",children:[(0,n.jsx)(t.code,{children:"MAX"})," operator"]}),", the minimum - using the ",(0,n.jsxs)(t.a,{href:"/next/MIN_operator",children:[(0,n.jsx)(t.code,{children:"MIN"})," operator"]}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lsf",children:"date1 = DATA DATE(INTEGER);\ndate2 = DATA DATE(INTEGER);\nmaxDate (INTEGER i) = MAX date1(i), date2(i);\n\nbalance = DATA INTEGER (Item);\noutcome 'Balance (non-negative)' (Item i) = MAX balance(i), 0;\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lsf",children:"minPrice(Book b) = MIN price1(b), price2(b);\n\ndate (INTEGER i) = DATA DATE (INTEGER);\nminDate (INTEGER i) = MIN date(i), 2001_01_01;\n"})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var n=r(96540);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);