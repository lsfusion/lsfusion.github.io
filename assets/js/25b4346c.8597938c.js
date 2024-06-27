"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[61830],{54457:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>o});var s=t(74848),i=t(28453);const a={title:"EXTEND CLASS statement"},c=void 0,r={id:"EXTEND_CLASS_statement",title:"EXTEND CLASS statement",description:"The EXTEND CLASS statement extends an existing class.",source:"@site/docs/EXTEND_CLASS_statement.md",sourceDirName:".",slug:"/EXTEND_CLASS_statement",permalink:"/next/EXTEND_CLASS_statement",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/EXTEND_CLASS_statement.md",tags:[],version:"current",lastUpdatedAt:1719495565e3,frontMatter:{title:"EXTEND CLASS statement"},sidebar:"learn",previous:{title:"WINDOW statement",permalink:"/next/WINDOW_statement"},next:{title:"EXTEND FORM statement",permalink:"/next/EXTEND_FORM_statement"}},l={},o=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"EXTEND CLASS"})," statement ",(0,s.jsx)(n.a,{href:"/next/Class_extension",children:"extends"})," an existing class."]}),"\n",(0,s.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"EXTEND CLASS name \n[{\n    objectName1 [objectCaption1] [imageSetting1],\n    ...\n    objectNameM [objectCaptionM] [imageSettingM]\n}] \n[: parent1, ..., parentN];\n"})}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"EXTEND CLASS"})," statement extends an existing ",(0,s.jsx)(n.a,{href:"/next/User_classes",children:"custom class"})," with additional parent classes and new ",(0,s.jsx)(n.a,{href:"/next/Static_objects",children:"static objects"}),". You can also extend ",(0,s.jsx)(n.a,{href:"/next/User_classes#abstract",children:"abstract classes"})," by adding parent classes to them."]}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"name"})}),"\n",(0,s.jsxs)(n.p,{children:["Class name. A ",(0,s.jsx)(n.a,{href:"/next/IDs#cid",children:"composite ID"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"objectName1, ..., objectNameM"})}),"\n",(0,s.jsxs)(n.p,{children:["Names of new static objects of the specified class. Each name is defined ",(0,s.jsx)(n.a,{href:"/next/IDs#id",children:"by a simple ID"}),". Name values are stored in the ",(0,s.jsx)(n.code,{children:"System.staticName"})," system property."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"objectCaption1, ..., objectCaptionM"})}),"\n",(0,s.jsxs)(n.p,{children:["Captions of new static objects of the specified class. Each caption is a ",(0,s.jsx)(n.a,{href:"/next/IDs#strliteral",children:"string literal"}),". If the caption is not defined, the name of the static object will be its caption. Caption values are stored in the ",(0,s.jsx)(n.code,{children:"System.staticCaption"})," system property."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"imageSetting1, ..., imageSettingM"})}),"\n",(0,s.jsxs)(n.p,{children:["Settings for displaying icons in the captions of new static objects of this class. By default, the presence or absence of an icon is controlled by the ",(0,s.jsx)(n.a,{href:"/next/Working_parameters",children:"parameters"})," ",(0,s.jsx)(n.code,{children:"settings.defaultImagePathRankingThreshold"})," and ",(0,s.jsx)(n.code,{children:"settings.defaultAutoImageRankingThreshold"}),". The ",(0,s.jsx)(n.code,{children:"HTML"})," class value used for displaying the icon is stored in the system property ",(0,s.jsx)(n.code,{children:"System.image[StaticObject]"}),". This option allows you to manually configure the icon display. It can have one of two forms:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"IMAGE [fileExpr]"})}),"\n",(0,s.jsxs)(n.p,{children:["Specifying the relative path to the image file that will be displayed as the icon in the caption of the static object. If ",(0,s.jsx)(n.code,{children:"fileExpr"})," is not specified, the default icon display mode is activated."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"fileExpr"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/next/Expression",children:"Expression"})," whose value specifies the path to the image file. The path is specified relative to the ",(0,s.jsx)(n.code,{children:"images"})," directory."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"NOIMAGE"})}),"\n",(0,s.jsx)(n.p,{children:"Keyword indicating that the static object's caption should have no icon."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"parent1, ..., parentN"})}),"\n",(0,s.jsx)(n.p,{children:"A list of names of new parent classes. Each name is defined by a composite ID."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lsf",children:"CLASS ABSTRACT Shape;\nCLASS Box : Shape;\n\nCLASS Quadrilateral;\nEXTEND CLASS Box : Quadrilateral; // Adding inheritance\n\nCLASS ShapeType {\n\tpoint 'Dot',\n\tsegment 'Line segment'\n}\n\nEXTEND CLASS ShapeType { // Adding a static object\n\tcircle 'Circle'\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var s=t(96540);const i={},a=s.createContext(i);function c(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);