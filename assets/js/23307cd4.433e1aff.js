"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[88545],{91104:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var r=t(74848),s=t(28453);const i={title:"Form events"},o=void 0,c={id:"Form_events",title:"Form events",description:"While the application is running, there is a number of events for each form that occur as a result of certain user actions:",source:"@site/docs/Form_events.md",sourceDirName:".",slug:"/Form_events",permalink:"/next/Form_events",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Form_events.md",tags:[],version:"current",lastUpdatedAt:1659102780,formattedLastUpdatedAt:"Jul 29, 2022",frontMatter:{title:"Form events"},sidebar:"learn",previous:{title:"Form design",permalink:"/next/Form_design"},next:{title:"Form operators",permalink:"/next/Form_operators"}},l={},h=[{value:"Global",id:"global",level:4},{value:"For objects on the form",id:"for-objects-on-the-form",level:4},{value:"For properties or actions on the form",id:"property",level:4},{value:"Global",id:"global-1",level:4},{value:"Default handlers",id:"default",level:3},{value:"Standard handlers",id:"predefined",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"While the application is running, there is a number of events for each form that occur as a result of certain user actions:"}),"\n",(0,r.jsx)(n.h4,{id:"global",children:"Global"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"QUERYCLOSE"})," - the user tries to close the form by clicking on the corresponding button in the form header."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"QUERYOK"})," - the user tries to close a modal form by double-clicking on any row in the table."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"SCHEDULE"})," - scheduler that executes some action at form."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"for-objects-on-the-form",children:"For objects on the form"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"CHANGE"})," - user ",(0,r.jsx)(n.a,{href:"/next/Interactive_view#objects",children:"changed"})," the ",(0,r.jsx)(n.a,{href:"/next/Form_structure#currentObject",children:"current value"})," of an object."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"property",children:"For properties or actions on the form"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"CHANGE"})," - the user initiated a property change or action call."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"CHANGEWYS"})," - the user initiated a WYSIWYG property change using the PASTE operation or a special input mechanism"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"GROUPCHANGE"})," - the user initiated a property change for all objects in the table"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"EDIT"})," - the user initiated editing of an object"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"CONTEXTMENU"})," - the user selected the specified item in the context menu of a property (action) on the form"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["There are also several so-called ",(0,r.jsx)(n.em,{children:"derivative"})," events that are nothing more than syntactic sugar, but at the same time allow you more effectively to solve typical problems that arise when working with forms:"]}),"\n",(0,r.jsx)(n.h4,{id:"global-1",children:"Global"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"INIT"})," - occurs immediately after the form is opened."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"APPLY"})," - occurs when the form session is saved to the database (inside the transaction, at the very beginning, before global event handling is performed)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"APPLY BEFORE"})," - occurs immediately before the form session is saved to the database (before the start of the transaction)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"APPLY AFTER"})," - occurs immediately after the form session is successfully saved to the database (after the end of the transaction)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"CANCEL"})," - occurs when the form session changes are canceled."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"CLOSE"})," - occurs when the ",(0,r.jsx)(n.code,{children:"System.formClose"})," action is executed."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"DROP"})," - occurs when the ",(0,r.jsx)(n.code,{children:"System.formDrop"})," action is executed."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If the form is ",(0,r.jsx)(n.a,{href:"/next/Interactive_view#owner",children:"the session owner"})," (meaning that when the ",(0,r.jsx)(n.code,{children:"System.formOk"})," action is executed the form session ",(0,r.jsx)(n.a,{href:"Apply_changes_APPLY.md",children:"is saved"}),"):"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"OK"}),", ",(0,r.jsx)(n.code,{children:"OK BEFORE"}),", ",(0,r.jsx)(n.code,{children:"OK AFTER"})," - occurs when the ",(0,r.jsx)(n.code,{children:"System.formOk"})," action is executed, at the moments similar to the corresponding moments for the ",(0,r.jsx)(n.code,{children:"APPLY"})," event (i.e. inside, before and after the transaction). In this case, ",(0,r.jsx)(n.code,{children:"OK"})," and ",(0,r.jsx)(n.code,{children:"OK BEFORE"})," handlers are executed before executing ",(0,r.jsx)(n.code,{children:"APPLY"})," and ",(0,r.jsx)(n.code,{children:"APPLY BEFORE"})," handlers, and ",(0,r.jsx)(n.code,{children:"OK AFTER"})," is executed after ",(0,r.jsx)(n.code,{children:"APPLY AFTER"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"If the form is not the session owner:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"OK"})," - occurs when the",(0,r.jsx)(n.code,{children:"System.formOk"})," action is executed"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"OK BEFORE"})," and ",(0,r.jsx)(n.code,{children:"OK AFTER"})," handlers are defined, but the form is not the session owner, these handlers are still executed, respectively before and after the ",(0,r.jsx)(n.code,{children:"OK"})," event handler."]})}),"\n",(0,r.jsxs)(n.p,{children:["If, after the execution of event handlers with the ",(0,r.jsx)(n.code,{children:"BEFORE"})," postfix, the ",(0,r.jsx)(n.code,{children:"System.applyCanceled"})," property value equals ",(0,r.jsx)(n.code,{children:"TRUE"}),", further execution of the action that led to the occurrence of this event is stopped (for example, with ",(0,r.jsx)(n.code,{children:"APPLY BEFORE"}),", saving the session is interrupted as if one of the existing constraints had been ",(0,r.jsx)(n.a,{href:"/next/Constraints",children:"violated"}),")."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"For the remainder of the section, the behavior of properties and actions is exactly the same and so we will use only the term property (behavior is absolutely identical for actions)."})}),"\n",(0,r.jsxs)(n.p,{children:["The developer can execute certain actions (",(0,r.jsx)(n.em,{children:"handlers"}),") when any of the events described above occurs. In the current implementation there can be several handlers for global events and form object events, but only one for form property events. In the first case, the handler is added to the corresponding list, in the second case, the handler replaces the existing one."]}),"\n",(0,r.jsx)(n.p,{children:"For property, it is possible to define its event handlers for the whole logics at once. In that case, these handlers will be automatically added to all forms where these properties are displayed."}),"\n",(0,r.jsx)("a",{className:"lsdoc-anchor",id:"keyboard"}),"\n",(0,r.jsxs)(n.p,{children:["You can also specify a keyboard shortcut for each property, pressing which triggers the property's ",(0,r.jsx)(n.code,{children:"CHANGE"})," event. If several properties on the form correspond to one key combination, the event will be triggered only for the property whose component is closest to the current active component in the component hierarchy."]}),"\n",(0,r.jsx)(n.h3,{id:"default",children:"Default handlers"}),"\n",(0,r.jsx)(n.p,{children:"For some events, the platform automatically creates default handlers:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"QUERYCLOSE"})}),"\n",(0,r.jsxs)(n.p,{children:["Calls the ",(0,r.jsx)(n.code,{children:"System.formClose"})," action"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"QUERYOK"})}),"\n",(0,r.jsxs)(n.p,{children:["Calls the ",(0,r.jsx)(n.code,{children:"System.formOk"})," action"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"CHANGE"})}),"\n",(0,r.jsxs)(n.p,{children:["The user is requested for an object of the changed property value class, after which the received object is written to this property. If the property is not ",(0,r.jsx)(n.a,{href:"/next/Property_change_CHANGE#changeable",children:"mutable"}),", the ",(0,r.jsx)(n.a,{href:"/next/Interactive_view#userfilters",children:"user filter"})," mechanism for this property (or for the property specified using the corresponding option) is automatically called."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GROUPCHANGE"})}),"\n",(0,r.jsxs)(n.p,{children:["Calls the ",(0,r.jsx)(n.code,{children:"CHANGE"})," event handler for all objects that meet the filter conditions of the object group in which the changed property is displayed."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["If property event handler uses (even ",(0,r.jsx)(n.a,{href:"/next/Value_request_REQUEST#implicit",children:"implicitly"}),") the ",(0,r.jsx)(n.a,{href:"/next/Value_request_REQUEST",children:"value request"})," operator, then default handler can be created ",(0,r.jsx)(n.a,{href:"/next/Value_request_REQUEST#defaultChange",children:"in a different way"}),"."]})}),"\n",(0,r.jsx)("a",{className:"lsdoc-anchor",id:"queryValue"}),"\n",(0,r.jsxs)(n.p,{children:["For an ",(0,r.jsx)(n.em,{children:"object request"})," from the user, depending on the type of class, the following operators are used:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/next/Built-in_classes",children:"Builtin classes"})," - the ",(0,r.jsx)(n.a,{href:"/next/Primitive_input_INPUT",children:"input primitive"})," operator."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/next/User_classes",children:"Custom classes"})," - the ",(0,r.jsx)(n.a,{href:"/next/In_an_interactive_view_SHOW_DIALOG",children:"open form"})," operator. The form is the ",(0,r.jsx)(n.a,{href:"/next/Interactive_view#edtClass",children:"list"})," form for this class."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"predefined",children:"Standard handlers"}),"\n",(0,r.jsxs)(n.p,{children:["For properties and actions on the form, it is also possible to define the following ",(0,r.jsx)(n.em,{children:"standard"})," change event handlers (",(0,r.jsx)(n.code,{children:"CHANGE"}),", ",(0,r.jsx)(n.code,{children:"CHANGEWYS"}),", ",(0,r.jsx)(n.code,{children:"GROUPCHANGE"}),", ",(0,r.jsx)(n.code,{children:"EDIT"}),"):"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Read Only"})," (",(0,r.jsx)(n.code,{children:"READONLY"}),") - if the property is displayed in the table, the handler will be similar to ",(0,r.jsx)(n.code,{children:"CHANGE"})," default handler when the property is not mutable (that is, the user filter mechanism will be called). If the property is not displayed in the table, nothing will happen. You can also make this option conditional (",(0,r.jsx)(n.code,{children:"READONLYIF"}),") (that is, change only if the value of some property is not ",(0,r.jsx)(n.code,{children:"NULL"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Selector"})," (",(0,r.jsx)(n.code,{children:"SELECTOR"}),") - when you try to make a change, a dialog will be shown in which the user will be asked to change the ",(0,r.jsx)(n.a,{href:"/next/Form_structure#currentObject",children:"current value"})," of the object."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"language",children:"Language"}),"\n",(0,r.jsxs)(n.p,{children:["To define the form event handlers, use the ",(0,r.jsx)(n.code,{children:"ON"})," option in the ",(0,r.jsx)(n.code,{children:"FORM"})," statement (",(0,r.jsx)(n.a,{href:"/next/Event_block",children:"events"})," block, ",(0,r.jsx)(n.a,{href:"/next/Properties_and_actions_block",children:"properties and actions"})," block, ",(0,r.jsx)(n.a,{href:"/next/Object_blocks#objects",children:"objects"})," block), as well as in ",(0,r.jsx)(n.a,{href:"/next/Property_options",children:"property options"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"showImpossibleMessage()  { MESSAGE 'It\\'s impossible'; };\n\nposted = DATA BOOLEAN (Invoice);\n\nFORM invoice 'Invoice' // creating a form for editing an invoice\n    OBJECTS i = Invoice PANEL // creating an object of the invoice class\n\n//    ...  setting the rest of the form behavior\n\n    EVENTS\n        // specifying that when the user clicks OK, an action should be executed that will execute\n        // actions to \"conduction\" this invoice\n        ON OK { posted(i) <- TRUE; }, \n        // by clicking the formDrop button, showing a message that this cannot be, since this button \n        // by default will be shown only in the form for choosing an invoice, and this form is basically \n        // an invoice edit form\n        ON DROP showImpossibleMessage() \n;\n\nCLASS Shift;\ncurrentShift = DATA Shift();\n\nCLASS Cashier;\ncurrentCashier = DATA Cashier();\n\nCLASS Receipt;\nshift = DATA Shift (Receipt);\ncashier = DATA Cashier (Receipt);\n\nFORM POS 'POS' // declaring the form for product sale to the customer in the salesroom\n\n    OBJECTS r = Receipt PANEL // adding an object that will store the current receipt\n//    ... declaring the behavior of the form\n\n;\n\ncreateReceipt ()  {\n    NEW r = Receipt {\n        shift(r) <- currentShift();\n        cashier(r) <- currentCashier();\n\n        SEEK POS.r = r;\n    }\n}\n\n// adding a property through the form extension so that SEEK could be applied\n// to the already created object on the form\nEXTEND FORM POS \n    EVENTS\n        // when opening the form, executing the action to create a new receipt,\n        // which fills in the shift, cashier and other information\n        ON INIT createReceipt() \n;\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(96540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);