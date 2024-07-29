"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[66425],{1561:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var t=r(74848),i=r(28453);const o={title:"How-to: Interaction via HTTP protocol"},a=void 0,d={id:"How-to_Interaction_via_HTTP_protocol",title:"How-to: Interaction via HTTP protocol",description:"Example 1",source:"@site/versioned_docs/version-v5/How-to_Interaction_via_HTTP_protocol.md",sourceDirName:".",slug:"/How-to_Interaction_via_HTTP_protocol",permalink:"/v5/How-to_Interaction_via_HTTP_protocol",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/How-to_Interaction_via_HTTP_protocol.md",tags:[],version:"v5",lastUpdatedAt:170852507e4,frontMatter:{title:"How-to: Interaction via HTTP protocol"},sidebar:"learn",previous:{title:"How-to: Data import",permalink:"/v5/How-to_Data_import"},next:{title:"How-to: Frontend",permalink:"/v5/How-to_Frontend"}},s={},l=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3},{value:"Example 3",id:"example-3",level:2},{value:"Task",id:"task-2",level:3},{value:"Solution",id:"solution-2",level:3},{value:"Example 4",id:"example-4",level:2},{value:"Task",id:"task-3",level:3},{value:"Solution",id:"solution-3",level:3},{value:"Example 5",id:"example-5",level:2},{value:"Task",id:"task-4",level:3},{value:"Solution",id:"solution-4",level:3},{value:"Example 6",id:"example-6",level:2},{value:"Task",id:"task-5",level:3},{value:"Solution",id:"solution-5",level:3},{value:"Example 7",id:"example-7",level:2},{value:"Task",id:"task-6",level:3},{value:"Solution",id:"solution-6",level:3},{value:"Example 8",id:"example-8",level:2},{value:"Task",id:"task-7",level:3},{value:"Solution",id:"solution-7",level:3}];function c(e){const n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsx)(n.h3,{id:"task",children:"Task"}),"\n",(0,t.jsx)(n.p,{children:"We have a certain set of cities associated with their countries."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"CLASS Country 'Country';\nid 'Code' = DATA STRING[20] (Country) IN id;\nname 'Name' = DATA ISTRING[100] (Country) IN id;\n\ncountry (STRING[20] id) = GROUP AGGR Country c BY id(c);\n\nCLASS City 'City';\nname 'Name' = DATA ISTRING[100] (City) IN id;\n\ncountry 'Country' = DATA Country (City);\nnameCountry 'Country' (City c) = name(country(c));\n\nFORM cities 'Cities'\n    OBJECTS c = City\n    PROPERTIES(c) name, nameCountry, NEW, DELETE\n;\n\nNAVIGATOR {\n    NEW cities;\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"We need to send an HTTP request for adding a city in the JSON format to a certain url."}),"\n",(0,t.jsx)(n.h3,{id:"solution",children:"Solution"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"postCity 'Send' (City c)  {\n    EXPORT JSON FROM countryId = id(country(c)), name = name(c);\n\n    LOCAL result = FILE();\n    EXTERNAL HTTP 'http://localhost:7651/exec?action=Location.createCity' PARAMS exportFile() TO result;\n\n    LOCAL code = STRING[10]();\n    LOCAL message = STRING[100]();\n    IMPORT JSON FROM result() TO() code, message;\n    IF NOT code() == '0' THEN {\n        MESSAGE 'Error: ' + message();\n    }\n}\n\nEXTEND FORM cities\n    PROPERTIES(c) postCity\n;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsxs)(n.a,{href:"/v5/Data_export_EXPORT",children:[(0,t.jsx)(n.code,{children:"EXPORT"})," operator"]})," will create a JSON in the ",(0,t.jsx)(n.a,{href:"/v5/Built-in_classes",children:(0,t.jsx)(n.code,{children:"FILE"})})," format and then will write it to the ",(0,t.jsx)(n.code,{children:"exportFile"})," property. Here is an example of the generated file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{"countryId":"123","name":"San Francisco"}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Then we call the ",(0,t.jsxs)(n.a,{href:"/v5/Access_to_an_external_system_EXTERNAL",children:[(0,t.jsx)(n.code,{children:"EXTERNAL"})," operator"]}),", which sends a request to the specified url passing there the contents of the generated file as Body. In this case, since the property in the ",(0,t.jsx)(n.code,{children:"FROM"})," block has the type JSON, ",(0,t.jsx)(n.em,{children:"application/json"})," will be used as the content type. ",(0,t.jsx)(n.code,{children:"<namespace>.<property name>"})," is encoded in the url. In this case, the namespace of the action being called ",(0,t.jsx)(n.code,{children:"createCity"})," is ",(0,t.jsx)(n.code,{children:"Location"}),". All parameters are passed consequently with the ID ",(0,t.jsx)(n.code,{children:"p"}),". The response from the server will be written to the ",(0,t.jsx)(n.code,{children:"result"})," property. Suppose that the response is received in the JSON format and has one of the following types:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{"code":"0","message":"OK"}\n\n{"code":"1","message":"Invalid country code"}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The response is handled by the ",(0,t.jsxs)(n.a,{href:"/v5/Data_import_IMPORT",children:[(0,t.jsx)(n.code,{children:"IMPORT"})," operator"]})," which parses the corresponding parameters into the ",(0,t.jsx)(n.code,{children:"code"})," and ",(0,t.jsx)(n.code,{children:"message"})," properties respectively. If any error occurs, the user will see a corresponding error message."]}),"\n",(0,t.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsx)(n.h3,{id:"task-1",children:"Task"}),"\n",(0,t.jsxs)(n.p,{children:["Similar to ",(0,t.jsx)(n.a,{href:"#example-1",children:(0,t.jsx)(n.strong,{children:"Example 1"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:"We need to handle the incoming HTTP request and create a new city in the database with the parameters provided in the request."}),"\n",(0,t.jsx)(n.h3,{id:"solution-1",children:"Solution"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"createCity (FILE f)  {\n\n    LOCAL cy = STRING[20] ();\n    LOCAL ne = STRING[100] ();\n\n    IMPORT JSON FROM f AS FILE TO() cy = countryId, ne = name;\n\n    IF NOT country(cy()) THEN {\n        EXPORT JSON FROM code = '1', message = 'Invalid country code';\n        RETURN;\n    }\n\n    NEW c = City {\n        name(c) <- ne();\n        country(c) <- country(cy());\n\n        APPLY;\n    }\n\n    EXPORT JSON FROM code = '0', message = 'OK';\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Since the property is named ",(0,t.jsx)(n.code,{children:"createCity"})," and located in the ",(0,t.jsx)(n.a,{href:"/v5/Modules",children:"module"})," with the namespace ",(0,t.jsx)(n.code,{children:"Location"}),", the url on which the request will be handled looks like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"http://localhost:7651/exec?action=Location.createCity\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Body of the HTTP request will be passed as a parameter of the type ",(0,t.jsx)(n.code,{children:"FILE"}),". The values read from the ",(0,t.jsx)(n.code,{children:"countryId"})," and ",(0,t.jsx)(n.code,{children:"name"})," parameters are written to the local properties ",(0,t.jsx)(n.code,{children:"cy"})," and ",(0,t.jsx)(n.code,{children:"ne"})," respectively."]}),"\n",(0,t.jsxs)(n.p,{children:["If there is no country with the corresponding code, then a JSON file is generated similar to that described in the previous example, and the ",(0,t.jsxs)(n.a,{href:"/v5/Exit_RETURN",children:[(0,t.jsx)(n.code,{children:"RETURN"})," operator"]})," is called to abort execution. By default, the response message value is also stored in the ",(0,t.jsx)(n.code,{children:"exportFile"})," property."]}),"\n",(0,t.jsx)(n.p,{children:'If all the actions are completed successfully, the corresponding "OK message" is generated in response.'}),"\n",(0,t.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,t.jsx)(n.h3,{id:"task-2",children:"Task"}),"\n",(0,t.jsx)(n.p,{children:"We have the logic of book orders."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"CLASS Book 'Book';\nid 'Code' = DATA STRING[10] (Book) IN id;\nname 'Name' = DATA ISTRING[100] (Book) IN id;\n\nbook (STRING[10] id) = GROUP AGGR Book b BY id(b);\n\nCLASS Order 'Order';\ndate 'Date' = DATA DATE (Order);\nnumber 'Number' = DATA STRING[10] (Order);\n\nCLASS OrderDetail 'Order line';\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\n\nbook 'Book' = DATA Book (OrderDetail) NONULL;\nnameBook 'Book' (OrderDetail d) = name(book(d));\n\nquantity 'Quantity' = DATA INTEGER (OrderDetail);\nprice 'Price' = DATA NUMERIC[14,2] (OrderDetail);\n\nFORM order 'Order'\n    OBJECTS o = Order PANEL\n    PROPERTIES(o) date, number\n\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) nameBook, quantity, price, NEW, DELETE\n    FILTERS order(d) == o\n\n    EDIT Order OBJECT o\n;\n\nFORM orders 'Orders'\n    OBJECTS i = Order\n    PROPERTIES(i) READONLY date, number\n    PROPERTIES(i) NEWSESSION NEW, EDIT, DELETE\n;\n\nNAVIGATOR {\n    NEW orders;\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"We need to send an HTTP request for creating a new order in the JSON format to a certain url."}),"\n",(0,t.jsx)(n.h3,{id:"solution-2",children:"Solution"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"FORM exportOrder\n    OBJECTS order = Order PANEL\n    PROPERTIES dt = date(order), nm = number(order)\n\n    OBJECTS detail = OrderDetail\n    PROPERTIES id = id(book(detail)), qn = quantity(detail), pr = price(detail)\n    FILTERS order(detail) == order\n;\n\nexportOrder 'Send' (Order o)  {\n    EXPORT exportOrder OBJECTS order = o JSON;\n\n    LOCAL result = FILE();\n    EXTERNAL HTTP 'http://localhost:7651/exec?action=Location.importOrder' PARAMS exportFile() TO result;\n}\n\nEXTEND FORM orders\n    PROPERTIES(i) exportOrder;\n;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To create a JSON with nested tags, we need to create a form with the corresponding objects linked via the ",(0,t.jsx)(n.code,{children:"FILTERS"})," block of operators. Based on the dependencies between objects, the system will generate a JSON file with the corresponding structure. In the considering example, the output JSON structure will look like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n   "dt":"20.08.18",\n   "nm":"1",\n   "detail":[\n      {\n         "pr":5.99,\n         "id":"b1",\n         "qn":3\n      },\n      {\n         "pr":6.99,\n         "id":"b2",\n         "qn":2\n      }\n   ]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["We do not create a custom tag for ",(0,t.jsx)(n.code,{children:"order"}),", since the object value is passed as an argument to the ",(0,t.jsx)(n.code,{children:"EXPORT"})," operator.",(0,t.jsx)(n.br,{}),"\n","In this example, the response to the HTTP request is ignored."]}),"\n",(0,t.jsx)(n.h2,{id:"example-4",children:"Example 4"}),"\n",(0,t.jsx)(n.h3,{id:"task-3",children:"Task"}),"\n",(0,t.jsxs)(n.p,{children:["Similar to ",(0,t.jsx)(n.a,{href:"#example-3",children:(0,t.jsx)(n.strong,{children:"Example 3"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:"We need to handle the incoming HTTP request and create a new order in the database with the parameters provided in the request."}),"\n",(0,t.jsx)(n.h3,{id:"solution-3",children:"Solution"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"date = DATA LOCAL DATE();\nnumber = DATA LOCAL STRING[10]();\n\nid = DATA LOCAL STRING[10] (INTEGER);\nquantity = DATA LOCAL INTEGER (INTEGER);\nprice = DATA LOCAL NUMERIC[14,2] (INTEGER);\nFORM importOrder\n    PROPERTIES dt = date(), nm = number()\n\n    OBJECTS detail = INTEGER\n    PROPERTIES id = id(detail), qn = quantity(detail), pr = price(detail)\n;\n\nimportOrder (FILE f)  {\n    IMPORT importOrder JSON FROM f;\n\n    NEW o = Order {\n        date(o) <- date();\n        number(o) <- number();\n        FOR id(INTEGER detail) DO NEW d = OrderDetail {\n            order(d) <- o;\n            book(d) <- book(id(detail));\n            quantity(d) <- quantity(detail);\n            price(d) <- price(detail);\n        }\n\n        APPLY;\n    }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To import the corresponding file in the JSON format, we need to create a form of a similar structure, except that the ",(0,t.jsx)(n.code,{children:"INTEGER"})," type will be used as object classes. During the import process, the tag values will be placed in the properties with the corresponding names. The ",(0,t.jsx)(n.code,{children:"date"})," and ",(0,t.jsx)(n.code,{children:"number"})," properties have no parameters, since their values in JSON are provided at the topmost level."]}),"\n",(0,t.jsx)(n.h2,{id:"example-5",children:"Example 5"}),"\n",(0,t.jsx)(n.h3,{id:"task-4",children:"Task"}),"\n",(0,t.jsxs)(n.p,{children:["Similar to ",(0,t.jsx)(n.a,{href:"#example-4",children:(0,t.jsx)(n.strong,{children:"Example 4"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["We need to send an HTTP request to create an order in the JSON format to a certain url as in the previous example, except that everything must be wrapped in the ",(0,t.jsx)(n.code,{children:"order"})," tag."]}),"\n",(0,t.jsx)(n.h3,{id:"solution-4",children:"Solution"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"GROUP order;\nFORM exportOrderNew\n    OBJECTS o = Order\n    PROPERTIES IN order dt = date(o), nm = number(o)\n\n    OBJECTS detail = OrderDetail IN order\n    PROPERTIES id = id(book(detail)), qn = quantity(detail), pr = price(detail)\n    FILTERS order(detail) == o\n;\n\nexportOrderNew 'Send (new)' (Order o)  {\n    EXPORT exportOrderNew OBJECTS o = o JSON;\n\n    LOCAL result = FILE();\n    EXTERNAL HTTP 'http://localhost:7651/exec?action=Location.importOrderNew' PARAMS exportFile() TO result;\n}\n\nEXTEND FORM orders\n    PROPERTIES(i) exportOrderNew;\n;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Unlike the previous example, here we create a property ",(0,t.jsx)(n.a,{href:"/v5/Groups_of_properties_and_actions",children:"group"})," named ",(0,t.jsx)(n.code,{children:"order"})," using the ",(0,t.jsxs)(n.a,{href:"/v5/GROUP_operator",children:[(0,t.jsx)(n.code,{children:"GROUP"})," operator"]}),". When declaring a form, we put all the properties of the purchase order as well as the ",(0,t.jsx)(n.code,{children:"detail"})," object into this property group. The result JSON will look like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n   "order":{\n      "dt":"20.08.18",\n      "nm":"1",\n      "detail":[\n         {\n            "pr":5.99,\n            "id":"b1",\n            "qn":3\n         },\n         {\n            "pr":6.99,\n            "id":"b2",\n            "qn":2\n         }\n      ]\n   }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"example-6",children:"Example 6"}),"\n",(0,t.jsx)(n.h3,{id:"task-5",children:"Task"}),"\n",(0,t.jsxs)(n.p,{children:["Similar to ",(0,t.jsx)(n.a,{href:"#example-5",children:(0,t.jsx)(n.strong,{children:"Example 5"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:"We need to handle the incoming HTTP request and create a new order in the database with the parameters provided in the request."}),"\n",(0,t.jsx)(n.h3,{id:"solution-5",children:"Solution"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"FORM importOrderNew\n    PROPERTIES IN order dt = date(), nm = number()\n\n    OBJECTS detail = INTEGER IN order\n    PROPERTIES id = id(detail), qn = quantity(detail), pr = price(detail)\n;\n\nimportOrderNew (FILE f)  {\n    IMPORT importOrderNew JSON FROM f;\n\n    NEW o = Order {\n        date(o) <- date();\n        number(o) <- number();\n        FOR id(INTEGER detail) DO NEW d = OrderDetail {\n            order(d) <- o;\n            book(d) <- book(id(detail));\n            quantity(d) <- quantity(detail);\n            price(d) <- price(detail);\n        }\n\n        APPLY;\n    }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Just as in the export process, we put all the properties and the ",(0,t.jsx)(n.code,{children:"detail"})," object to the ",(0,t.jsx)(n.code,{children:"order"})," group to correctly receive the new version of JSON."]}),"\n",(0,t.jsx)(n.h2,{id:"example-7",children:"Example 7"}),"\n",(0,t.jsx)(n.h3,{id:"task-6",children:"Task"}),"\n",(0,t.jsxs)(n.p,{children:["Similar to ",(0,t.jsx)(n.a,{href:"#example-3",children:(0,t.jsx)(n.strong,{children:"Example 3"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:"We need to return a list of order numbers for a given date using an HTTP GET request in which this date is provided."}),"\n",(0,t.jsx)(n.h3,{id:"solution-6",children:"Solution"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"FORM exportOrders\n    OBJECTS date = DATE PANEL\n\n    OBJECTS order = Order\n    PROPERTIES nm = number(order)\n    FILTERS date(order) = date\n;\n\ngetOrdersByDate (DATE d) {\n    EXPORT exportOrders OBJECTS date = d JSON;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The url to which the HTTP request should be sent will look like this: ",(0,t.jsx)(n.code,{children:"http://localhost:7651/exec?action=Location.getOrdersByDate&p=12.11.2018"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The response JSON will look like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "order": [\n        {\n            "nm": "42"\n        },\n        {\n            "nm": "65"\n        }\n    ]\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"example-8",children:"Example 8"}),"\n",(0,t.jsx)(n.h3,{id:"task-7",children:"Task"}),"\n",(0,t.jsxs)(n.p,{children:["Similar to [",(0,t.jsx)(n.strong,{children:"Example 3"}),"](#example 3)."]}),"\n",(0,t.jsx)(n.p,{children:"For each order, there is a list of files attached to it."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"CLASS Attachment 'Attachment';\norder = DATA Order (Attachment) NONULL DELETE;\nname 'Name' = DATA STRING (Attachment);\nfile = DATA FILE (Attachment);\n"})}),"\n",(0,t.jsx)(n.p,{children:"We need to implement HTTP GET request that will return for the passed internal identifier of the order its parameters and a list of files.\nIn addition, we need to implement a separate request to retrieve the content of a specific file."}),"\n",(0,t.jsx)(n.h3,{id:"solution-7",children:"Solution"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"FORM orderAttachments\n    OBJECTS o = Order\n    PROPERTIES(o) number, date\n\n    OBJECTS attachments = Attachment\n    PROPERTIES id = VALUE(attachments), name(attachments)\n;\n\ngetOrderAttachments (LONG orderId) {\n    FOR LONG(Order o AS Order) = orderId DO {\n        EXPORT orderAttachments OBJECTS o = o JSON;\n    }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To generate an HTTP request, use the following url : ",(0,t.jsx)(n.a,{href:"http://localhost:7651/exec?action=getOrderAttachments&p=32178",children:"http://localhost:7651/exec?action=getOrderAttachments&p=32178"}),".\nIn it ",(0,t.jsx)(n.em,{children:"p"})," parameter contains internal order identifier."]}),"\n",(0,t.jsx)(n.p,{children:"The response will return for example the following JSON :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "date": "20.10.2021",\n    "number": "12",\n    "attachments": [\n        {\n            "name": "File 1",\n            "id": 32180\n        },\n        {\n            "name": "File 2",\n            "id": 32183\n        }\n    ]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"id"})," attributes will contain internal file identifiers. The contents of these files can then be read by a query using the following url :\n",(0,t.jsx)(n.a,{href:"http://localhost:7651/exec?action=getOrderAttachment&p=32180",children:"http://localhost:7651/exec?action=getOrderAttachment&p=32180"}),". The ",(0,t.jsx)(n.em,{children:"getOrderAttachment"})," action is declared as follows :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"getOrderAttachment (LONG id) {\n    FOR LONG(Attachment a AS Attachment) = id DO\n        exportFile() <- file(a); \n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The query will return a file with ",(0,t.jsx)(n.em,{children:"Content-Type"})," corresponding to the extension of the ",(0,t.jsx)(n.em,{children:"file"})," property."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>d});var t=r(96540);const i={},o=t.createContext(i);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);