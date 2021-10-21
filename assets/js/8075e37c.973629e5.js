(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[74987],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return b}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),p=l(n),b=a,d=p["".concat(s,".").concat(b)]||p[b]||c[b]||o;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},44855:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return m},default:function(){return p}});var r=n(74034),a=n(79973),o=(n(67294),n(3905)),i=["components"],u={title:"How-to: Numbering"},s=void 0,l={unversionedId:"How-to_Numbering",id:"How-to_Numbering",isDocsHomePage:!1,title:"How-to: Numbering",description:"Let's suppose we have a set of books. For each of these books, we define a number as an integer.",source:"@site/docs/How-to_Numbering.md",sourceDirName:".",slug:"/How-to_Numbering",permalink:"/next/How-to_Numbering",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/How-to_Numbering.md",tags:[],version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"How-to: Numbering"},sidebar:"learn",previous:{title:"How-to: Registers",permalink:"/next/How-to_Registers"},next:{title:"How-to: Using objects as templates",permalink:"/next/How-to_Using_objects_as_templates"}},m=[],c={toc:m};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Let's suppose we have a set of books. For each of these books, we define a number as an integer."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nnumber 'Number' = DATA INTEGER (Book) IN id;\nname 'Name' = DATA ISTRING[50] (Book) IN id;\n")),(0,o.kt)("p",null,"We implement a property that will find a book by its number. It can be useful, for example, for importing data where each book is identified by a number. It can be used to get a link to a book object by getting its number as a parameter."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"book (INTEGER number) = GROUP AGGR Book b BY number(b);\n\nbookExists (INTEGER number)  {\n    IF book(number) THEN\n        MESSAGE 'The book with the number ' + number + ' exists. Its name : ' + name(book(number));\n    ELSE\n        MESSAGE 'The book with the number ' + number + ' does not exist';\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/next/Grouping_GROUP"},(0,o.kt)("inlineCode",{parentName:"a"},"GROUP AGGR")," operator")," automatically adds a constraint on the uniqueness of the number. If you try to save the same number to the database, you will get an error message."),(0,o.kt)("p",null,"Let's add an ",(0,o.kt)("a",{parentName:"p",href:"/next/Events"},"event")," that will automatically number books by increasing the maximum number existing in the database."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"WHEN SET(Book b IS Book) AND NOT number(b) DO {\n    number(b) <- (GROUP MAX number(Book bb)) (+) 1;\n}\n")),(0,o.kt)("p",null,"The event will be triggered at the moment of saving a book to the database in the same transaction."),(0,o.kt)("p",null,"In some situations, you may need to apply different numbering for the same object. For this purpose, you can add a special ",(0,o.kt)("inlineCode",{parentName:"p"},"Numerator")," class."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Numerator 'Numerator';\nname 'Name' = DATA ISTRING[50] (Numerator) IN id;\n\nvalue = DATA INTEGER (Numerator);\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," property will store the current value of the numerator that will be written to the number of the necessary object. To achieve this, a reference to a particular numerator is set for an object (for example, an order). If such a reference is specified at the time of object creation, you need to automatically assign the numerator's current value increased by one to the order number."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Order 'Order';\nnumber 'Number' = DATA INTEGER (Order) IN id;\n\nnumerator 'Numerator' = DATA Numerator (Order);\nWHEN CHANGED(numerator(Order o)) AND NOT CHANGED(number(o)) DO {\n    number(o) <- value(numerator(o));\n    value (Numerator n) <- value(n) (+) 1 WHERE n == numerator(o);\n}\n")),(0,o.kt)("p",null,"The event conditions check if the number has been changed in order to avoid changing it if the user specified it manually (or if it was assigned during import)."),(0,o.kt)("p",null,'An important difference between the numerator and "assigning the maximum value plus one" is the support of the simultaneous object creation. In this case, if two users simultaneously create objects, the last started saving user will get a message about number duplication and will need to manually re-save it. Changes made in all events in this way will be "rolled back" and re-saving will generate a new number. If you use a numerator, the last user\'s transaction will get a CONFLICT UPDATE on the ',(0,o.kt)("inlineCode",{parentName:"p"},"value")," field for the numerator (since both transactions change the field of the same row in the database). The system will then automatically roll back the transaction and all the changes made in the event and will start processing it again without the user's involvement. This way, the user will only experience slower data saving (up two times slower), but no additional actions will be required."),(0,o.kt)("p",null,"You can define a default numerator with property without arguments so that the user does not have to select a numerator every time. After that, you can create an event that will automatically set the numerator if the user doesn't choose it manually."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"defaultNumerator 'Default numerator' = DATA Numerator();\n\nWHEN SET(Order o IS Order) AND NOT CHANGED(numerator(o)) DO\n    numerator(o) <- defaultNumerator();\n")))}p.isMDXComponent=!0}}]);