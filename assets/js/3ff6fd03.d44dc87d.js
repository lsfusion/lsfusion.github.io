(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[3922],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},49438:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(74034),a=n(79973),i=(n(67294),n(3905)),o=["components"],c={title:"Static objects"},s=void 0,l={unversionedId:"Static_objects",id:"Static_objects",isDocsHomePage:!1,title:"Static objects",description:"Static (or built-in) objects are objects that are defined by the developer and are automatically created on system startup (if they are not present in the system at launch time). Also, such objects are prohibited from being deleted.",source:"@site/docs/Static_objects.md",sourceDirName:".",slug:"/Static_objects",permalink:"/next/Static_objects",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Static_objects.md",tags:[],version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Static objects"},sidebar:"learn",previous:{title:"User classes",permalink:"/next/User_classes"},next:{title:"Aggregations",permalink:"/next/Aggregations"}},u=[{value:"Language",id:"language",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Static")," (or built-in) objects are objects that are defined by the developer and are automatically created on system startup (if they are not present in the system at launch time). Also, such objects are prohibited from being deleted."),(0,i.kt)("p",null,"When declaring a ",(0,i.kt)("a",{parentName:"p",href:"/next/User_classes"},"custom class"),", you can declare objects of this class which will be static objects. If you do this, this custom class automatically ",(0,i.kt)("a",{parentName:"p",href:"/next/User_classes#inheritance"},"inherits")," from class ",(0,i.kt)("inlineCode",{parentName:"p"},"System.StaticObject"),"."),(0,i.kt)("p",null,"For each static object of a custom class name and title must be specified. Later these name and title can be accessed using the ",(0,i.kt)("a",{parentName:"p",href:"/next/Properties"},"properties")," ",(0,i.kt)("inlineCode",{parentName:"p"},"System.staticName[System.StaticObject]")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"System.staticCaption[System.StaticObject]")," respectively. "),(0,i.kt)("p",null,"Static objects of ",(0,i.kt)("a",{parentName:"p",href:"/next/Built-in_classes"},"built-in classes")," are numbers, strings, date values, etc., used by the user in describing the logic."),(0,i.kt)("p",null,"Static objects can be used to create a limited set of objects of a certain class. Such a set can be used as an enumerated data type to provide a choice from a limited set of values. "),(0,i.kt)("h3",{id:"language"},"Language"),(0,i.kt)("p",null,"Static objects of custom classes are defined in the ",(0,i.kt)("a",{parentName:"p",href:"/next/CLASS_statement"},(0,i.kt)("inlineCode",{parentName:"a"},"CLASS")," statement")," in a block enclosed in braces."),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Direction 'Direction'\n{\n    north 'North',\n    east 'East',\n    south 'South',\n    west 'West'\n}\n\ndirection = DATA Direction ();\n\nshowDirection  {\n    MESSAGE staticName(direction());\n    MESSAGE staticCaption(direction());\n}\n\n// creating a form by choosing an object of Direction class\nFORM directions 'Directions'\n    OBJECTS d = Direction\n    PROPERTIES(d) READONLY staticCaption\n\n    LIST Direction OBJECT d\n;\n")))}d.isMDXComponent=!0}}]);