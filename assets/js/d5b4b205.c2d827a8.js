"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[35829],{1575:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=n(74848),s=n(28453);const o={title:"CANCEL operator"},c=void 0,i={id:"CANCEL_operator",title:"CANCEL operator",description:"The CANCEL operator creates an action that cancels changes in the current session.",source:"@site/versioned_docs/version-v4/CANCEL_operator.md",sourceDirName:".",slug:"/CANCEL_operator",permalink:"/v4/CANCEL_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/CANCEL_operator.md",tags:[],version:"v4",lastUpdatedAt:170852507e4,frontMatter:{title:"CANCEL operator"},sidebar:"learn",previous:{title:"BREAK operator",permalink:"/v4/BREAK_operator"},next:{title:"CASE operator",permalink:"/v4/CASE_action_operator"}},a={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function p(e){const r={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"CANCEL"})," operator creates an ",(0,t.jsx)(r.a,{href:"/v4/Actions",children:"action"})," that ",(0,t.jsx)(r.a,{href:"/v4/Cancel_changes_CANCEL",children:"cancels changes"})," in the current session."]}),"\n",(0,t.jsx)(r.h3,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"CANCEL [nestedBlock]\n"})}),"\n",(0,t.jsxs)(r.p,{children:["where ",(0,t.jsx)(r.code,{children:"nestedBlock"})," has one of two possible syntaxes:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"NESTED LOCAL\nNESTED (propertyId1, ..., propertyIdN)\n"})}),"\n",(0,t.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"CANCEL"})," operator creates an action that cancels changes in the current session. By specifying the keyword ",(0,t.jsx)(r.code,{children:"NESTED"})," you can specify ",(0,t.jsx)(r.a,{href:"/v4/Data_properties_DATA#local",children:"local properties"})," whose changes are not dropped when cancelling the changes."]}),"\n",(0,t.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"LOCAL"})}),"\n",(0,t.jsxs)(r.p,{children:["Keyword. If specified, all local properties preserve their changes after the ",(0,t.jsx)(r.code,{children:"CANCEL"})," operator is executed."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"propertyId1, ..., propertyIdN"})}),"\n",(0,t.jsxs)(r.p,{children:["List of local properties. Each list element is a ",(0,t.jsx)(r.a,{href:"/v4/IDs#propertyid",children:"property ID"}),". The local properties specified in the list will preserve their changes after the operator is executed."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lsf",children:"dropChanges()  {\n    CANCEL NESTED (in[Sku]); // cancel all changes except the in property\n}\n"})})]})}function d(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>i});var t=n(96540);const s={},o=t.createContext(s);function c(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);