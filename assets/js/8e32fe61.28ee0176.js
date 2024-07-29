"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[94437],{29309:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var s=t(74848),r=t(28453);const o={title:"INTERNAL operator"},a=void 0,i={id:"INTERNAL_operator",title:"INTERNAL operator",description:"The INTERNAL operator creates an action that executes an internal call.",source:"@site/versioned_docs/version-v5/INTERNAL_operator.md",sourceDirName:".",slug:"/INTERNAL_operator",permalink:"/v5/INTERNAL_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/INTERNAL_operator.md",tags:[],version:"v5",lastUpdatedAt:170852507e4,frontMatter:{title:"INTERNAL operator"},sidebar:"learn",previous:{title:"COLLAPSE operator",permalink:"/v5/COLLAPSE_operator"},next:{title:"DELETE operator",permalink:"/v5/DELETE_operator"}},c={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"INTERNAL"})," operator creates an ",(0,s.jsx)(n.a,{href:"/v5/Actions",children:"action"})," that executes an ",(0,s.jsx)(n.a,{href:"/v5/Internal_call_INTERNAL",children:"internal call"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.p,{children:"The operator has two forms:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"INTERNAL className [(classId1, ..., classIdN)] [NULL]\nINTERNAL <{anyTokens}> [NULL]\n"})}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"INTERNAL"})," operator creates an action which calls the code written in Java programming language. The first form of the operator allows you to specify the fully qualified name of a Java class. This class must be inherited from the ",(0,s.jsx)(n.code,{children:"lsfusion.server.physics.dev.integration.internal.to.InternalAction"})," Java class and must contain the ",(0,s.jsx)(n.code,{children:"executeInternal"})," method which is executed when the action is called."]}),"\n",(0,s.jsxs)(n.p,{children:["The second form of the operator allows to write some Java code inside the ",(0,s.jsx)(n.code,{children:"<{...}>"})," block. This block contents will be the code of ",(0,s.jsx)(n.code,{children:"executeInternal"})," method for the generated Java class. In this code you can refer to the only parameter of the ",(0,s.jsx)(n.code,{children:"executeInternal"})," method \u2013 the ",(0,s.jsx)(n.code,{children:"context"})," parameter of the ",(0,s.jsx)(n.code,{children:"lsfusion.server.logics.action.controller.context.ExecutionContext"})," class."]}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"className"})}),"\n",(0,s.jsxs)(n.p,{children:["The fully qualified name of the Java class. ",(0,s.jsx)(n.a,{href:"/v5/Literals#strliteral",children:"String literal"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"classId1, ..., classIdN"})}),"\n",(0,s.jsxs)(n.p,{children:["A list of ",(0,s.jsx)(n.a,{href:"/v5/IDs#classid",children:"class IDs"})," of the action arguments. If not specified, the created action will have no parameters."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"NULL"})}),"\n",(0,s.jsxs)(n.p,{children:["If this keyword is used, you can pass ",(0,s.jsx)(n.code,{children:"NULL"})," parameters to the action."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"anyTokens"})}),"\n",(0,s.jsx)(n.p,{children:"Source code written in Java."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lsf",children:"showOnMap 'Show on map' \n    INTERNAL 'lsfusion.server.logics.classes.data.utils.geo.ShowOnMapAction' (DOUBLE, DOUBLE, MapProvider, BPSTRING[100]);\n\nserviceDBMT 'DB maintenance (multithreaded, threadCount, timeout)' \n    INTERNAL 'lsfusion.server.physics.admin.service.action.ServiceDBMultiThreadAction' (INTEGER, INTEGER) NULL;\n\nprintlnAction 'Print text to the console' INTERNAL <{System.out.println(\"action test\"); }>;\n// here context is a parameter of executeInternal method\nsetNoCancelInTransaction() INTERNAL <{ context.getSession().setNoCancelInTransaction(true); }>; \n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var s=t(96540);const r={},o=s.createContext(r);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);