"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["97076"],{56391:function(e,r,n){n.r(r),n.d(r,{default:()=>h,frontMatter:()=>i,metadata:()=>o,assets:()=>d,toc:()=>a,contentTitle:()=>c});var o=JSON.parse('{"id":"Action_operators","title":"Action operators","description":"Action operator is a syntax construct that describes an operator creating an action.","source":"@site/versioned_docs/version-v5/Action_operators.md","sourceDirName":".","slug":"/Action_operators","permalink":"/v5/Action_operators","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v5/docs/en/Action_operators.md","tags":[],"version":"v5","lastUpdatedAt":1713867720000,"frontMatter":{"title":"Action operators"},"sidebar":"learn","previous":{"title":"ACTION statement","permalink":"/v5/ACTION_statement"},"next":{"title":"{...} operator","permalink":"/v5/Braces_operator"}}'),t=n("85893"),s=n("50065");let i={title:"Action operators"},c=void 0,d={},a=[{value:"Context dependent operators",id:"contextdependent",level:3},{value:"Context independent operators",id:"contextindependent",level:3}];function l(e){let r={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"Action operator"})," is a syntax construct that describes an ",(0,t.jsx)(r.a,{href:"/v5/Action_operators_paradigm",children:"operator"})," creating an ",(0,t.jsx)(r.a,{href:"/v5/Actions",children:"action"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["Action operators can be divided into ",(0,t.jsx)(r.em,{children:"context dependent"})," and ",(0,t.jsx)(r.em,{children:"context independent"}),"."]}),"\n",(0,t.jsx)(r.h3,{id:"contextdependent",children:"Context dependent operators"}),"\n",(0,t.jsxs)(r.p,{children:["Context dependent action operators can use external context parameters. They can be used wherever you need to define an action, for example, when creating another action or ",(0,t.jsx)(r.a,{href:"/v5/Events",children:"event"}),". These operators are:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsxs)(r.a,{href:"/v5/Braces_operator",children:[(0,t.jsx)(r.code,{children:"{...}"})," operator"]})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsxs)(r.a,{href:"/v5/ACTIVATE_operator",children:[(0,t.jsx)(r.code,{children:"ACTIVATE"})," operator"]})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsxs)(r.a,{href:"/v5/ACTIVE_FORM_operator",children:[(0,t.jsx)(r.code,{children:"ACTIVE FORM"})," operator"]})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsxs)(r.a,{href:"/v5/APPLY_operator",children:[(0,t.jsx)(r.code,{children:"APPLY"})," operator"]})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsxs)(r.a,{href:"/v5/ASK_operator",children:[(0,t.jsx)(r.code,{children:"ASK"})," operator"]})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsxs)(r.a,{href:"/v5/BREAK_operator",children:[(0,t.jsx)(r.code,{children:"BREAK"})," operator"]})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsxs)(r.a,{href:"/v5/CANCEL_operator",children:[(0,t.jsx)(r.code,{children:"CANCEL"})," operator"]})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsxs)(r.a,{href:"/v5/CASE_action_operator",children:[(0,t.jsx)(r.code,{children:"CASE"})," operator"]})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsxs)(r.a,{href:"/v5/CHANGE_operator",children:[(0,t.jsx)(r.code,{children:"CHANGE"})," operator"]})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsxs)(r.a,{href:"/v5/CHANGECLASS_operator",children:[(0,t.jsx)(r.code,{children:"CHANGECLASS"})," operator"]})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsxs)(r.a,{href:"/v5/COLLAPSE_operator",children:[(0,t.jsx)(r.code,{children:"COLLAPSE"})," operator"]})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsxs)(r.a,{href:"/v5/DELETE_operator",children:[(0,t.jsx)(r.code,{children:"DELETE"})," operator"]})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsxs)(r.a,{href:"/v5/DIALOG_operator",children:[(0,t.jsx)(r.code,{children:"DIALOG"})," operator"]})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsxs)(r.a,{href:"/v5/EMAIL_operator",children:[(0,t.jsx)(r.code,{children:"EMAIL"})," operator"]})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsxs)(r.a,{href:"/v5/EVAL_operator",children:[(0,t.jsx)(r.code,{children:"EVAL"})," operator"]})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsxs)(r.a,{href:"/v5/EXEC_operator",children:[(0,t.jsx)(r.code,{children:"EXEC"})," operator"]})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsxs)(r.a,{href:"/v5/EXPAND_operator",children:[(0,t.jsx)(r.code,{children:"EXPAND"})," operator"]})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsxs)(r.a,{href:"/v5/EXPORT_operator",children:[(0,t.jsx)(r.code,{children:"EXPORT"})," operator"]})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsxs)(r.a,{href:"/v5/FOR_operator",children:[(0,t.jsx)(r.code,{children:"FOR"})," operator"]})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsxs)(r.a,{href:"/v5/IF_..._THEN_action_operator",children:[(0,t.jsx)(r.code,{children:"IF ... THEN"})," operator"]})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsxs)(r.a,{href:"/v5/IMPORT_operator",children:[(0,t.jsx)(r.code,{children:"IMPORT"})," operator"]})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsxs)(r.a,{href:"/v5/INPUT_operator",children:[(0,t.jsx)(r.code,{children:"INPUT"})," operator"]})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsxs)(r.a,{href:"/v5/MESSAGE_operator",children:[(0,t.jsx)(r.code,{children:"MESSAGE"})," operator"]})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsxs)(r.a,{href:"/v5/MULTI_action_operator",children:[(0,t.jsx)(r.code,{children:"MULTI"})," operator"]})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsxs)(r.a,{href:"/v5/NEW_operator",children:[(0,t.jsx)(r.code,{children:"NEW"})," operator"]})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsxs)(r.a,{href:"/v5/NESTEDSESSION_operator",children:[(0,t.jsx)(r.code,{children:"NESTEDSESSION"})," operator"]})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsxs)(r.a,{href:"/v5/NEWEXECUTOR_operator",children:[(0,t.jsx)(r.code,{children:"NEWEXECUTOR"})," operator"]})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsxs)(r.a,{href:"/v5/NEWSESSION_operator",children:[(0,t.jsx)(r.code,{children:"NEWSESSION"})," operator"]})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsxs)(r.a,{href:"/v5/NEWTHREAD_operator",children:[(0,t.jsx)(r.code,{children:"NEWTHREAD"})," operator"]})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsxs)(r.a,{href:"/v5/PRINT_operator",children:[(0,t.jsx)(r.code,{children:"PRINT"})," operator"]})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsxs)(r.a,{href:"/v5/READ_operator",children:[(0,t.jsx)(r.code,{children:"READ"})," operator"]})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsxs)(r.a,{href:"/v5/REQUEST_operator",children:[(0,t.jsx)(r.code,{children:"REQUEST"})," operator"]})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsxs)(r.a,{href:"/v5/RETURN_operator",children:[(0,t.jsx)(r.code,{children:"RETURN"})," operator"]})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsxs)(r.a,{href:"/v5/SEEK_operator",children:[(0,t.jsx)(r.code,{children:"SEEK"})," operator"]})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsxs)(r.a,{href:"/v5/SHOW_operator",children:[(0,t.jsx)(r.code,{children:"SHOW"})," operator"]})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsxs)(r.a,{href:"/v5/TRY_operator",children:[(0,t.jsx)(r.code,{children:"TRY"})," operator"]})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsxs)(r.a,{href:"/v5/WHILE_operator",children:[(0,t.jsx)(r.code,{children:"WHILE"})," operator"]})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsxs)(r.a,{href:"/v5/WRITE_operator",children:[(0,t.jsx)(r.code,{children:"WRITE"})," operator"]})}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"contextindependent",children:"Context independent operators"}),"\n",(0,t.jsxs)(r.p,{children:["Context independent action operators cannot use external context parameters. Thus they can only be used in the ",(0,t.jsxs)(r.a,{href:"/v5/ACTION_statement",children:[(0,t.jsx)(r.code,{children:"ACTION"})," statement"]}),":"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsxs)(r.a,{href:"/v5/ABSTRACT_action_operator",children:[(0,t.jsx)(r.code,{children:"ABSTRACT"})," operator"]})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsxs)(r.a,{href:"/v5/INTERNAL_operator",children:[(0,t.jsx)(r.code,{children:"INTERNAL"})," operator"]})}),"\n"]})]})}function h(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},50065:function(e,r,n){n.d(r,{Z:function(){return c},a:function(){return i}});var o=n(67294);let t={},s=o.createContext(t);function i(e){let r=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);