"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[27583],{51087:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=t(74848),o=t(28453);const i={title:"Rounding operator (ROUND)"},s=void 0,a={id:"Rounding_operator_ROUND",title:"Rounding operator (ROUND)",description:"The rounding operator creates a property whose value is the result of rounding a number to the specified number of digits. The arguments of this operator must be properties that determine the number and the rounding precision. Negative precision values indicate the number of least significant digits to be rounded in the integer part of the number, allowing you to round the number to tens, hundreds, etc.",source:"@site/docs/Rounding_operator_ROUND.md",sourceDirName:".",slug:"/Rounding_operator_ROUND",permalink:"/Rounding_operator_ROUND",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Rounding_operator_ROUND.md",tags:[],version:"current",lastUpdatedAt:171342637e4,frontMatter:{title:"Rounding operator (ROUND)"},sidebar:"learn",previous:{title:"Comparison operators (=, >, <, ...)",permalink:"/Comparison_operators_=_etc"},next:{title:"Extremum (MAX, MIN)",permalink:"/Extremum_MAX_MIN"}},u={},d=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function p(e){const n={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"rounding operator"})," creates a ",(0,r.jsx)(n.a,{href:"/Properties",children:"property"})," whose value is the result of rounding a number to the specified number of digits. The arguments of this operator must be properties that determine the number and the rounding precision. Negative precision values indicate the number of least significant digits to be rounded in the integer part of the number, allowing you to round the number to tens, hundreds, etc."]}),"\n",(0,r.jsx)(n.h3,{id:"language",children:"Language"}),"\n",(0,r.jsxs)(n.p,{children:["To create a property that rounds a number, the ",(0,r.jsxs)(n.a,{href:"/ROUND_operator",children:[(0,r.jsx)(n.code,{children:"ROUND"})," operator"]})," is used."]}),"\n",(0,r.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"number = DATA NUMERIC[10,3]();  //12345.678\nrounded = ROUND(number());      //12346\nrounded1 = ROUND(number(), 2);  //12345.68\nrounded2 = ROUND(number(), -2); //12300\n\nFORM roundTest\nPROPERTIES() number, rounded, rounded1, rounded2;\n"})})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var r=t(96540);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);