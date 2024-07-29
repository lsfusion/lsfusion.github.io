"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[19958],{48836:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>d,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var t=n(74848),s=n(28453);const o={title:"Change operators (SET, CHANGED, ...)"},d=void 0,i={id:"Change_operators_SET_CHANGED_etc",title:"Change operators (SET, CHANGED, ...)",description:"Change operators determine whether some types of changes have occurred for a certain property in the current session. All these operators are derived from the previous value operator (PREV), however, it is recommended to use them to improve readability and performance. The following table shows the supported types of changes and their description:",source:"@site/versioned_docs/version-v5/Change_operators_SET_CHANGED_etc.md",sourceDirName:".",slug:"/Change_operators_SET_CHANGED_etc",permalink:"/v5/Change_operators_SET_CHANGED_etc",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/Change_operators_SET_CHANGED_etc.md",tags:[],version:"v5",lastUpdatedAt:1709302895e3,frontMatter:{title:"Change operators (SET, CHANGED, ...)"},sidebar:"learn",previous:{title:"Previous value (PREV)",permalink:"/v5/Previous_value_PREV"},next:{title:"User/IS interaction",permalink:"/v5/User_IS_interaction"}},c={},a=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function h(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"Change operators"})," determine whether some types of changes have occurred for a certain property in the current session. All these operators are derived from the ",(0,t.jsxs)(r.a,{href:"/v5/Previous_value_PREV",children:["previous value operator (",(0,t.jsx)(r.code,{children:"PREV"}),")"]}),", however, it is recommended to use them to improve readability and performance. The following table shows the supported types of changes and their description:"]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Operator"}),(0,t.jsx)(r.th,{children:"Value"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"SET"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"f AND NOT PREV(f)"})}),(0,t.jsx)(r.td,{children:"Value is set"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"DROPPED"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"NOT f AND PREV(f)"})}),(0,t.jsx)(r.td,{children:"Value is reset"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"CHANGED"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"(f OR PREV(f)) AND NOT f==PREV(f)"})}),(0,t.jsx)(r.td,{children:"Value is changed"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"SETCHANGED"})}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.code,{children:"f AND NOT f==PREV(f)"}),(0,t.jsx)("br",{}),"or",(0,t.jsx)("br",{}),(0,t.jsx)(r.code,{children:"CHANGED(f) AND NOT DROPPED(f)"})]}),(0,t.jsxs)(r.td,{children:["Value is changed to non-",(0,t.jsx)(r.code,{children:"NULL"})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"DROPCHANGED"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"CHANGED(f) AND NOT SET(f)"})}),(0,t.jsxs)(r.td,{children:["Value is either reset or changed from one non-",(0,t.jsx)(r.code,{children:"NULL"})," to another non-",(0,t.jsx)(r.code,{children:"NULL"})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"SETDROPPED"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"SET(f) OR DROPPED(f)"})}),(0,t.jsxs)(r.td,{children:["Value is either reset or changed from ",(0,t.jsx)(r.code,{children:"NULL"})," to non-",(0,t.jsx)(r.code,{children:"NULL"})]})]})]})]}),"\n",(0,t.jsx)(r.admonition,{type:"warning",children:(0,t.jsxs)(r.p,{children:["These operators are computed differently inside the ",(0,t.jsx)(r.a,{href:"/v5/Events#change",children:"event"})," handler: in this case, they return changes from the point of the previous occurrence of this event, or rather, from the point at which all its handlers are completed."]})}),"\n",(0,t.jsx)(r.h3,{id:"language",children:"Language"}),"\n",(0,t.jsxs)(r.p,{children:["To declare a property using change operators, the following ",(0,t.jsx)(r.a,{href:"/v5/Change_operators",children:"syntax constructs"})," are used."]}),"\n",(0,t.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lsf",children:"quantity = DATA NUMERIC[14,2] (OrderDetail);\nprice = DATA NUMERIC[14,2] (OrderDetail);\nsum(OrderDetail d) <- quantity(d) * price(d) WHEN CHANGED(quantity(d)) OR CHANGED(price(d));\n\ncreatedUser = DATA CustomUser (Order);\ncreatedUser (Order o) <- currentUser() WHEN SET(o IS Order);\n\nnumerator = DATA Numerator (Order);\nnumber = DATA STRING[28] (Order);\nseries = DATA BPSTRING[2] (Order);\nWHEN SETCHANGED(numerator(Order o)) AND\n     NOT CHANGED(number(o)) AND\n     NOT CHANGED(series(o))\n     DO {\n        number(o) <- curStringValue(numerator(o));\n        series(o) <- series(numerator(o));\n        incrementValueSession(numerator(o));\n     }\n;\n"})})]})}function l(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>d,x:()=>i});var t=n(96540);const s={},o=t.createContext(s);function d(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);