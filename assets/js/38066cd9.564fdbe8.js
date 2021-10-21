(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[13416],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return g},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,g=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,d=u["".concat(p,".").concat(m)]||u[m]||l[m]||o;return n?r.createElement(d,i(i({ref:t},g),{},{components:n})):r.createElement(d,i({ref:t},g))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},67523:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return g},default:function(){return u}});var r=n(74034),a=n(79973),o=(n(67294),n(3905)),i=["components"],c={title:"Aggregations"},p=void 0,s={unversionedId:"Aggregations",id:"Aggregations",isDocsHomePage:!1,title:"Aggregations",description:"Aggregation is the creation of a unique (aggregate) of the object corresponding to each non-NULL value of some aggregated property. Each such object is assumed to have properties that map this object to each aggregated property parameter, and, conversely, a property that maps the aggregated property parameters to this object.",source:"@site/docs/Aggregations.md",sourceDirName:".",slug:"/Aggregations",permalink:"/next/Aggregations",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Aggregations.md",tags:[],version:"current",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"7/7/2021",frontMatter:{title:"Aggregations"},sidebar:"learn",previous:{title:"Static objects",permalink:"/next/Static_objects"},next:{title:"Overview",permalink:"/next/View_logic"}},g=[{value:"Language",id:"language",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],l={toc:g};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Aggregation is the creation of a unique (",(0,o.kt)("em",{parentName:"p"},"aggregate"),") of the object corresponding to each non-",(0,o.kt)("inlineCode",{parentName:"p"},"NULL")," value of some ",(0,o.kt)("em",{parentName:"p"},"aggregated")," property. Each such object is assumed to have properties that map this object to each aggregated property parameter, and, conversely, a property that maps the aggregated property parameters to this object. "),(0,o.kt)("p",null,"The aggregated object and each aggregated property parameter must belong to a specified ",(0,o.kt)("a",{parentName:"p",href:"/next/Classes"},"class"),"."),(0,o.kt)("p",null,"The aggregation mechanism is implemented using two ",(0,o.kt)("a",{parentName:"p",href:"/next/Simple_constraints"},"consequences")," with automatic resolution and an ",(0,o.kt)("a",{parentName:"p",href:"/next/Grouping_GROUP"},"aggregation")," operator. With the help of the aggregation operator, the first consequence creates an object when the aggregated property becomes non-",(0,o.kt)("inlineCode",{parentName:"p"},"NULL"),", and writes the necessary values to all its properties. The second consequence deletes the object when the aggregated property becomes ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,o.kt)("h3",{id:"language"},"Language"),(0,o.kt)("p",null,"To create aggregations, use the ",(0,o.kt)("a",{parentName:"p",href:"/next/AGGR_operator"},"operator",(0,o.kt)("inlineCode",{parentName:"a"},"AGGR")),"."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS A; CLASS B; CLASS C;\nf = DATA INTEGER (A, B);\nc = AGGR C WHERE f(A a, B b) MATERIALIZED INDEXED;\n\nCLASS AB;\nab = AGGR AB WHERE A a IS A AND B b IS B; // for each A B pair creates an object AB\n\nCLASS Shipment 'Delivery';\ndate = ABSTRACT DATE (Shipment);\nCLASS Invoice 'Invoice';\ncreateShipment 'Create delivery' = DATA BOOLEAN (Invoice);\ndate 'Shipment date' = DATA DATE (Invoice);\nCLASS ShipmentInvoice 'Delivery by invoice' : Shipment;\n// creating a delivery by invoice, if the option for delivery creation is defined for the invoice\nshipment(Invoice invoice) = AGGR ShipmentInvoice WHERE createShipment(invoice); \ndate(ShipmentInvoice si) += sum(date(invoice(si)),1); // delivery date = invoice date + 1\n")))}u.isMDXComponent=!0}}]);