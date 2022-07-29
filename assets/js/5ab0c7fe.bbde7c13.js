"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[54706],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),k=r,m=c["".concat(s,".").concat(k)]||c[k]||u[k]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},76541:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return d}});var o=n(83117),r=(n(67294),n(3905));const a={title:"How-to: FOR"},i=void 0,l={unversionedId:"How-to_FOR",id:"version-v4/How-to_FOR",title:"How-to: FOR",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_FOR.md",sourceDirName:".",slug:"/How-to_FOR",permalink:"/How-to_FOR",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/How-to_FOR.md",tags:[],version:"v4",lastUpdatedAt:1619768637,formattedLastUpdatedAt:"Apr 30, 2021",frontMatter:{title:"How-to: FOR"},sidebar:"version-v4/learn",previous:{title:"How-to: DELETE",permalink:"/How-to_DELETE"},next:{title:"How-to: IF/CASE",permalink:"/How-to_IF_CASE"}},s={},d=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Task",id:"task-1",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-2",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 3",id:"example-3",level:2},{value:"Task",id:"task-3",level:3},{value:"Solution",id:"solution-1",level:3},{value:"Example 4",id:"example-4",level:2},{value:"Task",id:"task-4",level:3},{value:"Solution",id:"solution-2",level:3}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"example-1"},"Example 1"),(0,r.kt)("h3",{id:"task"},"Task"),(0,r.kt)("p",null,"We have a list of books with titles."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[50] (Book);\n\nFORM books 'Books'\n    OBJECTS b = Book\n    PROPERTIES(b) name, NEW, DELETE\n;\n\nNAVIGATOR {\n    NEW books;\n}\n")),(0,r.kt)("p",null,"We need to find all the books containing a given line and display a message with their names and internal codes."),(0,r.kt)("h3",{id:"task-1"},"Task"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"findNemo 'Find book' ()  {\n    FOR isSubstring(name(Book b), 'Nemo') DO {\n        MESSAGE 'Found book ' + name (b) + ' with internal code ' + b;\n    }\n}\nEXTEND FORM books\n    PROPERTIES() findNemo\n;\n")),(0,r.kt)("p",null,"Use the isSubstring property (defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Utils")," system ",(0,r.kt)("a",{parentName:"p",href:"/Modules"},"module"),") to identify whether a given line contains another line."),(0,r.kt)("h2",{id:"example-2"},"Example 2"),(0,r.kt)("h3",{id:"task-2"},"Task"),(0,r.kt)("p",null,"Similar to ",(0,r.kt)("a",{parentName:"p",href:"#example-1"},(0,r.kt)("strong",{parentName:"a"},"Example 1")),"."),(0,r.kt)("p",null,"We need to create an action that creates 100 new books with certain titles."),(0,r.kt)("h3",{id:"solution"},"Solution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"add100Books 'Add 100 books' ()  {\n    // Option 1\n    FOR iterate(INTEGER i, 1, 100) NEW b = Book DO {\n        name(b) <- 'Book ' + i;\n    }\n\n    // Option 2\n    FOR iterate(INTEGER i, 1, 100) DO {\n        NEW b = Book {\n            name(b) <- 'Book ' + i;\n        }\n    }\n}\n\nEXTEND FORM books\n    PROPERTIES() add100Books\n;\n")),(0,r.kt)("p",null,"Both these implementations will provide the same result."),(0,r.kt)("p",null,"To solve this task, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"iterate")," property (defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Utils")," system module) which returns ",(0,r.kt)("inlineCode",{parentName:"p"},"TRUE")," for all integers in the range."),(0,r.kt)("h2",{id:"example-3"},"Example 3"),(0,r.kt)("h3",{id:"task-3"},"Task"),(0,r.kt)("p",null,"Similar to ",(0,r.kt)("a",{parentName:"p",href:"#example-1"},(0,r.kt)("strong",{parentName:"a"},"Example 1")),", but with the order logic. Each order contains lines where books and discount prices are specified."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Order 'Order';\n\nCLASS OrderDetail 'Order line';\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\nbook 'Book' = DATA Book (OrderDetail);\nnameBook 'Book' (OrderDetail d) = name(book(d));\n\nprice 'Price' = DATA NUMERIC[14,2] (OrderDetail);\n\ndiscount 'Discount, %' = DATA NUMERIC[8,2] (OrderDetail);\ndiscountPrice 'Discount price' = DATA NUMERIC[14,2] (OrderDetail);\n")),(0,r.kt)("p",null,"We need to create an action that applies a discount to all the lines with prices above 100."),(0,r.kt)("h3",{id:"solution-1"},"Solution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"makeDiscount 'Make discount' (Order o)  {\n    // Option 1\n    FOR order(OrderDetail d) == o AND price(d) > 100 DO {\n        discount(d) <- 10;\n        discountPrice(d) <- price(d) * (100.0 - discount(d)) / 100.0;\n    }\n\n    // Option 2\n    discount(OrderDetail d) <- 10 WHERE order(d) == o AND price(d) > 100;\n    discountPrice(OrderDetail d) <- price(d) * (100.0 - discount(d)) / 100.0 WHERE order(d) == o AND price(d) > 100;\n}\n")),(0,r.kt)("p",null,"Both these implementations will provide the same result."),(0,r.kt)("h2",{id:"example-4"},"Example 4"),(0,r.kt)("h3",{id:"task-4"},"Task"),(0,r.kt)("p",null,"Similar to ",(0,r.kt)("a",{parentName:"p",href:"#example-3"},(0,r.kt)("strong",{parentName:"a"},"Example 3")),", but a default price was added for each book."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"price 'Price' = DATA NUMERIC[14,2] (Book);\n")),(0,r.kt)("p",null,"We need to create an action that adds all the books with prices above 100 to the order."),(0,r.kt)("h3",{id:"solution-2"},"Solution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"addSelectedBooks 'Add marked books' (Order o)  {\n    // Option 1\n    FOR price(Book b) > 100 NEW d = OrderDetail DO {\n        order(d) <- o;\n        book(d) <- b;\n        price(d) <- price(b);\n    }\n\n    // Option 2\n    FOR price(Book b) == NUMERIC[14,2] p AND p > 100 NEW d = OrderDetail DO {\n        order(d) <- o;\n        book(d) <- b;\n        price(d) <- p;\n    }\n}\n")),(0,r.kt)("p",null,"Both these implementations will provide the same result."))}u.isMDXComponent=!0}}]);