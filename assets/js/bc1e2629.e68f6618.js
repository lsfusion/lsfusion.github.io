"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[22841],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=c(n),p=r,m=h["".concat(s,".").concat(p)]||h[p]||u[p]||a;return n?i.createElement(m,o(o({ref:t},d),{},{components:n})):i.createElement(m,o({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},88904:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c}});var i=n(83117),r=(n(67294),n(3905));const a={title:"Scheduler"},o=void 0,l={unversionedId:"Scheduler",id:"Scheduler",title:"Scheduler",description:"The scheduler is designed to automatically execute certain tasks with specified frequency.",source:"@site/docs/Scheduler.md",sourceDirName:".",slug:"/Scheduler",permalink:"/next/Scheduler",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Scheduler.md",tags:[],version:"current",lastUpdatedAt:1622042248,formattedLastUpdatedAt:"5/26/2021",frontMatter:{title:"Scheduler"},sidebar:"learn",previous:{title:"Process monitor",permalink:"/next/Process_monitor"},next:{title:"Journals and logs",permalink:"/next/Journals_and_logs"}},s={},c=[],d={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The scheduler is designed to automatically execute certain tasks with specified frequency."),(0,r.kt)("p",null,"The scheduler is configured in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Administration > Scheduler > Tasks menu"),". You can start the scheduler on this form by clicking ",(0,r.kt)("inlineCode",{parentName:"p"},"Start scheduler")," button and stop it by clicking ",(0,r.kt)("inlineCode",{parentName:"p"},"Stop scheduler")," (Fig. 7.11.). If the Server is specified in the system settings, then the scheduler can be launched from this server only (Fig. 1.)."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:n(32391).Z,width:"652",height:"321"})),(0,r.kt)("p",null,"Fig. 1. Specifying a server to run the scheduler"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:n(19649).Z,width:"652",height:"278"})),(0,r.kt)("p",null,"Fig. 2. Scheduler start/stop"),(0,r.kt)("p",null,"This form determines the composition of Tasks \u2013 buttons ",(0,r.kt)("inlineCode",{parentName:"p"},"Add"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Delete"),".  The scheduler will execute only active Tasks \u2013 ",(0,r.kt)("inlineCode",{parentName:"p"},"Active")," mark. For each task the following required parameters are set:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Start date")," \u2013 the task will be executed only after the specified date. The time in this field is not tied to the start date; it is tied to the current date and indicates the time of the first task launch within a day. The task repetition is counted from this time. The frequency is set in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Repeat every (seconds)")," field. If the period is more than a day (86400 seconds), then the starting date is the date of the server start (restart)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Repeat every (seconds)")," \u2013 the task execution frequency."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Countdown")," \u2013 indicates the time from which to count down the time for the repeated task: either ",(0,r.kt)("inlineCode",{parentName:"li"},"From the end of the previous")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"From the start of the previous"),".")),(0,r.kt)("p",null,"Also, the optional parameters can be specified:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Time from"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"Time to")," \u2013 time limit for the task execution within 24 hours."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Execute at start")," \u2013 the task is performed only when the server is started (restarted).")),(0,r.kt)("p",null,"For each task the following buttons are available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Execute task")," - executes the task manually. The task runs immediately on the button click. If the task is not completed when the button is pressed, it will be launched twice."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Restart task")," - executes the task manually. The task runs immediately on the button click. If the task is not completed when the button is pressed, it will be stopped and restarted."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Delete")," - deletes the task.")),(0,r.kt)("p",null,"Tabs on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Tasks")," form:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Properties")," tab lists the actions included in the selected task. The sequence of actions is determined by the values in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Order")," field from the smallest to the largest. Only actions with the ",(0,r.kt)("inlineCode",{parentName:"li"},"Active")," mark are executed. The ",(0,r.kt)("inlineCode",{parentName:"li"},"Ignore errors")," mark allows you to run the action despite the error that occurred in the previous action, otherwise, the current action will not start. An action can be implemented either by built-in commands (the list of commands appears on clicking the ",(0,r.kt)("inlineCode",{parentName:"li"},"Action")," field) or user-created scripts \u2013 the ",(0,r.kt)("inlineCode",{parentName:"li"},"Script")," field. Some built-in actions require input parameters (usually numeric) which are entered in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Action parameter")," field. In the ",(0,r.kt)("inlineCode",{parentName:"li"},"Perform no longer than (seconds)")," field the maximum acceptable duration for the execution of this action is indicated. If the action is not completed within the specified period, the system considers it an error."),(0,r.kt)("li",{parentName:"ul"},"On the ",(0,r.kt)("inlineCode",{parentName:"li"},"Log")," tab the results of the action, when it started and finished, can be traced. If an error preventing the action from being completed has occurred during its execution, then it is marked in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Error")," field in the log. Some actions are accompanied by informational messages \u2013 mark in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Messages")," field. If the log has a mark in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Error in messages")," field, this means that during the execution inconsistencies with some of the program constraints were found. All errors and messages are followed by notes in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Client messages")," section (Fig. 3.).")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:n(16645).Z,width:"651",height:"151"})),(0,r.kt)("p",null,"Fig. 3. Scheduler log."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the task is run once every few days, then on the ",(0,r.kt)("inlineCode",{parentName:"li"},"Filter by day")," tab you can specify either the days of the week or days of the month on which the task should be started. If both the days of the week and days of the month are specified, then the task will be executed only on those days of the month that fall on the specified days of the week (Fig. 4.).")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:n(64575).Z,width:"652",height:"248"})),(0,r.kt)("p",null,"Fig. 4. Setting filter by day."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On the ",(0,r.kt)("inlineCode",{parentName:"li"},"Scheduler settings")," tab the maximum number of threads (tasks) that can be executed simultaneously is specified. If the number of threads is not specified, then, by default, up to 5 tasks can be executed simultaneously.")))}u.isMDXComponent=!0},16645:function(e,t,n){t.Z=n.p+"assets/images/Scheduler_log-bdd9dc6ffb3fd52e2a5b87a50c3525ad.png"},32391:function(e,t,n){t.Z=n.p+"assets/images/Scheduler_server-735f5ea0a1790692554314fc84d716d4.png"},19649:function(e,t,n){t.Z=n.p+"assets/images/Scheduler_start-7610a81749792a2ddf40b34cedc593fd.png"},64575:function(e,t,n){t.Z=n.p+"assets/images/Scheduler_time-347134b40d674f88f506bfb84f7a0816.png"}}]);