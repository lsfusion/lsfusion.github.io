"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[67668],{90225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var o=n(74848),a=n(28453);const r={title:"Metaprogramming"},s=void 0,c={id:"Metaprogramming",title:"Metaprogramming",description:"Metaprogramming is a type of programming associated with writing software code that results in the generation of more software code. Metaprogramming is used for code reusability and to speed up development.",source:"@site/versioned_docs/version-v5/Metaprogramming.md",sourceDirName:".",slug:"/Metaprogramming",permalink:"/Metaprogramming",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/Metaprogramming.md",tags:[],version:"v5",lastUpdatedAt:1685108136,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{title:"Metaprogramming"},sidebar:"learn",previous:{title:"Form extension",permalink:"/Form_extension"},next:{title:"Integration",permalink:"/Integration"}},i={},d=[{value:"Metacode",id:"metacode",level:3},{value:"Lexeme concatenation",id:"concat",level:3},{value:"Examples",id:"examples",level:3}];function l(e){const t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.em,{children:"Metaprogramming"})," is a type of programming associated with writing software code that results in the generation of more software code. Metaprogramming is used for code reusability and to speed up development."]}),"\n",(0,o.jsx)(t.h3,{id:"metacode",children:"Metacode"}),"\n",(0,o.jsxs)(t.p,{children:["In ",(0,o.jsx)(t.strong,{children:"lsFusion"})," the metaprogramming tool used is ",(0,o.jsx)(t.em,{children:"metacode"}),", which is described by the ",(0,o.jsxs)(t.a,{href:"/META_statement",children:[(0,o.jsx)(t.code,{children:"META"})," statement"]}),". Metacode consists of a header and an ",(0,o.jsx)(t.strong,{children:"lsFusion"})," code block describing the ",(0,o.jsx)(t.a,{href:"/Statements",children:"statement"})," sequence. This code block must end with the keyword ",(0,o.jsx)(t.code,{children:"END"}),". Let us consider an example of metacode that allows you to add two ",(0,o.jsx)(t.a,{href:"/Actions",children:"actions"})," to an arbitrary ",(0,o.jsx)(t.a,{href:"/Forms",children:"form"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lsf",children:"META addActions(formName)\r\n    EXTEND FORM formName\r\n        PROPERTIES() showMessage, closeForm\r\n    ;\r\nEND\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The first line of the example contains the metacode header. It consists of the keyword ",(0,o.jsx)(t.code,{children:"META"}),", metacode name, and parameter list. In this example, the metacode ",(0,o.jsx)(t.code,{children:"addActions"})," has one parameter: ",(0,o.jsx)(t.code,{children:"formName"}),". This is the name of the form to which the actions will be added. Let's consider the possible uses for this metacode, which are described by the ",(0,o.jsxs)(t.a,{href:"/commat_statement",children:[(0,o.jsx)(t.code,{children:"@"})," statement"]}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lsf",children:"@addActions(documentForm);\r\n@addActions(orderForm);\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The statement to use metacode starts with the special symbol ",(0,o.jsx)(t.code,{children:"@"}),", followed by the name of the metacode and the parameters passed. When generating the code, each metacode parameter is replaced by the value passed as a parameter of the ",(0,o.jsx)(t.code,{children:"@"})," statement in all places where the metacode parameter is used. In this example, the metacode parameter ",(0,o.jsx)(t.code,{children:"formName"})," will be replaced with ",(0,o.jsx)(t.code,{children:"documentForm"})," and ",(0,o.jsx)(t.code,{children:"orderForm"}),". The above metacode uses generate the following code block:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lsf",children:"EXTEND FORM documentForm\r\n    PROPERTIES() showMessage, closeForm\r\n;\r\n\r\nEXTEND FORM orderForm\r\n    PROPERTIES() showMessage, closeForm\r\n;\n"})}),"\n",(0,o.jsx)(t.h3,{id:"concat",children:"Lexeme concatenation"}),"\n",(0,o.jsxs)(t.p,{children:["Simply substituting an ID for a metacode parameter is often not enough. For example, when creating a large number of new ",(0,o.jsx)(t.a,{href:"/Element_identification",children:"system elements"})," inside the metacode, you must be able to specify these new names. Passing all the names as metacode parameters can be inconvenient. For this reason the metacode contains the special operation ",(0,o.jsx)(t.code,{children:"##"}),", which operates at the ",(0,o.jsx)(t.a,{href:"/Tokens",children:"tokens"})," level. This operation can concatenate two adjacent lexemes into one. If one of the concatenated lexemes is a ",(0,o.jsx)(t.a,{href:"/Literals#strliteral",children:"string literal"}),", the concatenation will result in a single string literal."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lsf",children:"META objectProperties(object, caption)\r\n    object##Name 'Name '##caption = DATA BPSTRING[100](object);\r\n    object##Type 'Type '##caption = DATA Type (object);\r\n    object##Value 'Cost '##caption = DATA INTEGER (object);\r\nEND\r\n\r\n@objectProperties(Document, 'of the document');\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Using the metacode ",(0,o.jsx)(t.code,{children:"objectProperties"})," produces the following code:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lsf",children:"DocumentName 'Document name' = DATA BPSTRING[100](Document);\r\nDocumentType 'Document type' = DATA Type (Document);\r\nDocumentValue 'Document cost' = DATA INTEGER (Document);\n"})}),"\n",(0,o.jsxs)(t.p,{children:["There is also the special operation ",(0,o.jsx)(t.code,{children:"###"}),". It is equivalent to operation ",(0,o.jsx)(t.code,{children:"##"}),", except that in the second of the concatenated literals, the first character, if a letter, is converted to uppercase."]}),"\n",(0,o.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lsf",children:"META objectProperties(object, type, caption)\r\n    object##Name 'Name'##caption = DATA BPSTRING[100](###object); // capitalizing the first letter\r\n    object##Type 'Type'##caption = DATA type (###object);\r\n    object##Value 'Cost'##caption = DATA INTEGER (###object);\r\nEND\r\n\r\nMETA objectProperties(object, type)\r\n    @objectProperties(object, type, '');\r\nEND\n"})})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var o=n(96540);const a={},r=o.createContext(a);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);