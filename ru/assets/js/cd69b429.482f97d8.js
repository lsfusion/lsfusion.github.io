"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[4677],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),k=c(n),d=o,f=k["".concat(i,".").concat(d)]||k[d]||s[d]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=k;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},22053:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return c}});var r=n(83117),o=(n(67294),n(3905));const a={title:"How-to: GROUP SUM"},l=void 0,u={unversionedId:"How-to_GROUP_SUM",id:"How-to_GROUP_SUM",title:"How-to: GROUP SUM",description:"\u041f\u0440\u0438\u043c\u0435\u0440 1",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/How-to_GROUP_SUM.md",sourceDirName:".",slug:"/How-to_GROUP_SUM",permalink:"/ru/next/How-to_GROUP_SUM",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/ru/How-to_GROUP_SUM.md",tags:[],version:"current",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"07.07.2021",frontMatter:{title:"How-to: GROUP SUM"},sidebar:"learn",previous:{title:"How-to: \u0412\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f",permalink:"/ru/next/How-to_Computations"},next:{title:"How-to: GROUP MAX/MIN/AGGR",permalink:"/ru/next/How-to_GROUP_MAX_MIN_AGGR"}},i={},c=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440 1",id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 2",id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 3",id:"\u043f\u0440\u0438\u043c\u0435\u0440-3",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-2",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-2",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 4",id:"\u043f\u0440\u0438\u043c\u0435\u0440-4",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-3",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-3",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 5",id:"\u043f\u0440\u0438\u043c\u0435\u0440-5",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-4",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-4",level:3}],p={toc:c};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-1"},"\u041f\u0440\u0438\u043c\u0435\u0440 1"),(0,o.kt)("h3",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),(0,o.kt)("p",null,"\u0415\u0441\u0442\u044c \u043d\u0430\u0431\u043e\u0440 \u043a\u043d\u0438\u0433, \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0445 \u043a \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book '\u041a\u043d\u0438\u0433\u0430';\nCLASS Category '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f';\n\ncategory '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f' = DATA Category (Book);\n")),(0,o.kt)("p",null,"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043d\u0438\u0433 \u0432 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438."),(0,o.kt)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"countBooks '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043d\u0438\u0433' (Category c) = GROUP SUM 1 BY category(Book book);\n")),(0,o.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-2"},"\u041f\u0440\u0438\u043c\u0435\u0440 2"),(0,o.kt)("h3",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),(0,o.kt)("p",null,"\u0415\u0441\u0442\u044c \u043d\u0430\u0431\u043e\u0440 \u043a\u043d\u0438\u0433, \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0445 \u043a \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c \u0442\u0435\u0433\u0430\u043c. \u041a\u0430\u0436\u0434\u0430\u044f \u043a\u043d\u0438\u0433\u0430 \u043c\u043e\u0436\u0435\u0442 \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u044c\u0441\u044f \u043a \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c \u0442\u0435\u0433\u0430\u043c \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Tag '\u0422\u0435\u0433';\n\nin '\u0412\u043a\u043b' = DATA BOOLEAN (Tag, Book);\n")),(0,o.kt)("p",null,"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043d\u0438\u0433 \u0432 \u0442\u0435\u0433\u0435."),(0,o.kt)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"countBooks '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043d\u0438\u0433' (Tag t) = GROUP SUM 1 IF in(t, Book b);\n")),(0,o.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-3"},"\u041f\u0440\u0438\u043c\u0435\u0440 3"),(0,o.kt)("h3",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-2"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),(0,o.kt)("p",null,"\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u0438 \u043a\u043d\u0438\u0433, \u0433\u0434\u0435 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438 \u0435\u0441\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u043d\u0438\u0433\u0443 \u0438 \u0441\u043a\u043b\u0430\u0434, \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u0431\u044b\u043b\u043e \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u0435, \u0430 \u0442\u0430\u043a\u0436\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0438 \u0442\u0438\u043f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 (\u043f\u0440\u0438\u0445\u043e\u0434/\u0440\u0430\u0441\u0445\u043e\u0434)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Stock '\u0421\u043a\u043b\u0430\u0434';\n\n\nCLASS Ledger '\u0414\u0432\u0438\u0436\u0435\u043d\u0438\u0435';\nbook '\u041a\u043d\u0438\u0433\u0430' = DATA Book (Ledger);\nstock '\u0421\u043a\u043b\u0430\u0434' = DATA Stock (Ledger);\n\nquantity '\u041a\u043e\u043b-\u0432\u043e' = DATA INTEGER (Ledger);\nout '\u0420\u0430\u0441\u0445\u043e\u0434' = DATA BOOLEAN (Ledger);\n")),(0,o.kt)("p",null,"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u043e\u0441\u0442\u0430\u0442\u043e\u043a \u043f\u043e \u0441\u043a\u043b\u0430\u0434\u0443 \u0434\u043b\u044f \u043a\u043d\u0438\u0433\u0438."),(0,o.kt)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-2"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"TABLE bookStock (Book, Stock);\ncurrentBalance '\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u043e\u0441\u0442\u0430\u0442\u043e\u043a' (Book b, Stock s) = GROUP SUM IF out(Ledger l) THEN -quantity(l) ELSE quantity(l) BY book(l), stock(l) MATERIALIZED;\n")),(0,o.kt)("p",null,"\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u043e ",(0,o.kt)("inlineCode",{parentName:"p"},"currentBalance")," \u043b\u0443\u0447\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u043f\u043e\u043c\u0435\u0447\u0430\u0442\u044c \u043a\u0430\u043a ",(0,o.kt)("a",{parentName:"p",href:"/ru/next/Materializations"},(0,o.kt)("inlineCode",{parentName:"a"},"MATERIALIZED"))," \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438 \u0447\u0442\u0435\u043d\u0438\u0438 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043e\u0441\u0442\u0430\u0442\u043a\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u043d\u0435 \u0441\u0447\u0438\u0442\u0430\u043b\u0430 \u0435\u0433\u043e \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u044f \u0437\u0430 \u0432\u0441\u0435 \u0432\u0440\u0435\u043c\u044f, \u0430 \u043e\u0431\u0440\u0430\u0449\u0430\u043b\u0430\u0441\u044c \u0431\u044b \u043a \u0442\u0430\u0431\u043b\u0438\u0446\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"bookStock")," \u0441 \u0443\u0436\u0435 \u0433\u043e\u0442\u043e\u0432\u044b\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c. \u042d\u0442\u043e \u0437\u0430\u043c\u0435\u0434\u043b\u044f\u0435\u0442 \u0437\u0430\u043f\u0438\u0441\u044c (\u0442\u0430\u043a \u043a\u0430\u043a \u043f\u0440\u0438 \u0437\u0430\u043f\u0438\u0441\u0438 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u044f \u0431\u0443\u0434\u0435\u0442 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043e\u0441\u0442\u0430\u0442\u043a\u0430), \u043e\u0434\u043d\u0430\u043a\u043e \u0437\u043d\u0430\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0443\u0441\u043a\u043e\u0440\u044f\u0435\u0442 \u0447\u0442\u0435\u043d\u0438\u0435."),(0,o.kt)("p",null,"\u0414\u043b\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"currentBalance")," \u043d\u0438\u0433\u0434\u0435 \u044f\u0432\u043d\u043e \u043d\u0435 \u0437\u0430\u0434\u0430\u0435\u0442\u0441\u044f, \u0432 \u043a\u0430\u043a\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 \u043e\u043d\u043e \u0434\u043e\u043b\u0436\u043d\u043e \u0445\u0440\u0430\u043d\u0438\u0442\u044c\u0441\u044f, \u0442\u0430\u043a \u043a\u0430\u043a \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u043c\u043e\u0436\u0435\u0442 \u0441\u0430\u043c\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043f\u043e \u0441\u0438\u0433\u043d\u0430\u0442\u0443\u0440\u0435, \u0432 \u043a\u0430\u043a\u0443\u044e \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0435\u0433\u043e \u043b\u0443\u0447\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u044c (\u0432 \u0434\u0430\u043d\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u044d\u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u0442\u0430\u0431\u043b\u0438\u0446\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"bookStock"),")."),(0,o.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-4"},"\u041f\u0440\u0438\u043c\u0435\u0440 4"),(0,o.kt)("h3",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-3"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),(0,o.kt)("p",null,"\u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e ",(0,o.kt)("a",{parentName:"p",href:"#%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80-3"},(0,o.kt)("strong",{parentName:"a"},"\u041f\u0440\u0438\u043c\u0435\u0440\u0443 3")),", \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u044f \u0443\u043a\u0430\u0437\u0430\u043d\u0430 \u0434\u0430\u0442\u0430 \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u044f."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"// \u043b\u0443\u0447\u0448\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u0438\u043d\u0434\u0435\u043a\u0441, \u0447\u0442\u043e\u0431\u044b \u0431\u044b\u0441\u0442\u0440\u043e \u0448\u043b\u0430 \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f \u043f\u043e \u0434\u0430\u0442\u0435\ndate '\u0414\u0430\u0442\u0430' = DATA DATE (Ledger) INDEXED; \n")),(0,o.kt)("p",null,"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u043e\u0441\u0442\u0430\u0442\u043e\u043a \u043f\u043e \u0441\u043a\u043b\u0430\u0434\u0443 \u0434\u043b\u044f \u043a\u043d\u0438\u0433\u0438 \u043d\u0430 \u0434\u0430\u0442\u0443 (\u043d\u0430 \u0443\u0442\u0440\u043e, \u0431\u0435\u0437 \u0443\u0447\u0435\u0442\u0430 \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u0439 \u0437\u0430 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u0443\u044e \u0434\u0430\u0442\u0443)."),(0,o.kt)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-3"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"// \u0412\u0430\u0440\u0438\u0430\u043d\u0442 1\nbalance1 '\u041e\u0441\u0442\u0430\u0442\u043e\u043a \u043d\u0430 \u0434\u0430\u0442\u0443' (Book b, Stock s, DATE d) = GROUP SUM (IF out(Ledger l) THEN -quantity(l) ELSE quantity(l)) IF date(l) < d BY book(l), stock(l);\n\n// \u0412\u0430\u0440\u0438\u0430\u043d\u0442 2\nbalance2 '\u041e\u0441\u0442\u0430\u0442\u043e\u043a \u043d\u0430 \u0434\u0430\u0442\u0443' (Book b, Stock s, DATE d) = currentBalance(b, s) (-) [ GROUP SUM (IF out(Ledger l) THEN -quantity(l) ELSE quantity(l)) IF date(l) >= d BY book(l), stock(l)](b, s);\n")),(0,o.kt)("p",null,'\u0412\u0442\u043e\u0440\u043e\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0442\u0438\u0442\u0435\u043b\u044c\u043d\u0435\u0435. \u0422\u0430\u043a \u043a\u0430\u043a \u0447\u0430\u0449\u0435 \u0432\u0441\u0435\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u0431\u0443\u0434\u0443\u0442 \u0438\u0434\u0442\u0438 \u043a \u0434\u0430\u0442\u0430\u043c \u0431\u043b\u0438\u0436\u0435 \u043a \u0442\u0435\u043a\u0443\u0449\u0435\u0439, \u0442\u043e \u0441\u0435\u0440\u0432\u0435\u0440 \u0431\u0443\u0434\u0435\u0442 \u0441\u0447\u0438\u0442\u0430\u0442\u044c \u043e\u0442 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043e\u0441\u0442\u0430\u0442\u043a\u0430 "\u043d\u0430\u0437\u0430\u0434", \u0447\u0442\u043e \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043c\u0435\u043d\u044c\u0448\u0435\u0433\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0437\u0430\u043f\u0438\u0441\u0435\u0439.'),(0,o.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-5"},"\u041f\u0440\u0438\u043c\u0435\u0440 5"),(0,o.kt)("h3",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-4"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),(0,o.kt)("p",null,"\u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e ",(0,o.kt)("a",{parentName:"p",href:"#%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80-3"},(0,o.kt)("strong",{parentName:"a"},"\u041f\u0440\u0438\u043c\u0435\u0440\u0443 3")),", \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0443\u0436\u043d\u043e \u043f\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u043e\u0441\u0442\u0430\u0442\u043e\u043a \u043a\u043d\u0438\u0433\u0438 \u043f\u043e \u0432\u0441\u0435\u043c \u0441\u043a\u043b\u0430\u0434\u0430\u043c."),(0,o.kt)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-4"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"currentBalance '\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u043e\u0441\u0442\u0430\u0442\u043e\u043a' (Book b) = GROUP SUM currentBalance(b, Stock s);\n")),(0,o.kt)("p",null,"\u042d\u0442\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u0432 \u043e\u0442\u043b\u0438\u0447\u0438\u0438 \u043e\u0442 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043e\u0441\u0442\u0430\u0442\u043a\u0430 \u043f\u043e \u0441\u043a\u043b\u0430\u0434\u0430\u043c \u043d\u0435\u0442 \u0441\u043c\u044b\u0441\u043b\u0430 \u0434\u0435\u043b\u0430\u0442\u044c ",(0,o.kt)("inlineCode",{parentName:"p"},"MATERIALIZED")," \u0432 \u0441\u043b\u0443\u0447\u0430\u0435, \u0435\u0441\u043b\u0438 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043a\u043b\u0430\u0434\u043e\u0432 \u043d\u0435\u0432\u0435\u043b\u0438\u043a\u043e, \u0442\u0430\u043a \u043a\u0430\u043a \u044d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u0442\u044c \u043a UPDATE CONFLICT \u043f\u0440\u0438 \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c\u0438 \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u044f \u043f\u043e \u043e\u0434\u043d\u043e\u0439 \u043a\u043d\u0438\u0433\u0435 \u043f\u043e \u0440\u0430\u0437\u043d\u044b\u043c \u0441\u043a\u043b\u0430\u0434\u0430\u043c."))}s.isMDXComponent=!0}}]);