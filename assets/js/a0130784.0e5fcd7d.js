"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["60149"],{41057:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>i,assets:()=>c,toc:()=>o,contentTitle:()=>l});var i=JSON.parse('{"id":"Materials_management","title":"Materials management","description":"Description of the \\"Materials management\\" task","source":"@site/versioned_docs/version-v4/Materials_management.md","sourceDirName":".","slug":"/Materials_management","permalink":"/v4/Materials_management","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v4/docs/en/Materials_management.md","tags":[],"version":"v4","lastUpdatedAt":1623078033000,"frontMatter":{"title":"Materials management"},"sidebar":"learn","previous":{"title":"Score table","permalink":"/v4/Score_table"},"next":{"title":"How-to","permalink":"/v4/How-to"}}'),a=t("85893"),s=t("50065");let r={title:"Materials management"},l=void 0,c={},o=[{value:"Description of the &quot;Materials management&quot; task",id:"description-of-the-materials-management-task",level:2},{value:"Defining domain logic",id:"defining-domain-logic",level:2},{value:"Defining a stock",id:"defining-a-stock",level:3},{value:"Defining an item",id:"defining-an-item",level:3},{value:"Defining a legal entity",id:"defining-a-legal-entity",level:3},{value:"Defining a receipt",id:"defining-a-receipt",level:3},{value:"Defining a shipment",id:"defining-a-shipment",level:3},{value:"Defining current item balance",id:"defining-current-item-balance",level:3},{value:"Defining view logic",id:"defining-view-logic",level:2},{value:"The complete source code (on Github)",id:"the-complete-source-code-on-github",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description-of-the-materials-management-task",children:'Description of the "Materials management" task'}),"\n",(0,a.jsxs)(n.p,{children:["The information system being created using the ",(0,a.jsx)(n.strong,{children:"lsFusion"})," platform must support very basic supply chain execution capabilities."]}),"\n",(0,a.jsx)(n.p,{children:"For simplicity, let's define one type of document in our system that increases the stock balance \u2014 a receipt from the supplier; and one type of document that does the opposite \u2014 a shipment for a wholesale to a customer."}),"\n",(0,a.jsx)(n.h2,{id:"defining-domain-logic",children:"Defining domain logic"}),"\n",(0,a.jsxs)(n.p,{children:["The information system will consist of a set of ",(0,a.jsx)(n.a,{href:"/v4/Modules",children:"modules"}),", each implementing a logically isolated piece of functionality. Each module can use the functionality of other modules, which involves special syntax constructions for defining module dependencies."]}),"\n",(0,a.jsx)(n.p,{children:"Based on our task, let's define the list of modules to be implemented: stock module, item module, legal entity module, receipt module, shipment module, current balance module. We will separately define the main module that will be executed and will basically be a compound solution. The composition of modules can be different and is determined by the developer depending on the need to re-use the functionality elsewhere."}),"\n",(0,a.jsx)(n.h3,{id:"defining-a-stock",children:"Defining a stock"}),"\n",(0,a.jsx)(n.p,{children:"Let's create a module where we will define a stock instance and its attributes."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"MODULE Stock;\n"})}),"\n",(0,a.jsx)(n.p,{children:"Let's define the concept of a stock and its attributes: name, address."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"CLASS Stock 'Warehouse';\n\nname 'Name' = DATA STRING[100] (Stock) IN base;\naddress 'Address' = DATA STRING[150] (Stock) IN base;\n"})}),"\n",(0,a.jsx)(n.h3,{id:"defining-an-item",children:"Defining an item"}),"\n",(0,a.jsx)(n.p,{children:"Let's create a module in which we'll define the concept of an item and its attributes."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"MODULE Item;\n"})}),"\n",(0,a.jsx)(n.p,{children:"Let's define the concept of an item and its attributes: name, barcode."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"CLASS Item 'Product';\n\nname 'Name' = DATA STRING[100](Item) IN base;\nbarcode 'Barcode' = DATA BPSTRING[13](Item) IN base;\n"})}),"\n",(0,a.jsx)(n.p,{children:"Let's set the wholesale price for an item."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"salePrice 'Wholesale price' = DATA NUMERIC[17,2](Item) IN base;\n"})}),"\n",(0,a.jsx)(n.h3,{id:"defining-a-legal-entity",children:"Defining a legal entity"}),"\n",(0,a.jsx)(n.p,{children:"Let's create a module where we will define a legal entity instance and its attributes. In the system, legal entities will act as suppliers and customers."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"MODULE LegalEntity;\n"})}),"\n",(0,a.jsx)(n.p,{children:"Let's define the concept of a legal entity and its attributes: name, legal address, Tax ID."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"CLASS LegalEntity 'Organization';\n\nname 'Name' = DATA STRING[100](LegalEntity) IN base;\naddress 'Address' = DATA STRING[150](LegalEntity) IN base;\ninn 'TIN' = DATA BPSTRING[9](LegalEntity) IN base;\n"})}),"\n",(0,a.jsx)(n.p,{children:"We define the uniqueness of the Tax ID for the legal entity."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"legalEntityINN = GROUP AGGR LegalEntity legalEntity BY inn(legalEntity);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"legalEntityINN"})," property binds an organization and a Tax ID one-to-one and allows to find a legal entity by a Tax ID. The expression of the property can be interpreted as follows: when grouping legal entities by Tax ID (",(0,a.jsx)(n.code,{children:"inn"})," property), each group must contain a non-repeating legal entity."]}),"\n",(0,a.jsx)(n.h3,{id:"defining-a-receipt",children:"Defining a receipt"}),"\n",(0,a.jsx)(n.p,{children:"Let's create a module where we'll define all instances and attributes required for defining the logic of a supplier receipt."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"MODULE Receipt;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Let's define the use of functionality from other modules in the ",(0,a.jsx)(n.code,{children:"Receipt"})," module."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"REQUIRE Stock, Item, LegalEntity;\n"})}),"\n",(0,a.jsx)(n.p,{children:"We define the concepts that determine the logic of a supplier receipt. Let's work on the premise that all documents (both receipts and shipments) in the system consist of a header and an item specification. Accordingly, let's define the concepts of a receipt header and receipt line."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"CLASS Receipt 'Receipt';\nCLASS ReceiptDetail 'Receipt line';\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Each receipt line contains a link to the document header, so in the end, the header and the subset of lines with links to this document together define the receipt from the user perspective. The ",(0,a.jsx)(n.code,{children:"NONULL"})," parameter indicates that the link must be defined. The ",(0,a.jsx)(n.code,{children:"DELETE"})," parameter specifies that if the main ",(0,a.jsx)(n.code,{children:"Receipt"})," object is deleted, all ",(0,a.jsx)(n.code,{children:"ReceiptDetail"})," lines linking to it will also be deleted. By default, when an object is deleted, all links to it are nullified. This way, without the ",(0,a.jsx)(n.code,{children:"DELETE"})," parameter, the system will show an error message about an undefined link."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"receipt 'Line document' = DATA Receipt (ReceiptDetail) NONULL DELETE;\n"})}),"\n",(0,a.jsx)(n.p,{children:"Let's define the line number in a receipt."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"index 'Line number' (ReceiptDetail d) =\n        PARTITION SUM 1 IF d IS ReceiptDetail\n        ORDER d BY receipt(d);\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["The use of the name of an object class in expressions is similar to using its identification number (id) created by the system for all objects by an automatic counter. In this case, the use of the ",(0,a.jsx)(n.code,{children:"ORDER d"})," construct helps sort the lines of the receipt by the order of ascension of their id, i.e. basically in the order of their creation."]})}),"\n",(0,a.jsxs)(n.p,{children:["Here, the ",(0,a.jsx)(n.code,{children:"PARTITION"})," operator uses the ",(0,a.jsx)(n.code,{children:"BY"})," block that groups objects by a certain attribute. The calculation of the expression cumulative total is performed in each group. In this case, the line number is determined only within this line's document (",(0,a.jsx)(n.code,{children:"receipt"})," property)."]}),"\n",(0,a.jsx)(n.p,{children:"We define a set of key attributes of a receipt header: number, date, supplier and its name, the stock where the product is received and its name. The name of the supplier and the stock will be needed in the future for displaying them on the form."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"number 'Receipt number' = DATA BPSTRING[10] (Receipt);\ndate 'Receipt date' = DATA DATE (Receipt);\n\nsupplier 'Supplier' = DATA LegalEntity (Receipt);\nnameSupplier 'Supplier name' (Receipt r) = name(supplier(r));\n\nstock 'Warehouse' = DATA Stock (Receipt);\nnameStock 'Warehouse name' (Receipt r) = name(stock(r));\n"})}),"\n",(0,a.jsx)(n.p,{children:"We define a set of key attributes of a receipt line: item and its name, quantity, supplier price, supplier amount (price multiplied by quantity)."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"item 'Product' = DATA Item (ReceiptDetail);\nnameItem 'Product name' (ReceiptDetail d) = name(item(d));\n\nquantity 'Quantity' = DATA NUMERIC[16,4] (ReceiptDetail);\nprice 'Supplier price' = DATA NUMERIC[17,2] (ReceiptDetail);\nsum 'Supplier amount' (ReceiptDetail d) = quantity(d) * price(d);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"defining-a-shipment",children:"Defining a shipment"}),"\n",(0,a.jsx)(n.p,{children:"Let's create a module where we will define all instances and attributes required for a wholesale shipment."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"MODULE Shipment;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["We define the use of functionality from other modules in the ",(0,a.jsx)(n.code,{children:"Shipment"})," module."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"REQUIRE Stock, Item, LegalEntity;\n"})}),"\n",(0,a.jsx)(n.p,{children:"Similarly to the receipt, we define the shipment header and lines, as well as a link in the line to the header and its number."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"CLASS Shipment 'Shipment';\nCLASS ShipmentDetail 'Shipment line';\n\nshipment 'Line document' = DATA Shipment (ShipmentDetail) NONULL DELETE;\nindex 'Line number' (ShipmentDetail d) =\n        PARTITION SUM 1 IF d IS ShipmentDetail\n        ORDER d BY shipment(d);\n"})}),"\n",(0,a.jsx)(n.p,{children:"We define a set of attributes for the shipment: number, date, customer and its name, the stock from which the item is shipped, and its name."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"number 'Shipment number' = DATA BPSTRING[10] (Shipment);\ndate 'Shipment date' = DATA DATE (Shipment);\n\ncustomer 'Customer' = DATA LegalEntity (Shipment);\nnameCustomer 'Customer name' (Shipment s) = name(customer(s));\n\nstock 'Warehouse' = DATA Stock(Shipment);\nnameStock 'Warehouse name' (Shipment s) = name(stock(s));\n"})}),"\n",(0,a.jsx)(n.p,{children:"We define a set of key attributes of a shipment: item and its name, quantity, sale price, sale amount (price multiplied by quantity)."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"item 'Product' = DATA Item (ShipmentDetail);\nnameItem 'Product name' (ShipmentDetail d) = name(item(d));\n\nquantity 'Quantity' = DATA NUMERIC[16,4](ShipmentDetail);\nprice 'Selling price' = DATA NUMERIC[17,2](ShipmentDetail);\nsum 'Sale amount' (ShipmentDetail d) = quantity(d) * price(d);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["We implement the auto filling of the item sale price in the shipment with the value of the wholesale price defined by the user for item (",(0,a.jsx)(n.code,{children:"salePrice"})," property). Auto filling for the shipment line should work when the item is changed (",(0,a.jsx)(n.code,{children:"WHEN CHANGED"})," statement)."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"price(ShipmentDetail d) <- salePrice(item(d)) WHEN CHANGED(item(d));\n"})}),"\n",(0,a.jsx)(n.h3,{id:"defining-current-item-balance",children:"Defining current item balance"}),"\n",(0,a.jsx)(n.p,{children:"The current item balance is defined as a difference between all item receipts and all its shipments."}),"\n",(0,a.jsx)(n.p,{children:"Let's create a separate module."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"MODULE StockItem;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["We define the use of functionality from other modules in the ",(0,a.jsx)(n.code,{children:"StockItem"})," module."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"REQUIRE Shipment, Receipt;\n"})}),"\n",(0,a.jsx)(n.p,{children:"Let's define the calculated property of the current item balance at the stock in quantitative terms."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"receivedQuantity 'Total income' = GROUP SUM quantity(ReceiptDetail d) BY item(d), stock(receipt(d));\nshippedQuantity 'Total expenses' = GROUP SUM quantity(ShipmentDetail d) BY item(d), stock(shipment(d));\ncurrentBalance 'Current balance' (Item i, Stock s) = receivedQuantity (i, s) (-) shippedQuantity (i, s);\n"})}),"\n",(0,a.jsx)(n.p,{children:"Let's prohibit the negative item balance. The prohibition will work for any user action resulting in a negative balance. In this case, the user will see a specified message on the screen."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"CONSTRAINT currentBalance(Item i, Stock s) < 0 MESSAGE 'The balance of the product cannot be negative';\n"})}),"\n",(0,a.jsx)(n.h2,{id:"defining-view-logic",children:"Defining view logic"}),"\n",(0,a.jsx)(n.p,{children:"In order to be able to work with the created solution, let's add directory forms and a current balances form, and also a set of paired forms for working with documents: a form for listing receipts and a form for editing them, a form for listing shipments and a form for editing them."}),"\n",(0,a.jsx)(n.p,{children:"First, let's create directory forms."}),"\n",(0,a.jsxs)(n.p,{children:["In the ",(0,a.jsx)(n.code,{children:"Stock"})," module, we add a form that provides the user with the functionality of creating and deleting stocks, as well as changing their attributes."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"FORM stocks 'Warehouses'\n	OBJECTS s = Stock\n	PROPERTIES(s) name, address, NEW, DELETE\n;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["In a similar manner, we'll create an item form in the ",(0,a.jsx)(n.code,{children:"Item"})," module, and a legal entity form in the ",(0,a.jsx)(n.code,{children:"LegalEntity"})," module."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"CLASS Item 'Product';\n\nname 'Name' = DATA STRING[100](Item) IN base;\nbarcode 'Barcode' = DATA BPSTRING[13](Item) IN base;\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"CLASS LegalEntity 'Organization';\n\nname 'Name' = DATA STRING[100](LegalEntity) IN base;\naddress 'Address' = DATA STRING[150](LegalEntity) IN base;\ninn 'TIN' = DATA BPSTRING[9](LegalEntity) IN base;\n"})}),"\n",(0,a.jsx)(n.p,{children:"Let's create edit forms for a receipt and a shipment. These forms will be used for creating new documents or editing existing ones. The layout of the forms will be similar: two vertical blocks, the top one containing a panel with the header attributes of the document being created/edited, and the lower one containing the document lines in a grid view and their attributes."}),"\n",(0,a.jsxs)(n.p,{children:["In the Receipt module, we should create a receipt edit form. For the form we are building, we specify that it will be used as a default form for creating/editing receipts (the ",(0,a.jsx)(n.code,{children:"EDIT"})," form block)."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"FORM receipt 'Receipt'\n	OBJECTS r = Receipt PANEL\n	PROPERTIES(r) number, date, nameSupplier, nameStock\n\n	OBJECTS d = ReceiptDetail\n	PROPERTIES(d) index, nameItem, quantity, price, sum READONLY, NEW, DELETE GRID\n	FILTERS receipt(d) = r\n\n	EDIT Receipt OBJECT r\n;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Line filtering for the current receipt is performed with the help of the ",(0,a.jsx)(n.code,{children:"FILTERS receipt(d) == r"})," expression. The ",(0,a.jsx)(n.code,{children:"FILTERS"})," construct displays an object of a corresponding class on the form if the filter expression returns a value different from ",(0,a.jsx)(n.code,{children:"NULL"}),". In this case, the receipt line will be displayed on the form if the header of the document to which the line is linked (",(0,a.jsx)(n.code,{children:"receipt"})," property) equals to the current object of the top block. In other words, only the lines of the created/edited document will be displayed."]}),"\n",(0,a.jsxs)(n.p,{children:["In addition, if a filter is specified for objects of this class on the form, then when the user presses the ",(0,a.jsx)(n.code,{children:"NEW"})," button, the property of the newly added object will be automatically filled in a way that will make this object meet the filter conditions. In this case, when a new receipt line is created, the ",(0,a.jsx)(n.code,{children:"receipt"})," property of this line will be automatically filled with a link to the current header of the receipt."]}),"\n",(0,a.jsxs)(n.p,{children:["Let's create an edit form for the shipment in the ",(0,a.jsx)(n.code,{children:"Shipment"})," module. For the form we are creating, we specify that it will be used as the default form for creating/editing shipments (",(0,a.jsx)(n.code,{children:"EDIT"})," form block)."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"FORM shipment 'Shipment'\n	OBJECTS s = Shipment PANEL\n	PROPERTIES(s) number, date, nameCustomer, nameStock\n\n	OBJECTS d = ShipmentDetail\n	PROPERTIES(d) nameItem, quantity, price, sum READONLY, NEW, DELETE GRID\n	FILTERS shipment(d) = s\n\n	EDIT Shipment OBJECT s\n;\n"})}),"\n",(0,a.jsx)(n.p,{children:"Visually, supplier receipt and shipment forms will look almost identical and consist of two vertical blocks: one with a table for document headers and one with a table of document lines. Document lines should support visual filtering by documents and their subsets displayed on the form will change when navigating in the top block."}),"\n",(0,a.jsxs)(n.p,{children:["Let's create a receipt form. On this form, we will display all the properties defined above for document headers and their lines. Additionally, we will place automatically defined buttons for creating/editing a receipt using the edit form created above. All properties of document headers and their lines, except the buttons for creating/editing a receipt, should be read-only for editing directly on the form (",(0,a.jsx)(n.code,{children:"READONLY"})," operator)."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"FORM receipts 'Receipts'\n	OBJECTS r = Receipt\n	PROPERTIES(r) READONLY number, date, nameSupplier, nameStock\n	PROPERTIES(r) NEWSESSION NEW, EDIT, DELETE\n\n	OBJECTS d = ReceiptDetail\n	PROPERTIES(d) READONLY index, nameItem, quantity, price, sum\n	FILTERS receipt(d) = r\n;\n"})}),"\n",(0,a.jsx)(n.p,{children:"Let's create the shipment form in a similar manner."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"FORM shipments 'Shipments'\n	OBJECTS s = Shipment\n	PROPERTIES(s) READONLY number, date, nameCustomer, nameStock\n	PROPERTIES(s) NEWSESSION NEW, EDIT, DELETE\n\n	OBJECTS d = ShipmentDetail\n	PROPERTIES(d) READONLY nameItem, quantity, price, sum\n	FILTERS shipment(d) = s\n;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Next, in the ",(0,a.jsx)(n.code,{children:"StockItem"})," module, let's create a form for displaying current balances. A form should be a table whose lines contain information about the item (its name and barcode), the name of the stock, and the current balance for this item at this stock. The count of lines on the form will be equal to the count of items entered into the system multiplied by the count of entered stocks. To display only relevant data (i.e. only those items and stocks, for whose intersection the current balance is not ",(0,a.jsx)(n.code,{children:"NULL"}),"), let's add a filter to the form."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"FORM currentBalanceItemStock 'Current balances'\n    OBJECTS si = (s = Stock, i = Item)\n    PROPERTIES READONLY name(i), barcode(i), name(s), currentBalance(i, s)\n    FILTERS currentBalance(i, s)\n;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"OBJECTS si = (s = Stock, i = Item)"})," construct adds an object group with the name ",(0,a.jsx)(n.code,{children:"si"}),", which is a Cartesian product of ",(0,a.jsx)(n.code,{children:"Stock"})," and ",(0,a.jsx)(n.code,{children:"Item"})," class objects."]}),"\n",(0,a.jsx)(n.p,{children:"Finally, let's declare the head module and specify what functionality from other modules will be used in it."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"MODULE StockAccounting;\n\nREQUIRE Stock, Item, LegalEntity, Receipt, Shipment, StockItem;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["In the ",(0,a.jsx)(n.code,{children:"StockAccounting"})," module, we compose the system menu. Directories should be added to the predefined ",(0,a.jsx)(n.code,{children:"masterData"})," folder of the navigator that we show immediately after the directories. We place the current balance form to the main menu (horizontal window ",(0,a.jsx)(n.code,{children:"root"}),"). Links to directory and document forms will be shown on the vertical ",(0,a.jsx)(n.code,{children:"toolbar"})," when the user selects a corresponding ",(0,a.jsx)(n.code,{children:"root"})," folder."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"NAVIGATOR {\n    NEW FOLDER masterData 'Directories' FIRST WINDOW toolbar {\n        NEW items;\n        NEW stocks;\n        NEW legalEntities;\n    }\n    NEW FOLDER documents 'Documents' AFTER masterData WINDOW toolbar {\n        NEW receipts;\n        NEW shipments;\n    }\n    NEW currentBalanceItemStock AFTER documents;\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"The process of creating an information system is completed."}),"\n",(0,a.jsxs)(n.h2,{id:"the-complete-source-code-on-github",children:["The complete source code (on ",(0,a.jsx)(n.a,{href:"https://github.com/lsfusion/samples/tree/master/mm",children:"Github"}),")"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"MODULE Stock;\n\nCLASS Stock 'Warehouse';\n\nname 'Name' = DATA STRING[100] (Stock) IN base;\naddress 'Address' = DATA STRING[150] (Stock) IN base;\n\nFORM stocks 'Warehouses'\n	OBJECTS s = Stock\n	PROPERTIES(s) name, address, NEW, DELETE\n;\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"MODULE Item;\n\nCLASS Item 'Product';\n\nname 'Name' = DATA STRING[100](Item) IN base;\nbarcode 'Barcode' = DATA BPSTRING[13](Item) IN base;\n\nsalePrice 'Wholesale price' = DATA NUMERIC[17,2](Item) IN base;\n\nFORM items 'Products'\n	OBJECTS i = Item\n	PROPERTIES(i) name, barcode, salePrice, NEW, DELETE\n;\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"MODULE LegalEntity;\n\nCLASS LegalEntity 'Organization';\n\nname 'Name' = DATA STRING[100](LegalEntity) IN base;\naddress 'Address' = DATA STRING[150](LegalEntity) IN base;\ninn 'TIN' = DATA BPSTRING[9](LegalEntity) IN base;\n\nlegalEntityINN = GROUP AGGR LegalEntity legalEntity BY inn(legalEntity);\n\nFORM legalEntities 'Organization'\n	OBJECTS l = LegalEntity\n	PROPERTIES(l) name, inn, address, NEW, DELETE\n;\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"MODULE Receipt;\n\nREQUIRE Stock, Item, LegalEntity;\n\nCLASS Receipt 'Receipt';\nCLASS ReceiptDetail 'Receipt line';\n\nreceipt 'Line document' = DATA Receipt (ReceiptDetail) NONULL DELETE;\n\nindex 'Line number' (ReceiptDetail d) =\n        PARTITION SUM 1 IF d IS ReceiptDetail\n        ORDER d BY receipt(d);\n\nnumber 'Receipt number' = DATA BPSTRING[10] (Receipt);\ndate 'Receipt date' = DATA DATE (Receipt);\n\nsupplier 'Supplier' = DATA LegalEntity (Receipt);\nnameSupplier 'Supplier name' (Receipt r) = name(supplier(r));\n\nstock 'Warehouse' = DATA Stock (Receipt);\nnameStock 'Warehouse name' (Receipt r) = name(stock(r));\n\nitem 'Product' = DATA Item (ReceiptDetail);\nnameItem 'Product name' (ReceiptDetail d) = name(item(d));\n\nquantity 'Quantity' = DATA NUMERIC[16,4] (ReceiptDetail);\nprice 'Supplier price' = DATA NUMERIC[17,2] (ReceiptDetail);\nsum 'Supplier amount' (ReceiptDetail d) = quantity(d) * price(d);\n\nFORM receipt 'Receipt'\n	OBJECTS r = Receipt PANEL\n	PROPERTIES(r) number, date, nameSupplier, nameStock\n\n	OBJECTS d = ReceiptDetail\n	PROPERTIES(d) index, nameItem, quantity, price, sum READONLY, NEW, DELETE GRID\n	FILTERS receipt(d) = r\n\n	EDIT Receipt OBJECT r\n;\n\nFORM receipts 'Receipts'\n	OBJECTS r = Receipt\n	PROPERTIES(r) READONLY number, date, nameSupplier, nameStock\n	PROPERTIES(r) NEWSESSION NEW, EDIT, DELETE\n\n	OBJECTS d = ReceiptDetail\n	PROPERTIES(d) READONLY index, nameItem, quantity, price, sum\n	FILTERS receipt(d) = r\n;\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"MODULE Shipment;\n\nREQUIRE Stock, Item, LegalEntity;\n\nCLASS Shipment 'Shipment';\nCLASS ShipmentDetail 'Shipment line';\n\nshipment 'Line document' = DATA Shipment (ShipmentDetail) NONULL DELETE;\nindex 'Line number' (ShipmentDetail d) =\n        PARTITION SUM 1 IF d IS ShipmentDetail\n        ORDER d BY shipment(d);\n\nnumber 'Shipment number' = DATA BPSTRING[10] (Shipment);\ndate 'Shipment date' = DATA DATE (Shipment);\n\ncustomer 'Customer' = DATA LegalEntity (Shipment);\nnameCustomer 'Customer name' (Shipment s) = name(customer(s));\n\nstock 'Warehouse' = DATA Stock(Shipment);\nnameStock 'Warehouse name' (Shipment s) = name(stock(s));\n\nitem 'Product' = DATA Item (ShipmentDetail);\nnameItem 'Product name' (ShipmentDetail d) = name(item(d));\n\nquantity 'Quantity' = DATA NUMERIC[16,4](ShipmentDetail);\nprice 'Selling price' = DATA NUMERIC[17,2](ShipmentDetail);\nsum 'Sale amount' (ShipmentDetail d) = quantity(d) * price(d);\n\nprice(ShipmentDetail d) <- salePrice(item(d)) WHEN CHANGED(item(d));\n\nFORM shipment 'Shipment'\n	OBJECTS s = Shipment PANEL\n	PROPERTIES(s) number, date, nameCustomer, nameStock\n\n	OBJECTS d = ShipmentDetail\n	PROPERTIES(d) nameItem, quantity, price, sum READONLY, NEW, DELETE GRID\n	FILTERS shipment(d) = s\n\n	EDIT Shipment OBJECT s\n;\n\nFORM shipments 'Shipments'\n	OBJECTS s = Shipment\n	PROPERTIES(s) READONLY number, date, nameCustomer, nameStock\n	PROPERTIES(s) NEWSESSION NEW, EDIT, DELETE\n\n	OBJECTS d = ShipmentDetail\n	PROPERTIES(d) READONLY nameItem, quantity, price, sum\n	FILTERS shipment(d) = s\n;\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"MODULE StockItem;\n\nREQUIRE Shipment, Receipt;\n\nreceivedQuantity 'Total income' = GROUP SUM quantity(ReceiptDetail d) BY item(d), stock(receipt(d));\nshippedQuantity 'Total expenses' = GROUP SUM quantity(ShipmentDetail d) BY item(d), stock(shipment(d));\ncurrentBalance 'Current balance' (Item i, Stock s) = receivedQuantity (i, s) (-) shippedQuantity (i, s);\n\nCONSTRAINT currentBalance(Item i, Stock s) < 0 MESSAGE 'The balance of the product cannot be negative';\n\nFORM currentBalanceItemStock 'Current balances'\n    OBJECTS si = (s = Stock, i = Item)\n    PROPERTIES READONLY name(i), barcode(i), name(s), currentBalance(i, s)\n    FILTERS currentBalance(i, s)\n;\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"MODULE StockAccounting;\n\nREQUIRE Stock, Item, LegalEntity, Receipt, Shipment, StockItem;\n\nNAVIGATOR {\n    NEW FOLDER masterData 'Directories' FIRST WINDOW toolbar {\n        NEW items;\n        NEW stocks;\n        NEW legalEntities;\n    }\n    NEW FOLDER documents 'Documents' AFTER masterData WINDOW toolbar {\n        NEW receipts;\n        NEW shipments;\n    }\n    NEW currentBalanceItemStock AFTER documents;\n}\n"})})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var i=t(67294);let a={},s=i.createContext(a);function r(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);