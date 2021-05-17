(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[48399],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},36982:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l},default:function(){return c}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={title:"DIALOG operator"},p={unversionedId:"DIALOG_operator",id:"DIALOG_operator",isDocsHomePage:!1,title:"DIALOG operator",description:"The DIALOG\xa0operator creates an\xa0action that\xa0opens a form\xa0in an interactive view in dialog mode.",source:"@site/docs/DIALOG_operator.md",sourceDirName:".",slug:"/DIALOG_operator",permalink:"/next/DIALOG_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/DIALOG_operator.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",frontMatter:{title:"DIALOG operator"},sidebar:"learn",previous:{title:"DELETE operator",permalink:"/next/DELETE_operator"},next:{title:"EMAIL operator",permalink:"/next/EMAIL_operator"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"<em>Input options</em>",id:"input-options",children:[]},{value:"<em>Additional options</em>",id:"additional-options",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:l};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"DIALOG"),"\xa0operator creates an\xa0",(0,o.kt)("a",{parentName:"p",href:"/next/Actions"},"action")," that\xa0",(0,o.kt)("a",{parentName:"p",href:"/next/In_an_interactive_view_SHOW_DIALOG_"},"opens a form"),"\xa0in an interactive view in ",(0,o.kt)("a",{parentName:"p",href:"/next/In_an_interactive_view_SHOW_DIALOG_#dialog"},"dialog")," mode.\xa0"),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"DIALOG name\n[OBJECTS objName1 [= expr1] [NULL] [inputOptions1], ..., objNameN [= exprN] [NULL] [inputOptionsN]]\n[formActionOptions]\n[DO actionOperator [ELSE elseActionOperator]]\n")),(0,o.kt)("p",null,"When opening the list/edit form, the syntax is slightly different:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"DIALOG classFormType className\n[= expr] [NULL] [inputOptions]\n[formActionOptions]\n[DO actionOperator [ELSE elseActionOperator]]\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"inputOptions")," \u2013 object options that determine whether the last current values of this object should be returned after the form is closed and what to do next with these values (defined with one of the following syntaxes):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"INPUT [alias] [NULL]\nCHANGE [= changeExpr] [NOCONSTRAINTFILTER] [alias] [NULL]\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"formActionOptions")," - additional\xa0options for this action. They can be added one by one in any order:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"windowType\nMANAGESESSION | NOMANAGESESSION\nCANCEL | NOCANCEL\nNEWSESSION | NESTEDSESSION\nREADONLY\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"DIALOG"),"\xa0operator creates an action that opens the specified form. When opening a form in the\xa0",(0,o.kt)("strong",{parentName:"p"},"OBJECTS"),"\xa0block you can ",(0,o.kt)("a",{parentName:"p",href:"/next/Open_form#params"},"specify"),"\xa0",(0,o.kt)("a",{parentName:"p",href:"/next/Value_input#initial"},"initial values")," for the\xa0",(0,o.kt)("a",{parentName:"p",href:"/next/Form_structure"},"form objects")," and also return the last current values to the specified parameters and execute the ",(0,o.kt)("strong",{parentName:"p"},"DO")," action which will process the received values in case the input has not been cancelled."),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"name")),(0,o.kt)("p",null,"Form name.\xa0",(0,o.kt)("a",{parentName:"p",href:"/next/IDs#cid-broken"},"Composite ID"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"classFormType")),(0,o.kt)("p",null,"Keyword. Determines which form to open:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"LIST")," \u2013 list form"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"EDIT")," \u2013 edit form")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"className")),(0,o.kt)("p",null,"The name of the custom class for which a list/edit form should be opened.\xa0",(0,o.kt)("a",{parentName:"p",href:"/next/IDs#cid-broken"},"Composite ID"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"objName1 ... objNameN")),(0,o.kt)("p",null,"Names of form objects for which initial values are specified. ",(0,o.kt)("a",{parentName:"p",href:"/next/IDs#id-broken"},"Simple IDs"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"expr1 ... exprN")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/next/Expression"},"Expressions")," which values determine the initial values for form objects."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"NULL")),(0,o.kt)("p",null,"Specifies that ",(0,o.kt)("strong",{parentName:"p"},"NULL")," values can be passed. This option is automatically enabled if the object returns a value."),(0,o.kt)("h3",{id:"input-options"},(0,o.kt)("em",{parentName:"h3"},"Input options")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"INPUT")),(0,o.kt)("p",null,"Keyword. If used, then the last current value of the object of the opened form will be written to the specified local parameter and, if necessary, to the specified property."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"alias")),(0,o.kt)("p",null,"The name of the local parameter to which the input result is written.\xa0",(0,o.kt)("a",{parentName:"p",href:"/next/IDs#id-broken"},"Simple ID"),". If the name is not specified, then the name of the form object will be used as the parameter name."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"CHANGE")),(0,o.kt)("p",null,"A keyword indicating that in addition to the value input the result needs to be written to the specified property. Also by default, this option sets an additional filter for the object values on the opened form so that\xa0when selecting an object and changing the specified property to the value of this object, none of the existing ",(0,o.kt)("a",{parentName:"p",href:"/next/Constraints"},"constraints")," are violated.\xa0"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"NOCONSTRAINTFILTER")),(0,o.kt)("p",null,"If used, no additional filter for constraint compliance is set."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"changeExpr")),(0,o.kt)("p",null,"An ",(0,o.kt)("a",{parentName:"p",href:"/next/Expression"},"expression")," that determines the property to which the input result is written.\xa0By default, the property specified as the initial object value is used."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"NULL")),(0,o.kt)("p",null,"A keyword that determines whether the user can select ",(0,o.kt)("strong",{parentName:"p"},"NULL"),' as the return value (using the special "Drop" action \u2013\xa0',(0,o.kt)("strong",{parentName:"p"},"System.formDrop"),"). If not used, will be enabled if and only if the ",(0,o.kt)("strong",{parentName:"p"},"CHANGE")," option is specified."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"actionOperator")),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"/next/Action_operator#contextdependent"},"context-dependent action operator")," that is executed if the input was completed successfully."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"elseActionOperator")),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"/next/Action_operator#contextdependent"},"context-dependent action operator")," that is executed if the input was cancelled. Parameters added to the input block (INPUT) cannot be used as parameters."),(0,o.kt)("h3",{id:"additional-options"},(0,o.kt)("em",{parentName:"h3"},"Additional options")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"windowType")),(0,o.kt)("p",null,"Method of\xa0",(0,o.kt)("a",{parentName:"p",href:"/next/In_an_interactive_view_SHOW_DIALOG_#location"},"the form layout"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"DOCKED"),"\xa0- as a tab."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"FLOAT"),"\xa0-\xa0as a window. Used by default.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"MANAGESESSION")," | ",(0,o.kt)("em",{parentName:"p"},"NOMANAGESESSION")),(0,o.kt)("p",null,"Keyword. Determines whether or not the\xa0created form is considered to be the ",(0,o.kt)("a",{parentName:"p",href:"/next/Interactive_view#session-broken"},"session owner"),"\xa0(if so, the corresponding buttons for managing the session will be shown on the form in interactive mode). By default, the platform tries to determine which mode to use ",(0,o.kt)("a",{parentName:"p",href:"/next/Interactive_view#sysactions"},"automatically"),"\xa0depending on the context."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"CANCEL")," | ",(0,o.kt)("em",{parentName:"p"},"NOCANCEL")),(0,o.kt)("p",null,'Keyword. Determines whether or not to show the "Cancel" system action (',(0,o.kt)("strong",{parentName:"p"},"System.formCancel"),")**\xa0**on the form.\xa0By default, the platform tries to determine which mode to use ",(0,o.kt)("a",{parentName:"p",href:"/next/Interactive_view#sysactions"},"automatically"),"\xa0depending on context."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"NEWSESSION | NESTEDSESSION")),(0,o.kt)("p",null,"\xa0 \xa0 \xa0 \xa0 Keyword. Determines that the form will be opened in a new (nested) session. By default, the form is opened in the current session."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"READONLY")),(0,o.kt)("p",null,"Keyword. If specified, the form is opened in ",(0,o.kt)("a",{parentName:"p",href:"/next/In_an_interactive_view_SHOW_DIALOG_#extra"},"read-only")," mode."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM selectSku\n    OBJECTS s = Sku\n    PROPERTIES(s) id\n;\n\ntestDialog  {\n    DIALOG selectSku OBJECTS s INPUT DO {\n        MESSAGE 'Selected sku : ' + id(s);\n    }\n}\n\nsku = DATA Sku (OrderDetail);\nidSku (OrderDetail d) = id(sku(d));\n\nchangeSku (OrderDetail d)  {\n    DIALOG selectSku OBJECTS s = sku(d) CHANGE;\n\n    //equivalent to the first option\n    DIALOG selectSku OBJECTS s = sku(d) INPUT NULL CONSTRAINTFILTER DO {\n        sku(d) <- s;\n    }\n}\n")))}c.isMDXComponent=!0}}]);