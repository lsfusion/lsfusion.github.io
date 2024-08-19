"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[61245],{18632:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=r(74848),s=r(28453);const i={title:"WRITE operator"},d=void 0,l={id:"WRITE_operator",title:"WRITE operator",description:"The WRITE operator creates an action that writes a file from a property to an external resource.",source:"@site/docs/WRITE_operator.md",sourceDirName:".",slug:"/WRITE_operator",permalink:"/WRITE_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/WRITE_operator.md",tags:[],version:"current",lastUpdatedAt:1723204351e3,frontMatter:{title:"WRITE operator"},sidebar:"learn",previous:{title:"WHILE operator",permalink:"/WHILE_operator"},next:{title:"Action options",permalink:"/Action_options"}},o={},c=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"WRITE"})," operator creates an ",(0,t.jsx)(n.a,{href:"/Actions",children:"action"})," that ",(0,t.jsx)(n.a,{href:"/Write_file_WRITE",children:"writes a file"})," from a property to an external resource."]}),"\n",(0,t.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"WRITE [CLIENT [DIALOG]] fileExpr TO urlExpr [APPEND]\n"})}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"WRITE"})," operator creates an action that writes a file from the property to an external resource located at the specified URL."]}),"\n",(0,t.jsx)(n.p,{children:"The following URL types are supported:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[file://]path_to_file\n[s]ftp://username:password[;charset]@host:port[/path_to_file][?passivemode=true|false]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["It is assumed that the file extension is not specified in the URL (that is, the period ",(0,t.jsx)(n.code,{children:"."})," is also considered a part of the file name). This extension is determined automatically based on the class of the file being written:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Extension"}),(0,t.jsx)(n.th,{children:"Class"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"read from the passed object"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"FILE"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"json"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"JSONFILE"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"xml"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"XMLFILE"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"csv"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"CSVFILE"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"xls or xlsx, depending on the file content"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"EXCELFILE"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"dbf"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"DBFFILE"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"table"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"TABLEFILE"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"html"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"HTMLFILE"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"doc or docx, depending on the file content"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"WORDFILE"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"jpg"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"IMAGEFILE"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"pdf"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"PDFFILE"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"mp4"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"VIDEOFILE"})})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Downloads"})," folder in the user folder is considered to be the current folder on the client side."]}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"CLIENT"})}),"\n",(0,t.jsx)(n.p,{children:"Keyword. If specified, the action will be executed on the client side. By default, the action is executed on the server."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"DIALOG"})}),"\n",(0,t.jsx)(n.p,{children:"Keyword. If specified, before writing the file a dialog will be shown in which the user can change the specified URL. This can be used only when writing to the disk (the URL type is file). By default, the dialog is not shown."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"ulrExpr"})}),"\n",(0,t.jsxs)(n.p,{children:["An ",(0,t.jsx)(n.a,{href:"/Expression",children:"expression"})," whose value equals to the URL."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"fileExpr"})}),"\n",(0,t.jsxs)(n.p,{children:["An ",(0,t.jsx)(n.a,{href:"/Expression",children:"expression"})," whose value equals to the file that will be written to an external resource."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"APPEND"})}),"\n",(0,t.jsxs)(n.p,{children:["Keyword. If specified, the file is re-read from ",(0,t.jsx)(n.code,{children:"fileExpr"})," and appended to the file at ",(0,t.jsx)(n.code,{children:"urlExpr"}),". For the ",(0,t.jsx)(n.strong,{children:"csv"})," extension, data is added to the end of the file. For ",(0,t.jsx)(n.strong,{children:"xls"})," and ",(0,t.jsx)(n.strong,{children:"xlsx"}),", all sheets from the ",(0,t.jsx)(n.code,{children:"fileExpr"})," file are copied to the file at the specified location ",(0,t.jsx)(n.code,{children:"urlExpr"}),". Not supported for other extensions. By default, the file is rewritten."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"loadAndWrite ()  {\n    INPUT f = FILE DO {\n        WRITE f TO 'file:///home/user/loadedfile.csv' APPEND;\n        WRITE CLIENT f TO '/home/user/loadedfile.txt';\n        WRITE CLIENT DIALOG f TO 'loadedfile';\n    }\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>l});var t=r(96540);const s={},i=t.createContext(s);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);