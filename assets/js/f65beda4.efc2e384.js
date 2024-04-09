"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[62046],{9538:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=t(74848),o=t(28453);const s={title:"How-to: Property extension"},a=void 0,c={id:"How-to_Property_extension",title:"How-to: Property extension",description:"The classic approach for implementing polymorphism can look as follows:",source:"@site/versioned_docs/version-v4/How-to_Property_extension.md",sourceDirName:".",slug:"/How-to_Property_extension",permalink:"/v4/How-to_Property_extension",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/How-to_Property_extension.md",tags:[],version:"v4",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"Jul 7, 2021",frontMatter:{title:"How-to: Property extension"},sidebar:"learn",previous:{title:"How-to: Class extension",permalink:"/v4/How-to_Class_extension"},next:{title:"How-to: Action extension",permalink:"/v4/How-to_Action_extension"}},i={},l=[];function d(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"The classic approach for implementing polymorphism can look as follows:"}),"\n",(0,r.jsxs)(n.p,{children:["Let's create an abstract class ",(0,r.jsx)(n.code,{children:"Shape"})," with an abstract property ",(0,r.jsx)(n.code,{children:"square"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"CLASS ABSTRACT Shape;\nsquare 'Area' = ABSTRACT DOUBLE (Shape);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Now, let's create classes ",(0,r.jsx)(n.code,{children:"Rectangle"})," and ",(0,r.jsx)(n.code,{children:"Circle"})," inherited from ",(0,r.jsx)(n.code,{children:"Shape"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"CLASS Rectangle : Shape;\nwidth 'Width' = DATA DOUBLE (Rectangle);\nheight 'Height' = DATA DOUBLE (Rectangle);\n\nCLASS Circle : Shape;\nradius 'Circle radius' = DATA DOUBLE (Circle);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Define the implementation of the abstract property ",(0,r.jsx)(n.code,{children:"square"})," for the created classes:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"square(rectangle) += width(rectangle) * height(rectangle);\nsquare(circle) += radius(circle) * radius(circle) * 3.14;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Let's assume that we need to make it so that in certain cases we can override the method of calculating the area for the ",(0,r.jsx)(n.code,{children:"Circle"}),' class. In this case, we can use an abstract property, whose implementation can be changed in a different module, to add a kind of "entry point" to the line defining the implementation of area for a circle :']}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"overSquareCircle 'Overridden area' = ABSTRACT DOUBLE (Circle);\nsquare(circle) += OVERRIDE overSquareCircle(circle), (radius(circle) * radius(circle) * 3.14);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.code,{children:"overSquareCircle"})," property is not implemented in any module, its value will always be ",(0,r.jsx)(n.code,{children:"NULL"})," and the base area calculation mechanism will be used. To change the calculation method to be used, you can define a different implementation in a certain ",(0,r.jsx)(n.code,{children:"MyShape"})," module."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"MODULE MyShape;\n\nREQUIRE Shape;\n\n// using a formula with higher accuracy\noverSquareCircle (circle) += radius(circle) * radius(circle) * 3.14159265359; \n"})}),"\n",(0,r.jsxs)(n.p,{children:["Note that you can use any other expressions instead of the ",(0,r.jsxs)(n.a,{href:"/v4/OVERRIDE_operator",children:[(0,r.jsx)(n.code,{children:"OVERRIDE"})," operator"]}),". In particular, ",(0,r.jsxs)(n.a,{href:"/v4/Arithmetic_operators_+_-_etc",children:[(0,r.jsx)(n.code,{children:"(+)"})," and ",(0,r.jsx)(n.code,{children:"(-)"})," operators"]})," may be the most frequently used."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var r=t(96540);const o={},s=r.createContext(o);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);