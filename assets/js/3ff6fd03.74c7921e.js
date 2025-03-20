"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["58099"],{69779:function(e,t,s){s.r(t),s.d(t,{default:()=>u,frontMatter:()=>c,metadata:()=>n,assets:()=>o,toc:()=>l,contentTitle:()=>r});var n=JSON.parse('{"id":"Static_objects","title":"Static objects","description":"Static (or built-in) objects are objects that are defined by the developer and are automatically created on system startup (if they are not present in the system at launch time). Also, such objects are prohibited from being deleted.","source":"@site/docs/Static_objects.md","sourceDirName":".","slug":"/Static_objects","permalink":"/Static_objects","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/master/docs/en/Static_objects.md","tags":[],"version":"current","lastUpdatedAt":1623249583000,"frontMatter":{"title":"Static objects"},"sidebar":"learn","previous":{"title":"User classes","permalink":"/User_classes"},"next":{"title":"Aggregations","permalink":"/Aggregations"}}'),a=s("85893"),i=s("50065");let c={title:"Static objects"},r=void 0,o={},l=[{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function d(e){let t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:"Static"})," (or built-in) objects are objects that are defined by the developer and are automatically created on system startup (if they are not present in the system at launch time). Also, such objects are prohibited from being deleted."]}),"\n",(0,a.jsxs)(t.p,{children:["When declaring a ",(0,a.jsx)(t.a,{href:"/User_classes",children:"custom class"}),", you can declare objects of this class which will be static objects. If you do this, this custom class automatically ",(0,a.jsx)(t.a,{href:"/User_classes#inheritance",children:"inherits"})," from class ",(0,a.jsx)(t.code,{children:"System.StaticObject"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["For each static object of a custom class name and title must be specified. Later these name and title can be accessed using the ",(0,a.jsx)(t.a,{href:"/Properties",children:"properties"})," ",(0,a.jsx)(t.code,{children:"System.staticName[System.StaticObject]"})," and ",(0,a.jsx)(t.code,{children:"System.staticCaption[System.StaticObject]"})," respectively."]}),"\n",(0,a.jsxs)(t.p,{children:["Static objects of ",(0,a.jsx)(t.a,{href:"/Built-in_classes",children:"built-in classes"})," are numbers, strings, date values, etc., used by the user in describing the logic."]}),"\n",(0,a.jsx)(t.p,{children:"Static objects can be used to create a limited set of objects of a certain class. Such a set can be used as an enumerated data type to provide a choice from a limited set of values."}),"\n",(0,a.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,a.jsxs)(t.p,{children:["Static objects of custom classes are defined in the ",(0,a.jsxs)(t.a,{href:"/CLASS_statement",children:[(0,a.jsx)(t.code,{children:"CLASS"})," statement"]})," in a block enclosed in braces."]}),"\n",(0,a.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-lsf",children:"CLASS Direction 'Direction'\n{\n    north 'North',\n    east 'East',\n    south 'South',\n    west 'West'\n}\n\ndirection = DATA Direction ();\n\nshowDirection  {\n    MESSAGE staticName(direction());\n    MESSAGE staticCaption(direction());\n}\n\n// creating a form by choosing an object of Direction class\nFORM directions 'Directions'\n    OBJECTS d = Direction\n    PROPERTIES(d) READONLY staticCaption\n\n    LIST Direction OBJECT d\n;\n"})})]})}function u(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,t,s){s.d(t,{Z:function(){return r},a:function(){return c}});var n=s(67294);let a={},i=n.createContext(a);function c(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);