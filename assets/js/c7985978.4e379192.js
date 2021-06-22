(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[46912],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10174:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return l},default:function(){return s}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o={title:"Event description block"},p={unversionedId:"Event_description_block",id:"Event_description_block",isDocsHomePage:!1,title:"Event description block",description:"Event description block describes an event in different statements.",source:"@site/docs/Event_description_block.md",sourceDirName:".",slug:"/Event_description_block",permalink:"/next/Event_description_block",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Event_description_block.md",version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Event description block"},sidebar:"learn",previous:{title:"ON statement",permalink:"/next/ON_statement"},next:{title:"WHEN statement",permalink:"/next/WHEN_statement"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Parameters",id:"parameters",children:[]}],c={toc:l};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Event description block")," describes an ",(0,i.kt)("a",{parentName:"p",href:"/next/Events"},"event")," in different statements."),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[GLOBAL | LOCAL] [FORMS formName1, ..., formNameN] [GOAFTER propertyId1, ..., propertyIdM]\n")),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"GLOBAL")),(0,i.kt)("p",{parentName:"li"},"  The keyword specifying that the described event will be global. This is the default behavior.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"LOCAL")),(0,i.kt)("p",{parentName:"li"},"  The keyword specifying that the described event will be local.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"formName1, ..., formNameN")),(0,i.kt)("p",{parentName:"li"},"  A list of names of the  ",(0,i.kt)("a",{parentName:"p",href:"/next/Forms"},"forms")," in which the event will occur. Each element of the list is a  ",(0,i.kt)("a",{parentName:"p",href:"/next/IDs#cid-broken"},"composite ID"),". If the list is not defined, the event will occur in all forms.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"propertyId1, ..., propertyIdM")),(0,i.kt)("p",{parentName:"li"},"  List of ",(0,i.kt)("a",{parentName:"p",href:"/next/IDs#propertyid-broken"},"property IDs"),". This list means that all event handlers that change one of the specified properties must be ",(0,i.kt)("a",{parentName:"p",href:"/next/Events#order-broken"},"executed earlier")," than the handlers that will be defined in the statement for which this event description block is being defined."))))}s.isMDXComponent=!0}}]);