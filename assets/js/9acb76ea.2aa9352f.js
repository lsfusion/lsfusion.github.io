"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["81053"],{44345:function(e,n,t){t.r(n),t.d(n,{default:()=>c,frontMatter:()=>s,metadata:()=>i,assets:()=>l,toc:()=>h,contentTitle:()=>a});var i=JSON.parse('{"id":"In_a_print_view_PRINT","title":"In a print view (PRINT)","description":"This operator creates an action that opens a form in the print view.","source":"@site/versioned_docs/version-v5/In_a_print_view_PRINT.md","sourceDirName":".","slug":"/In_a_print_view_PRINT","permalink":"/v5/In_a_print_view_PRINT","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v5/docs/en/In_a_print_view_PRINT.md","tags":[],"version":"v5","lastUpdatedAt":1685108136000,"frontMatter":{"title":"In a print view (PRINT)"},"sidebar":"learn","previous":{"title":"In an interactive view (SHOW, DIALOG)","permalink":"/v5/In_an_interactive_view_SHOW_DIALOG"},"next":{"title":"In a structured view (EXPORT, IMPORT)","permalink":"/v5/In_a_structured_view_EXPORT_IMPORT"}}'),r=t("85893"),o=t("50065");let s={title:"In a print view (PRINT)"},a=void 0,l={},h=[{value:"Format",id:"format",level:3},{value:"Interactive print view",id:"interactive",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function d(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["This operator creates an action that ",(0,r.jsx)(n.a,{href:"/v5/Open_form",children:"opens a form"})," in the ",(0,r.jsx)(n.a,{href:"/v5/Print_view",children:"print"})," view."]}),"\n",(0,r.jsx)(n.h3,{id:"format",children:"Format"}),"\n",(0,r.jsxs)(n.p,{children:["In this operator, you can specify the format that form data will be converted to before being shown to the user:  ",(0,r.jsx)(n.strong,{children:"DOC"}),", ",(0,r.jsx)(n.strong,{children:"DOCX"}),", ",(0,r.jsx)(n.strong,{children:"XLS"}),", ",(0,r.jsx)(n.strong,{children:"XLSX"}),", ",(0,r.jsx)(n.strong,{children:"PDF"}),", ",(0,r.jsx)(n.strong,{children:"HTML"}),", ",(0,r.jsx)(n.strong,{children:"RTF"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"By default, if the format is specified in the print view, when the client receives a file in a specified format, it attempts to open this file using standard OS means (that is, using the program associated with the specified format). If necessary, however, in addition to the format, you can specify a property that will contain a file with the generated report. In this case, no data will be sent to the client and all data processing will be done exclusively on the server."}),"\n",(0,r.jsx)(n.h3,{id:"interactive",children:"Interactive print view"}),"\n",(0,r.jsxs)(n.p,{children:["Apart from the export in a specified format, the print view allows to display information to the user in the following ",(0,r.jsx)(n.em,{children:"interactive"})," modes:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"PREVIEW"})," - the form on the client side will be shown in a new preview window, so that the user can decide on the format to export this form to or send it to the printer. This mode is used by default if other modes/formats are not defined."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"NOPREVIEW"})," - the form will be automatically sent to the printer. In this and the previous modes, you can specify a property that will be used for to determine the printer that will be used to print the form (if you don't do it, the default printer will be used)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"MESSAGE"})," - the form will be shown as a message. In this case, it is assumed that the form consists of a single object group. Accordingly, the shown message consists of a header with all the properties having an ",(0,r.jsx)(n.a,{href:"/v5/Static_view#empty",children:"empty"})," ",(0,r.jsx)(n.a,{href:"/v5/Form_structure#drawgroup",children:"display group"}),", and a table in which rows are object collections of this only object group and columns are properties that are not displayed in the header (i.e. for which the display group exists and is equal to the only object group of the form being opened). The operator working in this mode is essentially a generalization of the ",(0,r.jsx)(n.a,{href:"/v5/Show_message_MESSAGE_ASK",children:"message display"})," operator. It is worth noting that this operator mode is used in ",(0,r.jsx)(n.a,{href:"/v5/Constraints",children:"constraints"})," (when the user is shown objects for which a constraint was violated)."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Similarly to the ",(0,r.jsx)(n.a,{href:"/v5/In_an_interactive_view_SHOW_DIALOG",children:"interactive view"}),", the interactive modes of the print view enable the developer to set options for  ",(0,r.jsx)(n.a,{href:"/v5/In_an_interactive_view_SHOW_DIALOG#flow",children:"flow management"})," and ",(0,r.jsx)(n.a,{href:"/v5/In_an_interactive_view_SHOW_DIALOG#location",children:"form location"})," (their behavior is identical to the corresponding options in the form opening operator in the interactive view)."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["\u0421urrent implementation: in the ",(0,r.jsx)(n.code,{children:"MESSAGE"}),' mode, the form is always shown as a window (the "asynchronous window" option is not supported in this case); in the asynchronous ',(0,r.jsx)(n.code,{children:"PREVIEW"})," mode the form is always shown as a tab; in the synchronous ",(0,r.jsx)(n.code,{children:"PREVIEW"})," mode - as a window. The ",(0,r.jsx)(n.code,{children:"NOPREVIEW"})," mode is always asynchronous and the form location in it does not make sense (since no forms are shown to the user directly)"]})}),"\n",(0,r.jsx)(n.h3,{id:"language",children:"Language"}),"\n",(0,r.jsxs)(n.p,{children:["To open the form in the print view, ",(0,r.jsxs)(n.a,{href:"/v5/PRINT_operator",children:[(0,r.jsx)(n.code,{children:"PRINT"})," operator"]})," is used."]}),"\n",(0,r.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"FORM printOrder\n    OBJECTS o = Order\n    PROPERTIES(o) currency, customer\n\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) idSku, price\n    FILTERS order(d) == o\n;\n\nprint (Order o)  {\n    PRINT printOrder OBJECTS o = o; // printing\n\n    LOCAL file = FILE ();\n    PRINT printOrder OBJECTS o = o DOCX TO file;\n    open(file());\n\n    //v 2.0-2.1 syntax\n    LOCAL sheetName = STRING[255]();\n    sheetName() <- 'encrypted';\n    PRINT printOrder OBJECTS o = o XLS SHEET sheetName PASSWORD 'pass';\n\n    //v 2.2 syntax\n    //PRINT printOrder OBJECTS o = o XLS SHEET 'encrypted' PASSWORD 'pass';\n}\n"})})]})}function c(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return s}});var i=t(67294);let r={},o=i.createContext(r);function s(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);