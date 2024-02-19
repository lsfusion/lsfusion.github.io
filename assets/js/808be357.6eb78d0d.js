"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[17022],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6575:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var n=r(83117),a=(r(67294),r(3905));const o={title:"Groups of properties and actions"},i=void 0,p={unversionedId:"Groups_of_properties_and_actions",id:"Groups_of_properties_and_actions",title:"Groups of properties and actions",description:"The behavior of properties and actions in the context of working with groups is absolutely identical, therefore, in the rest of this section, we will use only the term property (the behavior for actions is completely similar).",source:"@site/docs/Groups_of_properties_and_actions.md",sourceDirName:".",slug:"/Groups_of_properties_and_actions",permalink:"/next/Groups_of_properties_and_actions",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Groups_of_properties_and_actions.md",tags:[],version:"current",lastUpdatedAt:1708349708,formattedLastUpdatedAt:"Feb 19, 2024",frontMatter:{title:"Groups of properties and actions"},sidebar:"learn",previous:{title:"Form structure",permalink:"/next/Form_structure"},next:{title:"Form views",permalink:"/next/Form_views"}},l={},s=[{value:"Builtin property groups",id:"builtin",level:3},{value:"Property groups usage",id:"property-groups-usage",level:3},{value:"Language",id:"language",level:3}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The behavior of properties and actions in the context of working with groups is absolutely identical, therefore, in the rest of this section, we will use only the term property (the behavior for actions is completely similar).")),(0,a.kt)("p",null,"All ",(0,a.kt)("a",{parentName:"p",href:"/next/Properties"},"properties")," in the system are divided into ",(0,a.kt)("em",{parentName:"p"},"property groups"),". In this case, all groups form a hierarchy in which each group can contain both properties and other property groups. The root group in this hierarchy is the ",(0,a.kt)("inlineCode",{parentName:"p"},"System.root")," group. All other groups are contained in some ",(0,a.kt)("em",{parentName:"p"},"parent group"),"."),(0,a.kt)("p",null,"Each property or action belongs directly to exactly one group, and also belongs to all the ancestors of that group. So, for example, all properties and actions in the system belong to the ",(0,a.kt)("inlineCode",{parentName:"p"},"System.root")," group."),(0,a.kt)("h3",{id:"builtin"},"Builtin property groups"),(0,a.kt)("p",null,"In addition to ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"System")," module, the following groups of properties and actions are created automatically:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"root"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"public"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"base"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"id")))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"private"))))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"All these groups (including ",(0,a.kt)("inlineCode",{parentName:"p"},"root"),") are not used in form display mechanisms (i.e. containers in the ",(0,a.kt)("a",{parentName:"p",href:"/next/Form_design#defaultDesign"},"default form design")," and elements of the ",(0,a.kt)("a",{parentName:"p",href:"/next/Structured_view#hierarchy"},"hierarchical")," import / export hierarchy are not created for them).")),(0,a.kt)("h3",{id:"property-groups-usage"},"Property groups usage"),(0,a.kt)("p",null,"Property groups are currently used in the following mechanisms:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When displaying forms:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"in the ",(0,a.kt)("a",{parentName:"li",href:"/next/Interactive_view"},"interactive")," view: you can specify for each group that a separate container must be created in the ",(0,a.kt)("a",{parentName:"li",href:"/next/Form_design#defaultDesign"},"default design"),". Accordingly, the hierarchy of containers in the default design will match the hierarchy of these property groups. That is, if it is specified for a group (or property) ",(0,a.kt)("inlineCode",{parentName:"li"},"A")," and property group ",(0,a.kt)("inlineCode",{parentName:"li"},"B")," that a container must be created, and group (or property) ",(0,a.kt)("inlineCode",{parentName:"li"},"A")," is a descendant of group ",(0,a.kt)("inlineCode",{parentName:"li"},"B"),", then the container of group (component of property) ",(0,a.kt)("inlineCode",{parentName:"li"},"A")," will be the descendant of the container of group ",(0,a.kt)("inlineCode",{parentName:"li"},"B"),"."),(0,a.kt)("li",{parentName:"ul"},"in the ",(0,a.kt)("a",{parentName:"li",href:"/next/Structured_view#hierarchy"},"hierarchical")," view: you can specify for each group that a separate intermediate tag must be created when the form is exported. Accordingly, the hierarchy of tags during export will match the hierarchy of property groups. That is, if it is specified for a group (or property) ",(0,a.kt)("inlineCode",{parentName:"li"},"A")," and property group ",(0,a.kt)("inlineCode",{parentName:"li"},"B")," that a tag needs to be created, and group (or property) ",(0,a.kt)("inlineCode",{parentName:"li"},"A")," is a descendant of group ",(0,a.kt)("inlineCode",{parentName:"li"},"B"),", then group (property) ",(0,a.kt)("inlineCode",{parentName:"li"},"A")," will be enclosed in the tag of group ",(0,a.kt)("inlineCode",{parentName:"li"},"B"),". "))),(0,a.kt)("li",{parentName:"ul"},"When automatically creating forms:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"All properties with one argument which are included in the ",(0,a.kt)("inlineCode",{parentName:"li"},"System.base")," group will be displayed in the automatically generated dialog forms for ",(0,a.kt)("a",{parentName:"li",href:"/next/Interactive_view#edtClass"},"selecting/editing")," objects. "),(0,a.kt)("li",{parentName:"ul"},"All properties with one argument which are included in the ",(0,a.kt)("inlineCode",{parentName:"li"},"System.id")," group will be displayed in automatically generated ",(0,a.kt)("a",{parentName:"li",href:"/next/Constraints#message"},"message display forms")," on constraint violation."))),(0,a.kt)("li",{parentName:"ul"},"In the security policy:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"You can set a security policy for a group as a whole (and not for each property individually).")))),(0,a.kt)("h3",{id:"language"},"Language"),(0,a.kt)("p",null,"To add a new property/action group to the system, use the ",(0,a.kt)("a",{parentName:"p",href:"/next/GROUP_statement"},(0,a.kt)("inlineCode",{parentName:"a"},"GROUP")," statement"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"GROUP base : root; // The caption of this group will be 'base'\nGROUP local 'Local properties'; // The parent group of local will be System.private\n")))}c.isMDXComponent=!0}}]);