"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[21592],{9841:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(74848),s=r(28453);const o={title:"MAX operator"},a=void 0,i={id:"MAX_operator",title:"MAX operator",description:"The MAX operator creates a property that implements finding maximum value.",source:"@site/versioned_docs/version-v4/MAX_operator.md",sourceDirName:".",slug:"/MAX_operator",permalink:"/v4/MAX_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/MAX_operator.md",tags:[],version:"v4",lastUpdatedAt:1708525070,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"MAX operator"},sidebar:"learn",previous:{title:"JOIN operator",permalink:"/v4/JOIN_operator"},next:{title:"MIN operator",permalink:"/v4/MIN_operator"}},l={},c=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function p(e){const t={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"MAX"})," operator creates a ",(0,n.jsx)(t.a,{href:"/v4/Properties",children:"property"})," that implements finding ",(0,n.jsx)(t.a,{href:"/v4/Extremum_MAX_MIN",children:"maximum"})," value."]}),"\n",(0,n.jsx)(t.h3,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"MAX expr1, ..., exprN\n"})}),"\n",(0,n.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"MAX"})," operator creates a property that returns the maximum value of the values of the specified properties."]}),"\n",(0,n.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"expr1, ..., exprN"})}),"\n",(0,n.jsxs)(t.p,{children:["A list of ",(0,n.jsx)(t.a,{href:"/v4/Expression",children:"expressions"})," of which values the maximum is selected."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lsf",children:"date1 = DATA DATE(INTEGER);\ndate2 = DATA DATE(INTEGER);\nmaxDate (INTEGER i) = MAX date1(i), date2(i);\n\nbalance = DATA INTEGER (Item);\noutcome 'Balance (non-negative)' (Item i) = MAX balance(i), 0;\n"})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>i});var n=r(96540);const s={},o=n.createContext(s);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);