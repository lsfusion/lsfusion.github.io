"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[29074],{42694:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var t=r(74848),i=r(28453);const s={title:"Object blocks"},o=void 0,c={id:"Object_blocks",title:"Object blocks",description:"Object block of the FORM statement  adds objects (including object groups) to the form structure, as well as object trees to the interactive form view.",source:"@site/versioned_docs/version-v4/Object_blocks.md",sourceDirName:".",slug:"/Object_blocks",permalink:"/v4/Object_blocks",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Object_blocks.md",tags:[],version:"v4",lastUpdatedAt:1708525070,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"Object blocks"},sidebar:"learn",previous:{title:"FORM statement",permalink:"/v4/FORM_statement"},next:{title:"Properties and actions block",permalink:"/v4/Properties_and_actions_block"}},l={},a=[{value:"Object block",id:"objects",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Object group options",id:"object-group-options",level:3},{value:"Examples",id:"examples",level:3},{value:"Object tree block",id:"tree",level:2},{value:"Syntax",id:"syntax-1",level:3},{value:"Description",id:"description-1",level:3},{value:"Parameters",id:"parameters-1",level:3},{value:"Object tree options",id:"object-tree-options",level:3},{value:"Examples",id:"examples-1",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Object block of the ",(0,t.jsx)(n.a,{href:"/v4/FORM_statement",children:"FORM statement"}),"  adds ",(0,t.jsx)(n.a,{href:"#objects",children:"objects"})," (including object groups) to the form structure, as well as ",(0,t.jsx)(n.a,{href:"#tree",children:"object trees"})," to the interactive form view."]}),"\n",(0,t.jsx)(n.h2,{id:"objects",children:"Object block"}),"\n",(0,t.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"OBJECTS groupDeclaration1 [groupOptions1], ...., groupDeclarationN [groupOptionsN]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Each ",(0,t.jsx)(n.code,{children:"groupDeclaration"})," is a declaration of an object group consisting of several objects:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[groupName =] (objectDeclaration1, ..., objectDeclarationK)\n"})}),"\n",(0,t.jsx)(n.p,{children:"or an object group consisting of a single object:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"objectDeclaration\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Each ",(0,t.jsx)(n.code,{children:"objectDeclaration"})," declaring an object has the following syntax:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[[name] [caption] =] classId [ON CHANGE actionId(param1, ..., paramM) | { actionOperator } ]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The declaration of each object group may be followed by a set of options called ",(0,t.jsx)(n.code,{children:"groupOptions"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"viewType\r\nINIT | FIXED\r\nPAGESIZE pageSize \r\nAFTER groupName\r\nBEFORE groupName\r\ndefaultObjectsType\r\nIN propertyGroup\r\nEXTID extID\r\nSUBREPORT [subReportExpression]\n"})}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["A single ",(0,t.jsx)(n.code,{children:"OBJECTS"})," block can contain several comma-delimited declarations of ",(0,t.jsx)(n.a,{href:"/v4/Interactive_view#objects",children:"object groups"}),". An object group can contain just one object or several ones. In case of a single object, you can use simplified syntax without specifying the name of an object group and using parentheses. The declaration of an object group may be followed by the options of this group. They are listed one after another in an arbitrary order."]}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)("a",{className:"lsdoc-anchor",id:"groupName"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"groupName"})}),"\n",(0,t.jsxs)(n.p,{children:["Name of an object group. ",(0,t.jsx)(n.a,{href:"/v4/IDs#id",children:"Simple ID"}),". Must be specified if you need to access an object group consisting of several objects. If an object group consists of a single object, the name of the object group will be equal to the name of the object and doesn't need to be specified."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"name"})}),"\n",(0,t.jsxs)(n.p,{children:["Object name. Simple ID. Must be specified if the object class is a ",(0,t.jsx)(n.a,{href:"/v4/Built-in_classes",children:"built-in class"}),". If the object class is a ",(0,t.jsx)(n.a,{href:"/v4/User_classes",children:"custom class"}),", the name doesn't need to be specified. In this case, it will be equal to the name of the class object."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"classId"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/v4/IDs#classid",children:"Object class ID"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"caption"})}),"\n",(0,t.jsxs)(n.p,{children:["Caption of the object being added. ",(0,t.jsx)(n.a,{href:"/v4/Literals#strliteral",children:"String literal"}),". If the caption is not specified, the class caption will become the object caption."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"ON CHANGE actionName(param1, ..., paramM) | { actionOperator }"})}),"\n",(0,t.jsxs)(n.p,{children:["Specifying an ",(0,t.jsx)(n.a,{href:"/v4/Actions",children:"action"})," that will be called when the current object value is changed."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"actionID"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/v4/IDs#propertyid",children:"Action ID"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"param1, ..., paramM"})}),"\n",(0,t.jsxs)(n.p,{children:["A list of object names on the form that will be used as action parameters. The number of these objects must be equal to the number of action parameters. The name of the object is defined with a ",(0,t.jsx)(n.a,{href:"/v4/IDs#id",children:"simple ID"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"actionOperator"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/v4/Action_operators#contextdependent",children:"Context-dependent action operator"}),". You can use the names of already declared objects on the form as parameters."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"object-group-options",children:"Object group options"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"viewType"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/v4/Interactive_view#property",children:"Default view"})," for an object group. It is specified with one of the keywords:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PANEL"})," - ",(0,t.jsx)(n.em,{children:"panel"})," view."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"TOOLBAR"})," - ",(0,t.jsx)(n.em,{children:"toolbar"})," display mode."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"GRID"})," - ",(0,t.jsx)(n.em,{children:"table column"})," view;. Used by default."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"PAGESIZE pageSize"})}),"\n",(0,t.jsxs)(n.p,{children:["Specification of the number of readable objects in the table. By default, the quantity is determined dynamically depending on the size of the component in the user interface and equals to ",(0,t.jsx)(n.code,{children:"3 * <number of visible rows in the table>"}),". A value of ",(0,t.jsx)(n.code,{children:"0"})," means that all objects must be read."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"pageSize"})}),"\n",(0,t.jsxs)(n.p,{children:["Number of objects read. ",(0,t.jsx)(n.a,{href:"/v4/Literals#intliteral",children:"Integer literal"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"AFTER"})," groupName"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"BEFORE"})," groupName"]}),"\n",(0,t.jsxs)(n.p,{children:["Specifying that the object tree should be added to the form structure immediately before (keyword ",(0,t.jsx)(n.code,{children:"BEFORE"}),") or after (keyword ",(0,t.jsx)(n.code,{children:"AFTER"}),") of a specified object group. Typically used with the ",(0,t.jsx)(n.a,{href:"/v4/Form_extension",children:"form extension"})," mechanism . If a group is added before the group in a tree, then this group should the first in this tree. Accordingly, if a group is added after the group in a tree, this group should be the last in this tree."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"groupName"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"#groupName",children:"Object group name"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"defaultObjectsType"})}),"\n",(0,t.jsx)(n.p,{children:"Specifying which object collection from the added object group will be current after the change of the active filters:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"FIRST"}),"\u2013 specifies that the first object collection will be the ",(0,t.jsx)(n.a,{href:"/v4/Interactive_view#defaultobject",children:"default objects"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"LAST"})," - last one"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PREV"})," - previous one"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If this option is not specified, the platform determines the option to be used depending on the current filters."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"IN propertyGroup"})}),"\n",(0,t.jsxs)(n.p,{children:["Specifying the ",(0,t.jsx)(n.a,{href:"/v4/Groups_of_properties_and_actions",children:"property/action group"})," that the object group belongs to. Used only in the ",(0,t.jsx)(n.a,{href:"/v4/Structured_view#hierarchy",children:"hierarchical"})," view."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"propertyGroup"})}),"\n",(0,t.jsxs)(n.p,{children:["The property group name. ",(0,t.jsx)(n.a,{href:"/v4/IDs#cid",children:"Composite ID"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"EXTID extID"})}),"\n",(0,t.jsxs)(n.p,{children:["Specifying the name to be used for ",(0,t.jsx)(n.a,{href:"/v4/Structured_view#extid",children:"export/import"})," operations performed by this object group. Used only in the ",(0,t.jsx)(n.a,{href:"/v4/Structured_view",children:"structured"})," view."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"extId"})}),"\n",(0,t.jsx)(n.p,{children:"String literal."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"SUBREPORT [subReportExpression]"})}),"\n",(0,t.jsxs)(n.p,{children:["Specifies that you need to generate a separate ",(0,t.jsx)(n.a,{href:"/v4/Print_view",children:"report"})," file for this object group while ",(0,t.jsx)(n.a,{href:"/v4/Print_view#buildhierarchy",children:"building the report hierarchy"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"subReportExpression"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"/v4/Expression",children:"expression"})," whose value will be used as the name of the  ",(0,t.jsx)(n.a,{href:"/v4/Print_view",children:"report"})," file for the created object group. You can use the names of already declared objects on the form as parameters. It is assumed that the values of these objects will be ",(0,t.jsx)(n.a,{href:"/v4/Open_form#params",children:"passed"})," when the form is opened ",(0,t.jsx)(n.a,{href:"/v4/In_a_print_view_PRINT",children:"in the print view"})," (if it's not done, they will be considered equal ",(0,t.jsx)(n.code,{children:"NULL"}),")."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"CLASS Shipment;\r\n// declaring the delivery form\r\nFORM shipments 'Deliveries'\r\n    OBJECTS s = Shipment // adding one object of the shipment class\r\n                        PAGESIZE 100 // indicating that the table should always contain 100 rows\r\n\r\n    // ... adding properties and filters to the form\r\n;\r\n\r\n// Declaring a form that will display the turnover of the product for a specified interval\r\nname = DATA STRING[100] (Item);\r\nrevenue = DATA NUMERIC[16,2] (Item, DATE, DATE);\r\n\r\nFORM revenues 'Product turnovers'\r\n    // declaring a group of objects, consisting of 2 objects of the Date class with the appropriate captions,\r\n    // which will always be displayed as a panel\r\n    OBJECTS interval = (dateFrom 'Date (from)' = DATE, dateTo 'Date (to)' = DATE) PANEL, \r\n            i = Item // adding a list of products\r\n    // adding to the form the properties of the date objects values, with which the user can select dates\r\n    PROPERTIES VALUE(dateFrom), VALUE(dateTo) \r\n    // adding the product name and the property with the product turnover for the date interval\r\n    PROPERTIES name(i), revenue(i, dateFrom, dateTo) \r\n;\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"// creating a form for printing a price tag for a product\r\nlabelFile = DATA STRING[100] (Item);\r\nprintLabelFile (Item i)= OVERRIDE labelFile(i), 'MyModule_printLabel_i.jrxml' IF i IS Item;\r\nFORM printLabel 'Price tag printing'\r\n    OBJECTS i = Item  // adding the product for which the price tag will be printed\r\n    // marking that a file whose name is stored in the printLabelFile property should be used as a template \r\n    // (it is assumed that the i value will be passed in the OBJECTS block)\r\n    REPORT printLabelFile(i)       \r\n    // for example, the user can input myLabel1.jrxml there, then the system will use a file named myLabel1.jrxml\r\n    //  ... other properties required for printing\r\n;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"tree",children:"Object tree block"}),"\n",(0,t.jsx)(n.h3,{id:"syntax-1",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"TREE [name] groupDeclaration1 [parentBlock1], ...., groupDeclarationN [parentBlockN] [treeOptions]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Each ",(0,t.jsx)(n.code,{children:"groupDeclaration"})," is a declaration of an object group that is similar to the declaration in an object block described above. Each ",(0,t.jsx)(n.code,{children:"parentBlock"})," can be described in one of the following ways:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"PARENT propertyId\r\n(PARENT propertyId1, ..., propertyIdK)\n"})}),"\n",(0,t.jsx)(n.p,{children:"The first option is used if an object group for which the block is specified consists of a single object, the second one is used for groups of two and more objects."}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"treeOptions"})," options set may be specified after the declaration of each object tree."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"AFTER groupName\r\nBEFORE groupName\n"})}),"\n",(0,t.jsx)(n.h3,{id:"description-1",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Object tree block"})," lets you create an ",(0,t.jsx)(n.a,{href:"/v4/Interactive_view#tree",children:"object tree"}),". The first specified object group will form a list of top-level objects, each of which will have a child list of objects of the second specified object group and so  on."]}),"\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.code,{children:"PARENT"})," block to create ",(0,t.jsx)(n.a,{href:"/v4/Interactive_view#treegroup",children:"hierarchical object groups"}),". To do that, specify a property that will define the parent element for an object (or several objects if an object group contains several ones)."]}),"\n",(0,t.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsx)("a",{className:"lsdoc-anchor",id:"treeName"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"name"})}),"\n",(0,t.jsxs)(n.p,{children:["The name of the object tree being created. ",(0,t.jsx)(n.a,{href:"/v4/IDs#id",children:"Simple ID"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"propertyId"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/v4/IDs#propertyid",children:"ID of the property"})," defining the hierarchy for an object group consisting of a single object. The specified property must have a single parameter and return the parent object of the passed object as its value (or ",(0,t.jsx)(n.code,{children:"NULL"}),"  if the passed object is the top one)."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"propertyId1, ..., propertyIdK"})}),"\n",(0,t.jsxs)(n.p,{children:["A list of property ID's defining the hierarchy for an object group consisting of several objects. All specified properties must have the same number of parameters as the number of objects in the object group. Each of these properties must return one of the parent objects of the passed objects as a value (or ",(0,t.jsx)(n.code,{children:"NULL"})," if the passed object collection is the top one). The first property should return the first parent object, the second property - the second object, etc.  on."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"object-tree-options",children:"Object tree options"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"AFTER groupName"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"BEFORE groupName"})}),"\n",(0,t.jsxs)(n.p,{children:["Specifying that the object tree should be added to the form structure immediately before (keyword ",(0,t.jsx)(n.code,{children:"BEFORE"}),") or after (keyword ",(0,t.jsx)(n.code,{children:"AFTER"}),") of a specified object group. Typically used with the ",(0,t.jsx)(n.a,{href:"/v4/Form_extension",children:"form extension"})," mechanism . If a group is added before the group in a tree, then this group should the first in this tree. Accordingly, if a group is added after the group in a tree, this group should be the last in this tree."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"groupName"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"#groupName",children:"Object group name"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"examples-1",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"CLASS SkuGroup;\r\nname = DATA ISTRING[100] (SkuGroup);\r\nactive = DATA BOOLEAN (SkuGroup);\r\nparent = DATA SkuGroup (SkuGroup) AUTOSET;\r\n\r\nCLASS Sku;\r\nname = DATA ISTRING[100] (Sku);\r\nskuGroup = DATA SkuGroup (Sku);\r\n\r\n\r\nFORM skus 'Sku'\r\n    TREE groupTree g=SkuGroup PARENT parent(g)\r\n    PROPERTIES READONLY name(g)\r\n    FILTERS active(g)\r\n\r\n    OBJECTS s = Sku\r\n    PROPERTIES(s) name\r\n    FILTERS skuGroup(s) == g\r\n;\r\n\r\nCLASS Group1;\r\nname = DATA STRING[100] (Group1);\r\n\r\nCLASS Group2;\r\nname = DATA STRING[100] (Group2);\r\n\r\nCLASS Group3;\r\nname = DATA STRING[100] (Group3);\r\n\r\nin = DATA BOOLEAN (Group1, Group2);\r\nin = DATA BOOLEAN (Group2, Group3);\r\n\r\nFORM groups\r\n    TREE groups g1 = Group1, g2 = Group2, g3 = Group3\r\n    PROPERTIES READONLY name(g1), name(g2), name(g3)\r\n    FILTERS in(g1, g2), in(g2, g3)\r\n;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>c});var t=r(96540);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);