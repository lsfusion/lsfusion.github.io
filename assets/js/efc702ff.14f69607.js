"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[61610],{21507:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=r(74848),o=r(28453);const s={title:"Type conversion operator"},i=void 0,a={id:"Type_conversion_operator",title:"Type conversion operator",description:"The type conversion operator creates a property that performs type conversion.",source:"@site/versioned_docs/version-v4/Type_conversion_operator.md",sourceDirName:".",slug:"/Type_conversion_operator",permalink:"/v4/Type_conversion_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Type_conversion_operator.md",tags:[],version:"v4",lastUpdatedAt:170852507e4,frontMatter:{title:"Type conversion operator"},sidebar:"learn",previous:{title:"Object group operator",permalink:"/v4/Object_group_operator"},next:{title:"AND, OR, NOT, XOR operators",permalink:"/v4/AND_OR_NOT_XOR_operators"}},c={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function p(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The type conversion operator creates a ",(0,t.jsx)(n.a,{href:"/v4/Properties",children:"property"})," that performs ",(0,t.jsx)(n.a,{href:"/v4/Type_conversion",children:"type conversion"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"typeName(expression) \n"})}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The operator creates a property that converts the value of a certain expression into a value of a specified ",(0,t.jsx)(n.a,{href:"/v4/Built-in_classes",children:"built-in class"}),". If conversion is impossible, the value of the property will be ",(0,t.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"typeName"})}),"\n",(0,t.jsxs)(n.p,{children:["The name of the ",(0,t.jsx)(n.a,{href:"/v4/Built-in_classes",children:"built-in class"})," that the values will be converted into."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"expression"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"/v4/Expression",children:"expression"})," whose value will be converted into the value of the specified built-in class."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"itemCount = DATA INTEGER (Store);\nitemCountToString(s) = BPSTRING[10](itemCount(s));\n\nbarcode = DATA STRING[15] (Item);\nlongBarcode(Item i) = LONG(barcode(i));\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var t=r(96540);const o={},s=t.createContext(o);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);