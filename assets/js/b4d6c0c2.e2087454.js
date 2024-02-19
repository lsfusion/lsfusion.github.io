"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[15029],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(r),f=n,m=d["".concat(s,".").concat(f)]||d[f]||c[f]||o;return r?a.createElement(m,i(i({ref:t},u),{},{components:r})):a.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},98759:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return l}});var a=r(83117),n=(r(67294),r(3905));const o={title:"Data export (EXPORT)"},i=void 0,p={unversionedId:"Data_export_EXPORT",id:"version-v4/Data_export_EXPORT",title:"Data export (EXPORT)",description:"The data export operator creates an action that reads values of the specified properties for all object collections where the value of the specified property (condition) is not NULL, and then saves these values to a file in a specified format.",source:"@site/versioned_docs/version-v4/Data_export_EXPORT.md",sourceDirName:".",slug:"/Data_export_EXPORT",permalink:"/v4/Data_export_EXPORT",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Data_export_EXPORT.md",tags:[],version:"v4",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"Jul 7, 2021",frontMatter:{title:"Data export (EXPORT)"},sidebar:"learn",previous:{title:"Data import (IMPORT)",permalink:"/v4/Data_import_IMPORT"},next:{title:"Send mail (EMAIL)",permalink:"/v4/Send_mail_EMAIL"}},s={},l=[{value:"General case",id:"general-case",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}],u={toc:l};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("em",{parentName:"p"},"data export")," operator creates an ",(0,n.kt)("a",{parentName:"p",href:"/v4/Actions"},"action")," that reads values of the specified properties for all object collections where the value of the specified property (",(0,n.kt)("em",{parentName:"p"},"condition"),") is not ",(0,n.kt)("inlineCode",{parentName:"p"},"NULL"),", and then saves these values to a file in a specified ",(0,n.kt)("a",{parentName:"p",href:"/v4/Structured_view"},"format"),". "),(0,n.kt)("p",null,"The condition is optional in this operator and, if not defined, it is considered equal to the ",(0,n.kt)("a",{parentName:"p",href:"/v4/Logical_operators_AND_OR_NOT_XOR"},"disjunction")," of all exported properties (i.e., at least one of the properties must be non-",(0,n.kt)("inlineCode",{parentName:"p"},"NULL"),"). "),(0,n.kt)("p",null,"Similar to the other ",(0,n.kt)("a",{parentName:"p",href:"/v4/Set_operations"},"set operations"),", the condition must be such that the operation is ",(0,n.kt)("a",{parentName:"p",href:"/v4/Set_operations"},"correct"),"."),(0,n.kt)("h3",{id:"general-case"},"General case"),(0,n.kt)("p",null,"It should be noted that data export is a special case of (syntactic sugar for) ",(0,n.kt)("a",{parentName:"p",href:"/v4/In_a_structured_view_EXPORT_IMPORT"},"form export"),", in which the exported form is created automatically, named ",(0,n.kt)("inlineCode",{parentName:"p"},"export")," and consists of:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"one ",(0,n.kt)("a",{parentName:"li",href:"/v4/Form_structure#objects"},"object group")," named ",(0,n.kt)("inlineCode",{parentName:"li"},"value")," whose objects correspond to exported property parameters (not created if all exported property parameters are fixed values)."),(0,n.kt)("li",{parentName:"ul"},"exported properties. The ",(0,n.kt)("a",{parentName:"li",href:"/v4/Groups_of_properties_and_actions#builtin"},"built-in")," ",(0,n.kt)("inlineCode",{parentName:"li"},"System.private")," group is used as the ",(0,n.kt)("a",{parentName:"li",href:"/v4/Form_structure#propertygroup"},"property group")," for the created properties on the form, and the created object group is used as the ",(0,n.kt)("a",{parentName:"li",href:"/v4/Form_structure#drawgroup"},"display group"),". If there is only one exported property and it does not have a name, the corresponding property on the form is created with the name ",(0,n.kt)("inlineCode",{parentName:"li"},"value"),"."),(0,n.kt)("li",{parentName:"ul"},"a filter equal to the defined condition."),(0,n.kt)("li",{parentName:"ul"},"defined orders.")),(0,n.kt)("p",null,"Thus, the behavior of the data export operator (for example, determining the names of the resulting columns/keys, ",(0,n.kt)("a",{parentName:"p",href:"/v4/Structured_view#value"},"processing ",(0,n.kt)("inlineCode",{parentName:"a"},"value")),", etc.) is completely determined by the behavior of the form export operator (as if the above form was passed to it as a parameter)."),(0,n.kt)("h3",{id:"language"},"Language"),(0,n.kt)("p",null,"To declare an action that exports data, use the ",(0,n.kt)("a",{parentName:"p",href:"/v4/EXPORT_operator"},(0,n.kt)("inlineCode",{parentName:"a"},"EXPORT")," operator"),"."),(0,n.kt)("h3",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lsf"},'CLASS Store;\n\nname = DATA STRING[20] (Sku);\nweight = DATA NUMERIC[10,2] (Sku);\n\nin = DATA BOOLEAN (Store, Sku);\n\nexportSkus (Store store)  {\n    // uploading to DBF all Sku for which in (Store, Sku) is specified for the desired warehouse\n    EXPORT DBF CHARSET \'CP866\' FROM id(Sku s), name(s), weight(s) WHERE in(store, s);\n \n    // uploads to CSV without header line and escaping special characters\n    EXPORT CSV NOHEADER NOESCAPE FROM id(Sku s), name(s), weight(s) WHERE in(store, s);\n \n    // uploads JSON, sorting by property name[Sku] in descending order\n    EXPORT FROM id(Sku s), name(s), weight(s) WHERE in(store, s) ORDER name(s) DESC;\n \n    // uploads JSON {"ff":"HI"}, as by default it gets the name value, and the platform\n    // gets the object {"value":"HI"} to "HI"\n    EXPORT FROM ff=\'HI\';\n \n    // uploads JSON "HI", as by default it gets the name value, and the platform\n    // automatically converts the object {"value": "HI"} to "HI"\n    EXPORT FROM \'HI\'; \n}\n')))}c.isMDXComponent=!0}}]);