"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[77766],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(f,l(l({ref:t},c),{},{components:a})):n.createElement(f,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},70414:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return p}});var n=a(83117),r=(a(67294),a(3905));const o={title:"How-to: Physical model"},l=void 0,i={unversionedId:"How-to_Physical_model",id:"version-v4/How-to_Physical_model",title:"How-to: Physical model",description:"By default, each class in the database creates a separate table that stores all those properties whose only parameter is an object of this class. The key in this table is a field that stores a unique object ID. For properties with several parameters, a table will be created with the IDs of parameter objects as keys.",source:"@site/versioned_docs/version-v4/How-to_Physical_model.md",sourceDirName:".",slug:"/How-to_Physical_model",permalink:"/v4/How-to_Physical_model",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/How-to_Physical_model.md",tags:[],version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"Jun 9, 2021",frontMatter:{title:"How-to: Physical model"},sidebar:"version-v4/learn",previous:{title:"How-to: Metaprogramming",permalink:"/v4/How-to_Metaprogramming"},next:{title:"How-to: Internationalization",permalink:"/v4/How-to_Internationalization"}},s={},p=[],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"By default, each class in the database creates a separate table that stores all those ",(0,r.kt)("a",{parentName:"p",href:"/v4/Properties"},"properties")," whose only parameter is an object of this class. The key in this table is a field that stores a unique object ID. For properties with several parameters, a table will be created with the IDs of parameter objects as keys."),(0,r.kt)("p",null,"To explicitly specify a table in which all properties with one parameter of this class will be stored, we can use the following construct:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Animal 'Animal';\nTABLE animal(Animal);\n\nname 'Name' = DATA STRING[50] (Animal);\n")),(0,r.kt)("p",null,"With a standard ",(0,r.kt)("a",{parentName:"p",href:"/v4/Tables#name"},"field naming policy"),", a ",(0,r.kt)("inlineCode",{parentName:"p"},"<Namespace>_animal")," table will be created within the database, with a key ",(0,r.kt)("inlineCode",{parentName:"p"},"key0")," with the internal ID of an animal and a ",(0,r.kt)("inlineCode",{parentName:"p"},"<Namespace>_name_Animal")," field storing its name."),(0,r.kt)("p",null,"For properties with multiple parameters, we can create a table as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Country 'Country';\n\nTABLE animalCountry (Animal, Country);\npopulation 'Number' = DATA INTEGER (Animal, Country);\n")),(0,r.kt)("p",null,"In this case we create a ",(0,r.kt)("inlineCode",{parentName:"p"},"<Namespace>_animalCountry")," table with two keys: ",(0,r.kt)("inlineCode",{parentName:"p"},"key0")," for the animal and ",(0,r.kt)("inlineCode",{parentName:"p"},"key1")," for the country. It will also have a ",(0,r.kt)("inlineCode",{parentName:"p"},"<Namespace>_population_Animal_Country")," field."),(0,r.kt)("p",null,"All other properties with signature ",(0,r.kt)("inlineCode",{parentName:"p"},"[Animal, Country]")," will also be placed in this table. If some property needs to be placed in a separate table, then the following technique can be used:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"TABLE ageAnimalCountry (Animal, Country);\naverageAge 'Average age' = DATA NUMERIC[8,2] (Animal, Country) TABLE ageAnimalCountry;\n")),(0,r.kt)("p",null,"This table will only store properties for which it is explicitly specified. All others will go into the first table declared with the necessary signature."),(0,r.kt)("p",null,"Computed properties that need to be stored ",(0,r.kt)("a",{parentName:"p",href:"/v4/Materializations"},"permanently")," in the table need to be marked with the keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"MATERIALIZED"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"totalPopulation 'Total number' (Animal a) = GROUP SUM population(a, Country c) MATERIALIZED;\n")),(0,r.kt)("p",null,"The table in which this field will be stored will be selected according to the same algorithm as for ",(0,r.kt)("a",{parentName:"p",href:"/v4/Data_properties_DATA"},"data properties"),". In this case, it will go into the table ",(0,r.kt)("inlineCode",{parentName:"p"},"<Namespace>_animal"),"."))}u.isMDXComponent=!0}}]);