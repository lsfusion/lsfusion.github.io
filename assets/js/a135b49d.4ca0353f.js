"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["22742"],{30537:function(e,r,t){t.r(r),t.d(r,{default:()=>p,frontMatter:()=>a,metadata:()=>n,assets:()=>c,toc:()=>l,contentTitle:()=>i});var n=JSON.parse('{"id":"EXEC_operator","title":"EXEC operator","description":"The EXEC operator creates an action that executes another action.","source":"@site/versioned_docs/version-v5/EXEC_operator.md","sourceDirName":".","slug":"/EXEC_operator","permalink":"/v5/EXEC_operator","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v5/docs/en/EXEC_operator.md","tags":[],"version":"v5","lastUpdatedAt":1708525070000,"frontMatter":{"title":"EXEC operator"},"sidebar":"learn","previous":{"title":"EVAL operator","permalink":"/v5/EVAL_operator"},"next":{"title":"EXPAND operator","permalink":"/v5/EXPAND_operator"}}'),o=t("85893"),s=t("50065");let a={title:"EXEC operator"},i=void 0,c={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function d(e){let r={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.code,{children:"EXEC"})," operator creates an ",(0,o.jsx)(r.a,{href:"/v5/Actions",children:"action"})," that ",(0,o.jsx)(r.a,{href:"/v5/Call_EXEC",children:"executes"})," another action."]}),"\n",(0,o.jsx)(r.h3,{id:"syntax",children:"Syntax"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"[EXEC] actionId(expression1, ..., expressionN)\n"})}),"\n",(0,o.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.code,{children:"EXEC"})," operator creates an action that executes another action, passing it the values of ",(0,o.jsx)(r.a,{href:"/v5/Expression",children:"expressions"})," as parameters."]}),"\n",(0,o.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.code,{children:"actionId"})}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/v5/IDs#propertyid",children:"Action ID"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.code,{children:"expression1, ..., expressionN"})}),"\n",(0,o.jsx)(r.p,{children:"A list of expressions whose values will be passed to the action being executed as arguments. The number of expressions must be equal to the number of parameters of the action being executed."}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.code,{children:"operator"})}),"\n",(0,o.jsx)(r.p,{children:"An operator that creates the action being executed."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-lsf",children:"// declaration of importData action with two parameters\nimportData(Sku sku, Order order)  {\n    MESSAGE 'Run import for ' + id(sku) + ' ' + customer(order);\n}\n\norder = DATA Order (OrderDetail) NONULL DELETE;\n// declaration of the action runImport that calls importData\nrunImport(OrderDetail d)  { importData(sku(d), order(d)); } \n"})})]})}function p(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},50065:function(e,r,t){t.d(r,{Z:function(){return i},a:function(){return a}});var n=t(67294);let o={},s=n.createContext(o);function a(e){let r=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);