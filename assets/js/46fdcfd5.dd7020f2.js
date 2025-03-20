"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["95717"],{33665:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>t,assets:()=>c,toc:()=>a,contentTitle:()=>d});var t=JSON.parse('{"id":"Properties_and_actions_block","title":"Properties and actions block","description":"The property and action block of the FORM statement adds properties and actions to the form structure.","source":"@site/docs/Properties_and_actions_block.md","sourceDirName":".","slug":"/Properties_and_actions_block","permalink":"/Properties_and_actions_block","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/master/docs/en/Properties_and_actions_block.md","tags":[],"version":"current","lastUpdatedAt":1735939348000,"frontMatter":{"title":"Properties and actions block"},"sidebar":"learn","previous":{"title":"Object blocks","permalink":"/Object_blocks"},"next":{"title":"Filter and sorting blocks","permalink":"/Filters_and_sortings_block"}}'),i=r("85893"),o=r("50065");let s={title:"Properties and actions block"},d=void 0,c={},a=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Options for the property or action",id:"options-for-the-property-or-action",level:4},{value:"Examples",id:"examples",level:3}];function l(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The property and action block of the ",(0,i.jsx)(n.a,{href:"/FORM_statement",children:"FORM statement"})," adds ",(0,i.jsx)(n.a,{href:"/Form_structure#properties",children:"properties and actions"})," to the ",(0,i.jsx)(n.a,{href:"/Form_structure",children:"form structure"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"PROPERTIES [(cparam1, ..., cparamN)] [formPropertyOptions] formPropertyDecl1, ..., formPropertyDeclM\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Each ",(0,i.jsx)(n.code,{children:"formPropertyDecl"})," describes the property or action being added to the form structure and has the following syntax:"]}),"\n",(0,i.jsxs)(n.p,{children:["If the common parameters ",(0,i.jsx)(n.code,{children:"(cparam1, ..., cparamN)"})," have been specified:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"[[alias1] [caption1] =] [ACTION] formPropertyId1 [formPropertyOptions1], ..., [[aliasK] [captionK] =] [ACTION] formPropertyIdK [formPropertyOptionsK] \n"})}),"\n",(0,i.jsx)(n.p,{children:"If the common parameters of the block have not been specified, then:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"[[alias1] [caption1] =] formMappedProperty1 [formPropertyOptions1], ..., [[aliasK] [captionK] =] formMappedPropertyK [formPropertyOptionsK] \n"})}),"\n",(0,i.jsxs)(n.p,{children:["Each ",(0,i.jsx)(n.code,{children:"formMappedProperty"})," describes the implementation of a property or action being added to the form and having one of the following syntaxes"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"[ACTION] formPropertyId(param1, ..., paramN1) \nformPropertyExpression \n\n{ formActionOperator }\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Each ",(0,i.jsx)(n.code,{children:"formPropertyOptions"})," specifies options for the property or action being added to the form structure. They can be added one by one in arbitrary order:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"changeType\nSHOWIF propertyExpression\nREADONLYIF propertyExpression\nBACKGROUND propertyExpression\nFOREGROUND propertyExpression\nHEADER propertyExpression\nFOOTER propertyExpression\nCOLUMNS [groupid] (groupName1, ..., groupNameM)\nviewType\nNEWSESSION | NESTEDSESSION\nDRAW groupObjectName \ninsertPosition \nQUICKFILTER formPropertyName\nON eventType actionId(param1, ..., paramZ) | { actionOperator }\nATTR\nEXTID extID\nIN propertyGroup\n"})}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["One ",(0,i.jsx)(n.code,{children:"PROPERTIES"})," block adds properties and actions to the form structure. To add a property (action), specify its ID and the ",(0,i.jsx)(n.a,{href:"/Form_structure#objects",children:"form objects"})," whose values will be passed to this property (action) as arguments. Sometimes it\u2019s convenient to list these form objects for the entire ",(0,i.jsx)(n.code,{children:"PROPERTIES"})," block. To do this, specify the block of ",(0,i.jsx)(n.em,{children:"common parameters"}),". In this case, when adding a property (action), you only need to specify its ID, while the common parameters will be passed as arguments."]}),"\n",(0,i.jsx)("a",{className:"lsdoc-anchor",id:"name"}),"\n",(0,i.jsxs)(n.p,{children:["Each property (action) being added to the form structure must have a ",(0,i.jsx)(n.em,{children:"unique name within the form"}),". This name may be specified either explicitly or based on the name of the property and the passed parameters, i.e. names of objects separated by commas."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"FORM order\nOBJECTS o=Order \nPROPERTIES(o) d=date, Order.number;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In the given example, the names of the added properties ",(0,i.jsx)(n.code,{children:"date"})," and ",(0,i.jsx)(n.code,{children:"Order.number"})," will be ",(0,i.jsx)(n.code,{children:"d"})," and ",(0,i.jsx)(n.code,{children:"number(o)"})," respectively."]}),"\n",(0,i.jsxs)(n.p,{children:["When adding a property (action) to the form structure, you may specify a set of its options. You may also specify common options for the entire ",(0,i.jsx)(n.code,{children:"PROPERTIES"})," block. If any of the options are specified for both the entire block and a specific declaration, the option value for the declaration will be used."]}),"\n",(0,i.jsxs)(n.p,{children:["In all ",(0,i.jsx)(n.a,{href:"/Expression",children:"expressions"})," and ",(0,i.jsx)(n.a,{href:"/Action_operators#contextdependent",children:"context-dependent action operators"}),", you can use the names of the objects already declared on the form as parameters."]}),"\n",(0,i.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"cparam1, ..., cparamN"})}),"\n",(0,i.jsxs)(n.p,{children:["List of common parameters of the block. Each parameter is specified with the name of the object on the form. If this list is defined, then adding a property (action) will require that you specify only its ID without parameters. The object name is specified with ",(0,i.jsx)(n.a,{href:"/IDs#id",children:"simple ID"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"alias"})}),"\n",(0,i.jsxs)(n.p,{children:["The name of the property or action being added to the form. ",(0,i.jsx)(n.a,{href:"/IDs#id",children:"Simple ID"}),". If the name is not specified, then the name of the property (action) on the form will be the same as the property's name itself (but without the namespace and signature) with parameters, i.e. names of the objects separated by commas and enclosed in brackets."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"caption"})}),"\n",(0,i.jsxs)(n.p,{children:["The caption of the property or action being added to the form. ",(0,i.jsx)(n.a,{href:"/Literals#strliteral",children:"String literal"}),". If the caption is not specified, then the caption of the property (action) itself will be used on the form."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["In the current platform implementation, if the name and caption are not specified together, then ",(0,i.jsx)(n.code,{children:"="})," is required when using the expressions and action operators (i.e. ",(0,i.jsx)(n.code,{children:"f(a,b)"}),", but ",(0,i.jsx)(n.code,{children:"=a*b+5"}),")"]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"formPropertyId"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/IDs#propertyid",children:"ID of the property or action"})," being added to the form structure."]}),"\n",(0,i.jsxs)(n.p,{children:["Alternatively, you may use ",(0,i.jsx)(n.a,{href:"/Interactive_view#objectoperators",children:"object operators"})," instead of the property/action IDs:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"VALUE"})," displays the object value (or the object ID for custom classes)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"NEW"})," creates a new object."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"EDIT"})," edits the object."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"DELETE"})," deletes the object."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"NEWEDIT"})," creates and edits a new object."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In addition, you may use brackets to explicitly specify a class whose object will be added/edited (e. g. ",(0,i.jsx)(n.code,{children:"NEW[A]"}),") for operators ",(0,i.jsx)(n.code,{children:"NEW"}),", ",(0,i.jsx)(n.code,{children:"EDIT"}),", and ",(0,i.jsx)(n.code,{children:"NEWEDIT"})," or for property/action IDs."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"ACTION"})}),"\n",(0,i.jsx)(n.p,{children:"Keyword. When specified, it is considered that the action is specified in formPropertyId. When not specified, it is initially considered that a property is specified in formPropertyId; otherwise, if property is not found, it is considered that an action is specified in formPropertyId."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"param1, ..., paramNk"})}),"\n",(0,i.jsxs)(n.p,{children:["List of parameters of the added properties or actions. Each parameter is specified with the name of the object on the form. The number of specified parameters must match the number of parameters for the property or action being added. Not specified if the common parameters block is specified. The object name, in turn, is specified with a ",(0,i.jsx)(n.a,{href:"/IDs#id",children:"simple ID"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"formPropertyExpression"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/Expression",children:"Expression"})," being added to the form structure."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"formActionOperator"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/Action_operators#contextdependent",children:"Context-dependent action operator"})," being added to the form structure."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"options-for-the-property-or-action",children:"Options for the property or action"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"changeType"})}),"\n",(0,i.jsxs)(n.p,{children:["Specifying ",(0,i.jsx)(n.a,{href:"/Form_events#predefined",children:"standard handlers"})," for property/action change events. It is specified with one of the keywords:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"CHANGEABLE"})," calls the corresponding handler of the triggered event. Default value. It makes sense to use it explicitly only when another modifier is defined for the entire block but should not be applied to a specific property."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"READONLY"})," will either turn on the filtering mechanism or simply ignore the event when the user tries to change the property."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"DISABLE"})," The property is not available for changing."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"SELECTOR"})," shows a dialog for changing the current value of the object (not the property value) when the user tries to change the property. Applicable only for properties with one parameter."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"SHOWIF propertyExpression"})}),"\n",(0,i.jsxs)(n.p,{children:["Specifies a property that determines visibility of the property or action being added to the form. If the value of this property is ",(0,i.jsx)(n.code,{children:"NULL"}),", then the property (action) being added will not be displayed. Cannot be used together with the ",(0,i.jsx)(n.code,{children:"HEADER"})," option."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"propertyExpression"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/Expression",children:"Expression"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"READONLYIF propertyExpression"})}),"\n",(0,i.jsxs)(n.p,{children:["Specifies a property that allows or prohibits changing the property being added (or execution of the action being added). If the value of this property is ",(0,i.jsx)(n.code,{children:"NULL"}),", then the property being added will not be changeable, and the action being added will not be executable. The behavior is similar to the ",(0,i.jsx)(n.code,{children:"READONLY"})," option, but with an additional data-dependant condition."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"propertyExpression"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/Expression",children:"Expression"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"BACKGROUND propertyExpression"})}),"\n",(0,i.jsxs)(n.p,{children:["Specifying a property that determines the background color for the value cell of the property (action) being added. The property may have the ",(0,i.jsx)(n.code,{children:"COLOR"})," type (in this case, its value will be used) or any other type. In this case, if the value is not equal ",(0,i.jsx)(n.code,{children:"NULL"}),", then either the default color stored in the global property ",(0,i.jsx)(n.code,{children:"System.defaultBackgroundColor"})," (set in settings) or yellow color (if the default color is not set) will be used."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"propertyExpression"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/Expression",children:"Expression"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"FOREGROUND propertyExpression"})}),"\n",(0,i.jsxs)(n.p,{children:["Specifying a property that determines the text color for the value cell of the property (action) being added. The property may have the ",(0,i.jsx)(n.code,{children:"COLOR"})," type (in this case, its value will be used) or any other type. In this case, if the value is not equal to ",(0,i.jsx)(n.code,{children:"NULL"}),", then either the default text color stored in the global property ",(0,i.jsx)(n.code,{children:"System.defaultForegroundColor"})," (set in settings) or red color (if the default color is not set) will be used."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"propertyExpression"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/Expression",children:"Expression"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"HEADER propertyExpression"})}),"\n",(0,i.jsxs)(n.p,{children:["Specifying a property that determines the header for the column of the property (action) being added. The return value of this property will be used as the header. If the return value is ",(0,i.jsx)(n.code,{children:"NULL"}),", then the added property (action) will be automatically hidden."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"propertyExpression"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/Expression",children:"Expression"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"FOOTER propertyExpression"})}),"\n",(0,i.jsxs)(n.p,{children:["Specifying a property that determines the footer of the property (action) being added. Used only in the ",(0,i.jsx)(n.a,{href:"/Print_view",children:"print view"})," of the form."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"propertyExpression"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/Expression",children:"Expression"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"COLUMNS [groupid] (groupName1, ..., groupNameM)"})}),"\n",(0,i.jsxs)(n.p,{children:["Specifies the upper ",(0,i.jsx)(n.a,{href:"/Form_structure#objects",children:"object groups"})," whose values will define a set of ",(0,i.jsx)(n.a,{href:"/Form_structure#groupcolumns",children:"columns"})," to display the added property (action). The ",(0,i.jsx)(n.code,{children:"COLUMNS"})," option is often used with the ",(0,i.jsx)(n.code,{children:"HEADER"})," option which defines headers for these columns."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"groupid"})}),"\n",(0,i.jsxs)(n.p,{children:["Column group ID. ",(0,i.jsx)(n.a,{href:"/Literals#strliteral",children:"String literal"}),". If the ",(0,i.jsx)(n.code,{children:"COLUMNS"})," option is specified for several properties (actions) being added with the same set of object groups, then by default the columns of the first property (action) will be added, followed by the columns of the second property (action), and so on. To group columns of different properties (actions) by values of the upper objects, you can set for them the same string ID of the group of columns. In this case, the columns for different properties (actions) will alternate."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"groupName1, ..., groupNameM"})}),"\n",(0,i.jsxs)(n.p,{children:["List of the names of the upper object groups. Each name is defined ",(0,i.jsx)(n.a,{href:"/IDs#id",children:"by a simple ID"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"DRAW groupObjectName"})}),"\n",(0,i.jsx)(n.p,{children:"Specifying the name of the object group on the form where the added property or action will be displayed in the table of the specified object group."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"groupObjectName"})}),"\n",(0,i.jsxs)(n.p,{children:["Name of an object group. ",(0,i.jsx)(n.a,{href:"/IDs#id",children:"Simple ID"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"viewType"})}),"\n",(0,i.jsxs)(n.p,{children:["Specifying the ",(0,i.jsx)(n.a,{href:"/Interactive_view#property",children:"view type"})," of the property or action being added:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"GRID"})," \u2014 table column"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"TOOLBAR"})," \u2014 toolbar"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"PANEL"})," \u2014 panel"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If not specified, the corresponding option from the ",(0,i.jsx)(n.a,{href:"/Property_options",children:"property options"})," is used. If it is also not specified, then the ",(0,i.jsx)(n.a,{href:"/Interactive_view#property",children:"default view type"})," is used for the display group of this property or action."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"NEWSESSION"})," | ",(0,i.jsx)(n.code,{children:"NESTEDSESSION"})]}),"\n",(0,i.jsxs)(n.p,{children:["Modifiers specifying that object operators (",(0,i.jsx)(n.code,{children:"NEW"}),", ",(0,i.jsx)(n.code,{children:"EDIT"}),", ",(0,i.jsx)(n.code,{children:"DELETE"}),", ",(0,i.jsx)(n.code,{children:"NEWEDIT"}),") must be executed in a new (nested) session."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"insertPosition"})}),"\n",(0,i.jsxs)(n.p,{children:["Specifying the insert position of the property (action) within the list of properties and actions on the form. Most often used together with the ",(0,i.jsx)(n.a,{href:"/Form_extension",children:"form extension mechanism"}),". It can be specified in one of the following ways:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"AFTER formPropertyName"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"BEFORE formPropertyName"})}),"\n",(0,i.jsxs)(n.p,{children:["The property (action) will be added to the form structure directly before (keyword ",(0,i.jsx)(n.code,{children:"BEFORE"}),") or after (keyword ",(0,i.jsx)(n.code,{children:"AFTER"}),") the specified property (action) on the form."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"formPropertyName"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"#name",children:"Property/action on the form name"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"FIRST"})}),"\n",(0,i.jsx)(n.p,{children:"Keyword indicating that the property (action) will be added to the beginning of the list."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"LAST"})}),"\n",(0,i.jsxs)(n.p,{children:["Keyword indicating that the property (action) will be added to the end of the list. Unlike default addition, properties (actions) inserted using ",(0,i.jsx)(n.code,{children:"LAST"})," will always be positioned after all properties (actions) added in the order of declaration."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"DEFAULT"})}),"\n",(0,i.jsx)(n.p,{children:"Keyword indicating that the property (action) is added in the order of declaration. This is the default value."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"QUICKFILTER formPropertyName"})}),"\n",(0,i.jsxs)(n.p,{children:["Specifying the property to be used in ",(0,i.jsx)(n.a,{href:"/Form_events#default",children:"default handlers"})," for quick filtering."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"formPropertyName"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"#name",children:"Property name/actions on the form"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"ON eventType actionId(param1, ..., paramZ) | { actionOperator }"})}),"\n",(0,i.jsxs)(n.p,{children:["Specifying the action that will be executed when the specified ",(0,i.jsx)(n.a,{href:"/Form_events",children:"form event"})," occurs."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"eventType"})}),"\n",(0,i.jsx)(n.p,{children:"Type of form event. It is specified by one of the following keywords:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"CHANGE"})," \u2014 the user tries to change the value of the property being added (call the added action)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"CHANGEWYS"})," \u2014 the user tries to change the displayed value of the property. It is triggered when the user inserts a text into the added property (by pressing Ctrl + V or similarly)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"GROUPCHANGE"})," \u2014 the user tries to change the property value for all objects in the table (group change)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"EDIT"})," \u2014 the user tries to edit the object that represents the property value."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"CONTEXTMENU [caption]"})," is the event type which adds a menu item executing the specified action to the context menu of the property (action) on the form. You can also specify the caption for this menu item (as string literal). If it is not specified, then, by default, it will be the same as the action caption."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"caption"})}),"\n",(0,i.jsxs)(n.p,{children:["Caption of the item in the context menu. ",(0,i.jsx)(n.a,{href:"/Literals#strliteral",children:"String literal"}),". If the caption is not specified explicitly, then it will be the same as the caption of the action called upon the event."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"actionId"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/IDs#propertyid",children:"Action ID"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"param1, ..., paramZ"})}),"\n",(0,i.jsx)(n.p,{children:"List of action parameters. Each parameter is specified with the object name on the form. The object name, in turn, is specified with a simple ID."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"actionOperator"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/Action_operators#contextdependent",children:"Context-dependent action operator"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"ATTR"})}),"\n",(0,i.jsxs)(n.p,{children:["Keyword. Used only in the ",(0,i.jsx)(n.a,{href:"/Structured_view#hierarchy",children:"hierarchical"})," view. Indicates that:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"When importing from XML, the data is imported from the tag attributes instead of the child tag."}),"\n",(0,i.jsx)(n.li,{children:"When exporting to XML, the data is exported to the tag attributes instead of the child tag."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"EXTID extID"})}),"\n",(0,i.jsxs)(n.p,{children:["Specifying the name to be used for ",(0,i.jsx)(n.a,{href:"/Structured_view#extid",children:"export/import"})," operations of this property. Used only in the ",(0,i.jsx)(n.a,{href:"/Structured_view",children:"structured"})," view."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"extId"})}),"\n",(0,i.jsx)(n.p,{children:"String literal."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"EXTNULL"})}),"\n",(0,i.jsxs)(n.p,{children:["Keyword. Used only in the ",(0,i.jsx)(n.a,{href:"/Structured_view#hierarchy",children:"hierarchical"})," view. Indicates that when exporting to XML / JSON, NULL value will not be skipped, will be exported:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"to JSON as 'null'."}),"\n",(0,i.jsx)(n.li,{children:"to XML as empty value."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"IN propertyGroup"})}),"\n",(0,i.jsxs)(n.p,{children:["Specifying a ",(0,i.jsx)(n.a,{href:"/Groups_of_properties_and_actions",children:"property/action group"})," which the property (action) on the form belongs to. If this option is not specified, then the property group of the property itself will be used as the property (action) group on the form."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"propertyGroup"})}),"\n",(0,i.jsxs)(n.p,{children:["The property group name. ",(0,i.jsx)(n.a,{href:"/IDs#cid",children:"Composite ID"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"CLASS Order;\ndate = DATA DATE (Order);\ntime = DATA TIME (Order);\nnumber = DATA INTEGER (Order);\nseries = DATA BPSTRING[2] (Order);\n\nnote = DATA ISTRING[255] (Order);\n\nCLASS OrderDetail;\norder = DATA Order (OrderDetail) NONULL DELETE;\ndate(OrderDetail d) = date(order(d));\n\nindex (OrderDetail d) = PARTITION SUM 1 ORDER d BY order(d) CHARWIDTH 4;\n\nsku = DATA Sku (OrderDetail);\nnameSku (OrderDetail d) = name(sku(d));\n\nquantity = DATA NUMERIC[10,2] (OrderDetail);\nprice = DATA NUMERIC[10,2] (OrderDetail);\nsum = DATA NUMERIC[12,2] (OrderDetail);\n\nsum (Order o) = GROUP SUM sum(OrderDetail d) BY order(d);\n\nquantity (Order o, Sku s) = GROUP SUM quantity(OrderDetail d) BY order(d), sku(d);\nlastDetail (Order o, Sku s) = GROUP MAX OrderDetail d BY order(d), sku(d);\nchangeQuantity (Order o, Sku s)  {\n    INPUT n = NUMERIC[10,2] DO {\n        IF lastDetail(o, s) THEN {\n            IF n THEN\n                quantity(OrderDetail d) <- n WHERE d == lastDetail(o, s);\n            ELSE\n                DELETE OrderDetail d  WHERE d == lastDetail(o, s);\n        } ELSE IF n THEN {\n            NEW d = OrderDetail {\n                order(d) <- o;\n                sku(d) <- s;\n                quantity(d) <- n;\n            }\n        }\n    }\n}\n\nstopOrder = DATA BOOLEAN (Sku);\nonStock = DATA NUMERIC[10,2] (Sku);\nordered = DATA NUMERIC[10,2] (Sku);\n\nCLASS Customer;\nname = DATA ISTRING[100] (Customer);\nFORM customers\n    OBJECTS c = Customer\n    PROPERTIES(c) READONLY name\n    LIST Customer OBJECT c\n;\n\ncustomer = DATA Customer (Order);\nnameCustomer (Order o) = name(customer(o));\n\ncustomer(OrderDetail d) = customer(order(d));\n\nCLASS Region;\nname = DATA STRING[100] (Region);\n\nregion = DATA Region (Customer);\n\n// declaring the orders form\nFORM order 'Order'\n    OBJECTS o = Order PANEL // adding an order object to the form\n    PROPERTIES VALUE(o), // adding the order ID in the database\n               // adding properties date/time of order, series/order number\n               date(o), time(o), series(o), number(o), \n               // adding the name of the customer, which by default will be available for editing\n               // here, when the user tries to edit it, a dialog will be called for the customer choice -\n               // a form for which the LIST customer parameter is set     \n               nameCustomer(o), \n               note(o), // adding a note\n               // adding the order amount without the possibility of editing, since it is automatically\n               // calculated based on the sum of rows\n               sum(o) READONLY \n\n    OBJECTS d = OrderDetail // adding the order line object\n    PROPERTIES(d) // all properties in this block will have an order line input\n                  index READONLY, // adding the ordinal line number and making it impossible to edit\n                  nameSku, // adding a name\n                  quantity, price, sum, // adding quantity, price, amount\n                  NEW, // adding the predefined NEW action that adds a new order line\n                  DELETE // adding an action that will delete the order line\n    FILTERS order(d) == o // indicating that only lines related to this order should be shown\n\n    // adding a sku object to which the totals for each sku in the order will be written\n    OBJECTS s = Sku \n    // adding a name, while making a note that it cannot be edited on this form\n    PROPERTIES(s) name READONLY \n\n    // adding a property that will display the ordered quantity by sku in this order\n    PROPERTIES quantity(o, s) \n               // by default, even though the property is not marked READONLY and nothing will happen when the user\n               // tries to change it, since quantity is an aggregated property. In this case, a note is made that \n               // when the user tries to change, the changeQuantity action will be called. An algorithm is written\n               // in this property that will create/delete order lines or change the quantity in them\n               ON CHANGE changeQuantity(o, s) \n               // making  the property unavailable for editing, if the order is prohibited for this sku\n               READONLYIF stopOrder(s) \n               // in addition, in this case, this cell is highlighted with custom background so that the user \n               // can see such positions in advance\n               BACKGROUND stopOrder(s) \n\n    EDIT Order OBJECT o // marking the form as a form for editing orders\n;\n\nEXTEND FORM order // expanding the form with the Mixin concept\n    // adding the property of the current balance to the form before the quantity in the order\n    PROPERTIES onStock(s) BEFORE quantity(d), \n    // adding to the form the quantity of already ordered products within all orders\n               ordered(s) BEFORE quantity(d) \n;\n\nFORM orders 'Orders'\n    OBJECTS o = Order\n    // all properties in this block are unavailable for editing\n    PROPERTIES(o) READONLY VALUE, date, number \n    // adding predefined NEW and EDIT actions that will call the order form to add orders\n    PROPERTIES(o) NEWSESSION NEW, EDIT, DELETE \n;\n\n// creating a \"report\" in which orders for a certain interval will be visible in the context of customers \n// in a particular region\nFORM orderReport 'Sales by warehouse'\n    // declaring a group of objects, consisting of 2 objects of the Date class with the appropriate captions, \n    // which will always be displayed as a panel\n    OBJECTS interval = (dateFrom 'Date (from)' = DATE, dateTo 'Date (to)' = DATE) PANEL \n    // adding to the form the properties of the date objects values, with which the user can select dates\n    // in addition, assigning to these properties on the form names dateFrom and dateTo, respectively\n    PROPERTIES dateFrom = VALUE(dateFrom), dateTo = VALUE(dateTo) \n\n    OBJECTS r = Region PANEL // adding a region object, by which customers will be filtered\n    // adding the property region name, at the same time marking that when editing it, the dialog for choosing \n    // a region should be called, the selected value of which will be used as the current value\n    PROPERTIES(r) name SELECTOR \n\n    // adding the customers object, specifically not adding a single property so that it is \"invisible\", \n    // but it is needed in order to display customers in columns\n    OBJECTS c = Customer \n                         \n    FILTERS region(c) == r // setting a filter so that customers are only from this region\n\n    // adding a sku object, in the table of which basic information will be displayed\n    OBJECTS s = Sku \n    // adding the sku name and making it READONLY, otherwise the user will be able to change the product names\n    // directly in the report\n    PROPERTIES(s) name READONLY \n\n    // adding a property in which the quantity of ordered sku by customers for a certain date interval is calculated\n    PROPERTIES = \n        [GROUP SUM quantity(OrderDetail d) IF date(d) >= dateFrom AND date(d) <= dateTo BY sku(d), customer(d)](s, c)\n        COLUMNS (c) // marking that customers should be displayed in columns, with the same number of columns \n                    // as there will be rows in the customer object, taking into account filters, and they will be\n                    // displayed in the same order\n        HEADER name(c) // setting that the name of the customer will be used as the column heading\n;\n"})})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return s}});var t=r(67294);let i={},o=t.createContext(i);function s(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);