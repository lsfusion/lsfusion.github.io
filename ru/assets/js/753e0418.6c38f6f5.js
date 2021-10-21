(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[21658],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},36376:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=r(74034),o=r(79973),a=(r(67294),r(3905)),i=["components"],u={title:"\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438"},l=void 0,c={unversionedId:"Materializations",id:"version-v4/Materializations",isDocsHomePage:!1,title:"\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438",description:"\u041f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043b\u044e\u0431\u043e\u0435 \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432 \u0432 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0435 \u043c\u043e\u0436\u043d\u043e \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c. \u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u0431\u0443\u0434\u0435\u0442 \u0445\u0440\u0430\u043d\u0438\u0442\u044c\u0441\u044f \u0432 \u0431\u0430\u0437\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e \u0438 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u043f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445, \u043e\u0442 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u044d\u0442\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u0437\u0430\u0432\u0438\u0441\u0438\u0442. \u041f\u0440\u0438 \u044d\u0442\u043e\u043c \u043f\u0440\u0438 \u0447\u0442\u0435\u043d\u0438\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0442\u0430\u043a\u043e\u0433\u043e \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430, \u044d\u0442\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0431\u0443\u0434\u0443\u0442 \u0447\u0438\u0442\u0430\u0442\u044c\u0441\u044f \u043d\u0435\u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0438\u0437 \u0431\u0430\u0437\u044b, \u043a\u0430\u043a \u0435\u0441\u043b\u0438 \u0431\u044b \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u0431\u044b\u043b\u043e \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u044b\u043c (\u0430 \u043d\u0435 \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0442\u044c\u0441\u044f \u043a\u0430\u0436\u0434\u044b\u0439 \u0440\u0430\u0437). \u0421\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e, \u0432\u0441\u0435 \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u044b\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438 \u043f\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044e.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-v4/Materializations.md",sourceDirName:".",slug:"/Materializations",permalink:"/ru/Materializations",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/ru/Materializations.md",tags:[],version:"v4",lastUpdatedAt:1624461640,formattedLastUpdatedAt:"23.06.2021",frontMatter:{title:"\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438"},sidebar:"version-v4/learn",previous:{title:"\u041e\u0431\u0437\u043e\u0440",permalink:"/ru/Execution"},next:{title:"\u0418\u043d\u0434\u0435\u043a\u0441\u044b",permalink:"/ru/Indexes"}},p=[{value:"\u042f\u0437\u044b\u043a",id:"\u044f\u0437\u044b\u043a",children:[],level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:[],level:3}],s={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u041f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043b\u044e\u0431\u043e\u0435 \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0435 ",(0,a.kt)("a",{parentName:"p",href:"/ru/Properties"},"\u0441\u0432\u043e\u0439\u0441\u0442\u0432")," \u0432 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0435 \u043c\u043e\u0436\u043d\u043e ",(0,a.kt)("em",{parentName:"p"},"\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c"),". \u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u0431\u0443\u0434\u0435\u0442 \u0445\u0440\u0430\u043d\u0438\u0442\u044c\u0441\u044f \u0432 \u0431\u0430\u0437\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e \u0438 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u043f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445, \u043e\u0442 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u044d\u0442\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u0437\u0430\u0432\u0438\u0441\u0438\u0442. \u041f\u0440\u0438 \u044d\u0442\u043e\u043c \u043f\u0440\u0438 \u0447\u0442\u0435\u043d\u0438\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0442\u0430\u043a\u043e\u0433\u043e \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430, \u044d\u0442\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0431\u0443\u0434\u0443\u0442 \u0447\u0438\u0442\u0430\u0442\u044c\u0441\u044f \u043d\u0435\u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0438\u0437 \u0431\u0430\u0437\u044b, \u043a\u0430\u043a \u0435\u0441\u043b\u0438 \u0431\u044b \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u0431\u044b\u043b\u043e ",(0,a.kt)("a",{parentName:"p",href:"/ru/Data_properties_DATA"},"\u043f\u0435\u0440\u0432\u0438\u0447\u043d\u044b\u043c")," (\u0430 \u043d\u0435 \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0442\u044c\u0441\u044f \u043a\u0430\u0436\u0434\u044b\u0439 \u0440\u0430\u0437). \u0421\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e, \u0432\u0441\u0435 \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u044b\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438 \u043f\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044e."),(0,a.kt)("p",null,"\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u043c\u043e\u0436\u043d\u043e \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c, \u0442\u043e\u0433\u0434\u0430 \u0438 \u0442\u043e\u043b\u044c\u043a\u043e \u0442\u043e\u0433\u0434\u0430, \u043a\u043e\u0433\u0434\u0430 \u0434\u043b\u044f \u043d\u0435\u0433\u043e \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043d\u0430\u0431\u043e\u0440\u043e\u0432 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u044d\u0442\u043e\u0433\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u043d\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," (\u0442\u043e \u0435\u0441\u0442\u044c \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0438 \u043f\u043e \u0432\u0441\u0435\u043c \u0435\u0433\u043e \u043d\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c \u0431\u0443\u0434\u0435\u0442 ",(0,a.kt)("a",{parentName:"p",href:"/ru/Set_operations#correct"},"\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0439"),")"),(0,a.kt)("h3",{id:"\u044f\u0437\u044b\u043a"},"\u042f\u0437\u044b\u043a"),(0,a.kt)("p",null,"\u0414\u043b\u044f \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f ",(0,a.kt)("a",{parentName:"p",href:"/ru/Property_options#persistent"},"\u043e\u043f\u0446\u0438\u044f ",(0,a.kt)("inlineCode",{parentName:"a"},"MATERIALIZED"))," \u0432 \u043e\u043f\u0446\u0438\u044f\u0445 \u0441\u0432\u043e\u0439\u0441\u0442\u0432."),(0,a.kt)("h3",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"sum = GROUP SUM sum(OrderDetail od) BY order(od) MATERIALIZED;\ndate(OrderDetail od) = date(order(od)) MATERIALIZED;\n\n // \u0442\u0430\u043a\u043e\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u043d\u0435\u043b\u044c\u0437\u044f \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c, \u0442\u0430\u043a \u043a\u0430\u043a \u043e\u043d\u043e \u043d\u0435 NULL \u0434\u043b\u044f \u0431\u0435\u0441\u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430 \u0434\u0430\u0442\nlastDate(Customer customer, DATE date) = GROUP LAST date(Order order) IF customer(order) = customer AND date(order) < date;\n")))}d.isMDXComponent=!0}}]);