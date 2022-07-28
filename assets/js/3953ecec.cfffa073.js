"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[74286],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=m(n),u=a,N=d["".concat(l,".").concat(u)]||d[u]||c[u]||o;return n?r.createElement(N,i(i({ref:t},s),{},{components:n})):r.createElement(N,i({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43547:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var r=n(83117),a=(n(67294),n(3905));const o={title:"SHOW operator"},i=void 0,p={unversionedId:"SHOW_operator",id:"version-v4/SHOW_operator",title:"SHOW operator",description:"The SHOW operator creates an action that opens a form in interactive view.",source:"@site/versioned_docs/version-v4/SHOW_operator.md",sourceDirName:".",slug:"/SHOW_operator",permalink:"/SHOW_operator",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/SHOW_operator.md",tags:[],version:"v4",lastUpdatedAt:1624461640,formattedLastUpdatedAt:"6/23/2021",frontMatter:{title:"SHOW operator"},sidebar:"version-v4/learn",previous:{title:"SEEK operator",permalink:"/SEEK_operator"},next:{title:"TRY operator",permalink:"/TRY_operator"}},l={},m=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Options",id:"options",level:3},{value:"Examples",id:"examples",level:3}],s={toc:m};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"SHOW")," operator creates an ",(0,a.kt)("a",{parentName:"p",href:"/Actions"},"action")," that ",(0,a.kt)("a",{parentName:"p",href:"/In_an_interactive_view_SHOW_DIALOG"},"opens a form")," in interactive view. "),(0,a.kt)("h3",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW name \n[OBJECTS objName1 = expr1 [NULL], ..., objNameN = exprN [NULL]]\n[formActionOptions] \n")),(0,a.kt)("p",null,"When opening the list/edit form, the syntax is slightly different:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW classFormType className\n= expr [NULL]\n[formActionOptions] \n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"formActionOptions")," is the options for this action. They can be added one by one in any order:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"syncType\nwindowType\nMANAGESESSION | NOMANAGESESSION\nNEWSESSION | NESTEDSESSION\nCANCEL | NOCANCEL\nREADONLY\n")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"SHOW")," operator creates an action that opens the specified form. When opening the form in the ",(0,a.kt)("inlineCode",{parentName:"p"},"OBJECTS")," block, ",(0,a.kt)("a",{parentName:"p",href:"/Open_form#params"},"initial values")," can be specified for ",(0,a.kt)("a",{parentName:"p",href:"/Form_structure"},"Form structure")," form objects."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"name")),(0,a.kt)("p",{parentName:"li"},"  Form name. ",(0,a.kt)("a",{parentName:"p",href:"/IDs#cid"},"Composite ID"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"classFormType")),(0,a.kt)("p",{parentName:"li"},"  Keyword. Determines which form to open:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LIST")," \u2013 list"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"EDIT")," \u2013 edit"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"className")),(0,a.kt)("p",{parentName:"li"},"  The name of the user class whose list/edit form is to be opened. ",(0,a.kt)("a",{parentName:"p",href:"/IDs#cid"},"Composite ID"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"objName1 ... objNameN")),(0,a.kt)("p",{parentName:"li"},"  Names of form objects for which initial values are specified. ",(0,a.kt)("a",{parentName:"p",href:"/IDs#id"},"Simple IDs"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"expr, expr1 ... exprN")),(0,a.kt)("p",{parentName:"li"},"  ",(0,a.kt)("a",{parentName:"p",href:"/Expression"},"Expressions")," which values determine the initial values for form objects.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"NULL")),(0,a.kt)("p",{parentName:"li"},"  Specifies that the values passed may be ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),"."))),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"syncType")),(0,a.kt)("p",{parentName:"li"},"  Determines in which ",(0,a.kt)("a",{parentName:"p",href:"/In_an_interactive_view_SHOW_DIALOG#flow"},"flow control")," mode the operator will work:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"WAIT")," - synchronous. Used by default."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NOWAIT")," - asynchronous."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"windowType")),(0,a.kt)("p",{parentName:"li"},"  Method of ",(0,a.kt)("a",{parentName:"p",href:"/In_an_interactive_view_SHOW_DIALOG#location"},"the form layout"),":"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DOCKED")," \u2013 as a tab. Used by default in asynchronous mode."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FLOAT")," - as a window. Used by default in synchronous mode."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"MANAGESESSION")," | ",(0,a.kt)("inlineCode",{parentName:"p"},"NOMANAGESESSION")),(0,a.kt)("p",{parentName:"li"},"  Keywords. Determine whether or not the created form ",(0,a.kt)("a",{parentName:"p",href:"/Interactive_view#owner"},"is considered to be the owner of the session")," (if so, in interactive mode the corresponding buttons for managing the session will be shown on the form). By default, the platform tries to determine which mode to use ",(0,a.kt)("a",{parentName:"p",href:"/Interactive_view#sysactions"},"automatically")," depending on the context.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"CANCEL")," | ",(0,a.kt)("inlineCode",{parentName:"p"},"NOCANCEL")),(0,a.kt)("p",{parentName:"li"},'  Keywords. Determine whether or not to show the "Cancel" system action (',(0,a.kt)("inlineCode",{parentName:"p"},"System.formCancel"),") on the form. By default, the platform tries to determine which mode to use ",(0,a.kt)("a",{parentName:"p",href:"/Interactive_view#sysactions"},"automatically")," depending on context.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"NEWSESSION")," | ",(0,a.kt)("inlineCode",{parentName:"p"},"NESTEDSESSION")),(0,a.kt)("p",{parentName:"li"},"  Keywords. Determine that the form will be opened in a new (nested) session. By default, the form is opened in the current session.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"READONLY")),(0,a.kt)("p",{parentName:"li"},"  Keyword. If specified, the form is opened in ",(0,a.kt)("a",{parentName:"p",href:"/In_an_interactive_view_SHOW_DIALOG#extra"},"read-only")," mode."))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"date = DATA DATE (Order);\nFORM showForm\n    OBJECTS dateFrom = DATE, dateTo = DATE PANEL\n    PROPERTIES VALUE(dateFrom), VALUE(dateTo)\n\n    OBJECTS o = Order\n    FILTERS date(o) >= dateFrom, date(o) <= dateTo\n;\n\ntestShow ()  {\n    SHOW showForm OBJECTS dateFrom = 2010_01_01, dateTo = 2010_12_31;\n\n    NEWSESSION {\n        NEW s = Sku {\n            SHOW sku OBJECTS s = s FLOAT;\n        }\n    }\n}\n")))}c.isMDXComponent=!0}}]);