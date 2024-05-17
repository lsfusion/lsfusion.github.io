"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[21517],{79444:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=t(74848),s=t(28453);const r={title:"Action options"},o=void 0,c={id:"Action_options",title:"Action options",description:"When declaring an action in the ACTION statement a certain set of action options may be specified at the end of the declaration.",source:"@site/versioned_docs/version-v5/Action_options.md",sourceDirName:".",slug:"/Action_options",permalink:"/Action_options",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/Action_options.md",tags:[],version:"v5",lastUpdatedAt:170852507e4,frontMatter:{title:"Action options"},sidebar:"learn",previous:{title:"WRITE operator",permalink:"/WRITE_operator"},next:{title:"GROUP statement",permalink:"/GROUP_statement"}},d={},l=[{value:"Syntax",id:"syntax",level:2},{value:"Description and parameters",id:"description-and-parameters",level:2},{value:"Interactive view block",id:"interactive-view-block",level:3},{value:"<code>DESIGN</code> statement default values block",id:"design-statement-default-values-block",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["When declaring an ",(0,i.jsx)(n.a,{href:"/Actions",children:"action"})," in the ",(0,i.jsxs)(n.a,{href:"/ACTION_statement",children:[(0,i.jsx)(n.code,{children:"ACTION"})," statement"]})," a certain set of ",(0,i.jsx)(n.em,{children:"action options"})," may be specified at the end of the declaration."]}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.p,{children:"Options are listed one after another in arbitrary order, separated by spaces or line feeds:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"propertyOption1 ... propertyOptionN\n"})}),"\n",(0,i.jsx)(n.p,{children:"The following set of options is supported (the syntax of each option is indicated on a separate line):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"IN groupName\nviewType\nON eventType { actionOperator }\nCHANGEKEY key [SHOW | HIDE]\nASON eventType [ACTION] propertyId\nIMAGE path\nCONFIRM\n"})}),"\n",(0,i.jsx)(n.h2,{id:"description-and-parameters",children:"Description and parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"IN groupName"})}),"\n",(0,i.jsxs)(n.p,{children:["Specifying the ",(0,i.jsx)(n.a,{href:"/Groups_of_properties_and_actions",children:"group of properties and actions"})," to which the action belongs. If the option is not specified, then the action will belong by default to the ",(0,i.jsx)(n.code,{children:"System.private"})," group."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"groupName"})}),"\n",(0,i.jsxs)(n.p,{children:["A group name. ",(0,i.jsx)(n.a,{href:"/IDs#cid",children:"Composite ID"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"interactive-view-block",children:"Interactive view block"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"viewType"})}),"\n",(0,i.jsxs)(n.p,{children:["Specifying the type of the ",(0,i.jsx)(n.a,{href:"/Interactive_view#property",children:"action view"})," when added to the form."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"GRID"})," - table column"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"TOOLBAR"})," - toolbar"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"PANEL"})," - panel"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["It is similar to specifying the viewType option in the ",(0,i.jsx)(n.a,{href:"/Properties_and_actions_block",children:"property block"})," of the ",(0,i.jsxs)(n.a,{href:"/FORM_statement",children:[(0,i.jsx)(n.code,{children:"FORM"})," statement"]}),". Thus, if this option is not specified either in the action options or in the property block directly on the form, the ",(0,i.jsx)(n.a,{href:"/Interactive_view#property",children:"default view"})," of the action display group on the form is used."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"ON eventType { actionOperator }"})}),"\n",(0,i.jsxs)(n.p,{children:["Specifying an action that will be the default handler of a certain ",(0,i.jsx)(n.a,{href:"/Form_events",children:"event"})," for all the interactive views of this action. Can be overridden in the property block of the ",(0,i.jsx)(n.code,{children:"FORM"})," statement."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"eventType"})}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.a,{href:"/Form_events",children:"form event"})," type. It is specified by one of the keywords:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"CHANGE"})," - occurs when the user tries to change the value of the specified property"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"CHANGEWYS"})," - occurs when the user tries to change the value of the specified property using a special input mechanism. You can read more in the description of the ",(0,i.jsx)(n.a,{href:"/Form_events",children:"form events"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"GROUPCHANGE"})," - occurs when the user tries to change the property value for all objects in the table (group editing)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"EDIT"})," - occurs when the user tries to edit the object that is the value of the specified property"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"CONTEXTMENU [caption]"})," - the user has selected the specified item in the property context menu on the form. If necessary, you can also define the caption of this menu item (",(0,i.jsx)(n.a,{href:"/Literals#strliteral",children:"string literal"}),"). If it is not specified, then, by default, it will be the same as the action caption."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"actionOperator"})}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.a,{href:"/Action_operators#contextdependent",children:"context-dependent action operator"}),". An operator that defines the action executed on an event. You can use the parameters of the property itself as operator parameters."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"ASON eventType [ACTION] propertyId"})}),"\n",(0,i.jsxs)(n.p,{children:["Specifies that this action will be the default handler of a certain ",(0,i.jsx)(n.a,{href:"/Form_events",children:"event"})," for all the interactive views of the specified property or action. Can be overridden in the ",(0,i.jsx)(n.a,{href:"/Properties_and_actions_block",children:"property and action block"})," of the ",(0,i.jsx)(n.code,{children:"FORM"})," statement."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"eventType"})}),"\n",(0,i.jsxs)(n.p,{children:["Similar to the ",(0,i.jsx)(n.code,{children:"ON"})," block."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"propertyId"})}),"\n",(0,i.jsxs)(n.p,{children:["An ",(0,i.jsx)(n.a,{href:"/IDs#propertyid",children:"ID of the property or action"})," for which the created action will be executed when the specified form event occurs."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"ACTION"})}),"\n",(0,i.jsxs)(n.p,{children:["Keyword. If specified, it is considered that the action is set in ",(0,i.jsx)(n.code,{children:"propertyId"}),". If not specified, it is initially considered that a property is defined in ",(0,i.jsx)(n.code,{children:"propertyId"}),"; otherwise, if no property is found, it is considered that an action is specified in ",(0,i.jsx)(n.code,{children:"propertyId"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"IMAGE path"})}),"\n",(0,i.jsx)(n.p,{children:"Specifies the file with the image to be displayed as an action icon."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"path"})}),"\n",(0,i.jsxs)(n.p,{children:["The relative path to the file. ",(0,i.jsx)(n.a,{href:"/Literals#strliteral",children:"String literal"}),". The path is specified relative to the ",(0,i.jsx)(n.code,{children:"images"})," folder."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"design-statement-default-values-block",children:[(0,i.jsx)(n.code,{children:"DESIGN"})," statement default values block"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"CHANGEKEY key [SHOW | HIDE]"})}),"\n",(0,i.jsxs)(n.p,{children:["Specifies a ",(0,i.jsx)(n.a,{href:"/Form_events#keyboard",children:"keyboard shortcut"})," which triggers this action. Sets the value for the ",(0,i.jsx)(n.a,{href:"/Form_design#defaultDesign",children:"default design"})," and can be overridden in the ",(0,i.jsxs)(n.a,{href:"/DESIGN_statement",children:[(0,i.jsx)(n.code,{children:"DESIGN"})," statement"]}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"key"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/Literals#strliteral",children:"String literal"})," that defines a keyboard shortcut. The definition method is identical to that for a parameter in the Java class method ",(0,i.jsx)(n.a,{href:"http://docs.oracle.com/javase/7/docs/api/javax/swing/KeyStroke.html#getKeyStroke(java.lang.String)",children:"Keystroke.getKeystroke(String)"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"SHOW"})}),"\n",(0,i.jsx)(n.p,{children:"A keyword. If specified, the keyboard shortcut will be displayed in the action caption. Used by default."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"HIDE"})}),"\n",(0,i.jsx)(n.p,{children:"A keyword. If specified, the keyboard shortcut will not be displayed in the action caption."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"CONFIRM"})}),"\n",(0,i.jsxs)(n.p,{children:["Keyword. If specified, the user will be asked to confirm the action when it is executed. Sets the value for the default design and can be overridden in the ",(0,i.jsx)(n.code,{children:"DESIGN"})," statement."]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var i=t(96540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);