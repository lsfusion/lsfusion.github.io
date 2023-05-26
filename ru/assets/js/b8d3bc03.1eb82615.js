"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[47871],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},i={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,f=m["".concat(u,".").concat(d)]||m[d]||i[d]||o;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},91040:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return i},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var r=t(83117),a=(t(67294),t(3905));const o={title:"How-to: \u041f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u0438\u043c\u0435\u043d"},l=void 0,s={unversionedId:"How-to_Namespaces",id:"How-to_Namespaces",title:"How-to: \u041f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u0438\u043c\u0435\u043d",description:"\u0418\u043d\u043e\u0433\u0434\u0430 \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u044e\u0442 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u043e\u0435 \u0438\u043c\u044f \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u044b\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u044b. \u0414\u043b\u044f \u044d\u0442\u043e\u0439 \u0446\u0435\u043b\u0438 \u0438\u0445 \u043c\u043e\u0436\u043d\u043e \u043e\u0442\u043d\u0435\u0441\u0442\u0438 \u043a \u0440\u0430\u0437\u043d\u044b\u043c \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430\u043c \u0438\u043c\u0435\u043d, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0437\u0430\u0434\u0430\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043c\u043e\u0434\u0443\u043b\u044f \u0447\u0435\u0440\u0435\u0437 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044e NAMESPACE. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e \u0438\u043c\u0435\u043d \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c \u043c\u043e\u0434\u0443\u043b\u044f.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/How-to_Namespaces.md",sourceDirName:".",slug:"/How-to_Namespaces",permalink:"/ru/next/How-to_Namespaces",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/ru/How-to_Namespaces.md",tags:[],version:"current",lastUpdatedAt:1622042248,formattedLastUpdatedAt:"26 \u043c\u0430\u044f 2021 \u0433.",frontMatter:{title:"How-to: \u041f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u0438\u043c\u0435\u043d"},sidebar:"learn",previous:{title:"How-to: \u041f\u043e\u0438\u0441\u043a \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432",permalink:"/ru/next/How-to_Searching_for_elements"},next:{title:"How-to: \u042f\u0432\u043d\u0430\u044f \u0442\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f",permalink:"/ru/next/How-to_Explicit_typing"}},u={},p=[],c={toc:p};function i(e){let{components:n,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u0418\u043d\u043e\u0433\u0434\u0430 \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u044e\u0442 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u043e\u0435 ",(0,a.kt)("a",{parentName:"p",href:"/ru/next/Naming"},"\u0438\u043c\u044f")," \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u044b\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u044b. \u0414\u043b\u044f \u044d\u0442\u043e\u0439 \u0446\u0435\u043b\u0438 \u0438\u0445 \u043c\u043e\u0436\u043d\u043e \u043e\u0442\u043d\u0435\u0441\u0442\u0438 \u043a \u0440\u0430\u0437\u043d\u044b\u043c \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430\u043c \u0438\u043c\u0435\u043d, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0437\u0430\u0434\u0430\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043c\u043e\u0434\u0443\u043b\u044f \u0447\u0435\u0440\u0435\u0437 ",(0,a.kt)("a",{parentName:"p",href:"/ru/next/Module_header"},"\u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044e ",(0,a.kt)("inlineCode",{parentName:"a"},"NAMESPACE")),". \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e \u0438\u043c\u0435\u043d \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c \u043c\u043e\u0434\u0443\u043b\u044f."),(0,a.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u0434\u0432\u0430 \u043c\u043e\u0434\u0443\u043b\u044f ",(0,a.kt)("inlineCode",{parentName:"p"},"UseCaseNamePurchase")," \u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"UseCaseNameSale"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0431\u044a\u044f\u0432\u043b\u044f\u044e\u0442 \u043b\u043e\u0433\u0438\u043a\u0443 \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u043d\u0430 \u0437\u0430\u043a\u0443\u043f\u043a\u0443 \u0438 \u043f\u0440\u043e\u0434\u0430\u0436\u0443:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"MODULE UseCaseNamePurchase;\n\nNAMESPACE Purchase;\n\nCLASS Order '\u0417\u0430\u043a\u0430\u0437';\ndate '\u0414\u0430\u0442\u0430' = DATA DATE (Order);\nnumber '\u041d\u043e\u043c\u0435\u0440' = DATA INTEGER (Order);\n\nFORM orders '\u0417\u0430\u043a\u0430\u0437\u044b \u043d\u0430 \u0437\u0430\u043a\u0443\u043f\u043a\u0443'\n    OBJECTS o = Order\n    PROPERTIES(o) date, number\n;\n\nNAVIGATOR {\n    NEW orders;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"MODULE UseCaseNameSale;\n\nNAMESPACE Sale;\n\nCLASS Order '\u0417\u0430\u043a\u0430\u0437';\ndate '\u0414\u0430\u0442\u0430' = DATA DATE (Order);\nnumber '\u041d\u043e\u043c\u0435\u0440' = DATA INTEGER (Order);\n\nFORM orders '\u0417\u0430\u043a\u0430\u0437\u044b \u043d\u0430 \u043f\u0440\u043e\u0434\u0430\u0436\u0443'\n    OBJECTS o = Order\n    PROPERTIES(o) date, number\n;\n\nNAVIGATOR {\n    NEW orders;\n}\n")),(0,a.kt)("p",null,"\u0412 \u043e\u0431\u043e\u0438\u0445 \u0438\u0437 \u043d\u0438\u0445 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d \u043a\u043b\u0430\u0441\u0441 ",(0,a.kt)("inlineCode",{parentName:"p"},"Order"),", \u043d\u043e \u0442\u0430\u043a \u043a\u0430\u043a \u0443 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u0440\u0430\u0437\u043d\u044b\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u0438\u043c\u0435\u043d, \u0442\u043e \u0443 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0430 \u043e\u043d\u043e \u0431\u0443\u0434\u0435\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"Purchase"),", \u0430 \u0443 \u0432\u0442\u043e\u0440\u043e\u0433\u043e ",(0,a.kt)("inlineCode",{parentName:"p"},"Sale"),"."),(0,a.kt)("p",null,"\u041e\u0431\u044a\u044f\u0432\u0438\u043c \u0442\u0435\u0441\u0442\u043e\u0432\u044b\u0439 \u043c\u043e\u0434\u0443\u043b\u044c \u0441 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e\u043c \u0438\u043c\u0435\u043d ",(0,a.kt)("inlineCode",{parentName:"p"},"Test"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u0438 \u043e\u0442 \u043f\u0435\u0440\u0432\u043e\u0433\u043e, \u0438 \u043e\u0442 \u0432\u0442\u043e\u0440\u043e\u0433\u043e \u043c\u043e\u0434\u0443\u043b\u044f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"REQUIRE UseCaseNamePurchase, UseCaseNameSale;\n\nNAMESPACE Test;\n\nmessagePurchaseCount '\u0412\u044b\u0432\u0435\u0441\u0442\u0438 \u043a\u043e\u043b-\u0432\u043e \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u043d\u0430 \u0437\u0430\u043a\u0443\u043f\u043a\u0443' {\n    MESSAGE GROUP SUM 1 IF o IS Purchase.Order;\n}\nmessageSaleCount '\u0412\u044b\u0432\u0435\u0441\u0442\u0438 \u043a\u043e\u043b-\u0432\u043e \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u043d\u0430 \u043f\u0440\u043e\u0434\u0430\u0436\u0443' {\n    MESSAGE GROUP SUM 1 IF o IS Sale.Order;\n}\n\nNAVIGATOR {\n    NEW ACTION messagePurchaseCount;\n    NEW ACTION messageSaleCount;\n}\n")),(0,a.kt)("p",null,"\u041f\u0440\u0438 \u043f\u043e\u043f\u044b\u0442\u043a\u0435 \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u044c\u0441\u044f \u043a \u043a\u043b\u0430\u0441\u0441\u0443 ",(0,a.kt)("inlineCode",{parentName:"p"},"Order")," \u0431\u0435\u0437 \u044f\u0432\u043d\u043e\u0433\u043e \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u0438\u043c\u0435\u043d \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0434\u0430\u043d\u0430 \u043e\u0448\u0438\u0431\u043a\u0430:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(27039).Z,width:"446",height:"102"})),(0,a.kt)("p",null,"\u0412\u0441\u0435 \u0442\u0430\u043a\u0438\u0435 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u044f \u0442\u0440\u0435\u0431\u0443\u044e\u0442 \u044f\u0432\u043d\u043e\u0433\u043e \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u0438\u043c\u0435\u043d."),(0,a.kt)("p",null,"\u0412 \u0441\u043b\u0443\u0447\u0430\u0435, \u0435\u0441\u043b\u0438 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e \u0438\u043c\u0435\u043d \u043c\u043e\u0434\u0443\u043b\u044f \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442 \u0441 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e\u043c \u0438\u0441\u043a\u043e\u043c\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u044b (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,a.kt)("inlineCode",{parentName:"p"},"Purchase"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"NAMESPACE Purchase;\n")),(0,a.kt)("p",null,"\u0438\u043b\u0438 \u0443\u043a\u0430\u0437\u0430\u043d \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432 \u0438\u043c\u0435\u043d \u0447\u0435\u0440\u0435\u0437 ",(0,a.kt)("a",{parentName:"p",href:"/ru/next/Module_header"},"\u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044e ",(0,a.kt)("inlineCode",{parentName:"a"},"PRIORITY"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"PRIORITY Purchase;\n")),(0,a.kt)("p",null,"\u0442\u043e \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e \u0438\u043c\u0435\u043d \u043d\u0435 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"messagePurchaseCount '\u0412\u044b\u0432\u0435\u0441\u0442\u0438 \u043a\u043e\u043b-\u0432\u043e \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u043d\u0430 \u0437\u0430\u043a\u0443\u043f\u043a\u0443' {\n    MESSAGE GROUP SUM 1 IF o IS Order;\n}\nmessageSaleCount '\u0412\u044b\u0432\u0435\u0441\u0442\u0438 \u043a\u043e\u043b-\u0432\u043e \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u043d\u0430 \u043f\u0440\u043e\u0434\u0430\u0436\u0443' {\n    MESSAGE GROUP SUM 1 IF o IS Sale.Order;\n}\n\nNAVIGATOR {\n    NEW ACTION messagePurchaseCount;\n    NEW ACTION messageSaleCount;\n}\n")),(0,a.kt)("p",null,"\u0411\u0435\u0437 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u0438\u043c\u0435\u043d \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043a\u043b\u0430\u0441\u0441 \u0438\u0437 ",(0,a.kt)("inlineCode",{parentName:"p"},"Purchase"),". \u041f\u0440\u0438 \u044d\u0442\u043e\u043c \u043e\u0441\u0442\u0430\u0435\u0442\u0441\u044f \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0432 \u044f\u0432\u043d\u0443\u044e \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e \u0438\u043c\u0435\u043d (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,a.kt)("inlineCode",{parentName:"p"},"Sale"),")."))}i.isMDXComponent=!0},27039:function(e,n,t){n.Z=t.p+"assets/images/How-to_Namespaces-d3869b9262099eff7d50035cbade492e.png"}}]);