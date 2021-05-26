(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[20140],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,d=m["".concat(i,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,s(s({ref:t},l),{},{components:r})):n.createElement(d,s({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},86089:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return p},toc:function(){return i},default:function(){return l}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),s={title:"IS, AS operators"},p={unversionedId:"IS_AS_operators",id:"IS_AS_operators",isDocsHomePage:!1,title:"IS, AS operators",description:"IS,\xa0AS operators create an action that implements classification.",source:"@site/docs/IS_AS_operators.md",sourceDirName:".",slug:"/IS_AS_operators",permalink:"/next/IS_AS_operators",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/IS_AS_operators.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",frontMatter:{title:"IS, AS operators"},sidebar:"learn",previous:{title:"AND, OR, NOT, XOR operators",permalink:"/next/AND_OR_NOT_XOR_operators"},next:{title:"Change operators",permalink:"/next/Change_operators"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples\xa0",id:"examples",children:[]}],c={toc:i};function l(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"IS"),",\xa0",(0,o.kt)("strong",{parentName:"p"},"AS")," operators create an ",(0,o.kt)("a",{parentName:"p",href:"/next/Properties"},"action")," that implements ",(0,o.kt)("a",{parentName:"p",href:"/next/Classification_IS_AS_"},"classification"),"."),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"expression IS className\nexpression AS className\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"IS")," operator creates an action which returns ",(0,o.kt)("strong",{parentName:"p"},"TRUE")," if the value of the ",(0,o.kt)("a",{parentName:"p",href:"/next/Expression"},"expression")," belongs to the specified class."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"AS"),"\xa0operator creates a property which returns the\xa0expression value if this value\xa0belongs to the specified class."),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"expression")),(0,o.kt)("p",null,"An expression which value is checked for belonging to the class."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"className")),(0,o.kt)("p",null,"Class name. ",(0,o.kt)("a",{parentName:"p",href:"/next/IDs#classid-broken"},"Class ID"),"."),(0,o.kt)("h3",{id:"examples"},"Examples\xa0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"asOrder(object) = object AS Order;\n\nperson = DATA Human (Order);\nisMale (Order o) = person(o) IS Male;\n")))}l.isMDXComponent=!0}}]);