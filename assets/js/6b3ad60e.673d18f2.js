"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[87848],{65325:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=t(74848),i=t(28453);const s={title:"RECURSION operator"},o=void 0,a={id:"RECURSION_operator",title:"RECURSION operator",description:"The RECURSION operator creates a property that implements recursion.",source:"@site/docs/RECURSION_operator.md",sourceDirName:".",slug:"/RECURSION_operator",permalink:"/next/RECURSION_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/RECURSION_operator.md",tags:[],version:"current",lastUpdatedAt:170852507e4,frontMatter:{title:"RECURSION operator"},sidebar:"learn",previous:{title:"PREV operator",permalink:"/next/PREV_operator"},next:{title:"ROUND operator",permalink:"/next/ROUND_operator"}},l={},c=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"RECURSION"})," operator creates a ",(0,r.jsx)(n.a,{href:"/next/Properties",children:"property"})," that implements ",(0,r.jsx)(n.a,{href:"/next/Recursion_RECURSION",children:"recursion"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"RECURSION initialExpr STEP stepExpr [CYCLES YES | CYCLES NO | CYCLES IMPOSSIBLE]\n"})}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"RECURSION"})," operator creates a property that implements recursion. ",(0,r.jsx)(n.a,{href:"/next/Expression",children:"Expressions"})," that describe the next step of the recursion may access not only the property parameters but also the parameters at the previous step. This access has the syntax ",(0,r.jsx)(n.code,{children:"$name"}),", where ",(0,r.jsx)(n.code,{children:"name"})," is the name of the parameter."]}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"initialExpr"})}),"\n",(0,r.jsx)(n.p,{children:"An expression whose value is the initial property."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"stepExpr"})}),"\n",(0,r.jsxs)(n.p,{children:["An expression whose value is a property of a recursion step. Allows a special syntax ",(0,r.jsx)(n.code,{children:"$name"})," to access the value of the ",(0,r.jsx)(n.code,{children:"name"})," parameter in the previous step."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"CYCLES YES"})}),"\n",(0,r.jsx)(n.p,{children:"Specifies that cycles are allowed."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"CYCLES NO"})}),"\n",(0,r.jsx)(n.p,{children:"Specifies that cycles are not allowed. This option is used by default."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"CYCLES IMPOSSIBLE"})}),"\n",(0,r.jsx)(n.p,{children:"Specifies that cycles are not possible."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"CLASS Node;\nedge = DATA BOOLEAN (Node, Node);\n\n// iteration over an integer from 'from' to 'to' (this property is by default included in the System module)\niterate(i, from, to) = RECURSION i==from AND from IS INTEGER AND to IS INTEGER STEP i==$i+1 AND i<=to CYCLES IMPOSSIBLE;\n\n// counts the number of different paths from a to b in the graph\npathes 'Number of paths' (a, b) = RECURSION 1 AND a IS Node AND b==a STEP 1 IF edge(b, $b);\n\n// defines at what level child is from parent, and null if it is not a child (thus this property can be used to define all children)\nparent = DATA Group (Group);\nlevel 'Level' (Group child, Group parent) = RECURSION 1 IF child IS Group AND parent == child\n                                                                  STEP 1 IF parent == parent($parent);\n\n// Fibonacci numbers, the property calculates all Fibonacci numbers up to the value to, (afterwards it will return null)\nfib(i, to) = RECURSION 1 IF (i==0 OR i==1) AND to IS INTEGER STEP 1 IF (i==$i+1 OR i==$i+2) AND i<to CYCLES IMPOSSIBLE;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Note that Fibonacci numbers can be implemented without adding the to parameter:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"fib(i) = RECURSION 1 IF (i==0 OR i==1) STEP 1 IF (i==$i+1 OR i==$i+2);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In the current implementation, however, the platform optimizer is less focused on working with numbers, so it cannot yet determine that the step function is increasing and stop the recursion on its own, artificially creating the corresponding condition, as is done in the above example. Even more questions arise when this property needs to be displayed in a dynamic list (and in a static list this cannot be done at all, since the number of non-",(0,r.jsx)(n.code,{children:"NULL"})," values is infinite). In this case, the current order in this list must also be taken into account and also pushed into the query. These limitations will be removed in future versions, but in the current version it is recommended to take them into account."]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(96540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);