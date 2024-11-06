"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[16066],{64090:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var o=i(74848),r=i(28453);const n={title:"Distribution (UNGROUP)"},s=void 0,l={id:"Distribution_UNGROUP",title:"Distribution (UNGROUP)",description:"The distribution operator creates a property, the grouping value of which using sum function will be equal to the value of the specified property (distributable). Accordingly, as for a group operator, for a distribution operator multiple properties (groups) must be set by which the grouping will take place.",source:"@site/versioned_docs/version-v4/Distribution_UNGROUP.md",sourceDirName:".",slug:"/Distribution_UNGROUP",permalink:"/v4/Distribution_UNGROUP",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Distribution_UNGROUP.md",tags:[],version:"v4",lastUpdatedAt:1623249583e3,frontMatter:{title:"Distribution (UNGROUP)"},sidebar:"learn",previous:{title:"Recursion (RECURSION)",permalink:"/v4/Recursion_RECURSION"},next:{title:"Actions",permalink:"/v4/Actions"}},a={},d=[{value:"Extended form",id:"extended-form",level:3},{value:"Language",id:"language",level:3}];function h(e){const t={a:"a",code:"code",em:"em",h3:"h3",li:"li",ol:"ol",p:"p",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.em,{children:"distribution"})," operator creates a property, the ",(0,o.jsx)(t.a,{href:"/v4/Grouping_GROUP",children:"grouping"})," value of which using sum function will be equal to the value of the specified property (",(0,o.jsx)(t.em,{children:"distributable"}),"). Accordingly, as for a group operator, for a distribution operator multiple properties (",(0,o.jsx)(t.em,{children:"groups"}),") must be set by which the grouping will take place."]}),"\n",(0,o.jsx)(t.p,{children:"There are many different ways to build this kind of distribution. At present the platform supports the two most commonly used:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Limiting - the distribution result must not exceed the value of the specified property."}),"\n",(0,o.jsx)(t.li,{children:"Proportional - the distribution result should be directly proportional to the value of a given property (in other words, the ratio of the distribution results for two object collections within the same group should be equal to the ratio of the values of this property for the same object collections)."}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["The operator can work in ",(0,o.jsx)(t.em,{children:"non-strict"})," mode (used by default). Here the platform tries to calculate the value as close as possible to the value of the distributable property but does not guarantee that they will be equal."]}),"\n",(0,o.jsxs)(t.p,{children:["As for other operations with sets, an ",(0,o.jsx)(t.em,{children:"order"})," can (and usually must) be defined for the distribution operator."]}),"\n",(0,o.jsx)(t.p,{children:"The general algorithm of the distribution operator, depending on the type of distribution, is as follows:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Limiting - distribution is done in the specified order, not exceeding the restriction, until the overall result equals the value of the distributable property. If the operator is working in strict mode and the overall result has not reached the value of the distributable property, the total difference is added to the resulting value of the first object collection."}),"\n",(0,o.jsx)(t.li,{children:"Proportional - the total of the proportions for each group is calculated, after which a distribution coefficient is determined for each object collection, equal to the ratio of the proportion value for this set of objects to the total amount of the group to which it belongs. Finally, the distribution result is calculated as the product of this coefficient and the value of the distributed property. Since the final (and intermediate) results are rounded (and hence accuracy is lost), the sum of the result of this distribution may differ from the value of the distributed property. Therefore, if the operator is working in strict mode, the difference between these values is added to the resulting value of the first object collection."}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"extended-form",children:"Extended form"}),"\n",(0,o.jsxs)(t.p,{children:['The mechanism described above allows distribution only in "one-to-many" mode. However, in some cases this is not enough, and distribution in "many-to-many" mode is necessary. For this, the platform has the so-called ',(0,o.jsx)(t.em,{children:"extended"})," distribution operator form (consequently, the basic form will be called ",(0,o.jsx)(t.em,{children:"simple"}),")."]}),"\n",(0,o.jsx)(t.p,{children:"In the extended form of this operator, the conditions for the distribution result are changed as follows:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Limiting - it is not the distribution result itself that must not exceed the value of the specified property, but rather the grouping of the distribution result by certain additional groups must not exceed this value."}),"\n",(0,o.jsx)(t.li,{children:"Proportional - similar; that is, it is not the result of the distribution itself that must be directly proportional to the value of a certain property, but its grouping by additional groups."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"The algorithm of the operator\u2019s work likewise changes accordingly."}),"\n",(0,o.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,o.jsxs)(t.p,{children:["Since the simple form of the operator is semantically very similar to the operator ",(0,o.jsx)(t.a,{href:"/v4/Partitioning_sorting_PARTITION_..._ORDER",children:"partition/sort"}),", to declare a property that implements a simple distribution the ",(0,o.jsxs)(t.a,{href:"/v4/PARTITION_operator",children:[(0,o.jsx)(t.code,{children:"PARTITION"})," operator"]})," is also used."]}),"\n",(0,o.jsxs)(t.p,{children:["For the extended form, use the ",(0,o.jsxs)(t.a,{href:"/v4/UNGROUP_operator",children:[(0,o.jsx)(t.code,{children:"UNGROUP"})," operator"]}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>l});var o=i(96540);const r={},n=o.createContext(r);function s(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);