"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[56280],{59338:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(74848),o=n(28453);const r={title:"How-to: EXEC"},s=void 0,l={id:"How-to_EXEC",title:"How-to: EXEC",description:"Example 1",source:"@site/docs/How-to_EXEC.md",sourceDirName:".",slug:"/How-to_EXEC",permalink:"/next/How-to_EXEC",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/How-to_EXEC.md",tags:[],version:"current",lastUpdatedAt:1622042248,formattedLastUpdatedAt:"May 26, 2021",frontMatter:{title:"How-to: EXEC"},sidebar:"learn",previous:{title:"How-to: CHANGE",permalink:"/next/How-to_CHANGE"},next:{title:"How-to: NEW",permalink:"/next/How-to_NEW"}},i={},c=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"example-1",children:"Example 1"}),"\n",(0,a.jsx)(t.h3,{id:"task",children:"Task"}),"\n",(0,a.jsx)(t.p,{children:"We have a category of books for which a title, a numerical code, and a start date for sales are defined."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-lsf",children:"CLASS Category 'Category';\n\nname 'Name' = DATA ISTRING[50] (Category);\nid 'Code' = DATA INTEGER (Category);\nsaleDate 'Sales start date' = DATA DATE (Category);\n"})}),"\n",(0,a.jsx)(t.p,{children:"We need to create an action that creates 3 new predefined categories."}),"\n",(0,a.jsx)(t.h3,{id:"solution",children:"Solution"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-lsf",children:"createCategory 'Create category' (ISTRING[50] name, INTEGER id, DATE saleDate)  {\n    NEW c = Category {\n        name(c) <- name;\n        id(c) <- id;\n        saleDate(c) <- saleDate;\n    }\n}\n\ncreate3Categories 'Create 3 categories' ()  {\n    createCategory('Category 1', 1, 2010_02_14);\n    createCategory('Category 2', 2, 2011_03_08);\n    createCategory('Category 3', 3, 2014_07_01);\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"example-2",children:"Example 2"}),"\n",(0,a.jsx)(t.h3,{id:"task-1",children:"Task"}),"\n",(0,a.jsxs)(t.p,{children:["Similar to ",(0,a.jsx)(t.a,{href:"#example-1",children:(0,a.jsx)(t.strong,{children:"Example 1"})}),', except that each category has a "parent".']}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-lsf",children:"parent 'Parent' = DATA Category (Category); // if the value is NULL, then there is no parent\n"})}),"\n",(0,a.jsx)(t.p,{children:"We need to create an action that fills category depth for each category."}),"\n",(0,a.jsx)(t.h3,{id:"solution-1",children:"Solution"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-lsf",children:"depth = DATA INTEGER (Category);\nfillDepth (Category c, INTEGER depth)  {\n    FOR parent(Category i) == c DO {\n        depth(i) <- depth;\n        fillDepth(i, depth + 1);\n    }\n}\n\nrun()  {\n    fillDepth(NULL, 0);\n}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var a=n(96540);const o={},r=a.createContext(o);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);