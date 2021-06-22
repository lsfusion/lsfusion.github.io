(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[77279],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=a.createContext({}),s=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=i,f=d["".concat(m,".").concat(h)]||d[h]||c[h]||r;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34028:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return m},default:function(){return p}});var a=n(22122),i=n(19756),r=(n(67294),n(3905)),o={title:"NAVIGATOR statement"},l={unversionedId:"NAVIGATOR_statement",id:"version-v4/NAVIGATOR_statement",isDocsHomePage:!1,title:"NAVIGATOR statement",description:"The NAVIGATOR statement is used to modify the navigator.",source:"@site/versioned_docs/version-v4/NAVIGATOR_statement.md",sourceDirName:".",slug:"/NAVIGATOR_statement",permalink:"/NAVIGATOR_statement",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/NAVIGATOR_statement.md",version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"NAVIGATOR statement"},sidebar:"version-v4/learn",previous:{title:"DESIGN statement",permalink:"/DESIGN_statement"},next:{title:"WINDOW statement",permalink:"/WINDOW_statement"}},m=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:m};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"NAVIGATOR")," statement is used to modify the ",(0,r.kt)("a",{parentName:"p",href:"/Navigator"},"navigator"),"."),(0,r.kt)("h3",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,"The syntax consists of nested blocks of ",(0,r.kt)("em",{parentName:"p"},"navigator statements"),". The outer statement block is described after the keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"NAVIGATOR"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NAVIGATOR {\n    navigatorStatement1 \n    ...\n    navigatorStatementN\n}\n")),(0,r.kt)("p",null,"Each ",(0,r.kt)("inlineCode",{parentName:"p"},"navigatorStatement")," describes a single navigator statement, and at the end it may contain a nested block of additional navigator statements. There are three types of navigator statements:  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NEW elementDescription [options] [{ ... }];\nMOVE name [caption] [options] [{ ... }];\nname [caption] [options] [{ ... }];\n")),(0,r.kt)("p",null,"where ",(0,r.kt)("inlineCode",{parentName:"p"},"elementDescription")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"NEW")," statement describes the type of element to be created, and can be in one of three types:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"FOLDER name [caption] \nFORM [name [caption] =] formName\nACTION [name [caption] =] actionName\n[name [caption] =] formElseActionName\n")),(0,r.kt)("p",null,"A navigator statement must end with a semicolon if it does not contain a nested block of additional statements."),(0,r.kt)("p",null,"The options for the ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," navigator element can be listed one after the other in arbitrary order. The following set of options is supported:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"WINDOW windowName\nBEFORE elementName\nAFTER elementName\nFIRST \nIMAGE fileName\n")),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"NAVIGATOR")," statement allows to modify the navigator. Each navigator statement block enclosed in braces allows to change the descendants of a particular ",(0,r.kt)("a",{parentName:"p",href:"/Navigator"},"navigator element"),", which we will call the ",(0,r.kt)("em",{parentName:"p"},"current")," element. In the outer block that follows the ",(0,r.kt)("inlineCode",{parentName:"p"},"NAVIGATOR")," keyword, the current element is the root system folder ",(0,r.kt)("inlineCode",{parentName:"p"},"System.root"),". There are three types of navigator statements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("em",{parentName:"li"},"create statement")," (",(0,r.kt)("inlineCode",{parentName:"li"},"NEW"),") allows to create a new navigator element, making it a child object of the current element. The created navigator elements can be of three types: folder, form element, and action element. The type of element to be created is specified by the keywords ",(0,r.kt)("inlineCode",{parentName:"li"},"FOLDER"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"FORM"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"ACTION"),". When creating a form element, the keyword ",(0,r.kt)("inlineCode",{parentName:"li"},"FORM")," is optional. The navigator statement block contained in this statement (if any) describes the descendants of the element being created."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("em",{parentName:"li"},"move statement")," (",(0,r.kt)("inlineCode",{parentName:"li"},"MOVE"),") allows to move an existing element to the current navigator element, making it a child element. Prior to this, the navigator element being moved is deleted from its previous location. The navigator statement block contained in this statement describes the descendants of the element being added. "),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("em",{parentName:"li"},"modify statement")," allows to change the specified navigator element, which must be a descendant (not necessarily a child) of the current element. The navigator statement block contained in this statement describes the descendants of the specified element.")),(0,r.kt)("p",null,"The move and modify statements allow to change the caption and options of a navigator item."),(0,r.kt)("p",null,"The hierarchy described within a single ",(0,r.kt)("inlineCode",{parentName:"p"},"NAVIGATOR")," statement can have an arbitrary nesting level and describe any number of elements at each level."),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"name")),(0,r.kt)("p",{parentName:"li"},"  Navigator element name. In the create statement, it is ",(0,r.kt)("a",{parentName:"p",href:"/IDs#id-broken"},"a simple ID")," and must be unique within the current ",(0,r.kt)("a",{parentName:"p",href:"/Naming#namespace"},"namespace"),", while in the rest of the statements it is a ",(0,r.kt)("a",{parentName:"p",href:"/IDs#cid-broken"},"composite ID"),". The name does not have to be specified when creating a form element or action element. Here the form name or action name is used as the element name.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"caption")),(0,r.kt)("p",{parentName:"li"},"  Navigator element caption. ",(0,r.kt)("a",{parentName:"p",href:"/Literals#strliteral-broken"},"String literal"),". In the create statement, if the caption is not specified, the caption will be the name of the created element. In the rest of the statements it modifies the existing caption.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"actionName")),(0,r.kt)("p",{parentName:"li"},"  The ",(0,r.kt)("a",{parentName:"p",href:"/IDs#propertyid-broken"},"action ID")," for which the navigator element will be created. The action must not take any parameters.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"formName")),(0,r.kt)("p",{parentName:"li"},"  The ",(0,r.kt)("a",{parentName:"p",href:"/IDs#propertyid-broken"},"form ID")," for which the navigator element will be created.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"formElseActionName")),(0,r.kt)("p",{parentName:"li"},"  The ",(0,r.kt)("a",{parentName:"p",href:"/IDs#propertyid-broken"},"form or action ID")," for which the navigator element will be created. It is initially assumed that in ",(0,r.kt)("inlineCode",{parentName:"p"},"formElseActionName")," a form is specified, and that only if it is not found an action is specified in ",(0,r.kt)("inlineCode",{parentName:"p"},"formElseActionName"),". The action must not take any parameters.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"options")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"WINDOW windowName")),(0,r.kt)("p",{parentName:"li"},"  Specifying a ",(0,r.kt)("a",{parentName:"p",href:"/Navigator_design"},"window")," in which the element and its descendants will be displayed (unless another window is specified for them). "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"windowName")),(0,r.kt)("p",{parentName:"li"},"  Window name. Composite ID.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"BEFORE elementName"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"AFTER elementName")," "),(0,r.kt)("p",{parentName:"li"},"  Specifying that the element must be added or moved before (keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"BEFORE"),") or after (keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"AFTER"),") the specified navigator element. The specified element must be a child of the current element. If the option is specified in the modify statement, then the element itself must also be a child of the current element. Otherwise, the ",(0,r.kt)("inlineCode",{parentName:"p"},"MOVE")," statement should be used."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"elementName")),(0,r.kt)("p",{parentName:"li"},"  Navigator element name. Composite ID. ")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"FIRST")),(0,r.kt)("p",{parentName:"li"},"  A keyword that specifies that the element must be added or moved to first place in the child list of the current element. If the option is specified in the modify statement, then the element itself must also be a child of the current element. Otherwise, the ",(0,r.kt)("inlineCode",{parentName:"p"},"MOVE")," statement should be used.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"IMAGE fileName")),(0,r.kt)("p",{parentName:"li"},"  Specifying the relative path to the file with the image to be displayed as the icon for the navigator element. "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"fileName")),(0,r.kt)("p",{parentName:"li"},"  Path to the file. String literal. The path is relative to the ",(0,r.kt)("inlineCode",{parentName:"p"},"images")," directory."))))))),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM items;\nFORM stocks;\nFORM legalEntities;\nFORM shipments;\nhello()  { MESSAGE 'Hello world'; }\nhi()  { MESSAGE 'Hi'; }\n\nNAVIGATOR {\n    NEW FOLDER catalogs 'Directories' WINDOW toolbar { // creating a new navigator folder and making all its descendants appear in a window with a vertical toolbar\n        NEW items; // creating a form element for the items form in the folder, the default element name is the form name\n    }\n    catalogs {  // navigator element editing statement\n        NEW FORM stocksNavigator 'Warehouses' = stocks; // creating a stocksNavigator form element for the stocks form and adding the last element to the catalogs folder\n        NEW legalEntities AFTER items; // creating a form element named legalEntities in the catalogs folder right after the items element\n        NEW shipments;\n    }\n    NEW FOLDER documents 'Documents' WINDOW toolbar { // creating another folder, the elements of which will also be displayed in a window with a vertical toolbar\n                                                      // the folders themselves will be displayed in the root window, and when the user selects one of them in a window with a vertical\n                                                      // toolbar the descendants of this particular folder will be shown\n        NEW ACTION hi;   // creating an action element\n        NEW ACTION h=hello;   // creating an action element\n        MOVE shipments BEFORE h; // an statement to move the shipments element from the catalogs folder to the document folder before the hello element\n    }\n}\n")))}p.isMDXComponent=!0}}]);