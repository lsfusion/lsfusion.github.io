"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[26689],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,h=d["".concat(i,".").concat(u)]||d[u]||c[u]||r;return n?a.createElement(h,s(s({ref:t},m),{},{components:n})):a.createElement(h,s({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24941:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return p}});var a=n(83117),o=(n(67294),n(3905));const r={title:"How-to: Frontend"},s=void 0,l={unversionedId:"How-to_Frontend",id:"version-v4/How-to_Frontend",title:"How-to: Frontend",description:"The easiest way to organize the interaction of a React application with an application based on lsFusion is communication via the HTTP protocol through the JSON API. To export a list of objects meeting a specified condition, it is most convenient to use the interface located at the eval/action Url. You can pass lsFusion program code to it in BODY, and it will then be executed. If you need to return data from your request, use the EXPORT operator. By default it returns data in JSON format, which is then easily processed using JavaScript.",source:"@site/versioned_docs/version-v4/How-to_Frontend.md",sourceDirName:".",slug:"/How-to_Frontend",permalink:"/v4/How-to_Frontend",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/How-to_Frontend.md",tags:[],version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"Jun 9, 2021",frontMatter:{title:"How-to: Frontend"},sidebar:"learn",previous:{title:"How-to: Interaction via HTTP protocol",permalink:"/v4/How-to_Interaction_via_HTTP_protocol"},next:{title:"How-to: Access to internal systems",permalink:"/v4/How-to_Access_to_internal_systems"}},i={},p=[{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"Example 3",id:"example-3",level:3},{value:"Example 4",id:"example-4",level:3},{value:"Example 5",id:"example-5",level:3}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The easiest way to organize the interaction of a React application with an application based on ",(0,o.kt)("strong",{parentName:"p"},"lsFusion")," is ",(0,o.kt)("a",{parentName:"p",href:"/v4/Access_from_an_external_system"},"communication via the HTTP protocol")," through the JSON API. To export a list of objects meeting a specified condition, it is most convenient to use the interface located at the eval/action Url. You can pass lsFusion program code to it in BODY, and it will then be executed. If you need to return data from your request, use the ",(0,o.kt)("a",{parentName:"p",href:"/v4/EXPORT_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"EXPORT")," operator"),". By default it returns data in JSON format, which is then easily processed using JavaScript."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In these examples we will make requests without authorization. For the server to start accepting requests without authorization, you need to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"enableAPI")," option in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Administration > Settings")," form on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Settings")," tab to the value ",(0,o.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,o.kt)("p",{parentName:"admonition"},"A safer way would be to create a separate action for each request, with an @@api marker. and set ",(0,o.kt)("inlineCode",{parentName:"p"},"enableAPI")," to the value ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),". In this case, the server will only accept requests for these specific actions and from an authorized user. Inside these actions, before starting processing you can check for availability to the user using the ",(0,o.kt)("inlineCode",{parentName:"p"},"currentUser()")," property.")),(0,o.kt)("h3",{id:"example-1"},"Example 1"),(0,o.kt)("p",null,"For clarity, we implement the simple form from the ",(0,o.kt)("a",{parentName:"p",href:"/v4/Score_table"},"Score table")," example (in read-only mode)."),(0,o.kt)("p",null,"We will implement reading flat data set as a function with one parameter \u2013 the query text, \u2013 to which ",(0,o.kt)("inlineCode",{parentName:"p"},"EXPORT FROM")," is added on the left:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const url = "https://demo.lsfusion.org/hockeystats/eval/action";\nfunction select(script) {\n  const params = {\n    method: "post",\n    body: "EXPORT FROM " + script\n  }\n  return fetch(url, params).then(response => response.json());\n}\n')),(0,o.kt)("p",null,"For example, a request with the following content"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'select("date(Game g), hostTeamName(g), hostGoals(g), guestGoals(g), guestTeamName(g), resultName(g)")\n')),(0,o.kt)("p",null,"will return JSON of the form"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n   {\n      "date":"05.02.19",\n      "hostGoals":3,\n      "guestTeamName":"New York Rangers",\n      "hostTeamName":"Detroit Red Wings",\n      "guestGoals":2,\n      "resultName":"\u041f\u041e"\n   },\n   {\n      "date":"13.02.19",\n      "hostGoals":2,\n      "guestTeamName":"Toronto Maple Leafs",\n      "hostTeamName":"Montreal Canadiens",\n      "guestGoals":0,\n      "resultName":"\u041f"\n   },\n   {\n      "date":"15.02.19",\n      "hostGoals":3,\n      "guestTeamName":"Montreal Canadiens",\n      "hostTeamName":"New York Rangers",\n      "guestGoals":5,\n      "resultName":"\u041f"\n   },\n   {\n      "date":"17.02.19",\n      "hostGoals":2,\n      "guestTeamName":"Detroit Red Wings",\n      "hostTeamName":"Toronto Maple Leafs",\n      "guestGoals":1,\n      "resultName":"\u041f\u0411"\n   }\n]\n')),(0,o.kt)("p",null,"It only remains to use this data as a state(s) for React component(s) (for example, using ",(0,o.kt)("a",{parentName:"p",href:"https://material-ui.com/"},"Material-UI"),"):"),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/wnx876z56k?fontsize=14",width:"100%",height:"500px",border:"0","border-radius":"4px",overflow:"hidden",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),(0,o.kt)("h3",{id:"example-2"},"Example 2"),(0,o.kt)("p",null,"Let's consider a slightly more complicated case, when you need to make parameterized queries depending on data selected by the user. For backend logic we'll take the ",(0,o.kt)("a",{parentName:"p",href:"/v4/Materials_management"},"Material Flow Management")," example."),(0,o.kt)("p",null,"Suppose we need to build a form in which we need to show shipments, with the ability to filter by date and warehouse. And when the user selects a specific document, its lines should be displayed."),(0,o.kt)("p",null,"To implement a request to the backend to receive shipments with filtering, we declare a function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const url = "https://demo.lsfusion.org/mm/eval/action";\nfunction select(script, data) {\n  var formData = new FormData();\n\n  formData.append("script", "EXPORT FROM " + script);\n  for (var name in data) {\n    formData.append(name, data[name]);\n  }\n  const params = {\n    method: "post",\n    headers: {\n      "Content-type": "multipart/form-data"\n    },\n    body: formData\n  };\n  return fetch(url, params).then(response => response.json());\n}\n')),(0,o.kt)("p",null,"The first ",(0,o.kt)("inlineCode",{parentName:"p"},"select")," function makes a POST request with content type multipart/form-data, passing the text of the request to the server as its first parameter and the values of the request as its other parameters."),(0,o.kt)("p",null,"For example, a function call of the form"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'select("id = Shipment s, number(s) WHERE date(s) = $1", { date: new Date().toISOString().substr(0, 10) })\n')),(0,o.kt)("p",null,"will return all shipments for today's date. It should be noted that the name of the date parameter is not used in the backend, and can be absolutely anything. Only the order of the parameters is important."),(0,o.kt)("p",null,"For convenience, we also declare a function that will generate a request by adding to the filter only those parameters whose values are not null:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function selectWhere(script, wheres) {\n  var exprs = [], params = {};\n  for (var i = 0; i < wheres.length; i++) {\n    if (wheres[i].value != null) {\n      exprs.push(wheres[i].expr + "=$" + (i + 1));\n      params = { ...params, ...{ ["p" + i]: wheres[i].value } };\n    }\n  }\n  return select(script + (exprs.length > 0 ? " WHERE " : "") + exprs.join(" AND "), params);\n}\n')),(0,o.kt)("p",null,"The corresponding function call above can be replaced with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'selectWhere("id = Shipment s, number(s)", [{ expr: "date(s)", value : new Date().toISOString().substr(0, 10) }])\n')),(0,o.kt)("p",null,"Using the requests described above, we implement the required logic. To do this, we define two components:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Shipments"),", which will display the list of documents using the List component (from Material-UI, as mentioned above). It will also contain a ",(0,o.kt)("inlineCode",{parentName:"li"},"Filters")," component, using which the user will set the parameters for filtering."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Details"),", which will display the lines of the selected document. If needed, it could be embedded in the ",(0,o.kt)("inlineCode",{parentName:"li"},"Shipments")," component.")),(0,o.kt)("p",null,"The rest of the code will look like this:"),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/zxzmmk9n9l?fontsize=14&module=%2Fsrc%2FApp.js",width:"100%",height:"500px",border:"0","border-radius":"4px",overflow:"hidden",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),(0,o.kt)("h3",{id:"example-3"},"Example 3"),(0,o.kt)("p",null,"We implement a simple CRUD interface for entering goods."),(0,o.kt)("p",null,"Since this will require changing the information in the database, we declare a function that will execute arbitrary code on the platform (with error handling):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function handleErrors(response) {\n  if (!response.ok) {\n    response.text().then(text => console.log(text));\n    throw Error(response);\n  }\n  return response;\n}\n\nfunction evaluate(script, data) {\n  var formData = new FormData();\n\n\n  formData.append("script", script);\n  for (var name in data) {\n    formData.append(name, data[name]);\n  }\n  const params = {\n    method: "post",\n    headers: {\n      "Content-type": "multipart/form-data"\n    },\n    body: formData\n  };\n  return fetch(url, params).then(handleErrors);\n}\n')),(0,o.kt)("p",null,"For example, to create an item in the database you would need to execute the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'evaluate("NEW s = Item { name(s) <- $1; barcode(s) <- $2; salePrice(s) <- $3; APPLY; }", { name : "My item", barcode : "4341", salePrice : 2.34 } )\n')),(0,o.kt)("p",null,"As in the examples above, the names of the parameters are not important: their order is what matters. The ",(0,o.kt)("a",{parentName:"p",href:"/v4/APPLY_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"APPLY")," operator")," saves changes to the database. Without it, the data will not be saved and will be discarded upon completion of the request."),(0,o.kt)("p",null,"To change the attributes of the product, you can use the following code (where id is the product's internal ID):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'evaluate("FOR Item s = $0 DO { name(s) <- $1; barcode(s) <- $2; salePrice(s) <- $3; APPLY; }", { id : 32494, name : "My item", barcode : "4341", salePrice : 2.34 })\n')),(0,o.kt)("p",null,"To delete a given product:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'evaluate("DELETE s WHERE s AS Item = $1; APPLY; ", { id : 32494 })\n')),(0,o.kt)("p",null,"The code implementing the user interface may look like this:"),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/7rl7n2rj0?fontsize=14&module=%2Fsrc%2FItems.js",width:"100%",height:"500px",border:"0","border-radius":"4px",overflow:"hidden",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),(0,o.kt)("h3",{id:"example-4"},"Example 4"),(0,o.kt)("p",null,"In this example, we implement the ability to view and edit a list of documents with lines."),(0,o.kt)("p",null,"It will be necessary to pass the set of lines from a specific document to the server. So as to perform all the changes with one request, rather than having to make separate requests for each line, we will pass them as a parameter in a JSON-format file. To do this, we modify our ",(0,o.kt)("inlineCode",{parentName:"p"},"evaluate")," function as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function isObject(obj) {\n  return obj === Object(obj);\n}\nfunction evaluate(script, data) {\n  var formData = new FormData();\n\n\n  formData.append("script", script);\n  console.log(data);\n  for (var name in data) {\n    if (isObject(data[name]))\n      formData.append(\n        name,\n        new Blob([JSON.stringify(data[name])], { type: "application/json" })\n      );\n    else formData.append(name, data[name]);\n  }\n  const params = {\n    method: "post",\n    headers: {\n      "Content-type": "multipart/form-data"\n    },\n    body: formData\n  };\n  return fetch(url, params).then(handleErrors);\n}\n')),(0,o.kt)("p",null,"If an object is passed as a field in the ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," object, it is now converted to JSON and passed as a file of type application/json."),(0,o.kt)("p",null,"In order to accept this file as the final parameter (",(0,o.kt)("inlineCode",{parentName:"p"},"$5")," in this example) and update the lines by deleting the old ones and creating new ones, we will use the following code on the platform:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"IMPORT JSON FROM $5 AS FILE FIELDS LONG item, NUMERIC[16,3] quantity, NUMERIC[16,3] price, NUMERIC[16,3] sum DO \n    NEW d = ShipmentDetail { \n        shipment(d) <- s; \n        item(d) <- GROUP MAX i AS Item IF LONG(i) = item; \n        quantity(d) <- quantity; \n        price(d) <- price; \n        sum(d) <- sum; \n    }\n")),(0,o.kt)("p",null,"To parse the JSON we use the special ",(0,o.kt)("a",{parentName:"p",href:"/v4/IMPORT_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"IMPORT")," operator"),". It assumes that it will receive a flat JSON as an array of objects with numerical fields ",(0,o.kt)("inlineCode",{parentName:"p"},"item"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"quantity"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"price")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"sum"),". A ",(0,o.kt)("inlineCode",{parentName:"p"},"ShipmentDetail")," will be created for each object. It is then linked to the corresponding object ",(0,o.kt)("inlineCode",{parentName:"p"},"s")," of class ",(0,o.kt)("inlineCode",{parentName:"p"},"Shipment"),". After this the SKU with the internal code equals to the passed one is written, and then the other properties are written. Parsing of more complex JSON can be found in examples ",(0,o.kt)("a",{parentName:"p",href:"/v4/How-to_Data_import"},"How-to: Data import")," and ",(0,o.kt)("a",{parentName:"p",href:"/v4/How-to_Interaction_via_HTTP_protocol"},"How-to: Interaction via HTTP protocol"),"."),(0,o.kt)("p",null,"Saving changes may violate a ",(0,o.kt)("a",{parentName:"p",href:"/v4/Constraints"},"constraint"),". In this case, the changes will not be saved to the database (however, they will remain in the ",(0,o.kt)("a",{parentName:"p",href:"/v4/Change_sessions"},"change session"),"). In this event the value ",(0,o.kt)("inlineCode",{parentName:"p"},"TRUE")," will be written to the ",(0,o.kt)("inlineCode",{parentName:"p"},"canceled")," property, and a constraint message will be written to the ",(0,o.kt)("inlineCode",{parentName:"p"},"applyMessage")," property. In order to handle this situation, we will use the following code on the platform:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"APPLY; \nIF canceled() THEN \n    EXPORT FROM message = applyMessage();\n")),(0,o.kt)("p",null,"If the changes fail the message is returned in the BODY of the response in JSON form with a single field ",(0,o.kt)("inlineCode",{parentName:"p"},"applyMessage"),"."),(0,o.kt)("p",null,"The final code that is passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"evaluate")," for, e.g., creating a document will look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"NEW s = Shipment {\n    number(s) <- $1; date(s) <- $2; customer(s) <- $3; stock(s) <- $4;\n    IMPORT JSON FROM $5 AS FILE FIELDS LONG item, NUMERIC[16,3] quantity, NUMERIC[16,3] price, NUMERIC[16,3] sum DO \n        NEW d = ShipmentDetail { \n            shipment(d) <- s; \n            item(d) <- GROUP MAX i AS Item IF LONG(i) = item; \n            quantity(d) <- quantity; \n            price(d) <- price; \n            sum(d) <- sum; \n        }\n    APPLY; \n    IF canceled() THEN \n        EXPORT FROM message = applyMessage();\n}\n")),(0,o.kt)("p",null,"For editing (first, existing lines are deleted), accordingly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"FOR Shipment s = $0 DO {\n    number(s) <- $1; date(s) <- $2; customer(s) <- $3; stock(s) <- $4;\n    DELETE ShipmentDetail d WHERE shipment(d) = s;\n    IMPORT JSON FROM $5 AS FILE FIELDS LONG item, NUMERIC[16,3] quantity, NUMERIC[16,3] price, NUMERIC[16,3] sum DO \n        NEW d = ShipmentDetail { \n            shipment(d) <- s; \n            item(d) <- GROUP MAX i AS Item IF LONG(i) = item; \n            quantity(d) <- quantity; \n            price(d) <- price; \n            sum(d) <- sum; \n        }\n    APPLY; \n    IF canceled() THEN \n        EXPORT FROM message = applyMessage();\n}\n")),(0,o.kt)("p",null,"To handle the constraint violation error (since the response status will be 200 in this implementation in both cases), we assume that if the BODY of the answer is empty then there is no error. If there is any text, then this is the JSON containing the text of the constraint. For example, we can use the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'evaluate("...").then(response =>\n    response.text().then(text => {\n        if (text === "") {\n            // ok\n        } else {\n            console.log(JSON.parse(text).applyMessage);\n        }\n      })\n    );\n')),(0,o.kt)("p",null,"The implementation of the entire task may look as follows:"),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/suspicious-shockley-r16kv?fontsize=14",title:"suspicious-shockley-r16kv",width:"100%",height:"500px",border:"0","border-radius":"4px",overflow:"hidden",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),(0,o.kt)("h3",{id:"example-5"},"Example 5"),(0,o.kt)("p",null,"By analogy with ",(0,o.kt)("a",{parentName:"p",href:"#example-1"},(0,o.kt)("strong",{parentName:"a"},"Example 1")),", we implement the Score table form with editing ability using the ",(0,o.kt)("a",{parentName:"p",href:"/v4/Access_from_an_external_system#form"},"Form API"),". To use it, you need to link the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@lsfusion/core"},"@lsfusion/core")," library."),(0,o.kt)("p",null,"First of all, you need to initialize the form using the ",(0,o.kt)("inlineCode",{parentName:"p"},"create")," function after loading the main component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'componentDidMount() {\n  create(updateState => this.setState(updateState), url, {\n    name: "MainForm"\n  });\n}\n')),(0,o.kt)("p",null,"The first parameter passed is the callback function to which the initial state of the form will be passed after the response from the server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "game":{\n      "list":[\n         {\n            "date":"05.02.19",\n            "hostGoals":3,\n            "guestTeamName":"New York Rangers",\n            "hostTeamName":"Detroit Red Wings",\n            "guestGoals":2,\n            "value":6054,\n            "resultName":"\u041f\u041e"\n         },\n         {\n            "date":"13.02.19",\n            "hostGoals":2,\n            "guestTeamName":"Toronto Maple Leafs",\n            "hostTeamName":"Montreal Canadiens",\n            "guestGoals":0,\n            "value":6063,\n            "resultName":"\u041f"\n         },\n         {\n            "date":"15.02.19",\n            "hostGoals":3,\n            "guestTeamName":"Montreal Canadiens",\n            "hostTeamName":"New York Rangers",\n            "guestGoals":5,\n            "value":6072,\n            "resultName":"\u041f"\n         },\n         {\n            "date":"17.02.19",\n            "hostGoals":2,\n            "guestTeamName":"Detroit Red Wings",\n            "hostTeamName":"Toronto Maple Leafs",\n            "guestGoals":1,\n            "value":6075,\n            "resultName":"\u041f\u0411"\n         }\n      ],\n      "value":6054\n   },\n   "team":{\n      "list":[\n         {\n            "gamesLostSO":0,\n            "goalsConceded":3,\n            "gamesLostOT":0,\n            "goalsScored":7,\n            "gamesWon":2,\n            "points":6,\n            "gamesWonOT":0,\n            "gamesLost":0,\n            "gamesPlayed":2,\n            "name":"Montreal Canadiens",\n            "gamesWonSO":0,\n            "place":1,\n            "value":6064\n         },\n         {\n            "gamesLostSO":1,\n            "goalsConceded":4,\n            "gamesLostOT":0,\n            "goalsScored":4,\n            "gamesWon":0,\n            "points":3,\n            "gamesWonOT":1,\n            "gamesLost":0,\n            "gamesPlayed":2,\n            "name":"Detroit Red Wings",\n            "gamesWonSO":0,\n            "place":2,\n            "value":6057\n         },\n         {\n            "gamesLostSO":0,\n            "goalsConceded":3,\n            "gamesLostOT":0,\n            "goalsScored":2,\n            "gamesWon":0,\n            "points":2,\n            "gamesWonOT":0,\n            "gamesLost":1,\n            "gamesPlayed":2,\n            "name":"Toronto Maple Leafs",\n            "gamesWonSO":1,\n            "place":3,\n            "value":10993\n         },\n         {\n            "gamesLostSO":0,\n            "goalsConceded":8,\n            "gamesLostOT":1,\n            "goalsScored":5,\n            "gamesWon":0,\n            "points":1,\n            "gamesWonOT":0,\n            "gamesLost":1,\n            "gamesPlayed":2,\n            "name":"New York Rangers",\n            "gamesWonSO":0,\n            "place":4,\n            "value":6061\n         }\n      ],\n      "value":6064\n   }\n}\n')),(0,o.kt)("p",null,"The returned JSON also has other utility fields."),(0,o.kt)("p",null,"Object tables can be read from ",(0,o.kt)("inlineCode",{parentName:"p"},"game.list")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"team.list")," respectively. Current objects are stored in ",(0,o.kt)("inlineCode",{parentName:"p"},"game.value")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"team.value"),". We use this data to form two tables, of games and of teams. To mark the current row we use the equals function, which compares, for example, the values from ",(0,o.kt)("inlineCode",{parentName:"p"},"game.value")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"game.list[<row>].value"),". This is necessary because ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," may contain more complex objects, if several objects are declared in the object group."),(0,o.kt)("p",null,"Until the form has loaded, the helper function ",(0,o.kt)("inlineCode",{parentName:"p"},"formCreated")," returns ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," and tables are not displayed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"if (!formCreated(this.state)) return <div>Loading</div>;\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"numberOfPendingRequests")," function also lets us display on the form the number of requests to the server for which no response has yet been received."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<div>\n{numberOfPendingRequests(this.state) > 0\n    ? "Loading, number of requests : " +\n    numberOfPendingRequests(this.state)\n    : ""}\n</div>\n')),(0,o.kt)("p",null,"Changing the current object on the form and the values of its properties is done using the ",(0,o.kt)("inlineCode",{parentName:"p"},"change")," function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"change(updateState => this.setState(updateState), changes);\n")),(0,o.kt)("p",null,"It takes a callback that will change the current state and an object that stores a list of changes. The current state of the form (the App object) is constantly updated after each call to ",(0,o.kt)("inlineCode",{parentName:"p"},"change")," with new values, taking into account changes made earlier by the user."),(0,o.kt)("p",null,"For example, to change the currently selected game we can use the following call:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"change(updateState => this.setState(updateState), { game : { value : 6063 } });\n")),(0,o.kt)("p",null,"Here 6063 is the ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," of the selected object."),(0,o.kt)("p",null,"To change the value of a property, we can use the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"change(updateState => this.setState(updateState), { game : { value : 6063, hostGoals : 3 } });\n")),(0,o.kt)("p",null,"This call changes the current object to the game with the ID 6063 and the value of the host team's goals to the passed value (3). If you do not pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," tag, then the goal change will be made for the previously selected game."),(0,o.kt)("p",null,"The same scheme is used to change properties that are not data, but are a simple ",(0,o.kt)("a",{parentName:"p",href:"/v4/Composition_JOIN"},"composition")," of object properties: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'change(updateState => this.setState(updateState), { game : { value : 6063, hostTeamName: "Montreal Canadiens" } });\n')),(0,o.kt)("p",null,"The system itself will find the team with the given name and change the value of the host team to the one it finds."),(0,o.kt)("p",null,"To select a team from the list, you can use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/JedWatson/react-select"},"react-select")," component. Reading of many teams can be organized using the ",(0,o.kt)("inlineCode",{parentName:"p"},"select")," function declared in the first example."),(0,o.kt)("p",null,"The following shows the fully working source code:"),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/vibrant-tharp-trcqt?fontsize=14",title:"vibrant-tharp-trcqt",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media",width:"100%",height:"500px",border:"0","border-radius":"4px",overflow:"hidden",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))}c.isMDXComponent=!0}}]);