"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[61709],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return E}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},S={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),E=a,N=p["".concat(l,".").concat(E)]||p[E]||S[E]||s;return t?r.createElement(N,o(o({ref:n},u),{},{components:t})):r.createElement(N,o({ref:n},u))}));function E(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},13115:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return o},default:function(){return S},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return c}});var r=t(83117),a=(t(67294),t(3905));const s={title:"New session (NEWSESSION, NESTEDSESSION)"},o=void 0,i={unversionedId:"New_session_NEWSESSION_NESTEDSESSION",id:"version-v5/New_session_NEWSESSION_NESTEDSESSION",title:"New session (NEWSESSION, NESTEDSESSION)",description:"The new session operator allows you to execute an action in a session different from the current one.",source:"@site/versioned_docs/version-v5/New_session_NEWSESSION_NESTEDSESSION.md",sourceDirName:".",slug:"/New_session_NEWSESSION_NESTEDSESSION",permalink:"/New_session_NEWSESSION_NESTEDSESSION",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/New_session_NEWSESSION_NESTEDSESSION.md",tags:[],version:"v5",lastUpdatedAt:1685108136,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{title:"New session (NEWSESSION, NESTEDSESSION)"},sidebar:"learn",previous:{title:"Cancel changes (CANCEL)",permalink:"/Cancel_changes_CANCEL"},next:{title:"Previous value (PREV)",permalink:"/Previous_value_PREV"}},l={},c=[{value:"Nested sessions",id:"nested",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}],u={toc:c};function S(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The new ",(0,a.kt)("a",{parentName:"p",href:"/Change_sessions"},"session")," operator allows you to execute an action in a session different from the current one. "),(0,a.kt)("p",null,"As with other session management operators, you can explicitly specify ",(0,a.kt)("a",{parentName:"p",href:"/Session_management#nested"},"nested local properties")," for the new session operator."),(0,a.kt)("h3",{id:"nested"},"Nested sessions"),(0,a.kt)("p",null,"It is also possible to create a new ",(0,a.kt)("em",{parentName:"p"},"nested")," session. In this case, all changes that occurred in the current session are copied to the nested session (the same happens when ",(0,a.kt)("a",{parentName:"p",href:"/Cancel_changes_CANCEL"},"changes are discarded")," in a nested session). At the same time, when you ",(0,a.kt)("a",{parentName:"p",href:"/Apply_changes_APPLY"},"apply changes")," in the nested session, all changes are copied back to the current session (without being saved to the database). "),(0,a.kt)("h3",{id:"language"},"Language"),(0,a.kt)("p",null,"To create an action that executes another action in a new session, use the ",(0,a.kt)("a",{parentName:"p",href:"/NEWSESSION_operator"},(0,a.kt)("inlineCode",{parentName:"a"},"NEWSESSION")," operator")," (for nested sessions, use the ",(0,a.kt)("a",{parentName:"p",href:"/NESTEDSESSION_operator"},(0,a.kt)("inlineCode",{parentName:"a"},"NESTEDSESSION")," operator"),")."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"testNewSession ()  {\n    NEWSESSION {\n        NEW c = Currency {\n            name(c) <- 'USD';\n            code(c) <- 866;\n        }\n        APPLY;\n    }\n    // here a new object of class Currency is already in the database\n\n    LOCAL local = BPSTRING[10] (Currency);\n    local(Currency c) <- 'Local';\n    NEWSESSION {\n        MESSAGE (GROUP SUM 1 IF local(Currency c) == 'Local'); // will return NULL\n    }\n    NEWSESSION NESTED (local) {\n        // will return the number of objects of class Currency\n        MESSAGE (GROUP SUM 1 IF local(Currency c) == 'Local'); \n    }\n\n    NEWSESSION {\n        NEW s = Sku {\n            id(s) <- 1234;\n            name(s) <- 'New Sku';\n            SHOW sku OBJECTS s = s;\n        }\n    }\n\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"testNestedSession ()  {\n    NESTEDSESSION {\n        name(Sku s) <- 'aaa';\n        // in fact, the changes will not be applied to the database, but to the \"upper\" session\n        APPLY; \n    }\n\n    MESSAGE (GROUP SUM 1 IF name(Sku s) == 'aaa'); // returns all rows\n    CANCEL;\n    // returns NULL if there was no Sku named aaa in the database before\n    MESSAGE (GROUP SUM 1 IF name(Sku s) == 'aaa'); \n\n}\n\nFORM sku\n    OBJECTS s = Sku PANEL\n    PROPERTIES(s) id, name\n;\nnewNestedSession()  {\n    NESTEDSESSION {\n        NEW s = Sku {\n            // shows the form, but any changes in it will not be applied to the database,\n            // but will be saved in the \"upper session\" session\n            SHOW sku OBJECTS s = s;\n        }\n    }\n}\n")))}S.isMDXComponent=!0}}]);