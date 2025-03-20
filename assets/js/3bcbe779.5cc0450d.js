"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["99352"],{13303:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>i,assets:()=>a,toc:()=>d,contentTitle:()=>c});var i=JSON.parse('{"id":"CASE_action_operator","title":"CASE operator","description":"The CASE operator creates an action that implements branching.","source":"@site/docs/CASE_action_operator.md","sourceDirName":".","slug":"/CASE_action_operator","permalink":"/CASE_action_operator","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/master/docs/en/CASE_action_operator.md","tags":[],"version":"current","lastUpdatedAt":1708525070000,"frontMatter":{"title":"CASE operator"},"sidebar":"learn","previous":{"title":"CANCEL operator","permalink":"/CANCEL_operator"},"next":{"title":"CHANGECLASS operator","permalink":"/CHANGECLASS_operator"}}'),s=t("85893"),o=t("50065");let r={title:"CASE operator"},c=void 0,a={},d=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function l(e){let n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"CASE"})," operator creates an ",(0,s.jsx)(n.a,{href:"/Actions",children:"action"})," that implements ",(0,s.jsx)(n.a,{href:"/Branching_CASE_IF_MULTI",children:"branching"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"CASE [exclusionType]\n    WHEN condition1 THEN action1\n    ...\n    WHEN conditionN THEN actionN\n    [ELSE elseAction]\n"})}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"CASE"})," operator creates an action that executes one of the actions passed to it depending on whether the selection conditions are met. Selection conditions are defined using the properties specified in the ",(0,s.jsx)(n.code,{children:"WHEN"})," block. If a selection condition is met, the action specified in the corresponding ",(0,s.jsx)(n.code,{children:"THEN"})," block is executed. If none of the conditions is met, the action specified in the ",(0,s.jsx)(n.code,{children:"ELSE"})," block will be executed if this block is specified."]}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"exclusionType"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/Branching_CASE_IF_MULTI#exclusive",children:"Type of mutual exclusion"}),". Determines whether several conditions can be met simultaneously for a certain set of parameters. It is specified by one of the keywords:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"EXCLUSIVE"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"OVERRIDE"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"EXCLUSIVE"})," type indicates that none of the conditions listed can be met simultaneously. The ",(0,s.jsx)(n.code,{children:"OVERRIDE"})," type allows several conditions to be met simultaneously, in this case, the action corresponding to the first met condition is executed"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"OVERRIDE"})," type is used by default."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"condition1 ... conditionN"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/Expression",children:"Expressions"})," whose values determine the selection conditions."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"action1 ... actionN"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/Action_operators#contextdependent",children:"Context-dependent operators"})," that describe actions that may be called when the corresponding condition is met."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"elseAction"})}),"\n",(0,s.jsx)(n.p,{children:"A context-dependent operator that describes an action to be executed if none of the conditions is met."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lsf",children:"test = DATA INTEGER (INTEGER);\ncaseActionTest(a)  {\n    CASE\n        WHEN test(a) > 7 THEN MESSAGE '>7';\n        WHEN test(a) > 6 THEN MESSAGE '>6';\n        WHEN test(a) > 5 THEN MESSAGE '>5';\n}\n"})})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return r}});var i=t(67294);let s={},o=i.createContext(s);function r(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);