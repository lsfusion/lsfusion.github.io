"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[337],{77389:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>r,toc:()=>o});var n=t(74848),a=t(28453);const c={title:"User classes"},l=void 0,r={id:"User_classes",title:"User classes",description:"Classes that a developer can create and the instances of which a user can create are called custom classes.",source:"@site/docs/User_classes.md",sourceDirName:".",slug:"/User_classes",permalink:"/User_classes",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/User_classes.md",tags:[],version:"current",lastUpdatedAt:1623249583e3,frontMatter:{title:"User classes"},sidebar:"learn",previous:{title:"Built-in classes",permalink:"/Built-in_classes"},next:{title:"Static objects",permalink:"/Static_objects"}},i={},o=[{value:"Inheritance",id:"inheritance",level:3},{value:"Abstract classes",id:"abstract",level:3},{value:"Class change",id:"class-change",level:3},{value:"Common ancestor",id:"commonparentclass",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function h(e){const s={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/Classes",children:"Classes"})," that a developer can create and the instances of which a user can create are called ",(0,n.jsx)(s.em,{children:"custom classes"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"inheritance",children:"Inheritance"}),"\n",(0,n.jsxs)(s.p,{children:["When creating custom class ",(0,n.jsx)(s.code,{children:"B"})," you can explicitly specify that its ",(0,n.jsx)(s.a,{href:"/Classes",children:"parent"})," is class ",(0,n.jsx)(s.code,{children:"A"}),". In this case, class ",(0,n.jsx)(s.code,{children:"A"})," shall be called the ",(0,n.jsx)(s.em,{children:"parent class"})," of class ",(0,n.jsx)(s.code,{children:"B"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["A parent class of a custom class can only be another custom class. Inheriting from ",(0,n.jsx)(s.a,{href:"/Built-in_classes",children:"built-in classes"})," is not possible. If no parent class is specified when creating a custom class, this class is implicitly inherited from the ",(0,n.jsx)(s.code,{children:"Object"})," class (located in the ",(0,n.jsx)(s.code,{children:"System"})," ",(0,n.jsx)(s.a,{href:"/Modules",children:"module"}),"). Thus, the ",(0,n.jsx)(s.code,{children:"System.Object"})," class is the parent object of all custom classes."]}),"\n",(0,n.jsx)(s.p,{children:"The platform supports multiple inheritance of custom classes, meaning that a class can have several parent classes."}),"\n",(0,n.jsx)(s.h3,{id:"abstract",children:"Abstract classes"}),"\n",(0,n.jsxs)(s.p,{children:["Some custom classes in the system can be ",(0,n.jsx)(s.em,{children:"abstract"}),". The difference between these classes and the rest is that it is impossible to create an instance of an abstract class. Non-abstract classes, in turn, are called ",(0,n.jsx)(s.em,{children:"concrete"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"class-change",children:"Class change"}),"\n",(0,n.jsx)(s.p,{children:"The platform allows changing the class of an existing object. Since objects can only be instances of concrete classes, it is forbidden to change the class of an object to abstract."}),"\n",(0,n.jsx)(s.h3,{id:"commonparentclass",children:"Common ancestor"}),"\n",(0,n.jsx)(s.p,{children:'As a common ancestor for several custom classes, the platform selects a class from which all these classes are inherited, and the total number of "steps" of inheritance to these classes is minimal (that is, the closest class is selected).'}),"\n",(0,n.jsx)(s.h3,{id:"language",children:"Language"}),"\n",(0,n.jsxs)(s.p,{children:["To add a new custom class to the system, use the ",(0,n.jsxs)(s.a,{href:"/CLASS_statement",children:[(0,n.jsx)(s.code,{children:"CLASS"})," statement"]}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-lsf",children:"CLASS ABSTRACT Document; // The caption of this class will be 'Document'\nCLASS IncomeDocument 'Income' : Document;\nCLASS OutcomeDocument 'Expenses' : Document;\n\nCLASS Person;\nCLASS Worker;\nCLASS Musician : Person, Worker; // multiple inheritance\n\nCLASS Barcode 'Barcode'; // The parent class of Barcode will be the System.Object class\n\nCLASS PrintOrientation {\n    portrait 'Portrait',\n    landscape 'Landscape'\n}\n"})})]})}function d(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>l,x:()=>r});var n=t(96540);const a={},c=n.createContext(a);function l(e){const s=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(c.Provider,{value:s},e.children)}}}]);