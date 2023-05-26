"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[48104],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,g=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75075:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var r=n(83117),o=(n(67294),n(3905));const a={title:"Grouping (GROUP)"},i=void 0,l={unversionedId:"Grouping_GROUP",id:"version-v5/Grouping_GROUP",title:"Grouping (GROUP)",description:"The group operator creates a property that divides all object collections in the system into groups, and calculates an aggregating function for each group following specified order. Accordingly, the set for which this aggregating function is calculated is determined as all the object collections belonging to this group.",source:"@site/versioned_docs/version-v5/Grouping_GROUP.md",sourceDirName:".",slug:"/Grouping_GROUP",permalink:"/Grouping_GROUP",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/Grouping_GROUP.md",tags:[],version:"v5",lastUpdatedAt:1685108136,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{title:"Grouping (GROUP)"},sidebar:"learn",previous:{title:"Set operations",permalink:"/Set_operations"},next:{title:"Partitioning / sorting (PARTITION ... ORDER)",permalink:"/Partitioning_sorting_PARTITION_..._ORDER"}},s={},p=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"group")," operator creates a ",(0,o.kt)("a",{parentName:"p",href:"/Properties"},"property")," that divides all object collections in the system into groups, and calculates an ",(0,o.kt)("a",{parentName:"p",href:"/Set_operations#func"},"aggregating function")," for each group following specified order. Accordingly, the set for which this aggregating function is calculated is determined as all the object collections belonging to this group. "),(0,o.kt)("p",null,"Groups are defined for this operator as a set of properties (",(0,o.kt)("em",{parentName:"p"},"groups"),"), and the order is defined as a list of properties and an increasing or decreasing marker. If the aggregation function is not ",(0,o.kt)("a",{parentName:"p",href:"/Set_operations#commutative"},"commutative"),", then the order must be uniquely determined. "),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"A uniquely determined order can be guaranteed if for example, the IDs of all objects for which grouping is performed are specified when the order is defined")),(0,o.kt)("p",null,"In addition to the standard types of aggregate functions for grouping, there are three additional types: ",(0,o.kt)("inlineCode",{parentName:"p"},"EQUAL"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"AGGR")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"NAGGR"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"EQUAL")," is a special case of the aggregation function ",(0,o.kt)("inlineCode",{parentName:"li"},"MAX")," (or ",(0,o.kt)("inlineCode",{parentName:"li"},"MIN"),"), with the additional ",(0,o.kt)("a",{parentName:"li",href:"/Constraints"},"constraint")," that the value of the operand of the aggregating function within each group must be the same. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AGGR")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"NAGGR")," are a special case of ",(0,o.kt)("inlineCode",{parentName:"li"},"EQUAL"),", but with an even more strict constraint: for each group there is no more than one object collection, the operand of the aggregating function is one of the objects, and the groups include all other objects. Aggregate function ",(0,o.kt)("inlineCode",{parentName:"li"},"NAGGR")," only differs from ",(0,o.kt)("inlineCode",{parentName:"li"},"AGGR")," in the fact that if it is used, no constraint is created (it is assumed that the constraint follows from the semantics of the properties of the operands and / or groupings themselves).")),(0,o.kt)("h3",{id:"language"},"Language"),(0,o.kt)("p",null,"To declare a property that implements grouping, use the ",(0,o.kt)("a",{parentName:"p",href:"/GROUP_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"GROUP")," operator"),"."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Game;\nCLASS Team;\nhostGoals = DATA INTEGER (Game);\nhostTeam = DATA Team (Game);\nhostGoalsScored(team) = GROUP SUM hostGoals(Game game) BY hostTeam(game);\n\nname = DATA STRING[100] (Country);\n// property (STRING[100]) -> Country is obtained\ncountryName = GROUP AGGR Country country BY name(country); \n\nCLASS Book;\nCLASS Tag;\nname = DATA STRING[100] (Tag);\nin = DATA BOOLEAN (Book, Tag);\n\ntags(Book b) = GROUP CONCAT name(Tag t) IF in(b, t), ', ' ORDER name(t), t;\n")))}u.isMDXComponent=!0}}]);