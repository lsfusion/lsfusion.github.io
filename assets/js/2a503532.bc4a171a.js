"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[83473],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=m(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},61220:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var r=n(83117),a=(n(67294),n(3905));const o={title:"@ statement"},i=void 0,p={unversionedId:"commat_statement",id:"version-v5/commat_statement",title:"@ statement",description:"The @ statement uses metacode.",source:"@site/versioned_docs/version-v5/commat_statement.md",sourceDirName:".",slug:"/commat_statement",permalink:"/commat_statement",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/commat_statement.md",tags:[],version:"v5",lastUpdatedAt:1685108136,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{title:"@ statement"},sidebar:"learn",previous:{title:"META statement",permalink:"/META_statement"},next:{title:"TABLE statement",permalink:"/TABLE_statement"}},s={},m=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}],l={toc:m};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@")," statement uses ",(0,a.kt)("a",{parentName:"p",href:"/Metaprogramming#metacode"},"metacode"),"."),(0,a.kt)("h3",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"@name(param1, ..., paramN);\n")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@")," statement generates code obtained from the metacode with the name ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),", replacing metacode parameters with the values of its own parameters and executing the special ",(0,a.kt)("a",{parentName:"p",href:"/Metaprogramming#concat"},(0,a.kt)("inlineCode",{parentName:"a"},"##")," and ",(0,a.kt)("inlineCode",{parentName:"a"},"###")," operations"),". "),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"name")),(0,a.kt)("p",{parentName:"li"},"  The name of the metacode used. ",(0,a.kt)("a",{parentName:"p",href:"/IDs#cid"},"Composite ID"),".  ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"param1, ..., paramN")),(0,a.kt)("p",{parentName:"li"},"  The list of statement parameters that will be substituted for the parameters of the metacode used. The parameters can be a ",(0,a.kt)("a",{parentName:"p",href:"/IDs#cid"},"composite ID"),", a ",(0,a.kt)("a",{parentName:"p",href:"/IDs#classid"},"class ID"),", a ",(0,a.kt)("a",{parentName:"p",href:"/Literals"},"literal")," or the ",(0,a.kt)("em",{parentName:"p"},"empty parameter")," when nothing is passed as a parameter."))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book;\n@objectProperties(book, INTEGER, 'Book');\n\nCLASS Flower;\n@objectProperties(flower, BPSTRING[100], ); // if the parameter is not passed, then it will be empty\n\nCLASS Table;\n@objectProperties(table, NUMERIC[14,2]);\n")))}c.isMDXComponent=!0}}]);