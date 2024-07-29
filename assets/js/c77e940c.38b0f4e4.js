"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[82213],{63603:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>h,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var t=a(74848),i=a(28453);const o={title:"Migration"},s=void 0,r={id:"Migration",title:"Migration",description:"An lsFusion-based information system uses a relational database management system for permanent data storage. It should be remembered that after certain changes to the system logic, the platform is unable to determine how the data should be migrated. In these cases, the developer must explicitly define the migration method by creating the special migration file migration.script, which should be in the CLASSPATH of the application server.",source:"@site/versioned_docs/version-v5/Migration.md",sourceDirName:".",slug:"/Migration",permalink:"/v5/Migration",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/Migration.md",tags:[],version:"v5",lastUpdatedAt:170852507e4,frontMatter:{title:"Migration"},sidebar:"learn",previous:{title:"Eval (EVAL)",permalink:"/v5/Eval_EVAL"},next:{title:"Internationalization",permalink:"/v5/Internationalization"}},h={},c=[{value:"Changing the name of a property or action",id:"changing-the-name-of-a-property-or-action",level:3},{value:"Changing the name of a property/action on a form",id:"changing-the-name-of-a-propertyaction-on-a-form",level:3},{value:"Changing the name of a custom class",id:"changing-the-name-of-a-custom-class",level:3},{value:"Changing the name of a static object",id:"changing-the-name-of-a-static-object",level:3},{value:"Changing the name of a table",id:"changing-the-name-of-a-table",level:3},{value:"Changing the name of a navigator element",id:"changing-the-name-of-a-navigator-element",level:3},{value:"Changing the name of a namespace",id:"changing-the-name-of-a-namespace",level:3},{value:"Example",id:"example",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["An ",(0,t.jsx)(n.strong,{children:"lsFusion"}),"-based information system uses a relational database management system for permanent data storage. It should be remembered that after certain changes to the system logic, the platform is unable to determine how the data should be migrated. In these cases, the developer must explicitly define the migration method by creating the special ",(0,t.jsx)(n.em,{children:"migration file"})," ",(0,t.jsx)(n.code,{children:"migration.script"}),", which should be in the CLASSPATH of the application server."]}),"\n",(0,t.jsx)(n.p,{children:"The migration file consists of blocks describing the changes made in the specified version of the database structure. At server startup, all changes from the migration file that have a version higher than the version stored in the database are applied. Changes are applied according to the version, from the lowest version to the highest. If the database structure is changed successfully, the maximum version of all applied blocks is written to the database as the current one. The syntax for the description of each block is as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"V<version number> {\n    change1\n    ...\n    changeN \n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"version number"})," is a set of one or more numbers separated by a dot. When comparing the numbers of two versions, the first numbers of the versions are compared first, then if equal the second are compared, and so on. If one version contains fewer numbers than another, during comparison zeros are added to the a version with fewer numbers. For example, version number ",(0,t.jsx)(n.code,{children:"1.3"})," is equivalent to number ",(0,t.jsx)(n.code,{children:"1.3.0.0"}),", and version ",(0,t.jsx)(n.code,{children:"1.2"})," is higher than version ",(0,t.jsx)(n.code,{children:"1.1.3"}),". In the migration file, the version number is indicated with a capital letter ",(0,t.jsx)(n.code,{children:"V"}),": ",(0,t.jsx)(n.code,{children:"V1.0"}),", ",(0,t.jsx)(n.code,{children:"V2.0.11"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The migration file allows you to handle changes to ",(0,t.jsx)(n.a,{href:"/v5/Naming#canonicalname",children:"canonical names"})," of system elements, which occur when renaming and/or transferring to another namespace. Changes are of the following types:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"PROPERTY oldNS.oldName[class1,...,classN] -> newNS.newName[class1,...,classN]\nSTORED PROPERTY oldNS.oldName[class1,...,classN] -> newNS.newName[class1,...,classN]\nFORM PROPERTY oldNS.oldFormName.oldName(object1,...,objectN) -> newNS.newFormName.newName(object1,...,objectN)  \nCLASS oldNS.oldName -> newNS.newName\nOBJECT oldNS.oldClassName.oldName -> newNS.newClassName.newName\nTABLE oldNS.oldName -> newNS.newName\nNAVIGATOR oldNS.oldName -> newNS.newName\n"})}),"\n",(0,t.jsx)(n.h3,{id:"changing-the-name-of-a-property-or-action",children:"Changing the name of a property or action"}),"\n",(0,t.jsxs)(n.p,{children:["When renaming a ",(0,t.jsx)(n.a,{href:"/v5/Properties",children:"property"}),"/",(0,t.jsx)(n.a,{href:"/v5/Actions",children:"action"})," and/or when moving it to another ",(0,t.jsx)(n.a,{href:"/v5/Naming#namespace",children:"namespace"}),", the canonical name of the property/action changes. Adding a ",(0,t.jsx)(n.code,{children:"PROPERTY"})," change to the migration file specifying the old and new canonical names will allow you to preserve the security policy settings, as well as settings from the ",(0,t.jsx)(n.code,{children:"Reflection.properties"})," table. If the property is ",(0,t.jsx)(n.a,{href:"/v5/Data_properties_DATA",children:"primary"}),", to preserve data when changing the canonical name of this property ",(0,t.jsx)(n.strong,{children:"it is necessary"})," to add a ",(0,t.jsx)(n.code,{children:"STORED PROPERTY"})," change. Then, when the server starts, the field corresponding to this property in the database table will be renamed. Otherwise, the old field will be renamed to the field with the name ",(0,t.jsx)(n.code,{children:"<old ID>_deleted"})," (for example, when deleting a property), and a new field will be created with empty values. Apart from that the ",(0,t.jsx)(n.code,{children:"STORED PROPERTY"})," type is equivalent to the ",(0,t.jsx)(n.code,{children:"PROPERTY"})," type."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["On the right side of ",(0,t.jsx)(n.code,{children:"STORED PROPERTY"})," and ",(0,t.jsx)(n.code,{children:"PROPERTY"})," changes it is not necessary to specify a signature, as here the signature is automatically taken from the left side."]})}),"\n",(0,t.jsx)(n.h3,{id:"changing-the-name-of-a-propertyaction-on-a-form",children:"Changing the name of a property/action on a form"}),"\n",(0,t.jsxs)(n.p,{children:["When changing ",(0,t.jsx)(n.a,{href:"/v5/Properties_and_actions_block#name",children:"the name of the property on a form"})," using the migration file, you can preserve information from the table settings for this property/action on the form. For this, the ",(0,t.jsx)(n.code,{children:"FORM PROPERTY"})," change type is used. The old and new names are the name of the form namespace, the name of the form, and the name of the property on the form, separated by dots. Also, using this type of change you can preserve information from the table settings when changing the canonical name of the form. To do this, add ",(0,t.jsx)(n.code,{children:"FORM PROPERTY"})," changes to the migration file for all properties/actions on the form with the changed canonical name of the form."]}),"\n",(0,t.jsx)(n.h3,{id:"changing-the-name-of-a-custom-class",children:"Changing the name of a custom class"}),"\n",(0,t.jsxs)(n.p,{children:["When renaming a ",(0,t.jsx)(n.a,{href:"/v5/User_classes",children:"custom class"})," and/or when moving it to another namespace, the canonical name of this class changes. In this case, it is ",(0,t.jsx)(n.strong,{children:"essential"})," to reflect these changes in the migration file in order to preserve objects of this class and all data associated with these objects. To do this, add a ",(0,t.jsx)(n.code,{children:"CLASS"})," change to the migration file, specifying the old and new class names. This will also automatically rename ",(0,t.jsx)(n.a,{href:"/v5/Static_objects",children:"static objects"})," of this class, if they exist."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"It is worth noting that changing the canonical name of a class can lead to changes in the canonical names of data properties. At present these changes are not automatically tracked, and they must also be added to the migration file."})}),"\n",(0,t.jsx)(n.h3,{id:"changing-the-name-of-a-static-object",children:"Changing the name of a static object"}),"\n",(0,t.jsxs)(n.p,{children:["When renaming a ",(0,t.jsx)(n.a,{href:"/v5/Static_objects",children:"static object"}),", an ",(0,t.jsx)(n.code,{children:"OBJECT"})," change is used, which allows you to preserve data associated with the object. The old and new names are the name of the class namespace, the name of the class, and the name of the object, separated by dots."]}),"\n",(0,t.jsx)(n.h3,{id:"changing-the-name-of-a-table",children:"Changing the name of a table"}),"\n",(0,t.jsxs)(n.p,{children:["When renaming a ",(0,t.jsx)(n.a,{href:"/v5/Tables",children:"table"})," and/or when moving it to another namespace, the canonical name of this table changes. In this case, after creating a table with a new name, the system automatically moves all the records from the table with the old name in a separate request. However, if you add a ",(0,t.jsx)(n.code,{children:"TABLE"})," change to the migration file, specifying the old and new canonical table names, a query will be executed to rename the old table, which will be significantly faster."]}),"\n",(0,t.jsx)(n.h3,{id:"changing-the-name-of-a-navigator-element",children:"Changing the name of a navigator element"}),"\n",(0,t.jsxs)(n.p,{children:["When renaming a ",(0,t.jsx)(n.a,{href:"/v5/Navigator",children:"navigator element"})," and/or when moving it to another namespace, the canonical name of this element changes. In order to preserve the security policy settings associated with this element, add a ",(0,t.jsx)(n.code,{children:"NAVIGATOR"})," change to the migration file, specifying the old and new canonical names of the navigator element."]}),"\n",(0,t.jsx)(n.h3,{id:"changing-the-name-of-a-namespace",children:"Changing the name of a namespace"}),"\n",(0,t.jsx)(n.p,{children:"Since the name of a namespace is used in the canonical names of system elements, changing it causes the canonical names of the system elements included in it to change. Therefore, if a namespace name is changed, information on all the above elements must be placed in the migration file. The same must be done when moving system elements to different namespaces."}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"migration.script"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"V0.3.1 {\n    STORED PROPERTY Item.gender[Item.Article] -> Item.dataGender[Item.Article] // change of DATA property \n    PROPERTY System.SIDProperty[Reflection.Property] -> Reflection.dbNameProperty[Reflection.Property] // parallel transferring to another namespace and changing of the property name\n    FORM PROPERTY Item.itemForm.name(i) -> Item.itemForm.itemName(i)\n}\n \nV0.4 {\n    FORM PROPERTY Document.documentForm.name(i) -> Document.itemForm.itemName(i)\n    FORM PROPERTY Item.itemForm.itemName(i) -> Item.itemForm.iname // adding of an explicit name for a property on a form\u0435: iname = itemName(i)\n    CLASS Date.DateInterval -> Date.Interval\n    OBJECT Geo.Direction.North -> Geo.Direction.north\n    TABLE User.oldTable -> User.newTable\n}\n"})})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>r});var t=a(96540);const i={},o=t.createContext(i);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);