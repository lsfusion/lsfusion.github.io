"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[47847],{15080:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(74848),i=n(28453);const s={title:"Activity (ACTIVE)"},a=void 0,o={id:"Activity_ACTIVE",title:"Activity (ACTIVE)",description:"The activity operator creates a property that determines whether one of the following form elements is active:",source:"@site/versioned_docs/version-v4/Activity_ACTIVE.md",sourceDirName:".",slug:"/Activity_ACTIVE",permalink:"/v4/Activity_ACTIVE",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Activity_ACTIVE.md",tags:[],version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"Jun 9, 2021",frontMatter:{title:"Activity (ACTIVE)"},sidebar:"learn",previous:{title:"Activation (ACTIVATE)",permalink:"/v4/Activation_ACTIVATE"},next:{title:"Static view",permalink:"/v4/Static_view"}},c={},l=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const t={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.em,{children:"activity"})," operator creates a property that determines whether one of the following form elements is active:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Property - whether the focus is on the specified ",(0,r.jsx)(t.a,{href:"/v4/Properties",children:"property"})," on the form."]}),"\n",(0,r.jsxs)(t.li,{children:["Tab - whether one of the tabs in the specified ",(0,r.jsx)(t.a,{href:"/v4/Form_design#containers",children:"tab panel"})," is active."]}),"\n",(0,r.jsxs)(t.li,{children:["Form - determines whether the specified ",(0,r.jsx)(t.a,{href:"/v4/Forms",children:"form"})," is active for the user."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,r.jsxs)(t.p,{children:["To create a property that determines whether a tab is active, use the ",(0,r.jsxs)(t.a,{href:"/v4/ACTIVE_TAB_operator",children:[(0,r.jsx)(t.code,{children:"ACTIVE TAB"})," operator"]}),". Whether a form is active is determined by creating an action using the ",(0,r.jsxs)(t.a,{href:"/v4/ACTIVE_FORM_operator",children:[(0,r.jsx)(t.code,{children:"ACTIVE FORM"})," operator"]}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lsf",children:"//Form with two tabs\r\nFORM tabbedForm 'Tabbed form'\r\n    OBJECTS u = CustomUser\r\n    PROPERTIES(u) name\r\n\r\n    OBJECTS c = Chat\r\n    PROPERTIES(c) name\r\n;\r\n\r\nDESIGN tabbedForm {\r\n    NEW tabPane FIRST {\r\n        type = TABBED;\r\n        NEW contacts {\r\n            caption = 'Contacts';\r\n            MOVE BOX(u);\r\n        }\r\n        NEW recent {\r\n            caption = 'Recent';\r\n            MOVE BOX(c);\r\n        }\r\n    }\r\n}\r\n\r\n//If the 'Recent' tab is active\r\nrecentActive() = ACTIVE TAB tabbedForm.recent;\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lsf",children:"FORM exampleForm;\r\ntestActive  {\r\n    ACTIVE FORM exampleForm;\r\n    IF isActiveForm() THEN MESSAGE 'Example form is active';\r\n}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(96540);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);