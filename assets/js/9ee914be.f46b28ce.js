"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["23365"],{5626:function(e,t,r){r.r(t),r.d(t,{default:()=>p,frontMatter:()=>i,metadata:()=>n,assets:()=>c,toc:()=>l,contentTitle:()=>a});var n=JSON.parse('{"id":"ACTIVE_FORM_operator","title":"ACTIVE FORM operator","description":"The ACTIVATE FORM operator creates an action that checks the activeness of a form.","source":"@site/versioned_docs/version-v4/ACTIVE_FORM_operator.md","sourceDirName":".","slug":"/ACTIVE_FORM_operator","permalink":"/v4/ACTIVE_FORM_operator","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v4/docs/en/ACTIVE_FORM_operator.md","tags":[],"version":"v4","lastUpdatedAt":1708525070000,"frontMatter":{"title":"ACTIVE FORM operator"},"sidebar":"learn","previous":{"title":"ACTIVATE operator","permalink":"/v4/ACTIVATE_operator"},"next":{"title":"APPLY operator","permalink":"/v4/APPLY_operator"}}'),o=r("85893"),s=r("50065");let i={title:"ACTIVE FORM operator"},a=void 0,c={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function d(e){let t={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"ACTIVATE FORM"})," operator creates an ",(0,o.jsx)(t.a,{href:"/v4/Actions",children:"action"})," that checks the ",(0,o.jsx)(t.a,{href:"/v4/Activity_ACTIVE",children:"activeness"})," of a ",(0,o.jsx)(t.a,{href:"/v4/Forms",children:"form"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"syntax",children:"Syntax"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"ACTIVE FORM formName\n"})}),"\n",(0,o.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"ACTIVE FORM"})," operator creates an action that writes the activeness value of the specified form to the ",(0,o.jsx)(t.code,{children:"System.isActiveForm[]"})," property. If the form is active, ",(0,o.jsx)(t.code,{children:"TRUE"})," is written."]}),"\n",(0,o.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:"formName"})}),"\n",(0,o.jsxs)(t.p,{children:["Form name. ",(0,o.jsx)(t.a,{href:"/v4/IDs#cid",children:"Composite ID"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lsf",children:"FORM exampleForm;\ntestActive  {\n    ACTIVE FORM exampleForm;\n    IF isActiveForm() THEN MESSAGE 'Example form is active';\n}\n"})})]})}function p(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return a},a:function(){return i}});var n=r(67294);let o={},s=n.createContext(o);function i(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);