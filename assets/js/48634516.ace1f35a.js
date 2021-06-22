(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[39715],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(m,c(c({ref:t},p),{},{components:n})):a.createElement(m,c({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},47277:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return s},default:function(){return p}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),c={title:"How-to: Inheritance and aggregation"},i={unversionedId:"How-to_Inheritance_and_aggregation",id:"version-v4/How-to_Inheritance_and_aggregation",isDocsHomePage:!1,title:"How-to: Inheritance and aggregation",description:"In order to demonstrate the principles of object inheritance and aggregation, let's implement the logic of creating batches based on receipts and production documents. Let's make it so that each new document with a Posted property will automatically generate exactly one new product batch.",source:"@site/versioned_docs/version-v4/How-to_Inheritance_and_aggregation.md",sourceDirName:".",slug:"/How-to_Inheritance_and_aggregation",permalink:"/How-to_Inheritance_and_aggregation",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/How-to_Inheritance_and_aggregation.md",version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"How-to: Inheritance and aggregation"},sidebar:"version-v4/learn",previous:{title:"How-to: Constraints",permalink:"/How-to_Constraints"},next:{title:"How-to: Searching for elements",permalink:"/How-to_Searching_for_elements"}},s=[],l={toc:s};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In order to demonstrate the principles of object inheritance and aggregation, let's implement the logic of creating batches based on receipts and production documents. Let's make it so that each new document with a Posted property will automatically generate exactly one new product batch."),(0,o.kt)("p",null,"Let's update our logic with the notion of a product whose batches will be accounted for:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Item 'Product';\nname 'Name' = DATA ISTRING[50] (Item) IN id;\nFORM items 'Products'\n    OBJECTS i = Item\n    PROPERTIES(i) name, NEW, DELETE\n;\nNAVIGATOR {\n    NEW items;\n}\n")),(0,o.kt)("p",null,"Let's create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Receipt")," ",(0,o.kt)("a",{parentName:"p",href:"/User_classes"},"class")," with objects that will indicate the receipt of products:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Receipt 'Arrival';\ndate 'Date' = DATA DATE (Receipt) IN id;\nitem 'Product' = DATA Item (Receipt);\nnameItem 'Product' (Receipt r) = name(item(r)) IN id;\nposted 'Completed' = DATA BOOLEAN (Receipt);\n\nFORM receipts 'Arrivals'\n    OBJECTS r = Receipt\n    PROPERTIES(r) date, nameItem, posted, NEW, DELETE\n;\nNAVIGATOR {\n    NEW receipts;\n}\n")),(0,o.kt)("p",null,"For the purposes of this example, let's use a simplified scheme with a single class. In reality, you would be using two classes: ",(0,o.kt)("inlineCode",{parentName:"p"},"Receipt")," (for documents) and ",(0,o.kt)("inlineCode",{parentName:"p"},"ReceiptDetail")," (for document lines)."),(0,o.kt)("p",null,"In a similar way, let's create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Production")," class to be used for manufactured products:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Production 'Production';\ndate 'Date' = DATA DATE (Production) IN id;\nitem 'Product' = DATA Item (Production);\nnameItem 'Product' (Production p) = name(item(p)) IN id;\nposted 'Completed' = DATA BOOLEAN (Production);\n\nFORM productions 'Production'\n    OBJECTS p = Production\n    PROPERTIES(p) date, nameItem, posted, NEW, DELETE\n;\nNAVIGATOR {\n    NEW productions;\n}\n")),(0,o.kt)("p",null,"So far, we've been only creating regular classes without any inheritance. To implement the batch logic, let's create an abstract class called ",(0,o.kt)("inlineCode",{parentName:"p"},"Batch"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS ABSTRACT Batch 'Batch';\ndate 'Date' = ABSTRACT DATE (Batch) IN id;\nitem 'Product' = ABSTRACT Item (Batch);\nnameItem 'Product' (Batch b) = name(item(b));\ntype 'Type' = ABSTRACT STRING[30] (Batch);\n\nFORM batches 'Batches'\n    OBJECTS b = Batch\n    PROPERTIES(b) READONLY date, nameItem, type, objectClassName\n;\nNAVIGATOR {\n    NEW batches;\n}\n")),(0,o.kt)("p",null,"Each object of this class will correspond to one batch of a particular product. All of its ",(0,o.kt)("a",{parentName:"p",href:"/Properties"},"properties")," will be declared abstract \u2014 that is, their implementation will differ depending on the class of a particular batch."),(0,o.kt)("p",null,"You cannot directly create objects of the abstract ",(0,o.kt)("inlineCode",{parentName:"p"},"Batch")," class in the system. To do that, you need to declare specific classes that will be inherited from it. In particular, let's create a class for batches formed from the receipt of products:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS ReceiptBatch 'Arrival based batch';\nbatch (Receipt receipt) = AGGR ReceiptBatch WHERE posted(receipt);\n")),(0,o.kt)("p",null,"Use the ",(0,o.kt)("a",{parentName:"p",href:"/AGGR_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"AGGR")," operator")," for each object of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Receipt"),",  class with a defined ",(0,o.kt)("inlineCode",{parentName:"p"},"posted")," property to automatically create (and delete) an object of the ",(0,o.kt)("inlineCode",{parentName:"p"},"ReceiptBatch")," class. At this time, the system creates two properties with reciprocal object links: ",(0,o.kt)("inlineCode",{parentName:"p"},"batch(Receipt r)")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"receipt(ReceiptBatch b)"),"."),(0,o.kt)("p",null,"Now we need to inherit the ",(0,o.kt)("inlineCode",{parentName:"p"},"ReceiptBatch")," class from ",(0,o.kt)("inlineCode",{parentName:"p"},"Batch")," to make sure that all batches created by the receipt document also become objects of the abstract class (that is, previously declared batches):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"EXTEND CLASS ReceiptBatch : Batch;\ndate(ReceiptBatch rb) += date(receipt(rb));\nitem(ReceiptBatch rb) += item(receipt(rb));\ntype(ReceiptBatch rb) += 'Arrival' IF rb IS ReceiptBatch;\n")),(0,o.kt)("p",null,"Inheritance is implemented with the help of the ",(0,o.kt)("a",{parentName:"p",href:"/EXTEND_CLASS_statement"},"EXTEND CLASS statement"),". After that, for each abstract property of ",(0,o.kt)("inlineCode",{parentName:"p"},"Batch"),", we define how exactly it should be calculated for a specific ",(0,o.kt)("inlineCode",{parentName:"p"},"ReceiptBatch")," class. Date and product values are retrieved from the receipt document through the ",(0,o.kt)("inlineCode",{parentName:"p"},"receipt(ReceiptBatch b)")," link. The necessary string is substituted into the batch type under the condition that the object belongs to the right class (otherwise, the expression will be defined for objects of any class, and the system will generate a signature mismatch error)."),(0,o.kt)("p",null,"Note that you could inherit a class directly while declaring the ",(0,o.kt)("inlineCode",{parentName:"p"},"ReceiptBatch")," class."),(0,o.kt)("p",null,"In a similar fashion, let's create batches for manufacturing documents:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS ProductionBatch 'Production based batch';\nbatch (Production production) = AGGR ProductionBatch WHERE posted(production);\n\nEXTEND CLASS ProductionBatch : Batch;\ndate(ProductionBatch rb) += date(production(rb));\nitem(ProductionBatch rb) += item(production(rb));\ntype(ProductionBatch rb) += 'Production' IF rb IS ProductionBatch;\n")),(0,o.kt)("p",null,"If necessary, you can create a class for manual batch entry by the user:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS UserBatch 'Manually created batch';\ndate 'Date' = DATA DATE (UserBatch) IN id;\nitem 'Product' = DATA Item (UserBatch);\nnameItem 'Product' (UserBatch b) = name(item(b));\n\nFORM userBatches 'Batches (manual)'\n    OBJECTS b = UserBatch\n    PROPERTIES(b) date, nameItem, NEW, DELETE\n;\n\nNAVIGATOR {\n    NEW userBatches;\n}\n\nEXTEND CLASS UserBatch : Batch;\ndate(UserBatch ub) += date(ub);\nitem(UserBatch ub) += item(ub);\ntype(UserBatch ub) += 'Manual' IF ub IS UserBatch;\n")))}p.isMDXComponent=!0}}]);