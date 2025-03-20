"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["56449"],{86455:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>s,metadata:()=>o,assets:()=>d,toc:()=>c,contentTitle:()=>a});var o=JSON.parse('{"id":"Form_extension","title":"Form extension","description":"The form extension technique allows the developer to extend the structure and design of a form created in another module.","source":"@site/docs/Form_extension.md","sourceDirName":".","slug":"/Form_extension","permalink":"/Form_extension","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/master/docs/en/Form_extension.md","tags":[],"version":"current","lastUpdatedAt":1625651520000,"frontMatter":{"title":"Form extension"},"sidebar":"learn","previous":{"title":"Action extension","permalink":"/Action_extension"},"next":{"title":"Metaprogramming","permalink":"/Metaprogramming"}}'),r=n("85893"),i=n("50065");let s={title:"Form extension"},a=void 0,d={},c=[{value:"Language",id:"language",level:3},{value:"Example",id:"example",level:3}];function l(e){let t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.a,{href:"/Forms",children:"form"})," ",(0,r.jsx)(t.a,{href:"/Extensions",children:"extension"})," technique allows the developer to extend the ",(0,r.jsx)(t.a,{href:"/Form_structure",children:"structure"})," and ",(0,r.jsx)(t.a,{href:"/Interactive_view",children:"design"})," of a form created in another module."]}),"\n",(0,r.jsx)(t.p,{children:'Form extension allows you to extract a specific functionality into a separate module, which when loaded will cause new components to be "embedded" into existing forms. The disadvantage of this approach is that this module must know the precise structure and design of the form which it depends on, and when these are modified the module may become inoperative.'}),"\n",(0,r.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,r.jsxs)(t.p,{children:["In order to extend the structure and design of an existing form, the ",(0,r.jsxs)(t.a,{href:"/EXTEND_FORM_statement",children:[(0,r.jsx)(t.code,{children:"EXTEND FORM"})," statement"]})," must be used."]}),"\n",(0,r.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lsf",children:"CLASS ItemGroup;\nname = DATA ISTRING[100] (ItemGroup);\n\nitemGroup = DATA ItemGroup (Item);\n\nEXTEND FORM items\n    PROPERTIES(i) NEWSESSION DELETE // adding a delete button to the form\n\n    OBJECTS g = ItemGroup BEFORE i // adding a product group object to the form before the product\n    PROPERTIES(g) READONLY name\n    // if the object was added after the object with products, then filtering \n    // would go by the group of products, and not by products\n    FILTERS itemGroup(i) == g \n;\n"})})]})}function u(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return s}});var o=n(67294);let r={},i=o.createContext(r);function s(e){let t=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);