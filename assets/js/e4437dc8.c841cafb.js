"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[3539],{64893:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=t(74848),s=t(28453);const a={title:"How-to: GROUP CONCAT"},r=void 0,i={id:"How-to_GROUP_CONCAT",title:"How-to: GROUP CONCAT",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_GROUP_CONCAT.md",sourceDirName:".",slug:"/How-to_GROUP_CONCAT",permalink:"/v4/How-to_GROUP_CONCAT",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/How-to_GROUP_CONCAT.md",tags:[],version:"v4",lastUpdatedAt:1619709222,formattedLastUpdatedAt:"Apr 29, 2021",frontMatter:{title:"How-to: GROUP CONCAT"},sidebar:"learn",previous:{title:"How-to: GROUP LAST",permalink:"/v4/How-to_GROUP_LAST"},next:{title:"How-to: PARTITION",permalink:"/v4/How-to_PARTITION"}},l={},c=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3}];function d(e){const o={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h2,{id:"example-1",children:"Example 1"}),"\n",(0,n.jsx)(o.h3,{id:"task",children:"Task"}),"\n",(0,n.jsx)(o.p,{children:"We have a set of books associated with certain priority tags."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-lsf",children:"CLASS Book 'Book';\r\nCLASS Tag 'Tag';\r\nname 'Name' = DATA ISTRING[10] (Tag);\r\n\r\nin 'On' = DATA BOOLEAN (Tag, Book);\n"})}),"\n",(0,n.jsx)(o.p,{children:"We need to retrieve a list of book tags separated by commas in alphabetical order."}),"\n",(0,n.jsx)(o.h3,{id:"solution",children:"Solution"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-lsf",children:"tags 'Tags' (Book b) = GROUP CONCAT name(Tag t) IF in(t, b), ',' ORDER name(t), t CHARWIDTH 10;\n"})}),"\n",(0,n.jsxs)(o.p,{children:["It is recommended that you specify the sizes of all the properties created using ",(0,n.jsx)(o.code,{children:"GROUP CONCAT"}),' that will be visible on a form. By default, the system implements the "pessimistic" scenario and reserves a lot of space for such properties.']}),"\n",(0,n.jsx)(o.h2,{id:"example-2",children:"Example 2"}),"\n",(0,n.jsx)(o.h3,{id:"task-1",children:"Task"}),"\n",(0,n.jsx)(o.p,{children:"We have a set of books associated with certain categories and authors."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-lsf",children:"CLASS Category 'Category';\r\n\r\nCLASS Author 'Author';\r\nname 'Author' = DATA ISTRING[20] (Author);\r\n\r\ncategory 'Category' = DATA Category (Book);\r\nauthor 'Author' = DATA Author (Book);\n"})}),"\n",(0,n.jsx)(o.p,{children:"We need to retrieve a list of all authors by category separated by commas in descending order of the number of books."}),"\n",(0,n.jsx)(o.h3,{id:"solution-1",children:"Solution"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-lsf",children:"countBooks 'Number of books' (Author a, Category c) = GROUP SUM 1 BY author(Book b), category(b);\r\n\r\nauthors 'Authors' (Category c) = GROUP CONCAT name(Author a) IF countBooks(a, c) ORDER DESC countBooks(a, c), a;\n"})})]})}function u(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>r,x:()=>i});var n=t(96540);const s={},a=n.createContext(s);function r(e){const o=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(a.Provider,{value:o},e.children)}}}]);