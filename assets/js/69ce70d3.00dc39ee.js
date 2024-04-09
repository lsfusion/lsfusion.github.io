"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[83966],{10315:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>r});var t=s(74848),o=s(28453);const l={title:"Modules"},i=void 0,d={id:"Modules",title:"Modules",description:"A module is a functionally complete part of a project. A module consists of declarations of properties, actions, events, constraints, and other system elements.",source:"@site/docs/Modules.md",sourceDirName:".",slug:"/Modules",permalink:"/next/Modules",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Modules.md",tags:[],version:"current",lastUpdatedAt:1622042248,formattedLastUpdatedAt:"May 26, 2021",frontMatter:{title:"Modules"},sidebar:"learn",previous:{title:"Modularity",permalink:"/next/Modularity"},next:{title:"Projects",permalink:"/next/Projects"}},a={},r=[{value:"Dependencies between modules",id:"depends",level:3},{value:"Namespaces",id:"namespaces",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.em,{children:"module"})," is a functionally complete part of a ",(0,t.jsx)(n.a,{href:"/next/Projects",children:"project"}),". A module consists of declarations of ",(0,t.jsx)(n.a,{href:"/next/Properties",children:"properties"}),", ",(0,t.jsx)(n.a,{href:"/next/Actions",children:"actions"}),", ",(0,t.jsx)(n.a,{href:"/next/Events",children:"events"}),", ",(0,t.jsx)(n.a,{href:"/next/Constraints",children:"constraints"}),", and other ",(0,t.jsx)(n.a,{href:"/next/Naming",children:"system elements"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Each module has a name, which must be unique within the ",(0,t.jsx)(n.a,{href:"/next/Projects",children:"project"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"depends",children:"Dependencies between modules"}),"\n",(0,t.jsxs)(n.p,{children:["Usually modules use elements from other modules to describe part of their functionality. Accordingly, if module ",(0,t.jsx)(n.code,{children:"B"})," uses elements from module ",(0,t.jsx)(n.code,{children:"A"}),", it must be specified in module ",(0,t.jsx)(n.code,{children:"B"})," that it ",(0,t.jsx)(n.em,{children:"depends"})," on ",(0,t.jsx)(n.code,{children:"A"}),". Based on these dependencies, all modules in the project are arranged in a certain order in which they are initialized. It is guaranteed that if module ",(0,t.jsx)(n.code,{children:"B"})," depends on module ",(0,t.jsx)(n.code,{children:"A"}),", module ",(0,t.jsx)(n.code,{children:"A"})," will be initialized before module ",(0,t.jsx)(n.code,{children:"B"}),". Circular dependencies between project modules are not allowed."]}),"\n",(0,t.jsxs)(n.p,{children:["If module ",(0,t.jsx)(n.code,{children:"C"})," depends on module ",(0,t.jsx)(n.code,{children:"B"}),", and module ",(0,t.jsx)(n.code,{children:"B"})," depends on module ",(0,t.jsx)(n.code,{children:"A"}),", we will also assume that module ",(0,t.jsx)(n.code,{children:"C"})," depends on module ",(0,t.jsx)(n.code,{children:"A"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Any module always automatically depends on the system module ",(0,t.jsx)(n.a,{href:"https://github.com/lsfusion/platform/blob/master/server/src/main/lsfusion/system/System.lsf",children:(0,t.jsx)(n.code,{children:"System"})}),", regardless of whether or not this is specified explicitly."]}),"\n",(0,t.jsx)(n.h3,{id:"namespaces",children:"Namespaces"}),"\n",(0,t.jsxs)(n.p,{children:["In each module a ",(0,t.jsx)(n.a,{href:"/next/Naming#namespace",children:"namespace"})," is specified, containing the names of all system elements created in this module. By default, the module creates its own namespace, the name of which is equal to the name of the module. For the module you can also specify a list of additional namespaces that will have priority when ",(0,t.jsx)(n.a,{href:"/next/Search_",children:"finding"})," ",(0,t.jsx)(n.a,{href:"/next/Element_identification",children:"system elements"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"language",children:"Language"}),"\n",(0,t.jsxs)(n.p,{children:["Each module in the platform corresponds to exactly one file, which starts with a special ",(0,t.jsx)(n.a,{href:"/next/Module_header",children:"header"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"MODULE EmployeeExample;\t \t// Defining the module name\n\nREQUIRE System, Utils;\t \t// Listing the modules that the Employee module depends on\nNAMESPACE Employee;\t\t \t// Setting the namespace\n\nCLASS Employee 'Employee';\t// Creating a class\nCLASS Position 'Position'; // Creating another class\n\nemployeePosition(employee) = DATA Position (Employee); // Creating property\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>d});var t=s(96540);const o={},l=t.createContext(o);function i(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);