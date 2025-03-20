"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["95501"],{44221:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>s,assets:()=>l,toc:()=>o,contentTitle:()=>r});var s=JSON.parse('{"id":"CLASS_statement","title":"CLASS statement","description":"CLASS statement creates a new custom class.","source":"@site/versioned_docs/version-v4/CLASS_statement.md","sourceDirName":".","slug":"/CLASS_statement","permalink":"/v4/CLASS_statement","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v4/docs/en/CLASS_statement.md","tags":[],"version":"v4","lastUpdatedAt":1708525070000,"frontMatter":{"title":"CLASS statement"},"sidebar":"learn","previous":{"title":"=> statement","permalink":"/v4/=gt_statement"},"next":{"title":"FORM statement","permalink":"/v4/FORM_statement"}}'),a=t("85893"),i=t("50065");let c={title:"CLASS statement"},r=void 0,l={},o=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function d(e){let n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"CLASS"})," statement creates a new ",(0,a.jsx)(n.a,{href:"/v4/User_classes",children:"custom class"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"CLASS ABSTRACT name [caption] [: parent1, ..., parentN];\n \nCLASS name [caption] \n[{\n    objectName1 [objectCaption1],\n    ...\n    objectNameM [objectCaptionM]\n}] \n[: parent1, ..., parentN];\n"})}),"\n",(0,a.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"CLASS"})," statement declares a new class and adds it to the current ",(0,a.jsx)(n.a,{href:"/v4/Modules",children:"module"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["The statement has two forms:  ",(0,a.jsx)(n.code,{children:"CLASS ABSTRACT"})," for declaring an ",(0,a.jsx)(n.a,{href:"/v4/User_classes#abstract",children:"abstract class"})," and just ",(0,a.jsx)(n.code,{children:"CLASS"})," for declaring a concrete class. In the latter case, during declaration, you can declare the ",(0,a.jsx)(n.a,{href:"/v4/Static_objects",children:"static objects"}),"  of this class and specify their names and captions in a curly brackets block."]}),"\n",(0,a.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"name"})}),"\n",(0,a.jsxs)(n.p,{children:["Class name. ",(0,a.jsx)(n.a,{href:"/v4/IDs#id",children:"Simple ID"}),". The name must be unique within the current ",(0,a.jsx)(n.a,{href:"/v4/Naming#namespace",children:"namespace"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"caption"})}),"\n",(0,a.jsxs)(n.p,{children:["Class header. ",(0,a.jsx)(n.a,{href:"/v4/Literals#strliteral",children:"String literal"}),". If the caption is not defined, the name of the class will be its caption."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"objectName1, ..., objectNameM"})}),"\n",(0,a.jsxs)(n.p,{children:["The names of ",(0,a.jsx)(n.a,{href:"/v4/Static_objects",children:"static"})," objects of this class. Each name is defined by a simple ID. Name values are stored in the ",(0,a.jsx)(n.code,{children:"System.staticName"})," system property."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"objectCaption1, ..., objectCaptionM"})}),"\n",(0,a.jsxs)(n.p,{children:["Captions of static objects of this class. Each caption is a string literal. If the caption is not defined, the name of the static object will be its caption. Caption values are stored in the ",(0,a.jsx)(n.code,{children:"System.staticCaption"})," system property."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"parent1, ..., parentN"})}),"\n",(0,a.jsxs)(n.p,{children:["List of parent class names. Each name is defined by a ",(0,a.jsx)(n.a,{href:"/v4/IDs#cid",children:"composite ID"}),". If the list of parent classes is not specified, the class is inherited from the ",(0,a.jsx)(n.code,{children:"System.Object"})," class."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"CLASS ABSTRACT Document; // The caption of this class will be 'Document'\nCLASS IncomeDocument 'Income' : Document;\nCLASS OutcomeDocument 'Expenses' : Document;\n\nCLASS Person;\nCLASS Worker;\nCLASS Musician : Person, Worker; // multiple inheritance\n\nCLASS Barcode 'Barcode'; // The parent class of Barcode will be the System.Object class\n\nCLASS PrintOrientation {\n    portrait 'Portrait',\n    landscape 'Landscape'\n}\n"})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return c}});var s=t(67294);let a={},i=s.createContext(a);function c(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);