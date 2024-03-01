"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[67964],{36457:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(74848),s=t(28453);const o={title:"FORMULA operator"},a=void 0,i={id:"FORMULA_operator",title:"FORMULA operator",description:"The FORMULA operator creates a property that implements a custom formula.",source:"@site/versioned_docs/version-v4/FORMULA_operator.md",sourceDirName:".",slug:"/FORMULA_operator",permalink:"/v4/FORMULA_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/FORMULA_operator.md",tags:[],version:"v4",lastUpdatedAt:1708525070,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"FORMULA operator"},sidebar:"learn",previous:{title:"EXCLUSIVE operator",permalink:"/v4/EXCLUSIVE_operator"},next:{title:"GROUP operator",permalink:"/v4/GROUP_operator"}},l={},c=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const r={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"FORMULA"})," operator creates a ",(0,n.jsx)(r.a,{href:"/v4/Properties",children:"property"})," that implements a ",(0,n.jsx)(r.a,{href:"/v4/Custom_formula_FORMULA",children:"custom formula"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"FORMULA [NULL] [className] [syntaxType1] text1, ..., [syntaxTypeN] textN\n"})}),"\n",(0,n.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"FORMULA"})," operator creates a property that executes an arbitrary formula in SQL. It is possible to specify different formulas for different SQL dialects so that these properties are portable between different DBMSs."]}),"\n",(0,n.jsxs)(r.p,{children:["This property operator cannot be used inside ",(0,n.jsx)(r.a,{href:"/v4/Expression",children:"expressions"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"NULL"})}),"\n",(0,n.jsxs)(r.p,{children:["Keyword specifying that the property being created may return ",(0,n.jsx)(r.code,{children:"NULL"})," if all parameter values are non-",(0,n.jsx)(r.code,{children:"NULL"}),". If not specified, then the property must be defined so that for non-",(0,n.jsx)(r.code,{children:"NULL"})," parameters it will always return a non-",(0,n.jsx)(r.code,{children:"NULL"})," value (failure to fulfill this condition may lead to unpredictable results)"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"className"})}),"\n",(0,n.jsxs)(r.p,{children:["The name of the ",(0,n.jsx)(r.a,{href:"/v4/Built-in_classes",children:"builtin class"})," of the value returned by the property. If not specified, the resulting class is considered to be the ",(0,n.jsx)(r.a,{href:"/v4/Built-in_classes#commonparentclass",children:"common ancestor"})," of all property operands."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"syntaxType1, ..., syntaxTypeN"})}),"\n",(0,n.jsx)(r.p,{children:"Keywords defining SQL dialect types. The following types are currently supported:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"PG"})," - PostgreSQL syntax"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"MS"})," - MS SQL Server syntax"]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"If the dialect type is not specified explicitly, then the corresponding formula text is set as the default text. Each of the types (or the lack of a type) must appear in the operator no more than once."}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"text1, ..., textN"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/v4/IDs#strliteral",children:"String literals"}),", each of which contains a formula in SQL syntax. The notation ",(0,n.jsx)(r.code,{children:"$1"}),", ",(0,n.jsx)(r.code,{children:"$2"})," etc. is used to pass property parameters to the formula, where the number denotes the property parameter number. Parameter numbers start from ",(0,n.jsx)(r.code,{children:"1"}),". The number of parameters in the created property will be equal to the maximum parameter number specified in the description of the formula."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-lsf",children:"// a property with two parameters: a rounded number and the number of decimal places\nround(number, digits) = FORMULA 'round(CAST(($1) as numeric),$2)';  \n\n// a property that converts the value passed as an argument to a 15-character string.\ntoString15(str) = FORMULA BPSTRING[15] 'CAST($1 AS character(15))';\n   \n// a property with two different implementations for different SQL dialects\njumpWorkdays = FORMULA NULL DATE PG 'jumpWorkdays($1, $2, $3)', MS 'dbo.jumpWorkdays($1, $2, $3)'; \n"})})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>i});var n=t(96540);const s={},o=n.createContext(s);function a(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);