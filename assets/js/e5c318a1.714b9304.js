"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[39579],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),s=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(a,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},95920:function(e,t,r){r.r(t),r.d(t,{assets:function(){return a},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var n=r(83117),o=(r(67294),r(3905));const i={title:"Search (SEEK)"},l=void 0,c={unversionedId:"Search_SEEK",id:"version-v4/Search_SEEK",title:"Search (SEEK)",description:"Search operator tries to make the specified object collection current for the specified form object group. The objects from the specified object collection shall be called seek objects.",source:"@site/versioned_docs/version-v4/Search_SEEK.md",sourceDirName:".",slug:"/Search_SEEK",permalink:"/Search_SEEK",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Search_SEEK.md",tags:[],version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Search (SEEK)"},sidebar:"version-v4/learn",previous:{title:"Object group operators",permalink:"/Object_group_operators"},next:{title:"Filter (FILTER)",permalink:"/Filter_FILTER"}},a={},s=[{value:"Seek direction",id:"direction",level:3},{value:"Setting <code>NULL</code> Values",id:"setting-null-values",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Search")," operator tries to make the specified object collection ",(0,o.kt)("a",{parentName:"p",href:"/Form_structure#currentObject"},"current")," for the specified form object group. The objects from the specified object collection shall be called ",(0,o.kt)("em",{parentName:"p"},"seek objects"),"."),(0,o.kt)("h3",{id:"direction"},"Seek direction"),(0,o.kt)("p",null,"If the object group for which the search is performed contains objects other than search objects, for these objects (which we will call ",(0,o.kt)("em",{parentName:"p"},"additional"),") the collection of objects that will be selected as current is determined by special options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"FIRST")," - the ",(0,o.kt)("strong",{parentName:"li"},"first")," matching collection according to the specified order will be selected. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"LAST")," - the ",(0,o.kt)("strong",{parentName:"li"},"last")," matching collection according to the specified order will be selected. ")),(0,o.kt)("p",null,"If the required object collection is not found for the seek objects, the current object collection will be the closest to the desired one. The direction in which this closest object collection will be selected is also determined by the above options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"FIRST")," - the ",(0,o.kt)("strong",{parentName:"li"},"next")," closest collection according to the specified order will be selected. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"LAST")," - the ",(0,o.kt)("strong",{parentName:"li"},"previous")," closest collection according to the specified order will be selected. ")),(0,o.kt)("h3",{id:"setting-null-values"},"Setting ",(0,o.kt)("inlineCode",{parentName:"h3"},"NULL")," Values"),(0,o.kt)("p",null,"Also, this operator allows resetting all objects of the specified group to ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL"),". In this case, the seek direction is not applicable/not specified."),(0,o.kt)("h3",{id:"language"},"Language"),(0,o.kt)("p",null,"To declare an action that implements an object change, use the ",(0,o.kt)("a",{parentName:"p",href:"/SEEK_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"SEEK")," operator"),"."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"number = DATA INTEGER (Order);\nFORM orders\n    OBJECTS o = Order\n    PROPERTIES(o) READONLY number, currency, customer\n;\nnewOrder  {\n    NEW new = Order {\n        number(new) <- (GROUP MAX number(Order o)) (+) 1;\n        SEEK orders.o = new;\n    }\n}\nseekFirst  { SEEK FIRST orders.o; }\nseekLast  { SEEK LAST orders.o; }\n\nEXTEND FORM orders\n    PROPERTIES(o) newOrder, seekFirst, seekLast\n;\n")))}u.isMDXComponent=!0}}]);