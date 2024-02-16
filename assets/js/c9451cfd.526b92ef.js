"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[30592],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85405:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return d}});var a=n(83117),o=(n(67294),n(3905));const r={title:"Journals and logs"},l=void 0,i={unversionedId:"Journals_and_logs",id:"version-v5/Journals_and_logs",title:"Journals and logs",description:"Logs",source:"@site/versioned_docs/version-v5/Journals_and_logs.md",sourceDirName:".",slug:"/Journals_and_logs",permalink:"/Journals_and_logs",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/Journals_and_logs.md",tags:[],version:"v5",lastUpdatedAt:1685108136,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{title:"Journals and logs"},sidebar:"learn",previous:{title:"Scheduler",permalink:"/Scheduler"},next:{title:"Profiler",permalink:"/Profiler"}},s={},d=[{value:"Logs",id:"logs",level:3},{value:"Logs",id:"logs",level:3}],p={toc:d};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"logs"},"Logs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Error log (fig. 1).")),(0,o.kt)("p",null,"This log contains all errors that occurred during the operation. Errors are divided into the following classes (the ",(0,o.kt)("inlineCode",{parentName:"p"},"Object class")," column):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"errors that occurred on the server \u2013\u2013 errors are displayed on a white background and are included in class ",(0,o.kt)("inlineCode",{parentName:"li"},"Exception on server"),";"),(0,o.kt)("li",{parentName:"ul"},"errors that occurred on the server and were received by the client application \u2013\u2013 errors are displayed on a pink background and are included in class ",(0,o.kt)("inlineCode",{parentName:"li"},"Exception on server (from client)"),";"),(0,o.kt)("li",{parentName:"ul"},"errors that occurred in the client application \u2013 errors are displayed on a yellow background and fall into two classes: ",(0,o.kt)("inlineCode",{parentName:"li"},"Exception on client")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Exception on web client"),";"),(0,o.kt)("li",{parentName:"ul"},"connection errors \u2013 errors are displayed on a blue background and are divided into two classes:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Temporary connection loss")," - connection with the server was interrupted, but was then restored;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Permanent connection loss")," - connection with the server was interrupted and could not be restored;")))),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(96859).Z,width:"651",height:"260"})),(0,o.kt)("p",null," Fig. 1 Error log."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Exception trace")," section displays the java stack for the error; the ",(0,o.kt)("inlineCode",{parentName:"p"},"Exception LSF trace")," displays the lsfusion stack. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Connection Log (fig. 2).")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(69080).Z,width:"651",height:"269"})),(0,o.kt)("p",null,"Fig. 2 Connection Log."),(0,o.kt)("p",null,"The log stores information about users who connected to the system, from which computer, the characteristics of that computer, as well as information about the date and time of connection / disconnection. On the form, you can display the users currently working with the database: ",(0,o.kt)("inlineCode",{parentName:"p"},"Active connections"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Form")," section shows which forms the user entered and how many times. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Session")," section lets you trace when changes were applied, for some forms."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The startup log stores information about the dates and times when the application server was started (restarted). You can also see the name of the computer on which the server is installed and the version of the application (if filled in during the build).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The change log contains more detailed information about the changes which were reflected in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Session")," section of the connection log (fig. 3.)."))),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(53602).Z,width:"651",height:"249"})),(0,o.kt)("p",null,"Fig. 3 Change log."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Change")," column displays a list of Properties (columns) where the values changed, as well as the number of changes (rows). Only changes in the current form are logged: dependent Properties that change simultaneously on other tables do not feature on this list."),(0,o.kt)("p",null,"The form lets you filter the changes made by users (excluding system changes) by checking ",(0,o.kt)("inlineCode",{parentName:"p"},"Only user changes"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The client application log contains information about the quality of the connection while working with the application server for a given period of time (fig. 4.).")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5874).Z,width:"651",height:"217"})),(0,o.kt)("p",null,"Fig. 4 Client application log."),(0,o.kt)("p",null,"As well as system memory indicators, you can analyze the average response time (ping) in milliseconds and the memory available to and used by the java application on client computers in the upper part of the form. The period to be analyzed is set by entering ",(0,o.kt)("inlineCode",{parentName:"p"},"Date from")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Date to")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Date and time")," section. In addition to dates, you can also set a threshold value here for the same indicators (ping and memory)\u2013this allows you to get the total time (in seconds) when the client PC has exceeded the threshold values."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Data")," tab at the bottom provides a chronology of changes in response time and in memory available and used. This information is displayed for the Desktop client only."),(0,o.kt)("p",null,"How much information should be stored in these logs is indicated in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Admin form > Settings > Logging tab")," (fig. 5.)."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(48646).Z,width:"652",height:"324"})),(0,o.kt)("p",null,"Fig. 5 Setting the number of days for logging."),(0,o.kt)("p",null,"If you need to track changes to the individual values of any  Properties (columns), a mechanism for user logging has been developed to allow you to do it. For example, let's say you need to record changes to an employee's last name in the Employees directory. To do this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"go to any entry in the ",(0,o.kt)("inlineCode",{parentName:"li"},"Surname")," column and right-click to bring up the ",(0,o.kt)("inlineCode",{parentName:"li"},"Configure property policy")," menu (fig. 6.);")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(24665).Z,width:"652",height:"148"})),(0,o.kt)("p",null,"Fig. 6 Select a property to log changes."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"in the ",(0,o.kt)("inlineCode",{parentName:"li"},"Security policy")," form, check ",(0,o.kt)("inlineCode",{parentName:"li"},"Logged by user")," and click ",(0,o.kt)("inlineCode",{parentName:"li"},"OK")," (fig. 7.);")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(23364).Z,width:"651",height:"165"})),(0,o.kt)("p",null,"Fig. 7 Setting user logging."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"once you restart the application server, right-clicking on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Surname")," property will bring up an additional ",(0,o.kt)("inlineCode",{parentName:"li"},"Show Change History")," menu item. If the surname for the current record has been changed by someone, then this will be reflected in the property change history (fig. 8).")),(0,o.kt)("h3",{id:""},(0,o.kt)("img",{src:n(86486).Z,width:"652",height:"300"})),(0,o.kt)("p",null,"Fig. 8. Property change history."),(0,o.kt)("p",null,"The retention time for these logs is set to the same retention time as for the Change Log."),(0,o.kt)("h3",{id:"logs"},"Logs"),(0,o.kt)("p",null,"The following set of logs is supported for each platform component in the platform:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Component"),(0,o.kt)("th",{parentName:"tr",align:null},"Folder"),(0,o.kt)("th",{parentName:"tr",align:null},"Logs"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Application server (Server)"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"$FUSION_DIR$/logs"),", where ",(0,o.kt)("inlineCode",{parentName:"td"},"$FUSION_DIR$")," is the application server startup folder"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("inlineCode",{parentName:"td"},"stdout")," - standard output log (output to the standard output stream, i.e. to the OS console, IDE, etc.). Includes ",(0,o.kt)("inlineCode",{parentName:"td"},"start")," and ",(0,o.kt)("inlineCode",{parentName:"td"},"explain")," logs."),(0,o.kt)("li",null,(0,o.kt)("inlineCode",{parentName:"td"},"stderr")," - general error log"),(0,o.kt)("li",null,(0,o.kt)("inlineCode",{parentName:"td"},"start")," - a log of the stop and start process"),(0,o.kt)("li",null,(0,o.kt)("inlineCode",{parentName:"td"},"remote"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"invocation")," - logs of processes related to accessing the application server"),(0,o.kt)("li",null,(0,o.kt)("inlineCode",{parentName:"td"},"sql"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"sqlhand"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"sqlconnection"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"sqlconflict"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"sqladjust")," - logs of processes related to accessing the database server"),(0,o.kt)("li",null,(0,o.kt)("inlineCode",{parentName:"td"},"explain"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"explaincompile")," - logs where query plans are displayed (database server and application server, respectively)"),(0,o.kt)("li",null,(0,o.kt)("inlineCode",{parentName:"td"},"lru")," - log of memory management processes (mainly LRU caches)"),(0,o.kt)("li",null,(0,o.kt)("inlineCode",{parentName:"td"},"allocatedbytes")," - log of memory allocation processes"),(0,o.kt)("li",null,(0,o.kt)("inlineCode",{parentName:"td"},"assert")," - a log of various checks on meeting specified conditions (or rather, non-meeting)"),(0,o.kt)("li",null,(0,o.kt)("inlineCode",{parentName:"td"},"mail")," - mail log"),(0,o.kt)("li",null,(0,o.kt)("inlineCode",{parentName:"td"},"jasperReports")," - JasperReports log"),(0,o.kt)("li",null,(0,o.kt)("inlineCode",{parentName:"td"},"jdbc")," - jdbc driver log"),(0,o.kt)("li",null,(0,o.kt)("inlineCode",{parentName:"td"},"exinfo")," - a log of additional information (not included in the above)")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Web server (Client)"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"$CATALINA_BASE$/logs"),", where ",(0,o.kt)("inlineCode",{parentName:"td"},"$CATALINA_BASE$")," is the folder where Tomcat is installed"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("inlineCode",{parentName:"td"},"catalina.out")," - general output log"),(0,o.kt)("li",null,(0,o.kt)("inlineCode",{parentName:"td"},"gwtlog"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"gwtlog-err")," - GWT logs"),(0,o.kt)("li",null,(0,o.kt)("inlineCode",{parentName:"td"},"invocation")," - logs of processes related to accessing the web server")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Desktop client"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"$USER_DIR$/.fusion/logs"),", where ",(0,o.kt)("inlineCode",{parentName:"td"},"$USER_DIR$")," is the user folder"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("inlineCode",{parentName:"td"},"stdout")," - standard output log (output to the standard output stream, i.e. to the OS console, IDE, etc.)."),(0,o.kt)("li",null,(0,o.kt)("inlineCode",{parentName:"td"},"stderr")," - general error log"),(0,o.kt)("li",null,(0,o.kt)("inlineCode",{parentName:"td"},"remote"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"invocation")," - logs of processes related to accessing the application server"),(0,o.kt)("li",null,(0,o.kt)("inlineCode",{parentName:"td"},"jasperReports")," - JasperReports log")))))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"With ",(0,o.kt)("a",{parentName:"p",href:"/Execution_auto"},"automatic installation")," under Linux, symlinks for these folders (as well as for the ",(0,o.kt)("a",{parentName:"p",href:"/Launch_parameters#applsfusion"},"lsFusion launch parameters"),") are automatically created to ",(0,o.kt)("a",{parentName:"p",href:"/Execution_auto#logs"},"other folders")," whose location is better aligned with Linux ideology.")))}c.isMDXComponent=!0},53602:function(e,t,n){t.Z=n.p+"assets/images/Journals_and_logs_change_log-77c906c0463d46fcfdeb0daa6c8f1b1d.png"},5874:function(e,t,n){t.Z=n.p+"assets/images/Journals_and_logs_client_app_log-746459cb2512064a6afcf809a358f92d.png"},69080:function(e,t,n){t.Z=n.p+"assets/images/Journals_and_logs_connection_log-5696a142aee31ad27fa735a5fb071342.png"},96859:function(e,t,n){t.Z=n.p+"assets/images/Journals_and_logs_error_log-a78ad45f17ae5241063f3bed45a573fc.png"},24665:function(e,t,n){t.Z=n.p+"assets/images/Journals_and_logs_log_property_changes-4bbe3199b2d5daecd4f2f189ddac25b5.png"},48646:function(e,t,n){t.Z=n.p+"assets/images/Journals_and_logs_log_settings-82a4ded811cb69cd37024f69d542a851.png"},86486:function(e,t,n){t.Z=n.p+"assets/images/Journals_and_logs_property_changes_history-befbd6aed40287bfe38660bddbaa7ba9.png"},23364:function(e,t,n){t.Z=n.p+"assets/images/Journals_and_logs_user_logging-757d6d4e309da6be74572557eea3aa48.png"}}]);