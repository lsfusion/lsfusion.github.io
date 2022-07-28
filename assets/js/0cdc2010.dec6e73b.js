"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[94585],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56430:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var r=n(83117),a=(n(67294),n(3905));const i={title:"WHEN statement"},o=void 0,l={unversionedId:"WHEN_statement",id:"version-v4/WHEN_statement",title:"WHEN statement",description:"The WHEN statement adds a simple event handler.",source:"@site/versioned_docs/version-v4/WHEN_statement.md",sourceDirName:".",slug:"/WHEN_statement",permalink:"/WHEN_statement",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/WHEN_statement.md",tags:[],version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"WHEN statement"},sidebar:"version-v4/learn",previous:{title:"Event description block",permalink:"/Event_description_block"},next:{title:"<- WHEN statement",permalink:"/lt-_WHEN_statement"}},p={},s=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"WHEN")," statement adds a ",(0,a.kt)("a",{parentName:"p",href:"/Simple_event"},"simple event")," handler."),(0,a.kt)("h3",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"WHEN eventClause eventExpr [ORDER [DESC] orderExpr1, ..., orderExprN] DO eventAction;\n")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"WHEN")," statement adds a simple event handler. In a condition expression you can implicitly declare local parameters that can then be used in the event handler."),(0,a.kt)("p",null,"Also, the ",(0,a.kt)("inlineCode",{parentName:"p"},"ORDER")," block can be used to define the order in which the handler will be called for an object collection for which the condition on the simple event has been met. "),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"WHEN")," statement is much like the following statement:"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre"},"ON eventClause FOR eventExpr [ORDER [DESC] orderExpr1, ..., orderExprN] DO eventAction;\n")),(0,a.kt)("p",{parentName:"div"},"but it also has ",(0,a.kt)("a",{parentName:"p",href:"/Simple_event"},"a number of advantages"),"."))),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"eventClause")),(0,a.kt)("p",{parentName:"li"},"  ",(0,a.kt)("a",{parentName:"p",href:"/Event_description_block"},"Event description block"),". Describes the ",(0,a.kt)("a",{parentName:"p",href:"/Events"},"base event")," for the created handler.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"eventExpr")),(0,a.kt)("p",{parentName:"li"},"  An ",(0,a.kt)("a",{parentName:"p",href:"/Expression"},"expression")," whose value is used as a condition for the created simple event. If the obtained property does not contain the ",(0,a.kt)("a",{parentName:"p",href:"/Previous_value_PREV"},(0,a.kt)("inlineCode",{parentName:"a"},"PREV"))," operator, the platform automatically wraps it into the ",(0,a.kt)("a",{parentName:"p",href:"/Property_change_CHANGE"},(0,a.kt)("inlineCode",{parentName:"a"},"CHANGE"))," operator.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"eventAction")),(0,a.kt)("p",{parentName:"li"},"  A ",(0,a.kt)("a",{parentName:"p",href:"/Action_operators#contextdependent"},"context-dependent operator")," that describes an action to be added as an event handler.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"DESC")),(0,a.kt)("p",{parentName:"li"},"  Keyword. Specifies a reverse iteration order for object collections. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"orderExpr1, ..., orderExprM")),(0,a.kt)("p",{parentName:"li"},"  A list of expressions that defines the order in which handlers will be called for object collections for which an event condition has been met. To determine the order, first the value of the first expression is used; then, if equal, the value of the second is used, etc. "))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Stock;\nname = DATA STRING[50] (Stock);\n\nbalance = DATA INTEGER (Sku, Stock);\n\n// send an email when the balance is less than 0 as a result of applying session changes\nWHEN balance(Sku s, Stock st) < 0 DO\n      EMAIL SUBJECT 'The balance has become negative for the item ' + name(s) + ' in the warehouse ' + name(st);\n\nCLASS OrderDetail;\norder = DATA Order (OrderDetail) NONULL DELETE;\ndiscount = DATA NUMERIC[6,2] (OrderDetail);\n\nWHEN LOCAL CHANGED(customer(Order o)) AND name(customer(o)) == 'Best customer' DO\n    discount(OrderDetail d) <- 50 WHERE order(d) == o;\n")))}d.isMDXComponent=!0}}]);