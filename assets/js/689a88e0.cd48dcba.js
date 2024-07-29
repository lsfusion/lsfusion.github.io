"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[20160],{99560:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=t(74848),r=t(28453);const o={title:"EVAL operator"},i=void 0,a={id:"EVAL_operator",title:"EVAL operator",description:"The EVAL operator: creating an action that executes code in the lsFusion language.",source:"@site/versioned_docs/version-v5/EVAL_operator.md",sourceDirName:".",slug:"/EVAL_operator",permalink:"/v5/EVAL_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/EVAL_operator.md",tags:[],version:"v5",lastUpdatedAt:170852507e4,frontMatter:{title:"EVAL operator"},sidebar:"learn",previous:{title:"EMAIL operator",permalink:"/v5/EMAIL_operator"},next:{title:"EXEC operator",permalink:"/v5/EXEC_operator"}},c={},d=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function l(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"EVAL"})," operator: creating an ",(0,s.jsx)(n.a,{href:"/v5/Actions",children:"action"})," that ",(0,s.jsx)(n.a,{href:"/v5/Eval_EVAL",children:"executes code"})," in the ",(0,s.jsx)(n.strong,{children:"lsFusion"})," language."]}),"\n",(0,s.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"EVAL [ACTION] expression [PARAMS paramExpr1, ..., paramExprN]\n"})}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"EVAL"})," operator is designed to execute program code while the server is running. The operator takes as its argument a string containing source code. This string can be a simple string ",(0,s.jsx)(n.a,{href:"/v5/Constant",children:"constant"})," or a more complex ",(0,s.jsx)(n.a,{href:"/v5/Expression",children:"expression"})," that evaluates to a string."]}),"\n",(0,s.jsxs)(n.p,{children:["The code that is passed should consist of a sequence of ",(0,s.jsx)(n.a,{href:"/v5/Statements",children:"statements"})," (or ",(0,s.jsx)(n.a,{href:"/v5/Action_operators_paradigm",children:"action operators"})," and local property declarations, if the ",(0,s.jsx)(n.code,{children:"ACTION"})," option is specified). When the action is executed, this code is inserted into a ",(0,s.jsx)(n.a,{href:"/v5/Modules",children:"module"})," with a unique name. The module header is generated by the system: it declares a unique name for the module and lists all the modules that are in the project in the ",(0,s.jsxs)(n.a,{href:"/v5/Module_header",children:[(0,s.jsx)(n.code,{children:"REQUIRE"})," statement"]}),". Thus, you can use all ",(0,s.jsx)(n.a,{href:"/v5/Element_identification",children:"elements"})," from other modules in the code passed in the ",(0,s.jsx)(n.code,{children:"EVAL"})," operator. If the ",(0,s.jsx)(n.code,{children:"ACTION"})," option is not specified, it is assumed that one of the passed statements will be the creation of action with the name ",(0,s.jsx)(n.code,{children:"run"})," (it is this action that will be executed)."]}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"expression"})}),"\n",(0,s.jsxs)(n.p,{children:["An ",(0,s.jsx)(n.a,{href:"/v5/Expression",children:"expression"})," whose value is the string to be executed."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"ACTION"})}),"\n",(0,s.jsx)(n.p,{children:"Keyword."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"paramExpr1, ..., paramExprN"})}),"\n",(0,s.jsx)(n.p,{children:"A list of expressions whose values will be passed to the action being executed as arguments. The number of expressions must be equal to the number of parameters of the action being executed."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lsf",children:"// source code consisting of one statement is specified with a string constant\naddProperty  { EVAL ACTION 'MESSAGE \\'Hello World\\''; }  \n\n// a property to which the user can enter the source code\ncode 'Source code' = DATA BPSTRING[2000] ();\n\n// the action executing this code              \nexecute 'Execute code'  { EVAL code(); }\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var s=t(96540);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);