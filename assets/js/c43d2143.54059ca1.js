"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["67239"],{12271:function(e,t,r){r.r(t),r.d(t,{default:()=>u,frontMatter:()=>i,metadata:()=>n,assets:()=>c,toc:()=>l,contentTitle:()=>o});var n=JSON.parse('{"id":"Property_signature_CLASS","title":"Signature matching (ISCLASS)","description":"The signature matching operator creates a property that determines, from a class perspective, whether the property specified in the operator can have a non-NULL value for the given arguments. In fact, this operator infers the possible classes of a given property from its semantics, and then, using logical operators and the classification operator, creates the required property.","source":"@site/docs/Property_signature_ISCLASS.md","sourceDirName":".","slug":"/Property_signature_CLASS","permalink":"/Property_signature_CLASS","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/master/docs/en/Property_signature_ISCLASS.md","tags":[],"version":"current","lastUpdatedAt":1712785486000,"frontMatter":{"id":"Property_signature_CLASS","title":"Signature matching (ISCLASS)"},"sidebar":"learn","previous":{"title":"Classification (IS/AS)","permalink":"/Classification_IS_AS"},"next":{"title":"Selection (CASE, IF, MULTI, OVERRIDE, EXCLUSIVE)","permalink":"/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE"}}'),a=r("85893"),s=r("50065");let i={id:"Property_signature_CLASS",title:"Signature matching (ISCLASS)"},o=void 0,c={},l=[{value:"Language",id:"language",level:3},{value:"Example",id:"example",level:3}];function p(e){let t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["The signature matching operator creates a ",(0,a.jsx)(t.a,{href:"/Properties",children:"property"})," that determines, from a class perspective, whether the property specified in the operator can have a non-",(0,a.jsx)(t.code,{children:"NULL"})," value for the given arguments. In fact, this operator infers the possible classes of a given property from its semantics, and then, using ",(0,a.jsx)(t.a,{href:"/Logical_operators_AND_OR_NOT_XOR",children:"logical"})," operators and the ",(0,a.jsx)(t.a,{href:"/Classification_IS_AS",children:"classification"})," operator, creates the required property."]}),"\n",(0,a.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,a.jsxs)(t.p,{children:["To implement this operator, use the ",(0,a.jsxs)(t.a,{href:"/CLASS_operator",children:[(0,a.jsx)(t.code,{children:"ISCLASS"})," operator"]}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-lsf",children:"CLASS Person;\nname = ABSTRACT CASE STRING[100] (Person);\n\nCLASS Student : Person;\nstudentName = DATA STRING[100] (Student);\n\nname(s) += WHEN ISCLASS(studentName(s)) THEN studentName(s); // is equivalent to WHEN s IS Student THEN studentName(s)\n"})})]})}function u(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return o},a:function(){return i}});var n=r(67294);let a={},s=n.createContext(a);function i(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);