"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[29757],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return u}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(r),u=n,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},82693:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return l}});var a=r(83117),n=(r(67294),r(3905));const o={title:"NEW operator"},i=void 0,p={unversionedId:"NEW_operator",id:"NEW_operator",title:"NEW operator",description:"The NEW operator creates an action that creates objects of the specified class.",source:"@site/docs/NEW_operator.md",sourceDirName:".",slug:"/NEW_operator",permalink:"/NEW_operator",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/NEW_operator.md",tags:[],version:"current",lastUpdatedAt:1624529220,formattedLastUpdatedAt:"Jun 24, 2021",frontMatter:{title:"NEW operator"},sidebar:"learn",previous:{title:"MULTI operator",permalink:"/MULTI_action_operator"},next:{title:"NESTEDSESSION operator",permalink:"/NESTEDSESSION_operator"}},s={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}],c={toc:l};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"NEW")," operator creates an ",(0,n.kt)("a",{parentName:"p",href:"/Actions"},"action")," that ",(0,n.kt)("a",{parentName:"p",href:"/New_object_NEW"},"creates objects")," of the specified ",(0,n.kt)("a",{parentName:"p",href:"/Classes"},"class"),"."),(0,n.kt)("h3",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"NEW className [WHERE whereExpr] [TO propertyId(prm1, ..., prmN)]\n")),(0,n.kt)("h3",{id:"description"},"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"NEW")," operator creates an action which creates objects of the specified class and writes them as the returned values of certain ",(0,n.kt)("a",{parentName:"p",href:"/Properties"},"properties"),". This operator can add its local ",(0,n.kt)("a",{parentName:"p",href:"/Actions"},"parameters")," when defining a condition in the ",(0,n.kt)("inlineCode",{parentName:"p"},"WHERE")," block. These parameters correspond to the objects being iterated for which the object will be created and are not parameters of the created action. "),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"TO")," block is used to define the ",(0,n.kt)("a",{parentName:"p",href:"/Data_properties_DATA"},"data property")," to which value the created object is written. "),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"There is a special option with the same name (",(0,n.kt)("inlineCode",{parentName:"p"},"NEW"),") in the ",(0,n.kt)("a",{parentName:"p",href:"/FOR_operator"},(0,n.kt)("inlineCode",{parentName:"a"},"FOR")," operator")," for creating objects, and it is recommended to use it when possible.")),(0,n.kt)("h3",{id:"parameters"},"Parameters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"className")),(0,n.kt)("p",{parentName:"li"},"  Name of the ",(0,n.kt)("a",{parentName:"p",href:"/User_classes"},"custom")," class for the created objects. ",(0,n.kt)("a",{parentName:"p",href:"/IDs#cid"},"Composite ID"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"whereExpr")),(0,n.kt)("p",{parentName:"li"},"  An ",(0,n.kt)("a",{parentName:"p",href:"/Expression"},"expression")," which value is the condition of the created action. In this expression you can both access already declared parameters and declare new local parameters.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"propertyId")),(0,n.kt)("p",{parentName:"li"},"  An ",(0,n.kt)("a",{parentName:"p",href:"/IDs#propertyid"},"ID of the property")," to which value the created objects are written. If the property is not specified, then:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"if the condition is not defined, it is automatically set to  ",(0,n.kt)("inlineCode",{parentName:"li"},"System.addedObject[]")),(0,n.kt)("li",{parentName:"ul"},"if the condition is defined, the created objects are not written anywhere"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"prm1, ..., prmN")),(0,n.kt)("p",{parentName:"li"},"  A list of data property parameter names. You can use only the local parameters that were added in the ",(0,n.kt)("inlineCode",{parentName:"p"},"WHERE")," block. The number of parameters in the list must be equal to the number of parameters of the data property. "))),(0,n.kt)("h3",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lsf"},"\nnewSku ()  {\n    LOCAL addedSkus = Sku (INTEGER);\n    NEW Sku WHERE iterate(i, 1, 3) TO addedSkus(i);\n    FOR Sku s = addedSkus(i) DO {\n        id(s) <- 425;\n        name(s) <- 'New Sku';\n    }\n}\n")))}d.isMDXComponent=!0}}]);