(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[7578],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return h},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=m(n),d=i,f=p["".concat(l,".").concat(d)]||p[d]||c[d]||o;return n?a.createElement(f,r(r({ref:t},h),{},{components:n})):a.createElement(f,r({ref:t},h))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var m=2;m<o;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},71108:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return h},default:function(){return p}});var a=n(74034),i=n(79973),o=(n(67294),n(3905)),r=["components"],s={title:"Migration"},l=void 0,m={unversionedId:"Migration",id:"Migration",isDocsHomePage:!1,title:"Migration",description:"An lsFusion-based information system uses a relational database management system for permanent data storage. It should be remembered that after certain changes to the system logic, the platform is unable to determine how the data should be migrated. In these cases, the developer must explicitly define the migration method by creating the special migration file migration.script, which should be in the CLASSPATH of the application server.",source:"@site/docs/Migration.md",sourceDirName:".",slug:"/Migration",permalink:"/next/Migration",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Migration.md",tags:[],version:"current",lastUpdatedAt:1624529220,formattedLastUpdatedAt:"6/24/2021",frontMatter:{title:"Migration"},sidebar:"learn",previous:{title:"Eval (EVAL)",permalink:"/next/Eval_EVAL"},next:{title:"Internationalization",permalink:"/next/Internationalization"}},h=[{value:"Changing the name of a property or action",id:"changing-the-name-of-a-property-or-action",children:[],level:3},{value:"Changing the name of a property/action on a form",id:"changing-the-name-of-a-propertyaction-on-a-form",children:[],level:3},{value:"Changing the name of a custom class",id:"changing-the-name-of-a-custom-class",children:[],level:3},{value:"Changing the name of a static object",id:"changing-the-name-of-a-static-object",children:[],level:3},{value:"Changing the name of a table",id:"changing-the-name-of-a-table",children:[],level:3},{value:"Changing the name of a navigator element",id:"changing-the-name-of-a-navigator-element",children:[],level:3},{value:"Changing the name of a namespace",id:"changing-the-name-of-a-namespace",children:[],level:3},{value:"Example",id:"example",children:[],level:3}],c={toc:h};function p(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An ",(0,o.kt)("strong",{parentName:"p"},"lsFusion"),"-based information system uses a relational database management system for permanent data storage. It should be remembered that after certain changes to the system logic, the platform is unable to determine how the data should be migrated. In these cases, the developer must explicitly define the migration method by creating the special ",(0,o.kt)("em",{parentName:"p"},"migration file")," ",(0,o.kt)("inlineCode",{parentName:"p"},"migration.script"),", which should be in the CLASSPATH of the application server."),(0,o.kt)("p",null,"The migration file consists of blocks describing the changes made in the specified version of the database structure. At server startup, all changes from the migration file that have a version higher than the version stored in the database are applied. Changes are applied according to the version, from the lowest version to the highest. If the database structure is changed successfully, the maximum version of all applied blocks is written to the database as the current one. The syntax for the description of each block is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"V<version number> {\n    change1\n    ...\n    changeN \n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"version number")," is a set of one or more numbers separated by a dot. When comparing the numbers of two versions, the first numbers of the versions are compared first, then if equal the second are compared, and so on. If one version contains fewer numbers than another, during comparison zeros are added to the a version with fewer numbers. For example, version number ",(0,o.kt)("inlineCode",{parentName:"p"},"1.3")," is equivalent to number ",(0,o.kt)("inlineCode",{parentName:"p"},"1.3.0.0"),", and version ",(0,o.kt)("inlineCode",{parentName:"p"},"1.2")," is higher than version ",(0,o.kt)("inlineCode",{parentName:"p"},"1.1.3"),". In the migration file, the version number is indicated with a capital letter ",(0,o.kt)("inlineCode",{parentName:"p"},"V"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"V1.0"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"V2.0.11"),"."),(0,o.kt)("p",null,"The migration file allows you to handle changes to ",(0,o.kt)("a",{parentName:"p",href:"/next/Naming#canonicalname"},"canonical names")," of system elements, which occur when renaming and/or transferring to another namespace. Changes are of the following types: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"PROPERTY oldNS.oldName[class1,...,classN] -> newNS.newName[class1,...,classN]\nSTORED PROPERTY oldNS.oldName[class1,...,classN] -> newNS.newName[class1,...,classN]\nFORM PROPERTY oldNS.oldFormName.oldName(object1,...,objectN) -> newNS.newFormName.newName(object1,...,objectN)  \nCLASS oldNS.oldName -> newNS.newName\nOBJECT oldNS.oldClassName.oldName -> newNS.newClassName.newName\nTABLE oldNS.oldName -> newNS.newName\nNAVIGATOR oldNS.oldName -> newNS.newName\n")),(0,o.kt)("h3",{id:"changing-the-name-of-a-property-or-action"},"Changing the name of a property or action"),(0,o.kt)("p",null,"When renaming a ",(0,o.kt)("a",{parentName:"p",href:"/next/Properties"},"property"),"/",(0,o.kt)("a",{parentName:"p",href:"/next/Actions"},"action")," and/or when moving it to another ",(0,o.kt)("a",{parentName:"p",href:"/next/Naming#namespace"},"namespace"),", the canonical name of the property/action changes. Adding a ",(0,o.kt)("inlineCode",{parentName:"p"},"PROPERTY")," change to the migration file specifying the old and new canonical names will allow you to preserve the security policy settings, as well as settings from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Reflection.properties")," table. If the property is ",(0,o.kt)("a",{parentName:"p",href:"/next/Data_properties_DATA"},"primary"),", to preserve data when changing the canonical name of this property ",(0,o.kt)("strong",{parentName:"p"},"it is necessary")," to add a ",(0,o.kt)("inlineCode",{parentName:"p"},"STORED PROPERTY")," change. Then, when the server starts, the field corresponding to this property in the database table will be renamed. Otherwise, the old field will be renamed to the field with the name ",(0,o.kt)("inlineCode",{parentName:"p"},"<old ID>_deleted")," (for example, when deleting a property), and a new field will be created with empty values. Apart from that the ",(0,o.kt)("inlineCode",{parentName:"p"},"STORED PROPERTY")," type is equivalent to the ",(0,o.kt)("inlineCode",{parentName:"p"},"PROPERTY")," type."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"On the right side of ",(0,o.kt)("inlineCode",{parentName:"p"},"STORED PROPERTY")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"PROPERTY")," changes it is not necessary to specify a signature, as here the signature is automatically taken from the left side."))),(0,o.kt)("h3",{id:"changing-the-name-of-a-propertyaction-on-a-form"},"Changing the name of a property/action on a form"),(0,o.kt)("p",null,"When changing ",(0,o.kt)("a",{parentName:"p",href:"/next/Properties_and_actions_block#name"},"the name of the property on a form")," using the migration file, you can preserve information from the table settings for this property/action on the form. For this, the ",(0,o.kt)("inlineCode",{parentName:"p"},"FORM PROPERTY")," change type is used. The old and new names are the name of the form namespace, the name of the form, and the name of the property on the form, separated by dots. Also, using this type of change you can preserve information from the table settings when changing the canonical name of the form. To do this, add ",(0,o.kt)("inlineCode",{parentName:"p"},"FORM PROPERTY")," changes to the migration file for all properties/actions on the form with the changed canonical name of the form."),(0,o.kt)("h3",{id:"changing-the-name-of-a-custom-class"},"Changing the name of a custom class"),(0,o.kt)("p",null,"When renaming a ",(0,o.kt)("a",{parentName:"p",href:"/next/User_classes"},"custom class")," and/or when moving it to another namespace, the canonical name of this class changes. In this case, it is ",(0,o.kt)("strong",{parentName:"p"},"essential")," to reflect these changes in the migration file in order to preserve objects of this class and all data associated with these objects. To do this, add a ",(0,o.kt)("inlineCode",{parentName:"p"},"CLASS")," change to the migration file, specifying the old and new class names. This will also automatically rename ",(0,o.kt)("a",{parentName:"p",href:"/next/Static_objects"},"static objects")," of this class, if they exist. "),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It is worth noting that changing the canonical name of a class can lead to changes in the canonical names of data properties. At present these changes are not automatically tracked, and they must also be added to the migration file."))),(0,o.kt)("h3",{id:"changing-the-name-of-a-static-object"},"Changing the name of a static object"),(0,o.kt)("p",null,"When renaming a ",(0,o.kt)("a",{parentName:"p",href:"/next/Static_objects"},"static object"),", an ",(0,o.kt)("inlineCode",{parentName:"p"},"OBJECT")," change is used, which allows you to preserve data associated with the object. The old and new names are the name of the class namespace, the name of the class, and the name of the object, separated by dots. "),(0,o.kt)("h3",{id:"changing-the-name-of-a-table"},"Changing the name of a table"),(0,o.kt)("p",null,"When renaming a ",(0,o.kt)("a",{parentName:"p",href:"/next/Tables"},"table")," and/or when moving it to another namespace, the canonical name of this table changes. In this case, after creating a table with a new name, the system automatically moves all the records from the table with the old name in a separate request. However, if you add a ",(0,o.kt)("inlineCode",{parentName:"p"},"TABLE")," change to the migration file, specifying the old and new canonical table names, a query will be executed to rename the old table, which will be significantly faster."),(0,o.kt)("h3",{id:"changing-the-name-of-a-navigator-element"},"Changing the name of a navigator element"),(0,o.kt)("p",null,"When renaming a ",(0,o.kt)("a",{parentName:"p",href:"/next/Navigator"},"navigator element")," and/or when moving it to another namespace, the canonical name of this element changes. In order to preserve the security policy settings associated with this element, add a ",(0,o.kt)("inlineCode",{parentName:"p"},"NAVIGATOR")," change to the migration file, specifying the old and new canonical names of the navigator element. "),(0,o.kt)("h3",{id:"changing-the-name-of-a-namespace"},"Changing the name of a namespace"),(0,o.kt)("p",null,"Since the name of a namespace is used in the canonical names of system elements, changing it causes the canonical names of the system elements included in it to change. Therefore, if a namespace name is changed, information on all the above elements must be placed in the migration file. The same must be done when moving system elements to different namespaces."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"migration.script")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"V0.3.1 {\n    STORED PROPERTY Item.gender[Item.Article] -> Item.dataGender[Item.Article] // change of DATA property \n    PROPERTY System.SIDProperty[Reflection.Property] -> Reflection.dbNameProperty[Reflection.Property] // parallel transferring to another namespace and changing of the property name\n    FORM PROPERTY Item.itemForm.name(i) -> Item.itemForm.itemName(i)\n}\n \nV0.4 {\n    FORM PROPERTY Document.documentForm.name(i) -> Document.itemForm.itemName(i)\n    FORM PROPERTY Item.itemForm.itemName(i) -> Item.itemForm.iname // adding of an explicit name for a property on a form\u0435: iname = itemName(i)\n    CLASS Date.DateInterval -> Date.Interval\n    OBJECT Geo.Direction.North -> Geo.Direction.north\n    TABLE User.oldTable -> User.newTable\n}\n")))}p.isMDXComponent=!0}}]);