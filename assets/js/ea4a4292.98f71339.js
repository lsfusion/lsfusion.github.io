"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[8015],{69609:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>h});var o=t(74848),n=t(28453);const i={title:"Structured view"},s=void 0,a={id:"Structured_view",title:"Structured view",description:"All structured views (formats) can be divided into two types:",source:"@site/versioned_docs/version-v4/Structured_view.md",sourceDirName:".",slug:"/Structured_view",permalink:"/v4/Structured_view",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Structured_view.md",tags:[],version:"v4",lastUpdatedAt:1708525070,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"Structured view"},sidebar:"learn",previous:{title:"Report design",permalink:"/v4/Report_design"},next:{title:"Open form",permalink:"/v4/Open_form"}},p={},h=[{value:"Export/import name",id:"extid",level:3},{value:"Hierarchical view",id:"hierarchy",level:3},{value:"Predefined value",id:"value",level:3},{value:"XML namespaces",id:"xml-namespaces",level:3},{value:"Flat view",id:"flat-view",level:3},{value:"Language",id:"language",level:3},{value:"Open form",id:"open-form",level:3},{value:"Examples",id:"examples",level:3}];function c(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:["All structured views (",(0,o.jsx)(r.em,{children:"formats"}),") can be divided into two types:"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.em,{children:"Hierarchical"})," (XML, JSON) - single text file; the information for ",(0,o.jsx)(r.a,{href:"/v4/Form_structure#objects",children:"object groups"})," is put as a list inside the information for ",(0,o.jsx)(r.a,{href:"/v4/Static_view#hierarchy",children:"parent"})," groups."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.em,{children:"Flat"})," (DBF, CSV, XLS, TABLE) - one table file for each object group, and each object group with more than one level of ",(0,o.jsx)(r.a,{href:"/v4/Static_view#hierarchy",children:"nesting"})," should have a column in its table named ",(0,o.jsx)(r.code,{children:"parent"}),' which should contain the "upper" row number in the parent group table.']}),"\n"]}),"\n",(0,o.jsx)(r.admonition,{type:"info",children:(0,o.jsx)(r.p,{children:"Working with flat formats with a hierarchy depth greater than one is not very convenient (because in this case, the developer has to maintain an additional column), therefore, usually flat formats are used only for working with simple forms (with a hierarchy depth less than one). In other cases, hierarchical formats are usually used."})}),"\n",(0,o.jsx)(r.p,{children:"Formats are also divided into:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"human-readable (text) and binary. All hierarchical formats are human-readable, flat can be either binary (DBF, TABLE, XLS), or human-readable (CSV). You can and should specify the encoding for human-readable formats (UTF-8 is used by default)."}),"\n",(0,o.jsxs)(r.li,{children:["standardized and internal. At the moment, only one internal format is supported: TABLE (a table of values). All the other formats are standardized. Internal format files are processed in a special way in some ",(0,o.jsx)(r.a,{href:"/v4/Integration",children:"integration"})," operations (e.g., in ",(0,o.jsx)(r.a,{href:"/v4/Access_to_an_external_system_EXTERNAL#table",children:"SQL calls"}),"). In addition, internal formats can be used to communicate lsFusion systems with each other."]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["In the current implementation the ",(0,o.jsx)(r.a,{href:"/v4/Form_structure#groupcolumns",children:"group-in-columns"})," platforms are ignored in a structured view."]}),"\n",(0,o.jsx)("a",{className:"lsdoc-anchor",id:"objects"}),"\n",(0,o.jsxs)(r.p,{children:["When building an object group ",(0,o.jsx)(r.a,{href:"/v4/Static_view#hierarchy",children:"hierarchy"})," in a structured view, the object groups that have all their objects ",(0,o.jsx)(r.a,{href:"/v4/Open_form#params",children:"passed"})," on the form opening are ignored (as if these object groups did not exist)."]}),"\n",(0,o.jsx)("a",{className:"lsdoc-anchor",id:"drawgroup"}),"\n",(0,o.jsxs)(r.p,{children:["If the property ",(0,o.jsx)(r.a,{href:"/v4/Form_structure#drawgroup",children:"display group"})," is specified explicitly in a structured view, then this group should not be earlier than the default one (if the specified group appears earlier, then the default display group will be used anyway)."]}),"\n",(0,o.jsx)(r.h3,{id:"extid",children:"Export/import name"}),"\n",(0,o.jsxs)(r.p,{children:["The name of the property on the form that will be used during export/import can be specified explicitly using the corresponding option (",(0,o.jsx)(r.code,{children:"EXTID"}),"). Unless this is done, the name of the property on the form will be used as the name of the export/import. If it is also not specified, then the name of the property itself will be the name of the export/import (without adding parameter objects to its end, as it is done in the other mechanisms - ",(0,o.jsx)(r.a,{href:"/v4/Print_view",children:"reports"}),", customizing interactive view ",(0,o.jsx)(r.a,{href:"/v4/Form_design",children:"design"}),", etc.). The export/import names of object groups and property groups are determined similarly."]}),"\n",(0,o.jsx)(r.admonition,{type:"info",children:(0,o.jsxs)(r.p,{children:["Because of the grammar nature, the option for specifying import/export name of the form (specifically, its ",(0,o.jsx)(r.a,{href:"/v4/Static_view#empty",children:"empty group"})," of objects) is called ",(0,o.jsx)(r.code,{children:"FORMEXTID"})," (not ",(0,o.jsx)(r.code,{children:"EXTID"}),")."]})}),"\n",(0,o.jsx)(r.admonition,{type:"info",children:(0,o.jsxs)(r.p,{children:["Unlike property names on the form, property export/import names (",(0,o.jsx)(r.code,{children:"EXTID"}),") of different properties can be equal if these properties are located in different nodes of the hierarchy (i.e., different groups of objects/properties). The same applies to export/import names of object groups and property groups."]})}),"\n",(0,o.jsx)(r.h3,{id:"hierarchy",children:"Hierarchical view"}),"\n",(0,o.jsx)(r.p,{children:"Before directly proceeding with the form export/import, the platform builds a hierarchy of properties, groups of objects/properties as follows:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["The hierarchy of objects/properties groups is built in accordance with the ",(0,o.jsx)(r.a,{href:"/v4/Static_view",children:"hierarchy"})," of object groups and property ",(0,o.jsx)(r.a,{href:"/v4/Form_structure#drawgroup",children:"display groups"}),": a property display group is considered the parent of this property, the hierarchy of object groups is preserved."]}),"\n",(0,o.jsxs)(r.li,{children:["Then for each ",(0,o.jsx)(r.code,{children:"X"})," object group:","\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"/v4/Groups_of_properties_and_actions",children:"property groups"})," that all ",(0,o.jsx)(r.code,{children:"X"})," descendants belong to are determined, then these property groups and their ancestors are automatically included in the hierarchy. Also:","\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["property groups become the parents of ",(0,o.jsx)(r.code,{children:"X"})," descendants that belong to those groups"]}),"\n",(0,o.jsx)(r.li,{children:"the hierarchy of property groups is preserved"}),"\n",(0,o.jsxs)(r.li,{children:["the ",(0,o.jsx)(r.code,{children:"X"})," object group becomes the parent of the uppermost (i.e., that without parents) of the used property groups."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(r.admonition,{type:"info",children:(0,o.jsx)(r.p,{children:"In a hierarchical view, object groups can be included in property groups as well as properties."})}),"\n",(0,o.jsx)(r.admonition,{type:"info",children:(0,o.jsxs)(r.p,{children:["The described algorithm is very similar to the algorithm for building property containers in the ",(0,o.jsx)(r.a,{href:"/v4/Form_design#defaultDesign",children:"default design"})," (with the only difference being that it does not use the hierarchy of object groups). Like in the container building mechanism, the same property group can be included in the hierarchy several times for different groups of objects."]})}),"\n",(0,o.jsx)(r.p,{children:"After the hierarchy is built, the form is exported/imported recursively according to the following rules:"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.em,{children:"JSON"}),":"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-json",children:'JSON result ::= \r\n    { JSON with properties, groups of objects/properties without parents }\r\n\r\nJSON with properties, groups of objects/properties ::= \r\n    JSON of the property 1 | JSON of the property group 1 | JSON of the object group 1\r\n    JSON of the property 2 | JSON of the property group 2 | JSON of the object group 2\r\n    ...\r\n    JSON of the property M | JSON of the property group M | JSON of the object group M\r\n\r\nJSON of the property ::=\r\n    "property name on the form" : property value\r\n\r\nJSON of the property group ::=\r\n    "property group name" : { JSON with child properties, groups of properties/objects }\r\n\r\nJSON of the object group ::=\r\n    "object group name" : [\r\n        { JSON with child properties, groups of properties/objects 1 }, \r\n        { JSON with child properties, groups of properties/objects 2 },\r\n        ... \r\n        { JSON with child properties, groups of properties/objects N },\r\n    ]\n'})}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.em,{children:"XML"}),":"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-xml",children:"XML result ::= \r\n    <form name> XML with properties, groups of properties/objects without parents </form name>\r\n\r\nXML with properties, groups of properties/objects ::= \r\n    XML of the property 1 | XML of the property group 1 | XML of the object group 1\r\n    XML of the property 2 | XML of the property group 2 | XML of the object group 2\r\n    ...\r\n    XML of the property M | XML of the property group M | XML of the object group M\r\n\r\nXML of the property ::= \r\n    <property name on the form> property value </property name on the form>\r\n\r\nXML of the property group ::=\r\n    <property group name> XML with child properties, groups of properties/objects </property group name>\r\n\r\nXML of the object group ::=\r\n    <object group name> XML with child properties, groups of properties/objects 1 </property group name>\r\n    <object group name> XML with child properties, groups of properties/objects 2 </property group name>\r\n    ...\r\n    <object group name> XML with child properties, groups of properties/objects N </property group name>\n"})}),"\n",(0,o.jsxs)(r.p,{children:["When exporting/importing to XML, the special ",(0,o.jsx)(r.code,{children:"ATTR"})," option can be specified for a property on the form. Thus, when exporting/importing that property, its value will be stored not in a separate tag, but in the attribute of the parent tag:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:'<parent tag ... property name on the form = "property value" ...>\n'})}),"\n",(0,o.jsx)(r.p,{children:"When importing from XML, the name of the uppermost tag (in the rule) is ignored (according to the XML specification, there should be only one such tag)."}),"\n",(0,o.jsxs)(r.p,{children:["Properties with ",(0,o.jsx)(r.code,{children:"NULL"})," values, as well as property groups that do not have any tags inside as a result of export, are not exported (ignored)."]}),"\n",(0,o.jsx)(r.h3,{id:"value",children:"Predefined value"}),"\n",(0,o.jsxs)(r.p,{children:["When importing JSON, if for an object group an array ( ",(0,o.jsx)(r.code,{children:"[ ]"})," ) of values contains not an object ( ",(0,o.jsx)(r.code,{children:"{ }"})," ), but a specific value (for example, a number or a string), then this value is automatically converted to an object ",(0,o.jsx)(r.code,{children:'{ "value" : value }'}),". A similar conversion is performed when exporting an object group to JSON: if the object contains exactly one ",(0,o.jsx)(r.code,{children:"value"})," key (i.e., it has the form ",(0,o.jsx)(r.code,{children:'{ "value" : value}'}),"), then instead of it, the value for this ",(0,o.jsx)(r.code,{children:"value"}),' key is substituted to the resulting JSON. In addition to "ordinary" object groups, the same conversions are also performed for the ',(0,o.jsx)(r.a,{href:"/v4/Static_view#empty",children:"empty"})," root object group, i.e., for example JSON ",(0,o.jsx)(r.code,{children:'["ab","vv"]'})," is processed as JSON ",(0,o.jsx)(r.code,{children:'{ "value" : ["ab","vv"] }'}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["When importing/exporting XML, if the property is named ",(0,o.jsx)(r.code,{children:"value"}),", then the value of this property will be stored not in a separate tag, but inside (in the text) the parent tag (i.e., as if the parent tag itself was a property view). This behavior is usually used if the parent tag has other tags/attributes in it (XML specification allows this)."]}),"\n",(0,o.jsxs)(r.p,{children:["When importing XML, if the object group is named ",(0,o.jsx)(r.code,{children:"value"}),", then all tags are read (with any name)."]}),"\n",(0,o.jsx)(r.h3,{id:"xml-namespaces",children:"XML namespaces"}),"\n",(0,o.jsx)(r.p,{children:"Unlike other formats, XML supports a concept of namespaces for tags and attributes."}),"\n",(0,o.jsxs)(r.p,{children:["For example, in ",(0,o.jsx)(r.strong,{children:"lsFusion"})," to export a property to a tag with a specified namespace, you must specify the name of this property using a special syntax:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"[namespace[=uri]:]name\n"})}),"\n",(0,o.jsxs)(r.p,{children:["For example, ",(0,o.jsx)(r.code,{children:"h:table"})," or ",(0,o.jsx)(r.code,{children:"h=http://www.w3.org/TR/html4:table"}),". The namespace name may be empty if necessary. If no URI is specified for the namespace, it is inherited from the namespace with the same name of the parent tags. If there are no namespaces with that name in the parent tags, URI is automatically considered equal to ",(0,o.jsx)(r.code,{children:"http://www.w3.org/<name of the namespace>"}),"."]}),"\n",(0,o.jsx)(r.admonition,{type:"info",children:(0,o.jsxs)(r.p,{children:["It is not possible to specify the property name described above (for example, ",(0,o.jsx)(r.code,{children:"h:table"}),") in the lsFusion syntax (since the name cannot contain a colon), therefore, to specify such an export name, you should use the ",(0,o.jsx)(r.a,{href:"#extid",children:"described above"})," ",(0,o.jsx)(r.code,{children:"EXTID"})," option."]})}),"\n",(0,o.jsxs)(r.p,{children:["If a namespace must be declared in a tag , but the tag itself should not belong to it, you must add a property marked ",(0,o.jsx)(r.code,{children:"ATTR"})," and named ",(0,o.jsx)(r.code,{children:"xmlns:namespace"})," to the export. It is assumed that the value of this property will contain the URI of the declared namespace."]}),"\n",(0,o.jsx)(r.p,{children:"Working with namespaces is similar when importing properties, as well as when working with object groups/property groups."}),"\n",(0,o.jsx)(r.h3,{id:"flat-view",children:"Flat view"}),"\n",(0,o.jsx)(r.p,{children:"Each file for an object group in flat view is a table in which:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"Rows are object collections of this object group."}),"\n",(0,o.jsxs)(r.li,{children:["Columns are properties, which ",(0,o.jsx)(r.a,{href:"/v4/Form_structure#drawgroup",children:"display groups"})," are equal to this object group."]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["In CSV format (when there is no first header line), the columns are named similarly to XLS (i.e., ",(0,o.jsx)(r.code,{children:"A"})," is the first, ",(0,o.jsx)(r.code,{children:"B"})," is the second, etc.)"]}),"\n",(0,o.jsxs)(r.p,{children:["If a column with the form property name is not found when importing the form, then the column next to the column of the previous property in the list of form properties is selected for import (in this case, the ",(0,o.jsx)(r.code,{children:"parent"})," column is considered the first)."]}),"\n",(0,o.jsx)(r.h3,{id:"language",children:"Language"}),"\n",(0,o.jsxs)(r.p,{children:["All of the above options, as well as defining the form structure, can be done using the ",(0,o.jsxs)(r.a,{href:"/v4/FORM_statement",children:[(0,o.jsx)(r.code,{children:"FORM"})," statement"]}),"."]}),"\n",(0,o.jsx)(r.h3,{id:"open-form",children:"Open form"}),"\n",(0,o.jsxs)(r.p,{children:["To display the form in structured view, the corresponding ",(0,o.jsx)(r.a,{href:"/v4/Open_form",children:"open form"})," in a ",(0,o.jsx)(r.a,{href:"/v4/In_a_structured_view_EXPORT_IMPORT",children:"structured view"})," operator is used."]}),"\n",(0,o.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-lsf",children:"FORM exportSku\r\n    OBJECTS st = Store\r\n\r\n    OBJECTS s = Sku\r\n    PROPERTIES(s) id, name, weight\r\n    FILTERS in(st, s)\r\n;\r\n\r\nexportSku (Store store)  {\r\n    // uploading to DBF all Sku for which in (Store, Sku) is specified for the desired warehouse\r\n    EXPORT exportSku OBJECTS st = store DBF CHARSET 'CP866';\r\n    EXPORT exportSku XML;\r\n    EXPORT exportSku OBJECTS st = store CSV ',';\r\n}\n"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-lsf",children:"\r\ndate = DATA DATE (INTEGER);\r\nsku = DATA BPSTRING[50] (INTEGER);\r\nprice = DATA NUMERIC[14,2] (INTEGER);\r\norder = DATA INTEGER (INTEGER);\r\nFORM import\r\n    OBJECTS o = INTEGER // orders\r\n    OBJECTS od = INTEGER // order lines\r\n    PROPERTIES (o) dateOrder = date // importing the date from the dateOrder field\r\n    PROPERTIES (od) sku = sku, price = price // importing product quantity from sku and price fields\r\n    FILTERS order(od) = o // writing the top order to order\r\n\r\n;\r\n\r\nimportForm()  {\r\n    INPUT f = FILE DO {\r\n        IMPORT import JSON FROM f;\r\n        SHOW import; // showing what was imported\r\n\r\n        // creating objects in the database\r\n        FOR DATE date = date(INTEGER io) NEW o = Order DO {\r\n            date(o) <- date;\r\n            FOR order(INTEGER iod) = io NEW od = OrderDetail DO {\r\n                price(od) <- price(iod);\r\n                sku(od) <- GROUP MAX Sku sku IF name(sku) = sku(iod); // finding sku with this name\r\n            }\r\n        }\r\n    }\r\n}\n"})})]})}function d(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>a});var o=t(96540);const n={},i=o.createContext(n);function s(e){const r=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(i.Provider,{value:r},e.children)}}}]);