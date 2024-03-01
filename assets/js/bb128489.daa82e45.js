"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[84427],{87836:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=n(74848),t=n(28453);const i={title:"EXTERNAL operator"},o=void 0,c={id:"EXTERNAL_operator",title:"EXTERNAL operator",description:"The EXTERNAL operator creates an action that implements accessing to an external system.",source:"@site/versioned_docs/version-v4/EXTERNAL_operator.md",sourceDirName:".",slug:"/EXTERNAL_operator",permalink:"/v4/EXTERNAL_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/EXTERNAL_operator.md",tags:[],version:"v4",lastUpdatedAt:1708525070,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"EXTERNAL operator"},sidebar:"learn",previous:{title:"EXPORT operator",permalink:"/v4/EXPORT_operator"},next:{title:"FOR operator",permalink:"/v4/FOR_operator"}},a={},d=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function l(e){const r={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.code,{children:"EXTERNAL"})," operator creates an ",(0,s.jsx)(r.a,{href:"/v4/Actions",children:"action"})," that implements ",(0,s.jsx)(r.a,{href:"/v4/Access_to_an_external_system_EXTERNAL",children:"accessing to an external system"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"EXTERNAL externalCall [PARAMS paramExpr1, ..., paramExprN] [TO propertyId1. ..., propertyIdM]\n"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"externalCall"})," - an external call defined by one of the following syntaxes:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"HTTP [requestType] connectionStrExpr [BODYURL bodyStrExpr] [HEADERS headersPropertyId] [COOKIES cookiesPropertyId] [HEADERSTO headersToPropertyId] [COOKIESTO cookiesToPropertyId]\r\nSQL connectionStrExpr EXEC execStrExpr\r\nLSF connectionStrExpr lsfExecType execStrExpr\n"})}),"\n",(0,s.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.code,{children:"EXTERNAL"})," operator creates an action that makes a request to an external system."]}),"\n",(0,s.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"HTTP"})}),"\n",(0,s.jsx)(r.p,{children:"Keyword. Specifies that the operator is executing a web server HTTP request."}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"requestType"})}),"\n",(0,s.jsxs)(r.p,{children:["Keyword. Defines the ",(0,s.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods",children:"method"})," of the HTTP request:"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"POST"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"GET"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"PUT"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"DELETE"})}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["The default value is ",(0,s.jsx)(r.code,{children:"POST"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"SQL"})}),"\n",(0,s.jsx)(r.p,{children:"Keyword. Specifies that the operator executes an SQL server command or commands."}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"LSF"})}),"\n",(0,s.jsx)(r.p,{children:"Keyword. Specifies that the operator executes an action of another lsFusion server."}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"connectionStrExpr"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/v4/Expression",children:"Expression"}),". ",(0,s.jsx)(r.code,{children:"HTTP"}),": http request string. ",(0,s.jsx)(r.code,{children:"SQL"}),": DBMS connection string. ",(0,s.jsx)(r.code,{children:"LSF"}),": URL of an lsFusion server (application)."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"bodyStrExpr"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/v4/Expression",children:"Expression"}),". Continuation of http request string in BODY. Relevant when BODY has > 1 parameter. If not specified, the parameters are passed in multipart format."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"headersPropertyId"})}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"headersToPropertyId"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/v4/IDs#propertyid",children:"Property ID"})," containing request headers. The property must have exactly one parameter: the name of the request's header. This parameter must belong to a string class. If the property is not specified, headers are ignored/not set."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"cookiesPropertyId"})}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"cookiesToPropertyId"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/v4/IDs#propertyid",children:"Property ID"})," containing request cookies. The property must have exactly one parameter: the name of the cookie. This parameter must belong to a string class. If the property is not specified, cookies are ignored/not set."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"lsfExecType"})}),"\n",(0,s.jsxs)(r.p,{children:["Keyword. Specifies the ",(0,s.jsx)(r.a,{href:"/v4/Access_from_an_external_system#actiontype",children:"way of defining"})," the action:"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"EXEC"})," \u2013 the name of the action is specified."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"EVAL"})," \u2013 the code of the action is specified in the ",(0,s.jsx)(r.strong,{children:"lsFusion"})," language. It is assumed that this code contains a declaration of an action named ",(0,s.jsx)(r.code,{children:"run"}),". This is the action that will be called."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"EVAL ACTION"})," \u2013 the action code in the ",(0,s.jsx)(r.strong,{children:"lsFusion"})," language is specified. To access a parameter, the special character ",(0,s.jsx)(r.code,{children:"$"})," and the parameter number (starting from ",(0,s.jsx)(r.code,{children:"1"}),") are used."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"execStrExpr"})}),"\n",(0,s.jsxs)(r.p,{children:["Expression. ",(0,s.jsx)(r.code,{children:"SQL"}),": SQL query command(s). ",(0,s.jsx)(r.code,{children:"LSF"}),": The name of an action or code, depending on how the action is defined."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"paramExpr1, ..., paramExprN"})}),"\n",(0,s.jsx)(r.p,{children:"List of expressions whose values will be used as the call parameters."}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"propertyId1, ..., propertyIdM"})}),"\n",(0,s.jsx)(r.p,{children:"List of property IDs (without parameters) to which the results will be written."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-lsf",children:"testExportFile = DATA FILE ();\r\n\r\nexternalHTTP()  {\r\n    EXTERNAL HTTP GET 'https://www.cs.cmu.edu/~chuck/lennapg/len_std.jpg' TO exportFile;\r\n    open(exportFile());\r\n    // braces are escaped as they are used in internationalization\r\n    EXTERNAL HTTP 'http://tryonline.lsfusion.org/exec?action=getExamples' \r\n             PARAMS JSONFILE('\\{\"mode\"=1,\"locale\"=\"en\"\\}') TO exportFile; \r\n    IMPORT FROM exportFile() FIELDS () TEXT caption, TEXT code DO\r\n        MESSAGE 'Example : ' + caption + ', code : ' + code;\r\n\r\n    // passes the second and third parameters to BODY url-encoded\r\n    EXTERNAL HTTP 'http://tryonline.lsfusion.org/exec?action=doSomething&someprm=$1' \r\n             BODYURL 'otherprm=$2&andonemore=$3' PARAMS 1,2,'3'; \r\n}\r\nexternalSQL ()  {\r\n    // getting all barcodes of products with the name meat\r\n    EXPORT TABLE FROM bc=barcode(Article a) WHERE name(a) LIKE '%Meat%';\r\n    // reading prices for read barcodes \r\n    EXTERNAL SQL 'jdbc:mysql://$1/test?user=root&password=' \r\n             EXEC 'select price AS pc, articles.barcode AS brc from $2 x JOIN articles ON x.bc=articles.barcode' \r\n             PARAMS 'localhost', exportFile() \r\n             TO exportFile; \r\n\r\n    // writing prices for all products with received barcodes\r\n    LOCAL price = INTEGER (INTEGER);\r\n    LOCAL barcode = STRING[30] (INTEGER);\r\n    IMPORT FROM exportFile() TO price=pc,barcode=brc;\r\n    FOR barcode(Article a) = barcode(INTEGER i) DO\r\n        price(a) <- price(i);\r\n}\r\nexternalLSF()  {\r\n    EXTERNAL LSF 'http://localhost:7651' EXEC 'System.testAction[]';\r\n};\n"})})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>c});var s=n(96540);const t={},i=s.createContext(t);function o(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);