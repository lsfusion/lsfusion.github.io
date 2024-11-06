"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[47797],{77648:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var i=t(74848),r=t(28453);const s={title:"Event block"},c=void 0,o={id:"Event_block",title:"Event block",description:"The event block of the  FORM statement - a set of constructions controlling events in an interactive form view.",source:"@site/versioned_docs/version-v5/Event_block.md",sourceDirName:".",slug:"/Event_block",permalink:"/v5/Event_block",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/Event_block.md",tags:[],version:"v5",lastUpdatedAt:170852507e4,frontMatter:{title:"Event block"},sidebar:"learn",previous:{title:"Filter and sorting blocks",permalink:"/v5/Filters_and_sortings_block"},next:{title:"Pivot table settings block",permalink:"/v5/Pivot_block"}},l={},a=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The event block of the  ",(0,i.jsxs)(n.a,{href:"/v5/FORM_statement",children:[(0,i.jsx)(n.code,{children:"FORM"})," statement"]})," - a set of constructions controlling ",(0,i.jsx)(n.a,{href:"/v5/Form_events",children:"events"})," in an interactive form view."]}),"\n",(0,i.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"EVENTS formEventDecl1, ..., formEventDeclN\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Where each ",(0,i.jsx)(n.code,{children:"formEventDecli"})," has the following syntax:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"ON eventType eventActionId(param1, ..., paramK) | { eventActionOperator }\n"})}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The event block allows to define handlers for ",(0,i.jsx)(n.a,{href:"/v5/Form_events",children:"form events"})," that occur as the result of certain user actions. Each block can have an arbitrary number of comma-separated event handlers. If several handlers are defined for an event, they are guaranteed to be executed in the order they are defined."]}),"\n",(0,i.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"eventType"})}),"\n",(0,i.jsx)(n.p,{children:"Type of form event. It is specified with one of the following keywords:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"INIT"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"OK"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"OK BEFORE"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"OK AFTER"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"APPLY"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"APPLY BEFORE"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"APPLY AFTER"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"CANCEL"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"CLOSE"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"DROP"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"CHANGE objName"})," \u2013 specifies that the action will be executed when the object ",(0,i.jsx)(n.code,{children:"objName"})," is changed."]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"QUERYOK"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"QUERYCANCEL"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"SCHEDULE PERIOD intPeriod [FIXED]"})," - creates a scheduler that executes an action every ",(0,i.jsx)(n.code,{children:"intPeriod"})," seconds. ",(0,i.jsx)(n.code,{children:"FIXED"})," indicates that the period to the next action is counted from the start of the current action. By default, the period is counted from the end of the current action."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"eventActionId"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"/v5/IDs#propertyid",children:"ID of the action"}),", that will be the event handler."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"param1, ..., paramK"})}),"\n",(0,i.jsxs)(n.p,{children:["List of action parameters. Each parameter is specified with the object name on the form. The object name, in turn, is specified with a ",(0,i.jsx)(n.a,{href:"/v5/IDs#id",children:"simple ID"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"actionOperator"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/v5/Action_operators#contextdependent",children:"Context-dependent action operator"}),". You can use the names of already declared objects on the form as parameters."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"showImpossibleMessage()  { MESSAGE 'It\\'s impossible'; };\n\nposted = DATA BOOLEAN (Invoice);\n\nFORM invoice 'Invoice' // creating a form for editing an invoice\n    OBJECTS i = Invoice PANEL // creating an object of the invoice class\n\n//    ...  setting the rest of the form behavior\n\n    EVENTS\n        // specifying that when the user clicks OK, an action should be executed \n        // that will execute actions to \"conduction\" this invoice\n        ON OK { posted(i) <- TRUE; },\n \n        // by clicking the formDrop button, showing a message that this cannot be, \n        // since this button by default will be shown only in the form for choosing an invoice, \n        // and this form is basically an invoice edit form\n        ON DROP showImpossibleMessage() \n;\n\nCLASS Shift;\ncurrentShift = DATA Shift();\n\nCLASS Cashier;\ncurrentCashier = DATA Cashier();\n\nCLASS Receipt;\nshift = DATA Shift (Receipt);\ncashier = DATA Cashier (Receipt);\n\nFORM POS 'POS' // declaring the form for product sale to the customer in the salesroom\n\n    OBJECTS r = Receipt PANEL // adding an object that will store the current receipt\n\n    //  ... declaring the behavior of the form\n;\n\ncreateReceipt ()  {\n    NEW r = Receipt {\n        shift(r) <- currentShift();\n        cashier(r) <- currentCashier();\n\n        SEEK POS.r = r;\n    }\n}\n\n// adding a property through the form extension so that SEEK could be applied to the already created\n// object on the form\nEXTEND FORM POS \n    EVENTS\n        // when opening the form, executing the action to create a new receipt, \n        // which fills in the shift, cashier and other information\n        ON INIT createReceipt()\n        //apply every 60 seconds\n        ON SCHEDULE PERIOD 60 FIXED apply(); \n;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var i=t(96540);const r={},s=i.createContext(r);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);