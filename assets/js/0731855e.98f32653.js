"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[78187],{99919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(74848),i=n(28453);const r={title:"Navigator"},s=void 0,o={id:"Navigator",title:"Navigator",description:"Navigator is a hierarchical structure (tree) consisting of navigator elements. There are three types of navigator elements:",source:"@site/docs/Navigator.md",sourceDirName:".",slug:"/Navigator",permalink:"/next/Navigator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Navigator.md",tags:[],version:"current",lastUpdatedAt:1640850738,formattedLastUpdatedAt:"Dec 30, 2021",frontMatter:{title:"Navigator"},sidebar:"learn",previous:{title:"In a structured view (EXPORT, IMPORT)",permalink:"/next/In_a_structured_view_EXPORT_IMPORT"},next:{title:"Navigator design",permalink:"/next/Navigator_design"}},l={},c=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const t={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:"Navigator"})," is a hierarchical structure (tree) consisting of ",(0,a.jsx)(t.em,{children:"navigator elements"}),". There are three types of navigator elements:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.em,{children:"folder"})," - combines other navigator elements into a group. Selecting this element ",(0,a.jsx)(t.a,{href:"/next/Navigator_design#selectedfolder",children:"affects"})," the display of its children if they belong to another ",(0,a.jsx)(t.a,{href:"/next/Navigator_design",children:"window"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.em,{children:"action"})," \u2013 executes a specified ",(0,a.jsx)(t.a,{href:"/next/Actions",children:"action"}),". Only actions that take no arguments can be added to the navigator."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.em,{children:"form"})," \u2013 ",(0,a.jsx)(t.a,{href:"/next/In_an_interactive_view_SHOW_DIALOG",children:"opens"})," a specified ",(0,a.jsx)(t.a,{href:"/next/Forms",children:"form"})," in the interactive view and the ",(0,a.jsx)(t.a,{href:"/next/In_an_interactive_view_SHOW_DIALOG#flow",children:"asynchronous"})," mode."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["When an element is added to the navigator, a ",(0,a.jsx)(t.em,{children:"parent"})," element is defined for it. The root element of the navigator is the ",(0,a.jsx)(t.code,{children:"System.root"})," folder."]}),"\n",(0,a.jsx)(t.p,{children:"If no navigator elements are displayed in a particular navigator folder, this folder is automatically hidden."}),"\n",(0,a.jsxs)(t.p,{children:["Just as an ",(0,a.jsx)(t.a,{href:"/next/Interactive_view",children:"interactive"})," form view, the navigator is displayed in a 2D space: on the user's device screen. Therefore, it's ",(0,a.jsx)(t.a,{href:"/next/Navigator_design",children:"design"})," can/has to be defined, as well as for all other ",(0,a.jsx)(t.a,{href:"/next/Form_views#graphic",children:"graphic"})," views."]}),"\n",(0,a.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,a.jsxs)(t.p,{children:["To manage the navigator use the ",(0,a.jsxs)(t.a,{href:"/next/NAVIGATOR_statement",children:[(0,a.jsx)(t.code,{children:"NAVIGATOR"})," statement"]}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-lsf",children:"FORM items;\nFORM stocks;\nFORM legalEntities;\nFORM shipments;\nhello()  { MESSAGE 'Hello world'; }\nhi()  { MESSAGE 'Hi'; }\n\nNAVIGATOR {\n    // creating a new navigator folder and making all its descendants appear in a window with a vertical toolbar\n    NEW FOLDER catalogs 'Directories' WINDOW toolbar { \n        // creating a form element for the items form in the folder, the default element name is the form name\n        NEW items; \n    }\n    catalogs {  // navigator element editing statement\n        // creating a stocksNavigator form element for the stocks form and adding the last element\n        // to the catalogs folder\n        NEW FORM stocksNavigator 'Warehouses' = stocks; \n        // creating a form element named legalEntities in the catalogs folder right after the items element\n        NEW legalEntities AFTER items; \n        NEW shipments;\n    }\n    // creating another folder, the elements of which will also be displayed in a window with a vertical toolbar\n    NEW FOLDER documents 'Documents' WINDOW toolbar { \n        // the folders themselves will be displayed in the root window, and when the user selects one of them\n        // in a window with a vertical toolbar the descendants of this particular folder will be shown\n        NEW ACTION hi;   // creating an action element\n        NEW ACTION h=hello;   // creating an action element\n        // the statement to move the shipments element from the catalogs folder to the document folder\n        // before the hello element\n        MOVE shipments BEFORE h; \n    }\n}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var a=n(96540);const i={},r=a.createContext(i);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);