(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[44149],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,m=u["".concat(c,".").concat(f)]||u[f]||h[f]||o;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},51129:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var r=n(74034),a=n(79973),o=(n(67294),n(3905)),s=["components"],i={title:"Change sessions"},c=void 0,p={unversionedId:"Change_sessions",id:"Change_sessions",isDocsHomePage:!1,title:"Change sessions",description:"Actions can change the state of the system in which they are executed. It is not always desirable to write these changes directly to the database, both from the perspective of integrity and from the perspective of the ergonomics of the system. The platform therefore allows to accumulate these changes locally in change sessions.",source:"@site/docs/Change_sessions.md",sourceDirName:".",slug:"/Change_sessions",permalink:"/next/Change_sessions",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Change_sessions.md",tags:[],version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Change sessions"},sidebar:"learn",previous:{title:"Overview",permalink:"/next/Actions"},next:{title:"Overview",permalink:"/next/Action_operators_paradigm"}},l=[],h={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/next/Actions"},"Actions")," can change the state of the system in which they are executed. It is not always desirable to write these changes directly to the database, both from the perspective of integrity and from the perspective of the ergonomics of the system. The platform therefore allows to accumulate these changes locally in ",(0,o.kt)("em",{parentName:"p"},"change sessions.")," "),(0,o.kt)("p",null,"Changes in a session may be changes in ",(0,o.kt)("a",{parentName:"p",href:"/next/Data_properties_DATA"},"data")," properties, including local ones, as well as changes in ",(0,o.kt)("a",{parentName:"p",href:"/next/User_classes"},"classes")," of objects. The former are done by actions created using the ",(0,o.kt)("a",{parentName:"p",href:"/next/Property_change_CHANGE"},"property change operator"),", the latter using the ",(0,o.kt)("a",{parentName:"p",href:"/next/New_object_NEW"},"add"),"/",(0,o.kt)("a",{parentName:"p",href:"/next/Class_change_CHANGECLASS_DELETE"},"change")," object class operators."),(0,o.kt)("p",null,"Each time an action is executed, the ",(0,o.kt)("em",{parentName:"p"},"current")," session is determined depending on the execution context. For example, if the action is called as the handler of some event on a form (the most common case), then the session of that form will be the current session for it. The current session may also change when the ",(0,o.kt)("a",{parentName:"p",href:"/next/New_session_NEWSESSION_NESTEDSESSION"},"new session")," operator is used, for example."),(0,o.kt)("p",null,"If an action refers to some property during the execution, then its value is calculated taking into account the changes made in the current session of that action."),(0,o.kt)("p",null,"Two basic operations are supported for a session - ",(0,o.kt)("a",{parentName:"p",href:"/next/Apply_changes_APPLY"},"application")," and ",(0,o.kt)("a",{parentName:"p",href:"/next/Cancel_changes_CANCEL"},"cancellation")," ",(0,o.kt)("em",{parentName:"p"},"-")," as well as a set of operators for ",(0,o.kt)("a",{parentName:"p",href:"/next/Change_operators_SET_CHANGED_etc"},"working with changes")," (including getting a ",(0,o.kt)("a",{parentName:"p",href:"/next/Previous_value_PREV"},"previous value")," in the session)."),(0,o.kt)("p",null,'Note that change sessions are not thread safe, therefore when using operators that explicitly or implicitly perform actions in a new thread and do not block their execution flow, it is highly recommended not to access the current session after they are executed (such "multi-threaded" operators include the ',(0,o.kt)("a",{parentName:"p",href:"/next/NEWTHREAD_operator"},"new thread")," and ",(0,o.kt)("a",{parentName:"p",href:"/next/In_an_interactive_view_SHOW_DIALOG#flow"},"asynchronous")," ",(0,o.kt)("a",{parentName:"p",href:"/next/In_an_interactive_view_SHOW_DIALOG"},"form opening")," operators). In this case, it is recommended that you always create a new session."))}u.isMDXComponent=!0}}]);