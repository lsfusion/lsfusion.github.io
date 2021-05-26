(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[86079],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97642:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={title:"TRY operator"},c={unversionedId:"TRY_operator",id:"TRY_operator",isDocsHomePage:!1,title:"TRY operator",description:"The TRY operator creates an action that executes another action with exception handling.",source:"@site/docs/TRY_operator.md",sourceDirName:".",slug:"/TRY_operator",permalink:"/next/TRY_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/TRY_operator.md",version:"current",lastUpdatedAt:1622042248,formattedLastUpdatedAt:"5/26/2021",frontMatter:{title:"TRY operator"},sidebar:"learn",previous:{title:"SHOW operator",permalink:"/next/SHOW_operator"},next:{title:"WHILE operator",permalink:"/next/WHILE_operator"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:p};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"TRY")," operator creates an ",(0,o.kt)("a",{parentName:"p",href:"/next/Actions"},"action")," that executes another action with ",(0,o.kt)("a",{parentName:"p",href:"/next/Exception_handling_TRY_"},"exception handling"),"."),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"TRY action [CATCH catchAction] [FINALLY finallyAction]\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"TRY")," operator creates an action that executes another action and handles exceptions within it. "),(0,o.kt)("p",null,"An operator form without the ",(0,o.kt)("inlineCode",{parentName:"p"},"FINALLY")," keyword creates an action that executes another action and intercepts errors that are thrown in it. In this case, the error is not passed anywhere."),(0,o.kt)("p",null,"An operator form with the ",(0,o.kt)("inlineCode",{parentName:"p"},"FINALLY")," keyword creates an action that executes another action, intercepts errors that occur, then, regardless of whether an error was thrown or not, executes the action specified in the ",(0,o.kt)("inlineCode",{parentName:"p"},"FINALLY")," block, and then, if an error was thrown, passes this error to the top action in the stack."),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"action")),(0,o.kt)("p",{parentName:"li"},"  A ",(0,o.kt)("a",{parentName:"p",href:"/next/Action_operator#contextdependent"},"context-dependent operator")," that describes an action to be executed with exception handling.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"catchAction")),(0,o.kt)("p",{parentName:"li"},"  A context-dependent operator that describes an action to be executed if an error is thrown while executing the action. Here the error message will be written to the property ",(0,o.kt)("inlineCode",{parentName:"p"},"System.messageCaughtException[]"),", the java error stack will be written to ",(0,o.kt)("inlineCode",{parentName:"p"},"System.javaStackTraceCaughtException[]"),", and the LSF stack will be written to ",(0,o.kt)("inlineCode",{parentName:"p"},"System.lsfStackTraceCaughtException[]"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"finallyAction")),(0,o.kt)("p",{parentName:"li"},"  A context-dependent operator that describes an action to be executed after the action being executed, regardless of whether or not an error has been thrown."))),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"tryToImport(FILE f)  {\n    TRY {\n        LOCAL a = BPSTRING[10] (INTEGER);\n\n        IMPORT XLS FROM f TO a = A;\n    }\n}\n\nCLASS MyLock {\n    lock 'Blocking'\n}\n\nsingleDo ()  {\n    NEWSESSION {\n        lock(MyLock.lock);\n        IF lockResult() THEN\n        TRY {\n            MESSAGE 'Lock Obtained';\n        } CATCH {\n            MESSAGE messageCaughtException();\n        } FINALLY unlock(MyLock.lock);\n    }\n}\n")))}s.isMDXComponent=!0}}]);