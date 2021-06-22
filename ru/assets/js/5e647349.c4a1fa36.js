(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[52169],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},N={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=u(n),c=a,s=m["".concat(p,".").concat(c)]||m[c]||N[c]||l;return n?r.createElement(s,i(i({ref:t},d),{},{components:n})):r.createElement(s,i({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67129:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p},default:function(){return d}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),i={title:"\u041b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b (AND, OR, NOT, XOR)"},o={unversionedId:"Logical_operators_AND_OR_NOT_XOR",id:"version-v4/Logical_operators_AND_OR_NOT_XOR",isDocsHomePage:!1,title:"\u041b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b (AND, OR, NOT, XOR)",description:"\u041b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0440\u0430\u0441\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u044e\u0442 \u0441\u0432\u043e\u0438 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u043a\u0430\u043a \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043a\u043b\u0430\u0441\u0441\u0430 BOOLEAN, \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0442\u0430\u043a\u0436\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043a\u043b\u0430\u0441\u0441\u0430 BOOLEAN. \u0415\u0441\u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430 \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u043d\u0435 \u0440\u0430\u0432\u043d\u043e NULL, \u0442\u043e \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 \u0440\u0430\u0441\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 TRUE \u043a\u043b\u0430\u0441\u0441\u0430 BOOLEAN, \u0438\u043d\u0430\u0447\u0435 NULL.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-v4/Logical_operators_AND_OR_NOT_XOR.md",sourceDirName:".",slug:"/Logical_operators_AND_OR_NOT_XOR",permalink:"/ru/Logical_operators_AND_OR_NOT_XOR",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/ru/Logical_operators_AND_OR_NOT_XOR.md",version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"09.06.2021",frontMatter:{title:"\u041b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b (AND, OR, NOT, XOR)"},sidebar:"version-v4/learn",previous:{title:"\u0410\u0440\u0438\u0444\u043c\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b (+, -, *, ...)",permalink:"/ru/Arithmetic_operators_+_-_etc"},next:{title:"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f (=, >, <, ...)",permalink:"/ru/Comparison_operators_=_etc"}},p=[{value:"\u042f\u0437\u044b\u043a",id:"\u044f\u0437\u044b\u043a",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\u041b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b")," \u0441\u043e\u0437\u0434\u0430\u044e\u0442 ",(0,l.kt)("a",{parentName:"p",href:"/ru/Properties"},"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0440\u0430\u0441\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u044e\u0442 \u0441\u0432\u043e\u0438 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u043a\u0430\u043a \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f ",(0,l.kt)("a",{parentName:"p",href:"/ru/Built-in_classes"},"\u043a\u043b\u0430\u0441\u0441\u0430 ",(0,l.kt)("inlineCode",{parentName:"a"},"BOOLEAN")),", \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0442\u0430\u043a\u0436\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043a\u043b\u0430\u0441\u0441\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"BOOLEAN"),". \u0415\u0441\u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430 \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u043d\u0435 \u0440\u0430\u0432\u043d\u043e ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL"),", \u0442\u043e \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 \u0440\u0430\u0441\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"TRUE")," \u043a\u043b\u0430\u0441\u0441\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"BOOLEAN"),", \u0438\u043d\u0430\u0447\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,l.kt)("p",null,"\u0412 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0435 \u043d\u0430 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440"),(0,l.kt)("th",{parentName:"tr",align:null},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,l.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,l.kt)("th",{parentName:"tr",align:null},"\u041f\u0440\u0438\u043c\u0435\u0440"),(0,l.kt)("th",{parentName:"tr",align:null},"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"AND")),(0,l.kt)("td",{parentName:"tr",align:null},"\u041a\u043e\u043d\u044c\u044e\u043d\u043a\u0446\u0438\u044f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u041f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u0434\u0432\u0430 \u043e\u043f\u0435\u0440\u0430\u043d\u0434\u0430 \u043d\u0430 \u0432\u0445\u043e\u0434, \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 ",(0,l.kt)("inlineCode",{parentName:"td"},"TRUE"),", \u0435\u0441\u043b\u0438 \u043e\u0431\u0430 \u043e\u043f\u0435\u0440\u0430\u043d\u0434\u0430 \u043d\u0435 ",(0,l.kt)("inlineCode",{parentName:"td"},"NULL")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TRUE AND TRUE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TRUE"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"OR")),(0,l.kt)("td",{parentName:"tr",align:null},"\u0414\u0438\u0437\u044c\u044e\u043d\u043a\u0446\u0438\u044f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u041f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u0434\u0432\u0430 \u043e\u043f\u0435\u0440\u0430\u043d\u0434\u0430 \u043d\u0430 \u0432\u0445\u043e\u0434, \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 ",(0,l.kt)("inlineCode",{parentName:"td"},"TRUE"),", \u0435\u0441\u043b\u0438 \u043e\u0434\u0438\u043d \u0438\u0437 \u043e\u043f\u0435\u0440\u0430\u043d\u0434\u043e\u0432 \u043d\u0435 ",(0,l.kt)("inlineCode",{parentName:"td"},"NULL")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NULL OR TRUE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TRUE"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NOT")),(0,l.kt)("td",{parentName:"tr",align:null},"\u041e\u0442\u0440\u0438\u0446\u0430\u043d\u0438\u0435"),(0,l.kt)("td",{parentName:"tr",align:null},"\u041f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u043e\u0434\u0438\u043d \u043e\u043f\u0435\u0440\u0430\u043d\u0434 \u043d\u0430 \u0432\u0445\u043e\u0434, \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 ",(0,l.kt)("inlineCode",{parentName:"td"},"TRUE"),", \u0435\u0441\u043b\u0438 \u043e\u043f\u0435\u0440\u0430\u043d\u0434 ",(0,l.kt)("inlineCode",{parentName:"td"},"NULL")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NOT TRUE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NULL"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"XOR")),(0,l.kt)("td",{parentName:"tr",align:null},"\u0418\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435"),(0,l.kt)("td",{parentName:"tr",align:null},"\u041f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u0434\u0432\u0430 \u043e\u043f\u0435\u0440\u0430\u043d\u0434\u0430 \u043d\u0430 \u0432\u0445\u043e\u0434, \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 ",(0,l.kt)("inlineCode",{parentName:"td"},"TRUE"),", \u0435\u0441\u043b\u0438 \u0440\u043e\u0432\u043d\u043e \u043e\u0434\u0438\u043d \u0438\u0437 \u043e\u043f\u0435\u0440\u0430\u043d\u0434\u043e\u0432 \u043d\u0435 ",(0,l.kt)("inlineCode",{parentName:"td"},"NULL")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TRUE XOR TRUE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NULL"))))),(0,l.kt)("h3",{id:"\u044f\u0437\u044b\u043a"},"\u042f\u0437\u044b\u043a"),(0,l.kt)("p",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 ",(0,l.kt)("a",{parentName:"p",href:"/ru/AND_OR_NOT_XOR_operators"},"\u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441\u0430 \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u043e\u0432"),"."),(0,l.kt)("h3",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lsf"},"likes = DATA BOOLEAN (Person, Person);\nlikes(Person a, Person b, Person c) = likes(a, b) AND likes(a, c);\noutOfInterval1(value, left, right) = value < left OR value > right;\noutOfInterval2(value, left, right) = NOT (value >= left AND value <= right);\n")))}d.isMDXComponent=!0}}]);