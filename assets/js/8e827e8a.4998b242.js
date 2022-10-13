"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[91988],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return k}});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(a),k=l,c=m["".concat(o,".").concat(k)]||m[k]||d[k]||r;return a?n.createElement(c,i(i({ref:t},u),{},{components:a})):n.createElement(c,i({ref:t},u))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(67294),l=a(86010),r="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:a},t)}},65488:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(83117),l=a(67294),r=a(86010),i=a(72389),s=a(67392),o=a(7094),p=a(12466),u="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,a;const{lazy:i,block:m,defaultValue:k,values:c,groupId:h,className:N}=e,f=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=c?c:f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,s.l)(v,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===k?k:null!=(t=null!=k?k:null==(a=f.find((e=>e.props.default)))?void 0:a.props.value)?t:f[0].props.value;if(null!==b&&!v.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:w}=(0,o.U)(),[C,x]=(0,l.useState)(b),T=[],{blockElementScrollPositionUntilNextRender:S}=(0,p.o5)();if(null!=h){const e=y[h];null!=e&&e!==C&&v.some((t=>t.value===e))&&x(e)}const I=e=>{const t=e.currentTarget,a=T.indexOf(t),n=v[a].value;n!==C&&(S(t),x(n),null!=h&&w(h,String(n)))},L=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=T.indexOf(e.currentTarget)+1;a=null!=(n=T[t])?n:T[0];break}case"ArrowLeft":{var l;const t=T.indexOf(e.currentTarget)-1;a=null!=(l=T[t])?l:T[T.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},N)},v.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>T.push(e),onKeyDown:L,onFocus:I,onClick:I},i,{className:(0,r.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),i?(0,l.cloneElement)(f.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function k(e){const t=(0,i.Z)();return l.createElement(m,(0,n.Z)({key:String(t)},e))}},65162:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var n=a(83117),l=(a(67294),a(3905)),r=a(65488),i=a(85162);const s={title:"For production"},o=void 0,p={unversionedId:"Execution_auto",id:"Execution_auto",title:"For production",description:"Installation",source:"@site/docs/Execution_auto.md",sourceDirName:".",slug:"/Execution_auto",permalink:"/next/Execution_auto",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Execution_auto.md",tags:[],version:"current",lastUpdatedAt:1665665147,formattedLastUpdatedAt:"Oct 13, 2022",frontMatter:{title:"For production"},sidebar:"install",previous:{title:"For development",permalink:"/next/Development_auto"},next:{title:"Install manually",permalink:"/next/Manual_installation"}},u={},d=[{value:"Installation",id:"installation",level:2},{value:"After Installation",id:"after-installation",level:2},{value:"Ports",id:"ports",level:3},{value:"Installing / updating an application",id:"installing--updating-an-application",level:3},{value:"Installing / updating clients",id:"installing--updating-clients",level:3},{value:"Updating",id:"update",level:3},{value:"Application Server (Server)",id:"application-server-server",level:4},{value:"Web server (Client)",id:"web-server-client",level:4},{value:"Custom installation",id:"custom-installation",level:2},{value:"Manual setup (file paths, service names)",id:"manual-setup-file-paths-service-names",level:2},{value:"Startup parameters",id:"settings",level:3},{value:"Restart",id:"restart",level:3},{value:"Application server (Server)",id:"application-server-server-1",level:4},{value:"Web server (Client)",id:"web-server-client-1",level:4},{value:"Application server (Server)",id:"application-server-server-2",level:4},{value:"Web server (Client)",id:"web-server-client-2",level:4},{value:"Logs",id:"logs",level:3},{value:"Locale",id:"locale",level:3}],m={toc:d};function k(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"In addition to installing ",(0,l.kt)("strong",{parentName:"p"},"lsFusion"),", these installers/scripts also install ",(0,l.kt)("strong",{parentName:"p"},"OpenJDK"),", ",(0,l.kt)("strong",{parentName:"p"},"PostgreSQL"),", and ",(0,l.kt)("strong",{parentName:"p"},"Tomcat"),". Tomcat is embedded into the lsFusion Client installation, and OpenJDK and PostgreSQL are installed separately (in particular, in separate folders)."),(0,l.kt)(r.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("p",null,"Executable exe files:\nlsFusion ",(0,l.kt)("strong",{parentName:"p"},"4.1")," Server & Client (+ OpenJDK ",(0,l.kt)("strong",{parentName:"p"},"11.0.9"),", PostgreSQL ",(0,l.kt)("strong",{parentName:"p"},"13.1"),"(x64) / ",(0,l.kt)("strong",{parentName:"p"},"10.8"),"(x32), Tomcat ",(0,l.kt)("strong",{parentName:"p"},"9.0.21"),"):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://download.lsfusion.org/exe/lsfusion-4.1.exe"},"x32"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://download.lsfusion.org/exe/lsfusion-4.1-x64.exe"},"x64"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("details",null,(0,l.kt)("summary",null,"Older versions"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"lsFusion 4.0 Server & Client",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://download.lsfusion.org/exe/lsfusion-4.0.exe"},"x32")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://download.lsfusion.org/exe/lsfusion-4.0-x64.exe"},"x64")))),(0,l.kt)("li",{parentName:"ul"},"lsFusion 3.1 Server & Client",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://download.lsfusion.org/exe/lsfusion-3.1.exe"},"x32")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://download.lsfusion.org/exe/lsfusion-3.1-x64.exe"},"x64")))),(0,l.kt)("li",{parentName:"ul"},"lsFusion 2.4 Server & Client",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://download.lsfusion.org/exe/lsfusion-2.4.exe"},"x32")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://download.lsfusion.org/exe/lsfusion-2.4-x64.exe"},"x64")))))))),(0,l.kt)("p",null,"Subsequently, ",(0,l.kt)("inlineCode",{parentName:"p"},"$INSTALL_DIR$")," refers to the folder selected during the installation of lsFusion (by default, ",(0,l.kt)("inlineCode",{parentName:"p"},"Program Files/lsFusion <version>"),"). It is also assumed that all parameters (ports, web context name) are left equal to default values.")),(0,l.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("p",null,"Bash scripts using yum / apt (the latest stable releases are used as minor versions):"),(0,l.kt)("p",null,"lsFusion ",(0,l.kt)("strong",{parentName:"p"},"5")," Server & Client (+ OpenJDK ",(0,l.kt)("strong",{parentName:"p"},"11"),", PostgreSQL ",(0,l.kt)("strong",{parentName:"p"},"14"),", Tomcat ",(0,l.kt)("strong",{parentName:"p"},"9.0.67"),"):"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"OS"),(0,l.kt)("th",{parentName:"tr",align:null},"Command / Script"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RHEL 8+ / CentOS 8+"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"source <(curl -s https://download.lsfusion.org/dnf/install-lsfusion5)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RHEL 7 / CentOS 7 / Fedora 29"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"source <(curl -s https://download.lsfusion.org/yum/install-lsfusion5)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ubuntu 18+ / Debian 9+"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"source <(curl -s https://download.lsfusion.org/apt/install-lsfusion5)"))))))),(0,l.kt)("h2",{id:"after-installation"},"After Installation"),(0,l.kt)("h3",{id:"ports"},"Ports"),(0,l.kt)("p",null,"After the installation is completed, the following will by default be locally installed on the computer and launched as services:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"DB server (PostgreSQL) on port ",(0,l.kt)("inlineCode",{parentName:"li"},"5432")),(0,l.kt)("li",{parentName:"ul"},"application server (Server) on port ",(0,l.kt)("inlineCode",{parentName:"li"},"7652")),(0,l.kt)("li",{parentName:"ul"},"web server (Client) on port ",(0,l.kt)("inlineCode",{parentName:"li"},"8080"))),(0,l.kt)("h3",{id:"installing--updating-an-application"},"Installing / updating an application"),(0,l.kt)("p",null,"In order to upload the developed logic to the installed application server (Server), you must:"),(0,l.kt)("p",null,"Place ",(0,l.kt)("a",{parentName:"p",href:"/next/Modules"},"modules")," developed in the lsFusion language as files with an lsf extension in a folder located in the server's ",(0,l.kt)("a",{parentName:"p",href:"/next/Launch_parameters#appjava"},"classpath")," (default value for automatic installation, see below). In addition, the rest of the resource files if any must also be placed there (e.g. report files, compiled Java files, images, etc.). These files may be placed in subfolders of the classpath, as well as inside jar files (zip archives with the jar extension). After all the files have been copied, you need to ",(0,l.kt)("a",{parentName:"p",href:"#restart"},"restart")," the server."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"It is often convenient to place all project files inside a single jar file. To generate such a file automatically, you can use ",(0,l.kt)("a",{parentName:"p",href:"/next/Development_manual#maven"},"Maven")," (with assemble and noserver profiles) or the build tools built into the ",(0,l.kt)("a",{parentName:"p",href:"/next/IDE#build"},"IDE"),".")),(0,l.kt)("p",null,"By default, the server's classpath is equal to ",(0,l.kt)("inlineCode",{parentName:"p"},"$APP_DIR$;$APP_DIR$/*;server.jar"),", i.e. the ",(0,l.kt)("inlineCode",{parentName:"p"},"$APP_DIR$")," folder and all its subfolders, all jar files in the ",(0,l.kt)("inlineCode",{parentName:"p"},"$APP_DIR$")," folder (but not its subfolders), and also the jar file of the application server itself."),(0,l.kt)(r.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"$APP_DIR$")," is equal to ",(0,l.kt)("inlineCode",{parentName:"p"},"$INSTALL_DIR$/lib")," ")),(0,l.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"$APP_DIR$")," is equal to ",(0,l.kt)("inlineCode",{parentName:"p"},"/var/lib/lsfusion")," "),(0,l.kt)("p",null,"The application server is installed and started under the automatically created non-privileged user ",(0,l.kt)("inlineCode",{parentName:"p"},"lsfusion")," so files in the folder should be accessible for this user to read. "))),(0,l.kt)("h3",{id:"installing--updating-clients"},"Installing / updating clients"),(0,l.kt)("p",null,"To give users access to the installed system, you must:"),(0,l.kt)("p",null,"Send users a link to ",(0,l.kt)("inlineCode",{parentName:"p"},"http://<web address of the web server (Client)>:8080"),". When users open this link, they will be redirected by default to the login page, where, if necessary, they can install the desktop client via Java Web Start (requires Java (JDK) installed, for example, by following ",(0,l.kt)("a",{parentName:"p",href:"https://developers.redhat.com/products/openjdk/download"},"this")," link with registration or this one ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ojdkbuild/ojdkbuild"},"without"),"). Web and desktop clients are updated automatically with ",(0,l.kt)("a",{parentName:"p",href:"#update"},"updates to the web server")," (Client)"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Under Windows, you can also use desktop client ",(0,l.kt)("a",{parentName:"p",href:"https://download.lsfusion.org/exe/"},"installers")," (",(0,l.kt)("inlineCode",{parentName:"p"},"lsfusion-desktop-*")," files with the correct OS version and bit width). However, unlike installing with Java Web Start, a desktop client installed in this way will not be automatically updated. Therefore, you will need to update it manually by downloading the file of the new version of the desktop client (",(0,l.kt)("inlineCode",{parentName:"p"},"lsfusion-client-5.<new version>.jar"),") from ",(0,l.kt)("a",{parentName:"p",href:"https://download.lsfusion.org/java"},"the central server")," and replacing the ",(0,l.kt)("inlineCode",{parentName:"p"},"$INSTALL_DIR$/client.jar")," file with it.")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"All paths and commands are given below for the major version 5 of the platform (for other versions just replace 5 with the required number, for example ",(0,l.kt)("inlineCode",{parentName:"p"},"lsfusion5-server")," \u2192 ",(0,l.kt)("inlineCode",{parentName:"p"},"lsfusion11-server"),")"),(0,l.kt)(r.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("p",{parentName:"admonition"},"All paths by default")),(0,l.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("p",{parentName:"admonition"},"Paths changed (in particular with symlinks) in accordance with Linux ideology")))),(0,l.kt)("h3",{id:"update"},"Updating"),(0,l.kt)("p",null,"Programs installed separately (OpenJDK, PostgreSQL) are also updated separately (for more details about this process, see the documentation for these programs)"),(0,l.kt)(r.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("p",null,"Platform components are also updated separately from each other. To do this, you must download the file of the new version of the component from ",(0,l.kt)("a",{parentName:"p",href:"https://download.lsfusion.org/java"},"the central server")," and replace the following file with it:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Component"),(0,l.kt)("th",{parentName:"tr",align:null},"Files"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Application Server (Server)"),(0,l.kt)("td",{parentName:"tr",align:null},"File on the central server: ",(0,l.kt)("inlineCode",{parentName:"td"},"lsfusion-server-5.<new version>.jar"),(0,l.kt)("br",null),"File to replace: ",(0,l.kt)("inlineCode",{parentName:"td"},"$INSTALL_DIR$/Server/server.jar"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Web server (Client)"),(0,l.kt)("td",{parentName:"tr",align:null},"File on the central server: ",(0,l.kt)("inlineCode",{parentName:"td"},"lsfusion-server-5.<new version>.jar"),(0,l.kt)("br",null),"File to replace: ",(0,l.kt)("inlineCode",{parentName:"td"},"$INSTALL_DIR$/Client/webapps/ROOT.war"),(0,l.kt)("br",null),"To update Tomcat, you need to download the archive with the new version of Tomcat and unzip it to the ",(0,l.kt)("inlineCode",{parentName:"td"},"$INSTALL_DIR$/Client")," folder without the ",(0,l.kt)("inlineCode",{parentName:"td"},"webapps")," directory and the ",(0,l.kt)("a",{parentName:"td",href:"#settings"},"startup parameters")," file"))))),(0,l.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("p",null,"Platform components are also updated separately from each other. To do this, you must run the commands:"),(0,l.kt)("h4",{id:"application-server-server"},"Application Server (Server)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"OS"),(0,l.kt)("th",{parentName:"tr",align:null},"Command"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RHEL 8+ / CentOS 8+"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"dnf update lsfusion5-server"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RHEL 7 / CentOS 7 / Fedora 29"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"yum update lsfusion5-server"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ubuntu 18+ / Debian 9+"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"apt update lsfusion5-server"))))),(0,l.kt)("h4",{id:"web-server-client"},"Web server (Client)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"OS"),(0,l.kt)("th",{parentName:"tr",align:null},"Command"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RHEL 8+ / CentOS 8+"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"dnf update lsfusion5-client"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RHEL 7 / CentOS 7 / Fedora 29"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"yum update lsfusion5-client"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ubuntu 18+ / Debian 9+"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"apt update lsfusion5-client"))))))),(0,l.kt)("h2",{id:"custom-installation"},"Custom installation"),(0,l.kt)("p",null,"If any of the programs listed in the installation (platform components) do not need to be installed / are already installed on your computer:"),(0,l.kt)(r.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("p",null,"These programs can be excluded during installation using the corresponding graphical interface.")),(0,l.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("p",null,"The following are scripts for installing specific platform components:"),(0,l.kt)("p",null,"Database Server - PostgreSQL ",(0,l.kt)("strong",{parentName:"p"},"14"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"OS"),(0,l.kt)("th",{parentName:"tr",align:null},"Command / Script"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RHEL 7 / CentOS 7 / Fedora 29"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"source <(curl -s https://download.lsfusion.org/yum/install-lsfusion5-db)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ubuntu 18+ / Debian 9+"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"source <(curl -s https://download.lsfusion.org/apt/install-lsfusion5-db)"))))),(0,l.kt)("p",null,"Application Server - lsFusion 5 Server (+ OpenJDK ",(0,l.kt)("strong",{parentName:"p"},"11"),"):"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"OS"),(0,l.kt)("th",{parentName:"tr",align:null},"Command / Script"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RHEL 7 / CentOS 7 / Fedora 29"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"source <(curl -s https://download.lsfusion.org/yum/install-lsfusion5-server)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ubuntu 18 / Debian 9"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"source <(curl -s https://download.lsfusion.org/apt/install-lsfusion5-server)"))))),(0,l.kt)("p",null,"Web server - lsFusion 5 Client (+ Tomcat 9.0.67): "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"OS"),(0,l.kt)("th",{parentName:"tr",align:null},"Command / Script"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RHEL 7 / CentOS 7 / Fedora 29"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"source <(curl -s https://download.lsfusion.org/yum/install-lsfusion5-client)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ubuntu 18 / Debian 9"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"source <(curl -s https://download.lsfusion.org/apt/install-lsfusion5-client)"))))))),(0,l.kt)("p",null,"When installing platform components on different computers, it is also necessary to ",(0,l.kt)("a",{parentName:"p",href:"#settings"},"configure the parameters")," to connect them to each other"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Components on different computers"),(0,l.kt)("th",{parentName:"tr",align:null},"Connection parameters"),(0,l.kt)("th",{parentName:"tr",align:null},"Configurable file"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DB server and application server (Server)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/next/Launch_parameters"},"Application server to DB server")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#settings"},"File")," lsFusion application server startup parameters")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Application server (Server) and web server (Client)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/next/Launch_parameters#connectapp"},"Web server to application server")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#settings"},"File")," lsFusion web server startup parameters")))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"When installing under Windows, the above parameters are requested during the installation process and the parameter files are configured automatically.")),(0,l.kt)("h2",{id:"manual-setup-file-paths-service-names"},"Manual setup (file paths, service names)"),(0,l.kt)("h3",{id:"settings"},(0,l.kt)("a",{parentName:"h3",href:"/next/Launch_parameters"},"Startup parameters")),(0,l.kt)(r.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Component"),(0,l.kt)("th",{parentName:"tr",align:null},"java"),(0,l.kt)("th",{parentName:"tr",align:null},"lsfusion"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Application server (Server)"),(0,l.kt)("td",{parentName:"tr",align:null},"Java tab in the graphical interface ",(0,l.kt)("inlineCode",{parentName:"td"},"$INSTALL_DIR/Server/bin/lsfusion5_serverw.exe"),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/next/Launch_parameters#appjava"},(0,l.kt)("inlineCode",{parentName:"a"},"classpath"))," - the Classpath parameter in the same tab"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$INSTALL_DIR/Server/conf/settings.properties")," file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Web server (Client)"),(0,l.kt)("td",{parentName:"tr",align:null},"Java tab in the graphical interface ",(0,l.kt)("inlineCode",{parentName:"td"},"$INSTALL_DIR/Client/bin/lsfusion5_serverw.exe")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$INSTALL_DIR/Client/conf/catalina/localhost/ROOT.xml")," file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Desktop client"),(0,l.kt)("td",{parentName:"tr",align:null},"Java parameters are set inside the ",(0,l.kt)("inlineCode",{parentName:"td"},"j2se")," tag in the jnlp file."),(0,l.kt)("td",{parentName:"tr",align:null}))))),(0,l.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Component"),(0,l.kt)("th",{parentName:"tr",align:null},"java"),(0,l.kt)("th",{parentName:"tr",align:null},"lsfusion"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Application server (Server)"),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("inlineCode",{parentName:"td"},"FUSION_OPTS")," parameter in the file ",(0,l.kt)("inlineCode",{parentName:"td"},"/etc/lsfusion5-server/lsfusion.conf"),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"/next/Launch_parameters#appjava"},(0,l.kt)("inlineCode",{parentName:"a"},"classpath"))," - the ",(0,l.kt)("inlineCode",{parentName:"td"},"CLASSPATH")," parameter in the same file"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/etc/lsfusion5-server/settings.properties")," file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Web server (Client)"),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("inlineCode",{parentName:"td"},"CATALINA_OPTS")," parameter in the file ",(0,l.kt)("inlineCode",{parentName:"td"},"/etc/lsfusion5-client/lsfusion.conf")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/etc/lsfusion5-client/catalina/localhost/ROOT.xml")," file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Desktop client"),(0,l.kt)("td",{parentName:"tr",align:null},"Java parameters are set inside the ",(0,l.kt)("inlineCode",{parentName:"td"},"j2se")," tag in the jnlp file."),(0,l.kt)("td",{parentName:"tr",align:null})))))),(0,l.kt)("h3",{id:"restart"},"Restart"),(0,l.kt)("p",null,"Any changes made to the startup parameters, as well as changes to lsFusion modules, require a server restart (when changing lsFusion modules only the application server (Server)). This can be done with:"),(0,l.kt)(r.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("h4",{id:"application-server-server-1"},"Application server (Server)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'script title="GUI"',script:!0,title:'"GUI"'},"Control Panel > Admin > Services > lsFusion 5 Server\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'script title="Command line"',script:!0,title:'"Command','line"':!0},"# Stop server\n$INSTALL_DIR/Server/bin/lsfusion5_server.exe //SS//lsfusion5_server\n \n# Start server\n$INSTALL_DIR/Server/bin/lsfusion5_server.exe //ES//lsfusion5_server\n")),(0,l.kt)("h4",{id:"web-server-client-1"},"Web server (Client)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'script title="GUI"',script:!0,title:'"GUI"'},"Control Panel > Admin > Services > lsFusion 5 Client\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'script title="Command line"',script:!0,title:'"Command','line"':!0},"# Stop server\n$INSTALL_DIR/Client/bin/lsfusion5_client.exe //SS//lsfusion5_client\n \n# Start server\n$INSTALL_DIR/Client/bin/lsfusion5_client.exe //ES//lsfusion5_client\n"))),(0,l.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("h4",{id:"application-server-server-2"},"Application server (Server)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'script title="Command line"',script:!0,title:'"Command','line"':!0},"# Stop server\nsystemctl stop lsfusion5-server\n \n# Start server\nsystemctl start lsfusion5-server\n")),(0,l.kt)("h4",{id:"web-server-client-2"},"Web server (Client)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'script title="Command line"',script:!0,title:'"Command','line"':!0},"# Stop client\nsystemctl stop lsfusion5-client\n \n# Start client\nsystemctl start lsfusion5-client\n")))),(0,l.kt)("h3",{id:"logs"},(0,l.kt)("a",{parentName:"h3",href:"/next/Journals_and_logs"},"Logs")),(0,l.kt)("p",null,"Platform logs are written to the following folders:"),(0,l.kt)(r.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Component"),(0,l.kt)("th",{parentName:"tr",align:null},"Folder"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Application server (Server)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$INSTALL_DIR$/Server/logs"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Web server (Client)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$INSTALL_DIR$/Client/logs"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Desktop client"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Users/<username>/.fusion/logs")))))),(0,l.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Component"),(0,l.kt)("th",{parentName:"tr",align:null},"Folder"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Application server (Server)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/var/log/lsfusion5-server"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Web server (Client)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/var/log/lsfusion5-client"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Desktop client"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/home/<username>/.fusion/logs"))))))),(0,l.kt)("p",null,"The main logs (including the process of stopping and starting the server) are located in:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Application server (Server) - ",(0,l.kt)("inlineCode",{parentName:"li"},"stdout")),(0,l.kt)("li",{parentName:"ul"},"Web server (Client) - ",(0,l.kt)("inlineCode",{parentName:"li"},"catalina.out")," (since the web server runs on Tomcat).")),(0,l.kt)("h3",{id:"locale"},(0,l.kt)("a",{parentName:"h3",href:"/next/Internationalization"},"Locale")),(0,l.kt)("p",null,"The locale used by the platform is determined based on the locale installed in the operating system. If necessary, it can be changed with:"),(0,l.kt)(r.Z,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"win",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'script title="GUI"',script:!0,title:'"GUI"'},"Control Panel > Language and Regional Standards\n"))),(0,l.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'script title="Command line"',script:!0,title:'"Command','line"':!0},"localectl set-locale LANG=en_US.utf8\n")))))}k.isMDXComponent=!0}}]);