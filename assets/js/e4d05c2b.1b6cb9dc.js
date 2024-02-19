"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[92717],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return k}});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(a),k=n,m=d["".concat(s,".").concat(k)]||d[k]||p[k]||r;return a?o.createElement(m,l(l({ref:t},c),{},{components:a})):o.createElement(m,l({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<r;u++)l[u]=a[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},15717:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return u}});var o=a(83117),n=(a(67294),a(3905));const r={title:"How-to: GROUP SUM"},l=void 0,i={unversionedId:"How-to_GROUP_SUM",id:"version-v4/How-to_GROUP_SUM",title:"How-to: GROUP SUM",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_GROUP_SUM.md",sourceDirName:".",slug:"/How-to_GROUP_SUM",permalink:"/v4/How-to_GROUP_SUM",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/How-to_GROUP_SUM.md",tags:[],version:"v4",lastUpdatedAt:1619709222,formattedLastUpdatedAt:"Apr 29, 2021",frontMatter:{title:"How-to: GROUP SUM"},sidebar:"learn",previous:{title:"How-to: Computations",permalink:"/v4/How-to_Computations"},next:{title:"How-to: GROUP MAX/MIN/AGGR",permalink:"/v4/How-to_GROUP_MAX_MIN_AGGR"}},s={},u=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3},{value:"Example 3",id:"example-3",level:2},{value:"Task",id:"task-2",level:3},{value:"Solution",id:"solution-2",level:3},{value:"Example 4",id:"example-4",level:2},{value:"Task",id:"task-3",level:3},{value:"Solution",id:"solution-3",level:3},{value:"Example 5",id:"example-5",level:2},{value:"Task",id:"task-4",level:3},{value:"Solution",id:"solution-4",level:3}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"example-1"},"Example 1"),(0,n.kt)("h3",{id:"task"},"Task"),(0,n.kt)("p",null,"We have a set of books associated with certain category."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nCLASS Category 'Category';\n\ncategory 'Category' = DATA Category (Book);\n")),(0,n.kt)("p",null,"We need to calculate the number of books in the category."),(0,n.kt)("h3",{id:"solution"},"Solution"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lsf"},"countBooks 'Number of books' (Category c) = GROUP SUM 1 BY category(Book book);\n")),(0,n.kt)("h2",{id:"example-2"},"Example 2"),(0,n.kt)("h3",{id:"task-1"},"Task"),(0,n.kt)("p",null,"We have a set of books associated with certain tags. Each book can be associated with several tags at the same time."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Tag 'Tag';\n\nin 'On' = DATA BOOLEAN (Tag, Book);\n")),(0,n.kt)("p",null,"We need to calculate the number of books in the tag."),(0,n.kt)("h3",{id:"solution-1"},"Solution"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lsf"},"countBooks 'Number of books' (Tag t) = GROUP SUM 1 IF in(t, Book b);\n")),(0,n.kt)("h2",{id:"example-3"},"Example 3"),(0,n.kt)("h3",{id:"task-2"},"Task"),(0,n.kt)("p",null,"We have the information about the movement of books: each record is linked to the book itself and the warehouse where the movement occured, and also contains quantity and types of operations (receipt/shipment)."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Stock 'Warehouse';\n\n\nCLASS Ledger 'Movement';\nbook 'Book' = DATA Book (Ledger);\nstock 'Warehouse' = DATA Stock (Ledger);\n\nquantity 'Qty' = DATA INTEGER (Ledger);\nout 'Expenses' = DATA BOOLEAN (Ledger);\n")),(0,n.kt)("p",null,"We need to calculate the current balance for a book at the warehouse."),(0,n.kt)("h3",{id:"solution-2"},"Solution"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lsf"},"TABLE bookStock (Book, Stock);\ncurrentBalance 'Current balance' (Book b, Stock s) = GROUP SUM IF out(Ledger l) THEN -quantity(l) ELSE quantity(l) BY book(l), stock(l) MATERIALIZED;\n")),(0,n.kt)("p",null,"It is recommended to mark the ",(0,n.kt)("inlineCode",{parentName:"p"},"currentBalance")," property as ",(0,n.kt)("a",{parentName:"p",href:"/v4/Materializations"},(0,n.kt)("inlineCode",{parentName:"a"},"MATERIALIZED")),", so that when reading the current balances, the system could take the calculated value from the ",(0,n.kt)("inlineCode",{parentName:"p"},"bookStock")," table instead of recalculating this value based on all movements. Though this will slow down the writing process (since writing each movement will require updating the current balance), the reading process will become much faster."),(0,n.kt)("p",null,"Note that you do not need to define explicitly in which table to keep the ",(0,n.kt)("inlineCode",{parentName:"p"},"currentBalance")," property, since the system will use the signature to find out the most suitable table for it (in this case, this will be ",(0,n.kt)("inlineCode",{parentName:"p"},"bookStock"),")."),(0,n.kt)("h2",{id:"example-4"},"Example 4"),(0,n.kt)("h3",{id:"task-3"},"Task"),(0,n.kt)("p",null,"Similar to ",(0,n.kt)("a",{parentName:"p",href:"#example-3"},(0,n.kt)("strong",{parentName:"a"},"Example 3")),", except that each movement is associated with the date of movement."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lsf"},"date 'Date' = DATA DATE (Ledger) INDEXED; // it is better to add an index to filter by date quickly\n")),(0,n.kt)("p",null,"We need to calculate the current balance for a given book at the warehouse for the specific date (as of the morning, without the movements occured on that day)."),(0,n.kt)("h3",{id:"solution-3"},"Solution"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lsf"},"// Option 1\nbalance1 'Balance as of date' (Book b, Stock s, DATE d) = GROUP SUM (IF out(Ledger l) THEN -quantity(l) ELSE quantity(l)) IF date(l) < d BY book(l), stock(l);\n\n// Option 2\nbalance2 'Balance as of date' (Book b, Stock s, DATE d) = currentBalance(b, s) (-) [ GROUP SUM (IF out(Ledger l) THEN -quantity(l) ELSE quantity(l)) IF date(l) >= d BY book(l), stock(l)](b, s);\n")),(0,n.kt)("p",null,'The second option is preferable. Since requests usually refer to recent dates, the server will be calculating the result "retrospectively" from the current balance, thereby analyzing fewer records.'),(0,n.kt)("h2",{id:"example-5"},"Example 5"),(0,n.kt)("h3",{id:"task-4"},"Task"),(0,n.kt)("p",null,"Similar to ",(0,n.kt)("a",{parentName:"p",href:"#example-3"},(0,n.kt)("strong",{parentName:"a"},"Example 3")),", except that we need to calculate the current balance for a given book across all the warehouses."),(0,n.kt)("h3",{id:"solution-4"},"Solution"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lsf"},"currentBalance 'Current balance' (Book b) = GROUP SUM currentBalance(b, Stock s);\n")),(0,n.kt)("p",null,"Unlike the current balance for all the warehouses, it is not reasonable to mark this property as ",(0,n.kt)("inlineCode",{parentName:"p"},"MATERIALIZED")," if you have only few warehouses \u2014 otherwise, UPDATE CONFLICT may occur when several users try to write the movement of the same book at different warehouses simultaneously."))}p.isMDXComponent=!0}}]);