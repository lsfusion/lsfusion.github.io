"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[5132],{71541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(74848),i=n(28453);const a={title:"How-to: Registers"},s=void 0,o={id:"How-to_Registers",title:"How-to: Registers",description:"Accumulation ledger",source:"@site/versioned_docs/version-v5/How-to_Registers.md",sourceDirName:".",slug:"/How-to_Registers",permalink:"/v5/How-to_Registers",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/How-to_Registers.md",tags:[],version:"v5",lastUpdatedAt:1685108136e3,frontMatter:{title:"How-to: Registers"},sidebar:"learn",previous:{title:"How-to: Working with documents",permalink:"/v5/How-to_Working_with_documents"},next:{title:"How-to: Numbering",permalink:"/v5/How-to_Numbering"}},c={},l=[{value:"Accumulation ledger",id:"accumulation-ledger",level:3},{value:"Information ledger",id:"information-ledger",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"accumulation-ledger",children:"Accumulation ledger"}),"\n",(0,r.jsx)(t.p,{children:"Let's assume we need to implement the logic for calculating the SKU balances."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lsf",children:"REQUIRE Utils;\n\nCLASS SKU 'SKU';\nCLASS Stock 'Warehouse';\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Theoretically we could just create a ",(0,r.jsx)(t.a,{href:"/v5/Properties",children:"property"})," that would sum up all incomings and subtract all outgoings, with all operations set explicitly. The weakness of this approach is that whenever a new operation is added, it needs to be added to the formula for calculating the balance. In addition, it will be difficult to build a form with a list of all the operations that can affect the balance for a specific SKU and warehouse. ",(0,r.jsx)(t.a,{href:"/v5/Modularity",children:"Modularity"})," will also be violated, because the module in which the balance property is declared will depend on all modules containing operations that affect it."]}),"\n",(0,r.jsxs)(t.p,{children:["To give the system efficient ",(0,r.jsx)(t.a,{href:"/v5/Extensions",children:"extensibility"}),", it is best to implement this kind of functionality using ",(0,r.jsx)(t.em,{children:"ledgers"}),". To do this, we introduce an abstract class ",(0,r.jsx)(t.code,{children:"SKULedger"}),". One instance of the class will reflect a single change in the balance by a given amount (positive or negative) for one SKU in one warehouse. Abstract properties are set for it, which need to be defined when the class is implemented."]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"All ledgers can have an arbitrary number and type of measurements. In this example they are the SKU and the Warehouse."})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lsf",children:"CLASS ABSTRACT SKULedger 'Register of changes in the product balance';\n\nposted 'Completed' = ABSTRACT BOOLEAN (SKULedger);\ndateTime 'Date/time' = ABSTRACT DATETIME (SKULedger);\n\nsku 'SKU' = ABSTRACT SKU (SKULedger);\nstock 'Warehouse' = ABSTRACT Stock (SKULedger);\n\nquantity 'Qty' = ABSTRACT NUMERIC[14,2] (SKULedger);\n\nbalance 'Balance' = GROUP SUM quantity(SKULedger l) IF posted(l) BY stock(l), sku(l);\n\nbalance 'Balance as of date/time' = GROUP SUM quantity(SKULedger l) IF posted(l) AND dateTime(l) <= DATETIME dt BY stock(l), sku(l), dateTime(l);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The current balance and the balance for a certain time period are calculated only from the properties of the ",(0,r.jsx)(t.code,{children:"SKULedger"})," class without reference to specific operations. This code can and must be declared in a separate module. Modules containing specific operations will use and extend this class."]}),"\n",(0,r.jsxs)(t.p,{children:["For example, let's look at one operation: ",(0,r.jsx)(t.em,{children:"Stock receipt"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lsf",children:"CLASS Receipt 'Warehouse arrival';\nposted 'Completed' = DATA BOOLEAN (Receipt);\ndateTime 'Date/time' = DATA DATETIME (Receipt);\n\nstock 'Warehouse' = DATA Stock (Receipt);\n\nCLASS ReceiptDetail 'Warehouse arrival line';\nreceipt 'Arrival' = DATA Receipt (ReceiptDetail) NONULL DELETE;\n\nsku 'SKU' = DATA SKU (ReceiptDetail);\n\nquantity 'Qty' = DATA NUMERIC[14,2] (ReceiptDetail);\nprice 'Price' = DATA NUMERIC[14,2] (ReceiptDetail);\n"})}),"\n",(0,r.jsxs)(t.p,{children:['To "post" it into the ledger, we need to ',(0,r.jsx)(t.a,{href:"/v5/Class_extension",children:"extend the class"})," ",(0,r.jsx)(t.code,{children:"SKULedger"})," with a ",(0,r.jsx)(t.code,{children:"ReceiptDetail"})," class for stock receipt. We also need to ",(0,r.jsx)(t.a,{href:"/v5/Property_extension",children:"extend the properties"})," of the ledger."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lsf",children:"EXTEND CLASS ReceiptDetail : SKULedger;\n\n// [SKULedger] must be specified, since ReceiptDetail also inherits PriceLedger in the same example and the platform needs to know which property needs to be implemented\nposted[SKULedger](ReceiptDetail d) += posted(receipt(d));\ndateTime[SKULedger](ReceiptDetail d) += dateTime(receipt(d));\n\nstock[SKULedger](ReceiptDetail d) += stock(receipt(d));\n\nsku[SKULedger](ReceiptDetail d) += sku(d);\nquantity[SKULedger](ReceiptDetail d) += quantity(d);\n"})}),"\n",(0,r.jsx)(t.p,{children:"Let's look at a more complex case, when we have a document recording transfer from one warehouse to another."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lsf",children:"CLASS Transfer 'Moving from warehouse to warehouse';\nposted 'Completed' = DATA BOOLEAN (Transfer);\ndateTime 'Date/time' = DATA DATETIME (Transfer);\n\nfromStock 'Warehouse (from)' = DATA Stock (Transfer);\ntoStock 'Warehouse (to)' = DATA Stock (Transfer);\n\nCLASS TransferDetail 'Warehouse shipment line';\ntransfer 'Arrival' = DATA Transfer (TransferDetail) NONULL DELETE;\n\nsku 'SKU' = DATA SKU (TransferDetail);\n\nquantity 'Qty' = DATA NUMERIC[14,2] (TransferDetail);\nprice 'Price' = DATA NUMERIC[14,2] (TransferDetail);\n"})}),"\n",(0,r.jsx)(t.p,{children:'In this case, the data from the document must be "posted" into the ledger twice. By analogy with stock receipt, we will post the line into the ledger as an outgoing operation with a negative value.'}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lsf",children:"EXTEND CLASS TransferDetail : SKULedger;\n\nposted(TransferDetail d) += posted(transfer(d));\ndateTime(TransferDetail d) += dateTime(transfer(d));\n\nstock(TransferDetail d) += fromStock(transfer(d));\n\nsku(TransferDetail d) += sku(d);\nquantity(TransferDetail d) += -quantity(d);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["To post it into the ledger for the warehouse where the SKUs are being transferred to, we use object ",(0,r.jsx)(t.a,{href:"/v5/Aggregations",children:"aggregation"}),'. The line in the transfer document will generate an object, which in turn will be "posted" into the ledger.']}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lsf",children:"CLASS TransferSKULedger 'Moving to warehouse (register)' : SKULedger;\ntransferSKULedger = AGGR TransferSKULedger WHERE posted(TransferDetail transferDetail);\n\nposted(TransferSKULedger d) += d IS TransferSKULedger;\ndateTime(TransferSKULedger d) += dateTime(transfer(transferDetail(d)));\n\nstock(TransferSKULedger d) += toStock(transfer(transferDetail(d)));\n\nsku(TransferSKULedger d) += sku(transferDetail(d));\nquantity(TransferSKULedger d) += quantity(transferDetail(d));\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The ledger object will only be created when the transfer document has been posted. Therefore, in this case the ",(0,r.jsx)(t.code,{children:"posted"})," property will always equal ",(0,r.jsx)(t.code,{children:"TRUE"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"It should be noted that documents with one warehouse can also be posted into the ledger using aggregation. The aggregation scheme is more flexible but requires the creation of additional objects in the system, which may be worse from a performance perspective."}),"\n",(0,r.jsx)(t.h3,{id:"information-ledger",children:"Information ledger"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.em,{children:"information ledger"})," technique makes it possible to implement the logic of changing a certain indicator over time in a flexible way. Unlike the inventory ledger, it calculates not the sum of an indicator but its latest value over a certain period of time."]}),"\n",(0,r.jsxs)(t.p,{children:["To implement this technique we introduce an abstract class ",(0,r.jsx)(t.code,{children:"PriceLedger"}),". Its instance reflects a single price change for one SKU and one warehouse at a certain time."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lsf",children:"CLASS ABSTRACT PriceLedger 'Receipt price change register';\n\nposted 'Completed' = ABSTRACT BOOLEAN (PriceLedger);\ndateTime 'Date/time' = ABSTRACT DATETIME (PriceLedger);\n\nsku 'SKU' = ABSTRACT SKU (PriceLedger);\nstock 'Warehouse' = ABSTRACT Stock (PriceLedger);\n\nprice 'Price' = ABSTRACT NUMERIC[14,2] (PriceLedger);\n\nprice 'Price' (Stock stock, SKU sku, DATETIME dateTime) =\n    GROUP LAST price(PriceLedger l)\n          ORDER dateTime(l), l\n          WHERE posted(l) AND dateTime(l) <= dateTime\n          BY stock(l), sku(l);\n\nprice 'Price' (Stock stock, SKU sku) =\n    GROUP LAST price(PriceLedger l)\n          ORDER dateTime(l), l\n          WHERE posted(l)\n          BY stock(l), sku(l);\n\nprice 'Price' (SKU sku, DATETIME dateTime) =\n    GROUP LAST price(PriceLedger l)\n          ORDER dateTime(l), l\n          WHERE posted(l) AND dateTime(l) <= dateTime\n          BY sku(l);\n"})}),"\n",(0,r.jsx)(t.p,{children:"As a result, we get properties giving the price by SKU and warehouse for the date/time, the latest price, and also the latest price for that SKU for all warehouses."}),"\n",(0,r.jsx)(t.p,{children:"Documents are posted into the information ledger the same way they are posted into the inventory ledger."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lsf",children:"EXTEND CLASS ReceiptDetail : PriceLedger;\n\n// [PriceLedger] must be specified, since ReceiptDetail also inherits SKULedger in the same example and the platform needs to know which property to implement\nposted[PriceLedger](ReceiptDetail d) += posted(receipt(d));\ndateTime[PriceLedger](ReceiptDetail d) += dateTime(receipt(d));\n\nstock[PriceLedger](ReceiptDetail d) += stock(receipt(d));\n\nsku[PriceLedger](ReceiptDetail d) += sku(d);\nprice[PriceLedger](ReceiptDetail d) += price(d);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["In this case the signature of the abstract property needs to be specified explicitly, because there can be several of them with the same name and namespace (properties are named in just the same way for class ",(0,r.jsx)(t.code,{children:"SKULedger"}),")."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(96540);const i={},a=r.createContext(i);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);