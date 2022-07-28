"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[78114],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),i=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=i(n),k=o,m=c["".concat(p,".").concat(k)]||c[k]||d[k]||r;return n?a.createElement(m,l(l({ref:t},s),{},{components:n})):a.createElement(m,l({ref:t},s))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=c;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var i=2;i<r;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},80709:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return r},metadata:function(){return u},toc:function(){return i}});var a=n(83117),o=(n(67294),n(3905));const r={title:"How-to: CASE/IF/OVERRIDE"},l=void 0,u={unversionedId:"How-to_CASE_IF_OVERRIDE",id:"How-to_CASE_IF_OVERRIDE",title:"How-to: CASE/IF/OVERRIDE",description:"Example 1",source:"@site/docs/How-to_CASE_IF_OVERRIDE.md",sourceDirName:".",slug:"/How-to_CASE_IF_OVERRIDE",permalink:"/next/How-to_CASE_IF_OVERRIDE",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/How-to_CASE_IF_OVERRIDE.md",tags:[],version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"How-to: CASE/IF/OVERRIDE"},sidebar:"learn",previous:{title:"How-to: GROUP MAX/MIN/AGGR",permalink:"/next/How-to_GROUP_MAX_MIN_AGGR"},next:{title:"How-to: GROUP LAST",permalink:"/next/How-to_GROUP_LAST"}},p={},i=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3},{value:"Example 3",id:"example-3",level:2},{value:"Task",id:"task-2",level:3},{value:"Solution",id:"solution-2",level:3},{value:"Example 4",id:"example-4",level:2},{value:"Task",id:"task-3",level:3},{value:"Solution",id:"solution-3",level:3},{value:"Example 5",id:"example-5",level:2},{value:"Task",id:"task-4",level:3},{value:"Solution",id:"solution-4",level:3}],s={toc:i};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"example-1"},"Example 1"),(0,o.kt)("h3",{id:"task"},"Task"),(0,o.kt)("p",null,"We have a set of white books and black books."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Color 'Color' {\n    white 'White',\n    black 'Black'\n}\n\nCLASS Book 'Book';\n\ncolor 'Color' = DATA Color (Book);\n")),(0,o.kt)("p",null,"We need to define a property that returns the color of a given book."),(0,o.kt)("h3",{id:"solution"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"// Option 1\nnameColor1 'Color' (Book b) = staticCaption(color(b));\n\n// Option 2\nnameColor2 'Color' (Book b) = IF color(b) == Color.white THEN 'White' ELSE 'Black';\n")),(0,o.kt)("p",null,"These two expressions provide identical results."),(0,o.kt)("h2",{id:"example-2"},"Example 2"),(0,o.kt)("h3",{id:"task-1"},"Task"),(0,o.kt)("p",null,"We have multiple purchase orders to suppliers for books. For each purchase order defined it's status if it was placed, agreed and delivered. In this example these statuses are declared as ",(0,o.kt)("a",{parentName:"p",href:"/next/Data_properties_DATA"},"data")," properties, but in more sophisticated cases they may be calculated."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Order 'Order';\n\nsent 'Sent' = DATA BOOLEAN (Order);\nagreed 'Agreed' = DATA BOOLEAN (Order);\naccepted 'Accepted' = DATA BOOLEAN (Order);\n")),(0,o.kt)("p",null,"We need to obtain the current status of an order."),(0,o.kt)("h3",{id:"solution-1"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"// Option 1\nnameStatus1 'Status' (Order o) = CASE WHEN accepted(o) THEN 'Accepted'\n                                     WHEN agreed(o) THEN 'Agreed'\n                                     WHEN sent(o) THEN 'Sent'\n                                ELSE 'New';\n\n// Option 2\nCLASS Status 'Status' {\n    new 'New',\n    sent 'Sent',\n    agreed 'Agreed',\n    accepted 'Accepted'\n}\n\nstatus 'Status' (Order o) = CASE WHEN accepted(o) THEN Status.accepted\n                                 WHEN agreed(o) THEN Status.agreed\n                                 WHEN sent(o) THEN Status.sent\n                            ELSE Status.new;\nnameStatus2 'Status' (Order o) = staticCaption(status(o));\n")),(0,o.kt)("h2",{id:"example-3"},"Example 3"),(0,o.kt)("h3",{id:"task-2"},"Task"),(0,o.kt)("p",null,"We have a set of books described in ",(0,o.kt)("a",{parentName:"p",href:"#example-1"},(0,o.kt)("strong",{parentName:"a"},"Example 1")),"."),(0,o.kt)("p",null,"We need to set a markup for the book and also provide an option for setting a default value."),(0,o.kt)("h3",{id:"solution-2"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"dataMarkup 'Markup, %' = DATA NUMERIC[6,2] (Book);\n\ndefaultMarkup 'Default markup' = DATA NUMERIC[6,2] ();\n\nmarkup1 'Markup, %' (Book b) = OVERRIDE dataMarkup(b), defaultMarkup();\n\n// Equivalent to:\nmarkup2 'Markup, %' (Book b) = IF dataMarkup(b) THEN dataMarkup(b) ELSE defaultMarkup();\n")),(0,o.kt)("h2",{id:"example-4"},"Example 4"),(0,o.kt)("h3",{id:"task-3"},"Task"),(0,o.kt)("p",null,"The same set of books from ",(0,o.kt)("a",{parentName:"p",href:"#example-1"},(0,o.kt)("strong",{parentName:"a"},"Example 1")),", but categorized."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Category 'Category';\n\ncategory 'Category' = DATA Category (Book);\n")),(0,o.kt)("p",null,"We need to set a markup for a book and also provide an option for setting a default value for the corresponding category."),(0,o.kt)("h3",{id:"solution-3"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"markup 'Markup, %' = DATA NUMERIC[6,2] (Category);\n\nmarkup 'Markup, %' (Book b) = OVERRIDE dataMarkup(b), markup(category(b));\n")),(0,o.kt)("h2",{id:"example-5"},"Example 5"),(0,o.kt)("h3",{id:"task-4"},"Task"),(0,o.kt)("p",null,"We have a set of enumerated books."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"number 'Number' = DATA INTEGER (Book);\n")),(0,o.kt)("p",null,"We need to find the number following the maximum book number."),(0,o.kt)("h3",{id:"solution-4"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"freeNumber1 () = (GROUP MAX number(Book b)) (+) 1;\n\n// Equivalent to:\nfreeNumber2() = (OVERRIDE 0, (GROUP MAX number(Book b))) + 1;\n")),(0,o.kt)("p",null,"We use the operator ",(0,o.kt)("inlineCode",{parentName:"p"},"(+)")," instead of the regular operator ",(0,o.kt)("inlineCode",{parentName:"p"},"+"),", because otherwise if no books are found, then the standard increment by ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," will return ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL"),"."))}d.isMDXComponent=!0}}]);