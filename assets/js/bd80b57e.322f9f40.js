"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[65290],{84155:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=i(74848),s=i(28453);const a={title:"For development"},l=void 0,o={id:"Development_manual",title:"For development",description:"To install the application server, IDE, and client, Java version 8 or later must first be installed on the computer.",source:"@site/versioned_docs/version-v5/Development_manual.md",sourceDirName:".",slug:"/Development_manual",permalink:"/Development_manual",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/Development_manual.md",tags:[],version:"v5",lastUpdatedAt:1714031569,formattedLastUpdatedAt:"Apr 25, 2024",frontMatter:{title:"For development"},sidebar:"install",previous:{title:"Install manually",permalink:"/Manual_installation"},next:{title:"For production",permalink:"/Execution_manual"}},r={},c=[{value:"Installing the IDE Plugin",id:"installing-the-ide-plugin",level:3},{value:"Installing an application server via IDE",id:"installing-an-application-server-via-ide",level:3},{value:"Install desktop client",id:"install-desktop-client",level:3},{value:"Install Web Client",id:"install-web-client",level:3},{value:"Installation in existing Java projects",id:"installation-in-existing-java-projects",level:2},{value:"Installing an application server via IDE",id:"existingide",level:3},{value:"Installing the application server via Maven (only for Maven projects)",id:"maven",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"To install the application server, IDE, and client, Java version 8 or later must first be installed on the computer."})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["For the application server to work, it must have access to the PostgreSQL database management server of at least version 9.6. The PostgreSQL server must accept connections using password authentication by the md5 or trust method. You can configure authorization by editing the ",(0,t.jsx)(n.code,{children:"pg_hba.conf"})," file, as described in the PostgreSQL ",(0,t.jsx)(n.a,{href:"http://www.postgresql.org/docs/9.2/static/auth-pg-hba-conf.html",children:"documentation"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"installing-the-ide-plugin",children:"Installing the IDE Plugin"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"To install the plug-in, Intellij IDEA version 2020.1 or higher must be installed on the computer."})}),"\n",(0,t.jsx)("iframe",{width:"245px",height:"48px",src:"https://plugins.jetbrains.com/embeddable/install/7601"}),"\n",(0,t.jsx)(n.h3,{id:"installing-an-application-server-via-ide",children:"Installing an application server via IDE"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["When ",(0,t.jsx)(n.a,{href:"/IDE#newproject",children:"creating a new lsFusion project"})," click the ",(0,t.jsx)(n.code,{children:"Download"})," button opposed to the ",(0,t.jsx)(n.code,{children:"lsFusion library"}),": IDEA automatically downloads the JAR file of the latest (non-beta) version of the lsFusion server from the ",(0,t.jsx)(n.a,{href:"https://download.lsfusion.org/java/",children:"central server"})," and installs this file as a dependency of this project (or rather, as its only module: ",(0,t.jsx)(n.code,{children:"File > Project Structure > Modules > project name > Dependencies tab"}),"). Also, if necessary, you can download another version of the server (different from the latest) or select a previously downloaded server JAR file on the local disk."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Note that IDEA remembers the downloaded/specified application server file in its settings and automatically sets it when creating other lsFusion projects."})}),"\n",(0,t.jsx)(n.h3,{id:"install-desktop-client",children:"Install desktop client"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["After the server starts, in the start log one of the last lines will be a line with a link to the JNLP file (for example, ",(0,t.jsx)(n.a,{href:"https://download.lsfusion.org/java/lsfusion-client-5.1.jnlp",children:"https://download.lsfusion.org/java/lsfusion-client-5.1.jnlp"}),"), which when run will automatically install the client using Java Web Start technology."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"install-web-client",children:"Install Web Client"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Install ",(0,t.jsx)(n.a,{href:"https://tomcat.apache.org/download-90.cgi",children:"Apache Tomcat"})," version 9."]}),"\n",(0,t.jsxs)(n.li,{children:["Add ",(0,t.jsx)(n.code,{children:"--add-opens=java.base/java.util=ALL-UNNAMED"})," to the Apache Tomcat startup parameters if Java version higher than 17 is used."]}),"\n",(0,t.jsxs)(n.li,{children:["Download ",(0,t.jsx)(n.a,{href:"https://download.lsfusion.org/java/lsfusion-client-5.1.war",children:"web-client"})," of lsFusion platform."]}),"\n",(0,t.jsx)(n.li,{children:"Place the war file in Apache Tomcat webapps folder, for example, with the name lsfusion.war."}),"\n",(0,t.jsxs)(n.li,{children:["The web client will be available at ",(0,t.jsx)(n.a,{href:"http://localhost:8080/lsfusion",children:"http://localhost:8080/lsfusion"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"installation-in-existing-java-projects",children:"Installation in existing Java projects"}),"\n",(0,t.jsx)(n.h3,{id:"existingide",children:"Installing an application server via IDE"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Download the ",(0,t.jsx)(n.code,{children:"lsfusion-server-<version>.jar"})," file of the required version (for example, ",(0,t.jsx)(n.code,{children:"lsfusion-server-5.1.jar"}),") from the ",(0,t.jsx)(n.a,{href:"https://download.lsfusion.org/java/",children:"central server"})," to the folder of the required project module (we will call this folder ",(0,t.jsx)(n.code,{children:"$FUSION_DIR$"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:["If the database server is located on another computer, and if authorization is enabled on the database server (for example, for Postgres, using the md5 method and if the postgres password is not empty), set the ",(0,t.jsx)(n.a,{href:"/Launch_parameters#connectdb",children:"database server connection parameters"})," (e.g., by creating a startup ",(0,t.jsx)(n.a,{href:"/Launch_parameters#filesettings",children:"settings file"})," in the project folder)"]}),"\n",(0,t.jsxs)(n.li,{children:["Add the downloaded file as a dependency of the required project module (",(0,t.jsx)(n.code,{children:"File > Project Structure > Modules > module name > Dependencies tab > +"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["Create a ",(0,t.jsx)(n.a,{href:"/IDE#configuration",children:"startup configuration"})," (when creating a new lsFusion project, this and the upper two sections are done automatically). If the platform is loaded as a library, instead of creating a configuration you can use a Spring bean with the ",(0,t.jsx)(n.code,{children:"logicsInstance"})," ID from the ",(0,t.jsx)(n.code,{children:"lsfusion.xml"})," configuration file, and its ",(0,t.jsx)(n.code,{children:"start()"})," and ",(0,t.jsx)(n.code,{children:"stop()"})," methods, responsible for starting and stopping the application server, respectively."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"For an existing maven project, server installation and loading can (and should) be done differently (see below)."})}),"\n",(0,t.jsx)(n.h3,{id:"maven",children:"Installing the application server via Maven (only for Maven projects)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Register in ",(0,t.jsx)(n.code,{children:"pom.xml"})," or as parent ",(0,t.jsx)(n.code,{children:"lsfusion.platform.build:logics"}),", or as dependency ",(0,t.jsx)(n.code,{children:"lsfusion.platform:server"})," (at present these artifacts are not in the central repository, and so the path to the lsFusion repository must be specified additionally). For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<repositories>\n    <repository>\n        <id>lsfusion</id>\n        <name>lsFusion Public Repository</name>\n        <url>https://repo.lsfusion.org</url>\n    </repository>\n</repositories>\n\n<parent>\n    <groupId>lsfusion.platform.build</groupId>\n    <artifactId>logics</artifactId>\n    <version>5.1</version>\n</parent>\n"})}),"\n",(0,t.jsx)(n.p,{children:"The first option (with parent) is good in that:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Maven will automatically configure an uber-jar assembly (i.e., a single file containing all the project files). You can start this assembly using maven profile ",(0,t.jsx)(n.code,{children:"assemble"})," - when this profile is activated, a JAR file with an ",(0,t.jsx)(n.code,{children:"assembly"})," postfix is additionally generated in the package phase, containing not only the project files, but also the files of all the project dependencies, including files of the application server itself. However, in cases where the application server is installed separately from the application itself (for example, using ",(0,t.jsx)(n.a,{href:"/Execution_auto",children:"automatic installation"}),"), including the application server in the resulting uber-jar is undesirable. Therefore, in addition to ",(0,t.jsx)(n.code,{children:"assemble"}),", the platform also supports the ",(0,t.jsx)(n.code,{children:"noserver"})," maven profile, which when activated (along with ",(0,t.jsx)(n.code,{children:"assemble"}),"), at creation of a JAR file with the ",(0,t.jsx)(n.code,{children:"assembly"})," postfix the application server files will not be included (example command: ",(0,t.jsx)(n.code,{children:"mvn package -P assemble,noserver"}),")."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Maven and IDE will automatically determine the source and resources directories (for example, ",(0,t.jsx)(n.code,{children:"src/main/lsfusion"})," is the default)"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Maven will automatically configure weaving of the application server aspects. However, this is only rarely necessary - if the project has application RMI servers (that is, objects inheriting ",(0,t.jsx)(n.code,{children:"lsfusion.interop.server.RmiServerInterface"}),", which are accessed remotely via RMI), or various system annotations of the application server are used (for example, ",(0,t.jsx)(n.code,{children:"lsfusion.server.base.caches.IdentityLazy"})," for caching execution results)."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In the second case, all of the above must be manually configured directly by the developer."}),"\n",(0,t.jsxs)(n.p,{children:["As for other projects not created using the operation for creating a new lsFusion project, for a maven project you must manually create a ",(0,t.jsx)(n.a,{href:"/Launch_parameters#filesettings",children:"settings file"})," and a ",(0,t.jsx)(n.a,{href:"/IDE#configuration",children:"startup configuration"})," (or, if the platform needs to be loaded as a library, use a ",(0,t.jsx)(n.a,{href:"#existingide",children:"special Spring bean"}),")"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["If working with a large project, and ",(0,t.jsx)(n.a,{href:"/Metaprogramming",children:"metacodes"})," are actively being used in it (such as ",(0,t.jsx)(n.a,{href:"https://github.com/lsfusion-solutions/erp",children:"ERP"}),"), it is recommended that in the IDEA startup parameters (",(0,t.jsx)(n.code,{children:"idea.exe.vmoptions"})," or ",(0,t.jsx)(n.code,{children:"idea64.exe.vmoptions"}),") the ",(0,t.jsx)(n.code,{children:"Xmx"})," be increased to at least 2gb."]})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var t=i(96540);const s={},a=t.createContext(s);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);