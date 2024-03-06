"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[27188],{33347:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=o(74848),r=o(28453);const a={title:"How-to: IF/CASE"},s=void 0,i={id:"How-to_IF_CASE",title:"How-to: IF/CASE",description:"Example 1",source:"@site/docs/How-to_IF_CASE.md",sourceDirName:".",slug:"/How-to_IF_CASE",permalink:"/next/How-to_IF_CASE",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/How-to_IF_CASE.md",tags:[],version:"current",lastUpdatedAt:1622042248,formattedLastUpdatedAt:"May 26, 2021",frontMatter:{title:"How-to: IF/CASE"},sidebar:"learn",previous:{title:"How-to: FOR",permalink:"/next/How-to_FOR"},next:{title:"How-to: WHILE",permalink:"/next/How-to_WHILE"}},l={},c=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"example-1",children:"Example 1"}),"\n",(0,n.jsx)(t.h3,{id:"task",children:"Task"}),"\n",(0,n.jsx)(t.p,{children:"We have a list of books associated with certain categories. Each book is assigned a price."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lsf",children:"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[50] (Book);\n\nCLASS Category 'Category' {\n    novel 'Novel',\n    thriller 'Thriller',\n    fiction 'Fiction'\n}\n\ncategory 'Category' = DATA Category (Book);\nprice 'Price' = DATA NUMERIC[14,2] (Book);\n"})}),"\n",(0,n.jsx)(t.p,{children:"We need to create an action that sets a given price for books associated with the specific category and a fixed price for all other books. When no category is selected, the error message must appear."}),"\n",(0,n.jsx)(t.h3,{id:"solution",children:"Solution"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lsf",children:"setPriceIf 'Set price' (Book b)  {\n    IF NOT category(b) THEN\n        MESSAGE 'No category selected for the book';\n    ELSE\n        IF category(b) == Category.novel THEN\n            price(b) <- 50.0;\n        ELSE\n            price(b) <- 100.0;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"example-2",children:"Example 2"}),"\n",(0,n.jsx)(t.h3,{id:"task-1",children:"Task"}),"\n",(0,n.jsxs)(t.p,{children:["Similar to ",(0,n.jsx)(t.a,{href:"#example-1",children:(0,n.jsx)(t.strong,{children:"Example 1"})}),"."]}),"\n",(0,n.jsx)(t.p,{children:"We need to create an action that sets pre-defined prices for books associated with any of the three categories and sets zero price for all other books."}),"\n",(0,n.jsx)(t.h3,{id:"solution-1",children:"Solution"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lsf",children:"setPriceCase 'Set price' (Book b)  {\n    CASE\n        WHEN category(b) == Category.novel THEN\n            price(b) <- 50.0;\n        WHEN category(b) == Category.thriller THEN\n            price(b) <- 100.0;\n        WHEN category(b) == Category.fiction THEN\n            price(b) <- 150.0;\n    ELSE\n        price(b) <- 0.0;\n}\n"})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>i});var n=o(96540);const r={},a=n.createContext(r);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);