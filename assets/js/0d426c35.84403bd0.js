"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["86893"],{74034:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>t,assets:()=>a,toc:()=>l,contentTitle:()=>o});var t=JSON.parse('{"id":"EMAIL_operator","title":"EMAIL operator","description":"The EMAIL operator creates an action that sends email.","source":"@site/versioned_docs/version-v5/EMAIL_operator.md","sourceDirName":".","slug":"/EMAIL_operator","permalink":"/v5/EMAIL_operator","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v5/docs/en/EMAIL_operator.md","tags":[],"version":"v5","lastUpdatedAt":1712954174000,"frontMatter":{"title":"EMAIL operator"},"sidebar":"learn","previous":{"title":"DIALOG operator","permalink":"/v5/DIALOG_operator"},"next":{"title":"EVAL operator","permalink":"/v5/EVAL_operator"}}'),i=s("85893"),r=s("50065");let c={title:"EMAIL operator"},o=void 0,a={},l=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Example",id:"example",level:3}];function d(e){let n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"EMAIL"})," operator creates an ",(0,i.jsx)(n.a,{href:"/v5/Actions",children:"action"})," that ",(0,i.jsx)(n.a,{href:"/v5/Send_mail_EMAIL",children:"sends email"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"EMAIL [FROM fromExpr] [SUBJECT subjExpr]\nrecipientType1 recipientExpr1\n...\nrecipientTypeN recipientExprN\n[BODY bodyExpr]\n[ATTACH attachDescription1\n...\nATTACH attachDescriptionM]\n[syncType]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Each ",(0,i.jsx)(n.code,{children:"attachDescription"})," describes either a single attachment or a list of attachments and has one of two corresponding syntaxes:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"attachFileExpr [NAME attachNameExpr]\nLIST attachFilePropertyID [NAME attachNamePropertyID]\n"})}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"EMAIL"})," operator creates an action that sends an email."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"FROM"})," option specifies the sender's email address. This address is used to identify an existing email account in the system (an object of ",(0,i.jsx)(n.code,{children:"Email.Account"})," class) that will be used to send the email. If this option is not specified, or an account with the specified address is not found, then by default, the account for which the value of the ",(0,i.jsx)(n.code,{children:"Email.isDefaultInbox[Email.Account]"})," property is not ",(0,i.jsx)(n.code,{children:"NULL"})," is selected. An exception will be thrown if a matching account is not found."]}),"\n",(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.code,{children:"SUBJECT"})," option is not specified, the subject value will be equal to ",(0,i.jsx)(n.code,{children:"'{mail.nosubject}'"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.code,{children:"NAME"})," option within ",(0,i.jsx)(n.code,{children:"attachDescription"}),", file names are specified without extensions (the dot ",(0,i.jsx)(n.code,{children:"."})," will be considered part of the file name). The extension will be automatically determined similar to the ",(0,i.jsxs)(n.a,{href:"/v5/WRITE_operator",children:[(0,i.jsx)(n.code,{children:"WRITE"})," operator"]}),". If the ",(0,i.jsx)(n.code,{children:"NAME"})," option is not specified, the default attachment name will be ",(0,i.jsx)(n.code,{children:"'attachmentK'"}),", where ",(0,i.jsx)(n.code,{children:"K"})," is the index number of the attachment."]}),"\n",(0,i.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"fromExpr"})}),"\n",(0,i.jsxs)(n.p,{children:["An ",(0,i.jsx)(n.a,{href:"/v5/Expression",children:"expression"})," which value determines the sender's email address."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"subjExpr"})}),"\n",(0,i.jsx)(n.p,{children:"An expression which value determines the email subject."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"recipientType1 ... recipientTypeN"})}),"\n",(0,i.jsx)(n.p,{children:"Recipient types. At least one must be specified. Each of them is specified by one of the keywords:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"TO"})," - message recipient"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"\u0421\u0421"})," - secondary message recipient to whom a copy is sent"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"BCC"})," - message recipient whose address is not shown to other recipients"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"recipientExpr1 ... recipientExprN"})}),"\n",(0,i.jsx)(n.p,{children:"Expressions which values determine the addresses of the message recipients."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"bodyExpr"})}),"\n",(0,i.jsx)(n.p,{children:"An expression which value determines the message body. Can be of either a string or file class."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"attachFileExpr"})}),"\n",(0,i.jsx)(n.p,{children:"An expression which value determines the file to be attached to the email.  The value must belong to a file class."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"attachNameExpr"})}),"\n",(0,i.jsx)(n.p,{children:"An expression which value determines the name of the attachment."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"attachFilePropertyID"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/v5/IDs#propertyid",children:"Property ID"})," which determines a list of files to be attached to the message. The property must have exactly one parameter of the ",(0,i.jsx)(n.code,{children:"INTEGER"})," class and return a value of a file class"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"attachNamePropertyID"})}),"\n",(0,i.jsxs)(n.p,{children:["Property ID which determines a list of attachment names. The property must have exactly one parameter of the ",(0,i.jsx)(n.code,{children:"INTEGER"})," class."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"syncType"})}),"\n",(0,i.jsx)(n.p,{children:"Synchronisation type. Specifies when the execution of the created action completes, allowing you to choose between synchronous and asynchronous approaches. Specified by one of the keywords:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"WAIT"})," - the action completes after the email is sent in the current thread. In case of unsuccessful sending, an exception is thrown. This is the default behavior."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"NOWAIT"})," - The email is sent in a new thread, allowing the action to complete immediately without waiting for the sending result. In case of failure, the system will automatically make several resend attempts, information about which can be found in the system logs."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"FORM remindUserPass\n    OBJECTS u=CustomUser PANEL\n    PROPERTIES(u) READONLY login, name[Contact]\n;\n\nemailUserPassUser 'Login reminder' (CustomUser user)  {\n    LOCAL bodyFile = FILE ();\n    PRINT remindUserPass OBJECTS u = user HTML TO bodyFile;\n    EMAIL\n        SUBJECT 'Login reminder'\n        TO email(user)\n        BODY bodyFile()\n        NOWAIT\n    ;\n}\n\njustSendEmail 'Send letter' ()  {\n    stringToFile('<font color=#FF0000 size=+3>big red text</font>');\n    EMAIL\n        FROM 'luxsoft@adsl.by'\n        SUBJECT 'Letter subject'\n        TO 'xxx@tut.by'\n        BODY resultFile()\n    ;\n}\n"})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return c}});var t=s(67294);let i={},r=t.createContext(i);function c(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);