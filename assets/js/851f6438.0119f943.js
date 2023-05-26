"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[5462],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},685:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var r=n(83117),a=(n(67294),n(3905));const o={title:"How-to: Property extension"},i=void 0,l={unversionedId:"How-to_Property_extension",id:"version-v5/How-to_Property_extension",title:"How-to: Property extension",description:"The classic approach for implementing polymorphism can look as follows:",source:"@site/versioned_docs/version-v5/How-to_Property_extension.md",sourceDirName:".",slug:"/How-to_Property_extension",permalink:"/How-to_Property_extension",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/How-to_Property_extension.md",tags:[],version:"v5",lastUpdatedAt:1685108136,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{title:"How-to: Property extension"},sidebar:"learn",previous:{title:"How-to: Class extension",permalink:"/How-to_Class_extension"},next:{title:"How-to: Action extension",permalink:"/How-to_Action_extension"}},c={},p=[],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The classic approach for implementing polymorphism can look as follows:"),(0,a.kt)("p",null,"Let's create an abstract class ",(0,a.kt)("inlineCode",{parentName:"p"},"Shape")," with an abstract property ",(0,a.kt)("inlineCode",{parentName:"p"},"square"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS ABSTRACT Shape;\nsquare 'Area' = ABSTRACT DOUBLE (Shape);\n")),(0,a.kt)("p",null,"Now, let's create classes ",(0,a.kt)("inlineCode",{parentName:"p"},"Rectangle")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Circle")," inherited from ",(0,a.kt)("inlineCode",{parentName:"p"},"Shape"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Rectangle : Shape;\nwidth 'Width' = DATA DOUBLE (Rectangle);\nheight 'Height' = DATA DOUBLE (Rectangle);\n\nCLASS Circle : Shape;\nradius 'Circle radius' = DATA DOUBLE (Circle);\n")),(0,a.kt)("p",null,"Define the implementation of the abstract property ",(0,a.kt)("inlineCode",{parentName:"p"},"square")," for the created classes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"square(rectangle) += width(rectangle) * height(rectangle);\nsquare(circle) += radius(circle) * radius(circle) * 3.14;\n")),(0,a.kt)("p",null,"Let's assume that we need to make it so that in certain cases we can override the method of calculating the area for the ",(0,a.kt)("inlineCode",{parentName:"p"},"Circle"),' class. In this case, we can use an abstract property, whose implementation can be changed in a different module, to add a kind of "entry point" to the line defining the implementation of area for a circle :'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"overSquareCircle 'Overridden area' = ABSTRACT DOUBLE (Circle);\nsquare(circle) += OVERRIDE overSquareCircle(circle), (radius(circle) * radius(circle) * 3.14);\n")),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"overSquareCircle")," property is not implemented in any module, its value will always be ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," and the base area calculation mechanism will be used. To change the calculation method to be used, you can define a different implementation in a certain ",(0,a.kt)("inlineCode",{parentName:"p"},"MyShape")," module."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"MODULE MyShape;\n\nREQUIRE Shape;\n\n// using a formula with higher accuracy\noverSquareCircle (circle) += radius(circle) * radius(circle) * 3.14159265359; \n")),(0,a.kt)("p",null,"Note that you can use any other expressions instead of the ",(0,a.kt)("a",{parentName:"p",href:"/OVERRIDE_operator"},(0,a.kt)("inlineCode",{parentName:"a"},"OVERRIDE")," operator"),". In particular, ",(0,a.kt)("a",{parentName:"p",href:"/Arithmetic_operators_+_-_etc"},(0,a.kt)("inlineCode",{parentName:"a"},"(+)")," and ",(0,a.kt)("inlineCode",{parentName:"a"},"(-)")," operators")," may be the most frequently used."))}u.isMDXComponent=!0}}]);