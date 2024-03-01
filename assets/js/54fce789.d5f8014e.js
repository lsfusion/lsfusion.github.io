"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[56232],{98602:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=s(74848),r=s(28453);const i={title:"Access from an external system"},a=void 0,o={id:"Access_from_an_external_system",title:"Access from an external system",description:"Action API",source:"@site/versioned_docs/version-v5/Access_from_an_external_system.md",sourceDirName:".",slug:"/Access_from_an_external_system",permalink:"/Access_from_an_external_system",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/Access_from_an_external_system.md",tags:[],version:"v5",lastUpdatedAt:1685108136,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{title:"Access from an external system"},sidebar:"learn",previous:{title:"Integration",permalink:"/Integration"},next:{title:"Access from an internal system",permalink:"/Access_from_an_internal_system"}},c={},l=[{value:"Action API",id:"action-api",level:2},{value:"Defining an action",id:"actiontype",level:3},{value:"Protocols",id:"protocols",level:3},{value:"HTTP",id:"http",level:4},{value:"Parameters",id:"url",level:5},{value:"Results",id:"httpresult",level:5},{value:"Several results / parameters in BODY",id:"several-results--parameters-in-body",level:5},{value:"Stateful API",id:"stateful-api",level:5},{value:"Authentication",id:"authentication",level:5},{value:"Form API",id:"form",level:2},{value:"Protocols",id:"protocols-1",level:3},{value:"JavaScript",id:"javascript",level:4},{value:"Examples",id:"examples",level:2},{value:"Action API (Python)",id:"action-api-python",level:3},{value:"Form API (JavaScript)",id:"form-api-javascript",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"action-api",children:"Action API"}),"\n",(0,n.jsxs)(t.p,{children:["The platform allows external systems to access an lsFusion-based system using various network protocols. The interface of such interaction is a call for an action with specified parameters and, if necessary, the return of certain property values (without parameters) as ",(0,n.jsx)(t.em,{children:"results"}),". It is assumed that all parameter and result objects are objects of ",(0,n.jsx)(t.a,{href:"/Built-in_classes",children:"built-in classes"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"actiontype",children:"Defining an action"}),"\n",(0,n.jsx)(t.p,{children:"An action being called can be defined in one of the three ways:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"EXEC"})," \u2013 the name of the action is specified."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"EVAL"})," \u2013 code in the lsFusion language is specified. It is assumed that this code contains a declaration of an action named ",(0,n.jsx)(t.code,{children:"run"}),". This is the action that will be called."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"EVAL ACTION"})," \u2013 action code in the lsFusion language is specified. To access a parameter, the special character ",(0,n.jsx)(t.code,{children:"$"})," and the parameter number (starting from ",(0,n.jsx)(t.code,{children:"1"}),") are used."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"protocols",children:"Protocols"}),"\n",(0,n.jsx)(t.p,{children:"The platform currently supports the following network protocols:"}),"\n",(0,n.jsx)(t.h4,{id:"http",children:"HTTP"}),"\n",(0,n.jsxs)(t.p,{children:["Communication over this protocol is supported both for an application server on port ",(0,n.jsx)(t.code,{children:"7651"}),", as well as a web server (if any) on the same port, that has a web client installed."]}),"\n",(0,n.jsxs)(t.p,{children:["The URL format, depending on the method of ",(0,n.jsx)(t.a,{href:"#actiontype",children:"action definition"}),", looks as follows:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"EXEC"})," - ",(0,n.jsx)(t.code,{children:"http://server address:port/exec?action=<action name>"}),". The ",(0,n.jsx)(t.code,{children:"action"})," parameter must always be specified."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"EVAL"})," - ",(0,n.jsx)(t.code,{children:"http://server address:port/eval?script=<code>"}),". If the ",(0,n.jsx)(t.code,{children:"script"})," parameter is not specified, it is assumed that the code is passed in the first BODY parameter."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"EVAL ACTION"})," \u2013 ",(0,n.jsx)(t.code,{children:"http://server address:port/eval/action?script=<action code>"}),". If the ",(0,n.jsx)(t.code,{children:"script"})," parameter is not specified, it is assumed that the code is passed in the first BODY parameter."]}),"\n"]}),"\n",(0,n.jsx)(t.h5,{id:"url",children:"Parameters"}),"\n",(0,n.jsxs)(t.p,{children:["Parameters can be passed both in the request string (by appending constructs like ",(0,n.jsx)(t.code,{children:"&p=<parameter value>"})," to the end of the string), as well as in the request body (BODY). It is assumed that URL parameters are substituted (in the order of their appearance in the request) for the executed action before BODY parameters."]}),"\n",(0,n.jsxs)(t.p,{children:["When processing BODY parameters, parameters with the content type from the following ",(0,n.jsx)(t.a,{href:"https://github.com/lsfusion/platform/blob/master/api/src/main/resources/MIMETypes.properties",children:"table"})," are considered files and are passed to the action parameters as objects of the file class (",(0,n.jsx)(t.code,{children:"FILE"}),", ",(0,n.jsx)(t.code,{children:"PDFFILE"}),", etc.). During this process, the corresponding file extension is taken from the table mentioned above. If a particular content type is not found in the table, but it starts with ",(0,n.jsx)(t.code,{children:"application"}),", the parameter is still considered a file, and the file extension is taken from the right part of the content type (for example, it will be ",(0,n.jsx)(t.code,{children:"abc"})," for the ",(0,n.jsx)(t.code,{children:"application/abc"})," content type). Parameters with the ",(0,n.jsx)(t.code,{children:"application/null"})," content type are considered to be equal to ",(0,n.jsx)(t.code,{children:"NULL"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["BODY parameters with types of content different from the ones mentioned above are considered strings and are automatically converted into parameter classes of the called action upon being called. Empty strings are converted into ",(0,n.jsx)(t.code,{children:"NULL"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/List_of_HTTP_header_fields",children:"Headers"})," of an executed request are automatically saved to the ",(0,n.jsx)(t.code,{children:"System.headers[TEXT]"})," property. The name of the header is written to the only parameter of this property, and the value of the header is written to the property's value."]}),"\n",(0,n.jsx)(t.h5,{id:"httpresult",children:"Results"}),"\n",(0,n.jsxs)(t.p,{children:["Properties whose values must be returned as the result are passed in the request string by adding strings like ",(0,n.jsx)(t.code,{children:"&return=<property name>"})," to its end. It is assumed that the values of specified properties are returned in the order of their appearance in the request string. By default, if no result properties are specified, the resulting property is the first one with a non-",(0,n.jsx)(t.code,{children:"NULL"})," value from the following ",(0,n.jsx)(t.a,{href:"/Built-in_classes#export",children:"list"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["If the result of a request is a file (",(0,n.jsx)(t.code,{children:"FILE"}),", ",(0,n.jsx)(t.code,{children:"PDFFILE"}),", etc.), the response ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Media_type",children:"content type"})," , depending on the file extension, is determined in accordance with the following ",(0,n.jsx)(t.a,{href:"https://github.com/lsfusion/platform/blob/master/api/src/main/resources/MIMETypes.properties",children:"table"}),". If the file extension is not found in this table, the content type is set to ",(0,n.jsx)(t.code,{children:"application/<file extension>"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The file extension in this case is determined automatically, similarly to the ",(0,n.jsxs)(t.a,{href:"/WRITE_operator",children:[(0,n.jsx)(t.code,{children:"WRITE"})," operator"]}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["In all of the three cases above, if the result value is ",(0,n.jsx)(t.code,{children:"NULL"}),", a ",(0,n.jsx)(t.code,{children:"null"})," string (for example, ",(0,n.jsx)(t.code,{children:"application/null"}),") is substituted for the file extension in the content type, and an empty string is returned as the response itself."]}),"\n",(0,n.jsxs)(t.p,{children:["Request results different from files are converted into strings and are passed as a ",(0,n.jsx)(t.code,{children:"text/plain"})," content type. ",(0,n.jsx)(t.code,{children:"NULL"})," values are returned as empty strings."]}),"\n",(0,n.jsxs)(t.p,{children:["The values of the ",(0,n.jsx)(t.code,{children:"System.headersTo[TEXT]"})," property are automatically written to the ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/List_of_HTTP_header_fields",children:"headers"})," of the request result. So, the header name is read from the only parameter of this property, and the header value is read from the property value."]}),"\n",(0,n.jsx)(t.h5,{id:"several-results--parameters-in-body",children:"Several results / parameters in BODY"}),"\n",(0,n.jsxs)(t.p,{children:["If the type of request BODY is ",(0,n.jsx)(t.code,{children:"multipart/*"})," or ",(0,n.jsx)(t.code,{children:"application/x-www-form-urlencoded"}),", it will be split into parts, and each part will be considered a separate request parameter. In this case, the order of these parameters is equal to the order in corresponding parts of the request BODY."]}),"\n",(0,n.jsx)(t.p,{children:"At the same time, if the number of results being returned is more than one, then the following happens:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["If the request has a ",(0,n.jsx)(t.code,{children:"returnmultitype=bodyurl"})," parameter, the response content type on transmission is set to ",(0,n.jsx)(t.code,{children:"application/x-www-form-urlencoded"})," and the results are encoded as if they were ",(0,n.jsx)(t.a,{href:"#url",children:"passed in the request string"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Otherwise, the response content type during transmission is set to ",(0,n.jsx)(t.code,{children:"multipart/mixed"}),", and the results are passed as internal parts of this response."]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Note that the processing of parameters and request results is largely similar to their processing during ",(0,n.jsx)(t.a,{href:"/Access_to_an_external_system_EXTERNAL",children:"access to an external system"})," over the HTTP protocol (in this case, parameters are processed as results and vice versa, results are processed as parameters)."]})}),"\n",(0,n.jsx)(t.h5,{id:"stateful-api",children:"Stateful API"}),"\n",(0,n.jsxs)(t.p,{children:["The API described above is a REST API. Accordingly, the ",(0,n.jsx)(t.a,{href:"/Change_sessions",children:"change session"})," is created when a call is initiated, and closes immediately after the call ends. However, there are situations where such behavior is undesirable, and you need to accumulate changes for a certain period of time (for example, while the user is inputting data), which means that the session must be saved and handed over between sessions. In order to do this, you can add a string of the following format to the end of the query string: ",(0,n.jsx)(t.code,{children:"&session=<session ID>"}),", where ",(0,n.jsx)(t.code,{children:"<session ID>"})," is any non-empty string. In this case, the session will not be closed after the call, but will be associated with a previously passed ID, so that all subsequent calls with this ID will be executed in this session. In order to close a session (after the end of a call), you need to add the ",(0,n.jsx)(t.code,{children:"_close"})," postfix (for example,",(0,n.jsx)(t.code,{children:"&session=0_close"}),") to its ID in the request string."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"Since cookie files are implicitly used for working with HTTP sessions, it is important not to forget to save / pass cookies between stateful http calls (this, however, is typically done automatically by a browser, the HttpClient in Java, etc.)"})}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"The current implementation of the platform assumes that if sessions are used, the elements of the system (for example, local properties) created in the current call are deleted \u2014 that is, they are not visible in subsequent calls."})}),"\n",(0,n.jsx)(t.h5,{id:"authentication",children:"Authentication"}),"\n",(0,n.jsx)(t.p,{children:"When executing an http request, it is often necessary to identify the user on whose behalf the specified action will be executed. At the moment, two types of authentication are supported by the platform:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Basic_access_authentication",children:"Basic identification"})," - the user name and password are passed in an encoded form in the ",(0,n.jsx)(t.code,{children:"Authorization: Basic <credentials>"})," heading."]}),"\n",(0,n.jsxs)(t.li,{children:["Token-based authentication consists of two stages:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["At the first stage, you need to execute the ",(0,n.jsx)(t.code,{children:"Authentication.getAuthToken[]"})," action with basic authentication. The result of this action will be an authentication token with a fixed lifetime (one day ",(0,n.jsx)(t.a,{href:"/Working_parameters#authTokenExpiration",children:"by default"}),"). An example of a request:  ",(0,n.jsx)(t.code,{children:"http://localhost/exec?action=getAuthToken"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["The token you receive can be used for authentication during its lifetime by passing it in the ",(0,n.jsx)(t.code,{children:"Authorization: Bearer <token>"})," header (similarly to JWT which is used in the current implementation of the platform for generating authentication tokens)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"form",children:"Form API"}),"\n",(0,n.jsxs)(t.p,{children:["Apart from executing actions, the platform also supports an API (similar to JSON API) for working with ",(0,n.jsx)(t.a,{href:"/Forms",children:"forms"}),", or specifically, their ",(0,n.jsx)(t.a,{href:"/Interactive_view",children:"interactive views"}),". Since it's a stateful API designed for the asynchronous mode (which means that the HTTPS interface itself has a number of system parameters, such as a request index, index of the latest received response, etc.), it's easier to use this API with the help of special libraries for specific languages/platforms that you want to integrate with:"]}),"\n",(0,n.jsx)(t.h3,{id:"protocols-1",children:"Protocols"}),"\n",(0,n.jsx)(t.h4,{id:"javascript",children:"JavaScript"}),"\n",(0,n.jsxs)(t.p,{children:["The JavaScript library is available in the central npm-repository under the name  ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/~lsfusion",children:"@lsfusion/core"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The key concept in this API is the concept of ",(0,n.jsx)(t.em,{children:"state"}),". A state is a JS object with a structure corresponding to form elements in the following way:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/Form_structure#objects",children:"An object group"})," corresponds to a JS object that is stored in the js field of the state object. The name of the field matches the name of the object group. Each JS object from the object group, in turn, stores an array of JS objects (with ",(0,n.jsx)(t.a,{href:"/Form_structure#filters",children:"filters"})," and ",(0,n.jsx)(t.a,{href:"/Form_structure#sort",children:"orders"})," taken into account) in the ",(0,n.jsx)(t.code,{children:"list"})," field. The JS object of the object group corresponds to the ",(0,n.jsx)(t.a,{href:"/Form_structure#currentObject",children:"current"})," object collection. Also, each JS object of an array (including the JS object of the object group) in the ",(0,n.jsx)(t.code,{children:"value"})," field stores the value of objects \u2013 only values if there is just one object in the object group or, if there are multiple objects, a JS object with fields whose names are equal to object names and values are equal to object values."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/Properties",children:"Properties"})," correspond to a value stored in a field (the name of the field is equal to the property name) of a JS object which is determined in the following way depending on the existence of parameters and ",(0,n.jsx)(t.a,{href:"/Interactive_view#property",children:"its view"}),":","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["A property has parameters:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The property view is equal to ",(0,n.jsx)(t.code,{children:"GRID"})," of each JS object in the ",(0,n.jsx)(t.code,{children:"list"})," array of the JS object of this property's ",(0,n.jsx)(t.a,{href:"/Form_structure#drawgroup",children:"display group"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["The property's view is equal to ",(0,n.jsx)(t.code,{children:"PANEL"}),", ",(0,n.jsx)(t.code,{children:"TOOLBAR"}),"  of the JS object of this property's display group"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"A property has no parameters - of a JS state object."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The task of the library is to automatically keep this state described above up to date, both during form creation and during its subsequent modification (this behavior is often called reactivity)."}),"\n",(0,n.jsx)(t.p,{children:"The library exports the following functions:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"create"})," - creates a new form. Parameters:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"setState"})," - a state change request function. This function is supposed to take a single parameter \u2013 a state change function (which, in turn, has just one parameter, the previous state, and outputs the next state as the result) and as a result of execution add this function to the state change queue (or, for example, apply it right away depending on the implementation of the view logic). This state management logic is fully identical to the state management logic in React and, as a rule, if used inside a React component, the ",(0,n.jsx)(t.code,{children:"setState"})," parameter is passed as ",(0,n.jsx)(t.code,{children:"updateState => this.setState(updateState)"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"baseUrl"})," - the URL of the lsFusion web server - a string, for example ",(0,n.jsx)(t.code,{children:"'https://demo.lsfusion.org/hockeystats'"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"formData"})," - an object describing the form. Must contain either a name field with the name of the form (for example ",(0,n.jsx)(t.code,{children:'{name: "MainForm"}'}),") or a script field with the form code (for example, ",(0,n.jsx)(t.code,{children:'script:"OBJECTS i = Invoice PROPERTIES (i) date, stock"'}),")"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"change"})," - changes the form data. Parameters:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"setState"})," - a state change request function."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"changes"})," - a JS object containing what exactly needs to be changed. The structure of a JS change object is the same as that of the JS state object, except that a JS object of an object group does not have/is not supposed to have a ",(0,n.jsx)(t.code,{children:"list"})," field \u2013 that is, all changes are supposed to be made for current object collection. However, if necessary, the ",(0,n.jsx)(t.code,{children:"value"})," can be set to a single-element array, which will mean that there is no need to change the current object, but property values should be changed for the specified, not the current object. For example, ",(0,n.jsx)(t.code,{children:"change(setState, {game:{value:[30], hostGoals:40, guestGoals:30}})"})," will change the number of goals to ",(0,n.jsx)(t.code,{children:"40"})," and ",(0,n.jsx)(t.code,{children:"30"}),", but not for the current game, but for one with an object id ",(0,n.jsx)(t.code,{children:"30"}),". You can also specify actions in a JS change object (there are no actions in JS state objects). The value of the corresponding field in this case can be arbitrary. For example, ",(0,n.jsx)(t.code,{children:"change(setState, {game: {doSmthWithGame : true}})"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"currentState"})," - a JS object of the current state. Optional parameter. In order to ensure the best UX in the asynchronous mode, it is advised that the user change values only for the objects that he sees during the change and not when the change is processed (the state can change at this moment and so can current objects). Therefore, when calling this function, it is recommended to pass the state that was used to render the view in which the user initiated this change as the ",(0,n.jsx)(t.code,{children:"currentState"})," parameter."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"close"})," - closes the form. Parameters:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"setState"})," - a state change request function."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"formCreated"})," - checks whether the form has been initialized (and, accordingly, whether the state has been filled). Returns a boolean value. Parameters:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"state"})," - a JS state object"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"numberOfPendingRequests"})," - show how many change requests are currently queued. Returns a long type value. Parameters:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"state"})," - a JS state object"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["As the names of object groups and properties, not names on the form are used, but ",(0,n.jsx)(t.a,{href:"/Structured_view#extid",children:"export/import"})," names (which, however, match the names on forms if not explicitly defined). While working with a form via Form API, actions created using operators for ",(0,n.jsx)(t.a,{href:"/Interactive_view#objectoperators",children:"object operations"})," ",(0,n.jsx)(t.code,{children:"NEW"})," and ",(0,n.jsx)(t.code,{children:"DELETE"})," automatically get export/import names ",(0,n.jsx)(t.code,{children:"NEW"})," and ",(0,n.jsx)(t.code,{children:"DELETE"}),", respectively (that is you can call ",(0,n.jsx)(t.code,{children:"change(setState, {game : {NEW:true}})"})," for adding an object, for example). Also, when Form API is used, it automatically adds a property called ",(0,n.jsx)(t.code,{children:"logMessage"})," to the form to which all dialog messages are written (including those generated when ",(0,n.jsx)(t.a,{href:"/Constraints",children:"constraints"})," were violated)."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"Authentication, stateful and form API are only supported when executing http requests on the web server. When an application server (or specifically, a built-in web server) executes an HTTP request, authentication headers, as well as parameters with the session ID, are ignored (the user is considered anonymous). Form API is completely unsupported by the built-in web server."})}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.h3,{id:"action-api-python",children:"Action API (Python)"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import json\r\nimport requests\r\nfrom requests_toolbelt.multipart import decoder\r\n\r\nlsfCode = ("run(INTEGER no, DATE date, FILE detail) {\\n"\r\n           "    NEW o = FOrder {\\n"\r\n           "        no(o) <- no;\\n"\r\n           "        date(o) <- date;\\n"\r\n           "        LOCAL detailId = INTEGER (INTEGER);\\n"\r\n           "        LOCAL detailQuantity = INTEGER (INTEGER);\\n"\r\n           "        IMPORT JSON FROM detail TO detailId, detailQuantity;\\n"\r\n           "        FOR imported(INTEGER i) DO {\\n"\r\n           "            NEW od = FOrderDetail {\\n"\r\n           "                id(od) <- detailId(i);\\n"\r\n           "                quantity(od) <- detailQuantity(i);\\n"\r\n           "                price(od) <- 5;\\n"\r\n           "                order(od) <- o;\\n"\r\n           "            }\\n"\r\n           "        }\\n"\r\n           "        APPLY;\\n"\r\n           "        EXPORT JSON FROM price = price(FOrderDetail od), id = id(od) WHERE order(od) == o;\\n"\r\n           "        EXPORT FROM orderPrice(o), exportFile();\\n"\r\n           "    }\\n"\r\n           "}")\r\n\r\norder_no = 354\r\norder_date = \'10.10.2017\'\r\norder_details = [dict(id=1, quantity=10),\r\n                 dict(id=2, quantity=15),\r\n                 dict(id=5, quantity=4),\r\n                 dict(id=10, quantity=18),\r\n                 dict(id=11, quantity=1),\r\n                 dict(id=12, quantity=3)]\r\n\r\norder_json = json.dumps(order_details)\r\n\r\nurl = \'http://localhost:7651/eval\'\r\npayload = {\'script\': lsfCode, \'no\': str(order_no), \'date\': order_date,\r\n           \'detail\': (\'order.json\', order_json, \'text/json\')}\r\n\r\nresponse = requests.post(url, files=payload)\r\nmultipart_data = decoder.MultipartDecoder.from_response(response)\r\n\r\nsum_part, json_part = multipart_data.parts\r\nsum = int(sum_part.text)\r\ndata = json.loads(json_part.text)\r\n\r\n##############################################################\r\n\r\nprint(sum)\r\nfor item in data:\r\n    print(\'{0:3}: price {1}\'.format(int(item[\'id\']), int(item[\'price\'])))\r\n\r\n##############################################################\r\n# 205\r\n#   4: price 5\r\n#  18: price 5\r\n#   3: price 5\r\n#   1: price 5\r\n#  10: price 5\r\n#  15: price 5\n'})}),"\n",(0,n.jsx)(t.h3,{id:"form-api-javascript",children:"Form API (JavaScript)"})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var n=s(96540);const r={},i=n.createContext(r);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);