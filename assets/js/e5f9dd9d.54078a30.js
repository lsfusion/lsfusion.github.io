"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["49794"],{77561:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>s,metadata:()=>t,assets:()=>c,toc:()=>d,contentTitle:()=>r});var t=JSON.parse('{"id":"How-to_Metaprogramming","title":"How-to: Metaprogramming","description":"You may often need to write \\"similar\\" code for certain cases. The META statement exists for this purpose, and makes it possible to create a code template or metacode. It can contain parameters that will be replaced by certain values when this metacode is used. Such an approach is called metaprogramming.","source":"@site/versioned_docs/version-v4/How-to_Metaprogramming.md","sourceDirName":".","slug":"/How-to_Metaprogramming","permalink":"/v4/How-to_Metaprogramming","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v4/docs/en/How-to_Metaprogramming.md","tags":[],"version":"v4","lastUpdatedAt":1623249583000,"frontMatter":{"title":"How-to: Metaprogramming"},"sidebar":"learn","previous":{"title":"How-to: Binding properties","permalink":"/v4/How-to_Binding_properties"},"next":{"title":"How-to: Physical model","permalink":"/v4/How-to_Physical_model"}}'),a=o("85893"),i=o("50065");let s={title:"How-to: Metaprogramming"},r=void 0,c={},d=[];function l(e){let n={a:"a",code:"code",em:"em",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:['You may often need to write "similar" code for certain cases. The ',(0,a.jsxs)(n.a,{href:"/v4/META_statement",children:[(0,a.jsx)(n.code,{children:"META"})," statement"]})," exists for this purpose, and makes it possible to create a code template or ",(0,a.jsx)(n.em,{children:"metacode"}),". It can contain parameters that will be replaced by certain values when this metacode is used. Such an approach is called ",(0,a.jsx)(n.a,{href:"/v4/Metaprogramming",children:"metaprogramming"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Let's create a simple directory as described in the article. ",(0,a.jsx)(n.a,{href:"/v4/How-to_CRUD",children:"How-to: CRUD"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[30] (Book) IN id;\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"FORM book 'Book' // form for displaying \"card' // form for displaying the book card\n    OBJECTS b = Book PANEL\n    PROPERTIES(b) name\n\n    EDIT Book OBJECT b\n;\n\nFORM books 'Books'\n    OBJECTS b = Book\n    PROPERTIES(b) READONLY name\n    PROPERTIES(b) NEWSESSION NEW, EDIT, DELETE\n\n    LIST Book OBJECT b\n;\n\nNAVIGATOR {\n    NEW books;\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"We can use this code to write the following metacode:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"META defineObject(class, id, shortId, caption, multiCaption)\n    CLASS class caption;\n    TABLE id(class);\n\n    name 'Name' = DATA ISTRING[100] (class);\n\n    FORM id caption\n        OBJECTS shortId = class PANEL\n        PROPERTIES(shortId) name\n\n        EDIT class OBJECT shortId\n    ;\n\n    FORM id##s multiCaption\n        OBJECTS shortId = class\n        PROPERTIES(shortId) READONLY name\n        PROPERTIES(shortId) NEWSESSION NEW, EDIT, DELETE\n\n        LIST class OBJECT shortId\n    ;\n\n    NAVIGATOR {\n        NEW id##s;\n    }\nEND\n\nMETA defineObject(id, shortId, caption, multiCaption)\n    @defineObject(###id, id, shortId, caption, multiCaption);\nEND\n"})}),"\n",(0,a.jsx)(n.p,{children:"Note that one code segment can programmatically call another one."}),"\n",(0,a.jsx)(n.p,{children:"This is how metacode is used:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"@defineObject(book, b, 'Book', 'Books');\n@defineObject(magazine, m, 'Magazine', 'Magazines');\n"})}),"\n",(0,a.jsxs)(n.p,{children:["In the first case, when the system starts generating the result code, it will replace all ",(0,a.jsx)(n.code,{children:"id"})," lexemes with ",(0,a.jsx)(n.code,{children:"book"}),", ",(0,a.jsx)(n.code,{children:"shortId"})," with ",(0,a.jsx)(n.code,{children:"b"}),", ",(0,a.jsx)(n.code,{children:"caption"})," with ",(0,a.jsx)(n.code,{children:"'Book'"}),", and ",(0,a.jsx)(n.code,{children:"multiCaption"})," with ",(0,a.jsx)(n.code,{children:"'Books'"}),". When using ",(0,a.jsx)(n.code,{children:"##"})," concatenation, these replacements will leave everything unchanged. If ",(0,a.jsx)(n.code,{children:"###"})," concatenation is used, the first letter of the value will be capitalized. The generated code will look like this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"CLASS Book 'Book';\nTABLE book(Book);\n\nname 'Name' = DATA ISTRING[100] (Book);\n\nFORM book 'Book'\n    OBJECTS b = Book PANEL\n    PROPERTIES(b) name\n\n    EDIT Book OBJECT b\n;\n\nFORM books 'Books'\n    OBJECTS b = Book\n    PROPERTIES(b) READONLY name\n    PROPERTIES(b) NEWSESSION NEW, EDIT, DELETE\n\n    LIST Book OBJECT b\n;\n\nNAVIGATOR {\n    NEW books;\n}\n\nCLASS Magazine 'Magazine';\nTABLE magazine(Magazine);\n\nname 'Name' = DATA ISTRING[100] (Magazine);\n\nFORM magazine 'Magazine'\n    OBJECTS m = Magazine PANEL\n    PROPERTIES(m) name\n\n    EDIT Magazine OBJECT m\n;\n\nFORM magazines 'Magazines'\n    OBJECTS m = Magazine\n    PROPERTIES(m) READONLY name\n    PROPERTIES(m) NEWSESSION NEW, EDIT, DELETE\n\n    LIST Magazine OBJECT m\n;\n\nNAVIGATOR {\n    NEW magazines;\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:'In order for the IDE to "see" the code generated by metacodes, you need to enabled the corresponding mode in the menu.'}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:o(53002).Z+"",width:"299",height:"472"})}),"\n",(0,a.jsx)(n.p,{children:"When the metacode support mode is enabled, the generated code will be automatically substituted in the source code if metacode is used."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:o(34833).Z+"",width:"434",height:"408"})}),"\n",(0,a.jsx)(n.p,{children:"Any modifications of the code will be impossible, since they will be automatically overwritten by the IDE. However, it is recommended to disable this mode when committing code to your version control system to avoid creating redundant change history entries."}),"\n",(0,a.jsxs)(n.p,{children:["Objects created using metacode can subsequently be extended using standard ",(0,a.jsx)(n.a,{href:"/v4/How-to_Extensions",children:"mechanisms"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"genre 'Genre' = DATA ISTRING[20] (Book);\nEXTEND FORM book PROPERTIES(b) genre;\nEXTEND FORM books PROPERTIES(b) genre;\n"})})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},53002:function(e,n,o){o.d(n,{Z:function(){return t}});let t=o.p+"assets/images/How-to_Metaprogramming_enable-b3aa414b76e300a02263fb015ce78aa0.png"},34833:function(e,n,o){o.d(n,{Z:function(){return t}});let t=o.p+"assets/images/How-to_Metaprogramming_metaMode-e565f6f9b0256e990ac2c3d17aeafd17.png"},50065:function(e,n,o){o.d(n,{Z:function(){return r},a:function(){return s}});var t=o(67294);let a={},i=t.createContext(a);function s(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);