"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[23865],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},77374:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var n=r(83117),a=(r(67294),r(3905));const o={title:"READ operator"},i=void 0,p={unversionedId:"READ_operator",id:"READ_operator",title:"READ operator",description:"The READ operator creates an action that reads a file to a property from an external resource.",source:"@site/docs/READ_operator.md",sourceDirName:".",slug:"/READ_operator",permalink:"/next/READ_operator",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/READ_operator.md",tags:[],version:"current",lastUpdatedAt:1624529220,formattedLastUpdatedAt:"Jun 24, 2021",frontMatter:{title:"READ operator"},sidebar:"learn",previous:{title:"PRINT operator",permalink:"/next/PRINT_operator"},next:{title:"REQUEST operator",permalink:"/next/REQUEST_operator"}},l={},s=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}],c={toc:s};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"READ")," operator creates an ",(0,a.kt)("a",{parentName:"p",href:"/next/Actions"},"action")," that ",(0,a.kt)("a",{parentName:"p",href:"/next/Read_file_READ"},"reads a file")," to a ",(0,a.kt)("a",{parentName:"p",href:"/next/Properties"},"property")," from an external resource."),(0,a.kt)("h3",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"READ [CLIENT [DIALOG]] urlExpr [TO propertyId]\n")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"READ")," operator creates an action that reads a file from an external resource at the URL specified, and then writes the result file to the specified property."),(0,a.kt)("p",null,"The following URL types are supported: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[file://]path_to_file\n[s]ftp://username:password[;charset]@host:port[/path_to_file][?passivemode=true|false]\n")),(0,a.kt)("p",null,"If the value of the property to which the file is written belongs to the ",(0,a.kt)("inlineCode",{parentName:"p"},"FILE")," class, the file extension from the URL is also written to its value along with the file."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"CLIENT")),(0,a.kt)("p",{parentName:"li"},"  Keyword. If specified, the action will be executed on the client side. By default, the action is executed on the server.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"DIALOG")),(0,a.kt)("p",{parentName:"li"},"  Keyword. If specified, before writing the file a dialog will be shown in which the user can change the specified URL. This can be used only when writing to the disk (the URL type is file). By default, the dialog is not shown. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"urlExpr")),(0,a.kt)("p",{parentName:"li"},"  An ",(0,a.kt)("a",{parentName:"p",href:"/next/Expression"},"expression")," whose value is the URL from which to read. The value of the expression must be a string type.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"propertyId")),(0,a.kt)("p",{parentName:"li"},"  The ",(0,a.kt)("a",{parentName:"p",href:"/next/IDs#propertyid"},"ID of the property")," to which read data should be written. This property must not have parameters and its value must be of a file class (",(0,a.kt)("inlineCode",{parentName:"p"},"FILE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"RAWFILE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"JSONFILE"),", etc.). If this property is not specified, the ",(0,a.kt)("inlineCode",{parentName:"p"},"System.exportFile")," property is used by default."))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"readFiles()  {\n\n    LOCAL importFile = FILE ();\n\n    //reading from FTP\n    READ 'ftp://ftp.lsfusion.org/file.xlsx' TO importFile;\n    //reading from SFTP\n    READ 'sftp://sftp.lsfusion.org/file.xlsx' TO importFile;\n    //reading from FILE\n    READ 'D://lsfusion/file.xlsx' TO importFile;\n    READ 'file://D://lsfusion/file.xlsx' TO importFile;\n}\n\nconnectionString = DATA STRING[100]();\nimportXls 'Import markups'()  {\n    LOCAL importFile = FILE ();\n    READ connectionString() + '@SELECT field1, field2 FROM myTable' TO importFile;\n\n    LOCAL field1 = INTEGER (INTEGER);\n    LOCAL field2 = BPSTRING[10] (INTEGER);\n    IMPORT TABLE FROM importFile() TO field1, field2;\n}\n")))}f.isMDXComponent=!0}}]);