"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["62048"],{77704:function(e,t,a){a.r(t),a.d(t,{default:()=>d,frontMatter:()=>o,metadata:()=>r,assets:()=>l,toc:()=>p,contentTitle:()=>i});var r=JSON.parse('{"id":"Data_properties_DATA","title":"Data properties (DATA)","description":"Data property is a property which value is stored in the database and may change through the execution of the corresponding action. Each parameter and the value of a data property must belong to a certain specified class. If a parameter does not belong to the specified class or is NULL, then the property value will return NULL.","source":"@site/versioned_docs/version-v5/Data_properties_DATA.md","sourceDirName":".","slug":"/Data_properties_DATA","permalink":"/v5/Data_properties_DATA","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v5/docs/en/Data_properties_DATA.md","tags":[],"version":"v5","lastUpdatedAt":1685108136000,"frontMatter":{"title":"Data properties (DATA)"},"sidebar":"learn","previous":{"title":"Operators","permalink":"/v5/Property_operators_paradigm"},"next":{"title":"Composition (JOIN)","permalink":"/v5/Composition_JOIN"}}'),n=a("85893"),s=a("50065");let o={title:"Data properties (DATA)"},i=void 0,l={},p=[{value:"Local data properties",id:"local",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function c(e){let t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"Data property"})," is a ",(0,n.jsx)(t.a,{href:"/v5/Properties",children:"property"})," which value is stored in the database and may change through the execution of the ",(0,n.jsx)(t.a,{href:"/v5/Property_change_CHANGE",children:"corresponding"})," action. Each parameter and the value of a data property must belong to a certain specified ",(0,n.jsx)(t.a,{href:"/v5/Classes",children:"class"}),". If a parameter does not belong to the specified class or is ",(0,n.jsx)(t.code,{children:"NULL"}),", then the property value will return ",(0,n.jsx)(t.code,{children:"NULL"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"local",children:"Local data properties"}),"\n",(0,n.jsxs)(t.p,{children:["Data properties can be ",(0,n.jsx)(t.em,{children:"local"}),". Such properties retain their values only within the ",(0,n.jsx)(t.a,{href:"/v5/Change_sessions",children:"session"}),", i.e. they are not saved to the database, which means when applying changes these values are reset to ",(0,n.jsx)(t.code,{children:"NULL"})," by default."]}),"\n",(0,n.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,n.jsxs)(t.p,{children:["To declare a primary property, use the ",(0,n.jsxs)(t.a,{href:"/v5/DATA_operator",children:[(0,n.jsx)(t.code,{children:"DATA"})," operator"]}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lsf",children:"CLASS Item;\nquantity = DATA LOCAL INTEGER (Item);\n\nCLASS Country;\nisDayOff = DATA BOOLEAN (Country, DATE);\n"})})]})}function d(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},50065:function(e,t,a){a.d(t,{Z:function(){return i},a:function(){return o}});var r=a(67294);let n={},s=r.createContext(n);function o(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);