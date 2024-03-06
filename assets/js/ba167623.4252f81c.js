"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[14879],{44026:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>a,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var s=n(74848),o=n(28453);const t={title:"SEEK operator"},i=void 0,c={id:"SEEK_operator",title:"SEEK operator",description:"The SEEK operator creates an action that seeks specified objects on a form.",source:"@site/versioned_docs/version-v5/SEEK_operator.md",sourceDirName:".",slug:"/SEEK_operator",permalink:"/SEEK_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/SEEK_operator.md",tags:[],version:"v5",lastUpdatedAt:1708525070,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"SEEK operator"},sidebar:"learn",previous:{title:"RETURN operator",permalink:"/RETURN_operator"},next:{title:"SHOW operator",permalink:"/SHOW_operator"}},d={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function h(e){const r={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.code,{children:"SEEK"})," operator creates an ",(0,s.jsx)(r.a,{href:"/Actions",children:"action"})," that ",(0,s.jsx)(r.a,{href:"/Search_SEEK",children:"seeks specified objects"})," on a ",(0,s.jsx)(r.a,{href:"/Forms",children:"form"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"SEEK [FIRST | LAST] formObjectId = expr\nSEEK [FIRST | LAST] formGroupObjectId [OBJECTS formObject1 = expr1, ..., formObjectK = exprk]\nSEEK NULL formGroupObjectId\n"})}),"\n",(0,s.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.code,{children:"SEEK"})," operator creates an action that changes the current objects on a form. There are two forms of this operator. In the first form the required value of a single object on a form is specified (this object may be a part of an object group), in the second form specific object group and the required values for certain objects of this group are specified (these objects shall be called ",(0,s.jsx)(r.em,{children:"seek objects"}),")"]}),"\n",(0,s.jsxs)(r.p,{children:["If the seek object group contains objects other than seek objects, for these objects (which shall be called ",(0,s.jsx)(r.em,{children:"additional"}),") the object collection that will be selected as current is determined by the options ",(0,s.jsx)(r.code,{children:"FIRST"})," and ",(0,s.jsx)(r.code,{children:"LAST"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["If the required object collection is not found for the search objects, the current object collection will be the closest to the required one. The direction in which this closest object collection will be selected is also determined by the options ",(0,s.jsx)(r.code,{children:"FIRST"})," and ",(0,s.jsx)(r.code,{children:"LAST"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["Also, in the second form of the operator (when a group of objects is specified) it is possible to reset all objects of the specified group to ",(0,s.jsx)(r.code,{children:"NULL"}),". In this case, the seek direction is not applicable/not specified."]}),"\n",(0,s.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"FIRST"})}),"\n",(0,s.jsx)(r.p,{children:"Keyword. If specified, the current set of objects for:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["additional objects will be the ",(0,s.jsx)(r.strong,{children:"first"})," matching collection, selected in accordance with the specified order."]}),"\n",(0,s.jsxs)(r.li,{children:["main objects, if the required object collection is not found, will be the ",(0,s.jsx)(r.strong,{children:"next"})," closest collection, selected in accordance with the specified order."]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"This is the default value."}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"LAST"})}),"\n",(0,s.jsx)(r.p,{children:"Keyword. If specified, the current set of objects for:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["additional objects will be the ",(0,s.jsx)(r.strong,{children:"last"})," matching collection, selected in accordance with the specified order."]}),"\n",(0,s.jsxs)(r.li,{children:["main objects, if the required object collection is not found, will be the ",(0,s.jsx)(r.strong,{children:"previous"})," closest collection, selected in accordance with the specified order."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"NULL"})}),"\n",(0,s.jsxs)(r.p,{children:["Keyword. If specified, the current values of the objects of the specified object group are set as equal to ",(0,s.jsx)(r.code,{children:"NULL"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"formObjectId"})}),"\n",(0,s.jsxs)(r.p,{children:["Global ",(0,s.jsx)(r.a,{href:"/IDs#groupobjectid",children:"form object ID"})," for which the required value is specified."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"expr"})}),"\n",(0,s.jsxs)(r.p,{children:["An ",(0,s.jsx)(r.a,{href:"/Expression",children:"expression"})," whose value is the required value of the form object."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"formGroupObjectId"})}),"\n",(0,s.jsxs)(r.p,{children:["A global ",(0,s.jsx)(r.a,{href:"/IDs#groupobjectid",children:"ID for an object group"})," for whose objects required values are specified."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"formObject1 ...  formObjectK"})}),"\n",(0,s.jsxs)(r.p,{children:["List of form object names. May contain only a part of the objects of the specified object group. An object name is defined by a ",(0,s.jsx)(r.a,{href:"/IDs#id",children:"simple ID"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"expr1 ... exprk"})}),"\n",(0,s.jsx)(r.p,{children:"A list of expressions whose values are the required values of the corresponding objects in the specified group of objects."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-lsf",children:"number = DATA INTEGER (Order);\nFORM orders\n    OBJECTS o = Order\n    PROPERTIES(o) READONLY number, currency, customer\n;\nnewOrder  {\n    NEW new = Order {\n        number(new) <- (GROUP MAX number(Order o)) (+) 1;\n        SEEK orders.o = new;\n    }\n}\nseekFirst  { SEEK FIRST orders.o; }\nseekLast  { SEEK LAST orders.o; }\n\nEXTEND FORM orders\n    PROPERTIES(o) newOrder, seekFirst, seekLast\n;\n"})})]})}function a(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>c});var s=n(96540);const o={},t=s.createContext(o);function i(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);