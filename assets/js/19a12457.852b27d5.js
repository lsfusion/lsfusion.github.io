"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[76841],{79397:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=t(74848),r=t(28453);const i={title:"Grouping (GROUP)"},a=void 0,s={id:"Grouping_GROUP",title:"Grouping (GROUP)",description:"The group operator creates a property that divides all object collections in the system into groups, and calculates an aggregating function for each group following specified order. Accordingly, the set for which this aggregating function is calculated is determined as all the object collections belonging to this group.",source:"@site/docs/Grouping_GROUP.md",sourceDirName:".",slug:"/Grouping_GROUP",permalink:"/next/Grouping_GROUP",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Grouping_GROUP.md",tags:[],version:"current",lastUpdatedAt:1667285321,formattedLastUpdatedAt:"Nov 1, 2022",frontMatter:{title:"Grouping (GROUP)"},sidebar:"learn",previous:{title:"Set operations",permalink:"/next/Set_operations"},next:{title:"Partitioning / sorting (PARTITION ... ORDER)",permalink:"/next/Partitioning_sorting_PARTITION_..._ORDER"}},c={},d=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.em,{children:"group"})," operator creates a ",(0,o.jsx)(n.a,{href:"/next/Properties",children:"property"})," that divides all object collections in the system into groups, and calculates an ",(0,o.jsx)(n.a,{href:"/next/Set_operations#func",children:"aggregating function"})," for each group following specified order. Accordingly, the set for which this aggregating function is calculated is determined as all the object collections belonging to this group."]}),"\n",(0,o.jsxs)(n.p,{children:["Groups are defined for this operator as a set of properties (",(0,o.jsx)(n.em,{children:"groups"}),"), and the order is defined as a list of properties and an increasing or decreasing marker. If the aggregation function is not ",(0,o.jsx)(n.a,{href:"/next/Set_operations#commutative",children:"commutative"}),", then the order must be uniquely determined."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"A uniquely determined order can be guaranteed if for example, the IDs of all objects for which grouping is performed are specified when the order is defined"})}),"\n",(0,o.jsxs)(n.p,{children:["In addition to the standard types of aggregate functions for grouping, there are three additional types: ",(0,o.jsx)(n.code,{children:"EQUAL"}),", ",(0,o.jsx)(n.code,{children:"AGGR"})," and ",(0,o.jsx)(n.code,{children:"NAGGR"}),"."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"EQUAL"})," is a special case of the aggregation function ",(0,o.jsx)(n.code,{children:"MAX"})," (or ",(0,o.jsx)(n.code,{children:"MIN"}),"), with the additional ",(0,o.jsx)(n.a,{href:"/next/Constraints",children:"constraint"})," that the value of the operand of the aggregating function within each group must be the same."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"AGGR"})," and ",(0,o.jsx)(n.code,{children:"NAGGR"})," are a special case of ",(0,o.jsx)(n.code,{children:"EQUAL"}),", but with an even more strict constraint: for each group there is no more than one object collection, the operand of the aggregating function is one of the objects, and the groups include all other objects. Aggregate function ",(0,o.jsx)(n.code,{children:"NAGGR"})," only differs from ",(0,o.jsx)(n.code,{children:"AGGR"})," in the fact that if it is used, no constraint is created (it is assumed that the constraint follows from the semantics of the properties of the operands and / or groupings themselves)."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"language",children:"Language"}),"\n",(0,o.jsxs)(n.p,{children:["To declare a property that implements grouping, use the ",(0,o.jsxs)(n.a,{href:"/next/GROUP_operator",children:[(0,o.jsx)(n.code,{children:"GROUP"})," operator"]}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"CLASS Game;\nCLASS Team;\nhostGoals = DATA INTEGER (Game);\nhostTeam = DATA Team (Game);\nhostGoalsScored(team) = GROUP SUM hostGoals(Game game) BY hostTeam(game);\n\nname = DATA STRING[100] (Country);\n// property (STRING[100]) -> Country is obtained\ncountryName = GROUP AGGR Country country BY name(country); \n\nCLASS Book;\nCLASS Tag;\nname = DATA STRING[100] (Tag);\nin = DATA BOOLEAN (Book, Tag);\n\ntags(Book b) = GROUP CONCAT name(Tag t) IF in(b, t), ', ' ORDER name(t), t;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var o=t(96540);const r={},i=o.createContext(r);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);