"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["52053"],{73346:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>o,assets:()=>s,toc:()=>d,contentTitle:()=>i});var o=JSON.parse('{"id":"How-to_DELETE","title":"How-to: DELETE","description":"Example 1","source":"@site/versioned_docs/version-v4/How-to_DELETE.md","sourceDirName":".","slug":"/How-to_DELETE","permalink":"/v4/How-to_DELETE","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v4/docs/en/How-to_DELETE.md","tags":[],"version":"v4","lastUpdatedAt":1619622551000,"frontMatter":{"title":"How-to: DELETE"},"sidebar":"learn","previous":{"title":"How-to: NEW","permalink":"/v4/How-to_NEW"},"next":{"title":"How-to: FOR","permalink":"/v4/How-to_FOR"}}'),r=t("85893"),l=t("50065");let a={title:"How-to: DELETE"},i=void 0,s={},d=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3}];function c(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(n.h3,{id:"task",children:"Task"}),"\n",(0,r.jsx)(n.p,{children:"We have an order with a given date and buyer and also with lines that refer to the books."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"CLASS Order 'Order';\n\nCLASS Book 'Book';\nname 'Name' = DATA ISTRING[50] (Book);\n\nCLASS OrderDetail 'Order line';\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\nbook 'Book' = DATA Book (OrderDetail);\nnameBook 'Book' (OrderDetail d) = name(book(d));\n"})}),"\n",(0,r.jsx)(n.p,{children:"We need to create an action that deletes the book for which no orders have been placed."}),"\n",(0,r.jsx)(n.h3,{id:"solution",children:"Solution"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"delete (Book b)  {\n    IF NOT [ GROUP SUM 1 BY book(OrderDetail d)](b) THEN\n        DELETE b;\n    ELSE\n        MESSAGE 'It is forbidden to delete a book, as there is an order for it';\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(n.h3,{id:"task-1",children:"Task"}),"\n",(0,r.jsxs)(n.p,{children:["Similar to ",(0,r.jsx)(n.a,{href:"#example-1",children:(0,r.jsx)(n.strong,{children:"Example 1"})}),"."]}),"\n",(0,r.jsx)(n.p,{children:"We need to create an action that clears the order by deleting all its lines."}),"\n",(0,r.jsx)(n.h3,{id:"solution-1",children:"Solution"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"clear (Order o)  {\n\n    // Option 1\n    DELETE OrderDetail d WHERE order(d) == o;\n\n    // Option 2\n    FOR order(OrderDetail d) == o DO\n        DELETE d;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Both these implementations are acting similarly."})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return a}});var o=t(67294);let r={},l=o.createContext(r);function a(e){let n=o.useContext(l);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);