"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[37895],{69785:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var s=t(74848),a=t(28453);const i={title:"CLASS statement"},c=void 0,r={id:"CLASS_statement",title:"CLASS statement",description:"CLASS statement - creating a new custom class.",source:"@site/versioned_docs/version-v5/CLASS_statement.md",sourceDirName:".",slug:"/CLASS_statement",permalink:"/CLASS_statement",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/CLASS_statement.md",tags:[],version:"v5",lastUpdatedAt:1719403299e3,frontMatter:{title:"CLASS statement"},sidebar:"learn",previous:{title:"=> statement",permalink:"/=gt_statement"},next:{title:"FORM statement",permalink:"/FORM_statement"}},l={},o=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"CLASS"})," statement - creating a new ",(0,s.jsx)(n.a,{href:"/User_classes",children:"custom class"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"CLASS ABSTRACT name [caption] [: parent1, ..., parentN];\n \nCLASS [NATIVE] name [caption] \n[{\n    objectName1 [objectCaption1],\n    ...\n    objectNameM [objectCaptionM]\n}] \n[: parent1, ..., parentN];\n"})}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"CLASS"})," statement declares a new class and adds it to the current ",(0,s.jsx)(n.a,{href:"/Modules",children:"module"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The statement has two forms: ",(0,s.jsx)(n.code,{children:"CLASS ABSTRACT"})," for declaring an ",(0,s.jsx)(n.a,{href:"/User_classes#abstract",children:"abstract class"})," and just ",(0,s.jsx)(n.code,{children:"CLASS"})," for declaring a concrete class. In the latter case, during declaration, you can declare the ",(0,s.jsx)(n.a,{href:"/Static_objects",children:"static objects"})," of this class and specify their names and captions in a curly brackets block."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"NATIVE"})," keyword is used in some system modules. It is used to declare individual system classes that are created before the modules are initialized."]}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"name"})}),"\n",(0,s.jsxs)(n.p,{children:["Class name. ",(0,s.jsx)(n.a,{href:"/IDs#id",children:"Simple ID"}),". The name must be unique within the current ",(0,s.jsx)(n.a,{href:"/Naming#namespace",children:"namespace"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"caption"})}),"\n",(0,s.jsxs)(n.p,{children:["Class caption. ",(0,s.jsx)(n.a,{href:"/Literals#strliteral",children:"String literal"}),". If the caption is not defined, the name of the class will be its caption."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"objectName1, ..., objectNameM"})}),"\n",(0,s.jsxs)(n.p,{children:["The names of static objects of this class. Each name is defined by a simple ID. Name values are stored in the ",(0,s.jsx)(n.code,{children:"System.staticName"})," system property."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"objectCaption1, ..., objectCaptionM"})}),"\n",(0,s.jsxs)(n.p,{children:["Captions of static objects of this class. Each caption is a string literal. If the caption is not defined, the name of the static object will be its caption. Caption values are stored in the ",(0,s.jsx)(n.code,{children:"System.staticCaption"})," system property."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"parent1, ..., parentN"})}),"\n",(0,s.jsxs)(n.p,{children:["List of parent class names. Each name is defined by a ",(0,s.jsx)(n.a,{href:"/IDs#cid",children:"composite ID"}),". If the list of parent classes is not specified, the class is inherited from the ",(0,s.jsx)(n.code,{children:"System.Object"})," class."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lsf",children:"CLASS ABSTRACT Document; // The caption of this class will be 'Document'\nCLASS IncomeDocument 'Income' : Document;\nCLASS OutcomeDocument 'Expenses' : Document;\n\nCLASS Person;\nCLASS Worker;\nCLASS Musician : Person, Worker; // multiple inheritance\n\nCLASS Barcode 'Barcode'; // The parent class of Barcode will be the System.Object class\n\nCLASS PrintOrientation {\n    portrait 'Portrait',\n    landscape 'Landscape'\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var s=t(96540);const a={},i=s.createContext(a);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);