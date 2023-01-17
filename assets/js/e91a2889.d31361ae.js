"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[38457],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},62703:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var r=t(83117),a=(t(67294),t(3905));const o={title:"Language"},i=void 0,l={unversionedId:"Language",id:"version-v4/Language",title:"Language",description:"lsFusion is a programming language that describes lsFusion modules.",source:"@site/versioned_docs/version-v4/Language.md",sourceDirName:".",slug:"/Language",permalink:"/v4/Language",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Language.md",tags:[],version:"v4",lastUpdatedAt:1640850738,formattedLastUpdatedAt:"Dec 30, 2021",frontMatter:{title:"Language"},sidebar:"version-v4/learn",previous:{title:"Chat",permalink:"/v4/Chat"},next:{title:"Tokens",permalink:"/v4/Tokens"}},p={},u=[{value:"Example",id:"example",level:3}],s={toc:u};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"lsFusion")," is a programming language that describes lsFusion ",(0,a.kt)("a",{parentName:"p",href:"/v4/Modules"},"modules"),"."),(0,a.kt)("p",null,"Each module consists of a sequence of ",(0,a.kt)("a",{parentName:"p",href:"/v4/Statements"},"statements")," divided into module ",(0,a.kt)("a",{parentName:"p",href:"/v4/Module_header"},(0,a.kt)("em",{parentName:"a"},"header"))," and ",(0,a.kt)("em",{parentName:"p"},"body"),". The header may include four special statements: ",(0,a.kt)("inlineCode",{parentName:"p"},"MODULE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"REQUIRE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"PRIORITY")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"NAMESPACE"),", which define module parameters. The header is followed by the module body which consists of the remaining statements and describes the logic of this module."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"// Module header\nMODULE LanguageExample;\n\nREQUIRE System;\n\nNAMESPACE Example;\n\n// Module body\n\n// Classes declaration\nCLASS Employee;\nCLASS Company;\n\n// Properties declaration\nname(employee) = DATA BPSTRING[100](Employee);\nage(employee) = DATA INTEGER(Employee);\ncompany(employee) = DATA Company(Employee);\n\nname(company) = DATA BPSTRING[100](Company);\n\n// Form declaration\nFORM employeeForm\n    OBJECTS e = Employee\n    PROPERTIES(e) name, age, company\n;\n\n// Adding a form to the navigator\nNAVIGATOR {\n    NEW employeeForm;\n}\n")))}c.isMDXComponent=!0}}]);