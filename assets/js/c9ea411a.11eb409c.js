"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[54746],{81663:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var o=r(74848),a=r(28453);const n={title:"How-to: Overriding values"},s=void 0,i={id:"How-to_Overriding_values",title:"How-to: Overriding values",description:"Often there are tasks when it is necessary to give the user opportunity to enter the value of some attribute for some general object and then override it for some specific object.",source:"@site/versioned_docs/version-v4/How-to_Overriding_values.md",sourceDirName:".",slug:"/How-to_Overriding_values",permalink:"/v4/How-to_Overriding_values",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/How-to_Overriding_values.md",tags:[],version:"v4",lastUpdatedAt:1623249583e3,frontMatter:{title:"How-to: Overriding values"},sidebar:"learn",previous:{title:"How-to: Using objects as templates",permalink:"/v4/How-to_Using_objects_as_templates"},next:{title:"How-to: Binding properties",permalink:"/v4/How-to_Binding_properties"}},l={},c=[];function d(e){const t={a:"a",code:"code",img:"img",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Often there are tasks when it is necessary to give the user opportunity to enter the value of some attribute for some general object and then override it for some specific object."}),"\n",(0,o.jsx)(t.p,{children:"Let's take a look when you need to define a trade mark-up for a book. At the same time, we have the logic of categories defined. These categories form a tree by specifying a parent for each category. The user should be able to set a mark-up for any product and category at any level."}),"\n",(0,o.jsxs)(t.p,{children:["Let's define the logic of categories and the ",(0,o.jsx)(t.a,{href:"/v4/Data_properties_DATA",children:"data property"})," of this category's markup."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lsf",children:"CLASS Category 'Category';\nname 'Name' = DATA ISTRING[50] (Category) IN id;\n\nparent 'Parent' = DATA Category (Category) AUTOSET;\nnameParent 'Parent' (Category c) = name(parent(c)) IN id;\n\nmarkup 'Markup' = DATA NUMERIC[8,2] (Category);\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsxs)(t.a,{href:"/v4/RECURSION_operator",children:[(0,o.jsx)(t.code,{children:"RECURSION"})," operator"]})," is used to calculate the ",(0,o.jsx)(t.code,{children:"level"})," property for given two categories. This property will be equal to two to the power of N, where N is the distance between these categories."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lsf",children:"level 'Level' (Category child, Category parent) = RECURSION 1l IF child IS Category AND parent == child\n                                                                 STEP 2l IF parent == parent($parent) MATERIALIZED;\n"})}),"\n",(0,o.jsx)(t.p,{children:"Let's create a property that will determine the corresponding parent by category and level."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lsf",children:"parent (Category child, LONG level) = GROUP MAX Category parent\n                                                       BY level(child, parent);\n"})}),"\n",(0,o.jsx)(t.p,{children:'Let\'s find the minimal level of a category for which the a mark-up is defined. It will also be the level of "closest upper" category with a set mark-up.'}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lsf",children:"nearestGroupLevel 'The closest level for which the markup is set' (Category child) =\n    GROUP MIN level(child, Category parent) IF markup(parent);\n"})}),"\n",(0,o.jsx)(t.p,{children:"We use this level to determine the category and its mark-up."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lsf",children:"nearestGroup 'The closest group for which the markup is set' (Category category) = parent(category, nearestGroupLevel(category));\n\noverMarkup 'Overidden markup' (Category category) = markup(nearestGroup(category));\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Thus, the ",(0,o.jsx)(t.code,{children:"overMarkup"})," property will contain the required markup value for this category with its hierarchy taken into account."]}),"\n",(0,o.jsx)(t.p,{children:"Let's now define the logic for books. Each of them is associated with a certain category that may be located at any level of the category hierarchy."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lsf",children:"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[100] (Book) IN id;\n\ncategory 'Category' = DATA Category (Book) AUTOSET;\nnameCategory 'Category' (Book b) = name(category(b)) IN id;\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Let's define the data property of a product markup. After that, let's construct an overridden property that will return a product markup if it's not ",(0,o.jsx)(t.code,{children:"NULL"})," and a previously created property with a category markup."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lsf",children:"markup 'Product markup' = DATA NUMERIC[8,2] (Book);\n\noverMarkup 'Overidden markup' (Book b) = OVERRIDE markup(b), overMarkup(category(b));\n"})}),"\n",(0,o.jsx)(t.p,{children:"Finally, let's design a form that will allow the user to enter the markup for categories and products at the same time. Let's output both the data and the overridden markup for the category and the product. Note that changes in overridden properties on the form will be displayed immediately, but saved only when the corresponding button is clicked."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lsf",children:"markup 'Product markup' = DATA NUMERIC[8,2] (Book);\n\noverMarkup 'Overidden markup' (Book b) = OVERRIDE markup(b), overMarkup(category(b));\n"})}),"\n",(0,o.jsx)(t.p,{children:"As a result, the form with the filled data will look like this:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:r(30254).A+"",width:"919",height:"255"})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},30254:(e,t,r)=>{r.d(t,{A:()=>o});const o=r.p+"assets/images/How-to_Overriding_values-46992522ae9783dad1fc2e055f1ce3ea.png"},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>i});var o=r(96540);const a={},n=o.createContext(a);function s(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);