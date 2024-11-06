"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[24706],{96840:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=s(74848),r=s(28453);const i={title:"Value request (REQUEST)"},o=void 0,a={id:"Value_request_REQUEST",title:"Value request (REQUEST)",description:"The value request operator creates an action in which requesting value(s) is separated from directly processing the value(s). Accordingly, this operator allows not to perform a value request if its result is known in advance in the context of the call (the value of the System.requestPushed property is equal to TRUE). This, in turn, automatically gives you the following capabilities in various use cases:",source:"@site/docs/Value_request_REQUEST.md",sourceDirName:".",slug:"/Value_request_REQUEST",permalink:"/Value_request_REQUEST",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Value_request_REQUEST.md",tags:[],version:"current",lastUpdatedAt:1712682555e3,frontMatter:{title:"Value request (REQUEST)"},sidebar:"learn",previous:{title:"Primitive input (INPUT)",permalink:"/Primitive_input_INPUT"},next:{title:"Object group operators",permalink:"/Object_group_operators"}},l={},c=[{value:"Implicit use",id:"implicit",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.em,{children:"value request"})," operator creates an ",(0,n.jsx)(t.a,{href:"/Actions",children:"action"})," in which ",(0,n.jsx)(t.em,{children:"requesting"})," value(s) is separated from directly ",(0,n.jsx)(t.em,{children:"processing"})," the value(s). Accordingly, this operator allows not to perform a value request if its result ",(0,n.jsx)(t.em,{children:"is known in advance"})," in the context of the call (the value of the ",(0,n.jsx)(t.code,{children:"System.requestPushed"})," property is equal to ",(0,n.jsx)(t.code,{children:"TRUE"}),"). This, in turn, automatically gives you the following capabilities in various use cases:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Asynchronous input"}),"\n",(0,n.jsxs)(t.p,{children:["If the user initiates a ",(0,n.jsx)(t.a,{href:"/Form_events",children:"property"})," ",(0,n.jsx)(t.a,{href:"/Form_events",children:"change event"})," (",(0,n.jsx)(t.code,{children:"CHANGE"}),"), and processing it contains exactly one request for the value of a builtin class (the most common case), then the platform does not call it immediately, but first asks the user to input the value of the builtin class. As soon as this input is completed, the user can immediately continue his work and the input result asynchronously (in a new thread) is sent to the server, where the processing of the occurred event is started only at that moment (and not when the event actually occurred). Moreover (we call this technique ",(0,n.jsx)(t.em,{children:"pushing"})," the query value), the query result is marked as known in advance (the value of the ",(0,n.jsx)(t.code,{children:"System.requestPushed"})," property is set to ",(0,n.jsx)(t.code,{children:"TRUE"}),"), and the input value is written to the special property family: ",(0,n.jsx)(t.code,{children:"requested"}),". Accordingly, since this property family is used as the default result of all ",(0,n.jsx)(t.a,{href:"/Value_input",children:"value input"})," operators, synchronous processing is emulated; however, the ergonomics of changing data on the form is significantly improved (for example, the user can continue to input data without waiting for the calculation of all properties on the form)."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"PASTE"}),"\n",(0,n.jsxs)(t.p,{children:["When the user inserts a value into a property cell using the OS tools, the platform triggers a WYSIWYG event to change this property (",(0,n.jsx)(t.code,{children:"CHANGEWYS"}),"), and calls the corresponding handler on the server. In this case, the value that the user inserted is pushed as the request value."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)("a",{className:"lsdoc-anchor",id:"defaultChange"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Change event (",(0,n.jsx)(t.code,{children:"CHANGEWYS"})," and ",(0,n.jsx)(t.code,{children:"CHANGE"}),") ",(0,n.jsx)(t.a,{href:"/Form_events#default",children:"default handler"})," for composition"]}),"\n",(0,n.jsxs)(t.p,{children:["If a property being changed is created using the ",(0,n.jsx)(t.a,{href:"/Composition_JOIN",children:"composition"})," operator with one argument (most often a name or ID), and change event handler is not explicitly defined for it, the platform automatically creates this handler as follows:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"CHANGE"}),"\n",(0,n.jsxs)(t.p,{children:["The user is ",(0,n.jsx)(t.a,{href:"/Form_events#queryValue",children:"requested"})," an object of the property value class which is used as an argument, and this property value changes to the received object"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"CHANGEWYS"}),"\n",(0,n.jsx)(t.p,{children:"The user is requested for an object of the class of the value of the edited property, after which the platform finds the first object which composition property value is equal to the value input by the user and then changes the value of the property used as an argument to this object."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["In both cases, a property change means calling the ",(0,n.jsx)(t.code,{children:"CHANGE"})," event handler, while the value to which the property changes is pushed as the request value."]})}),"\n",(0,n.jsx)(t.p,{children:'Creating such default handlers allows to use PASTE "out of the box" for properties whose values belong not only to built-in but also to custom classes.'}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Group change (",(0,n.jsx)(t.code,{children:"GROUPCHANGE"}),") default handler"]}),"\n",(0,n.jsxs)(t.p,{children:["By default, group change handler is created as follows: ",(0,n.jsx)(t.code,{children:"CHANGE"})," is called first for objects' ",(0,n.jsx)(t.a,{href:"/Form_structure#currentObject",children:"current values"}),", then if the input has not been canceled, the same handler is called for all other values of objects (matching the filter), with the value of the ",(0,n.jsx)(t.code,{children:"System.requestPushed"})," property set to ",(0,n.jsx)(t.code,{children:"TRUE"})," (it is assumed that the result of the input does not change during its handling, thus the behavior is emulated as if the first value was pushed)."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["In fact, the value request operator performs only two operations: it ",(0,n.jsx)(t.a,{href:"/Branching_CASE_IF_MULTI",children:"checks"})," ",(0,n.jsx)(t.code,{children:"System.requestPushed"})," (pushing the value) for the value request action and ",(0,n.jsx)(t.code,{children:"System.requestCanceled"})," (canceling the value) for the request processing action, and it is also responsible for determining the possibility of asynchronous input of the property being changed. At the same time, using this operator makes the code clearer and more readable, therefore it is recommended to use it (instead of explicit checks and options)."]})}),"\n",(0,n.jsxs)(t.p,{children:["As with other value input operators, it is possible to define ",(0,n.jsx)(t.a,{href:"/Value_input#result",children:"main and alternative"})," actions. The first is called if the input was successfully completed, the second if not (i.e. if the input was canceled). Accordingly, it is these two actions in this operator that are responsible for processing request values."]}),"\n",(0,n.jsx)(t.h3,{id:"implicit",children:"Implicit use"}),"\n",(0,n.jsxs)(t.p,{children:["Note that all ",(0,n.jsx)(t.a,{href:"/Value_input",children:"value input"}),' operators can be automatically "wrapped" in the value request operator by using the corresponding option (',(0,n.jsx)(t.code,{children:"DO"}),"). And since, as a rule, a value is input using one input operator, it is recommended to use this option by default, and use the value request operator explicitly only in really complex cases, for example, if there can be several input options (depending on the condition, different forms, etc.)"]}),"\n",(0,n.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,n.jsxs)(t.p,{children:["The syntax of the value request operator is described by the ",(0,n.jsxs)(t.a,{href:"/REQUEST_operator",children:[(0,n.jsx)(t.code,{children:"REQUEST"})," operator"]}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lsf",children:"\nrequestCustomer (Order o)  {\n    LOCAL resultValue = STRING[100] ();\n    REQUEST {\n        ASK 'Choose from list?' DO\n            DIALOG customers OBJECTS c = resultValue() CHANGE;\n        ELSE\n            INPUT = resultValue() CHANGE;\n    } DO\n        customer(o) <- resultValue();\n}\n\nFORM request\n    OBJECTS o = Order\n    PROPERTIES(o) customer ON CHANGE requestCustomer(o) // for example, group change will be performed\n;\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>a});var n=s(96540);const r={},i=n.createContext(r);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);