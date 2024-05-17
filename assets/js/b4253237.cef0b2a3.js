"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[26703],{41269:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var s=t(74848),n=t(28453);const o={title:"Comparison operators (=, >, <, ...)"},c=void 0,i={id:"Comparison_operators_=_etc",title:"Comparison operators (=, >, <, ...)",description:"Comparison operators create actions which return the result of the comparison operation. The values of the created properties belong to the built-in class BOOLEAN.",source:"@site/versioned_docs/version-v5/Comparison_operators_=_etc.md",sourceDirName:".",slug:"/Comparison_operators_=_etc",permalink:"/Comparison_operators_=_etc",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/Comparison_operators_=_etc.md",tags:[],version:"v5",lastUpdatedAt:171321898e4,frontMatter:{title:"Comparison operators (=, >, <, ...)"},sidebar:"learn",previous:{title:"Logical operators (AND, OR, NOT, XOR)",permalink:"/Logical_operators_AND_OR_NOT_XOR"},next:{title:"Rounding operator (ROUND)",permalink:"/Rounding_operator_ROUND"}},d={},a=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function l(e){const r={a:"a",br:"br",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"Comparison operators"})," create ",(0,s.jsx)(r.a,{href:"/Properties",children:"actions"})," which return the result of the comparison operation. The values of the created properties belong to the ",(0,s.jsx)(r.a,{href:"/Built-in_classes",children:"built-in class"})," ",(0,s.jsx)(r.code,{children:"BOOLEAN"}),"."]}),"\n",(0,s.jsx)(r.p,{children:"The platform currently supports the following comparison operators:"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Operator"}),(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Example"}),(0,s.jsx)(r.th,{children:"Result"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"="})," or ",(0,s.jsx)(r.code,{children:"=="})]}),(0,s.jsx)(r.td,{children:"Equality"}),(0,s.jsxs)(r.td,{children:["Takes two operands and returns ",(0,s.jsx)(r.code,{children:"TRUE"})," if the operands are equal"]}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"5 = 5"})," or ",(0,s.jsx)(r.code,{children:"5 == 5"})]}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"TRUE"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"!="})}),(0,s.jsx)(r.td,{children:"Inequality"}),(0,s.jsxs)(r.td,{children:["Accepts two operands and returns ",(0,s.jsx)(r.code,{children:"TRUE"})," if the operands are not equal"]}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"3 != 5"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"TRUE"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:">"}),", ",(0,s.jsx)(r.code,{children:"<"})]}),(0,s.jsx)(r.td,{children:"Strict comparison"}),(0,s.jsxs)(r.td,{children:["Accepts two operands and returns ",(0,s.jsx)(r.code,{children:"TRUE"})," if the strict comparison condition is met"]}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"3 > 5"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"NULL"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:">="}),", ",(0,s.jsx)(r.code,{children:"<="})]}),(0,s.jsx)(r.td,{children:"Non-strict comparison"}),(0,s.jsxs)(r.td,{children:["Accepts two operands and returns ",(0,s.jsx)(r.code,{children:"TRUE"})," if the non-strict comparison condition is met"]}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"4 <= 5"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"TRUE"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"LIKE"})}),(0,s.jsx)(r.td,{children:"Comparison with a pattern"}),(0,s.jsxs)(r.td,{children:["Accepts two operands: a string and a pattern. Returns ",(0,s.jsx)(r.code,{children:"TRUE"})," if the string matches the pattern"]}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"'abc' LIKE 'a%'"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"TRUE"})})]})]})]}),"\n",(0,s.jsxs)(r.p,{children:["If one of the operands is ",(0,s.jsx)(r.code,{children:"NULL"}),", all operators will return ",(0,s.jsx)(r.code,{children:"NULL"})," as a result."]}),"\n",(0,s.jsx)(r.h3,{id:"language",children:"Language"}),"\n",(0,s.jsxs)(r.p,{children:["Description of common ",(0,s.jsx)(r.a,{href:"/Comparison_operators",children:"comparison operators"}),".",(0,s.jsx)(r.br,{}),"\n","To create a property that compares a string with a pattern, the ",(0,s.jsxs)(r.a,{href:"/LIKE_operator",children:[(0,s.jsx)(r.code,{children:"LIKE"})," operator"]})," is used."]}),"\n",(0,s.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-lsf",children:"equalBarcodes = barcode(a) == barcode(b);\noutOfIntervalValue1(value, left, right) = value < left OR value > right;\noutOfIntervalValue2(value, left, right) = NOT (value >= left AND value <= right);\nisPhoneNumber(value) = value LIKE '(___) ___-____';\n"})})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>c,x:()=>i});var s=t(96540);const n={},o=s.createContext(n);function c(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);