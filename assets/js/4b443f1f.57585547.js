"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[22727],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15487:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return l}});var r=n(83117),o=(n(67294),n(3905));const a={title:"NEWTHREAD operator"},i=void 0,p={unversionedId:"NEWTHREAD_operator",id:"version-v5/NEWTHREAD_operator",title:"NEWTHREAD operator",description:"The NEWTHREAD operator creates an action that executes another action in a new thread.",source:"@site/versioned_docs/version-v5/NEWTHREAD_operator.md",sourceDirName:".",slug:"/NEWTHREAD_operator",permalink:"/NEWTHREAD_operator",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/NEWTHREAD_operator.md",tags:[],version:"v5",lastUpdatedAt:1685108136,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{title:"NEWTHREAD operator"},sidebar:"learn",previous:{title:"NEWSESSION operator",permalink:"/NEWSESSION_operator"},next:{title:"PRINT operator",permalink:"/PRINT_operator"}},c={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}],s={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"NEWTHREAD")," operator creates an ",(0,o.kt)("a",{parentName:"p",href:"/Actions"},"action")," that executes another action in a ",(0,o.kt)("a",{parentName:"p",href:"/New_threads_NEWTHREAD_NEWEXECUTOR"},"new thread"),"."),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NEWTHREAD action [CONNECTION connectionExpr]\nNEWTHREAD action SCHEDULE [PERIOD periodExpr] [DELAY delayExpr]\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"NEWTHREAD")," operator creates an action that executes another action in a new thread. When the ",(0,o.kt)("inlineCode",{parentName:"p"},"CONNECTION")," keyword is used, you can specify the connection which will be used during the action execution. There is also a second form of the ",(0,o.kt)("inlineCode",{parentName:"p"},"NEWTHREAD")," operator for triggering an action using the scheduler. This form usage is determined by the presence of the ",(0,o.kt)("inlineCode",{parentName:"p"},"SCHEDULE")," keyword.  "),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"action")),(0,o.kt)("p",{parentName:"li"},"  A ",(0,o.kt)("a",{parentName:"p",href:"/Action_operators#contextdependent"},"context dependent operator")," that defines an action to be executed in the new thread.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"connectionExpr")),(0,o.kt)("p",{parentName:"li"},"  An ",(0,o.kt)("a",{parentName:"p",href:"/Expression"},"expression")," which value is a ",(0,o.kt)("a",{parentName:"p",href:"/Properties"},"property")," that returns an object of the ",(0,o.kt)("inlineCode",{parentName:"p"},"SystemEvents.Connection")," class. Defines the connection for which this action will be performed.  ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"periodExpr")),(0,o.kt)("p",{parentName:"li"},"  An expression which value is a property that returns the length of the action repetition period in milliseconds. If not specified, the action will be executed once.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"delayExpr")),(0,o.kt)("p",{parentName:"li"},"  An expression which value is a property that returns the delay before the first execution of the action in milliseconds. If not specified, the action will be executed without delay."))),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"testNewThread ()  {\n    //Showing messages 'Message' to all\n    FOR user(Connection conn) AND connectionStatus(conn) == ConnectionStatus.connectedConnection AND conn != currentConnection() DO {\n        NEWTHREAD MESSAGE 'Message'; CONNECTION conn;\n    }\n\n    //Execution of the 'action' action with a frequency of 10 seconds and a delay of 5 seconds\n    NEWTHREAD MESSAGE 'Hello World'; SCHEDULE PERIOD 10000 DELAY 5000;\n}\n")))}u.isMDXComponent=!0}}]);