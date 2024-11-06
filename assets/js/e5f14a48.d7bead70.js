"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[90203],{85335:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=s(74848),r=s(28453);const o={title:"ASK operator"},i=void 0,a={id:"ASK_operator",title:"ASK operator",description:"The ASK operator creates an action that shows the user a message in a dialog form.",source:"@site/versioned_docs/version-v4/ASK_operator.md",sourceDirName:".",slug:"/ASK_operator",permalink:"/v4/ASK_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/ASK_operator.md",tags:[],version:"v4",lastUpdatedAt:170852507e4,frontMatter:{title:"ASK operator"},sidebar:"learn",previous:{title:"APPLY operator",permalink:"/v4/APPLY_operator"},next:{title:"CHANGE operator",permalink:"/v4/CHANGE_operator"}},c={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Example",id:"example",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"ASK"})," operator creates an action that shows the user a message in a ",(0,t.jsx)(n.a,{href:"/v4/Show_message_MESSAGE_ASK#dialog",children:"dialog form"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ASK expression \n[[alias =] YESNO]\n[DO actionOperator [ELSE elseOperator]]\n"})}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"ASK"})," operator creates an action that asks the user for confirmation/asks the user a question."]}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"expression"})}),"\n",(0,t.jsxs)(n.p,{children:["An expression whose value is a message string. If the value is ",(0,t.jsx)(n.code,{children:"NULL"}),", the question will not be asked, but the action will be executed."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"YESNO"})}),"\n",(0,t.jsx)(n.p,{children:"If specified, the user is asked a question (Yes/No)"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"alias"})}),"\n",(0,t.jsxs)(n.p,{children:["The name of the local parameter in which the user's response to the question will be written (Yes = ",(0,t.jsx)(n.code,{children:"TRUE"}),", No = ",(0,t.jsx)(n.code,{children:"NULL"}),"). ",(0,t.jsx)(n.a,{href:"/v4/IDs#id",children:"Simple ID"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"actionOperator"})}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.a,{href:"/v4/Action_operators#contextdependent",children:"context-dependent action operator"})," that is executed if the input was completed successfully. Both upper parameters and the user response parameter (if the question was Yes/No) can be used as parameters"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"elseActionOperator"})}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.a,{href:"/v4/Action_operators#contextdependent",children:"context-dependent action operator"})," that is executed if the input was cancelled. Only upper parameters can be used as parameters."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"testAsk ()  {\n    ASK 'Are you sure you want to continue?' DO {\n        MESSAGE 'You continued';\n    }\n\n    ASK 'Use old values?' useOld = YESNO DO {\n        IF useOld THEN\n            MESSAGE 'Using old values';\n        ELSE\n            MESSAGE 'Using new values';\n    }\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var t=s(96540);const r={},o=t.createContext(r);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);