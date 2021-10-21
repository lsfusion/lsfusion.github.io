(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[67772],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),l=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,f=u["".concat(o,".").concat(d)]||u[d]||c[d]||s;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<s;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94935:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return m},default:function(){return u}});var a=n(74034),r=n(79973),s=(n(67294),n(3905)),i=["components"],p={title:"+= statement"},o=void 0,l={unversionedId:"+=_statement",id:"+=_statement",isDocsHomePage:!1,title:"+= statement",description:"The += statement adds an implementation (selection option) to an abstract property.",source:"@site/docs/+=_statement.md",sourceDirName:".",slug:"/+=_statement",permalink:"/next/+=_statement",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/+=_statement.md",tags:[],version:"current",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"7/7/2021",frontMatter:{title:"+= statement"},sidebar:"learn",previous:{title:"EXTEND FORM statement",permalink:"/next/EXTEND_FORM_statement"},next:{title:"ACTION+ statement",permalink:"/next/ACTION+_statement"}},m=[{value:"Syntax",id:"syntax",children:[],level:3},{value:"Description",id:"description",children:[],level:3},{value:"Parameters",id:"parameters",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],c={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"+=")," statement adds an implementation (selection option) to an ",(0,s.kt)("a",{parentName:"p",href:"/next/Property_extension"},"abstract property"),"."),(0,s.kt)("h3",{id:"syntax"},"Syntax"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"propertyId (param1, ..., paramN) += implExpr;\npropertyId (param1, ..., paramN) += WHEN whenExpr THEN implExpr;\n")),(0,s.kt)("h3",{id:"description"},"Description"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"+=")," statement adds an implementation to an abstract property. The syntax for adding an implementation depends on the type of abstract property. If the abstract property is of type ",(0,s.kt)("inlineCode",{parentName:"p"},"CASE"),", then the implementation should be described using ",(0,s.kt)("inlineCode",{parentName:"p"},"WHEN ... THEN ...")," otherwise, the implementation should be described simply as a property. "),(0,s.kt)("h3",{id:"parameters"},"Parameters"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"propertyId")),(0,s.kt)("p",{parentName:"li"},"  ",(0,s.kt)("a",{parentName:"p",href:"/next/IDs#propertyid"},"ID")," of the abstract property. ")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"param1, ..., paramN")),(0,s.kt)("p",{parentName:"li"},"  List of parameters that will be used to define the implementation. Each element is a ",(0,s.kt)("a",{parentName:"p",href:"/next/IDs#paramid"},"typed parameter"),". The number of these parameters must be equal to the number of parameters of the abstract property. These parameters can then be used in expressions of the implementation of the abstract property and the selection condition of this implementation.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"implExpr")),(0,s.kt)("p",{parentName:"li"},"  ",(0,s.kt)("a",{parentName:"p",href:"/next/Expression"},"Expression")," whose value determines the implementation of an abstract property.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"whenExpr")),(0,s.kt)("p",{parentName:"li"},"  An expression whose value determines the selection condition of the implementation of an abstract property (action) that has type ",(0,s.kt)("inlineCode",{parentName:"p"},"CASE"),". "))),(0,s.kt)("h3",{id:"examples"},"Examples"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS ABSTRACT AClass;\nCLASS BClass : AClass;\nCLASS CClass : AClass;\nCLASS DClass : AClass;\n\nname(AClass a) = ABSTRACT BPSTRING[50] (AClass);\ninnerName(BClass b) = DATA BPSTRING[50] (BClass);\ninnerName(CClass c) = DATA BPSTRING[50] (CClass);\ninnerName(DClass d) = DATA BPSTRING[50] (DClass);\n\nname(BClass b) = 'B' + innerName(b);\nname(CClass c) = 'C' + innerName(c);\n\nname[AClass](BClass b) += name(b);\n// Here name[AClass] will be found on the left, because the search goes only among abstract properties, \n// and on the right name[CClass] will be found\nname(CClass c) += name(c); \nname(DClass d) += 'DClass' + innerName(d) IF d IS DClass;\n")))}u.isMDXComponent=!0}}]);