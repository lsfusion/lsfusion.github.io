"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[35289],{52516:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=t(74848),o=t(28453);const r={title:"How-to: Binding properties"},a=void 0,s={id:"How-to_Binding_properties",title:"How-to: Binding properties",description:"Example 1",source:"@site/docs/How-to_Binding_properties.md",sourceDirName:".",slug:"/How-to_Binding_properties",permalink:"/next/How-to_Binding_properties",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/How-to_Binding_properties.md",tags:[],version:"current",lastUpdatedAt:1623249583e3,frontMatter:{title:"How-to: Binding properties"},sidebar:"learn",previous:{title:"How-to: Overriding values",permalink:"/next/How-to_Overriding_values"},next:{title:"How-to: Metaprogramming",permalink:"/next/How-to_Metaprogramming"}},l={},c=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3},{value:"Example 3",id:"example-3",level:2},{value:"Task",id:"task-2",level:3},{value:"Solution",id:"solution-2",level:3},{value:"Example 4",id:"example-4",level:2},{value:"Task",id:"task-3",level:3},{value:"Solution",id:"solution-3",level:3},{value:"Example 5",id:"example-5",level:2},{value:"Task",id:"task-4",level:3},{value:"Solution",id:"solution-4",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,i.jsx)(n.h3,{id:"task",children:"Task"}),"\n",(0,i.jsx)(n.p,{children:"The concepts of Country, Region and City are defined. A region and a city are always located in a certain country. A city may have a specified region, but need not."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"CLASS Country 'Country';\nname 'Name' = DATA ISTRING[100] (Country) IN id;\n\nCLASS Region 'Region';\nname 'Name' = DATA ISTRING[100] (Region) IN id;\n\ncountry 'Country' = DATA Country (Region) NONULL DELETE;\nnameCountry 'Country' (Region r)= name(country(r)) IN id;\n\nCLASS City 'City';\nname 'Name' = DATA ISTRING[100] (City);\n\ncountry 'Country' = DATA Country (City) NONULL DELETE;\nnameCountry (City c) = name(country(c));\n\nregion 'Region' = DATA Region (City);\nnameRegion (City c) = name(region(c));\n\nFORM cities 'Cities'\n    OBJECTS c = City\n    PROPERTIES(c) name, nameCountry, nameRegion, NEW, DELETE\n;\n\nNAVIGATOR {\n    NEW cities;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"We need to define the logic such that a city can only be linked to a region belonging to the country it is in."}),"\n",(0,i.jsx)(n.h3,{id:"solution",children:"Solution"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"CONSTRAINT country(City c) != country(region(c)) CHECKED BY region[City] MESSAGE 'The country of the city region must match the country of the city';\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsxs)(n.a,{href:"/next/CONSTRAINT_statement",children:[(0,i.jsx)(n.code,{children:"CONSTRAINT"})," statement"]})," defines a condition that must always be ",(0,i.jsx)(n.code,{children:"NULL"}),". In this case, the constraint based on this condition will be violated if there is a country defined for the region, a region for the city, and a country for the region, and the region's country is not the same as the city's country. The ",(0,i.jsx)(n.code,{children:"CHECKED BY"})," block indicates that when you select a region in a dialog, the regions will be filtered by default so as not to violate this constraint. It should be noted that if no country has yet been set for the given city then the condition will always be ",(0,i.jsx)(n.code,{children:"NULL"}),", and all existing regions will be shown in the dialog."]}),"\n",(0,i.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,i.jsx)(n.h3,{id:"task-1",children:"Task"}),"\n",(0,i.jsxs)(n.p,{children:["Similar to ",(0,i.jsx)(n.a,{href:"#example-1",children:(0,i.jsx)(n.strong,{children:"Example 1"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:"We need to make it so that the country is automatically filled when a region is chosen."}),"\n",(0,i.jsx)(n.h3,{id:"solution-1",children:"Solution"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"WHEN LOCAL CHANGED(region(City c)) AND NOT CHANGED(country(c)) DO {\n    country(c) <- country(region(c));\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"It should be noted that after the user has chosen a region and a country is set, when the dialog is called again, only the regions of the selected country will be displayed. If the user wants to see all the regions again, he will need to clear the country first. The expression checks that the country has not changed is added to provide the following behavior: if the cities are changed by external actions that change both the country and the region, then the country should not be changed with this event."}),"\n",(0,i.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,i.jsx)(n.h3,{id:"task-2",children:"Task"}),"\n",(0,i.jsxs)(n.p,{children:["Similar to ",(0,i.jsx)(n.a,{href:"#example-1",children:(0,i.jsx)(n.strong,{children:"Example 1"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:"We need to create the same kind of association between the region and the city, but in such a way that a region cannot be selected until a country has been set first."}),"\n",(0,i.jsx)(n.h3,{id:"solution-2",children:"Solution"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"CONSTRAINT region(City c) AND NOT country(c) = country(region(c)) CHECKED BY region[City] MESSAGE 'The country of the city region must match the country of the city';\n"})}),"\n",(0,i.jsx)(n.p,{children:"The difference from the first example is that the new condition will also be true if a region is set and a country is not. Therefore, in this case the dialog will not display any regions."}),"\n",(0,i.jsx)(n.h2,{id:"example-4",children:"Example 4"}),"\n",(0,i.jsx)(n.h3,{id:"task-3",children:"Task"}),"\n",(0,i.jsxs)(n.p,{children:["Similar to ",(0,i.jsx)(n.a,{href:"#example-1",children:(0,i.jsx)(n.strong,{children:"Example 1"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:"If the user first selects a region, and then a country that does not correspond to the original region, the user will receive an error message when trying to save."}),"\n",(0,i.jsx)(n.p,{children:"We need to make it so that the region is dropped when a new country is selected, if the region does not correspond to that country."}),"\n",(0,i.jsx)(n.h3,{id:"solution-3",children:"Solution"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"WHEN LOCAL CHANGED(country(City c)) AND country(c) != country(region(c)) DO {\n    region(c) <- NULL;\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"example-5",children:"Example 5"}),"\n",(0,i.jsx)(n.h3,{id:"task-4",children:"Task"}),"\n",(0,i.jsxs)(n.p,{children:["Similar to ",(0,i.jsx)(n.a,{href:"#example-1",children:(0,i.jsx)(n.strong,{children:"Example 1"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The solution to the first example has one drawback. The system will not allow you to change the country of a particular region, if the city links to it. The constraint will be violated."}),"\n",(0,i.jsx)(n.p,{children:"We need to make it so that when a region's country is changed, it also changes automatically for all that region's cities."}),"\n",(0,i.jsx)(n.h3,{id:"solution-4",children:"Solution"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"// 1 option\nWHEN SETCHANGED(country(region(City c))) DO\n    country(c) <- country(region(c));\n\n// 2 option\nWHEN SETCHANGED(country(Region r)) DO\n    country(City c) <- country(r) WHERE region(c) = r;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var i=t(96540);const o={},r=i.createContext(o);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);