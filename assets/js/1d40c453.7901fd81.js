"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[80545],{25771:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=t(74848),i=t(28453);const o={title:"In an interactive view (SHOW, DIALOG)"},r=void 0,a={id:"In_an_interactive_view_SHOW_DIALOG",title:"In an interactive view (SHOW, DIALOG)",description:"This operator creates an action that opens a form in the interactive view.",source:"@site/versioned_docs/version-v4/In_an_interactive_view_SHOW_DIALOG.md",sourceDirName:".",slug:"/In_an_interactive_view_SHOW_DIALOG",permalink:"/v4/In_an_interactive_view_SHOW_DIALOG",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/In_an_interactive_view_SHOW_DIALOG.md",tags:[],version:"v4",lastUpdatedAt:1623249583e3,frontMatter:{title:"In an interactive view (SHOW, DIALOG)"},sidebar:"learn",previous:{title:"Open form",permalink:"/v4/Open_form"},next:{title:"In a print view (PRINT)",permalink:"/v4/In_a_print_view_PRINT"}},l={},c=[{value:"Flow management",id:"flow",level:3},{value:"Form location",id:"location",level:3},{value:"System action management",id:"system-action-management",level:3},{value:"Dialog form",id:"dialog",level:3},{value:"Extra features",id:"extra",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["This operator creates an action that ",(0,s.jsx)(n.a,{href:"/v4/Open_form",children:"opens a form"})," in the ",(0,s.jsx)(n.a,{href:"/v4/Interactive_view",children:"interactive"})," view."]}),"\n",(0,s.jsx)(n.h3,{id:"flow",children:"Flow management"}),"\n",(0,s.jsx)(n.p,{children:"The operator works in two modes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Synchronous"})," (",(0,s.jsx)(n.code,{children:"WAIT"}),") - waits for the user to ",(0,s.jsx)(n.strong,{children:"close"})," the form, then saves the execution results and passes control to the next action."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Asynchronous"})," (",(0,s.jsx)(n.code,{children:"NOWAIT"}),") - passes control to the next action right after ",(0,s.jsx)(n.strong,{children:"opening"})," a form on the client end."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"By default, the operator works in the synchronous mode."}),"\n",(0,s.jsx)(n.h3,{id:"location",children:"Form location"}),"\n",(0,s.jsx)(n.p,{children:"A form being opened can be shown in two ways:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["As a ",(0,s.jsx)(n.em,{children:"window"})," (",(0,s.jsx)(n.code,{children:"FLOAT"}),")- the form is shown as a floating window."]}),"\n",(0,s.jsxs)(n.li,{children:["As a ",(0,s.jsx)(n.em,{children:"tab"})," (",(0,s.jsx)(n.code,{children:"DOCKED"}),") - the form is opened as a tab in the system ",(0,s.jsx)(n.a,{href:"/v4/Navigator_design",children:"window"})," ",(0,s.jsx)(n.code,{children:"System.forms"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"By default, forms in the synchronous mode are shown as windows, in the asynchronous mode \u2013 as tabs."}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:'In the current implementation of the platform, a form shown as a window is always modal, which means that the "asynchronous window" mode is not supported.'})}),"\n",(0,s.jsx)(n.h3,{id:"system-action-management",children:"System action management"}),"\n",(0,s.jsxs)(n.p,{children:["By default, when the interactive view is enabled, the platform ",(0,s.jsx)(n.a,{href:"/v4/Interactive_view#sysactions",children:"automatically determines"})," which system actions of the form/session lifecycle management should be shown and which not. But since these conditions are somewhat heuristic, the developer can use a corresponding set of options to specify the actions that need to be shown when the form is opened. Similarly, the corresponding option can be used to specify whether the form is the ",(0,s.jsx)(n.a,{href:"/v4/Interactive_view#owner",children:"owner of the session"})," in which it is opened or not."]}),"\n",(0,s.jsx)(n.h3,{id:"dialog",children:"Dialog form"}),"\n",(0,s.jsxs)(n.p,{children:["This operator also allows to return the latest ",(0,s.jsx)(n.a,{href:"/v4/Form_structure#currentObject",children:"current value"})," of a specified object (or, if necessary, of several objects), thus, essentially, performing ",(0,s.jsx)(n.a,{href:"/v4/Value_input",children:"value input"}),". In this case, ",(0,s.jsx)(n.a,{href:"/v4/Value_input#result",children:"input is considered to be canceled"})," if the user closes the form using ",(0,s.jsx)(n.code,{children:"System.formClose"})," (not ",(0,s.jsx)(n.code,{children:"System.formOk"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["While inputting a value, it is sometimes necessary to not just choose one from a list, but also allow the user to return a ",(0,s.jsx)(n.code,{children:"NULL"})," value. For this purpose, the dialog form has a special option that, if enabled, shows the drop action (",(0,s.jsx)(n.code,{children:"System.formDrop"}),") on the form. Calling this action closes the form and returns a ",(0,s.jsx)(n.code,{children:"NULL"})," value as a result."]}),"\n",(0,s.jsx)(n.p,{children:"Similar to the other value input operators, the dialog form of this operator allows to:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["specify ",(0,s.jsx)(n.a,{href:"/v4/Value_input#initial",children:"initial object values"})," (through the ",(0,s.jsx)(n.a,{href:"/v4/Open_form",children:"passing objects"})," mechanism)."]}),"\n",(0,s.jsxs)(n.li,{children:["specify ",(0,s.jsx)(n.a,{href:"/v4/Value_input#result",children:"main and alternative"})," actions. The first is called if the input was successfully completed, the second if not (i.e. if the input was canceled)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/v4/Value_input#initial",children:"change"})," a specified property."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["In addition, if a value is entered to input to change the specified property, it is often necessary (at the value selection stage) to show the user not all object collections, but only those ones, whose selection (and subsequent change with these objects) will not violate existing ",(0,s.jsx)(n.a,{href:"/v4/Constraints",children:"constraints"}),". Accordingly, so that the developer does not have to copy the form and manually add the necessary filter, the platform automatically generates and adds corresponding filters to the form (this behavior, however, can be disabled using a corresponding option)."]}),"\n",(0,s.jsx)(n.p,{children:"The operator dialog form is available in the synchronous mode only."}),"\n",(0,s.jsx)(n.h3,{id:"extra",children:"Extra features"}),"\n",(0,s.jsxs)(n.p,{children:['When opening a form, you can specify that all of its properties should be available in the "read-only"mode. In this case, the behavior will be identical to the behavior when during form creation, the "read-only" mode is specified for each ',(0,s.jsx)(n.a,{href:"/v4/Interactive_view#property",children:"property view"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Also, when calling the form, you can specify that it will be opened in a ",(0,s.jsx)(n.a,{href:"/v4/New_session_NEWSESSION_NESTEDSESSION",children:"new"})," (nested) session. In this case, ",(0,s.jsx)(n.a,{href:"/v4/Open_form#params",children:"passing objects"})," and value input will be performed in the current session (so it makes sense to use this option only if you need to pass objects and/or input a value; otherwise, it makes more sense to use a ",(0,s.jsx)(n.a,{href:"/v4/New_session_NEWSESSION_NESTEDSESSION",children:"new session"})," operator)."]}),"\n",(0,s.jsx)(n.h3,{id:"language",children:"Language"}),"\n",(0,s.jsxs)(n.p,{children:["To open a form in the interactive view, use the ",(0,s.jsxs)(n.a,{href:"/v4/SHOW_operator",children:[(0,s.jsx)(n.code,{children:"SHOW"})," operator"]}),". To show the form in the dialog mode, use the ",(0,s.jsxs)(n.a,{href:"/v4/DIALOG_operator",children:[(0,s.jsx)(n.code,{children:"DIALOG"})," operator"]}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lsf",children:"date = DATA DATE (Order);\nFORM showForm\n    OBJECTS dateFrom = DATE, dateTo = DATE PANEL\n    PROPERTIES VALUE(dateFrom), VALUE(dateTo)\n\n    OBJECTS o = Order\n    FILTERS date(o) >= dateFrom, date(o) <= dateTo\n;\n\ntestShow ()  {\n    SHOW showForm OBJECTS dateFrom = 2010_01_01, dateTo = 2010_12_31;\n\n    NEWSESSION {\n        NEW s = Sku {\n            SHOW sku OBJECTS s = s FLOAT;\n        }\n    }\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lsf",children:"FORM selectSku\n    OBJECTS s = Sku\n    PROPERTIES(s) id\n;\n\ntestDialog  {\n    DIALOG selectSku OBJECTS s INPUT DO {\n        MESSAGE 'Selected sku : ' + id(s);\n    }\n}\n\nsku = DATA Sku (OrderDetail);\nidSku (OrderDetail d) = id(sku(d));\n\nchangeSku (OrderDetail d)  {\n    DIALOG selectSku OBJECTS s = sku(d) CHANGE;\n\n    //equivalent to the first option\n    DIALOG selectSku OBJECTS s = sku(d) INPUT NULL CONSTRAINTFILTER DO {\n        sku(d) <- s;\n    }\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(96540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);