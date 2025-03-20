"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["36800"],{2674:function(e,t,r){r.r(t),r.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>n,assets:()=>d,toc:()=>l,contentTitle:()=>a});var n=JSON.parse('{"id":"In_a_structured_view_EXPORT_IMPORT","title":"In a structured view (EXPORT, IMPORT)","description":"This operator creates an action that opens a form in the structured view.","source":"@site/versioned_docs/version-v4/In_a_structured_view_EXPORT_IMPORT.md","sourceDirName":".","slug":"/In_a_structured_view_EXPORT_IMPORT","permalink":"/v4/In_a_structured_view_EXPORT_IMPORT","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v4/docs/en/In_a_structured_view_EXPORT_IMPORT.md","tags":[],"version":"v4","lastUpdatedAt":1623249583000,"frontMatter":{"title":"In a structured view (EXPORT, IMPORT)"},"sidebar":"learn","previous":{"title":"In a print view (PRINT)","permalink":"/v4/In_a_print_view_PRINT"},"next":{"title":"Navigator","permalink":"/v4/Navigator"}}'),i=r("85893"),s=r("50065");let o={title:"In a structured view (EXPORT, IMPORT)"},a=void 0,d={},l=[{value:"Format",id:"format",level:3},{value:"Form import",id:"importForm",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function c(e){let t={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["This operator creates an action that ",(0,i.jsx)(t.a,{href:"/v4/Open_form",children:"opens a form"})," in the ",(0,i.jsx)(t.a,{href:"/v4/Structured_view",children:"structured"})," view."]}),"\n",(0,i.jsx)(t.h3,{id:"format",children:"Format"}),"\n",(0,i.jsxs)(t.p,{children:["In this operator, you can define the format that all form data will be converted to:  ",(0,i.jsx)(t.strong,{children:"XML"}),", ",(0,i.jsx)(t.strong,{children:"JSON"}),", ",(0,i.jsx)(t.strong,{children:"DBF"}),", ",(0,i.jsx)(t.strong,{children:"CSV"}),", ",(0,i.jsx)(t.strong,{children:"XLS"}),". The generated file(s) in this format is then written to the specified property."]}),"\n",(0,i.jsxs)(t.p,{children:["Form export is a general case of the  ",(0,i.jsx)(t.a,{href:"/v4/Data_export_EXPORT",children:"data export operator"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"importForm",children:"Form import"}),"\n",(0,i.jsx)(t.p,{children:"Form import is an operation that is opposite to opening the form in a structured view. The import operator accepts files in a structured format, then parses them and saves the data to the properties of the set form in such a way that when this form is exported back into the imported format, it would recreate the original file."}),"\n",(0,i.jsx)(t.p,{children:'Since the import operator is essentially an "input operator", the following constraints apply to the form being imported:'}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["All form objects must belong to  ",(0,i.jsx)(t.a,{href:"/v4/Built-in_classes#inheritance",children:"numeric"})," or ",(0,i.jsx)(t.a,{href:"/v4/User_classes#abstract",children:"concrete"})," ",(0,i.jsx)(t.a,{href:"/v4/User_classes",children:"user"})," classes. Object groups must consist of exactly one object (this constraint is caused by the fact that all the used formats are essentially lists \u2014 that is, mappings of numbers to values)."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Properties and ",(0,i.jsx)(t.a,{href:"/v4/Form_structure#filters",children:"filters"})," on the form should be ",(0,i.jsx)(t.a,{href:"/v4/Property_change_CHANGE",children:"changeable"})," by a given value (that is, as a rule, be ",(0,i.jsx)(t.a,{href:"/v4/Data_properties_DATA",children:"primary"}),"). Before importing, any existing changes to the imported properties in the current session are canceled."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["During import, filters change to the ",(0,i.jsx)(t.a,{href:"/v4/Built-in_classes#defaultvalue",children:"default values"})," of value classes of these filters."]}),"\n",(0,i.jsxs)(t.p,{children:["When importing data into objects of numeric classes, 0-based numbering is used. In case of ",(0,i.jsx)(t.a,{href:"/v4/Structured_view#hierarchy",children:"hierarchical"}),' formats, numbering is "end-to-end" (that is, when the object group being imported is encountered for the second and subsequent times, object numbering in it starts from the position that the previous one stopped at).']}),"\n",(0,i.jsxs)(t.p,{children:["When importing from XLS and CSV without headers (with the ",(0,i.jsx)(t.code,{children:"NOHEADER"})," option), the platform automatically attempts to convert data to the necessary type. If it fails, a ",(0,i.jsx)(t.code,{children:"NULL"})," value is written to the property. Importing from other formats requires correct types. For example, if a string is required during data import from JSON, and the JSON file contains a number (without quotes), the platform will generate an error."]}),"\n",(0,i.jsxs)(t.p,{children:["If a property (object group) is not found during import, it is ignored (that is, its value remains equal to ",(0,i.jsx)(t.code,{children:"NULL"}),")."]}),"\n",(0,i.jsxs)(t.p,{children:["Form import is a general case of the ",(0,i.jsx)(t.a,{href:"/v4/Data_import_IMPORT",children:"data import"})," operator."]}),"\n",(0,i.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,i.jsxs)(t.p,{children:["To open the form in the structured view, use the ",(0,i.jsxs)(t.a,{href:"/v4/EXPORT_operator",children:[(0,i.jsx)(t.code,{children:"EXPORT"})," operator"]}),". To import a form, use the ",(0,i.jsxs)(t.a,{href:"/v4/IMPORT_operator",children:[(0,i.jsx)(t.code,{children:"IMPORT"})," operator"]}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-lsf",children:"FORM exportSku\n    OBJECTS st = Store\n\n    OBJECTS s = Sku\n    PROPERTIES(s) id, name, weight\n    FILTERS in(st, s)\n;\n\nexportSku (Store store)  {\n    // uploading to DBF all Sku for which in (Store, Sku) is specified for the desired warehouse\n    EXPORT exportSku OBJECTS st = store DBF CHARSET 'CP866';\n    EXPORT exportSku XML;\n    EXPORT exportSku OBJECTS st = store CSV ',';\n}\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-lsf",children:"\ndate = DATA DATE (INTEGER);\nsku = DATA BPSTRING[50] (INTEGER);\nprice = DATA NUMERIC[14,2] (INTEGER);\norder = DATA INTEGER (INTEGER);\nFORM import\n    OBJECTS o = INTEGER // orders\n    OBJECTS od = INTEGER // order lines\n    PROPERTIES (o) dateOrder = date // importing the date from the dateOrder field\n    PROPERTIES (od) sku = sku, price = price // importing product quantity from sku and price fields\n    FILTERS order(od) = o // writing the top order to order\n\n;\n\nimportForm()  {\n    INPUT f = FILE DO {\n        IMPORT import JSON FROM f;\n        SHOW import; // showing what was imported\n\n        // creating objects in the database\n        FOR DATE date = date(INTEGER io) NEW o = Order DO {\n            date(o) <- date;\n            FOR order(INTEGER iod) = io NEW od = OrderDetail DO {\n                price(od) <- price(iod);\n                sku(od) <- GROUP MAX Sku sku IF name(sku) = sku(iod); // finding sku with this name\n            }\n        }\n    }\n}\n"})})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return a},a:function(){return o}});var n=r(67294);let i={},s=n.createContext(i);function o(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);