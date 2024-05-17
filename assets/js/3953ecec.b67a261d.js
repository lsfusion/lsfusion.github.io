"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[69863],{14902:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>a,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=s(74848),i=s(28453);const o={title:"SHOW operator"},t=void 0,c={id:"SHOW_operator",title:"SHOW operator",description:"The SHOW operator creates an action that opens a form in interactive view.",source:"@site/versioned_docs/version-v4/SHOW_operator.md",sourceDirName:".",slug:"/SHOW_operator",permalink:"/v4/SHOW_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/SHOW_operator.md",tags:[],version:"v4",lastUpdatedAt:170852507e4,frontMatter:{title:"SHOW operator"},sidebar:"learn",previous:{title:"SEEK operator",permalink:"/v4/SEEK_operator"},next:{title:"TRY operator",permalink:"/v4/TRY_operator"}},d={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Options",id:"options",level:3},{value:"Examples",id:"examples",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"SHOW"})," operator creates an ",(0,r.jsx)(n.a,{href:"/v4/Actions",children:"action"})," that ",(0,r.jsx)(n.a,{href:"/v4/In_an_interactive_view_SHOW_DIALOG",children:"opens a form"})," in interactive view."]}),"\n",(0,r.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"SHOW name \n[OBJECTS objName1 = expr1 [NULL], ..., objNameN = exprN [NULL]]\n[formActionOptions] \n"})}),"\n",(0,r.jsx)(n.p,{children:"When opening the list/edit form, the syntax is slightly different:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"SHOW classFormType className\n= expr [NULL]\n[formActionOptions] \n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"formActionOptions"})," is the options for this action. They can be added one by one in any order:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"syncType\nwindowType\nMANAGESESSION | NOMANAGESESSION\nNEWSESSION | NESTEDSESSION\nCANCEL | NOCANCEL\nREADONLY\n"})}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"SHOW"})," operator creates an action that opens the specified form. When opening the form in the ",(0,r.jsx)(n.code,{children:"OBJECTS"})," block, ",(0,r.jsx)(n.a,{href:"/v4/Open_form#params",children:"initial values"})," can be specified for ",(0,r.jsx)(n.a,{href:"/v4/Form_structure",children:"Form structure"})," form objects."]}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"name"})}),"\n",(0,r.jsxs)(n.p,{children:["Form name. ",(0,r.jsx)(n.a,{href:"/v4/IDs#cid",children:"Composite ID"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"classFormType"})}),"\n",(0,r.jsx)(n.p,{children:"Keyword. Determines which form to open:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"LIST"})," \u2013 list"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"EDIT"})," \u2013 edit"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"className"})}),"\n",(0,r.jsxs)(n.p,{children:["The name of the user class whose list/edit form is to be opened. ",(0,r.jsx)(n.a,{href:"/v4/IDs#cid",children:"Composite ID"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"objName1 ... objNameN"})}),"\n",(0,r.jsxs)(n.p,{children:["Names of form objects for which initial values are specified. ",(0,r.jsx)(n.a,{href:"/v4/IDs#id",children:"Simple IDs"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"expr, expr1 ... exprN"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/v4/Expression",children:"Expressions"})," which values determine the initial values for form objects."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"NULL"})}),"\n",(0,r.jsxs)(n.p,{children:["Specifies that the values passed may be ",(0,r.jsx)(n.code,{children:"NULL"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"syncType"})}),"\n",(0,r.jsxs)(n.p,{children:["Determines in which ",(0,r.jsx)(n.a,{href:"/v4/In_an_interactive_view_SHOW_DIALOG#flow",children:"flow control"})," mode the operator will work:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"WAIT"})," - synchronous. Used by default."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"NOWAIT"})," - asynchronous."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"windowType"})}),"\n",(0,r.jsxs)(n.p,{children:["Method of ",(0,r.jsx)(n.a,{href:"/v4/In_an_interactive_view_SHOW_DIALOG#location",children:"the form layout"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"DOCKED"})," \u2013 as a tab. Used by default in asynchronous mode."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"FLOAT"})," - as a window. Used by default in synchronous mode."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"MANAGESESSION"})," | ",(0,r.jsx)(n.code,{children:"NOMANAGESESSION"})]}),"\n",(0,r.jsxs)(n.p,{children:["Keywords. Determine whether or not the created form ",(0,r.jsx)(n.a,{href:"/v4/Interactive_view#owner",children:"is considered to be the owner of the session"})," (if so, in interactive mode the corresponding buttons for managing the session will be shown on the form). By default, the platform tries to determine which mode to use ",(0,r.jsx)(n.a,{href:"/v4/Interactive_view#sysactions",children:"automatically"})," depending on the context."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"CANCEL"})," | ",(0,r.jsx)(n.code,{children:"NOCANCEL"})]}),"\n",(0,r.jsxs)(n.p,{children:['Keywords. Determine whether or not to show the "Cancel" system action (',(0,r.jsx)(n.code,{children:"System.formCancel"}),") on the form. By default, the platform tries to determine which mode to use ",(0,r.jsx)(n.a,{href:"/v4/Interactive_view#sysactions",children:"automatically"})," depending on context."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"NEWSESSION"})," | ",(0,r.jsx)(n.code,{children:"NESTEDSESSION"})]}),"\n",(0,r.jsx)(n.p,{children:"Keywords. Determine that the form will be opened in a new (nested) session. By default, the form is opened in the current session."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"READONLY"})}),"\n",(0,r.jsxs)(n.p,{children:["Keyword. If specified, the form is opened in ",(0,r.jsx)(n.a,{href:"/v4/In_an_interactive_view_SHOW_DIALOG#extra",children:"read-only"})," mode."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"date = DATA DATE (Order);\nFORM showForm\n    OBJECTS dateFrom = DATE, dateTo = DATE PANEL\n    PROPERTIES VALUE(dateFrom), VALUE(dateTo)\n\n    OBJECTS o = Order\n    FILTERS date(o) >= dateFrom, date(o) <= dateTo\n;\n\ntestShow ()  {\n    SHOW showForm OBJECTS dateFrom = 2010_01_01, dateTo = 2010_12_31;\n\n    NEWSESSION {\n        NEW s = Sku {\n            SHOW sku OBJECTS s = s FLOAT;\n        }\n    }\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var r=s(96540);const i={},o=r.createContext(i);function t(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);