"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[1459],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47506:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var o=n(83117),r=(n(67294),n(3905));const a={title:"How-to: Data entry"},i=void 0,l={unversionedId:"How-to_Data_entry",id:"version-v4/How-to_Data_entry",title:"How-to: Data entry",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_Data_entry.md",sourceDirName:".",slug:"/How-to_Data_entry",permalink:"/How-to_Data_entry",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/How-to_Data_entry.md",tags:[],version:"v4",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"7/7/2021",frontMatter:{title:"How-to: Data entry"},sidebar:"version-v4/learn",previous:{title:"How-to: Trees",permalink:"/How-to_Trees"},next:{title:"How-to: Navigator",permalink:"/How-to_Navigator"}},s={},u=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"example-1"},"Example 1"),(0,r.kt)("h3",{id:"task"},"Task"),(0,r.kt)("p",null,"We have a form that displays a list of books. We need to implement an option for entering a name only in upper case. Group change, copy&paste, and similar features must also be supported."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[100] (Book);\n\nFORM books\n     OBJECTS b = Book\n;\n\nNAVIGATOR {\n    NEW books;\n}\n")),(0,r.kt)("h3",{id:"solution"},"Solution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},'changeName(Book b)  {\n    // inputting ISTRING[100] "to parameter" s \n    // (automatically wrapped in REQUEST, that is, group adjustments, PASTE, etc. are available)\n    INPUT s = ISTRING[100] \n        DO // checking for requestCanceled\n             name(b) <- s;\n}\n\nEXTEND FORM books\n    PROPERTIES (b) name ON CHANGE changeName(b)\n;\n')),(0,r.kt)("h2",{id:"example-2"},"Example 2"),(0,r.kt)("h3",{id:"task-1"},"Task"),(0,r.kt)("p",null,"We have a form that displays a list of books. In this form, the user can specify a genre, so that only books of this genre will be displayed. We also have a form containing the list of orders where you can also apply a filter by genre. Each book has a restricted/allowed flag, and the order may contain only allowed books."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Genre 'Genre';\nname 'Name' = DATA ISTRING[100] (Genre);\n\ngenre 'Genre' = DATA Genre (Book);\nisForbidden 'Prohibition' = DATA BOOLEAN (Book);\n\nCLASS Order 'Order';\nbook 'Book' = DATA Book (Order);\nnameBook 'Book name' (Order o) = name(book(o));\n\ndate 'Date' = DATA DATE (Order);\nnumber 'Number' = DATA STRING[100] (Order);\n\nCONSTRAINT isForbidden(book(Order o))\n    CHECKED BY book MESSAGE 'It is forbidden to choose this book';\n\nFORM booksByGenre\n     OBJECTS g = Genre PANEL\n     PROPERTIES (g) name\n     OBJECTS b = Book\n     PROPERTIES (b) name\n;\n\n\nFORM orders 'Orders'\n    OBJECTS g = Genre PANEL\n    PROPERTIES (g) name\n\n    OBJECTS o = Order\n    PROPERTIES(o) READONLY date, number\n    FILTERS g == genre(book(o))\n;\n\nNAVIGATOR {\n    NEW orders;\n}\n")),(0,r.kt)("p",null,"We need to replace the book selection mechanism on the order form so that the genre selection form is called. Additional requirements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The genre specified in the order form must be set as default value for the filter by genre"),(0,r.kt)("li",{parentName:"ul"},"The current book from the order must be set as default value (if it has been selected)"),(0,r.kt)("li",{parentName:"ul"},'The book in the order must be resettable (i. e. it must be possible to set the "Undefined" value)'),(0,r.kt)("li",{parentName:"ul"},"Only allowed books can be selected"),(0,r.kt)("li",{parentName:"ul"},"Group change, copy&paste, and similar features must also be supported for the field.")),(0,r.kt)("h3",{id:"solution-1"},"Solution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},'changeNameBook(Genre g, Order o)  {\n    // (automatically wrapped in REQUEST, that is, group adjustments, PASTE, etc. are available)\n    DIALOG booksByGenre OBJECTS \n          g = g NULL, // NULL input allowed\n          b = book(o) NULL INPUT bk NULL CONSTRAINTFILTER\n          // book(o) NULL - substituting book(o) to the input (if necessary, the input can be omitted, that is, \n          //   the user can simply write b INPUT ..., which in turn is equivalent to b=NULL NULL INPUT ...)\n          // INPUT bk NULL - returning the value of this object "to parameter" bk (return NULL is allowed, that is, \n          //   there will be a reset button). Since the TO option is not specified, the result will be written \n          //   to the requestedObject\n          // CONSTRAINTFILTER - taking into account the constraints for object b on the assumption that the result \n          //   will be written to the property passed to the input (in this case book(o)),\n          //   if necessary, another expression can be specified in the form CONSTRAINTFILTER = dataBook(o)\n    DO // checking for requestCanceled\n        book(o) <- bk;\n}\n\nEXTEND FORM orders\n    PROPERTIES (o) nameBook ON CHANGE changeNameBook(g, o)\n;\n')))}p.isMDXComponent=!0}}]);