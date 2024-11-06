"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[59850],{61993:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=r(74848),o=r(28453);const s={title:"ROUND operator"},i=void 0,a={id:"ROUND_operator",title:"ROUND operator",description:"ROUND operator creates a property that implements the rounding operation.",source:"@site/versioned_docs/version-v5/ROUND_operator.md",sourceDirName:".",slug:"/ROUND_operator",permalink:"/v5/ROUND_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/ROUND_operator.md",tags:[],version:"v5",lastUpdatedAt:171342637e4,frontMatter:{title:"ROUND operator"},sidebar:"learn",previous:{title:"RECURSION operator",permalink:"/v5/RECURSION_operator"},next:{title:"STRUCT operator",permalink:"/v5/STRUCT_operator"}},d={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function c(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ROUND"})," operator creates a ",(0,t.jsx)(n.a,{href:"/v5/Properties",children:"property"})," that implements the ",(0,t.jsx)(n.a,{href:"/v5/Rounding_operator_ROUND",children:"rounding operation"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ROUND(numExpr[, scaleExpr])\n"})}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"ROUND"})," operator creates a property whose value is a number rounded to a specified precision. The precision can be set to a negative value, which results in rounding the least significant digits in the integer part of the number."]}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"numExpr"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/v5/Expression",children:"Expression"})," whose value determines the number to be rounded. The value must belong to one of the ",(0,t.jsx)(n.a,{href:"/v5/Built-in_classes",children:"numerical classes"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"scaleExpr"})}),"\n",(0,t.jsxs)(n.p,{children:["Expression whose value determines the number of digits to which the number is rounded. The value of the expression must belong to the ",(0,t.jsx)(n.code,{children:"INTEGER"})," class. A positive value indicates the number of digits after the decimal point, a negative value indicates the number of digits before the decimal point, and zero indicates rounding to the nearest integer. If not specified, it defaults to zero."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"number = DATA NUMERIC[10,3]();  //12345.678\nrounded = ROUND(number());      //12346\nrounded1 = ROUND(number(), 2);  //12345.68\nrounded2 = ROUND(number(), -2); //12300\n\nFORM roundTest\nPROPERTIES() number, rounded, rounded1, rounded2;\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var t=r(96540);const o={},s=t.createContext(o);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);