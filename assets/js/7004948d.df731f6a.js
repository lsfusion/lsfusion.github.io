(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[67297],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return h}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return t?a.createElement(m,i(i({ref:n},p),{},{components:t})):a.createElement(m,i({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},83372:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=t(74034),r=t(79973),o=(t(67294),t(3905)),i=["components"],s={title:"Apply changes (APPLY)"},l=void 0,c={unversionedId:"Apply_changes_APPLY",id:"Apply_changes_APPLY",isDocsHomePage:!1,title:"Apply changes (APPLY)",description:"The apply changes operator saves all changes made to the database, and also triggers the handling of all synchronous global events.",source:"@site/docs/Apply_changes_APPLY.md",sourceDirName:".",slug:"/Apply_changes_APPLY",permalink:"/next/Apply_changes_APPLY",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Apply_changes_APPLY.md",tags:[],version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Apply changes (APPLY)"},sidebar:"learn",previous:{title:"Overview",permalink:"/next/Session_management"},next:{title:"Cancel changes (CANCEL)",permalink:"/next/Cancel_changes_CANCEL"}},p=[{value:"Language",id:"language",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],u={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"apply changes")," operator saves all changes made to the database, and also triggers the handling of all synchronous global ",(0,o.kt)("a",{parentName:"p",href:"/next/Events"},"events"),"."),(0,o.kt)("p",null,"For this operator you can also define an ",(0,o.kt)("em",{parentName:"p"},"applied")," action to be executed before events handling is triggered, but it will be done in the same transaction. Execution within a single transaction increases its performance and integrity. It should be kept in mind, however, that when canceling changes, for example, all changes made in this applied action will also be canceled. During event handling the apply operation may be canceled if the ",(0,o.kt)("a",{parentName:"p",href:"/next/Cancel_changes_CANCEL"},"cancel changes")," operator is executed. If this occurs, in the ",(0,o.kt)("inlineCode",{parentName:"p"},"System.canceled")," property a value of ",(0,o.kt)("inlineCode",{parentName:"p"},"TRUE")," is written (if not, then ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL"),")."),(0,o.kt)("p",null,"After completion of operation (whether successful or unsuccessful), all messages shown to the user during event handling are written to the special property ",(0,o.kt)("inlineCode",{parentName:"p"},"System.applyMessage"),"."),(0,o.kt)("p",null,"As with other session management operators, you can explicitly specify ",(0,o.kt)("a",{parentName:"p",href:"/next/Session_management#nested"},"nested local properties")," for the apply changes operator, which will preserve their changes after the operator is executed."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This operator works differently if executed inside a ",(0,o.kt)("a",{parentName:"p",href:"/next/New_session_NEWSESSION_NESTEDSESSION#nested"},"nested session"),": here all changes are copied back to the session in which this session is nested (and changes are not saved to the database)"))),(0,o.kt)("h3",{id:"language"},"Language"),(0,o.kt)("p",null,"To declare an action that applies changes, use the ",(0,o.kt)("a",{parentName:"p",href:"/next/APPLY_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"APPLY")," operator"),"."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Sku;\nid = DATA INTEGER (Sku);\n\nin = DATA LOCAL BOOLEAN (Sku);\napplyIn()  {\n    in(Sku s) <- TRUE WHERE id(s) == 123;\n    APPLY NESTED (in[Sku]) {};\n    IF canceled() THEN\n        MESSAGE applyMessage();\n    FOR in(Sku s) DO\n        MESSAGE id(s); // shows '123'\n}\n\ncalculateInTransaction()  {\n    APPLY {\n        id(Sku s) <- (GROUP MAX id(Sku ss)) (+) 1; // putting down a new code inside the transaction\n    }\n}\n")))}d.isMDXComponent=!0}}]);