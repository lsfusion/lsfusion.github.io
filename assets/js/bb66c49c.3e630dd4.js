(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[94872],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,p(p({ref:t},c),{},{components:n})):r.createElement(f,p({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var s=2;s<i;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},73034:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(74034),a=n(79973),i=(n(67294),n(3905)),p=["components"],o={title:"GROUP statement"},l=void 0,s={unversionedId:"GROUP_statement",id:"version-v4/GROUP_statement",isDocsHomePage:!1,title:"GROUP statement",description:"The GROUP statement creates a new property group.",source:"@site/versioned_docs/version-v4/GROUP_statement.md",sourceDirName:".",slug:"/GROUP_statement",permalink:"/GROUP_statement",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/GROUP_statement.md",tags:[],version:"v4",lastUpdatedAt:1624461640,formattedLastUpdatedAt:"6/23/2021",frontMatter:{title:"GROUP statement"},sidebar:"version-v4/learn",previous:{title:"Action options",permalink:"/Action_options"},next:{title:"Overview",permalink:"/ON_statement"}},c=[{value:"Syntax",id:"syntax",children:[],level:3},{value:"Description",id:"description",children:[],level:3},{value:"Parameters",id:"parameters",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],m={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUP")," statement creates a new ",(0,i.kt)("a",{parentName:"p",href:"/Groups_of_properties_and_actions"},"property group"),"."),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"GROUP name [caption] [EXTID extID] [: parentName];\n")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUP")," statement declares a new property group and adds it to the current ",(0,i.kt)("a",{parentName:"p",href:"/Modules"},"module"),".  "),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"name")),(0,i.kt)("p",{parentName:"li"},"  Group name. ",(0,i.kt)("a",{parentName:"p",href:"/IDs#id"},"Simple ID"),". The name must be unique within the current ",(0,i.kt)("a",{parentName:"p",href:"/Naming#namespace"},"namespace"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"caption")),(0,i.kt)("p",{parentName:"li"},"  Group caption. ",(0,i.kt)("a",{parentName:"p",href:"/Literals#strliteral"},"String literal"),". If the caption is not defined, the name of the group will be its caption.  ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"EXTID extID")),(0,i.kt)("p",{parentName:"li"},"  Specifying the name to be used to ",(0,i.kt)("a",{parentName:"p",href:"/Structured_view#extid"},"export/import")," this property group. Used only in the ",(0,i.kt)("a",{parentName:"p",href:"/Structured_view"},"structured")," view."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"extId")),(0,i.kt)("p",{parentName:"li"},"  String literal.")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"parentName")),(0,i.kt)("p",{parentName:"li"},"  Name of the parent group. ",(0,i.kt)("a",{parentName:"p",href:"/IDs#cid"},"\u0421omposite ID"),". If the name of the parent group is not defined, the ",(0,i.kt)("inlineCode",{parentName:"p"},"System.private")," group becomes the parent.  "))),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"GROUP base : root; // The caption of this group will be 'base'\nGROUP local 'Local properties'; // The parent group of local will be System.private\n")))}u.isMDXComponent=!0}}]);