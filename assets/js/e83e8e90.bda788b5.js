"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[88086],{35252:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=i(74848),r=i(28453);const s={title:"Form structure"},o=void 0,a={id:"Form_structure",title:"Form structure",description:"The form structure is a complex of objects, properties, actions and relations between them.",source:"@site/docs/Form_structure.md",sourceDirName:".",slug:"/Form_structure",permalink:"/next/Form_structure",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Form_structure.md",tags:[],version:"current",lastUpdatedAt:1640850738e3,frontMatter:{title:"Form structure"},sidebar:"learn",previous:{title:"Forms",permalink:"/next/Forms"},next:{title:"Groups of properties and actions",permalink:"/next/Groups_of_properties_and_actions"}},l={},c=[{value:"Objects",id:"objects",level:3},{value:"Current object",id:"currentObject",level:4},{value:"Properties and actions",id:"properties",level:3},{value:"Display group",id:"drawgroup",level:4},{value:"Groups-in-columns",id:"groupcolumns",level:4},{value:"Property groups",id:"propertygroup",level:4},{value:"Default settings",id:"default-settings",level:4},{value:"Filters",id:"filters",level:3},{value:"Orders",id:"sort",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"/next/Forms",children:"form"})," structure is a complex of ",(0,n.jsx)(t.em,{children:"objects"}),", ",(0,n.jsx)(t.a,{href:"/next/Properties",children:"properties"}),", ",(0,n.jsx)(t.a,{href:"/next/Actions",children:"actions"})," and relations between them."]}),"\n",(0,n.jsx)(t.h3,{id:"objects",children:"Objects"}),"\n",(0,n.jsxs)(t.p,{children:["When creating a form, first you must define which objects it will display. For each form object you need to specify its ",(0,n.jsx)(t.a,{href:"/next/Classes",children:"class"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["It is possible to combine objects into ",(0,n.jsx)(t.em,{children:"object groups"}),'. In this case, the table will show a "Cartesian product" of these objects (i.e., for two objects - all pairs, three objects - triples, etc.).']}),"\n",(0,n.jsxs)(t.p,{children:["In accordance with the order of adding object groups to the form, an ordered ",(0,n.jsx)(t.em,{children:"list"})," of object groups is formed. Accordingly, the group with the maximum number for a certain set of object groups shall be called the ",(0,n.jsx)(t.em,{children:"last"})," group for this set (i.e., the latest). The ",(0,n.jsx)(t.em,{children:"last"})," group for a set of objects is determined similarly: first, a set of object groups into which these objects are included is built, then the last group is determined for the obtained set of object groups."]}),"\n",(0,n.jsx)(t.h4,{id:"currentObject",children:"Current object"}),"\n",(0,n.jsxs)(t.p,{children:["Each object on the form has a ",(0,n.jsx)(t.em,{children:"current value"})," at any time. It changes either as a result of ",(0,n.jsx)(t.a,{href:"/next/Interactive_view#objects",children:"corresponding user actions"})," in ",(0,n.jsx)(t.a,{href:"/next/Interactive_view",children:"interactive"}),' view or "virtually" while reading data in ',(0,n.jsx)(t.a,{href:"/next/Static_view",children:"static"})," view."]}),"\n",(0,n.jsx)(t.h3,{id:"properties",children:"Properties and actions"}),"\n",(0,n.jsx)(t.p,{children:"After defining objects, you can add properties and actions to the form, passing these objects to them as arguments."}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Adding actions is relevant only for ",(0,n.jsx)(t.a,{href:"/next/Interactive_view",children:"interactive"})," view. In ",(0,n.jsx)(t.a,{href:"/next/Static_view",children:"static"})," view added actions are ignored."]})}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"The behavior of properties and actions in the context of their display on the form is absolutely identical, therefore, in the rest of this section, we will use only the term property (the behavior for actions is completely similar)."})}),"\n",(0,n.jsx)(t.h4,{id:"drawgroup",children:"Display group"}),"\n",(0,n.jsxs)(t.p,{children:["Each property is displayed exactly in one of the object groups on the form (this group shall be called a ",(0,n.jsx)(t.em,{children:"display group"})," of this property). By default, the display group is the last group for the set of objects which this property receives as an input. If necessary, the developer can specify the display group explicitly (with certain ",(0,n.jsx)(t.a,{href:"/next/Structured_view#drawgroup",children:"constraints"})," when used in a structured view)"]}),"\n",(0,n.jsx)(t.h4,{id:"groupcolumns",children:"Groups-in-columns"}),"\n",(0,n.jsxs)(t.p,{children:["By default, a property is displayed in its display group exactly once. In this case, the values of objects which are not in the display group of this property (these objects shall be called ",(0,n.jsx)(t.em,{children:"upper"}),') are used as their current values. However, it is also possible to display one property multiple times so that all object collections are used as the values of certain upper objects (not their current values). With this display of the property, a kind of "matrix" is formed - upper objects x objects of the display group. Thus, to create such a matrix, when adding a property to the form you must specify which ',(0,n.jsx)(t.em,{children:"upper"})," objects (specifically, object groups) must be used to create columns (these object groups shall be called ",(0,n.jsx)(t.em,{children:"groups-in-columns"}),")."]}),"\n",(0,n.jsxs)(t.p,{children:["When determining a ",(0,n.jsx)(t.a,{href:"#drawgroup",children:"display group"}),", properties of the group-to-columns are ignored."]}),"\n",(0,n.jsx)(t.h4,{id:"propertygroup",children:"Property groups"}),"\n",(0,n.jsxs)(t.p,{children:["Properties on the form can be combined into ",(0,n.jsx)(t.a,{href:"/next/Groups_of_properties_and_actions",children:"groups"})," which, in turn, are used in the interactive (",(0,n.jsx)(t.a,{href:"/next/Form_design#defaultDesign",children:"default design"}),") and ",(0,n.jsx)(t.a,{href:"/next/Structured_view#hierarchy",children:"hierarchical"})," form views. By default, a property is included in a group globally (i.e., this inclusion is defined for a property for all forms at once), however, this inclusion can be redefined for particular forms."]}),"\n",(0,n.jsx)(t.h4,{id:"default-settings",children:"Default settings"}),"\n",(0,n.jsxs)(t.p,{children:["Properties on the form have a large number of display settings in various ",(0,n.jsx)(t.a,{href:"/next/Form_views",children:"views"}),', most of which can be set not only directly for the property on the form, but also for the property itself (when creating it). These settings will be the default settings, i.e., if the setting is not explicitly set for a specific property on the form, then the setting of the property itself is used. In addition, these default settings are "inherited" when using ',(0,n.jsx)(t.a,{href:"/next/Composition_JOIN",children:"composition"}),", ",(0,n.jsx)(t.a,{href:"/next/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE",children:"selection"})," and ",(0,n.jsx)(t.a,{href:"/next/Previous_value_PREV",children:"previous value"})," operators (i.e., if property ",(0,n.jsx)(t.code,{children:"f(a)"})," has the default width of ",(0,n.jsx)(t.code,{children:"10"}),", then the property ",(0,n.jsx)(t.code,{children:"g(a) = f(a) IF h(a)"})," will also have a width of ",(0,n.jsx)(t.code,{children:"10"})," by default)."]}),"\n",(0,n.jsx)(t.h3,{id:"filters",children:"Filters"}),"\n",(0,n.jsxs)(t.p,{children:["For each form, the developer can create ",(0,n.jsx)(t.em,{children:"filters"})," which will limit the list of object collections available for viewing/selection on the form."]}),"\n",(0,n.jsxs)(t.p,{children:["To define a filter, you must specify a property that will be used as a filter condition. The filter will be applied to the table of the object group that is the last for the set of objects which this property takes as input (i.e., similar to the definition of the property ",(0,n.jsx)(t.em,{children:"display group"}),"). In this case, only those object collections (rows) for which property values are not ",(0,n.jsx)(t.code,{children:"NULL"})," will be shown."]}),"\n",(0,n.jsx)(t.h3,{id:"sort",children:"Orders"}),"\n",(0,n.jsx)(t.p,{children:"By default, in all object group views, object collections are displayed in a certain non-deterministic order, which is determined by the specific implementation of the platform (most often, internal identifiers are used to determine the order). If necessary, the developer can define this order explicitly by specifying a list of properties on the form that will be used as orders. At the same time, for each property in this list, you can specify whether the order should be ascending or descending (by default, the ascending option is used)."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"NULL"})," value is always considered to be the smallest value."]}),"\n",(0,n.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,n.jsxs)(t.p,{children:["To create a new form and define its structure, the ",(0,n.jsxs)(t.a,{href:"/next/FORM_statement",children:[(0,n.jsx)(t.code,{children:"FORM"})," statement"]})," is used."]}),"\n",(0,n.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lsf",children:"CLASS Document;\n\n// declaring the Documents form\nFORM documents 'Documents'\n    // Adding one object of the Document class. The object will be available by this name\n    // in the DESIGN, SHOW, EXPORT, DIALOG, etc. operators.\n    OBJECTS d = Document \n\n\n    // ... adding properties and filters to the form\n\n    // marking that this form should be used when it is necessary to select a document, \n    // while the d object should be used as a return value\n    LIST Document OBJECT d \n;\n\nCLASS Item;\n\n// declaring the Product form\nFORM item 'Product'\n    // adding an object of the Item class and marking that it should be displayed\n    // in the panel (i.e., only one value is visible)\n    OBJECTS i = Item PANEL \n\n    // ... adding properties and filters to the form\n\n    // marking that this form should be used when it is necessary to add or edit a product\n    EDIT Item OBJECT i \n;\n\n// declaring a form with a list of Products\nFORM items 'Products'\n    OBJECTS i = Item\n\n    // ... adding properties and filters to the form\n\n    // adding buttons that will create and edit the product using the item form\n    PROPERTIES(i) NEWSESSION NEW, EDIT \n;\n\nCLASS Invoice;\nCLASS InvoiceDetail;\n\n// declaring the invoice print form\nFORM printInvoice\n    OBJECTS i = Invoice // adding an object of the invoice class for which printing will be executed\n\n    // ... adding properties and filters to the form\n;\n\n// splitting the form definition into two statements (the second statement can be transferred to another module)\nEXTEND FORM printInvoice\n    // adding invoice lines, each of which will be used in the report as a detail\n    OBJECTS d = InvoiceDetail \n\n    // ... adding properties and filters to the form\n;\n// declaring an action that will open the invoice print form\nprint (Invoice invoice)  { PRINT printInvoice OBJECTS i = invoice; } \n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>a});var n=i(96540);const r={},s=n.createContext(r);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);