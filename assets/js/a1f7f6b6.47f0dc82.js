"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["90840"],{75499:function(e,t,r){r.r(t),r.d(t,{default:()=>u,frontMatter:()=>i,metadata:()=>n,assets:()=>a,toc:()=>c,contentTitle:()=>l});var n=JSON.parse('{"id":"Filter_FILTER","title":"Filter (FILTER)","description":"The filter operator creates a property that returns TRUE if the object collection matches the current filter of the specified object group, and NULL if it does not.","source":"@site/versioned_docs/version-v5/Filter_FILTER.md","sourceDirName":".","slug":"/Filter_FILTER","permalink":"/v5/Filter_FILTER","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v5/docs/en/Filter_FILTER.md","tags":[],"version":"v5","lastUpdatedAt":1685108136000,"frontMatter":{"title":"Filter (FILTER)"},"sidebar":"learn","previous":{"title":"Object tree visibility (EXPAND, COLLAPSE)","permalink":"/v5/Object_tree_visibility_EXPAND_COLLAPSE"},"next":{"title":"Order (ORDER)","permalink":"/v5/Order_ORDER"}}'),s=r("85893"),o=r("50065");let i={title:"Filter (FILTER)"},l=void 0,a={},c=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function d(e){let t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.em,{children:"filter"})," operator creates a ",(0,s.jsx)(t.a,{href:"/v5/Properties",children:"property"})," that returns ",(0,s.jsx)(t.code,{children:"TRUE"})," if the object collection matches the current ",(0,s.jsx)(t.a,{href:"/v5/Form_structure#filters",children:"filter"})," of the specified object group, and ",(0,s.jsx)(t.code,{children:"NULL"})," if it does not."]}),"\n",(0,s.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,s.jsxs)(t.p,{children:["To declare a property that determines matching the filter use the ",(0,s.jsxs)(t.a,{href:"/v5/Object_group_operator",children:[(0,s.jsx)(t.code,{children:"FILTER"})," operator"]}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lsf",children:"CLASS Store;\nname = DATA STRING[100] (Store);\n\nFORM stores\n    OBJECTS s = Store\n;\ncountF 'Number of filtered warehouses' = GROUP SUM 1 IF [ VIEW stores.s](Store s);\norderF 'Order in an object group' (Store s) = PARTITION SUM 1 IF [ FILTER stores.s](s) ORDER [ ORDER stores.s](s), s;\nsetNameX 'Add X to name'()  {\n    LOCAL k = INTEGER ();\n    k() <- 0;\n    FOR [ FILTER stores.s](Store s) ORDER [ ORDER stores.s](s) DO {\n        k() <- k() + 1;\n        name(s) <- 'X' + k() + name(s);\n    }\n}\n"})})]})}function u(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return l},a:function(){return i}});var n=r(67294);let s={},o=n.createContext(s);function i(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);