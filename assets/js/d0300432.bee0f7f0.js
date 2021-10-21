(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[59973],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=l(r),d=a,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},57373:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return f}});var n=r(74034),a=r(79973),o=(r(67294),r(3905)),i=["components"],s={title:"Classification (IS/AS)"},p=void 0,l={unversionedId:"Classification_IS_AS",id:"Classification_IS_AS",isDocsHomePage:!1,title:"Classification (IS/AS)",description:"Classification operators create properties that determine whether an object belongs to the class specified. If the property argument does not belong to the class specified in the operator, the property returns NULL. Otherwise, the operator IS returns TRUE, and the operator AS returns the object passed as an argument.",source:"@site/docs/Classification_IS_AS.md",sourceDirName:".",slug:"/Classification_IS_AS",permalink:"/next/Classification_IS_AS",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Classification_IS_AS.md",tags:[],version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Classification (IS/AS)"},sidebar:"learn",previous:{title:"Overview",permalink:"/next/Class_operators"},next:{title:"Property signature (CLASS)",permalink:"/next/Property_signature_CLASS"}},c=[{value:"Language",id:"language",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],u={toc:c};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Classification")," operators create ",(0,o.kt)("a",{parentName:"p",href:"/next/Properties"},"properties")," that determine whether an object belongs to the ",(0,o.kt)("a",{parentName:"p",href:"/next/Classes"},"class")," specified. If the property argument does not belong to the class specified in the operator, the property returns ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL"),". Otherwise, the operator ",(0,o.kt)("inlineCode",{parentName:"p"},"IS")," returns ",(0,o.kt)("inlineCode",{parentName:"p"},"TRUE"),", and the operator ",(0,o.kt)("inlineCode",{parentName:"p"},"AS")," returns the object passed as an argument."),(0,o.kt)("h3",{id:"language"},"Language"),(0,o.kt)("p",null,"To implement classification operators, ",(0,o.kt)("a",{parentName:"p",href:"/next/IS_AS_operators"},(0,o.kt)("inlineCode",{parentName:"a"},"IS")," and ",(0,o.kt)("inlineCode",{parentName:"a"},"AS")," operators")," are used. "),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"asOrder(object) = object AS Order;\n\nperson = DATA Human (Order);\nisMale (Order o) = person(o) IS Male;\n")))}f.isMDXComponent=!0}}]);