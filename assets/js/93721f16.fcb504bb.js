"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[57728],{95546:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(74848),s=n(28453);const i={title:"Write file (WRITE)"},o=void 0,a={id:"Write_file_WRITE",title:"Write file (WRITE)",description:"The write file operator creates an action which reads a file from the value of some property and saves it to the defined source.",source:"@site/docs/Write_file_WRITE.md",sourceDirName:".",slug:"/Write_file_WRITE",permalink:"/next/Write_file_WRITE",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Write_file_WRITE.md",tags:[],version:"current",lastUpdatedAt:1623249583e3,frontMatter:{title:"Write file (WRITE)"},sidebar:"learn",previous:{title:"Read file (READ)",permalink:"/next/Read_file_READ"},next:{title:"Data import (IMPORT)",permalink:"/next/Data_import_IMPORT"}},l={},c=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.em,{children:"write file"})," operator creates an ",(0,r.jsx)(t.a,{href:"/next/Actions",children:"action"})," which reads a file from the value of some property and saves it to the defined source."]}),"\n",(0,r.jsxs)(t.p,{children:["The source is set as a ",(0,r.jsx)(t.a,{href:"/next/Properties",children:"property"})," whose values are instances of ",(0,r.jsx)(t.a,{href:"/next/Built-in_classes",children:"string classes"}),". The following types of data sources (URLs) are supported: ",(0,r.jsx)(t.strong,{children:"FILE"}),", ",(0,r.jsx)(t.strong,{children:"FTP"}),", ",(0,r.jsx)(t.strong,{children:"SFTP"})]}),"\n",(0,r.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,r.jsxs)(t.p,{children:["To declare an action that writes a file, use the ",(0,r.jsxs)(t.a,{href:"/next/WRITE_operator",children:[(0,r.jsx)(t.code,{children:"WRITE"})," operator"]}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lsf",children:"loadAndWrite ()  {\n    INPUT f = FILE DO {\n        WRITE f TO 'file:///home/user/loadedfile.csv' APPEND;\n        WRITE CLIENT f TO '/home/user/loadedfile.txt';\n        WRITE CLIENT DIALOG f TO 'loadedfile';\n    }\n}\n"})})]})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(96540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);