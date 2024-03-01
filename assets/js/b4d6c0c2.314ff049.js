"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[11921],{67596:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=r(74848),n=r(28453);const a={title:"Data export (EXPORT)"},s=void 0,i={id:"Data_export_EXPORT",title:"Data export (EXPORT)",description:"The data export operator creates an action that reads values of the specified properties for all object collections where the value of the specified property (condition) is not NULL, and then saves these values to a file in a specified format.",source:"@site/versioned_docs/version-v4/Data_export_EXPORT.md",sourceDirName:".",slug:"/Data_export_EXPORT",permalink:"/v4/Data_export_EXPORT",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Data_export_EXPORT.md",tags:[],version:"v4",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"Jul 7, 2021",frontMatter:{title:"Data export (EXPORT)"},sidebar:"learn",previous:{title:"Data import (IMPORT)",permalink:"/v4/Data_import_IMPORT"},next:{title:"Send mail (EMAIL)",permalink:"/v4/Send_mail_EMAIL"}},d={},l=[{value:"General case",id:"general-case",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function c(e){const t={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.em,{children:"data export"})," operator creates an ",(0,o.jsx)(t.a,{href:"/v4/Actions",children:"action"})," that reads values of the specified properties for all object collections where the value of the specified property (",(0,o.jsx)(t.em,{children:"condition"}),") is not ",(0,o.jsx)(t.code,{children:"NULL"}),", and then saves these values to a file in a specified ",(0,o.jsx)(t.a,{href:"/v4/Structured_view",children:"format"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["The condition is optional in this operator and, if not defined, it is considered equal to the ",(0,o.jsx)(t.a,{href:"/v4/Logical_operators_AND_OR_NOT_XOR",children:"disjunction"})," of all exported properties (i.e., at least one of the properties must be non-",(0,o.jsx)(t.code,{children:"NULL"}),")."]}),"\n",(0,o.jsxs)(t.p,{children:["Similar to the other ",(0,o.jsx)(t.a,{href:"/v4/Set_operations",children:"set operations"}),", the condition must be such that the operation is ",(0,o.jsx)(t.a,{href:"/v4/Set_operations",children:"correct"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"general-case",children:"General case"}),"\n",(0,o.jsxs)(t.p,{children:["It should be noted that data export is a special case of (syntactic sugar for) ",(0,o.jsx)(t.a,{href:"/v4/In_a_structured_view_EXPORT_IMPORT",children:"form export"}),", in which the exported form is created automatically, named ",(0,o.jsx)(t.code,{children:"export"})," and consists of:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["one ",(0,o.jsx)(t.a,{href:"/v4/Form_structure#objects",children:"object group"})," named ",(0,o.jsx)(t.code,{children:"value"})," whose objects correspond to exported property parameters (not created if all exported property parameters are fixed values)."]}),"\n",(0,o.jsxs)(t.li,{children:["exported properties. The ",(0,o.jsx)(t.a,{href:"/v4/Groups_of_properties_and_actions#builtin",children:"built-in"})," ",(0,o.jsx)(t.code,{children:"System.private"})," group is used as the ",(0,o.jsx)(t.a,{href:"/v4/Form_structure#propertygroup",children:"property group"})," for the created properties on the form, and the created object group is used as the ",(0,o.jsx)(t.a,{href:"/v4/Form_structure#drawgroup",children:"display group"}),". If there is only one exported property and it does not have a name, the corresponding property on the form is created with the name ",(0,o.jsx)(t.code,{children:"value"}),"."]}),"\n",(0,o.jsx)(t.li,{children:"a filter equal to the defined condition."}),"\n",(0,o.jsx)(t.li,{children:"defined orders."}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Thus, the behavior of the data export operator (for example, determining the names of the resulting columns/keys, ",(0,o.jsxs)(t.a,{href:"/v4/Structured_view#value",children:["processing ",(0,o.jsx)(t.code,{children:"value"})]}),", etc.) is completely determined by the behavior of the form export operator (as if the above form was passed to it as a parameter)."]}),"\n",(0,o.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,o.jsxs)(t.p,{children:["To declare an action that exports data, use the ",(0,o.jsxs)(t.a,{href:"/v4/EXPORT_operator",children:[(0,o.jsx)(t.code,{children:"EXPORT"})," operator"]}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-lsf",children:'CLASS Store;\n\nname = DATA STRING[20] (Sku);\nweight = DATA NUMERIC[10,2] (Sku);\n\nin = DATA BOOLEAN (Store, Sku);\n\nexportSkus (Store store)  {\n    // uploading to DBF all Sku for which in (Store, Sku) is specified for the desired warehouse\n    EXPORT DBF CHARSET \'CP866\' FROM id(Sku s), name(s), weight(s) WHERE in(store, s);\n \n    // uploads to CSV without header line and escaping special characters\n    EXPORT CSV NOHEADER NOESCAPE FROM id(Sku s), name(s), weight(s) WHERE in(store, s);\n \n    // uploads JSON, sorting by property name[Sku] in descending order\n    EXPORT FROM id(Sku s), name(s), weight(s) WHERE in(store, s) ORDER name(s) DESC;\n \n    // uploads JSON {"ff":"HI"}, as by default it gets the name value, and the platform\n    // gets the object {"value":"HI"} to "HI"\n    EXPORT FROM ff=\'HI\';\n \n    // uploads JSON "HI", as by default it gets the name value, and the platform\n    // automatically converts the object {"value": "HI"} to "HI"\n    EXPORT FROM \'HI\'; \n}\n'})})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>i});var o=r(96540);const n={},a=o.createContext(n);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);