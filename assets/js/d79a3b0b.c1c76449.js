(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[11056],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),f=a,d=m["".concat(u,".").concat(f)]||m[f]||s[f]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17713:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o={title:"Primitive input (INPUT)"},p={unversionedId:"Primitive_input_INPUT",id:"Primitive_input_INPUT",isDocsHomePage:!1,title:"Primitive input (INPUT)",description:"The  primitive input operator creates an action that requests the client to input a value of a builtin class. The user can cancel the input, for example by pressing the Esc key on the keyboard.",source:"@site/docs/Primitive_input_INPUT.md",sourceDirName:".",slug:"/Primitive_input_INPUT",permalink:"/next/Primitive_input_INPUT",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Primitive_input_INPUT.md",version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Primitive input (INPUT)"},sidebar:"learn",previous:{title:"Value input",permalink:"/next/Value_input"},next:{title:"Value request (REQUEST)",permalink:"/next/Value_request_REQUEST"}},u=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The  ",(0,i.kt)("em",{parentName:"p"},"primitive input")," operator creates an ",(0,i.kt)("a",{parentName:"p",href:"/next/Actions"},"action")," that requests the client to ",(0,i.kt)("a",{parentName:"p",href:"/next/Value_input"},"input a value")," ",(0,i.kt)("a",{parentName:"p",href:"/next/Built-in_classes"},"of a builtin class"),". The user can ",(0,i.kt)("a",{parentName:"p",href:"/next/Value_input#result"},"cancel the input"),", for example by pressing the ",(0,i.kt)("inlineCode",{parentName:"p"},"Esc")," key on the keyboard."),(0,i.kt)("p",null,"As with other value input operators, this operator allows to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"specify ",(0,i.kt)("a",{parentName:"li",href:"/next/Value_input#initial"},"initial object values")),(0,i.kt)("li",{parentName:"ul"},"specify ",(0,i.kt)("a",{parentName:"li",href:"/next/Value_input#result"},"main and alternative")," actions. The first is called if the input was successfully completed, the second if not (i.e. if the input was canceled)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/next/Value_input#initial"},"change")," a specified property")),(0,i.kt)("p",null,"This operator can only be used in property  ",(0,i.kt)("a",{parentName:"p",href:"/next/Form_events#property-broken"},"change event")," handlers on a form."),(0,i.kt)("h3",{id:"language"},"Language"),(0,i.kt)("p",null,"The syntax of the primitive input operator is described by the ",(0,i.kt)("a",{parentName:"p",href:"/next/INPUT_operator"},(0,i.kt)("inlineCode",{parentName:"a"},"INPUT")," operator"),"."),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"changeCustomer (Order o)  {\n    INPUT s = STRING[100] DO {\n        customer(o) <- s;\n        IF s THEN\n            MESSAGE 'Customer changed to ' + s;\n        ELSE\n            MESSAGE 'Customer dropped';\n    }\n}\n\nFORM order\n    OBJECTS o = Order\n    PROPERTIES(o) customer ON CHANGE changeCustomer(o)\n;\n\ntestFile  {\n    INPUT f = FILE DO { // requesting a dialog to select a file\n        open(f); // opening the selected file\n    }\n}\n")))}c.isMDXComponent=!0}}]);