"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["87746"],{73317:function(e,r,n){n.r(r),n.d(r,{default:()=>d,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>l,contentTitle:()=>o});var t=JSON.parse('{"id":"AGGR_operator","title":"AGGR operator","description":"The AGGR operator creates an aggregation.","source":"@site/versioned_docs/version-v4/AGGR_operator.md","sourceDirName":".","slug":"/AGGR_operator","permalink":"/v4/AGGR_operator","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v4/docs/en/AGGR_operator.md","tags":[],"version":"v4","lastUpdatedAt":1708527726000,"frontMatter":{"title":"AGGR operator"},"sidebar":"learn","previous":{"title":"ACTIVE TAB operator","permalink":"/v4/ACTIVE_TAB_operator"},"next":{"title":"CASE operator","permalink":"/v4/CASE_operator"}}'),a=n("85893"),s=n("50065");let i={title:"AGGR operator"},o=void 0,c={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function p(e){let r={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:["The ",(0,a.jsx)(r.code,{children:"AGGR"})," operator creates an ",(0,a.jsx)(r.a,{href:"/v4/Aggregations",children:"aggregation"}),"."]}),"\n",(0,a.jsx)(r.h3,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{children:"AGGR aggrClass WHERE aggrExpr\n"})}),"\n",(0,a.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(r.p,{children:["In addition to the property that is the result of this operator and contains the value of the aggregated object, for each parameter the ",(0,a.jsx)(r.code,{children:"AGGR"})," operator also creates a data property with one parameter, whose ",(0,a.jsx)(r.a,{href:"/v4/User_classes",children:"class"})," is equal to the class of the aggregated object. The value class and name of this property are equal to the class and name of the parameter for which this property is created. Accordingly, when creating an aggregated object, the value of the parameter for which the aggregated object is created is automatically written to this property."]}),"\n",(0,a.jsxs)(r.admonition,{type:"info",children:[(0,a.jsx)(r.p,{children:"Creating an aggregation is in many ways similar to the following statements (example for 2 parameters):"}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-lsf",children:"prm1 = DATA class1 (aggrClass);\nprm2 = DATA class2 (aggrClass);\nresult = GROUP AGGR aggrClass aggrObject BY prm1(aggrObject), prm2(aggrObject);\n\n// if aggrExpr becomes non-null, create an object of class aggrClass (equivalent to whereExpr => result (prm1, prm2) RESOLVE LEFT)\nWHEN SET(aggrExpr) AND NOT result(prm1, prm2)\n    NEW aggrObject = aggrClass {\n        prm1(aggrObject) <- prm1;\n        prm2(aggrObject) <- prm2;\n    }\n\n// if aggrExpr becomes null, remove an object (equivalent to aggrClass aggrObject IS aggrClass => result(prm1(aggrObject),prm2(aggrObject)) RESOLVE RIGHT)\nWHEN aggrClass aggrObject IS aggrClass AND DROPPED(result(prm1(aggrObject),prm2(aggrObject))) DO\n    DELETE aggrObject;\n"})}),(0,a.jsx)(r.p,{children:"but it is a more declarative and readable statement, and therefore using it is recommended"})]}),"\n",(0,a.jsxs)(r.p,{children:["Unlike other context-dependent operators, the ",(0,a.jsx)(r.code,{children:"AGGR"})," operator cannot be used in ",(0,a.jsx)(r.a,{href:"/v4/Expression",children:"expressions"})," inside other operators (in this sense it is more like context-independent operators), or in the ",(0,a.jsxs)(r.a,{href:"/v4/JOIN_operator",children:[(0,a.jsx)(r.code,{children:"JOIN"})," operator"]})," (inside ",(0,a.jsx)(r.code,{children:"[= ]"}),")"]}),"\n",(0,a.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.code,{children:"aggrClass"})}),"\n",(0,a.jsx)(r.p,{children:"The value class of the aggregated object."}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.code,{children:"aggrExpr"})}),"\n",(0,a.jsxs)(r.p,{children:["An ",(0,a.jsx)(r.a,{href:"/v4/Expression",children:"expression"})," whose value defines an aggregated property."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-lsf",children:"CLASS A; CLASS B; CLASS C;\nf = DATA INTEGER (A, B);\nc = AGGR C WHERE f(A a, B b) MATERIALIZED INDEXED;\n\nCLASS AB;\nab = AGGR AB WHERE A a IS A AND B b IS B; // for each A B pair creates an object AB\n\nCLASS Shipment 'Delivery';\ndate = ABSTRACT DATE (Shipment);\nCLASS Invoice 'Invoice';\ncreateShipment 'Create delivery' = DATA BOOLEAN (Invoice);\ndate 'Shipment date' = DATA DATE (Invoice);\nCLASS ShipmentInvoice 'Delivery by invoice' : Shipment;\n// creating a delivery by invoice, if the option for delivery creation is defined for the invoice\nshipment(Invoice invoice) = AGGR ShipmentInvoice WHERE createShipment(invoice); \ndate(ShipmentInvoice si) += sum(date(invoice(si)),1); // delivery date = invoice date + 1\n"})})]})}function d(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},50065:function(e,r,n){n.d(r,{Z:function(){return o},a:function(){return i}});var t=n(67294);let a={},s=t.createContext(a);function i(e){let r=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);