"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[97292],{91229:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var a=n(74848),r=n(28453);const t={title:"How-to: Namespaces"},o=void 0,c={id:"How-to_Namespaces",title:"How-to: Namespaces",description:"Occasionally, you will find yourself in situations where you will need to use the same name for different system elements. For this purpose, you can assign them to different namespaces that are defined for a module using the NAMESPACE statement. By default, the namespace matches the name of the module.",source:"@site/versioned_docs/version-v4/How-to_Namespaces.md",sourceDirName:".",slug:"/How-to_Namespaces",permalink:"/v4/How-to_Namespaces",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/How-to_Namespaces.md",tags:[],version:"v4",lastUpdatedAt:1623078033e3,frontMatter:{title:"How-to: Namespaces"},sidebar:"learn",previous:{title:"How-to: Searching for elements",permalink:"/v4/How-to_Searching_for_elements"},next:{title:"How-to: Explicit typing",permalink:"/v4/How-to_Explicit_typing"}},l={},d=[];function i(e){const s={a:"a",code:"code",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:["Occasionally, you will find yourself in situations where you will need to use the same ",(0,a.jsx)(s.a,{href:"/v4/Naming",children:"name"})," for different system elements. For this purpose, you can assign them to different namespaces that are defined for a module using the ",(0,a.jsxs)(s.a,{href:"/v4/Module_header",children:[(0,a.jsx)(s.code,{children:"NAMESPACE"})," statement"]}),". By default, the namespace matches the name of the module."]}),"\n",(0,a.jsxs)(s.p,{children:["Let's create two modules, ",(0,a.jsx)(s.code,{children:"UseCaseNamePurchase"})," and ",(0,a.jsx)(s.code,{children:"UseCaseNameSale"}),", that declare the logic of purchase and sell orders:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-lsf",children:"MODULE UseCaseNamePurchase;\n\nNAMESPACE Purchase;\n\nCLASS Order 'Order';\ndate 'Date' = DATA DATE (Order);\nnumber 'Number' = DATA INTEGER (Order);\n\nFORM orders 'Purchase orders'\n    OBJECTS o = Order\n    PROPERTIES(o) date, number\n;\n\nNAVIGATOR {\n    NEW orders;\n}\n"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-lsf",children:"MODULE UseCaseNameSale;\n\nNAMESPACE Sale;\n\nCLASS Order 'Order';\ndate 'Date' = DATA DATE (Order);\nnumber 'Number' = DATA INTEGER (Order);\n\nFORM orders 'Sales orders'\n    OBJECTS o = Order\n    PROPERTIES(o) date, number\n;\n\nNAVIGATOR {\n    NEW orders;\n}\n"})}),"\n",(0,a.jsxs)(s.p,{children:["Both of them have the ",(0,a.jsx)(s.code,{children:"Order"})," class declared in them, but since the modules have different namespaces, the first one's will be ",(0,a.jsx)(s.code,{children:"Purchase"}),", the second one's will be ",(0,a.jsx)(s.code,{children:"Sale"}),"."]}),"\n",(0,a.jsxs)(s.p,{children:["Let's declare a test module with a ",(0,a.jsx)(s.code,{children:"Test"})," namespace that will simultaneously depend on both modules:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-lsf",children:"REQUIRE UseCaseNamePurchase, UseCaseNameSale;\n\nNAMESPACE Test;\n\nmessagePurchaseCount 'Display the number of purchase orders' {\n    MESSAGE GROUP SUM 1 IF o IS Purchase.Order;\n}\nmessageSaleCount 'Display the number of sales orders' {\n    MESSAGE GROUP SUM 1 IF o IS Sale.Order;\n}\n\nNAVIGATOR {\n    NEW ACTION messagePurchaseCount;\n    NEW ACTION messageSaleCount;\n}\n"})}),"\n",(0,a.jsxs)(s.p,{children:["If you try to refer to the ",(0,a.jsx)(s.code,{children:"Order"})," class without explicitly specifying the namespace, you will see an error message:"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:n(27462).A+"",width:"446",height:"102"})}),"\n",(0,a.jsx)(s.p,{children:"All such references require an explicit specification of the namespace."}),"\n",(0,a.jsxs)(s.p,{children:["In case the namespace of a module matches the space of the required system element (for example, ",(0,a.jsx)(s.code,{children:"Purchase"}),")"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-lsf",children:"NAMESPACE Purchase;\n"})}),"\n",(0,a.jsxs)(s.p,{children:["or the namespace priority has not been specified using the ",(0,a.jsxs)(s.a,{href:"/v4/Module_header",children:[(0,a.jsx)(s.code,{children:"PRIORITY"})," statement"]}),","]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-lsf",children:"PRIORITY Purchase;\n"})}),"\n",(0,a.jsx)(s.p,{children:"you can skip the specification of the namespace"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-lsf",children:"messagePurchaseCount 'Display the number of purchase orders' {\n    MESSAGE GROUP SUM 1 IF o IS Order;\n}\nmessageSaleCount 'Display the number of sales orders' {\n    MESSAGE GROUP SUM 1 IF o IS Sale.Order;\n}\n\nNAVIGATOR {\n    NEW ACTION messagePurchaseCount;\n    NEW ACTION messageSaleCount;\n}\n"})}),"\n",(0,a.jsxs)(s.p,{children:["If you don't specify the namespace, the class from ",(0,a.jsx)(s.code,{children:"Purchase"})," will be used. You still can explicitly specify the namespace (for example, ",(0,a.jsx)(s.code,{children:"Sale"}),")."]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},27462:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/How-to_Namespaces-d3869b9262099eff7d50035cbade492e.png"},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>c});var a=n(96540);const r={},t=a.createContext(r);function o(e){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(t.Provider,{value:s},e.children)}}}]);