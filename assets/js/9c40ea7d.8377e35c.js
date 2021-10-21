(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[43382],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},24551:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var n=a(74034),r=a(79973),i=(a(67294),a(3905)),o=["components"],p={title:"Object blocks"},l=void 0,s={unversionedId:"Object_blocks",id:"Object_blocks",isDocsHomePage:!1,title:"Object blocks",description:"Object block of the FORM statement  adds objects (including object groups) to the form structure, as well as object trees to the interactive form view.",source:"@site/docs/Object_blocks.md",sourceDirName:".",slug:"/Object_blocks",permalink:"/next/Object_blocks",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Object_blocks.md",tags:[],version:"current",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"7/7/2021",frontMatter:{title:"Object blocks"},sidebar:"learn",previous:{title:"Overview",permalink:"/next/FORM_statement"},next:{title:"Properties and actions block",permalink:"/next/Properties_and_actions_block"}},c=[{value:"Object block",id:"objects",children:[{value:"Syntax",id:"syntax",children:[],level:3},{value:"Description",id:"description",children:[],level:3},{value:"Parameters",id:"parameters",children:[],level:3},{value:"Object group options",id:"object-group-options",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],level:2},{value:"Object tree block",id:"tree",children:[{value:"Syntax",id:"syntax-1",children:[],level:3},{value:"Description",id:"description-1",children:[],level:3},{value:"Parameters",id:"parameters-1",children:[],level:3},{value:"Object tree options",id:"object-tree-options",children:[],level:3},{value:"Examples",id:"examples-1",children:[],level:3}],level:2}],m={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Object block of the ",(0,i.kt)("a",{parentName:"p",href:"/next/FORM_statement"},"FORM statement"),"  adds ",(0,i.kt)("a",{parentName:"p",href:"#objects"},"objects")," (including object groups) to the form structure, as well as ",(0,i.kt)("a",{parentName:"p",href:"#tree"},"object trees")," to the interactive form view."),(0,i.kt)("h2",{id:"objects"},"Object block"),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"OBJECTS groupDeclaration1 [groupOptions1], ...., groupDeclarationN [groupOptionsN]\n")),(0,i.kt)("p",null,"Each ",(0,i.kt)("inlineCode",{parentName:"p"},"groupDeclaration")," is a declaration of an object group consisting of several objects:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[groupName =] (objectDeclaration1, ..., objectDeclarationK)\n")),(0,i.kt)("p",null," or an object group consisting of a single object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"objectDeclaration\n")),(0,i.kt)("p",null,"Each ",(0,i.kt)("inlineCode",{parentName:"p"},"objectDeclaration")," declaring an object has the following syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[[name] [caption] =] classId [ON CHANGE actionId(param1, ..., paramM) | { actionOperator } ]\n")),(0,i.kt)("p",null,"The declaration of each object group may be followed by a set of options called ",(0,i.kt)("inlineCode",{parentName:"p"},"groupOptions"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"viewType\nINIT | FIXED\nPAGESIZE pageSize \nAFTER groupName\nBEFORE groupName\ndefaultObjectsType\nIN propertyGroup\nEXTID extID\nSUBREPORT [subReportExpression]\n")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"A single ",(0,i.kt)("inlineCode",{parentName:"p"},"OBJECTS")," block can contain several comma-delimited declarations of ",(0,i.kt)("a",{parentName:"p",href:"/next/Interactive_view#objects"},"object groups"),". An object group can contain just one object or several ones. In case of a single object, you can use simplified syntax without specifying the name of an object group and using parentheses. The declaration of an object group may be followed by the options of this group. They are listed one after another in an arbitrary order."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("a",{className:"lsdoc-anchor",id:"groupName"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"groupName")),(0,i.kt)("p",{parentName:"li"},"  Name of an object group. ",(0,i.kt)("a",{parentName:"p",href:"/next/IDs#id"},"Simple ID"),". Must be specified if you need to access an object group consisting of several objects. If an object group consists of a single object, the name of the object group will be equal to the name of the object and doesn't need to be specified.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"name")),(0,i.kt)("p",{parentName:"li"},"  Object name. Simple ID. Must be specified if the object class is a ",(0,i.kt)("a",{parentName:"p",href:"/next/Built-in_classes"},"built-in class"),". If the object class is a ",(0,i.kt)("a",{parentName:"p",href:"/next/User_classes"},"custom class"),", the name doesn't need to be specified. In this case, it will be equal to the name of the class object. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"classId")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("a",{parentName:"p",href:"/next/IDs#classid"},"Object class ID"),". ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"caption")),(0,i.kt)("p",{parentName:"li"},"  Caption of the object being added. ",(0,i.kt)("a",{parentName:"p",href:"/next/Literals#strliteral"},"String literal"),". If the caption is not specified, the class caption will become the object caption.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ON CHANGE actionName(param1, ..., paramM) | { actionOperator }")),(0,i.kt)("p",{parentName:"li"},"  Specifying an ",(0,i.kt)("a",{parentName:"p",href:"/next/Actions"},"action")," that will be called when the current object value is changed."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"actionID")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("a",{parentName:"p",href:"/next/IDs#propertyid"},"Action ID"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"param1, ..., paramM")),(0,i.kt)("p",{parentName:"li"},"  A list of object names on the form that will be used as action parameters. The number of these objects must be equal to the number of action parameters. The name of the object is defined with a ",(0,i.kt)("a",{parentName:"p",href:"/next/IDs#id"},"simple ID"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"actionOperator")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("a",{parentName:"p",href:"/next/Action_operators#contextdependent"},"Context-dependent action operator"),". You can use the names of already declared objects on the form as parameters."))))),(0,i.kt)("h3",{id:"object-group-options"},"Object group options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"viewType")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("a",{parentName:"p",href:"/next/Interactive_view#property"},"Default view")," for an object group. It is specified with one of the keywords:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PANEL")," - ",(0,i.kt)("em",{parentName:"li"},"panel")," view."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TOOLBAR")," - ",(0,i.kt)("em",{parentName:"li"},"toolbar")," display mode."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GRID")," - ",(0,i.kt)("em",{parentName:"li"},"table column")," view;. Used by default."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"PAGESIZE pageSize")),(0,i.kt)("p",{parentName:"li"},"  Specification of the number of readable objects in the table. By default, the quantity is determined dynamically depending on the size of the component in the user interface and equals to ",(0,i.kt)("inlineCode",{parentName:"p"},"3 * <number of visible rows in the table>"),". A value of ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," means that all objects must be read."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"pageSize")),(0,i.kt)("p",{parentName:"li"},"  Number of objects read. ",(0,i.kt)("a",{parentName:"p",href:"/next/Literals#intliteral"},"Integer literal"),".")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"AFTER")," groupName")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"BEFORE")," groupName"),(0,i.kt)("p",{parentName:"li"},"  Specifying that the object tree should be added to the form structure immediately before (keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"BEFORE"),") or after (keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"AFTER"),") of a specified object group. Typically used with the ",(0,i.kt)("a",{parentName:"p",href:"/next/Form_extension"},"form extension")," mechanism . If a group is added before the group in a tree, then this group should the first in this tree. Accordingly, if a group is added after the group in a tree, this group should be the last in this tree."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"groupName")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("a",{parentName:"p",href:"#groupName"},"Object group name"),". ")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"defaultObjectsType")),(0,i.kt)("p",{parentName:"li"},"  Specifying which object collection from the added object group will be current after the change of the active filters:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FIRST"),"\u2013 specifies that the first object collection will be the ",(0,i.kt)("a",{parentName:"li",href:"/next/Interactive_view#defaultobject"},"default objects")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LAST")," - last one"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PREV")," - previous one")),(0,i.kt)("p",{parentName:"li"},"If this option is not specified, the platform determines the option to be used depending on the current filters.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"IN propertyGroup")),(0,i.kt)("p",{parentName:"li"},"  Specifying the ",(0,i.kt)("a",{parentName:"p",href:"/next/Groups_of_properties_and_actions"},"property/action group")," that the object group belongs to. Used only in the ",(0,i.kt)("a",{parentName:"p",href:"/next/Structured_view#hierarchy"},"hierarchical")," view."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"propertyGroup")),(0,i.kt)("p",{parentName:"li"},"  The property group name. ",(0,i.kt)("a",{parentName:"p",href:"/next/IDs#cid"},"Composite ID"),".")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"EXTID extID")),(0,i.kt)("p",{parentName:"li"},"  Specifying the name to be used for ",(0,i.kt)("a",{parentName:"p",href:"/next/Structured_view#extid"},"export/import")," operations performed by this object group. Used only in the ",(0,i.kt)("a",{parentName:"p",href:"/next/Structured_view"},"structured")," view."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"extId")),(0,i.kt)("p",{parentName:"li"},"  String literal.")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"SUBREPORT [subReportExpression]")),(0,i.kt)("p",{parentName:"li"},"  Specifies that you need to generate a separate ",(0,i.kt)("a",{parentName:"p",href:"/next/Print_view"},"report")," file for this object group while ",(0,i.kt)("a",{parentName:"p",href:"/next/Print_view#buildhierarchy"},"building the report hierarchy"),"."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"subReportExpression")),(0,i.kt)("p",{parentName:"li"},"  The ",(0,i.kt)("a",{parentName:"p",href:"/next/Expression"},"expression")," whose value will be used as the name of the  ",(0,i.kt)("a",{parentName:"p",href:"/next/Print_view"},"report")," file for the created object group. You can use the names of already declared objects on the form as parameters. It is assumed that the values of these objects will be ",(0,i.kt)("a",{parentName:"p",href:"/next/Open_form#params"},"passed")," when the form is opened ",(0,i.kt)("a",{parentName:"p",href:"/next/In_a_print_view_PRINT"},"in the print view")," (if it's not done, they will be considered equal ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL"),")."))))),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Shipment;\n// declaring the delivery form\nFORM shipments 'Deliveries'\n    OBJECTS s = Shipment // adding one object of the shipment class\n                        PAGESIZE 100 // indicating that the table should always contain 100 rows\n\n    // ... adding properties and filters to the form\n;\n\n// Declaring a form that will display the turnover of the product for a specified interval\nname = DATA STRING[100] (Item);\nrevenue = DATA NUMERIC[16,2] (Item, DATE, DATE);\n\nFORM revenues 'Product turnovers'\n    // declaring a group of objects, consisting of 2 objects of the Date class with the appropriate captions,\n    // which will always be displayed as a panel\n    OBJECTS interval = (dateFrom 'Date (from)' = DATE, dateTo 'Date (to)' = DATE) PANEL, \n            i = Item // adding a list of products\n    // adding to the form the properties of the date objects values, with which the user can select dates\n    PROPERTIES VALUE(dateFrom), VALUE(dateTo) \n    // adding the product name and the property with the product turnover for the date interval\n    PROPERTIES name(i), revenue(i, dateFrom, dateTo) \n;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"// creating a form for printing a price tag for a product\nlabelFile = DATA STRING[100] (Item);\nprintLabelFile (Item i)= OVERRIDE labelFile(i), 'MyModule_printLabel_i.jrxml' IF i IS Item;\nFORM printLabel 'Price tag printing'\n    OBJECTS i = Item  // adding the product for which the price tag will be printed\n    // marking that a file whose name is stored in the printLabelFile property should be used as a template \n    // (it is assumed that the i value will be passed in the OBJECTS block)\n    REPORT printLabelFile(i)       \n    // for example, the user can input myLabel1.jrxml there, then the system will use a file named myLabel1.jrxml\n    //  ... other properties required for printing\n;\n")),(0,i.kt)("h2",{id:"tree"},"Object tree block"),(0,i.kt)("h3",{id:"syntax-1"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"TREE [name] groupDeclaration1 [parentBlock1], ...., groupDeclarationN [parentBlockN] [treeOptions]\n")),(0,i.kt)("p",null,"Each ",(0,i.kt)("inlineCode",{parentName:"p"},"groupDeclaration")," is a declaration of an object group that is similar to the declaration in an object block described above. Each ",(0,i.kt)("inlineCode",{parentName:"p"},"parentBlock")," can be described in one of the following ways:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"PARENT propertyId\n(PARENT propertyId1, ..., propertyIdK)\n")),(0,i.kt)("p",null,"The first option is used if an object group for which the block is specified consists of a single object, the second one is used for groups of two and more objects."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"treeOptions")," options set may be specified after the declaration of each object tree."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"AFTER groupName\nBEFORE groupName\n")),(0,i.kt)("h3",{id:"description-1"},"Description"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Object tree block")," lets you create an ",(0,i.kt)("a",{parentName:"p",href:"/next/Interactive_view#tree"},"object tree"),". The first specified object group will form a list of top-level objects, each of which will have a child list of objects of the second specified object group and so  on."),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"PARENT")," block to create ",(0,i.kt)("a",{parentName:"p",href:"/next/Interactive_view#treegroup"},"hierarchical object groups"),". To do that, specify a property that will define the parent element for an object (or several objects if an object group contains several ones)."),(0,i.kt)("h3",{id:"parameters-1"},"Parameters"),(0,i.kt)("a",{className:"lsdoc-anchor",id:"treeName"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"name")),(0,i.kt)("p",{parentName:"li"},"  The name of the object tree being created. ",(0,i.kt)("a",{parentName:"p",href:"/next/IDs#id"},"Simple ID"),". ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"propertyId")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("a",{parentName:"p",href:"/next/IDs#propertyid"},"ID of the property")," defining the hierarchy for an object group consisting of a single object. The specified property must have a single parameter and return the parent object of the passed object as its value (or ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL"),"  if the passed object is the top one).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"propertyId1, ..., propertyIdK")),(0,i.kt)("p",{parentName:"li"},"  A list of property ID's defining the hierarchy for an object group consisting of several objects. All specified properties must have the same number of parameters as the number of objects in the object group. Each of these properties must return one of the parent objects of the passed objects as a value (or ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL")," if the passed object collection is the top one). The first property should return the first parent object, the second property - the second object, etc.  on."))),(0,i.kt)("h3",{id:"object-tree-options"},"Object tree options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"AFTER groupName"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"BEFORE groupName")),(0,i.kt)("p",{parentName:"li"},"  Specifying that the object tree should be added to the form structure immediately before (keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"BEFORE"),") or after (keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"AFTER"),") of a specified object group. Typically used with the ",(0,i.kt)("a",{parentName:"p",href:"/next/Form_extension"},"form extension")," mechanism . If a group is added before the group in a tree, then this group should the first in this tree. Accordingly, if a group is added after the group in a tree, this group should be the last in this tree.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"groupName")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("a",{parentName:"p",href:"#groupName"},"Object group name"),". "))),(0,i.kt)("h3",{id:"examples-1"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS SkuGroup;\nname = DATA ISTRING[100] (SkuGroup);\nactive = DATA BOOLEAN (SkuGroup);\nparent = DATA SkuGroup (SkuGroup) AUTOSET;\n\nCLASS Sku;\nname = DATA ISTRING[100] (Sku);\nskuGroup = DATA SkuGroup (Sku);\n\n\nFORM skus 'Sku'\n    TREE groupTree g=SkuGroup PARENT parent(g)\n    PROPERTIES READONLY name(g)\n    FILTERS active(g)\n\n    OBJECTS s = Sku\n    PROPERTIES(s) name\n    FILTERS skuGroup(s) == g\n;\n\nCLASS Group1;\nname = DATA STRING[100] (Group1);\n\nCLASS Group2;\nname = DATA STRING[100] (Group2);\n\nCLASS Group3;\nname = DATA STRING[100] (Group3);\n\nin = DATA BOOLEAN (Group1, Group2);\nin = DATA BOOLEAN (Group2, Group3);\n\nFORM groups\n    TREE groups g1 = Group1, g2 = Group2, g3 = Group3\n    PROPERTIES READONLY name(g1), name(g2), name(g3)\n    FILTERS in(g1, g2), in(g2, g3)\n;\n")))}u.isMDXComponent=!0}}]);