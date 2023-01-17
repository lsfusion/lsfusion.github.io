"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[12917],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},95423:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l}});var n=r(83117),a=(r(67294),r(3905));const o={title:"IS, AS operators"},i=void 0,s={unversionedId:"IS_AS_operators",id:"version-v4/IS_AS_operators",title:"IS, AS operators",description:"IS, AS operators create an action that implements classification.",source:"@site/versioned_docs/version-v4/IS_AS_operators.md",sourceDirName:".",slug:"/IS_AS_operators",permalink:"/v4/IS_AS_operators",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/IS_AS_operators.md",tags:[],version:"v4",lastUpdatedAt:1624461640,formattedLastUpdatedAt:"Jun 23, 2021",frontMatter:{title:"IS, AS operators"},sidebar:"version-v4/learn",previous:{title:"AND, OR, NOT, XOR operators",permalink:"/v4/AND_OR_NOT_XOR_operators"},next:{title:"Change operators",permalink:"/v4/Change_operators"}},p={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"IS"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"AS")," operators create an ",(0,a.kt)("a",{parentName:"p",href:"/v4/Properties"},"action")," that implements ",(0,a.kt)("a",{parentName:"p",href:"/v4/Classification_IS_AS"},"classification"),"."),(0,a.kt)("h3",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"expression IS className\nexpression AS className\n")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"IS")," operator creates an action which returns ",(0,a.kt)("inlineCode",{parentName:"p"},"TRUE")," if the value of the ",(0,a.kt)("a",{parentName:"p",href:"/v4/Expression"},"expression")," belongs to the specified class."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"AS")," operator creates a property which returns the expression value if this value belongs to the specified class."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"expression")),(0,a.kt)("p",{parentName:"li"},"  An expression which value is checked for belonging to the class.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"className")),(0,a.kt)("p",{parentName:"li"},"  Class name. ",(0,a.kt)("a",{parentName:"p",href:"/v4/IDs#classid"},"Class ID"),"."))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"asOrder(object) = object AS Order;\n\nperson = DATA Human (Order);\nisMale (Order o) = person(o) IS Male;\n")))}u.isMDXComponent=!0}}]);