"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[92562],{37618:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=t(74848),n=t(28453);const r={title:"Projects"},o=void 0,l={id:"Projects",title:"Projects",description:"Project is a collection of modules and additional information (pictures, report design files, etc.) that fully describe the functionality of the information system being created.",source:"@site/versioned_docs/version-v5/Projects.md",sourceDirName:".",slug:"/Projects",permalink:"/v5/Projects",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/Projects.md",tags:[],version:"v5",lastUpdatedAt:1685108136e3,frontMatter:{title:"Projects"},sidebar:"learn",previous:{title:"Modules",permalink:"/v5/Modules"},next:{title:"Extensions",permalink:"/v5/Extensions"}},a={},d=[{value:"Language",id:"language",level:3}];function c(e){const s={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:"Project"})," is a collection of ",(0,i.jsx)(s.a,{href:"/v5/Modules",children:"modules"})," and additional information (pictures, report design files, etc.) that fully describe the functionality of the information system being created."]}),"\n",(0,i.jsxs)(s.p,{children:['Projects, like modules, can depend on each other. A project graph should "include" a module graph. That is, if module ',(0,i.jsx)(s.code,{children:"A"})," ",(0,i.jsx)(s.a,{href:"/v5/Modules#depends",children:"depends"})," on module ",(0,i.jsx)(s.code,{children:"B"}),", then module ",(0,i.jsx)(s.code,{children:"A"})," project should depend on module ",(0,i.jsx)(s.code,{children:"B"})," project."]}),"\n",(0,i.jsx)(s.p,{children:"Also, as a rule, assembly automation and versioning are supported for projects (for example, assembling a single executable file with all dependencies)."}),"\n",(0,i.jsx)(s.h3,{id:"language",children:"Language"}),"\n",(0,i.jsxs)(s.p,{children:["From a technical standpoint, a project is nothing more than a set of files, so project support is not directly a part of the platform. It is assumed that external tools are used for this, from simple built-in IDEs to complex multi-purpose frameworks (such as ",(0,i.jsx)(s.a,{href:"https://maven.apache.org/",children:"Maven"}),")."]}),"\n",(0,i.jsxs)(s.p,{children:["By default, at startup the platform searches for all files with the lsf extension in the ",(0,i.jsx)(s.a,{href:"/v5/Launch_parameters#appjava",children:"classpath"})," of the application server being started, and considers them loaded modules. Modules are loaded in the order of their ",(0,i.jsx)(s.a,{href:"/v5/Modules#depends",children:"dependencies"}),", so if ",(0,i.jsx)(s.code,{children:"A"})," depends on ",(0,i.jsx)(s.code,{children:"B"})," and ",(0,i.jsx)(s.code,{children:"C"}),", then by default ",(0,i.jsx)(s.code,{children:"B"})," is initialized first, then ",(0,i.jsx)(s.code,{children:"C"}),", and only then ",(0,i.jsx)(s.code,{children:"A"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"The above behavior can however be changed using the appropriate lsFusion application server startup parameters:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsxs)(s.a,{href:"/v5/Launch_parameters#project",children:[(0,i.jsx)(s.code,{children:"logics.includePaths"}),", ",(0,i.jsx)(s.code,{children:"logics.excludePaths"})]})," - the paths (relative to the classpath) in which the platform will look for LSF files. When specifying these parameters you can use paths to specific files (for example, ",(0,i.jsx)(s.code,{children:"A/B/C.lsf"}),") as well as path templates (for example, ",(0,i.jsx)(s.code,{children:"A/*"})," - all LSF files in folder ",(0,i.jsx)(s.code,{children:"A"})," and all its subfolders). In addition, in these parameters you can specify several paths/path patterns at once, separated by semicolons - for example, ",(0,i.jsx)(s.code,{children:"A.lsf; dirB/*"}),". The name of a JAR file in the path is ignored (that is, a file in ",(0,i.jsx)(s.code,{children:"b.jar/C/x.lsf"})," is considered to have the path ",(0,i.jsx)(s.code,{children:"C/x.lsf"}),"). By default, ",(0,i.jsx)(s.code,{children:"includePaths"})," is equal to ",(0,i.jsx)(s.code,{children:"*"})," (that is, all files), and ",(0,i.jsx)(s.code,{children:"excludedPaths"})," is empty."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/v5/Launch_parameters#project",children:(0,i.jsx)(s.code,{children:"logics.topModule"})})," - the name of the top module. If this parameter is specified (not empty), not all LSF files will be loaded, but only the specified module and all its ",(0,i.jsx)(s.a,{href:"/v5/Modules#depends",children:"dependencies"}),". By default, this parameter is considered not specified (empty)."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/v5/Launch_parameters#project",children:(0,i.jsx)(s.code,{children:"logics.orderDependencies"})})," - redefinition of the order of dependencies (set as module names separated by commas). Thus, if ",(0,i.jsx)(s.code,{children:"A"})," depends on ",(0,i.jsx)(s.code,{children:"B"})," and ",(0,i.jsx)(s.code,{children:"C"}),", and this parameter contains ",(0,i.jsx)(s.code,{children:"B"})," and ",(0,i.jsx)(s.code,{children:"C"}),", with ",(0,i.jsx)(s.code,{children:"C"})," placed before ",(0,i.jsx)(s.code,{children:"B"}),", then ",(0,i.jsx)(s.code,{children:"C"})," will be initialized before ",(0,i.jsx)(s.code,{children:"B"}),". By default, this parameter is considered not specified (empty); that is, the ",(0,i.jsx)(s.code,{children:"REQUIRE"})," order is used in the LSF files themselves."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Regardless of the parameters described above, the platform always automatically loads the following system modules: ",(0,i.jsx)(s.a,{href:"https://github.com/lsfusion/platform/blob/master/server/src/main/lsfusion/system/System.lsf",children:(0,i.jsx)(s.code,{children:"System"})}),", ",(0,i.jsx)(s.a,{href:"https://github.com/lsfusion/platform/blob/master/server/src/main/lsfusion/system/Service.lsf",children:(0,i.jsx)(s.code,{children:"Service"})}),", ",(0,i.jsx)(s.a,{href:"https://github.com/lsfusion/platform/blob/master/server/src/main/lsfusion/system/Reflection.lsf",children:(0,i.jsx)(s.code,{children:"Reflection"})}),", ",(0,i.jsx)(s.a,{href:"https://github.com/lsfusion/platform/blob/master/server/src/main/lsfusion/system/Authentication.lsf",children:(0,i.jsx)(s.code,{children:"Authentication"})}),", ",(0,i.jsx)(s.a,{href:"https://github.com/lsfusion/platform/blob/master/server/src/main/lsfusion/system/Security.lsf",children:(0,i.jsx)(s.code,{children:"Security"})}),", ",(0,i.jsx)(s.a,{href:"https://github.com/lsfusion/platform/blob/master/server/src/main/lsfusion/system/SystemEvents.lsf",children:(0,i.jsx)(s.code,{children:"SystemEvents"})}),", ",(0,i.jsx)(s.a,{href:"https://github.com/lsfusion/platform/blob/master/server/src/main/lsfusion/system/Scheduler.lsf",children:(0,i.jsx)(s.code,{children:"Scheduler"})}),", ",(0,i.jsx)(s.a,{href:"https://github.com/lsfusion/platform/blob/master/server/src/main/lsfusion/system/Email.lsf",children:(0,i.jsx)(s.code,{children:"Email"})}),", ",(0,i.jsx)(s.a,{href:"https://github.com/lsfusion/platform/blob/master/server/src/main/lsfusion/system/Time.lsf",children:(0,i.jsx)(s.code,{children:"Time"})})," and ",(0,i.jsx)(s.a,{href:"https://github.com/lsfusion/platform/blob/master/server/src/main/lsfusion/system/Utils.lsf",children:(0,i.jsx)(s.code,{children:"Utils"})}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>l});var i=t(96540);const n={},r=i.createContext(n);function o(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);