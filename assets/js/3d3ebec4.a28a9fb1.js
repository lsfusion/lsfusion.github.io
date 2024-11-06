"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[10064],{20196:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var o=r(74848),s=r(28453);const i={title:"Report design"},n=void 0,a={id:"Report_design",title:"Report design",description:"For each report you need to specify a special file (template) which will be used to build the result document. The name of the template for a specific report is `. An empty object group is considered to have no name, so if the first object group is empty, the name of the template is simply equal to the name of the form (without the _` postfix).",source:"@site/docs/Report_design.md",sourceDirName:".",slug:"/Report_design",permalink:"/Report_design",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Report_design.md",tags:[],version:"current",lastUpdatedAt:1623249583e3,frontMatter:{title:"Report design"},sidebar:"learn",previous:{title:"Print view",permalink:"/Print_view"},next:{title:"Structured view",permalink:"/Structured_view"}},c={},p=[];function l(e){const t={a:"a",code:"code",em:"em",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["For each report you need to specify a special file (",(0,o.jsx)(t.em,{children:"template)"})," which will be used to build the result document. The name of the template for a specific report is ",(0,o.jsx)(t.code,{children:"<name of form>_<name of the first group of objects>"}),". An ",(0,o.jsx)(t.a,{href:"/Static_view#empty",children:"empty"})," object group is considered to have no name, so if the first object group is empty, the name of the template is simply equal to the name of the form (without the ",(0,o.jsx)(t.code,{children:"_"})," postfix)."]}),"\n",(0,o.jsx)(t.p,{children:"When developing a template, the developer can use the object group properties that are included in the corresponding report or ancestor reports as fields. The names and types of fields will be equal to the names and types of properties on the form. If one report is a child of another report, then it should be inserted into the template as a subreport. In this case, the properties and filters in it will use the current values of the objects of the upper report as the values of their upper objects."}),"\n",(0,o.jsx)(t.p,{children:"If at least one of the templates cannot be found when generating reports, an automatic template generation mechanism starts based on the current hierarchy: it creates a separate template for each report and adds all the necessary properties and subreports to it. At the same time, if several object groups are included in one report then the lowest group in the list will be used for detail, and a separate report group will be created with its own block for each upper group in the template, to which all the properties from this group will be added."}),"\n",(0,o.jsxs)(t.p,{children:["The LGPL technology ",(0,o.jsx)(t.a,{href:"https://community.jaspersoft.com/project/jasperreports-library",children:"JasperReports"})," is used as a specific implementation of the document generation mechanism. Accordingly, templates are jrxml format files, which can be edited using the ",(0,o.jsx)(t.a,{href:"https://community.jaspersoft.com/project/jaspersoft-studio",children:"JasperSoft Studio"})," application. At the time of generating the report, template files with the name ",(0,o.jsx)(t.code,{children:"<template name>.jrxml"})," are searched for in the server's current ",(0,o.jsx)(t.a,{href:"https://docs.oracle.com/javase/8/docs/technotes/tools/windows/classpath.html",children:"classpath"})," (including all subdirectories). If no template file is found, the platform will generate an automatic design. When starting the server from the IDE and generating a report in ",(0,o.jsx)(t.a,{href:"/In_a_print_view_PRINT#interactive",children:"preview mode"}),", you can use the corresponding buttons to save this design to the launch directory (and the source directory), and then edit it in line with the requirements of the task (in this case, the platform will automatically sync files in the launch directory and source directory)."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>a});var o=r(96540);const s={},i=o.createContext(s);function n(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);