(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[5996],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},99977:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={title:"How-to: FORMULA"},l={unversionedId:"How-to_FORMULA",id:"How-to_FORMULA",isDocsHomePage:!1,title:"How-to: FORMULA",description:"Example 1",source:"@site/docs/How-to_FORMULA.md",sourceDirName:".",slug:"/How-to_FORMULA",permalink:"/next/How-to_FORMULA",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/How-to_FORMULA.md",version:"current",lastUpdatedAt:1622042248,formattedLastUpdatedAt:"5/26/2021",frontMatter:{title:"How-to: FORMULA"},sidebar:"learn",previous:{title:"How-to: Access to internal systems",permalink:"/next/How-to_Access_to_internal_systems"},next:{title:"How-to: INTERNAL",permalink:"/next/How-to_INTERNAL"}},s=[{value:"Example 1",id:"example-1",children:[{value:"Task",id:"task",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Task",id:"task-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Task",id:"task-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]}],p={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"example-1"},"Example 1"),(0,o.kt)("h3",{id:"task"},"Task"),(0,o.kt)("p",null,"We have a list of orders."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Order 'Order';\ndate 'Date' = DATA DATE (Order);\nnumber 'Number' = DATA STRING[30] (Order);\n\nFORM orders 'Purchase orders'\n    OBJECTS o = Order\n    PROPERTIES(o) date, number, NEW, DELETE\n;\n\nNAVIGATOR {\n    NEW orders;\n}\n")),(0,o.kt)("p",null,"We need to export this list to CSV and keep the date in the ISO format ",(0,o.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DD"),"."),(0,o.kt)("h3",{id:"solution"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"toISO = FORMULA STRING[10] 'to_char($1,\\'YYYY-MM-DD\\')';\n\nexportToCSV 'Export to CSV' () {\n    LOCAL file = FILE ();\n    EXPORT CSV FROM toISO(date(Order o)), number(o) TO file;\n    open(file());\n}\n\nEXTEND FORM orders\n    PROPERTIES() exportToCSV\n;\n")),(0,o.kt)("p",null,"To solve this task we use the ",(0,o.kt)("a",{parentName:"p",href:"/next/FORMULA_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"FORMULA")," operator")," to create a new property that takes a date and returns its value as a string in the ",(0,o.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DD")," format. The expression contains ",(0,o.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/11/functions-formatting.html"},(0,o.kt)("inlineCode",{parentName:"a"},"to_char"))," which is a standard PostgreSQL function."),(0,o.kt)("h2",{id:"example-2"},"Example 2"),(0,o.kt)("h3",{id:"task-1"},"Task"),(0,o.kt)("p",null,"Similar to ",(0,o.kt)("a",{parentName:"p",href:"#example-1"},(0,o.kt)("strong",{parentName:"a"},"Example 1")),". New lines containing quantity and amount have been added to the orders."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS OrderDetail;\norder = DATA Order (OrderDetail) NONULL DELETE;\n\nquantity 'Qty' = DATA NUMERIC[14,3] (OrderDetail);\nsum 'Amount' = DATA NUMERIC[14,2] (OrderDetail);\n\nEXTEND FORM orders\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) quantity, sum, NEW, DELETE\n    FILTERS order(d) = o\n;\n")),(0,o.kt)("p",null,"We need to export all the lines from a given order as CSV file in which quantities and amounts are shortened to 3 and 2 characters respectively. In addition, the numbers must be split into triads."),(0,o.kt)("h3",{id:"solution-1"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"toString = FORMULA TEXT 'to_char($1,$2)';\n\nexportToCSV 'Export to CSV' (Order o) {\n    LOCAL file = FILE ();\n    EXPORT CSV FROM toISO(date(o)), number(o), toString(quantity(OrderDetail d), '999 999.999'), toString(sum(d), '999 999.99') WHERE order(d) = o TO file;\n    open(file());\n}\n\nEXTEND FORM orders\n    PROPERTIES(o) exportToCSV\n;\n")),(0,o.kt)("p",null,"We create the ",(0,o.kt)("inlineCode",{parentName:"p"},"toString")," property that takes two parameters (numeric value and format) and returns a value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"TEXT")," type. When exporting, we pass the required format as the second parameter."),(0,o.kt)("h2",{id:"example-3"},"Example 3"),(0,o.kt)("h3",{id:"task-2"},"Task"),(0,o.kt)("p",null,"Similar to ",(0,o.kt)("a",{parentName:"p",href:"#example-2"},(0,o.kt)("strong",{parentName:"a"},"Example 2")),"."),(0,o.kt)("p",null,"We need to add a column that will be marked when the given order number contains only digits."),(0,o.kt)("h3",{id:"solution-2"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"onlyDigits = FORMULA NULL BOOLEAN 'CASE WHEN trim($1) ~ \\'^[0-9]*$\\' THEN 1 ELSE NULL END';\n\nEXTEND FORM orders\n    PROPERTIES 'Only numbers' = onlyDigits(number(o))\n;\n")),(0,o.kt)("p",null,"Since single quotes are used in the formula, make sure to ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Escape_character"},"escape")," them with a backslash ",(0,o.kt)("inlineCode",{parentName:"p"},"\\"),"."),(0,o.kt)("p",null,"Note that the native ",(0,o.kt)("inlineCode",{parentName:"p"},"BOOLEAN")," type allows only 2 values: ",(0,o.kt)("inlineCode",{parentName:"p"},"TRUE")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL"),". Therefore, when composing a logical expression, make sure to convert its negative value to ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL"),". In addition, the platform must explicitly know whether the expression can return an undefined value. This is why the keyword ",(0,o.kt)("inlineCode",{parentName:"p"},"FORMULA")," must be followed by the corresponding marker."),(0,o.kt)("p",null,"At the database level, the ",(0,o.kt)("inlineCode",{parentName:"p"},"BOOLEAN")," type is stored as numeric value (",(0,o.kt)("inlineCode",{parentName:"p"},"1")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"), and therefore the properties of this type must also return a numeric value. The developer must check that the return type of the expression matches the specified type. Otherwise, the behavior will be unpredictable (but in most cases a request will simply return an error)."),(0,o.kt)("p",null,"Keep in mind that if any property composed by the ",(0,o.kt)("inlineCode",{parentName:"p"},"FORMULA")," operator receives ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL")," as argument, then the overall result will always be ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL"),"."))}u.isMDXComponent=!0}}]);