"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[93508],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32779:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return l}});var a=n(83117),r=(n(67294),n(3905));const o={title:"Class change (CHANGECLASS, DELETE)"},i=void 0,c={unversionedId:"Class_change_CHANGECLASS_DELETE",id:"Class_change_CHANGECLASS_DELETE",title:"Class change (CHANGECLASS, DELETE)",description:"The class change operator creates an action that assigns the given class to all objects where value of a particular property (condition) is not equal to NULL. The condition can be omitted, in which case it is considered to be equal to TRUE.",source:"@site/docs/Class_change_CHANGECLASS_DELETE.md",sourceDirName:".",slug:"/Class_change_CHANGECLASS_DELETE",permalink:"/Class_change_CHANGECLASS_DELETE",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Class_change_CHANGECLASS_DELETE.md",tags:[],version:"current",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"Jul 7, 2021",frontMatter:{title:"Class change (CHANGECLASS, DELETE)"},sidebar:"learn",previous:{title:"New object (NEW)",permalink:"/New_object_NEW"},next:{title:"Session management",permalink:"/Session_management"}},s={},l=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"class change")," operator creates an ",(0,r.kt)("a",{parentName:"p",href:"/Actions"},"action")," that assigns the given ",(0,r.kt)("a",{parentName:"p",href:"/Classes"},"class")," to all objects where value of a particular ",(0,r.kt)("a",{parentName:"p",href:"/Properties"},"property")," (",(0,r.kt)("em",{parentName:"p"},"condition"),") is not equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL"),". The condition can be omitted, in which case it is considered to be equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"TRUE"),".  "),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The platform also has a builtin ",(0,r.kt)("inlineCode",{parentName:"p"},"changeClass")," action with two parameters: the first defines the object for which you want to change the class, and the second defines an object of the new class. Since it is much more difficult to determine the possible values of a new class when using the builtin action than in the case of an operator (for which the new class is specified explicitly), it is recommended that you use the operator (and not the builtin action)")),(0,r.kt)("p",null,"If there is a non-",(0,r.kt)("inlineCode",{parentName:"p"},"NULL")," value of some ",(0,r.kt)("a",{parentName:"p",href:"/Data_properties_DATA"},"data property"),' for which the "changed" object is either its parameter or the value itserf, then this value is automatically changed to ',(0,r.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This behavior is implemented by analogy with ",(0,r.kt)("a",{parentName:"p",href:"/Calculated_events"},"computed")," and ",(0,r.kt)("a",{parentName:"p",href:"/Simple_event"},"simple")," events.")),(0,r.kt)("h3",{id:"language"},"Language"),(0,r.kt)("p",null,"To declare an action that implements a change of object classes, use the ",(0,r.kt)("a",{parentName:"p",href:"/CHANGECLASS_operator"},(0,r.kt)("inlineCode",{parentName:"a"},"CHANGECLASS")," operator")," or the ",(0,r.kt)("a",{parentName:"p",href:"/DELETE_operator"},(0,r.kt)("inlineCode",{parentName:"a"},"DELETE")," operator"),"."),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"// deleting an object\ndeleteObject(obj)  { DELETE obj; }\n\n// deleting all inactive products\nCLASS Article;\nactive = DATA BOOLEAN (Article);\ndeleteInactiveArticles()  {\n    // a local parameter a is added corresponding to the objects to be iterated over\n    DELETE Article a WHERE a IS Article AND NOT active(a); \n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Document;\ndate = DATA DATE (Document);\n\nCLASS ClosedDocument : Document;\n// sets status to closed for all documents with a date older than 2 weeks\nchangeStatus()  {\n    CHANGECLASS Document d TO ClosedDocument WHERE sum(date(d), 14) <= currentDate();\n}\n")))}u.isMDXComponent=!0}}]);