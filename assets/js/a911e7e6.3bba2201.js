"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[64586],{21255:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=t(74848),s=t(28453);const i={title:"= statement"},a=void 0,o={id:"=_statement",title:"= statement",description:"The = statement creates a new property.",source:"@site/docs/=_statement.md",sourceDirName:".",slug:"/=_statement",permalink:"/next/=_statement",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/=_statement.md",tags:[],version:"current",lastUpdatedAt:170852507e4,frontMatter:{title:"= statement"},sidebar:"learn",previous:{title:"Module header",permalink:"/next/Module_header"},next:{title:"Expression",permalink:"/next/Expression"}},p={},d=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function c(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"="})," statement creates a new ",(0,r.jsx)(n.a,{href:"/next/Properties",children:"property"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"name [caption] [(param1, ..., paramN)] = expression [options];\nname [caption] [(param1, ..., paramN)] = contextIndependentOperator [options];\n"})}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"="})," statement declares a new property and adds it to the current ",(0,r.jsx)(n.a,{href:"/next/Modules",children:"module"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"When creating a property, the statement has two forms:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The first form describes and creates a property using an ",(0,r.jsx)(n.a,{href:"/next/Expression",children:"expression"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["The second form describes the property using one of the ",(0,r.jsx)(n.a,{href:"/next/Property_operators#contextindependent",children:"context-independent"})," ",(0,r.jsx)(n.a,{href:"/next/Property_operators",children:"property operators"})," that cannot be part of an expression."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"When declaring a property, its set of options can also be specified."}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"name"})}),"\n",(0,r.jsxs)(n.p,{children:["The name of the property. ",(0,r.jsx)(n.a,{href:"/next/IDs#id",children:"Simple ID"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"caption"})}),"\n",(0,r.jsxs)(n.p,{children:["Property caption. ",(0,r.jsx)(n.a,{href:"/next/Literals#strliteral",children:"String literal"}),". If no caption is specified, then the property caption will be its name."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"param1, ..., paramN"})}),"\n",(0,r.jsxs)(n.p,{children:["List of parameters. Each of these is specified by a ",(0,r.jsx)(n.a,{href:"/next/IDs#paramid",children:"typed parameter"}),". These parameters can then be used in the expression describing the property being created (as well as in some options)."]}),"\n",(0,r.jsx)(n.p,{children:"If parameters are not specified explicitly, they will be automatically calculated when processing the expression. The order of the parameters will correspond to the order in which the parameters appear in the expression. It is recommended that you explicitly specify property parameters. This will allow to find typos and other errors in the declaration (for example, a mismatch of the number of parameters provided with the number of parameters of the created property)."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"expression"})}),"\n",(0,r.jsx)(n.p,{children:"An expression that describes and creates a property."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"contextIndependentOperator"})}),"\n",(0,r.jsx)(n.p,{children:"A context-independent property operator that describes and creates a property."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"options"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/next/Property_options",children:"Property options"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"// property defined by the context-independent DATA property operator\ncost 'Cost' (i) = DATA NUMERIC[12,3] (Item);\n\n// property defined by expression\nweightedSum 'Weighted amount' (a, b) = 2*a + 3*b;\n\n// the caption of this property will be 'diff' and the parameters will be (a, b)\ndiff = a - b;\n\n// property defined by DATA operator with additional property options\nteamName 'Team name' = DATA BPSTRING[30](Team) IN baseGroup TABLE team; \n"})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(96540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);