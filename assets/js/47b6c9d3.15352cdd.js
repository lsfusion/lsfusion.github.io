"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["93119"],{1902:function(e,t,i){i.r(t),i.d(t,{default:()=>c,frontMatter:()=>a,metadata:()=>n,assets:()=>o,toc:()=>d,contentTitle:()=>l});var n=JSON.parse('{"id":"Read_file_READ","title":"Read file (READ)","description":"The read file operator creates an action that reads a file from a defined source and writes this file to the specified local data property without parameters.","source":"@site/versioned_docs/version-v4/Read_file_READ.md","sourceDirName":".","slug":"/Read_file_READ","permalink":"/v4/Read_file_READ","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v4/docs/en/Read_file_READ.md","tags":[],"version":"v4","lastUpdatedAt":1623249583000,"frontMatter":{"title":"Read file (READ)"},"sidebar":"learn","previous":{"title":"File operators","permalink":"/v4/File_operators"},"next":{"title":"Write file (WRITE)","permalink":"/v4/Write_file_WRITE"}}'),r=i("85893"),s=i("50065");let a={title:"Read file (READ)"},l=void 0,o={},d=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function f(e){let t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.em,{children:"read file"})," operator creates an ",(0,r.jsx)(t.a,{href:"/v4/Actions",children:"action"})," that reads a file from a defined source and ",(0,r.jsx)(t.a,{href:"/v4/Property_change_CHANGE",children:"writes"})," this file to the specified local ",(0,r.jsx)(t.a,{href:"/v4/Data_properties_DATA",children:"data"})," property without parameters."]}),"\n",(0,r.jsxs)(t.p,{children:["The source is defined as a ",(0,r.jsx)(t.a,{href:"/v4/Properties",children:"property"})," which values are instances of ",(0,r.jsx)(t.a,{href:"/v4/Built-in_classes",children:"string classes"}),". The following types of data sources (URLs) are supported: FILE, HTTP, HTTPS, FTP, SFTP, JDBC, MDB."]}),"\n",(0,r.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,r.jsxs)(t.p,{children:["To declare an action that reads a file, use the ",(0,r.jsxs)(t.a,{href:"/v4/READ_operator",children:[(0,r.jsx)(t.code,{children:"READ"})," operator"]}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lsf",children:"readFiles()  {\n\n    LOCAL importFile = FILE ();\n\n    //reading from FTP\n    READ 'ftp://ftp.lsfusion.org/file.xlsx' TO importFile;\n    //reading from SFTP\n    READ 'sftp://sftp.lsfusion.org/file.xlsx' TO importFile;\n    //reading from FILE\n    READ 'D://lsfusion/file.xlsx' TO importFile;\n    READ 'file://D://lsfusion/file.xlsx' TO importFile;\n}\n\nconnectionString = DATA STRING[100]();\nimportXls 'Import markups'()  {\n    LOCAL importFile = FILE ();\n    READ connectionString() + '@SELECT field1, field2 FROM myTable' TO importFile;\n\n    LOCAL field1 = INTEGER (INTEGER);\n    LOCAL field2 = BPSTRING[10] (INTEGER);\n    IMPORT TABLE FROM importFile() TO field1, field2;\n}\n"})})]})}function c(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return l},a:function(){return a}});var n=i(67294);let r={},s=n.createContext(r);function a(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);