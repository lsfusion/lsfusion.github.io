(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[85765],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),u=o,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69659:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var a=n(22122),o=n(19756),r=(n(67294),n(3905)),i={title:"Action extension"},c={unversionedId:"Action_extension",id:"Action_extension",isDocsHomePage:!1,title:"Action extension",description:'The actions extension technique allows the developer to declare an abstract action in one module and add to it an implementation in other modules. This technique is essentially a "postponed definition" of a branch operator, where the operator\u2019s title is defined when the property is declared, and branching conditions are added as new functionality (of classes or static objects) is added to the system. Furthermore, branching conditions (if branching is not mutually exclusive) can be added both to the beginning and to the end of the abstract action created. Similarly, this technique works with a sequence operator.',source:"@site/docs/Action_extension.md",sourceDirName:".",slug:"/Action_extension",permalink:"/next/Action_extension",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Action_extension.md",version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Action extension"},sidebar:"learn",previous:{title:"Property extension",permalink:"/next/Property_extension"},next:{title:"Form extension",permalink:"/next/Form_extension"}},s=[{value:"Polymorphic form",id:"poly",children:[]},{value:"Mutual exclusion of conditions",id:"exclusive",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/next/Actions"},"actions")," ",(0,r.kt)("a",{parentName:"p",href:"/next/Extensions"},"extension")," technique allows the developer to declare an abstract action in one ",(0,r.kt)("a",{parentName:"p",href:"/next/Modules"},"module"),' and add to it an implementation in other modules. This technique is essentially a "postponed definition" of a ',(0,r.kt)("a",{parentName:"p",href:"/next/Branching_CASE_IF_MULTI"},"branch operator"),", where the operator\u2019s title is defined when the property is declared, and branching conditions are added as new functionality (of ",(0,r.kt)("a",{parentName:"p",href:"/next/Classes"},"classes")," or ",(0,r.kt)("a",{parentName:"p",href:"/next/Static_objects"},"static objects"),") is added to the system. Furthermore, branching conditions (if branching is not mutually exclusive) can be added both to the beginning and to the end of the abstract action created. Similarly, this technique works with a ",(0,r.kt)("a",{parentName:"p",href:"/next/Sequence"},"sequence operator"),"."),(0,r.kt)("p",null,"For abstract actions, the expected classes of parameters must be specified. Then the platform will automatically check that the added implementations match these classes. Also, if necessary, you can check that for all descendants of the parameter classes at least one implementation is specified (or exactly one, if the conditions are ",(0,r.kt)("a",{parentName:"p",href:"/next/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE"},"mutually exclusive"),")."),(0,r.kt)("p",null,"Actions extension allows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Implement the concept of action polymorphism by analogy with certain object-oriented programming languages."),(0,r.kt)("li",{parentName:"ul"},'Remove dependency between modules by adding specific "entry points," to which new behavior can be added later.')),(0,r.kt)("h3",{id:"poly"},"Polymorphic form"),(0,r.kt)("p",null,"As with a branching operator, for an abstract action there is a ",(0,r.kt)("em",{parentName:"p"},"polymorphic form"),", where it is possible not to define a condition explicitly, but to use as a condition matching the ",(0,r.kt)("a",{parentName:"p",href:"/next/Property_signature_CLASS"},"signature")," of the action that corresponds to this condition."),(0,r.kt)("h3",{id:"exclusive"},"Mutual exclusion of conditions"),(0,r.kt)("p",null,"As for a branch operator, you can specify that all conditions of an abstract action must be ",(0,r.kt)("em",{parentName:"p"},"mutually exclusive"),". If this option is specified, and the conditions are not in fact mutually exclusive, the platform will throw the corresponding error."),(0,r.kt)("p",null,"It is worth noting that this check is no more than a hint to the platform (for better optimization), and also a kind of self-checking on the part of the developer. However, in many cases it allows to make the code more transparent and readable (especially in a polymorphic form of the abstract action)."),(0,r.kt)("h3",{id:"language"},"Language"),(0,r.kt)("p",null,"The key features that implement the extension technique are the ",(0,r.kt)("a",{parentName:"p",href:"/next/ABSTRACT_action_operator"},(0,r.kt)("inlineCode",{parentName:"a"},"ABSTRACT")," operator"),", for declaring an abstract action, and the ",(0,r.kt)("a",{parentName:"p",href:"/next/ACTION+_statement"},(0,r.kt)("inlineCode",{parentName:"a"},"ACTION+")," statement"),", for adding an implementation to it."),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"exportXls 'Export to Excel'  ABSTRACT CASE ( Order);         // In this case, ABSTRACT CASE OVERRIDE LAST is created\nexportXls (Order o) + WHEN name(currency(o)) == 'USD' THEN {\n    MESSAGE 'Export USD not implemented';\n}\n\nCLASS Task;\nrun 'Execute'  ABSTRACT ( Task);                           // ABSTRACT MULTI EXCLUSIVE\n\nCLASS Task1 : Task;\nname = DATA STRING[100] (Task);\nrun (Task1 t) + {\n    MESSAGE 'Run Task1 ' + name(t);\n}\n\n\nCLASS OrderDetail;\nprice = DATA NUMERIC[14,2] (OrderDetail);\n\nCLASS InvoiceDetail;\nprice = DATA NUMERIC[14,2] (InvoiceDetail);\nfill  ABSTRACT LIST ( OrderDetail, InvoiceDetail);   // ABSTRACT LIST LAST\n\nfill (OrderDetail od, InvoiceDetail id) + {\n    price(id) <- price(od);\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS ABSTRACT Animal;\nwhoAmI  ABSTRACT ( Animal);\n\nCLASS Dog : Animal;\nwhoAmI (Dog d) + {  MESSAGE 'I am a dog!'; }\n\nCLASS Cat : Animal;\nwhoAmI (Cat c) + {  MESSAGE 'I am a \u0441at!'; }\n\nask ()  {\n    FOR Animal a IS Animal DO\n        whoAmI(a); // a corresponding message will be shown for each object\n}\n\nonStarted  ABSTRACT LIST ( );\nonStarted () + {\n    name(Sku s) <- '1';\n}\nonStarted () + {\n    name(Sku s) <- '2';\n}\n// first, the 1st action is executed, then the 2nd action\n\nCLASS Human;\nname = DATA STRING[100] (Human);\n\ntestName  ABSTRACT CASE ( Human);\n\ntestName (Human h) + WHEN name(h) == 'John' THEN {  MESSAGE 'I am John'; }\ntestName (Human h) + WHEN name(h) == 'Bob' THEN {  MESSAGE 'I am Bob'; }\n")))}p.isMDXComponent=!0}}]);