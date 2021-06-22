(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[26243],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(d,p(p({ref:t},s),{},{components:r})):n.createElement(d,p({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},55137:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return i},toc:function(){return c},default:function(){return s}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),p={title:"ACTIVE TAB operator"},i={unversionedId:"ACTIVE_TAB_operator",id:"ACTIVE_TAB_operator",isDocsHomePage:!1,title:"ACTIVE TAB operator",description:"The ACTIVE TAB operator creates a property that checks if specified tab is active.",source:"@site/docs/ACTIVE_TAB_operator.md",sourceDirName:".",slug:"/ACTIVE_TAB_operator",permalink:"/next/ACTIVE_TAB_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/ACTIVE_TAB_operator.md",version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"ACTIVE TAB operator"},sidebar:"learn",previous:{title:"ABSTRACT operator",permalink:"/next/ABSTRACT_operator"},next:{title:"AGGR operator",permalink:"/next/AGGR_operator"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:c};function s(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ACTIVE TAB")," operator creates a ",(0,o.kt)("a",{parentName:"p",href:"/next/Properties"},"property")," that checks if specified tab is ",(0,o.kt)("a",{parentName:"p",href:"/next/Activity_ACTIVE"},"active"),"."),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ACTIVE TAB formName.componentSelector\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ACTIVE TAB")," operator creates a property that returns ",(0,o.kt)("inlineCode",{parentName:"p"},"TRUE")," if the specified tab is active on a ",(0,o.kt)("a",{parentName:"p",href:"/next/Forms"},"form"),". "),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"formName")),(0,o.kt)("p",{parentName:"li"},"  Form name. ",(0,o.kt)("a",{parentName:"p",href:"/next/IDs#cid-broken"},"Composite ID"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"componentSelector"),"  "),(0,o.kt)("p",{parentName:"li"},"  Design component ",(0,o.kt)("a",{parentName:"p",href:"/next/DESIGN_statement#selector-broken"},"selector"),". The component must be a tab in the tab panel."))),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"//Form with two tabs\nFORM tabbedForm 'Tabbed form'\n    OBJECTS u = CustomUser\n    PROPERTIES(u) name\n\n    OBJECTS c = Chat\n    PROPERTIES(c) name\n;\n\nDESIGN tabbedForm {\n    NEW tabPane FIRST {\n        type = TABBED;\n        NEW contacts {\n            caption = 'Contacts';\n            MOVE BOX(u);\n        }\n        NEW recent {\n            caption = 'Recent';\n            MOVE BOX(c);\n        }\n    }\n}\n\n//If the 'Recent' tab is active\nrecentActive() = ACTIVE TAB tabbedForm.recent;\n")))}s.isMDXComponent=!0}}]);