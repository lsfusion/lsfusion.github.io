"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[35633],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(r),m=n,d=c["".concat(s,".").concat(m)]||c[m]||h[m]||a;return r?o.createElement(d,i(i({ref:t},u),{},{components:r})):o.createElement(d,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},56365:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return l}});var o=r(83117),n=(r(67294),r(3905));const a={title:"Structured view"},i=void 0,p={unversionedId:"Structured_view",id:"version-v4/Structured_view",title:"Structured view",description:"All structured views (formats) can be divided into two types:",source:"@site/versioned_docs/version-v4/Structured_view.md",sourceDirName:".",slug:"/Structured_view",permalink:"/v4/Structured_view",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Structured_view.md",tags:[],version:"v4",lastUpdatedAt:1624461640,formattedLastUpdatedAt:"Jun 23, 2021",frontMatter:{title:"Structured view"},sidebar:"learn",previous:{title:"Report design",permalink:"/v4/Report_design"},next:{title:"Open form",permalink:"/v4/Open_form"}},s={},l=[{value:"Export/import name",id:"extid",level:3},{value:"Hierarchical view",id:"hierarchy",level:3},{value:"Predefined value",id:"value",level:3},{value:"XML namespaces",id:"xml-namespaces",level:3},{value:"Flat view",id:"flat-view",level:3},{value:"Language",id:"language",level:3},{value:"Open form",id:"open-form",level:3},{value:"Examples",id:"examples",level:3}],u={toc:l};function h(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"All structured views (",(0,n.kt)("em",{parentName:"p"},"formats"),") can be divided into two types:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Hierarchical")," (XML, JSON) - single text file; the information for ",(0,n.kt)("a",{parentName:"li",href:"/v4/Form_structure#objects"},"object groups")," is put as a list inside the information for ",(0,n.kt)("a",{parentName:"li",href:"/v4/Static_view#hierarchy"},"parent")," groups."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Flat")," (DBF, CSV, XLS, TABLE) - one table file for each object group, and each object group with more than one level of ",(0,n.kt)("a",{parentName:"li",href:"/v4/Static_view#hierarchy"},"nesting")," should have a column in its table named ",(0,n.kt)("inlineCode",{parentName:"li"},"parent"),' which should contain the "upper" row number in the parent group table.')),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Working with flat formats with a hierarchy depth greater than one is not very convenient (because in this case, the developer has to maintain an additional column), therefore, usually flat formats are used only for working with simple forms (with a hierarchy depth less than one). In other cases, hierarchical formats are usually used.")),(0,n.kt)("p",null,"Formats are also divided into:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"human-readable (text) and binary. All hierarchical formats are human-readable, flat can be either binary (DBF, TABLE, XLS), or human-readable (CSV). You can and should specify the encoding for human-readable formats (UTF-8 is used by default)."),(0,n.kt)("li",{parentName:"ul"},"standardized and internal. At the moment, only one internal format is supported: TABLE (a table of values). All the other formats are standardized. Internal format files are processed in a special way in some ",(0,n.kt)("a",{parentName:"li",href:"/v4/Integration"},"integration")," operations (e.g., in ",(0,n.kt)("a",{parentName:"li",href:"/v4/Access_to_an_external_system_EXTERNAL#table"},"SQL calls"),"). In addition, internal formats can be used to communicate lsFusion systems with each other.")),(0,n.kt)("p",null,"In the current implementation the ",(0,n.kt)("a",{parentName:"p",href:"/v4/Form_structure#groupcolumns"},"group-in-columns")," platforms are ignored in a structured view."),(0,n.kt)("a",{className:"lsdoc-anchor",id:"objects"}),(0,n.kt)("p",null,"When building an object group ",(0,n.kt)("a",{parentName:"p",href:"/v4/Static_view#hierarchy"},"hierarchy")," in a structured view, the object groups that have all their objects ",(0,n.kt)("a",{parentName:"p",href:"/v4/Open_form#params"},"passed")," on the form opening are ignored (as if these object groups did not exist)."),(0,n.kt)("a",{className:"lsdoc-anchor",id:"drawgroup"}),(0,n.kt)("p",null,"If the property ",(0,n.kt)("a",{parentName:"p",href:"/v4/Form_structure#drawgroup"},"display group")," is specified explicitly in a structured view, then this group should not be earlier than the default one (if the specified group appears earlier, then the default display group will be used anyway)."),(0,n.kt)("h3",{id:"extid"},"Export/import name"),(0,n.kt)("p",null,"The name of the property on the form that will be used during export/import can be specified explicitly using the corresponding option (",(0,n.kt)("inlineCode",{parentName:"p"},"EXTID"),"). Unless this is done, the name of the property on the form will be used as the name of the export/import. If it is also not specified, then the name of the property itself will be the name of the export/import (without adding parameter objects to its end, as it is done in the other mechanisms - ",(0,n.kt)("a",{parentName:"p",href:"/v4/Print_view"},"reports"),", customizing interactive view ",(0,n.kt)("a",{parentName:"p",href:"/v4/Form_design"},"design"),", etc.). The export/import names of object groups and property groups are determined similarly."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Because of the grammar nature, the option for specifying import/export name of the form (specifically, its ",(0,n.kt)("a",{parentName:"p",href:"/v4/Static_view#empty"},"empty group")," of objects) is called ",(0,n.kt)("inlineCode",{parentName:"p"},"FORMEXTID")," (not ",(0,n.kt)("inlineCode",{parentName:"p"},"EXTID"),").")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Unlike property names on the form, property export/import names (",(0,n.kt)("inlineCode",{parentName:"p"},"EXTID"),") of different properties can be equal if these properties are located in different nodes of the hierarchy (i.e., different groups of objects/properties). The same applies to export/import names of object groups and property groups.")),(0,n.kt)("h3",{id:"hierarchy"},"Hierarchical view"),(0,n.kt)("p",null,"Before directly proceeding with the form export/import, the platform builds a hierarchy of properties, groups of objects/properties as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The hierarchy of objects/properties groups is built in accordance with the ",(0,n.kt)("a",{parentName:"li",href:"/v4/Static_view"},"hierarchy")," of object groups and property ",(0,n.kt)("a",{parentName:"li",href:"/v4/Form_structure#drawgroup"},"display groups"),": a property display group is considered the parent of this property, the hierarchy of object groups is preserved."),(0,n.kt)("li",{parentName:"ul"},"Then for each ",(0,n.kt)("inlineCode",{parentName:"li"},"X")," object group:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v4/Groups_of_properties_and_actions"},"property groups")," that all ",(0,n.kt)("inlineCode",{parentName:"li"},"X")," descendants belong to are determined, then these property groups and their ancestors are automatically included in the hierarchy. Also:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"property groups become the parents of ",(0,n.kt)("inlineCode",{parentName:"li"},"X")," descendants that belong to those groups"),(0,n.kt)("li",{parentName:"ul"},"the hierarchy of property groups is preserved"),(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("inlineCode",{parentName:"li"},"X")," object group becomes the parent of the uppermost (i.e., that without parents) of the used property groups.")))))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"In a hierarchical view, object groups can be included in property groups as well as properties. ")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The described algorithm is very similar to the algorithm for building property containers in the ",(0,n.kt)("a",{parentName:"p",href:"/v4/Form_design#defaultDesign"},"default design")," (with the only difference being that it does not use the hierarchy of object groups). Like in the container building mechanism, the same property group can be included in the hierarchy several times for different groups of objects.")),(0,n.kt)("p",null,"After the hierarchy is built, the form is exported/imported recursively according to the following rules: "),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"JSON"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'JSON result ::= \n    { JSON with properties, groups of objects/properties without parents }\n\nJSON with properties, groups of objects/properties ::= \n    JSON of the property 1 | JSON of the property group 1 | JSON of the object group 1\n    JSON of the property 2 | JSON of the property group 2 | JSON of the object group 2\n    ...\n    JSON of the property M | JSON of the property group M | JSON of the object group M\n\nJSON of the property ::=\n    "property name on the form" : property value\n\nJSON of the property group ::=\n    "property group name" : { JSON with child properties, groups of properties/objects }\n\nJSON of the object group ::=\n    "object group name" : [\n        { JSON with child properties, groups of properties/objects 1 }, \n        { JSON with child properties, groups of properties/objects 2 },\n        ... \n        { JSON with child properties, groups of properties/objects N },\n    ]\n')),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"XML"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"XML result ::= \n    <form name> XML with properties, groups of properties/objects without parents </form name>\n\nXML with properties, groups of properties/objects ::= \n    XML of the property 1 | XML of the property group 1 | XML of the object group 1\n    XML of the property 2 | XML of the property group 2 | XML of the object group 2\n    ...\n    XML of the property M | XML of the property group M | XML of the object group M\n\nXML of the property ::= \n    <property name on the form> property value </property name on the form>\n\nXML of the property group ::=\n    <property group name> XML with child properties, groups of properties/objects </property group name>\n\nXML of the object group ::=\n    <object group name> XML with child properties, groups of properties/objects 1 </property group name>\n    <object group name> XML with child properties, groups of properties/objects 2 </property group name>\n    ...\n    <object group name> XML with child properties, groups of properties/objects N </property group name>\n")),(0,n.kt)("p",null,"When exporting/importing to XML, the special ",(0,n.kt)("inlineCode",{parentName:"p"},"ATTR")," option can be specified for a property on the form. Thus, when exporting/importing that property, its value will be stored not in a separate tag, but in the attribute of the parent tag:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'<parent tag ... property name on the form = "property value" ...>\n')),(0,n.kt)("p",null,"When importing from XML, the name of the uppermost tag (in the rule) is ignored (according to the XML specification, there should be only one such tag)."),(0,n.kt)("p",null,"Properties with ",(0,n.kt)("inlineCode",{parentName:"p"},"NULL")," values, as well as property groups that do not have any tags inside as a result of export, are not exported (ignored)."),(0,n.kt)("h3",{id:"value"},"Predefined value"),(0,n.kt)("p",null,"When importing JSON, if for an object group an array ( ",(0,n.kt)("inlineCode",{parentName:"p"},"[ ]")," ) of values contains not an object ( ",(0,n.kt)("inlineCode",{parentName:"p"},"{ }")," ), but a specific value (for example, a number or a string), then this value is automatically converted to an object ",(0,n.kt)("inlineCode",{parentName:"p"},'{ "value" : value }'),". A similar conversion is performed when exporting an object group to JSON: if the object contains exactly one ",(0,n.kt)("inlineCode",{parentName:"p"},"value")," key (i.e., it has the form ",(0,n.kt)("inlineCode",{parentName:"p"},'{ "value" : value}'),"), then instead of it, the value for this ",(0,n.kt)("inlineCode",{parentName:"p"},"value"),' key is substituted to the resulting JSON. In addition to "ordinary" object groups, the same conversions are also performed for the ',(0,n.kt)("a",{parentName:"p",href:"/v4/Static_view#empty"},"empty")," root object group, i.e., for example JSON ",(0,n.kt)("inlineCode",{parentName:"p"},'["ab","vv"]')," is processed as JSON ",(0,n.kt)("inlineCode",{parentName:"p"},'{ "value" : ["ab","vv"] }'),"."),(0,n.kt)("p",null,"When importing/exporting XML, if the property is named ",(0,n.kt)("inlineCode",{parentName:"p"},"value"),", then the value of this property will be stored not in a separate tag, but inside (in the text) the parent tag (i.e., as if the parent tag itself was a property view). This behavior is usually used if the parent tag has other tags/attributes in it (XML specification allows this)."),(0,n.kt)("p",null,"When importing XML, if the object group is named ",(0,n.kt)("inlineCode",{parentName:"p"},"value"),", then all tags are read (with any name). "),(0,n.kt)("h3",{id:"xml-namespaces"},"XML namespaces"),(0,n.kt)("p",null,"Unlike other formats, XML supports a concept of namespaces for tags and attributes."),(0,n.kt)("p",null,"For example, in ",(0,n.kt)("strong",{parentName:"p"},"lsFusion")," to export a property to a tag with a specified namespace, you must specify the name of this property using a special syntax:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[namespace[=uri]:]name\n")),(0,n.kt)("p",null,"For example, ",(0,n.kt)("inlineCode",{parentName:"p"},"h:table")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"h=http://www.w3.org/TR/html4:table"),". The namespace name may be empty if necessary. If no URI is specified for the namespace, it is inherited from the namespace with the same name of the parent tags. If there are no namespaces with that name in the parent tags, URI is automatically considered equal to ",(0,n.kt)("inlineCode",{parentName:"p"},"http://www.w3.org/<name of the namespace>"),"."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"It is not possible to specify the property name described above (for example, ",(0,n.kt)("inlineCode",{parentName:"p"},"h:table"),") in the lsFusion syntax (since the name cannot contain a colon), therefore, to specify such an export name, you should use the ",(0,n.kt)("a",{parentName:"p",href:"#extid"},"described above")," ",(0,n.kt)("inlineCode",{parentName:"p"},"EXTID")," option.")),(0,n.kt)("p",null,"If a namespace must be declared in a tag , but the tag itself should not belong to it, you must add a property marked ",(0,n.kt)("inlineCode",{parentName:"p"},"ATTR")," and named ",(0,n.kt)("inlineCode",{parentName:"p"},"xmlns:namespace")," to the export. It is assumed that the value of this property will contain the URI of the declared namespace."),(0,n.kt)("p",null,"Working with namespaces is similar when importing properties, as well as when working with object groups/property groups."),(0,n.kt)("h3",{id:"flat-view"},"Flat view"),(0,n.kt)("p",null,"Each file for an object group in flat view is a table in which:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Rows are object collections of this object group."),(0,n.kt)("li",{parentName:"ul"},"Columns are properties, which ",(0,n.kt)("a",{parentName:"li",href:"/v4/Form_structure#drawgroup"},"display groups")," are equal to this object group.")),(0,n.kt)("p",null,"In CSV format (when there is no first header line), the columns are named similarly to XLS (i.e., ",(0,n.kt)("inlineCode",{parentName:"p"},"A")," is the first, ",(0,n.kt)("inlineCode",{parentName:"p"},"B")," is the second, etc.)"),(0,n.kt)("p",null,"If a column with the form property name is not found when importing the form, then the column next to the column of the previous property in the list of form properties is selected for import (in this case, the ",(0,n.kt)("inlineCode",{parentName:"p"},"parent")," column is considered the first)."),(0,n.kt)("h3",{id:"language"},"Language"),(0,n.kt)("p",null,"All of the above options, as well as defining the form structure, can be done using the ",(0,n.kt)("a",{parentName:"p",href:"/v4/FORM_statement"},(0,n.kt)("inlineCode",{parentName:"a"},"FORM")," statement"),"."),(0,n.kt)("h3",{id:"open-form"},"Open form"),(0,n.kt)("p",null,"To display the form in structured view, the corresponding ",(0,n.kt)("a",{parentName:"p",href:"/v4/Open_form"},"open form")," in a ",(0,n.kt)("a",{parentName:"p",href:"/v4/In_a_structured_view_EXPORT_IMPORT"},"structured view")," operator is used."),(0,n.kt)("h3",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM exportSku\n    OBJECTS st = Store\n\n    OBJECTS s = Sku\n    PROPERTIES(s) id, name, weight\n    FILTERS in(st, s)\n;\n\nexportSku (Store store)  {\n    // uploading to DBF all Sku for which in (Store, Sku) is specified for the desired warehouse\n    EXPORT exportSku OBJECTS st = store DBF CHARSET 'CP866';\n    EXPORT exportSku XML;\n    EXPORT exportSku OBJECTS st = store CSV ',';\n}\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lsf"},"\ndate = DATA DATE (INTEGER);\nsku = DATA BPSTRING[50] (INTEGER);\nprice = DATA NUMERIC[14,2] (INTEGER);\norder = DATA INTEGER (INTEGER);\nFORM import\n    OBJECTS o = INTEGER // orders\n    OBJECTS od = INTEGER // order lines\n    PROPERTIES (o) dateOrder = date // importing the date from the dateOrder field\n    PROPERTIES (od) sku = sku, price = price // importing product quantity from sku and price fields\n    FILTERS order(od) = o // writing the top order to order\n\n;\n\nimportForm()  {\n    INPUT f = FILE DO {\n        IMPORT import JSON FROM f;\n        SHOW import; // showing what was imported\n\n        // creating objects in the database\n        FOR DATE date = date(INTEGER io) NEW o = Order DO {\n            date(o) <- date;\n            FOR order(INTEGER iod) = io NEW od = OrderDetail DO {\n                price(od) <- price(iod);\n                sku(od) <- GROUP MAX Sku sku IF name(sku) = sku(iod); // finding sku with this name\n            }\n        }\n    }\n}\n")))}h.isMDXComponent=!0}}]);