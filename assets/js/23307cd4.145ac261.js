(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[16218],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,u=m["".concat(s,".").concat(d)]||m[d]||h[d]||i;return n?a.createElement(u,o(o({ref:t},c),{},{components:n})):a.createElement(u,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61711:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(74034),r=n(79973),i=(n(67294),n(3905)),o=["components"],l={title:"Form events"},s=void 0,p={unversionedId:"Form_events",id:"Form_events",isDocsHomePage:!1,title:"Form events",description:"While the application is running, there is a number of events for each form that occur as a result of certain user actions:",source:"@site/docs/Form_events.md",sourceDirName:".",slug:"/Form_events",permalink:"/next/Form_events",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Form_events.md",tags:[],version:"current",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"7/7/2021",frontMatter:{title:"Form events"},sidebar:"learn",previous:{title:"Form design",permalink:"/next/Form_design"},next:{title:"Overview",permalink:"/next/Form_operators"}},c=[{value:"Global",id:"global",children:[],level:4},{value:"For objects on the form",id:"for-objects-on-the-form",children:[],level:4},{value:"For properties or actions on the form",id:"property",children:[],level:4},{value:"Global",id:"global-1",children:[],level:4},{value:"Default handlers",id:"default",children:[],level:3},{value:"Standard handlers",id:"predefined",children:[],level:3},{value:"Language",id:"language",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],h={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"While the application is running, there is a number of events for each form that occur as a result of certain user actions:"),(0,i.kt)("h4",{id:"global"},"Global"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"QUERYCLOSE")," - the user tries to close the form by clicking on the corresponding button in the form header."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"QUERYOK")," - the user tries to close a modal form by double-clicking on any row in the table.")),(0,i.kt)("h4",{id:"for-objects-on-the-form"},"For objects on the form"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CHANGE")," - user ",(0,i.kt)("a",{parentName:"li",href:"/next/Interactive_view#objects"},"changed")," the ",(0,i.kt)("a",{parentName:"li",href:"/next/Form_structure#currentObject"},"current value")," of an object.")),(0,i.kt)("h4",{id:"property"},"For properties or actions on the form"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CHANGE")," - the user initiated a property change or action call."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CHANGEWYS")," - the user initiated a WYSIWYG property change using the PASTE operation or a special input mechanism "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GROUPCHANGE")," - the user initiated a property change for all objects in the table"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EDIT")," - the user initiated editing of an object"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CONTEXTMENU")," - the user selected the specified item in the context menu of a property (action) on the form")),(0,i.kt)("p",null,"There are also several so-called ",(0,i.kt)("em",{parentName:"p"},"derivative")," events that are nothing more than syntactic sugar, but at the same time allow you more effectively to solve typical problems that arise when working with forms:"),(0,i.kt)("h4",{id:"global-1"},"Global"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"INIT")," - occurs immediately after the form is opened."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"APPLY")," - occurs when the form session is saved to the database (inside the transaction, at the very beginning, before global event handling is performed)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"APPLY BEFORE")," - occurs immediately before the form session is saved to the database (before the start of the transaction)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"APPLY AFTER")," - occurs immediately after the form session is successfully saved to the database (after the end of the transaction)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CANCEL")," - occurs when the form session changes are canceled."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CLOSE")," - occurs when the ",(0,i.kt)("inlineCode",{parentName:"li"},"System.formClose")," action is executed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DROP")," - occurs when the ",(0,i.kt)("inlineCode",{parentName:"li"},"System.formDrop")," action is executed.")),(0,i.kt)("p",null,"If the form is ",(0,i.kt)("a",{parentName:"p",href:"/next/Interactive_view#owner"},"the session owner")," (meaning that when the ",(0,i.kt)("inlineCode",{parentName:"p"},"System.formOk")," action is executed the form session ",(0,i.kt)("a",{parentName:"p",href:"/next/Apply_changes_APPLY"},"is saved"),"):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"OK"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"OK BEFORE"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"OK AFTER")," - occurs when the ",(0,i.kt)("inlineCode",{parentName:"li"},"System.formOk")," action is executed, at the moments similar to the corresponding moments for the ",(0,i.kt)("inlineCode",{parentName:"li"},"APPLY")," event (i.e. inside, before and after the transaction). In this case, ",(0,i.kt)("inlineCode",{parentName:"li"},"OK")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"OK BEFORE")," handlers are executed before executing ",(0,i.kt)("inlineCode",{parentName:"li"},"APPLY")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"APPLY BEFORE")," handlers, and ",(0,i.kt)("inlineCode",{parentName:"li"},"OK AFTER")," is executed after ",(0,i.kt)("inlineCode",{parentName:"li"},"APPLY AFTER"),".")),(0,i.kt)("p",null,"If the form is not the session owner:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"OK")," - occurs when the",(0,i.kt)("inlineCode",{parentName:"li"},"System.formOk")," action is executed")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If ",(0,i.kt)("inlineCode",{parentName:"p"},"OK BEFORE")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"OK AFTER")," handlers are defined, but the form is not the session owner, these handlers are still executed, respectively before and after the ",(0,i.kt)("inlineCode",{parentName:"p"},"OK")," event handler."))),(0,i.kt)("p",null,"If, after the execution of event handlers with the ",(0,i.kt)("inlineCode",{parentName:"p"},"BEFORE")," postfix, the ",(0,i.kt)("inlineCode",{parentName:"p"},"System.applyCanceled")," property value equals ",(0,i.kt)("inlineCode",{parentName:"p"},"TRUE"),", further execution of the action that led to the occurrence of this event is stopped (for example, with ",(0,i.kt)("inlineCode",{parentName:"p"},"APPLY BEFORE"),", saving the session is interrupted as if one of the existing constraints had been ",(0,i.kt)("a",{parentName:"p",href:"/next/Constraints"},"violated"),")."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For the remainder of the section, the behavior of properties and actions is exactly the same and so we will use only the term property (behavior is absolutely identical for actions)."))),(0,i.kt)("p",null,"The developer can execute certain actions (",(0,i.kt)("em",{parentName:"p"},"handlers"),") when any of the events described above occurs. In the current implementation there can be several handlers for global events and form object events, but only one for form property events. In the first case, the handler is added to the corresponding list, in the second case, the handler replaces the existing one."),(0,i.kt)("p",null,"For property, it is possible to define its event handlers for the whole logics at once. In that case, these handlers will be automatically added to all forms where these properties are displayed."),(0,i.kt)("a",{className:"lsdoc-anchor",id:"keyboard"}),(0,i.kt)("p",null,"You can also specify a keyboard shortcut for each property, pressing which triggers the property's ",(0,i.kt)("inlineCode",{parentName:"p"},"CHANGE")," event. If several properties on the form correspond to one key combination, the event will be triggered only for the property whose component is closest to the current active component in the component hierarchy."),(0,i.kt)("h3",{id:"default"},"Default handlers"),(0,i.kt)("p",null,"For some events, the platform automatically creates default handlers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"QUERYCLOSE")),(0,i.kt)("p",{parentName:"li"},"  Calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"System.formClose")," action")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"QUERYOK")),(0,i.kt)("p",{parentName:"li"},"  Calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"System.formOk")," action")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"CHANGE")),(0,i.kt)("p",{parentName:"li"},"  The user is requested for an object of the changed property value class, after which the received object is written to this property. If the property is not ",(0,i.kt)("a",{parentName:"p",href:"/next/Property_change_CHANGE#changeable"},"mutable"),", the ",(0,i.kt)("a",{parentName:"p",href:"/next/Interactive_view#userfilters"},"user filter")," mechanism for this property (or for the property specified using the corresponding option) is automatically called.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"GROUPCHANGE")),(0,i.kt)("p",{parentName:"li"},"  Calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"CHANGE")," event handler for all objects that meet the filter conditions of the object group in which the changed property is displayed. "))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If property event handler uses (even ",(0,i.kt)("a",{parentName:"p",href:"/next/Value_request_REQUEST#implicit"},"implicitly"),") the ",(0,i.kt)("a",{parentName:"p",href:"/next/Value_request_REQUEST"},"value request")," operator, then default handler can be created ",(0,i.kt)("a",{parentName:"p",href:"/next/Value_request_REQUEST#defaultChange"},"in a different way"),"."))),(0,i.kt)("a",{className:"lsdoc-anchor",id:"queryValue"}),(0,i.kt)("p",null,"For an ",(0,i.kt)("em",{parentName:"p"},"object request")," from the user, depending on the type of class, the following operators are used:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/Built-in_classes"},"Builtin classes")," - the ",(0,i.kt)("a",{parentName:"li",href:"/next/Primitive_input_INPUT"},"input primitive")," operator."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/User_classes"},"Custom classes")," - the ",(0,i.kt)("a",{parentName:"li",href:"/next/In_an_interactive_view_SHOW_DIALOG"},"open form")," operator. The form is the ",(0,i.kt)("a",{parentName:"li",href:"/next/Interactive_view#edtClass"},"list")," form for this class. ")),(0,i.kt)("h3",{id:"predefined"},"Standard handlers"),(0,i.kt)("p",null,"For properties and actions on the form, it is also possible to define the following ",(0,i.kt)("em",{parentName:"p"},"standard")," change event handlers (",(0,i.kt)("inlineCode",{parentName:"p"},"CHANGE"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CHANGEWYS"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUPCHANGE"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"EDIT"),"): "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Read Only")," (",(0,i.kt)("inlineCode",{parentName:"li"},"READONLY"),") - if the property is displayed in the table, the handler will be similar to ",(0,i.kt)("inlineCode",{parentName:"li"},"CHANGE")," default handler when the property is not mutable (that is, the user filter mechanism will be called). If the property is not displayed in the table, nothing will happen. You can also make this option conditional (",(0,i.kt)("inlineCode",{parentName:"li"},"READONLYIF"),") (that is, change only if the value of some property is not ",(0,i.kt)("inlineCode",{parentName:"li"},"NULL"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Selector")," (",(0,i.kt)("inlineCode",{parentName:"li"},"SELECTOR"),") - when you try to make a change, a dialog will be shown in which the user will be asked to change the ",(0,i.kt)("a",{parentName:"li",href:"/next/Form_structure#currentObject"},"current value")," of the object.")),(0,i.kt)("h3",{id:"language"},"Language"),(0,i.kt)("p",null,"To define the form event handlers, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ON")," option in the ",(0,i.kt)("inlineCode",{parentName:"p"},"FORM")," statement (",(0,i.kt)("a",{parentName:"p",href:"/next/Event_block"},"events")," block, ",(0,i.kt)("a",{parentName:"p",href:"/next/Properties_and_actions_block"},"properties and actions")," block, ",(0,i.kt)("a",{parentName:"p",href:"/next/Object_blocks#objects"},"objects")," block), as well as in ",(0,i.kt)("a",{parentName:"p",href:"/next/Property_options"},"property options"),". "),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"showImpossibleMessage()  { MESSAGE 'It\\'s impossible'; };\n\nposted = DATA BOOLEAN (Invoice);\n\nFORM invoice 'Invoice' // creating a form for editing an invoice\n    OBJECTS i = Invoice PANEL // creating an object of the invoice class\n\n//    ...  setting the rest of the form behavior\n\n    EVENTS\n        // specifying that when the user clicks OK, an action should be executed that will execute\n        // actions to \"conduction\" this invoice\n        ON OK { posted(i) <- TRUE; }, \n        // by clicking the formDrop button, showing a message that this cannot be, since this button \n        // by default will be shown only in the form for choosing an invoice, and this form is basically \n        // an invoice edit form\n        ON DROP showImpossibleMessage() \n;\n\nCLASS Shift;\ncurrentShift = DATA Shift();\n\nCLASS Cashier;\ncurrentCashier = DATA Cashier();\n\nCLASS Receipt;\nshift = DATA Shift (Receipt);\ncashier = DATA Cashier (Receipt);\n\nFORM POS 'POS' // declaring the form for product sale to the customer in the salesroom\n\n    OBJECTS r = Receipt PANEL // adding an object that will store the current receipt\n//    ... declaring the behavior of the form\n\n;\n\ncreateReceipt ()  {\n    NEW r = Receipt {\n        shift(r) <- currentShift();\n        cashier(r) <- currentCashier();\n\n        SEEK POS.r = r;\n    }\n}\n\n// adding a property through the form extension so that SEEK could be applied\n// to the already created object on the form\nEXTEND FORM POS \n    EVENTS\n        // when opening the form, executing the action to create a new receipt,\n        // which fills in the shift, cashier and other information\n        ON INIT createReceipt() \n;\n")))}m.isMDXComponent=!0}}]);