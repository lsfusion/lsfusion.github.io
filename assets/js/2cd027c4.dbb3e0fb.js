(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[50072],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43881:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),a={title:"Empty statement"},s={unversionedId:"Empty_instruction",id:"version-v4/Empty_instruction",isDocsHomePage:!1,title:"Empty statement",description:"Empty statement - a special statement that consists of a single semicolon.",source:"@site/versioned_docs/version-v4/Empty_instruction.md",sourceDirName:".",slug:"/Empty_instruction",permalink:"/Empty_instruction",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Empty_instruction.md",version:"v4",lastUpdatedAt:1623078033,formattedLastUpdatedAt:"6/7/2021",frontMatter:{title:"Empty statement"},sidebar:"version-v4/learn",previous:{title:"AFTER statement",permalink:"/AFTER_instruction"},next:{title:"Coding conventions",permalink:"/Coding_conventions"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]}],l={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Empty statement")," - a special statement that consists of a single semicolon."),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},";\n")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"An empty statement is intended to prevent extra semicolons from being diagnosed as an error. For example, statements in which the last character is a closing brace should not end with a semicolon. If a semicolon is inserted, however, no error will be thrown, since this will be interpreted as two different statements. "),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Result {\n    yes 'Yes',\n    no 'No'\n};  // semicolon is not needed here, but its presence is not an error\n\n;;;; // this is valid lsFusion code\n")))}p.isMDXComponent=!0}}]);