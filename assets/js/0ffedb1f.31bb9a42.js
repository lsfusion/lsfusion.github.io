"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[28233],{25593:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=t(74848),a=t(28453);const r={title:"How-to: Trees"},s=void 0,l={id:"How-to_Trees",title:"How-to: Trees",description:"Example 1",source:"@site/versioned_docs/version-v5/How-to_Trees.md",sourceDirName:".",slug:"/How-to_Trees",permalink:"/How-to_Trees",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/How-to_Trees.md",tags:[],version:"v5",lastUpdatedAt:1685108136,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{title:"How-to: Trees"},sidebar:"learn",previous:{title:"How-to: Design",permalink:"/How-to_Design"},next:{title:"How-to: Data entry",permalink:"/How-to_Data_entry"}},i={},c=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3},{value:"Example 3",id:"example-3",level:2},{value:"Task",id:"task-2",level:3},{value:"Solution",id:"solution-2",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,o.jsx)(n.h3,{id:"task",children:"Task"}),"\n",(0,o.jsx)(n.p,{children:"We have a set of books associated with certain categories."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"CLASS Category 'Category';\nname 'Name' = DATA ISTRING[50] (Category);\n\nCLASS Book 'Book';\nname 'Name' = DATA ISTRING[50] (Book);\ncategory 'Category' = DATA Category (Book);\n"})}),"\n",(0,o.jsx)(n.p,{children:"We need to build a form with a tree, where the category is shown above and the product is shown below."}),"\n",(0,o.jsx)(n.h3,{id:"solution",children:"Solution"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"FORM books 'Books'\n    TREE cb c = Category, b = Book\n    PROPERTIES name(c), name(b)\n    FILTERS category(b) == c\n;\n"})}),"\n",(0,o.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,o.jsx)(n.h3,{id:"task-1",children:"Task"}),"\n",(0,o.jsxs)(n.p,{children:["Similar to ",(0,o.jsx)(n.a,{href:"#example-1",children:(0,o.jsx)(n.strong,{children:"Example 1"})}),", except that each category has a parent in the hierarchy."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"parent 'Parent' = DATA Category (Category);\n"})}),"\n",(0,o.jsx)(n.p,{children:"We need to build a form with a tree, where the categories will be displayed as hierarchy."}),"\n",(0,o.jsx)(n.h3,{id:"solution-1",children:"Solution"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"FORM categories 'Categories'\n    TREE categories c = Category PARENT parent(c)\n    PROPERTIES(c) name\n;\n"})}),"\n",(0,o.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,o.jsx)(n.h3,{id:"task-2",children:"Task"}),"\n",(0,o.jsxs)(n.p,{children:["Similar to ",(0,o.jsx)(n.a,{href:"#example-2",children:(0,o.jsx)(n.strong,{children:"Example 2"})}),"."]}),"\n",(0,o.jsx)(n.p,{children:"We need to create a form with a category tree, so that the books that belong to the current category and all its subcategories are shown to the right."}),"\n",(0,o.jsx)(n.h3,{id:"solution-2",children:"Solution"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"level 'Level' (Category child, Category parent) = RECURSION 1l IF child IS Category AND parent == child\n                                                                 STEP 2l IF parent == parent($parent) MATERIALIZED;\n\nFORM categoryBooks 'Books by category'\n    TREE categories c = Category PARENT parent(c)\n    PROPERTIES(c) name\n\n    OBJECTS b = Book\n    PROPERTIES(b) name\n    FILTERS level(category(b), c)\n;\n\nDESIGN categoryBooks {\n    NEW pane FIRST {\n        fill = 1;\n        type = SPLITH;\n        MOVE BOX(TREE categories);\n        MOVE BOX(b);\n    }\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var o=t(96540);const a={},r=o.createContext(a);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);