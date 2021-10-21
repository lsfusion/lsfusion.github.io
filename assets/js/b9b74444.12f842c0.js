(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[67512],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=o,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7419:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(74034),o=n(79973),a=(n(67294),n(3905)),i=["components"],l={title:"Selection (CASE, IF, MULTI, OVERRIDE, EXCLUSIVE)"},p=void 0,s={unversionedId:"Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE",id:"Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE",isDocsHomePage:!1,title:"Selection (CASE, IF, MULTI, OVERRIDE, EXCLUSIVE)",description:"The selection operator creates a property that determines for a set of conditions which condition is met, and returns the value of the result corresponding to that condition. If none of the conditions is met, then the value of the created property will be NULL.",source:"@site/docs/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE.md",sourceDirName:".",slug:"/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE",permalink:"/next/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE.md",tags:[],version:"current",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"7/7/2021",frontMatter:{title:"Selection (CASE, IF, MULTI, OVERRIDE, EXCLUSIVE)"},sidebar:"learn",previous:{title:"Property signature (CLASS)",permalink:"/next/Property_signature_CLASS"},next:{title:"Overview",permalink:"/next/Set_operations"}},c=[{value:"Polymorphic form",id:"poly",children:[],level:3},{value:"Mutual exclusion of conditions",id:"exclusive",children:[],level:3},{value:"Implicit definition",id:"implicit-definition",children:[],level:3},{value:"Single form",id:"single",children:[],level:3},{value:"Determining the result class",id:"determining-the-result-class",children:[],level:3},{value:"Language",id:"language",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],m={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"selection")," operator creates a property that determines for a set of ",(0,a.kt)("em",{parentName:"p"},"conditions")," which condition is met, and returns the value of the ",(0,a.kt)("em",{parentName:"p"},"result")," corresponding to that condition. If none of the conditions is met, then the value of the created property will be ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),". "),(0,a.kt)("p",null,"All conditions and results are defined as some properties and/or parameters. Accordingly, a condition ",(0,a.kt)("em",{parentName:"p"},"is satisfied")," if the value of the property or parameter by which this condition is set is not equal to ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),". "),(0,a.kt)("h3",{id:"poly"},"Polymorphic form"),(0,a.kt)("p",null,"The platform also allows you to define a condition and the corresponding result with one property. In this case, the condition may be either matching the property's ",(0,a.kt)("a",{parentName:"p",href:"/next/Property_signature_CLASS"},"signature"),", or the property itself. We will call this the ",(0,a.kt)("em",{parentName:"p"},"polymorphic")," form of the operator."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Note that the ",(0,a.kt)("a",{parentName:"p",href:"/next/Extremum_MAX_MIN"},"extremum operator")," and ",(0,a.kt)("a",{parentName:"p",href:"/next/Logical_operators_AND_OR_NOT_XOR"},"logical operators")," basically are also varieties of the selection operator (and of its polymorphic form, i.e. the conditions and result are defined by one property)"))),(0,a.kt)("h3",{id:"exclusive"},"Mutual exclusion of conditions"),(0,a.kt)("p",null,"The selection operator lets you specify that all its conditions are ",(0,a.kt)("em",{parentName:"p"},"mutually exclusive"),". If this option is specified, and the conditions are not in fact mutually exclusive, the platform will throw the corresponding error."),(0,a.kt)("p",null,"It is worth noting that this check is no more than a hint to the platform (for better optimization), and also a kind of self-checking on the part of the developer. However, in many cases it allows you to make the code more transparent and readable (especially with the polymorphic form of the selection operator)."),(0,a.kt)("h3",{id:"implicit-definition"},"Implicit definition"),(0,a.kt)("p",null,"This operator supports ",(0,a.kt)("a",{parentName:"p",href:"/next/Property_extension"},"implicit definition")," using the technique of extensions, which allows, in particular, to implement polymorphism in the form that is common practice in OOP."),(0,a.kt)("h3",{id:"single"},"Single form"),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"single")," form of the selection operator checks exactly one condition. If this condition is met, the value of the specified result is returned. It is also possible to specify an ",(0,a.kt)("em",{parentName:"p"},"alternative result")," which value is returned if the condition is not met."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Type of mutual exclusion and implicit definition do not make sense/are not supported for this form of the operator"))),(0,a.kt)("h3",{id:"determining-the-result-class"},"Determining the result class"),(0,a.kt)("p",null,"The result class of the selection operator is the common ancestor (builtin or ",(0,a.kt)("a",{parentName:"p",href:"/next/User_classes#commonparentclass"},"user-defined"),") of its operands."),(0,a.kt)("h3",{id:"language"},"Language"),(0,a.kt)("p",null,"To create a property implementing a general form of selection, the ",(0,a.kt)("a",{parentName:"p",href:"/next/CASE_operator"},(0,a.kt)("inlineCode",{parentName:"a"},"CASE"))," operator is used. The polymorphic form of the selection operator is implemented using the ",(0,a.kt)("a",{parentName:"p",href:"/next/MULTI_operator"},(0,a.kt)("inlineCode",{parentName:"a"},"MULTI")),", ",(0,a.kt)("a",{parentName:"p",href:"/next/OVERRIDE_operator"},(0,a.kt)("inlineCode",{parentName:"a"},"OVERRIDE"))," and ",(0,a.kt)("a",{parentName:"p",href:"/next/EXCLUSIVE_operator"},(0,a.kt)("inlineCode",{parentName:"a"},"EXCLUSIVE")),", operators; the single form using the ",(0,a.kt)("a",{parentName:"p",href:"/next/IF_operator"},(0,a.kt)("inlineCode",{parentName:"a"},"IF"))," and ",(0,a.kt)("a",{parentName:"p",href:"/next/IF_..._THEN_operator"},(0,a.kt)("inlineCode",{parentName:"a"},"IF ... THEN"))," operator (the only operator that allows the specification of an alternative result)."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Color;\nid = DATA STRING[100] (Color);\n\nbackground 'Color' (Color c) = CASE\n    WHEN id(c) == 'Black' THEN RGB(0,0,0)\n    WHEN id(c) == 'Red' THEN RGB(255,0,0)\n    WHEN id(c) == 'Green' THEN RGB(0,255,0)\n;\n\nid (TypeExecEnv type) = CASE EXCLUSIVE\n    WHEN type == TypeExecEnv.materialize THEN 3\n    WHEN type == TypeExecEnv.disablenestloop THEN 2\n    WHEN type == TypeExecEnv.none THEN 1\n    ELSE 0\n;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"nameMulti (Human h) = MULTI 'Male' IF h IS Male, 'Female' IF h IS Female;\n\nCLASS Ledger;\nCLASS InLedger : Ledger;\nquantity = DATA INTEGER (InLedger);\n\nCLASS OutLedger : Ledger;\nquantity = DATA INTEGER (OutLedger);\n\nsignedQuantity (Ledger l) = MULTI quantity[InLedger](l), quantity[OutLedger](l);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Group;\nmarkup = DATA NUMERIC[8,2] (Group);\n\nmarkup = DATA NUMERIC[8,2] (Book);\ngroup = DATA Group (Book);\noverMarkup (Book b) = OVERRIDE markup(b), markup(group(b));\n\nnotNullDate (INTEGER i) = OVERRIDE date(i), 2010_01_01;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"background 'Color' (INTEGER i) = EXCLUSIVE RGB(255,238,165) IF i <= 5,\n                                                   RGB(255,160,160) IF i > 5;\n\nCLASS Human;\n\nCLASS Male : Human;\nCLASS Female : Human;\n\nname(Human h) = EXCLUSIVE 'Male' IF h IS Male, 'Female' IF h IS Female;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"name = DATA STRING[100] (Book);\nhasName (Book b) = TRUE IF name(b);\n\nbackground (Book b) = RGB(224, 255, 128) IF b IS Book;\n\ncountTags (Book b) = GROUP SUM 1 IF in(b, Tag t);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"price1 = DATA NUMERIC[10,2] (Book);\nprice2 = DATA NUMERIC[10,2] (Book);\nmaxPrice (Book b) = IF price1(b) > price2(b) THEN price1(b) ELSE price2(b);\n\n// if h is of another class, it will be NULL\nsex (Human h) = IF h IS Male THEN 'Male' ELSE ('Female' IF h IS Female); \n\nisDifferent(a, b) = IF a != b THEN TRUE;\n")))}d.isMDXComponent=!0}}]);