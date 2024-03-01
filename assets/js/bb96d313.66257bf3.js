"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[19969],{51734:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=t(74848),a=t(28453);const i={title:"ACTION statement"},s=void 0,o={id:"ACTION_statement",title:"ACTION statement",description:"The ACTION statement creates an action.",source:"@site/versioned_docs/version-v4/ACTION_statement.md",sourceDirName:".",slug:"/ACTION_statement",permalink:"/v4/ACTION_statement",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/ACTION_statement.md",tags:[],version:"v4",lastUpdatedAt:1708525070,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"ACTION statement"},sidebar:"learn",previous:{title:"Property options",permalink:"/v4/Property_options"},next:{title:"Action operators",permalink:"/v4/Action_operators"}},c={},d=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function l(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"ACTION"})," statement creates an ",(0,r.jsx)(n.a,{href:"/v4/Actions",children:"action"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"[ACTION] name [caption] [(param1, ..., paramN)] { operator } [options];\r\n[ACTION] name [caption] [(param1, ..., paramN)] contextIndependentOperator [options];\n"})}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"ACTION"})," statement declares a new action and adds it to the current ",(0,r.jsx)(n.a,{href:"/v4/Modules",children:"module"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The statement has two forms: the first form creates an action using a ",(0,r.jsx)(n.a,{href:"/v4/Action_operators#contextdependent",children:"context-dependent"})," action operator, the second form creates a ",(0,r.jsx)(n.a,{href:"/v4/Property_operators#contextindependent",children:"context-independent"})," one."]}),"\n",(0,r.jsx)(n.p,{children:"Also, when declaring an action, a set of its options can be specified."}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"name"})}),"\n",(0,r.jsxs)(n.p,{children:["Action name. ",(0,r.jsx)(n.a,{href:"/v4/IDs#id",children:"Simple ID"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"caption"})}),"\n",(0,r.jsxs)(n.p,{children:["Action caption. ",(0,r.jsx)(n.a,{href:"/v4/Literals#strliteral",children:"String literal"}),". If no caption is defined, the action name will be its caption."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"param1, ..., paramN"})}),"\n",(0,r.jsxs)(n.p,{children:["List of parameters. Each of them is defined by a ",(0,r.jsx)(n.a,{href:"/v4/IDs#paramid",children:"typed parameter"})," These parameters can be later used in the action operator describing the action being created (as well as in some options)."]}),"\n",(0,r.jsx)(n.p,{children:"If parameters are not defined explicitly, they will be automatically calculated when the operator is processed. The order of the parameters will match the order of their appearance in the operator. It is recommended to explicitly define action parameters. This will help find typos and other errors in the declaration (for example, a mismatch of the number of defined parameters with the number of parameters of the created action)."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"operator"})}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.a,{href:"/v4/Action_operators#contextdependent",children:"context-dependent"})," action operator describing and creating an action. You can use the parameters defined in this statement (if any) as operator parameters."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"contextIndependentOperator"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"/v4/Action_operators#contextindependent",children:"context-independent"})," action operator describing and creating an action."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"options"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/v4/Action_options",children:"Action options"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"showMessage  { MESSAGE 'Hello World!'; } \t\t\t\t\t\t\t\t// action declaration\r\nloadImage 'Upload image'  ABSTRACT ( Item);\n"})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(96540);const a={},i=r.createContext(a);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);