(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[65857],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(r),h=o,m=f["".concat(p,".").concat(h)]||f[h]||u[h]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},34170:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return l}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i={title:"Report design"},s={unversionedId:"Report_design",id:"Report_design",isDocsHomePage:!1,title:"Report design",description:"For each report you need to specify a special file (template) which will be used to build the result document. The name of the template for a specific report is `. An empty object group is considered to have no name, so if the first object group is empty, the name of the template is simply equal to the name of the form (without the _` postfix).",source:"@site/docs/Report_design.md",sourceDirName:".",slug:"/Report_design",permalink:"/next/Report_design",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Report_design.md",version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Report design"},sidebar:"learn",previous:{title:"Print view",permalink:"/next/Print_view"},next:{title:"Structured view",permalink:"/next/Structured_view"}},p=[],c={toc:p};function l(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"For each report you need to specify a special file (",(0,a.kt)("em",{parentName:"p"},"template)")," which will be used to build the result document. The name of the template for a specific report is ",(0,a.kt)("inlineCode",{parentName:"p"},"<name of form>_<name of the first group of objects>"),". An ",(0,a.kt)("a",{parentName:"p",href:"/next/Static_view#empty"},"empty")," object group is considered to have no name, so if the first object group is empty, the name of the template is simply equal to the name of the form (without the ",(0,a.kt)("inlineCode",{parentName:"p"},"_")," postfix)."),(0,a.kt)("p",null,"When developing a template, the developer can use the object group properties that are included in the corresponding report or ancestor reports as fields. The names and types of fields will be equal to the names and types of properties on the form. If one report is a child of another report, then it should be inserted into the template as a subreport. In this case, the properties and filters in it will use the current values of the objects of the upper report as the values of their upper objects."),(0,a.kt)("p",null,"If at least one of the templates cannot be found when generating reports, an automatic template generation mechanism starts based on the current hierarchy: it creates a separate template for each report and adds all the necessary properties and subreports to it. At the same time, if several object groups are included in one report then the lowest group in the list will be used for detail, and a separate report group will be created with its own block for each upper group in the template, to which all the properties from this group will be added."),(0,a.kt)("p",null,"The LGPL technology ",(0,a.kt)("a",{parentName:"p",href:"https://community.jaspersoft.com/project/jasperreports-library"},"JasperReports")," is used as a specific implementation of the document generation mechanism. Accordingly, templates are jrxml format files, which can be edited using the ",(0,a.kt)("a",{parentName:"p",href:"https://community.jaspersoft.com/project/jaspersoft-studio"},"JasperSoft Studio")," application. At the time of generating the report, template files with the name ",(0,a.kt)("inlineCode",{parentName:"p"},"<template name>.jrxml")," are searched for in the server's current ",(0,a.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/technotes/tools/windows/classpath.html"},"classpath")," (including all subdirectories). If no template file is found, the platform will generate an automatic design. When starting the server from the IDE and generating a report in ",(0,a.kt)("a",{parentName:"p",href:"/next/In_a_print_view_PRINT#interactive"},"preview mode"),", you can use the corresponding buttons to save this design to the launch directory (and the source directory), and then edit it in line with the requirements of the task (in this case, the platform will automatically sync files in the launch directory and source directory)."))}l.isMDXComponent=!0}}]);