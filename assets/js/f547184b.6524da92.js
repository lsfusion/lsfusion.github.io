"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[68315],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return k}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),k=o,m=d["".concat(s,".").concat(k)]||d[k]||u[k]||r;return a?n.createElement(m,l(l({ref:t},c),{},{components:a})):n.createElement(m,l({ref:t},c))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},50004:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return p}});var n=a(83117),o=(a(67294),a(3905));const r={title:"How-to: GROUP LAST"},l=void 0,i={unversionedId:"How-to_GROUP_LAST",id:"How-to_GROUP_LAST",title:"How-to: GROUP LAST",description:"Example 1",source:"@site/docs/How-to_GROUP_LAST.md",sourceDirName:".",slug:"/How-to_GROUP_LAST",permalink:"/next/How-to_GROUP_LAST",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/How-to_GROUP_LAST.md",tags:[],version:"current",lastUpdatedAt:1622042248,formattedLastUpdatedAt:"5/26/2021",frontMatter:{title:"How-to: GROUP LAST"},sidebar:"learn",previous:{title:"How-to: CASE/IF/OVERRIDE",permalink:"/next/How-to_CASE_IF_OVERRIDE"},next:{title:"How-to: GROUP CONCAT",permalink:"/next/How-to_GROUP_CONCAT"}},s={},p=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3},{value:"Example 3",id:"example-3",level:2},{value:"Task",id:"task-2",level:3},{value:"Solution",id:"solution-2",level:3},{value:"Example 4",id:"example-4",level:2},{value:"Task",id:"task-3",level:3},{value:"Solution",id:"solution-3",level:3},{value:"Example 5",id:"example-5",level:2},{value:"Task",id:"task-4",level:3},{value:"Solution",id:"solution-4",level:3}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"example-1"},"Example 1"),(0,o.kt)("h3",{id:"task"},"Task"),(0,o.kt)("p",null,"We have a set of books associated with a certain category, and the dates of their receipt."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nCLASS Category 'Category';\n\ncategory 'Category' = DATA Category (Book);\ndate 'Arrival date' = DATA DATE (Book);\n")),(0,o.kt)("p",null,"We need to find the latest received book in the selected category."),(0,o.kt)("h3",{id:"solution"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"book 'Last book' (Category c) = GROUP LAST Book b ORDER date(b), b BY category(b);\n")),(0,o.kt)("p",null,"It is important to remember that order in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ORDER")," clause should be uniquely determined. To do this, the book (specifically, its internal ID) should be used as the second parameter since several books may have the same date of receipt."),(0,o.kt)("h2",{id:"example-2"},"Example 2"),(0,o.kt)("h3",{id:"task-1"},"Task"),(0,o.kt)("p",null,"Similar to ",(0,o.kt)("a",{parentName:"p",href:"#example-1"},(0,o.kt)("strong",{parentName:"a"},"Example 1")),", but the author and genre list are specified for each book."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Author 'Author';\nCLASS Genre 'Genre';\n\nauthor 'Author' = DATA Author (Book);\ngenre 'Genre' = DATA Genre (Book);\nin 'On' = DATA BOOLEAN (Book, Genre);\n")),(0,o.kt)("p",null,"We need to find the most popular category by author and genre."),(0,o.kt)("h3",{id:"solution-1"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"countBooks 'Number of books' (Category c, Author a, Genre g) = GROUP SUM 1 IF in(Book b, g) BY category(b), author(b);\n\ncategory (Author a, Genre g) = GROUP LAST Category c ORDER countBooks(c, a, g), c WHERE countBooks(c, a, g);\n")),(0,o.kt)("h2",{id:"example-3"},"Example 3"),(0,o.kt)("h3",{id:"task-2"},"Task"),(0,o.kt)("p",null,"We have a certain set of books and the information about price changes per book and warehouse. Each object of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Ledger")," class reflects a single change in price since a specific date."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Stock 'Warehouse';\n\nCLASS Ledger 'Price change';\ndate = DATA DATE (Ledger);\nstock = DATA Stock (Ledger);\nbook = DATA Book (Ledger);\n\nprice = DATA NUMERIC[10,2] (Ledger);\n")),(0,o.kt)("p",null,"We need to identify the current price for a given book at the warehouse."),(0,o.kt)("h3",{id:"solution-2"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"currentPrice (Book b, Stock s) = GROUP LAST price(Ledger l) ORDER date(l), l BY book(l), stock(l);//#solution3\n")),(0,o.kt)("h2",{id:"example-4"},"Example 4"),(0,o.kt)("h3",{id:"task-3"},"Task"),(0,o.kt)("p",null,"Similar to ",(0,o.kt)("a",{parentName:"p",href:"#example-3"},(0,o.kt)("strong",{parentName:"a"},"Example 3")),"."),(0,o.kt)("p",null,"We need to find the price valid for a specific date for a book at the warehouse."),(0,o.kt)("h3",{id:"solution-3"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"price (Book b, Stock s, DATE d) = GROUP LAST price(Ledger l) ORDER date(l), l WHERE date(l) <= d BY book(l), stock(l);\n")),(0,o.kt)("h2",{id:"example-5"},"Example 5"),(0,o.kt)("h3",{id:"task-4"},"Task"),(0,o.kt)("p",null,"Similar to ",(0,o.kt)("a",{parentName:"p",href:"#example-4"},(0,o.kt)("strong",{parentName:"a"},"Example 4")),", except that a change in price has an expiration date. If this date is not specified, then the price is not limited in time."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"dateTo 'Valid until (inclusive)' = DATA DATE (Ledger);\n")),(0,o.kt)("h3",{id:"solution-4"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"currentPriceDate (Book b, Stock s) = GROUP LAST price(Ledger l) ORDER date(l), l WHERE NOT dateTo(l) < currentDate() BY book(l), stock(l);\npriceDate(Book b, Stock s, DATE d) = GROUP LAST price(Ledger l) ORDER date(l), l WHERE date(l) <= d AND NOT dateTo(l) < d BY book(l), stock(l);\n")),(0,o.kt)("p",null,"Note that the expression ",(0,o.kt)("inlineCode",{parentName:"p"},"NOT dateTo(l) < date")," does not always mean the same as ",(0,o.kt)("inlineCode",{parentName:"p"},"dateTo(l) >= date"),". The difference occurs when the value ",(0,o.kt)("inlineCode",{parentName:"p"},"dateTo(l)")," equals ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL"),". In the first case, ",(0,o.kt)("inlineCode",{parentName:"p"},"dateTo(l) < date")," equals ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL")," (i. e. false), while ",(0,o.kt)("inlineCode",{parentName:"p"},"NOT NULL")," equals ",(0,o.kt)("inlineCode",{parentName:"p"},"TRUE"),". In the second case, the expression obviously equals ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL")," (i. e. false)."))}u.isMDXComponent=!0}}]);