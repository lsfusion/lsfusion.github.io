"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[66425],{1561:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var t=n(74848),i=n(28453);const o={title:"How-to: Interaction via HTTP protocol"},a=void 0,d={id:"How-to_Interaction_via_HTTP_protocol",title:"How-to: Interaction via HTTP protocol",description:"Example 1",source:"@site/versioned_docs/version-v5/How-to_Interaction_via_HTTP_protocol.md",sourceDirName:".",slug:"/How-to_Interaction_via_HTTP_protocol",permalink:"/How-to_Interaction_via_HTTP_protocol",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/How-to_Interaction_via_HTTP_protocol.md",tags:[],version:"v5",lastUpdatedAt:1708525070,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"How-to: Interaction via HTTP protocol"},sidebar:"learn",previous:{title:"How-to: Data import",permalink:"/How-to_Data_import"},next:{title:"How-to: Frontend",permalink:"/How-to_Frontend"}},s={},l=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3},{value:"Example 3",id:"example-3",level:2},{value:"Task",id:"task-2",level:3},{value:"Solution",id:"solution-2",level:3},{value:"Example 4",id:"example-4",level:2},{value:"Task",id:"task-3",level:3},{value:"Solution",id:"solution-3",level:3},{value:"Example 5",id:"example-5",level:2},{value:"Task",id:"task-4",level:3},{value:"Solution",id:"solution-4",level:3},{value:"Example 6",id:"example-6",level:2},{value:"Task",id:"task-5",level:3},{value:"Solution",id:"solution-5",level:3},{value:"Example 7",id:"example-7",level:2},{value:"Task",id:"task-6",level:3},{value:"Solution",id:"solution-6",level:3},{value:"Example 8",id:"example-8",level:2},{value:"Task",id:"task-7",level:3},{value:"Solution",id:"solution-7",level:3}];function c(e){const r={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsx)(r.h3,{id:"task",children:"Task"}),"\n",(0,t.jsx)(r.p,{children:"We have a certain set of cities associated with their countries."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lsf",children:"CLASS Country 'Country';\r\nid 'Code' = DATA STRING[20] (Country) IN id;\r\nname 'Name' = DATA ISTRING[100] (Country) IN id;\r\n\r\ncountry (STRING[20] id) = GROUP AGGR Country c BY id(c);\r\n\r\nCLASS City 'City';\r\nname 'Name' = DATA ISTRING[100] (City) IN id;\r\n\r\ncountry 'Country' = DATA Country (City);\r\nnameCountry 'Country' (City c) = name(country(c));\r\n\r\nFORM cities 'Cities'\r\n    OBJECTS c = City\r\n    PROPERTIES(c) name, nameCountry, NEW, DELETE\r\n;\r\n\r\nNAVIGATOR {\r\n    NEW cities;\r\n}\n"})}),"\n",(0,t.jsx)(r.p,{children:"We need to send an HTTP request for adding a city in the JSON format to a certain url."}),"\n",(0,t.jsx)(r.h3,{id:"solution",children:"Solution"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lsf",children:"postCity 'Send' (City c)  {\r\n    EXPORT JSON FROM countryId = id(country(c)), name = name(c);\r\n\r\n    LOCAL result = FILE();\r\n    EXTERNAL HTTP 'http://localhost:7651/exec?action=Location.createCity' PARAMS exportFile() TO result;\r\n\r\n    LOCAL code = STRING[10]();\r\n    LOCAL message = STRING[100]();\r\n    IMPORT JSON FROM result() TO() code, message;\r\n    IF NOT code() == '0' THEN {\r\n        MESSAGE 'Error: ' + message();\r\n    }\r\n}\r\n\r\nEXTEND FORM cities\r\n    PROPERTIES(c) postCity\r\n;\n"})}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsxs)(r.a,{href:"/Data_export_EXPORT",children:[(0,t.jsx)(r.code,{children:"EXPORT"})," operator"]})," will create a JSON in the ",(0,t.jsx)(r.a,{href:"/Built-in_classes",children:(0,t.jsx)(r.code,{children:"FILE"})})," format and then will write it to the ",(0,t.jsx)(r.code,{children:"exportFile"})," property. Here is an example of the generated file:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:'{"countryId":"123","name":"San Francisco"}\n'})}),"\n",(0,t.jsxs)(r.p,{children:["Then we call the ",(0,t.jsxs)(r.a,{href:"/Access_to_an_external_system_EXTERNAL",children:[(0,t.jsx)(r.code,{children:"EXTERNAL"})," operator"]}),", which sends a request to the specified url passing there the contents of the generated file as Body. In this case, since the property in the ",(0,t.jsx)(r.code,{children:"FROM"})," block has the type JSON, ",(0,t.jsx)(r.em,{children:"application/json"})," will be used as the content type. ",(0,t.jsx)(r.code,{children:"<namespace>.<property name>"})," is encoded in the url. In this case, the namespace of the action being called ",(0,t.jsx)(r.code,{children:"createCity"})," is ",(0,t.jsx)(r.code,{children:"Location"}),". All parameters are passed consequently with the ID ",(0,t.jsx)(r.code,{children:"p"}),". The response from the server will be written to the ",(0,t.jsx)(r.code,{children:"result"})," property. Suppose that the response is received in the JSON format and has one of the following types:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:'{"code":"0","message":"OK"}\r\n\r\n{"code":"1","message":"Invalid country code"}\n'})}),"\n",(0,t.jsxs)(r.p,{children:["The response is handled by the ",(0,t.jsxs)(r.a,{href:"/Data_import_IMPORT",children:[(0,t.jsx)(r.code,{children:"IMPORT"})," operator"]})," which parses the corresponding parameters into the ",(0,t.jsx)(r.code,{children:"code"})," and ",(0,t.jsx)(r.code,{children:"message"})," properties respectively. If any error occurs, the user will see a corresponding error message."]}),"\n",(0,t.jsx)(r.h2,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsx)(r.h3,{id:"task-1",children:"Task"}),"\n",(0,t.jsxs)(r.p,{children:["Similar to ",(0,t.jsx)(r.a,{href:"#example-1",children:(0,t.jsx)(r.strong,{children:"Example 1"})}),"."]}),"\n",(0,t.jsx)(r.p,{children:"We need to handle the incoming HTTP request and create a new city in the database with the parameters provided in the request."}),"\n",(0,t.jsx)(r.h3,{id:"solution-1",children:"Solution"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lsf",children:"createCity (FILE f)  {\r\n\r\n    LOCAL cy = STRING[20] ();\r\n    LOCAL ne = STRING[100] ();\r\n\r\n    IMPORT JSON FROM f AS FILE TO() cy = countryId, ne = name;\r\n\r\n    IF NOT country(cy()) THEN {\r\n        EXPORT JSON FROM code = '1', message = 'Invalid country code';\r\n        RETURN;\r\n    }\r\n\r\n    NEW c = City {\r\n        name(c) <- ne();\r\n        country(c) <- country(cy());\r\n\r\n        APPLY;\r\n    }\r\n\r\n    EXPORT JSON FROM code = '0', message = 'OK';\r\n}\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Since the property is named ",(0,t.jsx)(r.code,{children:"createCity"})," and located in the ",(0,t.jsx)(r.a,{href:"/Modules",children:"module"})," with the namespace ",(0,t.jsx)(r.code,{children:"Location"}),", the url on which the request will be handled looks like this:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"http://localhost:7651/exec?action=Location.createCity\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Body of the HTTP request will be passed as a parameter of the type ",(0,t.jsx)(r.code,{children:"FILE"}),". The values read from the ",(0,t.jsx)(r.code,{children:"countryId"})," and ",(0,t.jsx)(r.code,{children:"name"})," parameters are written to the local properties ",(0,t.jsx)(r.code,{children:"cy"})," and ",(0,t.jsx)(r.code,{children:"ne"})," respectively."]}),"\n",(0,t.jsxs)(r.p,{children:["If there is no country with the corresponding code, then a JSON file is generated similar to that described in the previous example, and the ",(0,t.jsxs)(r.a,{href:"/Exit_RETURN",children:[(0,t.jsx)(r.code,{children:"RETURN"})," operator"]})," is called to abort execution. By default, the response message value is also stored in the ",(0,t.jsx)(r.code,{children:"exportFile"})," property."]}),"\n",(0,t.jsx)(r.p,{children:'If all the actions are completed successfully, the corresponding "OK message" is generated in response.'}),"\n",(0,t.jsx)(r.h2,{id:"example-3",children:"Example 3"}),"\n",(0,t.jsx)(r.h3,{id:"task-2",children:"Task"}),"\n",(0,t.jsx)(r.p,{children:"We have the logic of book orders."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lsf",children:"CLASS Book 'Book';\r\nid 'Code' = DATA STRING[10] (Book) IN id;\r\nname 'Name' = DATA ISTRING[100] (Book) IN id;\r\n\r\nbook (STRING[10] id) = GROUP AGGR Book b BY id(b);\r\n\r\nCLASS Order 'Order';\r\ndate 'Date' = DATA DATE (Order);\r\nnumber 'Number' = DATA STRING[10] (Order);\r\n\r\nCLASS OrderDetail 'Order line';\r\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\r\n\r\nbook 'Book' = DATA Book (OrderDetail) NONULL;\r\nnameBook 'Book' (OrderDetail d) = name(book(d));\r\n\r\nquantity 'Quantity' = DATA INTEGER (OrderDetail);\r\nprice 'Price' = DATA NUMERIC[14,2] (OrderDetail);\r\n\r\nFORM order 'Order'\r\n    OBJECTS o = Order PANEL\r\n    PROPERTIES(o) date, number\r\n\r\n    OBJECTS d = OrderDetail\r\n    PROPERTIES(d) nameBook, quantity, price, NEW, DELETE\r\n    FILTERS order(d) == o\r\n\r\n    EDIT Order OBJECT o\r\n;\r\n\r\nFORM orders 'Orders'\r\n    OBJECTS i = Order\r\n    PROPERTIES(i) READONLY date, number\r\n    PROPERTIES(i) NEWSESSION NEW, EDIT, DELETE\r\n;\r\n\r\nNAVIGATOR {\r\n    NEW orders;\r\n}\n"})}),"\n",(0,t.jsx)(r.p,{children:"We need to send an HTTP request for creating a new order in the JSON format to a certain url."}),"\n",(0,t.jsx)(r.h3,{id:"solution-2",children:"Solution"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lsf",children:"FORM exportOrder\r\n    OBJECTS order = Order PANEL\r\n    PROPERTIES dt = date(order), nm = number(order)\r\n\r\n    OBJECTS detail = OrderDetail\r\n    PROPERTIES id = id(book(detail)), qn = quantity(detail), pr = price(detail)\r\n    FILTERS order(detail) == order\r\n;\r\n\r\nexportOrder 'Send' (Order o)  {\r\n    EXPORT exportOrder OBJECTS order = o JSON;\r\n\r\n    LOCAL result = FILE();\r\n    EXTERNAL HTTP 'http://localhost:7651/exec?action=Location.importOrder' PARAMS exportFile() TO result;\r\n}\r\n\r\nEXTEND FORM orders\r\n    PROPERTIES(i) exportOrder;\r\n;\n"})}),"\n",(0,t.jsxs)(r.p,{children:["To create a JSON with nested tags, we need to create a form with the corresponding objects linked via the ",(0,t.jsx)(r.code,{children:"FILTERS"})," block of operators. Based on the dependencies between objects, the system will generate a JSON file with the corresponding structure. In the considering example, the output JSON structure will look like this:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:'{\r\n   "dt":"20.08.18",\r\n   "nm":"1",\r\n   "detail":[\r\n      {\r\n         "pr":5.99,\r\n         "id":"b1",\r\n         "qn":3\r\n      },\r\n      {\r\n         "pr":6.99,\r\n         "id":"b2",\r\n         "qn":2\r\n      }\r\n   ]\r\n}\n'})}),"\n",(0,t.jsxs)(r.p,{children:["We do not create a custom tag for ",(0,t.jsx)(r.code,{children:"order"}),", since the object value is passed as an argument to the ",(0,t.jsx)(r.code,{children:"EXPORT"})," operator.",(0,t.jsx)(r.br,{}),"\n","In this example, the response to the HTTP request is ignored."]}),"\n",(0,t.jsx)(r.h2,{id:"example-4",children:"Example 4"}),"\n",(0,t.jsx)(r.h3,{id:"task-3",children:"Task"}),"\n",(0,t.jsxs)(r.p,{children:["Similar to ",(0,t.jsx)(r.a,{href:"#example-3",children:(0,t.jsx)(r.strong,{children:"Example 3"})}),"."]}),"\n",(0,t.jsx)(r.p,{children:"We need to handle the incoming HTTP request and create a new order in the database with the parameters provided in the request."}),"\n",(0,t.jsx)(r.h3,{id:"solution-3",children:"Solution"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lsf",children:"date = DATA LOCAL DATE();\r\nnumber = DATA LOCAL STRING[10]();\r\n\r\nid = DATA LOCAL STRING[10] (INTEGER);\r\nquantity = DATA LOCAL INTEGER (INTEGER);\r\nprice = DATA LOCAL NUMERIC[14,2] (INTEGER);\r\nFORM importOrder\r\n    PROPERTIES dt = date(), nm = number()\r\n\r\n    OBJECTS detail = INTEGER\r\n    PROPERTIES id = id(detail), qn = quantity(detail), pr = price(detail)\r\n;\r\n\r\nimportOrder (FILE f)  {\r\n    IMPORT importOrder JSON FROM f;\r\n\r\n    NEW o = Order {\r\n        date(o) <- date();\r\n        number(o) <- number();\r\n        FOR id(INTEGER detail) DO NEW d = OrderDetail {\r\n            order(d) <- o;\r\n            book(d) <- book(id(detail));\r\n            quantity(d) <- quantity(detail);\r\n            price(d) <- price(detail);\r\n        }\r\n\r\n        APPLY;\r\n    }\r\n}\n"})}),"\n",(0,t.jsxs)(r.p,{children:["To import the corresponding file in the JSON format, we need to create a form of a similar structure, except that the ",(0,t.jsx)(r.code,{children:"INTEGER"})," type will be used as object classes. During the import process, the tag values will be placed in the properties with the corresponding names. The ",(0,t.jsx)(r.code,{children:"date"})," and ",(0,t.jsx)(r.code,{children:"number"})," properties have no parameters, since their values in JSON are provided at the topmost level."]}),"\n",(0,t.jsx)(r.h2,{id:"example-5",children:"Example 5"}),"\n",(0,t.jsx)(r.h3,{id:"task-4",children:"Task"}),"\n",(0,t.jsxs)(r.p,{children:["Similar to ",(0,t.jsx)(r.a,{href:"#example-4",children:(0,t.jsx)(r.strong,{children:"Example 4"})}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["We need to send an HTTP request to create an order in the JSON format to a certain url as in the previous example, except that everything must be wrapped in the ",(0,t.jsx)(r.code,{children:"order"})," tag."]}),"\n",(0,t.jsx)(r.h3,{id:"solution-4",children:"Solution"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lsf",children:"GROUP order;\r\nFORM exportOrderNew\r\n    OBJECTS o = Order\r\n    PROPERTIES IN order dt = date(o), nm = number(o)\r\n\r\n    OBJECTS detail = OrderDetail IN order\r\n    PROPERTIES id = id(book(detail)), qn = quantity(detail), pr = price(detail)\r\n    FILTERS order(detail) == o\r\n;\r\n\r\nexportOrderNew 'Send (new)' (Order o)  {\r\n    EXPORT exportOrderNew OBJECTS o = o JSON;\r\n\r\n    LOCAL result = FILE();\r\n    EXTERNAL HTTP 'http://localhost:7651/exec?action=Location.importOrderNew' PARAMS exportFile() TO result;\r\n}\r\n\r\nEXTEND FORM orders\r\n    PROPERTIES(i) exportOrderNew;\r\n;\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Unlike the previous example, here we create a property ",(0,t.jsx)(r.a,{href:"/Groups_of_properties_and_actions",children:"group"})," named ",(0,t.jsx)(r.code,{children:"order"})," using the ",(0,t.jsxs)(r.a,{href:"/GROUP_operator",children:[(0,t.jsx)(r.code,{children:"GROUP"})," operator"]}),". When declaring a form, we put all the properties of the purchase order as well as the ",(0,t.jsx)(r.code,{children:"detail"})," object into this property group. The result JSON will look like this:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:'{\r\n   "order":{\r\n      "dt":"20.08.18",\r\n      "nm":"1",\r\n      "detail":[\r\n         {\r\n            "pr":5.99,\r\n            "id":"b1",\r\n            "qn":3\r\n         },\r\n         {\r\n            "pr":6.99,\r\n            "id":"b2",\r\n            "qn":2\r\n         }\r\n      ]\r\n   }\r\n}\n'})}),"\n",(0,t.jsx)(r.h2,{id:"example-6",children:"Example 6"}),"\n",(0,t.jsx)(r.h3,{id:"task-5",children:"Task"}),"\n",(0,t.jsxs)(r.p,{children:["Similar to ",(0,t.jsx)(r.a,{href:"#example-5",children:(0,t.jsx)(r.strong,{children:"Example 5"})}),"."]}),"\n",(0,t.jsx)(r.p,{children:"We need to handle the incoming HTTP request and create a new order in the database with the parameters provided in the request."}),"\n",(0,t.jsx)(r.h3,{id:"solution-5",children:"Solution"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lsf",children:"FORM importOrderNew\r\n    PROPERTIES IN order dt = date(), nm = number()\r\n\r\n    OBJECTS detail = INTEGER IN order\r\n    PROPERTIES id = id(detail), qn = quantity(detail), pr = price(detail)\r\n;\r\n\r\nimportOrderNew (FILE f)  {\r\n    IMPORT importOrderNew JSON FROM f;\r\n\r\n    NEW o = Order {\r\n        date(o) <- date();\r\n        number(o) <- number();\r\n        FOR id(INTEGER detail) DO NEW d = OrderDetail {\r\n            order(d) <- o;\r\n            book(d) <- book(id(detail));\r\n            quantity(d) <- quantity(detail);\r\n            price(d) <- price(detail);\r\n        }\r\n\r\n        APPLY;\r\n    }\r\n}\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Just as in the export process, we put all the properties and the ",(0,t.jsx)(r.code,{children:"detail"})," object to the ",(0,t.jsx)(r.code,{children:"order"})," group to correctly receive the new version of JSON."]}),"\n",(0,t.jsx)(r.h2,{id:"example-7",children:"Example 7"}),"\n",(0,t.jsx)(r.h3,{id:"task-6",children:"Task"}),"\n",(0,t.jsxs)(r.p,{children:["Similar to ",(0,t.jsx)(r.a,{href:"#example-3",children:(0,t.jsx)(r.strong,{children:"Example 3"})}),"."]}),"\n",(0,t.jsx)(r.p,{children:"We need to return a list of order numbers for a given date using an HTTP GET request in which this date is provided."}),"\n",(0,t.jsx)(r.h3,{id:"solution-6",children:"Solution"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lsf",children:"FORM exportOrders\r\n    OBJECTS date = DATE PANEL\r\n\r\n    OBJECTS order = Order\r\n    PROPERTIES nm = number(order)\r\n    FILTERS date(order) = date\r\n;\r\n\r\ngetOrdersByDate (DATE d) {\r\n    EXPORT exportOrders OBJECTS date = d JSON;\r\n}\n"})}),"\n",(0,t.jsxs)(r.p,{children:["The url to which the HTTP request should be sent will look like this: ",(0,t.jsx)(r.code,{children:"http://localhost:7651/exec?action=Location.getOrdersByDate&p=12.11.2018"}),"."]}),"\n",(0,t.jsx)(r.p,{children:"The response JSON will look like this:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:'{\r\n    "order": [\r\n        {\r\n            "nm": "42"\r\n        },\r\n        {\r\n            "nm": "65"\r\n        }\r\n    ]\r\n}\n'})}),"\n",(0,t.jsx)(r.h2,{id:"example-8",children:"Example 8"}),"\n",(0,t.jsx)(r.h3,{id:"task-7",children:"Task"}),"\n",(0,t.jsxs)(r.p,{children:["Similar to [",(0,t.jsx)(r.strong,{children:"Example 3"}),"](#example 3)."]}),"\n",(0,t.jsx)(r.p,{children:"For each order, there is a list of files attached to it."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lsf",children:"CLASS Attachment 'Attachment';\r\norder = DATA Order (Attachment) NONULL DELETE;\r\nname 'Name' = DATA STRING (Attachment);\r\nfile = DATA FILE (Attachment);\n"})}),"\n",(0,t.jsx)(r.p,{children:"We need to implement HTTP GET request that will return for the passed internal identifier of the order its parameters and a list of files.\r\nIn addition, we need to implement a separate request to retrieve the content of a specific file."}),"\n",(0,t.jsx)(r.h3,{id:"solution-7",children:"Solution"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lsf",children:"FORM orderAttachments\r\n    OBJECTS o = Order\r\n    PROPERTIES(o) number, date\r\n\r\n    OBJECTS attachments = Attachment\r\n    PROPERTIES id = VALUE(attachments), name(attachments)\r\n;\r\n\r\ngetOrderAttachments (LONG orderId) {\r\n    FOR LONG(Order o AS Order) = orderId DO {\r\n        EXPORT orderAttachments OBJECTS o = o JSON;\r\n    }\r\n}\n"})}),"\n",(0,t.jsxs)(r.p,{children:["To generate an HTTP request, use the following url : ",(0,t.jsx)(r.a,{href:"http://localhost:7651/exec?action=getOrderAttachments&p=32178",children:"http://localhost:7651/exec?action=getOrderAttachments&p=32178"}),".\r\nIn it ",(0,t.jsx)(r.em,{children:"p"})," parameter contains internal order identifier."]}),"\n",(0,t.jsx)(r.p,{children:"The response will return for example the following JSON :"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:'{\r\n    "date": "20.10.2021",\r\n    "number": "12",\r\n    "attachments": [\r\n        {\r\n            "name": "File 1",\r\n            "id": 32180\r\n        },\r\n        {\r\n            "name": "File 2",\r\n            "id": 32183\r\n        }\r\n    ]\r\n}\n'})}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.em,{children:"id"})," attributes will contain internal file identifiers. The contents of these files can then be read by a query using the following url :\r\n",(0,t.jsx)(r.a,{href:"http://localhost:7651/exec?action=getOrderAttachment&p=32180",children:"http://localhost:7651/exec?action=getOrderAttachment&p=32180"}),". The ",(0,t.jsx)(r.em,{children:"getOrderAttachment"})," action is declared as follows :"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lsf",children:"getOrderAttachment (LONG id) {\r\n    FOR LONG(Attachment a AS Attachment) = id DO\r\n        exportFile() <- file(a); \r\n}\n"})}),"\n",(0,t.jsxs)(r.p,{children:["The query will return a file with ",(0,t.jsx)(r.em,{children:"Content-Type"})," corresponding to the extension of the ",(0,t.jsx)(r.em,{children:"file"})," property."]})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>d});var t=n(96540);const i={},o=t.createContext(i);function a(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);