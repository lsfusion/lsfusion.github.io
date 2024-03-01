"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[28828],{78425:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(74848),s=n(28453);const o={title:"EXTEND FORM statement"},i=void 0,a={id:"EXTEND_FORM_statement",title:"EXTEND FORM statement",description:"The EXTEND FORM statement extends an existing form.",source:"@site/versioned_docs/version-v4/EXTEND_FORM_statement.md",sourceDirName:".",slug:"/EXTEND_FORM_statement",permalink:"/v4/EXTEND_FORM_statement",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/EXTEND_FORM_statement.md",tags:[],version:"v4",lastUpdatedAt:1708525070,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"EXTEND FORM statement"},sidebar:"learn",previous:{title:"EXTEND CLASS statement",permalink:"/v4/EXTEND_CLASS_statement"},next:{title:"+= statement",permalink:"/v4/+=_statement"}},d={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Example",id:"example",level:3}];function c(e){const t={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"EXTEND FORM"})," statement ",(0,r.jsx)(t.a,{href:"/v4/Form_extension",children:"extends"})," an existing ",(0,r.jsx)(t.a,{href:"/v4/Forms",children:"form"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"EXTEND FORM formName \r\n    formBlock1\r\n    ...\r\n    formBlockN\r\n;\n"})}),"\n",(0,r.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"EXTEND FORM"})," statement allows you to extend an existing form with additional ",(0,r.jsx)(t.a,{href:"/v4/FORM_statement#blocks",children:"form blocks"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"formName"})}),"\n",(0,r.jsxs)(t.p,{children:["The name of the form being extended. ",(0,r.jsx)(t.a,{href:"/v4/IDs#cid",children:"Composite ID"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"formBlock1 ... formBlockN"})}),"\n",(0,r.jsx)(t.p,{children:"Form blocks."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lsf",children:"CLASS ItemGroup;\r\nname = DATA ISTRING[100] (ItemGroup);\r\n\r\nitemGroup = DATA ItemGroup (Item);\r\n\r\nEXTEND FORM items\r\n    PROPERTIES(i) NEWSESSION DELETE // adding a delete button to the form\r\n\r\n    OBJECTS g = ItemGroup BEFORE i // adding a product group object to the form before the product\r\n    PROPERTIES(g) READONLY name\r\n    // if the object was added after the object with products, then filtering would go by the group of products, \r\n    // and not by products\r\n    FILTERS itemGroup(i) == g \r\n;\n"})})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(96540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);