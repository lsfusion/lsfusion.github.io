"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[38183],{27492:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var n=r(74848),o=r(28453);const s={title:"ACTIVE FORM operator"},i=void 0,a={id:"ACTIVE_FORM_operator",title:"ACTIVE FORM operator",description:"The ACTIVATE FORM operator creates an action that checks the activeness of a form.",source:"@site/versioned_docs/version-v4/ACTIVE_FORM_operator.md",sourceDirName:".",slug:"/ACTIVE_FORM_operator",permalink:"/v4/ACTIVE_FORM_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/ACTIVE_FORM_operator.md",tags:[],version:"v4",lastUpdatedAt:1708525070,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"ACTIVE FORM operator"},sidebar:"learn",previous:{title:"ACTIVATE operator",permalink:"/v4/ACTIVATE_operator"},next:{title:"APPLY operator",permalink:"/v4/APPLY_operator"}},c={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"ACTIVATE FORM"})," operator creates an ",(0,n.jsx)(t.a,{href:"/v4/Actions",children:"action"})," that checks the ",(0,n.jsx)(t.a,{href:"/v4/Activity_ACTIVE",children:"activeness"})," of a ",(0,n.jsx)(t.a,{href:"/v4/Forms",children:"form"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"ACTIVE FORM formName\n"})}),"\n",(0,n.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"ACTIVE FORM"})," operator creates an action that writes the activeness value of the specified form to the ",(0,n.jsx)(t.code,{children:"System.isActiveForm[]"})," property. If the form is active, ",(0,n.jsx)(t.code,{children:"TRUE"})," is written."]}),"\n",(0,n.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"formName"})}),"\n",(0,n.jsxs)(t.p,{children:["Form name. ",(0,n.jsx)(t.a,{href:"/v4/IDs#cid",children:"Composite ID"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lsf",children:"FORM exampleForm;\r\ntestActive  {\r\n    ACTIVE FORM exampleForm;\r\n    IF isActiveForm() THEN MESSAGE 'Example form is active';\r\n}\n"})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>a});var n=r(96540);const o={},s=n.createContext(o);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);