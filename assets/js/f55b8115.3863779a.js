"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[93706],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=i,f=d["".concat(p,".").concat(u)]||d[u]||c[u]||r;return n?a.createElement(f,o(o({ref:t},m),{},{components:n})):a.createElement(f,o({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14831:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return s}});var a=n(83117),i=(n(67294),n(3905));const r={title:"ABSTRACT operator"},o=void 0,l={unversionedId:"ABSTRACT_action_operator",id:"ABSTRACT_action_operator",title:"ABSTRACT operator",description:"The ABSTRACT operator - creating an abstract action.",source:"@site/docs/ABSTRACT_action_operator.md",sourceDirName:".",slug:"/ABSTRACT_action_operator",permalink:"/next/ABSTRACT_action_operator",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/ABSTRACT_action_operator.md",tags:[],version:"current",lastUpdatedAt:1708525070,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"ABSTRACT operator"},sidebar:"learn",previous:{title:"{...} operator",permalink:"/next/Braces_operator"},next:{title:"ACTIVATE operator",permalink:"/next/ACTIVATE_operator"}},p={},s=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}],m={toc:s};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ABSTRACT")," operator - creating an ",(0,i.kt)("a",{parentName:"p",href:"/next/Action_extension"},"abstract action"),". "),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ABSTRACT [type [exclusionType]] [FIRST | LAST] [CHECKED] (argClassName1, ..., argClassNameN) \n")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ABSTRACT")," operator creates an abstract action, the implementation of which can be defined later (for example, in other ",(0,i.kt)("a",{parentName:"p",href:"/next/Modules"},"modules")," dependent on the module containing the ",(0,i.kt)("inlineCode",{parentName:"p"},"ABSTRACT")," action). Implementations are added to the action using the ",(0,i.kt)("a",{parentName:"p",href:"/next/ACTION+_statement"},(0,i.kt)("inlineCode",{parentName:"a"},"ACTION+")," statement"),". When executing ",(0,i.kt)("inlineCode",{parentName:"p"},"MULTI")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"CASE")," type abstract actions, their matching implementation is selected and executed. The selection of the matching implementation depends on the selection conditions that are defined when adding implementations, and on the ",(0,i.kt)("inlineCode",{parentName:"p"},"ABSTRACT")," operator type."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CASE")," - a general case. The selection condition will be explicitly specified in the implementation using the ",(0,i.kt)("a",{parentName:"li",href:"/next/ACTION+_statement"},(0,i.kt)("inlineCode",{parentName:"a"},"WHEN")," block"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MULTI")," - ",(0,i.kt)("a",{parentName:"li",href:"/next/Branching_CASE_IF_MULTI#poly"},"a polymorphic form"),". The selection condition is that the parameters match the implementation ",(0,i.kt)("a",{parentName:"li",href:"/next/CLASS_operator"},"signature"),". This type is the default type and need not be explicitly specified.")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/next/Branching_CASE_IF_MULTI#exclusive"},"type of mutual exclusion")," of an operator determines whether several conditions for the implementation of an abstract action can simultaneously be met with a certain set of parameters. The ",(0,i.kt)("inlineCode",{parentName:"p"},"EXCLUSIVE")," type indicates that implementation conditions cannot be met simultaneously. The ",(0,i.kt)("inlineCode",{parentName:"p"},"OVERRIDE")," type allows several simultaneously fulfilled conditions, while which implementation is ultimately selected is determined by the keywords ",(0,i.kt)("inlineCode",{parentName:"p"},"FIRST")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"LAST"),"."),(0,i.kt)("p",null,"When performing a ",(0,i.kt)("inlineCode",{parentName:"p"},"LIST")," abstract action, all implementations are executed sequentially. The implementation order is determined by the keywords ",(0,i.kt)("inlineCode",{parentName:"p"},"FIRST")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"LAST"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ABSTRACT")," operator cannot be used inside the ",(0,i.kt)("a",{parentName:"p",href:"/next/Braces_operator"},(0,i.kt)("inlineCode",{parentName:"a"},"{...}")," operator"),"."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"type")),(0,i.kt)("p",{parentName:"li"},"  Type of abstract action. It is specified by one of these keywords:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CASE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MULTI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LIST"))),(0,i.kt)("p",{parentName:"li"},"The default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"MULTI"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"exclusionType")),(0,i.kt)("p",{parentName:"li"},"  Type of mutual exclusion. One of these keywords: ",(0,i.kt)("inlineCode",{parentName:"p"},"EXCLUSIVE")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"OVERRIDE"),". Unless explicitly specified, in a ",(0,i.kt)("inlineCode",{parentName:"p"},"MULTI")," abstract action the default type of mutual exclusion is ",(0,i.kt)("inlineCode",{parentName:"p"},"EXCLUSIVE"),", and in a ",(0,i.kt)("inlineCode",{parentName:"p"},"CASE")," action the default type is ",(0,i.kt)("inlineCode",{parentName:"p"},"OVERRIDE"),". For a ",(0,i.kt)("inlineCode",{parentName:"p"},"LIST")," abstract action the type of mutual exclusion is not specified.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"FIRST")," | ",(0,i.kt)("inlineCode",{parentName:"p"},"LAST")),(0,i.kt)("p",{parentName:"li"},"  Keywords. When the word ",(0,i.kt)("inlineCode",{parentName:"p"},"FIRST")," is specified, implementations will be added to the top of the implementations list; when ",(0,i.kt)("inlineCode",{parentName:"p"},"LAST")," is specified, implementations will be added to the end of the implementations list. Unless specified, the default is ",(0,i.kt)("inlineCode",{parentName:"p"},"FIRST")," (except ",(0,i.kt)("inlineCode",{parentName:"p"},"LIST"),", where the default is ",(0,i.kt)("inlineCode",{parentName:"p"},"LAST"),")"),(0,i.kt)("p",{parentName:"li"},"  For abstract actions such as ",(0,i.kt)("inlineCode",{parentName:"p"},"CASE")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"MULTI")," with the type of mutual exclusion ",(0,i.kt)("inlineCode",{parentName:"p"},"OVERRIDE"),", specifying ",(0,i.kt)("inlineCode",{parentName:"p"},"FIRST")," will mean that of the matching implementations, the last one added will be executed. For actions such as ",(0,i.kt)("inlineCode",{parentName:"p"},"LIST"),", specifying ",(0,i.kt)("inlineCode",{parentName:"p"},"FIRST")," will mean that implementations will be executed in the reverse order of their addition. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"CHECKED")),(0,i.kt)("p",{parentName:"li"},"  Keyword. If specified, the platform will automatically check that at least one implementation is defined for all descendants of the argument classes (or exactly one, if the conditions are mutually exclusive).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"argClassName1, ..., argClassNameN")),(0,i.kt)("p",{parentName:"li"},"  List of class names of property arguments. Each name is defined by a ",(0,i.kt)("a",{parentName:"p",href:"/next/IDs#classid"},"class ID"),"."))),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"exportXls 'Export to Excel' ABSTRACT CASE (Order); // ABSTRACT CASE OVERRIDE LAST is created         \nexportXls (Order o) + WHEN name(currency(o)) == 'USD' THEN {\n    MESSAGE 'Export USD not implemented';\n}\n\nCLASS Task;\nrun 'Execute' ABSTRACT (Task); // ABSTRACT MULTI EXCLUSIVE\n\nCLASS Task1 : Task;\nname = DATA STRING[100] (Task);\nrun (Task1 t) + {\n    MESSAGE 'Run Task1 ' + name(t);\n}\n\n\nCLASS OrderDetail;\nprice = DATA NUMERIC[14,2] (OrderDetail);\n\nCLASS InvoiceDetail;\nprice = DATA NUMERIC[14,2] (InvoiceDetail);\nfill ABSTRACT LIST (OrderDetail, InvoiceDetail); // ABSTRACT LIST LAST\n\nfill (OrderDetail od, InvoiceDetail id) + {\n    price(id) <- price(od);\n}\n")))}c.isMDXComponent=!0}}]);