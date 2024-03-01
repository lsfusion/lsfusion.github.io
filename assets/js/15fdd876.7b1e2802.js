"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[3160],{46791:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=t(74848),s=t(28453);const r={title:"Type conversion"},i=void 0,a={id:"Type_conversion",title:"Type conversion",description:"The type conversion operator creates a property that converts an object of one built-in class to an object of another built-in class. If type conversion is not possible, the property value will be NULL.",source:"@site/docs/Type_conversion.md",sourceDirName:".",slug:"/Type_conversion",permalink:"/next/Type_conversion",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Type_conversion.md",tags:[],version:"current",lastUpdatedAt:1622042248,formattedLastUpdatedAt:"May 26, 2021",frontMatter:{title:"Type conversion"},sidebar:"learn",previous:{title:"Structure operators (STRUCT, [])",permalink:"/next/Structure_operators_STRUCT"},next:{title:"Class operators",permalink:"/next/Class_operators"}},c={},l=[{value:"String and file types",id:"string-and-file-types",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.em,{children:"type conversion"})," operator creates a ",(0,o.jsx)(n.a,{href:"/next/Properties",children:"property"})," that converts an object of one ",(0,o.jsx)(n.a,{href:"/next/Built-in_classes",children:"built-in class"})," to an object of another built-in class. If type conversion is not possible, the property value will be ",(0,o.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"string-and-file-types",children:"String and file types"}),"\n",(0,o.jsxs)(n.p,{children:["String types can be converted to human-readable file types (",(0,o.jsx)(n.code,{children:"CSVFILE"}),", ",(0,o.jsx)(n.code,{children:"XMLFILE"}),", ",(0,o.jsx)(n.code,{children:"JSONFILE"}),", ",(0,o.jsx)(n.code,{children:"HTMLFILE"}),", etc.), and vice versa - human-readable file types can be converted to string types."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Converting dynamic-type files (",(0,o.jsx)(n.code,{children:"FILE"}),") to strings and vice versa is prohibited in the current implementation, but if necessary this can be done via an intermediate human-readable type - for example, by first converting to ",(0,o.jsx)(n.code,{children:"CSVFILE"}),", and only then to ",(0,o.jsx)(n.code,{children:"FILE"})," (the resulting file ",(0,o.jsx)(n.a,{href:"/next/Built-in_classes#extension",children:"will have the extension"})," CSV)"]})}),"\n",(0,o.jsx)(n.h3,{id:"language",children:"Language"}),"\n",(0,o.jsxs)(n.p,{children:["To implement conversion, the ",(0,o.jsx)(n.a,{href:"/next/Type_conversion_operator",children:"type conversion operator"})," is used."]}),"\n",(0,o.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"itemCount = DATA INTEGER (Store);\nitemCountToString(s) = BPSTRING[10](itemCount(s));\n\nbarcode = DATA STRING[15] (Item);\nlongBarcode(Item i) = LONG(barcode(i));\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(96540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);