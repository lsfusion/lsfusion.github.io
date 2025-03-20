"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["64072"],{23756:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>l,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>a});var r=JSON.parse('{"id":"GROUP_statement","title":"GROUP statement","description":"The GROUP statement creates a new property group.","source":"@site/versioned_docs/version-v5/GROUP_statement.md","sourceDirName":".","slug":"/GROUP_statement","permalink":"/v5/GROUP_statement","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v5/docs/en/GROUP_statement.md","tags":[],"version":"v5","lastUpdatedAt":1719232226000,"frontMatter":{"title":"GROUP statement"},"sidebar":"learn","previous":{"title":"Action options","permalink":"/v5/Action_options"},"next":{"title":"ON statement","permalink":"/v5/ON_statement"}}'),s=t("85893"),i=t("50065");let l={title:"GROUP statement"},a=void 0,o={},c=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function d(e){let n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"GROUP"})," statement creates a new ",(0,s.jsx)(n.a,{href:"/v5/Groups_of_properties_and_actions",children:"property group"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"GROUP [NATIVE] name [caption] [EXTID extID] [: parentName];\n"})}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"GROUP"})," statement declares a new property group and adds it to the current ",(0,s.jsx)(n.a,{href:"/v5/Modules",children:"module"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"NATIVE"})," keyword is used in some system modules. It is used to declare individual property groups that are created before the modules are initialized."]}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"name"})}),"\n",(0,s.jsxs)(n.p,{children:["Group name. ",(0,s.jsx)(n.a,{href:"/v5/IDs#id",children:"Simple ID"}),". The name must be unique within the current ",(0,s.jsx)(n.a,{href:"/v5/Naming#namespace",children:"namespace"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"caption"})}),"\n",(0,s.jsxs)(n.p,{children:["Group caption. ",(0,s.jsx)(n.a,{href:"/v5/Literals#strliteral",children:"String literal"}),". If the caption is not defined, the name of the group will be its caption."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"EXTID extID"})}),"\n",(0,s.jsxs)(n.p,{children:["Specifying the name to be used to ",(0,s.jsx)(n.a,{href:"/v5/Structured_view#extid",children:"export/import"})," this property group. Used only in the ",(0,s.jsx)(n.a,{href:"/v5/Structured_view",children:"structured"})," view."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"extId"})}),"\n",(0,s.jsx)(n.p,{children:"String literal."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"parentName"})}),"\n",(0,s.jsxs)(n.p,{children:["Name of the parent group. ",(0,s.jsx)(n.a,{href:"/v5/IDs#cid",children:"\u0421omposite ID"}),". If the name of the parent group is not defined, the ",(0,s.jsx)(n.code,{children:"System.private"})," group becomes the parent."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lsf",children:"GROUP base : root; // The caption of this group will be 'base'\nGROUP local 'Local properties'; // The parent group of local will be System.private\n"})})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return l}});var r=t(67294);let s={},i=r.createContext(s);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);