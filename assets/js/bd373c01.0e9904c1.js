"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[58120],{36984:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var r=i(74848),s=i(28453);const t={title:"IMPORT operator"},o=void 0,d={id:"IMPORT_operator",title:"IMPORT operator",description:"The IMPORT operator creates an action that imports data from a specified file into specified properties (parameters) or, in general, into a specified form.",source:"@site/docs/IMPORT_operator.md",sourceDirName:".",slug:"/IMPORT_operator",permalink:"/next/IMPORT_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/IMPORT_operator.md",tags:[],version:"current",lastUpdatedAt:1708525070,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"IMPORT operator"},sidebar:"learn",previous:{title:"IF ... THEN operator",permalink:"/next/IF_..._THEN_action_operator"},next:{title:"INPUT operator",permalink:"/next/INPUT_operator"}},l={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Source of import",id:"source-of-import",level:3},{value:"Import format",id:"import-format",level:3},{value:"Import destination",id:"import-destination",level:3},{value:"Examples",id:"examples",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"IMPORT"})," operator creates an ",(0,r.jsx)(n.a,{href:"/next/Actions",children:"action"})," that imports data from a specified file into ",(0,r.jsx)(n.a,{href:"/next/Data_import_IMPORT",children:"specified properties (parameters)"})," or, in general, into a ",(0,r.jsx)(n.a,{href:"/next/In_a_structured_view_EXPORT_IMPORT#importForm",children:"specified form"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"IMPORT [importFormat] FROM fileExpr importDestination [DO actionOperator [ELSE elseActionOperator]]\nIMPORT formName [importFormat] [FROM (fileExpr | (groupId1 = fileExpr1 [, ..., groupIdM = fileExprM])]\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"importFormat"})," can be specified by one of the following options:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"JSON [CHARSET charsetStr]\nXML [ATTR] [CHARSET charsetStr]\nCSV [separator] [HEADER | NOHEADER] [ESCAPE | NOESCAPE] [CHARSET charsetStr]\nXLS [HEADER | NOHEADER] [SHEET (sheetExpr | ALL)]\nDBF [CHARSET charsetStr]\nTABLE\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"importDestination"})," can be specified by one of the following options:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"TO [(objClassId1, objClassId2, ..., objClassIdK)] propertyId1 [= columnId1], ..., propertyIdN [= columnIdN] [WHERE whereId]\nFIELDS [(objClassId1 objAlias1, objClassId2 objAlias1, ..., objClassIdK objAliasK)] propClassId1 [propAlias1 =] columnId1 [NULL], ..., propClassIdN [propAliasN =] columnIdN [NULL]\n"})}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"IMPORT"})," operator creates an action that imports data from a specified file into the values of specified properties or into a specified form."]}),"\n",(0,r.jsxs)(n.p,{children:["If the format of the imported file is not specified, it is determined automatically depending on the class of the imported file (or on the extension, if the class is ",(0,r.jsx)(n.code,{children:"FILE"}),"), in the following way:"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Format"}),(0,r.jsx)(n.th,{children:"Extension"}),(0,r.jsx)(n.th,{children:"Class"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"JSON"})}),(0,r.jsx)(n.td,{children:"json"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"JSONFILE"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"XML"})}),(0,r.jsx)(n.td,{children:"xml"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"XMLFILE"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"CSV"})}),(0,r.jsx)(n.td,{children:"csv"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"CSVFILE"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"XLS"})}),(0,r.jsx)(n.td,{children:"xls or xlsx"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"EXCELFILE"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"DBF"})}),(0,r.jsx)(n.td,{children:"dbf"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"DBFFILE"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"TABLE"})}),(0,r.jsx)(n.td,{children:"table"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"TABLEFILE"})})]})]})]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"The first passed file is used to automatically determine a flat file format by its extension"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(n.h3,{id:"source-of-import",children:"Source of import"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"fileExpr"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/next/Expression",children:"Expression"})," whose value is the imported file. The value of the expression must be an object of a file class (",(0,r.jsx)(n.code,{children:"FILE"}),", ",(0,r.jsx)(n.code,{children:"RAWFILE"}),", ",(0,r.jsx)(n.code,{children:"JSONFILE"})," etc. ). If this expression is not specified when importing a form, then the default expression is ",(0,r.jsx)(n.code,{children:"System.importFile()"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"groupId1, ..., groupIdM"})}),"\n",(0,r.jsxs)(n.p,{children:["Names of object groups of the imported form for which you want to import data. ",(0,r.jsx)(n.a,{href:"/next/IDs#id",children:"Simple IDs"}),". Used only for importing a form from flat formats."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"fileExpr1, ..., fileExprM"})}),"\n",(0,r.jsxs)(n.p,{children:["Expressions whose values are files that need to be imported for the specified object groups. The value of each expression must be an object of a file class (",(0,r.jsx)(n.code,{children:"FILE"}),", ",(0,r.jsx)(n.code,{children:"RAWFILE"}),", ",(0,r.jsx)(n.code,{children:"JSONFILE"})," etc. ). Used only to import forms from flat formats. For the ",(0,r.jsx)(n.a,{href:"/next/Static_view#empty",children:"empty object group"}),", the name ",(0,r.jsx)(n.code,{children:"root"})," is used."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"import-format",children:"Import format"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"ATTR"})}),"\n",(0,r.jsxs)(n.p,{children:["A keyword that specifies that values should be read from the attributes of an element. If not specified, then reading happens from child elements. Only applicable for import from ",(0,r.jsx)(n.strong,{children:"XML"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"separator"})}),"\n",(0,r.jsxs)(n.p,{children:["Delimiter in a ",(0,r.jsx)(n.strong,{children:"CSV"})," file. ",(0,r.jsx)(n.a,{href:"/next/Literals#strliteral",children:"String literal"}),". If not specified, then the default delimiter is ",(0,r.jsx)(n.code,{children:";"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"HEADER"})," | ",(0,r.jsx)(n.code,{children:"NOHEADER"})]}),"\n",(0,r.jsxs)(n.p,{children:["Keywords specifying the presence (",(0,r.jsx)(n.code,{children:"HEADER"}),") or absence (",(0,r.jsx)(n.code,{children:"NOHEADER"}),") of a header string in a ",(0,r.jsx)(n.strong,{children:"CSV"}),", or ",(0,r.jsx)(n.strong,{children:"XLS"})," file. The default is ",(0,r.jsx)(n.code,{children:"NOHEADER"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["When using the ",(0,r.jsx)(n.code,{children:"NOHEADER"})," option:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["column names are considered to be: ",(0,r.jsx)(n.code,{children:"A"}),", ",(0,r.jsx)(n.code,{children:"B"}),", ..., ",(0,r.jsx)(n.code,{children:"Z"}),", ",(0,r.jsx)(n.code,{children:"AA"}),", ...,  ",(0,r.jsx)(n.code,{children:"AE"}),", ..."]}),"\n",(0,r.jsxs)(n.li,{children:["if a column is not found / does not match the type of the destination property, the value of this column is considered to be ",(0,r.jsx)(n.code,{children:"NULL"})," (in other import formats, in the platform throws an error in these cases)."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ESCAPE"})," | ",(0,r.jsx)(n.code,{children:"NOESCAPE"})]}),"\n",(0,r.jsxs)(n.p,{children:["Keyword specifying the presence (",(0,r.jsx)(n.code,{children:"ESCAPE"}),") or absence (",(0,r.jsx)(n.code,{children:"NOESCAPE"}),") of escaping for special characters (",(0,r.jsx)(n.code,{children:"\\r"}),", ",(0,r.jsx)(n.code,{children:"\\n"}),", ",(0,r.jsx)(n.code,{children:'"'})," (double quotes)) and the specified delimiter ",(0,r.jsx)(n.code,{children:"separator"})," in a ",(0,r.jsx)(n.strong,{children:"CSV"})," file. It makes sense to use ",(0,r.jsx)(n.code,{children:"NOESCAPE"})," only in cases where the specified delimiter is guaranteed not to occur in the data. The default is ",(0,r.jsx)(n.code,{children:"ESCAPE"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"SHEET (sheetExpr | ALL)"})}),"\n",(0,r.jsxs)(n.p,{children:["An option specifying the import of a specific sheet from an Excel file. If the option is not specified, then sheet number ",(0,r.jsx)(n.code,{children:"1"})," is taken."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"sheetExpr"})}),"\n",(0,r.jsxs)(n.p,{children:["An expression whose value determines the number of the sheet imported from the Excel file. The value of the expression must be of class ",(0,r.jsx)(n.code,{children:"INTEGER"})," or ",(0,r.jsx)(n.code,{children:"LONG"}),". Numbering starts from ",(0,r.jsx)(n.code,{children:"1"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"ALL"})}),"\n",(0,r.jsx)(n.p,{children:"A keyword that means that import will be from all sheets of the excel file."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"CHARSET charsetStr"})}),"\n",(0,r.jsx)(n.p,{children:"An option specifying the encoding used for import."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"charsetStr"})}),"\n",(0,r.jsx)(n.p,{children:"A string literal that defines the encoding."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"actionOperator"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/next/Action_operators#contextdependent",children:"Context-dependent action operator"})," describing the action that is executed for each imported record."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"elseActionOperator"})}),"\n",(0,r.jsx)(n.p,{children:"A context-dependent action operator describing the action that is executed if no records have been imported. Parameters into which data is imported cannot be used as parameters of this action."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"import-destination",children:"Import destination"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"formName"})}),"\n",(0,r.jsxs)(n.p,{children:["The name of the form into which data has to be imported. ",(0,r.jsx)(n.a,{href:"/next/IDs#cid",children:"Composite ID"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"objClassId1, ..., objClassIdK"})}),"\n",(0,r.jsxs)(n.p,{children:["Classes of the ",(0,r.jsx)(n.a,{href:"/next/Data_import_IMPORT",children:"imported"})," objects. Specified by ",(0,r.jsx)(n.a,{href:"/next/IDs#classid",children:"class IDs"}),". ",(0,r.jsx)(n.code,{children:"K <= 1"}),". By default, it is assumed that what is being imported is one object of class ",(0,r.jsx)(n.code,{children:"INTEGER"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"objAlias1, ..., objAliasK"})}),"\n",(0,r.jsxs)(n.p,{children:["Names of local parameters into which imported objects are written. ",(0,r.jsx)(n.a,{href:"/next/IDs#id",children:"Simple IDs"}),". ",(0,r.jsx)(n.code,{children:"K <= 1"}),". By default, it is assumed that one object is being imported with the name ",(0,r.jsx)(n.code,{children:"row"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"propertyId1, ..., propertyIdN"})}),"\n",(0,r.jsxs)(n.p,{children:["List ",(0,r.jsx)(n.a,{href:"/next/IDs#propertyid",children:"property IDs"})," into which columns (fields) of data are imported. Property parameters and their classes must match the imported objects and their classes."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"columnId1, ..., columnIdN"})}),"\n",(0,r.jsxs)(n.p,{children:["A list of column IDs in the source file from which data will be imported to the corresponding property. Each element of the list is specified either by a simple ID or by a string literal. When the ID of a nonexistent column is specified, or in the absence of an ID, the column corresponding to the property is the column that follows the column specified for the previous property in the list, or the first if the first property is specified. For ",(0,r.jsx)(n.strong,{children:"DBF"})," files, column IDs are case-insensitive."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"whereId"})}),"\n",(0,r.jsxs)(n.p,{children:["Property ID to which ",(0,r.jsx)(n.a,{href:"/next/Built-in_classes#defaultvalue",children:"a default value"})," of the class of this property value will be written for each imported object. Property parameters and classes must match the imported objects and their classes. If the property is not specified and the number of imported objects is greater than ",(0,r.jsx)(n.code,{children:"0"}),", a property with the name ",(0,r.jsx)(n.code,{children:"imported"})," and classes of imported objects (e.g. ",(0,r.jsx)(n.code,{children:"System.imported[INTEGER]"}),") is used."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"propClassId1, ..., propClassIdN"})}),"\n",(0,r.jsxs)(n.p,{children:["List of names of ",(0,r.jsx)(n.a,{href:"/next/Built-in_classes",children:"builtin classes"})," of the imported columns."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"propAlias1, ..., propAliasN"})}),"\n",(0,r.jsx)(n.p,{children:"Names of local parameters into which columns (fields) of data are imported. Simple IDs. If the name is not specified, then the name of the column (field) in the source file will be used as the parameter name."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"NULL"})}),"\n",(0,r.jsxs)(n.p,{children:["Keyword. Specifies that ",(0,r.jsx)(n.code,{children:"NULL"})," values during import (if the imported format supports them) will not be replaced with default values (for example, ",(0,r.jsx)(n.code,{children:"0"})," for numbers, the empty string for strings, etc. )."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"import()  {\n\n    LOCAL xlsFile = EXCELFILE ();\n\n    LOCAL field1 = BPSTRING[50] (INTEGER);\n    LOCAL field2 = BPSTRING[50] (INTEGER);\n    LOCAL field3 = BPSTRING[50] (INTEGER);\n    LOCAL field4 = BPSTRING[50] (INTEGER);\n\n    LOCAL headField1 = BPSTRING[50] ();\n    LOCAL headField2 = BPSTRING[50] ();\n\n    INPUT f = EXCELFILE DO {\n        IMPORT XLS SHEET 2 FROM f TO field1 = C, field2, field3 = F, field4 = A;\n        IMPORT XLS SHEET ALL FROM f TO field1 = C, field2, field3 = F, field4 = A;\n\n        FOR imported(INTEGER i) DO { // imported property - a system property for iterating data\n            MESSAGE 'field1 value = ' + field1(i);\n            MESSAGE 'field2 value = ' + field2(i);\n            MESSAGE 'field3 value = ' + field3(i);\n            MESSAGE 'field4 value = ' + field4(i);\n       }\n    }\n\n    LOCAL t = FILE ();\n    EXTERNAL SQL 'jdbc:postgresql://localhost/test?user=postgres&password=12345' EXEC 'SELECT x.a,x.b,x.c,x.d FROM orders x WHERE x.id = $1;' PARAMS '4553' TO t;\n    // import with FIELDS option\n    IMPORT FROM t() FIELDS INTEGER a, DATE b, BPSTRING[50] c, BPSTRING[50] d DO        \n        NEW o = Order {\n            number(o) <- a;\n            date(o) <- b;\n            customer(o) <- c;\n            // finding currency with this name\n            currency(o) <- GROUP MAX Currency currency IF name(currency) = d; \n        }\n\n\n    INPUT f = FILE DO\n        IMPORT CSV '*' HEADER CHARSET 'utf-8' FROM f TO field1 = C, field2, field3 = F, field4 = A;\n    INPUT f = FILE DO\n        IMPORT XML ATTR FROM f TO field1, field2;\n    INPUT f = FILE DO\n        IMPORT XML ROOT 'element' ATTR FROM f TO field1, field2;\n    INPUT f = FILE DO\n        IMPORT XML ATTR FROM f TO() headField1, headField2;\n\n    INPUT f = FILE DO\n        INPUT memo = FILE DO\n            IMPORT DBF MEMO memo FROM f TO field1 = 'DBFField1', field2 = 'DBFField2';\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"\ndate = DATA DATE (INTEGER);\nsku = DATA BPSTRING[50] (INTEGER);\nprice = DATA NUMERIC[14,2] (INTEGER);\norder = DATA INTEGER (INTEGER);\nFORM import\n    OBJECTS o = INTEGER // orders\n    OBJECTS od = INTEGER // order lines\n    PROPERTIES (o) dateOrder = date // importing the date from the dateOrder field\n    PROPERTIES (od) sku = sku, price = price // importing product quantity from sku and price fields\n    FILTERS order(od) = o // writing the top order to order\n\n;\n\nimportForm()  {\n    INPUT f = FILE DO {\n        IMPORT import JSON FROM f;\n        SHOW import; // showing what was imported\n\n        // creating objects in the database\n        FOR DATE date = date(INTEGER io) NEW o = Order DO {\n            date(o) <- date;\n            FOR order(INTEGER iod) = io NEW od = OrderDetail DO {\n                price(od) <- price(iod);\n                sku(od) <- GROUP MAX Sku sku IF name(sku) = sku(iod); // finding sku with this name\n            }\n        }\n    }\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>d});var r=i(96540);const s={},t=r.createContext(s);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);