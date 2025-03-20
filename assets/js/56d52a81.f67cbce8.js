"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["99484"],{46439:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>a,metadata:()=>r,assets:()=>d,toc:()=>l,contentTitle:()=>o});var r=JSON.parse('{"id":"Indexes","title":"Indexes","description":"Building an index by property allows storing all the values of this property in the database in an ordered form. Accordingly, the index is updated with every change of the indexed property value. Due to the index, if, for example, you filter by an indexed property, you can find the objects you need very quickly, rather than viewing all the objects that exist in the system.","source":"@site/docs/Indexes.md","sourceDirName":".","slug":"/Indexes","permalink":"/Indexes","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/master/docs/en/Indexes.md","tags":[],"version":"current","lastUpdatedAt":1624529220000,"frontMatter":{"title":"Indexes"},"sidebar":"learn","previous":{"title":"Materializations","permalink":"/Materializations"},"next":{"title":"Tables","permalink":"/Tables"}}'),i=n("85893"),s=n("50065");let a={title:"Indexes"},o=void 0,d={},l=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function c(e){let t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Building an ",(0,i.jsx)(t.em,{children:"index"})," by property allows storing all the values of this property in the database in an ordered form. Accordingly, the index is updated with every change of the indexed property value. Due to the index, if, for example, you filter by an indexed property, you can find the objects you need very quickly, rather than viewing all the objects that exist in the system."]}),"\n",(0,i.jsxs)(t.p,{children:["Only ",(0,i.jsx)(t.a,{href:"/Materializations",children:"materialized"})," properties can be indexed."]}),"\n",(0,i.jsxs)(t.p,{children:["An index can also be built on several properties at once (this is effective if, for example, you need to filter by several properties simultaneously). In addition, property parameters can be included in a composite index of this kind. The built index will be named as following: ",(0,i.jsx)(t.code,{children:"<table ID>_<property/parameter name 1>_..._<property/parameter name N>"}),". If the specified properties are stored in different ",(0,i.jsx)(t.a,{href:"/Tables",children:"tables"}),", then the corresponding error will be thrown when you try to build the index."]}),"\n",(0,i.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,i.jsxs)(t.p,{children:["To create indexes, you must use the ",(0,i.jsxs)(t.a,{href:"/INDEX_statement",children:[(0,i.jsx)(t.code,{children:"INDEX"})," statement"]})," or the ",(0,i.jsxs)(t.a,{href:"/Property_options#indexed",children:[(0,i.jsx)(t.code,{children:"INDEXED"})," option"]})," in property options."]}),"\n",(0,i.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-lsf",children:"INDEX customer(Order o);\n\ndate = DATA DATE (Order);\nINDEX date(Order o), o;\n\nINDEX name(Sku s), price(s, DATE d), d;\n"})})]})}function p(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return a}});var r=n(67294);let i={},s=r.createContext(i);function a(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);