(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[97045],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,p(p({ref:t},l),{},{components:r})):n.createElement(d,p({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},61776:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return i},toc:function(){return s},default:function(){return l}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),p={title:"CONCAT operator"},i={unversionedId:"CONCAT_operator",id:"CONCAT_operator",isDocsHomePage:!1,title:"CONCAT operator",description:"The CONCAT operator creates a property that implements a string concatenation.",source:"@site/docs/CONCAT_operator.md",sourceDirName:".",slug:"/CONCAT_operator",permalink:"/next/CONCAT_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/CONCAT_operator.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",frontMatter:{title:"CONCAT operator"},sidebar:"learn",previous:{title:"CLASS operator",permalink:"/next/CLASS_operator"},next:{title:"DATA operator",permalink:"/next/DATA_operator"}},s=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:s};function l(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"CONCAT")," operator creates a ",(0,o.kt)("a",{parentName:"p",href:"/next/Properties"},"property")," that implements a string ",(0,o.kt)("a",{parentName:"p",href:"/next/String_operators_+_CONCAT_SUBSTRING_"},"concatenation"),"."),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"CONCAT separatorString, concatExpr1, ..., concatExprN\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The\xa0",(0,o.kt)("strong",{parentName:"p"},"CONCAT"),'\xa0operator creates a property that concatenates values using the "separatorString" separator. Here, NULL values are skipped and the separator is inserted only between non-NULL values.'),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"separatorString")),(0,o.kt)("p",null,"\xa0A ",(0,o.kt)("a",{parentName:"p",href:"/next/Literals#strliteral-broken"},"string literal")," to be used as a separator."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"concatExpr1, ..., concatExprN")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/next/Expression"},"Expressions")," whose values are to be concatenated."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Person;\nfirstName = DATA STRING[100] (Person);\nmiddleName = DATA STRING[100] (Person);\nlastName = DATA STRING[100] (Person);\n\nfullName(Person p) = CONCAT ' ', firstName(p), middleName(p), lastName(p);     // if some part of the name is not specified, then this part will be skipped along with a space\n")))}l.isMDXComponent=!0}}]);