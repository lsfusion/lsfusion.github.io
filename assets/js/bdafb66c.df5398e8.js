"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[46267],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,y=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return n?o.createElement(y,a(a({ref:t},u),{},{components:n})):o.createElement(y,a({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94037:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return c}});var o=n(83117),i=(n(67294),n(3905));const r={title:"How-to: Binding properties"},a=void 0,l={unversionedId:"How-to_Binding_properties",id:"How-to_Binding_properties",title:"How-to: Binding properties",description:"Example 1",source:"@site/docs/How-to_Binding_properties.md",sourceDirName:".",slug:"/How-to_Binding_properties",permalink:"/next/How-to_Binding_properties",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/How-to_Binding_properties.md",tags:[],version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"How-to: Binding properties"},sidebar:"learn",previous:{title:"How-to: Overriding values",permalink:"/next/How-to_Overriding_values"},next:{title:"How-to: Metaprogramming",permalink:"/next/How-to_Metaprogramming"}},s={},c=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3},{value:"Example 3",id:"example-3",level:2},{value:"Task",id:"task-2",level:3},{value:"Solution",id:"solution-2",level:3},{value:"Example 4",id:"example-4",level:2},{value:"Task",id:"task-3",level:3},{value:"Solution",id:"solution-3",level:3},{value:"Example 5",id:"example-5",level:2},{value:"Task",id:"task-4",level:3},{value:"Solution",id:"solution-4",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"example-1"},"Example 1"),(0,i.kt)("h3",{id:"task"},"Task"),(0,i.kt)("p",null,"The concepts of Country, Region and City are defined. A region and a city are always located in a certain country. A city may have a specified region, but need not."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Country 'Country';\nname 'Name' = DATA ISTRING[100] (Country) IN id;\n\nCLASS Region 'Region';\nname 'Name' = DATA ISTRING[100] (Region) IN id;\n\ncountry 'Country' = DATA Country (Region) NONULL DELETE;\nnameCountry 'Country' (Region r)= name(country(r)) IN id;\n\nCLASS City 'City';\nname 'Name' = DATA ISTRING[100] (City);\n\ncountry 'Country' = DATA Country (City) NONULL DELETE;\nnameCountry (City c) = name(country(c));\n\nregion 'Region' = DATA Region (City);\nnameRegion (City c) = name(region(c));\n\nFORM cities 'Cities'\n    OBJECTS c = City\n    PROPERTIES(c) name, nameCountry, nameRegion, NEW, DELETE\n;\n\nNAVIGATOR {\n    NEW cities;\n}\n")),(0,i.kt)("p",null,"We need to define the logic such that a city can only be linked to a region belonging to the country it is in."),(0,i.kt)("h3",{id:"solution"},"Solution"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"CONSTRAINT country(City c) != country(region(c)) CHECKED BY region[City] MESSAGE 'The country of the city region must match the country of the city';\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/next/CONSTRAINT_statement"},(0,i.kt)("inlineCode",{parentName:"a"},"CONSTRAINT")," statement")," defines a condition that must always be ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL"),". In this case, the constraint based on this condition will be violated if there is a country defined for the region, a region for the city, and a country for the region, and the region's country is not the same as the city's country. The ",(0,i.kt)("inlineCode",{parentName:"p"},"CHECKED BY")," block indicates that when you select a region in a dialog, the regions will be filtered by default so as not to violate this constraint. It should be noted that if no country has yet been set for the given city then the condition will always be ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL"),", and all existing regions will be shown in the dialog."),(0,i.kt)("h2",{id:"example-2"},"Example 2"),(0,i.kt)("h3",{id:"task-1"},"Task"),(0,i.kt)("p",null,"Similar to ",(0,i.kt)("a",{parentName:"p",href:"#example-1"},(0,i.kt)("strong",{parentName:"a"},"Example 1")),"."),(0,i.kt)("p",null,"We need to make it so that the country is automatically filled when a region is chosen."),(0,i.kt)("h3",{id:"solution-1"},"Solution"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"WHEN LOCAL CHANGED(region(City c)) AND NOT CHANGED(country(c)) DO {\n    country(c) <- country(region(c));\n}\n")),(0,i.kt)("p",null,"It should be noted that after the user has chosen a region and a country is set, when the dialog is called again, only the regions of the selected country will be displayed. If the user wants to see all the regions again, he will need to clear the country first. The expression checks that the country has not changed is added to provide the following behavior: if the cities are changed by external actions that change both the country and the region, then the country should not be changed with this event."),(0,i.kt)("h2",{id:"example-3"},"Example 3"),(0,i.kt)("h3",{id:"task-2"},"Task"),(0,i.kt)("p",null,"Similar to ",(0,i.kt)("a",{parentName:"p",href:"#example-1"},(0,i.kt)("strong",{parentName:"a"},"Example 1")),"."),(0,i.kt)("p",null,"We need to create the same kind of association between the region and the city, but in such a way that a region cannot be selected until a country has been set first."),(0,i.kt)("h3",{id:"solution-2"},"Solution"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"CONSTRAINT region(City c) AND NOT country(c) = country(region(c)) CHECKED BY region[City] MESSAGE 'The country of the city region must match the country of the city';\n")),(0,i.kt)("p",null,"The difference from the first example is that the new condition will also be true if a region is set and a country is not. Therefore, in this case the dialog will not display any regions."),(0,i.kt)("h2",{id:"example-4"},"Example 4"),(0,i.kt)("h3",{id:"task-3"},"Task"),(0,i.kt)("p",null,"Similar to ",(0,i.kt)("a",{parentName:"p",href:"#example-1"},(0,i.kt)("strong",{parentName:"a"},"Example 1")),"."),(0,i.kt)("p",null,"If the user first selects a region, and then a country that does not correspond to the original region, the user will receive an error message when trying to save."),(0,i.kt)("p",null,"We need to make it so that the region is dropped when a new country is selected, if the region does not correspond to that country."),(0,i.kt)("h3",{id:"solution-3"},"Solution"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"WHEN LOCAL CHANGED(country(City c)) AND country(c) != country(region(c)) DO {\n    region(c) <- NULL;\n}\n")),(0,i.kt)("h2",{id:"example-5"},"Example 5"),(0,i.kt)("h3",{id:"task-4"},"Task"),(0,i.kt)("p",null,"Similar to ",(0,i.kt)("a",{parentName:"p",href:"#example-1"},(0,i.kt)("strong",{parentName:"a"},"Example 1")),"."),(0,i.kt)("p",null,"The solution to the first example has one drawback. The system will not allow you to change the country of a particular region, if the city links to it. The constraint will be violated."),(0,i.kt)("p",null,"We need to make it so that when a region's country is changed, it also changes automatically for all that region's cities."),(0,i.kt)("h3",{id:"solution-4"},"Solution"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"// 1 option\nWHEN SETCHANGED(country(region(City c))) DO\n    country(c) <- country(region(c));\n\n// 2 option\nWHEN SETCHANGED(country(Region r)) DO\n    country(City c) <- country(r) WHERE region(c) = r;\n")))}p.isMDXComponent=!0}}]);