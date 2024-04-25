"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[37999],{36515:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=s(74848),i=s(28453);const r={title:"Execution (manual)"},o=void 0,l={id:"Execution_manual",title:"Execution (manual)",description:"To install the application server, web server and client, Java version 8 or later must first be installed on the computer.",source:"@site/versioned_docs/version-v4/Execution_manual.md",sourceDirName:".",slug:"/Execution_manual",permalink:"/v4/Execution_manual",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Execution_manual.md",tags:[],version:"v4",lastUpdatedAt:1714031569,formattedLastUpdatedAt:"Apr 25, 2024",frontMatter:{title:"Execution (manual)"},sidebar:"install",previous:{title:"Development (manual)",permalink:"/v4/Development_manual"}},a={},c=[{value:"Installing the application server as a service",id:"installing-the-application-server-as-a-service",level:3},{value:"Installing the web server (web and desktop client) as a service",id:"appservice",level:3},{value:"Installing only the desktop client (on the client&#39;s computer)",id:"installing-only-the-desktop-client-on-the-clients-computer",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"To install the application server, web server and client, Java version 8 or later must first be installed on the computer."})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["For the application server to work, it must have access to the PostgreSQL database management server of at least version 9.6. The PostgreSQL server must accept connections using password authentication by the md5 or trust method. You can configure authorization by editing the ",(0,t.jsx)(n.code,{children:"pg_hba.conf"})," file, as described in the ",(0,t.jsx)(n.a,{href:"http://www.postgresql.org/docs/9.2/static/auth-pg-hba-conf.html",children:"PostgreSQL"})," documentation."]})}),"\n",(0,t.jsx)(n.h3,{id:"installing-the-application-server-as-a-service",children:"Installing the application server as a service"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Download the file ",(0,t.jsx)(n.code,{children:"lsfusion-server-<version>.jar"})," of the required version (for example ",(0,t.jsx)(n.code,{children:"lsfusion-server-4.1.jar"}),") from ",(0,t.jsx)(n.a,{href:"https://download.lsfusion.org/java/",children:"the central server"})," to some folder (we will call this folder ",(0,t.jsx)(n.code,{children:"$FUSION_DIR$"}),")."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If the database server is located on another computer, and if authorization is enabled on the database server (for example, for Postgres, using the md5 method and if the password postgres is not empty), set the ",(0,t.jsx)(n.a,{href:"/v4/Launch_parameters#connectdb",children:"parameters for connecting to the database server"})," (e.g. by creating a startup ",(0,t.jsx)(n.a,{href:"/v4/Launch_parameters#filesettings",children:"settings file"})," in the ",(0,t.jsx)(n.code,{children:"$FUSION_DIR$"})," folder)"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Place ",(0,t.jsx)(n.a,{href:"/v4/Modules",children:"modules"})," developed in the lsFusion language as files with the extension lsf to the ",(0,t.jsx)(n.code,{children:"$FUSION_DIR$"})," folder (or any subfolder). In addition, the rest of the resource files if any must also be placed there (e.g. report files, compiled Java files, pictures, etc.)."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)("a",{className:"lsdoc-anchor",id:"command"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Create a service in the operating system (for example, using ",(0,t.jsx)(n.a,{href:"http://commons.apache.org/daemon/",children:"Apache Commons Daemon"}),"). In this case you must use the ",(0,t.jsx)(n.code,{children:"$FUSION_DIR$"})," folder as the working directory and the following line as the start command:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Linux"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",metastring:'script title="bash"   ',children:'java -cp ".:lsfusion-server-4.1.jar" lsfusion.server.logics.BusinessLogicsBootstrap\n'})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Sample script to start a service on CentOS"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'[Unit]\nDescription=lsFusion\nAfter=network.target\n\n[Service]\nType=forking\nEnvironment="PID_FILE=/usr/lsfusion/jsvc-lsfusion.pid"\nEnvironment="JAVA_HOME=/usr/java/latest"\nEnvironment="LSFUSION_HOME=/usr/lsfusion"\nEnvironment="LSFUSION_OPTS=-Xms1g -Xmx4g"\nEnvironment="CLASSPATH=.:lsfusion-server-4.1.jar"\n\nExecStart=/usr/bin/jsvc \\\n        -home $JAVA_HOME \\\n        -jvm server \\\n        -cwd $LSFUSION_HOME \\\n        -pidfile $PID_FILE \\\n        -outfile ${LSFUSION_HOME}/logs/stdout.log \\\n        -errfile ${LSFUSION_HOME}/logs/stderr.log \\\n        -cp ${LSFUSION_HOME}/${CLASSPATH} \\\n        $LSFUSION_OPTS \\\n        lsfusion.server.logics.BusinessLogicsBootstrap\n    \nExecStop=/usr/bin/jsvc \\\n        -home $JAVA_HOME \\\n        -stop \\\n        -pidfile $PID_FILE \\\n        lsfusion.server.logics.BusinessLogicsBootstrap\n    \n[Install]\nWantedBy=multi-user.target\n'})})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Windows"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",metastring:'script title="cmd"',children:'java -cp ".;lsfusion-server-4.1.jar" lsfusion.server.logics.BusinessLogicsBootstrap\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"appservice",children:"Installing the web server (web and desktop client) as a service"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"To install the web server, Apache Tomcat version 8 or higher must be installed on the computer."})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Download the file ",(0,t.jsx)(n.code,{children:"lsfusion-client-<version>.war"})," of the required version from ",(0,t.jsx)(n.a,{href:"https://download.lsfusion.org/java/",children:"the central server"}),". For example, ",(0,t.jsx)(n.code,{children:"lsfusion-client-4.1.war"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["If the application server is located on another computer, as well as if ",(0,t.jsx)(n.a,{href:"/v4/Launch_parameters#accessapp",children:"access parameters to the application server"})," are different from the standard, set ",(0,t.jsx)(n.a,{href:"/v4/Launch_parameters#connectapp",children:"connection parameters to the application server"})," (for example by creating / editing the Tomcat ",(0,t.jsx)(n.a,{href:"Launch_parameters.md#filewebsettings",children:"settings file"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["Deploy the application on Tomcat. The easiest way is to copy Tomcat to the webapps folder. In this case, the file can be renamed first (for example, to ",(0,t.jsx)(n.code,{children:"lsfusion.war"}),"), since the file name will correspond to the context path where the application will be available. If Tomcat uses port ",(0,t.jsx)(n.code,{children:"8080"}),", then the web client will be available at: ",(0,t.jsx)(n.code,{children:"http://localhost:8080/<filename of the war file>"}),". For example, ",(0,t.jsx)(n.code,{children:"http://localhost:8080/lsfusion"}),". An empty context name in Tomcat corresponds to the name ",(0,t.jsx)(n.code,{children:"ROOT"}),", that is, if the file name is ",(0,t.jsx)(n.code,{children:"ROOT.war"}),", the web client will be available at ",(0,t.jsx)(n.code,{children:"http://localhost:8080/"}),". You can download the desktop client from the authorization page at ",(0,t.jsx)(n.code,{children:"Run Desktop Client"})," (via Java Web Start)."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"installing-only-the-desktop-client-on-the-clients-computer",children:"Installing only the desktop client (on the client's computer)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Download the file ",(0,t.jsx)(n.code,{children:"lsfusion-client-<version>.jar"})," of the required version from ",(0,t.jsx)(n.a,{href:"https://download.lsfusion.org/",children:"the central server"}),". For example, ",(0,t.jsx)(n.code,{children:"lsfusion-client-4.1.jar"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create a shortcut on the desktop. In this case, you need to use as the working directory the directory which contains the downloaded client jar-file. Use the following line as the launch command:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["bash","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",metastring:"script",children:"java -jar lsfusion-client-4.1.jar\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["You can also use the method of installing the desktop client for development. To do this, just download the file ",(0,t.jsx)(n.code,{children:"lsfusion-client-<version>.jnlp"})," of the required version from the central server, and then run it locally on the client. This method is faster and more convenient, but less flexible."]})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["The latest versions that are currently under development (snapshots) can be downloaded directly from the maven repository ",(0,t.jsx)(n.a,{href:"https://repo.lsfusion.org/",children:"https://repo.lsfusion.org"}),". For example, for the server, the full path is as follows: ",(0,t.jsx)(n.a,{href:"https://repo.lsfusion.org/nexus/service/rest/repository/browse/public/lsfusion/platform/server/",children:"https://repo.lsfusion.org/nexus/service/rest/repository/browse/public/lsfusion/platform/server/"})," (for server and desktop client you need to download jar files with the ",(0,t.jsx)(n.code,{children:"-assembly"})," postfix)"]})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var t=s(96540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);