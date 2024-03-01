"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[77366],{75216:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=t(74848),s=t(28453);const i={title:"NEW operator"},o=void 0,a={id:"NEW_operator",title:"NEW operator",description:"The NEW operator creates an action that creates objects of the specified class.",source:"@site/versioned_docs/version-v5/NEW_operator.md",sourceDirName:".",slug:"/NEW_operator",permalink:"/NEW_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/NEW_operator.md",tags:[],version:"v5",lastUpdatedAt:1708525070,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"NEW operator"},sidebar:"learn",previous:{title:"MULTI operator",permalink:"/MULTI_action_operator"},next:{title:"NESTEDSESSION operator",permalink:"/NESTEDSESSION_operator"}},c={},d=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function l(e){const r={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"NEW"})," operator creates an ",(0,n.jsx)(r.a,{href:"/Actions",children:"action"})," that ",(0,n.jsx)(r.a,{href:"/New_object_NEW",children:"creates objects"})," of the specified ",(0,n.jsx)(r.a,{href:"/Classes",children:"class"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"NEW className [WHERE whereExpr] [TO propertyId(prm1, ..., prmN)]\n"})}),"\n",(0,n.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"NEW"})," operator creates an action which creates objects of the specified class and writes them as the returned values of certain ",(0,n.jsx)(r.a,{href:"/Properties",children:"properties"}),". This operator can add its local ",(0,n.jsx)(r.a,{href:"/Actions",children:"parameters"})," when defining a condition in the ",(0,n.jsx)(r.code,{children:"WHERE"})," block. These parameters correspond to the objects being iterated for which the object will be created and are not parameters of the created action."]}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"TO"})," block is used to define the ",(0,n.jsx)(r.a,{href:"/Data_properties_DATA",children:"data property"})," to which value the created object is written."]}),"\n",(0,n.jsx)(r.admonition,{type:"info",children:(0,n.jsxs)(r.p,{children:["There is a special option with the same name (",(0,n.jsx)(r.code,{children:"NEW"}),") in the ",(0,n.jsxs)(r.a,{href:"/FOR_operator",children:[(0,n.jsx)(r.code,{children:"FOR"})," operator"]})," for creating objects, and it is recommended to use it when possible."]})}),"\n",(0,n.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"className"})}),"\n",(0,n.jsxs)(r.p,{children:["Name of the ",(0,n.jsx)(r.a,{href:"/User_classes",children:"custom"})," class for the created objects. ",(0,n.jsx)(r.a,{href:"/IDs#cid",children:"Composite ID"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"whereExpr"})}),"\n",(0,n.jsxs)(r.p,{children:["An ",(0,n.jsx)(r.a,{href:"/Expression",children:"expression"})," which value is the condition of the created action. In this expression you can both access already declared parameters and declare new local parameters."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"propertyId"})}),"\n",(0,n.jsxs)(r.p,{children:["An ",(0,n.jsx)(r.a,{href:"/IDs#propertyid",children:"ID of the property"})," to which value the created objects are written. If the property is not specified, then:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["if the condition is not defined, it is automatically set to  ",(0,n.jsx)(r.code,{children:"System.addedObject[]"})]}),"\n",(0,n.jsx)(r.li,{children:"if the condition is defined, the created objects are not written anywhere"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"prm1, ..., prmN"})}),"\n",(0,n.jsxs)(r.p,{children:["A list of data property parameter names. You can use only the local parameters that were added in the ",(0,n.jsx)(r.code,{children:"WHERE"})," block. The number of parameters in the list must be equal to the number of parameters of the data property."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-lsf",children:"\r\nnewSku ()  {\r\n    LOCAL addedSkus = Sku (INTEGER);\r\n    NEW Sku WHERE iterate(i, 1, 3) TO addedSkus(i);\r\n    FOR Sku s = addedSkus(i) DO {\r\n        id(s) <- 425;\r\n        name(s) <- 'New Sku';\r\n    }\r\n}\n"})})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>a});var n=t(96540);const s={},i=n.createContext(s);function o(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);