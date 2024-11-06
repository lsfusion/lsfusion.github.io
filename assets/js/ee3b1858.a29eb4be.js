"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[80298],{73777:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>h});var n=t(74848),o=t(28453);const a={title:"Change sessions"},r=void 0,i={id:"Change_sessions",title:"Change sessions",description:"Actions can change the state of the system in which they are executed. It is not always desirable to write these changes directly to the database, both from the perspective of integrity and from the perspective of the ergonomics of the system. The platform therefore allows to accumulate these changes locally in change sessions.",source:"@site/docs/Change_sessions.md",sourceDirName:".",slug:"/Change_sessions",permalink:"/Change_sessions",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Change_sessions.md",tags:[],version:"current",lastUpdatedAt:1623249583e3,frontMatter:{title:"Change sessions"},sidebar:"learn",previous:{title:"Actions",permalink:"/Actions"},next:{title:"\u041eperators",permalink:"/Action_operators_paradigm"}},c={},h=[];function l(e){const s={a:"a",em:"em",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/Actions",children:"Actions"})," can change the state of the system in which they are executed. It is not always desirable to write these changes directly to the database, both from the perspective of integrity and from the perspective of the ergonomics of the system. The platform therefore allows to accumulate these changes locally in ",(0,n.jsx)(s.em,{children:"change sessions."})]}),"\n",(0,n.jsxs)(s.p,{children:["Changes in a session may be changes in ",(0,n.jsx)(s.a,{href:"/Data_properties_DATA",children:"data"})," properties, including local ones, as well as changes in ",(0,n.jsx)(s.a,{href:"/User_classes",children:"classes"})," of objects. The former are done by actions created using the ",(0,n.jsx)(s.a,{href:"/Property_change_CHANGE",children:"property change operator"}),", the latter using the ",(0,n.jsx)(s.a,{href:"/New_object_NEW",children:"add"}),"/",(0,n.jsx)(s.a,{href:"/Class_change_CHANGECLASS_DELETE",children:"change"})," object class operators."]}),"\n",(0,n.jsxs)(s.p,{children:["Each time an action is executed, the ",(0,n.jsx)(s.em,{children:"current"})," session is determined depending on the execution context. For example, if the action is called as the handler of some event on a form (the most common case), then the session of that form will be the current session for it. The current session may also change when the ",(0,n.jsx)(s.a,{href:"/New_session_NEWSESSION_NESTEDSESSION",children:"new session"})," operator is used, for example."]}),"\n",(0,n.jsx)(s.p,{children:"If an action refers to some property during the execution, then its value is calculated taking into account the changes made in the current session of that action."}),"\n",(0,n.jsxs)(s.p,{children:["Two basic operations are supported for a session - ",(0,n.jsx)(s.a,{href:"/Apply_changes_APPLY",children:"application"})," and ",(0,n.jsx)(s.a,{href:"/Cancel_changes_CANCEL",children:"cancellation"})," ",(0,n.jsx)(s.em,{children:"-"})," as well as a set of operators for ",(0,n.jsx)(s.a,{href:"/Change_operators_SET_CHANGED_etc",children:"working with changes"})," (including getting a ",(0,n.jsx)(s.a,{href:"/Previous_value_PREV",children:"previous value"})," in the session)."]}),"\n",(0,n.jsxs)(s.p,{children:['Note that change sessions are not thread safe, therefore when using operators that explicitly or implicitly perform actions in a new thread and do not block their execution flow, it is highly recommended not to access the current session after they are executed (such "multi-threaded" operators include the ',(0,n.jsx)(s.a,{href:"/NEWTHREAD_operator",children:"new thread"})," and ",(0,n.jsx)(s.a,{href:"/In_an_interactive_view_SHOW_DIALOG#flow",children:"asynchronous"})," ",(0,n.jsx)(s.a,{href:"/In_an_interactive_view_SHOW_DIALOG",children:"form opening"})," operators). In this case, it is recommended that you always create a new session."]})]})}function d(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>i});var n=t(96540);const o={},a=n.createContext(o);function r(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);