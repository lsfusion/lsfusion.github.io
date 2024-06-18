"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[52220],{98312:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=i(74848),t=i(28453);const r={title:"Object blocks"},o=void 0,c={id:"Object_blocks",title:"Object blocks",description:"Object blocks of the FORM statement - adding object groups to the form structure, and object trees to the interactive form view.",source:"@site/docs/Object_blocks.md",sourceDirName:".",slug:"/Object_blocks",permalink:"/next/Object_blocks",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Object_blocks.md",tags:[],version:"current",lastUpdatedAt:171871739e4,frontMatter:{title:"Object blocks"},sidebar:"learn",previous:{title:"FORM statement",permalink:"/next/FORM_statement"},next:{title:"Properties and actions block",permalink:"/next/Properties_and_actions_block"}},l={},d=[{value:"Object block",id:"objects",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Object options",id:"object-options",level:3},{value:"Object group options",id:"object-group-options",level:3},{value:"Examples",id:"examples",level:3},{value:"Object tree block",id:"tree",level:2},{value:"Syntax",id:"syntax-1",level:3},{value:"Description",id:"description-1",level:3},{value:"Parameters",id:"parameters-1",level:3},{value:"Examples",id:"examples-1",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Object blocks of the ",(0,s.jsxs)(n.a,{href:"/next/FORM_statement",children:[(0,s.jsx)(n.code,{children:"FORM"})," statement"]})," - adding ",(0,s.jsx)(n.a,{href:"/next/Form_structure#objects",children:"object groups"})," to the form structure, and ",(0,s.jsx)(n.a,{href:"/next/Interactive_view#tree",children:"object trees"})," to the interactive form view."]}),"\n",(0,s.jsx)(n.h2,{id:"objects",children:"Object block"}),"\n",(0,s.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"OBJECTS groupDeclaration1 [groupOptions1], ...., groupDeclarationN [groupOptionsN]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Each ",(0,s.jsx)(n.code,{children:"groupDeclaration"})," is a declaration of an object group consisting of several objects:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[groupName =] (objectDeclaration1, ..., objectDeclarationK)\n"})}),"\n",(0,s.jsx)(n.p,{children:"or an object group consisting of a single object:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"objectDeclaration\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Each ",(0,s.jsx)(n.code,{children:"objectDeclaration"})," declaring an object has the following syntax:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[[name] [caption] =] classId objectOptions\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Object options ",(0,s.jsx)(n.code,{children:"objectOptions"})," can be listed one after another in any order. The following set of options is supported:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"ON CHANGE actionId(param1, ..., paramM)\nON CHANGE actionOperator \nEXTID objectExtID\n"})}),"\n",(0,s.jsxs)(n.p,{children:["After the declaration of each object group, the group options ",(0,s.jsx)(n.code,{children:"groupOptions"})," can be listed in any order:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"viewType\ninsertPosition\ndefaultObjectsType\nPAGESIZE pageSize \nIN propertyGroup\nEXTID extID\nEXTKEY\nSUBREPORT [subReportExpression]\nBACKGROUND backgroundExpr\nFOREGROUND foregroundExpr\n"})}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["A single ",(0,s.jsx)(n.code,{children:"OBJECTS"})," block can contain several comma-delimited declarations of ",(0,s.jsx)(n.a,{href:"/next/Interactive_view#objects",children:"object groups"}),". An object group can contain just one object or several ones. In case of a single object, you can use simplified syntax without specifying the name of an object group and using parentheses."]}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)("a",{className:"lsdoc-anchor",id:"groupName"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"groupName"})}),"\n",(0,s.jsxs)(n.p,{children:["Name of an object group. ",(0,s.jsx)(n.a,{href:"/next/IDs#id",children:"Simple ID"}),". Must be specified if you need to access an object group consisting of several objects. If an object group consists of a single object, the name of the object group will be equal to the name of the object and doesn't need to be specified."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"name"})}),"\n",(0,s.jsxs)(n.p,{children:["Object name. Simple ID. Must be specified if the object class is a ",(0,s.jsx)(n.a,{href:"/next/Built-in_classes",children:"built-in class"}),". If the object class is a ",(0,s.jsx)(n.a,{href:"/next/User_classes",children:"custom class"}),", the name doesn't need to be specified. In this case, it will be equal to the name of the class object."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"classId"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/next/IDs#classid",children:"Object class ID"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"caption"})}),"\n",(0,s.jsxs)(n.p,{children:["Caption of the object being added. ",(0,s.jsx)(n.a,{href:"/next/Literals#strliteral",children:"String literal"}),". If the caption is not specified, the class caption will become the object caption."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"object-options",children:"Object options"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"ON CHANGE actionName(param1, ..., paramM)"})}),"\n",(0,s.jsxs)(n.p,{children:["Specifying an ",(0,s.jsx)(n.a,{href:"/next/Actions",children:"action"})," that will be called when the current value of the object changes."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"actionID"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/next/IDs#propertyid",children:"Action ID"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"param1, ..., paramM"})}),"\n",(0,s.jsx)(n.p,{children:"A list of object names on the form that will be used as action parameters. The number of these objects must be equal to the number of action parameters. The name of the object is defined with a simple ID."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"ON CHANGE actionOperator"})}),"\n",(0,s.jsxs)(n.p,{children:["Creating an ",(0,s.jsx)(n.a,{href:"/next/Actions",children:"action"})," that will be called when the current value of the object changes."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"actionOperator"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/next/Action_operators#contextdependent",children:"Context-dependent action operator"}),". You can use the names of already declared objects on the form as parameters."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"EXTID objectExtID"})}),"\n",(0,s.jsxs)(n.p,{children:["Specifying the name that will be used for ",(0,s.jsx)(n.a,{href:"/next/Structured_view#extid",children:"export/import"})," of this form object. Used only in the ",(0,s.jsx)(n.a,{href:"/next/Structured_view",children:"structured"})," view."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"objectExtID"})}),"\n",(0,s.jsx)(n.p,{children:"String literal."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"object-group-options",children:"Object group options"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"viewType"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"/next/Interactive_view#property",children:"default view"})," for properties of this object group. Specified by one of the following ways:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"PANEL"})}),"\n",(0,s.jsxs)(n.p,{children:["Keyword that, when specified, selects the ",(0,s.jsx)(n.em,{children:"panel"})," view type"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"TOOLBAR"})}),"\n",(0,s.jsxs)(n.p,{children:["Keyword that, when specified, selects the ",(0,s.jsx)(n.em,{children:"toolbar"})," view type"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GRID"})}),"\n",(0,s.jsxs)(n.p,{children:["Keyword that, when specified, selects the ",(0,s.jsx)(n.em,{children:"table column"})," view type. Used by default."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"PIVOT [pivotOptions]"})}),"\n",(0,s.jsxs)(n.p,{children:["When the ",(0,s.jsx)(n.code,{children:"PIVOT"})," keyword is specified, the ",(0,s.jsx)(n.em,{children:"pivot table"})," view type is selected. Options for this view type ",(0,s.jsx)(n.code,{children:"pivotOptions"})," can be specified one after another in any order."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"pivotType"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/next/Literals#strliteral",children:"String literal"})," that defines the initial display mode of the pivot table. Can be equal to one of the following values:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"'Table'"})," (default value)"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"'Table Bar Chart'"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"'Table Heatmap'"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"'Table Row Heatmap'"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"'Table Col Heatmap'"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"'Bar Chart'"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"'Stacked Bar Chart'"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"'Line Chart'"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"'Area Chart'"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"'Scatter Chart'"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"'Multiple Pie Chart'"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"'Horizontal Bar Chart'"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"'Horizontal Stacked Bar Chart'"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"calcType"})}),"\n",(0,s.jsx)(n.p,{children:"Specifying the initial aggregation function. It can be set using one of the keywords:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"SUM"})," - sum of values (default value)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"MAX"})," - maximum of values"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"MIN"})," - minimum of values"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"settingsType"})}),"\n",(0,s.jsx)(n.p,{children:"Specifying whether the pivot table settings are shown to the user. It can be specified by one of the keywords:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"SETTINGS"})," - settings are shown (default value)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"NOSETTINGS"})," - settings are not shown"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"MAP [tileProvider]"})}),"\n",(0,s.jsxs)(n.p,{children:["When the ",(0,s.jsx)(n.code,{children:"MAP"})," keyword is specified, the ",(0,s.jsx)(n.em,{children:"map"})," view type is selected. By default, this view uses OpenStreetMap maps. It is possible to use Google or Yandex maps. To do this you need to include the ",(0,s.jsx)(n.code,{children:"Geo.lsf"})," module in the project, then obtain an API key for Google or Yandex and specify it in ",(0,s.jsx)(n.code,{children:"Administration > Application > Settings > Navigation"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"tileProvider"})}),"\n",(0,s.jsx)(n.p,{children:"String literal that specifies the map source. Possible options:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"'openStreetMap'"})," (default value)"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"'google'"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"'yandex'"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"CALENDAR"})}),"\n",(0,s.jsxs)(n.p,{children:["Keyword that, when specified, selects the ",(0,s.jsx)(n.em,{children:"calendar"})," view type."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"CUSTOM renderFunction [HEADER expr]"})}),"\n",(0,s.jsxs)(n.p,{children:["When the ",(0,s.jsx)(n.code,{children:"CUSTOM"})," keyword is specified, the custom view type is selected."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"renderFunction"})}),"\n",(0,s.jsx)(n.p,{children:"A string literal specifying the name of the JavaScript function that is responsible for displaying the data. This function must be located in a .js file included in the project resources and loaded for use on the client. It should return a JavaScript object that contains three functions:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"render(element, controller)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"update(element, controller, list, options)"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"clear(element)"})," (optional)"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["A more detailed description of the mechanism can be found in the article ",(0,s.jsx)(n.a,{href:"/next/How-to_Custom_components_objects",children:"How-to: Custom Components (Objects)"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"expr"})}),"\n",(0,s.jsx)(n.p,{children:"Expression whose value must be an object of the JSON class. It is used to pass data that does not depend on the values of the described object group."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)("a",{className:"lsdoc-anchor",id:"insertPosition"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"insertPosition"})}),"\n",(0,s.jsxs)(n.p,{children:["Specifying the insertion position of the object group within the list of object groups. Most often used together with the ",(0,s.jsx)(n.a,{href:"/next/Form_extension",children:"form extension mechanism"}),". It can be specified in one of the following ways:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"AFTER groupName"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"BEFORE groupName"})}),"\n",(0,s.jsxs)(n.p,{children:["The object group will be added to the form structure directly before (keyword ",(0,s.jsx)(n.code,{children:"BEFORE"}),") or after (keyword ",(0,s.jsx)(n.code,{children:"AFTER"}),") the specified object group. If the group before (after) which it is to be added is in the tree, it must be the first (last) in that tree."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"groupName"})}),"\n",(0,s.jsx)(n.p,{children:"Object group name. Simple ID."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"FIRST"})}),"\n",(0,s.jsx)(n.p,{children:"Keyword indicating that the object group will be added to the beginning of the list."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"LAST"})}),"\n",(0,s.jsxs)(n.p,{children:["Keyword indicating that the object group will be added to the end of the list. Unlike default addition, object groups inserted using ",(0,s.jsx)(n.code,{children:"LAST"})," will always be positioned after all object groups added in the order of declaration."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"DEFAULT"})}),"\n",(0,s.jsx)(n.p,{children:"Keyword indicating that the object group is added in the order of declaration. This is the default value."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"defaultObjectsType"})}),"\n",(0,s.jsx)(n.p,{children:"Specifying which object collection from the added object group will be current after the active filters are changed. Specified by one of the keywords:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"FIRST"}),"\u2013 specifies that the first object collection (according to the current order) will be the ",(0,s.jsx)(n.a,{href:"/next/Interactive_view#defaultobject",children:"default objects"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"LAST"})," - last object collection"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"PREV"})," - the previous (or closest possible) object collection"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"NULL"})," - none (reset)"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"If this option is not specified, the platform determines the option to be used depending on the current filters."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"PAGESIZE pageSize"})}),"\n",(0,s.jsxs)(n.p,{children:["Specification of the number of readable objects in the table. By default, the quantity is determined dynamically depending on the size of the component in the user interface and equals to ",(0,s.jsx)(n.code,{children:"3 * <number of visible rows in the table>"}),". A value of ",(0,s.jsx)(n.code,{children:"0"})," means that all objects must be read."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"pageSize"})}),"\n",(0,s.jsxs)(n.p,{children:["Number of objects read. ",(0,s.jsx)(n.a,{href:"/next/Literals#intliteral",children:"Integer literal"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"IN propertyGroup"})}),"\n",(0,s.jsxs)(n.p,{children:["Specifying the ",(0,s.jsx)(n.a,{href:"/next/Groups_of_properties_and_actions",children:"property and action group"})," that the object group belongs to. Used only in the ",(0,s.jsx)(n.a,{href:"/next/Structured_view#hierarchy",children:"hierarchical"})," view."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"propertyGroup"})}),"\n",(0,s.jsxs)(n.p,{children:["The property and action group name. ",(0,s.jsx)(n.a,{href:"/next/IDs#cid",children:"Composite ID"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"EXTID extID"})}),"\n",(0,s.jsxs)(n.p,{children:["Specifying the name to be used for ",(0,s.jsx)(n.a,{href:"/next/Structured_view#extid",children:"export/import"})," of this object group. Used only in the structured view."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"extId"})}),"\n",(0,s.jsx)(n.p,{children:"String literal."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"EXTKEY"})}),"\n",(0,s.jsxs)(n.p,{children:["When keyword ",(0,s.jsx)(n.code,{children:"EXTKEY"})," is specified the values of objects and properties of this object group are represented in a structured view as key-value pairs, where the key is the value of the object (set of objects) and the value is the property values. By default, they are represented as an array with lists of property values."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"SUBREPORT [subReportExpression]"})}),"\n",(0,s.jsxs)(n.p,{children:["Specifies that you need to generate a separate ",(0,s.jsx)(n.a,{href:"/next/Print_view",children:"report"})," file for this object group while ",(0,s.jsx)(n.a,{href:"/next/Print_view#buildhierarchy",children:"building the report hierarchy"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"subReportExpression"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"/next/Expression",children:"expression"})," whose value will be used as the name of the  ",(0,s.jsx)(n.a,{href:"/next/Print_view",children:"report"})," file for the created object group. You can use the names of already declared objects on the form as parameters. It is assumed that the values of these objects will be ",(0,s.jsx)(n.a,{href:"/next/Open_form#params",children:"passed"})," when the form is opened ",(0,s.jsx)(n.a,{href:"/next/In_a_print_view_PRINT",children:"in the print view"})," (if it's not done, they will be considered equal ",(0,s.jsx)(n.code,{children:"NULL"}),")."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"BACKGROUND backgroundExpr"})}),"\n",(0,s.jsx)(n.p,{children:"Specifying the background color of property cells belonging to this object group."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"backgroundExpr"})}),"\n",(0,s.jsx)(n.p,{children:"Expression whose value determines the background color."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"FOREGROUND foregroundExpr"})}),"\n",(0,s.jsx)(n.p,{children:"Specifying the foreground color of property cells belonging to this object group."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"foregroundExpr"})}),"\n",(0,s.jsx)(n.p,{children:"Expression whose value determines the foreground color."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lsf",children:"CLASS Shipment;\n// declaring the delivery form\nFORM shipments 'Deliveries'\n    OBJECTS s = Shipment // adding one object of the shipment class\n                        PAGESIZE 100 // indicating that the table should always contain 100 rows\n\n    // ... adding properties and filters to the form\n;\n\n// Declaring a form that will display the turnover of the product for a specified interval\nname = DATA STRING[100] (Item);\nrevenue = DATA NUMERIC[16,2] (Item, DATE, DATE);\n\nFORM revenues 'Product turnovers'\n    // declaring a group of objects, consisting of 2 objects of the Date class with the appropriate captions,\n    // which will always be displayed as a panel\n    OBJECTS interval = (dateFrom 'Date (from)' = DATE, dateTo 'Date (to)' = DATE) PANEL, \n            i = Item // adding a list of products\n    // adding to the form the properties of the date objects values, with which the user can select dates\n    PROPERTIES VALUE(dateFrom), VALUE(dateTo) \n    // adding the product name and the property with the product turnover for the date interval\n    PROPERTIES name(i), revenue(i, dateFrom, dateTo) \n;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lsf",children:"// creating a form for printing a price tag for a product\nlabelFile = DATA STRING[100] (Item);\nprintLabelFile (Item i)= OVERRIDE labelFile(i), 'MyModule_printLabel_i.jrxml' IF i IS Item;\nFORM printLabel 'Price tag printing'\n    OBJECTS i = Item  // adding the product for which the price tag will be printed\n    // marking that a file whose name is stored in the printLabelFile property should be used as a template \n    // (it is assumed that the i value will be passed in the OBJECTS block)\n    REPORT printLabelFile(i)       \n    // for example, the user can input myLabel1.jrxml there, then the system will use a file named myLabel1.jrxml\n    //  ... other properties required for printing\n;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"tree",children:"Object tree block"}),"\n",(0,s.jsx)(n.h3,{id:"syntax-1",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"TREE [name] groupDeclaration1 [parentBlock1], ...., groupDeclarationN [parentBlockN] [insertPosition]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Each ",(0,s.jsx)(n.code,{children:"groupDeclaration"})," is a declaration of an object group that is fully analogous to the ",(0,s.jsx)(n.a,{href:"#objects",children:"declaration in the object block"})," described above. Each ",(0,s.jsx)(n.code,{children:"parentBlock"})," can be described in one of two ways:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"PARENT parentExpr\n(PARENT parentExpr1, ..., parentExprK)\n"})}),"\n",(0,s.jsx)(n.p,{children:"The first option is used if an object group for which the block is specified consists of a single object, the second one is used for groups of two and more objects."}),"\n",(0,s.jsx)(n.h3,{id:"description-1",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Object tree block"})," lets you create an ",(0,s.jsx)(n.a,{href:"/next/Interactive_view#tree",children:"object tree"}),". The first specified object group will form a list of top-level objects, each of which will have a child list of objects of the second specified object group and so  on."]}),"\n",(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.code,{children:"PARENT"})," block to create ",(0,s.jsx)(n.a,{href:"/next/Interactive_view#treegroup",children:"hierarchical object groups"}),". To do that, specify a property that will define the parent element for an object (or several objects if an object group contains several ones)."]}),"\n",(0,s.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsx)("a",{className:"lsdoc-anchor",id:"treeName"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"name"})}),"\n",(0,s.jsxs)(n.p,{children:["The name of the object tree being created. ",(0,s.jsx)(n.a,{href:"/next/IDs#id",children:"Simple ID"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"parentExpr"})}),"\n",(0,s.jsxs)(n.p,{children:["Expression that defines a hierarchy for a group of objects consisting of a single object. This expression must create a property that has exactly one parameter and returns the parent object for the object passed as input (or ",(0,s.jsx)(n.code,{children:"NULL"})," if the passed object is at the top level)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"parentExpr1, ..., parentExprK"})}),"\n",(0,s.jsxs)(n.p,{children:["A list of expressions that define a hierarchy for an object group consisting of multiple objects. These expressions should create properties with a number of parameters equal to the number of objects in the group. Each of these properties should return one of the parent objects for the object collection passed as input (or ",(0,s.jsx)(n.code,{children:"NULL"})," if the passed object collection is at the top level). The first property should return the first object of the parent object collection, the second property - the second object, and so on."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"insertPosition"})}),"\n",(0,s.jsxs)(n.p,{children:["Specifying the insertion position of tree object groups in the list of object groups. It has syntax fully analogous to the ",(0,s.jsx)(n.a,{href:"#insertPosition",children:"same option in the object block"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"examples-1",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lsf",children:"CLASS SkuGroup;\nname = DATA ISTRING[100] (SkuGroup);\nactive = DATA BOOLEAN (SkuGroup);\nparent = DATA SkuGroup (SkuGroup) AUTOSET;\n\nCLASS Sku;\nname = DATA ISTRING[100] (Sku);\nskuGroup = DATA SkuGroup (Sku);\n\n\nFORM skus 'Sku'\n    TREE groupTree g=SkuGroup PARENT parent(g)\n    PROPERTIES READONLY name(g)\n    FILTERS active(g)\n\n    OBJECTS s = Sku\n    PROPERTIES(s) name\n    FILTERS skuGroup(s) == g\n;\n\nCLASS Group1;\nname = DATA STRING[100] (Group1);\n\nCLASS Group2;\nname = DATA STRING[100] (Group2);\n\nCLASS Group3;\nname = DATA STRING[100] (Group3);\n\nin = DATA BOOLEAN (Group1, Group2);\nin = DATA BOOLEAN (Group2, Group3);\n\nFORM groups\n    TREE groups g1 = Group1, g2 = Group2, g3 = Group3\n    PROPERTIES READONLY name(g1), name(g2), name(g3)\n    FILTERS in(g1, g2), in(g2, g3)\n;\n"})})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var s=i(96540);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);