"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[65792],{70273:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=t(74848),r=t(28453);const a={title:"+= statement"},i=void 0,l={id:"+=_statement",title:"+= statement",description:"The += statement adds an implementation (selection option) to an abstract property.",source:"@site/versioned_docs/version-v5/+=_statement.md",sourceDirName:".",slug:"/+=_statement",permalink:"/+=_statement",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/+=_statement.md",tags:[],version:"v5",lastUpdatedAt:1708525070,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"+= statement"},sidebar:"learn",previous:{title:"EXTEND FORM statement",permalink:"/EXTEND_FORM_statement"},next:{title:"ACTION+ statement",permalink:"/ACTION+_statement"}},o={},d=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function p(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"+="})," statement adds an implementation (selection option) to an ",(0,s.jsx)(n.a,{href:"/Property_extension",children:"abstract property"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"propertyId (param1, ..., paramN) += implExpr;\r\npropertyId (param1, ..., paramN) += WHEN whenExpr THEN implExpr;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"+="})," statement adds an implementation to an abstract property. The syntax for adding an implementation depends on the type of abstract property. If the abstract property is of type ",(0,s.jsx)(n.code,{children:"CASE"}),", then the implementation should be described using ",(0,s.jsx)(n.code,{children:"WHEN ... THEN ..."})," otherwise, the implementation should be described simply as a property."]}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"propertyId"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/IDs#propertyid",children:"ID"})," of the abstract property."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"param1, ..., paramN"})}),"\n",(0,s.jsxs)(n.p,{children:["List of parameters that will be used to define the implementation. Each element is a ",(0,s.jsx)(n.a,{href:"/IDs#paramid",children:"typed parameter"}),". The number of these parameters must be equal to the number of parameters of the abstract property. These parameters can then be used in expressions of the implementation of the abstract property and the selection condition of this implementation."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"implExpr"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/Expression",children:"Expression"})," whose value determines the implementation of an abstract property."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"whenExpr"})}),"\n",(0,s.jsxs)(n.p,{children:["An expression whose value determines the selection condition of the implementation of an abstract property (action) that has type ",(0,s.jsx)(n.code,{children:"CASE"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lsf",children:"CLASS ABSTRACT AClass;\r\nCLASS BClass : AClass;\r\nCLASS CClass : AClass;\r\nCLASS DClass : AClass;\r\n\r\nname(AClass a) = ABSTRACT BPSTRING[50] (AClass);\r\ninnerName(BClass b) = DATA BPSTRING[50] (BClass);\r\ninnerName(CClass c) = DATA BPSTRING[50] (CClass);\r\ninnerName(DClass d) = DATA BPSTRING[50] (DClass);\r\n\r\nname(BClass b) = 'B' + innerName(b);\r\nname(CClass c) = 'C' + innerName(c);\r\n\r\nname[AClass](BClass b) += name(b);\r\n// Here name[AClass] will be found on the left, because the search goes only among abstract properties, \r\n// and on the right name[CClass] will be found\r\nname(CClass c) += name(c); \r\nname(DClass d) += 'DClass' + innerName(d) IF d IS DClass;\n"})})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(96540);const r={},a=s.createContext(r);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);