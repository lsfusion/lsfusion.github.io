"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[82575],{39435:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=n(74848),r=n(28453);const o={title:"EXTEND FORM statement"},i=void 0,a={id:"EXTEND_FORM_statement",title:"EXTEND FORM statement",description:"The EXTEND FORM statement extends an existing form.",source:"@site/docs/EXTEND_FORM_statement.md",sourceDirName:".",slug:"/EXTEND_FORM_statement",permalink:"/next/EXTEND_FORM_statement",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/EXTEND_FORM_statement.md",tags:[],version:"current",lastUpdatedAt:170852507e4,frontMatter:{title:"EXTEND FORM statement"},sidebar:"learn",previous:{title:"EXTEND CLASS statement",permalink:"/next/EXTEND_CLASS_statement"},next:{title:"+= statement",permalink:"/next/+=_statement"}},l={},c=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Example",id:"example",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"EXTEND FORM"})," statement ",(0,s.jsx)(t.a,{href:"/next/Form_extension",children:"extends"})," an existing ",(0,s.jsx)(t.a,{href:"/next/Forms",children:"form"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"EXTEND FORM formName \n    formBlock1\n    ...\n    formBlockN\n;\n"})}),"\n",(0,s.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"EXTEND FORM"})," statement allows you to extend an existing form with additional ",(0,s.jsx)(t.a,{href:"/next/FORM_statement#blocks",children:"form blocks"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"formName"})}),"\n",(0,s.jsxs)(t.p,{children:["The name of the form being extended. ",(0,s.jsx)(t.a,{href:"/next/IDs#cid",children:"Composite ID"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"formBlock1 ... formBlockN"})}),"\n",(0,s.jsx)(t.p,{children:"Form blocks."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lsf",children:"CLASS ItemGroup;\nname = DATA ISTRING[100] (ItemGroup);\n\nitemGroup = DATA ItemGroup (Item);\n\nEXTEND FORM items\n    PROPERTIES(i) NEWSESSION DELETE // adding a delete button to the form\n\n    OBJECTS g = ItemGroup BEFORE i // adding a product group object to the form before the product\n    PROPERTIES(g) READONLY name\n    // if the object was added after the object with products, then filtering would go by the group of products, \n    // and not by products\n    FILTERS itemGroup(i) == g \n;\n"})})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var s=n(96540);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);