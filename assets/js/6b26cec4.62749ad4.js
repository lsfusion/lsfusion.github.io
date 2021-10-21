(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[78966],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},31045:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var n=r(74034),o=r(79973),a=(r(67294),r(3905)),i=["components"],p={title:"SEEK operator"},l=void 0,c={unversionedId:"SEEK_operator",id:"SEEK_operator",isDocsHomePage:!1,title:"SEEK operator",description:"The SEEK operator creates an action that seeks specified objects on a form.",source:"@site/docs/SEEK_operator.md",sourceDirName:".",slug:"/SEEK_operator",permalink:"/next/SEEK_operator",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/SEEK_operator.md",tags:[],version:"current",lastUpdatedAt:1624529220,formattedLastUpdatedAt:"6/24/2021",frontMatter:{title:"SEEK operator"},sidebar:"learn",previous:{title:"RETURN operator",permalink:"/next/RETURN_operator"},next:{title:"SHOW operator",permalink:"/next/SHOW_operator"}},s=[{value:"Syntax",id:"syntax",children:[],level:3},{value:"Description",id:"description",children:[],level:3},{value:"Parameters",id:"parameters",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],d={toc:s};function u(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"SEEK")," operator creates an ",(0,a.kt)("a",{parentName:"p",href:"/next/Actions"},"action")," that ",(0,a.kt)("a",{parentName:"p",href:"/next/Search_SEEK"},"seeks specified objects")," on a ",(0,a.kt)("a",{parentName:"p",href:"/next/Forms"},"form"),"."),(0,a.kt)("h3",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SEEK [FIRST | LAST] formObjectId = expr\nSEEK [FIRST | LAST] formGroupObjectId [OBJECTS formObject1 = expr1, ..., formObjectK = exprk]\nSEEK NULL formGroupObjectId\n")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"SEEK")," operator creates an action that changes the current objects on a form. There are two forms of this operator. In the first form the required value of a single object on a form is specified (this object may be a part of an object group), in the second form specific object group and the required values for certain objects of this group are specified (these objects shall be called ",(0,a.kt)("em",{parentName:"p"},"seek objects"),")"),(0,a.kt)("p",null,"If the seek object group contains objects other than seek objects, for these objects (which shall be called ",(0,a.kt)("em",{parentName:"p"},"additional"),") the object collection that will be selected as current is determined by the options ",(0,a.kt)("inlineCode",{parentName:"p"},"FIRST")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"LAST"),"."),(0,a.kt)("p",null,"If the required object collection is not found for the search objects, the current object collection will be the closest to the required one. The direction in which this closest object collection will be selected is also determined by the options ",(0,a.kt)("inlineCode",{parentName:"p"},"FIRST")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"LAST"),"."),(0,a.kt)("p",null,"Also, in the second form of the operator (when a group of objects is specified) it is possible to reset all objects of the specified group to ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),". In this case, the seek direction is not applicable/not specified."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"FIRST")),(0,a.kt)("p",{parentName:"li"},"  Keyword. If specified, the current set of objects for:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"additional objects will be the ",(0,a.kt)("strong",{parentName:"li"},"first")," matching collection, selected in accordance with the specified order. "),(0,a.kt)("li",{parentName:"ul"},"main objects, if the required object collection is not found, will be the ",(0,a.kt)("strong",{parentName:"li"},"next")," closest collection, selected in accordance with the specified order. ")),(0,a.kt)("p",{parentName:"li"},"This is the default value. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"LAST")),(0,a.kt)("p",{parentName:"li"},"  Keyword. If specified, the current set of objects for:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"additional objects will be the ",(0,a.kt)("strong",{parentName:"li"},"last")," matching collection, selected in accordance with the specified order. "),(0,a.kt)("li",{parentName:"ul"},"main objects, if the required object collection is not found, will be the ",(0,a.kt)("strong",{parentName:"li"},"previous")," closest collection, selected in accordance with the specified order. "))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"NULL")),(0,a.kt)("p",{parentName:"li"},"  Keyword. If specified, the current values of the objects of the specified object group are set as equal to ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"formObjectId")),(0,a.kt)("p",{parentName:"li"},"  Global ",(0,a.kt)("a",{parentName:"p",href:"/next/IDs#groupobjectid"},"form object ID")," for which the required value is specified.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"expr")),(0,a.kt)("p",{parentName:"li"},"  An ",(0,a.kt)("a",{parentName:"p",href:"/next/Expression"},"expression")," whose value is the required value of the form object.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"formGroupObjectId")),(0,a.kt)("p",{parentName:"li"},"  A global ",(0,a.kt)("a",{parentName:"p",href:"/next/IDs#groupobjectid"},"ID for an object group")," for whose objects required values are specified.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"formObject1 ...  formObjectK")),(0,a.kt)("p",{parentName:"li"},"  List of form object names. May contain only a part of the objects of the specified object group. An object name is defined by a ",(0,a.kt)("a",{parentName:"p",href:"/next/IDs#id"},"simple ID"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"expr1 ... exprk")),(0,a.kt)("p",{parentName:"li"},"  A list of expressions whose values are the required values of the corresponding objects in the specified group of objects."))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"number = DATA INTEGER (Order);\nFORM orders\n    OBJECTS o = Order\n    PROPERTIES(o) READONLY number, currency, customer\n;\nnewOrder  {\n    NEW new = Order {\n        number(new) <- (GROUP MAX number(Order o)) (+) 1;\n        SEEK orders.o = new;\n    }\n}\nseekFirst  { SEEK FIRST orders.o; }\nseekLast  { SEEK LAST orders.o; }\n\nEXTEND FORM orders\n    PROPERTIES(o) newOrder, seekFirst, seekLast\n;\n")))}u.isMDXComponent=!0}}]);