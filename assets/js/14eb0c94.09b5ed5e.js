"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[57253],{11737:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var r=t(74848),o=t(28453);const i={title:"Rounding operator (ROUND)"},s=void 0,d={id:"Rounding_operator_ROUND",title:"Rounding operator (ROUND)",description:"The rounding operator creates a property whose value is the result of rounding a number to the specified number of digits. The arguments of this operator must be properties that determine the number and the rounding precision. Negative precision values indicate the number of least significant digits to be rounded in the integer part of the number, allowing you to round the number to tens, hundreds, etc.",source:"@site/versioned_docs/version-v5/Rounding_operator_ROUND.md",sourceDirName:".",slug:"/Rounding_operator_ROUND",permalink:"/Rounding_operator_ROUND",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/Rounding_operator_ROUND.md",tags:[],version:"v5",lastUpdatedAt:1712931250,formattedLastUpdatedAt:"Apr 12, 2024",frontMatter:{title:"Rounding operator (ROUND)"}},a={},u=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"rounding operator"})," creates a ",(0,r.jsx)(n.a,{href:"/Properties",children:"property"})," whose value is the result of rounding a number to the specified number of digits. The arguments of this operator must be properties that determine the number and the rounding precision. Negative precision values indicate the number of least significant digits to be rounded in the integer part of the number, allowing you to round the number to tens, hundreds, etc."]}),"\n",(0,r.jsx)(n.h3,{id:"language",children:"Language"}),"\n",(0,r.jsxs)(n.p,{children:["To create a property that rounds a number, the ",(0,r.jsxs)(n.a,{href:"/ROUND_operator",children:[(0,r.jsx)(n.code,{children:"ROUND"})," operator"]})," is used."]}),"\n",(0,r.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"number = DATA NUMERIC[10,3]();  //12345.678\nrounded = ROUND(number());      //12346\nrounded1 = ROUND(number(), 2);  //12345.68\nrounded2 = ROUND(number(), -2); //12300.00\n\nFORM roundTest\nPROPERTIES() number, rounded, rounded1, rounded2;\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>d});var r=t(96540);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);