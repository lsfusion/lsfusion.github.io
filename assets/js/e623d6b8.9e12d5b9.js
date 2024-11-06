"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[80819],{40227:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>r});var t=o(74848),s=o(28453);const c={title:"How-to: Action extension"},i=void 0,a={id:"How-to_Action_extension",title:"How-to: Action extension",description:"We can use the following scheme to implement polymorphism:",source:"@site/versioned_docs/version-v5/How-to_Action_extension.md",sourceDirName:".",slug:"/How-to_Action_extension",permalink:"/v5/How-to_Action_extension",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/How-to_Action_extension.md",tags:[],version:"v5",lastUpdatedAt:1685108136e3,frontMatter:{title:"How-to: Action extension"},sidebar:"learn",previous:{title:"How-to: Property extension",permalink:"/v5/How-to_Property_extension"},next:{title:"How-to: Form extension",permalink:"/v5/How-to_Form_extension"}},l={},r=[{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3}];function d(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"We can use the following scheme to implement polymorphism:"}),"\n",(0,t.jsx)(n.h3,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsxs)(n.p,{children:["Create an abstract class ",(0,t.jsx)(n.code,{children:"Shape"})," with an abstract action ",(0,t.jsx)(n.code,{children:"whoAmI"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"CLASS ABSTRACT Shape;\nwhoAmI  ABSTRACT ( Shape);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Then, create ",(0,t.jsx)(n.code,{children:"Square"})," and ",(0,t.jsx)(n.code,{children:"Circle"})," classes inherited from ",(0,t.jsx)(n.code,{children:"Shape"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"CLASS Rectangle : Shape;\nCLASS Circle : Shape;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Define the implementation of ",(0,t.jsx)(n.code,{children:"whoAmI"})," for the created classes:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"whoAmI (Rectangle r) + {\n    IF r IS Rectangle THEN {\n        MESSAGE 'I am a rectangle';\n    }\n}\nwhoAmI (Circle c) + {\n    IF c IS Circle THEN {\n        MESSAGE 'I am a circle';\n    }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When executing the ",(0,t.jsx)(n.code,{children:"whoAmI"})," action, all the actions added as an implementation will be called. In this case, a corresponding message will appear depending on the argument."]}),"\n",(0,t.jsx)(n.h3,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsxs)(n.p,{children:["Suppose that we need to implement an action that copies an object (e.g. the ",(0,t.jsx)(n.code,{children:"Book"})," class) with its semantics defined in multiple modules. This can be implemented as follows:"]}),"\n",(0,t.jsxs)(n.p,{children:["Declare the ",(0,t.jsx)(n.code,{children:"Book"})," class and the actions to copy it:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:'MODULE Book;\n\nCLASS Book; // declaring class "book"\n// abstract action that takes an input two books and is "entry point", to which other modules can add realization\noverCopy ABSTRACT (Book, Book); \ncopy (Book book)  { // creating action on book copy\n    NEW b = Book { // adding new book\n        overCopy(b, book);\n    }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In the dependent module ",(0,t.jsx)(n.code,{children:"MyBook"}),", we want to extend the ",(0,t.jsx)(n.code,{children:"Book"})," class with new properties and also define the action to copy them:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"MODULE MyBook;\n\nREQUIRE Book;\n\nname = DATA STRING[100] (Book); // adding some name property to the product\noverCopy (Book s, Book d) + {\n    name(d) <- name(s); // connecting the copying of the created property to the product copy action\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>a});var t=o(96540);const s={},c=t.createContext(s);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);