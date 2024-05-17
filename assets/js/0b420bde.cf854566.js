"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[14992],{97750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=n(74848),r=n(28453);const s={title:"Form extension"},i=void 0,a={id:"Form_extension",title:"Form extension",description:"The form extension technique allows the developer to extend the structure and design of a form created in another module.",source:"@site/versioned_docs/version-v4/Form_extension.md",sourceDirName:".",slug:"/Form_extension",permalink:"/v4/Form_extension",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Form_extension.md",tags:[],version:"v4",lastUpdatedAt:162565152e4,frontMatter:{title:"Form extension"},sidebar:"learn",previous:{title:"Action extension",permalink:"/v4/Action_extension"},next:{title:"Metaprogramming",permalink:"/v4/Metaprogramming"}},d={},c=[{value:"Language",id:"language",level:3},{value:"Example",id:"example",level:3}];function l(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"/v4/Forms",children:"form"})," ",(0,o.jsx)(t.a,{href:"/v4/Extensions",children:"extension"})," technique allows the developer to extend the ",(0,o.jsx)(t.a,{href:"/v4/Form_structure",children:"structure"})," and ",(0,o.jsx)(t.a,{href:"/v4/Interactive_view",children:"design"})," of a form created in another module."]}),"\n",(0,o.jsx)(t.p,{children:'Form extension allows you to extract a specific functionality into a separate module, which when loaded will cause new components to be "embedded" into existing forms. The disadvantage of this approach is that this module must know the precise structure and design of the form which it depends on, and when these are modified the module may become inoperative.'}),"\n",(0,o.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,o.jsxs)(t.p,{children:["In order to extend the structure and design of an existing form, the ",(0,o.jsxs)(t.a,{href:"/v4/EXTEND_FORM_statement",children:[(0,o.jsx)(t.code,{children:"EXTEND FORM"})," statement"]})," must be used."]}),"\n",(0,o.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lsf",children:"CLASS ItemGroup;\nname = DATA ISTRING[100] (ItemGroup);\n\nitemGroup = DATA ItemGroup (Item);\n\nEXTEND FORM items\n    PROPERTIES(i) NEWSESSION DELETE // adding a delete button to the form\n\n    OBJECTS g = ItemGroup BEFORE i // adding a product group object to the form before the product\n    PROPERTIES(g) READONLY name\n    // if the object was added after the object with products, then filtering \n    // would go by the group of products, and not by products\n    FILTERS itemGroup(i) == g \n;\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var o=n(96540);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);