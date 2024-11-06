"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[2537],{36276:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var s=i(74848),t=i(28453);const r={title:"DIALOG operator"},o=void 0,d={id:"DIALOG_operator",title:"DIALOG operator",description:"The DIALOG operator creates an action that opens a form in an interactive view in dialog mode.",source:"@site/docs/DIALOG_operator.md",sourceDirName:".",slug:"/DIALOG_operator",permalink:"/DIALOG_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/DIALOG_operator.md",tags:[],version:"current",lastUpdatedAt:170852507e4,frontMatter:{title:"DIALOG operator"},sidebar:"learn",previous:{title:"DELETE operator",permalink:"/DELETE_operator"},next:{title:"EMAIL operator",permalink:"/EMAIL_operator"}},c={},l=[{value:"Syntax",id:"syntax",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Input options",id:"input-options",level:3},{value:"Additional options",id:"additional-options",level:3},{value:"Examples",id:"examples",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"DIALOG"})," operator creates an ",(0,s.jsx)(n.a,{href:"/Actions",children:"action"})," that ",(0,s.jsx)(n.a,{href:"/In_an_interactive_view_SHOW_DIALOG",children:"opens a form"})," in an interactive view in ",(0,s.jsx)(n.a,{href:"/In_an_interactive_view_SHOW_DIALOG#dialog",children:"dialog"})," mode."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"DIALOG name\n[OBJECTS objName1 [= expr1] [NULL] [inputOptions1], ..., objNameN [= exprN] [NULL] [inputOptionsN]]\n[formActionOptions]\n[DO actionOperator [ELSE elseActionOperator]]\n"})}),"\n",(0,s.jsx)(n.p,{children:"When opening the list/edit form, the syntax is slightly different:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"DIALOG classFormType className\n[= expr] [NULL] [inputOptions]\n[formActionOptions]\n[DO actionOperator [ELSE elseActionOperator]]\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"inputOptions"})," \u2013 object options that determine whether the last current values of this object should be returned after the form is closed and what to do next with these values (defined with one of the following syntaxes):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"INPUT [alias] [NULL]\nCHANGE [= changeExpr] [NOCONSTRAINTFILTER] [alias] [NULL]\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"formActionOptions"})," - additional options for this action. They can be added one by one in any order:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"windowType\nMANAGESESSION | NOMANAGESESSION\nCANCEL | NOCANCEL\nNEWSESSION | NESTEDSESSION\nREADONLY\n"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"DIALOG"})," operator creates an action that opens the specified form. When opening a form in the ",(0,s.jsx)(n.code,{children:"OBJECTS"})," block you can ",(0,s.jsx)(n.a,{href:"/Open_form#params",children:"specify"})," ",(0,s.jsx)(n.a,{href:"/Value_input#initial",children:"initial values"})," for the ",(0,s.jsx)(n.a,{href:"/Form_structure",children:"form objects"})," and also return the last current values to the specified parameters and execute the ",(0,s.jsx)(n.code,{children:"DO"})," action which will process the received values in case the input has not been cancelled."]}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"name"})}),"\n",(0,s.jsxs)(n.p,{children:["Form name. ",(0,s.jsx)(n.a,{href:"/IDs#cid",children:"Composite ID"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"classFormType"})}),"\n",(0,s.jsx)(n.p,{children:"Keyword. Determines which form to open:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"LIST"})," \u2013 list form"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"EDIT"})," \u2013 edit form"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"className"})}),"\n",(0,s.jsxs)(n.p,{children:["The name of the custom class for which a list/edit form should be opened. ",(0,s.jsx)(n.a,{href:"/IDs#cid",children:"Composite ID"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"objName1 ... objNameN"})}),"\n",(0,s.jsxs)(n.p,{children:["Names of form objects for which initial values are specified. ",(0,s.jsx)(n.a,{href:"/IDs#id",children:"Simple IDs"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"expr1 ... exprN"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/Expression",children:"Expressions"})," which values determine the initial values for form objects."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"NULL"})}),"\n",(0,s.jsxs)(n.p,{children:["Specifies that ",(0,s.jsx)(n.code,{children:"NULL"})," values can be passed. This option is automatically enabled if the object returns a value."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"input-options",children:"Input options"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"INPUT"})}),"\n",(0,s.jsx)(n.p,{children:"Keyword. If used, then the last current value of the object of the opened form will be written to the specified local parameter and, if necessary, to the specified property."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"alias"})}),"\n",(0,s.jsxs)(n.p,{children:["The name of the local parameter to which the input result is written. ",(0,s.jsx)(n.a,{href:"/IDs#id",children:"Simple ID"}),". If the name is not specified, then the name of the form object will be used as the parameter name."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"CHANGE"})}),"\n",(0,s.jsxs)(n.p,{children:["A keyword indicating that in addition to the value input the result needs to be written to the specified property. Also by default, this option sets an additional filter for the object values on the opened form so that when selecting an object and changing the specified property to the value of this object, none of the existing ",(0,s.jsx)(n.a,{href:"/Constraints",children:"constraints"})," are violated."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"NOCONSTRAINTFILTER"})}),"\n",(0,s.jsx)(n.p,{children:"If used, no additional filter for constraint compliance is set."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"changeExpr"})}),"\n",(0,s.jsxs)(n.p,{children:["An ",(0,s.jsx)(n.a,{href:"/Expression",children:"expression"})," that determines the property to which the input result is written. By default, the property specified as the initial object value is used."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"NULL"})}),"\n",(0,s.jsxs)(n.p,{children:["A keyword that determines whether the user can select ",(0,s.jsx)(n.code,{children:"NULL"}),' as the return value (using the special "Drop" action \u2013 ',(0,s.jsx)(n.code,{children:"System.formDrop"}),"). If not used, will be enabled if and only if the ",(0,s.jsx)(n.code,{children:"CHANGE"})," option is specified."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"actionOperator"})}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.a,{href:"/Action_operators#contextdependent",children:"context-dependent action operator"})," that is executed if the input was completed successfully."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"elseActionOperator"})}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.a,{href:"/Action_operators#contextdependent",children:"context-dependent action operator"})," that is executed if the input was cancelled. Parameters added to the input block ",(0,s.jsx)(n.code,{children:"INPUT"})," cannot be used as parameters."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"additional-options",children:"Additional options"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"windowType"})}),"\n",(0,s.jsxs)(n.p,{children:["Method of ",(0,s.jsx)(n.a,{href:"/In_an_interactive_view_SHOW_DIALOG#location",children:"the form layout"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"DOCKED"})," - as a tab."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"FLOAT"})," - as a window. Used by default."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"MANAGESESSION"})," | ",(0,s.jsx)(n.code,{children:"NOMANAGESESSION"})]}),"\n",(0,s.jsxs)(n.p,{children:["Keywords. Determine whether or not the created form is considered to be the ",(0,s.jsx)(n.a,{href:"/Interactive_view#owner",children:"session owner"})," (if so, the corresponding buttons for managing the session will be shown on the form in interactive mode). By default, the platform tries to determine which mode to use ",(0,s.jsx)(n.a,{href:"/Interactive_view#sysactions",children:"automatically"})," depending on the context."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"CANCEL"})," | ",(0,s.jsx)(n.code,{children:"NOCANCEL"})]}),"\n",(0,s.jsxs)(n.p,{children:['Keywords. Determine whether or not to show the "Cancel" system action (',(0,s.jsx)(n.code,{children:"System.formCancel"}),") on the form. By default, the platform tries to determine which mode to use ",(0,s.jsx)(n.a,{href:"/Interactive_view#sysactions",children:"automatically"})," depending on context."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"NEWSESSION | NESTEDSESSION"})}),"\n",(0,s.jsx)(n.p,{children:"Keywords. Determine that the form will be opened in a new (nested) session. By default, the form is opened in the current session."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"READONLY"})}),"\n",(0,s.jsxs)(n.p,{children:["Keyword. If specified, the form is opened in ",(0,s.jsx)(n.a,{href:"/In_an_interactive_view_SHOW_DIALOG#extra",children:"read-only"})," mode."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lsf",children:"FORM selectSku\n    OBJECTS s = Sku\n    PROPERTIES(s) id\n;\n\ntestDialog  {\n    DIALOG selectSku OBJECTS s INPUT DO {\n        MESSAGE 'Selected sku : ' + id(s);\n    }\n}\n\nsku = DATA Sku (OrderDetail);\nidSku (OrderDetail d) = id(sku(d));\n\nchangeSku (OrderDetail d)  {\n    DIALOG selectSku OBJECTS s = sku(d) CHANGE;\n\n    //equivalent to the first option\n    DIALOG selectSku OBJECTS s = sku(d) INPUT NULL CONSTRAINTFILTER DO {\n        sku(d) <- s;\n    }\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>d});var s=i(96540);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);