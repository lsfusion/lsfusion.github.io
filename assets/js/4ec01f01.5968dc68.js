(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[24281],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(n),f=a,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81256:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o={title:"Activity (ACTIVE)"},c={unversionedId:"Activity_ACTIVE",id:"version-v4/Activity_ACTIVE",isDocsHomePage:!1,title:"Activity (ACTIVE)",description:"The activity operator creates a property that determines whether one of the following form elements is active:",source:"@site/versioned_docs/version-v4/Activity_ACTIVE.md",sourceDirName:".",slug:"/Activity_ACTIVE",permalink:"/Activity_ACTIVE",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Activity_ACTIVE.md",version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Activity (ACTIVE)"},sidebar:"version-v4/learn",previous:{title:"Activation (ACTIVATE)",permalink:"/Activation_ACTIVATE"},next:{title:"Static view",permalink:"/Static_view"}},p=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:p};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"activity")," operator creates a property that determines whether one of the following form elements is active:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Property - whether the focus is on the specified ",(0,i.kt)("a",{parentName:"li",href:"/Properties"},"property")," on the form."),(0,i.kt)("li",{parentName:"ul"},"Tab - whether one of the tabs in the specified ",(0,i.kt)("a",{parentName:"li",href:"/Form_design#containers"},"tab panel")," is active."),(0,i.kt)("li",{parentName:"ul"},"Form - determines whether the specified ",(0,i.kt)("a",{parentName:"li",href:"/Forms"},"form")," is active for the user.")),(0,i.kt)("h3",{id:"language"},"Language"),(0,i.kt)("p",null,"To create a property that determines whether a tab is active, use the ",(0,i.kt)("a",{parentName:"p",href:"/ACTIVE_TAB_operator"},(0,i.kt)("inlineCode",{parentName:"a"},"ACTIVE TAB")," operator"),". Whether a form is active is determined by creating an action using the ",(0,i.kt)("a",{parentName:"p",href:"/ACTIVE_FORM_operator"},(0,i.kt)("inlineCode",{parentName:"a"},"ACTIVE FORM")," operator"),"."),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"//Form with two tabs\nFORM tabbedForm 'Tabbed form'\n    OBJECTS u = CustomUser\n    PROPERTIES(u) name\n\n    OBJECTS c = Chat\n    PROPERTIES(c) name\n;\n\nDESIGN tabbedForm {\n    NEW tabPane FIRST {\n        type = TABBED;\n        NEW contacts {\n            caption = 'Contacts';\n            MOVE BOX(u);\n        }\n        NEW recent {\n            caption = 'Recent';\n            MOVE BOX(c);\n        }\n    }\n}\n\n//If the 'Recent' tab is active\nrecentActive() = ACTIVE TAB tabbedForm.recent;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM exampleForm;\ntestActive  {\n    ACTIVE FORM exampleForm;\n    IF isActiveForm() THEN MESSAGE 'Example form is active';\n}\n")))}s.isMDXComponent=!0}}]);