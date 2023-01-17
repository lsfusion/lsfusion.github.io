"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[21513],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(t),d=o,m=f["".concat(l,".").concat(d)]||f[d]||s[d]||a;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},56675:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var r=t(83117),o=(t(67294),t(3905));const a={title:"Exception handling (TRY)"},i=void 0,c={unversionedId:"Exception_handling_TRY",id:"Exception_handling_TRY",title:"Exception handling (TRY)",description:"The exception handling operator enables you to execute an action and do the following if an error (exception) occurs:",source:"@site/docs/Exception_handling_TRY.md",sourceDirName:".",slug:"/Exception_handling_TRY",permalink:"/Exception_handling_TRY",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Exception_handling_TRY.md",tags:[],version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"Jun 9, 2021",frontMatter:{title:"Exception handling (TRY)"},sidebar:"learn",previous:{title:"New threads (NEWTHREAD, NEWEXECUTOR)",permalink:"/New_threads_NEWTHREAD_NEWEXECUTOR"},next:{title:"State change",permalink:"/State_change"}},l={},p=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}],u={toc:p};function s(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"exception handling")," operator enables you to execute an action and do the following if an error (exception) occurs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ignore this error, "),(0,o.kt)("li",{parentName:"ul"},"execute a different action, then pass the error to the top action (as if the operation didn't exist),"),(0,o.kt)("li",{parentName:"ul"},"execute a different action regardless of whether there's been an error or not, then pass the error to the top action (as if this operator didn't exist)")),(0,o.kt)("h3",{id:"language"},"Language"),(0,o.kt)("p",null,"To declare an exception handling action, use the ",(0,o.kt)("a",{parentName:"p",href:"/TRY_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"TRY")," operator"),"."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"tryToImport(FILE f)  {\n    TRY {\n        LOCAL a = BPSTRING[10] (INTEGER);\n\n        IMPORT XLS FROM f TO a = A;\n    }\n}\n\nCLASS MyLock {\n    lock 'Blocking'\n}\n\nsingleDo ()  {\n    NEWSESSION {\n        lock(MyLock.lock);\n        IF lockResult() THEN\n        TRY {\n            MESSAGE 'Lock Obtained';\n        } CATCH {\n            MESSAGE messageCaughtException();\n        } FINALLY unlock(MyLock.lock);\n    }\n}\n")))}s.isMDXComponent=!0}}]);