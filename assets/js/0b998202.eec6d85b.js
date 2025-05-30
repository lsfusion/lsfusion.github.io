"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["71295"],{98768:function(e,t,s){s.r(t),s.d(t,{default:()=>d,frontMatter:()=>r,metadata:()=>n,assets:()=>c,toc:()=>l,contentTitle:()=>a});var n=JSON.parse('{"id":"Interactive_view","title":"Interactive view","description":"A form opened in interactive mode is a graphical component with a certain design in which the user can trigger various events and thereby navigate through system objects, view and change property values, execute actions, and so on. Developers can also use an additional set of operators with this view, making it possible to manage the open form.","source":"@site/versioned_docs/version-v5/Interactive_view.md","sourceDirName":".","slug":"/Interactive_view","permalink":"/v5/Interactive_view","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v5/docs/en/Interactive_view.md","tags":[],"version":"v5","lastUpdatedAt":1685108136000,"frontMatter":{"title":"Interactive view"},"sidebar":"learn","previous":{"title":"Form views","permalink":"/v5/Form_views"},"next":{"title":"Form design","permalink":"/v5/Form_design"}}'),o=s("85893"),i=s("50065");let r={title:"Interactive view"},a=void 0,c={},l=[{value:"Object views",id:"objects",level:3},{value:"Object trees",id:"tree",level:3},{value:"Property views",id:"property",level:3},{value:"Filter group",id:"filtergroup",level:3},{value:"Custom filters/orders",id:"userfilters",level:3},{value:"Default objects selection",id:"defaultobject",level:3},{value:"Object operators",id:"objectoperators",level:3},{value:"Selection/editing forms",id:"edtClass",level:3},{value:"Session owner",id:"owner",level:3},{value:"System actions for form/session lifecycle management",id:"sysactions",level:3},{value:"Additional features",id:"extra",level:3},{value:"Language",id:"language",level:3},{value:"Open form",id:"open-form",level:3},{value:"Examples",id:"examples",level:3}];function h(e){let t={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["A form opened in ",(0,o.jsx)(t.em,{children:"interactive"})," mode is a graphical component with a certain ",(0,o.jsx)(t.a,{href:"/v5/Form_design",children:"design"})," in which the user can trigger various ",(0,o.jsx)(t.a,{href:"/v5/Form_events",children:"events"})," and thereby navigate through system objects, view and change ",(0,o.jsx)(t.a,{href:"/v5/Properties",children:"property"})," values, execute ",(0,o.jsx)(t.a,{href:"/v5/Actions",children:"actions"}),", and so on. Developers can also use an ",(0,o.jsx)(t.a,{href:"/v5/Form_operators",children:"additional set of operators"})," with this view, making it possible to manage the open form."]}),"\n",(0,o.jsx)(t.h3,{id:"objects",children:"Object views"}),"\n",(0,o.jsxs)(t.p,{children:["In the interactive view, object groups can be displayed in a table. The rows in the table are object collections, and the columns are properties. The records displayed in the table and their order are determined by the current ",(0,o.jsx)(t.a,{href:"/v5/Form_structure#filters",children:"filters"})," and ",(0,o.jsx)(t.a,{href:"/v5/Form_structure#sort",children:"orders"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/v5/Form_structure#currentObject",children:"Current values"})," of objects can change either as a result of an action created using the special search operator ",(0,o.jsxs)(t.a,{href:"/v5/Search_SEEK",children:["(",(0,o.jsx)(t.code,{children:"SEEK"}),")"]}),", or as a result of a change to the current row, if an object group is displayed in a table."]}),"\n",(0,o.jsx)(t.p,{children:"When an object group is displayed in a table, the number of rows (object collections) displayed can either be determined automatically based on the height of the visible part of the table, or specified by the developer explicitly when creating the form."}),"\n",(0,o.jsx)(t.h3,{id:"tree",children:"Object trees"}),"\n",(0,o.jsxs)(t.p,{children:["The platform also allows to display multiple object groups in one table simultaneously. This happens similarly to the ",(0,o.jsx)(t.a,{href:"/v5/Static_view#hierarchy",children:"object group hierarchy"})," in a static view, i.e. if we have two groups ",(0,o.jsx)(t.code,{children:"A"})," and ",(0,o.jsx)(t.code,{children:"B"}),' then, in the "joined" table, the first object collection from ',(0,o.jsx)(t.code,{children:"A"})," is displayed first, then all object collections from ",(0,o.jsx)(t.code,{children:"B"})," (as filtered), then a second object collection from ",(0,o.jsx)(t.code,{children:"A"}),", then again all the object collections from ",(0,o.jsx)(t.code,{children:"B"})," and so on. In this case, it is highly desirable that the filters for ",(0,o.jsx)(t.code,{children:"B"})," used all objects from ",(0,o.jsx)(t.code,{children:"A"}),", since otherwise combining these groups into a single tree doesn't make sense. Initially, when a form is opened in the table, only objects of the topmost object group are displayed, but at the same time, a special column is created on the left of the table, using which the user can open nodes on his own and thus view only objects of interest in the lower object groups. Another function of this created column is to demonstrate the nesting of nodes by tabulating the elements inside this column (this allows the user to better understand what level of the hierarchy he is currently at)."]}),"\n",(0,o.jsx)("a",{className:"lsdoc-anchor",id:"treegroup"}),"\n",(0,o.jsxs)(t.p,{children:["Object trees also can be used to display hierarchical data (such as classifiers). In this case, the descendants of the object collection of a group in the tree can be not only object collections of lower groups but also object collections of the same group (such an object group shall be called ",(0,o.jsx)(t.em,{children:"hierarchical"}),'). To determine these child object collections in a hierarchical object group, it is necessary to define an additional filter for it \u2013 which, unlike regular filters, can refer not only to the values of the filtered object collections but also to the values of the "upper in the tree" object collection (the same approach is used in the ',(0,o.jsx)(t.a,{href:"/v5/Recursion_RECURSION",children:"recursion"}),' operator). It is highly desirable that the hierarchical filter uses all the values of the upper object collections, since otherwise, as with filters between different groups of objects, creating such a tree doesn\'t make sense. Initially, it is assumed that all values of the "upper in the tree" object collection are ',(0,o.jsx)(t.code,{children:"NULL"}),"."]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsx)(t.p,{children:"In the current platform implementation, hierarchical groups allow only trees to be displayed (not directed graphs). Accordingly, it is allowed to use only values of the upper object collections and properties that take lower (filtered) values of objects as input for a hierarchical filter (so that it is guaranteed that the same tree node cannot be reached in different ways)"})}),"\n",(0,o.jsx)(t.p,{children:'The properties of different object groups in the tree are arranged in columns under each other, that is, the first column displays the first properties of each object group, the second column displays the second ones, and so on. The total number of tree columns is determined by the last group of objects on the tree (all "extra" properties of the upper groups are simply ignored).'}),"\n",(0,o.jsx)(t.h3,{id:"property",children:"Property views"}),"\n",(0,o.jsxs)(t.p,{children:["Any property or action can be displayed on a form in one of the following ",(0,o.jsx)(t.em,{children:"views"}),":"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.em,{children:"Panel"})," (",(0,o.jsx)(t.code,{children:"PANEL"}),"): a separate component that displays a property caption and this property value for the current values of the form objects."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.em,{children:"Toolbar"})," (",(0,o.jsx)(t.code,{children:"TOOLBAR"}),"): similar to a panel, but this component has a different default location (immediately below the table), and if the table to which a toolbar belongs is hidden then the toolbar is hidden with it."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.em,{children:"table column"})," (",(0,o.jsx)(t.code,{children:"GRID"}),"): a separate column in the table that displays the property values for all object collections (rows) in the table."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["For each object group, you can specify which ",(0,o.jsx)(t.em,{children:"default view"})," the properties of this group will be displayed in (by default, this view is a table column). If the property has no parameters (that is, it does not have a display group), it is displayed in a panel. Actions are always displayed in a panel by default."]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsx)(t.p,{children:"For the remainder of the section, the behavior of properties and actions is exactly the same and so we will use only the term property (behavior is absolutely identical for actions)."})}),"\n",(0,o.jsx)(t.p,{children:"If necessary, the developer can explicitly specify which view a property should use."}),"\n",(0,o.jsx)(t.p,{children:"If at any point there are no properties displayed in the table for the object group, the table is automatically hidden."}),"\n",(0,o.jsxs)(t.p,{children:["By default, the caption of each property on the form is the title of the property itself. If necessary, the developer can specify a different caption, or, if you need even more flexibility, use a property as a caption. This caption property can receive ",(0,o.jsx)(t.a,{href:"/v5/Form_structure#groupcolumns",children:"upper"})," objects of the displayed property as input. It is also worth noting that if ",(0,o.jsx)(t.a,{href:"/v5/Form_structure#groupcolumns",children:"groups-in-columns"})," are defined for the property, then it is desirable to have different captions for the created columns (in order to distinguish them somehow): in this case, it is recommended to use a property that receives all (!) objects of the defined group-in-columns as input."]}),"\n",(0,o.jsx)(t.p,{children:"In addition to the captions, you can define colors (both the background color and the text color) for each property view on a form, as well as a condition that needs to be met for the property to be displayed. Like the caption, each of these parameters is defined using some property."}),"\n",(0,o.jsx)(t.h3,{id:"filtergroup",children:"Filter group"}),"\n",(0,o.jsxs)(t.p,{children:["In order to provide the user with an interface for choosing filters to apply, they can be combined into ",(0,o.jsx)(t.em,{children:"filter groups"}),". For each of these groups, a special component will be created on the form: the user can use it to select one filter from the group as the current active filter. If several filters in one group are applied to different object groups, then the component will be displayed for the last of them."]}),"\n",(0,o.jsx)(t.p,{children:"The developer can specify a name for each filter group which can be used to access it in the future (for example, in form design)."}),"\n",(0,o.jsx)(t.h3,{id:"userfilters",children:"Custom filters/orders"}),"\n",(0,o.jsx)(t.p,{children:"The user can change existing orders or add their own, as well as add their own filters using the corresponding interfaces:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Orders \u2013 by double-clicking on the column heading."}),"\n",(0,o.jsx)(t.li,{children:"Filters \u2013 by using the corresponding button under the table for each object group. By default, the filter is set to the active property in the table, and filters it for equality to the entered value (for all types except case-insensitive string types, where the filter is set to include the entered string). If necessary, the developer can specify the default filtering type explicitly by using the corresponding option."}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"defaultobject",children:"Default objects selection"}),"\n",(0,o.jsxs)(t.p,{children:["In the interactive form view, object group filters can change as a result of various user actions (for example, changing the upper objects of these filters, selecting filters in the filter group, etc.), after which the ",(0,o.jsx)(t.a,{href:"/v5/Form_structure#currentObject",children:"current"})," objects may no longer meet the conditions of the new filters. Also, when ",(0,o.jsx)(t.a,{href:"/v5/Open_form",children:"a form is opened"}),", some objects may not be ",(0,o.jsx)(t.a,{href:"/v5/Open_form#params",children:"passed"})," or may be passed equal to ",(0,o.jsx)(t.code,{children:"NULL"}),". In both of these cases, it is necessary to change the current objects, to some current ",(0,o.jsx)(t.em,{children:"default objects"}),". The platform provides several options for selecting new current objects:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["First (",(0,o.jsx)(t.code,{children:"FIRST"}),") - the first object collection (in accordance with the current order)"]}),"\n",(0,o.jsxs)(t.li,{children:["Last (",(0,o.jsx)(t.code,{children:"LAST"}),") \u2013 last object collection."]}),"\n",(0,o.jsxs)(t.li,{children:["Previous (",(0,o.jsx)(t.code,{children:"PREV"}),") \u2013 the previous object collection (or as close to it as possible)."]}),"\n",(0,o.jsxs)(t.li,{children:["Undefined (",(0,o.jsx)(t.code,{children:"NULL"}),") \u2013 ",(0,o.jsx)(t.code,{children:"NULL"})," values collection."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["If none of these options is explicitly specified, the platform will try to determine whether the permanent filters in the group of objects are a) mutually exclusive for different values of the upper objects (if any), and/or b) the filter selects a very small percentage of the total number of objects of the specified classes. In both of these cases, it makes no sense to search for the previous object and, by default, the first object is selected (",(0,o.jsx)(t.code,{children:"FIRST"}),"); in all other cases, the previous object (",(0,o.jsx)(t.code,{children:"PREV"}),")."]}),"\n",(0,o.jsxs)(t.admonition,{type:"info",children:[(0,o.jsxs)(t.p,{children:["It is worth noting that the selection of objects by default is pretty the same as the ",(0,o.jsx)(t.a,{href:"/v5/Search_SEEK",children:"object search"})," operation, where the search objects are:"]}),(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["for type ",(0,o.jsx)(t.code,{children:"PREV"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"on opening a form: either the passed objects, or, if there are none, the last used objects for the form object class."}),"\n",(0,o.jsx)(t.li,{children:"in other cases: the previous current object values"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["for other types","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"on opening the form - passed objects"}),"\n",(0,o.jsx)(t.li,{children:"in other cases \u2013 an empty object collection"}),"\n"]}),"\n"]}),"\n"]}),(0,o.jsxs)(t.p,{children:["Search direction is determined by the object's default type (",(0,o.jsx)(t.code,{children:"PREV"})," here is equivalent to ",(0,o.jsx)(t.code,{children:"FIRST"}),")."]})]}),"\n",(0,o.jsx)(t.h3,{id:"objectoperators",children:"Object operators"}),"\n",(0,o.jsx)(t.p,{children:"When adding properties to a form, you can use a predefined set of operators that implement the most common scenarios for working with objects instead of using specific properties (thus avoiding the need to create and name these properties outside the form each time):"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Object value (",(0,o.jsx)(t.code,{children:"VALUE"}),") \u2013 for a form object of ",(0,o.jsx)(t.a,{href:"/v5/Built-in_classes",children:"built-in class"})," , a special property with one argument will be added which displays the current object value and allows the user to change it. For ",(0,o.jsx)(t.a,{href:"/v5/User_classes",children:"custom classes"}),", a property will be added which displays the object ID in the database; when you try to change it, it shows a dialog with a list of objects of that class. The selected value will be used as the current value of the object on the form."]}),"\n",(0,o.jsxs)(t.li,{children:["Create object (",(0,o.jsx)(t.code,{children:"NEW"}),") \u2013 adds an action without arguments, which ",(0,o.jsx)(t.a,{href:"/v5/New_object_NEW",children:"creates"})," an object of the class of the passed form object (or the class explicitly specified by the developer), after which it automatically makes this object current. If the class has descendants, the user will be shown a dialog where he can select specific child class. If any filters are applied to the form object, for which the object is created, the system will try to ",(0,o.jsx)(t.a,{href:"/v5/Property_change_CHANGE",children:"change"})," the newly created object's properties so that it meets these filter conditions (as a rule, for created objects, a default value of the class of each filter's value is written to that filter)"]}),"\n",(0,o.jsxs)(t.li,{children:["Edit object (",(0,o.jsx)(t.code,{children:"EDIT"}),") \u2013 adds an action with one argument, which calls the ",(0,o.jsx)(t.code,{children:"System.formEdit"})," action (which, in turn, open the default ",(0,o.jsx)(t.a,{href:"#edtClass",children:"edit form"})," for the edited object class)."]}),"\n",(0,o.jsxs)(t.li,{children:["Create and edit an object (",(0,o.jsx)(t.code,{children:"NEWEDIT"}),") \u2013 adds an action without arguments which creates an object of the form object class, calls the edit object action (",(0,o.jsx)(t.code,{children:"EDIT"}),"), and if the input is not ",(0,o.jsx)(t.a,{href:"/v5/Value_input#result",children:"canceled"}),", sets the added object as current."]}),"\n",(0,o.jsxs)(t.li,{children:["Delete object (",(0,o.jsx)(t.code,{children:"DELETE"}),") \u2013 adds an action with one argument which deletes the current object."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"You can also specify options for the last four operators (ignored for all other actions):"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/v5/New_session_NEWSESSION_NESTEDSESSION",children:"New Session"})," (",(0,o.jsx)(t.code,{children:"NEWSESSION"}),") \u2013 in this case, the action added to the form will be executed in a new session. When opening forms in a new session, it is important to remember that changes made in the current session (form) will not be visible. Thus, this mechanism is only recommended if the form is opened from a form in which the user cannot change anything, or if the properties and actions of the two forms do not intersect in any way. Note that when the operator is used to create a new object (",(0,o.jsx)(t.code,{children:"NEW"}),") in a new session, the object is not only created but also edited (",(0,o.jsx)(t.code,{children:"NEWEDIT"}),") (otherwise, the session would immediately close and your changes would be lost)."]}),"\n",(0,o.jsxs)(t.li,{children:["Nested Session (",(0,o.jsx)(t.code,{children:"NESTEDSESSION"}),") \u2013 the action will be executed in a new nested session. As with a new session, ",(0,o.jsx)(t.code,{children:"NEW"})," is replaced by ",(0,o.jsx)(t.code,{children:"NEWEDIT"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"edtClass",children:"Selection/editing forms"}),"\n",(0,o.jsxs)(t.p,{children:["For each form, you can specify that it is the default form for viewing/editing objects of a given class. In this case, this form will be opened when you call actions created using the operators for object operations (create/edit an object). The same form will be opened when the corresponding  ",(0,o.jsx)(t.a,{href:"/v5/Open_form#form",children:"form selection"})," option is used in the form opening operator."]}),"\n",(0,o.jsxs)(t.p,{children:["If list/edit form is not defined for a class, the platform will create one automatically. This form will consist of one object of the class, along with all properties matching the class and belonging to the ",(0,o.jsx)(t.code,{children:"System.base"})," ",(0,o.jsx)(t.a,{href:"/v5/Groups_of_properties_and_actions",children:"property group"}),". Also, actions of ",(0,o.jsx)(t.a,{href:"#objectoperators",children:"creating, editing and deleting"})," an object in a ",(0,o.jsx)(t.a,{href:"#objectoperators",children:"new session"})," will be automatically added to the form, along with the ",(0,o.jsx)(t.a,{href:"#objectoperators",children:"object value"})," property if there are no properties from the ",(0,o.jsx)(t.code,{children:"System.id"}),' property group corresponding to the class of the object (that is, no "ID" of the object has been added to the form).']}),"\n",(0,o.jsx)(t.h3,{id:"owner",children:"Session owner"}),"\n",(0,o.jsxs)(t.p,{children:["Since a form is opened by default in the current session, it may not always be safe to apply/cancel changes to this session: for example, the changes made in other forms may accidentally be applied. To avoid such situations, the platform has the concept of a ",(0,o.jsx)(t.em,{children:"session owner"})," \u2013 a form which is responsible for managing the life cycle of the session (for example, applying / canceling changes). By default, it is considered that a form is the session owner if the session did not have any other owner when the form was ",(0,o.jsx)(t.a,{href:"/v5/In_an_interactive_view_SHOW_DIALOG",children:"opened"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["To implement the mechanism for working with session owners the platform uses a numerical ",(0,o.jsx)(t.a,{href:"/v5/Data_properties_DATA#local",children:"local"})," property called ",(0,o.jsx)(t.code,{children:"System.sessionOwners"}),". Accordingly, this property is incremented by ",(0,o.jsx)(t.code,{children:"1"})," when you open a form and decremented by ",(0,o.jsx)(t.code,{children:"1"}),' when you close it. Thus, it shows the nesting depth of the "form opening stack", and is ',(0,o.jsx)(t.code,{children:"NULL"})," if the session has no owner and not ",(0,o.jsx)(t.code,{children:"NULL"})," otherwise."]}),"\n",(0,o.jsx)(t.p,{children:"If necessary, the developer can explicitly specify when opening a form that this form is the owner of the session that it uses."}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:['Session ownership only affects the display / behavior of system actions for managing the life cycle of a form / session. When using the remaining actions, it is recommended that the developer should consider the risk of applying the "wrong" changes by himself (and, for example, use the mentioned above ',(0,o.jsx)(t.code,{children:"System.sessionOwners"})," property)."]})}),"\n",(0,o.jsx)(t.h3,{id:"sysactions",children:"System actions for form/session lifecycle management"}),"\n",(0,o.jsx)(t.p,{children:"The following system actions are automatically added to any form (their names are specified in brackets):"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Refresh (",(0,o.jsx)(t.code,{children:"System.formRefresh"}),") - updates the current state of the form, re-reading all the information from the database."]}),"\n",(0,o.jsxs)(t.li,{children:["Save (",(0,o.jsx)(t.code,{children:"System.formApply"}),") - saves the changes made on the form to the database."]}),"\n",(0,o.jsxs)(t.li,{children:["Cancel (",(0,o.jsx)(t.code,{children:"System.formCancel"}),") - cancels all changes made on the ",(0,o.jsx)(t.em,{children:"form"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["OK (",(0,o.jsx)(t.code,{children:"System.formOk"}),") \u2013 closes the current form and, if the form is the session owner, applies the changes to the database."]}),"\n",(0,o.jsxs)(t.li,{children:["Close (",(0,o.jsx)(t.code,{children:"System.formClose"}),") - closes the current ",(0,o.jsx)(t.em,{children:"form"})," and does nothing with the changes."]}),"\n",(0,o.jsxs)(t.li,{children:["Drop (",(0,o.jsx)(t.code,{children:"System.formDrop"}),") \u2013 closes the current form and returns ",(0,o.jsx)(t.code,{children:"NULL"})," as the selected object."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"By default, these system actions have the following visibility conditions:"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Action"}),(0,o.jsx)(t.th,{children:"Condition"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Refresh"}),(0,o.jsx)(t.td,{children:"Always"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Save, Cancel"}),(0,o.jsxs)(t.td,{children:["If the form is the owner and actions that change the current session can be called on the form. Cancel may not be shown if the platform determines that canceling the changes is guaranteed to lead to a change of the ",(0,o.jsx)(t.a,{href:"/v5/Open_form#params",children:"initial values"})," of form objects (i.e., selecting other objects)"]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"OK, Close"}),(0,o.jsxs)(t.td,{children:["If the form was opened ",(0,o.jsx)(t.a,{href:"/v5/In_an_interactive_view_SHOW_DIALOG#flow",children:"synchronously"})]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Drop"}),(0,o.jsxs)(t.td,{children:["If the form is opened synchronously, returns a value and allows ",(0,o.jsx)(t.code,{children:"NULL"})," values to be passed"]})]})]})]}),"\n",(0,o.jsxs)(t.p,{children:["If necessary, all these actions can be shown/hidden by removing the corresponding components from the ",(0,o.jsx)(t.a,{href:"/v5/Form_design",children:"form design"})," and/or using the corresponding options in the ",(0,o.jsx)(t.a,{href:"/v5/Open_form",children:"open form"})," operator."]}),"\n",(0,o.jsx)(t.h3,{id:"extra",children:"Additional features"}),"\n",(0,o.jsx)(t.p,{children:"You can specify an image file which will be displayed as the form's icon."}),"\n",(0,o.jsxs)(t.p,{children:["Also, if necessary, you can enable ",(0,o.jsx)(t.em,{children:"automatic update"})," mode for a form: the ",(0,o.jsx)(t.code,{children:"System.formRefresh"})," action will then be executed for the form at a specified interval."]}),"\n",(0,o.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,o.jsxs)(t.p,{children:["All of the above options, as well as defining the form structure, can be done using the ",(0,o.jsxs)(t.a,{href:"/v5/FORM_statement",children:[(0,o.jsx)(t.code,{children:"FORM"})," statement"]}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"open-form",children:"Open form"}),"\n",(0,o.jsxs)(t.p,{children:["To display the form in the interactive view, the corresponding ",(0,o.jsx)(t.a,{href:"/v5/Open_form",children:"open form"})," operator is used in ",(0,o.jsx)(t.a,{href:"/v5/In_an_interactive_view_SHOW_DIALOG",children:"interactive view"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lsf",children:"date = DATA DATE (Order);\nFORM showForm\n    OBJECTS dateFrom = DATE, dateTo = DATE PANEL\n    PROPERTIES VALUE(dateFrom), VALUE(dateTo)\n\n    OBJECTS o = Order\n    FILTERS date(o) >= dateFrom, date(o) <= dateTo\n;\n\ntestShow ()  {\n    SHOW showForm OBJECTS dateFrom = 2010_01_01, dateTo = 2010_12_31;\n\n    NEWSESSION {\n        NEW s = Sku {\n            SHOW sku OBJECTS s = s FLOAT;\n        }\n    }\n}\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lsf",children:"FORM selectSku\n    OBJECTS s = Sku\n    PROPERTIES(s) id\n;\n\ntestDialog  {\n    DIALOG selectSku OBJECTS s INPUT DO {\n        MESSAGE 'Selected sku : ' + id(s);\n    }\n}\n\nsku = DATA Sku (OrderDetail);\nidSku (OrderDetail d) = id(sku(d));\n\nchangeSku (OrderDetail d)  {\n    DIALOG selectSku OBJECTS s = sku(d) CHANGE;\n\n    //equivalent to the first option\n    DIALOG selectSku OBJECTS s = sku(d) INPUT NULL CONSTRAINTFILTER DO {\n        sku(d) <- s;\n    }\n}\n"})})]})}function d(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},50065:function(e,t,s){s.d(t,{Z:function(){return a},a:function(){return r}});var n=s(67294);let o={},i=n.createContext(o);function r(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);