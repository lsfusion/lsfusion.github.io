(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[3951],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return m},kt:function(){return k}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(a),k=r,N=c["".concat(l,".").concat(k)]||c[k]||d[k]||i;return a?n.createElement(N,p(p({ref:t},m),{},{components:a})):n.createElement(N,p({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var s=2;s<i;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},15211:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var n=a(22122),r=a(19756),i=(a(67294),a(3905)),p={title:"Property options"},o=void 0,l={unversionedId:"Property_options",id:"Property_options",isDocsHomePage:!1,title:"Property options",description:"When a property is declared in the = statement a set of property options can be specified at the end of the declaration",source:"@site/docs/Property_options.md",sourceDirName:".",slug:"/Property_options",permalink:"/next/Property_options",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Property_options.md",version:"current",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"7/7/2021",frontMatter:{title:"Property options"},sidebar:"learn",previous:{title:"Comparison operators",permalink:"/next/Comparison_operators"},next:{title:"Overview",permalink:"/next/ACTION_statement"}},s=[{value:"Syntax",id:"syntax",children:[]},{value:"Description and parameters",id:"description-and-parameters",children:[{value:"Interactive view block",id:"interactive-view-block",children:[]},{value:"<code>DESIGN</code> statement default values block",id:"design-statement-default-values-block",children:[]}]},{value:"Examples",id:"examples",children:[]}],m={toc:s};function d(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When a ",(0,i.kt)("a",{parentName:"p",href:"/next/Properties"},"property")," is declared in the ",(0,i.kt)("a",{parentName:"p",href:"/next/=_statement"},(0,i.kt)("inlineCode",{parentName:"a"},"=")," statement")," a set of ",(0,i.kt)("em",{parentName:"p"},"property options")," can be specified at the end of the declaration "),(0,i.kt)("h2",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,"Options are listed one after another in arbitrary order, separated by spaces or line feeds:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"propertyOption1 ... propertyOptionN\n")),(0,i.kt)("p",null,"The following set of options is supported (the syntax of each option is indicated on a separate line):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"IN groupName\nviewType\nON eventType { actionOperator }\nCHANGEKEY key [SHOW | HIDE]\nMATERIALIZED\nTABLE tableName\nINDEXED\nNONULL [DELETE] eventClause\nAUTOSET\nCHARWIDTH width [FLEX | NOFLEX]\nREGEXP rexpr [message] \nECHO\nDEFAULTCOMPARE [compare]\n")),(0,i.kt)("h2",{id:"description-and-parameters"},"Description and parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"IN groupName")),(0,i.kt)("p",{parentName:"li"},"  Specifying the ",(0,i.kt)("a",{parentName:"p",href:"/next/Groups_of_properties_and_actions"},"group of properties and actions")," to which the property belongs. If the option is not specified, then the property will belong by default to the group ",(0,i.kt)("inlineCode",{parentName:"p"},"System.private"),"."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"groupName")),(0,i.kt)("p",{parentName:"li"},"  Group name. ",(0,i.kt)("a",{parentName:"p",href:"/next/IDs#cid"},"Compound ID"),"."))))),(0,i.kt)("a",{className:"lsdoc-anchor",id:"persistent"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"MATERIALIZED")),(0,i.kt)("p",{parentName:"li"},"  Keyword marking the property as ",(0,i.kt)("a",{parentName:"p",href:"/next/Materializations"},"materialized"),". These properties will be stored in the database's ",(0,i.kt)("a",{parentName:"p",href:"/next/Tables"},"table")," fields.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"TABLE tableName")),(0,i.kt)("p",{parentName:"li"},"  Specifies the ",(0,i.kt)("a",{parentName:"p",href:"/next/Tables"},"table"),' where the property will be stored. The number of table keys must be equal to the number of property arguments, and the argument classes must match the table key classes. If no table is specified, the property will automatically be placed in the "nearest" existing table in the system.'),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"tableName")),(0,i.kt)("p",{parentName:"li"},"  Table name. Composite ID. "))))),(0,i.kt)("a",{className:"lsdoc-anchor",id:"indexed"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"INDEXED")),(0,i.kt)("p",{parentName:"li"},"  Keyword. If specified, an ",(0,i.kt)("a",{parentName:"p",href:"/next/Indexes"},"index")," by this property is created. Similar to using the ",(0,i.kt)("a",{parentName:"p",href:"/next/INDEX_statement"},(0,i.kt)("inlineCode",{parentName:"a"},"INDEX")," statement"),". ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"NONULL [DELETE] eventClause")),(0,i.kt)("p",{parentName:"li"},"  Adds a ",(0,i.kt)("a",{parentName:"p",href:"/next/Simple_constraints"},"definiteness")," constraint. If this constraint is violated as a result of some changes for some objects, either the corresponding message will be displayed, or, if ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE")," is specified, such objects will be deleted."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"DELETE")),(0,i.kt)("p",{parentName:"li"},"  Keyword that, if specified, then when the property becomes ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL"),", objects that are property arguments will be deleted.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"eventClause")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("a",{parentName:"p",href:"/next/Event_description_block"},"Event type description block"),". Describes the event by which the property will be checked for ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL"),"."))))),(0,i.kt)("h3",{id:"interactive-view-block"},"Interactive view block"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"viewType")),(0,i.kt)("p",{parentName:"li"},"  Specifying the type of ",(0,i.kt)("a",{parentName:"p",href:"/next/Interactive_view#property"},"property view")," when added to the form."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GRID")," - table column"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TOOLBAR")," - toolbar"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PANEL")," - panel")),(0,i.kt)("p",{parentName:"li"},"It is similar to specifying the ",(0,i.kt)("inlineCode",{parentName:"p"},"viewType")," option in the ",(0,i.kt)("a",{parentName:"p",href:"/next/Properties_and_actions_block"},"property block")," of the ",(0,i.kt)("a",{parentName:"p",href:"/next/FORM_statement"},(0,i.kt)("inlineCode",{parentName:"a"},"FORM")," statement"),". Thus, if this option is not specified either in the property options or in the property block directly on the form, the ",(0,i.kt)("a",{parentName:"p",href:"/next/Interactive_view#property"},"default view")," of the property display group on the form is used.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ON eventType { actionOperator }")),(0,i.kt)("p",{parentName:"li"},"  Specifying an action that will be the default handler of a certain ",(0,i.kt)("a",{parentName:"p",href:"/next/Form_events"},"form event")," for all the interactive views of this property. Can be overridden in the property block of the ",(0,i.kt)("inlineCode",{parentName:"p"},"FORM")," statement."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"eventType")),(0,i.kt)("p",{parentName:"li"},"  Type of form event. Specified by one of the following options:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CHANGE")," - occurs when the user tries to change the value of a property."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CHANGEWYS")," - occurs when the user tries to change the value of the specified property using a special input mechanism. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GROUPCHANGE")," - occurs when the user tries to change the property value for all objects in the table (group editing).  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EDIT")," - occurs when the user tries to edit the object that is the value of the specified property. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CONTEXTMENU [caption]")," - the user has selected the specified item in the property context menu on the form. If necessary, you can also define the ",(0,i.kt)("inlineCode",{parentName:"li"},"caption")," of this menu item (",(0,i.kt)("a",{parentName:"li",href:"/next/Literals#strliteral"},"string literal"),"). If it is not specified, then, by default, it will be the same as the action caption."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"actionOperator")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("a",{parentName:"p",href:"/next/Action_operators#contextdependent"},"Context-dependent action operator"),". An operator that defines the action executed on an event. You can use the parameters of the property itself as operator parameters."))))),(0,i.kt)("h3",{id:"design-statement-default-values-block"},(0,i.kt)("inlineCode",{parentName:"h3"},"DESIGN")," statement default values block"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"CHARWIDTH width [FLEX | NOFLEX]")),(0,i.kt)("p",{parentName:"li"},"  Specifying the ",(0,i.kt)("a",{parentName:"p",href:"/next/Form_design#valueWidth"},"number of characters")," of the property value that should be visible to the user. Sets the value for the default design, can be overridden in a ",(0,i.kt)("inlineCode",{parentName:"p"},"DESIGN")," statement."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"width")),(0,i.kt)("p",{parentName:"li"},"  Number of characters. Integer literal. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"FLEX"),"  "),(0,i.kt)("p",{parentName:"li"},"  Keyword. If specified, the extension coefficient of the property value is automatically set equal to its base size.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"NOFLEX")),(0,i.kt)("p",{parentName:"li"},"  Keyword. If specified, the extension coefficient of the property value is automatically set equal to zero.")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"REGEXP rexpr [message]")),(0,i.kt)("p",{parentName:"li"},"  Specifying a regular expression to which the property value should correspond after editing. Sets the value for the default design and can be overridden in the ",(0,i.kt)("inlineCode",{parentName:"p"},"DESIGN")," statement."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"rexpr")),(0,i.kt)("p",{parentName:"li"},"  A string literal that describes the regular expression. Rules are similar to the rules ",(0,i.kt)("a",{parentName:"p",href:"http://docs.oracle.com/javase/7/docs/api/java/util/regex/Pattern.html"},"accepted in Java")," .")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"message")),(0,i.kt)("p",{parentName:"li"},"  String literal describing the message that will be shown to the user if they enter a value that does not match the regular expression. If not specified, a default message will be displayed.")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ECHO")),(0,i.kt)("p",{parentName:"li"},"  A keyword that causes asterisk ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," characters to be displayed instead of a property value. Used, for example, for passwords. Can be overridden in the ",(0,i.kt)("inlineCode",{parentName:"p"},"DESIGN")," statement. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"CHANGEKEY key [SHOW | HIDE]")),(0,i.kt)("p",{parentName:"li"},"  Specifies a ",(0,i.kt)("a",{parentName:"p",href:"/next/Form_events#keyboard"},"key combination")," which triggers editing of this property. Sets the value for the default design and can be overridden in the ",(0,i.kt)("inlineCode",{parentName:"p"},"DESIGN")," statement."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"key")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("a",{parentName:"p",href:"/next/Literals#strliteral"},"String literal")," describing the key combination. The method of specifying is similar to the method of specifying a parameter in the Java class method ",(0,i.kt)("a",{parentName:"p",href:"http://docs.oracle.com/javase/7/docs/api/javax/swing/KeyStroke.html#getKeyStroke(java.lang.String)"},"Keystroke.getKeystroke (String)"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"SHOW")),(0,i.kt)("p",{parentName:"li"},"  Keyword. When specified, the key combination will be displayed in the property caption. Used by default.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"HIDE")),(0,i.kt)("p",{parentName:"li"},"  Keyword. When specified, the key combination will not be displayed in the property caption. ")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"DEFAULTCOMPARE [compare]")),(0,i.kt)("p",{parentName:"li"},"  Specifies a ",(0,i.kt)("a",{parentName:"p",href:"/next/Interactive_view#userfilters"},"default filter")," type for the property."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"compare")),(0,i.kt)("p",{parentName:"li"},"  Default filter type. ",(0,i.kt)("a",{parentName:"p",href:"/next/Literals#strliteral"},"String literal"),". Can be one the following values: ",(0,i.kt)("inlineCode",{parentName:"p"},"="),", ",(0,i.kt)("inlineCode",{parentName:"p"},">"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<"),", ",(0,i.kt)("inlineCode",{parentName:"p"},">="),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<="),", ",(0,i.kt)("inlineCode",{parentName:"p"},"!="),", ",(0,i.kt)("inlineCode",{parentName:"p"},"START_WITH"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CONTAINS"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ENDS_WITH"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"LIKE"),". The default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"=")," for all data types except case-insensitive string types, for which the default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"CONTAINS"),". If ",(0,i.kt)("inlineCode",{parentName:"p"},"System.defaultCompareForStringContains")," is enabled, default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"CONTAINS")," for all string data regardless of case sensitivity. Can be overridden in the ",(0,i.kt)("inlineCode",{parentName:"p"},"DESIGN")," statement."))))),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"// property defined by the context-independent DATA property operator\ncost 'Cost' (i) = DATA NUMERIC[12,3] (Item);\n\n// property defined by expression\nweightedSum 'Weighted amount' (a, b) = 2*a + 3*b;\n\n// the caption of this property will be 'diff' and the parameters will be (a, b)\ndiff = a - b;\n\n// property defined by DATA operator with additional property options\nteamName 'Team name' = DATA BPSTRING[30](Team) IN baseGroup TABLE team; \n")))}d.isMDXComponent=!0}}]);