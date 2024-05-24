"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[36358],{83571:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=r(74848),n=r(28453);const o={title:"Data import (IMPORT)"},s=void 0,a={id:"Data_import_IMPORT",title:"Data import (IMPORT)",description:"The data import operator creates an action which reads a file from the value of some property, then, depending on its format, defines the columns (fields) of data in this file, after which it writes the value of each column (field) to the corresponding property (parameter) - import assignment. The mapping of columns to properties can go in either column or name order.",source:"@site/versioned_docs/version-v5/Data_import_IMPORT.md",sourceDirName:".",slug:"/Data_import_IMPORT",permalink:"/Data_import_IMPORT",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/Data_import_IMPORT.md",tags:[],version:"v5",lastUpdatedAt:1685108136e3,frontMatter:{title:"Data import (IMPORT)"},sidebar:"learn",previous:{title:"Write file (WRITE)",permalink:"/Write_file_WRITE"},next:{title:"Data export (EXPORT)",permalink:"/Data_export_EXPORT"}},l={},d=[{value:"General case",id:"general-case",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function c(e){const t={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.em,{children:"data import"})," operator creates an ",(0,i.jsx)(t.a,{href:"/Actions",children:"action"})," which reads a file from the value of some ",(0,i.jsx)(t.a,{href:"/Properties",children:"property"}),", then, depending on its ",(0,i.jsx)(t.a,{href:"/Structured_view",children:"format"}),", defines the columns (fields) of data in this file, after which it ",(0,i.jsx)(t.a,{href:"/Property_change_CHANGE",children:"writes"})," the value of each column (field) to the corresponding property (parameter) - import ",(0,i.jsx)(t.em,{children:"assignment"}),". The mapping of columns to properties can go in either column or name order."]}),"\n",(0,i.jsxs)(t.p,{children:["Rows, in turn, are mapped during import to objects of specified classes (let's call these objects ",(0,i.jsx)(t.em,{children:"imported"}),"). In the current platform implementation, there can be at most one object and the specified class must be either ",(0,i.jsx)(t.a,{href:"/Built-in_classes",children:"numeric"})," or a ",(0,i.jsx)(t.a,{href:"/User_classes#abstract",children:"specific user-defined class"}),". Rows are mapped to the imported object as follows:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"for numeric classes: all imported rows are numbered in the order in which they appear in the file (starting from 0)."}),"\n",(0,i.jsxs)(t.li,{children:["for specific user-defined classes: ",(0,i.jsx)(t.a,{href:"/New_object_NEW",children:"a new object"})," of the specified class is created for each row."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["You can also define an import ",(0,i.jsx)(t.em,{children:"condition"}),": this is a property in which the ",(0,i.jsx)(t.a,{href:"/Built-in_classes",children:"default value"})," of the property value class is written for each row (as opposed to import destination in which column values are written)."]}),"\n",(0,i.jsx)(t.h3,{id:"general-case",children:"General case"}),"\n",(0,i.jsxs)(t.p,{children:["It should be noted that data import is a special case of (syntactic sugar for) ",(0,i.jsx)(t.a,{href:"/In_a_structured_view_EXPORT_IMPORT#importForm",children:"form import"}),", in which the imported form is created automatically and consists of:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["one ",(0,i.jsx)(t.a,{href:"/Form_structure#objects",children:"group of objects"})," named ",(0,i.jsx)(t.code,{children:"value"})," whose objects correspond to imported objects (not created if there are no imported objects)"]}),"\n",(0,i.jsxs)(t.li,{children:["imported properties. The ",(0,i.jsx)(t.a,{href:"/Form_structure#propertygroup",children:"property group"})," for the properties that are created on the form is the ",(0,i.jsx)(t.a,{href:"/Groups_of_properties_and_actions#builtin",children:"builtin"})," group ",(0,i.jsx)(t.code,{children:"System.private"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"a filter equal to the defined condition."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Accordingly, the behavior of the data import operator (for example, determining the names of the resulting columns / keys, ",(0,i.jsxs)(t.a,{href:"/Structured_view#value",children:["processing of ",(0,i.jsx)(t.code,{children:"value"})]}),", etc.) is completely determined by the behavior of the form import operator (as if the above form were passed to it as a parameter)."]}),"\n",(0,i.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,i.jsxs)(t.p,{children:["To declare an action that imports data, use the ",(0,i.jsxs)(t.a,{href:"/IMPORT_operator",children:[(0,i.jsx)(t.code,{children:"IMPORT"})," operator"]}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-lsf",children:"import()  {\n\n    LOCAL xlsFile = EXCELFILE ();\n\n    LOCAL field1 = BPSTRING[50] (INTEGER);\n    LOCAL field2 = BPSTRING[50] (INTEGER);\n    LOCAL field3 = BPSTRING[50] (INTEGER);\n    LOCAL field4 = BPSTRING[50] (INTEGER);\n\n    LOCAL headField1 = BPSTRING[50] ();\n    LOCAL headField2 = BPSTRING[50] ();\n\n    INPUT f = EXCELFILE DO {\n        IMPORT XLS SHEET 2 FROM f TO field1 = C, field2, field3 = F, field4 = A;\n        IMPORT XLS SHEET ALL FROM f TO field1 = C, field2, field3 = F, field4 = A;\n\n        FOR imported(INTEGER i) DO { // imported property - a system property for iterating data\n            MESSAGE 'field1 value = ' + field1(i);\n            MESSAGE 'field2 value = ' + field2(i);\n            MESSAGE 'field3 value = ' + field3(i);\n            MESSAGE 'field4 value = ' + field4(i);\n       }\n    }\n\n    LOCAL t = FILE ();\n    EXTERNAL SQL 'jdbc:postgresql://localhost/test?user=postgres&password=12345' EXEC 'SELECT x.a,x.b,x.c,x.d FROM orders x WHERE x.id = $1;' PARAMS '4553' TO t;\n    IMPORT FROM t() FIELDS INTEGER a, DATE b, BPSTRING[50] c, BPSTRING[50] d DO        // import with FIELDS option\n        NEW o = Order {\n            number(o) <- a;\n            date(o) <- b;\n            customer(o) <- c;\n            currency(o) <- GROUP MAX Currency currency IF name(currency) = d; // finding currency with this name\n        }\n\n\n    INPUT f = FILE DO\n        IMPORT CSV '*' HEADER CHARSET 'utf-8' FROM f TO field1 = C, field2, field3 = F, field4 = A;\n    INPUT f = FILE DO\n        IMPORT XML ATTR FROM f TO field1, field2;\n    INPUT f = FILE DO\n        IMPORT XML ROOT 'element' ATTR FROM f TO field1, field2;\n    INPUT f = FILE DO\n        IMPORT XML ATTR FROM f TO() headField1, headField2;\n\n    INPUT f = FILE DO\n        INPUT memo = FILE DO\n            IMPORT DBF MEMO memo FROM f TO field1 = 'DBFField1', field2 = 'DBFField2';\n}\n"})})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>a});var i=r(96540);const n={},o=i.createContext(n);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);