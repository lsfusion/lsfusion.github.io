"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[64545],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,p(p({ref:t},c),{},{components:n})):r.createElement(m,p({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78549:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return s}});var r=n(83117),a=(n(67294),n(3905));const o={title:"APPLY operator"},p=void 0,i={unversionedId:"APPLY_operator",id:"version-v4/APPLY_operator",title:"APPLY operator",description:"The APPLY operator creates an action that applies changes to the database.",source:"@site/versioned_docs/version-v4/APPLY_operator.md",sourceDirName:".",slug:"/APPLY_operator",permalink:"/v4/APPLY_operator",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/APPLY_operator.md",tags:[],version:"v4",lastUpdatedAt:1624461640,formattedLastUpdatedAt:"Jun 23, 2021",frontMatter:{title:"APPLY operator"},sidebar:"version-v4/learn",previous:{title:"ACTIVE FORM operator",permalink:"/v4/ACTIVE_FORM_operator"},next:{title:"ASK operator",permalink:"/v4/ASK_operator"}},l={},s=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"APPLY")," operator creates an ",(0,a.kt)("a",{parentName:"p",href:"/v4/Actions"},"action")," that ",(0,a.kt)("a",{parentName:"p",href:"/v4/Apply_changes_APPLY"},"applies changes")," to the database."),(0,a.kt)("h3",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"APPLY [nestedBlock] [SERIALIZABLE] [action]\n")),(0,a.kt)("p",null,"where ",(0,a.kt)("inlineCode",{parentName:"p"},"nestedBlock")," has one of two possible syntaxes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NESTED LOCAL\nNESTED (propertyId1, ..., propertyIdN)\n")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"APPLY")," operator creates an action that applies changes to the database. By specifying the keyword ",(0,a.kt)("inlineCode",{parentName:"p"},"NESTED")," you can specify ",(0,a.kt)("a",{parentName:"p",href:"/v4/Data_properties_DATA#local"},"local properties")," whose changes are not dropped when applying the changes. This operator also includes an action to be executed before applying the changes to the database."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"LOCAL")),(0,a.kt)("p",{parentName:"li"},"  Keyword. If specified, all local properties preserve their changes after the ",(0,a.kt)("inlineCode",{parentName:"p"},"APPLY")," operator is executed. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"propertyId1, ..., propertyIdN")),(0,a.kt)("p",{parentName:"li"},"  List of local properties. Each list element is a ",(0,a.kt)("a",{parentName:"p",href:"/v4/IDs#propertyid"},"property ID"),". The local properties specified in the list will preserve their changes after the operator is executed.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"SERIALIZABLE")),(0,a.kt)("p",{parentName:"li"},'  A keyword that sets the transaction isolation level to "Serializable".')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"action")),(0,a.kt)("p",{parentName:"li"},"  A ",(0,a.kt)("a",{parentName:"p",href:"/v4/Action_operators#contextdependent"},"context-dependent operator")," that describes an action to be executed before applying changes. It is executed in the same transaction as the application of changes."))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Sku;\nid = DATA INTEGER (Sku);\n\nin = DATA LOCAL BOOLEAN (Sku);\napplyIn()  {\n    in(Sku s) <- TRUE WHERE id(s) == 123;\n    APPLY NESTED (in[Sku]) {};\n    IF canceled() THEN\n        MESSAGE applyMessage();\n    FOR in(Sku s) DO\n        MESSAGE id(s); // shows '123'\n}\n\ncalculateInTransaction()  {\n    APPLY {\n        id(Sku s) <- (GROUP MAX id(Sku ss)) (+) 1; // putting down a new code inside the transaction\n    }\n}\n")))}u.isMDXComponent=!0}}]);