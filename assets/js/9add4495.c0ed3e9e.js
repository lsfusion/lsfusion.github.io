(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[78658],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return u}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(r),u=n,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return r?a.createElement(h,i(i({ref:t},l),{},{components:r})):a.createElement(h,i({ref:t},l))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},78202:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s},default:function(){return l}});var a=r(22122),n=r(19756),o=(r(67294),r(3905)),i={title:"NEW operator"},p={unversionedId:"NEW_operator",id:"version-v4/NEW_operator",isDocsHomePage:!1,title:"NEW operator",description:"The NEW operator creates an action that creates objects of the specified class.",source:"@site/versioned_docs/version-v4/NEW_operator.md",sourceDirName:".",slug:"/NEW_operator",permalink:"/NEW_operator",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/NEW_operator.md",version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"NEW operator"},sidebar:"version-v4/learn",previous:{title:"MULTI operator",permalink:"/MULTI_action_operator"},next:{title:"NESTEDSESSION operator",permalink:"/NESTEDSESSION_operator"}},s=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:s};function l(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"NEW")," operator creates an ",(0,o.kt)("a",{parentName:"p",href:"/Actions"},"action")," that ",(0,o.kt)("a",{parentName:"p",href:"/New_object_NEW"},"creates objects")," of the specified ",(0,o.kt)("a",{parentName:"p",href:"/Classes"},"class"),"."),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NEW className [WHERE whereExpr] [TO propertyId(prm1, ..., prmN)]\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"NEW")," operator creates an action which creates objects of the specified class and writes them as the returned values of certain ",(0,o.kt)("a",{parentName:"p",href:"/Properties"},"properties"),". This operator can add its local ",(0,o.kt)("a",{parentName:"p",href:"/Actions"},"parameters")," when defining a condition in the ",(0,o.kt)("inlineCode",{parentName:"p"},"WHERE")," block. These parameters correspond to the objects being iterated for which the object will be created and are not parameters of the created action. "),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"TO")," block is used to define the ",(0,o.kt)("a",{parentName:"p",href:"/Data_properties_DATA"},"data property")," to which value the created object is written. "),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There is a special option with the same name (",(0,o.kt)("inlineCode",{parentName:"p"},"NEW"),") in the ",(0,o.kt)("a",{parentName:"p",href:"/FOR_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"FOR")," operator")," for creating objects, and it is recommended to use it when possible."))),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"className")),(0,o.kt)("p",{parentName:"li"},"  Name of the ",(0,o.kt)("a",{parentName:"p",href:"/User_classes"},"custom")," class for the created objects. ",(0,o.kt)("a",{parentName:"p",href:"/IDs#cid-broken"},"Composite ID"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"whereExpr")),(0,o.kt)("p",{parentName:"li"},"  An ",(0,o.kt)("a",{parentName:"p",href:"/Expression"},"expression")," which value is the condition of the created action. In this expression you can both access already declared parameters and declare new local parameters.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"propertyId")),(0,o.kt)("p",{parentName:"li"},"  An ",(0,o.kt)("a",{parentName:"p",href:"/IDs#propertyid-broken"},"ID of the property")," to which value the created objects are written. If the property is not specified, then:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"if the condition is not defined, it is automatically set to  ",(0,o.kt)("inlineCode",{parentName:"li"},"System.addedObject[]")),(0,o.kt)("li",{parentName:"ul"},"if the condition is defined, the created objects are not written anywhere"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"prm1, ..., prmN")),(0,o.kt)("p",{parentName:"li"},"  A list of data property parameter names. You can use only the local parameters that were added in the ",(0,o.kt)("inlineCode",{parentName:"p"},"WHERE")," block. The number of parameters in the list must be equal to the number of parameters of the data property. "))),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"\nnewSku ()  {\n    LOCAL addedSkus = Sku (INTEGER);\n    NEW Sku WHERE iterate(i, 1, 3) TO addedSkus(i);\n    FOR Sku s = addedSkus(i) DO {\n        id(s) <- 425;\n        name(s) <- 'New Sku';\n    }\n}\n")))}l.isMDXComponent=!0}}]);