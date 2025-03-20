"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["74829"],{48724:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>t,assets:()=>l,toc:()=>a,contentTitle:()=>c});var t=JSON.parse('{"id":"NEWSESSION_operator","title":"NEWSESSION operator","description":"The NEWSESSION operator creates an action that executes the other action in a new session.","source":"@site/versioned_docs/version-v5/NEWSESSION_operator.md","sourceDirName":".","slug":"/NEWSESSION_operator","permalink":"/v5/NEWSESSION_operator","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v5/docs/en/NEWSESSION_operator.md","tags":[],"version":"v5","lastUpdatedAt":1708525070000,"frontMatter":{"title":"NEWSESSION operator"},"sidebar":"learn","previous":{"title":"NEWEXECUTOR operator","permalink":"/v5/NEWEXECUTOR_operator"},"next":{"title":"NEWTHREAD operator","permalink":"/v5/NEWTHREAD_operator"}}'),r=s("85893"),i=s("50065");let o={title:"NEWSESSION operator"},c=void 0,l={},a=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function d(e){let n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"NEWSESSION"})," operator creates an ",(0,r.jsx)(n.a,{href:"/v5/Actions",children:"action"})," that executes the other action in a ",(0,r.jsx)(n.a,{href:"/v5/New_session_NEWSESSION_NESTEDSESSION",children:"new session"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"NEWSESSION [NEWSQL] [nestedBlock] action \n"})}),"\n",(0,r.jsxs)(n.p,{children:["where ",(0,r.jsx)(n.code,{children:"nestedBlock"})," has one of two possible syntaxes:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"NESTED LOCAL\nNESTED (propertyId1, ..., propertyIdN)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"NEWSESSION"})," operator creates an action which executes the other action in a new session."]}),"\n",(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.code,{children:"NESTED"})," keyword is specified, the changes of the ",(0,r.jsx)(n.a,{href:"/v5/Data_properties_DATA#local",children:"local properties"})," will be visible in the new session. If the ",(0,r.jsx)(n.code,{children:"LOCAL"})," keyword is specified, changes of all the local properties will be visible, otherwise, a list of the local properties whose changes need to be visible in the new session should be specified. Also, changes to these local properties in the new session will get to the current session when applying changes in this new session."]}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"NEWSQL"})}),"\n",(0,r.jsxs)(n.p,{children:["If this keyword is specified, a new SQL connection will be created. In this case, the block containing the ",(0,r.jsx)(n.code,{children:"NESTED"})," keyword will be ignored."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"LOCAL"})}),"\n",(0,r.jsx)(n.p,{children:"If this keyword is specified, changes to all the local properties will be visible in the new session."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"propertyId1, ..., propertyIdN"})}),"\n",(0,r.jsxs)(n.p,{children:["A list of local properties whose changes will be visible in the new session. Each list element must be a ",(0,r.jsx)(n.a,{href:"/v5/IDs#propertyid",children:"property ID"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"action"})}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.a,{href:"/v5/Action_operators#contextdependent",children:"context-dependent action operator"})," that defines an action to be executed in the new session."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"testNewSession ()  {\n    NEWSESSION {\n        NEW c = Currency {\n            name(c) <- 'USD';\n            code(c) <- 866;\n        }\n        APPLY;\n    }\n    // here a new object of class Currency is already in the database\n\n    LOCAL local = BPSTRING[10] (Currency);\n    local(Currency c) <- 'Local';\n    NEWSESSION {\n        MESSAGE (GROUP SUM 1 IF local(Currency c) == 'Local'); // will return NULL\n    }\n    NEWSESSION NESTED (local) {\n        // will return the number of objects of class Currency\n        MESSAGE (GROUP SUM 1 IF local(Currency c) == 'Local'); \n    }\n\n    NEWSESSION {\n        NEW s = Sku {\n            id(s) <- 1234;\n            name(s) <- 'New Sku';\n            SHOW sku OBJECTS s = s;\n        }\n    }\n\n}\n"})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return o}});var t=s(67294);let r={},i=t.createContext(r);function o(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);