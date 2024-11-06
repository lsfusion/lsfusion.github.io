"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[95889],{58714:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=t(74848),s=t(28453);const a={title:"How-to: Filtering and ordering"},r=void 0,i={id:"How-to_Filtering_and_ordering",title:"How-to: Filtering and ordering",description:"Example 1",source:"@site/versioned_docs/version-v5/How-to_Filtering_and_ordering.md",sourceDirName:".",slug:"/How-to_Filtering_and_ordering",permalink:"/v5/How-to_Filtering_and_ordering",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/How-to_Filtering_and_ordering.md",tags:[],version:"v5",lastUpdatedAt:1685108136e3,frontMatter:{title:"How-to: Filtering and ordering"},sidebar:"learn",previous:{title:"How-to: Documents with lines",permalink:"/v5/How-to_Documents_with_lines"},next:{title:"How-to: Design",permalink:"/v5/How-to_Design"}},l={},d=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3},{value:"Example 3",id:"example-3",level:2},{value:"Task",id:"task-2",level:3},{value:"Solution",id:"solution-2",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,o.jsx)(n.h3,{id:"task",children:"Task"}),"\n",(0,o.jsx)(n.p,{children:"There are remaining books in stock."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[100] (Book);\n\nCLASS Stock 'Warehouse';\nname 'Name' = DATA ISTRING[100] (Stock);\n\n// for example it is made a data property, although usually it is calculated\nbalance 'Balance' = DATA INTEGER (Book, Stock); \n"})}),"\n",(0,o.jsx)(n.p,{children:"We need to create a form to display the balances of books in a given stock in alphabetical order."}),"\n",(0,o.jsx)(n.h3,{id:"solution",children:"Solution"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"FORM onStockObject 'Balances'\n    OBJECTS s = Stock PANEL\n    PROPERTIES(s) name SELECTOR\n\n    OBJECTS b = Book\n    PROPERTIES READONLY name(b), balance(b, s)\n    ORDERS name(b)\n\n    // Option 1\n    FILTERS balance(b, s)\n\n    // Option 2\n    FILTERGROUP bal\n        FILTER 'With positive balance' balance(b, s) > 0 'F10'\n        FILTER 'With negative balance' balance(b, s) < 0 'F9'\n        FILTER 'With balance' balance(b, s) 'F8' DEFAULT\n        FILTER 'No remainder' NOT balance (b, s) 'F7'\n;\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Option 1 sets up a fixed filter that the user cannot remove. Option 2 allows the user to choose between predefined criteria (by default the one for which the ",(0,o.jsx)(n.code,{children:"DEFAULT"})," option is set)."]}),"\n",(0,o.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,o.jsx)(n.h3,{id:"task-1",children:"Task"}),"\n",(0,o.jsxs)(n.p,{children:["Similar to ",(0,o.jsx)(n.a,{href:"#example-1",children:(0,o.jsx)(n.strong,{children:"Example 1"})}),"."]}),"\n",(0,o.jsx)(n.p,{children:"We need to create a form to display remaining books in several warehouses, with the possibility of filtering by a specific warehouse. Ordering should be first by warehouse, and within that by book title."}),"\n",(0,o.jsx)(n.h3,{id:"solution-1",children:"Solution"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"filterStock = DATA LOCAL Stock ();\nnameFilterStock 'Warehouse' = name(filterStock());\n\nFORM onStockLocal 'Balances'\n    PROPERTIES() nameFilterStock\n\n    OBJECTS sb = (s = Stock, b = Book)\n    PROPERTIES READONLY name(s), name(b), balance(b, s)\n    ORDERS name(s), name(b)\n\n    FILTERS s == filterStock() OR NOT filterStock()\n;\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In this case a warehouse cannot be declared via the ",(0,o.jsx)(n.code,{children:"OBJECTS"})," block, because then not specifying a warehouse for filtering will not be an option."]}),"\n",(0,o.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,o.jsx)(n.h3,{id:"task-2",children:"Task"}),"\n",(0,o.jsx)(n.p,{children:"There is a list of orders for certain customers"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"CLASS Customer 'Customer';\nname 'Name' = DATA ISTRING[100] (Customer);\n\nCLASS Order 'Order';\ndate 'Date' = DATA DATE (Order);\n\ncustomer 'Customer' = DATA Customer (Order);\nnameCustomer 'Customer' (Order o) = name(customer(o));\n"})}),"\n",(0,o.jsx)(n.p,{children:"We need to create a form to display the list of orders allowing to filter by date and/or customer. By default, orders should be in descending date order."}),"\n",(0,o.jsx)(n.h3,{id:"solution-2",children:"Solution"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"filterCustomer = DATA LOCAL Customer ();\nnameFilterCustomer 'Customer' = name(filterCustomer());\n\nFORM orders 'Orders'\n    PROPERTIES() nameFilterCustomer\n\n    OBJECTS dates = (dateFrom = DATE, dateTo = DATE) PANEL\n    PROPERTIES df = VALUE(dateFrom), dt = VALUE(dateTo)\n\n    OBJECTS o = Order\n    PROPERTIES(o) READONLY do = date, nameCustomer\n    ORDERS do DESC\n    FILTERS date(o) >= dateFrom, date(o) <= dateTo,\n            customer(o) == filterCustomer() OR NOT filterCustomer()\n;\n"})}),"\n",(0,o.jsx)(n.p,{children:"It should be noted that the dates in this case should always be selected (by default, the current date will be set when the form is opened). But it is possible not to select a customer."}),"\n",(0,o.jsxs)(n.p,{children:["Also, note that what is set in ",(0,o.jsx)(n.code,{children:"ORDER BY"})," is not an expression but a specific property added to the form. Thus, we cannot order by a property that has not been added to the form."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var o=t(96540);const s={},a=o.createContext(s);function r(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);