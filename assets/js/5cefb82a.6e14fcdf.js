"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[14798],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),h=r,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||s;return n?a.createElement(u,i(i({ref:t},c),{},{components:n})):a.createElement(u,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14613:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return p}});var a=n(83117),r=(n(67294),n(3905));const s={title:"Access to an external system (EXTERNAL)"},i=void 0,o={unversionedId:"Access_to_an_external_system_EXTERNAL",id:"Access_to_an_external_system_EXTERNAL",title:"Access to an external system (EXTERNAL)",description:"The operator for accessing an external system executes a specified code in the language/paradigm of the external system specified. In addition, this operator allows passing objects of built-in classes as parameters of this type of call, and also writing the results of calls to the properties specified (without parameters).",source:"@site/docs/Access_to_an_external_system_EXTERNAL.md",sourceDirName:".",slug:"/Access_to_an_external_system_EXTERNAL",permalink:"/next/Access_to_an_external_system_EXTERNAL",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Access_to_an_external_system_EXTERNAL.md",tags:[],version:"current",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"7/7/2021",frontMatter:{title:"Access to an external system (EXTERNAL)"},sidebar:"learn",previous:{title:"Access from an internal system",permalink:"/next/Access_from_an_internal_system"},next:{title:"Access to an internal system (INTERNAL, FORMULA)",permalink:"/next/Access_to_an_internal_system_INTERNAL_FORMULA"}},l={},p=[{value:"HTTP - web server HTTP request",id:"http",level:2},{value:"Parameters",id:"url",level:3},{value:"Results",id:"results",level:3},{value:"Multiple results/parameters in BODY",id:"multiple-resultsparameters-in-body",level:3},{value:"SQL - executing an SQL server command",id:"sql---executing-an-sql-server-command",level:2},{value:"Parameters",id:"table",level:3},{value:"Results",id:"results-1",level:3},{value:"LSF - calling an action of another lsFusion server",id:"lsf---calling-an-action-of-another-lsfusion-server",level:2},{value:"Language",id:"language",level:2},{value:"Examples",id:"examples",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The operator for ",(0,r.kt)("em",{parentName:"p"},"accessing an external system")," executes a specified code in the language/paradigm of the external system specified. In addition, this operator allows passing objects of ",(0,r.kt)("a",{parentName:"p",href:"/next/Built-in_classes"},"built-in classes")," as parameters of this type of call, and also writing the ",(0,r.kt)("em",{parentName:"p"},"results")," of calls to the properties specified (without parameters)."),(0,r.kt)("p",null,"Currently the platform supports the following types of interactions/external systems:"),(0,r.kt)("h2",{id:"http"},"HTTP - web server HTTP request"),(0,r.kt)("p",null,"For this type of interaction, only the request string (URL) is specified, which simultaneously determines both the server address and the request to be executed."),(0,r.kt)("h3",{id:"url"},"Parameters"),(0,r.kt)("p",null,"Parameters can be passed both in the request string (to refer to the parameter, the special character ",(0,r.kt)("inlineCode",{parentName:"p"},"$")," and the number of this parameter, starting with ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),", are used) and in its body (BODY). It is assumed that all parameters not used in the request string are passed to BODY."),(0,r.kt)("p",null,"When processing file class parameters (",(0,r.kt)("inlineCode",{parentName:"p"},"FILE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PDFFILE"),", etc.) to BODY, the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Media_type"},"content type")," of the parameter, depending on the file extension, is determined in accordance with the following ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lsfusion/platform/blob/master/api/src/main/resources/MIMETypes.properties"},"table"),". If the file extension is not found in this table, the content type is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"application/<file extension>"),"."),(0,r.kt)("p",null,"The file extension in this case is determined automatically, similarly to the ",(0,r.kt)("a",{parentName:"p",href:"/next/WRITE_operator"},(0,r.kt)("inlineCode",{parentName:"a"},"WRITE")," operator"),"."),(0,r.kt)("p",null,"In each of the three cases above, if the parameter value is ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," is substituted for the file extension in the content type (for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"application/null"),"), and an empty string is passed as the parameter itself."),(0,r.kt)("p",null,"Parameters of classes that differ from those of files are converted into strings and are passed as a ",(0,r.kt)("inlineCode",{parentName:"p"},"text/plain")," content type. ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL")," values are passed as empty strings."),(0,r.kt)("p",null,"If necessary, using the special ",(0,r.kt)("inlineCode",{parentName:"p"},"HEADERS")," option you can define the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_HTTP_header_fields"},"headers")," of the request being executed. To do this, you need to specify a property with exactly one parameter of the string class in which the header will be stored, and with the value of the string class in which the value of this header will be stored."),(0,r.kt)("h3",{id:"results"},"Results"),(0,r.kt)("p",null,"When processing a request response, results with a content type from the following ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lsfusion/platform/blob/master/api/src/main/resources/MIMETypes.properties"},"table")," are considered files, and can only be written to properties whose value class is ",(0,r.kt)("inlineCode",{parentName:"p"},"FILE"),". During this process, the corresponding file extension is taken from the table mentioned above. If a particular content type is not found in the table, but it starts with ",(0,r.kt)("inlineCode",{parentName:"p"},"application"),", the result is still considered a file, and the file extension is taken from the right part of the content type (for example, for the ",(0,r.kt)("inlineCode",{parentName:"p"},"application/abc")," content type it will be ",(0,r.kt)("inlineCode",{parentName:"p"},"abc"),"). Results with the ",(0,r.kt)("inlineCode",{parentName:"p"},"application/null")," content type are considered equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,r.kt)("p",null,"Results with content types different from the ones mentioned above are considered strings and when writing are automatically converted into the classes with the value of the properties to which they are being written. Empty strings are converted to ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,r.kt)("p",null,"If necessary, using the special ",(0,r.kt)("inlineCode",{parentName:"p"},"HEADERSTO")," option you can write the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_HTTP_header_fields"},"headers")," of the request response received to the specified property. This property must have exactly one parameter of the string class in which the header will be stored, and the value of the string class in which the value of this header will be stored."),(0,r.kt)("p",null,"All results are returned in UTF-8 encoding."),(0,r.kt)("h3",{id:"multiple-resultsparameters-in-body"},"Multiple results/parameters in BODY"),(0,r.kt)("p",null,"If more than one parameter is passed to BODY, then:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the option ",(0,r.kt)("inlineCode",{parentName:"li"},"BODYURL")," is specified, the BODY content type on transmission is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"application/x-www-form-urlencoded"),", and the specified string, in which the parameters are encoded as if they were ",(0,r.kt)("a",{parentName:"li",href:"#url"},"passed in the request string"),", is passed as BODY."),(0,r.kt)("li",{parentName:"ul"},"Otherwise, during transmission the response content type is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"multipart/mixed")," and the parameters are passed as components of this BODY. ")),(0,r.kt)("p",null,"In turn, if the request response type is ",(0,r.kt)("inlineCode",{parentName:"p"},"multipart/*")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded"),", it will be split into parts, and each part will be considered a separate execution result. In this case, the order of these results is equal to the order of the corresponding parts in the request response."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Note that the processing of parameters and request results is largely similar to their processing during ",(0,r.kt)("a",{parentName:"p",href:"/next/Access_from_an_external_system"},"access from an external system")," over the HTTP protocol (here parameters are processed as results and, conversely, results are processed as parameters)"))),(0,r.kt)("h2",{id:"sql---executing-an-sql-server-command"},"SQL - executing an SQL server command"),(0,r.kt)("p",null,"For this type of interaction, a connection string and the SQL command(s) to be executed are specified. Parameters can be passed both in the connection string and in the SQL command. To access the parameter, the special character ",(0,r.kt)("inlineCode",{parentName:"p"},"$")," and the parameter number are used (starting from ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),")."),(0,r.kt)("h3",{id:"table"},"Parameters"),(0,r.kt)("p",null,"File class parameters (",(0,r.kt)("inlineCode",{parentName:"p"},"FILE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PDFFILE"),", etc.) can be used only in an SQL command (not in the connection string). Furthermore, if any of the parameters, when executed, is a file in ",(0,r.kt)("inlineCode",{parentName:"p"},"TABLE")," format (",(0,r.kt)("inlineCode",{parentName:"p"},"TABLEFILE")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"FILE")," with the extension ",(0,r.kt)("inlineCode",{parentName:"p"},"table"),"), that parameter is considered to be a table and in this case:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"before executing an SQL command, the value of each such parameter is loaded onto the server into a temporary table"),(0,r.kt)("li",{parentName:"ul"},"when substituting parameters, the name of the created temporary table is substituted instead of the parameter value itself")),(0,r.kt)("h3",{id:"results-1"},"Results"),(0,r.kt)("p",null,"The execution results are: for DML requests - numbers equal to the number of processed records; for SELECT requests - files in ",(0,r.kt)("inlineCode",{parentName:"p"},"TABLE")," format (",(0,r.kt)("inlineCode",{parentName:"p"},"FILE")," with the extension ",(0,r.kt)("inlineCode",{parentName:"p"},"table"),") containing the results of these requests. The order of these results is equal to the execution order of the corresponding queries in the SQL command."),(0,r.kt)("p",null,"The predefined ",(0,r.kt)("inlineCode",{parentName:"p"},"LOCAL")," value may be used as the connection string. In this case the connection will be made to the database server used by the platform."),(0,r.kt)("h2",{id:"lsf---calling-an-action-of-another-lsfusion-server"},"LSF - calling an action of another lsFusion server"),(0,r.kt)("p",null,"For this type of interaction, the following things need to be specified: the connection string for connecting to the lsFusion server (or its web server, if any), the action being executed, and the list of properties (without parameters) to whose values the results of the call will be written. The parameters passed must match the parameters of the action being performed by number and by class."),(0,r.kt)("p",null,"The way of defining an action in this type of interaction fully corresponds to the ",(0,r.kt)("a",{parentName:"p",href:"/next/Access_from_an_external_system#actiontype"},"way of defining")," an action during ",(0,r.kt)("a",{parentName:"p",href:"/next/Access_from_an_external_system"},"access from an external system"),"."),(0,r.kt)("p",null,"By default, this type of interaction is implemented via HTTP protocol using the corresponding interfaces for access ",(0,r.kt)("a",{parentName:"p",href:"#http"},"to")," and ",(0,r.kt)("a",{parentName:"p",href:"/next/Access_from_an_external_system#http"},"from")," an external system."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can also use operators for ",(0,r.kt)("a",{parentName:"p",href:"/next/Read_file_READ"},"reading")," and ",(0,r.kt)("a",{parentName:"p",href:"/next/Write_file_WRITE"},"writing")," files to access external systems (if file exchange is the interface for this interaction)."))),(0,r.kt)("h2",{id:"language"},"Language"),(0,r.kt)("p",null,"To declare an action that accesses an external system, use the ",(0,r.kt)("a",{parentName:"p",href:"/next/EXTERNAL_operator"},(0,r.kt)("inlineCode",{parentName:"a"},"EXTERNAL")," operator"),"."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"testExportFile = DATA FILE ();\n\nexternalHTTP()  {\n    EXTERNAL HTTP GET 'https://www.cs.cmu.edu/~chuck/lennapg/len_std.jpg' TO exportFile;\n    open(exportFile());\n\n    // braces are escaped as they are used in internationalization\n    EXTERNAL HTTP 'http://tryonline.lsfusion.org/exec?action=getExamples' \n             PARAMS JSONFILE('\\{\"mode\"=1,\"locale\"=\"en\"\\}')\n             TO exportFile; \n    IMPORT FROM exportFile() FIELDS () TEXT caption, TEXT code DO\n        MESSAGE 'Example : ' + caption + ', code : ' + code;\n\n    // passes the second and third parameters to BODY url-encoded\n    EXTERNAL HTTP 'http://tryonline.lsfusion.org/exec?action=doSomething&someprm=$1' \n             BODYURL 'otherprm=$2&andonemore=$3' \n             PARAMS 1,2,'3'; \n}\nexternalSQL ()  {\n    // getting all barcodes of products with the name meat\n    EXPORT TABLE FROM bc=barcode(Article a) WHERE name(a) LIKE '%Meat%';\n    // reading prices for read barcodes\n    EXTERNAL SQL 'jdbc:mysql://$1/test?user=root&password=' \n             EXEC 'select price AS pc, articles.barcode AS brc from $2 x JOIN articles ON x.bc=articles.barcode' \n             PARAMS 'localhost',exportFile() \n             TO exportFile; \n\n    // writing prices for all products with received barcodes\n    LOCAL price = INTEGER (INTEGER);\n    LOCAL barcode = STRING[30] (INTEGER);\n    IMPORT FROM exportFile() TO price=pc,barcode=brc;\n    FOR barcode(Article a) = barcode(INTEGER i) DO\n        price(a) <- price(i);\n}\nexternalLSF()  {\n    EXTERNAL LSF 'http://localhost:7651' EXEC 'System.testAction[]';\n};\n")))}d.isMDXComponent=!0}}]);