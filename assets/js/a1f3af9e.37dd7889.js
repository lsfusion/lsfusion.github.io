"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[10927],{90647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=n(74848),r=n(28453);const a={title:"How-to: Numbering"},s=void 0,i={id:"How-to_Numbering",title:"How-to: Numbering",description:"Let's suppose we have a set of books. For each of these books, we define a number as an integer.",source:"@site/versioned_docs/version-v5/How-to_Numbering.md",sourceDirName:".",slug:"/How-to_Numbering",permalink:"/v5/How-to_Numbering",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/How-to_Numbering.md",tags:[],version:"v5",lastUpdatedAt:1685108136e3,frontMatter:{title:"How-to: Numbering"},sidebar:"learn",previous:{title:"How-to: Registers",permalink:"/v5/How-to_Registers"},next:{title:"How-to: Using objects as templates",permalink:"/v5/How-to_Using_objects_as_templates"}},u={},l=[];function c(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Let's suppose we have a set of books. For each of these books, we define a number as an integer."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lsf",children:"CLASS Book 'Book';\nnumber 'Number' = DATA INTEGER (Book) IN id;\nname 'Name' = DATA ISTRING[50] (Book) IN id;\n"})}),"\n",(0,o.jsx)(t.p,{children:"We implement a property that will find a book by its number. It can be useful, for example, for importing data where each book is identified by a number. It can be used to get a link to a book object by getting its number as a parameter."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lsf",children:"book (INTEGER number) = GROUP AGGR Book b BY number(b);\n\nbookExists (INTEGER number)  {\n    IF book(number) THEN\n        MESSAGE 'The book with the number ' + number + ' exists. Its name : ' + name(book(number));\n    ELSE\n        MESSAGE 'The book with the number ' + number + ' does not exist';\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsxs)(t.a,{href:"/v5/Grouping_GROUP",children:[(0,o.jsx)(t.code,{children:"GROUP AGGR"})," operator"]})," automatically adds a constraint on the uniqueness of the number. If you try to save the same number to the database, you will get an error message."]}),"\n",(0,o.jsxs)(t.p,{children:["Let's add an ",(0,o.jsx)(t.a,{href:"/v5/Events",children:"event"})," that will automatically number books by increasing the maximum number existing in the database."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lsf",children:"WHEN SET(Book b IS Book) AND NOT number(b) DO {\n    number(b) <- (GROUP MAX number(Book bb)) (+) 1;\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"The event will be triggered at the moment of saving a book to the database in the same transaction."}),"\n",(0,o.jsxs)(t.p,{children:["In some situations, you may need to apply different numbering for the same object. For this purpose, you can add a special ",(0,o.jsx)(t.code,{children:"Numerator"})," class."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lsf",children:"CLASS Numerator 'Numerator';\nname 'Name' = DATA ISTRING[50] (Numerator) IN id;\n\nvalue = DATA INTEGER (Numerator);\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"value"})," property will store the current value of the numerator that will be written to the number of the necessary object. To achieve this, a reference to a particular numerator is set for an object (for example, an order). If such a reference is specified at the time of object creation, you need to automatically assign the numerator's current value increased by one to the order number."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lsf",children:"CLASS Order 'Order';\nnumber 'Number' = DATA INTEGER (Order) IN id;\n\nnumerator 'Numerator' = DATA Numerator (Order);\nWHEN CHANGED(numerator(Order o)) AND NOT CHANGED(number(o)) DO {\n    number(o) <- value(numerator(o));\n    value (Numerator n) <- value(n) (+) 1 WHERE n == numerator(o);\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"The event conditions check if the number has been changed in order to avoid changing it if the user specified it manually (or if it was assigned during import)."}),"\n",(0,o.jsxs)(t.p,{children:['An important difference between the numerator and "assigning the maximum value plus one" is the support of the simultaneous object creation. In this case, if two users simultaneously create objects, the last started saving user will get a message about number duplication and will need to manually re-save it. Changes made in all events in this way will be "rolled back" and re-saving will generate a new number. If you use a numerator, the last user\'s transaction will get a CONFLICT UPDATE on the ',(0,o.jsx)(t.code,{children:"value"})," field for the numerator (since both transactions change the field of the same row in the database). The system will then automatically roll back the transaction and all the changes made in the event and will start processing it again without the user's involvement. This way, the user will only experience slower data saving (up two times slower), but no additional actions will be required."]}),"\n",(0,o.jsx)(t.p,{children:"You can define a default numerator with property without arguments so that the user does not have to select a numerator every time. After that, you can create an event that will automatically set the numerator if the user doesn't choose it manually."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lsf",children:"defaultNumerator 'Default numerator' = DATA Numerator();\n\nWHEN SET(Order o IS Order) AND NOT CHANGED(numerator(o)) DO\n    numerator(o) <- defaultNumerator();\n"})})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var o=n(96540);const r={},a=o.createContext(r);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);