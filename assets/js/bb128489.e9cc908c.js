"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["24276"],{57049:function(e,n,r){r.r(n),r.d(n,{default:()=>p,frontMatter:()=>o,metadata:()=>s,assets:()=>a,toc:()=>l,contentTitle:()=>c});var s=JSON.parse('{"id":"EXTERNAL_operator","title":"EXTERNAL operator","description":"The EXTERNAL operator creates an action that implements accessing to an external system.","source":"@site/versioned_docs/version-v4/EXTERNAL_operator.md","sourceDirName":".","slug":"/EXTERNAL_operator","permalink":"/v4/EXTERNAL_operator","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v4/docs/en/EXTERNAL_operator.md","tags":[],"version":"v4","lastUpdatedAt":1708525070000,"frontMatter":{"title":"EXTERNAL operator"},"sidebar":"learn","previous":{"title":"EXPORT operator","permalink":"/v4/EXPORT_operator"},"next":{"title":"FOR operator","permalink":"/v4/FOR_operator"}}'),t=r("85893"),i=r("50065");let o={title:"EXTERNAL operator"},c=void 0,a={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function d(e){let n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"EXTERNAL"})," operator creates an ",(0,t.jsx)(n.a,{href:"/v4/Actions",children:"action"})," that implements ",(0,t.jsx)(n.a,{href:"/v4/Access_to_an_external_system_EXTERNAL",children:"accessing to an external system"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"EXTERNAL externalCall [PARAMS paramExpr1, ..., paramExprN] [TO propertyId1. ..., propertyIdM]\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"externalCall"})," - an external call defined by one of the following syntaxes:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"HTTP [requestType] connectionStrExpr [BODYURL bodyStrExpr] [HEADERS headersPropertyId] [COOKIES cookiesPropertyId] [HEADERSTO headersToPropertyId] [COOKIESTO cookiesToPropertyId]\nSQL connectionStrExpr EXEC execStrExpr\nLSF connectionStrExpr lsfExecType execStrExpr\n"})}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"EXTERNAL"})," operator creates an action that makes a request to an external system."]}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"HTTP"})}),"\n",(0,t.jsx)(n.p,{children:"Keyword. Specifies that the operator is executing a web server HTTP request."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"requestType"})}),"\n",(0,t.jsxs)(n.p,{children:["Keyword. Defines the ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods",children:"method"})," of the HTTP request:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"POST"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"GET"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"PUT"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"DELETE"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The default value is ",(0,t.jsx)(n.code,{children:"POST"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"SQL"})}),"\n",(0,t.jsx)(n.p,{children:"Keyword. Specifies that the operator executes an SQL server command or commands."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"LSF"})}),"\n",(0,t.jsx)(n.p,{children:"Keyword. Specifies that the operator executes an action of another lsFusion server."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"connectionStrExpr"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/v4/Expression",children:"Expression"}),". ",(0,t.jsx)(n.code,{children:"HTTP"}),": http request string. ",(0,t.jsx)(n.code,{children:"SQL"}),": DBMS connection string. ",(0,t.jsx)(n.code,{children:"LSF"}),": URL of an lsFusion server (application)."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"bodyStrExpr"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/v4/Expression",children:"Expression"}),". Continuation of http request string in BODY. Relevant when BODY has > 1 parameter. If not specified, the parameters are passed in multipart format."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"headersPropertyId"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"headersToPropertyId"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/v4/IDs#propertyid",children:"Property ID"})," containing request headers. The property must have exactly one parameter: the name of the request's header. This parameter must belong to a string class. If the property is not specified, headers are ignored/not set."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"cookiesPropertyId"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"cookiesToPropertyId"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/v4/IDs#propertyid",children:"Property ID"})," containing request cookies. The property must have exactly one parameter: the name of the cookie. This parameter must belong to a string class. If the property is not specified, cookies are ignored/not set."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"lsfExecType"})}),"\n",(0,t.jsxs)(n.p,{children:["Keyword. Specifies the ",(0,t.jsx)(n.a,{href:"/v4/Access_from_an_external_system#actiontype",children:"way of defining"})," the action:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"EXEC"})," \u2013 the name of the action is specified."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"EVAL"})," \u2013 the code of the action is specified in the ",(0,t.jsx)(n.strong,{children:"lsFusion"})," language. It is assumed that this code contains a declaration of an action named ",(0,t.jsx)(n.code,{children:"run"}),". This is the action that will be called."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"EVAL ACTION"})," \u2013 the action code in the ",(0,t.jsx)(n.strong,{children:"lsFusion"})," language is specified. To access a parameter, the special character ",(0,t.jsx)(n.code,{children:"$"})," and the parameter number (starting from ",(0,t.jsx)(n.code,{children:"1"}),") are used."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"execStrExpr"})}),"\n",(0,t.jsxs)(n.p,{children:["Expression. ",(0,t.jsx)(n.code,{children:"SQL"}),": SQL query command(s). ",(0,t.jsx)(n.code,{children:"LSF"}),": The name of an action or code, depending on how the action is defined."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"paramExpr1, ..., paramExprN"})}),"\n",(0,t.jsx)(n.p,{children:"List of expressions whose values will be used as the call parameters."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"propertyId1, ..., propertyIdM"})}),"\n",(0,t.jsx)(n.p,{children:"List of property IDs (without parameters) to which the results will be written."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"testExportFile = DATA FILE ();\n\nexternalHTTP()  {\n    EXTERNAL HTTP GET 'https://www.cs.cmu.edu/~chuck/lennapg/len_std.jpg' TO exportFile;\n    open(exportFile());\n    // braces are escaped as they are used in internationalization\n    EXTERNAL HTTP 'http://tryonline.lsfusion.org/exec?action=getExamples' \n             PARAMS JSONFILE('\\{\"mode\"=1,\"locale\"=\"en\"\\}') TO exportFile; \n    IMPORT FROM exportFile() FIELDS () TEXT caption, TEXT code DO\n        MESSAGE 'Example : ' + caption + ', code : ' + code;\n\n    // passes the second and third parameters to BODY url-encoded\n    EXTERNAL HTTP 'http://tryonline.lsfusion.org/exec?action=doSomething&someprm=$1' \n             BODYURL 'otherprm=$2&andonemore=$3' PARAMS 1,2,'3'; \n}\nexternalSQL ()  {\n    // getting all barcodes of products with the name meat\n    EXPORT TABLE FROM bc=barcode(Article a) WHERE name(a) LIKE '%Meat%';\n    // reading prices for read barcodes \n    EXTERNAL SQL 'jdbc:mysql://$1/test?user=root&password=' \n             EXEC 'select price AS pc, articles.barcode AS brc from $2 x JOIN articles ON x.bc=articles.barcode' \n             PARAMS 'localhost', exportFile() \n             TO exportFile; \n\n    // writing prices for all products with received barcodes\n    LOCAL price = INTEGER (INTEGER);\n    LOCAL barcode = STRING[30] (INTEGER);\n    IMPORT FROM exportFile() TO price=pc,barcode=brc;\n    FOR barcode(Article a) = barcode(INTEGER i) DO\n        price(a) <- price(i);\n}\nexternalLSF()  {\n    EXTERNAL LSF 'http://localhost:7651' EXEC 'System.testAction[]';\n};\n"})})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return o}});var s=r(67294);let t={},i=s.createContext(t);function o(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);