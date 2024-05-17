"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[91139],{7084:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var i=t(74848),s=t(28453);const o={title:"CASE operator"},c=void 0,r={id:"CASE_action_operator",title:"CASE operator",description:"The CASE operator creates an action that implements branching.",source:"@site/docs/CASE_action_operator.md",sourceDirName:".",slug:"/CASE_action_operator",permalink:"/next/CASE_action_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/CASE_action_operator.md",tags:[],version:"current",lastUpdatedAt:170852507e4,frontMatter:{title:"CASE operator"},sidebar:"learn",previous:{title:"CANCEL operator",permalink:"/next/CANCEL_operator"},next:{title:"CHANGECLASS operator",permalink:"/next/CHANGECLASS_operator"}},d={},a=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function l(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"CASE"})," operator creates an ",(0,i.jsx)(n.a,{href:"/next/Actions",children:"action"})," that implements ",(0,i.jsx)(n.a,{href:"/next/Branching_CASE_IF_MULTI",children:"branching"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"CASE [exclusionType]\n    WHEN condition1 THEN action1\n    ...\n    WHEN conditionN THEN actionN\n    [ELSE elseAction]\n"})}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"CASE"})," operator creates an action that executes one of the actions passed to it depending on whether the selection conditions are met. Selection conditions are defined using the properties specified in the ",(0,i.jsx)(n.code,{children:"WHEN"})," block. If a selection condition is met, the action specified in the corresponding ",(0,i.jsx)(n.code,{children:"THEN"})," block is executed. If none of the conditions is met, the action specified in the ",(0,i.jsx)(n.code,{children:"ELSE"})," block will be executed if this block is specified."]}),"\n",(0,i.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"exclusionType"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/next/Branching_CASE_IF_MULTI#exclusive",children:"Type of mutual exclusion"}),". Determines whether several conditions can be met simultaneously for a certain set of parameters. It is specified by one of the keywords:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"EXCLUSIVE"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"OVERRIDE"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"EXCLUSIVE"})," type indicates that none of the conditions listed can be met simultaneously. The ",(0,i.jsx)(n.code,{children:"OVERRIDE"})," type allows several conditions to be met simultaneously, in this case, the action corresponding to the first met condition is executed"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"OVERRIDE"})," type is used by default."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"condition1 ... conditionN"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/next/Expression",children:"Expressions"})," whose values determine the selection conditions."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"action1 ... actionN"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/next/Action_operators#contextdependent",children:"Context-dependent operators"})," that describe actions that may be called when the corresponding condition is met."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"elseAction"})}),"\n",(0,i.jsx)(n.p,{children:"A context-dependent operator that describes an action to be executed if none of the conditions is met."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"test = DATA INTEGER (INTEGER);\ncaseActionTest(a)  {\n    CASE\n        WHEN test(a) > 7 THEN MESSAGE '>7';\n        WHEN test(a) > 6 THEN MESSAGE '>6';\n        WHEN test(a) > 5 THEN MESSAGE '>5';\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var i=t(96540);const s={},o=i.createContext(s);function c(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);