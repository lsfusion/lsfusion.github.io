"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[31166],{40353:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var s=n(74848),t=n(28453);const i={title:"EXPORT operator"},o=void 0,d={id:"EXPORT_operator",title:"EXPORT operator",description:"The EXPORT operator: creates an action that exports specified properties to a file, or, in common case, that opens a form in a structured view.",source:"@site/docs/EXPORT_operator.md",sourceDirName:".",slug:"/EXPORT_operator",permalink:"/next/EXPORT_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/EXPORT_operator.md",tags:[],version:"current",lastUpdatedAt:1708525070,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"EXPORT operator"},sidebar:"learn",previous:{title:"EXPAND operator",permalink:"/next/EXPAND_operator"},next:{title:"EXTERNAL operator",permalink:"/next/EXTERNAL_operator"}},l={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Source of export",id:"source-of-export",level:3},{value:"Export format",id:"export-format",level:3},{value:"Export destination",id:"export-destination",level:3},{value:"Examples",id:"examples",level:2}];function h(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.code,{children:"EXPORT"})," operator: creates an ",(0,s.jsx)(r.a,{href:"/next/Actions",children:"action"})," that exports ",(0,s.jsx)(r.a,{href:"/next/Data_export_EXPORT",children:"specified properties"})," to a file, or, in common case, that ",(0,s.jsx)(r.a,{href:"/next/In_a_structured_view_EXPORT_IMPORT",children:"opens a form"})," in a structured view."]}),"\n",(0,s.jsx)(r.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"EXPORT [exportFormat] [TOP n] FROM [columnId1 =] propertyExpr1, ..., [columnIdN = ] propertyExprN [WHERE whereExpr] [ORDER orderExpr1 [DESC], ..., orderExprL [DESC]] [TO propertyId]\nEXPORT formName [OBJECTS objName1 = expr1, ..., objNameK = exprK] [exportFormat] [TOP n] [TO (propertyId | (groupId1 = propertyId1, ..., groupIdN = propertyIdM))]\n"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"exportFormat"})," can be specified by one of the following options:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"JSON [CHARSET charsetStr]\nXML [HEADER | NOHEADER] [ATTR] [CHARSET charsetStr]\nCSV [separator] [HEADER | NOHEADER] [ESCAPE | NOESCAPE] [CHARSET charsetStr]\nXLS [SHEET sheetProperty] [HEADER | NOHEADER]\nXLSX [SHEET sheetProperty] [HEADER | NOHEADER]\nDBF [CHARSET charsetStr]\nTABLE\n"})}),"\n",(0,s.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.code,{children:"EXPORT"})," operator creates an action that exports data from the specified properties or form to a file. The following file formats are supported: ",(0,s.jsx)(r.strong,{children:"XML"}),", ",(0,s.jsx)(r.strong,{children:"JSON"}),", ",(0,s.jsx)(r.strong,{children:"CSV"}),", ",(0,s.jsx)(r.strong,{children:"XLS"}),", ",(0,s.jsx)(r.strong,{children:"XLSX"}),", ",(0,s.jsx)(r.strong,{children:"DBF"}),", ",(0,s.jsx)(r.strong,{children:"TABLE"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["If no export file format is specified, it is considered to be ",(0,s.jsx)(r.code,{children:"JSON"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["If the property to which the data is exported is of class ",(0,s.jsx)(r.code,{children:"FILE"}),", then the extension of the resulting file is determined depending on the format as follows:"]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Format"}),(0,s.jsx)(r.th,{children:"Extension"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"JSON"})}),(0,s.jsx)(r.td,{children:"json"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"XML"})}),(0,s.jsx)(r.td,{children:"xml"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"CSV"})}),(0,s.jsx)(r.td,{children:"csv"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"XLS"})}),(0,s.jsx)(r.td,{children:"xls"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"XLSX"})}),(0,s.jsx)(r.td,{children:"xlsx"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"DBF"})}),(0,s.jsx)(r.td,{children:"dbf"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"TABLE"})}),(0,s.jsx)(r.td,{children:"table"})]})]})]}),"\n",(0,s.jsxs)(r.p,{children:["When exporting a form in an ",(0,s.jsx)(r.code,{children:"OBJECTS"})," block, it is possible to add extra filters to check for the equality of the objects on the form with ",(0,s.jsx)(r.a,{href:"/next/Open_form#params",children:"the values passed"}),". These objects ",(0,s.jsx)(r.a,{href:"/next/Structured_view#objects",children:"will not participate"})," in building the object group hierarchy."]}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(r.h3,{id:"source-of-export",children:"Source of export"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"formName"})}),"\n",(0,s.jsxs)(r.p,{children:["The name of the form from which you want to export data. ",(0,s.jsx)(r.a,{href:"/next/IDs#cid",children:"Composite ID"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"objName1 ... objNameK"})}),"\n",(0,s.jsxs)(r.p,{children:["Names of form objects for which filtered (fixed) values are specified. ",(0,s.jsx)(r.a,{href:"/next/IDs#id",children:"Simple IDs"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"expr1 ... exprK"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/next/Expression",children:"Expressions"})," whose values determine the filtered (fixed) values for form objects."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"propertyExpr1, ..., propertyExprN"})}),"\n",(0,s.jsxs)(r.p,{children:["List of ",(0,s.jsx)(r.a,{href:"/next/Expression",children:"expressions"})," from whose values the data is exported. Each property is mapped to a table column of the result file."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"columnId1, ..., columnIdN"})}),"\n",(0,s.jsxs)(r.p,{children:["A list of column IDs in the resulting file into which data from the corresponding property will be exported. Each list element is either ",(0,s.jsx)(r.a,{href:"/next/IDs#id",children:"a simple ID"})," or a ",(0,s.jsx)(r.a,{href:"/next/Literals#strliteral",children:"string literal"}),". If no ID is specified, it is considered equal to ",(0,s.jsx)(r.code,{children:"expr<Column number>"})," by default."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"whereExpr"})}),"\n",(0,s.jsxs)(r.p,{children:["An expression whose value is a condition for the export. If not specified, it is considered equal to the ",(0,s.jsx)(r.a,{href:"/next/Logical_operators_AND_OR_NOT_XOR",children:"disjunction"})," of all exported properties (that is, at least one of the properties must be non-",(0,s.jsx)(r.code,{children:"NULL"}),")."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"orderExpr1, ..., orderExprL"})}),"\n",(0,s.jsxs)(r.p,{children:["List of ",(0,s.jsx)(r.a,{href:"/next/Expression",children:"expressions"})," by which the exported data is sorted. Only properties present in the list ",(0,s.jsx)(r.code,{children:"propertyExpr1, ..., propertyExprN"})," can be used"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"DESC"})}),"\n",(0,s.jsx)(r.p,{children:"Keyword. Specifies reverse sort order. By default, ascending sort is used."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"export-format",children:"Export format"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"ATTR"})}),"\n",(0,s.jsxs)(r.p,{children:["A keyword that specifies that values should be exported to the attributes of the parent tag. If not specified, the values are exported to child tags. Only applicable for export to ",(0,s.jsx)(r.strong,{children:"XML"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"separator"})}),"\n",(0,s.jsxs)(r.p,{children:["Delimiter in a ",(0,s.jsx)(r.strong,{children:"CSV"})," file. ",(0,s.jsx)(r.a,{href:"/next/Literals#strliteral",children:"String literal"}),". If not specified, then the default delimiter is ",(0,s.jsx)(r.code,{children:";"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"HEADER | NOHEADER"})}),"\n",(0,s.jsxs)(r.p,{children:["Keywords specifying the presence (",(0,s.jsx)(r.code,{children:"HEADER"}),") or absence (",(0,s.jsx)(r.code,{children:"NOHEADER"}),") of a header string in a ",(0,s.jsx)(r.strong,{children:"CSV"}),", ",(0,s.jsx)(r.strong,{children:"XLS"}),", or ",(0,s.jsx)(r.strong,{children:"XLSX"})," file. The default is ",(0,s.jsx)(r.code,{children:"NOHEADER"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["When using the ",(0,s.jsx)(r.code,{children:"NOHEADER"})," option if the column name is one of the predefined names (",(0,s.jsx)(r.code,{children:"A"}),", ",(0,s.jsx)(r.code,{children:"B"}),", ..., ",(0,s.jsx)(r.code,{children:"Z"}),", ",(0,s.jsx)(r.code,{children:"AA"}),", ..., ",(0,s.jsx)(r.code,{children:"AE"}),"), it is exported to the column with the corresponding number, and the following columns are exported to the columns next in order after this column."]}),"\n",(0,s.jsxs)(r.p,{children:["Has other meaning for ",(0,s.jsx)(r.strong,{children:"XML"}),": with ",(0,s.jsx)(r.code,{children:"HEADER"})," result file contains first string like ",(0,s.jsx)(r.code,{children:'<?xml version="1.0" encoding="UTF-8"?>'}),". Export with ",(0,s.jsx)(r.code,{children:"NOHEADER"})," exports without this string. The default is ",(0,s.jsx)(r.code,{children:"HEADER"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"ESCAPE | NOESCAPE"})}),"\n",(0,s.jsxs)(r.p,{children:["Keywords specifying the presence (",(0,s.jsx)(r.code,{children:"ESCAPE"}),") or absence (",(0,s.jsx)(r.code,{children:"NOESCAPE"}),") of escaping for special characters (",(0,s.jsx)(r.code,{children:"\\r"}),", ",(0,s.jsx)(r.code,{children:"\\n"}),", ",(0,s.jsx)(r.code,{children:'"'})," (double quotes) and the specified delimiter (",(0,s.jsx)(r.code,{children:"separator"}),") in a ",(0,s.jsx)(r.strong,{children:"CSV"})," file. It makes sense to use ",(0,s.jsx)(r.code,{children:"NOESCAPE"})," only in cases where the specified delimiter is guaranteed not to occur in the data. The default is ",(0,s.jsx)(r.code,{children:"ESCAPE"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"CHARSET charsetStr"})}),"\n",(0,s.jsx)(r.p,{children:"An option specifying the encoding used for export."}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"charsetStr"})}),"\n",(0,s.jsx)(r.p,{children:"String literal that defines the encoding."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"sheetProperty"})}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.a,{href:"/next/IDs#propertyid",children:"ID of the property"})," whose value is used as the name of the sheet in the exported file. The property must not have parameters. It is used for ",(0,s.jsx)(r.code,{children:"XLS"})," and ",(0,s.jsx)(r.code,{children:"XLSX"})," export formats."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"TOP n"})}),"\n",(0,s.jsxs)(r.p,{children:["Exports only the first ",(0,s.jsx)(r.code,{children:"n"})," records. ",(0,s.jsx)(r.a,{href:"/next/Literals#intliteral",children:"Integer literal"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"export-destination",children:"Export destination"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"propertyId"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/next/IDs#propertyid",children:"Property ID"})," to which the generated file will be written. This property must not have parameters and its value must be of a file class (",(0,s.jsx)(r.code,{children:"FILE"}),", ",(0,s.jsx)(r.code,{children:"RAWFILE"}),", ",(0,s.jsx)(r.code,{children:"JSONFILE"}),", etc.). If this property is not specified, the ",(0,s.jsx)(r.code,{children:"System.exportFile"})," property is used by default."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"groupId1, ..., groupIdM"})}),"\n",(0,s.jsxs)(r.p,{children:["Names of object groups from the exported form for which you want to export data. ",(0,s.jsx)(r.a,{href:"/next/IDs#id",children:"Simple IDs"}),". Used only for exporting forms to flat formats."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"propertyId1 , ..., propertyIdM"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/next/IDs#propertyid",children:"Property IDs"})," to which the generated files for specified object groups will be written. These properties must not have parameters and their value must be of file classes (",(0,s.jsx)(r.code,{children:"FILE"}),", ",(0,s.jsx)(r.code,{children:"RAWFILE"}),", ",(0,s.jsx)(r.code,{children:"JSONFILE"}),", etc.). Used only for exporting forms to flat formats. For the ",(0,s.jsx)(r.a,{href:"/next/Static_view#empty",children:"empty group"})," of objects, the name ",(0,s.jsx)(r.code,{children:"root"})," is used."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-lsf",children:'CLASS Store;\n\nname = DATA STRING[20] (Sku);\nweight = DATA NUMERIC[10,2] (Sku);\n\nin = DATA BOOLEAN (Store, Sku);\n\nexportSkus (Store store)  {\n    // uploading to DBF all Sku for which in (Store, Sku) is specified for the desired warehouse\n    EXPORT DBF CHARSET \'CP866\' FROM id(Sku s), name(s), weight(s) WHERE in(store, s); \n    // uploads to CSV without header line and escaping special characters\n    EXPORT CSV NOHEADER NOESCAPE FROM id(Sku s), name(s), weight(s) WHERE in(store, s); \n    // uploads JSON, sorting by property name[Sku] in descending order\n    EXPORT FROM id(Sku s), name(s), weight(s) WHERE in(store, s) ORDER name(s) DESC; \n    // uploads JSON {"ff":"HI"}, as by default it gets the name value, and the platform\n    // gets the object {"value":"HI"} to "HI"\n    EXPORT FROM ff=\'HI\'; \n    // uploads JSON "HI", as by default it gets the name value, and the platform\n    // automatically converts the object {"value": "HI"} to "HI"\n    EXPORT FROM \'HI\'; \n}\n'})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-lsf",children:"FORM exportSku\n    OBJECTS st = Store\n\n    OBJECTS s = Sku\n    PROPERTIES(s) id, name, weight\n    FILTERS in(st, s)\n;\n\nexportSku (Store store)  {\n    // uploading to DBF all Sku for which in (Store, Sku) is specified for the desired warehouse\n    EXPORT exportSku OBJECTS st = store DBF CHARSET 'CP866';\n    EXPORT exportSku XML;\n    EXPORT exportSku OBJECTS st = store CSV ',';\n}\n"})})]})}function a(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>d});var s=n(96540);const t={},i=s.createContext(t);function o(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);