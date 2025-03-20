"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["99818"],{51706:function(e,n,o){o.r(n),o.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>a,assets:()=>i,toc:()=>d,contentTitle:()=>s});var a=JSON.parse('{"id":"How-to_CASE_IF_OVERRIDE","title":"How-to: CASE/IF/OVERRIDE","description":"Example 1","source":"@site/versioned_docs/version-v5/How-to_CASE_IF_OVERRIDE.md","sourceDirName":".","slug":"/How-to_CASE_IF_OVERRIDE","permalink":"/v5/How-to_CASE_IF_OVERRIDE","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v5/docs/en/How-to_CASE_IF_OVERRIDE.md","tags":[],"version":"v5","lastUpdatedAt":1685108136000,"frontMatter":{"title":"How-to: CASE/IF/OVERRIDE"},"sidebar":"learn","previous":{"title":"How-to: GROUP MAX/MIN/AGGR","permalink":"/v5/How-to_GROUP_MAX_MIN_AGGR"},"next":{"title":"How-to: GROUP LAST","permalink":"/v5/How-to_GROUP_LAST"}}'),t=o("85893"),r=o("50065");let l={title:"How-to: CASE/IF/OVERRIDE"},s=void 0,i={},d=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3},{value:"Example 3",id:"example-3",level:2},{value:"Task",id:"task-2",level:3},{value:"Solution",id:"solution-2",level:3},{value:"Example 4",id:"example-4",level:2},{value:"Task",id:"task-3",level:3},{value:"Solution",id:"solution-3",level:3},{value:"Example 5",id:"example-5",level:2},{value:"Task",id:"task-4",level:3},{value:"Solution",id:"solution-4",level:3}];function c(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsx)(n.h3,{id:"task",children:"Task"}),"\n",(0,t.jsx)(n.p,{children:"We have a set of white books and black books."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"CLASS Color 'Color' {\n    white 'White',\n    black 'Black'\n}\n\nCLASS Book 'Book';\n\ncolor 'Color' = DATA Color (Book);\n"})}),"\n",(0,t.jsx)(n.p,{children:"We need to define a property that returns the color of a given book."}),"\n",(0,t.jsx)(n.h3,{id:"solution",children:"Solution"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"// Option 1\nnameColor1 'Color' (Book b) = staticCaption(color(b));\n\n// Option 2\nnameColor2 'Color' (Book b) = IF color(b) == Color.white THEN 'White' ELSE 'Black';\n"})}),"\n",(0,t.jsx)(n.p,{children:"These two expressions provide identical results."}),"\n",(0,t.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsx)(n.h3,{id:"task-1",children:"Task"}),"\n",(0,t.jsxs)(n.p,{children:["We have multiple purchase orders to suppliers for books. For each purchase order defined it's status if it was placed, agreed and delivered. In this example these statuses are declared as ",(0,t.jsx)(n.a,{href:"/v5/Data_properties_DATA",children:"data"})," properties, but in more sophisticated cases they may be calculated."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"CLASS Order 'Order';\n\nsent 'Sent' = DATA BOOLEAN (Order);\nagreed 'Agreed' = DATA BOOLEAN (Order);\naccepted 'Accepted' = DATA BOOLEAN (Order);\n"})}),"\n",(0,t.jsx)(n.p,{children:"We need to obtain the current status of an order."}),"\n",(0,t.jsx)(n.h3,{id:"solution-1",children:"Solution"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"// Option 1\nnameStatus1 'Status' (Order o) = CASE WHEN accepted(o) THEN 'Accepted'\n                                     WHEN agreed(o) THEN 'Agreed'\n                                     WHEN sent(o) THEN 'Sent'\n                                ELSE 'New';\n\n// Option 2\nCLASS Status 'Status' {\n    new 'New',\n    sent 'Sent',\n    agreed 'Agreed',\n    accepted 'Accepted'\n}\n\nstatus 'Status' (Order o) = CASE WHEN accepted(o) THEN Status.accepted\n                                 WHEN agreed(o) THEN Status.agreed\n                                 WHEN sent(o) THEN Status.sent\n                            ELSE Status.new;\nnameStatus2 'Status' (Order o) = staticCaption(status(o));\n"})}),"\n",(0,t.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,t.jsx)(n.h3,{id:"task-2",children:"Task"}),"\n",(0,t.jsxs)(n.p,{children:["We have a set of books described in ",(0,t.jsx)(n.a,{href:"#example-1",children:(0,t.jsx)(n.strong,{children:"Example 1"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:"We need to set a markup for the book and also provide an option for setting a default value."}),"\n",(0,t.jsx)(n.h3,{id:"solution-2",children:"Solution"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"dataMarkup 'Markup, %' = DATA NUMERIC[6,2] (Book);\n\ndefaultMarkup 'Default markup' = DATA NUMERIC[6,2] ();\n\nmarkup1 'Markup, %' (Book b) = OVERRIDE dataMarkup(b), defaultMarkup();\n\n// Equivalent to:\nmarkup2 'Markup, %' (Book b) = IF dataMarkup(b) THEN dataMarkup(b) ELSE defaultMarkup();\n"})}),"\n",(0,t.jsx)(n.h2,{id:"example-4",children:"Example 4"}),"\n",(0,t.jsx)(n.h3,{id:"task-3",children:"Task"}),"\n",(0,t.jsxs)(n.p,{children:["The same set of books from ",(0,t.jsx)(n.a,{href:"#example-1",children:(0,t.jsx)(n.strong,{children:"Example 1"})}),", but categorized."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"CLASS Category 'Category';\n\ncategory 'Category' = DATA Category (Book);\n"})}),"\n",(0,t.jsx)(n.p,{children:"We need to set a markup for a book and also provide an option for setting a default value for the corresponding category."}),"\n",(0,t.jsx)(n.h3,{id:"solution-3",children:"Solution"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"markup 'Markup, %' = DATA NUMERIC[6,2] (Category);\n\nmarkup 'Markup, %' (Book b) = OVERRIDE dataMarkup(b), markup(category(b));\n"})}),"\n",(0,t.jsx)(n.h2,{id:"example-5",children:"Example 5"}),"\n",(0,t.jsx)(n.h3,{id:"task-4",children:"Task"}),"\n",(0,t.jsx)(n.p,{children:"We have a set of enumerated books."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"number 'Number' = DATA INTEGER (Book);\n"})}),"\n",(0,t.jsx)(n.p,{children:"We need to find the number following the maximum book number."}),"\n",(0,t.jsx)(n.h3,{id:"solution-4",children:"Solution"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"freeNumber1 () = (GROUP MAX number(Book b)) (+) 1;\n\n// Equivalent to:\nfreeNumber2() = (OVERRIDE 0, (GROUP MAX number(Book b))) + 1;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["We use the operator ",(0,t.jsx)(n.code,{children:"(+)"})," instead of the regular operator ",(0,t.jsx)(n.code,{children:"+"}),", because otherwise if no books are found, then the standard increment by ",(0,t.jsx)(n.code,{children:"1"})," will return ",(0,t.jsx)(n.code,{children:"NULL"}),"."]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},50065:function(e,n,o){o.d(n,{Z:function(){return s},a:function(){return l}});var a=o(67294);let t={},r=a.createContext(t);function l(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);