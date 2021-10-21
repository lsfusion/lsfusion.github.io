(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[72419],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(r),m=a,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||o;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},44652:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return f}});var n=r(74034),a=r(79973),o=(r(67294),r(3905)),i=["components"],s={title:"Property signature (CLASS)"},p=void 0,c={unversionedId:"Property_signature_CLASS",id:"version-v4/Property_signature_CLASS",isDocsHomePage:!1,title:"Property signature (CLASS)",description:"The signature operator creates a property which determines whether, in terms of classes, a specified property can have a non-NULL value for the arguments passed or not. In fact, this operator deduces possible classes of a given property from its semantics, after which it uses logical operators and the classification operator to create the required property.",source:"@site/versioned_docs/version-v4/Property_signature_CLASS.md",sourceDirName:".",slug:"/Property_signature_CLASS",permalink:"/Property_signature_CLASS",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Property_signature_CLASS.md",tags:[],version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Property signature (CLASS)"},sidebar:"version-v4/learn",previous:{title:"Classification (IS/AS)",permalink:"/Classification_IS_AS"},next:{title:"Selection (CASE, IF, MULTI, OVERRIDE, EXCLUSIVE)",permalink:"/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE"}},l=[{value:"Language",id:"language",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],u={toc:l};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The signature operator creates a ",(0,o.kt)("a",{parentName:"p",href:"/Properties"},"property")," which determines whether, in terms of ",(0,o.kt)("a",{parentName:"p",href:"/Classes"},"classes"),", a specified property can have a non-",(0,o.kt)("inlineCode",{parentName:"p"},"NULL")," value for the arguments passed or not. In fact, this operator deduces possible classes of a given property from its semantics, after which it uses ",(0,o.kt)("a",{parentName:"p",href:"/Logical_operators_AND_OR_NOT_XOR"},"logical")," operators and the ",(0,o.kt)("a",{parentName:"p",href:"/Classification_IS_AS"},"classification")," operator to create the required property."),(0,o.kt)("h3",{id:"language"},"Language"),(0,o.kt)("p",null,"To implement this operator, use the ",(0,o.kt)("a",{parentName:"p",href:"/CLASS_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"CLASS")," operator"),"."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS A;\na = ABSTRACT CASE STRING[100] (A);\n\nCLASS B : A;\nb = DATA STRING[100] (B);\n\na(B b) += WHEN CLASS(b(b)) THEN b(b); // is equivalent to WHEN b IS B THEN b(b)\n")))}f.isMDXComponent=!0}}]);