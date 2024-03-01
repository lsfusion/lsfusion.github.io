"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[72596],{18125:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var i=n(74848),s=n(28453);const t={title:"IMPORT operator"},o=void 0,d={id:"IMPORT_operator",title:"IMPORT operator",description:"The IMPORT operator creates an action that imports data from a specified file into specified properties (parameters) or, in general, into a specified form.",source:"@site/versioned_docs/version-v5/IMPORT_operator.md",sourceDirName:".",slug:"/IMPORT_operator",permalink:"/IMPORT_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/IMPORT_operator.md",tags:[],version:"v5",lastUpdatedAt:1708525070,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"IMPORT operator"},sidebar:"learn",previous:{title:"IF ... THEN operator",permalink:"/IF_..._THEN_action_operator"},next:{title:"INPUT operator",permalink:"/INPUT_operator"}},l={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Source of import",id:"source-of-import",level:3},{value:"Import format",id:"import-format",level:3},{value:"Import destination",id:"import-destination",level:3},{value:"Examples",id:"examples",level:2}];function h(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:["The ",(0,i.jsx)(r.code,{children:"IMPORT"})," operator creates an ",(0,i.jsx)(r.a,{href:"/Actions",children:"action"})," that imports data from a specified file into ",(0,i.jsx)(r.a,{href:"/Data_import_IMPORT",children:"specified properties (parameters)"})," or, in general, into a ",(0,i.jsx)(r.a,{href:"/In_a_structured_view_EXPORT_IMPORT#importForm",children:"specified form"}),"."]}),"\n",(0,i.jsx)(r.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"IMPORT [importFormat] FROM fileExpr importDestination [DO actionOperator [ELSE elseActionOperator]]\r\nIMPORT formName [importFormat] [FROM (fileExpr | (groupId1 = fileExpr1 [, ..., groupIdM = fileExprM])]\n"})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"importFormat"})," can be specified by one of the following options:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"JSON [CHARSET charsetStr]\r\nXML [ATTR] [CHARSET charsetStr]\r\nCSV [separator] [HEADER | NOHEADER] [ESCAPE | NOESCAPE] [CHARSET charsetStr]\r\nXLS [HEADER | NOHEADER] [SHEET (sheetExpr | ALL)]\r\nDBF [CHARSET charsetStr]\r\nTABLE\n"})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"importDestination"})," can be specified by one of the following options:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"TO [(objClassId1, objClassId2, ..., objClassIdK)] propertyId1 [= columnId1], ..., propertyIdN [= columnIdN] [WHERE whereId]\r\nFIELDS [(objClassId1 objAlias1, objClassId2 objAlias1, ..., objClassIdK objAliasK)] propClassId1 [propAlias1 =] columnId1 [NULL], ..., propClassIdN [propAliasN =] columnIdN [NULL]\n"})}),"\n",(0,i.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(r.p,{children:["The ",(0,i.jsx)(r.code,{children:"IMPORT"})," operator creates an action that imports data from a specified file into the values of specified properties or into a specified form."]}),"\n",(0,i.jsxs)(r.p,{children:["If the format of the imported file is not specified, it is determined automatically depending on the class of the imported file (or on the extension, if the class is ",(0,i.jsx)(r.code,{children:"FILE"}),"), in the following way:"]}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Format"}),(0,i.jsx)(r.th,{children:"Extension"}),(0,i.jsx)(r.th,{children:"Class"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"JSON"})}),(0,i.jsx)(r.td,{children:"json"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"JSONFILE"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"XML"})}),(0,i.jsx)(r.td,{children:"xml"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"XMLFILE"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"CSV"})}),(0,i.jsx)(r.td,{children:"csv"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"CSVFILE"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"XLS"})}),(0,i.jsx)(r.td,{children:"xls or xlsx"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"EXCELFILE"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"DBF"})}),(0,i.jsx)(r.td,{children:"dbf"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"DBFFILE"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"TABLE"})}),(0,i.jsx)(r.td,{children:"table"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"TABLEFILE"})})]})]})]}),"\n",(0,i.jsx)(r.admonition,{type:"info",children:(0,i.jsx)(r.p,{children:"The first passed file is used to automatically determine a flat file format by its extension"})}),"\n",(0,i.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsx)(r.h3,{id:"source-of-import",children:"Source of import"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"fileExpr"})}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/Expression",children:"Expression"})," whose value is the imported file. The value of the expression must be an object of a file class (",(0,i.jsx)(r.code,{children:"FILE"}),", ",(0,i.jsx)(r.code,{children:"RAWFILE"}),", ",(0,i.jsx)(r.code,{children:"JSONFILE"})," etc. ). If this expression is not specified when importing a form, then the default expression is ",(0,i.jsx)(r.code,{children:"System.importFile()"}),"."]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"groupId1, ..., groupIdM"})}),"\n",(0,i.jsxs)(r.p,{children:["Names of object groups of the imported form for which you want to import data. ",(0,i.jsx)(r.a,{href:"/IDs#id",children:"Simple IDs"}),". Used only for importing a form from flat formats."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"fileExpr1, ..., fileExprM"})}),"\n",(0,i.jsxs)(r.p,{children:["Expressions whose values are files that need to be imported for the specified object groups. The value of each expression must be an object of a file class (",(0,i.jsx)(r.code,{children:"FILE"}),", ",(0,i.jsx)(r.code,{children:"RAWFILE"}),", ",(0,i.jsx)(r.code,{children:"JSONFILE"})," etc. ). Used only to import forms from flat formats. For the ",(0,i.jsx)(r.a,{href:"/Static_view#empty",children:"empty object group"}),", the name ",(0,i.jsx)(r.code,{children:"root"})," is used."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"import-format",children:"Import format"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"ATTR"})}),"\n",(0,i.jsxs)(r.p,{children:["A keyword that specifies that values should be read from the attributes of an element. If not specified, then reading happens from child elements. Only applicable for import from ",(0,i.jsx)(r.strong,{children:"XML"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"separator"})}),"\n",(0,i.jsxs)(r.p,{children:["Delimiter in a ",(0,i.jsx)(r.strong,{children:"CSV"})," file. ",(0,i.jsx)(r.a,{href:"/Literals#strliteral",children:"String literal"}),". If not specified, then the default delimiter is ",(0,i.jsx)(r.code,{children:";"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"HEADER"})," | ",(0,i.jsx)(r.code,{children:"NOHEADER"})]}),"\n",(0,i.jsxs)(r.p,{children:["Keywords specifying the presence (",(0,i.jsx)(r.code,{children:"HEADER"}),") or absence (",(0,i.jsx)(r.code,{children:"NOHEADER"}),") of a header string in a ",(0,i.jsx)(r.strong,{children:"CSV"}),", or ",(0,i.jsx)(r.strong,{children:"XLS"})," file. The default is ",(0,i.jsx)(r.code,{children:"NOHEADER"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["When using the ",(0,i.jsx)(r.code,{children:"NOHEADER"})," option:"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["column names are considered to be: ",(0,i.jsx)(r.code,{children:"A"}),", ",(0,i.jsx)(r.code,{children:"B"}),", ..., ",(0,i.jsx)(r.code,{children:"Z"}),", ",(0,i.jsx)(r.code,{children:"AA"}),", ...,  ",(0,i.jsx)(r.code,{children:"AE"}),", ..."]}),"\n",(0,i.jsxs)(r.li,{children:["if a column is not found / does not match the type of the destination property, the value of this column is considered to be ",(0,i.jsx)(r.code,{children:"NULL"})," (in other import formats, in the platform throws an error in these cases)."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"ESCAPE"})," | ",(0,i.jsx)(r.code,{children:"NOESCAPE"})]}),"\n",(0,i.jsxs)(r.p,{children:["Keyword specifying the presence (",(0,i.jsx)(r.code,{children:"ESCAPE"}),") or absence (",(0,i.jsx)(r.code,{children:"NOESCAPE"}),") of escaping for special characters (",(0,i.jsx)(r.code,{children:"\\r"}),", ",(0,i.jsx)(r.code,{children:"\\n"}),", ",(0,i.jsx)(r.code,{children:'"'})," (double quotes)) and the specified delimiter ",(0,i.jsx)(r.code,{children:"separator"})," in a ",(0,i.jsx)(r.strong,{children:"CSV"})," file. It makes sense to use ",(0,i.jsx)(r.code,{children:"NOESCAPE"})," only in cases where the specified delimiter is guaranteed not to occur in the data. The default is ",(0,i.jsx)(r.code,{children:"ESCAPE"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"SHEET (sheetExpr | ALL)"})}),"\n",(0,i.jsxs)(r.p,{children:["An option specifying the import of a specific sheet from an Excel file. If the option is not specified, then sheet number ",(0,i.jsx)(r.code,{children:"1"})," is taken."]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"sheetExpr"})}),"\n",(0,i.jsxs)(r.p,{children:["An expression whose value determines the number of the sheet imported from the Excel file. The value of the expression must be of class ",(0,i.jsx)(r.code,{children:"INTEGER"})," or ",(0,i.jsx)(r.code,{children:"LONG"}),". Numbering starts from ",(0,i.jsx)(r.code,{children:"1"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"ALL"})}),"\n",(0,i.jsx)(r.p,{children:"A keyword that means that import will be from all sheets of the excel file."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"CHARSET charsetStr"})}),"\n",(0,i.jsx)(r.p,{children:"An option specifying the encoding used for import."}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"charsetStr"})}),"\n",(0,i.jsx)(r.p,{children:"A string literal that defines the encoding."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"actionOperator"})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/Action_operators#contextdependent",children:"Context-dependent action operator"})," describing the action that is executed for each imported record."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"elseActionOperator"})}),"\n",(0,i.jsx)(r.p,{children:"A context-dependent action operator describing the action that is executed if no records have been imported. Parameters into which data is imported cannot be used as parameters of this action."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"import-destination",children:"Import destination"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"formName"})}),"\n",(0,i.jsxs)(r.p,{children:["The name of the form into which data has to be imported. ",(0,i.jsx)(r.a,{href:"/IDs#cid",children:"Composite ID"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"objClassId1, ..., objClassIdK"})}),"\n",(0,i.jsxs)(r.p,{children:["Classes of the ",(0,i.jsx)(r.a,{href:"/Data_import_IMPORT",children:"imported"})," objects. Specified by ",(0,i.jsx)(r.a,{href:"/IDs#classid",children:"class IDs"}),". ",(0,i.jsx)(r.code,{children:"K <= 1"}),". By default, it is assumed that what is being imported is one object of class ",(0,i.jsx)(r.code,{children:"INTEGER"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"objAlias1, ..., objAliasK"})}),"\n",(0,i.jsxs)(r.p,{children:["Names of local parameters into which imported objects are written. ",(0,i.jsx)(r.a,{href:"/IDs#id",children:"Simple IDs"}),". ",(0,i.jsx)(r.code,{children:"K <= 1"}),". By default, it is assumed that one object is being imported with the name ",(0,i.jsx)(r.code,{children:"row"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"propertyId1, ..., propertyIdN"})}),"\n",(0,i.jsxs)(r.p,{children:["List ",(0,i.jsx)(r.a,{href:"/IDs#propertyid",children:"property IDs"})," into which columns (fields) of data are imported. Property parameters and their classes must match the imported objects and their classes."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"columnId1, ..., columnIdN"})}),"\n",(0,i.jsxs)(r.p,{children:["A list of column IDs in the source file from which data will be imported to the corresponding property. Each element of the list is specified either by a simple ID or by a string literal. When the ID of a nonexistent column is specified, or in the absence of an ID, the column corresponding to the property is the column that follows the column specified for the previous property in the list, or the first if the first property is specified. For ",(0,i.jsx)(r.strong,{children:"DBF"})," files, column IDs are case-insensitive."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"whereId"})}),"\n",(0,i.jsxs)(r.p,{children:["Property ID to which ",(0,i.jsx)(r.a,{href:"/Built-in_classes#defaultvalue",children:"a default value"})," of the class of this property value will be written for each imported object. Property parameters and classes must match the imported objects and their classes. If the property is not specified and the number of imported objects is greater than ",(0,i.jsx)(r.code,{children:"0"}),", a property with the name ",(0,i.jsx)(r.code,{children:"imported"})," and classes of imported objects (e.g. ",(0,i.jsx)(r.code,{children:"System.imported[INTEGER]"}),") is used."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"propClassId1, ..., propClassIdN"})}),"\n",(0,i.jsxs)(r.p,{children:["List of names of ",(0,i.jsx)(r.a,{href:"/Built-in_classes",children:"builtin classes"})," of the imported columns."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"propAlias1, ..., propAliasN"})}),"\n",(0,i.jsx)(r.p,{children:"Names of local parameters into which columns (fields) of data are imported. Simple IDs. If the name is not specified, then the name of the column (field) in the source file will be used as the parameter name."}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"NULL"})}),"\n",(0,i.jsxs)(r.p,{children:["Keyword. Specifies that ",(0,i.jsx)(r.code,{children:"NULL"})," values during import (if the imported format supports them) will not be replaced with default values (for example, ",(0,i.jsx)(r.code,{children:"0"})," for numbers, the empty string for strings, etc. )."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-lsf",children:"import()  {\r\n\r\n    LOCAL xlsFile = EXCELFILE ();\r\n\r\n    LOCAL field1 = BPSTRING[50] (INTEGER);\r\n    LOCAL field2 = BPSTRING[50] (INTEGER);\r\n    LOCAL field3 = BPSTRING[50] (INTEGER);\r\n    LOCAL field4 = BPSTRING[50] (INTEGER);\r\n\r\n    LOCAL headField1 = BPSTRING[50] ();\r\n    LOCAL headField2 = BPSTRING[50] ();\r\n\r\n    INPUT f = EXCELFILE DO {\r\n        IMPORT XLS SHEET 2 FROM f TO field1 = C, field2, field3 = F, field4 = A;\r\n        IMPORT XLS SHEET ALL FROM f TO field1 = C, field2, field3 = F, field4 = A;\r\n\r\n        FOR imported(INTEGER i) DO { // imported property - a system property for iterating data\r\n            MESSAGE 'field1 value = ' + field1(i);\r\n            MESSAGE 'field2 value = ' + field2(i);\r\n            MESSAGE 'field3 value = ' + field3(i);\r\n            MESSAGE 'field4 value = ' + field4(i);\r\n       }\r\n    }\r\n\r\n    LOCAL t = FILE ();\r\n    EXTERNAL SQL 'jdbc:postgresql://localhost/test?user=postgres&password=12345' EXEC 'SELECT x.a,x.b,x.c,x.d FROM orders x WHERE x.id = $1;' PARAMS '4553' TO t;\r\n    // import with FIELDS option\r\n    IMPORT FROM t() FIELDS INTEGER a, DATE b, BPSTRING[50] c, BPSTRING[50] d DO        \r\n        NEW o = Order {\r\n            number(o) <- a;\r\n            date(o) <- b;\r\n            customer(o) <- c;\r\n            // finding currency with this name\r\n            currency(o) <- GROUP MAX Currency currency IF name(currency) = d; \r\n        }\r\n\r\n\r\n    INPUT f = FILE DO\r\n        IMPORT CSV '*' HEADER CHARSET 'utf-8' FROM f TO field1 = C, field2, field3 = F, field4 = A;\r\n    INPUT f = FILE DO\r\n        IMPORT XML ATTR FROM f TO field1, field2;\r\n    INPUT f = FILE DO\r\n        IMPORT XML ROOT 'element' ATTR FROM f TO field1, field2;\r\n    INPUT f = FILE DO\r\n        IMPORT XML ATTR FROM f TO() headField1, headField2;\r\n\r\n    INPUT f = FILE DO\r\n        INPUT memo = FILE DO\r\n            IMPORT DBF MEMO memo FROM f TO field1 = 'DBFField1', field2 = 'DBFField2';\r\n}\n"})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-lsf",children:"\r\ndate = DATA DATE (INTEGER);\r\nsku = DATA BPSTRING[50] (INTEGER);\r\nprice = DATA NUMERIC[14,2] (INTEGER);\r\norder = DATA INTEGER (INTEGER);\r\nFORM import\r\n    OBJECTS o = INTEGER // orders\r\n    OBJECTS od = INTEGER // order lines\r\n    PROPERTIES (o) dateOrder = date // importing the date from the dateOrder field\r\n    PROPERTIES (od) sku = sku, price = price // importing product quantity from sku and price fields\r\n    FILTERS order(od) = o // writing the top order to order\r\n\r\n;\r\n\r\nimportForm()  {\r\n    INPUT f = FILE DO {\r\n        IMPORT import JSON FROM f;\r\n        SHOW import; // showing what was imported\r\n\r\n        // creating objects in the database\r\n        FOR DATE date = date(INTEGER io) NEW o = Order DO {\r\n            date(o) <- date;\r\n            FOR order(INTEGER iod) = io NEW od = OrderDetail DO {\r\n                price(od) <- price(iod);\r\n                sku(od) <- GROUP MAX Sku sku IF name(sku) = sku(iod); // finding sku with this name\r\n            }\r\n        }\r\n    }\r\n}\n"})})]})}function a(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>d});var i=n(96540);const s={},t=i.createContext(s);function o(e){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(t.Provider,{value:r},e.children)}}}]);