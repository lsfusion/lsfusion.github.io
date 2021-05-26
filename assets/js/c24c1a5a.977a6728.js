(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[48935],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(i,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(f,p(p({ref:t},u),{},{components:r})):n.createElement(f,p({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,p[1]=c;for(var l=2;l<o;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},16991:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return c},toc:function(){return i},default:function(){return u}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),p={title:"REQUEST operator"},c={unversionedId:"REQUEST_operator",id:"REQUEST_operator",isDocsHomePage:!1,title:"REQUEST operator",description:"The REQUEST operator creates an action that requests a value.",source:"@site/docs/REQUEST_operator.md",sourceDirName:".",slug:"/REQUEST_operator",permalink:"/next/REQUEST_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/REQUEST_operator.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",frontMatter:{title:"REQUEST operator"},sidebar:"learn",previous:{title:"READ operator",permalink:"/next/READ_operator"},next:{title:"RETURN",permalink:"/next/RETURN"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:i};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"REQUEST")," operator creates an ",(0,o.kt)("a",{parentName:"p",href:"/next/Actions"},"action")," that ",(0,o.kt)("a",{parentName:"p",href:"/next/Value_request_REQUEST_"},"requests a value"),"."),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"REQUEST requestAction \nDO doAction [ELSE elseAction]\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"REQUEST")," operator creates an action that allows the separation of a request for a value from its handling."),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"requestAction")),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"/next/Action_operator#contextdependent"},"context-dependent action operator")," that requests a value."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"doAction")),(0,o.kt)("p",null,"A context-dependent action operator that is executed if the input was completed successfully."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"elseAction")),(0,o.kt)("p",null,"A context-dependent action operator that is executed if the input was ",(0,o.kt)("a",{parentName:"p",href:"/next/Value_input#result"},"cancelled"),"."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"\nrequestCustomer (Order o)  {\n    LOCAL resultValue = STRING[100] ();\n    REQUEST {\n        ASK 'Choose from list?' DO\n            DIALOG customers OBJECTS c = resultValue() CHANGE;\n        ELSE\n            INPUT = resultValue() CHANGE;\n    } DO\n        customer(o) <- resultValue();\n}\n\nFORM request\n    OBJECTS o = Order\n    PROPERTIES(o) customer ON CHANGE requestCustomer(o) // for example, group adjustment will be performed\n;\n")))}u.isMDXComponent=!0}}]);