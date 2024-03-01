"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[60497],{96909:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=r(74848),n=r(28453);const o={title:"Structure operators (STRUCT, [])"},c=void 0,a={id:"Structure_operators_STRUCT",title:"Structure operators (STRUCT, [])",description:"The term structure is used in the platform to refer to the classes which objects consist of a collection of other objects in a fixed order. The platform supports two operators for working with structures:",source:"@site/docs/Structure_operators_STRUCT.md",sourceDirName:".",slug:"/Structure_operators_STRUCT",permalink:"/next/Structure_operators_STRUCT",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Structure_operators_STRUCT.md",tags:[],version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"Jun 9, 2021",frontMatter:{title:"Structure operators (STRUCT, [])"},sidebar:"learn",previous:{title:"String operators (+, CONCAT, SUBSTRING)",permalink:"/next/String_operators_+_CONCAT_SUBSTRING"},next:{title:"Type conversion",permalink:"/next/Type_conversion"}},i={},d=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The term ",(0,s.jsx)(t.em,{children:"structure"})," is used in the platform to refer to the ",(0,s.jsx)(t.a,{href:"/next/Classes",children:"classes"})," which objects consist of a collection of other objects in a fixed order. The platform supports two operators for working with structures:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Operator"}),(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Example"}),(0,s.jsx)(t.th,{children:"Result"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"STRUCT"})}),(0,s.jsx)(t.td,{children:"Creation"}),(0,s.jsxs)(t.td,{children:["Creates a ",(0,s.jsx)(t.a,{href:"/next/Properties",children:"property"})," that takes a list of operands and returns a structure consisting of the objects passed"]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"STRUCT('a', 1)"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"STRUCT('a', 1)"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"[ ]"})}),(0,s.jsx)(t.td,{children:"Access"}),(0,s.jsx)(t.td,{children:"Creates a property that takes an operand with a fixed integer and returns an object of the structure specified in the first operand with a number equal to the specified integer"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"STRUCT('a',1)[2]"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"1"})})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"Structures support comparison operations which are executed sequentially for each object included in the structure."}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"To better understand how this works, it\u2019s sufficient to say that physically a structure is just a concatenation of the objects included in this structure converted to bit strings"})}),"\n",(0,s.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,s.jsxs)(t.p,{children:["To create a property that creates a structure the ",(0,s.jsxs)(t.a,{href:"/next/STRUCT_operator",children:[(0,s.jsx)(t.code,{children:"STRUCT"})," operator"]})," is used."]}),"\n",(0,s.jsxs)(t.p,{children:["To create a property that returns an object from the structure the ",(0,s.jsxs)(t.a,{href:"/next/Brackets_operator",children:[(0,s.jsx)(t.code,{children:"[ ]"})," operator"]})," is used."]}),"\n",(0,s.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lsf",children:"objectStruct(a, b) = STRUCT(a, f(b));\r\nstringStruct() = STRUCT(1, 'two', 3.0);\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lsf",children:"CLASS Letter;\r\nattachment1 = DATA FILE (Letter);\r\nattachment2 = DATA FILE (Letter);\r\nletterAttachments (Letter l) = STRUCT(attachment1(l), attachment2(l));\r\nsecondAttachment(Letter l) = letterAttachments(l)[2]; // returns attachment2\n"})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>a});var s=r(96540);const n={},o=s.createContext(n);function c(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);