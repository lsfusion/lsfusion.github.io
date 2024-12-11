"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[90076],{35286:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=i(74848),o=i(28453);const s={title:"Branching (CASE, IF, MULTI)"},r=void 0,a={id:"Branching_CASE_IF_MULTI",title:"Branching (CASE, IF, MULTI)",description:"The branching operator creates an action that determines for a set of conditions which condition is met, and calls the corresponding action.",source:"@site/versioned_docs/version-v4/Branching_CASE_IF_MULTI.md",sourceDirName:".",slug:"/Branching_CASE_IF_MULTI",permalink:"/v4/Branching_CASE_IF_MULTI",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Branching_CASE_IF_MULTI.md",tags:[],version:"v4",lastUpdatedAt:1623249583e3,frontMatter:{title:"Branching (CASE, IF, MULTI)"},sidebar:"learn",previous:{title:"Loop (FOR)",permalink:"/v4/Loop_FOR"},next:{title:"Recursive loop (WHILE)",permalink:"/v4/Recursive_loop_WHILE"}},c={},l=[{value:"Polymorphic form",id:"poly",level:3},{value:"Mutual exclusion of conditions",id:"exclusive",level:3},{value:"Implicit definition",id:"implicit-definition",level:3},{value:"Single form",id:"single",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"The branching operator"})," creates an ",(0,t.jsx)(n.a,{href:"/v4/Actions",children:"action"})," that determines for a set of ",(0,t.jsx)(n.em,{children:"conditions"})," which condition is met, and calls the corresponding action."]}),"\n",(0,t.jsxs)(n.p,{children:["All conditions are defined as ",(0,t.jsx)(n.a,{href:"/v4/Properties",children:"properties"})," and/or parameters. Accordingly, a condition is ",(0,t.jsx)(n.em,{children:"met"})," if the value of the property or parameter by which it is set is not equal to ",(0,t.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"poly",children:"Polymorphic form"}),"\n",(0,t.jsxs)(n.p,{children:["This operator also allows to define a condition not explicitly but by using as a condition the ",(0,t.jsx)(n.a,{href:"/v4/Property_signature_CLASS",children:"signature"})," of the action corresponding to that condition. We will call this the ",(0,t.jsx)(n.em,{children:"polymorphic"})," form of the operator."]}),"\n",(0,t.jsx)(n.h3,{id:"exclusive",children:"Mutual exclusion of conditions"}),"\n",(0,t.jsxs)(n.p,{children:["The branching operator lets you specify that all its conditions are ",(0,t.jsx)(n.em,{children:"mutually exclusive"}),". If this option is set, and the conditions are not in fact mutually exclusive, the platform will throw the corresponding error."]}),"\n",(0,t.jsx)(n.p,{children:"It is worth noting that this check is no more than a hint to the platform (for better optimization), and also a kind of self-checking on the part of the developer. However, in many cases it allows you to make the code more transparent and readable (especially with the polymorphic form of the selection operator)."}),"\n",(0,t.jsx)(n.h3,{id:"implicit-definition",children:"Implicit definition"}),"\n",(0,t.jsxs)(n.p,{children:["This operator has the capability of an ",(0,t.jsx)(n.a,{href:"/v4/Action_extension",children:"implicit definition"})," using the technique of ",(0,t.jsx)(n.a,{href:"/v4/Extensions",children:"extensions"}),", which allows, in particular, to implement polymorphism in the form that is common practice in OOP."]}),"\n",(0,t.jsx)(n.h3,{id:"single",children:"Single form"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"single"})," form of the branching operator checks exactly one condition. If this condition is met, the specified action is called. It is also possible to specify an ",(0,t.jsx)(n.em,{children:"alternative action"})," that is called if the condition is not met."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Type of mutual exclusion and implicit definition do not make sense/are not supported for this form of the operator"})}),"\n",(0,t.jsx)(n.h3,{id:"language",children:"Language"}),"\n",(0,t.jsxs)(n.p,{children:["To declare an action implementing general form of branching, the ",(0,t.jsxs)(n.a,{href:"/v4/CASE_action_operator",children:[(0,t.jsx)(n.code,{children:"CASE"})," operator"]})," is used. For the single form of branching, the ",(0,t.jsxs)(n.a,{href:"/v4/IF_..._THEN_action_operator",children:[(0,t.jsx)(n.code,{children:"IF"})," operator"]})," is used, and for the polymorphic form the ",(0,t.jsxs)(n.a,{href:"/v4/MULTI_action_operator",children:[(0,t.jsx)(n.code,{children:"MULTI"})," operator"]}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"test = DATA INTEGER (INTEGER);\ncaseActionTest(a)  {\n    CASE\n        WHEN test(a) > 7 THEN MESSAGE '>7';\n        WHEN test(a) > 6 THEN MESSAGE '>6';\n        WHEN test(a) > 5 THEN MESSAGE '>5';\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"// Action that compares the value of the count property to 3 and displays a message to the user\nmoreThan3(obj)  {\n    IF count(obj) > 3 THEN\n        MESSAGE '>3';\n    ELSE\n        MESSAGE '<=3';\n}\n\ncheckNullName (Store st) {\n    IF NOT name(st) THEN\n        MESSAGE 'Name is null';\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"CLASS Shape;\n\nCLASS Square : Shape;\nCLASS Circle : Shape;\n\nmessage (Square s)  { MESSAGE 'Square'; }\nmessage (Circle c)  { MESSAGE 'Circle'; }\n\nmessage (Shape s) = MULTI message[Square](s), message[Circle](s);\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(96540);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);