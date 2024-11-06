"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[52753],{25173:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=s(74848),i=s(28453);const r={title:"Journals and logs"},t=void 0,l={id:"Journals_and_logs",title:"Journals and logs",description:"Logs",source:"@site/versioned_docs/version-v4/Journals_and_logs.md",sourceDirName:".",slug:"/Journals_and_logs",permalink:"/v4/Journals_and_logs",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Journals_and_logs.md",tags:[],version:"v4",lastUpdatedAt:1623249583e3,frontMatter:{title:"Journals and logs"},sidebar:"learn",previous:{title:"Scheduler",permalink:"/v4/Scheduler"},next:{title:"Profiler",permalink:"/v4/Profiler"}},c={},d=[{value:"Logs",id:"logs",level:3},{value:"Logs",id:"logs",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",img:"img",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"logs",children:"Logs"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Error log (fig. 1)."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["This log contains all errors that occurred during the operation. Errors are divided into the following classes (the ",(0,o.jsx)(n.code,{children:"Object class"})," column):"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["errors that occurred on the server \u2013\u2013 errors are displayed on a white background and are included in class ",(0,o.jsx)(n.code,{children:"Exception on server"}),";"]}),"\n",(0,o.jsxs)(n.li,{children:["errors that occurred on the server and were received by the client application \u2013\u2013 errors are displayed on a pink background and are included in class ",(0,o.jsx)(n.code,{children:"Exception on server (from client)"}),";"]}),"\n",(0,o.jsxs)(n.li,{children:["errors that occurred in the client application \u2013 errors are displayed on a yellow background and fall into two classes: ",(0,o.jsx)(n.code,{children:"Exception on client"})," and ",(0,o.jsx)(n.code,{children:"Exception on web client"}),";"]}),"\n",(0,o.jsxs)(n.li,{children:["connection errors \u2013 errors are displayed on a blue background and are divided into two classes:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Temporary connection loss"})," - connection with the server was interrupted, but was then restored;"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Permanent connection loss"})," - connection with the server was interrupted and could not be restored;"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(48465).A+"",width:"651",height:"260"})}),"\n",(0,o.jsx)(n.p,{children:"Fig. 1 Error log."}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"Exception trace"})," section displays the java stack for the error; the ",(0,o.jsx)(n.code,{children:"Exception LSF trace"})," displays the lsfusion stack."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Connection Log (fig. 2)."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(19513).A+"",width:"651",height:"269"})}),"\n",(0,o.jsx)(n.p,{children:"Fig. 2 Connection Log."}),"\n",(0,o.jsxs)(n.p,{children:["The log stores information about users who connected to the system, from which computer, the characteristics of that computer, as well as information about the date and time of connection / disconnection. On the form, you can display the users currently working with the database: ",(0,o.jsx)(n.code,{children:"Active connections"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"Form"})," section shows which forms the user entered and how many times. The ",(0,o.jsx)(n.code,{children:"Session"})," section lets you trace when changes were applied, for some forms."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"The startup log stores information about the dates and times when the application server was started (restarted). You can also see the name of the computer on which the server is installed and the version of the application (if filled in during the build)."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The change log contains more detailed information about the changes which were reflected in the ",(0,o.jsx)(n.code,{children:"Session"})," section of the connection log (fig. 3.)."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(97677).A+"",width:"651",height:"249"})}),"\n",(0,o.jsx)(n.p,{children:"Fig. 3 Change log."}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"Change"})," column displays a list of Properties (columns) where the values changed, as well as the number of changes (rows). Only changes in the current form are logged: dependent Properties that change simultaneously on other tables do not feature on this list."]}),"\n",(0,o.jsxs)(n.p,{children:["The form lets you filter the changes made by users (excluding system changes) by checking ",(0,o.jsx)(n.code,{children:"Only user changes"}),"."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"The client application log contains information about the quality of the connection while working with the application server for a given period of time (fig. 4.)."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(41984).A+"",width:"651",height:"217"})}),"\n",(0,o.jsx)(n.p,{children:"Fig. 4 Client application log."}),"\n",(0,o.jsxs)(n.p,{children:["As well as system memory indicators, you can analyze the average response time (ping) in milliseconds and the memory available to and used by the java application on client computers in the upper part of the form. The period to be analyzed is set by entering ",(0,o.jsx)(n.code,{children:"Date from"})," and ",(0,o.jsx)(n.code,{children:"Date to"})," in the ",(0,o.jsx)(n.code,{children:"Date and time"})," section. In addition to dates, you can also set a threshold value here for the same indicators (ping and memory)\u2013this allows you to get the total time (in seconds) when the client PC has exceeded the threshold values."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"Data"})," tab at the bottom provides a chronology of changes in response time and in memory available and used. This information is displayed for the Desktop client only."]}),"\n",(0,o.jsxs)(n.p,{children:["How much information should be stored in these logs is indicated in the ",(0,o.jsx)(n.code,{children:"Admin form > Settings > Logging tab"})," (fig. 5.)."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(75152).A+"",width:"652",height:"324"})}),"\n",(0,o.jsx)(n.p,{children:"Fig. 5 Setting the number of days for logging."}),"\n",(0,o.jsx)(n.p,{children:"If you need to track changes to the individual values of any  Properties (columns), a mechanism for user logging has been developed to allow you to do it. For example, let's say you need to record changes to an employee's last name in the Employees directory. To do this:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["go to any entry in the ",(0,o.jsx)(n.code,{children:"Surname"})," column and right-click to bring up the ",(0,o.jsx)(n.code,{children:"Configure property policy"})," menu (fig. 6.);"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(50810).A+"",width:"652",height:"148"})}),"\n",(0,o.jsx)(n.p,{children:"Fig. 6 Select a property to log changes."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["in the ",(0,o.jsx)(n.code,{children:"Security policy"})," form, check ",(0,o.jsx)(n.code,{children:"Logged by user"})," and click ",(0,o.jsx)(n.code,{children:"OK"})," (fig. 7.);"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(67401).A+"",width:"651",height:"165"})}),"\n",(0,o.jsx)(n.p,{children:"Fig. 7 Setting user logging."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["once you restart the application server, right-clicking on the ",(0,o.jsx)(n.code,{children:"Surname"})," property will bring up an additional ",(0,o.jsx)(n.code,{children:"Show Change History"})," menu item. If the surname for the current record has been changed by someone, then this will be reflected in the property change history (fig. 8)."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"",children:(0,o.jsx)(n.img,{src:s(5270).A+"",width:"652",height:"300"})}),"\n",(0,o.jsx)(n.p,{children:"Fig. 8. Property change history."}),"\n",(0,o.jsx)(n.p,{children:"The retention time for these logs is set to the same retention time as for the Change Log."}),"\n",(0,o.jsx)(n.h3,{id:"logs",children:"Logs"}),"\n",(0,o.jsx)(n.p,{children:"The following set of logs is supported for each platform component in the platform:"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Component"}),(0,o.jsx)(n.th,{children:"Folder"}),(0,o.jsx)(n.th,{children:"Logs"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Application server (Server)"}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.code,{children:"$FUSION_DIR$/logs"}),", where ",(0,o.jsx)(n.code,{children:"$FUSION_DIR$"})," is the application server startup folder"]}),(0,o.jsx)(n.td,{children:(0,o.jsxs)("ul",{children:[(0,o.jsxs)("li",{children:[(0,o.jsx)(n.code,{children:"stdout"})," - standard output log (output to the standard output stream, i.e. to the OS console, IDE, etc.). Includes ",(0,o.jsx)(n.code,{children:"start"})," and ",(0,o.jsx)(n.code,{children:"explain"})," logs."]}),(0,o.jsxs)("li",{children:[(0,o.jsx)(n.code,{children:"stderr"})," - general error log"]}),(0,o.jsxs)("li",{children:[(0,o.jsx)(n.code,{children:"start"})," - a log of the stop and start process"]}),(0,o.jsxs)("li",{children:[(0,o.jsx)(n.code,{children:"remote"}),", ",(0,o.jsx)(n.code,{children:"invocation"})," - logs of processes related to accessing the application server"]}),(0,o.jsxs)("li",{children:[(0,o.jsx)(n.code,{children:"sql"}),", ",(0,o.jsx)(n.code,{children:"sqlhand"}),", ",(0,o.jsx)(n.code,{children:"sqlconnection"}),", ",(0,o.jsx)(n.code,{children:"sqlconflict"}),", ",(0,o.jsx)(n.code,{children:"sqladjust"})," - logs of processes related to accessing the database server"]}),(0,o.jsxs)("li",{children:[(0,o.jsx)(n.code,{children:"explain"}),", ",(0,o.jsx)(n.code,{children:"explaincompile"})," - logs where query plans are displayed (database server and application server, respectively)"]}),(0,o.jsxs)("li",{children:[(0,o.jsx)(n.code,{children:"lru"})," - log of memory management processes (mainly LRU caches)"]}),(0,o.jsxs)("li",{children:[(0,o.jsx)(n.code,{children:"allocatedbytes"})," - log of memory allocation processes"]}),(0,o.jsxs)("li",{children:[(0,o.jsx)(n.code,{children:"assert"})," - a log of various checks on meeting specified conditions (or rather, non-meeting)"]}),(0,o.jsxs)("li",{children:[(0,o.jsx)(n.code,{children:"mail"})," - mail log"]}),(0,o.jsxs)("li",{children:[(0,o.jsx)(n.code,{children:"jasperReports"})," - JasperReports log"]}),(0,o.jsxs)("li",{children:[(0,o.jsx)(n.code,{children:"jdbc"})," - jdbc driver log"]}),(0,o.jsxs)("li",{children:[(0,o.jsx)(n.code,{children:"exinfo"})," - a log of additional information (not included in the above)"]})]})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Web server (Client)"}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.code,{children:"$CATALINA_BASE$/logs"}),", where ",(0,o.jsx)(n.code,{children:"$CATALINA_BASE$"})," is the folder where Tomcat is installed"]}),(0,o.jsx)(n.td,{children:(0,o.jsxs)("ul",{children:[(0,o.jsxs)("li",{children:[(0,o.jsx)(n.code,{children:"catalina.out"})," - general output log"]}),(0,o.jsxs)("li",{children:[(0,o.jsx)(n.code,{children:"gwtlog"}),", ",(0,o.jsx)(n.code,{children:"gwtlog-err"})," - GWT logs"]}),(0,o.jsxs)("li",{children:[(0,o.jsx)(n.code,{children:"invocation"})," - logs of processes related to accessing the web server"]})]})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Desktop client"}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.code,{children:"$USER_DIR$/.fusion/logs"}),", where ",(0,o.jsx)(n.code,{children:"$USER_DIR$"})," is the user folder"]}),(0,o.jsx)(n.td,{children:(0,o.jsxs)("ul",{children:[(0,o.jsxs)("li",{children:[(0,o.jsx)(n.code,{children:"stdout"})," - standard output log (output to the standard output stream, i.e. to the OS console, IDE, etc.)."]}),(0,o.jsxs)("li",{children:[(0,o.jsx)(n.code,{children:"stderr"})," - general error log"]}),(0,o.jsxs)("li",{children:[(0,o.jsx)(n.code,{children:"remote"}),", ",(0,o.jsx)(n.code,{children:"invocation"})," - logs of processes related to accessing the application server"]}),(0,o.jsxs)("li",{children:[(0,o.jsx)(n.code,{children:"jasperReports"})," - JasperReports log"]})]})})]})]})]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["With ",(0,o.jsx)(n.a,{href:"/v4/Execution_auto",children:"automatic installation"})," under Linux, symlinks for these folders (as well as for the ",(0,o.jsx)(n.a,{href:"/v4/Launch_parameters#applsfusion",children:"lsFusion launch parameters"}),") are automatically created to ",(0,o.jsx)(n.a,{href:"/v4/Execution_auto#logs",children:"other folders"})," whose location is better aligned with Linux ideology."]})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},97677:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/Journals_and_logs_change_log-77c906c0463d46fcfdeb0daa6c8f1b1d.png"},41984:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/Journals_and_logs_client_app_log-746459cb2512064a6afcf809a358f92d.png"},19513:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/Journals_and_logs_connection_log-5696a142aee31ad27fa735a5fb071342.png"},48465:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/Journals_and_logs_error_log-a78ad45f17ae5241063f3bed45a573fc.png"},50810:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/Journals_and_logs_log_property_changes-4bbe3199b2d5daecd4f2f189ddac25b5.png"},75152:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/Journals_and_logs_log_settings-82a4ded811cb69cd37024f69d542a851.png"},5270:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/Journals_and_logs_property_changes_history-befbd6aed40287bfe38660bddbaa7ba9.png"},67401:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/Journals_and_logs_user_logging-757d6d4e309da6be74572557eea3aa48.png"},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>l});var o=s(96540);const i={},r=o.createContext(i);function t(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);