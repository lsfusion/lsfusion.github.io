"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[15685],{52030:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=t(74848),i=t(28453);const o={title:"CASE operator"},r=void 0,l={id:"CASE_operator",title:"CASE operator",description:"The CASE operator  creates a property that selects a result by condition.",source:"@site/versioned_docs/version-v5/CASE_operator.md",sourceDirName:".",slug:"/CASE_operator",permalink:"/v5/CASE_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/CASE_operator.md",tags:[],version:"v5",lastUpdatedAt:170852507e4,frontMatter:{title:"CASE operator"},sidebar:"learn",previous:{title:"AGGR operator",permalink:"/v5/AGGR_operator"},next:{title:"CONCAT operator",permalink:"/v5/CONCAT_operator"}},c={},d=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function a(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"CASE"})," operator  creates a ",(0,s.jsx)(n.a,{href:"/v5/Properties",children:"property"})," that ",(0,s.jsx)(n.a,{href:"/v5/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE",children:"selects"})," a result by condition."]}),"\n",(0,s.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"CASE [exclusionType]\n    WHEN condition1 THEN result1\n    ...\n    WHEN conditionN THEN resultN\n    [ELSE elseResult]\n"})}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"CASE"})," operator creates a property that implements a conditional selection. Selection conditions are defined using the properties specified in the ",(0,s.jsx)(n.code,{children:"WHEN"})," block. If the selection condition is met, the property value will be the value of the property specified in the corresponding ",(0,s.jsx)(n.code,{children:"THEN"})," block. If none of the conditions are met, the property value will be the property value in the ",(0,s.jsx)(n.code,{children:"ELSE"})," block, if that block is specified (if not, ",(0,s.jsx)(n.code,{children:"NULL"})," is returned)."]}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"exclusionType"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/v5/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE#exclusive",children:"Type of mutual exclusion"}),". Determines whether several conditions can be met simultaneously for a certain set of parameters. It is specified by one of the keywords:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"EXCLUSIVE"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"OVERRIDE"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"EXCLUSIVE"})," type indicates that none of the conditions listed can be met simultaneously. The ",(0,s.jsx)(n.code,{children:"OVERRIDE"})," type allows several conditions to be met simultaneously, in this case, the property value will be the value of the value property for the first met condition."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"OVERRIDE"})," type is used by default."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"condition1 ... conditionN"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/v5/Expression",children:"Expressions"})," whose values define the selection condition."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"result1 ... resultN"})}),"\n",(0,s.jsx)(n.p,{children:"Expressions whose values define the selection result."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"elseResult"})}),"\n",(0,s.jsx)(n.p,{children:"An expression whose value defines the property value if none of the conditions are met."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lsf",children:"CLASS Color;\nid = DATA STRING[100] (Color);\n\nbackground 'Color' (Color c) = CASE\n    WHEN id(c) == 'Black' THEN RGB(0,0,0)\n    WHEN id(c) == 'Red' THEN RGB(255,0,0)\n    WHEN id(c) == 'Green' THEN RGB(0,255,0)\n;\n\nid (TypeExecEnv type) = CASE EXCLUSIVE\n    WHEN type == TypeExecEnv.materialize THEN 3\n    WHEN type == TypeExecEnv.disablenestloop THEN 2\n    WHEN type == TypeExecEnv.none THEN 1\n    ELSE 0\n;\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(96540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);