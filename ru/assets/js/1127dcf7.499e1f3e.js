"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[4734],{23722:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>c,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=t(74848),s=t(28453);const r={title:"How-to: \u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u0444\u043e\u0440\u043c"},c=void 0,i={id:"How-to_Form_extension",title:"How-to: \u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u0444\u043e\u0440\u043c",description:"\u041f\u0440\u0435\u0434\u043f\u043e\u043b\u043e\u0436\u0438\u043c, \u0447\u0442\u043e \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u043c\u043e\u0434\u0443\u043b\u044c, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0444\u043e\u0440\u043c\u0430 Sku, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0444\u043e\u0440\u043c\u043e\u0439 \u0434\u043b\u044f \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f Sku:",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/How-to_Form_extension.md",sourceDirName:".",slug:"/How-to_Form_extension",permalink:"/ru/How-to_Form_extension",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/ru/How-to_Form_extension.md",tags:[],version:"current",lastUpdatedAt:1693907767e3,frontMatter:{title:"How-to: \u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u0444\u043e\u0440\u043c"},sidebar:"learn",previous:{title:"How-to: \u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439",permalink:"/ru/How-to_Action_extension"},next:{title:"How-to: \u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f",permalink:"/ru/How-to_Integration"}},u={},d=[];function a(n){const e={code:"code",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["\u041f\u0440\u0435\u0434\u043f\u043e\u043b\u043e\u0436\u0438\u043c, \u0447\u0442\u043e \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u043c\u043e\u0434\u0443\u043b\u044c, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0444\u043e\u0440\u043c\u0430 ",(0,o.jsx)(e.code,{children:"Sku"}),", \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0444\u043e\u0440\u043c\u043e\u0439 \u0434\u043b\u044f \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f Sku:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-lsf",children:"MODULE Sku;\n\nCLASS Sku; // \u043e\u0431\u044a\u044f\u0432\u043b\u044f\u0435\u043c \u043a\u043b\u0430\u0441\u0441 Sku\n\nname '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435' = DATA BPSTRING[100] (Sku); // \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u0435\u043c\u0443 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u0438\u043c\u044f\n\nFORM sku 'Sku' // \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u0444\u043e\u0440\u043c\u0443 Item\n    // \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u043e\u0431\u044a\u0435\u043a\u0442 \u0442\u043e\u0432\u0430\u0440 \u0438 \u0434\u0435\u043b\u0430\u0435\u043c, \u0447\u0442\u043e\u0431\u044b \u043d\u0430 \u043d\u0435\u0439 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u043b\u0441\u044f \u0440\u043e\u0432\u043d\u043e \u043e\u0434\u0438\u043d \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\n    OBJECTS s = Sku PANEL \n    PROPERTIES(s) name // \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u0438\u043c\u0435\u043d\u0438 \u0442\u043e\u0432\u0430\u0440\u0430 \u043d\u0430 \u0444\u043e\u0440\u043c\u0443\n\n    EDIT Sku OBJECT s;\n;\n\nDESIGN sku {\n    // \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u043d\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0432 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0441\u0440\u0430\u0437\u0443 \u043f\u043e\u0441\u043b\u0435 i.box\n    // \u044d\u0442\u043e\u0442 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0431\u0443\u0434\u0435\u0442 \u043f\u0430\u043d\u0435\u043b\u044c\u044e \u0437\u0430\u043a\u043b\u0430\u0434\u043e\u043a, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0436\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438 \u0441\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430\u043c\u0438 \u0442\u043e\u0432\u0430\u0440\u0430\n    NEW skuDetails AFTER BOX(s) {\n        tabbed = TRUE;\n        fill = 1; // \u043f\u0443\u0441\u0442\u044c \u0440\u0430\u0441\u0448\u0438\u0440\u044f\u0435\u0442\u0441\u044f \u043d\u0430 \u0432\u0441\u044e \u0444\u043e\u0440\u043c\u0443\n    }\n}\n"})}),"\n",(0,o.jsxs)(e.p,{children:["\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b \u043f\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044e \u043a Sku \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0430 \u0448\u0442\u0440\u0438\u0445-\u043a\u043e\u0434\u043e\u0432. \u042d\u0442\u043e \u043c\u043e\u0436\u043d\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c, \u0441\u043e\u0437\u0434\u0430\u0432 \u043d\u043e\u0432\u044b\u0439 \u043c\u043e\u0434\u0443\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u0432\u0435\u0434\u0435\u0442 \u043d\u043e\u0432\u044b\u0439 \u043a\u043b\u0430\u0441\u0441 ",(0,o.jsx)(e.code,{children:"Barcode"})," \u0438 \u0440\u0430\u0441\u0448\u0438\u0440\u0438\u0442 \u0444\u043e\u0440\u043c\u0443 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f Sku \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c\u044e \u0432\u0432\u043e\u0434\u0430 \u0448\u0442\u0440\u0438\u0445-\u043a\u043e\u0434\u043e\u0432:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-lsf",children:"MODULE Barcode;\n\nREQUIRE Sku;\n\nCLASS Barcode; // \u043e\u0431\u044a\u044f\u0432\u043b\u044f\u0435\u043c \u043a\u043b\u0430\u0441\u0441 \u0448\u0442\u0440\u0438\u0445-\u043a\u043e\u0434\u0430\n\nid = DATA BPSTRING[13] (Barcode); // \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u0441 \u043d\u043e\u043c\u0435\u0440\u043e\u043c \u0448\u0442\u0440\u0438\u0445-\u043a\u043e\u0434\u0430\nsku = DATA Sku (Barcode); // \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u0441\u0441\u044b\u043b\u043a\u0443 \u0448\u0442\u0440\u0438\u0445-\u043a\u043e\u0434\u0430 \u043d\u0430 sku\n\nEXTEND FORM sku // \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u0444\u043e\u0440\u043c\u0443 Item\n    OBJECTS b = Barcode // \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u043e\u0431\u044a\u0435\u043a\u0442 \u0448\u0442\u0440\u0438\u0445-\u043a\u043e\u0434\u043e\u0432\n    PROPERTIES(b) id // \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u043d\u043e\u043c\u0435\u0440 \u0448\u0442\u0440\u0438\u0445-\u043a\u043e\u0434\u0430 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0448\u0442\u0440\u0438\u0445-\u043a\u043e\u0434\u043e\u0432\n    PROPERTIES(b) NEW, DELETE // \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043f\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044e \u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044e \u0448\u0442\u0440\u0438\u0445-\u043a\u043e\u0434\u043e\u0432\n    FILTERS sku(b) == s // \u0434\u0435\u043b\u0430\u0435\u043c, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u043b\u0438\u0441\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0448\u0442\u0440\u0438\u0445-\u043a\u043e\u0434\u044b \u044d\u0442\u043e\u0433\u043e sku\n;\n\nDESIGN sku { // \u0440\u0430\u0441\u0448\u0438\u0440\u044f\u0435\u043c \u0434\u0438\u0437\u0430\u0439\u043d \u0444\u043e\u0440\u043c\u044b Item\n    skuDetails {\n        // \u0434\u0435\u043b\u0430\u0435\u043c \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432\u0441\u0435, \u0447\u0442\u043e \u043a\u0430\u0441\u0430\u0435\u0442\u0441\u044f \u0448\u0442\u0440\u0438\u0445-\u043a\u043e\u0434\u043e\u0432, \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u043e\u0439 \u0432 \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u043e\n        // \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u043e\u0439 \u043f\u0430\u043d\u0435\u043b\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043e\u043a\n        MOVE BOX(b); \n    }\n}\n"})}),"\n",(0,o.jsxs)(e.p,{children:["\u0421\u043b\u0435\u0434\u0443\u0435\u0442 \u043e\u0442\u043c\u0435\u0442\u0438\u0442\u044c, \u0447\u0442\u043e \u043c\u043e\u0434\u0443\u043b\u044c ",(0,o.jsx)(e.code,{children:"Barcode"})," \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u0442 \u043d\u0430 \u0442\u043e, \u0447\u0442\u043e \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0444\u043e\u0440\u043c\u0430 ",(0,o.jsx)(e.code,{children:"Sku"}),", \u0438 \u0432 \u043d\u0435\u0439 \u0435\u0441\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442 ",(0,o.jsx)(e.code,{children:"s"})," \u0438 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c ",(0,o.jsx)(e.code,{children:"skuDetails"}),". \u0415\u0441\u043b\u0438 \u0444\u043e\u0440\u043c\u0430 \u043f\u043e \u043a\u0430\u043a\u043e\u0439-\u043b\u0438\u0431\u043e \u043f\u0440\u0438\u0447\u0438\u043d\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u0441\u044f, \u0442\u043e \u043c\u043e\u0434\u0443\u043b\u044c ",(0,o.jsx)(e.code,{children:"Barcode"})," \u0441\u0442\u0430\u043d\u0435\u0442 \u043d\u0435\u0440\u0430\u0431\u043e\u0442\u043e\u0441\u043f\u043e\u0441\u043e\u0431\u043d\u044b\u043c."]})]})}function l(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(a,{...n})}):a(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>i});var o=t(96540);const s={},r=o.createContext(s);function c(n){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),o.createElement(r.Provider,{value:e},n.children)}}}]);