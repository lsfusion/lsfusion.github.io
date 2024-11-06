"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[66168],{43379:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=t(74848),r=t(28453);const s={title:"How-to: IF/CASE"},i=void 0,a={id:"How-to_IF_CASE",title:"How-to: IF/CASE",description:"Example 1",source:"@site/versioned_docs/version-v5/How-to_IF_CASE.md",sourceDirName:".",slug:"/How-to_IF_CASE",permalink:"/v5/How-to_IF_CASE",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/How-to_IF_CASE.md",tags:[],version:"v5",lastUpdatedAt:1685108136e3,frontMatter:{title:"How-to: IF/CASE"},sidebar:"learn",previous:{title:"How-to: FOR",permalink:"/v5/How-to_FOR"},next:{title:"How-to: WHILE",permalink:"/v5/How-to_WHILE"}},l={},c=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3}];function d(e){const o={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h2,{id:"example-1",children:"Example 1"}),"\n",(0,n.jsx)(o.h3,{id:"task",children:"Task"}),"\n",(0,n.jsx)(o.p,{children:"We have a list of books associated with certain categories. Each book is assigned a price."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-lsf",children:"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[50] (Book);\n\nCLASS Category 'Category' {\n    novel 'Novel',\n    thriller 'Thriller',\n    fiction 'Fiction'\n}\n\ncategory 'Category' = DATA Category (Book);\nprice 'Price' = DATA NUMERIC[14,2] (Book);\n"})}),"\n",(0,n.jsx)(o.p,{children:"We need to create an action that sets a given price for books associated with the specific category and a fixed price for all other books. When no category is selected, the error message must appear."}),"\n",(0,n.jsx)(o.h3,{id:"solution",children:"Solution"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-lsf",children:"setPriceIf 'Set price' (Book b)  {\n    IF NOT category(b) THEN\n        MESSAGE 'No category selected for the book';\n    ELSE\n        IF category(b) == Category.novel THEN\n            price(b) <- 50.0;\n        ELSE\n            price(b) <- 100.0;\n}\n"})}),"\n",(0,n.jsx)(o.h2,{id:"example-2",children:"Example 2"}),"\n",(0,n.jsx)(o.h3,{id:"task-1",children:"Task"}),"\n",(0,n.jsxs)(o.p,{children:["Similar to ",(0,n.jsx)(o.a,{href:"#example-1",children:(0,n.jsx)(o.strong,{children:"Example 1"})}),"."]}),"\n",(0,n.jsx)(o.p,{children:"We need to create an action that sets pre-defined prices for books associated with any of the three categories and sets zero price for all other books."}),"\n",(0,n.jsx)(o.h3,{id:"solution-1",children:"Solution"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-lsf",children:"setPriceCase 'Set price' (Book b)  {\n    CASE\n        WHEN category(b) == Category.novel THEN\n            price(b) <- 50.0;\n        WHEN category(b) == Category.thriller THEN\n            price(b) <- 100.0;\n        WHEN category(b) == Category.fiction THEN\n            price(b) <- 150.0;\n    ELSE\n        price(b) <- 0.0;\n}\n"})})]})}function p(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>i,x:()=>a});var n=t(96540);const r={},s=n.createContext(r);function i(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);