(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[63085],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82539:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(74034),o=n(79973),a=(n(67294),n(3905)),i=["components"],l={title:"How-to: Navigator"},s=void 0,c={unversionedId:"How-to_Navigator",id:"version-v4/How-to_Navigator",isDocsHomePage:!1,title:"How-to: Navigator",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_Navigator.md",sourceDirName:".",slug:"/How-to_Navigator",permalink:"/How-to_Navigator",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/How-to_Navigator.md",tags:[],version:"v4",lastUpdatedAt:1620392810,formattedLastUpdatedAt:"5/7/2021",frontMatter:{title:"How-to: Navigator"},sidebar:"version-v4/learn",previous:{title:"How-to: Data entry",permalink:"/How-to_Data_entry"},next:{title:"How-to: Matrix",permalink:"/How-to_Matrix"}},p=[{value:"Example 1",id:"example-1",children:[{value:"Task",id:"task",children:[],level:3},{value:"Solution",id:"solution",children:[],level:3}],level:2},{value:"Example 2",id:"example-2",children:[{value:"Task",id:"task-1",children:[],level:3},{value:"Solution",id:"solution-1",children:[],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"example-1"},"Example 1"),(0,a.kt)("h3",{id:"task"},"Task"),(0,a.kt)("p",null,"We have the forms with a list of books and categories."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM categories 'Categories';\nFORM books 'Books';\n")),(0,a.kt)("p",null,"We need to add them to the ",(0,a.kt)("a",{parentName:"p",href:"/Navigator"},"navigator")," to the new folder called ",(0,a.kt)("inlineCode",{parentName:"p"},"'Application'")," under the main toolbar."),(0,a.kt)("h3",{id:"solution"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"NAVIGATOR {\n    NEW FOLDER application 'Application' WINDOW toolbar FIRST {\n        NEW categories;\n        NEW books;\n    }\n}\n")),(0,a.kt)("p",null,"By specifying ",(0,a.kt)("inlineCode",{parentName:"p"},"WINDOW")," for the ",(0,a.kt)("inlineCode",{parentName:"p"},"application")," element, we indicated that all its child objects must be displayed in the system ",(0,a.kt)("a",{parentName:"p",href:"/Navigator_design"},"window")," called ",(0,a.kt)("inlineCode",{parentName:"p"},"toolbar"),". This will look like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(27850).Z})),(0,a.kt)("h2",{id:"example-2"},"Example 2"),(0,a.kt)("h3",{id:"task-1"},"Task"),(0,a.kt)("p",null,"Similar to ",(0,a.kt)("a",{parentName:"p",href:"#example-1"},(0,a.kt)("strong",{parentName:"a"},"Example 1")),"."),(0,a.kt)("p",null,"We need to place the same forms in the subfolder called ",(0,a.kt)("inlineCode",{parentName:"p"},"'Directories'"),"."),(0,a.kt)("h3",{id:"solution-1"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"NAVIGATOR {\n    application {\n        NEW FOLDER masterData 'Directories' {\n            NEW categories;\n            NEW books;\n        }\n    }\n}\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(60533).Z})))}d.isMDXComponent=!0},27850:function(e,t,n){"use strict";t.Z=n.p+"assets/images/How-to_Navigator_ex1-797e24949c7c66e314aadb659ac67a53.png"},60533:function(e,t,n){"use strict";t.Z=n.p+"assets/images/How-to_Navigator_ex2-ebc897605aa992807064b983c87ab7a1.png"}}]);