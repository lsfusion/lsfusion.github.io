"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[37556],{28253:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var s=n(74848),a=n(28453);const i={title:"EXTEND CLASS statement"},c=void 0,r={id:"EXTEND_CLASS_statement",title:"EXTEND CLASS statement",description:"The EXTEND CLASS statement extends an existing class.",source:"@site/versioned_docs/version-v5/EXTEND_CLASS_statement.md",sourceDirName:".",slug:"/EXTEND_CLASS_statement",permalink:"/EXTEND_CLASS_statement",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/EXTEND_CLASS_statement.md",tags:[],version:"v5",lastUpdatedAt:170852507e4,frontMatter:{title:"EXTEND CLASS statement"},sidebar:"learn",previous:{title:"WINDOW statement",permalink:"/WINDOW_statement"},next:{title:"EXTEND FORM statement",permalink:"/EXTEND_FORM_statement"}},l={},o=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"EXTEND CLASS"})," statement ",(0,s.jsx)(t.a,{href:"/Class_extension",children:"extends"})," an existing class."]}),"\n",(0,s.jsx)(t.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"EXTEND CLASS name \n[{\n    objectName1 [objectCaption1],\n    ...\n    objectNameM [objectCaptionM]\n}] \n[: parent1, ..., parentN];\n"})}),"\n",(0,s.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"EXTEND CLASS"})," statement extends an existing ",(0,s.jsx)(t.a,{href:"/User_classes",children:"custom class"})," with additional parent classes and new ",(0,s.jsx)(t.a,{href:"/Static_objects",children:"static objects"}),". You can also extend ",(0,s.jsx)(t.a,{href:"/User_classes#abstract",children:"abstract classes"})," by adding parent classes to them."]}),"\n",(0,s.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"name"})}),"\n",(0,s.jsxs)(t.p,{children:["Class name. A ",(0,s.jsx)(t.a,{href:"/IDs#cid",children:"composite ID"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"objectName1, ..., objectNameM"})}),"\n",(0,s.jsxs)(t.p,{children:["Names of new static objects of the specified class. Each name is defined ",(0,s.jsx)(t.a,{href:"/IDs#id",children:"by a simple ID"}),". Name values are stored in the ",(0,s.jsx)(t.code,{children:"System.staticName"})," system property."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"objectCaption1, ..., objectCaptionM"})}),"\n",(0,s.jsxs)(t.p,{children:["Captions of new static objects of the specified class. Each caption is a ",(0,s.jsx)(t.a,{href:"/IDs#strliteral",children:"string literal"}),". If the caption is not defined, the name of the static object will be its caption. Caption values are stored in the ",(0,s.jsx)(t.code,{children:"System.staticCaption"})," system property."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"parent1, ..., parentN"})}),"\n",(0,s.jsx)(t.p,{children:"A list of names of new parent classes. Each name is defined by a composite ID."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lsf",children:"CLASS ABSTRACT Shape;\nCLASS Box : Shape;\n\nCLASS Quadrilateral;\nEXTEND CLASS Box : Quadrilateral; // Adding inheritance\n\nCLASS ShapeType {\n\tpoint 'Dot',\n\tsegment 'Line segment'\n}\n\nEXTEND CLASS ShapeType { // Adding a static object\n\tcircle 'Circle'\n}\n"})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>r});var s=n(96540);const a={},i=s.createContext(a);function c(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);