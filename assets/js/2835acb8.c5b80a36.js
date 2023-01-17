"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[48527],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var o=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),f=i,h=d["".concat(s,".").concat(f)]||d[f]||c[f]||n;return r?o.createElement(h,a(a({ref:t},p),{},{components:r})):o.createElement(h,a({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,a=new Array(n);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<n;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},64117:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return c},frontMatter:function(){return n},metadata:function(){return l},toc:function(){return u}});var o=r(83117),i=(r(67294),r(3905));const n={title:"Distribution (UNGROUP)"},a=void 0,l={unversionedId:"Distribution_UNGROUP",id:"Distribution_UNGROUP",title:"Distribution (UNGROUP)",description:"The distribution operator creates a property, the grouping value of which using sum function will be equal to the value of the specified property (distributable). Accordingly, as for a group operator, for a distribution operator multiple properties (groups) must be set by which the grouping will take place.",source:"@site/docs/Distribution_UNGROUP.md",sourceDirName:".",slug:"/Distribution_UNGROUP",permalink:"/Distribution_UNGROUP",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Distribution_UNGROUP.md",tags:[],version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"Jun 9, 2021",frontMatter:{title:"Distribution (UNGROUP)"},sidebar:"learn",previous:{title:"Recursion (RECURSION)",permalink:"/Recursion_RECURSION"},next:{title:"Actions",permalink:"/Actions"}},s={},u=[{value:"Extended form",id:"extended-form",level:3},{value:"Language",id:"language",level:3}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"distribution")," operator creates a property, the ",(0,i.kt)("a",{parentName:"p",href:"/Grouping_GROUP"},"grouping")," value of which using sum function will be equal to the value of the specified property (",(0,i.kt)("em",{parentName:"p"},"distributable"),"). Accordingly, as for a group operator, for a distribution operator multiple properties (",(0,i.kt)("em",{parentName:"p"},"groups"),") must be set by which the grouping will take place."),(0,i.kt)("p",null,"There are many different ways to build this kind of distribution. At present the platform supports the two most commonly used:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Limiting - the distribution result must not exceed the value of the specified property."),(0,i.kt)("li",{parentName:"ol"},"Proportional - the distribution result should be directly proportional to the value of a given property (in other words, the ratio of the distribution results for two object collections within the same group should be equal to the ratio of the values of this property for the same object collections). ")),(0,i.kt)("p",null,"The operator can work in ",(0,i.kt)("em",{parentName:"p"},"non-strict")," mode (used by default). Here the platform tries to calculate the value as close as possible to the value of the distributable property but does not guarantee that they will be equal."),(0,i.kt)("p",null,"As for other operations with sets, an ",(0,i.kt)("em",{parentName:"p"},"order")," can (and usually must) be defined for the distribution operator."),(0,i.kt)("p",null,"The general algorithm of the distribution operator, depending on the type of distribution, is as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Limiting - distribution is done in the specified order, not exceeding the restriction, until the overall result equals the value of the distributable property. If the operator is working in strict mode and the overall result has not reached the value of the distributable property, the total difference is added to the resulting value of the first object collection."),(0,i.kt)("li",{parentName:"ol"},"Proportional - the total of the proportions for each group is calculated, after which a distribution coefficient is determined for each object collection, equal to the ratio of the proportion value for this set of objects to the total amount of the group to which it belongs. Finally, the distribution result is calculated as the product of this coefficient and the value of the distributed property. Since the final (and intermediate) results are rounded (and hence accuracy is lost), the sum of the result of this distribution may differ from the value of the distributed property. Therefore, if the operator is working in strict mode, the difference between these values is added to the resulting value of the first object collection.")),(0,i.kt)("h3",{id:"extended-form"},"Extended form"),(0,i.kt)("p",null,'The mechanism described above allows distribution only in "one-to-many" mode. However, in some cases this is not enough, and distribution in "many-to-many" mode is necessary. For this, the platform has the so-called ',(0,i.kt)("em",{parentName:"p"},"extended")," distribution operator form (consequently, the basic form will be called ",(0,i.kt)("em",{parentName:"p"},"simple"),"). "),(0,i.kt)("p",null,"In the extended form of this operator, the conditions for the distribution result are changed as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Limiting - it is not the distribution result itself that must not exceed the value of the specified property, but rather the grouping of the distribution result by certain additional groups must not exceed this value."),(0,i.kt)("li",{parentName:"ol"},"Proportional - similar; that is, it is not the result of the distribution itself that must be directly proportional to the value of a certain property, but its grouping by additional groups.")),(0,i.kt)("p",null,"The algorithm of the operator\u2019s work likewise changes accordingly."),(0,i.kt)("h3",{id:"language"},"Language"),(0,i.kt)("p",null,"Since the simple form of the operator is semantically very similar to the operator ",(0,i.kt)("a",{parentName:"p",href:"/Partitioning_sorting_PARTITION_..._ORDER"},"partition/sort"),", to declare a property that implements a simple distribution the ",(0,i.kt)("a",{parentName:"p",href:"/PARTITION_operator"},(0,i.kt)("inlineCode",{parentName:"a"},"PARTITION")," operator")," is also used."),(0,i.kt)("p",null,"For the extended form, use the ",(0,i.kt)("a",{parentName:"p",href:"/UNGROUP_operator"},(0,i.kt)("inlineCode",{parentName:"a"},"UNGROUP")," operator"),"."))}c.isMDXComponent=!0}}]);