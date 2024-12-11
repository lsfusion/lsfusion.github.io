"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[66815],{81367:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(74848),o=t(28453);const a={title:"ACTIVATE operator"},i=void 0,s={id:"ACTIVATE_operator",title:"ACTIVATE operator",description:"The ACTIVATE operator creates an action that activates a specified form, tab, property, or action on a form",source:"@site/versioned_docs/version-v4/ACTIVATE_operator.md",sourceDirName:".",slug:"/ACTIVATE_operator",permalink:"/v4/ACTIVATE_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/ACTIVATE_operator.md",tags:[],version:"v4",lastUpdatedAt:170852507e4,frontMatter:{title:"ACTIVATE operator"},sidebar:"learn",previous:{title:"ABSTRACT operator",permalink:"/v4/ABSTRACT_action_operator"},next:{title:"ACTIVE FORM operator",permalink:"/v4/ACTIVE_FORM_operator"}},c={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"ACTIVATE"})," operator creates an ",(0,r.jsx)(n.a,{href:"/v4/Actions",children:"action"})," that ",(0,r.jsx)(n.a,{href:"/v4/Activation_ACTIVATE",children:"activates"})," a specified ",(0,r.jsx)(n.a,{href:"/v4/Forms",children:"form"}),", tab, property, or action on a form"]}),"\n",(0,r.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"ACTIVATE FORM formName\nACTIVATE TAB formName.componentSelector\nACTIVATE PROPERTY formPropertyId\n"})}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"ACTIVATE"})," operator creates an action that activates a form, a tab, a property or an action on a form."]}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"formName"})}),"\n",(0,r.jsxs)(n.p,{children:["Form name. ",(0,r.jsx)(n.a,{href:"/v4/IDs#cid",children:"Composite ID"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"componentSelector"})}),"\n",(0,r.jsxs)(n.p,{children:["Design component ",(0,r.jsx)(n.a,{href:"/v4/DESIGN_statement#selector",children:"selector"}),". The component must be a tab in the tab panel."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"formPropertyId"})}),"\n",(0,r.jsxs)(n.p,{children:["The global ",(0,r.jsx)(n.a,{href:"/v4/IDs#formpropertyid",children:"ID of a property or action on a form"})," which should get focus."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"//Form with two tabs\nFORM myForm 'My form'\n    OBJECTS u = CustomUser\n    PROPERTIES(u) name\n\n    OBJECTS c = Chat\n    PROPERTIES(c) name\n;\n\nDESIGN myForm {\n    NEW tabbedPane FIRST {\n        type = TABBED;\n        NEW contacts {\n            caption = 'Contacts';\n            MOVE BOX(u);\n        }\n        NEW recent {\n            caption = 'Recent';\n            MOVE BOX(c);\n        }\n    }\n}\n\ntestAction()  {\n    ACTIVATE FORM myForm;\n    ACTIVATE TAB myForm.recent;\n}\n\nCLASS ReceiptDetail;\nbarcode = DATA STRING[30] (ReceiptDetail);\nquantity = DATA STRING[30] (ReceiptDetail);\n\nFORM POS\n    OBJECTS d = ReceiptDetail\n    PROPERTIES(d) barcode, quantityGrid = quantity\n;\n\ncreateReceiptDetail 'Add sales line'(STRING[30] barcode)  {\n    NEW d = ReceiptDetail {\n        barcode(d) <- barcode;\n        ACTIVATE PROPERTY POS.quantityGrid;\n    }\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var r=t(96540);const o={},a=r.createContext(o);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);