"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["17634"],{5818:function(e,r,n){n.r(r),n.d(r,{default:()=>h,frontMatter:()=>o,metadata:()=>t,assets:()=>c,toc:()=>l,contentTitle:()=>a});var t=JSON.parse('{"id":"WHILE_operator","title":"WHILE operator","description":"The WHILE operator creates an action that implements a recursive loop.","source":"@site/versioned_docs/version-v5/WHILE_operator.md","sourceDirName":".","slug":"/WHILE_operator","permalink":"/v5/WHILE_operator","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v5/docs/en/WHILE_operator.md","tags":[],"version":"v5","lastUpdatedAt":1708525070000,"frontMatter":{"title":"WHILE operator"},"sidebar":"learn","previous":{"title":"TRY operator","permalink":"/v5/TRY_operator"},"next":{"title":"WRITE operator","permalink":"/v5/WRITE_operator"}}'),s=n("85893"),i=n("50065");let o={title:"WHILE operator"},a=void 0,c={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function d(e){let r={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.code,{children:"WHILE"})," operator creates an ",(0,s.jsx)(r.a,{href:"/v5/Actions",children:"action"})," that implements a ",(0,s.jsx)(r.a,{href:"/v5/Recursive_loop_WHILE",children:"recursive loop"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"WHILE expression [ORDER [DESC] orderExpr1, ..., orderExprN]\n[NEW [alias =] className]\nDO action\n"})}),"\n",(0,s.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.code,{children:"WHILE"})," operator creates an action implementing a recursive loop. This operator  can add its local ",(0,s.jsx)(r.a,{href:"/v5/Actions",children:"parameters"})," while defining a condition. These parameters correspond to the objects being iterated and are not parameters of the created action. You can also use the ",(0,s.jsx)(r.code,{children:"NEW"})," block to specify the name of the ",(0,s.jsx)(r.a,{href:"/v5/Classes",children:"class"})," whose object will be created for each object collection meeting the condition. The name of this object needs to be specified. This name will be used as the name of the local parameter that the created object will be written to."]}),"\n",(0,s.jsxs)(r.p,{children:["The object iteration order in the ",(0,s.jsx)(r.code,{children:"WHILE"})," operator can be specified with the ",(0,s.jsx)(r.code,{children:"ORDER"})," block."]}),"\n",(0,s.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"expression"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/v5/Expression",children:"Expression"})," defining a condition. In this expression, you can both access already declared parameters and declare new local parameters."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"DESC"})}),"\n",(0,s.jsx)(r.p,{children:"Keyword. Specifies a reverse iteration order for object collections."}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"orderExpr1, ..., orderExprK"})}),"\n",(0,s.jsx)(r.p,{children:"A list of expressions that define the order in which object collections will be iterated over. To determine the order, first the value of the first expression is used; then, if equal, the value of the second is used, etc. If the list is undefined, iteration is performed in an arbitrary order."}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"alias"})}),"\n",(0,s.jsxs)(r.p,{children:["The name of the local parameter that will correspond to the object being created. ",(0,s.jsx)(r.a,{href:"/v5/IDs#id",children:"Simple ID"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"className"})}),"\n",(0,s.jsxs)(r.p,{children:["The name of the class of the object to create. Defined by a ",(0,s.jsx)(r.a,{href:"/v5/IDs#classid",children:"class ID"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"action"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/v5/Action_operators#contextdependent",children:"Context-dependent action operator"})," describing the action being executed."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-lsf",children:"iterateDates (DATE dateFrom, DATE dateTo)  {\n    LOCAL dateCur = DATE();\n\n    dateCur() <- dateFrom;\n    WHILE dateCur() <= dateTo DO {\n        MESSAGE 'I have a date ' + dateCur();\n        dateCur() <- sum(dateCur(), 1);\n    }\n}\n"})})]})}function h(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,r,n){n.d(r,{Z:function(){return a},a:function(){return o}});var t=n(67294);let s={},i=t.createContext(s);function o(e){let r=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);