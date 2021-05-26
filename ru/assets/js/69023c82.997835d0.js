(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[29714],{3905:function(n,e,t){"use strict";t.d(e,{Zo:function(){return c},kt:function(){return E}});var r=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function p(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var l=r.createContext({}),s=function(n){var e=r.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},c=function(n){var e=s(n.components);return r.createElement(l.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,l=n.parentName,c=p(n,["components","mdxType","originalType","parentName"]),u=s(t),E=o,d=u["".concat(l,".").concat(E)]||u[E]||m[E]||a;return t?r.createElement(d,i(i({ref:e},c),{},{components:t})):r.createElement(d,i({ref:e},c))}));function E(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,i=new Array(a);i[0]=u;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=n,p.mdxType="string"==typeof n?n:o,i[1]=p;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},77842:function(n,e,t){"use strict";t.r(e),t.d(e,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l},default:function(){return c}});var r=t(22122),o=t(19756),a=(t(67294),t(3905)),i={title:"How-to: \u041c\u0435\u0442\u0430\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"},p={unversionedId:"How-to_Metaprogramming",id:"How-to_Metaprogramming",isDocsHomePage:!1,title:"How-to: \u041c\u0435\u0442\u0430\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",description:'\u0427\u0430\u0441\u0442\u043e \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u0435\u0442 \u043f\u043e\u0442\u0440\u0435\u0431\u043d\u043e\u0441\u0442\u044c \u0432 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u0438 "\u043f\u043e\u0445\u043e\u0436\u0435\u0433\u043e" \u043a\u043e\u0434\u0430 \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u0435\u0432. \u0414\u043b\u044f \u044d\u0442\u043e\u0439 \u0446\u0435\u043b\u0438 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f META, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u043d\u0435\u043a\u0438\u0439 \u0448\u0430\u0431\u043b\u043e\u043d \u043a\u043e\u0434\u0430, \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u043c\u044b\u0439 \u043c\u0435\u0442\u0430\u043a\u043e\u0434\u043e\u043c. \u0412 \u043d\u0435\u043c \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0437\u0430\u0442\u0435\u043c \u0431\u0443\u0434\u0443\u0442 \u0437\u0430\u043c\u0435\u043d\u044f\u0442\u044c\u0441\u044f \u043d\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u044d\u0442\u043e\u0433\u043e \u043c\u0435\u0442\u0430\u043a\u043e\u0434\u0430. \u0422\u0430\u043a\u043e\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043c\u0435\u0442\u0430\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435.',source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/How-to_Metaprogramming.md",sourceDirName:".",slug:"/How-to_Metaprogramming",permalink:"/ru/next/How-to_Metaprogramming",editUrl:"https://github.com/danchanka/platform/edit/master/docs/ru/How-to_Metaprogramming.md",version:"current",lastUpdatedAt:1622042248,formattedLastUpdatedAt:"26.05.2021",frontMatter:{title:"How-to: \u041c\u0435\u0442\u0430\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"},sidebar:"learn",previous:{title:"How-to: \u0421\u0432\u044f\u0437\u044b\u0432\u0430\u043d\u0438\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432",permalink:"/ru/next/How-to_Binding_properties"},next:{title:"How-to: \u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c",permalink:"/ru/next/How-to_Physical_model"}},l=[],s={toc:l};function c(n){var e=n.components,i=(0,o.Z)(n,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'\u0427\u0430\u0441\u0442\u043e \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u0435\u0442 \u043f\u043e\u0442\u0440\u0435\u0431\u043d\u043e\u0441\u0442\u044c \u0432 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u0438 "\u043f\u043e\u0445\u043e\u0436\u0435\u0433\u043e" \u043a\u043e\u0434\u0430 \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u0435\u0432. \u0414\u043b\u044f \u044d\u0442\u043e\u0439 \u0446\u0435\u043b\u0438 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 ',(0,a.kt)("a",{parentName:"p",href:"/ru/next/META_instruction"},"\u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f ",(0,a.kt)("inlineCode",{parentName:"a"},"META")),", \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u043d\u0435\u043a\u0438\u0439 \u0448\u0430\u0431\u043b\u043e\u043d \u043a\u043e\u0434\u0430, \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u043c\u044b\u0439 ",(0,a.kt)("em",{parentName:"p"},"\u043c\u0435\u0442\u0430\u043a\u043e\u0434\u043e\u043c"),". \u0412 \u043d\u0435\u043c \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0437\u0430\u0442\u0435\u043c \u0431\u0443\u0434\u0443\u0442 \u0437\u0430\u043c\u0435\u043d\u044f\u0442\u044c\u0441\u044f \u043d\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u044d\u0442\u043e\u0433\u043e \u043c\u0435\u0442\u0430\u043a\u043e\u0434\u0430. \u0422\u0430\u043a\u043e\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f ",(0,a.kt)("a",{parentName:"p",href:"/ru/next/Metaprogramming"},"\u043c\u0435\u0442\u0430\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"),"."),(0,a.kt)("p",null,"\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0437\u0430\u0434\u0430\u0447\u0443 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u0441\u0442\u043e\u0433\u043e \u0441\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u0438\u043a\u0430, \u043a\u0430\u043a \u043e\u043f\u0438\u0441\u0430\u043d\u043e \u0432 \u0441\u0442\u0430\u0442\u044c\u0435 ",(0,a.kt)("a",{parentName:"p",href:"/ru/next/How-to_CRUD"},"How-to: CRUD"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book '\u041a\u043d\u0438\u0433\u0430';\nname '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435' = DATA ISTRING[30] (Book) IN id;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM book '\u041a\u043d\u0438\u0433\u0430' // \u0444\u043e\u0440\u043c\u0430 \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \"\u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438\" \u043a\u043d\u0438\u0433\u0438\n    OBJECTS b = Book PANEL\n    PROPERTIES(b) name\n\n    EDIT Book OBJECT b\n;\n\nFORM books '\u041a\u043d\u0438\u0433\u0438'\n    OBJECTS b = Book\n    PROPERTIES(b) READONLY name\n    PROPERTIES(b) NEWSESSION NEW, EDIT, DELETE\n\n    LIST Book OBJECT b\n;\n\nNAVIGATOR {\n    NEW books;\n}\n")),(0,a.kt)("p",null,"\u041d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u044d\u0442\u043e\u0433\u043e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u0434\u0430 \u043c\u043e\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u043c\u0435\u0442\u0430\u043a\u043e\u0434:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"META defineObject(class, id, shortId, caption, multiCaption)\n    CLASS class caption;\n    TABLE id(class);\n\n    name '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435' = DATA ISTRING[100] (class);\n\n    FORM id caption\n        OBJECTS shortId = class PANEL\n        PROPERTIES(shortId) name\n\n        EDIT class OBJECT shortId\n    ;\n\n    FORM id##s multiCaption\n        OBJECTS shortId = class\n        PROPERTIES(shortId) READONLY name\n        PROPERTIES(shortId) NEWSESSION NEW, EDIT, DELETE\n\n        LIST class OBJECT shortId\n    ;\n\n    NAVIGATOR {\n        NEW id##s;\n    }\nEND\n\nMETA defineObject(id, shortId, caption, multiCaption)\n    @defineObject(###id, id, shortId, caption, multiCaption);\nEND\n")),(0,a.kt)("p",null,"\u0412\u0430\u0436\u043d\u043e \u043e\u0442\u043c\u0435\u0442\u0438\u0442\u044c, \u0447\u0442\u043e \u043e\u0434\u0438\u043d \u043c\u0435\u0442\u0430\u043a\u043e\u0434 \u043c\u043e\u0436\u0435\u0442 \u0432\u043d\u0443\u0442\u0440\u0438 \u0432\u044b\u0437\u044b\u0432\u0430\u0442\u044c \u0434\u0440\u0443\u0433\u043e\u0439."),(0,a.kt)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043c\u0435\u0442\u0430\u043a\u043e\u0434\u0430 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"@defineObject(book, b, '\u041a\u043d\u0438\u0433\u0430', '\u041a\u043d\u0438\u0433\u0438');\n@defineObject(magazine, m, '\u0416\u0443\u0440\u043d\u0430\u043b', '\u0416\u0443\u0440\u043d\u0430\u043b\u044b');\n")),(0,a.kt)("p",null,"\u0412 \u043f\u0435\u0440\u0432\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u043f\u0440\u0438 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0438\u0440\u0443\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u0434\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0437\u0430\u043c\u0435\u043d\u0438\u0442 \u0432\u0441\u0435 \u043b\u0435\u043a\u0441\u0435\u043c\u044b ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," \u043d\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"book"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"shortId")," \u043d\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"b"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"caption")," \u043d\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"'\u041a\u043d\u0438\u0433\u0430'"),", \u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"multiCaption")," \u043d\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"'\u041a\u043d\u0438\u0433\u0438'"),". \u041f\u0440\u0438 \u044d\u0442\u043e\u043c \u043f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0441\u043a\u043b\u0435\u0439\u043a\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"##")," \u0437\u0430\u043c\u0435\u043d\u0430 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0430 \u0431\u0435\u0437 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439, \u0430 \u043f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"###")," \u043f\u0435\u0440\u0432\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043c\u0435\u043d\u0435\u043d\u0430 \u043d\u0430 \u0437\u0430\u0433\u043b\u0430\u0432\u043d\u0443\u044e. \u0421\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043a\u043e\u0434 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book '\u041a\u043d\u0438\u0433\u0430';\nTABLE book(Book);\n\nname '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435' = DATA ISTRING[100] (Book);\n\nFORM book '\u041a\u043d\u0438\u0433\u0430'\n    OBJECTS b = Book PANEL\n    PROPERTIES(b) name\n\n    EDIT Book OBJECT b\n;\n\nFORM books '\u041a\u043d\u0438\u0433\u0438'\n    OBJECTS b = Book\n    PROPERTIES(b) READONLY name\n    PROPERTIES(b) NEWSESSION NEW, EDIT, DELETE\n\n    LIST Book OBJECT b\n;\n\nNAVIGATOR {\n    NEW books;\n}\n\nCLASS Magazine '\u0416\u0443\u0440\u043d\u0430\u043b';\nTABLE magazine(Magazine);\n\nname '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435' = DATA ISTRING[100] (Magazine);\n\nFORM magazine '\u0416\u0443\u0440\u043d\u0430\u043b'\n    OBJECTS m = Magazine PANEL\n    PROPERTIES(m) name\n\n    EDIT Magazine OBJECT m\n;\n\nFORM magazines '\u0416\u0443\u0440\u043d\u0430\u043b\u044b'\n    OBJECTS m = Magazine\n    PROPERTIES(m) READONLY name\n    PROPERTIES(m) NEWSESSION NEW, EDIT, DELETE\n\n    LIST Magazine OBJECT m\n;\n\nNAVIGATOR {\n    NEW magazines;\n}\n")),(0,a.kt)("p",null,'\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b IDE "\u0432\u0438\u0434\u0435\u043b\u0430" \u043a\u043e\u0434 \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043c\u0435\u0442\u0430\u043a\u043e\u0434\u0430\u043c\u0438, \u043d\u0443\u0436\u043d\u043e \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0439 \u0440\u0435\u0436\u0438\u043c \u0447\u0435\u0440\u0435\u0437 \u043f\u0443\u043d\u043a\u0442 \u043c\u0435\u043d\u044e.'),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(58568).Z})),(0,a.kt)("p",null,"\u041f\u0440\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u043e\u043c \u0440\u0435\u0436\u0438\u043c\u0435 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u043c\u0435\u0442\u0430\u043a\u043e\u0434\u0430\u043c\u0438 \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043a\u043e\u0434 \u0431\u0443\u0434\u0435\u0442 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u043e\u043c \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u0432 \u0438\u0441\u0445\u043e\u0434\u043d\u0438\u043a\u0430\u0445 \u043f\u0440\u0438 \u0435\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(64409).Z})),(0,a.kt)("p",null,"\u041b\u044e\u0431\u044b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432 \u043d\u0435\u043c \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b, \u0442\u0430\u043a \u043a\u0430\u043a \u0431\u0443\u0434\u0443\u0442 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0437\u0430\u0442\u0438\u0440\u0430\u0442\u044c\u0441\u044f IDE. \u041e\u0434\u043d\u0430\u043a\u043e, \u043f\u0440\u0438 \u043a\u043e\u043c\u043c\u0438\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u0432 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0435 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044f \u0432\u0435\u0440\u0441\u0438\u0439 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0432\u044b\u043a\u043b\u044e\u0447\u0430\u0442\u044c \u044d\u0442\u043e\u0442 \u0440\u0435\u0436\u0438\u043c, \u0447\u0442\u043e\u0431\u044b \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044c \u043d\u0435\u043d\u0443\u0436\u043d\u043e\u0439 \u0438\u0441\u0442\u043e\u0440\u0438\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439."),(0,a.kt)("p",null,"\u041e\u0431\u044a\u0435\u043a\u0442\u044b, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u043c\u0435\u0442\u0430\u043a\u043e\u0434\u0430, \u043c\u043e\u0436\u043d\u043e \u0432 \u0434\u0430\u043b\u044c\u043d\u0435\u0439\u0448\u0435\u043c \u0440\u0430\u0441\u0448\u0438\u0440\u044f\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0435 ",(0,a.kt)("a",{parentName:"p",href:"/ru/next/How-to_Extensions"},"\u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c\u044b"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"genre '\u0416\u0430\u043d\u0440' = DATA ISTRING[20] (Book);\nEXTEND FORM book PROPERTIES(b) genre;\nEXTEND FORM books PROPERTIES(b) genre;\n")))}c.isMDXComponent=!0},58568:function(n,e,t){"use strict";e.Z=t.p+"assets/images/How-to_Metaprogramming_enable-b3aa414b76e300a02263fb015ce78aa0.png"},64409:function(n,e,t){"use strict";e.Z=t.p+"assets/images/How-to_Metaprogramming_metaMode-e565f6f9b0256e990ac2c3d17aeafd17.png"}}]);