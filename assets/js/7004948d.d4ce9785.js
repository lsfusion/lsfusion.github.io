"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[67297],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(t),h=r,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return t?a.createElement(f,s(s({ref:n},c),{},{components:t})):a.createElement(f,s({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},83372:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return p}});var a=t(83117),r=(t(67294),t(3905));const o={title:"Apply changes (APPLY)"},s=void 0,i={unversionedId:"Apply_changes_APPLY",id:"Apply_changes_APPLY",title:"Apply changes (APPLY)",description:"The apply changes operator saves all changes made to the database, and also triggers the handling of all synchronous global events.",source:"@site/docs/Apply_changes_APPLY.md",sourceDirName:".",slug:"/Apply_changes_APPLY",permalink:"/Apply_changes_APPLY",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Apply_changes_APPLY.md",tags:[],version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"Jun 9, 2021",frontMatter:{title:"Apply changes (APPLY)"},sidebar:"learn",previous:{title:"Session management",permalink:"/Session_management"},next:{title:"Cancel changes (CANCEL)",permalink:"/Cancel_changes_CANCEL"}},l={},p=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"apply changes")," operator saves all changes made to the database, and also triggers the handling of all synchronous global ",(0,r.kt)("a",{parentName:"p",href:"/Events"},"events"),"."),(0,r.kt)("p",null,"For this operator you can also define an ",(0,r.kt)("em",{parentName:"p"},"applied")," action to be executed before events handling is triggered, but it will be done in the same transaction. Execution within a single transaction increases its performance and integrity. It should be kept in mind, however, that when canceling changes, for example, all changes made in this applied action will also be canceled. During event handling the apply operation may be canceled if the ",(0,r.kt)("a",{parentName:"p",href:"/Cancel_changes_CANCEL"},"cancel changes")," operator is executed. If this occurs, in the ",(0,r.kt)("inlineCode",{parentName:"p"},"System.canceled")," property a value of ",(0,r.kt)("inlineCode",{parentName:"p"},"TRUE")," is written (if not, then ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL"),")."),(0,r.kt)("p",null,"After completion of operation (whether successful or unsuccessful), all messages shown to the user during event handling are written to the special property ",(0,r.kt)("inlineCode",{parentName:"p"},"System.applyMessage"),"."),(0,r.kt)("p",null,"As with other session management operators, you can explicitly specify ",(0,r.kt)("a",{parentName:"p",href:"/Session_management#nested"},"nested local properties")," for the apply changes operator, which will preserve their changes after the operator is executed."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This operator works differently if executed inside a ",(0,r.kt)("a",{parentName:"p",href:"/New_session_NEWSESSION_NESTEDSESSION#nested"},"nested session"),": here all changes are copied back to the session in which this session is nested (and changes are not saved to the database)")),(0,r.kt)("h3",{id:"language"},"Language"),(0,r.kt)("p",null,"To declare an action that applies changes, use the ",(0,r.kt)("a",{parentName:"p",href:"/APPLY_operator"},(0,r.kt)("inlineCode",{parentName:"a"},"APPLY")," operator"),"."),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Sku;\nid = DATA INTEGER (Sku);\n\nin = DATA LOCAL BOOLEAN (Sku);\napplyIn()  {\n    in(Sku s) <- TRUE WHERE id(s) == 123;\n    APPLY NESTED (in[Sku]) {};\n    IF canceled() THEN\n        MESSAGE applyMessage();\n    FOR in(Sku s) DO\n        MESSAGE id(s); // shows '123'\n}\n\ncalculateInTransaction()  {\n    APPLY {\n        id(Sku s) <- (GROUP MAX id(Sku ss)) (+) 1; // putting down a new code inside the transaction\n    }\n}\n")))}u.isMDXComponent=!0}}]);