"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[66947],{46975:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var i=r(74848),s=r(28453);const t={title:"PRINT operator"},o=void 0,d={id:"PRINT_operator",title:"PRINT operator",description:"The PRINT operator creates an action that opens a form in print view.",source:"@site/versioned_docs/version-v5/PRINT_operator.md",sourceDirName:".",slug:"/PRINT_operator",permalink:"/PRINT_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/PRINT_operator.md",tags:[],version:"v5",lastUpdatedAt:170852507e4,frontMatter:{title:"PRINT operator"},sidebar:"learn",previous:{title:"NEWTHREAD operator",permalink:"/NEWTHREAD_operator"},next:{title:"READ operator",permalink:"/READ_operator"}},l={},c=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Additional options",id:"additional-options",level:4},{value:"Examples",id:"examples",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"PRINT"})," operator creates an ",(0,i.jsx)(n.a,{href:"/Actions",children:"action"})," that ",(0,i.jsx)(n.a,{href:"/In_a_print_view_PRINT",children:"opens a form"})," in print view."]}),"\n",(0,i.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"PRINT name \n[OBJECTS objName1 = expr1, ..., objNameN = exprN]\n[formActionOptions] \n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"formActionOptions"})," - additional options for this action. There are several possible option syntaxes in this operator:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"printFormat [SHEET sheetProperty] [PASSWORD passwordExpr] [TO propertyId]\n[PREVIEW | NOPREVIEW] [syncType] [TO printerExpr]\nMESSAGE [syncType] [TOP n]\n"})}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"PRINT"})," operator creates an action that prints the specified form. When printing a form in the ",(0,i.jsx)(n.code,{children:"OBJECTS"})," block you can add ",(0,i.jsx)(n.a,{href:"/Open_form#params",children:"additional filters"})," for form objects to check these objects for equality to the values passed."]}),"\n",(0,i.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"name"})}),"\n",(0,i.jsxs)(n.p,{children:["Form name. ",(0,i.jsx)(n.a,{href:"/IDs#cid",children:"Composite ID"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"objName1 ... objNameN"})}),"\n",(0,i.jsxs)(n.p,{children:["Names of form objects for which additional filters are specified. ",(0,i.jsx)(n.a,{href:"/IDs#id",children:"Simple IDs"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"expr1 ... exprN"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/Expression",children:"Expressions"})," whose values determine the filtered (fixed) values for form objects."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"additional-options",children:"Additional options"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"printFormat"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"/In_a_print_view_PRINT#format",children:"print format"})," is specified by one of these keywords:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"PDF"})," \u2013 the form will be exported to a PDF file."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"XLS"}),", ",(0,i.jsx)(n.code,{children:"XLSX"})," \u2013 the form will be exported to a file in one of the specified EXCEL formats."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"DOC"}),", ",(0,i.jsx)(n.code,{children:"DOCX"})," \u2013 the form will be exported to a file in one of the specified WORD formats."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"RTF"})," \u2013 the form will be exported to an RTF file."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"HTML"})," \u2013 the form will be exported to an HTML file."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"sheetProperty"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"/IDs#propertyid",children:"ID of the property"})," whose value is used as the name of the sheet in the exported file. The property must not have parameters. It is used for ",(0,i.jsx)(n.code,{children:"XLS"})," and ",(0,i.jsx)(n.code,{children:"XLSX"})," print formats."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"passwordExpr"})}),"\n",(0,i.jsxs)(n.p,{children:["An expression whose value determines the password that sets the read-only mode for the exported file. Used for ",(0,i.jsx)(n.code,{children:"XLS"})," and ",(0,i.jsx)(n.code,{children:"XLSX"})," print formats."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"propertyId"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/IDs#propertyid",children:"Property ID"})," to which the generated file will be written. The property must not have parameters. If a property is not specified, the generated file is sent to the client and opened by the operating system"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"PREVIEW"})}),"\n",(0,i.jsxs)(n.p,{children:["Keyword. If specified, the form is displayed in ",(0,i.jsx)(n.a,{href:"/In_a_print_view_PRINT#interactive",children:"preview"})," mode. This mode is used by default if no other modes/formats are specified."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"NOPREVIEW"})}),"\n",(0,i.jsx)(n.p,{children:"Keyword. If specified, the form is immediately (without preview) sent for printing."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"printerExpr"})}),"\n",(0,i.jsx)(n.p,{children:"An expression whose value determines the name of the printer to which the print job will be sent. If no printer with the specified name is found (or specified), the default printer is selected."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"MESSAGE"})}),"\n",(0,i.jsxs)(n.p,{children:["Keyword. If specified, the form displays data to the user in ",(0,i.jsx)(n.a,{href:"/In_a_print_view_PRINT#interactive",children:"message"})," mode."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"TOP n"})}),"\n",(0,i.jsxs)(n.p,{children:["Displays only the first ",(0,i.jsx)(n.code,{children:"n"})," entries. ",(0,i.jsx)(n.a,{href:"/Literals#intliteral",children:"Integer literal"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"syncType"})}),"\n",(0,i.jsx)(n.p,{children:"Determines when the created action should be continued:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"WAIT"})," - after the client completes the action (closes the preview/message form). Used by default."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"NOWAIT"})," - after preparation of the information for sending to the client (form data is read)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"FORM printOrder\n    OBJECTS o = Order\n    PROPERTIES(o) currency, customer\n\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) idSku, price\n    FILTERS order(d) == o\n;\n\nprint (Order o)  {\n    PRINT printOrder OBJECTS o = o; // printing\n\n    LOCAL file = FILE ();\n    PRINT printOrder OBJECTS o = o DOCX TO file;\n    open(file());\n\n    //v 2.0-2.1 syntax\n    LOCAL sheetName = STRING[255]();\n    sheetName() <- 'encrypted';\n    PRINT printOrder OBJECTS o = o XLS SHEET sheetName PASSWORD 'pass';\n\n    //v 2.2 syntax\n    //PRINT printOrder OBJECTS o = o XLS SHEET 'encrypted' PASSWORD 'pass';\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>d});var i=r(96540);const s={},t=i.createContext(s);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);