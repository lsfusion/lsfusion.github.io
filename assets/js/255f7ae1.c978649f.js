"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[93927],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||s;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30330:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var r=n(83117),a=(n(67294),n(3905));const s={title:"How-to: Namespaces"},o=void 0,l={unversionedId:"How-to_Namespaces",id:"How-to_Namespaces",title:"How-to: Namespaces",description:"Occasionally, you will find yourself in situations where you will need to use the same name for different system elements. For this purpose, you can assign them to different namespaces that are defined for a module using the NAMESPACE statement. By default, the namespace matches the name of the module.",source:"@site/docs/How-to_Namespaces.md",sourceDirName:".",slug:"/How-to_Namespaces",permalink:"/How-to_Namespaces",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/How-to_Namespaces.md",tags:[],version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"Jun 9, 2021",frontMatter:{title:"How-to: Namespaces"},sidebar:"learn",previous:{title:"How-to: Searching for elements",permalink:"/How-to_Searching_for_elements"},next:{title:"How-to: Explicit typing",permalink:"/How-to_Explicit_typing"}},i={},c=[],u={toc:c};function p(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Occasionally, you will find yourself in situations where you will need to use the same ",(0,a.kt)("a",{parentName:"p",href:"/Naming"},"name")," for different system elements. For this purpose, you can assign them to different namespaces that are defined for a module using the ",(0,a.kt)("a",{parentName:"p",href:"/Module_header"},(0,a.kt)("inlineCode",{parentName:"a"},"NAMESPACE")," statement"),". By default, the namespace matches the name of the module."),(0,a.kt)("p",null,"Let's create two modules, ",(0,a.kt)("inlineCode",{parentName:"p"},"UseCaseNamePurchase")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"UseCaseNameSale"),", that declare the logic of purchase and sell orders:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"MODULE UseCaseNamePurchase;\n\nNAMESPACE Purchase;\n\nCLASS Order 'Order';\ndate 'Date' = DATA DATE (Order);\nnumber 'Number' = DATA INTEGER (Order);\n\nFORM orders 'Purchase orders'\n    OBJECTS o = Order\n    PROPERTIES(o) date, number\n;\n\nNAVIGATOR {\n    NEW orders;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"MODULE UseCaseNameSale;\n\nNAMESPACE Sale;\n\nCLASS Order 'Order';\ndate 'Date' = DATA DATE (Order);\nnumber 'Number' = DATA INTEGER (Order);\n\nFORM orders 'Sales orders'\n    OBJECTS o = Order\n    PROPERTIES(o) date, number\n;\n\nNAVIGATOR {\n    NEW orders;\n}\n")),(0,a.kt)("p",null,"Both of them have the ",(0,a.kt)("inlineCode",{parentName:"p"},"Order")," class declared in them, but since the modules have different namespaces, the first one's will be ",(0,a.kt)("inlineCode",{parentName:"p"},"Purchase"),", the second one's will be ",(0,a.kt)("inlineCode",{parentName:"p"},"Sale"),"."),(0,a.kt)("p",null,"Let's declare a test module with a ",(0,a.kt)("inlineCode",{parentName:"p"},"Test")," namespace that will simultaneously depend on both modules:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"REQUIRE UseCaseNamePurchase, UseCaseNameSale;\n\nNAMESPACE Test;\n\nmessagePurchaseCount 'Display the number of purchase orders' {\n    MESSAGE GROUP SUM 1 IF o IS Purchase.Order;\n}\nmessageSaleCount 'Display the number of sales orders' {\n    MESSAGE GROUP SUM 1 IF o IS Sale.Order;\n}\n\nNAVIGATOR {\n    NEW ACTION messagePurchaseCount;\n    NEW ACTION messageSaleCount;\n}\n")),(0,a.kt)("p",null,"If you try to refer to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Order")," class without explicitly specifying the namespace, you will see an error message:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7930).Z,width:"446",height:"102"})),(0,a.kt)("p",null,"All such references require an explicit specification of the namespace."),(0,a.kt)("p",null,"In case the namespace of a module matches the space of the required system element (for example, ",(0,a.kt)("inlineCode",{parentName:"p"},"Purchase"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"NAMESPACE Purchase;\n")),(0,a.kt)("p",null,"or the namespace priority has not been specified using the ",(0,a.kt)("a",{parentName:"p",href:"/Module_header"},(0,a.kt)("inlineCode",{parentName:"a"},"PRIORITY")," statement"),","),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"PRIORITY Purchase;\n")),(0,a.kt)("p",null,"you can skip the specification of the namespace"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"messagePurchaseCount 'Display the number of purchase orders' {\n    MESSAGE GROUP SUM 1 IF o IS Order;\n}\nmessageSaleCount 'Display the number of sales orders' {\n    MESSAGE GROUP SUM 1 IF o IS Sale.Order;\n}\n\nNAVIGATOR {\n    NEW ACTION messagePurchaseCount;\n    NEW ACTION messageSaleCount;\n}\n")),(0,a.kt)("p",null,"If you don't specify the namespace, the class from ",(0,a.kt)("inlineCode",{parentName:"p"},"Purchase")," will be used. You still can explicitly specify the namespace (for example, ",(0,a.kt)("inlineCode",{parentName:"p"},"Sale"),")."))}p.isMDXComponent=!0},7930:function(e,t,n){t.Z=n.p+"assets/images/How-to_Namespaces-d3869b9262099eff7d50035cbade492e.png"}}]);