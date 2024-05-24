"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[64047],{97835:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var c=n(74848),a=n(28453);const r={title:"How-to: Inheritance and aggregation"},o=void 0,s={id:"How-to_Inheritance_and_aggregation",title:"How-to: Inheritance and aggregation",description:"In order to demonstrate the principles of object inheritance and aggregation, let's implement the logic of creating batches based on receipts and production documents. Let's make it so that each new document with a Posted property will automatically generate exactly one new product batch.",source:"@site/versioned_docs/version-v5/How-to_Inheritance_and_aggregation.md",sourceDirName:".",slug:"/How-to_Inheritance_and_aggregation",permalink:"/How-to_Inheritance_and_aggregation",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/How-to_Inheritance_and_aggregation.md",tags:[],version:"v5",lastUpdatedAt:1685108136e3,frontMatter:{title:"How-to: Inheritance and aggregation"},sidebar:"learn",previous:{title:"How-to: Constraints",permalink:"/How-to_Constraints"},next:{title:"How-to: Searching for elements",permalink:"/How-to_Searching_for_elements"}},i={},d=[];function l(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:"In order to demonstrate the principles of object inheritance and aggregation, let's implement the logic of creating batches based on receipts and production documents. Let's make it so that each new document with a Posted property will automatically generate exactly one new product batch."}),"\n",(0,c.jsx)(t.p,{children:"Let's update our logic with the notion of a product whose batches will be accounted for:"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-lsf",children:"CLASS Item 'Product';\nname 'Name' = DATA ISTRING[50] (Item) IN id;\nFORM items 'Products'\n    OBJECTS i = Item\n    PROPERTIES(i) name, NEW, DELETE\n;\nNAVIGATOR {\n    NEW items;\n}\n"})}),"\n",(0,c.jsxs)(t.p,{children:["Let's create a ",(0,c.jsx)(t.code,{children:"Receipt"})," ",(0,c.jsx)(t.a,{href:"/User_classes",children:"class"})," with objects that will indicate the receipt of products:"]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-lsf",children:"CLASS Receipt 'Arrival';\ndate 'Date' = DATA DATE (Receipt) IN id;\nitem 'Product' = DATA Item (Receipt);\nnameItem 'Product' (Receipt r) = name(item(r)) IN id;\nposted 'Completed' = DATA BOOLEAN (Receipt);\n\nFORM receipts 'Arrivals'\n    OBJECTS r = Receipt\n    PROPERTIES(r) date, nameItem, posted, NEW, DELETE\n;\nNAVIGATOR {\n    NEW receipts;\n}\n"})}),"\n",(0,c.jsxs)(t.p,{children:["For the purposes of this example, let's use a simplified scheme with a single class. In reality, you would be using two classes: ",(0,c.jsx)(t.code,{children:"Receipt"})," (for documents) and ",(0,c.jsx)(t.code,{children:"ReceiptDetail"})," (for document lines)."]}),"\n",(0,c.jsxs)(t.p,{children:["In a similar way, let's create a ",(0,c.jsx)(t.code,{children:"Production"})," class to be used for manufactured products:"]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-lsf",children:"CLASS Production 'Production';\ndate 'Date' = DATA DATE (Production) IN id;\nitem 'Product' = DATA Item (Production);\nnameItem 'Product' (Production p) = name(item(p)) IN id;\nposted 'Completed' = DATA BOOLEAN (Production);\n\nFORM productions 'Production'\n    OBJECTS p = Production\n    PROPERTIES(p) date, nameItem, posted, NEW, DELETE\n;\nNAVIGATOR {\n    NEW productions;\n}\n"})}),"\n",(0,c.jsxs)(t.p,{children:["So far, we've been only creating regular classes without any inheritance. To implement the batch logic, let's create an abstract class called ",(0,c.jsx)(t.code,{children:"Batch"}),":"]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-lsf",children:"CLASS ABSTRACT Batch 'Batch';\ndate 'Date' = ABSTRACT DATE (Batch) IN id;\nitem 'Product' = ABSTRACT Item (Batch);\nnameItem 'Product' (Batch b) = name(item(b));\ntype 'Type' = ABSTRACT STRING[30] (Batch);\n\nFORM batches 'Batches'\n    OBJECTS b = Batch\n    PROPERTIES(b) READONLY date, nameItem, type, objectClassName\n;\nNAVIGATOR {\n    NEW batches;\n}\n"})}),"\n",(0,c.jsxs)(t.p,{children:["Each object of this class will correspond to one batch of a particular product. All of its ",(0,c.jsx)(t.a,{href:"/Properties",children:"properties"})," will be declared abstract \u2014 that is, their implementation will differ depending on the class of a particular batch."]}),"\n",(0,c.jsxs)(t.p,{children:["You cannot directly create objects of the abstract ",(0,c.jsx)(t.code,{children:"Batch"})," class in the system. To do that, you need to declare specific classes that will be inherited from it. In particular, let's create a class for batches formed from the receipt of products:"]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-lsf",children:"CLASS ReceiptBatch 'Arrival based batch';\nbatch (Receipt receipt) = AGGR ReceiptBatch WHERE posted(receipt);\n"})}),"\n",(0,c.jsxs)(t.p,{children:["Use the ",(0,c.jsxs)(t.a,{href:"/AGGR_operator",children:[(0,c.jsx)(t.code,{children:"AGGR"})," operator"]})," for each object of the ",(0,c.jsx)(t.code,{children:"Receipt"}),",  class with a defined ",(0,c.jsx)(t.code,{children:"posted"})," property to automatically create (and delete) an object of the ",(0,c.jsx)(t.code,{children:"ReceiptBatch"})," class. At this time, the system creates two properties with reciprocal object links: ",(0,c.jsx)(t.code,{children:"batch(Receipt r)"})," and ",(0,c.jsx)(t.code,{children:"receipt(ReceiptBatch b)"}),"."]}),"\n",(0,c.jsxs)(t.p,{children:["Now we need to inherit the ",(0,c.jsx)(t.code,{children:"ReceiptBatch"})," class from ",(0,c.jsx)(t.code,{children:"Batch"})," to make sure that all batches created by the receipt document also become objects of the abstract class (that is, previously declared batches):"]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-lsf",children:"EXTEND CLASS ReceiptBatch : Batch;\ndate(ReceiptBatch rb) += date(receipt(rb));\nitem(ReceiptBatch rb) += item(receipt(rb));\ntype(ReceiptBatch rb) += 'Arrival' IF rb IS ReceiptBatch;\n"})}),"\n",(0,c.jsxs)(t.p,{children:["Inheritance is implemented with the help of the ",(0,c.jsx)(t.a,{href:"/EXTEND_CLASS_statement",children:"EXTEND CLASS statement"}),". After that, for each abstract property of ",(0,c.jsx)(t.code,{children:"Batch"}),", we define how exactly it should be calculated for a specific ",(0,c.jsx)(t.code,{children:"ReceiptBatch"})," class. Date and product values are retrieved from the receipt document through the ",(0,c.jsx)(t.code,{children:"receipt(ReceiptBatch b)"})," link. The necessary string is substituted into the batch type under the condition that the object belongs to the right class (otherwise, the expression will be defined for objects of any class, and the system will generate a signature mismatch error)."]}),"\n",(0,c.jsxs)(t.p,{children:["Note that you could inherit a class directly while declaring the ",(0,c.jsx)(t.code,{children:"ReceiptBatch"})," class."]}),"\n",(0,c.jsx)(t.p,{children:"In a similar fashion, let's create batches for manufacturing documents:"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-lsf",children:"CLASS ProductionBatch 'Production based batch';\nbatch (Production production) = AGGR ProductionBatch WHERE posted(production);\n\nEXTEND CLASS ProductionBatch : Batch;\ndate(ProductionBatch rb) += date(production(rb));\nitem(ProductionBatch rb) += item(production(rb));\ntype(ProductionBatch rb) += 'Production' IF rb IS ProductionBatch;\n"})}),"\n",(0,c.jsx)(t.p,{children:"If necessary, you can create a class for manual batch entry by the user:"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-lsf",children:"CLASS UserBatch 'Manually created batch';\ndate 'Date' = DATA DATE (UserBatch) IN id;\nitem 'Product' = DATA Item (UserBatch);\nnameItem 'Product' (UserBatch b) = name(item(b));\n\nFORM userBatches 'Batches (manual)'\n    OBJECTS b = UserBatch\n    PROPERTIES(b) date, nameItem, NEW, DELETE\n;\n\nNAVIGATOR {\n    NEW userBatches;\n}\n\nEXTEND CLASS UserBatch : Batch;\ndate(UserBatch ub) += date(ub);\nitem(UserBatch ub) += item(ub);\ntype(UserBatch ub) += 'Manual' IF ub IS UserBatch;\n"})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var c=n(96540);const a={},r=c.createContext(a);function o(e){const t=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),c.createElement(r.Provider,{value:t},e.children)}}}]);