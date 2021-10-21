(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[53369],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),h=r,f=d["".concat(o,".").concat(h)]||d[h]||m[h]||l;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},68699:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=a(74034),r=a(79973),l=(a(67294),a(3905)),i=["components"],s={title:"Search"},o=void 0,p={unversionedId:"Search_",id:"Search_",isDocsHomePage:!1,title:"Search",description:"Each element in the system contains certain information that allows it to be uniquely identified among other elements of the system. However, providing all the information about the element in each place it is used is rather cumbersome; so the platform has a special search algorithm, which allows you to find the desired element with only part of the information about it (for example, only a short name and the module which uses the item you are searching for).",source:"@site/docs/Search_.md",sourceDirName:".",slug:"/Search_",permalink:"/next/Search_",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Search_.md",tags:[],version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Search"},sidebar:"learn",previous:{title:"Naming",permalink:"/next/Naming"},next:{title:"Overview",permalink:"/next/Modularity"}},c=[{value:"Search steps",id:"search-steps",children:[{value:"Name matches",id:"name",children:[],level:3},{value:"Located in dependent module",id:"module",children:[],level:3},{value:"Located in specified namespace (if explicitly specified)",id:"namespace",children:[],level:3},{value:"Selection of a priority namespace (if the namespace is not explicitly specified)",id:"priority",children:[],level:3},{value:"Number of parameters matches",id:"metacode",children:[],level:3},{value:"Search for property inside action",id:"locals",children:[],level:3},{value:"Namespace not specified explicitly",id:"nonamespace",children:[],level:3},{value:"Located upper in the stack",id:"stack",children:[],level:3},{value:"Suitable classes of parameters",id:"direct",children:[],level:3},{value:"Classes of parameters intersect",id:"indirect",children:[],level:3},{value:"Selection of more specific classes of parameters",id:"concrete",children:[],level:3},{value:"Not searching for an abstract property",id:"notabstract",children:[],level:3},{value:"Abstract property (if an abstract property is being searched for)",id:"abstract",children:[],level:3},{value:"Selection of non-matching classes of parameters (if an abstract property is being searched for)",id:"notequals",children:[],level:3},{value:"Additional operations to search for properties / actions",id:"additional-operations-to-search-for-properties--actions",children:[{value:"Matching parameter classes",id:"directclasses",children:[],level:4},{value:"Intersection of parameter classes",id:"indirectclasses",children:[],level:4},{value:"Defining the classes of the referring parameters",id:"call",children:[],level:4},{value:"Determining parameter classes of a property (action)",id:"decl",children:[],level:4}],level:3}],level:2},{value:"Examples",id:"examples",children:[],level:2}],m={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Each element in the system contains certain information that allows it ",(0,l.kt)("a",{parentName:"p",href:"/next/Element_identification"},"to be uniquely identified")," among other elements of the system. However, providing all the information about the element in each place it is used is rather cumbersome; so the platform has a special ",(0,l.kt)("em",{parentName:"p"},"search")," algorithm, which allows you to find the desired element with only part of the information about it (for example, only a short ",(0,l.kt)("a",{parentName:"p",href:"/next/Naming"},"name")," and the ",(0,l.kt)("a",{parentName:"p",href:"/next/Modules"},"module")," which uses the item you are searching for)."),(0,l.kt)("h2",{id:"search-steps"},"Search steps"),(0,l.kt)("p",null,"In general, a search algorithm consists of one or more ",(0,l.kt)("em",{parentName:"p"},"search steps"),". The steps are executed one after another so that if the required element is not found in the first step, the second step is executed, then the next and so on until either the required element is found or the steps are completed (in the latter case, the platform will throw an error that the element was not found)."),(0,l.kt)("p",null,"Each search step, in turn, consists of several substeps:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Step conditions")," - a set of conditions, each of which must be met in order for the step to make sense at all. This check is done before any elements of the system are examined, and depends entirely on the context of the call."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Selection conditions")," - a set of conditions, each of which must be met for any element that is potentially the required element. In this step, the elements are independent of each other, and the result of this step is a selected ",(0,l.kt)("em",{parentName:"li"},"set of candidates"),", to be the required element."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Selection operations"),' - a list of operations each of which filters a set of candidates, depending on which of the candidates in this set is potentially "better" (that is, with a higher probability) suited for the role of the required element.')),(0,l.kt)("p",null,"If, after performing the last selection operation, there remains:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"exactly one element - it is considered to be the required element. "),(0,l.kt)("li",{parentName:"ul"},"more than one element - the platform will throw an error that it is not possible to unambiguously determine the required element"),(0,l.kt)("li",{parentName:"ul"},"zero elements - the platform will either go to the next search step (if one exists) or it will throw an error that the element was not found.")),(0,l.kt)("p",null,"Below are the steps, conditions and operations of the search algorithm, depending on the type of the required element:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element type"),(0,l.kt)("th",{parentName:"tr",align:null},"Search step"),(0,l.kt)("th",{parentName:"tr",align:null},"Step conditions"),(0,l.kt)("th",{parentName:"tr",align:null},"Selection conditions"),(0,l.kt)("th",{parentName:"tr",align:null},"Selection operations"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/next/Modules"},"Modules")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,"Name equals",(0,l.kt)("a",{parentName:"td",href:"#name"},"...")))),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/next/Forms"},"Forms"),", ",(0,l.kt)("a",{parentName:"td",href:"/next/User_classes"},"Classes"),", ",(0,l.kt)("a",{parentName:"td",href:"/next/Navigator"},"Navigator Elements"),", ",(0,l.kt)("a",{parentName:"td",href:"/next/Groups_of_properties_and_actions"},"Property and action groups")," , ",(0,l.kt)("a",{parentName:"td",href:"/next/Tables"},"Tables"),", ",(0,l.kt)("a",{parentName:"td",href:"/next/Navigator_design"},"Navigator Design")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,"Name matches",(0,l.kt)("a",{parentName:"td",href:"#name"},"...")),(0,l.kt)("li",null,"Located in dependent module",(0,l.kt)("a",{parentName:"td",href:"#module"},"...")),(0,l.kt)("li",null,"Located in specified namespace (if explicitly specified)",(0,l.kt)("a",{parentName:"td",href:"#namespace"},"...")))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,"Selection of a priority namespace (if the namespace is not explicitly specified)",(0,l.kt)("a",{parentName:"td",href:"#priority"},"..."))))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/next/Metaprogramming"},"Metacodes")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,"Name matches",(0,l.kt)("a",{parentName:"td",href:"#name"},"...")),(0,l.kt)("li",null,"Located in dependent module",(0,l.kt)("a",{parentName:"td",href:"#module"},"...")),(0,l.kt)("li",null,"Located in specified namespace (if explicitly specified)",(0,l.kt)("a",{parentName:"td",href:"#namespace"},"...")),(0,l.kt)("li",null,"Number of parameters matches",(0,l.kt)("a",{parentName:"td",href:"#metacode"},"...")))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,"Selection of a priority namespace (if the namespace is not explicitly specified)",(0,l.kt)("a",{parentName:"td",href:"#priority"},"..."))))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/next/Properties"},"Properties"),", ",(0,l.kt)("a",{parentName:"td",href:"/next/Actions"},"Actions")),(0,l.kt)("td",{parentName:"tr",align:null},"Local"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,"Search for property inside action",(0,l.kt)("a",{parentName:"td",href:"#locals"},"...")),(0,l.kt)("li",null,"Namespace not specified explicitly",(0,l.kt)("a",{parentName:"td",href:"#nonamespace"},"...")))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,"Name matches",(0,l.kt)("a",{parentName:"td",href:"#name"},"...")),(0,l.kt)("li",null,"Located upper in the stack",(0,l.kt)("a",{parentName:"td",href:"#stack"},"...")),(0,l.kt)("li",null,"Parameters classes match",(0,l.kt)("a",{parentName:"td",href:"#direct"},"...")))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,"Selection of more specific classes of parameters",(0,l.kt)("a",{parentName:"td",href:"#concrete"},"..."))))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Local common"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,"Search for property inside action",(0,l.kt)("a",{parentName:"td",href:"#locals"},"...")),(0,l.kt)("li",null,"Namespace not specified explicitly",(0,l.kt)("a",{parentName:"td",href:"#nonamespace"},"...")))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,"Name matches",(0,l.kt)("a",{parentName:"td",href:"#name"},"...")),(0,l.kt)("li",null,"Located upper in the stack",(0,l.kt)("a",{parentName:"td",href:"#stack"},"...")),(0,l.kt)("li",null,"Parameters classes intersect",(0,l.kt)("a",{parentName:"td",href:"#indirect"},"...")))),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Global"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,"Name matches",(0,l.kt)("a",{parentName:"td",href:"#name"},"...")),(0,l.kt)("li",null,"Located in dependent module",(0,l.kt)("a",{parentName:"td",href:"#module"},"...")),(0,l.kt)("li",null,"Located in specified namespace (if explicitly specified)",(0,l.kt)("a",{parentName:"td",href:"#namespace"},"...")),(0,l.kt)("li",null,"Parameters classes match",(0,l.kt)("a",{parentName:"td",href:"#direct"},"...")),(0,l.kt)("li",null,"Abstract property (if an abstract property is being searched for)",(0,l.kt)("a",{parentName:"td",href:"#abstract"},"...")))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,"Selection of a priority namespace (if the namespace is not explicitly specified)",(0,l.kt)("a",{parentName:"td",href:"#priority"},"...")),(0,l.kt)("li",null,"Selection of non-matching classes of parameters (if an abstract property is being searched for)",(0,l.kt)("a",{parentName:"td",href:"#notequals"},"...")),(0,l.kt)("li",null,"Selection of more specific classes of parameters",(0,l.kt)("a",{parentName:"td",href:"#concrete"},"..."))))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Global common"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,"Not searching for an abstract property",(0,l.kt)("a",{parentName:"td",href:"#notabstract"},"...")))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,"Name matches",(0,l.kt)("a",{parentName:"td",href:"#name"},"...")),(0,l.kt)("li",null,"Located in dependent module",(0,l.kt)("a",{parentName:"td",href:"#module"},"...")),(0,l.kt)("li",null,"Located in specified namespace (if explicitly specified)",(0,l.kt)("a",{parentName:"td",href:"#namespace"},"...")),(0,l.kt)("li",null,"Parameters classes intersect",(0,l.kt)("a",{parentName:"td",href:"#indirect"},"...")))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,"Selection of a priority namespace (if the namespace is not explicitly specified)",(0,l.kt)("a",{parentName:"td",href:"#priority"},"..."))))))),(0,l.kt)("p",null,"Description of steps, conditions and operations of the search algorithm:"),(0,l.kt)("h3",{id:"name"},"Name matches"),(0,l.kt)("p",null,"The name of the candidate matches the search name (must always be specified explicitly when searching). The comparison is case-sensitive (i.e. ",(0,l.kt)("inlineCode",{parentName:"p"},"aA != AA"),")."),(0,l.kt)("h3",{id:"module"},"Located in dependent module"),(0,l.kt)("p",null,"Candidate module ",(0,l.kt)("a",{parentName:"p",href:"/next/Modules#depends"},"depends on")," the module in which the search is performed."),(0,l.kt)("h3",{id:"namespace"},"Located in specified namespace (if explicitly specified)"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/next/Naming#namespace"},"Namespace")," of the candidate equals the namespace of the search (if this namespace is specified explicitly)."),(0,l.kt)("h3",{id:"priority"},"Selection of a priority namespace (if the namespace is not explicitly specified)"),(0,l.kt)("p",null,"If the current set contains candidates from the namespace in which the search is performed, all other candidates are deleted from the set of candidates, and the selection operation is completed. If not, a similar action is repeated for ",(0,l.kt)("em",{parentName:"p"},"priority")," namespaces of the module in which the search is being performed (in the order in which these priority namespaces were set). If nothing is found for them either, the set of candidates remains unchanged."),(0,l.kt)("h3",{id:"metacode"},"Number of parameters matches"),(0,l.kt)("p",null,"The number of parameters of the candidate is equal to the number of parameters of the call."),(0,l.kt)("h3",{id:"locals"},"Search for property inside action"),(0,l.kt)("p",null,"This step is only executed to search for a property, and only if this search is inside some action (and not, for example, in a form declaration)."),(0,l.kt)("h3",{id:"nonamespace"},"Namespace not specified explicitly"),(0,l.kt)("p",null,"This step is only executed if no search namespace is specified."),(0,l.kt)("h3",{id:"stack"},"Located upper in the stack"),(0,l.kt)("p",null,"The candidate is a ",(0,l.kt)("a",{parentName:"p",href:"/next/Data_properties_DATA#local"},"local property")," and:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"is declared inside an operator of a ",(0,l.kt)("a",{parentName:"li",href:"/next/Sequence"},"sequence")," that executes an action that refers to the required element."),(0,l.kt)("li",{parentName:"ul"},"is declared earlier than the action that directly refers to the required element.")),(0,l.kt)("h3",{id:"direct"},"Suitable classes of parameters"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"#call"},"Classes of call parameters")," ",(0,l.kt)("a",{parentName:"p",href:"#directclasses"},"match")," ",(0,l.kt)("a",{parentName:"p",href:"#decl"},"the classes of the candidate's parameters")," or classes of the referring parameters are unknown."),(0,l.kt)("h3",{id:"indirect"},"Classes of parameters intersect"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"#call"},"Classes of the referring parameters")," ",(0,l.kt)("a",{parentName:"p",href:"#indirectclasses"},"intersect")," with ",(0,l.kt)("a",{parentName:"p",href:"#decl"},"classes of the candidate's parameters"),"."),(0,l.kt)("h3",{id:"concrete"},"Selection of more specific classes of parameters"),(0,l.kt)("p",null,"If the set of candidates includes properties ",(0,l.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"B")," such that ",(0,l.kt)("inlineCode",{parentName:"p"},"A"),"'s parameter classes match ",(0,l.kt)("inlineCode",{parentName:"p"},"B"),"'s, then property ",(0,l.kt)("inlineCode",{parentName:"p"},"B")," is removed from the set of candidates."),(0,l.kt)("h3",{id:"notabstract"},"Not searching for an abstract property"),(0,l.kt)("p",null,"This step is not executed if a property (action) is searched in the ",(0,l.kt)("a",{parentName:"p",href:"/next/Property_extension"},"extension")," operator of the property (action), and the searched property is an extensible (abstract) property (when searching for properties in the right one part of extension operator implementation the common search mechanism is used)."),(0,l.kt)("h3",{id:"abstract"},"Abstract property (if an abstract property is being searched for)"),(0,l.kt)("p",null,"The candidate is an ",(0,l.kt)("a",{parentName:"p",href:"/next/Property_extension"},"abstract")," property (action)."),(0,l.kt)("h3",{id:"notequals"},"Selection of non-matching classes of parameters (if an abstract property is being searched for)"),(0,l.kt)("p",null,"If:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"the search is for an abstract property (action)"),(0,l.kt)("li",{parentName:"ul"},"the referring parameter classes are not explicitly specified"),(0,l.kt)("li",{parentName:"ul"},"the set of candidates includes properties (actions) whose parameter classes are equal to the classes of the call's parameters"),(0,l.kt)("li",{parentName:"ul"},"the set of candidates includes properties (actions) whose parameter classes are not equal to the classes of the call's parameters")),(0,l.kt)("p",null,"Then: properties (actions) from the third section are deleted from the set of candidates (i.e., those for which the parameter classes are equal to the classes of the referring parameters)"),(0,l.kt)("h3",{id:"additional-operations-to-search-for-properties--actions"},"Additional operations to search for properties / actions"),(0,l.kt)("h4",{id:"directclasses"},"Matching parameter classes"),(0,l.kt)("p",null,"Let's say that the classes of parameters ",(0,l.kt)("inlineCode",{parentName:"p"},"(A1, ..., An)")," ",(0,l.kt)("em",{parentName:"p"},"match")," the classes of parameters ",(0,l.kt)("inlineCode",{parentName:"p"},"(B1, ..., Bm)")," if:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"n = m"),", i.e. the number of parameters is the same"),(0,l.kt)("li",{parentName:"ul"},"for each parameter ",(0,l.kt)("inlineCode",{parentName:"li"},"i"),", one of the following is true:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Ai")," is unknown (equal to ",(0,l.kt)("inlineCode",{parentName:"li"},"?"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Bi")," is unknown (equal to ",(0,l.kt)("inlineCode",{parentName:"li"},"?"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Ai")," ",(0,l.kt)("a",{parentName:"li",href:"/next/User_classes#inheritance"},"inherits")," from ",(0,l.kt)("inlineCode",{parentName:"li"},"Bi")," (more specifically, the set of descendant classes of ",(0,l.kt)("inlineCode",{parentName:"li"},"Bi")," includes the set of descendant classes of ",(0,l.kt)("inlineCode",{parentName:"li"},"Ai"),")")))),(0,l.kt)("h4",{id:"indirectclasses"},"Intersection of parameter classes"),(0,l.kt)("p",null,"Let's say that the classes of parameters ",(0,l.kt)("inlineCode",{parentName:"p"},"(A1, ..., An)")," ",(0,l.kt)("em",{parentName:"p"},"intersect with")," the classes of parameters ",(0,l.kt)("inlineCode",{parentName:"p"},"(B1, ..., Bm)")," if:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"n = m"),", i.e. the number of parameters is the same"),(0,l.kt)("li",{parentName:"ul"},"for each parameter ",(0,l.kt)("inlineCode",{parentName:"li"},"i"),", one of the following is true:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Ai")," is unknown (equal to ",(0,l.kt)("inlineCode",{parentName:"li"},"?"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Bi")," is unknown (equal to ",(0,l.kt)("inlineCode",{parentName:"li"},"?"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Ai")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"Bi")," have a common descendant (more specifically, the set of descendant classes of ",(0,l.kt)("inlineCode",{parentName:"li"},"Bi")," intersects with the set of descendant classes of ",(0,l.kt)("inlineCode",{parentName:"li"},"Ai"),")")))),(0,l.kt)("h4",{id:"call"},"Defining the classes of the referring parameters"),(0,l.kt)("p",null,"When a call is made a property (action), if the parameter classes are not explicitly set, the platform tries to automatically determine them from the reference context. The following is an (incomplete) list of possible contexts, and how the platform determines the referring parameter classes in these cases:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Context"),(0,l.kt)("th",{parentName:"tr",align:null},"Call parameter classes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Composition / Call"),(0,l.kt)("td",{parentName:"tr",align:null},"Classes of the values of argument properties")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Use on the form"),(0,l.kt)("td",{parentName:"tr",align:null},"Classes of objects taken by the required property/action")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Add actions to the navigator"),(0,l.kt)("td",{parentName:"tr",align:null},"Empty list")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Results of input, external access"),(0,l.kt)("td",{parentName:"tr",align:null},"Empty list")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Simple partitioning"),(0,l.kt)("td",{parentName:"tr",align:null},"Classes of the values of group properties (",(0,l.kt)("inlineCode",{parentName:"td"},"BY")," block)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Nested local properties in session operators"),(0,l.kt)("td",{parentName:"tr",align:null},"Unknown")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Data import"),(0,l.kt)("td",{parentName:"tr",align:null},"If a list of values is imported (",(0,l.kt)("inlineCode",{parentName:"td"},"LIST"),"), the empty list, otherwise a list of a single ",(0,l.kt)("inlineCode",{parentName:"td"},"INTEGER")," element")))),(0,l.kt)("h4",{id:"decl"},"Determining parameter classes of a property (action)"),(0,l.kt)("p",null,"If the parameter classes of a property (action) are not explicitly specified, the platform tries to automatically determine them from the property (action) implementation. The following is an (incomplete) list of possible implementations, and how the platform determines property (action) parameter classes in these cases:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Context"),(0,l.kt)("th",{parentName:"tr",align:null},"Call parameter classes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Expressions"),(0,l.kt)("td",{parentName:"tr",align:null},"Classes of the parameters (in the order of their use)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Primary, Abstract"),(0,l.kt)("td",{parentName:"tr",align:null},"Classes are specified explicitly in the operator itself")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Formula, Internal Call"),(0,l.kt)("td",{parentName:"tr",align:null},"The classes can be specified explicitly in the operator itself; if not specified, all parameter classes are considered unknown (",(0,l.kt)("inlineCode",{parentName:"td"},"?"),") and the number is determined by the specifics of the particular operator")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Grouping"),(0,l.kt)("td",{parentName:"tr",align:null},"Classes of the values of group properties (",(0,l.kt)("inlineCode",{parentName:"td"},"BY")," block)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Operations with object groups"),(0,l.kt)("td",{parentName:"tr",align:null},"Classes of objects belonging to the used objects group")))),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lsf"},"MODULE ResolveA;\n\nCLASS A;\nCLASS B : A;\nCLASS C : B;\n\nf = DATA INTEGER (A);\nf = DATA INTEGER (C);\n\nMETA defineSmth(prm1)\n    x = DATA INTEGER (prm1);\nEND\n\nMETA defineSmth(prm1, prm2)\n    x = DATA INTEGER (prm1, prm2);\nEND\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lsf"},"MODULE ResolveB;\n\nREQUIRE ResolveA;\n\nf = DATA INTEGER (B);\n\nh(C c) = f(c); // will find the upper declaration - ResolveB.f[B]\nj(C c) = ResolveA.f(c); // will find the declaration in ResolveA - ResolveA.f[C]\nz(C c) = f[A](c); // will find the declaration in ResolveA - ResolveA.f[A]\n\ntest(C c, A a) {\n    LOCAL f = INTEGER (B);\n\n    f(c) <- 1; // will find the upper declaration - f[B]\n    MESSAGE f(a); // will find the upper declaration - f[B]\n    ResolveB.f(c) <- 1; // will find the upper declaration in ResolveB - ResolveB.f[B]\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lsf"},"MODULE ResolveC;\n\nREQUIRE ResolveB, ResolveA;\n\nNAMESPACE ResolveA;\n\nx(B b) = f(b); // will find the declaration in ResolveA - ResolveA.f[A]\ny(B b) = ResolveB.f(b); // will find the declaration in ResolveA - ResolveB.f[B]\n\n@defineSmth(A, B); // will find the declaration in ResolveA - ResolveA.defineSmth(prm1, prm2)\n")))}d.isMDXComponent=!0}}]);