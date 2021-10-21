(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[20415],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),f=s(n),c=r,N=f["".concat(l,".").concat(c)]||f[c]||d[c]||i;return n?a.createElement(N,o(o({ref:t},m),{},{components:n})):a.createElement(N,o({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},55173:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return m},default:function(){return f}});var a=n(74034),r=n(79973),i=(n(67294),n(3905)),o=["components"],p={title:"IMPORT operator"},l=void 0,s={unversionedId:"IMPORT_operator",id:"IMPORT_operator",isDocsHomePage:!1,title:"IMPORT operator",description:"The IMPORT operator creates an action that imports data from a specified file into specified properties (parameters) or, in general, into a specified form.",source:"@site/docs/IMPORT_operator.md",sourceDirName:".",slug:"/IMPORT_operator",permalink:"/next/IMPORT_operator",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/IMPORT_operator.md",tags:[],version:"current",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"7/7/2021",frontMatter:{title:"IMPORT operator"},sidebar:"learn",previous:{title:"IF ... THEN operator",permalink:"/next/IF_..._THEN_action_operator"},next:{title:"INPUT operator",permalink:"/next/INPUT_operator"}},m=[{value:"Syntax",id:"syntax",children:[],level:2},{value:"Description",id:"description",children:[],level:2},{value:"Parameters",id:"parameters",children:[{value:"Source of import",id:"source-of-import",children:[],level:3},{value:"Import format",id:"import-format",children:[],level:3},{value:"Import destination",id:"import-destination",children:[],level:3}],level:2},{value:"Examples",id:"examples",children:[],level:2}],d={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"IMPORT")," operator creates an ",(0,i.kt)("a",{parentName:"p",href:"/next/Actions"},"action")," that imports data from a specified file into ",(0,i.kt)("a",{parentName:"p",href:"/next/Data_import_IMPORT"},"specified properties (parameters)")," or, in general, into a ",(0,i.kt)("a",{parentName:"p",href:"/next/In_a_structured_view_EXPORT_IMPORT#importForm"},"specified form"),"."),(0,i.kt)("h2",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"IMPORT [importFormat] FROM fileExpr importDestination [DO actionOperator [ELSE elseActionOperator]]\nIMPORT formName [importFormat] [FROM (fileExpr | (groupId1 = fileExpr1 [, ..., groupIdM = fileExprM])]\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"importFormat")," can be specified by one of the following options:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"JSON [CHARSET charsetStr]\nXML [ATTR] [CHARSET charsetStr]\nCSV [separator] [HEADER | NOHEADER] [ESCAPE | NOESCAPE] [CHARSET charsetStr]\nXLS [HEADER | NOHEADER] [SHEET (sheetExpr | ALL)]\nDBF [CHARSET charsetStr]\nTABLE\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"importDestination")," can be specified by one of the following options:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"TO [(objClassId1, objClassId2, ..., objClassIdK)] propertyId1 [= columnId1], ..., propertyIdN [= columnIdN] [WHERE whereId]\nFIELDS [(objClassId1 objAlias1, objClassId2 objAlias1, ..., objClassIdK objAliasK)] propClassId1 [propAlias1 =] columnId1 [NULL], ..., propClassIdN [propAliasN =] columnIdN [NULL]\n")),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"IMPORT")," operator creates an action that imports data from a specified file into the values of specified properties or into a specified form. "),(0,i.kt)("p",null,"If the format of the imported file is not specified, it is determined automatically depending on the class of the imported file (or on the extension, if the class is ",(0,i.kt)("inlineCode",{parentName:"p"},"FILE"),"), in the following way:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Format"),(0,i.kt)("th",{parentName:"tr",align:null},"Extension"),(0,i.kt)("th",{parentName:"tr",align:null},"Class"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"JSON")),(0,i.kt)("td",{parentName:"tr",align:null},"json"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"JSONFILE"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"XML")),(0,i.kt)("td",{parentName:"tr",align:null},"xml"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"XMLFILE"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"CSV")),(0,i.kt)("td",{parentName:"tr",align:null},"csv"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CSVFILE"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"XLS")),(0,i.kt)("td",{parentName:"tr",align:null},"xls or xlsx"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"EXCELFILE"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"DBF")),(0,i.kt)("td",{parentName:"tr",align:null},"dbf"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DBFFILE"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"TABLE")),(0,i.kt)("td",{parentName:"tr",align:null},"table"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"TABLEFILE"))))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The first passed file is used to automatically determine a flat file format by its extension"))),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("h3",{id:"source-of-import"},"Source of import"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fileExpr"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/next/Expression"},"Expression")," whose value is the imported file. The value of the expression must be an object of a file class (",(0,i.kt)("inlineCode",{parentName:"p"},"FILE"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"RAWFILE"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"JSONFILE")," etc. ). If this expression is not specified when importing a form, then the default expression is ",(0,i.kt)("inlineCode",{parentName:"p"},"System.importFile()"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"groupId1, ..., groupIdM")),(0,i.kt)("p",{parentName:"li"},"  Names of object groups of the imported form for which you want to import data. ",(0,i.kt)("a",{parentName:"p",href:"/next/IDs#id"},"Simple IDs"),". Used only for importing a form from flat formats.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"fileExpr1, ..., fileExprM")),(0,i.kt)("p",{parentName:"li"},"  Expressions whose values are files that need to be imported for the specified object groups. The value of each expression must be an object of a file class (",(0,i.kt)("inlineCode",{parentName:"p"},"FILE"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"RAWFILE"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"JSONFILE")," etc. ). Used only to import forms from flat formats. For the ",(0,i.kt)("a",{parentName:"p",href:"/next/Static_view#empty"},"empty object group"),", the name ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," is used. "))),(0,i.kt)("h3",{id:"import-format"},"Import format"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ATTR")),(0,i.kt)("p",{parentName:"li"},"  A keyword that specifies that values should be read from the attributes of an element. If not specified, then reading happens from child elements. Only applicable for import from ",(0,i.kt)("strong",{parentName:"p"},"XML"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"separator")),(0,i.kt)("p",{parentName:"li"},"  Delimiter in a ",(0,i.kt)("strong",{parentName:"p"},"CSV")," file. ",(0,i.kt)("a",{parentName:"p",href:"/next/Literals#strliteral"},"String literal"),". If not specified, then the default delimiter is ",(0,i.kt)("inlineCode",{parentName:"p"},";"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"HEADER")," | ",(0,i.kt)("inlineCode",{parentName:"p"},"NOHEADER")),(0,i.kt)("p",{parentName:"li"},"  Keywords specifying the presence (",(0,i.kt)("inlineCode",{parentName:"p"},"HEADER"),") or absence (",(0,i.kt)("inlineCode",{parentName:"p"},"NOHEADER"),") of a header string in a ",(0,i.kt)("strong",{parentName:"p"},"CSV"),", or ",(0,i.kt)("strong",{parentName:"p"},"XLS")," file. The default is ",(0,i.kt)("inlineCode",{parentName:"p"},"NOHEADER"),"."),(0,i.kt)("p",{parentName:"li"},"  When using the ",(0,i.kt)("inlineCode",{parentName:"p"},"NOHEADER")," option:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"column names are considered to be: ",(0,i.kt)("inlineCode",{parentName:"li"},"A"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"B"),", ..., ",(0,i.kt)("inlineCode",{parentName:"li"},"Z"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"AA"),", ...,  ",(0,i.kt)("inlineCode",{parentName:"li"},"AE"),", ..."),(0,i.kt)("li",{parentName:"ul"},"if a column is not found / does not match the type of the destination property, the value of this column is considered to be ",(0,i.kt)("inlineCode",{parentName:"li"},"NULL")," (in other import formats, in the platform throws an error in these cases)."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ESCAPE")," | ",(0,i.kt)("inlineCode",{parentName:"p"},"NOESCAPE")),(0,i.kt)("p",{parentName:"li"},"  Keyword specifying the presence (",(0,i.kt)("inlineCode",{parentName:"p"},"ESCAPE"),") or absence (",(0,i.kt)("inlineCode",{parentName:"p"},"NOESCAPE"),") of escaping for special characters (",(0,i.kt)("inlineCode",{parentName:"p"},"\\r"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"\\n"),", ",(0,i.kt)("inlineCode",{parentName:"p"},'"')," (double quotes)) and the specified delimiter ",(0,i.kt)("inlineCode",{parentName:"p"},"separator")," in a ",(0,i.kt)("strong",{parentName:"p"},"CSV")," file. It makes sense to use ",(0,i.kt)("inlineCode",{parentName:"p"},"NOESCAPE")," only in cases where the specified delimiter is guaranteed not to occur in the data. The default is ",(0,i.kt)("inlineCode",{parentName:"p"},"ESCAPE"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"SHEET (sheetExpr | ALL)")),(0,i.kt)("p",{parentName:"li"},"  An option specifying the import of a specific sheet from an Excel file. If the option is not specified, then sheet number ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," is taken."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"sheetExpr")),(0,i.kt)("p",{parentName:"li"},"  An expression whose value determines the number of the sheet imported from the Excel file. The value of the expression must be of class ",(0,i.kt)("inlineCode",{parentName:"p"},"INTEGER")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"LONG"),". Numbering starts from ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ALL")),(0,i.kt)("p",{parentName:"li"},"  A keyword that means that import will be from all sheets of the excel file.")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"CHARSET charsetStr")),(0,i.kt)("p",{parentName:"li"},"  An option specifying the encoding used for import."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"charsetStr")),(0,i.kt)("p",{parentName:"li"},"  A string literal that defines the encoding. ")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"actionOperator")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("a",{parentName:"p",href:"/next/Action_operators#contextdependent"},"Context-dependent action operator")," describing the action that is executed for each imported record.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"elseActionOperator")),(0,i.kt)("p",{parentName:"li"},"  A context-dependent action operator describing the action that is executed if no records have been imported. Parameters into which data is imported cannot be used as parameters of this action."))),(0,i.kt)("h3",{id:"import-destination"},"Import destination"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"formName")),(0,i.kt)("p",{parentName:"li"},"  The name of the form into which data has to be imported. ",(0,i.kt)("a",{parentName:"p",href:"/next/IDs#cid"},"Composite ID"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"objClassId1, ..., objClassIdK")),(0,i.kt)("p",{parentName:"li"},"  Classes of the ",(0,i.kt)("a",{parentName:"p",href:"/next/Data_import_IMPORT"},"imported")," objects. Specified by ",(0,i.kt)("a",{parentName:"p",href:"/next/IDs#classid"},"class IDs"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"K <= 1"),". By default, it is assumed that what is being imported is one object of class ",(0,i.kt)("inlineCode",{parentName:"p"},"INTEGER"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"objAlias1, ..., objAliasK")),(0,i.kt)("p",{parentName:"li"},"  Names of local parameters into which imported objects are written. ",(0,i.kt)("a",{parentName:"p",href:"/next/IDs#id"},"Simple IDs"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"K <= 1"),". By default, it is assumed that one object is being imported with the name ",(0,i.kt)("inlineCode",{parentName:"p"},"row"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"propertyId1, ..., propertyIdN")),(0,i.kt)("p",{parentName:"li"},"  List ",(0,i.kt)("a",{parentName:"p",href:"/next/IDs#propertyid"},"property IDs")," into which columns (fields) of data are imported. Property parameters and their classes must match the imported objects and their classes.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"columnId1, ..., columnIdN")),(0,i.kt)("p",{parentName:"li"},"  A list of column IDs in the source file from which data will be imported to the corresponding property. Each element of the list is specified either by a simple ID or by a string literal. When the ID of a nonexistent column is specified, or in the absence of an ID, the column corresponding to the property is the column that follows the column specified for the previous property in the list, or the first if the first property is specified. For ",(0,i.kt)("strong",{parentName:"p"},"DBF")," files, column IDs are case-insensitive. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"whereId")),(0,i.kt)("p",{parentName:"li"},"  Property ID to which ",(0,i.kt)("a",{parentName:"p",href:"/next/Built-in_classes#defaultvalue"},"a default value")," of the class of this property value will be written for each imported object. Property parameters and classes must match the imported objects and their classes. If the property is not specified and the number of imported objects is greater than ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),", a property with the name ",(0,i.kt)("inlineCode",{parentName:"p"},"imported")," and classes of imported objects (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"System.imported[INTEGER]"),") is used.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"propClassId1, ..., propClassIdN")),(0,i.kt)("p",{parentName:"li"},"  List of names of ",(0,i.kt)("a",{parentName:"p",href:"/next/Built-in_classes"},"builtin classes")," of the imported columns.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"propAlias1, ..., propAliasN")),(0,i.kt)("p",{parentName:"li"},"  Names of local parameters into which columns (fields) of data are imported. Simple IDs. If the name is not specified, then the name of the column (field) in the source file will be used as the parameter name.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"NULL")),(0,i.kt)("p",{parentName:"li"},"  Keyword. Specifies that ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL")," values during import (if the imported format supports them) will not be replaced with default values (for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," for numbers, the empty string for strings, etc. )."))),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"import()  {\n\n    LOCAL xlsFile = EXCELFILE ();\n\n    LOCAL field1 = BPSTRING[50] (INTEGER);\n    LOCAL field2 = BPSTRING[50] (INTEGER);\n    LOCAL field3 = BPSTRING[50] (INTEGER);\n    LOCAL field4 = BPSTRING[50] (INTEGER);\n\n    LOCAL headField1 = BPSTRING[50] ();\n    LOCAL headField2 = BPSTRING[50] ();\n\n    INPUT f = EXCELFILE DO {\n        IMPORT XLS SHEET 2 FROM f TO field1 = C, field2, field3 = F, field4 = A;\n        IMPORT XLS SHEET ALL FROM f TO field1 = C, field2, field3 = F, field4 = A;\n\n        FOR imported(INTEGER i) DO { // imported property - a system property for iterating data\n            MESSAGE 'field1 value = ' + field1(i);\n            MESSAGE 'field2 value = ' + field2(i);\n            MESSAGE 'field3 value = ' + field3(i);\n            MESSAGE 'field4 value = ' + field4(i);\n       }\n    }\n\n    LOCAL t = FILE ();\n    EXTERNAL SQL 'jdbc:postgresql://localhost/test?user=postgres&password=12345' EXEC 'SELECT x.a,x.b,x.c,x.d FROM orders x WHERE x.id = $1;' PARAMS '4553' TO t;\n    // import with FIELDS option\n    IMPORT FROM t() FIELDS INTEGER a, DATE b, BPSTRING[50] c, BPSTRING[50] d DO        \n        NEW o = Order {\n            number(o) <- a;\n            date(o) <- b;\n            customer(o) <- c;\n            // finding currency with this name\n            currency(o) <- GROUP MAX Currency currency IF name(currency) = d; \n        }\n\n\n    INPUT f = FILE DO\n        IMPORT CSV '*' HEADER CHARSET 'utf-8' FROM f TO field1 = C, field2, field3 = F, field4 = A;\n    INPUT f = FILE DO\n        IMPORT XML ATTR FROM f TO field1, field2;\n    INPUT f = FILE DO\n        IMPORT XML ROOT 'element' ATTR FROM f TO field1, field2;\n    INPUT f = FILE DO\n        IMPORT XML ATTR FROM f TO() headField1, headField2;\n\n    INPUT f = FILE DO\n        INPUT memo = FILE DO\n            IMPORT DBF MEMO memo FROM f TO field1 = 'DBFField1', field2 = 'DBFField2';\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"\ndate = DATA DATE (INTEGER);\nsku = DATA BPSTRING[50] (INTEGER);\nprice = DATA NUMERIC[14,2] (INTEGER);\norder = DATA INTEGER (INTEGER);\nFORM import\n    OBJECTS o = INTEGER // orders\n    OBJECTS od = INTEGER // order lines\n    PROPERTIES (o) dateOrder = date // importing the date from the dateOrder field\n    PROPERTIES (od) sku = sku, price = price // importing product quantity from sku and price fields\n    FILTERS order(od) = o // writing the top order to order\n\n;\n\nimportForm()  {\n    INPUT f = FILE DO {\n        IMPORT import JSON FROM f;\n        SHOW import; // showing what was imported\n\n        // creating objects in the database\n        FOR DATE date = date(INTEGER io) NEW o = Order DO {\n            date(o) <- date;\n            FOR order(INTEGER iod) = io NEW od = OrderDetail DO {\n                price(od) <- price(iod);\n                sku(od) <- GROUP MAX Sku sku IF name(sku) = sku(iod); // finding sku with this name\n            }\n        }\n    }\n}\n")))}f.isMDXComponent=!0}}]);