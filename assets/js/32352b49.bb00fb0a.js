(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[3306],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8220:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s},default:function(){return l}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i={title:"Operator{...}"},p={unversionedId:"Operator_..._",id:"Operator_..._",isDocsHomePage:!1,title:"Operator{...}",description:"The {...} operator creates actions that executes a sequence of other actions.",source:"@site/docs/Operator_..._.md",sourceDirName:".",slug:"/Operator_..._",permalink:"/next/Operator_..._",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Operator_..._.md",version:"current",lastUpdatedAt:1622042248,formattedLastUpdatedAt:"5/26/2021",frontMatter:{title:"Operator{...}"},sidebar:"learn",previous:{title:"Action operator",permalink:"/next/Action_operator"},next:{title:"ABSTRACT operator",permalink:"/next/ABSTRACT_operator_action_"}},s=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:s};function l(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"{...}")," operator creates ",(0,o.kt)("a",{parentName:"p",href:"/next/Actions"},"actions")," that executes a ",(0,o.kt)("a",{parentName:"p",href:"/next/Sequence_..._"},"sequence of other actions"),". "),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{\n    operator1\n    ...\n    operatorN\n}\n")),(0,o.kt)("p",null,"Operators can be of two types:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"actionOperator\nLOCAL [NESTED] name1, ..., nameN = returnClass (paramClass1, ..., paramClassN)\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"A sequence of ",(0,o.kt)("a",{parentName:"p",href:"/next/Action_operator"},"action operators")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"LOCAL")," operators enclosed in braces creates a new action that sequentially executes specified actions and creates specified ",(0,o.kt)("a",{parentName:"p",href:"/next/Data_properties_DATA_"},"local properties"),". The area of visibility of the local properties created inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"{...}")," operator ends at the end of this operator."),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"actionOperator")),(0,o.kt)("p",{parentName:"li"},"  A ",(0,o.kt)("a",{parentName:"p",href:"/next/Action_operator#contextdependent"},"context-dependent action operator"),". Each operator is followed by a semicolon, except for operators ending in a closing brace. Extra semicolons are not an error.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"NESTED")),(0,o.kt)("p",{parentName:"li"},"  A keyword that, when specified, marks the local property as ",(0,o.kt)("a",{parentName:"p",href:"/next/Session_management#nested"},"nested"),"; that is, all of its changes will be visible in new sessions, and when these sessions are closed, changes to this property will get to the current session. Note that this behavior is similar to the behavior of a regular local property (not ",(0,o.kt)("inlineCode",{parentName:"p"},"NESTED"),") when using the ",(0,o.kt)("a",{parentName:"p",href:"/next/NEWSESSION_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"NEWSESSION")," operator")," with the specified keyword ",(0,o.kt)("inlineCode",{parentName:"p"},"NESTED LOCAL")," (or just ",(0,o.kt)("inlineCode",{parentName:"p"},"NESTED")," if this local property is explicitly specified in the property list)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"name1, ..., nameN")),(0,o.kt)("p",{parentName:"li"},"  A list of names of the local properties being created. The names are defined by ",(0,o.kt)("a",{parentName:"p",href:"/next/IDs#id-broken"},"simple ID's"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"returnClass")),(0,o.kt)("p",{parentName:"li"},"  The ",(0,o.kt)("a",{parentName:"p",href:"/next/IDs#classid-broken"},"class ID")," of the returned value of the local property. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"argumentClass1, ..., argumentClassN")),(0,o.kt)("p",{parentName:"li"},"  A list of argument class ID's of the local property."))),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Currency;\nname = DATA STRING[30] (Currency);\ncode = DATA INTEGER (Currency);\n\nCLASS Order;\ncurrency = DATA Currency (Order);\ncustomer = DATA STRING[100] (Order);\ncopy 'Copy' (Order old)  {\n    NEW new = Order {                                   // an action is created that consists of the sequential execution of two actions\n        currency(new) <- currency(old);                 // a semicolon is put after each statement\n        customer(new) <- customer(old);\n    }                                                   // there is no semicolon in this line, because the operator ends in }\n}\n\nloadDefaultCurrency(ISTRING[30] name, INTEGER code)  {\n    NEW c = Currency {\n        name(c) <- name;\n        code(c) <- code;\n    }\n}\nrun ()  {\n    loadDefaultCurrency('USD', 866);\n    loadDefaultCurrency('EUR', 1251);\n}\n")))}l.isMDXComponent=!0}}]);