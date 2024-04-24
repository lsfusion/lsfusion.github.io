"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[84321],{55568:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=n(74848),o=n(28453);const i={title:"Show message (MESSAGE, ASK)"},a=void 0,l={id:"Show_message_MESSAGE_ASK",title:"Show message (MESSAGE, ASK)",description:"The show message operators create actions that show a text message to the user. The message is defined as a property whose value will be used as the message content. This message can be displayed either using a dialog box or in the System.log system window.",source:"@site/versioned_docs/version-v5/Show_message_MESSAGE_ASK.md",sourceDirName:".",slug:"/Show_message_MESSAGE_ASK",permalink:"/Show_message_MESSAGE_ASK",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/Show_message_MESSAGE_ASK.md",tags:[],version:"v5",lastUpdatedAt:1713986942,formattedLastUpdatedAt:"Apr 24, 2024",frontMatter:{title:"Show message (MESSAGE, ASK)"},sidebar:"learn",previous:{title:"User/IS interaction",permalink:"/User_IS_interaction"},next:{title:"File operators",permalink:"/File_operators"}},r={},c=[{value:"Flow control",id:"flow-control",level:3},{value:"Dialog form",id:"dialog",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const s={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.em,{children:"show message"})," operators create ",(0,t.jsx)(s.a,{href:"/Actions",children:"actions"})," that show a text message to the user. The message is defined as a ",(0,t.jsx)(s.a,{href:"/Properties",children:"property"})," whose value will be used as the message content. This message can be displayed either using a dialog box or in the ",(0,t.jsx)(s.code,{children:"System.log"})," system window."]}),"\n",(0,t.jsx)(s.h3,{id:"flow-control",children:"Flow control"}),"\n",(0,t.jsxs)(s.p,{children:["By default, the created action stops the thread until the user closes the message. However, this behavior can be changed using the corresponding option \u2013 in this case, the created action is completed immediately and the message is shown to the user as soon as possible (that is, the next user interaction). The first mode shall be called ",(0,t.jsx)(s.em,{children:"synchronous"})," and the second ",(0,t.jsx)(s.em,{children:"asynchronous"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"dialog",children:"Dialog form"}),"\n",(0,t.jsxs)(s.p,{children:["It is also often necessary not only to inform the user about something, but also, for example, to request confirmation to continue an action. For such cases, the operator allows, instead of simply displaying the message (with a single ",(0,t.jsx)(s.code,{children:"OK"})," button), to ask a question with the option of canceling (",(0,t.jsx)(s.code,{children:"OK"}),"/",(0,t.jsx)(s.code,{children:"Cancel"}),") and thereby essentially to implement ",(0,t.jsx)(s.a,{href:"/Value_input",children:"a value input"}),". This input is considered to have been ",(0,t.jsx)(s.a,{href:"/Value_input#result",children:"canceled"})," if the ",(0,t.jsx)(s.code,{children:"Cancel"})," button is pressed (there is no input value in that case)."]}),"\n",(0,t.jsxs)(s.p,{children:["In addition, a third option can be added to the question: ",(0,t.jsx)(s.code,{children:"Yes"})," / ",(0,t.jsx)(s.code,{children:"No"})," / ",(0,t.jsx)(s.code,{children:"Cancel"}),". In this case, it is considered that ",(0,t.jsx)(s.a,{href:"/Value_input#result",children:"the input result"})," will be a value of logical class (",(0,t.jsx)(s.code,{children:"Yes"})," - ",(0,t.jsx)(s.code,{children:"TRUE"}),", ",(0,t.jsx)(s.code,{children:"No"})," - ",(0,t.jsx)(s.code,{children:"NULL"}),"). As in the first case, the input is considered to be canceled if the ",(0,t.jsx)(s.code,{children:"Cancel"})," button is selected."]}),"\n",(0,t.jsxs)(s.p,{children:["The form of the operator in which the user is asked a question shall be called the ",(0,t.jsx)(s.em,{children:"dialog"})," form."]}),"\n",(0,t.jsxs)(s.p,{children:["As with other value input operators, in the dialog form of this operator you can define ",(0,t.jsx)(s.a,{href:"/Value_input#result",children:"main and alternative"})," actions. The first is called if the input was successfully completed, the second if not (i.e. if the input was canceled)."]}),"\n",(0,t.jsx)(s.p,{children:"The operator dialog form is available in synchronous mode only."}),"\n",(0,t.jsx)(s.h3,{id:"language",children:"Language"}),"\n",(0,t.jsxs)(s.p,{children:["To declare an action showing a message, use the ",(0,t.jsxs)(s.a,{href:"/MESSAGE_operator",children:[(0,t.jsx)(s.code,{children:"MESSAGE"})," operator"]}),". To display the message in dialog form, use the ",(0,t.jsxs)(s.a,{href:"/ASK_operator",children:[(0,t.jsx)(s.code,{children:"ASK"})," operator"]}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-lsf",children:"message { MESSAGE 'Hello World!'; } // plain text message\n\nisGood = DATA BOOLEAN (Item);\nstringData(Item i) {\n    // depending on which item will be passed to the action, a window will be shown \n    // either with the text 'Good' or with the text 'Bad'\n    MESSAGE IF isGood(i) THEN 'Good' ELSE 'Bad';   \n}\n\n// In this case, five text messages will be shown to the user\ntestMessage() { \n    LOCAL i = INTEGER();\n    i() <- 0;\n    WHILE i() < 5 DO {\n        i() <- i() + 1;\n        MESSAGE i();\n    }\n}\n\n// In the case of NOWAIT, one text message combining messages  \n// from five MESSAGE calls will be shown to the user\ntestMessageNowait() {              \n    LOCAL i = INTEGER();\n    i() <- 0;\n    WHILE i() < 5 DO {\n        i() <- i() + 1;\n        MESSAGE i() NOWAIT;\n    }\n}\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-lsf",children:"testAsk() {\n    ASK 'Are you sure you want to continue?' DO {\n        MESSAGE 'You continued';\n    }\n\n    ASK 'Use old values?' useOld = YESNO DO {\n        IF useOld THEN\n            MESSAGE 'Using old values';\n        ELSE\n            MESSAGE 'Using new values';\n    }\n}\n"})})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>l});var t=n(96540);const o={},i=t.createContext(o);function a(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);