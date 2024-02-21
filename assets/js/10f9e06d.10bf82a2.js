"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[21136],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return u}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),g=l(r),u=a,d=g["".concat(s,".").concat(u)]||g[u]||m[u]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},26169:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return l}});var n=r(83117),a=(r(67294),r(3905));const o={title:"AGGR operator"},i=void 0,p={unversionedId:"AGGR_operator",id:"version-v5/AGGR_operator",title:"AGGR operator",description:"The AGGR operator creates an aggregation.",source:"@site/versioned_docs/version-v5/AGGR_operator.md",sourceDirName:".",slug:"/AGGR_operator",permalink:"/AGGR_operator",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/AGGR_operator.md",tags:[],version:"v5",lastUpdatedAt:1708525070,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"AGGR operator"},sidebar:"learn",previous:{title:"ACTIVE TAB operator",permalink:"/ACTIVE_TAB_operator"},next:{title:"CASE operator",permalink:"/CASE_operator"}},s={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}],c={toc:l};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"AGGR")," operator creates an ",(0,a.kt)("a",{parentName:"p",href:"/Aggregations"},"aggregation"),"."),(0,a.kt)("h3",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"AGGR aggrClass WHERE aggrExpr\n")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"In addition to the property that is the result of this operator and contains the value of the aggregated object, for each parameter the ",(0,a.kt)("inlineCode",{parentName:"p"},"AGGR")," operator also creates a data property with one parameter, whose ",(0,a.kt)("a",{parentName:"p",href:"/User_classes"},"class")," is equal to the class of the aggregated object. The value class and name of this property are equal to the class and name of the parameter for which this property is created. Accordingly, when creating an aggregated object, the value of the parameter for which the aggregated object is created is automatically written to this property."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Creating an aggregation is in many ways similar to the following statements (example for 2 parameters):"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"prm1 = DATA class1 (aggrClass);\nprm2 = DATA class2 (aggrClass);\nresult = GROUP AGGR aggrClass aggrObject BY prm1(aggrObject), prm2(aggrObject);\n\n// if aggrExpr becomes non-null, create an object of class aggrClass (equivalent to whereExpr => result (prm1, prm2) RESOLVE LEFT)\nWHEN SET(aggrExpr) AND NOT result(prm1, prm2)\n    NEW aggrObject = aggrClass {\n        prm1(aggrObject) <- prm1;\n        prm2(aggrObject) <- prm2;\n    }\n\n// if aggrExpr becomes null, remove an object (equivalent to aggrClass aggrObject IS aggrClass => result(prm1(aggrObject),prm2(aggrObject)) RESOLVE RIGHT)\nWHEN aggrClass aggrObject IS aggrClass AND DROPPED(result(prm1(aggrObject),prm2(aggrObject))) DO\n    DELETE aggrObject;\n")),(0,a.kt)("p",{parentName:"admonition"},"but it is a more declarative and readable statement, and therefore using it is recommended")),(0,a.kt)("p",null,"Unlike other context-dependent operators, the ",(0,a.kt)("inlineCode",{parentName:"p"},"AGGR")," operator cannot be used in ",(0,a.kt)("a",{parentName:"p",href:"/Expression"},"expressions")," inside other operators (in this sense it is more like context-independent operators), or in the ",(0,a.kt)("a",{parentName:"p",href:"/JOIN_operator"},(0,a.kt)("inlineCode",{parentName:"a"},"JOIN")," operator")," (inside ",(0,a.kt)("inlineCode",{parentName:"p"},"[= ]"),")"),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"aggrClass")),(0,a.kt)("p",{parentName:"li"},"  The value class of the aggregated object.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"aggrExpr")),(0,a.kt)("p",{parentName:"li"},"  An ",(0,a.kt)("a",{parentName:"p",href:"/Expression"},"expression")," whose value defines an aggregated property."))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS A; CLASS B; CLASS C;\nf = DATA INTEGER (A, B);\nc = AGGR C WHERE f(A a, B b) MATERIALIZED INDEXED;\n\nCLASS AB;\nab = AGGR AB WHERE A a IS A AND B b IS B; // for each A B pair creates an object AB\n\nCLASS Shipment 'Delivery';\ndate = ABSTRACT DATE (Shipment);\nCLASS Invoice 'Invoice';\ncreateShipment 'Create delivery' = DATA BOOLEAN (Invoice);\ndate 'Shipment date' = DATA DATE (Invoice);\nCLASS ShipmentInvoice 'Delivery by invoice' : Shipment;\n// creating a delivery by invoice, if the option for delivery creation is defined for the invoice\nshipment(Invoice invoice) = AGGR ShipmentInvoice WHERE createShipment(invoice); \ndate(ShipmentInvoice si) += sum(date(invoice(si)),1); // delivery date = invoice date + 1\n")))}m.isMDXComponent=!0}}]);