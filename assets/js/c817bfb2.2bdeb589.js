"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[24014],{52506:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=r(74848),s=r(28453);const i={title:"= statement"},a=void 0,o={id:"=_statement",title:"= statement",description:"The = statement creates a new property.",source:"@site/versioned_docs/version-v5/=_statement.md",sourceDirName:".",slug:"/=_statement",permalink:"/=_statement",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/=_statement.md",tags:[],version:"v5",lastUpdatedAt:1719232226e3,frontMatter:{title:"= statement"},sidebar:"learn",previous:{title:"Module header",permalink:"/Module_header"},next:{title:"Expression",permalink:"/Expression"}},p={},d=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function l(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"="})," statement creates a new ",(0,t.jsx)(n.a,{href:"/Properties",children:"property"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"name [caption] [(param1, ..., paramN)] = expression [options];\nname [caption] [(param1, ..., paramN)] = contextIndependentOperator [options];\n\nname [caption] [(param1, ..., paramN)] = NATIVE returnClass (argClass1, ..., argClassM) [options];\n"})}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"="})," statement declares a new property and adds it to the current ",(0,t.jsx)(n.a,{href:"/Modules",children:"module"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"When creating a property, the statement has two main forms:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The first form describes and creates a property using an ",(0,t.jsx)(n.a,{href:"/Expression",children:"expression"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["The second form describes the property using one of the ",(0,t.jsx)(n.a,{href:"/Property_operators#contextindependent",children:"context-independent"})," ",(0,t.jsx)(n.a,{href:"/Property_operators",children:"property operators"})," that cannot be part of an expression."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The third form with the keyword ",(0,t.jsx)(n.code,{children:"NATIVE"})," is used in some system modules. It is used to declare individual system properties that are created before the modules are initialized."]}),"\n",(0,t.jsx)(n.p,{children:"When declaring a property, its set of options can also be specified."}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"name"})}),"\n",(0,t.jsxs)(n.p,{children:["The name of the property. ",(0,t.jsx)(n.a,{href:"/IDs#id",children:"Simple ID"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"caption"})}),"\n",(0,t.jsxs)(n.p,{children:["Property caption. ",(0,t.jsx)(n.a,{href:"/Literals#strliteral",children:"String literal"}),". If no caption is specified, then the property caption will be its name."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"param1, ..., paramN"})}),"\n",(0,t.jsxs)(n.p,{children:["List of parameters. Each of these is specified by a ",(0,t.jsx)(n.a,{href:"/IDs#paramid",children:"typed parameter"}),". These parameters can then be used in the expression describing the property being created (as well as in some options)."]}),"\n",(0,t.jsx)(n.p,{children:"If parameters are not specified explicitly, they will be automatically calculated when processing the expression. The order of the parameters will correspond to the order in which the parameters appear in the expression. It is recommended that you explicitly specify property parameters. This will allow to find typos and other errors in the declaration (for example, a mismatch of the number of parameters provided with the number of parameters of the created property)."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"expression"})}),"\n",(0,t.jsx)(n.p,{children:"An expression that describes and creates a property."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"contextIndependentOperator"})}),"\n",(0,t.jsx)(n.p,{children:"A context-independent property operator that describes and creates a property."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"options"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/Property_options",children:"Property options"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"returnClass"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/IDs#classid",children:"Class ID"})," of the property's return value."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"argClass1, ..., argClassM"})}),"\n",(0,t.jsx)(n.p,{children:"List of class IDs for the property's arguments."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"// property defined by the context-independent DATA property operator\ncost 'Cost' (i) = DATA NUMERIC[12,3] (Item);\n\n// property defined by expression\nweightedSum 'Weighted amount' (a, b) = 2*a + 3*b;\n\n// the caption of this property will be 'diff' and the parameters will be (a, b)\ndiff = a - b;\n\n// property defined by DATA operator with additional property options\nteamName 'Team name' = DATA BPSTRING[30](Team) IN baseGroup TABLE team; \n"})})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var t=r(96540);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);