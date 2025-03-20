"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["29678"],{34017:function(e,r,n){n.r(r),n.d(r,{default:()=>d,frontMatter:()=>i,metadata:()=>t,assets:()=>a,toc:()=>l,contentTitle:()=>c});var t=JSON.parse('{"id":"CANCEL_operator","title":"CANCEL operator","description":"The CANCEL operator creates an action that cancels changes in the current session.","source":"@site/versioned_docs/version-v5/CANCEL_operator.md","sourceDirName":".","slug":"/CANCEL_operator","permalink":"/v5/CANCEL_operator","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v5/docs/en/CANCEL_operator.md","tags":[],"version":"v5","lastUpdatedAt":1708525070000,"frontMatter":{"title":"CANCEL operator"},"sidebar":"learn","previous":{"title":"BREAK operator","permalink":"/v5/BREAK_operator"},"next":{"title":"CASE operator","permalink":"/v5/CASE_action_operator"}}'),s=n("85893"),o=n("50065");let i={title:"CANCEL operator"},c=void 0,a={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function p(e){let r={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.code,{children:"CANCEL"})," operator creates an ",(0,s.jsx)(r.a,{href:"/v5/Actions",children:"action"})," that ",(0,s.jsx)(r.a,{href:"/v5/Cancel_changes_CANCEL",children:"cancels changes"})," in the current session."]}),"\n",(0,s.jsx)(r.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"CANCEL [nestedBlock]\n"})}),"\n",(0,s.jsxs)(r.p,{children:["where ",(0,s.jsx)(r.code,{children:"nestedBlock"})," has one of two possible syntaxes:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"NESTED LOCAL\nNESTED (propertyId1, ..., propertyIdN)\n"})}),"\n",(0,s.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.code,{children:"CANCEL"})," operator creates an action that cancels changes in the current session. By specifying the keyword ",(0,s.jsx)(r.code,{children:"NESTED"})," you can specify ",(0,s.jsx)(r.a,{href:"/v5/Data_properties_DATA#local",children:"local properties"})," whose changes are not dropped when cancelling the changes."]}),"\n",(0,s.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"LOCAL"})}),"\n",(0,s.jsxs)(r.p,{children:["Keyword. If specified, all local properties preserve their changes after the ",(0,s.jsx)(r.code,{children:"CANCEL"})," operator is executed."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"propertyId1, ..., propertyIdN"})}),"\n",(0,s.jsxs)(r.p,{children:["List of local properties. Each list element is a ",(0,s.jsx)(r.a,{href:"/v5/IDs#propertyid",children:"property ID"}),". The local properties specified in the list will preserve their changes after the operator is executed."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-lsf",children:"dropChanges()  {\n    CANCEL NESTED (in[Sku]); // cancel all changes except the in property\n}\n"})})]})}function d(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},50065:function(e,r,n){n.d(r,{Z:function(){return c},a:function(){return i}});var t=n(67294);let s={},o=t.createContext(s);function i(e){let r=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);