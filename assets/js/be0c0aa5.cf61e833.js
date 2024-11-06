"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[69816],{38346:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=n(74848),i=n(28453);const s={title:"Set operations"},o=void 0,l={id:"Set_operations",title:"Set operations",description:"One of the key features of the platform is the ability to execute certain operations for all object collections for which the values of one or more properties are not NULL. In the property logic such an operation is the calculation of various aggregate functions.",source:"@site/docs/Set_operations.md",sourceDirName:".",slug:"/Set_operations",permalink:"/Set_operations",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Set_operations.md",tags:[],version:"current",lastUpdatedAt:1640850738e3,frontMatter:{title:"Set operations"},sidebar:"learn",previous:{title:"Selection (CASE, IF, MULTI, OVERRIDE, EXCLUSIVE)",permalink:"/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE"},next:{title:"Grouping (GROUP)",permalink:"/Grouping_GROUP"}},c={},d=[{value:"Aggregate functions",id:"func",level:3},{value:"Operation correctness",id:"correct",level:3},{value:"Examples",id:"examples",level:3}];function a(e){const t={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["One of the key features of the platform is the ability to execute certain operations for all object collections for which the values of one or more ",(0,r.jsx)(t.a,{href:"/Properties",children:"properties"})," are not ",(0,r.jsx)(t.code,{children:"NULL"}),". In the property logic such an operation is the calculation of various ",(0,r.jsx)(t.em,{children:"aggregate functions"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"func",children:"Aggregate functions"}),"\n",(0,r.jsxs)(t.p,{children:["An aggregate function calculates a certain ",(0,r.jsx)(t.em,{children:"result"})," as a single object on a set of object collections. This function is defined by the ",(0,r.jsx)(t.em,{children:"initial value"})," (typically ",(0,r.jsx)(t.code,{children:"NULL"}),"), ",(0,r.jsx)(t.a,{href:"/Properties",children:"properties"})," that it uses (",(0,r.jsx)(t.em,{children:"operands"}),"), ",(0,r.jsx)(t.em,{children:"operation of addition"})," to the ",(0,r.jsx)(t.em,{children:"intermediate result"})," of the current operand values, and ",(0,r.jsx)(t.em,{children:"conversion function"})," of the intermediate result to the final (typically the intermediate result is the final result)."]}),"\n",(0,r.jsx)("a",{className:"lsdoc-anchor",id:"commutative"}),"\n",(0,r.jsxs)(t.p,{children:["Aggregate function is ",(0,r.jsx)(t.em,{children:"commutative"})," if the order in which the object collections of the original set are iterated over does not matter when calculating the result."]}),"\n",(0,r.jsx)(t.p,{children:"The table below shows the currently supported types of aggregate functions:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Type/statement option"}),(0,r.jsx)(t.th,{children:"Initial value"}),(0,r.jsx)(t.th,{children:"Names of the operands"}),(0,r.jsx)(t.th,{children:"Add operation"}),(0,r.jsx)(t.th,{children:"Conversion function"}),(0,r.jsx)(t.th,{children:"Commutativity"}),(0,r.jsx)(t.th,{children:"Data type"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"SUM"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"NULL"})}),(0,r.jsx)(t.td,{children:"operand"}),(0,r.jsx)(t.td,{children:"result = result (+) operand"}),(0,r.jsx)(t.td,{children:"result"}),(0,r.jsx)(t.td,{children:"+"}),(0,r.jsx)(t.td,{children:"number"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"MAX"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"NULL"})}),(0,r.jsx)(t.td,{children:"operand"}),(0,r.jsx)(t.td,{children:"result = max(result, operand)"}),(0,r.jsx)(t.td,{children:"result"}),(0,r.jsx)(t.td,{children:"+"}),(0,r.jsx)(t.td,{children:"any comparable"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"MIN"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"NULL"})}),(0,r.jsx)(t.td,{children:"operand"}),(0,r.jsx)(t.td,{children:"result = min(result, operand)"}),(0,r.jsx)(t.td,{children:"result"}),(0,r.jsx)(t.td,{children:"+"}),(0,r.jsx)(t.td,{children:"any comparable"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"CONCAT"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"NULL"})}),(0,r.jsx)(t.td,{children:"separator, operand"}),(0,r.jsx)(t.td,{children:"result = CONCAT separator, result, operand"}),(0,r.jsx)(t.td,{children:"result"}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"string"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"LAST"})," / ",(0,r.jsx)(t.code,{children:"PREV"})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"NULL"})}),(0,r.jsx)(t.td,{children:"where, operand"}),(0,r.jsx)(t.td,{children:"result = IF where THEN operand ELSE result"}),(0,r.jsx)(t.td,{children:"result"}),(0,r.jsx)(t.td,{children:"-"}),(0,r.jsx)(t.td,{children:"any"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"From the perspective of determining the set of object collections and the result display method, four main operators for working with sets can be distinguished:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsxs)(t.a,{href:"/Grouping_GROUP",children:["Group (",(0,r.jsx)(t.code,{children:"GROUP"}),")"]})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsxs)(t.a,{href:"/Partitioning_sorting_PARTITION_..._ORDER",children:["Partition/order (",(0,r.jsx)(t.code,{children:"PARTITION ... ORDER"}),")"]})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsxs)(t.a,{href:"/Recursion_RECURSION",children:["Recursion (",(0,r.jsx)(t.code,{children:"RECURSION"}),")"]})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsxs)(t.a,{href:"/Distribution_UNGROUP",children:["Distribution (",(0,r.jsx)(t.code,{children:"UNGROUP"}),")"]})}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"correct",children:"Operation correctness"}),"\n",(0,r.jsxs)(t.p,{children:["You should consider that during each operation on a set of object collections, this set must be finite. In this case, the operation is called ",(0,r.jsx)(t.em,{children:"correct"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lsf",children:"CLASS A;\nd = DATA INTEGER (A);\n\nf (b) = GROUP SUM 1 IF d(a) < b;\nmessageF  { MESSAGE f(5); } // will be executed successfully\n\ng = GROUP SUM f(b);\nmessageG  { MESSAGE g(); } // f(b) is not NULL for infinite number b, the platform will throw an error\n\nFORM f\n    OBJECTS d=DATE\n;\n\nprintFWithD { PRINT f OBJECTS d=currentDate(); } // will be executed successfully\n\n// there is no filter for dates, and d IS DATE is not NULL for an infinite number d, the platform will throw an error\nprintFWithoutD { PRINT f; } \n"})}),"\n",(0,r.jsx)(t.p,{children:"There are several non-trivial cases when the operation is correct but the platform cannot determine this. For example, if the only limiting condition for a parameter is whether it falls within the range:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lsf",children:"hs = GROUP SUM 1 IF (a AS INTEGER) >= 4 AND a <= 6;\n// theoretically, it should return 3, but the platform will still throw an error\nmessageHS  { MESSAGE hs(); } \n// workaround: to work with intervals, the iterate property can be used\n// (which, in turn, is implemented through recursion)\nhi = GROUP SUM 1 IF iterate(a, 4, 6); \n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var r=n(96540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);