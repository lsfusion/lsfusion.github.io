"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[21089],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,f=d["".concat(c,".").concat(u)]||d[u]||l[u]||r;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75270:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return l},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return p}});var a=n(83117),o=(n(67294),n(3905));const r={title:"Metaprogramming"},i=void 0,s={unversionedId:"Metaprogramming",id:"version-v4/Metaprogramming",title:"Metaprogramming",description:"Metaprogramming is a type of programming associated with writing software code that results in the generation of more software code. Metaprogramming is used for code reusability and to speed up development.",source:"@site/versioned_docs/version-v4/Metaprogramming.md",sourceDirName:".",slug:"/Metaprogramming",permalink:"/Metaprogramming",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Metaprogramming.md",tags:[],version:"v4",lastUpdatedAt:1624461640,formattedLastUpdatedAt:"Jun 23, 2021",frontMatter:{title:"Metaprogramming"},sidebar:"version-v4/learn",previous:{title:"Form extension",permalink:"/Form_extension"},next:{title:"Integration",permalink:"/Integration"}},c={},p=[{value:"Metacode",id:"metacode",level:3},{value:"Lexeme concatenation",id:"concat",level:3},{value:"Examples",id:"examples",level:3}],m={toc:p};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Metaprogramming")," is a type of programming associated with writing software code that results in the generation of more software code. Metaprogramming is used for code reusability and to speed up development.  "),(0,o.kt)("h3",{id:"metacode"},"Metacode"),(0,o.kt)("p",null,"In ",(0,o.kt)("strong",{parentName:"p"},"lsFusion")," the metaprogramming tool used is ",(0,o.kt)("em",{parentName:"p"},"metacode"),", which is described by the ",(0,o.kt)("a",{parentName:"p",href:"/META_statement"},(0,o.kt)("inlineCode",{parentName:"a"},"META")," statement"),". Metacode consists of a header and an ",(0,o.kt)("strong",{parentName:"p"},"lsFusion")," code block describing the ",(0,o.kt)("a",{parentName:"p",href:"/Statements"},"statement")," sequence. This code block must end with the keyword ",(0,o.kt)("inlineCode",{parentName:"p"},"END"),". Let us consider an example of metacode that allows you to add two ",(0,o.kt)("a",{parentName:"p",href:"/Actions"},"actions")," to an arbitrary ",(0,o.kt)("a",{parentName:"p",href:"/Forms"},"form"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"META addActions(formName)\n    EXTEND FORM formName\n        PROPERTIES() showMessage, closeForm\n    ;\nEND\n")),(0,o.kt)("p",null,"The first line of the example contains the metacode header. It consists of the keyword ",(0,o.kt)("inlineCode",{parentName:"p"},"META"),", metacode name, and parameter list. In this example, the metacode ",(0,o.kt)("inlineCode",{parentName:"p"},"addActions")," has one parameter: ",(0,o.kt)("inlineCode",{parentName:"p"},"formName"),". This is the name of the form to which the actions will be added. Let's consider the possible uses for this metacode, which are described by the ",(0,o.kt)("a",{parentName:"p",href:"/commat_statement"},(0,o.kt)("inlineCode",{parentName:"a"},"@")," statement"),". "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"@addActions(documentForm);\n@addActions(orderForm);\n")),(0,o.kt)("p",null,"The statement to use metacode starts with the special symbol ",(0,o.kt)("inlineCode",{parentName:"p"},"@"),", followed by the name of the metacode and the parameters passed. When generating the code, each metacode parameter is replaced by the value passed as a parameter of the ",(0,o.kt)("inlineCode",{parentName:"p"},"@")," statement in all places where the metacode parameter is used. In this example, the metacode parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"formName")," will be replaced with ",(0,o.kt)("inlineCode",{parentName:"p"},"documentForm")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"orderForm"),". The above metacode uses generate the following code block:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"EXTEND FORM documentForm\n    PROPERTIES() showMessage, closeForm\n;\n\nEXTEND FORM orderForm\n    PROPERTIES() showMessage, closeForm\n;\n")),(0,o.kt)("h3",{id:"concat"},"Lexeme concatenation"),(0,o.kt)("p",null,"Simply substituting an ID for a metacode parameter is often not enough. For example, when creating a large number of new ",(0,o.kt)("a",{parentName:"p",href:"/Element_identification"},"system elements")," inside the metacode, you must be able to specify these new names. Passing all the names as metacode parameters can be inconvenient. For this reason the metacode contains the special operation ",(0,o.kt)("inlineCode",{parentName:"p"},"##"),", which operates at the ",(0,o.kt)("a",{parentName:"p",href:"/Tokens"},"tokens")," level. This operation can concatenate two adjacent lexemes into one. If one of the concatenated lexemes is a ",(0,o.kt)("a",{parentName:"p",href:"/Literals#strliteral"},"string literal"),", the concatenation will result in a single string literal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"META objectProperties(object, caption)\n    object##Name 'Name '##caption = DATA BPSTRING[100](object);\n    object##Type 'Type '##caption = DATA Type (object);\n    object##Value 'Cost '##caption = DATA INTEGER (object);\nEND\n\n@objectProperties(Document, 'of the document');\n")),(0,o.kt)("p",null,"Using the metacode ",(0,o.kt)("inlineCode",{parentName:"p"},"objectProperties")," produces the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"DocumentName 'Document name' = DATA BPSTRING[100](Document);\nDocumentType 'Document type' = DATA Type (Document);\nDocumentValue 'Document cost' = DATA INTEGER (Document);\n")),(0,o.kt)("p",null,"There is also the special operation ",(0,o.kt)("inlineCode",{parentName:"p"},"###"),". It is equivalent to operation ",(0,o.kt)("inlineCode",{parentName:"p"},"##"),", except that in the second of the concatenated literals, the first character, if a letter, is converted to uppercase."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"META objectProperties(object, type, caption)\n    object##Name 'Name'##caption = DATA BPSTRING[100](###object); // capitalizing the first letter\n    object##Type 'Type'##caption = DATA type (###object);\n    object##Value 'Cost'##caption = DATA INTEGER (###object);\nEND\n\nMETA objectProperties(object, type)\n    @objectProperties(object, type, '');\nEND\n")))}l.isMDXComponent=!0}}]);