"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[11056],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=p(n),m=a,d=f["".concat(l,".").concat(m)]||f[m]||c[m]||i;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1108:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(83117),a=(n(67294),n(3905));const i={title:"Primitive input (INPUT)"},o=void 0,u={unversionedId:"Primitive_input_INPUT",id:"Primitive_input_INPUT",title:"Primitive input (INPUT)",description:"The  primitive input operator creates an action that requests the client to input a value of a builtin class. The user can cancel the input, for example by pressing the Esc key on the keyboard.",source:"@site/docs/Primitive_input_INPUT.md",sourceDirName:".",slug:"/Primitive_input_INPUT",permalink:"/next/Primitive_input_INPUT",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Primitive_input_INPUT.md",tags:[],version:"current",lastUpdatedAt:1624529220,formattedLastUpdatedAt:"Jun 24, 2021",frontMatter:{title:"Primitive input (INPUT)"},sidebar:"learn",previous:{title:"Value input",permalink:"/next/Value_input"},next:{title:"Value request (REQUEST)",permalink:"/next/Value_request_REQUEST"}},l={},p=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The  ",(0,a.kt)("em",{parentName:"p"},"primitive input")," operator creates an ",(0,a.kt)("a",{parentName:"p",href:"/next/Actions"},"action")," that requests the client to ",(0,a.kt)("a",{parentName:"p",href:"/next/Value_input"},"input a value")," ",(0,a.kt)("a",{parentName:"p",href:"/next/Built-in_classes"},"of a builtin class"),". The user can ",(0,a.kt)("a",{parentName:"p",href:"/next/Value_input#result"},"cancel the input"),", for example by pressing the ",(0,a.kt)("inlineCode",{parentName:"p"},"Esc")," key on the keyboard."),(0,a.kt)("p",null,"As with other value input operators, this operator allows to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"specify ",(0,a.kt)("a",{parentName:"li",href:"/next/Value_input#initial"},"initial object values")),(0,a.kt)("li",{parentName:"ul"},"specify ",(0,a.kt)("a",{parentName:"li",href:"/next/Value_input#result"},"main and alternative")," actions. The first is called if the input was successfully completed, the second if not (i.e. if the input was canceled)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/next/Value_input#initial"},"change")," a specified property")),(0,a.kt)("p",null,"This operator can only be used in property ",(0,a.kt)("a",{parentName:"p",href:"/next/Form_events#property"},"change event")," handlers on a form."),(0,a.kt)("h3",{id:"language"},"Language"),(0,a.kt)("p",null,"The syntax of the primitive input operator is described by the ",(0,a.kt)("a",{parentName:"p",href:"/next/INPUT_operator"},(0,a.kt)("inlineCode",{parentName:"a"},"INPUT")," operator"),"."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"changeCustomer (Order o)  {\n    INPUT s = STRING[100] DO {\n        customer(o) <- s;\n        IF s THEN\n            MESSAGE 'Customer changed to ' + s;\n        ELSE\n            MESSAGE 'Customer dropped';\n    }\n}\n\nFORM order\n    OBJECTS o = Order\n    PROPERTIES(o) customer ON CHANGE changeCustomer(o)\n;\n\ntestFile  {\n    INPUT f = FILE DO { // requesting a dialog to select a file\n        open(f); // opening the selected file\n    }\n}\n")))}c.isMDXComponent=!0}}]);