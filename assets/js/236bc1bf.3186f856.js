"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[67042],{78506:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(74848),s=n(28453);const o={title:"Internal call (INTERNAL)"},r=void 0,l={id:"Internal_call_INTERNAL",title:"Internal call (INTERNAL)",description:"The internal call operator allows to create actions in programming languages other than the lsFusion language. The platform currently supports external actions only in the Java language.",source:"@site/docs/Internal_call_INTERNAL.md",sourceDirName:".",slug:"/Internal_call_INTERNAL",permalink:"/Internal_call_INTERNAL",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Internal_call_INTERNAL.md",tags:[],version:"current",lastUpdatedAt:162565152e4,frontMatter:{title:"Internal call (INTERNAL)"},sidebar:"learn",previous:{title:"Access to an internal system (INTERNAL, FORMULA)",permalink:"/Access_to_an_internal_system_INTERNAL_FORMULA"},next:{title:"Custom formula (FORMULA)",permalink:"/Custom_formula_FORMULA"}},i={},c=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function h(e){const t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.em,{children:"internal call"})," operator allows to create actions in programming languages other than the lsFusion language. The platform currently supports external actions only in the Java language."]}),"\n",(0,a.jsxs)(t.p,{children:["This operator also makes it possible to directly specify the source for an action in Java, as well as the name of a Java class for which the bytecode is located in a separate Java file. In the second case it is assumed that the file is within the classpath of the server's virtual machine; the Java class itself must inherit from ",(0,a.jsx)(t.code,{children:"lsfusion.server.physics.dev.integration.internal.to.InternalAction"}),". The class's ",(0,a.jsx)(t.code,{children:"executeInternal(lsfusion.server.logics.action.controller.context.ExecutionContext context)"})," method will be executed."]}),"\n",(0,a.jsxs)(t.p,{children:["This operator allows to specify which classes the action created can take, and whether or not it can take ",(0,a.jsx)(t.code,{children:"NULL"})," values. If the specified conditions are not met, the created action is not executed: control simply passes to the next action."]}),"\n",(0,a.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,a.jsxs)(t.p,{children:["To declare an action implemented in Java use the  ",(0,a.jsxs)(t.a,{href:"/INTERNAL_operator",children:[(0,a.jsx)(t.code,{children:"INTERNAL"})," operator"]}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-lsf",children:"showOnMap 'Show on map' \n    INTERNAL 'lsfusion.server.logics.classes.data.utils.geo.ShowOnMapAction' (DOUBLE, DOUBLE, MapProvider, BPSTRING[100]);\n\nserviceDBMT 'DB maintenance (multithreaded, threadCount, timeout)' \n    INTERNAL 'lsfusion.server.physics.admin.service.action.ServiceDBMultiThreadAction' (INTEGER, INTEGER) NULL;\n\nprintlnAction 'Print text to the console' INTERNAL <{System.out.println(\"action test\"); }>;\n// here context is a parameter of executeInternal method\nsetNoCancelInTransaction() INTERNAL <{ context.getSession().setNoCancelInTransaction(true); }>; \n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var a=n(96540);const s={},o=a.createContext(s);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);