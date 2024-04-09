"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[14165],{96046:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=t(74848),s=t(28453);const o={title:"WHILE operator"},i=void 0,a={id:"WHILE_operator",title:"WHILE operator",description:"The WHILE operator creates an action that implements a recursive loop.",source:"@site/docs/WHILE_operator.md",sourceDirName:".",slug:"/WHILE_operator",permalink:"/next/WHILE_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/WHILE_operator.md",tags:[],version:"current",lastUpdatedAt:1708525070,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"WHILE operator"},sidebar:"learn",previous:{title:"TRY operator",permalink:"/next/TRY_operator"},next:{title:"WRITE operator",permalink:"/next/WRITE_operator"}},c={},d=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function l(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"WHILE"})," operator creates an ",(0,r.jsx)(n.a,{href:"/next/Actions",children:"action"})," that implements a ",(0,r.jsx)(n.a,{href:"/next/Recursive_loop_WHILE",children:"recursive loop"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"WHILE expression [ORDER [DESC] orderExpr1, ..., orderExprN]\n[NEW [alias =] className]\nDO action\n"})}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"WHILE"})," operator creates an action implementing a recursive loop. This operator  can add its local ",(0,r.jsx)(n.a,{href:"/next/Actions",children:"parameters"})," while defining a condition. These parameters correspond to the objects being iterated and are not parameters of the created action. You can also use the ",(0,r.jsx)(n.code,{children:"NEW"})," block to specify the name of the ",(0,r.jsx)(n.a,{href:"/next/Classes",children:"class"})," whose object will be created for each object collection meeting the condition. The name of this object needs to be specified. This name will be used as the name of the local parameter that the created object will be written to."]}),"\n",(0,r.jsxs)(n.p,{children:["The object iteration order in the ",(0,r.jsx)(n.code,{children:"WHILE"})," operator can be specified with the ",(0,r.jsx)(n.code,{children:"ORDER"})," block."]}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"expression"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/next/Expression",children:"Expression"})," defining a condition. In this expression, you can both access already declared parameters and declare new local parameters."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"DESC"})}),"\n",(0,r.jsx)(n.p,{children:"Keyword. Specifies a reverse iteration order for object collections."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"orderExpr1, ..., orderExprK"})}),"\n",(0,r.jsx)(n.p,{children:"A list of expressions that define the order in which object collections will be iterated over. To determine the order, first the value of the first expression is used; then, if equal, the value of the second is used, etc. If the list is undefined, iteration is performed in an arbitrary order."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"alias"})}),"\n",(0,r.jsxs)(n.p,{children:["The name of the local parameter that will correspond to the object being created. ",(0,r.jsx)(n.a,{href:"/next/IDs#id",children:"Simple ID"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"className"})}),"\n",(0,r.jsxs)(n.p,{children:["The name of the class of the object to create. Defined by a ",(0,r.jsx)(n.a,{href:"/next/IDs#classid",children:"class ID"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"action"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/next/Action_operators#contextdependent",children:"Context-dependent action operator"})," describing the action being executed."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"iterateDates (DATE dateFrom, DATE dateTo)  {\n    LOCAL dateCur = DATE();\n\n    dateCur() <- dateFrom;\n    WHILE dateCur() <= dateTo DO {\n        MESSAGE 'I have a date ' + dateCur();\n        dateCur() <- sum(dateCur(), 1);\n    }\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(96540);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);