"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[26942],{25911:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=t(74848),o=t(28453);const r={title:"IF ... THEN operator"},s=void 0,c={id:"IF_..._THEN_action_operator",title:"IF ... THEN operator",description:"The IF ... THEN operator creates an action that implements branching with one condition (single form).",source:"@site/versioned_docs/version-v5/IF_..._THEN_action_operator.md",sourceDirName:".",slug:"/IF_..._THEN_action_operator",permalink:"/IF_..._THEN_action_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/IF_..._THEN_action_operator.md",tags:[],version:"v5",lastUpdatedAt:170852507e4,frontMatter:{title:"IF ... THEN operator"},sidebar:"learn",previous:{title:"FOR operator",permalink:"/FOR_operator"},next:{title:"IMPORT operator",permalink:"/IMPORT_operator"}},a={},d=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function l(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"IF ... THEN"})," operator creates an ",(0,i.jsx)(n.a,{href:"/Actions",children:"action"})," that implements ",(0,i.jsx)(n.a,{href:"/Branching_CASE_IF_MULTI#single",children:"branching"})," with one condition (single form)."]}),"\n",(0,i.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"IF condition \nTHEN action\n[ELSE alternativeAction]\n"})}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"IF ... THEN"})," operator creates an action that implements branching with one condition. When this action is executed, the condition is checked and, if the condition is met, the action specified after the keyword ",(0,i.jsx)(n.code,{children:"THEN"})," is called. There is also the option of specifying an alternative action with the keyword ",(0,i.jsx)(n.code,{children:"ELSE"}),", which is called if the condition is not met."]}),"\n",(0,i.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"condition"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/Expression",children:"Expression"})," defining a condition. If the value of the expression does not equal ",(0,i.jsx)(n.code,{children:"NULL"}),", then the condition is met and the action specified after the keyword ",(0,i.jsx)(n.code,{children:"THEN"})," is called."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"action"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/Action_operators#contextdependent",children:"Context-dependent operator"})," that describes the action that will be executed when the corresponding condition is met."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"alternativeAction"})}),"\n",(0,i.jsx)(n.p,{children:"Context-dependent operator that describes an action that will be executed if the condition is not met."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"// Action that compares the value of the count property to 3 and displays a message to the user\nmoreThan3(obj)  {\n    IF count(obj) > 3 THEN\n        MESSAGE '>3';\n    ELSE\n        MESSAGE '<=3';\n}\n\ncheckNullName (Store st) {\n    IF NOT name(st) THEN\n        MESSAGE 'Name is null';\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var i=t(96540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);