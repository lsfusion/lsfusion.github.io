"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[76581],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70512:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s}});var r=n(83117),o=(n(67294),n(3905));const a={title:"Selection (CASE, IF, MULTI, OVERRIDE, EXCLUSIVE)"},i=void 0,l={unversionedId:"Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE",id:"version-v4/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE",title:"Selection (CASE, IF, MULTI, OVERRIDE, EXCLUSIVE)",description:"The selection operator creates a property that determines for a set of conditions which condition is met, and returns the value of the result corresponding to that condition. If none of the conditions is met, then the value of the created property will be NULL.",source:"@site/versioned_docs/version-v4/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE.md",sourceDirName:".",slug:"/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE",permalink:"/v4/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE.md",tags:[],version:"v4",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"Jul 7, 2021",frontMatter:{title:"Selection (CASE, IF, MULTI, OVERRIDE, EXCLUSIVE)"},sidebar:"learn",previous:{title:"Property signature (CLASS)",permalink:"/v4/Property_signature_CLASS"},next:{title:"Set operations",permalink:"/v4/Set_operations"}},p={},s=[{value:"Polymorphic form",id:"poly",level:3},{value:"Mutual exclusion of conditions",id:"exclusive",level:3},{value:"Implicit definition",id:"implicit-definition",level:3},{value:"Single form",id:"single",level:3},{value:"Determining the result class",id:"determining-the-result-class",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"selection")," operator creates a property that determines for a set of ",(0,o.kt)("em",{parentName:"p"},"conditions")," which condition is met, and returns the value of the ",(0,o.kt)("em",{parentName:"p"},"result")," corresponding to that condition. If none of the conditions is met, then the value of the created property will be ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL"),". "),(0,o.kt)("p",null,"All conditions and results are defined as some properties and/or parameters. Accordingly, a condition ",(0,o.kt)("em",{parentName:"p"},"is satisfied")," if the value of the property or parameter by which this condition is set is not equal to ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL"),". "),(0,o.kt)("h3",{id:"poly"},"Polymorphic form"),(0,o.kt)("p",null,"The platform also allows you to define a condition and the corresponding result with one property. In this case, the condition may be either matching the property's ",(0,o.kt)("a",{parentName:"p",href:"/v4/Property_signature_CLASS"},"signature"),", or the property itself. We will call this the ",(0,o.kt)("em",{parentName:"p"},"polymorphic")," form of the operator."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Note that the ",(0,o.kt)("a",{parentName:"p",href:"/v4/Extremum_MAX_MIN"},"extremum operator")," and ",(0,o.kt)("a",{parentName:"p",href:"/v4/Logical_operators_AND_OR_NOT_XOR"},"logical operators")," basically are also varieties of the selection operator (and of its polymorphic form, i.e. the conditions and result are defined by one property)")),(0,o.kt)("h3",{id:"exclusive"},"Mutual exclusion of conditions"),(0,o.kt)("p",null,"The selection operator lets you specify that all its conditions are ",(0,o.kt)("em",{parentName:"p"},"mutually exclusive"),". If this option is specified, and the conditions are not in fact mutually exclusive, the platform will throw the corresponding error."),(0,o.kt)("p",null,"It is worth noting that this check is no more than a hint to the platform (for better optimization), and also a kind of self-checking on the part of the developer. However, in many cases it allows you to make the code more transparent and readable (especially with the polymorphic form of the selection operator)."),(0,o.kt)("h3",{id:"implicit-definition"},"Implicit definition"),(0,o.kt)("p",null,"This operator supports ",(0,o.kt)("a",{parentName:"p",href:"/v4/Property_extension"},"implicit definition")," using the technique of extensions, which allows, in particular, to implement polymorphism in the form that is common practice in OOP."),(0,o.kt)("h3",{id:"single"},"Single form"),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"single")," form of the selection operator checks exactly one condition. If this condition is met, the value of the specified result is returned. It is also possible to specify an ",(0,o.kt)("em",{parentName:"p"},"alternative result")," which value is returned if the condition is not met."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Type of mutual exclusion and implicit definition do not make sense/are not supported for this form of the operator")),(0,o.kt)("h3",{id:"determining-the-result-class"},"Determining the result class"),(0,o.kt)("p",null,"The result class of the selection operator is the common ancestor (builtin or ",(0,o.kt)("a",{parentName:"p",href:"/v4/User_classes#commonparentclass"},"user-defined"),") of its operands."),(0,o.kt)("h3",{id:"language"},"Language"),(0,o.kt)("p",null,"To create a property implementing a general form of selection, the ",(0,o.kt)("a",{parentName:"p",href:"/v4/CASE_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"CASE"))," operator is used. The polymorphic form of the selection operator is implemented using the ",(0,o.kt)("a",{parentName:"p",href:"/v4/MULTI_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"MULTI")),", ",(0,o.kt)("a",{parentName:"p",href:"/v4/OVERRIDE_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"OVERRIDE"))," and ",(0,o.kt)("a",{parentName:"p",href:"/v4/EXCLUSIVE_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"EXCLUSIVE")),", operators; the single form using the ",(0,o.kt)("a",{parentName:"p",href:"/v4/IF_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"IF"))," and ",(0,o.kt)("a",{parentName:"p",href:"/v4/IF_..._THEN_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"IF ... THEN"))," operator (the only operator that allows the specification of an alternative result)."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Color;\nid = DATA STRING[100] (Color);\n\nbackground 'Color' (Color c) = CASE\n    WHEN id(c) == 'Black' THEN RGB(0,0,0)\n    WHEN id(c) == 'Red' THEN RGB(255,0,0)\n    WHEN id(c) == 'Green' THEN RGB(0,255,0)\n;\n\nid (TypeExecEnv type) = CASE EXCLUSIVE\n    WHEN type == TypeExecEnv.materialize THEN 3\n    WHEN type == TypeExecEnv.disablenestloop THEN 2\n    WHEN type == TypeExecEnv.none THEN 1\n    ELSE 0\n;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"nameMulti (Human h) = MULTI 'Male' IF h IS Male, 'Female' IF h IS Female;\n\nCLASS Ledger;\nCLASS InLedger : Ledger;\nquantity = DATA INTEGER (InLedger);\n\nCLASS OutLedger : Ledger;\nquantity = DATA INTEGER (OutLedger);\n\nsignedQuantity (Ledger l) = MULTI quantity[InLedger](l), quantity[OutLedger](l);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Group;\nmarkup = DATA NUMERIC[8,2] (Group);\n\nmarkup = DATA NUMERIC[8,2] (Book);\ngroup = DATA Group (Book);\noverMarkup (Book b) = OVERRIDE markup(b), markup(group(b));\n\nnotNullDate (INTEGER i) = OVERRIDE date(i), 2010_01_01;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"background 'Color' (INTEGER i) = EXCLUSIVE RGB(255,238,165) IF i <= 5,\n                                                   RGB(255,160,160) IF i > 5;\n\nCLASS Human;\n\nCLASS Male : Human;\nCLASS Female : Human;\n\nname(Human h) = EXCLUSIVE 'Male' IF h IS Male, 'Female' IF h IS Female;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"name = DATA STRING[100] (Book);\nhasName (Book b) = TRUE IF name(b);\n\nbackground (Book b) = RGB(224, 255, 128) IF b IS Book;\n\ncountTags (Book b) = GROUP SUM 1 IF in(b, Tag t);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"price1 = DATA NUMERIC[10,2] (Book);\nprice2 = DATA NUMERIC[10,2] (Book);\nmaxPrice (Book b) = IF price1(b) > price2(b) THEN price1(b) ELSE price2(b);\n\n// if h is of another class, it will be NULL\nsex (Human h) = IF h IS Male THEN 'Male' ELSE ('Female' IF h IS Female); \n\nisDifferent(a, b) = IF a != b THEN TRUE;\n")))}u.isMDXComponent=!0}}]);