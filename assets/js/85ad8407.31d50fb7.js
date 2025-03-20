"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["3725"],{6676:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>s});var r=JSON.parse('{"id":"RETURN_operator","title":"RETURN operator","description":"The RETURN operator creates an action that implements exit from an action created by the EXEC operator.","source":"@site/docs/RETURN_operator.md","sourceDirName":".","slug":"/RETURN_operator","permalink":"/RETURN_operator","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/master/docs/en/RETURN_operator.md","tags":[],"version":"current","lastUpdatedAt":1708525070000,"frontMatter":{"title":"RETURN operator"},"sidebar":"learn","previous":{"title":"REQUEST operator","permalink":"/REQUEST_operator"},"next":{"title":"SEEK operator","permalink":"/SEEK_operator"}}'),o=n("85893"),a=n("50065");let i={title:"RETURN operator"},s=void 0,l={},c=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Examples",id:"examples",level:3}];function d(e){let t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"RETURN"})," operator creates an ",(0,o.jsx)(t.a,{href:"/Actions",children:"action"})," that implements ",(0,o.jsx)(t.a,{href:"/Exit_RETURN",children:"exit"})," from an action created by the ",(0,o.jsxs)(t.a,{href:"/Call_EXEC",children:[(0,o.jsx)(t.code,{children:"EXEC"})," operator"]}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"syntax",children:"Syntax"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"RETURN\n"})}),"\n",(0,o.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"RETURN"})," operator creates an action that exits from the most nested ",(0,o.jsx)(t.a,{href:"/Call_EXEC",children:"action call"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lsf",children:"importFile  {\n    LOCAL file = FILE ();\n    INPUT f = FILE DO {\n        file () <- f;\n    }\n\n    IF NOT file() THEN RETURN;\n}\n"})})]})}function p(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return i}});var r=n(67294);let o={},a=r.createContext(o);function i(e){let t=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);