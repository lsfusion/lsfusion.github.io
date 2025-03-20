"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["36481"],{16546:function(e,s,n){n.r(s),n.d(s,{default:()=>x,frontMatter:()=>d,metadata:()=>l,assets:()=>c,toc:()=>h,contentTitle:()=>o});var l=JSON.parse('{"id":"Execution_auto","title":"Execution (auto)","description":"Installation","source":"@site/versioned_docs/version-v4/Execution_auto.md","sourceDirName":".","slug":"/Execution_auto","permalink":"/v4/Execution_auto","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v4/docs/en/Execution_auto.md","tags":[],"version":"v4","lastUpdatedAt":1714031569000,"frontMatter":{"title":"Execution (auto)"},"sidebar":"install","previous":{"title":"Development (auto)","permalink":"/v4/Development_auto"},"next":{"title":"Manual installation","permalink":"/v4/Manual_installation"}}'),r=n("85893"),i=n("50065"),t=n("58168"),a=n("97645");let d={title:"Execution (auto)"},o=void 0,c={},h=[{value:"Installation",id:"installation",level:2},{value:"After Installation",id:"after-installation",level:2},{value:"Ports",id:"ports",level:3},{value:"Installing / updating an application",id:"installing--updating-an-application",level:3},{value:"Installing / updating clients",id:"installing--updating-clients",level:3},{value:"Updating",id:"update",level:3},{value:"Application Server (Server)",id:"application-server-server",level:4},{value:"Web server (Client)",id:"web-server-client",level:4},{value:"Custom installation",id:"custom-installation",level:2},{value:"Manual setup (file paths, service names)",id:"manual-setup-file-paths-service-names",level:2},{value:"Startup parameters",id:"settings",level:3},{value:"Restart",id:"restart",level:3},{value:"Application server (Server)",id:"application-server-server-1",level:4},{value:"Web server (Client)",id:"web-server-client-1",level:4},{value:"Application server (Server)",id:"application-server-server-2",level:4},{value:"Web server (Client)",id:"web-server-client-2",level:4},{value:"Logs",id:"logs",level:3},{value:"Locale",id:"locale",level:3}];function u(e){let s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{Details:n}=s;return n||function(e,s){throw Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(s.p,{children:["In addition to installing ",(0,r.jsx)(s.strong,{children:"lsFusion"}),", these installers/scripts also install ",(0,r.jsx)(s.strong,{children:"OpenJDK"}),", ",(0,r.jsx)(s.strong,{children:"PostgreSQL"}),", and ",(0,r.jsx)(s.strong,{children:"Tomcat"}),". Tomcat is embedded into the lsFusion Client installation, and OpenJDK and PostgreSQL are installed separately (in particular, in separate folders)."]}),"\n","\n",(0,r.jsxs)(t.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"Linux",value:"linux"}],children:[(0,r.jsxs)(a.Z,{value:"win",children:[(0,r.jsxs)(s.p,{children:["Executable exe files:\nlsFusion ",(0,r.jsx)(s.strong,{children:"4.1"})," Server & Client (+ OpenJDK ",(0,r.jsx)(s.strong,{children:"11.0.9"}),", PostgreSQL ",(0,r.jsx)(s.strong,{children:"13.1"}),"(x64) / ",(0,r.jsx)(s.strong,{children:"10.8"}),"(x32), Tomcat ",(0,r.jsx)(s.strong,{children:"9.0.21"}),"):"]}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://download.lsfusion.org/exe/lsfusion-4.1.exe",children:"x32"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://download.lsfusion.org/exe/lsfusion-4.1-x64.exe",children:"x64"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Older versions"}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["lsFusion 4.0 Server & Client","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://download.lsfusion.org/exe/lsfusion-4.0.exe",children:"x32"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://download.lsfusion.org/exe/lsfusion-4.0-x64.exe",children:"x64"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["lsFusion 3.1 Server & Client","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://download.lsfusion.org/exe/lsfusion-3.1.exe",children:"x32"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://download.lsfusion.org/exe/lsfusion-3.1-x64.exe",children:"x64"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["lsFusion 2.4 Server & Client","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://download.lsfusion.org/exe/lsfusion-2.4.exe",children:"x32"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://download.lsfusion.org/exe/lsfusion-2.4-x64.exe",children:"x64"})}),"\n"]}),"\n"]}),"\n"]})]}),"\n"]}),"\n"]}),(0,r.jsxs)(s.p,{children:["Subsequently, ",(0,r.jsx)(s.code,{children:"$INSTALL_DIR$"})," refers to the folder selected during the installation of lsFusion (by default, ",(0,r.jsx)(s.code,{children:"Program Files/lsFusion <version>"}),"). It is also assumed that all parameters (ports, web context name) are left equal to default values."]})]}),(0,r.jsxs)(a.Z,{value:"linux",children:[(0,r.jsx)(s.p,{children:"Bash scripts using yum / apt (the latest stable releases are used as minor versions):"}),(0,r.jsxs)(s.p,{children:["lsFusion ",(0,r.jsx)(s.strong,{children:"4"})," Server & Client (+ OpenJDK ",(0,r.jsx)(s.strong,{children:"1.8"}),", PostgreSQL ",(0,r.jsx)(s.strong,{children:"13"}),", Tomcat ",(0,r.jsx)(s.strong,{children:"9.0.21"}),"):"]}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"OS"}),(0,r.jsx)(s.th,{children:"Command / Script"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"RHEL 7 / CentOS 7 / Fedora 29"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"source <(curl -s https://download.lsfusion.org/yum/install-lsfusion4)"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Ubuntu 18 / Debian 9"}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"source <(curl -s https://download.lsfusion.org/apt/install-lsfusion4)"})," ",(0,r.jsx)("br",{}),"PostgreSQL installs version ",(0,r.jsx)(s.strong,{children:"10"}),", since that is the only one in the central repository."]})]})]})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"after-installation",children:"After Installation"}),"\n",(0,r.jsx)(s.h3,{id:"ports",children:"Ports"}),"\n",(0,r.jsx)(s.p,{children:"After the installation is completed, the following will by default be locally installed on the computer and launched as services:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["DB server (PostgreSQL) on port ",(0,r.jsx)(s.code,{children:"5432"})]}),"\n",(0,r.jsxs)(s.li,{children:["application server (Server) on port ",(0,r.jsx)(s.code,{children:"7652"})]}),"\n",(0,r.jsxs)(s.li,{children:["web server (Client) on port ",(0,r.jsx)(s.code,{children:"8080"})]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"installing--updating-an-application",children:"Installing / updating an application"}),"\n",(0,r.jsx)(s.p,{children:"In order to upload the developed logic to the installed application server (Server), you must:"}),"\n",(0,r.jsxs)(s.p,{children:["Place ",(0,r.jsx)(s.a,{href:"/v4/Modules",children:"modules"})," developed in the lsFusion language as files with an lsf extension in a folder located in the server's ",(0,r.jsx)(s.a,{href:"/v4/Launch_parameters#appjava",children:"classpath"})," (default value for automatic installation, see below). In addition, the rest of the resource files if any must also be placed there (e.g. report files, compiled Java files, images, etc.). These files may be placed in subfolders of the classpath, as well as inside jar files (zip archives with the jar extension). After all the files have been copied, you need to ",(0,r.jsx)(s.a,{href:"#restart",children:"restart"})," the server."]}),"\n",(0,r.jsx)(s.admonition,{type:"info",children:(0,r.jsxs)(s.p,{children:["It is often convenient to place all project files inside a single jar file. To generate such a file automatically, you can use ",(0,r.jsx)(s.a,{href:"/v4/Development_manual#maven",children:"Maven"})," (with assemble and noserver profiles) or the build tools built into the ",(0,r.jsx)(s.a,{href:"/v4/IDE#build",children:"IDE"}),"."]})}),"\n",(0,r.jsxs)(s.p,{children:["By default, the server's classpath is equal to ",(0,r.jsx)(s.code,{children:"$APP_DIR$;$APP_DIR$/*;server.jar"}),", i.e. the ",(0,r.jsx)(s.code,{children:"$APP_DIR$"})," folder and all its subfolders, all jar files in the ",(0,r.jsx)(s.code,{children:"$APP_DIR$"})," folder (but not its subfolders), and also the jar file of the application server itself."]}),"\n",(0,r.jsxs)(t.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"Linux",value:"linux"}],children:[(0,r.jsx)(a.Z,{value:"win",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"$APP_DIR$"})," is equal to ",(0,r.jsx)(s.code,{children:"$INSTALL_DIR$/lib"})]})}),(0,r.jsxs)(a.Z,{value:"linux",children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"$APP_DIR$"})," is equal to ",(0,r.jsx)(s.code,{children:"/var/lib/lsfusion"})]}),(0,r.jsxs)(s.p,{children:["The application server is installed and started under the automatically created non-privileged user ",(0,r.jsx)(s.code,{children:"lsfusion"})," so files in the folder should be accessible for this user to read."]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"installing--updating-clients",children:"Installing / updating clients"}),"\n",(0,r.jsx)(s.p,{children:"To give users access to the installed system, you must:"}),"\n",(0,r.jsxs)(s.p,{children:["Send users a link to ",(0,r.jsx)(s.code,{children:"http://<web address of the web server (Client)>:8080"}),". When users open this link, they will be redirected by default to the login page, where, if necessary, they can install the desktop client via Java Web Start (requires Java (JDK) installed, for example, by following ",(0,r.jsx)(s.a,{href:"https://developers.redhat.com/products/openjdk/download",children:"this"})," link with registration or this one ",(0,r.jsx)(s.a,{href:"https://github.com/ojdkbuild/ojdkbuild",children:"without"}),"). Web and desktop clients are updated automatically with ",(0,r.jsx)(s.a,{href:"#update",children:"updates to the web server"})," (Client)"]}),"\n",(0,r.jsx)(s.admonition,{type:"info",children:(0,r.jsxs)(s.p,{children:["Under Windows, you can also use desktop client ",(0,r.jsx)(s.a,{href:"https://download.lsfusion.org/exe/",children:"installers"})," (",(0,r.jsx)(s.code,{children:"lsfusion-desktop-*"})," files with the correct OS version and bit width). However, unlike installing with Java Web Start, a desktop client installed in this way will not be automatically updated. Therefore, you will need to update it manually by downloading the file of the new version of the desktop client (",(0,r.jsx)(s.code,{children:"lsfusion-client-4.<new version>.jar"}),") from ",(0,r.jsx)(s.a,{href:"https://download.lsfusion.org/java/",children:"the central server"})," and replacing the ",(0,r.jsx)(s.code,{children:"$INSTALL_DIR$/client.jar"})," file with it."]})}),"\n",(0,r.jsxs)(s.admonition,{type:"warning",children:[(0,r.jsxs)(s.p,{children:["All paths and commands are given below for the major version 4 of the platform (for other versions just replace 4 with the required number, for example ",(0,r.jsx)(s.code,{children:"lsfusion4-server"})," \u2192 ",(0,r.jsx)(s.code,{children:"lsfusion11-server"}),")"]}),(0,r.jsxs)(t.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"Linux",value:"linux"}],children:[(0,r.jsx)(a.Z,{value:"win",children:(0,r.jsx)(s.p,{children:"All paths by default"})}),(0,r.jsx)(a.Z,{value:"linux",children:(0,r.jsx)(s.p,{children:"Paths changed (in particular with symlinks) in accordance with Linux ideology"})})]})]}),"\n",(0,r.jsx)(s.h3,{id:"update",children:"Updating"}),"\n",(0,r.jsx)(s.p,{children:"Programs installed separately (OpenJDK, PostgreSQL) are also updated separately (for more details about this process, see the documentation for these programs)"}),"\n",(0,r.jsxs)(t.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"Linux",value:"linux"}],children:[(0,r.jsxs)(a.Z,{value:"win",children:[(0,r.jsxs)(s.p,{children:["Platform components are also updated separately from each other. To do this, you must download the file of the new version of the component from ",(0,r.jsx)(s.a,{href:"https://download.lsfusion.org/java/",children:"the central server"})," and replace the following file with it:"]}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Component"}),(0,r.jsx)(s.th,{children:"Files"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Application Server (Server)"}),(0,r.jsxs)(s.td,{children:["File on the central server: ",(0,r.jsx)(s.code,{children:"lsfusion-server-4.<new version>.jar"}),(0,r.jsx)("br",{}),"File to replace: ",(0,r.jsx)(s.code,{children:"$INSTALL_DIR$/Server/server.jar"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Web server (Client)"}),(0,r.jsxs)(s.td,{children:["File on the central server: ",(0,r.jsx)(s.code,{children:"lsfusion-server-4.<new version>.jar"}),(0,r.jsx)("br",{}),"File to replace: ",(0,r.jsx)(s.code,{children:"$INSTALL_DIR$/Client/webapps/ROOT.war"}),(0,r.jsx)("br",{}),"To update Tomcat, you need to download the archive with the new version of Tomcat and unzip it to the ",(0,r.jsx)(s.code,{children:"$INSTALL_DIR$/Client"})," folder without the ",(0,r.jsx)(s.code,{children:"webapps"})," directory and the ",(0,r.jsx)(s.a,{href:"#settings",children:"startup parameters"})," file"]})]})]})]})]}),(0,r.jsxs)(a.Z,{value:"linux",children:[(0,r.jsx)(s.p,{children:"Platform components are also updated separately from each other. To do this, you must run the commands:"}),(0,r.jsx)(s.h4,{id:"application-server-server",children:"Application Server (Server)"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"OS"}),(0,r.jsx)(s.th,{children:"Command"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"RHEL 7 / CentOS 7 / Fedora 29"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"yum update lsfusion4_server"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Ubuntu 18 / Debian 9"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"apt install lsfusion4_server"})})]})]})]}),(0,r.jsx)(s.h4,{id:"web-server-client",children:"Web server (Client)"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"OS"}),(0,r.jsx)(s.th,{children:"Command"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"RHEL 7 / CentOS 7 / Fedora 29"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"yum update lsfusion4_client"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Ubuntu 18 / Debian 9"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"apt install lsfusion4_client"})})]})]})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"custom-installation",children:"Custom installation"}),"\n",(0,r.jsx)(s.p,{children:"If any of the programs listed in the installation (platform components) do not need to be installed / are already installed on your computer:"}),"\n",(0,r.jsxs)(t.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"Linux",value:"linux"}],children:[(0,r.jsx)(a.Z,{value:"win",children:(0,r.jsx)(s.p,{children:"These programs can be excluded during installation using the corresponding graphical interface."})}),(0,r.jsxs)(a.Z,{value:"linux",children:[(0,r.jsx)(s.p,{children:"The following are scripts for installing specific platform components:"}),(0,r.jsxs)(s.p,{children:["Database Server - PostgreSQL ",(0,r.jsx)(s.strong,{children:"11"}),":"]}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"OS"}),(0,r.jsx)(s.th,{children:"Command / Script"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"RHEL 7 / CentOS 7 / Fedora 29"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"source <(curl -s https://download.lsfusion.org/yum/install-lsfusion4-db)"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Ubuntu 18 / Debian 9"}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"source <(curl -s https://download.lsfusion.org/apt/install-lsfusion4-db)"})," ",(0,r.jsx)("br",{}),"PostgreSQL ",(0,r.jsx)(s.code,{children:"10"})]})]})]})]}),(0,r.jsxs)(s.p,{children:["Application Server - lsFusion 4 Server (+ OpenJDK ",(0,r.jsx)(s.strong,{children:"1.8"}),"):"]}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"OS"}),(0,r.jsx)(s.th,{children:"Command / Script"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"RHEL 7+ / CentOS 7+ / Fedora 29+"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"source <(curl -s https://download.lsfusion.org/yum/install-lsfusion4-server)"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Ubuntu 18 / Debian 9"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"source <(curl -s https://download.lsfusion.org/apt/install-lsfusion4-server)"})})]})]})]}),(0,r.jsx)(s.p,{children:"Web server - lsFusion 4 Client (+ Tomcat 9.0.20):"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"OS"}),(0,r.jsx)(s.th,{children:"Command / Script"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"RHEL 7+ / CentOS 7+ / Fedora 29+"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"source <(curl -s https://download.lsfusion.org/yum/install-lsfusion4-client)"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Ubuntu 18 / Debian 9"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"source <(curl -s https://download.lsfusion.org/apt/install-lsfusion4-client)"})})]})]})]})]})]}),"\n",(0,r.jsxs)(s.p,{children:["When installing platform components on different computers, it is also necessary to ",(0,r.jsx)(s.a,{href:"#settings",children:"configure the parameters"})," to connect them to each other\nWhen installing platform components on different computers, it is also necessary to ",(0,r.jsx)(s.a,{href:"#settings",children:"configure the parameters"})," to connect them to each other"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Components on different computers"}),(0,r.jsx)(s.th,{children:"Connection parameters"}),(0,r.jsx)(s.th,{children:"Configurable file"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"DB server and application server (Server)"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/v4/Launch_parameters",children:"Application server to DB server"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.a,{href:"#settings",children:"File"})," lsFusion application server startup parameters"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Application server (Server) and web server (Client)"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/v4/Launch_parameters#connectapp",children:"Web server to application server"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.a,{href:"#settings",children:"File"})," lsFusion web server startup parameters"]})]})]})]}),"\n",(0,r.jsx)(s.admonition,{type:"info",children:(0,r.jsx)(s.p,{children:"When installing under Windows, the above parameters are requested during the installation process and the parameter files are configured automatically."})}),"\n",(0,r.jsx)(s.h2,{id:"manual-setup-file-paths-service-names",children:"Manual setup (file paths, service names)"}),"\n",(0,r.jsx)(s.h3,{id:"settings",children:(0,r.jsx)(s.a,{href:"/v4/Launch_parameters",children:"Startup parameters"})}),"\n",(0,r.jsxs)(t.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"Linux",value:"linux"}],children:[(0,r.jsx)(a.Z,{value:"win",children:(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Component"}),(0,r.jsx)(s.th,{children:"java"}),(0,r.jsx)(s.th,{children:"lsfusion"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Application server (Server)"}),(0,r.jsxs)(s.td,{children:["Java tab in the graphical interface ",(0,r.jsx)(s.code,{children:"$INSTALL_DIR/Server/bin/lsfusion4_serverw.exe"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.a,{href:"/v4/Launch_parameters#appjava",children:(0,r.jsx)(s.code,{children:"classpath"})})," - the Classpath parameter in the same tab"]}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"$INSTALL_DIR/Server/conf/settings.properties"})," file"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Web server (Client)"}),(0,r.jsxs)(s.td,{children:["Java tab in the graphical interface ",(0,r.jsx)(s.code,{children:"$INSTALL_DIR/Client/bin/lsfusion4_serverw.exe"})]}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"$INSTALL_DIR/Client/conf/catalina/localhost/ROOT.xml"})," file"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Desktop client"}),(0,r.jsxs)(s.td,{children:["Java parameters are set inside the ",(0,r.jsx)(s.code,{children:"j2se"})," tag in the jnlp file."]}),(0,r.jsx)(s.td,{})]})]})]})}),(0,r.jsx)(a.Z,{value:"linux",children:(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Component"}),(0,r.jsx)(s.th,{children:"java"}),(0,r.jsx)(s.th,{children:"lsfusion"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Application server (Server)"}),(0,r.jsxs)(s.td,{children:["The ",(0,r.jsx)(s.code,{children:"FUSION_OPTS"})," parameter in the file ",(0,r.jsx)(s.code,{children:"/etc/lsfusion4-server/lsfusion.conf"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.a,{href:"/v4/Launch_parameters#appjava",children:(0,r.jsx)(s.code,{children:"classpath"})})," - the ",(0,r.jsx)(s.code,{children:"CLASSPATH"})," parameter in the same file"]}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"/etc/lsfusion4-server/settings.properties"})," file"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Web server (Client)"}),(0,r.jsxs)(s.td,{children:["The ",(0,r.jsx)(s.code,{children:"CATALINA_OPTS"})," parameter in the file ",(0,r.jsx)(s.code,{children:"/etc/lsfusion4-client/lsfusion.conf"})]}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"/etc/lsfusion4-client/catalina/localhost/ROOT.xml"})," file"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Desktop client"}),(0,r.jsxs)(s.td,{children:["Java parameters are set inside the ",(0,r.jsx)(s.code,{children:"j2se"})," tag in the jnlp file."]}),(0,r.jsx)(s.td,{})]})]})]})})]}),"\n",(0,r.jsx)(s.h3,{id:"restart",children:"Restart"}),"\n",(0,r.jsx)(s.p,{children:"Any changes made to the startup parameters, as well as changes to lsFusion modules, require a server restart (when changing lsFusion modules only the application server (Server)). This can be done with:"}),"\n",(0,r.jsxs)(t.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"Linux",value:"linux"}],children:[(0,r.jsxs)(a.Z,{value:"win",children:[(0,r.jsx)(s.h4,{id:"application-server-server-1",children:"Application server (Server)"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",metastring:'script title="GUI"',children:"Control Panel > Admin > Services > lsFusion 4 Server\n"})}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",metastring:'script title="Command line" ',children:"# Stop server\n$INSTALL_DIR/Server/bin/lsfusion4_server.exe //SS//lsfusion4_server\n \n# Start server\n$INSTALL_DIR/Server/bin/lsfusion4_server.exe //ES//lsfusion4_server\n"})}),(0,r.jsx)(s.h4,{id:"web-server-client-1",children:"Web server (Client)"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",metastring:'script title="GUI"',children:"Control Panel > Admin > Services > lsFusion 4 Client\n"})}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",metastring:'script title="Command line"',children:"# Stop server\n$INSTALL_DIR/Client/bin/lsfusion4_client.exe //SS//lsfusion4_client\n \n# Start server\n$INSTALL_DIR/Client/bin/lsfusion4_client.exe //ES//lsfusion4_client\n"})})]}),(0,r.jsxs)(a.Z,{value:"linux",children:[(0,r.jsx)(s.h4,{id:"application-server-server-2",children:"Application server (Server)"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",metastring:'script title="Command line" ',children:"# Stop server\nsystemctl stop lsfusion4-server\n \n# Start server\nsystemctl start lsfusion4-server\n"})}),(0,r.jsx)(s.h4,{id:"web-server-client-2",children:"Web server (Client)"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",metastring:'script title="Command line"',children:"# Stop client\nsystemctl stop lsfusion4-client\n \n# Start client\nsystemctl start lsfusion4-client\n"})})]})]}),"\n",(0,r.jsx)(s.h3,{id:"logs",children:(0,r.jsx)(s.a,{href:"/v4/Journals_and_logs",children:"Logs"})}),"\n",(0,r.jsx)(s.p,{children:"Platform logs are written to the following folders:"}),"\n",(0,r.jsxs)(t.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"Linux",value:"linux"}],children:[(0,r.jsx)(a.Z,{value:"win",children:(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Component"}),(0,r.jsx)(s.th,{children:"Folder"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Application server (Server)"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"$INSTALL_DIR$/Server/logs"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Web server (Client)"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"$INSTALL_DIR$/Client/logs"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Desktop client"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Users/<username>/.fusion/logs"})})]})]})]})}),(0,r.jsx)(a.Z,{value:"linux",children:(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Component"}),(0,r.jsx)(s.th,{children:"Folder"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Application server (Server)"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"/var/log/lsfusion4-server"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Web server (Client)"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"/var/log/lsfusion4-client"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Desktop client"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"/home/<username>/.fusion/logs"})})]})]})]})})]}),"\n",(0,r.jsx)(s.p,{children:"The main logs (including the process of stopping and starting the server) are located in:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Application server (Server) - ",(0,r.jsx)(s.code,{children:"stdout"})]}),"\n",(0,r.jsxs)(s.li,{children:["Web server (Client) - ",(0,r.jsx)(s.code,{children:"catalina.out"})," (since the web server runs on Tomcat)."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"locale",children:(0,r.jsx)(s.a,{href:"/v4/Internationalization",children:"Locale"})}),"\n",(0,r.jsx)(s.p,{children:"The locale used by the platform is determined based on the locale installed in the operating system. If necessary, it can be changed with:"}),"\n",(0,r.jsxs)(t.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"Linux",value:"linux"}],children:[(0,r.jsx)(a.Z,{value:"win",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",metastring:'script title="GUI"',children:"Control Panel > Language and Regional Standards\n"})})}),(0,r.jsx)(a.Z,{value:"linux",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",metastring:'script title="Command line"',children:"localectl set-locale LANG=ru_RU.utf8\n"})})})]})]})}function x(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},97645:function(e,s,n){n.d(s,{Z:()=>i});var l=n("85893");n("67294");var r=n("67026");function i(e){let{children:s,hidden:n,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)("tabItem_Ymn6",i),hidden:n,children:s})}},58168:function(e,s,n){n.d(s,{Z:()=>m});var l=n("85893"),r=n("67294"),i=n("67026"),t=n("34718"),a=n("16550"),d=n("8714"),o=n("89207"),c=n("69413"),h=n("54510");function u(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||r.isValidElement(e)&&function(e){let{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function x(e){let{value:s,tabValues:n}=e;return n.some(e=>e.value===s)}var j=n("6735");function p(e){let{className:s,block:n,selectedValue:r,selectValue:a,tabValues:d}=e,o=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.o5)(),h=e=>{let s=e.currentTarget,n=d[o.indexOf(s)].value;n!==r&&(c(s),a(n))},u=e=>{let s=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{let n=o.indexOf(e.currentTarget)+1;s=o[n]??o[0];break}case"ArrowLeft":{let n=o.indexOf(e.currentTarget)-1;s=o[n]??o[o.length-1]}}s?.focus()};return(0,l.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},s),children:d.map(e=>{let{value:s,label:n,attributes:t}=e;return(0,l.jsx)("li",{role:"tab",tabIndex:r===s?0:-1,"aria-selected":r===s,ref:e=>{o.push(e)},onKeyDown:u,onClick:h,...t,className:(0,i.Z)("tabs__item","tabItem_LNqP",t?.className,{"tabs__item--active":r===s}),children:n??s},s)})})}function v(e){let{lazy:s,children:n,selectedValue:t}=e,a=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){let e=a.find(e=>e.props.value===t);return e?(0,r.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,l.jsx)("div",{className:"margin-top--md",children:a.map((e,s)=>(0,r.cloneElement)(e,{key:s,hidden:e.props.value!==t}))})}function f(e){let s=function(e){let{defaultValue:s,queryString:n=!1,groupId:l}=e,i=function(e){let{values:s,children:n}=e;return(0,r.useMemo)(()=>{let e=s??u(n).map(e=>{let{props:{value:s,label:n,attributes:l,default:r}}=e;return{value:s,label:n,attributes:l,default:r}});return!function(e){let s=(0,c.lx)(e,(e,s)=>e.value===s.value);if(s.length>0)throw Error(`Docusaurus error: Duplicate values "${s.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[s,n])}(e),[t,j]=(0,r.useState)(()=>(function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!x({value:s,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}let l=n.find(e=>e.default)??n[0];if(!l)throw Error("Unexpected error: 0 tabValues");return l.value})({defaultValue:s,tabValues:i})),[p,v]=function(e){let{queryString:s=!1,groupId:n}=e,l=(0,a.k6)(),i=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,o._X)(i),(0,r.useCallback)(e=>{if(!i)return;let s=new URLSearchParams(l.location.search);s.set(i,e),l.replace({...l.location,search:s.toString()})},[i,l])]}({queryString:n,groupId:l}),[f,m]=function(e){let{groupId:s}=e,n=s?`docusaurus.tab.${s}`:null,[l,i]=(0,h.Nk)(n);return[l,(0,r.useCallback)(e=>{n&&i.set(e)},[n,i])]}({groupId:l}),g=(()=>{let e=p??f;return x({value:e,tabValues:i})?e:null})();return(0,d.Z)(()=>{g&&j(g)},[g]),{selectedValue:t,selectValue:(0,r.useCallback)(e=>{if(!x({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);j(e),v(e),m(e)},[v,m,i]),tabValues:i}}(e);return(0,l.jsxs)("div",{className:(0,i.Z)("tabs-container","tabList__CuJ"),children:[(0,l.jsx)(p,{...s,...e}),(0,l.jsx)(v,{...s,...e})]})}function m(e){let s=(0,j.Z)();return(0,l.jsx)(f,{...e,children:u(e.children)},String(s))}},50065:function(e,s,n){n.d(s,{Z:function(){return a},a:function(){return t}});var l=n(67294);let r={},i=l.createContext(r);function t(e){let s=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),l.createElement(i.Provider,{value:s},e.children)}}}]);