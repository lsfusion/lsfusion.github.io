(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[82032],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,h=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13170:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o={title:"ABSTRACT operator"},l={unversionedId:"ABSTRACT_operator2",id:"ABSTRACT_operator2",isDocsHomePage:!1,title:"ABSTRACT operator",description:"The ABSTRACT operator creates an abstract property.",source:"@site/docs/ABSTRACT_operator2.md",sourceDirName:".",slug:"/ABSTRACT_operator2",permalink:"/ru/next/ABSTRACT_operator2",editUrl:"https://github.com/danchanka/platform/edit/master/docs/ru/ABSTRACT_operator2.md",version:"current",lastUpdatedAt:1618486385,formattedLastUpdatedAt:"15.04.2021",frontMatter:{title:"ABSTRACT operator"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"ABSTRACT")," operator creates an ",(0,i.kt)("a",{parentName:"p",href:"/ru/next/Property_extension"},"abstract property"),". "),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ABSTRACT [type [exclusionType]] [CHECKED] returnClassName(argClassName1, ..., argClassNameN)\n")),(0,i.kt)("p",null,"Where ",(0,i.kt)("inlineCode",{parentName:"p"},"exclusionType")," is of two types:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"EXCLUSIVE\nOVERRIDE [FIRST | LAST]\n")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ABSTRACT")," operator creates an abstract property, the implementations of which can be defined later (for example, in other ",(0,i.kt)("a",{parentName:"p",href:"/ru/next/Modules"},"modules")," dependent on the module containing the ",(0,i.kt)("inlineCode",{parentName:"p"},"ABSTRACT")," property). Implementations are added to the property using the ",(0,i.kt)("a",{parentName:"p",href:"/ru/next/Instruction_+="},"instruction ",(0,i.kt)("strong",{parentName:"a"},"+=")),". When calculating an abstract property, its ",(0,i.kt)("em",{parentName:"p"},"matching")," implementation is selected and calculated. The selection of the matching implementation depends on the ",(0,i.kt)("em",{parentName:"p"},"selection conditions")," that are defined when adding implementations, and on the ",(0,i.kt)("inlineCode",{parentName:"p"},"ABSTRACT")," operator type."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CASE")," - a general case. The selection condition will be explicitly specified in the implementation using the ",(0,i.kt)("a",{parentName:"li",href:"/ru/next/Instruction_+="},(0,i.kt)("inlineCode",{parentName:"a"},"WHEN")," block"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MULTI")," \u2013 a ",(0,i.kt)("a",{parentName:"li",href:"/ru/next/Property_extension#poly"},"polymorphic form"),". The selection condition is that the parameters match the implementation ",(0,i.kt)("a",{parentName:"li",href:"/ru/next/CLASS_operator"},"signature"),". This type is the default type and need not to be explicitly specified."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"VALUE")," - a polymorphic form. The selection condition will be definiteness (a none-",(0,i.kt)("inlineCode",{parentName:"li"},"NULL")," value) of the implementation value (essentially, the implementation itself).")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/ru/next/Property_extension#exclusive"},"type of mutual exclusion")," of an operator determines whether several conditions for the implementation of an abstract property can simultaneously be met with a certain set of parameters. The ",(0,i.kt)("inlineCode",{parentName:"p"},"EXCLUSIVE")," type indicates that implementation conditions cannot be met simultaneously. The ",(0,i.kt)("inlineCode",{parentName:"p"},"OVERRIDE")," type allows several simultaneously met conditions. In this case, the implementation to be selected is determined by the keywords ",(0,i.kt)("inlineCode",{parentName:"p"},"FIRST")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"LAST"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ABSTRACT")," operator cannot be used inside ",(0,i.kt)("a",{parentName:"p",href:"/ru/next/Expression"},"expressions"),"."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"type")),(0,i.kt)("p",{parentName:"li"},"  Type of abstract property. It is specified by one of the keywords:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"CASE"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"MULTI"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"VALUE")),(0,i.kt)("p",{parentName:"li"},"The default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"MULTI"),".")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"exclusionType")),(0,i.kt)("p",{parentName:"li"},"  Type of mutual exclusion. One of these keywords: ",(0,i.kt)("inlineCode",{parentName:"p"},"EXCLUSIVE")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"OVERRIDE"),". Unless explicitly specified, in a ",(0,i.kt)("inlineCode",{parentName:"p"},"MULTI")," abstract property the default type of mutual exclusion is ",(0,i.kt)("inlineCode",{parentName:"p"},"EXCLUSIVE"),", and in all other cases the default mutual exclusion type is ",(0,i.kt)("inlineCode",{parentName:"p"},"OVERRIDE"),"."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"FIRST"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"LAST")),(0,i.kt)("p",{parentName:"li"},"Keywords. Determine which of the matching implementations will be selected. When the word ",(0,i.kt)("inlineCode",{parentName:"p"},"FIRST")," is specified, implementations will be added to the top of the implementations list, so that the last added implementation will be selected. When the word ",(0,i.kt)("inlineCode",{parentName:"p"},"LAST")," is specified, implementations will be added to the end of the implementations list, so that the implementation added first will be selected. If not specified, the default is ",(0,i.kt)("inlineCode",{parentName:"p"},"FIRST"),". ")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"FULL")),(0,i.kt)("p",{parentName:"li"},"  Keyword. If specified, the platform will automatically check that at least one implementation is specified for all child objects of the argument classes (or exactly one if the conditions are mutually exclusive).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"returnClassName")),(0,i.kt)("p",{parentName:"li"},"  Class of the return value of the property. ",(0,i.kt)("a",{parentName:"p",href:"/ru/next/IDs#classid-broken"},"Class ID"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"argClassName1, ..., argClassNameN")),(0,i.kt)("p",{parentName:"li"},"  List of class names of property arguments. Each name is defined by a class ID."))),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Invoice;\nCLASS InvoiceDetail;\nCLASS Range;\n\nrateChargeExchange(invoice) = ABSTRACT NUMERIC[14,6] (Invoice);             // In this case, ABSTRACT MULTI EXCLUSIVE is created\nbackgroundSku 'Color' (d) = ABSTRACT CASE FULL COLOR (InvoiceDetail); // In this case, ABSTRACT CASE OVERRIDE LAST is created, and if there are\n                                                                            // several suitable implementations, the first of them will be calculated\noverVAT = ABSTRACT VALUE OVERRIDE FIRST Range (InvoiceDetail);          // The last matching implementation will be calculated here\n")))}m.isMDXComponent=!0}}]);