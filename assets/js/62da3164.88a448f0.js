"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[43468],{12062:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=r(74848),t=r(28453);const i={title:"Filter and sorting blocks"},o=void 0,a={id:"Filters_and_sortings_block",title:"Filter and sorting blocks",description:"The filter and order blocks of the FORM statement \u2013 adding filters and orderings to the form structure, as well as filter groups and user filters to the interactive form view.",source:"@site/versioned_docs/version-v5/Filters_and_sortings_block.md",sourceDirName:".",slug:"/Filters_and_sortings_block",permalink:"/Filters_and_sortings_block",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/Filters_and_sortings_block.md",tags:[],version:"v5",lastUpdatedAt:1714394485,formattedLastUpdatedAt:"Apr 29, 2024",frontMatter:{title:"Filter and sorting blocks"},sidebar:"learn",previous:{title:"Properties and actions block",permalink:"/Properties_and_actions_block"},next:{title:"Event block",permalink:"/Event_block"}},l={},d=[{value:"Fixed filters block",id:"fixedfilters",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3},{value:"User filters block",id:"userfilters",level:2},{value:"Syntax",id:"syntax-1",level:3},{value:"Description",id:"description-1",level:3},{value:"Parameters",id:"parameters-1",level:3},{value:"Example",id:"example",level:3},{value:"Filter group block",id:"filtergroup",level:2},{value:"Syntax",id:"syntax-2",level:3},{value:"Description",id:"description-2",level:3},{value:"Parameters",id:"parameters-2",level:3},{value:"Examples",id:"examples-1",level:3},{value:"Order block",id:"sort",level:2},{value:"Syntax",id:"syntax-3",level:3},{value:"Description",id:"description-3",level:3},{value:"Parameters",id:"parameters-3",level:3},{value:"Examples",id:"examples-2",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The filter and order blocks of the ",(0,s.jsxs)(n.a,{href:"/FORM_statement",children:[(0,s.jsx)(n.code,{children:"FORM"})," statement"]})," \u2013 adding ",(0,s.jsx)(n.a,{href:"/Form_structure#filters",children:"filters"})," and ",(0,s.jsx)(n.a,{href:"/Form_structure#sort",children:"orderings"})," to the form structure, as well as ",(0,s.jsx)(n.a,{href:"/Interactive_view#filtergroup",children:"filter groups"})," and ",(0,s.jsx)(n.a,{href:"/Interactive_view#userfilters",children:"user filters"})," to the interactive form view."]}),"\n",(0,s.jsx)(n.h2,{id:"fixedfilters",children:"Fixed filters block"}),"\n",(0,s.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"FILTERS expression1, ..., expressionN\n"})}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"The fixed filters block adds filters that will be automatically applied when any form data is read. One block can list an arbitrary number of filters separated by a comma."}),"\n",(0,s.jsxs)(n.p,{children:["Each filter is defined with an ",(0,s.jsx)(n.a,{href:"/Expression",children:"expression"})," that defines the filtering condition. In all expressions and context-dependent action operators you can use the names of the objects already declared on the form as parameters."]}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"expression1, ..., expressionN"})}),"\n",(0,s.jsx)(n.p,{children:"List of filter expressions."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lsf",children:"CLASS Stock;\nname = DATA ISTRING[100] (Stock);\nregion = DATA Region (Stock);\n\nCLASS Group;\nname = DATA ISTRING[100] (Group);\n\ngroup = DATA Group(Sku);\nnameGroup (Sku s) = name(group(s));\n\nactive = DATA BOOLEAN (Sku);\n\nonStock = DATA NUMERIC[10,2] (Stock, Sku);\n\nFORM onStock 'Balances' // creating a form in which the balances of products can be viewed\n    OBJECTS r = Region PANEL // adding a region object\n    // adding the property name of the region, when clicking on which the user can select it\n    PROPERTIES name(r) SELECTOR \n\n    OBJECTS st = Stock // adding the warehouse object\n    PROPERTIES name(st) READONLY // adding the warehouse name\n    // adding a filter so that only warehouses of the selected region are shown\n    FILTERS region(st) == r \n\n    OBJECTS s = Sku // adding products\n    // adding the name of the group of products, assigning it groupName as the name of the property on the form, \n    // as well as the name and balance of the product\n    PROPERTIES READONLY groupName = nameGroup(s), name(s), onStock(st, s) \n    FILTERS active(s) // turning it on to show only active products\n;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"userfilters",children:"User filters block"}),"\n",(0,s.jsx)(n.h3,{id:"syntax-1",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"USERFILTERS formProperty1, ..., formPropertyN\n"})}),"\n",(0,s.jsx)(n.h3,{id:"description-1",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The user filters block adds custom filters to the form. These are similar to those that the user can add themselves by pressing ",(0,s.jsx)(n.code,{children:"F3"}),", however they cannot be removed."]}),"\n",(0,s.jsxs)(n.p,{children:["Each filter is specified by a ",(0,s.jsx)(n.a,{href:"/Properties_and_actions_block#name",children:"property on a form"}),", which must already have been added to the form previously."]}),"\n",(0,s.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"formProperty1, ..., formPropertyN"})}),"\n",(0,s.jsx)(n.p,{children:"List of names of properties on a form for which filters are created."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lsf",children:"CLASS Stock;\nname = DATA ISTRING[100] (Stock);\n\nFORM stocks 'Stocks'\n    OBJECTS st = Stock // add the 'Stock' object group\n    PROPERTIES name(st) // add the 'name' property \n    USERFILTERS name(st) // add a user filter for the 'name' property\n;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"filtergroup",children:"Filter group block"}),"\n",(0,s.jsx)(n.h3,{id:"syntax-2",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[EXTEND] FILTERGROUP groupName\n    FILTER caption1 expression1 [keystroke1] [DEFAULT]\n    ...\n    FILTER captionN expressionN [keystrokeN] [DEFAULT]\n"})}),"\n",(0,s.jsx)(n.h3,{id:"description-2",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The filter group block adds a set of filters to the form. A special UI component is then created for them, making it possible to apply one filter at a time. If the keyword ",(0,s.jsx)(n.code,{children:"EXTEND"})," is specified , the component is not created, but used for extension. In one block, you can define a single group of filters consisting of an arbitrary number of filters that will be shown to the user in the order of listing."]}),"\n",(0,s.jsxs)(n.p,{children:["Each filter is defined with an ",(0,s.jsx)(n.a,{href:"/Expression",children:"expression"})," that defines the filtering condition. In all expressions and context-dependent action operators you can use the names of the objects already declared on the form as parameters."]}),"\n",(0,s.jsx)(n.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsx)("a",{className:"lsdoc-anchor",id:"filterName"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"groupName"})}),"\n",(0,s.jsxs)(n.p,{children:["Internal name of a filter group. ",(0,s.jsx)(n.a,{href:"/IDs#id",children:"Simple ID"}),". If the ",(0,s.jsx)(n.code,{children:"EXTEND"})," keyword is specified, the platform will search the form for the created filter group with the specified name \u2014 otherwise a new filter group with the specified name will be created."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"caption1, ..., captionN"})}),"\n",(0,s.jsxs)(n.p,{children:["Captions that will be shown in the user interface for the corresponding filter being added. Each caption is defined with a ",(0,s.jsx)(n.a,{href:"/IDs#strliteral",children:"string literal"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"expression1, ..., expressionN"})}),"\n",(0,s.jsx)(n.p,{children:"Expressions describing filters."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"keystroke1, ..., keystrokeN"})}),"\n",(0,s.jsxs)(n.p,{children:["Keyboard shortcuts that, when pressed by the user, will select a corresponding filter in the group. Each keyboard shortcut is defined with a string literal and the definition method is similar to that for a parameter in the Java class method ",(0,s.jsx)(n.a,{href:"http://docs.oracle.com/javase/7/docs/api/javax/swing/KeyStroke.html#getKeyStroke(java.lang.String)",children:"Keystroke.getKeystroke(String)"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"DEFAULT"})}),"\n",(0,s.jsx)(n.p,{children:"A keyword specifying that the filter being added must be selected automatically when the form is added. Can be specified for one filter in the group only."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"examples-1",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lsf",children:"active = DATA BOOLEAN (Stock);\n\nEXTEND FORM onStock // extending the previously created form with balances\n    // creating a group of filters with one filter, which will be shown as a checkbox by which \n    // the user can enable/disable the filter\n    FILTERGROUP stockActive \n        // adding filter for active warehouses only, which will be applied by pressing F11\n        FILTER 'Active' active(st) 'F11' \n    // creating a new filter group in which the user can select one of the filters using the drop-down list\n    FILTERGROUP skuAvailability \n        // adding a filter that will display only products on stock, which will be selected by pressing F10 \n        // and will be automatically selected when the form is opened\n        FILTER 'Is on stock' onStock (st, s) 'F10' DEFAULT \n;\n\n// ...\n\nEXTEND FORM onStock\n    EXTEND FILTERGROUP skuAvailability\n        FILTER 'Negative balances' onStock (st, s) < 0 'F9' // adding filter by expression\n;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"sort",children:"Order block"}),"\n",(0,s.jsx)(n.h3,{id:"syntax-3",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"ORDERS [FIRST]\n    formPropertyName1 [DESC] \n    ...\n    formPropertyNameN [DESC]\n"})}),"\n",(0,s.jsx)(n.h3,{id:"description-3",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"An order block adds orderings to the form that will be automatically applied when any data are read on it. One block can list an arbitrary number of properties on the form separated by a comma in any sequence. These properties must be added to the form in advance."}),"\n",(0,s.jsx)(n.h3,{id:"parameters-3",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"FIRST"})}),"\n",(0,s.jsx)(n.p,{children:"Keyword. Specifies that these sorts will be applied first, before all others."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"formPropertyName1, ..., formPropertyNameN"})}),"\n",(0,s.jsx)(n.p,{children:"Names of properties or form actions specifying the order."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"DESC"})}),"\n",(0,s.jsx)(n.p,{children:"Keyword. Specifies reverse order. By default, ascending order is used."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"examples-2",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lsf",children:"EXTEND FORM onStock // extending the previously created form with balances\n    ORDERS name(s) // enabling ordering by warehouse name in the warehouse list\n    ORDERS groupName, onStock(st, s) DESC // enabling ordering in ascending order of the group name, and inside\n                                          // in descending order of the balance in the warehouse\n                                          // it should be noted that the property is the property name on the \n                                          // form groupName, not just the property name nameGroupSku\n;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var s=r(96540);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);