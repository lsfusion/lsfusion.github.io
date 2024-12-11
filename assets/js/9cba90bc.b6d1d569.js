"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[21102],{11685:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var s=t(74848),o=t(28453);const r={title:"COLLAPSE operator"},i=void 0,l={id:"COLLAPSE_operator",title:"COLLAPSE operator",description:"The COLLAPSE operator is the creation of an action, that implements the collapse of elements in the object tree.",source:"@site/docs/COLLAPSE_operator.md",sourceDirName:".",slug:"/COLLAPSE_operator",permalink:"/COLLAPSE_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/COLLAPSE_operator.md",tags:[],version:"current",lastUpdatedAt:171386772e4,frontMatter:{title:"COLLAPSE operator"},sidebar:"learn",previous:{title:"CHANGECLASS operator",permalink:"/CHANGECLASS_operator"},next:{title:"CONTINUE operator",permalink:"/CONTINUE_operator"}},c={},a=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function p(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"COLLAPSE"})," operator is the creation of an ",(0,s.jsx)(n.a,{href:"/Actions",children:"action"}),", that implements the ",(0,s.jsx)(n.a,{href:"/Object_tree_visibility_EXPAND_COLLAPSE",children:"collapse of elements"})," in the ",(0,s.jsx)(n.a,{href:"/Interactive_view#tree",children:"object tree"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"COLLAPSE [collapseType] formObjectGroupId [OBJECTS objName1 = expr1, ..., objNameN = exprN]\n"})}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"COLLAPSE"})," operator creates an action that is used to collapse specific elements of the object tree on a form. These elements can be determined using the ",(0,s.jsx)(n.code,{children:"OBJECTS"})," block. If this block is not specified, the collapsing operation will be applied either to the current element of the tree or to the top-level elements of the specified ",(0,s.jsx)(n.a,{href:"/Form_structure#objects",children:"object group"}),", depending on the type of operation."]}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"collapseType"})}),"\n",(0,s.jsx)(n.p,{children:"Collapse type. Specified in one of the following ways:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"DOWN"})}),"\n",(0,s.jsxs)(n.p,{children:["Keyword that, when specified, will cause the elements of the tree to collapse. If the ",(0,s.jsx)(n.code,{children:"OBJECTS"})," block is not specified, the operation is applied to the current element."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"ALL"})}),"\n",(0,s.jsxs)(n.p,{children:["Keyword that, when specified, will cause the recursive collapse of tree elements and all their descendants. If the ",(0,s.jsx)(n.code,{children:"OBJECTS"})," block is not specified, the operation is applied to the current element."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"ALL TOP"})}),"\n",(0,s.jsxs)(n.p,{children:["Two keywords that, when specified, will cause the recursive collapse of all top-level elements of the specified object group. The ",(0,s.jsx)(n.code,{children:"OBJECTS"})," block is ignored."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If not specified, the default value is ",(0,s.jsx)(n.code,{children:"DOWN"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"formObjectGroupId"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/IDs#groupobjectid",children:"Object group ID"})," that specifies the object group to which the collapse operation is applied."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"objName1 ... objNameN"})}),"\n",(0,s.jsxs)(n.p,{children:["Names of objects on the form. The objects must belong to the specified object group. The object name is specified by a ",(0,s.jsx)(n.a,{href:"/IDs#id",children:"simple ID"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"expr1 ... exprN"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/Expression",children:"Expressions"})," whose values are the target values of the corresponding objects in the specified object group."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lsf",children:"FORM expandCollapseTest\n    TREE elements e = NavigatorElement PARENT parent(e)\n    PROPERTIES(e) READONLY BACKGROUND NOT e IS NavigatorFolder VALUE, canonicalName, caption\n;\n\ncollapseDown {\n    COLLAPSE DOWN expandCollapseTest.e OBJECTS e = navigatorElementCanonicalName('System.administration');\n}\n\ncollapseAllTop {\n    COLLAPSE ALL TOP expandCollapseTest.e;\n}\n\nEXTEND FORM expandCollapseTest\n    PROPERTIES() collapseDown, collapseAllTop\n;\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(96540);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);