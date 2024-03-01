"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[71335],{5871:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=s(74848),r=s(28453);const i={title:"Access to an external system (EXTERNAL)"},a=void 0,o={id:"Access_to_an_external_system_EXTERNAL",title:"Access to an external system (EXTERNAL)",description:"The operator for accessing an external system executes a specified code in the language/paradigm of the external system specified. In addition, this operator allows passing objects of built-in classes as parameters of this type of call, and also writing the results of calls to the properties specified (without parameters).",source:"@site/versioned_docs/version-v5/Access_to_an_external_system_EXTERNAL.md",sourceDirName:".",slug:"/Access_to_an_external_system_EXTERNAL",permalink:"/Access_to_an_external_system_EXTERNAL",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/Access_to_an_external_system_EXTERNAL.md",tags:[],version:"v5",lastUpdatedAt:1685108136,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{title:"Access to an external system (EXTERNAL)"},sidebar:"learn",previous:{title:"Access from an internal system",permalink:"/Access_from_an_internal_system"},next:{title:"Access to an internal system (INTERNAL, FORMULA)",permalink:"/Access_to_an_internal_system_INTERNAL_FORMULA"}},c={},l=[{value:"HTTP - web server HTTP request",id:"http",level:2},{value:"Parameters",id:"url",level:3},{value:"Results",id:"results",level:3},{value:"Multiple results/parameters in BODY",id:"multiple-resultsparameters-in-body",level:3},{value:"SQL - executing an SQL server command",id:"sql---executing-an-sql-server-command",level:2},{value:"Parameters",id:"table",level:3},{value:"Results",id:"results-1",level:3},{value:"LSF - calling an action of another lsFusion server",id:"lsf---calling-an-action-of-another-lsfusion-server",level:2},{value:"Language",id:"language",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The operator for ",(0,n.jsx)(t.em,{children:"accessing an external system"})," executes a specified code in the language/paradigm of the external system specified. In addition, this operator allows passing objects of ",(0,n.jsx)(t.a,{href:"/Built-in_classes",children:"built-in classes"})," as parameters of this type of call, and also writing the ",(0,n.jsx)(t.em,{children:"results"})," of calls to the properties specified (without parameters)."]}),"\n",(0,n.jsx)(t.p,{children:"Currently the platform supports the following types of interactions/external systems:"}),"\n",(0,n.jsx)(t.h2,{id:"http",children:"HTTP - web server HTTP request"}),"\n",(0,n.jsx)(t.p,{children:"For this type of interaction, only the request string (URL) is specified, which simultaneously determines both the server address and the request to be executed."}),"\n",(0,n.jsx)(t.h3,{id:"url",children:"Parameters"}),"\n",(0,n.jsxs)(t.p,{children:["Parameters can be passed both in the request string (to refer to the parameter, the special character ",(0,n.jsx)(t.code,{children:"$"})," and the number of this parameter, starting with ",(0,n.jsx)(t.code,{children:"1"}),", are used) and in its body (BODY). It is assumed that all parameters not used in the request string are passed to BODY."]}),"\n",(0,n.jsxs)(t.p,{children:["When processing file class parameters (",(0,n.jsx)(t.code,{children:"FILE"}),", ",(0,n.jsx)(t.code,{children:"PDFFILE"}),", etc.) to BODY, the ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Media_type",children:"content type"})," of the parameter, depending on the file extension, is determined in accordance with the following ",(0,n.jsx)(t.a,{href:"https://github.com/lsfusion/platform/blob/master/api/src/main/resources/MIMETypes.properties",children:"table"}),". If the file extension is not found in this table, the content type is set to ",(0,n.jsx)(t.code,{children:"application/<file extension>"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The file extension in this case is determined automatically, similarly to the ",(0,n.jsxs)(t.a,{href:"/WRITE_operator",children:[(0,n.jsx)(t.code,{children:"WRITE"})," operator"]}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["In each of the three cases above, if the parameter value is ",(0,n.jsx)(t.code,{children:"NULL"}),", ",(0,n.jsx)(t.code,{children:"null"})," is substituted for the file extension in the content type (for example, ",(0,n.jsx)(t.code,{children:"application/null"}),"), and an empty string is passed as the parameter itself."]}),"\n",(0,n.jsxs)(t.p,{children:["Parameters of classes that differ from those of files are converted into strings and are passed as a ",(0,n.jsx)(t.code,{children:"text/plain"})," content type. ",(0,n.jsx)(t.code,{children:"NULL"})," values are passed as empty strings."]}),"\n",(0,n.jsxs)(t.p,{children:["If necessary, using the special ",(0,n.jsx)(t.code,{children:"HEADERS"})," option you can define the ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/List_of_HTTP_header_fields",children:"headers"})," of the request being executed. To do this, you need to specify a property with exactly one parameter of the string class in which the header will be stored, and with the value of the string class in which the value of this header will be stored."]}),"\n",(0,n.jsx)(t.h3,{id:"results",children:"Results"}),"\n",(0,n.jsxs)(t.p,{children:["When processing a request response, results with a content type from the following ",(0,n.jsx)(t.a,{href:"https://github.com/lsfusion/platform/blob/master/api/src/main/resources/MIMETypes.properties",children:"table"})," are considered files, and can only be written to properties whose value class is ",(0,n.jsx)(t.code,{children:"FILE"}),". During this process, the corresponding file extension is taken from the table mentioned above. If a particular content type is not found in the table, but it starts with ",(0,n.jsx)(t.code,{children:"application"}),", the result is still considered a file, and the file extension is taken from the right part of the content type (for example, for the ",(0,n.jsx)(t.code,{children:"application/abc"})," content type it will be ",(0,n.jsx)(t.code,{children:"abc"}),"). Results with the ",(0,n.jsx)(t.code,{children:"application/null"})," content type are considered equal to ",(0,n.jsx)(t.code,{children:"NULL"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Results with content types different from the ones mentioned above are considered strings and when writing are automatically converted into the classes with the value of the properties to which they are being written. Empty strings are converted to ",(0,n.jsx)(t.code,{children:"NULL"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["If necessary, using the special ",(0,n.jsx)(t.code,{children:"HEADERSTO"})," option you can write the ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/List_of_HTTP_header_fields",children:"headers"})," of the request response received to the specified property. This property must have exactly one parameter of the string class in which the header will be stored, and the value of the string class in which the value of this header will be stored."]}),"\n",(0,n.jsx)(t.p,{children:"All results are returned in UTF-8 encoding."}),"\n",(0,n.jsx)(t.h3,{id:"multiple-resultsparameters-in-body",children:"Multiple results/parameters in BODY"}),"\n",(0,n.jsx)(t.p,{children:"If more than one parameter is passed to BODY, then:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["If the option ",(0,n.jsx)(t.code,{children:"BODYURL"})," is specified, the BODY content type on transmission is set to ",(0,n.jsx)(t.code,{children:"application/x-www-form-urlencoded"}),", and the specified string, in which the parameters are encoded as if they were ",(0,n.jsx)(t.a,{href:"#url",children:"passed in the request string"}),", is passed as BODY."]}),"\n",(0,n.jsxs)(t.li,{children:["Otherwise, during transmission the response content type is set to ",(0,n.jsx)(t.code,{children:"multipart/mixed"})," and the parameters are passed as components of this BODY."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["In turn, if the request response type is ",(0,n.jsx)(t.code,{children:"multipart/*"})," or ",(0,n.jsx)(t.code,{children:"application/x-www-form-urlencoded"}),", it will be split into parts, and each part will be considered a separate execution result. In this case, the order of these results is equal to the order of the corresponding parts in the request response."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Note that the processing of parameters and request results is largely similar to their processing during ",(0,n.jsx)(t.a,{href:"/Access_from_an_external_system",children:"access from an external system"})," over the HTTP protocol (here parameters are processed as results and, conversely, results are processed as parameters)"]})}),"\n",(0,n.jsx)(t.h2,{id:"sql---executing-an-sql-server-command",children:"SQL - executing an SQL server command"}),"\n",(0,n.jsxs)(t.p,{children:["For this type of interaction, a connection string and the SQL command(s) to be executed are specified. Parameters can be passed both in the connection string and in the SQL command. To access the parameter, the special character ",(0,n.jsx)(t.code,{children:"$"})," and the parameter number are used (starting from ",(0,n.jsx)(t.code,{children:"1"}),")."]}),"\n",(0,n.jsx)(t.h3,{id:"table",children:"Parameters"}),"\n",(0,n.jsxs)(t.p,{children:["File class parameters (",(0,n.jsx)(t.code,{children:"FILE"}),", ",(0,n.jsx)(t.code,{children:"PDFFILE"}),", etc.) can be used only in an SQL command (not in the connection string). Furthermore, if any of the parameters, when executed, is a file in ",(0,n.jsx)(t.code,{children:"TABLE"})," format (",(0,n.jsx)(t.code,{children:"TABLEFILE"})," or ",(0,n.jsx)(t.code,{children:"FILE"})," with the extension ",(0,n.jsx)(t.code,{children:"table"}),"), that parameter is considered to be a table and in this case:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"before executing an SQL command, the value of each such parameter is loaded onto the server into a temporary table"}),"\n",(0,n.jsx)(t.li,{children:"when substituting parameters, the name of the created temporary table is substituted instead of the parameter value itself"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"results-1",children:"Results"}),"\n",(0,n.jsxs)(t.p,{children:["The execution results are: for DML requests - numbers equal to the number of processed records; for SELECT requests - files in ",(0,n.jsx)(t.code,{children:"TABLE"})," format (",(0,n.jsx)(t.code,{children:"FILE"})," with the extension ",(0,n.jsx)(t.code,{children:"table"}),") containing the results of these requests. The order of these results is equal to the execution order of the corresponding queries in the SQL command."]}),"\n",(0,n.jsxs)(t.p,{children:["The predefined ",(0,n.jsx)(t.code,{children:"LOCAL"})," value may be used as the connection string. In this case the connection will be made to the database server used by the platform."]}),"\n",(0,n.jsx)(t.h2,{id:"lsf---calling-an-action-of-another-lsfusion-server",children:"LSF - calling an action of another lsFusion server"}),"\n",(0,n.jsx)(t.p,{children:"For this type of interaction, the following things need to be specified: the connection string for connecting to the lsFusion server (or its web server, if any), the action being executed, and the list of properties (without parameters) to whose values the results of the call will be written. The parameters passed must match the parameters of the action being performed by number and by class."}),"\n",(0,n.jsxs)(t.p,{children:["The way of defining an action in this type of interaction fully corresponds to the ",(0,n.jsx)(t.a,{href:"/Access_from_an_external_system#actiontype",children:"way of defining"})," an action during ",(0,n.jsx)(t.a,{href:"/Access_from_an_external_system",children:"access from an external system"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["By default, this type of interaction is implemented via HTTP protocol using the corresponding interfaces for access ",(0,n.jsx)(t.a,{href:"#http",children:"to"})," and ",(0,n.jsx)(t.a,{href:"/Access_from_an_external_system#http",children:"from"})," an external system."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["You can also use operators for ",(0,n.jsx)(t.a,{href:"/Read_file_READ",children:"reading"})," and ",(0,n.jsx)(t.a,{href:"/Write_file_WRITE",children:"writing"})," files to access external systems (if file exchange is the interface for this interaction)."]})}),"\n",(0,n.jsx)(t.h2,{id:"language",children:"Language"}),"\n",(0,n.jsxs)(t.p,{children:["To declare an action that accesses an external system, use the ",(0,n.jsxs)(t.a,{href:"/EXTERNAL_operator",children:[(0,n.jsx)(t.code,{children:"EXTERNAL"})," operator"]}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lsf",children:"testExportFile = DATA FILE ();\n\nexternalHTTP()  {\n    EXTERNAL HTTP GET 'https://www.cs.cmu.edu/~chuck/lennapg/len_std.jpg' TO exportFile;\n    open(exportFile());\n\n    // braces are escaped as they are used in internationalization\n    EXTERNAL HTTP 'http://tryonline.lsfusion.org/exec?action=getExamples' \n             PARAMS JSONFILE('\\{\"mode\"=1,\"locale\"=\"en\"\\}')\n             TO exportFile; \n    IMPORT FROM exportFile() FIELDS () TEXT caption, TEXT code DO\n        MESSAGE 'Example : ' + caption + ', code : ' + code;\n\n    // passes the second and third parameters to BODY url-encoded\n    EXTERNAL HTTP 'http://tryonline.lsfusion.org/exec?action=doSomething&someprm=$1' \n             BODYURL 'otherprm=$2&andonemore=$3' \n             PARAMS 1,2,'3'; \n}\nexternalSQL ()  {\n    // getting all barcodes of products with the name meat\n    EXPORT TABLE FROM bc=barcode(Article a) WHERE name(a) LIKE '%Meat%';\n    // reading prices for read barcodes\n    EXTERNAL SQL 'jdbc:mysql://$1/test?user=root&password=' \n             EXEC 'select price AS pc, articles.barcode AS brc from $2 x JOIN articles ON x.bc=articles.barcode' \n             PARAMS 'localhost',exportFile() \n             TO exportFile; \n\n    // writing prices for all products with received barcodes\n    LOCAL price = INTEGER (INTEGER);\n    LOCAL barcode = STRING[30] (INTEGER);\n    IMPORT FROM exportFile() TO price=pc,barcode=brc;\n    FOR barcode(Article a) = barcode(INTEGER i) DO\n        price(a) <- price(i);\n}\nexternalLSF()  {\n    EXTERNAL LSF 'http://localhost:7651' EXEC 'System.testAction[]';\n};\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var n=s(96540);const r={},i=n.createContext(r);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);