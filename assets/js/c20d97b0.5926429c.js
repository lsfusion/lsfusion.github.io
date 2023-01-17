"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[77588],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},49591:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var r=n(83117),a=(n(67294),n(3905));const o={title:"New threads (NEWTHREAD, NEWEXECUTOR)"},i=void 0,c={unversionedId:"New_threads_NEWTHREAD_NEWEXECUTOR",id:"New_threads_NEWTHREAD_NEWEXECUTOR",title:"New threads (NEWTHREAD, NEWEXECUTOR)",description:"The new thread operator allows you to execute an action in a thread other than the current one.",source:"@site/docs/New_threads_NEWTHREAD_NEWEXECUTOR.md",sourceDirName:".",slug:"/New_threads_NEWTHREAD_NEWEXECUTOR",permalink:"/New_threads_NEWTHREAD_NEWEXECUTOR",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/New_threads_NEWTHREAD_NEWEXECUTOR.md",tags:[],version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"Jun 9, 2021",frontMatter:{title:"New threads (NEWTHREAD, NEWEXECUTOR)"},sidebar:"learn",previous:{title:"Exit (RETURN)",permalink:"/Exit_RETURN"},next:{title:"Exception handling (TRY)",permalink:"/Exception_handling_TRY"}},l={},s=[{value:"New thread pool",id:"new-thread-pool",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"new thread")," operator allows you to execute an action in a thread other than the current one. "),(0,a.kt)("p",null,"By default, an action is executed once in a new thread, immediately after the creation of this thread. However, if necessary, the action can be executed with a defined delay and/or performed continuously at a specified time interval. "),(0,a.kt)("p",null,"The action can also be executed in a new thread on behalf of a specified connection (for example, some user). In this case, ",(0,a.kt)("a",{parentName:"p",href:"/User_IS_interaction"},"user interaction")," operators may be used inside the action, including ",(0,a.kt)("a",{parentName:"p",href:"/Open_form"},"form opening")," in ",(0,a.kt)("a",{parentName:"p",href:"/In_an_interactive_view_SHOW_DIALOG"},"interactive")," view (by default, when you use these operators, the platform will throw an error)."),(0,a.kt)("p",null,"The delay, interval and connection in this operator are defined as certain ",(0,a.kt)("a",{parentName:"p",href:"/Properties"},"properties"),"."),(0,a.kt)("h3",{id:"new-thread-pool"},"New thread pool"),(0,a.kt)("p",null,"Sometimes the number of simultaneously running threads must be limited to a certain value (as a rule, this is done if the executed actions are not critical and the moment in time when they are completed is not so important). To implement this functionality, the platform has an operator for creating a ",(0,a.kt)("em",{parentName:"p"},"new thread pool"),". This allows the operator to perform an action in such a way that all new threads generated inside this action come into this thread pool, which at the same time can include no more than a specified number of threads."),(0,a.kt)("p",null,"The number of threads is defined as a property."),(0,a.kt)("h3",{id:"language"},"Language"),(0,a.kt)("p",null,"To declare an action that executes another action in a new thread, use the ",(0,a.kt)("a",{parentName:"p",href:"/NEWTHREAD_operator"},(0,a.kt)("inlineCode",{parentName:"a"},"NEWTHREAD")," operator"),". To perform an action in a new thread pool, use the ",(0,a.kt)("a",{parentName:"p",href:"/NEWEXECUTOR_operator"},(0,a.kt)("inlineCode",{parentName:"a"},"NEWEXECUTOR")," operator"),"."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"testNewThread ()  {\n    //Showing messages 'Message' to all\n    FOR user(Connection conn) AND connectionStatus(conn) == ConnectionStatus.connectedConnection AND conn != currentConnection() DO {\n        NEWTHREAD MESSAGE 'Message'; CONNECTION conn;\n    }\n\n    //Execution of the 'action' action with a frequency of 10 seconds and a delay of 5 seconds\n    NEWTHREAD MESSAGE 'Hello World'; SCHEDULE PERIOD 10000 DELAY 5000;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"testExecutor  {\n    NEWEXECUTOR {\n        FOR id(Sku s) DO {\n            NEWTHREAD {\n                NEWSESSION {\n                    name(s) <- STRING[20](id(s)); // writing the code into the name in 10 threads\n                    APPLY;\n                }\n            }\n        }\n    } THREADS 10;\n}\n")))}p.isMDXComponent=!0}}]);