"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["12195"],{90215:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>o,assets:()=>a,toc:()=>d,contentTitle:()=>l});var o=JSON.parse('{"id":"How-to_Table_status","title":"How-to: Table status","description":"Example 1","source":"@site/versioned_docs/version-v4/How-to_Table_status.md","sourceDirName":".","slug":"/How-to_Table_status","permalink":"/v4/How-to_Table_status","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v4/docs/en/How-to_Table_status.md","tags":[],"version":"v4","lastUpdatedAt":1623249583000,"frontMatter":{"title":"How-to: Table status"},"sidebar":"learn","previous":{"title":"How-to: Matrix","permalink":"/v4/How-to_Matrix"},"next":{"title":"How-to: Reports","permalink":"/v4/How-to_Reports"}}'),s=t("85893"),r=t("50065");let i={title:"How-to: Table status"},l=void 0,a={},d=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3}];function c(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(n.h3,{id:"task",children:"Task"}),"\n",(0,s.jsx)(n.p,{children:"We have the concept of books, for which title, genre and price are defined."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lsf",children:"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[50] (Book) IN id;\ngenre 'Genre' = DATA ISTRING[30] (Book) IN id;\n\nprice 'Price' = DATA NUMERIC[12,2] (Book) IN id;\n\nFORM books 'Books'\n    OBJECTS b = Book\n    PROPERTIES(b) READONLY name, genre, price\n    PROPERTIES(b) NEWSESSION NEW, EDIT, DELETE\n;\n\nNAVIGATOR {\n    NEW books;\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"We need to display the number of books on the form, taking into account filters made by the user."}),"\n",(0,s.jsx)(n.h3,{id:"solution",children:"Solution"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lsf",children:"filtered 'Book filtered' (Book b) = FILTER books.b;\nfilteredCount 'Number of books' = GROUP SUM 1 IF filtered(Book b);\n\nEXTEND FORM books\n    PROPERTIES() READONLY filteredCount DRAW b TOOLBAR\n;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The solution uses the ",(0,s.jsxs)(n.a,{href:"/v4/Filter_FILTER",children:[(0,s.jsx)(n.code,{children:"FILTER"})," operator"]}),", which returns ",(0,s.jsx)(n.code,{children:"TRUE"})," if the object is included in the current filter on the form."]}),"\n",(0,s.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(n.h3,{id:"task-1",children:"Task"}),"\n",(0,s.jsxs)(n.p,{children:["Similar to ",(0,s.jsx)(n.a,{href:"#example-1",children:(0,s.jsx)(n.strong,{children:"Example 1"})}),"."]}),"\n",(0,s.jsx)(n.p,{children:"We need to display the serial number of the book in the table with books taking into account the current filter and order made by the user."}),"\n",(0,s.jsx)(n.h3,{id:"solution-1",children:"Solution"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lsf",children:"index 'Order' (Book b) = PARTITION SUM 1 IF filtered(b) ORDER [ ORDER books.b](b);\n\nEXTEND FORM books\n    PROPERTIES(b) index\n;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The property with the current order, defined using the ",(0,s.jsxs)(n.a,{href:"/v4/Order_ORDER",children:[(0,s.jsx)(n.code,{children:"ORDER"})," operator"]}),", is not declared as a separate named property but is used directly in the expression."]}),"\n",(0,s.jsx)(n.p,{children:"The form obtained in both examples, with user-defined filter and order, will look like this:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(87458).Z+"",width:"701",height:"270"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},87458:function(e,n,t){t.d(n,{Z:function(){return o}});let o=t.p+"assets/images/How-to_Table_status-20ca778d576353ee95d7171002b5fda7.png"},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var o=t(67294);let s={},r=o.createContext(s);function i(e){let n=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);