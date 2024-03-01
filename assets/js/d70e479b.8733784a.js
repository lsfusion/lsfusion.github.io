"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[87479],{55427:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=t(74848),s=t(28453);const a={title:"NAVIGATOR statement"},o=void 0,r={id:"NAVIGATOR_statement",title:"NAVIGATOR statement",description:"The NAVIGATOR statement is used to modify the navigator.",source:"@site/versioned_docs/version-v4/NAVIGATOR_statement.md",sourceDirName:".",slug:"/NAVIGATOR_statement",permalink:"/v4/NAVIGATOR_statement",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/NAVIGATOR_statement.md",tags:[],version:"v4",lastUpdatedAt:1708525070,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"NAVIGATOR statement"},sidebar:"learn",previous:{title:"DESIGN statement",permalink:"/v4/DESIGN_statement"},next:{title:"WINDOW statement",permalink:"/v4/WINDOW_statement"}},l={},c=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"NAVIGATOR"})," statement is used to modify the ",(0,i.jsx)(n.a,{href:"/v4/Navigator",children:"navigator"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsxs)(n.p,{children:["The syntax consists of nested blocks of ",(0,i.jsx)(n.em,{children:"navigator statements"}),". The outer statement block is described after the keyword ",(0,i.jsx)(n.code,{children:"NAVIGATOR"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"NAVIGATOR {\n    navigatorStatement1 \n    ...\n    navigatorStatementN\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Each ",(0,i.jsx)(n.code,{children:"navigatorStatement"})," describes a single navigator statement, and at the end it may contain a nested block of additional navigator statements. There are three types of navigator statements:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"NEW elementDescription [options] [{ ... }];\nMOVE name [caption] [options] [{ ... }];\nname [caption] [options] [{ ... }];\n"})}),"\n",(0,i.jsxs)(n.p,{children:["where ",(0,i.jsx)(n.code,{children:"elementDescription"})," in the ",(0,i.jsx)(n.code,{children:"NEW"})," statement describes the type of element to be created, and can be in one of three types:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"FOLDER name [caption] \nFORM [name [caption] =] formName\nACTION [name [caption] =] actionName\n[name [caption] =] formElseActionName\n"})}),"\n",(0,i.jsx)(n.p,{children:"A navigator statement must end with a semicolon if it does not contain a nested block of additional statements."}),"\n",(0,i.jsxs)(n.p,{children:["The options for the ",(0,i.jsx)(n.code,{children:"options"})," navigator element can be listed one after the other in arbitrary order. The following set of options is supported:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"WINDOW windowName\nBEFORE elementName\nAFTER elementName\nFIRST \nIMAGE fileName\n"})}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"NAVIGATOR"})," statement allows to modify the navigator. Each navigator statement block enclosed in braces allows to change the descendants of a particular ",(0,i.jsx)(n.a,{href:"/v4/Navigator",children:"navigator element"}),", which we will call the ",(0,i.jsx)(n.em,{children:"current"})," element. In the outer block that follows the ",(0,i.jsx)(n.code,{children:"NAVIGATOR"})," keyword, the current element is the root system folder ",(0,i.jsx)(n.code,{children:"System.root"}),". There are three types of navigator statements:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.em,{children:"create statement"})," (",(0,i.jsx)(n.code,{children:"NEW"}),") allows to create a new navigator element, making it a child object of the current element. The created navigator elements can be of three types: folder, form element, and action element. The type of element to be created is specified by the keywords ",(0,i.jsx)(n.code,{children:"FOLDER"}),", ",(0,i.jsx)(n.code,{children:"FORM"}),", and ",(0,i.jsx)(n.code,{children:"ACTION"}),". When creating a form element, the keyword ",(0,i.jsx)(n.code,{children:"FORM"})," is optional. The navigator statement block contained in this statement (if any) describes the descendants of the element being created."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.em,{children:"move statement"})," (",(0,i.jsx)(n.code,{children:"MOVE"}),") allows to move an existing element to the current navigator element, making it a child element. Prior to this, the navigator element being moved is deleted from its previous location. The navigator statement block contained in this statement describes the descendants of the element being added."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.em,{children:"modify statement"})," allows to change the specified navigator element, which must be a descendant (not necessarily a child) of the current element. The navigator statement block contained in this statement describes the descendants of the specified element."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The move and modify statements allow to change the caption and options of a navigator item."}),"\n",(0,i.jsxs)(n.p,{children:["The hierarchy described within a single ",(0,i.jsx)(n.code,{children:"NAVIGATOR"})," statement can have an arbitrary nesting level and describe any number of elements at each level."]}),"\n",(0,i.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"name"})}),"\n",(0,i.jsxs)(n.p,{children:["Navigator element name. In the create statement, it is ",(0,i.jsx)(n.a,{href:"/v4/IDs#id",children:"a simple ID"})," and must be unique within the current ",(0,i.jsx)(n.a,{href:"/v4/Naming#namespace",children:"namespace"}),", while in the rest of the statements it is a ",(0,i.jsx)(n.a,{href:"/v4/IDs#cid",children:"composite ID"}),". The name does not have to be specified when creating a form element or action element. Here the form name or action name is used as the element name."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"caption"})}),"\n",(0,i.jsxs)(n.p,{children:["Navigator element caption. ",(0,i.jsx)(n.a,{href:"/v4/Literals#strliteral",children:"String literal"}),". In the create statement, if the caption is not specified, the caption will be the name of the created element. In the rest of the statements it modifies the existing caption."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"actionName"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"/v4/IDs#propertyid",children:"action ID"})," for which the navigator element will be created. The action must not take any parameters."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"formName"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"/v4/IDs#propertyid",children:"form ID"})," for which the navigator element will be created."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"formElseActionName"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"/v4/IDs#propertyid",children:"form or action ID"})," for which the navigator element will be created. It is initially assumed that in ",(0,i.jsx)(n.code,{children:"formElseActionName"})," a form is specified, and that only if it is not found an action is specified in ",(0,i.jsx)(n.code,{children:"formElseActionName"}),". The action must not take any parameters."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"options"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"WINDOW windowName"})}),"\n",(0,i.jsxs)(n.p,{children:["Specifying a ",(0,i.jsx)(n.a,{href:"/v4/Navigator_design",children:"window"})," in which the element and its descendants will be displayed (unless another window is specified for them)."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"windowName"})}),"\n",(0,i.jsx)(n.p,{children:"Window name. Composite ID."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"BEFORE elementName"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"AFTER elementName"})}),"\n",(0,i.jsxs)(n.p,{children:["Specifying that the element must be added or moved before (keyword ",(0,i.jsx)(n.code,{children:"BEFORE"}),") or after (keyword ",(0,i.jsx)(n.code,{children:"AFTER"}),") the specified navigator element. The specified element must be a child of the current element. If the option is specified in the modify statement, then the element itself must also be a child of the current element. Otherwise, the ",(0,i.jsx)(n.code,{children:"MOVE"})," statement should be used."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"elementName"})}),"\n",(0,i.jsx)(n.p,{children:"Navigator element name. Composite ID."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"FIRST"})}),"\n",(0,i.jsxs)(n.p,{children:["A keyword that specifies that the element must be added or moved to first place in the child list of the current element. If the option is specified in the modify statement, then the element itself must also be a child of the current element. Otherwise, the ",(0,i.jsx)(n.code,{children:"MOVE"})," statement should be used."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"IMAGE fileName"})}),"\n",(0,i.jsx)(n.p,{children:"Specifying the relative path to the file with the image to be displayed as the icon for the navigator element."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"fileName"})}),"\n",(0,i.jsxs)(n.p,{children:["Path to the file. String literal. The path is relative to the ",(0,i.jsx)(n.code,{children:"images"})," directory."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"FORM items;\nFORM stocks;\nFORM legalEntities;\nFORM shipments;\nhello()  { MESSAGE 'Hello world'; }\nhi()  { MESSAGE 'Hi'; }\n\nNAVIGATOR {\n    // creating a new navigator folder and making all its descendants appear in a window with a vertical toolbar\n    NEW FOLDER catalogs 'Directories' WINDOW toolbar { \n        // creating a form element for the items form in the folder, the default element name is the form name\n        NEW items; \n    }\n    catalogs {  // navigator element editing statement\n        // creating a stocksNavigator form element for the stocks form and adding the last element\n        // to the catalogs folder\n        NEW FORM stocksNavigator 'Warehouses' = stocks; \n        // creating a form element named legalEntities in the catalogs folder right after the items element\n        NEW legalEntities AFTER items; \n        NEW shipments;\n    }\n    // creating another folder, the elements of which will also be displayed in a window with a vertical toolbar\n    NEW FOLDER documents 'Documents' WINDOW toolbar { \n        // the folders themselves will be displayed in the root window, and when the user selects one of them\n        // in a window with a vertical toolbar the descendants of this particular folder will be shown\n        NEW ACTION hi;   // creating an action element\n        NEW ACTION h=hello;   // creating an action element\n        // the statement to move the shipments element from the catalogs folder to the document folder\n        // before the hello element\n        MOVE shipments BEFORE h; \n    }\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var i=t(96540);const s={},a=i.createContext(s);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);