"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["21275"],{71324:function(e,t,n){n.r(t),n.d(t,{default:()=>m,frontMatter:()=>s,metadata:()=>r,assets:()=>u,toc:()=>l,contentTitle:()=>i});var r=JSON.parse('{"id":"How-to_Numbering","title":"How-to: Numbering","description":"Let\'s suppose we have a set of books. For each of these books, we define a number as an integer.","source":"@site/docs/How-to_Numbering.md","sourceDirName":".","slug":"/How-to_Numbering","permalink":"/How-to_Numbering","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/master/docs/en/How-to_Numbering.md","tags":[],"version":"current","lastUpdatedAt":1623249583000,"frontMatter":{"title":"How-to: Numbering"},"sidebar":"learn","previous":{"title":"How-to: Registers","permalink":"/How-to_Registers"},"next":{"title":"How-to: Using objects as templates","permalink":"/How-to_Using_objects_as_templates"}}'),a=n("85893"),o=n("50065");let s={title:"How-to: Numbering"},i=void 0,u={},l=[];function c(e){let t={a:"a",code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Let's suppose we have a set of books. For each of these books, we define a number as an integer."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-lsf",children:"CLASS Book 'Book';\nnumber 'Number' = DATA INTEGER (Book) IN id;\nname 'Name' = DATA ISTRING[50] (Book) IN id;\n"})}),"\n",(0,a.jsx)(t.p,{children:"We implement a property that will find a book by its number. It can be useful, for example, for importing data where each book is identified by a number. It can be used to get a link to a book object by getting its number as a parameter."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-lsf",children:"book (INTEGER number) = GROUP AGGR Book b BY number(b);\n\nbookExists (INTEGER number)  {\n    IF book(number) THEN\n        MESSAGE 'The book with the number ' + number + ' exists. Its name : ' + name(book(number));\n    ELSE\n        MESSAGE 'The book with the number ' + number + ' does not exist';\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsxs)(t.a,{href:"/Grouping_GROUP",children:[(0,a.jsx)(t.code,{children:"GROUP AGGR"})," operator"]})," automatically adds a constraint on the uniqueness of the number. If you try to save the same number to the database, you will get an error message."]}),"\n",(0,a.jsxs)(t.p,{children:["Let's add an ",(0,a.jsx)(t.a,{href:"/Events",children:"event"})," that will automatically number books by increasing the maximum number existing in the database."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-lsf",children:"WHEN SET(Book b IS Book) AND NOT number(b) DO {\n    number(b) <- (GROUP MAX number(Book bb)) (+) 1;\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:"The event will be triggered at the moment of saving a book to the database in the same transaction."}),"\n",(0,a.jsxs)(t.p,{children:["In some situations, you may need to apply different numbering for the same object. For this purpose, you can add a special ",(0,a.jsx)(t.code,{children:"Numerator"})," class."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-lsf",children:"CLASS Numerator 'Numerator';\nname 'Name' = DATA ISTRING[50] (Numerator) IN id;\n\nvalue = DATA INTEGER (Numerator);\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"value"})," property will store the current value of the numerator that will be written to the number of the necessary object. To achieve this, a reference to a particular numerator is set for an object (for example, an order). If such a reference is specified at the time of object creation, you need to automatically assign the numerator's current value increased by one to the order number."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-lsf",children:"CLASS Order 'Order';\nnumber 'Number' = DATA INTEGER (Order) IN id;\n\nnumerator 'Numerator' = DATA Numerator (Order);\nWHEN CHANGED(numerator(Order o)) AND NOT CHANGED(number(o)) DO {\n    number(o) <- value(numerator(o));\n    value (Numerator n) <- value(n) (+) 1 WHERE n == numerator(o);\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:"The event conditions check if the number has been changed in order to avoid changing it if the user specified it manually (or if it was assigned during import)."}),"\n",(0,a.jsxs)(t.p,{children:['An important difference between the numerator and "assigning the maximum value plus one" is the support of the simultaneous object creation. In this case, if two users simultaneously create objects, the last started saving user will get a message about number duplication and will need to manually re-save it. Changes made in all events in this way will be "rolled back" and re-saving will generate a new number. If you use a numerator, the last user\'s transaction will get a CONFLICT UPDATE on the ',(0,a.jsx)(t.code,{children:"value"})," field for the numerator (since both transactions change the field of the same row in the database). The system will then automatically roll back the transaction and all the changes made in the event and will start processing it again without the user's involvement. This way, the user will only experience slower data saving (up two times slower), but no additional actions will be required."]}),"\n",(0,a.jsx)(t.p,{children:"You can define a default numerator with property without arguments so that the user does not have to select a numerator every time. After that, you can create an event that will automatically set the numerator if the user doesn't choose it manually."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-lsf",children:"defaultNumerator 'Default numerator' = DATA Numerator();\n\nWHEN SET(Order o IS Order) AND NOT CHANGED(numerator(o)) DO\n    numerator(o) <- defaultNumerator();\n"})})]})}function m(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return s}});var r=n(67294);let a={},o=r.createContext(a);function s(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);