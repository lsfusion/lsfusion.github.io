"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[48452],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=a.createContext({}),i=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=i(n),f=s,d=m["".concat(o,".").concat(f)]||m[f]||u[f]||r;return n?a.createElement(d,c(c({ref:t},p),{},{components:n})):a.createElement(d,c({ref:t},p))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,c=new Array(r);c[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:s,c[1]=l;for(var i=2;i<r;i++)c[i]=n[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67589:function(e,t,n){n.r(t),n.d(t,{assets:function(){return o},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return i}});var a=n(83117),s=(n(67294),n(3905));const r={title:"User classes"},c=void 0,l={unversionedId:"User_classes",id:"User_classes",title:"User classes",description:"Classes that a developer can create and the instances of which a user can create are called custom classes.",source:"@site/docs/User_classes.md",sourceDirName:".",slug:"/User_classes",permalink:"/next/User_classes",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/User_classes.md",tags:[],version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"Jun 9, 2021",frontMatter:{title:"User classes"},sidebar:"learn",previous:{title:"Built-in classes",permalink:"/next/Built-in_classes"},next:{title:"Static objects",permalink:"/next/Static_objects"}},o={},i=[{value:"Inheritance",id:"inheritance",level:3},{value:"Abstract classes",id:"abstract",level:3},{value:"Class change",id:"class-change",level:3},{value:"Common ancestor",id:"commonparentclass",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}],p={toc:i};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/next/Classes"},"Classes")," that a developer can create and the instances of which a user can create are called ",(0,s.kt)("em",{parentName:"p"},"custom classes"),". "),(0,s.kt)("h3",{id:"inheritance"},"Inheritance"),(0,s.kt)("p",null,"When creating custom class ",(0,s.kt)("inlineCode",{parentName:"p"},"B")," you can explicitly specify that its ",(0,s.kt)("a",{parentName:"p",href:"/next/Classes"},"parent")," is class ",(0,s.kt)("inlineCode",{parentName:"p"},"A"),". In this case, class ",(0,s.kt)("inlineCode",{parentName:"p"},"A")," shall be called the ",(0,s.kt)("em",{parentName:"p"},"parent class")," of class ",(0,s.kt)("inlineCode",{parentName:"p"},"B"),"."),(0,s.kt)("p",null,"A parent class of a custom class can only be another custom class. Inheriting from ",(0,s.kt)("a",{parentName:"p",href:"/next/Built-in_classes"},"built-in classes")," is not possible. If no parent class is specified when creating a custom class, this class is implicitly inherited from the ",(0,s.kt)("inlineCode",{parentName:"p"},"Object")," class (located in the ",(0,s.kt)("inlineCode",{parentName:"p"},"System")," ",(0,s.kt)("a",{parentName:"p",href:"/next/Modules"},"module"),"). Thus, the ",(0,s.kt)("inlineCode",{parentName:"p"},"System.Object")," class is the parent object of all custom classes."),(0,s.kt)("p",null,"The platform supports multiple inheritance of custom classes, meaning that a class can have several parent classes. "),(0,s.kt)("h3",{id:"abstract"},"Abstract classes"),(0,s.kt)("p",null,"Some custom classes in the system can be ",(0,s.kt)("em",{parentName:"p"},"abstract"),". The difference between these classes and the rest is that it is impossible to create an instance of an abstract class. Non-abstract classes, in turn, are called ",(0,s.kt)("em",{parentName:"p"},"concrete"),"."),(0,s.kt)("h3",{id:"class-change"},"Class change"),(0,s.kt)("p",null,"The platform allows changing the class of an existing object. Since objects can only be instances of concrete classes, it is forbidden to change the class of an object to abstract."),(0,s.kt)("h3",{id:"commonparentclass"},"Common ancestor"),(0,s.kt)("p",null,'As a common ancestor for several custom classes, the platform selects a class from which all these classes are inherited, and the total number of "steps" of inheritance to these classes is minimal (that is, the closest class is selected).'),(0,s.kt)("h3",{id:"language"},"Language"),(0,s.kt)("p",null,"To add a new custom class to the system, use the ",(0,s.kt)("a",{parentName:"p",href:"/next/CLASS_statement"},(0,s.kt)("inlineCode",{parentName:"a"},"CLASS")," statement"),"."),(0,s.kt)("h3",{id:"examples"},"Examples"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS ABSTRACT Document; // The caption of this class will be 'Document'\nCLASS IncomeDocument 'Income' : Document;\nCLASS OutcomeDocument 'Expenses' : Document;\n\nCLASS Person;\nCLASS Worker;\nCLASS Musician : Person, Worker; // multiple inheritance\n\nCLASS Barcode 'Barcode'; // The parent class of Barcode will be the System.Object class\n\nCLASS PrintOrientation {\n    portrait 'Portrait',\n    landscape 'Landscape'\n}\n")))}u.isMDXComponent=!0}}]);