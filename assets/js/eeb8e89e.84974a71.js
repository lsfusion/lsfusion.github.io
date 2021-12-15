(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[44196],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,p(p({ref:t},l),{},{components:r})):n.createElement(f,p({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var c=2;c<a;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2059:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var n=r(74034),o=r(79973),a=(r(67294),r(3905)),p=["components"],i={title:"Object group operator"},s=void 0,c={unversionedId:"Object_group_operator",id:"Object_group_operator",isDocsHomePage:!1,title:"Object group operator",description:"Object group operators are used for creating properties working with the current state of the object group on the form.",source:"@site/docs/Object_group_operator.md",sourceDirName:".",slug:"/Object_group_operator",permalink:"/next/Object_group_operator",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Object_group_operator.md",tags:[],version:"current",lastUpdatedAt:1624529220,formattedLastUpdatedAt:"6/24/2021",frontMatter:{title:"Object group operator"},sidebar:"learn",previous:{title:"UNGROUP operator",permalink:"/next/UNGROUP_operator"},next:{title:"Type conversion operator",permalink:"/next/Type_conversion_operator"}},l=[{value:"Syntax",id:"syntax",children:[],level:3},{value:"Description",id:"description",children:[],level:3},{value:"Parameters",id:"parameters",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],u={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/next/Form_structure"},"Object group")," operators are used for creating ",(0,a.kt)("a",{parentName:"p",href:"/next/Properties"},"properties")," working with the ",(0,a.kt)("a",{parentName:"p",href:"/next/Object_group_operators"},"current state")," of the object group on the ",(0,a.kt)("a",{parentName:"p",href:"/next/Forms"},"form"),"."),(0,a.kt)("h3",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"FILTER groupObjectId\nVIEW groupObjectId\nORDER groupObjectId\n")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"Object group operators create properties that accept the same number of parameters as the number of objects in the object group. These operators cannot be used inside ",(0,a.kt)("a",{parentName:"p",href:"/next/Expression"},"expressions"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"FILTER")," operator creates a property which value is ",(0,a.kt)("inlineCode",{parentName:"p"},"TRUE")," when the object collection passed as parameters meets all the ",(0,a.kt)("a",{parentName:"p",href:"/next/Form_structure#filters"},"filtering")," conditions on the form, otherwise the property value will be ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"VIEW")," operator creates a property which value is ",(0,a.kt)("inlineCode",{parentName:"p"},"TRUE")," if the object collection passed as parameters is currently displayed on the form, otherwise, the property value will be ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ORDER")," operator creates a property which value determines the relative order of the object collection on the form passed as a parameter. The value of this property is usually used in ",(0,a.kt)("inlineCode",{parentName:"p"},"ORDER")," blocks of the other properties, for example, ",(0,a.kt)("a",{parentName:"p",href:"/next/PARTITION_operator"},(0,a.kt)("inlineCode",{parentName:"a"},"PARTITION")),", ",(0,a.kt)("a",{parentName:"p",href:"/next/FOR_operator"},(0,a.kt)("inlineCode",{parentName:"a"},"FOR")),", etc."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"groupObjectId")),(0,a.kt)("p",{parentName:"li"},"  Global ",(0,a.kt)("a",{parentName:"p",href:"/next/IDs#groupobjectid"},"object group ID"),"."))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Store;\nname = DATA STRING[100] (Store);\n\nFORM stores\n    OBJECTS s = Store\n;\ncountF 'Number of filtered warehouses' = GROUP SUM 1 IF [ VIEW stores.s](Store s);\norderF 'Order in an object group' (Store s) = PARTITION SUM 1 IF [ FILTER stores.s](s) ORDER [ ORDER stores.s](s), s;\nsetNameX 'Add X to name'()  {\n    LOCAL k = INTEGER ();\n    k() <- 0;\n    FOR [ FILTER stores.s](Store s) ORDER [ ORDER stores.s](s) DO {\n        k() <- k() + 1;\n        name(s) <- 'X' + k() + name(s);\n    }\n}\n")))}m.isMDXComponent=!0}}]);