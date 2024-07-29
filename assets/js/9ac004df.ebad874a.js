"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[41722],{76741:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=r(74848),n=r(28453);const o={title:"Recursion (RECURSION)"},s=void 0,a={id:"Recursion_RECURSION",title:"Recursion (RECURSION)",description:"The recursion operator is an operator that creates a property which sequentially performs two operations:",source:"@site/docs/Recursion_RECURSION.md",sourceDirName:".",slug:"/Recursion_RECURSION",permalink:"/Recursion_RECURSION",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Recursion_RECURSION.md",tags:[],version:"current",lastUpdatedAt:1623249583e3,frontMatter:{title:"Recursion (RECURSION)"},sidebar:"learn",previous:{title:"Partitioning / sorting (PARTITION ... ORDER)",permalink:"/Partitioning_sorting_PARTITION_..._ORDER"},next:{title:"Distribution (UNGROUP)",permalink:"/Distribution_UNGROUP"}},l={},c=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const t={a:"a",code:"code",em:"em",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.em,{children:"recursion"})," operator is an operator that creates a ",(0,i.jsx)(t.a,{href:"/Properties",children:"property"})," which sequentially performs two operations:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Recursively builds an intermediate property (result) with an additional first parameter (operation number) as follows:","\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"result(0, o1, o2, ..., oN) = initial(o1, ..., oN)"}),", where ",(0,i.jsx)(t.code,{children:"initial"})," is an ",(0,i.jsx)(t.em,{children:"initial"})," property."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"result(i+1, o1, o2, ..., oN) = step(o1, ..., oN, $o1, $o2, ..., $oN) IF result(i, $o1, $o2, ..., $oN)"}),", where ",(0,i.jsx)(t.code,{children:"step"})," is a ",(0,i.jsx)(t.em,{children:"step"})," property."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["For all values of the obtained property, it calculates the given ",(0,i.jsx)(t.a,{href:"/Set_operations#func",children:"aggregate function"})," grouping by all its parameters except the operation number."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Currently, only two types of aggregate functions are supported for the recursion operator: ",(0,i.jsx)(t.code,{children:"SUM"})," and ",(0,i.jsx)(t.code,{children:"OR"}),". The latter is used in the case when the initial value and step are of class ",(0,i.jsx)(t.code,{children:"BOOLEAN"}),". ",(0,i.jsx)(t.code,{children:"SUM"})," is used in all other cases."]}),"\n",(0,i.jsx)(t.p,{children:"Note that sets of objects may begin to repeat after a certain number of iterations. In this case, we say that a cycle is formed. There are three policies for working with cycles:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"CYCLES YES"})," - cycles are allowed. In this case, when a cycle is detected, the value of the property will be equal to the maximum allowed value for the value class of this property. This policy is not supported when the initial value and step are of class ",(0,i.jsx)(t.code,{children:"BOOLEAN"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"CYCLES NO"})," (default) - cycles are not allowed. It works similarly to the previous policy, but an additional constraint is created that the value of the obtained property should not be equal to the maximum value (which just means that a cycle has formed for this set of objects)."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"CYCLES IMPOSSIBLE"})," - cycles are impossible. As a rule, it is used if there is a counter among the objects which increases at each iteration and, as a result, cannot be repeated."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["When using the recursion operator, it is important to make sure that the first step execution process is finite, that is, the step value will sooner or later become ",(0,i.jsx)(t.code,{children:"NULL"}),". (This refers primarily to a ",(0,i.jsx)(t.code,{children:"CYCLES IMPOSSIBLE"})," policy because otherwise the recursion will stop at the first cycle found). If this condition is not met, the operation will be forced to stop depending on the settings of the SQL server."]}),"\n",(0,i.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,i.jsxs)(t.p,{children:["To declare a property that implements recursion, use the ",(0,i.jsxs)(t.a,{href:"/RECURSION_operator",children:[(0,i.jsx)(t.code,{children:"RECURSION"})," operator"]}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-lsf",children:"CLASS Node;\nedge = DATA BOOLEAN (Node, Node);\n\n// iteration over an integer from 'from' to 'to' (this property is by default included in the System module)\niterate(i, from, to) = RECURSION i==from AND from IS INTEGER AND to IS INTEGER STEP i==$i+1 AND i<=to CYCLES IMPOSSIBLE;\n\n// counts the number of different paths from a to b in the graph\npathes 'Number of paths' (a, b) = RECURSION 1 AND a IS Node AND b==a STEP 1 IF edge(b, $b);\n\n// defines at what level child is from parent, and null if it is not a child (thus this property can be used to define all children)\nparent = DATA Group (Group);\nlevel 'Level' (Group child, Group parent) = RECURSION 1 IF child IS Group AND parent == child\n                                                                  STEP 1 IF parent == parent($parent);\n\n// Fibonacci numbers, the property calculates all Fibonacci numbers up to the value to, (afterwards it will return null)\nfib(i, to) = RECURSION 1 IF (i==0 OR i==1) AND to IS INTEGER STEP 1 IF (i==$i+1 OR i==$i+2) AND i<to CYCLES IMPOSSIBLE;\n"})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>a});var i=r(96540);const n={},o=i.createContext(n);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);