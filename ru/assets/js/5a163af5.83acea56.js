"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[37377],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||l;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9312:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return a},default:function(){return s},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p}});var r=n(83117),o=(n(67294),n(3905));const l={title:"How-to: GROUP MAX/MIN/AGGR"},a=void 0,i={unversionedId:"How-to_GROUP_MAX_MIN_AGGR",id:"version-v4/How-to_GROUP_MAX_MIN_AGGR",title:"How-to: GROUP MAX/MIN/AGGR",description:"\u041f\u0440\u0438\u043c\u0435\u0440 1",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-v4/How-to_GROUP_MAX_MIN_AGGR.md",sourceDirName:".",slug:"/How-to_GROUP_MAX_MIN_AGGR",permalink:"/ru/How-to_GROUP_MAX_MIN_AGGR",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/ru/How-to_GROUP_MAX_MIN_AGGR.md",tags:[],version:"v4",lastUpdatedAt:1619709222,formattedLastUpdatedAt:"29 \u0430\u043f\u0440. 2021 \u0433.",frontMatter:{title:"How-to: GROUP MAX/MIN/AGGR"},sidebar:"version-v4/learn",previous:{title:"How-to: GROUP SUM",permalink:"/ru/How-to_GROUP_SUM"},next:{title:"How-to: CASE/IF/OVERRIDE",permalink:"/ru/How-to_CASE_IF_OVERRIDE"}},u={},p=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440 1",id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 2",id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 3",id:"\u043f\u0440\u0438\u043c\u0435\u0440-3",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-2",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-2",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 4",id:"\u043f\u0440\u0438\u043c\u0435\u0440-4",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-3",level:3},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-3",level:3}],c={toc:p};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-1"},"\u041f\u0440\u0438\u043c\u0435\u0440 1"),(0,o.kt)("h3",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),(0,o.kt)("p",null,"\u0415\u0441\u0442\u044c \u043d\u0430\u0431\u043e\u0440 \u043a\u043d\u0438\u0433, \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0437\u0430\u0434\u0430\u043d \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book '\u041a\u043d\u0438\u0433\u0430';\n\nid '\u041d\u043e\u043c\u0435\u0440' = DATA INTEGER (Book);\n")),(0,o.kt)("p",null,"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0439\u0442\u0438 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u043a\u043d\u0438\u0433\u0438."),(0,o.kt)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"maxId '\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440' () = GROUP MAX id(Book b);\n")),(0,o.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-2"},"\u041f\u0440\u0438\u043c\u0435\u0440 2"),(0,o.kt)("h3",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),(0,o.kt)("p",null,"\u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e ",(0,o.kt)("a",{parentName:"p",href:"#%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80-1"},(0,o.kt)("strong",{parentName:"a"},"\u041f\u0440\u0438\u043c\u0435\u0440\u0443 1")),"."),(0,o.kt)("p",null,"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e \u043d\u043e\u043c\u0435\u0440\u0443 \u043a\u043d\u0438\u0433\u0438 \u043d\u0430\u0439\u0442\u0438 \u043e\u0431\u044a\u0435\u043a\u0442 ",(0,o.kt)("inlineCode",{parentName:"p"},"'\u041a\u043d\u0438\u0433\u0430'"),"."),(0,o.kt)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"// \u0412\u0430\u0440\u0438\u0430\u043d\u0442 1\nbook1 '\u041a\u043d\u0438\u0433\u0430' (INTEGER i) = GROUP MAX Book b BY id(b);\n\n// \u0412\u0430\u0440\u0438\u0430\u043d\u0442 2\nbook2 '\u041a\u043d\u0438\u0433\u0430' (INTEGER i) = GROUP AGGR Book b BY id(b);\n")),(0,o.kt)("p",null,"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 2 \u043e\u0442\u043b\u0438\u0447\u0430\u0435\u0442\u0441\u044f \u043e\u0442 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430 1 \u0442\u0435\u043c, \u0447\u0442\u043e \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u044d\u0442\u043e\u0433\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 ",(0,o.kt)("a",{parentName:"p",href:"/ru/Constraints"},"\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435")," \u043d\u0430 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043d\u043e\u043c\u0435\u0440\u0430 \u0434\u043b\u044f \u043a\u043d\u0438\u0433\u0438. \u041f\u0440\u0438 \u043f\u043e\u043f\u044b\u0442\u043a\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0434\u0432\u0435 \u043a\u043d\u0438\u0433\u0438 \u0441 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u043c\u0438 \u043d\u043e\u043c\u0435\u0440\u0430\u043c\u0438 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0434\u0430\u043d\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0441 \u043e\u0448\u0438\u0431\u043a\u043e\u0439."),(0,o.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-3"},"\u041f\u0440\u0438\u043c\u0435\u0440 3"),(0,o.kt)("h3",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-2"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),(0,o.kt)("p",null,"\u0415\u0441\u0442\u044c \u043d\u0430\u0431\u043e\u0440 \u043a\u043d\u0438\u0433, \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0437\u0430\u0434\u0430\u043d\u0430 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f \u0438 \u0446\u0435\u043d\u0430."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Category '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f';\n\ncategory '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f' = DATA Category (Book);\nprice '\u0426\u0435\u043d\u0430' = DATA NUMERIC[10,2] (Book);\n")),(0,o.kt)("p",null,"\u041d\u0443\u0436\u043d\u043e \u043f\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0443\u044e \u0446\u0435\u043d\u0443 \u043f\u043e \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438."),(0,o.kt)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-2"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"minPrice '\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440' (Category c) = GROUP MIN price(Book b) BY category(b);\n")),(0,o.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-4"},"\u041f\u0440\u0438\u043c\u0435\u0440 4"),(0,o.kt)("h3",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-3"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),(0,o.kt)("p",null,"\u0417\u0430\u0434\u0430\u043d \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u043e\u0442\u0433\u0440\u0443\u0437\u043a\u0438 \u043a\u043d\u0438\u0433."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Shipment '\u041e\u0442\u0433\u0440\u0443\u0437\u043a\u0430';\nCLASS ShipmentDetail '\u0421\u0442\u0440\u043e\u043a\u0430 \u043e\u0442\u0433\u0440\u0443\u0437\u043a\u0438';\nshipment '\u041e\u0442\u0433\u0440\u0443\u0437\u043a\u0430' = DATA Shipment (ShipmentDetail) NONULL DELETE;\n\nbook '\u041a\u043d\u0438\u0433\u0430' = DATA Book (ShipmentDetail);\n")),(0,o.kt)("p",null,"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0439\u0442\u0438 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0441\u0442\u0440\u043e\u043a\u0443 \u043e\u0442\u0433\u0440\u0443\u0437\u043a\u0438 \u043f\u043e \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0443 \u0438 \u043a\u043d\u0438\u0433\u0435."),(0,o.kt)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-3"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"shipmentDetail '\u0421\u0442\u0440\u043e\u043a\u0430 \u043e\u0442\u0433\u0440\u0443\u0437\u043a\u0438' (Shipment s, Book b) = GROUP MAX ShipmentDetail d BY shipment(d), book(d);\n")),(0,o.kt)("p",null,"\u042d\u0442\u043e\u0442 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u043c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u0430 \u041f\u043e\u0434\u0431\u043e\u0440 \u043f\u0440\u0438 \u0432\u0432\u043e\u0434\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u043e\u0442\u0433\u0440\u0443\u0437\u043a\u0438."))}s.isMDXComponent=!0}}]);