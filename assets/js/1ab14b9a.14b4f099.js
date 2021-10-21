(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[20365],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,d=m["".concat(u,".").concat(f)]||m[f]||c[f]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74262:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=n(74034),o=n(79973),a=(n(67294),n(3905)),i=["components"],l={title:"How-to: Computations",sidebar_label:"Overview"},u=void 0,p={unversionedId:"How-to_Computations",id:"version-v4/How-to_Computations",isDocsHomePage:!1,title:"How-to: Computations",description:"How to read these sections",source:"@site/versioned_docs/version-v4/How-to_Computations.md",sourceDirName:".",slug:"/How-to_Computations",permalink:"/How-to_Computations",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/How-to_Computations.md",tags:[],version:"v4",lastUpdatedAt:1619709222,formattedLastUpdatedAt:"4/29/2021",frontMatter:{title:"How-to: Computations",sidebar_label:"Overview"},sidebar:"version-v4/learn",previous:{title:"Overview",permalink:"/How-to"},next:{title:"How-to: GROUP SUM",permalink:"/How-to_GROUP_SUM"}},s=[{value:"How to read these sections",id:"how-to-read-these-sections",children:[],level:3}],c={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"how-to-read-these-sections"},"How to read these sections"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/How-to_GROUP_SUM"},(0,a.kt)("inlineCode",{parentName:"a"},"GROUP SUM")),": Summing up values through grouping."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/How-to_GROUP_MAX_MIN_AGGR"},(0,a.kt)("inlineCode",{parentName:"a"},"GROUP MAX"),"/",(0,a.kt)("inlineCode",{parentName:"a"},"MIN"),"/",(0,a.kt)("inlineCode",{parentName:"a"},"AGGR")),": Searching for maximum/minimum values through grouping."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/How-to_CASE_IF_OVERRIDE"},(0,a.kt)("inlineCode",{parentName:"a"},"CASE"),"/",(0,a.kt)("inlineCode",{parentName:"a"},"IF"),"/",(0,a.kt)("inlineCode",{parentName:"a"},"OVERRIDE")),": Branching and selection from a set of values."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/How-to_GROUP_LAST"},(0,a.kt)("inlineCode",{parentName:"a"},"GROUP LAST")),": Searching for the last value through grouping."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/How-to_GROUP_CONCAT"},(0,a.kt)("inlineCode",{parentName:"a"},"GROUP CONCAT")),": Merging lines through grouping."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/How-to_PARTITION"},(0,a.kt)("inlineCode",{parentName:"a"},"PARTITION")),": Distributing values across multiple lines.")))}m.isMDXComponent=!0}}]);