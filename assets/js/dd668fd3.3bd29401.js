"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[87917],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,p(p({ref:t},l),{},{components:r})):n.createElement(f,p({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},82013:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c}});var n=r(83117),a=(r(67294),r(3905));const o={title:"CHANGE operator"},p=void 0,i={unversionedId:"CHANGE_operator",id:"CHANGE_operator",title:"CHANGE operator",description:"The CHANGE operator creates an action that changes properties.",source:"@site/docs/CHANGE_operator.md",sourceDirName:".",slug:"/CHANGE_operator",permalink:"/CHANGE_operator",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/CHANGE_operator.md",tags:[],version:"current",lastUpdatedAt:1624878371,formattedLastUpdatedAt:"Jun 28, 2021",frontMatter:{title:"CHANGE operator"},sidebar:"learn",previous:{title:"ASK operator",permalink:"/ASK_operator"},next:{title:"BREAK operator",permalink:"/BREAK_operator"}},s={},c=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}],l={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"CHANGE")," operator creates an ",(0,a.kt)("a",{parentName:"p",href:"/Actions"},"action")," that ",(0,a.kt)("a",{parentName:"p",href:"/Property_change_CHANGE"},"changes properties"),"."),(0,a.kt)("h3",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[CHANGE] propertyId(expr1, ..., exprN) <- valueExpr [WHERE whereExpr]\n")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"CHANGE")," operator creates an action that changes a property when a condition is met. This operator  can add its own local parameters when specifying the property whose value is to be changed. These parameters correspond to the objects being iterated and are not parameters of the created action. "),(0,a.kt)("p",null,"The condition is defined by the ",(0,a.kt)("inlineCode",{parentName:"p"},"WHERE")," block. If this block is not specified, it is assumed that the condition is always met. "),(0,a.kt)("p",null,"The keyword ",(0,a.kt)("inlineCode",{parentName:"p"},"CHANGE"),", which defines an operator, may be omitted."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"propertyId")),(0,a.kt)("p",{parentName:"li"},"  ",(0,a.kt)("a",{parentName:"p",href:"/IDs#propertyid"},"ID of the property")," whose value is being changed. The property must be created by certain operators so that its value can be changed. You can change the values of properties created using the operators ",(0,a.kt)("a",{parentName:"p",href:"/DATA_operator"},(0,a.kt)("inlineCode",{parentName:"a"},"DATA"))," , ",(0,a.kt)("a",{parentName:"p",href:"/ABSTRACT_operator"},(0,a.kt)("inlineCode",{parentName:"a"},"ABSTRACT")),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"LOCAL"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"expr1, ..., exprN")),(0,a.kt)("p",{parentName:"li"},"  A list of ",(0,a.kt)("a",{parentName:"p",href:"/Expression"},"expressions")," or ",(0,a.kt)("a",{parentName:"p",href:"/IDs#paramid"},"typed parameters")," defining arguments to the property being changed. When using typed parameters, you can both access already declared parameters and declare new local parameters. When using expressions, new local parameters cannot be added. The number of expressions in this list must equal to the number of parameters of the property being changed. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"valueExpr")),(0,a.kt)("p",{parentName:"li"},"  The expression to whose value the property value must be changed.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"whereExpr")),(0,a.kt)("p",{parentName:"li"},"  An expression whose value is a condition for the change being created. If not specified, it is considered equal to ",(0,a.kt)("inlineCode",{parentName:"p"},"TRUE"),"."))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"// set a 15 percent discount for all customers who have an order amount over 100\nCLASS Customer;\ndiscount = DATA NUMERIC[5,2] (Customer);\ntotalOrders = DATA NUMERIC[14,2] (Customer);\nsetDiscount  {\n    discount(Customer c) <- 15 WHERE totalOrders(c) > 100;\n}\n\ndiscount = DATA NUMERIC[5,2] (Customer, Item);\nin = DATA BOOLEAN (Item);\n// change the discount for selected products for a customer\nsetDiscount (Customer c)  {\n    discount(c, Item i) <- 15 WHERE in(i);\n}\n\n// copy property g to property f\nf = DATA INTEGER (INTEGER);\ng = DATA INTEGER (INTEGER);\ncopyFG  {\n    f(a) <- g(a);\n}\n")))}u.isMDXComponent=!0}}]);