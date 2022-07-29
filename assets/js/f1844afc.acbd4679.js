"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[37979],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52858:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var a=n(83117),r=(n(67294),n(3905));const o={title:"How-to: Class extension"},l=void 0,s={unversionedId:"How-to_Class_extension",id:"How-to_Class_extension",title:"How-to: Class extension",description:"The typical scheme for extracting relations between classes to a separate module is as follows:",source:"@site/docs/How-to_Class_extension.md",sourceDirName:".",slug:"/How-to_Class_extension",permalink:"/next/How-to_Class_extension",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/How-to_Class_extension.md",tags:[],version:"current",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"Jul 7, 2021",frontMatter:{title:"How-to: Class extension"},sidebar:"learn",previous:{title:"How-to: Extensions",permalink:"/next/How-to_Extensions"},next:{title:"How-to: Property extension",permalink:"/next/How-to_Property_extension"}},i={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The typical scheme for extracting relations between classes to a separate module is as follows:"),(0,r.kt)("p",null,"Create the ",(0,r.kt)("inlineCode",{parentName:"p"},"MA")," module in which the ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," class will be created:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"MODULE MA;\n\nCLASS ABSTRACT A; // declaring an abstract class\na = ABSTRACT BPSTRING[10] (A); // declaring an abstract property a\n")),(0,r.kt)("p",null,"Create the ",(0,r.kt)("inlineCode",{parentName:"p"},"MB")," module in which the ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," class will be created:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"MODULE MB;\n\nCLASS B; // declaring class B\nb = DATA BPSTRING[10] (B); // declaring the data property b for class B\n")),(0,r.kt)("p",null,"Create the ",(0,r.kt)("inlineCode",{parentName:"p"},"MBA")," module in which the relation between the ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," class will be defined:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"MODULE MBA;\n\n// specifying that the MBA module depends on the MA and MB modules so \n// that the system elements declared in them can be used in that module\nREQUIRE MA, MB; \n\nEXTEND CLASS B : A; // inheriting class B from A\n// specifying that for the abstract property a, property B should be used as an implementation\na(ba) += b(ba); \n")),(0,r.kt)("p",null,"Therefore, the ",(0,r.kt)("inlineCode",{parentName:"p"},"MA")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"MB")," modules do not directly depend on each other and the relation between them can be enabled (disabled) by linking (unlinking) the ",(0,r.kt)("inlineCode",{parentName:"p"},"MBA")," module. Note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"MBA")," module extends the functionality of the ",(0,r.kt)("inlineCode",{parentName:"p"},"MB")," module without any changes to its code."),(0,r.kt)("p",null,"You can use mixin classes when using the metacode as follows:"),(0,r.kt)("p",null,"Suppose that we have a metacode that declares a class and defines certain properties for it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"MODULE MyModule;\n\nMETA defineMyClass (className) // declaring the defineMyClass metacode with the className parameter\n    CLASS className; // declaring a class named className\n    // adding a property named myProperty + className for the created class\n    myProperty###className = DATA BPSTRING[20] (className); \nEND\n")),(0,r.kt)("p",null,"Note that when calling this metacode, you cannot specify the classes from which the created class must inherit anything. However, this can be implemented through a mixin of classes as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},'CLASS MySuperClass;\n\n@defineMyClass(MyClass); // calling the metacode that will create the class and property\n\n// inheriting MyClass from MySuperClass, while MyClass will "will receive"\n// all the properties that are declared for the MySuperClass class\nEXTEND CLASS MyClass : MySuperClass; \n')))}u.isMDXComponent=!0}}]);