"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[97989],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return u}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(t),u=o,E=d["".concat(l,".").concat(u)]||d[u]||p[u]||r;return t?a.createElement(E,i(i({ref:n},m),{},{components:t})):a.createElement(E,i({ref:n},m))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},11622:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return c}});var a=t(83117),o=(t(67294),t(3905));const r={title:"How-to: Metaprogramming"},i=void 0,s={unversionedId:"How-to_Metaprogramming",id:"How-to_Metaprogramming",title:"How-to: Metaprogramming",description:'You may often need to write "similar" code for certain cases. The META statement exists for this purpose, and makes it possible to create a code template or metacode. It can contain parameters that will be replaced by certain values when this metacode is used. Such an approach is called metaprogramming.',source:"@site/docs/How-to_Metaprogramming.md",sourceDirName:".",slug:"/How-to_Metaprogramming",permalink:"/How-to_Metaprogramming",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/How-to_Metaprogramming.md",tags:[],version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"Jun 9, 2021",frontMatter:{title:"How-to: Metaprogramming"},sidebar:"learn",previous:{title:"How-to: Binding properties",permalink:"/How-to_Binding_properties"},next:{title:"How-to: Physical model",permalink:"/How-to_Physical_model"}},l={},c=[],m={toc:c};function p(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'You may often need to write "similar" code for certain cases. The ',(0,o.kt)("a",{parentName:"p",href:"/META_statement"},(0,o.kt)("inlineCode",{parentName:"a"},"META")," statement")," exists for this purpose, and makes it possible to create a code template or ",(0,o.kt)("em",{parentName:"p"},"metacode"),". It can contain parameters that will be replaced by certain values when this metacode is used. Such an approach is called ",(0,o.kt)("a",{parentName:"p",href:"/Metaprogramming"},"metaprogramming"),"."),(0,o.kt)("p",null,"Let's create a simple directory as described in the article. ",(0,o.kt)("a",{parentName:"p",href:"/How-to_CRUD"},"How-to: CRUD"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[30] (Book) IN id;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM book 'Book' // form for displaying \"card' // form for displaying the book card\n    OBJECTS b = Book PANEL\n    PROPERTIES(b) name\n\n    EDIT Book OBJECT b\n;\n\nFORM books 'Books'\n    OBJECTS b = Book\n    PROPERTIES(b) READONLY name\n    PROPERTIES(b) NEWSESSION NEW, EDIT, DELETE\n\n    LIST Book OBJECT b\n;\n\nNAVIGATOR {\n    NEW books;\n}\n")),(0,o.kt)("p",null,"We can use this code to write the following metacode:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"META defineObject(class, id, shortId, caption, multiCaption)\n    CLASS class caption;\n    TABLE id(class);\n\n    name 'Name' = DATA ISTRING[100] (class);\n\n    FORM id caption\n        OBJECTS shortId = class PANEL\n        PROPERTIES(shortId) name\n\n        EDIT class OBJECT shortId\n    ;\n\n    FORM id##s multiCaption\n        OBJECTS shortId = class\n        PROPERTIES(shortId) READONLY name\n        PROPERTIES(shortId) NEWSESSION NEW, EDIT, DELETE\n\n        LIST class OBJECT shortId\n    ;\n\n    NAVIGATOR {\n        NEW id##s;\n    }\nEND\n\nMETA defineObject(id, shortId, caption, multiCaption)\n    @defineObject(###id, id, shortId, caption, multiCaption);\nEND\n")),(0,o.kt)("p",null,"Note that one code segment can programmatically call another one."),(0,o.kt)("p",null,"This is how metacode is used:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"@defineObject(book, b, 'Book', 'Books');\n@defineObject(magazine, m, 'Magazine', 'Magazines');\n")),(0,o.kt)("p",null,"In the first case, when the system starts generating the result code, it will replace all ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," lexemes with ",(0,o.kt)("inlineCode",{parentName:"p"},"book"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"shortId")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"b"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"caption")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"'Book'"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"multiCaption")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"'Books'"),". When using ",(0,o.kt)("inlineCode",{parentName:"p"},"##")," concatenation, these replacements will leave everything unchanged. If ",(0,o.kt)("inlineCode",{parentName:"p"},"###")," concatenation is used, the first letter of the value will be capitalized. The generated code will look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nTABLE book(Book);\n\nname 'Name' = DATA ISTRING[100] (Book);\n\nFORM book 'Book'\n    OBJECTS b = Book PANEL\n    PROPERTIES(b) name\n\n    EDIT Book OBJECT b\n;\n\nFORM books 'Books'\n    OBJECTS b = Book\n    PROPERTIES(b) READONLY name\n    PROPERTIES(b) NEWSESSION NEW, EDIT, DELETE\n\n    LIST Book OBJECT b\n;\n\nNAVIGATOR {\n    NEW books;\n}\n\nCLASS Magazine 'Magazine';\nTABLE magazine(Magazine);\n\nname 'Name' = DATA ISTRING[100] (Magazine);\n\nFORM magazine 'Magazine'\n    OBJECTS m = Magazine PANEL\n    PROPERTIES(m) name\n\n    EDIT Magazine OBJECT m\n;\n\nFORM magazines 'Magazines'\n    OBJECTS m = Magazine\n    PROPERTIES(m) READONLY name\n    PROPERTIES(m) NEWSESSION NEW, EDIT, DELETE\n\n    LIST Magazine OBJECT m\n;\n\nNAVIGATOR {\n    NEW magazines;\n}\n")),(0,o.kt)("p",null,'In order for the IDE to "see" the code generated by metacodes, you need to enabled the corresponding mode in the menu.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(90735).Z,width:"299",height:"472"})),(0,o.kt)("p",null,"When the metacode support mode is enabled, the generated code will be automatically substituted in the source code if metacode is used."),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(47664).Z,width:"434",height:"408"})),(0,o.kt)("p",null,"Any modifications of the code will be impossible, since they will be automatically overwritten by the IDE. However, it is recommended to disable this mode when committing code to your version control system to avoid creating redundant change history entries."),(0,o.kt)("p",null,"Objects created using metacode can subsequently be extended using standard ",(0,o.kt)("a",{parentName:"p",href:"/How-to_Extensions"},"mechanisms"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"genre 'Genre' = DATA ISTRING[20] (Book);\nEXTEND FORM book PROPERTIES(b) genre;\nEXTEND FORM books PROPERTIES(b) genre;\n")))}p.isMDXComponent=!0},90735:function(e,n,t){n.Z=t.p+"assets/images/How-to_Metaprogramming_enable-b3aa414b76e300a02263fb015ce78aa0.png"},47664:function(e,n,t){n.Z=t.p+"assets/images/How-to_Metaprogramming_metaMode-e565f6f9b0256e990ac2c3d17aeafd17.png"}}]);