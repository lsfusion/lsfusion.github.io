(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[90397],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return u}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(r),u=a,N=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return r?n.createElement(N,o(o({ref:t},c),{},{components:r})):n.createElement(N,o({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},70670:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var n=r(74034),a=r(79973),i=(r(67294),r(3905)),o=["components"],p={title:"EXTERNAL operator"},l=void 0,s={unversionedId:"EXTERNAL_operator",id:"version-v4/EXTERNAL_operator",isDocsHomePage:!1,title:"EXTERNAL operator",description:"The EXTERNAL operator creates an action that implements accessing to an external system.",source:"@site/versioned_docs/version-v4/EXTERNAL_operator.md",sourceDirName:".",slug:"/EXTERNAL_operator",permalink:"/EXTERNAL_operator",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/EXTERNAL_operator.md",tags:[],version:"v4",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"7/7/2021",frontMatter:{title:"EXTERNAL operator"},sidebar:"version-v4/learn",previous:{title:"EXPORT operator",permalink:"/EXPORT_operator"},next:{title:"FOR operator",permalink:"/FOR_operator"}},c=[{value:"Syntax",id:"syntax",children:[],level:3},{value:"Description",id:"description",children:[],level:3},{value:"Parameters",id:"parameters",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],m={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"EXTERNAL")," operator creates an ",(0,i.kt)("a",{parentName:"p",href:"/Actions"},"action")," that implements ",(0,i.kt)("a",{parentName:"p",href:"/Access_to_an_external_system_EXTERNAL"},"accessing to an external system"),". "),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"EXTERNAL externalCall [PARAMS paramExpr1, ..., paramExprN] [TO propertyId1. ..., propertyIdM]\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"externalCall")," - an external call defined by one of the following syntaxes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"HTTP [requestType] connectionStrExpr [BODYURL bodyStrExpr] [HEADERS headersPropertyId] [COOKIES cookiesPropertyId] [HEADERSTO headersToPropertyId] [COOKIESTO cookiesToPropertyId]\nSQL connectionStrExpr EXEC execStrExpr\nLSF connectionStrExpr lsfExecType execStrExpr\n")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"EXTERNAL")," operator creates an action that makes a request to an external system."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"HTTP")),(0,i.kt)("p",{parentName:"li"},"  Keyword. Specifies that the operator is executing a web server HTTP request.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"requestType")),(0,i.kt)("p",{parentName:"li"},"  Keyword. Defines the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods"},"method")," of the HTTP request:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"POST")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PUT")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DELETE"))),(0,i.kt)("p",{parentName:"li"},"The default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"POST"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"SQL")),(0,i.kt)("p",{parentName:"li"},"  Keyword. Specifies that the operator executes an SQL server command or commands.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"LSF")),(0,i.kt)("p",{parentName:"li"},"  Keyword. Specifies that the operator executes an action of another lsFusion server.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"connectionStrExpr"),"  "),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("a",{parentName:"p",href:"/Expression"},"Expression"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP"),": http request string. ",(0,i.kt)("inlineCode",{parentName:"p"},"SQL"),": DBMS connection string. ",(0,i.kt)("inlineCode",{parentName:"p"},"LSF"),": URL of an lsFusion server (application).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"bodyStrExpr")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("a",{parentName:"p",href:"/Expression"},"Expression"),". Continuation of http request string in BODY. Relevant when BODY has > 1 parameter. If not specified, the parameters are passed in multipart format.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"headersPropertyId"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"headersToPropertyId")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("a",{parentName:"p",href:"/IDs#propertyid"},"Property ID")," containing request headers. The property must have exactly one parameter: the name of the request's header. This parameter must belong to a string class. If the property is not specified, headers are ignored/not set.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"cookiesPropertyId"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"cookiesToPropertyId")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("a",{parentName:"p",href:"/IDs#propertyid"},"Property ID")," containing request cookies. The property must have exactly one parameter: the name of the cookie. This parameter must belong to a string class. If the property is not specified, cookies are ignored/not set.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"lsfExecType")),(0,i.kt)("p",{parentName:"li"},"  Keyword. Specifies the ",(0,i.kt)("a",{parentName:"p",href:"/Access_from_an_external_system#actiontype"},"way of defining")," the action:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EXEC")," \u2013 the name of the action is specified."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EVAL")," \u2013 the code of the action is specified in the ",(0,i.kt)("strong",{parentName:"li"},"lsFusion")," language. It is assumed that this code contains a declaration of an action named ",(0,i.kt)("inlineCode",{parentName:"li"},"run"),". This is the action that will be called."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EVAL ACTION")," \u2013 the action code in the ",(0,i.kt)("strong",{parentName:"li"},"lsFusion")," language is specified. To access a parameter, the special character ",(0,i.kt)("inlineCode",{parentName:"li"},"$")," and the parameter number (starting from ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),") are used."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"execStrExpr"),"  "),(0,i.kt)("p",{parentName:"li"},"  Expression. ",(0,i.kt)("inlineCode",{parentName:"p"},"SQL"),": SQL query command(s). ",(0,i.kt)("inlineCode",{parentName:"p"},"LSF"),": The name of an action or code, depending on how the action is defined.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"paramExpr1, ..., paramExprN")),(0,i.kt)("p",{parentName:"li"},"  List of expressions whose values will be used as the call parameters.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"propertyId1, ..., propertyIdM")),(0,i.kt)("p",{parentName:"li"},"  List of property IDs (without parameters) to which the results will be written."))),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"testExportFile = DATA FILE ();\n\nexternalHTTP()  {\n    EXTERNAL HTTP GET 'https://www.cs.cmu.edu/~chuck/lennapg/len_std.jpg' TO exportFile;\n    open(exportFile());\n    // braces are escaped as they are used in internationalization\n    EXTERNAL HTTP 'http://tryonline.lsfusion.org/exec?action=getExamples' \n             PARAMS JSONFILE('\\{\"mode\"=1,\"locale\"=\"en\"\\}') TO exportFile; \n    IMPORT FROM exportFile() FIELDS () TEXT caption, TEXT code DO\n        MESSAGE 'Example : ' + caption + ', code : ' + code;\n\n    // passes the second and third parameters to BODY url-encoded\n    EXTERNAL HTTP 'http://tryonline.lsfusion.org/exec?action=doSomething&someprm=$1' \n             BODYURL 'otherprm=$2&andonemore=$3' PARAMS 1,2,'3'; \n}\nexternalSQL ()  {\n    // getting all barcodes of products with the name meat\n    EXPORT TABLE FROM bc=barcode(Article a) WHERE name(a) LIKE '%Meat%';\n    // reading prices for read barcodes \n    EXTERNAL SQL 'jdbc:mysql://$1/test?user=root&password=' \n             EXEC 'select price AS pc, articles.barcode AS brc from $2 x JOIN articles ON x.bc=articles.barcode' \n             PARAMS 'localhost', exportFile() \n             TO exportFile; \n\n    // writing prices for all products with received barcodes\n    LOCAL price = INTEGER (INTEGER);\n    LOCAL barcode = STRING[30] (INTEGER);\n    IMPORT FROM exportFile() TO price=pc,barcode=brc;\n    FOR barcode(Article a) = barcode(INTEGER i) DO\n        price(a) <- price(i);\n}\nexternalLSF()  {\n    EXTERNAL LSF 'http://localhost:7651' EXEC 'System.testAction[]';\n};\n")))}d.isMDXComponent=!0}}]);