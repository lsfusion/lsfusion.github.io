(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[12266],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,m=d["".concat(s,".").concat(f)]||d[f]||c[f]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},68041:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(74034),a=r(79973),o=(r(67294),r(3905)),i=["components"],p={title:"Data export (EXPORT)"},s=void 0,l={unversionedId:"Data_export_EXPORT",id:"Data_export_EXPORT",isDocsHomePage:!1,title:"Data export (EXPORT)",description:"The data export operator creates an action that reads values of the specified properties for all object collections where the value of the specified property (condition) is not NULL, and then saves these values to a file in a specified format.",source:"@site/docs/Data_export_EXPORT.md",sourceDirName:".",slug:"/Data_export_EXPORT",permalink:"/next/Data_export_EXPORT",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Data_export_EXPORT.md",tags:[],version:"current",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"7/7/2021",frontMatter:{title:"Data export (EXPORT)"},sidebar:"learn",previous:{title:"Data import (IMPORT)",permalink:"/next/Data_import_IMPORT"},next:{title:"Send mail (EMAIL)",permalink:"/next/Send_mail_EMAIL"}},u=[{value:"General case",id:"general-case",children:[],level:3},{value:"Language",id:"language",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],c={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"data export")," operator creates an ",(0,o.kt)("a",{parentName:"p",href:"/next/Actions"},"action")," that reads values of the specified properties for all object collections where the value of the specified property (",(0,o.kt)("em",{parentName:"p"},"condition"),") is not ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL"),", and then saves these values to a file in a specified ",(0,o.kt)("a",{parentName:"p",href:"/next/Structured_view"},"format"),". "),(0,o.kt)("p",null,"The condition is optional in this operator and, if not defined, it is considered equal to the ",(0,o.kt)("a",{parentName:"p",href:"/next/Logical_operators_AND_OR_NOT_XOR"},"disjunction")," of all exported properties (i.e., at least one of the properties must be non-",(0,o.kt)("inlineCode",{parentName:"p"},"NULL"),"). "),(0,o.kt)("p",null,"Similar to the other ",(0,o.kt)("a",{parentName:"p",href:"/next/Set_operations"},"set operations"),", the condition must be such that the operation is ",(0,o.kt)("a",{parentName:"p",href:"/next/Set_operations"},"correct"),"."),(0,o.kt)("h3",{id:"general-case"},"General case"),(0,o.kt)("p",null,"It should be noted that data export is a special case of (syntactic sugar for) ",(0,o.kt)("a",{parentName:"p",href:"/next/In_a_structured_view_EXPORT_IMPORT"},"form export"),", in which the exported form is created automatically, named ",(0,o.kt)("inlineCode",{parentName:"p"},"export")," and consists of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"one ",(0,o.kt)("a",{parentName:"li",href:"/next/Form_structure#objects"},"object group")," named ",(0,o.kt)("inlineCode",{parentName:"li"},"value")," whose objects correspond to exported property parameters (not created if all exported property parameters are fixed values)."),(0,o.kt)("li",{parentName:"ul"},"exported properties. The ",(0,o.kt)("a",{parentName:"li",href:"/next/Groups_of_properties_and_actions#builtin"},"built-in")," ",(0,o.kt)("inlineCode",{parentName:"li"},"System.private")," group is used as the ",(0,o.kt)("a",{parentName:"li",href:"/next/Form_structure#propertygroup"},"property group")," for the created properties on the form, and the created object group is used as the ",(0,o.kt)("a",{parentName:"li",href:"/next/Form_structure#drawgroup"},"display group"),". If there is only one exported property and it does not have a name, the corresponding property on the form is created with the name ",(0,o.kt)("inlineCode",{parentName:"li"},"value"),"."),(0,o.kt)("li",{parentName:"ul"},"a filter equal to the defined condition."),(0,o.kt)("li",{parentName:"ul"},"defined orders.")),(0,o.kt)("p",null,"Thus, the behavior of the data export operator (for example, determining the names of the resulting columns/keys, ",(0,o.kt)("a",{parentName:"p",href:"/next/Structured_view#value"},"processing ",(0,o.kt)("inlineCode",{parentName:"a"},"value")),", etc.) is completely determined by the behavior of the form export operator (as if the above form was passed to it as a parameter)."),(0,o.kt)("h3",{id:"language"},"Language"),(0,o.kt)("p",null,"To declare an action that exports data, use the ",(0,o.kt)("a",{parentName:"p",href:"/next/EXPORT_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"EXPORT")," operator"),"."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},'CLASS Store;\n\nname = DATA STRING[20] (Sku);\nweight = DATA NUMERIC[10,2] (Sku);\n\nin = DATA BOOLEAN (Store, Sku);\n\nexportSkus (Store store)  {\n    // uploading to DBF all Sku for which in (Store, Sku) is specified for the desired warehouse\n    EXPORT DBF CHARSET \'CP866\' FROM id(Sku s), name(s), weight(s) WHERE in(store, s);\n \n    // uploads to CSV without header line and escaping special characters\n    EXPORT CSV NOHEADER NOESCAPE FROM id(Sku s), name(s), weight(s) WHERE in(store, s);\n \n    // uploads JSON, sorting by property name[Sku] in descending order\n    EXPORT FROM id(Sku s), name(s), weight(s) WHERE in(store, s) ORDER name(s) DESC;\n \n    // uploads JSON {"ff":"HI"}, as by default it gets the name value, and the platform\n    // gets the object {"value":"HI"} to "HI"\n    EXPORT FROM ff=\'HI\';\n \n    // uploads JSON "HI", as by default it gets the name value, and the platform\n    // automatically converts the object {"value": "HI"} to "HI"\n    EXPORT FROM \'HI\'; \n}\n')))}d.isMDXComponent=!0}}]);