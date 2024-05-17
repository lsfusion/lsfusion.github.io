"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[89356],{23757:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var s=r(74848),a=r(28453);const n={title:"Custom formula (FORMULA)"},o=void 0,i={id:"Custom_formula_FORMULA",title:"Custom formula (FORMULA)",description:"The custom formula operator allows you to create a property that calculates defined formula in SQL. You can specify different implementations of the formula for different SQL servers. The formula is defined as a string, within which the special character $ and the number of this parameter (starting from 1) are used to access the parameter. Accordingly, the number of parameters of the result property will be equal to the greatest of the numbers of the parameters used.",source:"@site/versioned_docs/version-v4/Custom_formula_FORMULA.md",sourceDirName:".",slug:"/Custom_formula_FORMULA",permalink:"/v4/Custom_formula_FORMULA",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Custom_formula_FORMULA.md",tags:[],version:"v4",lastUpdatedAt:162565152e4,frontMatter:{title:"Custom formula (FORMULA)"},sidebar:"learn",previous:{title:"Internal call (INTERNAL)",permalink:"/v4/Internal_call_INTERNAL"},next:{title:"Eval (EVAL)",permalink:"/v4/Eval_EVAL"}},l={},c=[{value:"Determining the result class",id:"determining-the-result-class",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function u(e){const t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.em,{children:"custom formula"})," operator allows you to create a ",(0,s.jsx)(t.a,{href:"/v4/Properties",children:"property"})," that calculates defined formula in SQL. You can specify different implementations of the formula for different SQL servers. The formula is defined as a string, within which the special character ",(0,s.jsx)(t.code,{children:"$"})," and the number of this parameter (starting from ",(0,s.jsx)(t.code,{children:"1"}),") are used to access the parameter. Accordingly, the number of parameters of the result property will be equal to the greatest of the numbers of the parameters used."]}),"\n",(0,s.jsx)(t.p,{children:"Using this operator is recommended only if the task cannot be accomplished using other operators, and only if it is known for certain which specific SQL servers can be used, or if the syntax constructs used comply with one of the latest SQL standards."}),"\n",(0,s.jsx)(t.h3,{id:"determining-the-result-class",children:"Determining the result class"}),"\n",(0,s.jsxs)(t.p,{children:["By default, the result class of the custom operator is a ",(0,s.jsx)(t.a,{href:"/v4/Built-in_classes#commonparentclass",children:"common ancestor"})," of all its operands. If necessary, the developer can specify this class explicitly."]}),"\n",(0,s.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,s.jsxs)(t.p,{children:["To declare a property using a custom formula, use the ",(0,s.jsxs)(t.a,{href:"/v4/FORMULA_operator",children:[(0,s.jsx)(t.code,{children:"FORMULA"})," operator"]}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lsf",children:"// a property with two parameters: a rounded number and the number of decimal places\nround(number, digits) = FORMULA 'round(CAST(($1) as numeric),$2)';\n  \n// a property that converts the value passed as an argument to a 15-character string.\ntoString15(str) = FORMULA BPSTRING[15] 'CAST($1 AS character(15))';\n   \n// a property with two different implementations for different SQL dialects\njumpWorkdays = FORMULA NULL DATE PG 'jumpWorkdays($1, $2, $3)', MS 'dbo.jumpWorkdays($1, $2, $3)'; \n"})})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var s=r(96540);const a={},n=s.createContext(a);function o(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);