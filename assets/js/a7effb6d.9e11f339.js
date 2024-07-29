"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[54892],{58018:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>r});var i=n(74848),t=n(28453);const l={title:"Classes"},a=void 0,c={id:"Classes",title:"Classes",description:"The base element in lsFusion is the object. Each object is an instance of some class, which determines the qualities of all its instances. Classes in turn can be divided into built-in classes, which are responsible for primitive data types, and user classes.",source:"@site/docs/Classes.md",sourceDirName:".",slug:"/Classes",permalink:"/Classes",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Classes.md",tags:[],version:"current",lastUpdatedAt:1640850738e3,frontMatter:{title:"Classes"},sidebar:"learn",previous:{title:"Simple constraints",permalink:"/Simple_constraints"},next:{title:"Built-in classes",permalink:"/Built-in_classes"}},o={},r=[{value:"Inheritance",id:"inheritance",level:3},{value:"Class limitations",id:"class-limitations",level:3}];function h(e){const s={a:"a",code:"code",em:"em",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["The base element in ",(0,i.jsx)(s.strong,{children:"lsFusion"})," is the object. Each object is an ",(0,i.jsx)(s.em,{children:"instance"})," of some ",(0,i.jsx)(s.em,{children:"class"}),", which determines the qualities of all its instances. Classes in turn can be divided into ",(0,i.jsx)(s.a,{href:"/Built-in_classes",children:"built-in classes"}),", which are responsible for primitive data types, and ",(0,i.jsx)(s.a,{href:"/User_classes",children:"user classes"}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"inheritance",children:"Inheritance"}),"\n",(0,i.jsxs)(s.p,{children:["Classes can ",(0,i.jsx)(s.em,{children:"inherit"})," from each other. When class ",(0,i.jsx)(s.code,{children:"B"})," inherits from class ",(0,i.jsx)(s.code,{children:"A"}),", class ",(0,i.jsx)(s.code,{children:"A"})," shall be called the ",(0,i.jsx)(s.em,{children:"parent"}),", and class ",(0,i.jsx)(s.code,{children:"B"})," shall be called the ",(0,i.jsx)(s.em,{children:"child"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["The idea of inheritance is as follows: if class ",(0,i.jsx)(s.code,{children:"B"})," inherits from class ",(0,i.jsx)(s.code,{children:"A"}),", then all instances of class ",(0,i.jsx)(s.code,{children:"B"})," will have all the qualities of class ",(0,i.jsx)(s.code,{children:"A"}),". Thus, with inheritance, each class determines the qualities not only of all instances of this class but also of all instances of this class descendants."]}),"\n",(0,i.jsxs)(s.p,{children:["Let's say that an object ",(0,i.jsx)(s.em,{children:"belongs to"})," class ",(0,i.jsx)(s.code,{children:"A"})," if that object is either an instance of class ",(0,i.jsx)(s.code,{children:"A"})," or an instance of a class ",(0,i.jsx)(s.code,{children:"A"})," descendant."]}),"\n",(0,i.jsxs)(s.p,{children:["To implement polymorphism, inheritance is usually used together with ",(0,i.jsx)(s.a,{href:"/Property_extension",children:"properties"})," and ",(0,i.jsx)(s.a,{href:"/Action_extension",children:"actions"})," extension mechanism."]}),"\n",(0,i.jsx)(s.h3,{id:"class-limitations",children:"Class limitations"}),"\n",(0,i.jsx)(s.p,{children:"The class mechanism has several limitations:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["Belonging to a class cannot be calculated (only set explicitly when ",(0,i.jsx)(s.a,{href:"/New_object_NEW",children:"creating"})," and ",(0,i.jsx)(s.a,{href:"/Class_change_CHANGECLASS_DELETE",children:"changing the class"}),") of an object."]}),"\n",(0,i.jsx)(s.li,{children:"A class is set for only one object (not for an object collection)."}),"\n",(0,i.jsx)(s.li,{children:"It is not possible to inherit the same class multiple times."}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Accordingly, if the class mechanism is not sufficient, the platform also supports the ",(0,i.jsx)(s.a,{href:"/Aggregations",children:"aggregation"})," mechanism, which together with inheritance allows implementing almost any polymorphic logic."]})]})}function d(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>c});var i=n(96540);const t={},l=i.createContext(t);function a(e){const s=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(l.Provider,{value:s},e.children)}}}]);