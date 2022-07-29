"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[47366],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37546:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return p}});var a=n(83117),i=(n(67294),n(3905));const r={title:"For development"},o=void 0,l={unversionedId:"Development_manual",id:"Development_manual",title:"For development",description:"To install the application server, IDE, and client, Java version 8 or later must first be installed on the computer.",source:"@site/docs/Development_manual.md",sourceDirName:".",slug:"/Development_manual",permalink:"/next/Development_manual",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Development_manual.md",tags:[],version:"current",lastUpdatedAt:1651146770,formattedLastUpdatedAt:"Apr 28, 2022",frontMatter:{title:"For development"},sidebar:"install",previous:{title:"Install manually",permalink:"/next/Manual_installation"},next:{title:"For production",permalink:"/next/Execution_manual"}},s={},p=[{value:"Installing the IDE Plugin",id:"installing-the-ide-plugin",level:3},{value:"Installing an application server via IDE",id:"installing-an-application-server-via-ide",level:3},{value:"Installing a desktop client",id:"installing-a-desktop-client",level:3},{value:"Installation in existing Java projects",id:"installation-in-existing-java-projects",level:2},{value:"Installing an application server via IDE",id:"existingide",level:3},{value:"Installing the application server via Maven (only for Maven projects)",id:"maven",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"To install the application server, IDE, and client, Java version 8 or later must first be installed on the computer.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For the application server to work, it must have access to the PostgreSQL database management server of at least version 9.6. The PostgreSQL server must accept connections using password authentication by the md5 or trust method. You can configure authorization by editing the ",(0,i.kt)("inlineCode",{parentName:"p"},"pg_hba.conf")," file, as described in the PostgreSQL ",(0,i.kt)("a",{parentName:"p",href:"http://www.postgresql.org/docs/9.2/static/auth-pg-hba-conf.html"},"documentation"),".")),(0,i.kt)("h3",{id:"installing-the-ide-plugin"},"Installing the IDE Plugin"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"To install the plug-in, Intellij IDEA version 2020.1 or higher must be installed on the computer.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In the IDEA settings (",(0,i.kt)("inlineCode",{parentName:"li"},"File > Settings"),"), select ",(0,i.kt)("inlineCode",{parentName:"li"},"Plugins > Browse repositories"),", find the ",(0,i.kt)("a",{parentName:"li",href:"https://plugins.jetbrains.com/plugin/7601-lsfusion"},"lsFusion plugin"),", click ",(0,i.kt)("inlineCode",{parentName:"li"},"Install"),", and restart IDEA.")),(0,i.kt)("h3",{id:"installing-an-application-server-via-ide"},"Installing an application server via IDE"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When ",(0,i.kt)("a",{parentName:"li",href:"/next/IDE#newproject"},"creating a new lsFusion project")," click the ",(0,i.kt)("inlineCode",{parentName:"li"},"Download")," button opposed to the ",(0,i.kt)("inlineCode",{parentName:"li"},"lsFusion library"),": IDEA automatically downloads the JAR file of the latest (non-beta) version of the lsFusion server from the ",(0,i.kt)("a",{parentName:"li",href:"https://download.lsfusion.org/java"},"central server")," and installs this file as a dependency of this project (or rather, as its only module: ",(0,i.kt)("inlineCode",{parentName:"li"},"File > Project Structure > Modules > project name > Dependencies tab"),"). Also, if necessary, you can download another version of the server (different from the latest) or select a previously downloaded server JAR file on the local disk.  ")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Note that IDEA remembers the downloaded/specified application server file in its settings and automatically sets it when creating other lsFusion projects. ")),(0,i.kt)("h3",{id:"installing-a-desktop-client"},"Installing a desktop client"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"After the server starts, in the start log one of the last lines will be a line with a link to the JNLP file (for example, ",(0,i.kt)("a",{parentName:"li",href:"https://download.lsfusion.org/java/lsfusion-client-4.1.jnlp"},"https://download.lsfusion.org/java/lsfusion-client-4.1.jnlp"),"), which when run will automatically install the client using Java Web Start technology.")),(0,i.kt)("h2",{id:"installation-in-existing-java-projects"},"Installation in existing Java projects"),(0,i.kt)("h3",{id:"existingide"},"Installing an application server via IDE"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Download the ",(0,i.kt)("inlineCode",{parentName:"li"},"lsfusion-server-<version>.jar")," file of the required version (for example, ",(0,i.kt)("inlineCode",{parentName:"li"},"lsfusion-server-4.1.jar"),") from the ",(0,i.kt)("a",{parentName:"li",href:"https://download.lsfusion.org/java"},"central server")," to the folder of the required project module (we will call this folder ",(0,i.kt)("inlineCode",{parentName:"li"},"$FUSION_DIR$"),")."),(0,i.kt)("li",{parentName:"ul"},"If the database server is located on another computer, and if authorization is enabled on the database server (for example, for Postgres, using the md5 method and if the postgres password is not empty), set the ",(0,i.kt)("a",{parentName:"li",href:"/next/Launch_parameters#connectdb"},"database server connection parameters")," (e.g., by creating a startup ",(0,i.kt)("a",{parentName:"li",href:"/next/Launch_parameters#filesettings"},"settings file")," in the project folder)"),(0,i.kt)("li",{parentName:"ul"},"Add the downloaded file as a dependency of the required project module (",(0,i.kt)("inlineCode",{parentName:"li"},"File > Project Structure > Modules > module name > Dependencies tab > +"),") "),(0,i.kt)("li",{parentName:"ul"},"Create a ",(0,i.kt)("a",{parentName:"li",href:"/next/IDE#configuration"},"startup configuration")," (when creating a new lsFusion project, this and the upper two sections are done automatically). If the platform is loaded as a library, instead of creating a configuration you can use a Spring bean with the ",(0,i.kt)("inlineCode",{parentName:"li"},"logicsInstance")," ID from the ",(0,i.kt)("inlineCode",{parentName:"li"},"lsfusion.xml")," configuration file, and its ",(0,i.kt)("inlineCode",{parentName:"li"},"start()")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"stop()")," methods, responsible for starting and stopping the application server, respectively.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For an existing maven project, server installation and loading can (and should) be done differently (see below). ")),(0,i.kt)("h3",{id:"maven"},"Installing the application server via Maven (only for Maven projects)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Register in ",(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml")," or as parent ",(0,i.kt)("inlineCode",{parentName:"p"},"lsfusion.platform.build:logics"),", or as dependency ",(0,i.kt)("inlineCode",{parentName:"p"},"lsfusion.platform:server")," (at present these artifacts are not in the central repository, and so the path to the lsFusion repository must be specified additionally). For example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<repositories>\n    <repository>\n        <id>lsfusion</id>\n        <name>lsFusion Public Repository</name>\n        <url>https://repo.lsfusion.org</url>\n    </repository>\n</repositories>\n\n<parent>\n    <groupId>lsfusion.platform.build</groupId>\n    <artifactId>logics</artifactId>\n    <version>2.0</version>\n</parent>\n")),(0,i.kt)("p",{parentName:"li"},"The first option (with parent) is good in that:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Maven will automatically configure an uber-jar assembly (i.e., a single file containing all the project files). You can start this assembly using maven profile ",(0,i.kt)("inlineCode",{parentName:"p"},"assemble")," - when this profile is activated, a JAR file with an ",(0,i.kt)("inlineCode",{parentName:"p"},"assembly")," postfix is additionally generated in the package phase, containing not only the project files, but also the files of all the project dependencies, including files of the application server itself. However, in cases where the application server is installed separately from the application itself (for example, using ",(0,i.kt)("a",{parentName:"p",href:"/next/Execution_auto"},"automatic installation"),"), including the application server in the resulting uber-jar is undesirable. Therefore, in addition to ",(0,i.kt)("inlineCode",{parentName:"p"},"assemble"),", the platform also supports the ",(0,i.kt)("inlineCode",{parentName:"p"},"noserver")," maven profile, which when activated (along with ",(0,i.kt)("inlineCode",{parentName:"p"},"assemble"),"), at creation of a JAR file with the ",(0,i.kt)("inlineCode",{parentName:"p"},"assembly")," postfix the application server files will not be included (example command: ",(0,i.kt)("inlineCode",{parentName:"p"},"mvn package assemble noserver"),").")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Maven and IDE will automatically determine the source and resources directories (for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"src/main/lsfusion")," is the default)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Maven will automatically configure weaving of the application server aspects. However, this is only rarely necessary - if the project has application RMI servers (that is, objects inheriting ",(0,i.kt)("inlineCode",{parentName:"p"},"lsfusion.interop.server.RmiServerInterface"),", which are accessed remotely via RMI), or various system annotations of the application server are used (for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"lsfusion.server.base.caches.IdentityLazy")," for caching execution results)."))),(0,i.kt)("p",{parentName:"li"},"In the second case, all of the above must be manually configured directly by the developer."),(0,i.kt)("p",{parentName:"li"},"As for other projects not created using the operation for creating a new lsFusion project, for a maven project you must manually create a ",(0,i.kt)("a",{parentName:"p",href:"/next/Launch_parameters#filesettings"},"settings file")," and a ",(0,i.kt)("a",{parentName:"p",href:"/next/IDE#configuration"},"startup configuration")," (or, if the platform needs to be loaded as a library, use a ",(0,i.kt)("a",{parentName:"p",href:"#existingide"},"special Spring bean"),")"))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If working with a large project, and ",(0,i.kt)("a",{parentName:"p",href:"/next/Metaprogramming"},"metacodes")," are actively being used in it (such as ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lsfusion-solutions/erp"},"ERP"),"), it is recommended that in the IDEA startup parameters (",(0,i.kt)("inlineCode",{parentName:"p"},"idea.exe.vmoptions")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"idea64.exe.vmoptions"),") the ",(0,i.kt)("inlineCode",{parentName:"p"},"Xmx")," be increased to at least 2gb.")))}d.isMDXComponent=!0}}]);