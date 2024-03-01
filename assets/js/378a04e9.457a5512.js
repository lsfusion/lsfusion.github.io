"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[92726],{92407:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=n(74848),s=n(28453);const o={title:"Open form"},r=void 0,c={id:"Open_form",title:"Open form",description:"The open form operator creates an action that opens the specified form.",source:"@site/versioned_docs/version-v4/Open_form.md",sourceDirName:".",slug:"/Open_form",permalink:"/v4/Open_form",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Open_form.md",tags:[],version:"v4",lastUpdatedAt:1640850738,formattedLastUpdatedAt:"Dec 30, 2021",frontMatter:{title:"Open form"},sidebar:"learn",previous:{title:"Structured view",permalink:"/v4/Structured_view"},next:{title:"In an interactive view (SHOW, DIALOG)",permalink:"/v4/In_an_interactive_view_SHOW_DIALOG"}},a={},l=[{value:"Form selection",id:"form",level:3},{value:"View type",id:"view-type",level:3},{value:"Passing objects",id:"params",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.em,{children:"open form"})," operator creates an ",(0,i.jsx)(t.a,{href:"/v4/Actions",children:"action"})," that opens the specified ",(0,i.jsx)(t.a,{href:"/v4/Forms",children:"form"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"form",children:"Form selection"}),"\n",(0,i.jsxs)(t.p,{children:["In addition to explicitly specifying the form to be opened, the platform also allows to open the ",(0,i.jsx)(t.a,{href:"/v4/Interactive_view#edtClass",children:"list/edit"})," form for objects of the specified class. In this case, you only need to specify the corresponding option and specify the custom class whose list/edit form needs to be opened instead of a form."]}),"\n",(0,i.jsx)(t.h3,{id:"view-type",children:"View type"}),"\n",(0,i.jsxs)(t.p,{children:["When a form is opened, the ",(0,i.jsx)(t.a,{href:"/v4/Form_views",children:"view"})," type which will be used to display the form needs to be specified:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsxs)(t.a,{href:"/v4/In_an_interactive_view_SHOW_DIALOG",children:["In an interactive view (",(0,i.jsx)(t.code,{children:"SHOW"}),", ",(0,i.jsx)(t.code,{children:"DIALOG"}),")"]})}),"\n",(0,i.jsxs)(t.li,{children:["In a static view:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsxs)(t.a,{href:"/v4/In_a_print_view_PRINT",children:["In a print view (",(0,i.jsx)(t.code,{children:"PRINT"}),")"]})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsxs)(t.a,{href:"/v4/In_a_structured_view_EXPORT_IMPORT",children:["In a structured view (",(0,i.jsx)(t.code,{children:"EXPORT"}),", ",(0,i.jsx)(t.code,{children:"IMPORT"}),")"]})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"params",children:"Passing objects"}),"\n",(0,i.jsx)(t.p,{children:"When you open a form, you can pass a value for each of its objects from the calling context, which will be used as follows depending on the view:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["In interactive view: the passed value is set as the ",(0,i.jsx)(t.a,{href:"/v4/Form_structure#currentObject",children:"current"})," object."]}),"\n",(0,i.jsxs)(t.li,{children:["In a static view: an additional ",(0,i.jsx)(t.a,{href:"/v4/Form_structure#filters",children:"filter"})," will be set so that the object must be ",(0,i.jsx)(t.a,{href:"/v4/Comparison_operators_=_etc",children:"equal"})," to the passed value."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["By default, all passed values of objects must be defined (not ",(0,i.jsx)(t.code,{children:"NULL"}),"); otherwise the action will not be executed and will simply transfer control to the next action. However, in the interactive view, the developer can change this behavior using the corresponding option (that is, allowing ",(0,i.jsx)(t.code,{children:"NULL"})," values). In this case (as in the case when no object is passed at all), the ",(0,i.jsx)(t.a,{href:"/v4/Interactive_view#defaultobject",children:"default object"})," will be selected as the current object."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["It is worth noting that passing objects in the interactive view is basically the same as the ",(0,i.jsx)(t.a,{href:"/v4/Search_SEEK",children:"object seek"})," operation after the form is opened. In this case, the passed objects are the seek objects, and the ",(0,i.jsx)(t.a,{href:"/v4/Search_SEEK#direction",children:"seek direction"})," is determined by the default object type (",(0,i.jsx)(t.code,{children:"PREV"})," here is equivalent to ",(0,i.jsx)(t.code,{children:"FIRST"}),")."]})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var i=n(96540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);