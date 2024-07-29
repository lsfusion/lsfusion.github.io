"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[51682],{1150:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=t(74848),s=t(28453);const o={title:"MULTI operator"},r=void 0,c={id:"MULTI_action_operator",title:"MULTI operator",description:"The MULTI operator creates an action that implements branching (polymorphic form).",source:"@site/versioned_docs/version-v5/MULTI_action_operator.md",sourceDirName:".",slug:"/MULTI_action_operator",permalink:"/v5/MULTI_action_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/MULTI_action_operator.md",tags:[],version:"v5",lastUpdatedAt:1712785486e3,frontMatter:{title:"MULTI operator"},sidebar:"learn",previous:{title:"MESSAGE operator",permalink:"/v5/MESSAGE_operator"},next:{title:"NEW operator",permalink:"/v5/NEW_operator"}},a={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Example",id:"example",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"MULTI"})," operator creates an ",(0,i.jsx)(n.a,{href:"/v5/Actions",children:"action"})," that implements ",(0,i.jsx)(n.a,{href:"/v5/Branching_CASE_IF_MULTI#poly",children:"branching"})," (polymorphic form)."]}),"\n",(0,i.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"MULTI [exclusionType] action1, ..., actionN \n"})}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"MULTI"})," operator creates an action that executes one of the actions passed to it depending on whether the selection conditions are met. The property selection condition is that the parameters match this action ",(0,i.jsx)(n.a,{href:"/v5/CLASS_operator",children:"signature"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"exclusionType"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/v5/Branching_CASE_IF_MULTI#exclusive",children:"Type of mutual exclusion"}),". Determines whether several conditions for the action selection can be met simultaneously with a certain set of parameters. It is specified by one of the keywords:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"EXCLUSIVE"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"OVERRIDE"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"EXCLUSIVE"})," type indicates that the conditions for the action selection cannot be met simultaneously. The ",(0,i.jsx)(n.code,{children:"OVERRIDE"})," type allows several conditions to be met simultaneously, in which case the first action in the list which selection condition is met will be selected."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"EXCLUSIVE"})," type is used by default."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"action1, ..., actionN"})}),"\n",(0,i.jsxs)(n.p,{children:["A list of ",(0,i.jsx)(n.a,{href:"/v5/Action_operators#contextdependent",children:"context dependent action operators"})," which define the actions from which the selection is made."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"CLASS Shape;\n\nCLASS Square : Shape;\nCLASS Circle : Shape;\n\nmessage (Square s)  { MESSAGE 'Square'; }\nmessage (Circle c)  { MESSAGE 'Circle'; }\n\nmessage (Shape s) = MULTI message[Square](s), message[Circle](s);\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var i=t(96540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);