(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[48890],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),k=o,m=u["".concat(d,".").concat(k)]||u[k]||c[k]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37582:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=n(74034),o=n(79973),a=(n(67294),n(3905)),i=["components"],l={title:"How-to: FOR"},d=void 0,s={unversionedId:"How-to_FOR",id:"How-to_FOR",isDocsHomePage:!1,title:"How-to: FOR",description:"Example 1",source:"@site/docs/How-to_FOR.md",sourceDirName:".",slug:"/How-to_FOR",permalink:"/next/How-to_FOR",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/How-to_FOR.md",tags:[],version:"current",lastUpdatedAt:1622042248,formattedLastUpdatedAt:"5/26/2021",frontMatter:{title:"How-to: FOR"},sidebar:"learn",previous:{title:"How-to: DELETE",permalink:"/next/How-to_DELETE"},next:{title:"How-to: IF/CASE",permalink:"/next/How-to_IF_CASE"}},p=[{value:"Example 1",id:"example-1",children:[{value:"Task",id:"task",children:[],level:3},{value:"Task",id:"task-1",children:[],level:3}],level:2},{value:"Example 2",id:"example-2",children:[{value:"Task",id:"task-2",children:[],level:3},{value:"Solution",id:"solution",children:[],level:3}],level:2},{value:"Example 3",id:"example-3",children:[{value:"Task",id:"task-3",children:[],level:3},{value:"Solution",id:"solution-1",children:[],level:3}],level:2},{value:"Example 4",id:"example-4",children:[{value:"Task",id:"task-4",children:[],level:3},{value:"Solution",id:"solution-2",children:[],level:3}],level:2}],c={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"example-1"},"Example 1"),(0,a.kt)("h3",{id:"task"},"Task"),(0,a.kt)("p",null,"We have a list of books with titles."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[50] (Book);\n\nFORM books 'Books'\n    OBJECTS b = Book\n    PROPERTIES(b) name, NEW, DELETE\n;\n\nNAVIGATOR {\n    NEW books;\n}\n")),(0,a.kt)("p",null,"We need to find all the books containing a given line and display a message with their names and internal codes."),(0,a.kt)("h3",{id:"task-1"},"Task"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"findNemo 'Find book' ()  {\n    FOR isSubstring(name(Book b), 'Nemo') DO {\n        MESSAGE 'Found book ' + name (b) + ' with internal code ' + b;\n    }\n}\nEXTEND FORM books\n    PROPERTIES() findNemo\n;\n")),(0,a.kt)("p",null,"Use the isSubstring property (defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Utils")," system ",(0,a.kt)("a",{parentName:"p",href:"/next/Modules"},"module"),") to identify whether a given line contains another line."),(0,a.kt)("h2",{id:"example-2"},"Example 2"),(0,a.kt)("h3",{id:"task-2"},"Task"),(0,a.kt)("p",null,"Similar to ",(0,a.kt)("a",{parentName:"p",href:"#example-1"},(0,a.kt)("strong",{parentName:"a"},"Example 1")),"."),(0,a.kt)("p",null,"We need to create an action that creates 100 new books with certain titles."),(0,a.kt)("h3",{id:"solution"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"add100Books 'Add 100 books' ()  {\n    // Option 1\n    FOR iterate(INTEGER i, 1, 100) NEW b = Book DO {\n        name(b) <- 'Book ' + i;\n    }\n\n    // Option 2\n    FOR iterate(INTEGER i, 1, 100) DO {\n        NEW b = Book {\n            name(b) <- 'Book ' + i;\n        }\n    }\n}\n\nEXTEND FORM books\n    PROPERTIES() add100Books\n;\n")),(0,a.kt)("p",null,"Both these implementations will provide the same result."),(0,a.kt)("p",null,"To solve this task, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"iterate")," property (defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Utils")," system module) which returns ",(0,a.kt)("inlineCode",{parentName:"p"},"TRUE")," for all integers in the range."),(0,a.kt)("h2",{id:"example-3"},"Example 3"),(0,a.kt)("h3",{id:"task-3"},"Task"),(0,a.kt)("p",null,"Similar to ",(0,a.kt)("a",{parentName:"p",href:"#example-1"},(0,a.kt)("strong",{parentName:"a"},"Example 1")),", but with the order logic. Each order contains lines where books and discount prices are specified."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Order 'Order';\n\nCLASS OrderDetail 'Order line';\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\nbook 'Book' = DATA Book (OrderDetail);\nnameBook 'Book' (OrderDetail d) = name(book(d));\n\nprice 'Price' = DATA NUMERIC[14,2] (OrderDetail);\n\ndiscount 'Discount, %' = DATA NUMERIC[8,2] (OrderDetail);\ndiscountPrice 'Discount price' = DATA NUMERIC[14,2] (OrderDetail);\n")),(0,a.kt)("p",null,"We need to create an action that applies a discount to all the lines with prices above 100."),(0,a.kt)("h3",{id:"solution-1"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"makeDiscount 'Make discount' (Order o)  {\n    // Option 1\n    FOR order(OrderDetail d) == o AND price(d) > 100 DO {\n        discount(d) <- 10;\n        discountPrice(d) <- price(d) * (100.0 - discount(d)) / 100.0;\n    }\n\n    // Option 2\n    discount(OrderDetail d) <- 10 WHERE order(d) == o AND price(d) > 100;\n    discountPrice(OrderDetail d) <- price(d) * (100.0 - discount(d)) / 100.0 WHERE order(d) == o AND price(d) > 100;\n}\n")),(0,a.kt)("p",null,"Both these implementations will provide the same result."),(0,a.kt)("h2",{id:"example-4"},"Example 4"),(0,a.kt)("h3",{id:"task-4"},"Task"),(0,a.kt)("p",null,"Similar to ",(0,a.kt)("a",{parentName:"p",href:"#example-3"},(0,a.kt)("strong",{parentName:"a"},"Example 3")),", but a default price was added for each book."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"price 'Price' = DATA NUMERIC[14,2] (Book);\n")),(0,a.kt)("p",null,"We need to create an action that adds all the books with prices above 100 to the order."),(0,a.kt)("h3",{id:"solution-2"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"addSelectedBooks 'Add marked books' (Order o)  {\n    // Option 1\n    FOR price(Book b) > 100 NEW d = OrderDetail DO {\n        order(d) <- o;\n        book(d) <- b;\n        price(d) <- price(b);\n    }\n\n    // Option 2\n    FOR price(Book b) == NUMERIC[14,2] p AND p > 100 NEW d = OrderDetail DO {\n        order(d) <- o;\n        book(d) <- b;\n        price(d) <- p;\n    }\n}\n")),(0,a.kt)("p",null,"Both these implementations will provide the same result."))}u.isMDXComponent=!0}}]);