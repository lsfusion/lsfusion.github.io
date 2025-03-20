"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["49428"],{35524:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>c,metadata:()=>s,assets:()=>l,toc:()=>d,contentTitle:()=>r});var s=JSON.parse('{"id":"AFTER_statement","title":"AFTER statement","description":"The AFTER statement calls an action after calling another action.","source":"@site/docs/AFTER_statement.md","sourceDirName":".","slug":"/AFTER_statement","permalink":"/AFTER_statement","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/master/docs/en/AFTER_statement.md","tags":[],"version":"current","lastUpdatedAt":1708525070000,"frontMatter":{"title":"AFTER statement"},"sidebar":"learn","previous":{"title":"BEFORE statement","permalink":"/BEFORE_statement"},"next":{"title":"Empty statement","permalink":"/Empty_statement"}}'),a=n("85893"),i=n("50065");let c={title:"AFTER statement"},r=void 0,l={},d=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function o(e){let t={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"AFTER"})," statement calls an ",(0,a.jsx)(t.a,{href:"/Actions",children:"action"})," after calling another action."]}),"\n",(0,a.jsx)(t.h3,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"AFTER action(param1, ..., paramN) DO aspectAction;\n"})}),"\n",(0,a.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"AFTER"})," statement defines an action (let's call it an ",(0,a.jsx)(t.em,{children:"aspect"}),") that will be called after the specified action."]}),"\n",(0,a.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.code,{children:"action"})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.a,{href:"/IDs#propertyid",children:"ID"})," of the action after which the aspect will be called."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.code,{children:"param1, ..., paramN"})}),"\n",(0,a.jsxs)(t.p,{children:["List of action parameter names. Each name is defined ",(0,a.jsx)(t.a,{href:"/IDs#id",children:"by a simple ID"}),". These parameters can be accessed when defining an aspect."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.code,{children:"aspectAction"})}),"\n",(0,a.jsxs)(t.p,{children:["A ",(0,a.jsx)(t.a,{href:"/Action_operators#contextdependent",children:"context-dependent action operator"})," describing the aspect."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-lsf",children:"changePrice(Sku s, DATE d, NUMERIC[10,2] price)  { price(s, d) <- price; }\n\n// A message will be shown after each call to changePrice\nAFTER changePrice(Sku s, DATE d, NUMERIC[10,2] price) DO MESSAGE 'Price was changed'; \n"})})]})}function p(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return c}});var s=n(67294);let a={},i=s.createContext(a);function c(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);