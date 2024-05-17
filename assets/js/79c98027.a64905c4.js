"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[58854],{18584:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=i(74848),n=i(28453);const r={title:"Working parameters"},d=void 0,c={id:"Working_parameters",title:"Working parameters",description:"The platform working parameters can be set in one of the following ways (in the order of their priorities, lower priority at the bottom):",source:"@site/docs/Working_parameters.md",sourceDirName:".",slug:"/Working_parameters",permalink:"/next/Working_parameters",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Working_parameters.md",tags:[],version:"current",lastUpdatedAt:1683013092e3,frontMatter:{title:"Working parameters"},sidebar:"learn",previous:{title:"Launch events",permalink:"/next/Launch_events"},next:{title:"User interface",permalink:"/next/User_interface"}},o={},l=[];function h(e){const t={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"The platform working parameters can be set in one of the following ways (in the order of their priorities, lower priority at the bottom):"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["In Java code in the ",(0,s.jsx)(t.code,{children:"lsfusion.server.physics.admin.Settings.java"})," file (relevant for platform forks)"]}),"\n",(0,s.jsxs)(t.li,{children:["In ",(0,s.jsx)(t.code,{children:"lsfusion.properties"})," which are typically part of the project and therefore function for all installations by default - parameter name should start with ",(0,s.jsx)(t.code,{children:"settings"})," (e.g., settings.enableUI)"]}),"\n",(0,s.jsxs)(t.li,{children:["In ",(0,s.jsx)(t.code,{children:"conf/settings.properties"})," (for specific installations) - parameter name should start with ",(0,s.jsx)(t.code,{children:"settings"})]}),"\n",(0,s.jsxs)(t.li,{children:["In ",(0,s.jsx)(t.a,{href:"/next/Launch_parameters#appjava",children:"Java startup parameters"})," - parameter name should start with ",(0,s.jsx)(t.code,{children:"D"})," prefix plus ",(0,s.jsx)(t.code,{children:"settings"})," (e.g., ",(0,s.jsx)(t.code,{children:"-Dsettings.enableUI=2"}),")"]}),"\n",(0,s.jsxs)(t.li,{children:["In the database: ",(0,s.jsx)(t.code,{children:"Administration > System > Settings > Parameters"}),". In this interface, you can set both global settings and settings for specific roles"]}),"\n",(0,s.jsxs)(t.li,{children:["During the execution of an action using system actions: ",(0,s.jsx)(t.code,{children:"Service.pushSetting[STRING, STRING]"}),", ",(0,s.jsx)(t.code,{children:"Service.popSetting[STRING]"})," (overriding the value of the property for the entire current thread)."]}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Parameter Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"enableUI"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"int"})}),(0,s.jsxs)(t.td,{children:["Determines user interface access, including ",(0,s.jsx)(t.a,{href:"/next/Access_from_an_external_system#form",children:"form api"}),(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:"2"})," - Allow anonymous access",(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:"1"})," - Allow authenticated access only",(0,s.jsx)("br",{}),"0 - Do not allow access"]}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"1"})," (",(0,s.jsx)(t.code,{children:"2"})," - if the server is started in ",(0,s.jsx)(t.a,{href:"/next/Launch_parameters#devmode",children:"development mode"}),")"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"enableAPI"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"int"})}),(0,s.jsxs)(t.td,{children:["Determines access to the program interface excluding form api",(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:"2"})," - Allow anonymous access",(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:"1"})," - Allow authenticated access only",(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:"0"})," - Do not allow access"]}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"1"})," (",(0,s.jsx)(t.code,{children:"2"})," - if the server is started in ",(0,s.jsx)(t.a,{href:"/next/Launch_parameters#devmode",children:"development mode"}),")"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"freeConnections"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"int"})}),(0,s.jsx)(t.td,{children:"Maximum number of connections in the connection pool on the application server"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"12"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"statDegree"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"int"})}),(0,s.jsxs)(t.td,{children:["The base used to estimate the number of records (statistics) by all optimizers. With that, optimizers consider any number of records equal to the specified base to a certain degree (for example, if the number of records is really ",(0,s.jsx)(t.code,{children:"1000"})," and the base is ",(0,s.jsx)(t.code,{children:"5"}),", then the optimizer considers the number of records equal to ",(0,s.jsx)(t.code,{children:"5"})," to the ",(0,s.jsx)(t.code,{children:"4"}),"th degree). Thus, the larger the base, the less accurate the statistics become, which means the compilation time, the size of the caches and generated requests are reduced, but this can significantly increase the likelihood of errors when building the correct query plan."]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"5"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)("a",{id:"authTokenExpiration"}),(0,s.jsx)(t.code,{children:"authTokenExpiration"})]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"int"})}),(0,s.jsx)(t.td,{children:"Authentication token expiration time in minutes."}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"60*24"})," (1 day)"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"reserveIDStep"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"int"})}),(0,s.jsxs)(t.td,{children:["The number of IDs that the application server immediately reserves for optimization when performing single object adding operations (with asynchronous input, single ",(0,s.jsx)(t.code,{children:"NEW"}),", etc.)"]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"50"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"excessThreadAllocatedBytes"}),", ",(0,s.jsx)(t.code,{children:"accessInterruptCount"})]}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"long"}),", ",(0,s.jsx)(t.code,{children:"int"})]}),(0,s.jsx)(t.td,{children:"Determine the threshold and the number of iterations of memory measurement during which this threshold is exceeded after which the Java thread will be automatically interrupted. This mechanism is typically used to increase the fault tolerance of the application server."}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"5GB"}),", ",(0,s.jsx)(t.code,{children:"4"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"queryLengthTimeout"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"int"})}),(0,s.jsxs)(t.td,{children:["Parameters of the query materialization mechanism. ",(0,s.jsx)(t.code,{children:"queryLengthTimeout"})," defines the minimum query length for which the mechanism is enabled"]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"1000"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"useRequestTimeout"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"boolean"})}),(0,s.jsx)(t.td,{children:"Enables the mechanism for repeated remote calls if these calls take too long. It is necessary for resolving situations when a call is made on the server, but the response is lost due to network problems. The latter usually happens when the application server is running in a virtualized environment. Thus, in this case, it is recommended to enable this setting and disable it in the opposite case."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"true"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"tempTablesTimeThreshold"}),", ",(0,s.jsx)(t.code,{children:"tempTablesCountThreshold"})]}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"int"}),", ",(0,s.jsx)(t.code,{children:"int"})]}),(0,s.jsx)(t.td,{children:'Determine the minimum lifespan threshold (in seconds) of a temporary table and the number of tables per connection, upon exceeding which these temporary tables are cleared/deleted in the routine mode. The minimum lifespan threshold for the table should be commensurate with the standard using time of the temporary table. The smaller these thresholds, the lower the resource consumption by the database server, but the higher the likelihood of "cache rotation"'}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"240"}),", ",(0,s.jsx)(t.code,{children:"40"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"queryRowCountPessLimit"}),", ",(0,s.jsx)(t.code,{children:"queryRowCountOptDivider"})]}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"int"}),", ",(0,s.jsx)(t.code,{children:"int"})]}),(0,s.jsxs)(t.td,{children:["Parameters of the protection mechanism against too large queries. ",(0,s.jsx)(t.code,{children:"queryRowCountPessLimit"})," - minimum number of records for which this protection is activated, ",(0,s.jsx)(t.code,{children:"queryRowCountOptDivider"})," - the threshold at which the application server throws an error (is set as part of all memory available for the application server, e.g., if the parameter value is ",(0,s.jsx)(t.code,{children:"50"})," and the memory capacity is ",(0,s.jsx)(t.code,{children:"100GB"}),", then the threshold is ",(0,s.jsx)(t.code,{children:"100GB/50=2GB"}),")."]}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"1000"}),", ",(0,s.jsx)(t.code,{children:"50"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"queryLengthLimit"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"int"})}),(0,s.jsxs)(t.td,{children:["Parameters of the protection mechanism against too long queries. ",(0,s.jsx)(t.code,{children:"queryLengthLimit"})," - the length of the request upon exceeding which the application server throws an error."]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"2000000"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"remoteLogTime"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"int"})}),(0,s.jsx)(t.td,{children:"Runtime threshold (in milliseconds) at which the remote call is written to the corresponding log (server-remote)"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"3000"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"explainThreshold"}),", ",(0,s.jsx)(t.code,{children:"explainJavaStack"}),", ",(0,s.jsx)(t.code,{children:"explainCompile"})]}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"int"}),", ",(0,s.jsx)(t.code,{children:"boolean"}),", ",(0,s.jsx)(t.code,{children:"boolean"})]}),(0,s.jsxs)(t.td,{children:["Output parameters of ",(0,s.jsx)(t.a,{href:"/next/Journals_and_logs#logs",children:"query execution plan logs"}),(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(t.code,{children:"explainThreshold"})," - runtime threshold (in milliseconds) at which SQL request is written to the corresponding log (explain). Used only if ",(0,s.jsx)(t.code,{children:"Service.explainAnalyzeMode[User]"})," is enabled for the user."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(t.code,{children:"explainJavaStack"})," - determines whether the Java stack should also be logged in addition to the LSF stack."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(t.code,{children:"explainCompile"})," - outputs to a special log (explaincompile) information about the compilation of the query (proposed plans, pushing conditions into subqueries, etc.)."]})]})]}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"100"}),", ",(0,s.jsx)(t.code,{children:"false"}),", ",(0,s.jsx)(t.code,{children:"false"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"startServerAnyWay"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"boolean"})}),(0,s.jsx)(t.td,{children:"Start the server, even if there are errors in the index structure or metadata synchronization"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"conflictSleepThreshold"}),", ",(0,s.jsx)(t.code,{children:"conflictSleepTimeDegree"})]}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"int"}),", ",(0,s.jsx)(t.code,{children:"int"})]}),(0,s.jsxs)(t.td,{children:["Parameters for resolving repeated update conflicts:",(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(t.code,{children:"conflictSleepThreshold"})," - the number of unsuccessful attempts (when a conflict arose) after which the mechanism should be enabled."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(t.code,{children:"conflictSleepTimeDegree"})," - time base (in seconds), at the degree of which counted in the number of attempts the thread should be stopped (e.g., if the base is ",(0,s.jsx)(t.code,{children:"2"})," then for ",(0,s.jsx)(t.code,{children:"3"})," attempts timeout will be ",(0,s.jsx)(t.code,{children:"8"}),", for ",(0,s.jsx)(t.code,{children:"4"})," - ",(0,s.jsx)(t.code,{children:"16"}),", etc.)"]})]})]}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"3"}),", ",(0,s.jsx)(t.code,{children:"2"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"timeoutNanosPerRow"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"int"})}),(0,s.jsx)(t.td,{children:"The average number of nanoseconds to process one row (is used to estimate the approximate time of the request execution). If this estimated time is exceeded, the platform tries to materialize some subqueries (or somehow change this request to a more pessimistic one) and run the query again. Reducing this parameter value may lead to more frequent materializations and additional repeated executions of the query in general, increasing it may lead to the use of incorrect plans (in the first place, nested loops on joining large tables), for example, in cases when the SQL server evaluates the subquery statistics incorrectly."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"20"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"deadLockThreshold"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"int"})}),(0,s.jsxs)(t.td,{children:["Parameters for resolving repeated deadlocks. ",(0,s.jsx)(t.code,{children:"deadLockThreshold"})," - the number of unsuccessful attempts (when a deadlock occurred) after which the mechanism should be enabled."]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"0"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"periodRestartConnections"}),", ",(0,s.jsx)(t.code,{children:"percentRestartConnections"})]}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"int"}),", ",(0,s.jsx)(t.code,{children:"int"})]}),(0,s.jsxs)(t.td,{children:["Parameters of the connection restarting mechanism. ",(0,s.jsx)(t.code,{children:"periodRestartConnections"})," - determines how often (a period in seconds) this mechanism is launched. ",(0,s.jsx)(t.code,{children:"percentRestartConnections"})," - determines the percentage of connections with the maximum scoring that will be restarted."]}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"60"}),", ",(0,s.jsx)(t.code,{children:"1"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"closeFormDelay"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"int"})}),(0,s.jsx)(t.td,{children:"The period provided to the client to finish processing the form after initiating its closure on the server (this mechanism is necessary for saving a round trip request when closing the form)."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"5000"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"constraintRowsLimit"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"int"})}),(0,s.jsx)(t.td,{children:"Determines the number of rows that should be displayed within a constraint violation message"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"30"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"defaultCompareForStringContains"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"boolean"})}),(0,s.jsx)(t.td,{children:"Use Contains as the default filter in custom filters"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"limitHintIncrementComplexity"}),", ",(0,s.jsx)(t.code,{children:"limitComplexityGrowthCoeff"}),", ",(0,s.jsx)(t.code,{children:"limitHintIncrementStat"}),", ",(0,s.jsx)(t.code,{children:"limitHintIncrementValueComplexity"}),", ",(0,s.jsx)(t.code,{children:"limitApplyHintIncrementComplexity"}),", ",(0,s.jsx)(t.code,{children:"limitApplyHintIncrementStat"})]}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"int"}),", ",(0,s.jsx)(t.code,{children:"double"}),", ",(0,s.jsx)(t.code,{children:"int"}),", ",(0,s.jsx)(t.code,{children:"int"}),", ",(0,s.jsx)(t.code,{children:"int"}),", ",(0,s.jsx)(t.code,{children:"int"})]}),(0,s.jsxs)(t.td,{children:["Parameters for managing the complexity of changes (materialization of property changes when the complexity of incremental calculations becomes too large):",(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(t.code,{children:"limitHintIncrementComplexity"})," - complexity threshold (defined as the approximate number of executed operators). When exceeded, property changes are materialized into a temporary table. This threshold must be exceeded either by the condition that defines the object collections for which the property has changed, or directly by the value of this property (for the value it is additionally verified that the increase in complexity compared to the calculation without changes exceeds ",(0,s.jsx)(t.code,{children:"limitComplexityGrowthCoeff"}),")"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(t.code,{children:"limitHintIncrementStat"})," - the threshold of the estimated number of object collections for which the property changes, upon exceeding which the changes will not materialize (to avoid materialization of too large amount of data). This value is multiplied by the square of the ratio of the change complexity to the threshold (the greater the complexity, the less harm in the additional effort for maintaining a large amount of data), and also after this multiplication the resulting threshold is checked for being no less than the maximum number of records out of all used temporary tables (if less, then it is increased to this value)."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(t.code,{children:"limitHintIncrementValueComplexity"})," - if one of the property parameters is a known constant value, its changes will not be materialized by default. At the same time, complexity can increase very quickly, so there is an additional threshold in the platform, upon exceeding which changes will be materialized even in this case (with a constant parameter). However, if a property is marked with a special ",(0,s.jsx)(t.code,{children:"COMPLEX"})," option or depends on such a property, its changes having a constant value as one of the parameters will never be materialized."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(t.code,{children:"limitApplyHintIncrementComplexity"}),", ",(0,s.jsx)(t.code,{children:"limitApplyHintIncrementStat"})," - parameters similar to the upper ones without the Apply prefix, and thus used when executing actions inside the ",(0,s.jsxs)(t.a,{href:"/next/Apply_changes_APPLY",children:["changes applying (",(0,s.jsx)(t.code,{children:"APPLY"}),")"]})," operator (e.g., inside event handling)"]})]}),"Upon increasing all of the above parameters, the compiler and the optimizer will have more information (possibly redundant) for building more efficient plans, but will also consume more of the processor time/memory (often significantly, therefore it is not recommended to set them too large)"]}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"50"}),", ",(0,s.jsx)(t.code,{children:"1.5"}),", ",(0,s.jsx)(t.code,{children:"200"}),", ",(0,s.jsx)(t.code,{children:"1000"}),", ",(0,s.jsx)(t.code,{children:"100"}),", ",(0,s.jsx)(t.code,{children:"1000"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"excessThreadAllocatedBytes"}),", ",(0,s.jsx)(t.code,{children:"excessInterruptCount"}),", ",(0,s.jsx)(t.code,{children:"threadAllocatedMemoryPeriod"})]}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"long"}),", ",(0,s.jsx)(t.code,{children:"int"}),", ",(0,s.jsx)(t.code,{children:"int"})]}),(0,s.jsxs)(t.td,{children:["Parameters of the excessive memory consumption preventing mechanism on the application server:",(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(t.code,{children:"excessThreadAllocatedBytes"})," - the number of bytes upon exceeding which the thread is considered as consuming too much memory"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(t.code,{children:"excessInterruptCount"})," - the number of consecutive measurements during which the thread consumes too much memory. When exceeded, the thread will be interrupted"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(t.code,{children:"threadAllocatedMemoryPeriod"})," - period (in seconds) that determines how often memory consumption by threads is measured"]})]})]}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"5368709120L"})," (5GB), ",(0,s.jsx)(t.code,{children:"4"}),", ",(0,s.jsx)(t.code,{children:"180"})," (3 minutes)"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"useSavePointsThreshold"}),", ",(0,s.jsx)(t.code,{children:"savePointCountForExceptions"}),", ",(0,s.jsx)(t.code,{children:"updateSavePointsMinMultiplier"}),", ",(0,s.jsx)(t.code,{children:"updateSavePointsMaxMultiplier"})]}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"int"}),", ",(0,s.jsx)(t.code,{children:"int"}),", ",(0,s.jsx)(t.code,{children:"double"}),", ",(0,s.jsx)(t.code,{children:"double"})]}),(0,s.jsxs)(t.td,{children:["Parameters of the mechanism for using savepoints in transactions (used to avoid restarting the entire transaction, for example, in the subquery materialization mechanism):",(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(t.code,{children:"useSavePointsThreshold"})," - the number of simultaneous savepoints on the application server. The higher, the less likely transactions will be restarted, but the more likely some DBMSs (for example, Postgres) will initiate global locks (LWLock in Postgres). This parameter is adaptive and can change depending on the actual need to use savepoints (since the savepoint mechanism is turned on only after a certain number of transaction restarts). "]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(t.code,{children:"savePointCountForExceptions"})," - the number of transaction restarts, upon exceeding which the savepoint mechanism is enabled (",(0,s.jsx)(t.code,{children:"-1"})," - fully disable). "]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(t.code,{children:"updateSavePointsMaxMultiplier"}),", ",(0,s.jsx)(t.code,{children:"updateSavePointsMinMultiplier"})," - the minimum and maximum coefficients that can be set by the server when adaptively determining the number of simultaneous savepoints on the application server (for example, by default these coefficients are ",(0,s.jsx)(t.code,{children:"0.8"})," and ",(0,s.jsx)(t.code,{children:"3.0"}),", i.e. the minimum targeted number of simultaneous savepoints is ",(0,s.jsx)(t.code,{children:"5*0.8=4"}),", the maximum is ",(0,s.jsx)(t.code,{children:"5*3=15"}),")"]})]})]}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"5"}),", ",(0,s.jsx)(t.code,{children:"-1"}),", ",(0,s.jsx)(t.code,{children:"0.8"}),", ",(0,s.jsx)(t.code,{children:"3.0"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"changeBooleanOnSingleClick"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"boolean"})}),(0,s.jsxs)(t.td,{children:["Determines whether an event of changing a property of a logical type on the form is triggered by a single (",(0,s.jsx)(t.code,{children:"true"}),") or double (",(0,s.jsx)(t.code,{children:"false"}),") mouse click"]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"changeActionOnSingleClick"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"boolean"})}),(0,s.jsxs)(t.td,{children:["Determines whether the action call event on the form is triggered by a single (",(0,s.jsx)(t.code,{children:"true"}),") or double (",(0,s.jsx)(t.code,{children:"false"}),") mouse click"]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})})]})]})]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["In addition to the system parameters, the platform also has ",(0,s.jsx)(t.a,{href:"/next/Launch_parameters",children:"launch parameters"})," which are set a little differently and are relevant mainly for startup (initialization) processes of various components of the platform and access to these components."]})})]})}function a(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>d,x:()=>c});var s=i(96540);const n={},r=s.createContext(n);function d(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);