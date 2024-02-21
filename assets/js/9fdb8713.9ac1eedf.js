"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[67721],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63212:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var r=n(83117),a=(n(67294),n(3905));const o={title:"FOR operator"},i=void 0,p={unversionedId:"FOR_operator",id:"version-v5/FOR_operator",title:"FOR operator",description:"The FOR operator creates an action that implements loop.",source:"@site/versioned_docs/version-v5/FOR_operator.md",sourceDirName:".",slug:"/FOR_operator",permalink:"/FOR_operator",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/FOR_operator.md",tags:[],version:"v5",lastUpdatedAt:1708525070,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"FOR operator"},sidebar:"learn",previous:{title:"EXTERNAL operator",permalink:"/EXTERNAL_operator"},next:{title:"IF ... THEN operator",permalink:"/IF_..._THEN_action_operator"}},l={},s=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"FOR")," operator creates an ",(0,a.kt)("a",{parentName:"p",href:"/Actions"},"action")," that implements ",(0,a.kt)("a",{parentName:"p",href:"/Loop_FOR"},"loop"),"."),(0,a.kt)("h3",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"FOR expression [ORDER [DESC] orderExpr1, ..., orderExprN]\n[NEW [alias =] className]\nDO action\n[ELSE alternativeAction]\n")),(0,a.kt)("p",null,"It is possible to include a ",(0,a.kt)("inlineCode",{parentName:"p"},"NEW")," block in the operator but not to specify a condition (considered equal to ",(0,a.kt)("inlineCode",{parentName:"p"},"TRUE"),"); in this case, the syntax is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NEW [alias =] className\naction\n")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"FOR")," operator creates an action that implements loop. This operator must add its local parameters when defining a condition. These parameters correspond to the objects being iterated and are not parameters of the created action. You can also use a ",(0,a.kt)("inlineCode",{parentName:"p"},"NEW")," block to specify the name of the ",(0,a.kt)("a",{parentName:"p",href:"/Classes"},"class")," of the object that will be created for each object collection that meets the condition. The name of this object needs to be specified. This name will be used as the name of the local parameter that the created object will be written to."),(0,a.kt)("p",null,"The object iteration order in the ",(0,a.kt)("inlineCode",{parentName:"p"},"FOR")," operator can be specified with an ",(0,a.kt)("inlineCode",{parentName:"p"},"ORDER")," block. If a new parameter is declared in the expressions that define the order (meaning that the parameter not met earlier in the ",(0,a.kt)("inlineCode",{parentName:"p"},"FOR")," option or in the upper context), the condition of all these expressions being non- ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," is automatically added."),(0,a.kt)("p",null,"The main action is specified after the keyword ",(0,a.kt)("inlineCode",{parentName:"p"},"DO"),"; an alternative may be specified after the keyword ",(0,a.kt)("inlineCode",{parentName:"p"},"ELSE"),"."),(0,a.kt)("p",null,"In the case when the operator contains a ",(0,a.kt)("inlineCode",{parentName:"p"},"NEW")," block, and no condition is specified, the main action will be called for the created object."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"expression")),(0,a.kt)("p",{parentName:"li"},"  ",(0,a.kt)("a",{parentName:"p",href:"/Expression"},"Expression")," defining a condition. In this expression, you can both access already declared parameters and declare new local parameters.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"DESC")),(0,a.kt)("p",{parentName:"li"},"  Keyword. Specifies a reverse iteration order for object collections. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"orderExpr1, ..., orderExprK")),(0,a.kt)("p",{parentName:"li"},"  A list of expressions that define the order in which object collections will be iterated over. To determine the order, first the value of the first expression is used; then, if equal, the value of the second is used, etc. If the list is undefined, iteration is performed in an arbitrary order.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"alias")),(0,a.kt)("p",{parentName:"li"},"  The name of the local parameter that will correspond to the object being created. ",(0,a.kt)("a",{parentName:"p",href:"/IDs#id"},"Simple ID"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"className")),(0,a.kt)("p",{parentName:"li"},"  The name of the class of the object to create. Defined by a ",(0,a.kt)("a",{parentName:"p",href:"/IDs#classid"},"class ID"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"action")),(0,a.kt)("p",{parentName:"li"},"  ",(0,a.kt)("a",{parentName:"p",href:"/Action_operators#contextdependent"},"Context-dependent action operator")," describing the main action.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"alternativeAction")),(0,a.kt)("p",{parentName:"li"},"  Context-dependent action operator defining an alternative action. Parameters added when defining the condition/creating the object cannot be used as parameters of this action."))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"name = DATA STRING[100] (Store);\n\ntestFor  {\n    LOCAL sum = INTEGER ();\n    FOR iterate(i, 1, 100) DO {\n        sum() <- sum() (+) i;\n    }\n\n    FOR in(Sku s) DO {\n        MESSAGE 'Sku ' + id(s) + ' was selected';\n    }\n\n    FOR Store st IS Store DO { // iterating over all objects of the Store class\n        FOR in(st, Sku s) DO { // iterating over all Sku for which in is set\n            MESSAGE 'There is Sku ' + id(s) + ' in store ' + name(st);\n        }\n\n    }\n}\n\nnewSku ()  {\n    NEW s = Sku {\n        id(s) <- 425;\n        name(s) <- 'New Sku';\n    }\n}\n\ncopy (Sku old)  {\n    NEW new = Sku {\n        id(new) <- id(old);\n        name(new) <- name(old);\n    }\n}\n\ncreateDetails (Order o)  {\n    FOR in(Sku s) NEW d = OrderDetail DO {\n        order(d) <- o;\n        sku(d) <- s;\n    }\n}\n")))}d.isMDXComponent=!0}}]);