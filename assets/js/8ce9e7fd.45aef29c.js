"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[60373],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),s=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,k=c["".concat(m,".").concat(u)]||c[u]||d[u]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},40057:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s}});var a=n(83117),r=(n(67294),n(3905));const l={title:"Naming"},i=void 0,o={unversionedId:"Naming",id:"version-v4/Naming",title:"Naming",description:"Each system element may have a *name* which can be used to access the element.",source:"@site/versioned_docs/version-v4/Naming.md",sourceDirName:".",slug:"/Naming",permalink:"/v4/Naming",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Naming.md",tags:[],version:"v4",lastUpdatedAt:1624461640,formattedLastUpdatedAt:"Jun 23, 2021",frontMatter:{title:"Naming"},sidebar:"version-v4/learn",previous:{title:"Element identification",permalink:"/v4/Element_identification"},next:{title:"Search",permalink:"/v4/Search_"}},m={},s=[{value:"Namespaces",id:"namespace",level:3},{value:"Uniqueness",id:"uniqueness",level:3},{value:"Canonical names",id:"canonicalname",level:3},{value:"Name policy",id:"name-policy",level:3},{value:"System elements",id:"system-elements",level:4},{value:"Classes",id:"classes",level:4},{value:"Language",id:"language",level:3}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Each ",(0,r.kt)("a",{parentName:"p",href:"/v4/Element_identification"},"system element")," may have a ",(0,r.kt)("em",{parentName:"p"},"name")," which can be used to ",(0,r.kt)("a",{parentName:"p",href:"/v4/Search_"},"access")," the element."),(0,r.kt)("h3",{id:"namespace"},"Namespaces"),(0,r.kt)("p",null,"It is often necessary to use the same name in different contexts. In order not to include this context in the name itself (producing long and bulky names), the platform has the concept of ",(0,r.kt)("em",{parentName:"p"},"namespaces"),". Each element is created in a namespace, and if other elements are accessed during the creation process then elements created in the same namespace take precedence.  However, if you do need an element from another namespace, you can always specify the namespace of the element you are looking for explicitly. Also, you can specify additional namespaces that will take precedence when searching for items."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can ",(0,r.kt)("a",{parentName:"p",href:"/v4/Search_"},"find")," more details on how namespaces are used when ",(0,r.kt)("a",{parentName:"p",href:"/v4/Search_"},"finding")," elements in the relevant section.")),(0,r.kt)("p",null,"The namespace in which elements are created is determined by the ",(0,r.kt)("a",{parentName:"p",href:"/v4/Modules"},"module"),", and cannot be changed in the future. The same limitation applies to additional priority namespaces."),(0,r.kt)("p",null,"Each namespace has its own name, which is its unique ID. Accordingly, the string obtained by concatenating (via a dot) the name of its namespace with the name of each element itself will be called the element's ",(0,r.kt)("em",{parentName:"p"},"full name"),". For example, if the namespace is called ",(0,r.kt)("inlineCode",{parentName:"p"},"System"),", and inside it there is a class ",(0,r.kt)("inlineCode",{parentName:"p"},"Element"),", then the full name of this class will be ",(0,r.kt)("inlineCode",{parentName:"p"},"System.Element"),"."),(0,r.kt)("h3",{id:"uniqueness"},"Uniqueness"),(0,r.kt)("p",null,"Elements of the system must be named so that the system does not contain any two elements that cannot be distinguished from one another. In most cases, it is necessary and sufficient for the full name of the element to be unique. Exceptions to this rule are metacodes and properties / actions. So, for example, several metacodes may have the same full name if they differ in the number of parameters they take (properties / actions must have a different signature)."),(0,r.kt)("h3",{id:"canonicalname"},"Canonical names"),(0,r.kt)("p",null,"For some elements of the system, string ",(0,r.kt)("em",{parentName:"p"},"canonical names")," are determined and are unique among all elements of the given type within the system. For most system elements (user-defined classes, property groups, navigator elements, windows, tables) the canonical name is equivalent to the ",(0,r.kt)("em",{parentName:"p"},"full name")," of that element of the system, which looks as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<namespace name>.<System element name>\n\nItem.name\nSale.Document\n")),(0,r.kt)("p",null,"Since properties and actions can have the same names within the same namespace, the full name of a property may not be unique. Therefore, the canonical name of the properties / actions also includes a signature, that is, a list of the canonical names of the classes of the property / action's parameters, separated by commas. If a parameter's class is not determined, then the question mark character ",(0,r.kt)("inlineCode",{parentName:"p"},"?")," is used instead of the canonical class name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<namespace name>.<Property/action name>[<class1>,...,<classN>]\n\nItem.gender[Item.Article]\nDate.between[DATE,DATE,DATE]\nDocument.addHeader[Document.Document,STRING]\nMath.sum[?,?]\n")),(0,r.kt)("p",null,"Since the signature of properties/actions do not have to contain only custom classes, canonical names are also determined for ",(0,r.kt)("a",{parentName:"p",href:"/v4/Built-in_classes"},"built-in")," classes: "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Class name"),(0,r.kt)("th",{parentName:"tr",align:null},"Canonical name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"INTEGER")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"INTEGER"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LONG")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LONG"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DOUBLE")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DOUBLE"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NUMERIC[ , ]")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NUMERIC"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BOOLEAN")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BOOLEAN"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DATE")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DATE"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DATETIME")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DATETIME"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TIME")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TIME"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"YEAR")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"YEAR"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRING"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"STRING[ ]")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRING"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ISTRING"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ISTRING[ ]")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRING"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BPSTRING[ ]")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRING"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BPISTRING[ ]")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRING"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TEXT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRING"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ITEXT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRING"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RICHTEXT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRING"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"COLOR")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"COLOR"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FILE,RAWFILE...")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FILE,RAWFILE..."))))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"In some cases, an element of the property signature may be not a single class but a set of classes. In this case, the canonical name will be more complex.")),(0,r.kt)("h3",{id:"name-policy"},"Name policy"),(0,r.kt)("p",null,"To avoid name collision, as well as for better readability, it is recommended that you use the following name policy:"),(0,r.kt)("h4",{id:"system-elements"},"System elements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The name must begin with a lowercase letter (excluding classes).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the name consists of several words, then each subsequent word should begin with a capital letter. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"myFirstName"),"."))),(0,r.kt)("h4",{id:"classes"},"Classes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The name of each class should begin with a capital letter. For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"MySuperClass"),".")),(0,r.kt)("h3",{id:"language"},"Language"),(0,r.kt)("p",null,"Elements are named using ",(0,r.kt)("a",{parentName:"p",href:"/v4/IDs#id"},"simple IDs"),"."))}d.isMDXComponent=!0}}]);