"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[21392],{15525:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>r});var s=t(74848),a=t(28453);const i={title:"Module header"},l=void 0,d={id:"Module_header",title:"Module header",description:"Each module begins with a header.",source:"@site/docs/Module_header.md",sourceDirName:".",slug:"/Module_header",permalink:"/Module_header",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Module_header.md",tags:[],version:"current",lastUpdatedAt:170852507e4,frontMatter:{title:"Module header"},sidebar:"learn",previous:{title:"Statements",permalink:"/Statements"},next:{title:"= statement",permalink:"/=_statement"}},o={},r=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Each ",(0,s.jsx)(n.a,{href:"/Modules",children:"module"})," begins with a ",(0,s.jsx)(n.em,{children:"header"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"MODULE name;\n[REQUIRE moduleName1, ..., moduleNameN;]\n[PRIORITY namespaceName1, ..., namespaceNameM;]\n[NAMESPACE namespaceName;]\n"})}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"The module header can consist of four special statements, in the following order:"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"MODULE"}),"  statement defines the module name. It is required. Each module within one ",(0,s.jsx)(n.a,{href:"/Projects",children:"project"})," must have a unique name."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"REQUIRE"})," statement defines the list of modules on which the current module ",(0,s.jsx)(n.a,{href:"/Modules#depends",children:"depends"}),". If the ",(0,s.jsx)(n.code,{children:"REQUIRE"})," statement is absent, that is equivalent to depending only on the ",(0,s.jsx)(n.code,{children:"System"})," module."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"PRIORITY"})," statement defines the list of additional ",(0,s.jsx)(n.a,{href:"/Naming#namespace",children:"namespaces"})," that will have priority in ",(0,s.jsx)(n.a,{href:"/Search_",children:"finding"})," ",(0,s.jsx)(n.a,{href:"/Element_identification",children:"system elements"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"NAMESPACE"})," statement defines the module's namespace."]}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"name"})}),"\n",(0,s.jsxs)(n.p,{children:["The name of the module. ",(0,s.jsx)(n.a,{href:"/IDs#id",children:"Simple ID"}),". Module names cannot contain an underscore."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"moduleName1, ..., moduleNameN"})}),"\n",(0,s.jsx)(n.p,{children:"A list of the names of modules that the current module depends on. Each name is a simple ID."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"namespaceName1, ..., namespaceNameM"})}),"\n",(0,s.jsx)(n.p,{children:"A list of namespace names. Each name is a simple ID."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"namespaceName"})}),"\n",(0,s.jsxs)(n.p,{children:["The name of the module namespace. A simple ID that cannot contain an underscore. If the ",(0,s.jsx)(n.code,{children:"NAMESPACE"})," statement is not used in the header, the name of the current module's namespace will be equal to the name of the module."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lsf",children:"MODULE EmployeeExample;\t \t// Defining the module name\n\nREQUIRE System, Utils;\t \t// Listing the modules that the Employee module depends on\nNAMESPACE Employee;\t\t \t// Setting the namespace\n\nCLASS Employee 'Employee';\t// Creating a class\nCLASS Position 'Position'; // Creating another class\n\nemployeePosition(employee) = DATA Position (Employee); // Creating property\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>d});var s=t(96540);const a={},i=s.createContext(a);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);