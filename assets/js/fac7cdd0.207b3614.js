"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["52234"],{48654:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>a,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"REQUEST_operator","title":"REQUEST operator","description":"The REQUEST operator creates an action that requests a value.","source":"@site/versioned_docs/version-v5/REQUEST_operator.md","sourceDirName":".","slug":"/REQUEST_operator","permalink":"/v5/REQUEST_operator","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v5/docs/en/REQUEST_operator.md","tags":[],"version":"v5","lastUpdatedAt":1708525070000,"frontMatter":{"title":"REQUEST operator"},"sidebar":"learn","previous":{"title":"READ operator","permalink":"/v5/READ_operator"},"next":{"title":"RETURN operator","permalink":"/v5/RETURN_operator"}}'),s=n("85893"),o=n("50065");let a={title:"REQUEST operator"},i=void 0,l={},c=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function d(e){let t={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"REQUEST"})," operator creates an ",(0,s.jsx)(t.a,{href:"/v5/Actions",children:"action"})," that ",(0,s.jsx)(t.a,{href:"/v5/Value_request_REQUEST",children:"requests a value"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"REQUEST requestAction \nDO doAction [ELSE elseAction]\n"})}),"\n",(0,s.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"REQUEST"})," operator creates an action that allows the separation of a request for a value from its handling."]}),"\n",(0,s.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"requestAction"})}),"\n",(0,s.jsxs)(t.p,{children:["A ",(0,s.jsx)(t.a,{href:"/v5/Action_operators#contextdependent",children:"context-dependent action operator"})," that requests a value."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"doAction"})}),"\n",(0,s.jsx)(t.p,{children:"A context-dependent action operator that is executed if the input was completed successfully."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"elseAction"})}),"\n",(0,s.jsxs)(t.p,{children:["A context-dependent action operator that is executed if the input was ",(0,s.jsx)(t.a,{href:"/v5/Value_input#result",children:"cancelled"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lsf",children:"requestCustomer (Order o)  {\n    LOCAL resultValue = STRING[100] ();\n    REQUEST {\n        ASK 'Choose from list?' DO\n            DIALOG customers OBJECTS c = resultValue() CHANGE;\n        ELSE\n            INPUT = resultValue() CHANGE;\n    } DO\n        customer(o) <- resultValue();\n}\n\nFORM request\n    OBJECTS o = Order\n    PROPERTIES(o) customer ON CHANGE requestCustomer(o) // for example, group adjustment will be performed\n;\n"})})]})}function u(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return a}});var r=n(67294);let s={},o=r.createContext(s);function a(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);