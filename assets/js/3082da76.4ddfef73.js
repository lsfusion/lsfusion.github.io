"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[77166],{40833:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=t(74848),o=t(28453);const s={title:"How-to: FORMULA"},i=void 0,a={id:"How-to_FORMULA",title:"How-to: FORMULA",description:"Example 1",source:"@site/docs/How-to_FORMULA.md",sourceDirName:".",slug:"/How-to_FORMULA",permalink:"/next/How-to_FORMULA",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/How-to_FORMULA.md",tags:[],version:"current",lastUpdatedAt:1622042248,formattedLastUpdatedAt:"May 26, 2021",frontMatter:{title:"How-to: FORMULA"},sidebar:"learn",previous:{title:"How-to: Access to internal systems",permalink:"/next/How-to_Access_to_internal_systems"},next:{title:"How-to: INTERNAL",permalink:"/next/How-to_INTERNAL"}},l={},d=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3},{value:"Example 3",id:"example-3",level:2},{value:"Task",id:"task-2",level:3},{value:"Solution",id:"solution-2",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(n.h3,{id:"task",children:"Task"}),"\n",(0,r.jsx)(n.p,{children:"We have a list of orders."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"CLASS Order 'Order';\ndate 'Date' = DATA DATE (Order);\nnumber 'Number' = DATA STRING[30] (Order);\n\nFORM orders 'Purchase orders'\n    OBJECTS o = Order\n    PROPERTIES(o) date, number, NEW, DELETE\n;\n\nNAVIGATOR {\n    NEW orders;\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["We need to export this list to CSV and keep the date in the ISO format ",(0,r.jsx)(n.code,{children:"YYYY-MM-DD"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"solution",children:"Solution"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"toISO = FORMULA STRING[10] 'to_char($1,\\'YYYY-MM-DD\\')';\n\nexportToCSV 'Export to CSV' () {\n    LOCAL file = FILE ();\n    EXPORT CSV FROM toISO(date(Order o)), number(o) TO file;\n    open(file());\n}\n\nEXTEND FORM orders\n    PROPERTIES() exportToCSV\n;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To solve this task we use the ",(0,r.jsxs)(n.a,{href:"/next/FORMULA_operator",children:[(0,r.jsx)(n.code,{children:"FORMULA"})," operator"]})," to create a new property that takes a date and returns its value as a string in the ",(0,r.jsx)(n.code,{children:"YYYY-MM-DD"})," format. The expression contains ",(0,r.jsx)(n.a,{href:"https://www.postgresql.org/docs/11/functions-formatting.html",children:(0,r.jsx)(n.code,{children:"to_char"})})," which is a standard PostgreSQL function."]}),"\n",(0,r.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(n.h3,{id:"task-1",children:"Task"}),"\n",(0,r.jsxs)(n.p,{children:["Similar to ",(0,r.jsx)(n.a,{href:"#example-1",children:(0,r.jsx)(n.strong,{children:"Example 1"})}),". New lines containing quantity and amount have been added to the orders."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"CLASS OrderDetail;\norder = DATA Order (OrderDetail) NONULL DELETE;\n\nquantity 'Qty' = DATA NUMERIC[14,3] (OrderDetail);\nsum 'Amount' = DATA NUMERIC[14,2] (OrderDetail);\n\nEXTEND FORM orders\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) quantity, sum, NEW, DELETE\n    FILTERS order(d) = o\n;\n"})}),"\n",(0,r.jsx)(n.p,{children:"We need to export all the lines from a given order as CSV file in which quantities and amounts are shortened to 3 and 2 characters respectively. In addition, the numbers must be split into triads."}),"\n",(0,r.jsx)(n.h3,{id:"solution-1",children:"Solution"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"toString = FORMULA TEXT 'to_char($1,$2)';\n\nexportToCSV 'Export to CSV' (Order o) {\n    LOCAL file = FILE ();\n    EXPORT CSV FROM toISO(date(o)), number(o), toString(quantity(OrderDetail d), '999 999.999'), toString(sum(d), '999 999.99') WHERE order(d) = o TO file;\n    open(file());\n}\n\nEXTEND FORM orders\n    PROPERTIES(o) exportToCSV\n;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["We create the ",(0,r.jsx)(n.code,{children:"toString"})," property that takes two parameters (numeric value and format) and returns a value of the ",(0,r.jsx)(n.code,{children:"TEXT"})," type. When exporting, we pass the required format as the second parameter."]}),"\n",(0,r.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,r.jsx)(n.h3,{id:"task-2",children:"Task"}),"\n",(0,r.jsxs)(n.p,{children:["Similar to ",(0,r.jsx)(n.a,{href:"#example-2",children:(0,r.jsx)(n.strong,{children:"Example 2"})}),"."]}),"\n",(0,r.jsx)(n.p,{children:"We need to add a column that will be marked when the given order number contains only digits."}),"\n",(0,r.jsx)(n.h3,{id:"solution-2",children:"Solution"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"onlyDigits = FORMULA NULL BOOLEAN 'CASE WHEN trim($1) ~ \\'^[0-9]*$\\' THEN 1 ELSE NULL END';\n\nEXTEND FORM orders\n    PROPERTIES 'Only numbers' = onlyDigits(number(o))\n;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Since single quotes are used in the formula, make sure to ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Escape_character",children:"escape"})," them with a backslash ",(0,r.jsx)(n.code,{children:"\\"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Note that the native ",(0,r.jsx)(n.code,{children:"BOOLEAN"})," type allows only 2 values: ",(0,r.jsx)(n.code,{children:"TRUE"})," and ",(0,r.jsx)(n.code,{children:"NULL"}),". Therefore, when composing a logical expression, make sure to convert its negative value to ",(0,r.jsx)(n.code,{children:"NULL"}),". In addition, the platform must explicitly know whether the expression can return an undefined value. This is why the keyword ",(0,r.jsx)(n.code,{children:"FORMULA"})," must be followed by the corresponding marker."]}),"\n",(0,r.jsxs)(n.p,{children:["At the database level, the ",(0,r.jsx)(n.code,{children:"BOOLEAN"})," type is stored as numeric value (",(0,r.jsx)(n.code,{children:"1"})," or ",(0,r.jsx)(n.code,{children:"null"}),"), and therefore the properties of this type must also return a numeric value. The developer must check that the return type of the expression matches the specified type. Otherwise, the behavior will be unpredictable (but in most cases a request will simply return an error)."]}),"\n",(0,r.jsxs)(n.p,{children:["Keep in mind that if any property composed by the ",(0,r.jsx)(n.code,{children:"FORMULA"})," operator receives ",(0,r.jsx)(n.code,{children:"NULL"})," as argument, then the overall result will always be ",(0,r.jsx)(n.code,{children:"NULL"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(96540);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);