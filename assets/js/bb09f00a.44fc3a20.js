"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["18963"],{88585:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>o,assets:()=>r,toc:()=>c,contentTitle:()=>l});var o=JSON.parse('{"id":"How-to_Navigator","title":"How-to: Navigator","description":"Example 1","source":"@site/docs/How-to_Navigator.md","sourceDirName":".","slug":"/How-to_Navigator","permalink":"/How-to_Navigator","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/master/docs/en/How-to_Navigator.md","tags":[],"version":"current","lastUpdatedAt":1622042248000,"frontMatter":{"title":"How-to: Navigator"},"sidebar":"learn","previous":{"title":"How-to: Data entry","permalink":"/How-to_Data_entry"},"next":{"title":"How-to: Matrix","permalink":"/How-to_Matrix"}}'),i=n("85893"),a=n("50065");let s={title:"How-to: Navigator"},l=void 0,r={},c=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3}];function d(e){let t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"example-1",children:"Example 1"}),"\n",(0,i.jsx)(t.h3,{id:"task",children:"Task"}),"\n",(0,i.jsx)(t.p,{children:"We have the forms with a list of books and categories."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-lsf",children:"FORM categories 'Categories';\nFORM books 'Books';\n"})}),"\n",(0,i.jsxs)(t.p,{children:["We need to add them to the ",(0,i.jsx)(t.a,{href:"/Navigator",children:"navigator"})," to the new folder called ",(0,i.jsx)(t.code,{children:"'Application'"})," under the main toolbar."]}),"\n",(0,i.jsx)(t.h3,{id:"solution",children:"Solution"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-lsf",children:"NAVIGATOR {\n    NEW FOLDER application 'Application' WINDOW toolbar FIRST {\n        NEW categories;\n        NEW books;\n    }\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["By specifying ",(0,i.jsx)(t.code,{children:"WINDOW"})," for the ",(0,i.jsx)(t.code,{children:"application"})," element, we indicated that all its child objects must be displayed in the system ",(0,i.jsx)(t.a,{href:"/Navigator_design",children:"window"})," called ",(0,i.jsx)(t.code,{children:"toolbar"}),". This will look like this:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(72117).Z+"",width:"349",height:"153"})}),"\n",(0,i.jsx)(t.h2,{id:"example-2",children:"Example 2"}),"\n",(0,i.jsx)(t.h3,{id:"task-1",children:"Task"}),"\n",(0,i.jsxs)(t.p,{children:["Similar to ",(0,i.jsx)(t.a,{href:"#example-1",children:(0,i.jsx)(t.strong,{children:"Example 1"})}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["We need to place the same forms in the subfolder called ",(0,i.jsx)(t.code,{children:"'Directories'"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"solution-1",children:"Solution"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-lsf",children:"NAVIGATOR {\n    application {\n        NEW FOLDER masterData 'Directories' {\n            NEW categories;\n            NEW books;\n        }\n    }\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:"Result:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(33003).Z+"",width:"359",height:"172"})})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},72117:function(e,t,n){n.d(t,{Z:function(){return o}});let o=n.p+"assets/images/How-to_Navigator_ex1-797e24949c7c66e314aadb659ac67a53.png"},33003:function(e,t,n){n.d(t,{Z:function(){return o}});let o=n.p+"assets/images/How-to_Navigator_ex2-ebc897605aa992807064b983c87ab7a1.png"},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return s}});var o=n(67294);let i={},a=o.createContext(i);function s(e){let t=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);