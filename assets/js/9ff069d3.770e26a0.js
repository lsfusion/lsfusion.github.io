"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["10395"],{23267:function(e,n,s){s.r(n),s.d(n,{default:()=>o,frontMatter:()=>a,metadata:()=>t,assets:()=>d,toc:()=>r,contentTitle:()=>l});var t=JSON.parse('{"id":"Naming","title":"Naming","description":"Each system element may have a *name* which can be used to access the element.","source":"@site/docs/Naming.md","sourceDirName":".","slug":"/Naming","permalink":"/Naming","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/master/docs/en/Naming.md","tags":[],"version":"current","lastUpdatedAt":1708525070000,"frontMatter":{"title":"Naming"},"sidebar":"learn","previous":{"title":"Element identification","permalink":"/Element_identification"},"next":{"title":"Search","permalink":"/Search_"}}'),i=s("85893"),c=s("50065");let a={title:"Naming"},l=void 0,d={},r=[{value:"Namespaces",id:"namespace",level:3},{value:"Uniqueness",id:"uniqueness",level:3},{value:"Canonical names",id:"canonicalname",level:3},{value:"Name policy",id:"name-policy",level:3},{value:"System elements",id:"system-elements",level:4},{value:"Classes",id:"classes",level:4},{value:"Language",id:"language",level:3}];function h(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Each ",(0,i.jsx)(n.a,{href:"/Element_identification",children:"system element"})," may have a ",(0,i.jsx)(n.em,{children:"name"})," which can be used to ",(0,i.jsx)(n.a,{href:"/Search_",children:"access"})," the element."]}),"\n",(0,i.jsx)(n.h3,{id:"namespace",children:"Namespaces"}),"\n",(0,i.jsxs)(n.p,{children:["It is often necessary to use the same name in different contexts. In order not to include this context in the name itself (producing long and bulky names), the platform has the concept of ",(0,i.jsx)(n.em,{children:"namespaces"}),". Each element is created in a namespace, and if other elements are accessed during the creation process then elements created in the same namespace take precedence.  However, if you do need an element from another namespace, you can always specify the namespace of the element you are looking for explicitly. Also, you can specify additional namespaces that will take precedence when searching for items."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["You can ",(0,i.jsx)(n.a,{href:"/Search_",children:"find"})," more details on how namespaces are used when ",(0,i.jsx)(n.a,{href:"/Search_",children:"finding"})," elements in the relevant section."]})}),"\n",(0,i.jsxs)(n.p,{children:["The namespace in which elements are created is determined by the ",(0,i.jsx)(n.a,{href:"/Modules",children:"module"}),", and cannot be changed in the future. The same limitation applies to additional priority namespaces."]}),"\n",(0,i.jsxs)(n.p,{children:["Each namespace has its own name, which is its unique ID. Accordingly, the string obtained by concatenating (via a dot) the name of its namespace with the name of each element itself will be called the element's ",(0,i.jsx)(n.em,{children:"full name"}),". For example, if the namespace is called ",(0,i.jsx)(n.code,{children:"System"}),", and inside it there is a class ",(0,i.jsx)(n.code,{children:"Element"}),", then the full name of this class will be ",(0,i.jsx)(n.code,{children:"System.Element"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"uniqueness",children:"Uniqueness"}),"\n",(0,i.jsx)(n.p,{children:"Elements of the system must be named so that the system does not contain any two elements that cannot be distinguished from one another. In most cases, it is necessary and sufficient for the full name of the element to be unique. Exceptions to this rule are metacodes and properties / actions. So, for example, several metacodes may have the same full name if they differ in the number of parameters they take (properties / actions must have a different signature)."}),"\n",(0,i.jsx)(n.h3,{id:"canonicalname",children:"Canonical names"}),"\n",(0,i.jsxs)(n.p,{children:["For some elements of the system, string ",(0,i.jsx)(n.em,{children:"canonical names"})," are determined and are unique among all elements of the given type within the system. For most system elements (user-defined classes, property groups, navigator elements, windows, tables) the canonical name is equivalent to the ",(0,i.jsx)(n.em,{children:"full name"})," of that element of the system, which looks as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"<namespace name>.<System element name>\n\nItem.name\nSale.Document\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Since properties and actions can have the same names within the same namespace, the full name of a property may not be unique. Therefore, the canonical name of the properties / actions also includes a signature, that is, a list of the canonical names of the classes of the property / action's parameters, separated by commas. If a parameter's class is not determined, then the question mark character ",(0,i.jsx)(n.code,{children:"?"})," is used instead of the canonical class name:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"<namespace name>.<Property/action name>[<class1>,...,<classN>]\n\nItem.gender[Item.Article]\nDate.between[DATE,DATE,DATE]\nDocument.addHeader[Document.Document,STRING]\nMath.sum[?,?]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Since the signature of properties/actions do not have to contain only custom classes, canonical names are also determined for ",(0,i.jsx)(n.a,{href:"/Built-in_classes",children:"built-in"})," classes:"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Class name"}),(0,i.jsx)(n.th,{children:"Canonical name"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"INTEGER"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"INTEGER"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"LONG"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"LONG"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"DOUBLE"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"DOUBLE"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"NUMERIC[ , ]"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"NUMERIC"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"BOOLEAN"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"BOOLEAN"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"DATE"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"DATE"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"DATETIME"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"DATETIME"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"TIME"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"TIME"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"YEAR"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"YEAR"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"STRING"}),", ",(0,i.jsx)(n.code,{children:"STRING[ ]"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"STRING"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"ISTRING"}),", ",(0,i.jsx)(n.code,{children:"ISTRING[ ]"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"STRING"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"BPSTRING[ ]"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"STRING"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"BPISTRING[ ]"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"STRING"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"TEXT"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"STRING"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"RICHTEXT"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"STRING"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"COLOR"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"COLOR"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"FILE,RAWFILE..."})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"FILE,RAWFILE..."})})]})]})]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"In some cases, an element of the property signature may be not a single class but a set of classes. In this case, the canonical name will be more complex."})}),"\n",(0,i.jsx)(n.h3,{id:"name-policy",children:"Name policy"}),"\n",(0,i.jsx)(n.p,{children:"To avoid name collision, as well as for better readability, it is recommended that you use the following name policy:"}),"\n",(0,i.jsx)(n.h4,{id:"system-elements",children:"System elements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The name must begin with a lowercase letter (excluding classes)."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If the name consists of several words, then each subsequent word should begin with a capital letter. For example, ",(0,i.jsx)(n.code,{children:"myFirstName"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"classes",children:"Classes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The name of each class should begin with a capital letter. For example, ",(0,i.jsx)(n.code,{children:"MySuperClass"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"language",children:"Language"}),"\n",(0,i.jsxs)(n.p,{children:["Elements are named using ",(0,i.jsx)(n.a,{href:"/IDs#id",children:"simple IDs"}),"."]})]})}function o(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return a}});var t=s(67294);let i={},c=t.createContext(i);function a(e){let n=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);