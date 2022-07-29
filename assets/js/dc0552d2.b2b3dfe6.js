"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[63085],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82539:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s}});var r=n(83117),a=(n(67294),n(3905));const o={title:"How-to: Navigator"},i=void 0,l={unversionedId:"How-to_Navigator",id:"version-v4/How-to_Navigator",title:"How-to: Navigator",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_Navigator.md",sourceDirName:".",slug:"/How-to_Navigator",permalink:"/How-to_Navigator",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/How-to_Navigator.md",tags:[],version:"v4",lastUpdatedAt:1620392810,formattedLastUpdatedAt:"May 7, 2021",frontMatter:{title:"How-to: Navigator"},sidebar:"version-v4/learn",previous:{title:"How-to: Data entry",permalink:"/How-to_Data_entry"},next:{title:"How-to: Matrix",permalink:"/How-to_Matrix"}},p={},s=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3}],c={toc:s};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"example-1"},"Example 1"),(0,a.kt)("h3",{id:"task"},"Task"),(0,a.kt)("p",null,"We have the forms with a list of books and categories."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM categories 'Categories';\nFORM books 'Books';\n")),(0,a.kt)("p",null,"We need to add them to the ",(0,a.kt)("a",{parentName:"p",href:"/Navigator"},"navigator")," to the new folder called ",(0,a.kt)("inlineCode",{parentName:"p"},"'Application'")," under the main toolbar."),(0,a.kt)("h3",{id:"solution"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"NAVIGATOR {\n    NEW FOLDER application 'Application' WINDOW toolbar FIRST {\n        NEW categories;\n        NEW books;\n    }\n}\n")),(0,a.kt)("p",null,"By specifying ",(0,a.kt)("inlineCode",{parentName:"p"},"WINDOW")," for the ",(0,a.kt)("inlineCode",{parentName:"p"},"application")," element, we indicated that all its child objects must be displayed in the system ",(0,a.kt)("a",{parentName:"p",href:"/Navigator_design"},"window")," called ",(0,a.kt)("inlineCode",{parentName:"p"},"toolbar"),". This will look like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(96579).Z,width:"349",height:"153"})),(0,a.kt)("h2",{id:"example-2"},"Example 2"),(0,a.kt)("h3",{id:"task-1"},"Task"),(0,a.kt)("p",null,"Similar to ",(0,a.kt)("a",{parentName:"p",href:"#example-1"},(0,a.kt)("strong",{parentName:"a"},"Example 1")),"."),(0,a.kt)("p",null,"We need to place the same forms in the subfolder called ",(0,a.kt)("inlineCode",{parentName:"p"},"'Directories'"),"."),(0,a.kt)("h3",{id:"solution-1"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"NAVIGATOR {\n    application {\n        NEW FOLDER masterData 'Directories' {\n            NEW categories;\n            NEW books;\n        }\n    }\n}\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(68245).Z,width:"359",height:"172"})))}u.isMDXComponent=!0},96579:function(e,t,n){t.Z=n.p+"assets/images/How-to_Navigator_ex1-797e24949c7c66e314aadb659ac67a53.png"},68245:function(e,t,n){t.Z=n.p+"assets/images/How-to_Navigator_ex2-ebc897605aa992807064b983c87ab7a1.png"}}]);