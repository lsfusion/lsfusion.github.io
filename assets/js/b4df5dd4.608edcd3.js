(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[70435],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return N}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),N=o,m=d["".concat(p,".").concat(N)]||d[N]||u[N]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function N(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35548:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={title:"NEWSESSION operator"},l=void 0,p={unversionedId:"NEWSESSION_operator",id:"version-v4/NEWSESSION_operator",isDocsHomePage:!1,title:"NEWSESSION operator",description:"The NEWSESSION operator creates an action that executes the other action in a new session.",source:"@site/versioned_docs/version-v4/NEWSESSION_operator.md",sourceDirName:".",slug:"/NEWSESSION_operator",permalink:"/NEWSESSION_operator",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/NEWSESSION_operator.md",version:"v4",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"7/7/2021",frontMatter:{title:"NEWSESSION operator"},sidebar:"version-v4/learn",previous:{title:"NEWEXECUTOR operator",permalink:"/NEWEXECUTOR_operator"},next:{title:"NEWTHREAD operator",permalink:"/NEWTHREAD_operator"}},s=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"NEWSESSION")," operator creates an ",(0,a.kt)("a",{parentName:"p",href:"/Actions"},"action")," that executes the other action in a ",(0,a.kt)("a",{parentName:"p",href:"/New_session_NEWSESSION_NESTEDSESSION"},"new session"),"."),(0,a.kt)("h3",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NEWSESSION [NEWSQL] [nestedBlock] action \n")),(0,a.kt)("p",null,"where ",(0,a.kt)("inlineCode",{parentName:"p"},"nestedBlock")," has one of two possible syntaxes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NESTED LOCAL\nNESTED (propertyId1, ..., propertyIdN)\n")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"NEWSESSION")," operator creates an action which executes the other action in a new session."),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"NESTED")," keyword is specified, the changes of the ",(0,a.kt)("a",{parentName:"p",href:"/Data_properties_DATA#local"},"local properties")," will be visible in the new session. If the ",(0,a.kt)("inlineCode",{parentName:"p"},"LOCAL")," keyword is specified, changes of all the local properties will be visible, otherwise, a list of the local properties whose changes need to be visible in the new session should be specified. Also, changes to these local properties in the new session will get to the current session when applying changes in this new session."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"NEWSQL")),(0,a.kt)("p",{parentName:"li"},"  If this keyword is specified, a new SQL connection will be created. In this case, the block containing the ",(0,a.kt)("inlineCode",{parentName:"p"},"NESTED")," keyword will be ignored.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"LOCAL")),(0,a.kt)("p",{parentName:"li"},"  If this keyword is specified, changes to all the local properties will be visible in the new session.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"propertyId1, ..., propertyIdN")),(0,a.kt)("p",{parentName:"li"},"  A list of local properties whose changes will be visible in the new session. Each list element must be a ",(0,a.kt)("a",{parentName:"p",href:"/IDs#propertyid"},"property ID"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"action")),(0,a.kt)("p",{parentName:"li"},"  A ",(0,a.kt)("a",{parentName:"p",href:"/Action_operators#contextdependent"},"context-dependent action operator")," that defines an action to be executed in the new session."))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"testNewSession ()  {\n    NEWSESSION {\n        NEW c = Currency {\n            name(c) <- 'USD';\n            code(c) <- 866;\n        }\n        APPLY;\n    }\n    // here a new object of class Currency is already in the database\n\n    LOCAL local = BPSTRING[10] (Currency);\n    local(Currency c) <- 'Local';\n    NEWSESSION {\n        MESSAGE (GROUP SUM 1 IF local(Currency c) == 'Local'); // will return NULL\n    }\n    NEWSESSION NESTED (local) {\n        // will return the number of objects of class Currency\n        MESSAGE (GROUP SUM 1 IF local(Currency c) == 'Local'); \n    }\n\n    NEWSESSION {\n        NEW s = Sku {\n            id(s) <- 1234;\n            name(s) <- 'New Sku';\n            SHOW sku OBJECTS s = s;\n        }\n    }\n\n}\n")))}u.isMDXComponent=!0}}]);