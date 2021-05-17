(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[32488],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return p},kt:function(){return h}});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(o),h=n,k=u["".concat(s,".").concat(h)]||u[h]||c[h]||a;return o?r.createElement(k,i(i({ref:t},p),{},{components:o})):r.createElement(k,i({ref:t},p))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<a;d++)i[d]=o[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},26561:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=o(22122),n=o(19756),a=(o(67294),o(3905)),i={title:"How-to: Constraints"},l={unversionedId:"How-to_Constraints",id:"version-v4/How-to_Constraints",isDocsHomePage:!1,title:"How-to: Constraints",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_Constraints.md",sourceDirName:".",slug:"/How-to_Constraints",permalink:"/How-to_Constraints",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/How-to_Constraints.md",version:"v4",lastUpdatedAt:1619768637,formattedLastUpdatedAt:"4/30/2021",frontMatter:{title:"How-to: Constraints"},sidebar:"version-v4/learn",previous:{title:"How-to: Declarative logic",permalink:"/How-to_Declarative_logic"},next:{title:"How-to: Inheritance and aggregation",permalink:"/How-to_Inheritance_and_aggregation"}},s=[{value:"Example 1",id:"example-1",children:[{value:"Task",id:"task",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Task",id:"task-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Task",id:"task-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]},{value:"Example 4",id:"example-4",children:[{value:"Task",id:"task-3",children:[]},{value:"Solution",id:"solution-3",children:[]}]},{value:"Example 5",id:"example-5",children:[{value:"Task",id:"task-4",children:[]},{value:"Solution",id:"solution-4",children:[]}]},{value:"Example 6",id:"example-6",children:[{value:"Task",id:"task-5",children:[]},{value:"Solution",id:"solution-5",children:[]}]}],d={toc:s};function p(e){var t=e.components,o=(0,n.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"example-1"},"Example 1"),(0,a.kt)("h3",{id:"task"},"Task"),(0,a.kt)("p",null,"There is a book for which a price is defined."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[50] (Book) IN id;\nprice 'Price' = DATA NUMERIC[14,2] (Book);\n")),(0,a.kt)("p",null,"We need to do so that it will be impossible to enter prices higher than 100."),(0,a.kt)("h3",{id:"solution"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"// Option 1\nCONSTRAINT price(Book b) > 100\n    MESSAGE 'The book price cannot be more than 100 rubles';\n\n// Option 2\nCONSTRAINT SET(price(Book b) > 100)\n    MESSAGE 'The book price cannot be more than 100 rubles';\n")),(0,a.kt)("p",null,"If a user tries to save a book costing over 100 on any form, the user will see a message with a corresponding text. This message will also contain all objects of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Book")," class for which the constraint is violated. Values of properties from the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," group will be shown for each object."),(0,a.kt)("p",null,"Both options are identical from the execution perspective. If the platform does not find any ",(0,a.kt)("a",{parentName:"p",href:"/Change_operators_SET_CHANGED_..._"},"change operator"),' in a constraint, the entire expression is automatically "wrapped" into a ',(0,a.kt)("inlineCode",{parentName:"p"},"SET")," operator."),(0,a.kt)("h2",{id:"example-2"},"Example 2"),(0,a.kt)("h3",{id:"task-1"},"Task"),(0,a.kt)("p",null,"We have an order with a date, ID and a posted/not posted flag."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Order 'Order';\ndate 'Date' = DATA DATE (Order) IN id;\nnumber 'Number' = DATA INTEGER (Order) IN id;\nposted 'Completed' = DATA BOOLEAN (Order) IN id;\n")),(0,a.kt)("p",null,"You need to prohibit the change of the order date."),(0,a.kt)("h3",{id:"solution-1"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CONSTRAINT CHANGED(date(Order o)) AND posted(o)\n    MESSAGE 'It is forbidden to change the date of a completed order';\n")),(0,a.kt)("h2",{id:"example-3"},"Example 3"),(0,a.kt)("h3",{id:"task-2"},"Task"),(0,a.kt)("p",null,"Identical to ",(0,a.kt)("a",{parentName:"p",href:"#example-2"},(0,a.kt)("strong",{parentName:"a"},"Example 2")),"."),(0,a.kt)("p",null,"You need to prohibit the deletion of a posted order."),(0,a.kt)("h3",{id:"solution-2"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CONSTRAINT DROPPED(Order o IS Order) AND PREV(date(o)) < currentDate()\n    MESSAGE 'It is forbidden to delete old orders';\n")),(0,a.kt)("p",null,"When an order is deleted, all of its properties will be ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),". That is why you need to you use the ",(0,a.kt)("inlineCode",{parentName:"p"},"PREV")," operator to access its property values."),(0,a.kt)("h2",{id:"example-4"},"Example 4"),(0,a.kt)("h3",{id:"task-3"},"Task"),(0,a.kt)("p",null,"Similar to ",(0,a.kt)("a",{parentName:"p",href:"#example-1"},(0,a.kt)("strong",{parentName:"a"},"Example 1"))," and ",(0,a.kt)("a",{parentName:"p",href:"#example-2"},(0,a.kt)("strong",{parentName:"a"},"Example 2")),". Also, the order contains lines with a price and a link to the book."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS OrderDetail 'Order line';\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\n\nbook 'Book' = DATA Book (OrderDetail) NONULL;\nnameBook 'Book' (OrderDetail d) = name(book(d)) IN id;\n\nprice 'Price' = DATA NUMERIC[14,2] (OrderDetail);\n")),(0,a.kt)("p",null,"You need to prohibit the entry of order price values exceeding the price of the book by 10%."),(0,a.kt)("h3",{id:"solution-3"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CONSTRAINT price(OrderDetail d) > price(book(d)) * 1.1\n    MESSAGE 'The price in the order cannot exceed the price of the book by 10%';\n")),(0,a.kt)("p",null,"Since the expression contains no change operators, this constraint will be triggered when the price changes for a line, book or book price. Therefore, the user will not be able to change the book price if there have been orders for it with a price lower by up to 10%. If such behavior is not required, you need to explicitly apply change operators to those properties that should trigger constraints upon change."),(0,a.kt)("h2",{id:"example-5"},"Example 5"),(0,a.kt)("h3",{id:"task-4"},"Task"),(0,a.kt)("p",null,"Similar to ",(0,a.kt)("a",{parentName:"p",href:"#example-4"},(0,a.kt)("strong",{parentName:"a"},"Example 4")),". Here are added the concept of a customer and the possibility to select books that will be available to the customer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Customer 'Customer';\nname 'Name' = DATA ISTRING[100] (Customer);\n\nin 'On' = DATA BOOLEAN (Customer, Book);\n\ncustomer 'Customer' = DATA Customer (OrderDetail);\n")),(0,a.kt)("p",null,"We need to prohibit the entry of books that are unavailable to the buyer for the order line."),(0,a.kt)("h3",{id:"solution-4"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CONSTRAINT book(OrderDetail d) AND NOT in(customer(d), book(d))\n    CHECKED BY book[OrderDetail]\n    MESSAGE 'A book is selected in the order line that is not allowed for the customer';\n")),(0,a.kt)("p",null,"It is important to check that the ",(0,a.kt)("inlineCode",{parentName:"p"},"book")," property for the order line is set because otherwise, the constraint will be applied to all order lines with the yet unselected book. The ",(0,a.kt)("inlineCode",{parentName:"p"},"CHECKED BY")," block adds the filter for the order line on the book selection form in order to avoid violating the defined constraint. This way, the user will only see books available to the buyer."),(0,a.kt)("h2",{id:"example-6"},"Example 6"),(0,a.kt)("h3",{id:"task-5"},"Task"),(0,a.kt)("p",null,"Identical to ",(0,a.kt)("a",{parentName:"p",href:"#example-4"},(0,a.kt)("strong",{parentName:"a"},"Example 4")),"."),(0,a.kt)("p",null,"We need to prohibit the entry of books that are unavailable to the buyer for the order line, but only for posted orders."),(0,a.kt)("h3",{id:"solution-5"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"// Option 1\nCONSTRAINT (CHANGED(book(OrderDetail d)) OR CHANGED(price(d)) OR CHANGED(posted(order(d)))) AND posted(order(d))\n           AND price(d) > price(book(d)) * 1.1\n           MESSAGE 'The price in the order cannot exceed the price of the book by 10%';\n\n// Option 2\nconstraintBook (OrderDetail d) =\n    (CHANGED(book(d)) OR CHANGED(price(d)) OR CHANGED(posted(order(d)))) AND posted(order(d)) AND price(d) > price(book(d)) * 1.1;\nWHEN (GROUP MAX constraintBook(OrderDetail d)) DO {\n    MESSAGE 'A book is selected in the order line that is not allowed for the customer by lines: \\n' +\n            (GROUP CONCAT ('Date ' + date(order(OrderDetail d)) + '; Number ' + number(order(d))) IF constraintBook(d), ',') NOWAIT;\n    CANCEL;\n}\n")),(0,a.kt)("p",null,"The second scenario is similar to the first one, but lets you modify the message shown to the user and the logic of constraint handling."))}p.isMDXComponent=!0}}]);