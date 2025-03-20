"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["74172"],{86187:function(e,r,n){n.r(r),n.d(r,{default:()=>p,frontMatter:()=>a,metadata:()=>t,assets:()=>c,toc:()=>d,contentTitle:()=>i});var t=JSON.parse('{"id":"CHANGE_operator","title":"CHANGE operator","description":"The CHANGE operator creates an action that changes properties.","source":"@site/versioned_docs/version-v5/CHANGE_operator.md","sourceDirName":".","slug":"/CHANGE_operator","permalink":"/v5/CHANGE_operator","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v5/docs/en/CHANGE_operator.md","tags":[],"version":"v5","lastUpdatedAt":1708525070000,"frontMatter":{"title":"CHANGE operator"},"sidebar":"learn","previous":{"title":"ASK operator","permalink":"/v5/ASK_operator"},"next":{"title":"BREAK operator","permalink":"/v5/BREAK_operator"}}'),s=n("85893"),o=n("50065");let a={title:"CHANGE operator"},i=void 0,c={},d=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function l(e){let r={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.code,{children:"CHANGE"})," operator creates an ",(0,s.jsx)(r.a,{href:"/v5/Actions",children:"action"})," that ",(0,s.jsx)(r.a,{href:"/v5/Property_change_CHANGE",children:"changes properties"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"[CHANGE] propertyId(expr1, ..., exprN) <- valueExpr [WHERE whereExpr]\n"})}),"\n",(0,s.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.code,{children:"CHANGE"})," operator creates an action that changes a property when a condition is met. This operator  can add its own local parameters when specifying the property whose value is to be changed. These parameters correspond to the objects being iterated and are not parameters of the created action."]}),"\n",(0,s.jsxs)(r.p,{children:["The condition is defined by the ",(0,s.jsx)(r.code,{children:"WHERE"})," block. If this block is not specified, it is assumed that the condition is always met."]}),"\n",(0,s.jsxs)(r.p,{children:["The keyword ",(0,s.jsx)(r.code,{children:"CHANGE"}),", which defines an operator, may be omitted."]}),"\n",(0,s.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"propertyId"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/v5/IDs#propertyid",children:"ID of the property"})," whose value is being changed. The property must be created by certain operators so that its value can be changed. You can change the values of properties created using the operators ",(0,s.jsx)(r.a,{href:"/v5/DATA_operator",children:(0,s.jsx)(r.code,{children:"DATA"})})," , ",(0,s.jsx)(r.a,{href:"/v5/ABSTRACT_operator",children:(0,s.jsx)(r.code,{children:"ABSTRACT"})}),", and ",(0,s.jsx)(r.code,{children:"LOCAL"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"expr1, ..., exprN"})}),"\n",(0,s.jsxs)(r.p,{children:["A list of ",(0,s.jsx)(r.a,{href:"/v5/Expression",children:"expressions"})," or ",(0,s.jsx)(r.a,{href:"/v5/IDs#paramid",children:"typed parameters"})," defining arguments to the property being changed. When using typed parameters, you can both access already declared parameters and declare new local parameters. When using expressions, new local parameters cannot be added. The number of expressions in this list must equal to the number of parameters of the property being changed."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"valueExpr"})}),"\n",(0,s.jsx)(r.p,{children:"The expression to whose value the property value must be changed."}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"whereExpr"})}),"\n",(0,s.jsxs)(r.p,{children:["An expression whose value is a condition for the change being created. If not specified, it is considered equal to ",(0,s.jsx)(r.code,{children:"TRUE"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-lsf",children:"// set a 15 percent discount for all customers who have an order amount over 100\nCLASS Customer;\ndiscount = DATA NUMERIC[5,2] (Customer);\ntotalOrders = DATA NUMERIC[14,2] (Customer);\nsetDiscount  {\n    discount(Customer c) <- 15 WHERE totalOrders(c) > 100;\n}\n\ndiscount = DATA NUMERIC[5,2] (Customer, Item);\nin = DATA BOOLEAN (Item);\n// change the discount for selected products for a customer\nsetDiscount (Customer c)  {\n    discount(c, Item i) <- 15 WHERE in(i);\n}\n\n// copy property g to property f\nf = DATA INTEGER (INTEGER);\ng = DATA INTEGER (INTEGER);\ncopyFG  {\n    f(a) <- g(a);\n}\n"})})]})}function p(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},50065:function(e,r,n){n.d(r,{Z:function(){return i},a:function(){return a}});var t=n(67294);let s={},o=t.createContext(s);function a(e){let r=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);