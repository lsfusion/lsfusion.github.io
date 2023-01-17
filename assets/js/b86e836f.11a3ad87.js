"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[62923],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},83270:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return c}});var r=n(83117),o=(n(67294),n(3905));const a={title:"How-to: Matrix"},l=void 0,i={unversionedId:"How-to_Matrix",id:"How-to_Matrix",title:"How-to: Matrix",description:"Example 1",source:"@site/docs/How-to_Matrix.md",sourceDirName:".",slug:"/How-to_Matrix",permalink:"/How-to_Matrix",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/How-to_Matrix.md",tags:[],version:"current",lastUpdatedAt:1622042248,formattedLastUpdatedAt:"May 26, 2021",frontMatter:{title:"How-to: Matrix"},sidebar:"learn",previous:{title:"How-to: Navigator",permalink:"/How-to_Navigator"},next:{title:"How-to: Table status",permalink:"/How-to_Table_status"}},s={},c=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3},{value:"Example 3",id:"example-3",level:2},{value:"Task",id:"task-2",level:3},{value:"Solution",id:"solution-2",level:3}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"example-1"},"Example 1"),(0,o.kt)("h3",{id:"task"},"Task"),(0,o.kt)("p",null,"We have the concepts of books and buyers defined. A price is defined for each book and buyer."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[50] (Book) IN id;\n\nCLASS Customer 'Customer';\nname 'Name' = DATA ISTRING[50] (Customer) IN id;\n\nprice 'Price' = DATA NUMERIC[14,2] (Book, Customer);\n")),(0,o.kt)("p",null,"We need to create a form with a single table where rows will contain books and columns will contain buyers. Each cell should have a price for its book and buyer."),(0,o.kt)("h3",{id:"solution"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM prices 'Prices'\n    OBJECTS c = Customer\n\n    OBJECTS b = Book\n    PROPERTIES name(b) READONLY, price(b, c) COLUMNS (c) HEADER name(c)\n;\n")),(0,o.kt)("p",null,"Object ",(0,o.kt)("inlineCode",{parentName:"p"},"c")," will not be displayed on the form, since no properties have been added for it."),(0,o.kt)("p",null,"The form will look like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(50094).Z,width:"372",height:"218"})),(0,o.kt)("h2",{id:"example-2"},"Example 2"),(0,o.kt)("h3",{id:"task-1"},"Task"),(0,o.kt)("p",null,"Similar to ",(0,o.kt)("a",{parentName:"p",href:"#example-1"},(0,o.kt)("strong",{parentName:"a"},"Example 1")),", only there is a deferred payment period for each book and buyer."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"gracePeriod 'Delay, days' = DATA INTEGER (Book, Customer);\n")),(0,o.kt)("p",null,"We need to create a form with a single table where rows will contain books and columns will contain buyers. For each buyer, there will be two columns next to them: price and deferred payment period. We need to highlight columns with deferred payment information in yellow. It should be possible to choose which buyers to display in the columns."),(0,o.kt)("h3",{id:"solution-1"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"selected 'Mark' = DATA BOOLEAN (Customer);\n\nheaderName 'Price header' (Customer c) = name(c) + ': Price';\nheaderGrace 'Dealy header' (Customer c) = name(c) + ': Delay, days';\n\nFORM pricesAndGracePeriods 'Prices and delays'\n    OBJECTS s = Customer\n    PROPERTIES selected(s), name(s) READONLY\n\n    OBJECTS c = Customer\n    FILTERS selected(c)\n\n    OBJECTS b = Book\n    PROPERTIES name(b) READONLY,\n               price(b, c) COLUMNS 'priceAndGrace' (c) HEADER headerName(c),\n               gracePeriod(b, c) COLUMNS 'priceAndGrace' (c) HEADER headerGrace(c)\n;\n\nDESIGN pricesAndGracePeriods {\n    BOX(b) {\n        fill = 3;\n        PROPERTY(gracePeriod(b, c)) {\n            background = #FFFFAA;\n        }\n    }\n}\n")),(0,o.kt)("p",null,"Only objects that meet the filter condition for object ",(0,o.kt)("inlineCode",{parentName:"p"},"c")," will be shown in the columns. Besides, the columns will be shown in the same order as the objects."),(0,o.kt)("p",null,"All properties with the same ID after the word ",(0,o.kt)("inlineCode",{parentName:"p"},"COLUMNS")," will go side by side for the same objects. In this case, the price and the deferred payment period for the first buyer, then the price and deferral for the second one, and so forth. If IDs were different or unspecified, prices for all buyers would have been shown first followed by deferred payment values."),(0,o.kt)("p",null,"The form will look like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(68306).Z,width:"578",height:"361"})),(0,o.kt)("h2",{id:"example-3"},"Example 3"),(0,o.kt)("h3",{id:"task-2"},"Task"),(0,o.kt)("p",null,"We need to create a form containing a matrix with a specified number of rows and columns. The user should be able to check each cell."),(0,o.kt)("h3",{id:"solution-2"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"in 'On' = DATA BOOLEAN (INTEGER, INTEGER);\n\nrow 'Row header' (INTEGER r) = 'Row ' + (r AS INTEGER);\ncolumn 'Column header' (INTEGER c) = 'Column ' + (c AS INTEGER);\n\nFORM matrix 'Matrix'\n    OBJECTS m = (rows = INTEGER, columns = INTEGER) PANEL\n    PROPERTIES rs = VALUE(rows), cs = VALUE(columns)\n\n    OBJECTS c = INTEGER\n    FILTERS iterate(c, 1, columns)\n\n    OBJECTS r = INTEGER\n    PROPERTIES(r) row\n    PROPERTIES in(r, c) COLUMNS (c) HEADER column(c)\n    FILTERS iterate(r, 1, rows)\n;\n\nDESIGN matrix {\n    PROPERTY(rs) { caption = 'Number of rows'; }\n    PROPERTY(cs) { caption = 'Number of columns'; }\n}\n")),(0,o.kt)("p",null,"In real projects, we recommend limiting the number of rows and columns during data entry or filtering. Otherwise, if the user enters too many rows or columns, the system will generate a CTE query for the ",(0,o.kt)("inlineCode",{parentName:"p"},"iterate")," property which, in turn, will produce a table containing entered (very big) number of records and that may cause the server database to crash."),(0,o.kt)("p",null,"Result:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(91865).Z,width:"1182",height:"525"})))}d.isMDXComponent=!0},50094:function(e,t,n){t.Z=n.p+"assets/images/How-to_Matrix_ex1-20c502c1ad11f02d404b6f5b3e68ea18.png"},68306:function(e,t,n){t.Z=n.p+"assets/images/How-to_Matrix_ex2-9c8cdab1b451fede5fa58606076f3f52.png"},91865:function(e,t,n){t.Z=n.p+"assets/images/How-to_Matrix_ex3-4911fa19524c50949a0c169601f27c71.png"}}]);