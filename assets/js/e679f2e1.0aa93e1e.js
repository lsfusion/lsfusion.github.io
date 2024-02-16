"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[2041],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,h=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40634:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var a=n(83117),r=(n(67294),n(3905));const i={title:"IDE"},o=void 0,s={unversionedId:"IDE",id:"IDE",title:"IDE",description:"Creating a new lsFusion project",source:"@site/docs/IDE.md",sourceDirName:".",slug:"/IDE",permalink:"/next/IDE",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/IDE.md",tags:[],version:"current",lastUpdatedAt:1673963832,formattedLastUpdatedAt:"Jan 17, 2023",frontMatter:{title:"IDE"},sidebar:"learn",previous:{title:"Coding conventions",permalink:"/next/Coding_conventions"},next:{title:"Examples",permalink:"/next/Examples"}},l={},c=[{value:"Creating a new lsFusion project",id:"newproject",level:3},{value:"Developing an application",id:"dev",level:3},{value:"Starting up a server",id:"run",level:3},{value:"Creating a server startup configuration",id:"configuration",level:3},{value:"Building an application (with embedded server)",id:"build",level:3}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"newproject"},"Creating a new lsFusion project"),(0,r.kt)("p",null,"Launch ",(0,r.kt)("strong",{parentName:"p"},"IDEA")," and select ",(0,r.kt)("inlineCode",{parentName:"p"},"Create New Project"),", or when ",(0,r.kt)("strong",{parentName:"p"},"IDEA")," is already opened, select ",(0,r.kt)("inlineCode",{parentName:"p"},"File > New > Project")," from the menu."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(58185).Z,width:"784",height:"393"}),(0,r.kt)("img",{src:n(95526).Z,width:"543",height:"161"})),(0,r.kt)("p",null,"Select project type ",(0,r.kt)("inlineCode",{parentName:"p"},"lsFusion"),". Make sure that the JDK is set and the link to the library with the ",(0,r.kt)("inlineCode",{parentName:"p"},"lsFusion")," is selected (when ",(0,r.kt)("a",{parentName:"p",href:"/next/Development_auto"},"automatic installation")," is used, this link is set automatically; otherwise, click ",(0,r.kt)("inlineCode",{parentName:"p"},"Download")," or select the previously downloaded library ",(0,r.kt)("inlineCode",{parentName:"p"},"Create"),") and then click ",(0,r.kt)("inlineCode",{parentName:"p"},"Next"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(84174).Z,width:"854",height:"294"})),(0,r.kt)("p",null,"Fill in the name of the project and the directory where the source files will be stored. Adjust the connection parameters and passwords for the database and application server when necessary. Click ",(0,r.kt)("inlineCode",{parentName:"p"},"Create"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(688).Z,width:"694",height:"433"})),(0,r.kt)("h3",{id:"dev"},"Developing an application"),(0,r.kt)("p",null,"All the source code written in ",(0,r.kt)("strong",{parentName:"p"},"lsFusion")," is stored by default in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/main/lsfusion"),"."),(0,r.kt)("p",null,"To add a new ",(0,r.kt)("a",{parentName:"p",href:"/next/Modules"},"module"),", right-click the corresponding folder and select ",(0,r.kt)("inlineCode",{parentName:"p"},"New > lsFusion Module")," from the menu:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(35643).Z,width:"832",height:"383"})),(0,r.kt)("p",null,"You can also create subfolders (by choosing ",(0,r.kt)("inlineCode",{parentName:"p"},"Package"),") to group similar modules into a directory."),(0,r.kt)("h3",{id:"run"},"Starting up a server"),(0,r.kt)("p",null,"When you create a new project, a server startup configuration is also created by default. You can run it by selecting ",(0,r.kt)("inlineCode",{parentName:"p"},"Run -> Run 'Run lsFusion server'")," or by clicking on the symbol ",(0,r.kt)("img",{src:n(79538).Z,width:"18",height:"21"})," next to the caption ",(0,r.kt)("inlineCode",{parentName:"p"},"Run lsFusion server")," in the upper right corner. If startup is successful, the last line in the log should be ",(0,r.kt)("inlineCode",{parentName:"p"},"Server has successfully started"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(17221).Z,width:"672",height:"412"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(57815).Z,width:"1096",height:"374"})),(0,r.kt)("p",null,"After the server has been successfully started, you can connect to it over a web-based or desktop client via a shortcut on your desktop."),(0,r.kt)("h3",{id:"configuration"},"Creating a server startup configuration"),(0,r.kt)("p",null,"If the platform is embedded to an existing project (for example, ",(0,r.kt)("a",{parentName:"p",href:"/next/Development_manual#maven"},"via Maven")," for a Maven project), you may need to manually create a server startup configuration for the applications. This is done as follows:"),(0,r.kt)("p",null,"In the menu, select ",(0,r.kt)("inlineCode",{parentName:"p"},"Edit configurations"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(50274).Z,width:"671",height:"404"})),(0,r.kt)("p",null,"In the window that opens, click ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," in the upper left corner and select ",(0,r.kt)("inlineCode",{parentName:"p"},"lsFusion Server")," from the drop-down list"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(82386).Z,width:"235",height:"345"})),(0,r.kt)("p",null,"Set the configuration name and the module (if there are several) for which you need to start the lsFusion application server. In the same window, if necessary, you can specify the build process to be followed at configuration startup, additional parameters for the Java virtual machine, etc."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(26347).Z,width:"1037",height:"479"})),(0,r.kt)("h3",{id:"build"},"Building an application (with embedded server)"),(0,r.kt)("p",null,"To compile a single JAR file that contains both the developed code and the application server itself, you can use the following ",(0,r.kt)("a",{parentName:"p",href:"https://blog.jetbrains.com/idea/2010/08/quickly-create-jar-artifact/"},"guide"),". The result JAR file (",(0,r.kt)("em",{parentName:"p"},"artifact"),") can be used to install applications on a production server as described in the section ",(0,r.kt)("a",{parentName:"p",href:"/next/Execution_manual#appservice"},"installing an applications server as a service"),". Note that since all modules and the server itself will be inside the same JAR file, the installation process is slightly different:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"in the first section instead of the server JAR file this file must be downloaded"),(0,r.kt)("li",{parentName:"ul"},"the third section (copying application files to the server) can be skipped")))}u.isMDXComponent=!0},35643:function(e,t,n){t.Z=n.p+"assets/images/IDE_add_module-fa65855dcf14a8ad210a8e84f5708906.png"},82386:function(e,t,n){t.Z=n.p+"assets/images/IDE_add_server-6cc3e286096aa956dc1ad54e141cba8a.png"},26347:function(e,t,n){t.Z=n.p+"assets/images/IDE_conf_name-3528ff77d50bc982583cf2f7d5ccca3b.png"},95526:function(e,t,n){t.Z=n.p+"assets/images/IDE_create_project-8640d4998e8033a35066de300b37fdb6.png"},50274:function(e,t,n){t.Z=n.p+"assets/images/IDE_edit_conf-c1fd9d30fdae3b2b31896f42e68fe8e7.png"},688:function(e,t,n){t.Z=n.p+"assets/images/IDE_project_name-10a2a5eabfa580965dd9e2250cf83c18.png"},84174:function(e,t,n){t.Z=n.p+"assets/images/IDE_project_type-397757bad125a2cb7afa56c520966e89.png"},17221:function(e,t,n){t.Z=n.p+"assets/images/IDE_run_command-c7ccd47415cedef009039a6162e368f6.png"},57815:function(e,t,n){t.Z=n.p+"assets/images/IDE_run_in_operationbar-cb8d82ed2e4e6df5fe3246b73622c7ee.png"},79538:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAVCAYAAABLy77vAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACzSURBVDhPY7Sxd/zPQAXABKUpBiPNIE5HPgYmXtLswKqaRYaVgdtXgIFNn4uBgZkRKoof4LYWaAC7HifYQBZpNqggbkDQ/SAvcjrxEvQu0QFByLtEGwQGeLxLmkF4AGkG/f3P8PPSd4avmz8w/Hn6CyoIAUQb9OfJb7ABvy5+AxuIDgga9O/zP4bv+z4zfN//CczGBXAbhMcb2ABWgwh5AxvAahAhb2ADRAc2ITDYDGJgAACJ0j/l7e/1MQAAAABJRU5ErkJgggYzeynsXmc9QM0TfQdEVFImyymaq9IHw2AAUzxLpDCHHLBqtycE+qwYFrqn0OEL14eR2y9e+RQ0oWI6Oorx6DCY4lXlUqXKiBy4XjYBdAYiSPUk0GVFy9M/B3Vh7v5jkSEkYhPQmXR5mSnNus+BBEe71opUfBb94d5yQa2BFCa4g8G2AczHE7D0YK16T075/2k9/Wgk+ASZRpR4pMZctgAAAABJRU5ErkJggg=="},58185:function(e,t,n){t.Z=n.p+"assets/images/IDE_welcome_screen-ff82581a9598bcaffd393dec5c788b8c.png"}}]);