"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["30502"],{8821:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>c,metadata:()=>s,assets:()=>l,toc:()=>o,contentTitle:()=>r});var s=JSON.parse('{"id":"EXTEND_CLASS_statement","title":"EXTEND CLASS statement","description":"The EXTEND CLASS statement extends an existing class.","source":"@site/versioned_docs/version-v5/EXTEND_CLASS_statement.md","sourceDirName":".","slug":"/EXTEND_CLASS_statement","permalink":"/v5/EXTEND_CLASS_statement","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v5/docs/en/EXTEND_CLASS_statement.md","tags":[],"version":"v5","lastUpdatedAt":1708525070000,"frontMatter":{"title":"EXTEND CLASS statement"},"sidebar":"learn","previous":{"title":"WINDOW statement","permalink":"/v5/WINDOW_statement"},"next":{"title":"EXTEND FORM statement","permalink":"/v5/EXTEND_FORM_statement"}}'),a=t("85893"),i=t("50065");let c={title:"EXTEND CLASS statement"},r=void 0,l={},o=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function d(e){let n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"EXTEND CLASS"})," statement ",(0,a.jsx)(n.a,{href:"/v5/Class_extension",children:"extends"})," an existing class."]}),"\n",(0,a.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"EXTEND CLASS name \n[{\n    objectName1 [objectCaption1],\n    ...\n    objectNameM [objectCaptionM]\n}] \n[: parent1, ..., parentN];\n"})}),"\n",(0,a.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"EXTEND CLASS"})," statement extends an existing ",(0,a.jsx)(n.a,{href:"/v5/User_classes",children:"custom class"})," with additional parent classes and new ",(0,a.jsx)(n.a,{href:"/v5/Static_objects",children:"static objects"}),". You can also extend ",(0,a.jsx)(n.a,{href:"/v5/User_classes#abstract",children:"abstract classes"})," by adding parent classes to them."]}),"\n",(0,a.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"name"})}),"\n",(0,a.jsxs)(n.p,{children:["Class name. A ",(0,a.jsx)(n.a,{href:"/v5/IDs#cid",children:"composite ID"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"objectName1, ..., objectNameM"})}),"\n",(0,a.jsxs)(n.p,{children:["Names of new static objects of the specified class. Each name is defined ",(0,a.jsx)(n.a,{href:"/v5/IDs#id",children:"by a simple ID"}),". Name values are stored in the ",(0,a.jsx)(n.code,{children:"System.staticName"})," system property."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"objectCaption1, ..., objectCaptionM"})}),"\n",(0,a.jsxs)(n.p,{children:["Captions of new static objects of the specified class. Each caption is a ",(0,a.jsx)(n.a,{href:"/v5/IDs#strliteral",children:"string literal"}),". If the caption is not defined, the name of the static object will be its caption. Caption values are stored in the ",(0,a.jsx)(n.code,{children:"System.staticCaption"})," system property."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"parent1, ..., parentN"})}),"\n",(0,a.jsx)(n.p,{children:"A list of names of new parent classes. Each name is defined by a composite ID."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"CLASS ABSTRACT Shape;\nCLASS Box : Shape;\n\nCLASS Quadrilateral;\nEXTEND CLASS Box : Quadrilateral; // Adding inheritance\n\nCLASS ShapeType {\n	point 'Dot',\n	segment 'Line segment'\n}\n\nEXTEND CLASS ShapeType { // Adding a static object\n	circle 'Circle'\n}\n"})})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return c}});var s=t(67294);let a={},i=s.createContext(a);function c(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);