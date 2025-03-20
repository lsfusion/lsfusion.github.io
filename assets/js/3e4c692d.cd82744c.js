"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["82884"],{44641:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>a,assets:()=>l,toc:()=>o,contentTitle:()=>c});var a=JSON.parse('{"id":"Calculated_events","title":"Calculated events","description":"Calculated events are events that change the value of a property when the value of some other property (condition) changes to a non-NULL value. Moreover, unlike simple events, this change is not made at the moment the condition is changed but is calculated each time the changed property is accessed. If the property has already been changed in the same session, this change is considered higher priority than the change in the calculated event.","source":"@site/docs/Calculated_events.md","sourceDirName":".","slug":"/Calculated_events","permalink":"/Calculated_events","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/master/docs/en/Calculated_events.md","tags":[],"version":"current","lastUpdatedAt":1623249583000,"frontMatter":{"title":"Calculated events"},"sidebar":"learn","previous":{"title":"Simple event","permalink":"/Simple_event"},"next":{"title":"Constraints","permalink":"/Constraints"}}'),s=n("85893"),i=n("50065");let r={title:"Calculated events"},c=void 0,l={},o=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function d(e){let t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Calculated"})," events are events that change the value of a property when the value of some other property (",(0,s.jsx)(t.em,{children:"condition"}),") changes to a non-",(0,s.jsx)(t.code,{children:"NULL"})," value. Moreover, unlike ",(0,s.jsx)(t.a,{href:"/Simple_event",children:"simple"})," events, this change is not made at the moment the condition is changed but is calculated each time the changed property is accessed. If the property has already been ",(0,s.jsx)(t.a,{href:"/Property_change_CHANGE",children:"changed"})," in the same session, this change is considered higher priority than the change in the calculated event."]}),"\n",(0,s.jsx)(t.p,{children:"For each property, there can only be one calculated event that changes this property."}),"\n",(0,s.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,s.jsxs)(t.p,{children:["To define calculated events, use the ",(0,s.jsxs)(t.a,{href:"/lt-_WHEN_statement",children:[(0,s.jsx)(t.code,{children:"<- WHEN"})," statement"]}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lsf",children:"// when adding a client, by default, give him the specified discount\ndefaultDiscount = DATA NUMERIC[6,2] ();\ndiscount = DATA NUMERIC[6,2] (Customer);\ndiscount(Customer c) <- defaultDiscount() WHEN SET(c IS Customer);\n\nquantity = DATA NUMERIC[10,2] (OrderDetail);\nprice = DATA NUMERIC[10,2] (OrderDetail);\nsum = DATA NUMERIC[10,2] (OrderDetail);\n\nsum(OrderDetail d) <- quantity(d) * price(d) WHEN CHANGED(quantity(d)) OR CHANGED(price(d));\n"})})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return r}});var a=n(67294);let s={},i=a.createContext(s);function r(e){let t=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);