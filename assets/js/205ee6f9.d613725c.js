"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[11545],{89677:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(74848),s=a(28453);const i={title:"How-to: Physical model"},l=void 0,o={id:"How-to_Physical_model",title:"How-to: Physical model",description:"By default, each class in the database creates a separate table that stores all those properties whose only parameter is an object of this class. The key in this table is a field that stores a unique object ID. For properties with several parameters, a table will be created with the IDs of parameter objects as keys.",source:"@site/versioned_docs/version-v5/How-to_Physical_model.md",sourceDirName:".",slug:"/How-to_Physical_model",permalink:"/How-to_Physical_model",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/How-to_Physical_model.md",tags:[],version:"v5",lastUpdatedAt:1685108136e3,frontMatter:{title:"How-to: Physical model"},sidebar:"learn",previous:{title:"How-to: Metaprogramming",permalink:"/How-to_Metaprogramming"},next:{title:"How-to: Internationalization",permalink:"/How-to_Internationalization"}},r={},c=[];function d(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["By default, each class in the database creates a separate table that stores all those ",(0,n.jsx)(t.a,{href:"/Properties",children:"properties"})," whose only parameter is an object of this class. The key in this table is a field that stores a unique object ID. For properties with several parameters, a table will be created with the IDs of parameter objects as keys."]}),"\n",(0,n.jsx)(t.p,{children:"To explicitly specify a table in which all properties with one parameter of this class will be stored, we can use the following construct:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lsf",children:"CLASS Animal 'Animal';\nTABLE animal(Animal);\n\nname 'Name' = DATA STRING[50] (Animal);\n"})}),"\n",(0,n.jsxs)(t.p,{children:["With a standard ",(0,n.jsx)(t.a,{href:"/Tables#name",children:"field naming policy"}),", a ",(0,n.jsx)(t.code,{children:"<Namespace>_animal"})," table will be created within the database, with a key ",(0,n.jsx)(t.code,{children:"key0"})," with the internal ID of an animal and a ",(0,n.jsx)(t.code,{children:"<Namespace>_name_Animal"})," field storing its name."]}),"\n",(0,n.jsx)(t.p,{children:"For properties with multiple parameters, we can create a table as follows:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lsf",children:"CLASS Country 'Country';\n\nTABLE animalCountry (Animal, Country);\npopulation 'Number' = DATA INTEGER (Animal, Country);\n"})}),"\n",(0,n.jsxs)(t.p,{children:["In this case we create a ",(0,n.jsx)(t.code,{children:"<Namespace>_animalCountry"})," table with two keys: ",(0,n.jsx)(t.code,{children:"key0"})," for the animal and ",(0,n.jsx)(t.code,{children:"key1"})," for the country. It will also have a ",(0,n.jsx)(t.code,{children:"<Namespace>_population_Animal_Country"})," field."]}),"\n",(0,n.jsxs)(t.p,{children:["All other properties with signature ",(0,n.jsx)(t.code,{children:"[Animal, Country]"})," will also be placed in this table. If some property needs to be placed in a separate table, then the following technique can be used:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lsf",children:"TABLE ageAnimalCountry (Animal, Country);\naverageAge 'Average age' = DATA NUMERIC[8,2] (Animal, Country) TABLE ageAnimalCountry;\n"})}),"\n",(0,n.jsx)(t.p,{children:"This table will only store properties for which it is explicitly specified. All others will go into the first table declared with the necessary signature."}),"\n",(0,n.jsxs)(t.p,{children:["Computed properties that need to be stored ",(0,n.jsx)(t.a,{href:"/Materializations",children:"permanently"})," in the table need to be marked with the keyword ",(0,n.jsx)(t.code,{children:"MATERIALIZED"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lsf",children:"totalPopulation 'Total number' (Animal a) = GROUP SUM population(a, Country c) MATERIALIZED;\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The table in which this field will be stored will be selected according to the same algorithm as for ",(0,n.jsx)(t.a,{href:"/Data_properties_DATA",children:"data properties"}),". In this case, it will go into the table ",(0,n.jsx)(t.code,{children:"<Namespace>_animal"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>l,x:()=>o});var n=a(96540);const s={},i=n.createContext(s);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);