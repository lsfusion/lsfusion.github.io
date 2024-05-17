"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[39113],{55113:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var s=t(74848),r=t(28453);const i={title:"WHEN statement"},o=void 0,d={id:"WHEN_statement",title:"WHEN statement",description:"The WHEN statement adds a simple event handler.",source:"@site/versioned_docs/version-v5/WHEN_statement.md",sourceDirName:".",slug:"/WHEN_statement",permalink:"/WHEN_statement",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/WHEN_statement.md",tags:[],version:"v5",lastUpdatedAt:170852507e4,frontMatter:{title:"WHEN statement"},sidebar:"learn",previous:{title:"Event description block",permalink:"/Event_description_block"},next:{title:"<- WHEN statement",permalink:"/lt-_WHEN_statement"}},l={},a=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"WHEN"})," statement adds a ",(0,s.jsx)(n.a,{href:"/Simple_event",children:"simple event"})," handler."]}),"\n",(0,s.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"WHEN eventClause eventExpr [ORDER [DESC] orderExpr1, ..., orderExprN] DO eventAction;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"WHEN"})," statement adds a simple event handler. In a condition expression you can implicitly declare local parameters that can then be used in the event handler."]}),"\n",(0,s.jsxs)(n.p,{children:["Also, the ",(0,s.jsx)(n.code,{children:"ORDER"})," block can be used to define the order in which the handler will be called for an object collection for which the condition on the simple event has been met."]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["Using the ",(0,s.jsx)(n.code,{children:"WHEN"})," statement is much like the following statement:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"ON eventClause FOR eventExpr [ORDER [DESC] orderExpr1, ..., orderExprN] DO eventAction;\n"})}),(0,s.jsxs)(n.p,{children:["but it also has ",(0,s.jsx)(n.a,{href:"/Simple_event",children:"a number of advantages"}),"."]})]}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"eventClause"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/Event_description_block",children:"Event description block"}),". Describes the ",(0,s.jsx)(n.a,{href:"/Events",children:"base event"})," for the created handler."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"eventExpr"})}),"\n",(0,s.jsxs)(n.p,{children:["An ",(0,s.jsx)(n.a,{href:"/Expression",children:"expression"})," whose value is used as a condition for the created simple event. If the obtained property does not contain the ",(0,s.jsx)(n.a,{href:"/Previous_value_PREV",children:(0,s.jsx)(n.code,{children:"PREV"})})," operator, the platform automatically wraps it into the ",(0,s.jsx)(n.a,{href:"/Property_change_CHANGE",children:(0,s.jsx)(n.code,{children:"CHANGE"})})," operator."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"eventAction"})}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.a,{href:"/Action_operators#contextdependent",children:"context-dependent operator"})," that describes an action to be added as an event handler."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"DESC"})}),"\n",(0,s.jsx)(n.p,{children:"Keyword. Specifies a reverse iteration order for object collections."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"orderExpr1, ..., orderExprM"})}),"\n",(0,s.jsx)(n.p,{children:"A list of expressions that defines the order in which handlers will be called for object collections for which an event condition has been met. To determine the order, first the value of the first expression is used; then, if equal, the value of the second is used, etc."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lsf",children:"CLASS Stock;\nname = DATA STRING[50] (Stock);\n\nbalance = DATA INTEGER (Sku, Stock);\n\n// send an email when the balance is less than 0 as a result of applying session changes\nWHEN balance(Sku s, Stock st) < 0 DO\n      EMAIL SUBJECT 'The balance has become negative for the item ' + name(s) + ' in the warehouse ' + name(st);\n\nCLASS OrderDetail;\norder = DATA Order (OrderDetail) NONULL DELETE;\ndiscount = DATA NUMERIC[6,2] (OrderDetail);\n\nWHEN LOCAL CHANGED(customer(Order o)) AND name(customer(o)) == 'Best customer' DO\n    discount(OrderDetail d) <- 50 WHERE order(d) == o;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var s=t(96540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);