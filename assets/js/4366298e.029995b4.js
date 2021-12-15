(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[29757],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return u}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(r),u=a,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},82693:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var n=r(74034),a=r(79973),o=(r(67294),r(3905)),i=["components"],p={title:"NEW operator"},s=void 0,l={unversionedId:"NEW_operator",id:"NEW_operator",isDocsHomePage:!1,title:"NEW operator",description:"The NEW operator creates an action that creates objects of the specified class.",source:"@site/docs/NEW_operator.md",sourceDirName:".",slug:"/NEW_operator",permalink:"/next/NEW_operator",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/NEW_operator.md",tags:[],version:"current",lastUpdatedAt:1624529220,formattedLastUpdatedAt:"6/24/2021",frontMatter:{title:"NEW operator"},sidebar:"learn",previous:{title:"MULTI operator",permalink:"/next/MULTI_action_operator"},next:{title:"NESTEDSESSION operator",permalink:"/next/NESTEDSESSION_operator"}},c=[{value:"Syntax",id:"syntax",children:[],level:3},{value:"Description",id:"description",children:[],level:3},{value:"Parameters",id:"parameters",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],d={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"NEW")," operator creates an ",(0,o.kt)("a",{parentName:"p",href:"/next/Actions"},"action")," that ",(0,o.kt)("a",{parentName:"p",href:"/next/New_object_NEW"},"creates objects")," of the specified ",(0,o.kt)("a",{parentName:"p",href:"/next/Classes"},"class"),"."),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NEW className [WHERE whereExpr] [TO propertyId(prm1, ..., prmN)]\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"NEW")," operator creates an action which creates objects of the specified class and writes them as the returned values of certain ",(0,o.kt)("a",{parentName:"p",href:"/next/Properties"},"properties"),". This operator can add its local ",(0,o.kt)("a",{parentName:"p",href:"/next/Actions"},"parameters")," when defining a condition in the ",(0,o.kt)("inlineCode",{parentName:"p"},"WHERE")," block. These parameters correspond to the objects being iterated for which the object will be created and are not parameters of the created action. "),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"TO")," block is used to define the ",(0,o.kt)("a",{parentName:"p",href:"/next/Data_properties_DATA"},"data property")," to which value the created object is written. "),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There is a special option with the same name (",(0,o.kt)("inlineCode",{parentName:"p"},"NEW"),") in the ",(0,o.kt)("a",{parentName:"p",href:"/next/FOR_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"FOR")," operator")," for creating objects, and it is recommended to use it when possible."))),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"className")),(0,o.kt)("p",{parentName:"li"},"  Name of the ",(0,o.kt)("a",{parentName:"p",href:"/next/User_classes"},"custom")," class for the created objects. ",(0,o.kt)("a",{parentName:"p",href:"/next/IDs#cid"},"Composite ID"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"whereExpr")),(0,o.kt)("p",{parentName:"li"},"  An ",(0,o.kt)("a",{parentName:"p",href:"/next/Expression"},"expression")," which value is the condition of the created action. In this expression you can both access already declared parameters and declare new local parameters.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"propertyId")),(0,o.kt)("p",{parentName:"li"},"  An ",(0,o.kt)("a",{parentName:"p",href:"/next/IDs#propertyid"},"ID of the property")," to which value the created objects are written. If the property is not specified, then:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"if the condition is not defined, it is automatically set to  ",(0,o.kt)("inlineCode",{parentName:"li"},"System.addedObject[]")),(0,o.kt)("li",{parentName:"ul"},"if the condition is defined, the created objects are not written anywhere"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"prm1, ..., prmN")),(0,o.kt)("p",{parentName:"li"},"  A list of data property parameter names. You can use only the local parameters that were added in the ",(0,o.kt)("inlineCode",{parentName:"p"},"WHERE")," block. The number of parameters in the list must be equal to the number of parameters of the data property. "))),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"\nnewSku ()  {\n    LOCAL addedSkus = Sku (INTEGER);\n    NEW Sku WHERE iterate(i, 1, 3) TO addedSkus(i);\n    FOR Sku s = addedSkus(i) DO {\n        id(s) <- 425;\n        name(s) <- 'New Sku';\n    }\n}\n")))}m.isMDXComponent=!0}}]);