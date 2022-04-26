"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[10410],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7477:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],c={title:"Scheduler Block"},l=void 0,p={unversionedId:"Scheduler_block",id:"Scheduler_block",title:"Scheduler Block",description:"Scheduler blocks instructions FORM - a set of constructions controlling the scheduler in an interactive form view.",source:"@site/docs/Scheduler_block.md",sourceDirName:".",slug:"/Scheduler_block",permalink:"/next/Scheduler_block",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Scheduler_block.md",tags:[],version:"current",lastUpdatedAt:1650973486,formattedLastUpdatedAt:"4/26/2022",frontMatter:{title:"Scheduler Block"}},u=[{value:"Syntax",id:"syntax",children:[],level:3},{value:"Description.",id:"description",children:[],level:3},{value:"Parameters",id:"parameters",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],s={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Scheduler blocks ",(0,a.kt)("a",{parentName:"p",href:"/next/FORM_statement"},"instructions ",(0,a.kt)("inlineCode",{parentName:"a"},"FORM"))," - a set of constructions controlling the scheduler in an interactive form view."),(0,a.kt)("h3",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SCHEDULE PERIOD intPeriod FIXED? actionOperator\n")),(0,a.kt)("h3",{id:"description"},"Description."),(0,a.kt)("p",null,"The scheduler block allows you to specify a periodic action for a form. There can be an unlimited number of such blocks for a form."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"intPeriod"),"."),(0,a.kt)("p",{parentName:"li"},"The periodicity of the action in seconds.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"FIXED"),"."),(0,a.kt)("p",{parentName:"li"},"An option that means that the period to the next action is counted from the start of the current action. By default, the period is counted from the end of the current action.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"actionOperator"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/next/Action_operators"},"Context-sensitive action operator"),"."))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"someProperty = DATA STRING();\nFORM autoApplyForm\nPROPERTIES() someProperty\nSCHEDULE PERIOD 60 FIXED apply();\n;\n")))}d.isMDXComponent=!0}}]);