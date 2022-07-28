"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[87018],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(n),m=a,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},59801:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=n(83117),a=(n(67294),n(3905));const o={title:"Activation (ACTIVATE)"},i=void 0,c={unversionedId:"Activation_ACTIVATE",id:"version-v4/Activation_ACTIVATE",title:"Activation (ACTIVATE)",description:"The activation operator creates an action that activates one of three form elements:",source:"@site/versioned_docs/version-v4/Activation_ACTIVATE.md",sourceDirName:".",slug:"/Activation_ACTIVATE",permalink:"/Activation_ACTIVATE",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Activation_ACTIVATE.md",tags:[],version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Activation (ACTIVATE)"},sidebar:"version-v4/learn",previous:{title:"Focus operators",permalink:"/Focus_operators"},next:{title:"Activity (ACTIVE)",permalink:"/Activity_ACTIVE"}},l={},p=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"activation")," operator creates an ",(0,a.kt)("a",{parentName:"p",href:"/Actions"},"action")," that activates one of three form elements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Property - sets the focus on the specified ",(0,a.kt)("a",{parentName:"li",href:"/Properties"},"property")," on the form."),(0,a.kt)("li",{parentName:"ul"},"Tab \u2014 selects one of the tabs in the specified ",(0,a.kt)("a",{parentName:"li",href:"/Form_design#containers"},"tab panel"),"."),(0,a.kt)("li",{parentName:"ul"},"Form - activates the specified ",(0,a.kt)("a",{parentName:"li",href:"/Forms"},"form"),", if open. If one form was opened several times, the one opened first is activated.")),(0,a.kt)("h3",{id:"language"},"Language"),(0,a.kt)("p",null,"To create an action that activates a form element, use the ",(0,a.kt)("a",{parentName:"p",href:"/ACTIVATE_operator"},(0,a.kt)("inlineCode",{parentName:"a"},"ACTIVATE")," operator"),"."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"//Form with two tabs\nFORM myForm 'My form'\n    OBJECTS u = CustomUser\n    PROPERTIES(u) name\n\n    OBJECTS c = Chat\n    PROPERTIES(c) name\n;\n\nDESIGN myForm {\n    NEW tabbedPane FIRST {\n        type = TABBED;\n        NEW contacts {\n            caption = 'Contacts';\n            MOVE BOX(u);\n        }\n        NEW recent {\n            caption = 'Recent';\n            MOVE BOX(c);\n        }\n    }\n}\n\ntestAction()  {\n    ACTIVATE FORM myForm;\n    ACTIVATE TAB myForm.recent;\n}\n\nCLASS ReceiptDetail;\nbarcode = DATA STRING[30] (ReceiptDetail);\nquantity = DATA STRING[30] (ReceiptDetail);\n\nFORM POS\n    OBJECTS d = ReceiptDetail\n    PROPERTIES(d) barcode, quantityGrid = quantity\n;\n\ncreateReceiptDetail 'Add sales line'(STRING[30] barcode)  {\n    NEW d = ReceiptDetail {\n        barcode(d) <- barcode;\n        ACTIVATE PROPERTY POS.quantityGrid;\n    }\n}\n")))}u.isMDXComponent=!0}}]);