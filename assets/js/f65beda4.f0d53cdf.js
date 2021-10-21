(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[42150],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13526:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(74034),a=n(79973),o=(n(67294),n(3905)),i=["components"],l={title:"How-to: Property extension"},c=void 0,s={unversionedId:"How-to_Property_extension",id:"version-v4/How-to_Property_extension",isDocsHomePage:!1,title:"How-to: Property extension",description:"The classic approach for implementing polymorphism can look as follows:",source:"@site/versioned_docs/version-v4/How-to_Property_extension.md",sourceDirName:".",slug:"/How-to_Property_extension",permalink:"/How-to_Property_extension",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/How-to_Property_extension.md",tags:[],version:"v4",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"7/7/2021",frontMatter:{title:"How-to: Property extension"},sidebar:"version-v4/learn",previous:{title:"How-to: Class extension",permalink:"/How-to_Class_extension"},next:{title:"How-to: Action extension",permalink:"/How-to_Action_extension"}},p=[],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The classic approach for implementing polymorphism can look as follows:"),(0,o.kt)("p",null,"Let's create an abstract class ",(0,o.kt)("inlineCode",{parentName:"p"},"Shape")," with an abstract property ",(0,o.kt)("inlineCode",{parentName:"p"},"square"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS ABSTRACT Shape;\nsquare 'Area' = ABSTRACT DOUBLE (Shape);\n")),(0,o.kt)("p",null,"Now, let's create classes ",(0,o.kt)("inlineCode",{parentName:"p"},"Rectangle")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Circle")," inherited from ",(0,o.kt)("inlineCode",{parentName:"p"},"Shape"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Rectangle : Shape;\nwidth 'Width' = DATA DOUBLE (Rectangle);\nheight 'Height' = DATA DOUBLE (Rectangle);\n\nCLASS Circle : Shape;\nradius 'Circle radius' = DATA DOUBLE (Circle);\n")),(0,o.kt)("p",null,"Define the implementation of the abstract property ",(0,o.kt)("inlineCode",{parentName:"p"},"square")," for the created classes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"square(rectangle) += width(rectangle) * height(rectangle);\nsquare(circle) += radius(circle) * radius(circle) * 3.14;\n")),(0,o.kt)("p",null,"Let's assume that we need to make it so that in certain cases we can override the method of calculating the area for the ",(0,o.kt)("inlineCode",{parentName:"p"},"Circle"),' class. In this case, we can use an abstract property, whose implementation can be changed in a different module, to add a kind of "entry point" to the line defining the implementation of area for a circle :'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"overSquareCircle 'Overridden area' = ABSTRACT DOUBLE (Circle);\nsquare(circle) += OVERRIDE overSquareCircle(circle), (radius(circle) * radius(circle) * 3.14);\n")),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"overSquareCircle")," property is not implemented in any module, its value will always be ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL")," and the base area calculation mechanism will be used. To change the calculation method to be used, you can define a different implementation in a certain ",(0,o.kt)("inlineCode",{parentName:"p"},"MyShape")," module."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"MODULE MyShape;\n\nREQUIRE Shape;\n\n// using a formula with higher accuracy\noverSquareCircle (circle) += radius(circle) * radius(circle) * 3.14159265359; \n")),(0,o.kt)("p",null,"Note that you can use any other expressions instead of the ",(0,o.kt)("a",{parentName:"p",href:"/OVERRIDE_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"OVERRIDE")," operator"),". In particular, ",(0,o.kt)("a",{parentName:"p",href:"/Arithmetic_operators_+_-_etc"},(0,o.kt)("inlineCode",{parentName:"a"},"(+)")," and ",(0,o.kt)("inlineCode",{parentName:"a"},"(-)")," operators")," may be the most frequently used."))}m.isMDXComponent=!0}}]);