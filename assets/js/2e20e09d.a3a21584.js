(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[73225],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return E}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(r),E=a,m=d["".concat(c,".").concat(E)]||d[E]||u[E]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function E(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},67983:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var n=r(74034),a=r(79973),o=(r(67294),r(3905)),i=["components"],p={title:"NEWEXECUTOR operator"},c=void 0,l={unversionedId:"NEWEXECUTOR_operator",id:"version-v4/NEWEXECUTOR_operator",isDocsHomePage:!1,title:"NEWEXECUTOR operator",description:"The NEWEXECUTOR operator creates an action that enables executing other actions in a new thread pool.",source:"@site/versioned_docs/version-v4/NEWEXECUTOR_operator.md",sourceDirName:".",slug:"/NEWEXECUTOR_operator",permalink:"/NEWEXECUTOR_operator",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/NEWEXECUTOR_operator.md",tags:[],version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"NEWEXECUTOR operator"},sidebar:"version-v4/learn",previous:{title:"NESTEDSESSION operator",permalink:"/NESTEDSESSION_operator"},next:{title:"NEWSESSION operator",permalink:"/NEWSESSION_operator"}},s=[{value:"Syntax",id:"syntax",children:[],level:3},{value:"Description",id:"description",children:[],level:3},{value:"Parameters",id:"parameters",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],u={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"NEWEXECUTOR")," operator creates an ",(0,o.kt)("a",{parentName:"p",href:"/Actions"},"action")," that enables executing other actions in a ",(0,o.kt)("a",{parentName:"p",href:"/New_threads_NEWTHREAD_NEWEXECUTOR"},"new thread pool"),"."),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NEWEXECUTOR action THREADS threadExpr\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"NEWEXECUTOR")," operator creates an action that creates a new thread pool and executes the defined action in such a way that any action created with the ",(0,o.kt)("a",{parentName:"p",href:"/NEWTHREAD_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"NEWTHREAD")," operator")," will be executed in one of the threads of the created pool. "),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"action")),(0,o.kt)("p",{parentName:"li"},"  A ",(0,o.kt)("a",{parentName:"p",href:"/Action_operators#contextdependent"},"context-dependent action operator")," that defines an action to be executed.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"threadExpr")),(0,o.kt)("p",{parentName:"li"},"  An ",(0,o.kt)("a",{parentName:"p",href:"/Expression"},"expression")," which value determines the number of threads in the pool. Must return the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"INTEGER")," class. "))),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"testExecutor  {\n    NEWEXECUTOR {\n        FOR id(Sku s) DO {\n            NEWTHREAD {\n                NEWSESSION {\n                    name(s) <- STRING[20](id(s)); // writing the code into the name in 10 threads\n                    APPLY;\n                }\n            }\n        }\n    } THREADS 10;\n}\n")))}d.isMDXComponent=!0}}]);