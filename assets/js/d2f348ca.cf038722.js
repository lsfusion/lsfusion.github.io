"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["31081"],{95261:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>r,metadata:()=>o,assets:()=>l,toc:()=>c,contentTitle:()=>i});var o=JSON.parse('{"id":"Composition_JOIN","title":"Composition (JOIN)","description":"The composition operator allows you to use values of other properties as arguments for one (main) property.","source":"@site/versioned_docs/version-v4/Composition_JOIN.md","sourceDirName":".","slug":"/Composition_JOIN","permalink":"/v4/Composition_JOIN","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v4/docs/en/Composition_JOIN.md","tags":[],"version":"v4","lastUpdatedAt":1625651520000,"frontMatter":{"title":"Composition (JOIN)"},"sidebar":"learn","previous":{"title":"Data properties (DATA)","permalink":"/v4/Data_properties_DATA"},"next":{"title":"Constant","permalink":"/v4/Constant"}}'),s=n("85893"),a=n("50065");let r={title:"Composition (JOIN)"},i=void 0,l={},c=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function p(e){let t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The composition operator allows you to use values of other properties as ",(0,s.jsx)(t.em,{children:"arguments"})," for one (",(0,s.jsx)(t.em,{children:"main"}),") property."]}),"\n",(0,s.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,s.jsxs)(t.p,{children:["To implement composition, use the ",(0,s.jsxs)(t.a,{href:"/v4/JOIN_operator",children:[(0,s.jsx)(t.code,{children:"JOIN"})," operator"]}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lsf",children:"f = DATA INTEGER (INTEGER, INTEGER, INTEGER);\ng = DATA INTEGER (INTEGER, INTEGER);\nh = DATA INTEGER (INTEGER, INTEGER);\nc(a, b) = f(g(a, b), h(b, 3), a);\n\ncount = DATA BPSTRING[255] (INTEGER);\nname = DATA BPSTRING[255] (INTEGER);\nformatted(INTEGER a, INTEGER b) = [FORMULA BPSTRING[255] ' CAST($1 AS TEXT) || \\' / \\' || CAST($2 AS TEXT)'](count(a), name(b));\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lsf",children:"CLASS Triangle;\ncathetus1 = DATA DOUBLE(Triangle);\ncathetus2 = DATA DOUBLE(Triangle);\n\nhypotenuseSq(triangle) = cathetus1(triangle)*cathetus1(triangle) + cathetus2(triangle)*cathetus2(triangle);\n\n// a similar property set using composition\nhypotenuseSq2(triangle) = [ x*x + y*y](cathetus1(triangle), cathetus2(triangle)); \n"})})]})}function u(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return r}});var o=n(67294);let s={},a=o.createContext(s);function r(e){let t=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);