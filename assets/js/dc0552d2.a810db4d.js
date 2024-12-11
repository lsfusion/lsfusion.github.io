"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[42114],{95371:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=o(74848),i=o(28453);const s={title:"How-to: Navigator"},a=void 0,l={id:"How-to_Navigator",title:"How-to: Navigator",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_Navigator.md",sourceDirName:".",slug:"/How-to_Navigator",permalink:"/v4/How-to_Navigator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/How-to_Navigator.md",tags:[],version:"v4",lastUpdatedAt:162039281e4,frontMatter:{title:"How-to: Navigator"},sidebar:"learn",previous:{title:"How-to: Data entry",permalink:"/v4/How-to_Data_entry"},next:{title:"How-to: Matrix",permalink:"/v4/How-to_Matrix"}},r={},c=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"example-1",children:"Example 1"}),"\n",(0,n.jsx)(t.h3,{id:"task",children:"Task"}),"\n",(0,n.jsx)(t.p,{children:"We have the forms with a list of books and categories."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lsf",children:"FORM categories 'Categories';\nFORM books 'Books';\n"})}),"\n",(0,n.jsxs)(t.p,{children:["We need to add them to the ",(0,n.jsx)(t.a,{href:"/v4/Navigator",children:"navigator"})," to the new folder called ",(0,n.jsx)(t.code,{children:"'Application'"})," under the main toolbar."]}),"\n",(0,n.jsx)(t.h3,{id:"solution",children:"Solution"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lsf",children:"NAVIGATOR {\n    NEW FOLDER application 'Application' WINDOW toolbar FIRST {\n        NEW categories;\n        NEW books;\n    }\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["By specifying ",(0,n.jsx)(t.code,{children:"WINDOW"})," for the ",(0,n.jsx)(t.code,{children:"application"})," element, we indicated that all its child objects must be displayed in the system ",(0,n.jsx)(t.a,{href:"/v4/Navigator_design",children:"window"})," called ",(0,n.jsx)(t.code,{children:"toolbar"}),". This will look like this:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:o(22206).A+"",width:"349",height:"153"})}),"\n",(0,n.jsx)(t.h2,{id:"example-2",children:"Example 2"}),"\n",(0,n.jsx)(t.h3,{id:"task-1",children:"Task"}),"\n",(0,n.jsxs)(t.p,{children:["Similar to ",(0,n.jsx)(t.a,{href:"#example-1",children:(0,n.jsx)(t.strong,{children:"Example 1"})}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["We need to place the same forms in the subfolder called ",(0,n.jsx)(t.code,{children:"'Directories'"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"solution-1",children:"Solution"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lsf",children:"NAVIGATOR {\n    application {\n        NEW FOLDER masterData 'Directories' {\n            NEW categories;\n            NEW books;\n        }\n    }\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:"Result:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:o(7957).A+"",width:"359",height:"172"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},22206:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/How-to_Navigator_ex1-797e24949c7c66e314aadb659ac67a53.png"},7957:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/How-to_Navigator_ex2-ebc897605aa992807064b983c87ab7a1.png"},28453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>l});var n=o(96540);const i={},s=n.createContext(i);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);