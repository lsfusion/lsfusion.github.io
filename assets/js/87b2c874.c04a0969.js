"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[72412],{25522:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>r,toc:()=>h});var i=s(74848),a=s(28453);const n={title:"Tables"},l=void 0,r={id:"Tables",title:"Tables",description:"For storing and calculating values of the properties the lsFusion platform uses a relational database. All data properties, as well as all calculated properties marked as materialized, are stored in the fields of the tables in the database. For each table, there is a set of key fields with the names key0, key1, ..., keyN, where the object IDs are stored. All other fields store property values in such a way that in the corresponding field of each row there is a property value for the objects with IDs from the key fields. Objects of built-in classes can also be used as table keys.",source:"@site/versioned_docs/version-v5/Tables.md",sourceDirName:".",slug:"/Tables",permalink:"/Tables",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/Tables.md",tags:[],version:"v5",lastUpdatedAt:1685108136,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{title:"Tables"},sidebar:"learn",previous:{title:"Indexes",permalink:"/Indexes"},next:{title:"Management",permalink:"/Management"}},o={},h=[{value:"Property table determining",id:"property",level:3},{value:"Table naming",id:"table-naming",level:3},{value:"Field naming",id:"name",level:3},{value:"Default tables",id:"default-tables",level:3},{value:"Default indexes",id:"default-indexes",level:3},{value:"Full tables",id:"full",level:3},{value:"Storing belonging to the class",id:"storing-belonging-to-the-class",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["For storing and calculating values of the ",(0,i.jsx)(t.a,{href:"/Properties",children:"properties"})," the ",(0,i.jsx)(t.strong,{children:"lsFusion"})," platform uses a relational database. All ",(0,i.jsx)(t.a,{href:"/Data_properties_DATA",children:"data properties"}),", as well as all calculated ",(0,i.jsx)(t.a,{href:"/Properties",children:"properties"})," marked as ",(0,i.jsx)(t.a,{href:"/Materializations",children:"materialized"}),", are stored in the fields of the ",(0,i.jsx)(t.em,{children:"tables"})," in the database. For each table, there is a set of key fields with the names ",(0,i.jsx)(t.code,{children:"key0"}),", ",(0,i.jsx)(t.code,{children:"key1"}),", ..., ",(0,i.jsx)(t.code,{children:"keyN"}),", where the object IDs are stored. All other fields store property values in such a way that in the corresponding field of each row there is a property value for the objects with IDs from the key fields. Objects of ",(0,i.jsx)(t.a,{href:"/Built-in_classes",children:"built-in classes"})," can also be used as table keys."]}),"\n",(0,i.jsxs)(t.p,{children:["When creating a table, you must specify a list of the object ",(0,i.jsx)(t.a,{href:"/Classes",children:"classes"})," which will be the keys in this table."]}),"\n",(0,i.jsx)(t.h3,{id:"property",children:"Property table determining"}),"\n",(0,i.jsxs)(t.p,{children:['For each property, you can specify in which table it should be stored. In this case, the number of the table keys must be equal to the number of property parameters, and the parameter classes must match the table key classes. If the table in which the property should be stored is not set explicitly, the property will be placed automatically to the "nearest" existing table in the system (i.e., which number of keys matches the number of the property parameters and the key classes are the closest to the parameter classes). Also if necessary, you can use the special option (',(0,i.jsx)(t.code,{children:"NODEFAULT"}),") to specify that when automatically determining property tables, this table should be ignored (i.e., a property can only be put into such a table explicitly using the corresponding option (",(0,i.jsx)(t.code,{children:"TABLE"}),"))."]}),"\n",(0,i.jsx)(t.h3,{id:"table-naming",children:"Table naming"}),"\n",(0,i.jsx)(t.p,{children:"For each table created in the platform, a corresponding table is created in the database, which name, depending on the selected naming policy, is defined as follows:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Naming policy"}),(0,i.jsx)(t.th,{children:"Field name"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Full with signature (default)"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"NameSpace_TableName"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Full without signature"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"NameSpace_TableName"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Short"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"TableName"})})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["The naming policy is defined using the ",(0,i.jsx)(t.a,{href:"/Launch_parameters#namingpolicy",children:(0,i.jsx)(t.code,{children:"db.namingPolicy"})})," startup parameter."]}),"\n",(0,i.jsx)(t.h3,{id:"name",children:"Field naming"}),"\n",(0,i.jsx)(t.p,{children:"The values of each property are always stored exactly in one field, which name, depending on the selected naming policy, is defined as follows:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Naming policy"}),(0,i.jsx)(t.th,{children:"Field name"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Full with signature (default)"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"NameSpace_PropertyName_ClassName1_ClassName2_..,ClassNameN"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Full without signature"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"NameSpace_PropertyName"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Short"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"PropertyName"})})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"If necessary, for each property, the developer can explicitly specify the name of the field in which this property will be stored. Also, it is possible to create a custom policy for naming property fields if the above does not suit for some reason."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Using too short property naming policy (in case the number of materialized properties is large enough) can significantly complicate ",(0,i.jsx)(t.a,{href:"/Naming",children:"naming"})," these properties (keeping them unique), or, accordingly, lead to the case when you will need to explicitly name the fields in which these properties will be stored too often."]})}),"\n",(0,i.jsxs)(t.p,{children:["The naming policy is defined using the ",(0,i.jsx)(t.a,{href:"/Launch_parameters#namingpolicy",children:(0,i.jsx)(t.code,{children:"db.namingPolicy"})})," startup parameter."]}),"\n",(0,i.jsx)(t.h3,{id:"default-tables",children:"Default tables"}),"\n",(0,i.jsxs)(t.p,{children:["If the system cannot determine the table in which the property should be put, then a table with a name equal to ",(0,i.jsx)(t.code,{children:"auto_<class ID 1 in the property signature>_<class ID 2 in the property signature>_...<class ID n in the property signature>"})," is automatically created. For example, for a property with class arguments ",(0,i.jsx)(t.code,{children:"DATE"}),", ",(0,i.jsx)(t.code,{children:"Item.Item"}),", ",(0,i.jsx)(t.code,{children:"Country.Country"}),", ",(0,i.jsx)(t.code,{children:"INTEGER"}),", the table ",(0,i.jsx)(t.code,{children:"auto_DATE_Item_Item_Country_Country_INTEGER"})," will be created. However, it is recommended to avoid situations when the default table is used and explicitly specify the tables in which properties will be stored."]}),"\n",(0,i.jsx)(t.p,{children:"Also, it is possible to create a custom policy for naming tables in the platform if the basic policy does not suit for some reason."}),"\n",(0,i.jsx)(t.h3,{id:"default-indexes",children:"Default indexes"}),"\n",(0,i.jsxs)(t.p,{children:["By default, a unique ",(0,i.jsx)(t.a,{href:"/Indexes",children:"index"})," is built for each table by its key fields ",(0,i.jsx)(t.code,{children:"key0"}),", ",(0,i.jsx)(t.code,{children:"key1"}),", ..., ",(0,i.jsx)(t.code,{children:"keyN"})," named as ",(0,i.jsx)(t.code,{children:"pk_<table ID>"})," where ",(0,i.jsx)(t.code,{children:"N"})," is the number of key fields in the table minus ",(0,i.jsx)(t.code,{children:"1"}),". Also indexes on key fields ",(0,i.jsx)(t.code,{children:"keyK"}),", ..., ",(0,i.jsx)(t.code,{children:"keyN"})," with names like ",(0,i.jsx)(t.code,{children:"<table ID>_keyK _..._ keyN_idx"})," are automatically added for all ",(0,i.jsx)(t.code,{children:"K"})," from ",(0,i.jsx)(t.code,{children:"1"})," to ",(0,i.jsx)(t.code,{children:"N"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"full",children:"Full tables"}),"\n",(0,i.jsxs)(t.p,{children:["Let's say that the table is ",(0,i.jsx)(t.em,{children:"full"})," if for each of its keys it contains all existing in the system objects of this key class. In general, the fullness of a table is specified explicitly using the special option (",(0,i.jsx)(t.code,{children:"FULL"}),") and is implemented via an implicit creation of a materialized ",(0,i.jsx)(t.a,{href:"/Classification_IS_AS",children:"classification"})," property (we will call it the ",(0,i.jsx)(t.em,{children:"fullness"})," property). However, in some cases, the platform may not create this property if it determines that the table already has properties which guarantee that it contains all the necessary objects (for example, the property of belonging to the class)."]}),"\n",(0,i.jsxs)(t.p,{children:["By default, the fullness property is named ",(0,i.jsx)(t.code,{children:"_FULL_TableName"}),". Also, when defining the field name of this property, the short naming policy is used (since there can be exactly one such field in the table and there is no point in creating bulky names)."]}),"\n",(0,i.jsxs)(t.p,{children:["It is worth noting that the fullness of the table is important only from the execution optimization perspective (for example, the server knows that a certain table has all objects of the required class, and instead of ",(0,i.jsx)(t.code,{children:"LEFT JOIN"})," uses ",(0,i.jsx)(t.code,{children:"INNER JOIN"}),", which may be critical in some cases), and just as the table mechanism itself, it does not affect the logic of the system."]}),"\n",(0,i.jsx)(t.h3,{id:"storing-belonging-to-the-class",children:"Storing belonging to the class"}),"\n",(0,i.jsxs)(t.p,{children:["Belonging to the class is basic data similar to ",(0,i.jsx)(t.a,{href:"/Data_properties_DATA",children:"data"})," properties. Thus, like data properties, this belonging is stored in the field of a certain table. At the same time, this table is determined similar to the table for the other materialized properties (assuming that the belonging to the class is a property with one parameter of this class), with the only difference being that at first only full tables are processed (i.e., they have higher priority), and only if no full tables are found, the remaining (not full) tables are processed."]}),"\n",(0,i.jsx)(t.p,{children:"If a certain table for each of its keys stores the belonging to the class of all descendants of the class of this key, firstly it is automatically marked as full (even if it was not specified explicitly), and secondly, the fullness property is not created for it (it is assumed that the role of this property is fulfilled by the property of belonging to the class itself)."}),"\n",(0,i.jsxs)(t.p,{children:["By default, the property of belonging to the class is named ",(0,i.jsx)(t.code,{children:"_CLASS_TableName"}),". Also, when determining the field name of this property, the short naming policy is used (since there can be exactly one such field in the table and there is no point in creating bulky names)."]}),"\n",(0,i.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,i.jsxs)(t.p,{children:["To create tables, use the ",(0,i.jsxs)(t.a,{href:"/TABLE_statement",children:[(0,i.jsx)(t.code,{children:"TABLE"})," statement"]}),". To specify the table which should store the property, use the ",(0,i.jsxs)(t.a,{href:"/Property_options",children:[(0,i.jsx)(t.code,{children:"TABLE"})," option"]})," in the property options."]}),"\n",(0,i.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-lsf",children:"TABLE book (Book);\n\nin = DATA BOOLEAN (Sku, Stock);\nTABLE skuStock (Sku, Stock); // it will store the in property\n\nprice = DATA NUMERIC[10,2] (Sku, DATE);\nTABLE skuDate (Sku, DATE); // it will store the Sku property\n\nTABLE sku (Sku) FULL;\n"})})]})}function c(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>r});var i=s(96540);const a={},n=i.createContext(a);function l(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);