"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[83497],{19938:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=n(74848),t=n(28453);const o={title:"Change operators"},i=void 0,a={id:"Change_operators",title:"Change operators",description:"Change operators - a set of operators that determine various types of property value changes.",source:"@site/docs/Change_operators.md",sourceDirName:".",slug:"/Change_operators",permalink:"/Change_operators",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Change_operators.md",tags:[],version:"current",lastUpdatedAt:170852507e4,frontMatter:{title:"Change operators"},sidebar:"learn",previous:{title:"IS, AS operators",permalink:"/IS_AS_operators"},next:{title:"Comparison operators",permalink:"/Comparison_operators"}},c={},d=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function l(e){const r={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["Change operators - a set of operators that determine various types of ",(0,s.jsx)(r.a,{href:"/Change_operators_SET_CHANGED_etc",children:"property value changes"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"typeChange(propExpr)\n"})}),"\n",(0,s.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(r.p,{children:["Change operators create ",(0,s.jsx)(r.a,{href:"/Properties",children:"actions"})," which determine whether some types of changes have been made for a certain property in the current session."]}),"\n",(0,s.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"typeChange"})}),"\n",(0,s.jsx)(r.p,{children:"Type of the change operator. It is specified by one of the keywords:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"SET"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"CHANGED"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"DROPPED"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"SETCHANGED"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"DROPCHANGED"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"SETDROPPED"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"propExpr"})}),"\n",(0,s.jsxs)(r.p,{children:["An ",(0,s.jsx)(r.a,{href:"/Expression",children:"expression"})," which value defines the property that should be checked for the presence of a change."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-lsf",children:"quantity = DATA NUMERIC[14,2] (OrderDetail);\nprice = DATA NUMERIC[14,2] (OrderDetail);\nsum(OrderDetail d) <- quantity(d) * price(d) WHEN CHANGED(quantity(d)) OR CHANGED(price(d));\n\ncreatedUser = DATA CustomUser (Order);\ncreatedUser (Order o) <- currentUser() WHEN SET(o IS Order);\n\nnumerator = DATA Numerator (Order);\nnumber = DATA STRING[28] (Order);\nseries = DATA BPSTRING[2] (Order);\nWHEN SETCHANGED(numerator(Order o)) AND\n     NOT CHANGED(number(o)) AND\n     NOT CHANGED(series(o))\n     DO {\n        number(o) <- curStringValue(numerator(o));\n        series(o) <- series(numerator(o));\n        incrementValueSession(numerator(o));\n     }\n;\n"})})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>a});var s=n(96540);const t={},o=s.createContext(t);function i(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);