"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[23209],{94309:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var r=t(74848),n=t(28453);const o={title:"UNGROUP operator"},s=void 0,d={id:"UNGROUP_operator",title:"UNGROUP operator",description:"At the moment, the UNGROUP operator is not implemented.",source:"@site/versioned_docs/version-v4/UNGROUP_operator.md",sourceDirName:".",slug:"/UNGROUP_operator",permalink:"/v4/UNGROUP_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/UNGROUP_operator.md",tags:[],version:"v4",lastUpdatedAt:1709302895e3,frontMatter:{title:"UNGROUP operator"},sidebar:"learn",previous:{title:"STRUCT operator",permalink:"/v4/STRUCT_operator"},next:{title:"Object group operator",permalink:"/v4/Object_group_operator"}},c={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function h(e){const i={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.admonition,{type:"danger",children:(0,r.jsxs)(i.p,{children:["At the moment, the ",(0,r.jsx)(i.code,{children:"UNGROUP"})," operator is not implemented."]})}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:"UNGROUP"})," operator creates a ",(0,r.jsx)(i.a,{href:"/v4/Properties",children:"property"})," that implements ",(0,r.jsx)(i.a,{href:"/v4/Distribution_UNGROUP",children:"distribution"})," in an extended form."]}),"\n",(0,r.jsx)(i.h3,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"UNGROUP \npropertyId [BY groupExpr1, ..., groupExprM] \ndistributionType exPropertyId [BY exGroupExpr1, ..., exGroupExprM]\n[ORDER [DESC] orderExpr1, ..., orderExprK]\n[WHERE whereExpr]\n"})}),"\n",(0,r.jsxs)(i.p,{children:["where ",(0,r.jsx)(i.code,{children:"distributionType"})," can be described in several ways:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"PROPORTION [STRICT] ROUND(digits)\nLIMIT [STRICT]\n"})}),"\n",(0,r.jsx)(i.h3,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:"UNGROUP"}),' operator creates a property that distributes a certain value among object collections of the same group on a "many-to-many" basis.']}),"\n",(0,r.jsxs)(i.p,{children:["The first block, ",(0,r.jsx)(i.code,{children:"BY"}),", describes groups that the set of object collections will be broken into. If the ",(0,r.jsx)(i.code,{children:"BY"})," block is not specified, all object collections are considered to belong to the same group."]}),"\n",(0,r.jsxs)(i.p,{children:["The second ",(0,r.jsx)(i.code,{children:"BY"})," block describes additional groups that the result will be grouped by for checking constraints / calculating proportions. If the second block ",(0,r.jsx)(i.code,{children:"BY"})," is not specified, all object collections are considered to belong to the same group."]}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:"ORDER"})," block defines the order in which distribution will be done. The defined order must be uniquely determined."]}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:"WHERE"})," block defines a condition under which an object collection will participate in distribution operation."]}),"\n",(0,r.jsx)(i.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"propertyId"})}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.a,{href:"/v4/IDs#propertyid",children:"ID"})," of the distributed property. The value of this property must be numeric, and the number of parameters must be equal to the number of groups in the ",(0,r.jsx)(i.code,{children:"BY"})," block. When calculating the values of group/partition expressions will be passed to this property as an input."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"groupExpr1, ..., groupExprM"})}),"\n",(0,r.jsx)(i.p,{children:"List of group expressions."}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"distributionType"})}),"\n",(0,r.jsx)(i.p,{children:"Distribution type. These are of the following types:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"PROPORTION"})}),"\n",(0,r.jsxs)(i.p,{children:["Keyword specifying the use of proportional distribution. In this case, the value of the distributed property for a particular group is distributed proportionally among the object collections belonging to the group. The proportion is defined by the ",(0,r.jsx)(i.code,{children:"expr"})," expression that is specified after the distribution type."]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"STRICT"})}),"\n",(0,r.jsxs)(i.p,{children:["When this keyword is specified, the value of the distributed property must be exactly (without a remainder) distributed between the object collections belonging to the group. If after distribution there is a remainder (which may also be negative), it is added to the first object collection in accordance with the order defined in the ",(0,r.jsx)(i.code,{children:"ORDER"})," block."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"ROUND(digits)"})}),"\n",(0,r.jsx)(i.p,{children:"Specifies the number of decimal places the value will be rounded to."}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"digits"})}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.a,{href:"/v4/Literals#intliteral",children:"Integer literal"})," specifying the number of decimal places."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"LIMIT"})}),"\n",(0,r.jsxs)(i.p,{children:["A keyword specifying the use of distribution with specified limits. In this case, the value of the distributed property is initially set for the first object collection. If the limit is exceeded for this set, the limit is set for the first object collection, and the rest of the value of the distributed property is assigned to the second set of objects. It is then checked for exceeding the limit for the second object collection, and so on. The limit is defined by the ",(0,r.jsx)(i.code,{children:"expr"})," expression specified after specifying of the distribution type."]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"STRICT"})}),"\n",(0,r.jsxs)(i.p,{children:["When this keyword is specified, the value of the distributed property must be exactly (without a remainder) distributed between the object collections belonging to the group. If after distribution there is a remainder, it is added to the last object collection in accordance with the order specified in the ",(0,r.jsx)(i.code,{children:"ORDER"})," block."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"exPropertyId"})}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.a,{href:"/v4/IDs#propertyid",children:"ID"})," of the property that defines a proportion for ",(0,r.jsx)(i.code,{children:"PROPORTION"})," type distributions, and defines limits for ",(0,r.jsx)(i.code,{children:"LIMIT"})," type distributions. The value of this property must be numeric, and the number of parameters must be equal to the number of groups in the ",(0,r.jsx)(i.code,{children:"BY"})," block."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"exGroupExpr1, ..., exGroupExprM"})}),"\n",(0,r.jsx)(i.p,{children:"List of additional group expressions."}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"DESC"})}),"\n",(0,r.jsx)(i.p,{children:"Keyword. Specifies a reverse iterate order for object collections."}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"orderExpr1, ..., orderExprK"})}),"\n",(0,r.jsx)(i.p,{children:"A list of expressions that determine the order in which object collections will be iterated when calculating the aggregate function or during distribution. To determine the order, first the value of the first expression is used; then, if equal, the value of the second one is used, etc."}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"whereExpr"})}),"\n",(0,r.jsxs)(i.p,{children:["Filtering expression. Only object groups for which the value of the filtering expression is not ",(0,r.jsx)(i.code,{children:"NULL"})," will participate in the grouping."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"examples",children:"Examples"})]})}function p(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>s,x:()=>d});var r=t(96540);const n={},o=r.createContext(n);function s(e){const i=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(o.Provider,{value:i},e.children)}}}]);