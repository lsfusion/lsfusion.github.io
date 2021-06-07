(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[10544],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74082:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={title:"Actions",sidebar_label:"Overview"},s={unversionedId:"Actions",id:"version-v4/Actions",isDocsHomePage:!1,title:"Actions",description:"An action is an element of the system that takes a set of objects (parameters) and uses them in one way or another to change the system state (that of the system in which the action is executed, as well as the state of any other external system).",source:"@site/versioned_docs/version-v4/Actions.md",sourceDirName:".",slug:"/Actions",permalink:"/Actions",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Actions.md",version:"v4",lastUpdatedAt:1623078033,formattedLastUpdatedAt:"6/7/2021",sidebar_label:"Overview",frontMatter:{title:"Actions",sidebar_label:"Overview"},sidebar:"version-v4/learn",previous:{title:"Distribution (UNGROUP)",permalink:"/Distribution_UNGROUP_"},next:{title:"Change sessions",permalink:"/Change_sessions"}},c=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An ",(0,o.kt)("em",{parentName:"p"},"action")," is an element of the system that takes a set of objects (",(0,o.kt)("em",{parentName:"p"},"parameters"),") and uses them in one way or another to change the system state (that of the system in which the action is executed, as well as the state of any other external system)."),(0,o.kt)("p",null,"The type and behavior of each action is determined by the ",(0,o.kt)("a",{parentName:"p",href:"/%D0%9Eperators"},"operator")," that creates the action."),(0,o.kt)("h3",{id:"language"},"Language"),(0,o.kt)("p",null,"To add a new action to the system, use the ",(0,o.kt)("a",{parentName:"p",href:"/ACTION_instruction"},(0,o.kt)("inlineCode",{parentName:"a"},"ACTION")," statement"),"."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"showMessage  { MESSAGE 'Hello World!'; }                                // action declaration\nloadImage 'Upload image'  ABSTRACT ( Item);\n")))}u.isMDXComponent=!0}}]);