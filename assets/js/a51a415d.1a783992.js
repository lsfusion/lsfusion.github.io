"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[42061],{22076:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=s(74848),n=s(28453);const o={title:"View (VIEW)"},i=void 0,a={id:"View_VIEW",title:"View (VIEW)",description:"The view operator creates a property that returns TRUE if the object collection is visible to the user in the specified object group, and NULL otherwise.",source:"@site/versioned_docs/version-v5/View_VIEW.md",sourceDirName:".",slug:"/View_VIEW",permalink:"/View_VIEW",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/View_VIEW.md",tags:[],version:"v5",lastUpdatedAt:1685108136,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{title:"View (VIEW)"},sidebar:"learn",previous:{title:"Order (ORDER)",permalink:"/Order_ORDER"},next:{title:"Focus operators",permalink:"/Focus_operators"}},c={},d=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function l(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The view operator creates a property that returns ",(0,r.jsx)(t.code,{children:"TRUE"})," if the object collection is visible to the user in the specified object group, and ",(0,r.jsx)(t.code,{children:"NULL"})," otherwise."]}),"\n",(0,r.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,r.jsxs)(t.p,{children:["To declare a property that determines whether a specified object collection is displayed to the user or not, use the ",(0,r.jsxs)(t.a,{href:"/Object_group_operator",children:[(0,r.jsx)(t.code,{children:"VIEW"})," operator"]}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lsf",children:"CLASS Store;\nname = DATA STRING[100] (Store);\n\nFORM stores\n    OBJECTS s = Store\n;\ncountF 'Number of filtered warehouses' = GROUP SUM 1 IF [ VIEW stores.s](Store s);\norderF 'Order in an object group' (Store s) = PARTITION SUM 1 IF [ FILTER stores.s](s) ORDER [ ORDER stores.s](s), s;\nsetNameX 'Add X to name'()  {\n    LOCAL k = INTEGER ();\n    k() <- 0;\n    FOR [ FILTER stores.s](Store s) ORDER [ ORDER stores.s](s) DO {\n        k() <- k() + 1;\n        name(s) <- 'X' + k() + name(s);\n    }\n}\n"})})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>a});var r=s(96540);const n={},o=r.createContext(n);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);