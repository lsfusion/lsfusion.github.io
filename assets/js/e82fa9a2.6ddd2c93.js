"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[1315],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},25084:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var r=n(83117),a=(n(67294),n(3905));const i={title:"EMAIL operator"},o=void 0,p={unversionedId:"EMAIL_operator",id:"EMAIL_operator",title:"EMAIL operator",description:"The EMAIL operator creates an action that sends email.",source:"@site/docs/EMAIL_operator.md",sourceDirName:".",slug:"/EMAIL_operator",permalink:"/next/EMAIL_operator",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/EMAIL_operator.md",tags:[],version:"current",lastUpdatedAt:1708525070,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"EMAIL operator"},sidebar:"learn",previous:{title:"DIALOG operator",permalink:"/next/DIALOG_operator"},next:{title:"EVAL operator",permalink:"/next/EVAL_operator"}},l={},s=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Example",id:"example",level:3}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"EMAIL")," operator creates an ",(0,a.kt)("a",{parentName:"p",href:"/next/Actions"},"action")," that ",(0,a.kt)("a",{parentName:"p",href:"/next/Send_mail_EMAIL"},"sends email"),"."),(0,a.kt)("h3",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"EMAIL [FROM fromExpr] \n[SUBJECT subjExpr]\nrecipientType1 recipientExpr1\n...\nrecipientTypeN recipientExprN\n[BODY bodyExpr]\nATTACH attachFileExpr1 [NAME attachNameExpr1]\n...\nATTACH attachFileExprM [NAME attachNameExprM]\n")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"EMAIL")," operator creates an action that sends emails. "),(0,a.kt)("p",null,"It is assumed that the file extension is not specified in the attachment name, i.e. period ",(0,a.kt)("inlineCode",{parentName:"p"},".")," is also considered part of the file name. This extension is automatically determined similar to the ",(0,a.kt)("a",{parentName:"p",href:"/next/WRITE_operator"},(0,a.kt)("inlineCode",{parentName:"a"},"WRITE")," operator"),"."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"fromExpr")),(0,a.kt)("p",{parentName:"li"},"  An ",(0,a.kt)("a",{parentName:"p",href:"/next/Expression"},"expression")," which value determines the sender address. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"subjExpr")),(0,a.kt)("p",{parentName:"li"},"  An expression which value determines the email subject.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"recipientType1 ... recipientTypeN")),(0,a.kt)("p",{parentName:"li"},"  Recipient types. N>=1. Each of them is specified by one of the keywords:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TO")," - message recipient"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u0421\u0421")," - secondary message recipient to whom a copy is sent"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BCC")," - message recipient whose address is not shown to other recipients"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"recipientExpr1 ... recipientExprN")),(0,a.kt)("p",{parentName:"li"},"  Expressions which values determine the addresses of the message recipients.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"bodyExpr")),(0,a.kt)("p",{parentName:"li"},"  An expression which value is the mail body. Can be either a string or file type.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"attachFileExpr1 .... attachFileExprM")),(0,a.kt)("p",{parentName:"li"},"  Expressions which values are files attached to the message.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"attachNameExpr1 ... attachNameExprM")),(0,a.kt)("p",{parentName:"li"},"  An expression which values determine the names of the attachments."))),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM remindUserPass\n    OBJECTS u=CustomUser PANEL\n    PROPERTIES(u) READONLY login, name[Contact]\n;\n\nemailUserPassUser 'Login reminder' (CustomUser user)  {\n    LOCAL bodyFile = FILE ();\n    PRINT remindUserPass OBJECTS u = user HTML TO bodyFile;\n    EMAIL\n    SUBJECT 'Login reminder'\n    TO email(user)\n    BODY bodyFile();\n}\n\njustSendEmail 'Send letter' ()  {\n    stringToFile('<font color=#FF0000 size=+3>big red text</font>');\n    EMAIL\n    FROM 'luxsoft@adsl.by'\n    SUBJECT 'Letter subject'\n    TO 'xxx@tut.by'\n    BODY resultFile();\n}\n")))}m.isMDXComponent=!0}}]);