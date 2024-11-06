"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[82917],{15589:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>n,metadata:()=>d,toc:()=>l});var t=s(74848),i=s(28453);const n={title:"Arithmetic operators (+, -, *, ...)"},c=void 0,d={id:"Arithmetic_operators_+_-_etc",title:"Arithmetic operators (+, -, *, ...)",description:"Arithmetic operators create properties whose value is the result of an arithmetic operation. The arguments of these operators must be properties whose values are instances of number classes . The platform currently supports the following arithmetic operators:",source:"@site/versioned_docs/version-v5/Arithmetic_operators_+_-_etc.md",sourceDirName:".",slug:"/Arithmetic_operators_+_-_etc",permalink:"/v5/Arithmetic_operators_+_-_etc",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/Arithmetic_operators_+_-_etc.md",tags:[],version:"v5",lastUpdatedAt:1685108136e3,frontMatter:{title:"Arithmetic operators (+, -, *, ...)"},sidebar:"learn",previous:{title:"Operations with primitives",permalink:"/v5/Operations_with_primitives"},next:{title:"Logical operators (AND, OR, NOT, XOR)",permalink:"/v5/Logical_operators_AND_OR_NOT_XOR"}},o={},l=[{value:"Determining the result class",id:"determining-the-result-class",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function h(e){const r={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"Arithmetic operators"})," create ",(0,t.jsx)(r.a,{href:"/v5/Properties",children:"properties"})," whose value is the result of an arithmetic operation. The arguments of these operators must be properties whose values are instances of ",(0,t.jsx)(r.a,{href:"/v5/Built-in_classes",children:"number classes"})," . The platform currently supports the following arithmetic operators:"]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Operator"}),(0,t.jsx)(r.th,{children:"Name"}),(0,t.jsx)(r.th,{children:"Description"}),(0,t.jsx)(r.th,{children:"Example"}),(0,t.jsx)(r.th,{children:"Result"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"+"})}),(0,t.jsx)(r.td,{children:"Summation"}),(0,t.jsx)(r.td,{children:"Takes two input operands and returns their sum"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"3 + 5"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"8"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"-"})}),(0,t.jsx)(r.td,{children:"Difference"}),(0,t.jsxs)(r.td,{children:["Accepts two input operands and returns their difference",(0,t.jsx)("br",{}),"This operator also has a unary form, in which case the first operand is considered equal to ",(0,t.jsx)(r.code,{children:"0"})]}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"5 - 3"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"2"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"*"})}),(0,t.jsx)(r.td,{children:"Multiplication"}),(0,t.jsx)(r.td,{children:"Accepts two input operands and returns their product"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"3 * 5"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"15"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"/"})}),(0,t.jsx)(r.td,{children:"Ratio"}),(0,t.jsx)(r.td,{children:"Takes two input operands and returns their ratio"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"15 / 3"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"5"})})]})]})]}),"\n",(0,t.jsxs)(r.p,{children:["All of these operators return ",(0,t.jsx)(r.code,{children:"NULL"})," if one of the operands is ",(0,t.jsx)(r.code,{children:"NULL"})," . It is also possible to use a special form of summation and difference operators with brackets, in which case ",(0,t.jsx)(r.code,{children:"NULL"})," will be equivalent to ",(0,t.jsx)(r.code,{children:"0"}),". The reverse is also true for these type of operators: if the result of an operator in such form is ",(0,t.jsx)(r.code,{children:"0"}),", then ",(0,t.jsx)(r.code,{children:"NULL"})," is returned (e. g., ",(0,t.jsx)(r.code,{children:"5 (-) 5 = NULL"}),"):"]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Operator"}),(0,t.jsx)(r.th,{children:"Name"}),(0,t.jsx)(r.th,{children:"Description"}),(0,t.jsx)(r.th,{children:"Example"}),(0,t.jsx)(r.th,{children:"Result"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"(+)"})}),(0,t.jsx)(r.td,{children:"Summation"}),(0,t.jsxs)(r.td,{children:["Takes two input operands and returns their sum, treating ",(0,t.jsx)(r.code,{children:"NULL"})," as ",(0,t.jsx)(r.code,{children:"0"})]}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.code,{children:"3 (+) 5"}),(0,t.jsx)("br",{}),(0,t.jsx)(r.code,{children:"3 (+) NULL"})]}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.code,{children:"8"}),(0,t.jsx)("br",{}),(0,t.jsx)(r.code,{children:"3"})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"(-)"})}),(0,t.jsx)(r.td,{children:"Difference"}),(0,t.jsxs)(r.td,{children:["Takes two input operands and returns their difference, treating ",(0,t.jsx)(r.code,{children:"NULL"})," as ",(0,t.jsx)(r.code,{children:"0"})]}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.code,{children:"5 (-) 3"}),(0,t.jsx)("br",{}),(0,t.jsx)(r.code,{children:"5 (-) NULL"}),(0,t.jsx)("br",{}),(0,t.jsx)(r.code,{children:"5 (-) 5"})]}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.code,{children:"2"}),(0,t.jsx)("br",{}),(0,t.jsx)(r.code,{children:"5"}),(0,t.jsx)("br",{}),(0,t.jsx)(r.code,{children:"NULL"})]})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"determining-the-result-class",children:"Determining the result class"}),"\n",(0,t.jsx)(r.p,{children:"The result class is determined as:"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Operator"}),(0,t.jsx)(r.th,{children:"Result"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.code,{children:"+"}),", ",(0,t.jsx)(r.code,{children:"-"})]}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"/v5/Built-in_classes#commonparentclass",children:"Common ancestor"}),' ("Numbers" family)']})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"*"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"NUMERIC[p1.IntegerPart + p1.Precision + p2.IntegerPart + p2.Precision, p1.Precision + p2.Precision]"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"/"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"NUMERIC[p1.IntegerPart + p1.Precision + p2.IntegerPart + p2.Precision, p1.Precision + p2.IntegerPart]"})})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"language",children:"Language"}),"\n",(0,t.jsxs)(r.p,{children:["Description ",(0,t.jsx)(r.a,{href:"/v5/Arithmetic_operators",children:"of arithmetic operators"}),"."]}),"\n",(0,t.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lsf",children:"sum(a, b) = a + b;\ntransform(a, b, c) = -a * (b (+) c);\n"})})]})}function a(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>c,x:()=>d});var t=s(96540);const i={},n=t.createContext(i);function c(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);