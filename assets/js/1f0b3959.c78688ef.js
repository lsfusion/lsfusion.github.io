"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["88740"],{18552:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>i,metadata:()=>a,assets:()=>c,toc:()=>l,contentTitle:()=>r});var a=JSON.parse('{"id":"Eval_EVAL","title":"Eval (EVAL)","description":"The eval operator creates an action that executes defined program code in the lsFusion language. Program code is defined as a property whose value should belong to the string class. This is implemented using an action which takes a line of code as an argument.","source":"@site/versioned_docs/version-v4/Eval_EVAL.md","sourceDirName":".","slug":"/Eval_EVAL","permalink":"/v4/Eval_EVAL","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v4/docs/en/Eval_EVAL.md","tags":[],"version":"v4","lastUpdatedAt":1625651520000,"frontMatter":{"title":"Eval (EVAL)"},"sidebar":"learn","previous":{"title":"Custom formula (FORMULA)","permalink":"/v4/Custom_formula_FORMULA"},"next":{"title":"Migration","permalink":"/v4/Migration"}}'),s=n("85893"),o=n("50065");let i={title:"Eval (EVAL)"},r=void 0,c={},l=[{value:"Action execution",id:"action-execution",level:3},{value:"Executable code restrictions",id:"executable-code-restrictions",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function d(e){let t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The eval operator creates an action that executes defined program code in the ",(0,s.jsx)(t.strong,{children:"lsFusion"})," language. Program code is defined as a property whose value should belong to the string class. This is implemented using an ",(0,s.jsx)(t.a,{href:"/v4/Actions",children:"action"})," which takes a line of code as an argument."]}),"\n",(0,s.jsxs)(t.p,{children:["The code that is passed to an action must be a sequence of ",(0,s.jsx)(t.a,{href:"/v4/Statements",children:"statements"}),". It is assumed that one of these statements will create an action named ",(0,s.jsx)(t.code,{children:"run"})," (it is this action that will be executed)."]}),"\n",(0,s.jsx)(t.h3,{id:"action-execution",children:"Action execution"}),"\n",(0,s.jsxs)(t.p,{children:["This operator can also execute a single action (rather than a set of statements): in this case the code should be a sequence of ",(0,s.jsx)(t.a,{href:"/v4/Action_operators_paradigm",children:"action operators"})," and local property declarations. To refer to the parameters of the action, you can use the special character ",(0,s.jsx)(t.code,{children:"$"})," and the parameter number (starting from ",(0,s.jsx)(t.code,{children:"1"}),")."]}),"\n",(0,s.jsx)(t.h3,{id:"executable-code-restrictions",children:"Executable code restrictions"}),"\n",(0,s.jsxs)(t.p,{children:["In the current implementation, executable code must not contain statements that modify existing objects in the system. For example, you cannot add ",(0,s.jsx)(t.a,{href:"/v4/Events",children:"events"})," or ",(0,s.jsx)(t.a,{href:"/v4/Data_properties_DATA",children:"data"})," and materialized properties, ",(0,s.jsx)(t.a,{href:"/v4/Extensions",children:"extend"})," existing objects, etc."]}),"\n",(0,s.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,s.jsxs)(t.p,{children:["To declare an action that executes program code, use the ",(0,s.jsxs)(t.a,{href:"/v4/EVAL_operator",children:[(0,s.jsx)(t.code,{children:"EVAL"})," operator"]}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lsf",children:"// source code consisting of one statement is specified with a string constant\naddProperty  { EVAL ACTION 'MESSAGE \\'Hello World\\''; }  \n\n// a property to which the user can enter the source code\ncode 'Source code' = DATA BPSTRING[2000] ();\n\n// the action executing this code              \nexecute 'Execute code'  { EVAL code(); }\n"})})]})}function u(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return i}});var a=n(67294);let s={},o=a.createContext(s);function i(e){let t=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);