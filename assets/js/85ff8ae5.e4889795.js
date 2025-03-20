"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["86356"],{24837:function(e,n,t){t.r(n),t.d(n,{default:()=>d,frontMatter:()=>r,metadata:()=>s,assets:()=>l,toc:()=>h,contentTitle:()=>i});var s=JSON.parse('{"id":"Events","title":"Events","description":"Events are a mechanism that allows to execute certain actions at certain points in time (these actions shall be called event handlers).","source":"@site/versioned_docs/version-v5/Events.md","sourceDirName":".","slug":"/Events","permalink":"/v5/Events","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v5/docs/en/Events.md","tags":[],"version":"v5","lastUpdatedAt":1685108136000,"frontMatter":{"title":"Events"},"sidebar":"learn","previous":{"title":"Send mail (EMAIL)","permalink":"/v5/Send_mail_EMAIL"},"next":{"title":"Simple event","permalink":"/v5/Simple_event"}}'),a=t("85893"),o=t("50065");let r={title:"Events"},i=void 0,l={},h=[{value:"Event types",id:"type",level:3},{value:"Change operators&#39; event mode",id:"change",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function c(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"Events"})," are a mechanism that allows to execute certain ",(0,a.jsx)(n.a,{href:"/v5/Actions",children:"actions"})," at certain points in time (these actions shall be called event ",(0,a.jsx)(n.em,{children:"handlers"}),")."]}),"\n",(0,a.jsx)(n.h3,{id:"type",children:"Event types"}),"\n",(0,a.jsx)(n.p,{children:"There are two types of events:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.em,{children:"Synchronous"})," - occur immediately after a data change."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.em,{children:"Asynchronous"})," - occur at arbitrary points in time as the server manages to complete execution of all defined handlers, and/or after a certain period of time."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"In turn, from the perspective of the scope of changes, events can be divided into:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.em,{children:"Local"})," - occur locally for each change session."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.em,{children:"Global"})," - occur globally for the entire database."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Thus, events can be synchronous local, synchronous global, asynchronous local, and asynchronous global. Note that by default global events are synchronous and local events are asynchronous (as the most commonly used combinations). Also, by default, all events are global."}),"\n",(0,a.jsx)(n.p,{children:"Advantages of synchronous events:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"If necessary, you can cancel the changes in the handler if, for example, these changes do not meet the necessary conditions."}),"\n",(0,a.jsx)(n.li,{children:"They guarantee greater integrity, since after the changes have been written the user is guaranteed to be working with the updated data."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Advantages of asynchronous events:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:'You can release the user immediately and perform the handling "in the background". This improves system ergonomics; however, it is possible only when updating the data is not critical for the user\'s further work (for global events, for example, within the next 5-10 minutes, until the server has time to complete the next handling cycle).'}),"\n",(0,a.jsx)(n.li,{children:"Handlings are grouped for a large number of changes, including those made by different users (in the case of global events), and, accordingly, are performed fewer times, thereby improving the overall system performance."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Advantages of local events:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The user sees the results of event handling immediately, not only after he has saved to the common database."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Advantages of global events:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"They provide better performance and integrity, due both to the fact that the handling is performed only after the changes are saved to the common database (that is, significantly less often), and to the use of the numerous DBMS capabilities for working with transactions."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["The platform also allows to additionally specify that the event will occur only if the change session belongs to one of the given forms. If this is not done, then it must be kept in mind that most of the described events occur very often, so their handling should not have side effects (for example, showing messages) if there are no changes in the session. Ideally, events should be ",(0,a.jsx)(n.a,{href:"/v5/Simple_event",children:"simple"})," and should generally be used only to optimize the performance of really complex cases."]}),"\n",(0,a.jsx)(n.h3,{id:"change",children:"Change operators' event mode"}),"\n",(0,a.jsxs)(n.p,{children:["When handling events, you can use a special mode of the ",(0,a.jsx)(n.a,{href:"/v5/Previous_value_PREV",children:"previous value"})," operator (it shall be called ",(0,a.jsx)(n.em,{children:"event"})," mode). In this mode, the previous value operator will return the property's values not at the beginning of the session, but at the time of the previous occurrence of this event (or rather, the end of its handling). A similar mode is supported for all ",(0,a.jsx)(n.a,{href:"/v5/Change_operators_SET_CHANGED_etc",children:"change"})," operators."]}),"\n",(0,a.jsxs)(n.p,{children:["Event mode is also supported for the ",(0,a.jsx)(n.a,{href:"/v5/Cancel_changes_CANCEL",children:"cancel changes"})," operator. In this case, when changes are canceled inside the global event handler, the session is not cleared, but ",(0,a.jsx)(n.a,{href:"/v5/Apply_changes_APPLY",children:"applying changes"})," which led to the execution of this handler is canceled. The global event must be synchronous, otherwise the platform will throw an error."]}),"\n",(0,a.jsx)(n.p,{children:"By default, the following modes are used in event handling:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"for the previous value operator: standard mode (value at the beginning of the session)"}),"\n",(0,a.jsx)(n.li,{children:"for change operators - event (value at the time the previous event occurred)."}),"\n",(0,a.jsx)(n.li,{children:"for the cancel changes operator - event mode (canceling the application, not clearing the session)."}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"For change operators and the previous value operator, when executing global synchronous event handlers, these modes (standard and event) coincide"})}),"\n",(0,a.jsx)(n.h3,{id:"language",children:"Language"}),"\n",(0,a.jsxs)(n.p,{children:["To create actions that handle events, use the ",(0,a.jsxs)(n.a,{href:"/v5/ON_statement",children:[(0,a.jsx)(n.code,{children:"ON"})," statement"]}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"CLASS Sku;\nname = DATA STRING[100] (Sku);\n\nON {\n    LOCAL changedName = BOOLEAN (Sku);\n    changedName(Sku s) <- CHANGED(name(s));\n    IF (GROUP SUM 1 IF changedName(Sku s)) THEN {\n        MESSAGE 'Changed ' + (GROUP SUM 1 IF changedName(Sku s)) + ' skus!!!';\n    }\n}\n\nCLASS Order;\n\nCLASS Customer;\nname = DATA STRING[50] (Customer);\n\ncustomer = DATA Customer (Order);\ndiscount = DATA NUMERIC[6,2] (Order);\n\nON LOCAL {\n    FOR CHANGED(customer(Order o)) AND name(customer(o)) == 'Best customer' DO\n        discount(o) <- 50;\n}\n"})})]})}function d(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return r}});var s=t(67294);let a={},o=s.createContext(a);function r(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);