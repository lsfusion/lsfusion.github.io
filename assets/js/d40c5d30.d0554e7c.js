"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[83058],{32236:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=t(74848),i=t(28453);const s={title:"FOR operator"},o=void 0,a={id:"FOR_operator",title:"FOR operator",description:"The FOR operator creates an action that implements loop.",source:"@site/docs/FOR_operator.md",sourceDirName:".",slug:"/FOR_operator",permalink:"/next/FOR_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/FOR_operator.md",tags:[],version:"current",lastUpdatedAt:1708525070,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"FOR operator"},sidebar:"learn",previous:{title:"EXTERNAL operator",permalink:"/next/EXTERNAL_operator"},next:{title:"IF ... THEN operator",permalink:"/next/IF_..._THEN_action_operator"}},c={},d=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function l(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"FOR"})," operator creates an ",(0,r.jsx)(n.a,{href:"/next/Actions",children:"action"})," that implements ",(0,r.jsx)(n.a,{href:"/next/Loop_FOR",children:"loop"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"FOR expression [ORDER [DESC] orderExpr1, ..., orderExprN]\n[NEW [alias =] className]\nDO action\n[ELSE alternativeAction]\n"})}),"\n",(0,r.jsxs)(n.p,{children:["It is possible to include a ",(0,r.jsx)(n.code,{children:"NEW"})," block in the operator but not to specify a condition (considered equal to ",(0,r.jsx)(n.code,{children:"TRUE"}),"); in this case, the syntax is as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"NEW [alias =] className\naction\n"})}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"FOR"})," operator creates an action that implements loop. This operator must add its local parameters when defining a condition. These parameters correspond to the objects being iterated and are not parameters of the created action. You can also use a ",(0,r.jsx)(n.code,{children:"NEW"})," block to specify the name of the ",(0,r.jsx)(n.a,{href:"/next/Classes",children:"class"})," of the object that will be created for each object collection that meets the condition. The name of this object needs to be specified. This name will be used as the name of the local parameter that the created object will be written to."]}),"\n",(0,r.jsxs)(n.p,{children:["The object iteration order in the ",(0,r.jsx)(n.code,{children:"FOR"})," operator can be specified with an ",(0,r.jsx)(n.code,{children:"ORDER"})," block. If a new parameter is declared in the expressions that define the order (meaning that the parameter not met earlier in the ",(0,r.jsx)(n.code,{children:"FOR"})," option or in the upper context), the condition of all these expressions being non- ",(0,r.jsx)(n.code,{children:"NULL"})," is automatically added."]}),"\n",(0,r.jsxs)(n.p,{children:["The main action is specified after the keyword ",(0,r.jsx)(n.code,{children:"DO"}),"; an alternative may be specified after the keyword ",(0,r.jsx)(n.code,{children:"ELSE"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["In the case when the operator contains a ",(0,r.jsx)(n.code,{children:"NEW"})," block, and no condition is specified, the main action will be called for the created object."]}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"expression"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/next/Expression",children:"Expression"})," defining a condition. In this expression, you can both access already declared parameters and declare new local parameters."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"DESC"})}),"\n",(0,r.jsx)(n.p,{children:"Keyword. Specifies a reverse iteration order for object collections."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"orderExpr1, ..., orderExprK"})}),"\n",(0,r.jsx)(n.p,{children:"A list of expressions that define the order in which object collections will be iterated over. To determine the order, first the value of the first expression is used; then, if equal, the value of the second is used, etc. If the list is undefined, iteration is performed in an arbitrary order."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"alias"})}),"\n",(0,r.jsxs)(n.p,{children:["The name of the local parameter that will correspond to the object being created. ",(0,r.jsx)(n.a,{href:"/next/IDs#id",children:"Simple ID"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"className"})}),"\n",(0,r.jsxs)(n.p,{children:["The name of the class of the object to create. Defined by a ",(0,r.jsx)(n.a,{href:"/next/IDs#classid",children:"class ID"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"action"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/next/Action_operators#contextdependent",children:"Context-dependent action operator"})," describing the main action."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"alternativeAction"})}),"\n",(0,r.jsx)(n.p,{children:"Context-dependent action operator defining an alternative action. Parameters added when defining the condition/creating the object cannot be used as parameters of this action."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"name = DATA STRING[100] (Store);\n\ntestFor  {\n    LOCAL sum = INTEGER ();\n    FOR iterate(i, 1, 100) DO {\n        sum() <- sum() (+) i;\n    }\n\n    FOR in(Sku s) DO {\n        MESSAGE 'Sku ' + id(s) + ' was selected';\n    }\n\n    FOR Store st IS Store DO { // iterating over all objects of the Store class\n        FOR in(st, Sku s) DO { // iterating over all Sku for which in is set\n            MESSAGE 'There is Sku ' + id(s) + ' in store ' + name(st);\n        }\n\n    }\n}\n\nnewSku ()  {\n    NEW s = Sku {\n        id(s) <- 425;\n        name(s) <- 'New Sku';\n    }\n}\n\ncopy (Sku old)  {\n    NEW new = Sku {\n        id(new) <- id(old);\n        name(new) <- name(old);\n    }\n}\n\ncreateDetails (Order o)  {\n    FOR in(Sku s) NEW d = OrderDetail DO {\n        order(d) <- o;\n        sku(d) <- s;\n    }\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(96540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);