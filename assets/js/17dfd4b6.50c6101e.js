"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[58933],{3737:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=t(74848),s=t(28453);const o={title:"ROUND operator"},i=void 0,a={id:"ROUND_operator",title:"ROUND operator",description:"ROUND operator creates a property that implements the rounding operation.",source:"@site/docs/ROUND_operator.md",sourceDirName:".",slug:"/ROUND_operator",permalink:"/next/ROUND_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/ROUND_operator.md",tags:[],version:"current",lastUpdatedAt:1712931250,formattedLastUpdatedAt:"Apr 12, 2024",frontMatter:{title:"ROUND operator"}},d={},c=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function l(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ROUND"})," operator creates a ",(0,r.jsx)(n.a,{href:"/next/Properties",children:"property"})," that implements the ",(0,r.jsx)(n.a,{href:"/next/Rounding_operator_ROUND",children:"rounding operation"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"ROUND(numExpr[, scaleExpr])\n"})}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"ROUND"})," operator creates a property whose value is a number rounded to a specified precision. The precision can be set to a negative value, which results in rounding the least significant digits in the integer part of the number."]}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"numExpr"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/next/Expression",children:"Expression"})," whose value determines the number to be rounded. The value must belong to one of the ",(0,r.jsx)(n.a,{href:"/next/Built-in_classes",children:"numerical classes"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"scaleExpr"})}),"\n",(0,r.jsxs)(n.p,{children:["Expression whose value determines the number of digits to which the number is rounded. The value of the expression must belong to the ",(0,r.jsx)(n.code,{children:"INTEGER"})," class. A positive value indicates the number of digits after the decimal point, a negative value indicates the number of digits before the decimal point, and zero indicates rounding to the nearest integer. If not specified, it defaults to zero."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"number = DATA NUMERIC[10,3]();  //12345.678\nrounded = ROUND(number());      //12346\nrounded1 = ROUND(number(), 2);  //12345.68\nrounded2 = ROUND(number(), -2); //12300.00\n\nFORM roundTest\nPROPERTIES() number, rounded, rounded1, rounded2;\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(96540);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);