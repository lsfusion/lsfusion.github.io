"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[60977],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),p=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:e},c),{},{components:r})):n.createElement(f,i({ref:e},c))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},58530:function(t,e,r){r.r(e),r.d(e,{assets:function(){return s},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var n=r(83117),a=(r(67294),r(3905));const o={title:"Structure operators (STRUCT, [])"},i=void 0,l={unversionedId:"Structure_operators_STRUCT",id:"Structure_operators_STRUCT",title:"Structure operators (STRUCT, [])",description:"The term structure is used in the platform to refer to the classes which objects consist of a collection of other objects in a fixed order. The platform supports two operators for working with structures:",source:"@site/docs/Structure_operators_STRUCT.md",sourceDirName:".",slug:"/Structure_operators_STRUCT",permalink:"/next/Structure_operators_STRUCT",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Structure_operators_STRUCT.md",tags:[],version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Structure operators (STRUCT, [])"},sidebar:"learn",previous:{title:"String operators (+, CONCAT, SUBSTRING)",permalink:"/next/String_operators_+_CONCAT_SUBSTRING"},next:{title:"Type conversion",permalink:"/next/Type_conversion"}},s={},p=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}],c={toc:p};function u(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The term ",(0,a.kt)("em",{parentName:"p"},"structure")," is used in the platform to refer to the ",(0,a.kt)("a",{parentName:"p",href:"/next/Classes"},"classes")," which objects consist of a collection of other objects in a fixed order. The platform supports two operators for working with structures:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Operator"),(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Example"),(0,a.kt)("th",{parentName:"tr",align:null},"Result"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"STRUCT")),(0,a.kt)("td",{parentName:"tr",align:null},"Creation"),(0,a.kt)("td",{parentName:"tr",align:null},"Creates a ",(0,a.kt)("a",{parentName:"td",href:"/next/Properties"},"property")," that takes a list of operands and returns a structure consisting of the objects passed"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"STRUCT('a', 1)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"STRUCT('a', 1)"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"[ ]")),(0,a.kt)("td",{parentName:"tr",align:null},"Access"),(0,a.kt)("td",{parentName:"tr",align:null},"Creates a property that takes an operand with a fixed integer and returns an object of the structure specified in the first operand with a number equal to the specified integer"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"STRUCT('a',1)[2]")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"1"))))),(0,a.kt)("p",null,"Structures support comparison operations which are executed sequentially for each object included in the structure. "),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"To better understand how this works, it\u2019s sufficient to say that physically a structure is just a concatenation of the objects included in this structure converted to bit strings"))),(0,a.kt)("h3",{id:"language"},"Language"),(0,a.kt)("p",null,"To create a property that creates a structure the ",(0,a.kt)("a",{parentName:"p",href:"/next/STRUCT_operator"},(0,a.kt)("inlineCode",{parentName:"a"},"STRUCT")," operator")," is used."),(0,a.kt)("p",null,"To create a property that returns an object from the structure the ",(0,a.kt)("a",{parentName:"p",href:"/next/Brackets_operator"},(0,a.kt)("inlineCode",{parentName:"a"},"[ ]")," operator")," is used."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"objectStruct(a, b) = STRUCT(a, f(b));\nstringStruct() = STRUCT(1, 'two', 3.0);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Letter;\nattachment1 = DATA FILE (Letter);\nattachment2 = DATA FILE (Letter);\nletterAttachments (Letter l) = STRUCT(attachment1(l), attachment2(l));\nsecondAttachment(Letter l) = letterAttachments(l)[2]; // returns attachment2\n")))}u.isMDXComponent=!0}}]);