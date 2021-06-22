(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[1853],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1325:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return c},default:function(){return u}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),l={title:"How-to: EXEC"},i={unversionedId:"How-to_EXEC",id:"How-to_EXEC",isDocsHomePage:!1,title:"How-to: EXEC",description:"Example 1",source:"@site/docs/How-to_EXEC.md",sourceDirName:".",slug:"/How-to_EXEC",permalink:"/next/How-to_EXEC",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/How-to_EXEC.md",version:"current",lastUpdatedAt:1622042248,formattedLastUpdatedAt:"5/26/2021",frontMatter:{title:"How-to: EXEC"},sidebar:"learn",previous:{title:"How-to: CHANGE",permalink:"/next/How-to_CHANGE"},next:{title:"How-to: NEW",permalink:"/next/How-to_NEW"}},c=[{value:"Example 1",id:"example-1",children:[{value:"Task",id:"task",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Task",id:"task-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]}],p={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"example-1"},"Example 1"),(0,o.kt)("h3",{id:"task"},"Task"),(0,o.kt)("p",null,"We have a category of books for which a title, a numerical code, and a start date for sales are defined."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Category 'Category';\n\nname 'Name' = DATA ISTRING[50] (Category);\nid 'Code' = DATA INTEGER (Category);\nsaleDate 'Sales start date' = DATA DATE (Category);\n")),(0,o.kt)("p",null,"We need to create an action that creates 3 new predefined categories."),(0,o.kt)("h3",{id:"solution"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"createCategory 'Create category' (ISTRING[50] name, INTEGER id, DATE saleDate)  {\n    NEW c = Category {\n        name(c) <- name;\n        id(c) <- id;\n        saleDate(c) <- saleDate;\n    }\n}\n\ncreate3Categories 'Create 3 categories' ()  {\n    createCategory('Category 1', 1, 2010_02_14);\n    createCategory('Category 2', 2, 2011_03_08);\n    createCategory('Category 3', 3, 2014_07_01);\n}\n")),(0,o.kt)("h2",{id:"example-2"},"Example 2"),(0,o.kt)("h3",{id:"task-1"},"Task"),(0,o.kt)("p",null,"Similar to ",(0,o.kt)("a",{parentName:"p",href:"#example-1"},(0,o.kt)("strong",{parentName:"a"},"Example 1")),', except that each category has a "parent".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"parent 'Parent' = DATA Category (Category); // if the value is NULL, then there is no parent\n")),(0,o.kt)("p",null,"We need to create an action that fills category depth for each category."),(0,o.kt)("h3",{id:"solution-1"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"depth = DATA INTEGER (Category);\nfillDepth (Category c, INTEGER depth)  {\n    FOR parent(Category i) == c DO {\n        depth(i) <- depth;\n        fillDepth(i, depth + 1);\n    }\n}\n\nrun()  {\n    fillDepth(NULL, 0);\n}\n")))}u.isMDXComponent=!0}}]);