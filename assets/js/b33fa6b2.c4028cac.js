"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[27152],{43213:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var s=t(74848),i=t(28453);const a={title:"Simple event"},r=void 0,l={id:"Simple_event",title:"Simple event",description:"Simple event - an event that occurs when the value of the specified property (which shall be called an event condition) changes to non-NULL. This event is a kind of extension of a basic event (adding an additional condition), which means that all the same parameters must be set as for an basic event, in particular:",source:"@site/docs/Simple_event.md",sourceDirName:".",slug:"/Simple_event",permalink:"/next/Simple_event",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Simple_event.md",tags:[],version:"current",lastUpdatedAt:1623249583e3,frontMatter:{title:"Simple event"},sidebar:"learn",previous:{title:"Events",permalink:"/next/Events"},next:{title:"Calculated events",permalink:"/next/Calculated_events"}},o={},c=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Simple"})," event - an ",(0,s.jsx)(n.a,{href:"/next/Events",children:"event"})," that occurs when the value of the specified ",(0,s.jsx)(n.a,{href:"/next/Properties",children:"property"})," (which shall be called an event ",(0,s.jsx)(n.em,{children:"condition"}),") changes to non-",(0,s.jsx)(n.code,{children:"NULL"}),". This event is a kind of extension of a basic event (adding an additional condition), which means that all the same parameters must be set as for an basic event, in particular:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["event ",(0,s.jsx)(n.a,{href:"/next/Events#type",children:"type"}),", which determines the point in time when this simple event will occur (including checking the condition)."]}),"\n",(0,s.jsxs)(n.li,{children:["event ",(0,s.jsx)(n.a,{href:"/next/Events",children:"handler"})," - an ",(0,s.jsx)(n.a,{href:"/next/Actions",children:"action"})," to be executed upon the occurrence of this simple event"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Compared to a basic event, a simple event just wraps its handling in a ",(0,s.jsx)(n.a,{href:"/next/Loop_FOR",children:"loop"})," operator whose condition is an event condition. However, simple events have a number of important additional features:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If the condition does not contain the ",(0,s.jsxs)(n.a,{href:"/next/Previous_value_PREV",children:["previous value operator (",(0,s.jsx)(n.code,{children:"PREV"}),")"]}),", the platform itself wraps the specified condition in a ",(0,s.jsxs)(n.a,{href:"/next/Change_operators_SET_CHANGED_etc",children:["change operator (",(0,s.jsx)(n.code,{children:"SET"}),")"]}),". This significantly reduces the risk of creating incorrect handling (which will have consequences if the change session is empty)"]}),"\n",(0,s.jsx)(n.li,{children:"Such events are more understandable and readable, as they reflect the classic cause-effect relationship (when one thing occurs, another is done)"}),"\n",(0,s.jsxs)(n.li,{children:['For these events there is the possibility of "recalculation" - that is, executing handlers in a mode where all previous values are ',(0,s.jsx)(n.code,{children:"NULL"})," (as if the database were empty). This is useful when an event is created for an existing database, and the old data must also follow the logic of this event."]}),"\n",(0,s.jsxs)(n.li,{children:["If the action in a simple event is a single ",(0,s.jsx)(n.a,{href:"/next/Property_change_CHANGE",children:"change"})," of a given property, this event is easily made ",(0,s.jsx)(n.a,{href:"/next/Calculated_events",children:"calculated"})," and vice versa."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"language",children:"Language"}),"\n",(0,s.jsxs)(n.p,{children:["To create simple events, use the ",(0,s.jsxs)(n.a,{href:"/next/WHEN_statement",children:[(0,s.jsx)(n.code,{children:"WHEN"})," statement"]}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lsf",children:"CLASS Stock;\nname = DATA STRING[50] (Stock);\n\nbalance = DATA INTEGER (Sku, Stock);\n\n// send an email when the balance is less than 0 as a result of applying session changes\nWHEN balance(Sku s, Stock st) < 0 DO\n      EMAIL SUBJECT 'The balance has become negative for the item ' + name(s) + ' in the warehouse ' + name(st);\n\nCLASS OrderDetail;\norder = DATA Order (OrderDetail) NONULL DELETE;\ndiscount = DATA NUMERIC[6,2] (OrderDetail);\n\nWHEN LOCAL CHANGED(customer(Order o)) AND name(customer(o)) == 'Best customer' DO\n    discount(OrderDetail d) <- 50 WHERE order(d) == o;\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(96540);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);