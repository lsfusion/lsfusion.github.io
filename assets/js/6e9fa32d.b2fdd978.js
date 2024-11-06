"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[25755],{53161:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=i(74848),r=i(28453);const s={title:"Read file (READ)"},a=void 0,l={id:"Read_file_READ",title:"Read file (READ)",description:"The read file operator creates an action that reads a file from a defined source and writes this file to the specified local data property without parameters.",source:"@site/docs/Read_file_READ.md",sourceDirName:".",slug:"/Read_file_READ",permalink:"/Read_file_READ",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Read_file_READ.md",tags:[],version:"current",lastUpdatedAt:1623249583e3,frontMatter:{title:"Read file (READ)"},sidebar:"learn",previous:{title:"File operators",permalink:"/File_operators"},next:{title:"Write file (WRITE)",permalink:"/Write_file_WRITE"}},o={},d=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function c(e){const t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.em,{children:"read file"})," operator creates an ",(0,n.jsx)(t.a,{href:"/Actions",children:"action"})," that reads a file from a defined source and ",(0,n.jsx)(t.a,{href:"/Property_change_CHANGE",children:"writes"})," this file to the specified local ",(0,n.jsx)(t.a,{href:"/Data_properties_DATA",children:"data"})," property without parameters."]}),"\n",(0,n.jsxs)(t.p,{children:["The source is defined as a ",(0,n.jsx)(t.a,{href:"/Properties",children:"property"})," which values are instances of ",(0,n.jsx)(t.a,{href:"/Built-in_classes",children:"string classes"}),". The following types of data sources (URLs) are supported: FILE, HTTP, HTTPS, FTP, SFTP, JDBC, MDB."]}),"\n",(0,n.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,n.jsxs)(t.p,{children:["To declare an action that reads a file, use the ",(0,n.jsxs)(t.a,{href:"/READ_operator",children:[(0,n.jsx)(t.code,{children:"READ"})," operator"]}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lsf",children:"readFiles()  {\n\n    LOCAL importFile = FILE ();\n\n    //reading from FTP\n    READ 'ftp://ftp.lsfusion.org/file.xlsx' TO importFile;\n    //reading from SFTP\n    READ 'sftp://sftp.lsfusion.org/file.xlsx' TO importFile;\n    //reading from FILE\n    READ 'D://lsfusion/file.xlsx' TO importFile;\n    READ 'file://D://lsfusion/file.xlsx' TO importFile;\n}\n\nconnectionString = DATA STRING[100]();\nimportXls 'Import markups'()  {\n    LOCAL importFile = FILE ();\n    READ connectionString() + '@SELECT field1, field2 FROM myTable' TO importFile;\n\n    LOCAL field1 = INTEGER (INTEGER);\n    LOCAL field2 = BPSTRING[10] (INTEGER);\n    IMPORT TABLE FROM importFile() TO field1, field2;\n}\n"})})]})}function f(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>l});var n=i(96540);const r={},s=n.createContext(r);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);