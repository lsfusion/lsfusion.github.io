"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[86470],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,f=u["".concat(s,".").concat(c)]||u[c]||d[c]||o;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},92381:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var a=n(83117),r=(n(67294),n(3905));const o={title:"Modules"},i=void 0,l={unversionedId:"Modules",id:"Modules",title:"Modules",description:"A module is a functionally complete part of a project. A module consists of declarations of properties, actions, events, constraints, and other system elements.",source:"@site/docs/Modules.md",sourceDirName:".",slug:"/Modules",permalink:"/Modules",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Modules.md",tags:[],version:"current",lastUpdatedAt:1622042248,formattedLastUpdatedAt:"May 26, 2021",frontMatter:{title:"Modules"},sidebar:"learn",previous:{title:"Modularity",permalink:"/Modularity"},next:{title:"Projects",permalink:"/Projects"}},s={},p=[{value:"Dependencies between modules",id:"depends",level:3},{value:"Namespaces",id:"namespaces",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A ",(0,r.kt)("em",{parentName:"p"},"module")," is a functionally complete part of a ",(0,r.kt)("a",{parentName:"p",href:"/Projects"},"project"),". A module consists of declarations of ",(0,r.kt)("a",{parentName:"p",href:"/Properties"},"properties"),", ",(0,r.kt)("a",{parentName:"p",href:"/Actions"},"actions"),", ",(0,r.kt)("a",{parentName:"p",href:"/Events"},"events"),", ",(0,r.kt)("a",{parentName:"p",href:"/Constraints"},"constraints"),", and other ",(0,r.kt)("a",{parentName:"p",href:"/Naming"},"system elements"),"."),(0,r.kt)("p",null,"Each module has a name, which must be unique within the ",(0,r.kt)("a",{parentName:"p",href:"/Projects"},"project"),"."),(0,r.kt)("h3",{id:"depends"},"Dependencies between modules"),(0,r.kt)("p",null,"Usually modules use elements from other modules to describe part of their functionality. Accordingly, if module ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," uses elements from module ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),", it must be specified in module ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," that it ",(0,r.kt)("em",{parentName:"p"},"depends")," on ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),". Based on these dependencies, all modules in the project are arranged in a certain order in which they are initialized. It is guaranteed that if module ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," depends on module ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),", module ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," will be initialized before module ",(0,r.kt)("inlineCode",{parentName:"p"},"B"),". Circular dependencies between project modules are not allowed.  "),(0,r.kt)("p",null,"If module ",(0,r.kt)("inlineCode",{parentName:"p"},"C")," depends on module ",(0,r.kt)("inlineCode",{parentName:"p"},"B"),", and module ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," depends on module ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),", we will also assume that module ",(0,r.kt)("inlineCode",{parentName:"p"},"C")," depends on module ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,r.kt)("p",null,"Any module always automatically depends on the system module ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lsfusion/platform/blob/master/server/src/main/lsfusion/system/System.lsf"},(0,r.kt)("inlineCode",{parentName:"a"},"System")),", regardless of whether or not this is specified explicitly."),(0,r.kt)("h3",{id:"namespaces"},"Namespaces"),(0,r.kt)("p",null,"In each module a ",(0,r.kt)("a",{parentName:"p",href:"/Naming#namespace"},"namespace")," is specified, containing the names of all system elements created in this module. By default, the module creates its own namespace, the name of which is equal to the name of the module. For the module you can also specify a list of additional namespaces that will have priority when ",(0,r.kt)("a",{parentName:"p",href:"/Search_"},"finding")," ",(0,r.kt)("a",{parentName:"p",href:"/Element_identification"},"system elements"),"."),(0,r.kt)("h3",{id:"language"},"Language"),(0,r.kt)("p",null,"Each module in the platform corresponds to exactly one file, which starts with a special ",(0,r.kt)("a",{parentName:"p",href:"/Module_header"},"header"),"."),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"MODULE EmployeeExample;     // Defining the module name\n\nREQUIRE System, Utils;      // Listing the modules that the Employee module depends on\nNAMESPACE Employee;         // Setting the namespace\n\nCLASS Employee 'Employee';  // Creating a class\nCLASS Position 'Position'; // Creating another class\n\nemployeePosition(employee) = DATA Position (Employee); // Creating property\n")))}d.isMDXComponent=!0}}]);