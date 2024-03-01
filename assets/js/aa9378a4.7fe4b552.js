"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[13443],{33967:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=s(74848),i=s(28453);const r={title:"IDE"},a=void 0,c={id:"IDE",title:"IDE",description:"Creating a new lsFusion project",source:"@site/versioned_docs/version-v5/IDE.md",sourceDirName:".",slug:"/IDE",permalink:"/IDE",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/IDE.md",tags:[],version:"v5",lastUpdatedAt:1685108136,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{title:"IDE"},sidebar:"learn",previous:{title:"Coding conventions",permalink:"/Coding_conventions"},next:{title:"Learning materials",permalink:"/Learning_materials"}},o={},d=[{value:"Creating a new lsFusion project",id:"newproject",level:3},{value:"Developing an application",id:"dev",level:3},{value:"Starting up a server",id:"run",level:3},{value:"Creating a server startup configuration",id:"configuration",level:3},{value:"Building an application (with embedded server)",id:"build",level:3}];function l(e){const n={a:"a",code:"code",em:"em",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"newproject",children:"Creating a new lsFusion project"}),"\n",(0,t.jsxs)(n.p,{children:["Launch ",(0,t.jsx)(n.strong,{children:"IDEA"})," and select ",(0,t.jsx)(n.code,{children:"Create New Project"}),", or when ",(0,t.jsx)(n.strong,{children:"IDEA"})," is already opened, select ",(0,t.jsx)(n.code,{children:"File > New > Project"})," from the menu."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:s(81055).A+"",width:"784",height:"393"}),(0,t.jsx)(n.img,{src:s(50282).A+"",width:"543",height:"161"})]}),"\n",(0,t.jsxs)(n.p,{children:["Select project type ",(0,t.jsx)(n.code,{children:"lsFusion"}),". Make sure that the JDK is set and the link to the library with the ",(0,t.jsx)(n.code,{children:"lsFusion"})," is selected (when ",(0,t.jsx)(n.a,{href:"/Development_auto",children:"automatic installation"})," is used, this link is set automatically; otherwise, click ",(0,t.jsx)(n.code,{children:"Download"})," or select the previously downloaded library ",(0,t.jsx)(n.code,{children:"Create"}),") and then click ",(0,t.jsx)(n.code,{children:"Next"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(28590).A+"",width:"854",height:"294"})}),"\n",(0,t.jsxs)(n.p,{children:["Fill in the name of the project and the directory where the source files will be stored. Adjust the connection parameters and passwords for the database and application server when necessary. Click ",(0,t.jsx)(n.code,{children:"Create"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(32919).A+"",width:"694",height:"433"})}),"\n",(0,t.jsx)(n.h3,{id:"dev",children:"Developing an application"}),"\n",(0,t.jsxs)(n.p,{children:["All the source code written in ",(0,t.jsx)(n.strong,{children:"lsFusion"})," is stored by default in ",(0,t.jsx)(n.code,{children:"src/main/lsfusion"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["To add a new ",(0,t.jsx)(n.a,{href:"/Modules",children:"module"}),", right-click the corresponding folder and select ",(0,t.jsx)(n.code,{children:"New > lsFusion Module"})," from the menu:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(96996).A+"",width:"832",height:"383"})}),"\n",(0,t.jsxs)(n.p,{children:["You can also create subfolders (by choosing ",(0,t.jsx)(n.code,{children:"Package"}),") to group similar modules into a directory."]}),"\n",(0,t.jsx)(n.h3,{id:"run",children:"Starting up a server"}),"\n",(0,t.jsxs)(n.p,{children:["When you create a new project, a server startup configuration is also created by default. You can run it by selecting ",(0,t.jsx)(n.code,{children:"Run -> Run 'Run lsFusion server'"})," or by clicking on the symbol ",(0,t.jsx)(n.img,{src:s(83258).A+"",width:"18",height:"21"})," next to the caption ",(0,t.jsx)(n.code,{children:"Run lsFusion server"})," in the upper right corner. If startup is successful, the last line in the log should be ",(0,t.jsx)(n.code,{children:"Server has successfully started"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(92107).A+"",width:"672",height:"412"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(17398).A+"",width:"1096",height:"374"})}),"\n",(0,t.jsx)(n.p,{children:"After the server has been successfully started, you can connect to it over a web-based or desktop client via a shortcut on your desktop."}),"\n",(0,t.jsx)(n.h3,{id:"configuration",children:"Creating a server startup configuration"}),"\n",(0,t.jsxs)(n.p,{children:["If the platform is embedded to an existing project (for example, ",(0,t.jsx)(n.a,{href:"/Development_manual#maven",children:"via Maven"})," for a Maven project), you may need to manually create a server startup configuration for the applications. This is done as follows:"]}),"\n",(0,t.jsxs)(n.p,{children:["In the menu, select ",(0,t.jsx)(n.code,{children:"Edit configurations"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(23695).A+"",width:"671",height:"404"})}),"\n",(0,t.jsxs)(n.p,{children:["In the window that opens, click ",(0,t.jsx)(n.code,{children:"+"})," in the upper left corner and select ",(0,t.jsx)(n.code,{children:"lsFusion Server"})," from the drop-down list"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(2861).A+"",width:"235",height:"345"})}),"\n",(0,t.jsx)(n.p,{children:"Set the configuration name and the module (if there are several) for which you need to start the lsFusion application server. In the same window, if necessary, you can specify the build process to be followed at configuration startup, additional parameters for the Java virtual machine, etc."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(36894).A+"",width:"1037",height:"479"})}),"\n",(0,t.jsx)(n.h3,{id:"build",children:"Building an application (with embedded server)"}),"\n",(0,t.jsxs)(n.p,{children:["To compile a single JAR file that contains both the developed code and the application server itself, you can use the following ",(0,t.jsx)(n.a,{href:"https://blog.jetbrains.com/idea/2010/08/quickly-create-jar-artifact/",children:"guide"}),". The result JAR file (",(0,t.jsx)(n.em,{children:"artifact"}),") can be used to install applications on a production server as described in the section ",(0,t.jsx)(n.a,{href:"/Execution_manual#appservice",children:"installing an applications server as a service"}),". Note that since all modules and the server itself will be inside the same JAR file, the installation process is slightly different:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"in the first section instead of the server JAR file this file must be downloaded"}),"\n",(0,t.jsx)(n.li,{children:"the third section (copying application files to the server) can be skipped"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},96996:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/IDE_add_module-fa65855dcf14a8ad210a8e84f5708906.png"},2861:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/IDE_add_server-6cc3e286096aa956dc1ad54e141cba8a.png"},36894:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/IDE_conf_name-3528ff77d50bc982583cf2f7d5ccca3b.png"},50282:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/IDE_create_project-8640d4998e8033a35066de300b37fdb6.png"},23695:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/IDE_edit_conf-c1fd9d30fdae3b2b31896f42e68fe8e7.png"},32919:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/IDE_project_name-10a2a5eabfa580965dd9e2250cf83c18.png"},28590:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/IDE_project_type-397757bad125a2cb7afa56c520966e89.png"},92107:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/IDE_run_command-c7ccd47415cedef009039a6162e368f6.png"},17398:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/IDE_run_in_operationbar-cb8d82ed2e4e6df5fe3246b73622c7ee.png"},83258:(e,n,s)=>{s.d(n,{A:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAVCAYAAABLy77vAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACzSURBVDhPY7Sxd/zPQAXABKUpBiPNIE5HPgYmXtLswKqaRYaVgdtXgIFNn4uBgZkRKoof4LYWaAC7HifYQBZpNqggbkDQ/SAvcjrxEvQu0QFByLtEGwQGeLxLmkF4AGkG/f3P8PPSd4avmz8w/Hn6CyoIAUQb9OfJb7ABvy5+AxuIDgga9O/zP4bv+z4zfN//CczGBXAbhMcb2ABWgwh5AxvAahAhb2ADRAc2ITDYDGJgAACJ0j/l7e/1MQAAAABJRU5ErkJgggYzeynsXmc9QM0TfQdEVFImyymaq9IHw2AAUzxLpDCHHLBqtycE+qwYFrqn0OEL14eR2y9e+RQ0oWI6Oorx6DCY4lXlUqXKiBy4XjYBdAYiSPUk0GVFy9M/B3Vh7v5jkSEkYhPQmXR5mSnNus+BBEe71opUfBb94d5yQa2BFCa4g8G2AczHE7D0YK16T075/2k9/Wgk+ASZRpR4pMZctgAAAABJRU5ErkJggg=="},81055:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/IDE_welcome_screen-ff82581a9598bcaffd393dec5c788b8c.png"},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>c});var t=s(96540);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);