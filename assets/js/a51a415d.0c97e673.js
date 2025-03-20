"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["71894"],{9448:function(e,t,r){r.r(t),r.d(t,{default:()=>u,frontMatter:()=>i,metadata:()=>n,assets:()=>c,toc:()=>l,contentTitle:()=>a});var n=JSON.parse('{"id":"View_VIEW","title":"View (VIEW)","description":"The view operator creates a property that returns TRUE if the object collection is visible to the user in the specified object group, and NULL otherwise.","source":"@site/versioned_docs/version-v5/View_VIEW.md","sourceDirName":".","slug":"/View_VIEW","permalink":"/v5/View_VIEW","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v5/docs/en/View_VIEW.md","tags":[],"version":"v5","lastUpdatedAt":1685108136000,"frontMatter":{"title":"View (VIEW)"},"sidebar":"learn","previous":{"title":"Order (ORDER)","permalink":"/v5/Order_ORDER"},"next":{"title":"Focus operators","permalink":"/v5/Focus_operators"}}'),s=r("85893"),o=r("50065");let i={title:"View (VIEW)"},a=void 0,c={},l=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function d(e){let t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The view operator creates a property that returns ",(0,s.jsx)(t.code,{children:"TRUE"})," if the object collection is visible to the user in the specified object group, and ",(0,s.jsx)(t.code,{children:"NULL"})," otherwise."]}),"\n",(0,s.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,s.jsxs)(t.p,{children:["To declare a property that determines whether a specified object collection is displayed to the user or not, use the ",(0,s.jsxs)(t.a,{href:"/v5/Object_group_operator",children:[(0,s.jsx)(t.code,{children:"VIEW"})," operator"]}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lsf",children:"CLASS Store;\nname = DATA STRING[100] (Store);\n\nFORM stores\n    OBJECTS s = Store\n;\ncountF 'Number of filtered warehouses' = GROUP SUM 1 IF [ VIEW stores.s](Store s);\norderF 'Order in an object group' (Store s) = PARTITION SUM 1 IF [ FILTER stores.s](s) ORDER [ ORDER stores.s](s), s;\nsetNameX 'Add X to name'()  {\n    LOCAL k = INTEGER ();\n    k() <- 0;\n    FOR [ FILTER stores.s](Store s) ORDER [ ORDER stores.s](s) DO {\n        k() <- k() + 1;\n        name(s) <- 'X' + k() + name(s);\n    }\n}\n"})})]})}function u(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return a},a:function(){return i}});var n=r(67294);let s={},o=n.createContext(s);function i(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);