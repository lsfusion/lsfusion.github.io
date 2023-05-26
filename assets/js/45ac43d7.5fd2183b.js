"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[10711],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||l;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81735:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return r},default:function(){return m},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p}});var a=n(83117),i=(n(67294),n(3905));const l={title:"Materials management"},r=void 0,o={unversionedId:"Materials_management",id:"version-v5/Materials_management",title:"Materials management",description:'Description of the "Materials management" task',source:"@site/versioned_docs/version-v5/Materials_management.md",sourceDirName:".",slug:"/Materials_management",permalink:"/Materials_management",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/Materials_management.md",tags:[],version:"v5",lastUpdatedAt:1685108136,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{title:"Materials management"},sidebar:"learn",previous:{title:"Score table",permalink:"/Score_table"},next:{title:"How-to",permalink:"/How-to"}},s={},p=[{value:"Description of the &quot;Materials management&quot; task",id:"description-of-the-materials-management-task",level:2},{value:"Defining domain logic",id:"defining-domain-logic",level:2},{value:"Defining a stock",id:"defining-a-stock",level:3},{value:"Defining an item",id:"defining-an-item",level:3},{value:"Defining a legal entity",id:"defining-a-legal-entity",level:3},{value:"Defining a receipt",id:"defining-a-receipt",level:3},{value:"Defining a shipment",id:"defining-a-shipment",level:3},{value:"Defining current item balance",id:"defining-current-item-balance",level:3},{value:"Defining view logic",id:"defining-view-logic",level:2},{value:"The complete source code (on Github)",id:"the-complete-source-code-on-github",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description-of-the-materials-management-task"},'Description of the "Materials management" task'),(0,i.kt)("p",null,"The information system being created using the ",(0,i.kt)("strong",{parentName:"p"},"lsFusion")," platform must support very basic supply chain execution capabilities."),(0,i.kt)("p",null,"For simplicity, let's define one type of document in our system that increases the stock balance \u2014 a receipt from the supplier; and one type of document that does the opposite \u2014 a shipment for a wholesale to a customer."),(0,i.kt)("h2",{id:"defining-domain-logic"},"Defining domain logic"),(0,i.kt)("p",null,"The information system will consist of a set of ",(0,i.kt)("a",{parentName:"p",href:"/Modules"},"modules"),", each implementing a logically isolated piece of functionality. Each module can use the functionality of other modules, which involves special syntax constructions for defining module dependencies."),(0,i.kt)("p",null,"Based on our task, let's define the list of modules to be implemented: stock module, item module, legal entity module, receipt module, shipment module, current balance module. We will separately define the main module that will be executed and will basically be a compound solution. The composition of modules can be different and is determined by the developer depending on the need to re-use the functionality elsewhere."),(0,i.kt)("h3",{id:"defining-a-stock"},"Defining a stock"),(0,i.kt)("p",null,"Let's create a module where we will define a stock instance and its attributes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"MODULE Stock;\n")),(0,i.kt)("p",null,"Let's define the concept of a stock and its attributes: name, address."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Stock 'Warehouse';\n\nname 'Name' = DATA STRING[100] (Stock) IN base;\naddress 'Address' = DATA STRING[150] (Stock) IN base;\n")),(0,i.kt)("h3",{id:"defining-an-item"},"Defining an item"),(0,i.kt)("p",null,"Let's create a module in which we'll define the concept of an item and its attributes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"MODULE Item;\n")),(0,i.kt)("p",null,"Let's define the concept of an item and its attributes: name, barcode."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Item 'Product';\n\nname 'Name' = DATA STRING[100](Item) IN base;\nbarcode 'Barcode' = DATA BPSTRING[13](Item) IN base;\n")),(0,i.kt)("p",null,"Let's set the wholesale price for an item."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"salePrice 'Wholesale price' = DATA NUMERIC[17,2](Item) IN base;\n")),(0,i.kt)("h3",{id:"defining-a-legal-entity"},"Defining a legal entity"),(0,i.kt)("p",null,"Let's create a module where we will define a legal entity instance and its attributes. In the system, legal entities will act as suppliers and customers."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"MODULE LegalEntity;\n")),(0,i.kt)("p",null,"Let's define the concept of a legal entity and its attributes: name, legal address, Tax ID."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS LegalEntity 'Organization';\n\nname 'Name' = DATA STRING[100](LegalEntity) IN base;\naddress 'Address' = DATA STRING[150](LegalEntity) IN base;\ninn 'TIN' = DATA BPSTRING[9](LegalEntity) IN base;\n")),(0,i.kt)("p",null,"We define the uniqueness of the Tax ID for the legal entity."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"legalEntityINN = GROUP AGGR LegalEntity legalEntity BY inn(legalEntity);\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"legalEntityINN")," property binds an organization and a Tax ID one-to-one and allows to find a legal entity by a Tax ID. The expression of the property can be interpreted as follows: when grouping legal entities by Tax ID (",(0,i.kt)("inlineCode",{parentName:"p"},"inn")," property), each group must contain a non-repeating legal entity."),(0,i.kt)("h3",{id:"defining-a-receipt"},"Defining a receipt"),(0,i.kt)("p",null,"Let's create a module where we'll define all instances and attributes required for defining the logic of a supplier receipt."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"MODULE Receipt;\n")),(0,i.kt)("p",null,"Let's define the use of functionality from other modules in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Receipt")," module."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"REQUIRE Stock, Item, LegalEntity;\n")),(0,i.kt)("p",null,"We define the concepts that determine the logic of a supplier receipt. Let's work on the premise that all documents (both receipts and shipments) in the system consist of a header and an item specification. Accordingly, let's define the concepts of a receipt header and receipt line."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Receipt 'Receipt';\nCLASS ReceiptDetail 'Receipt line';\n")),(0,i.kt)("p",null,"Each receipt line contains a link to the document header, so in the end, the header and the subset of lines with links to this document together define the receipt from the user perspective. The ",(0,i.kt)("inlineCode",{parentName:"p"},"NONULL")," parameter indicates that the link must be defined. The ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE")," parameter specifies that if the main ",(0,i.kt)("inlineCode",{parentName:"p"},"Receipt")," object is deleted, all ",(0,i.kt)("inlineCode",{parentName:"p"},"ReceiptDetail")," lines linking to it will also be deleted. By default, when an object is deleted, all links to it are nullified. This way, without the ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE")," parameter, the system will show an error message about an undefined link."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"receipt 'Line document' = DATA Receipt (ReceiptDetail) NONULL DELETE;\n")),(0,i.kt)("p",null,"Let's define the line number in a receipt."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"index 'Line number' (ReceiptDetail d) =\n        PARTITION SUM 1 IF d IS ReceiptDetail\n        ORDER d BY receipt(d);\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The use of the name of an object class in expressions is similar to using its identification number (id) created by the system for all objects by an automatic counter. In this case, the use of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ORDER d")," construct helps sort the lines of the receipt by the order of ascension of their id, i.e. basically in the order of their creation.")),(0,i.kt)("p",null,"Here, the ",(0,i.kt)("inlineCode",{parentName:"p"},"PARTITION")," operator uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"BY")," block that groups objects by a certain attribute. The calculation of the expression cumulative total is performed in each group. In this case, the line number is determined only within this line's document (",(0,i.kt)("inlineCode",{parentName:"p"},"receipt")," property)."),(0,i.kt)("p",null,"We define a set of key attributes of a receipt header: number, date, supplier and its name, the stock where the product is received and its name. The name of the supplier and the stock will be needed in the future for displaying them on the form."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"number 'Receipt number' = DATA BPSTRING[10] (Receipt);\ndate 'Receipt date' = DATA DATE (Receipt);\n\nsupplier 'Supplier' = DATA LegalEntity (Receipt);\nnameSupplier 'Supplier name' (Receipt r) = name(supplier(r));\n\nstock 'Warehouse' = DATA Stock (Receipt);\nnameStock 'Warehouse name' (Receipt r) = name(stock(r));\n")),(0,i.kt)("p",null,"We define a set of key attributes of a receipt line: item and its name, quantity, supplier price, supplier amount (price multiplied by quantity)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"item 'Product' = DATA Item (ReceiptDetail);\nnameItem 'Product name' (ReceiptDetail d) = name(item(d));\n\nquantity 'Quantity' = DATA NUMERIC[16,4] (ReceiptDetail);\nprice 'Supplier price' = DATA NUMERIC[17,2] (ReceiptDetail);\nsum 'Supplier amount' (ReceiptDetail d) = quantity(d) * price(d);\n")),(0,i.kt)("h3",{id:"defining-a-shipment"},"Defining a shipment"),(0,i.kt)("p",null,"Let's create a module where we will define all instances and attributes required for a wholesale shipment."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"MODULE Shipment;\n")),(0,i.kt)("p",null," We define the use of functionality from other modules in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Shipment")," module."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"REQUIRE Stock, Item, LegalEntity;\n")),(0,i.kt)("p",null,"Similarly to the receipt, we define the shipment header and lines, as well as a link in the line to the header and its number."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Shipment 'Shipment';\nCLASS ShipmentDetail 'Shipment line';\n\nshipment 'Line document' = DATA Shipment (ShipmentDetail) NONULL DELETE;\nindex 'Line number' (ShipmentDetail d) =\n        PARTITION SUM 1 IF d IS ShipmentDetail\n        ORDER d BY shipment(d);\n")),(0,i.kt)("p",null,"We define a set of attributes for the shipment: number, date, customer and its name, the stock from which the item is shipped, and its name."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"number 'Shipment number' = DATA BPSTRING[10] (Shipment);\ndate 'Shipment date' = DATA DATE (Shipment);\n\ncustomer 'Customer' = DATA LegalEntity (Shipment);\nnameCustomer 'Customer name' (Shipment s) = name(customer(s));\n\nstock 'Warehouse' = DATA Stock(Shipment);\nnameStock 'Warehouse name' (Shipment s) = name(stock(s));\n")),(0,i.kt)("p",null,"We define a set of key attributes of a shipment: item and its name, quantity, sale price, sale amount (price multiplied by quantity)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"item 'Product' = DATA Item (ShipmentDetail);\nnameItem 'Product name' (ShipmentDetail d) = name(item(d));\n\nquantity 'Quantity' = DATA NUMERIC[16,4](ShipmentDetail);\nprice 'Selling price' = DATA NUMERIC[17,2](ShipmentDetail);\nsum 'Sale amount' (ShipmentDetail d) = quantity(d) * price(d);\n")),(0,i.kt)("p",null,"We implement the auto filling of the item sale price in the shipment with the value of the wholesale price defined by the user for item (",(0,i.kt)("inlineCode",{parentName:"p"},"salePrice")," property). Auto filling for the shipment line should work when the item is changed (",(0,i.kt)("inlineCode",{parentName:"p"},"WHEN CHANGED")," statement)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"price(ShipmentDetail d) <- salePrice(item(d)) WHEN CHANGED(item(d));\n")),(0,i.kt)("h3",{id:"defining-current-item-balance"},"Defining current item balance"),(0,i.kt)("p",null,"The current item balance is defined as a difference between all item receipts and all its shipments."),(0,i.kt)("p",null,"Let's create a separate module."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"MODULE StockItem;\n")),(0,i.kt)("p",null," We define the use of functionality from other modules in the ",(0,i.kt)("inlineCode",{parentName:"p"},"StockItem")," module."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"REQUIRE Shipment, Receipt;\n")),(0,i.kt)("p",null,"Let's define the calculated property of the current item balance at the stock in quantitative terms."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"receivedQuantity 'Total income' = GROUP SUM quantity(ReceiptDetail d) BY item(d), stock(receipt(d));\nshippedQuantity 'Total expenses' = GROUP SUM quantity(ShipmentDetail d) BY item(d), stock(shipment(d));\ncurrentBalance 'Current balance' (Item i, Stock s) = receivedQuantity (i, s) (-) shippedQuantity (i, s);\n")),(0,i.kt)("p",null,"Let's prohibit the negative item balance. The prohibition will work for any user action resulting in a negative balance. In this case, the user will see a specified message on the screen."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"CONSTRAINT currentBalance(Item i, Stock s) < 0 MESSAGE 'The balance of the product cannot be negative';\n")),(0,i.kt)("h2",{id:"defining-view-logic"},"Defining view logic"),(0,i.kt)("p",null,"In order to be able to work with the created solution, let's add directory forms and a current balances form, and also a set of paired forms for working with documents: a form for listing receipts and a form for editing them, a form for listing shipments and a form for editing them."),(0,i.kt)("p",null,"First, let's create directory forms."),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"Stock")," module, we add a form that provides the user with the functionality of creating and deleting stocks, as well as changing their attributes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM stocks 'Warehouses'\n    OBJECTS s = Stock\n    PROPERTIES(s) name, address, NEW, DELETE\n;\n")),(0,i.kt)("p",null,"In a similar manner, we'll create an item form in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," module, and a legal entity form in the ",(0,i.kt)("inlineCode",{parentName:"p"},"LegalEntity")," module."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Item 'Product';\n\nname 'Name' = DATA STRING[100](Item) IN base;\nbarcode 'Barcode' = DATA BPSTRING[13](Item) IN base;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS LegalEntity 'Organization';\n\nname 'Name' = DATA STRING[100](LegalEntity) IN base;\naddress 'Address' = DATA STRING[150](LegalEntity) IN base;\ninn 'TIN' = DATA BPSTRING[9](LegalEntity) IN base;\n")),(0,i.kt)("p",null,"Let's create edit forms for a receipt and a shipment. These forms will be used for creating new documents or editing existing ones. The layout of the forms will be similar: two vertical blocks, the top one containing a panel with the header attributes of the document being created/edited, and the lower one containing the document lines in a grid view and their attributes."),(0,i.kt)("p",null,"In the Receipt module, we should create a receipt edit form. For the form we are building, we specify that it will be used as a default form for creating/editing receipts (the ",(0,i.kt)("inlineCode",{parentName:"p"},"EDIT")," form block)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM receipt 'Receipt'\n    OBJECTS r = Receipt PANEL\n    PROPERTIES(r) number, date, nameSupplier, nameStock\n\n    OBJECTS d = ReceiptDetail\n    PROPERTIES(d) index, nameItem, quantity, price, sum READONLY, NEW, DELETE GRID\n    FILTERS receipt(d) = r\n\n    EDIT Receipt OBJECT r\n;\n")),(0,i.kt)("p",null,"Line filtering for the current receipt is performed with the help of the ",(0,i.kt)("inlineCode",{parentName:"p"},"FILTERS receipt(d) == r")," expression. The ",(0,i.kt)("inlineCode",{parentName:"p"},"FILTERS")," construct displays an object of a corresponding class on the form if the filter expression returns a value different from ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL"),". In this case, the receipt line will be displayed on the form if the header of the document to which the line is linked (",(0,i.kt)("inlineCode",{parentName:"p"},"receipt")," property) equals to the current object of the top block. In other words, only the lines of the created/edited document will be displayed."),(0,i.kt)("p",null,"In addition, if a filter is specified for objects of this class on the form, then when the user presses the ",(0,i.kt)("inlineCode",{parentName:"p"},"NEW")," button, the property of the newly added object will be automatically filled in a way that will make this object meet the filter conditions. In this case, when a new receipt line is created, the ",(0,i.kt)("inlineCode",{parentName:"p"},"receipt")," property of this line will be automatically filled with a link to the current header of the receipt."),(0,i.kt)("p",null,"Let's create an edit form for the shipment in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Shipment")," module. For the form we are creating, we specify that it will be used as the default form for creating/editing shipments (",(0,i.kt)("inlineCode",{parentName:"p"},"EDIT")," form block)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM shipment 'Shipment'\n    OBJECTS s = Shipment PANEL\n    PROPERTIES(s) number, date, nameCustomer, nameStock\n\n    OBJECTS d = ShipmentDetail\n    PROPERTIES(d) nameItem, quantity, price, sum READONLY, NEW, DELETE GRID\n    FILTERS shipment(d) = s\n\n    EDIT Shipment OBJECT s\n;\n")),(0,i.kt)("p",null,"Visually, supplier receipt and shipment forms will look almost identical and consist of two vertical blocks: one with a table for document headers and one with a table of document lines. Document lines should support visual filtering by documents and their subsets displayed on the form will change when navigating in the top block."),(0,i.kt)("p",null,"Let's create a receipt form. On this form, we will display all the properties defined above for document headers and their lines. Additionally, we will place automatically defined buttons for creating/editing a receipt using the edit form created above. All properties of document headers and their lines, except the buttons for creating/editing a receipt, should be read-only for editing directly on the form (",(0,i.kt)("inlineCode",{parentName:"p"},"READONLY")," operator)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM receipts 'Receipts'\n    OBJECTS r = Receipt\n    PROPERTIES(r) READONLY number, date, nameSupplier, nameStock\n    PROPERTIES(r) NEWSESSION NEW, EDIT, DELETE\n\n    OBJECTS d = ReceiptDetail\n    PROPERTIES(d) READONLY index, nameItem, quantity, price, sum\n    FILTERS receipt(d) = r\n;\n")),(0,i.kt)("p",null,"Let's create the shipment form in a similar manner."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM shipments 'Shipments'\n    OBJECTS s = Shipment\n    PROPERTIES(s) READONLY number, date, nameCustomer, nameStock\n    PROPERTIES(s) NEWSESSION NEW, EDIT, DELETE\n\n    OBJECTS d = ShipmentDetail\n    PROPERTIES(d) READONLY nameItem, quantity, price, sum\n    FILTERS shipment(d) = s\n;\n")),(0,i.kt)("p",null,"Next, in the ",(0,i.kt)("inlineCode",{parentName:"p"},"StockItem")," module, let's create a form for displaying current balances. A form should be a table whose lines contain information about the item (its name and barcode), the name of the stock, and the current balance for this item at this stock. The count of lines on the form will be equal to the count of items entered into the system multiplied by the count of entered stocks. To display only relevant data (i.e. only those items and stocks, for whose intersection the current balance is not ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL"),"), let's add a filter to the form."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM currentBalanceItemStock 'Current balances'\n    OBJECTS si = (s = Stock, i = Item)\n    PROPERTIES READONLY name(i), barcode(i), name(s), currentBalance(i, s)\n    FILTERS currentBalance(i, s)\n;\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"OBJECTS si = (s = Stock, i = Item)")," construct adds an object group with the name ",(0,i.kt)("inlineCode",{parentName:"p"},"si"),", which is a Cartesian product of ",(0,i.kt)("inlineCode",{parentName:"p"},"Stock")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," class objects."),(0,i.kt)("p",null,"Finally, let's declare the head module and specify what functionality from other modules will be used in it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"MODULE StockAccounting;\n\nREQUIRE Stock, Item, LegalEntity, Receipt, Shipment, StockItem;\n")),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"StockAccounting")," module, we compose the system menu. Directories should be added to the predefined ",(0,i.kt)("inlineCode",{parentName:"p"},"masterData")," folder of the navigator that we show immediately after the directories. We place the current balance form to the main menu (horizontal window ",(0,i.kt)("inlineCode",{parentName:"p"},"root"),"). Links to directory and document forms will be shown on the vertical ",(0,i.kt)("inlineCode",{parentName:"p"},"toolbar")," when the user selects a corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," folder."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"NAVIGATOR {\n    NEW FOLDER masterData 'Directories' FIRST WINDOW toolbar {\n        NEW items;\n        NEW stocks;\n        NEW legalEntities;\n    }\n    NEW FOLDER documents 'Documents' AFTER masterData WINDOW toolbar {\n        NEW receipts;\n        NEW shipments;\n    }\n    NEW currentBalanceItemStock AFTER documents;\n}\n")),(0,i.kt)("p",null,"The process of creating an information system is completed."),(0,i.kt)("h2",{id:"the-complete-source-code-on-github"},"The complete source code (on ",(0,i.kt)("a",{parentName:"h2",href:"https://github.com/lsfusion/samples/tree/master/mm"},"Github"),")"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"MODULE Stock;\n\nCLASS Stock 'Warehouse';\n\nname 'Name' = DATA STRING[100] (Stock) IN base;\naddress 'Address' = DATA STRING[150] (Stock) IN base;\n\nFORM stocks 'Warehouses'\n    OBJECTS s = Stock\n    PROPERTIES(s) name, address, NEW, DELETE\n;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"MODULE Item;\n\nCLASS Item 'Product';\n\nname 'Name' = DATA STRING[100](Item) IN base;\nbarcode 'Barcode' = DATA BPSTRING[13](Item) IN base;\n\nsalePrice 'Wholesale price' = DATA NUMERIC[17,2](Item) IN base;\n\nFORM items 'Products'\n    OBJECTS i = Item\n    PROPERTIES(i) name, barcode, salePrice, NEW, DELETE\n;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"MODULE LegalEntity;\n\nCLASS LegalEntity 'Organization';\n\nname 'Name' = DATA STRING[100](LegalEntity) IN base;\naddress 'Address' = DATA STRING[150](LegalEntity) IN base;\ninn 'TIN' = DATA BPSTRING[9](LegalEntity) IN base;\n\nlegalEntityINN = GROUP AGGR LegalEntity legalEntity BY inn(legalEntity);\n\nFORM legalEntities 'Organization'\n    OBJECTS l = LegalEntity\n    PROPERTIES(l) name, inn, address, NEW, DELETE\n;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"MODULE Receipt;\n\nREQUIRE Stock, Item, LegalEntity;\n\nCLASS Receipt 'Receipt';\nCLASS ReceiptDetail 'Receipt line';\n\nreceipt 'Line document' = DATA Receipt (ReceiptDetail) NONULL DELETE;\n\nindex 'Line number' (ReceiptDetail d) =\n        PARTITION SUM 1 IF d IS ReceiptDetail\n        ORDER d BY receipt(d);\n\nnumber 'Receipt number' = DATA BPSTRING[10] (Receipt);\ndate 'Receipt date' = DATA DATE (Receipt);\n\nsupplier 'Supplier' = DATA LegalEntity (Receipt);\nnameSupplier 'Supplier name' (Receipt r) = name(supplier(r));\n\nstock 'Warehouse' = DATA Stock (Receipt);\nnameStock 'Warehouse name' (Receipt r) = name(stock(r));\n\nitem 'Product' = DATA Item (ReceiptDetail);\nnameItem 'Product name' (ReceiptDetail d) = name(item(d));\n\nquantity 'Quantity' = DATA NUMERIC[16,4] (ReceiptDetail);\nprice 'Supplier price' = DATA NUMERIC[17,2] (ReceiptDetail);\nsum 'Supplier amount' (ReceiptDetail d) = quantity(d) * price(d);\n\nFORM receipt 'Receipt'\n    OBJECTS r = Receipt PANEL\n    PROPERTIES(r) number, date, nameSupplier, nameStock\n\n    OBJECTS d = ReceiptDetail\n    PROPERTIES(d) index, nameItem, quantity, price, sum READONLY, NEW, DELETE GRID\n    FILTERS receipt(d) = r\n\n    EDIT Receipt OBJECT r\n;\n\nFORM receipts 'Receipts'\n    OBJECTS r = Receipt\n    PROPERTIES(r) READONLY number, date, nameSupplier, nameStock\n    PROPERTIES(r) NEWSESSION NEW, EDIT, DELETE\n\n    OBJECTS d = ReceiptDetail\n    PROPERTIES(d) READONLY index, nameItem, quantity, price, sum\n    FILTERS receipt(d) = r\n;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"MODULE Shipment;\n\nREQUIRE Stock, Item, LegalEntity;\n\nCLASS Shipment 'Shipment';\nCLASS ShipmentDetail 'Shipment line';\n\nshipment 'Line document' = DATA Shipment (ShipmentDetail) NONULL DELETE;\nindex 'Line number' (ShipmentDetail d) =\n        PARTITION SUM 1 IF d IS ShipmentDetail\n        ORDER d BY shipment(d);\n\nnumber 'Shipment number' = DATA BPSTRING[10] (Shipment);\ndate 'Shipment date' = DATA DATE (Shipment);\n\ncustomer 'Customer' = DATA LegalEntity (Shipment);\nnameCustomer 'Customer name' (Shipment s) = name(customer(s));\n\nstock 'Warehouse' = DATA Stock(Shipment);\nnameStock 'Warehouse name' (Shipment s) = name(stock(s));\n\nitem 'Product' = DATA Item (ShipmentDetail);\nnameItem 'Product name' (ShipmentDetail d) = name(item(d));\n\nquantity 'Quantity' = DATA NUMERIC[16,4](ShipmentDetail);\nprice 'Selling price' = DATA NUMERIC[17,2](ShipmentDetail);\nsum 'Sale amount' (ShipmentDetail d) = quantity(d) * price(d);\n\nprice(ShipmentDetail d) <- salePrice(item(d)) WHEN CHANGED(item(d));\n\nFORM shipment 'Shipment'\n    OBJECTS s = Shipment PANEL\n    PROPERTIES(s) number, date, nameCustomer, nameStock\n\n    OBJECTS d = ShipmentDetail\n    PROPERTIES(d) nameItem, quantity, price, sum READONLY, NEW, DELETE GRID\n    FILTERS shipment(d) = s\n\n    EDIT Shipment OBJECT s\n;\n\nFORM shipments 'Shipments'\n    OBJECTS s = Shipment\n    PROPERTIES(s) READONLY number, date, nameCustomer, nameStock\n    PROPERTIES(s) NEWSESSION NEW, EDIT, DELETE\n\n    OBJECTS d = ShipmentDetail\n    PROPERTIES(d) READONLY nameItem, quantity, price, sum\n    FILTERS shipment(d) = s\n;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"MODULE StockItem;\n\nREQUIRE Shipment, Receipt;\n\nreceivedQuantity 'Total income' = GROUP SUM quantity(ReceiptDetail d) BY item(d), stock(receipt(d));\nshippedQuantity 'Total expenses' = GROUP SUM quantity(ShipmentDetail d) BY item(d), stock(shipment(d));\ncurrentBalance 'Current balance' (Item i, Stock s) = receivedQuantity (i, s) (-) shippedQuantity (i, s);\n\nCONSTRAINT currentBalance(Item i, Stock s) < 0 MESSAGE 'The balance of the product cannot be negative';\n\nFORM currentBalanceItemStock 'Current balances'\n    OBJECTS si = (s = Stock, i = Item)\n    PROPERTIES READONLY name(i), barcode(i), name(s), currentBalance(i, s)\n    FILTERS currentBalance(i, s)\n;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"MODULE StockAccounting;\n\nREQUIRE Stock, Item, LegalEntity, Receipt, Shipment, StockItem;\n\nNAVIGATOR {\n    NEW FOLDER masterData 'Directories' FIRST WINDOW toolbar {\n        NEW items;\n        NEW stocks;\n        NEW legalEntities;\n    }\n    NEW FOLDER documents 'Documents' AFTER masterData WINDOW toolbar {\n        NEW receipts;\n        NEW shipments;\n    }\n    NEW currentBalanceItemStock AFTER documents;\n}\n")))}m.isMDXComponent=!0}}]);