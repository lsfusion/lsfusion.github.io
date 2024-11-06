"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[2893],{21400:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>o,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var r=i(74848),n=i(28453);const t={title:"Search"},a=void 0,l={id:"Search_",title:"Search",description:"Each element in the system contains certain information that allows it to be uniquely identified among other elements of the system. However, providing all the information about the element in each place it is used is rather cumbersome; so the platform has a special search algorithm, which allows you to find the desired element with only part of the information about it (for example, only a short name and the module which uses the item you are searching for).",source:"@site/docs/Search_.md",sourceDirName:".",slug:"/Search_",permalink:"/Search_",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Search_.md",tags:[],version:"current",lastUpdatedAt:1623249583e3,frontMatter:{title:"Search"},sidebar:"learn",previous:{title:"Naming",permalink:"/Naming"},next:{title:"Modularity",permalink:"/Modularity"}},c={},d=[{value:"Search steps",id:"search-steps",level:2},{value:"Name matches",id:"name",level:3},{value:"Located in dependent module",id:"module",level:3},{value:"Located in specified namespace (if explicitly specified)",id:"namespace",level:3},{value:"Selection of a priority namespace (if the namespace is not explicitly specified)",id:"priority",level:3},{value:"Number of parameters matches",id:"metacode",level:3},{value:"Search for property inside action",id:"locals",level:3},{value:"Namespace not specified explicitly",id:"nonamespace",level:3},{value:"Located upper in the stack",id:"stack",level:3},{value:"Suitable classes of parameters",id:"direct",level:3},{value:"Classes of parameters intersect",id:"indirect",level:3},{value:"Selection of more specific classes of parameters",id:"concrete",level:3},{value:"Not searching for an abstract property",id:"notabstract",level:3},{value:"Abstract property (if an abstract property is being searched for)",id:"abstract",level:3},{value:"Selection of non-matching classes of parameters (if an abstract property is being searched for)",id:"notequals",level:3},{value:"Additional operations to search for properties / actions",id:"additional-operations-to-search-for-properties--actions",level:3},{value:"Matching parameter classes",id:"directclasses",level:4},{value:"Intersection of parameter classes",id:"indirectclasses",level:4},{value:"Defining the classes of the referring parameters",id:"call",level:4},{value:"Determining parameter classes of a property (action)",id:"decl",level:4},{value:"Examples",id:"examples",level:2}];function h(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["Each element in the system contains certain information that allows it ",(0,r.jsx)(s.a,{href:"/Element_identification",children:"to be uniquely identified"})," among other elements of the system. However, providing all the information about the element in each place it is used is rather cumbersome; so the platform has a special ",(0,r.jsx)(s.em,{children:"search"})," algorithm, which allows you to find the desired element with only part of the information about it (for example, only a short ",(0,r.jsx)(s.a,{href:"/Naming",children:"name"})," and the ",(0,r.jsx)(s.a,{href:"/Modules",children:"module"})," which uses the item you are searching for)."]}),"\n",(0,r.jsx)(s.h2,{id:"search-steps",children:"Search steps"}),"\n",(0,r.jsxs)(s.p,{children:["In general, a search algorithm consists of one or more ",(0,r.jsx)(s.em,{children:"search steps"}),". The steps are executed one after another so that if the required element is not found in the first step, the second step is executed, then the next and so on until either the required element is found or the steps are completed (in the latter case, the platform will throw an error that the element was not found)."]}),"\n",(0,r.jsx)(s.p,{children:"Each search step, in turn, consists of several substeps:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.em,{children:"Step conditions"})," - a set of conditions, each of which must be met in order for the step to make sense at all. This check is done before any elements of the system are examined, and depends entirely on the context of the call."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.em,{children:"Selection conditions"})," - a set of conditions, each of which must be met for any element that is potentially the required element. In this step, the elements are independent of each other, and the result of this step is a selected ",(0,r.jsx)(s.em,{children:"set of candidates"}),", to be the required element."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.em,{children:"Selection operations"}),' - a list of operations each of which filters a set of candidates, depending on which of the candidates in this set is potentially "better" (that is, with a higher probability) suited for the role of the required element.']}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"If, after performing the last selection operation, there remains:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"exactly one element - it is considered to be the required element."}),"\n",(0,r.jsx)(s.li,{children:"more than one element - the platform will throw an error that it is not possible to unambiguously determine the required element"}),"\n",(0,r.jsx)(s.li,{children:"zero elements - the platform will either go to the next search step (if one exists) or it will throw an error that the element was not found."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Below are the steps, conditions and operations of the search algorithm, depending on the type of the required element:"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Element type"}),(0,r.jsx)(s.th,{children:"Search step"}),(0,r.jsx)(s.th,{children:"Step conditions"}),(0,r.jsx)(s.th,{children:"Selection conditions"}),(0,r.jsx)(s.th,{children:"Selection operations"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/Modules",children:"Modules"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:(0,r.jsx)("ul",{children:(0,r.jsxs)("li",{children:["Name equals",(0,r.jsx)(s.a,{href:"#name",children:"..."})]})})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.a,{href:"/Forms",children:"Forms"}),", ",(0,r.jsx)(s.a,{href:"/User_classes",children:"Classes"}),", ",(0,r.jsx)(s.a,{href:"/Navigator",children:"Navigator Elements"}),", ",(0,r.jsx)(s.a,{href:"/Groups_of_properties_and_actions",children:"Property and action groups"})," , ",(0,r.jsx)(s.a,{href:"/Tables",children:"Tables"}),", ",(0,r.jsx)(s.a,{href:"/Navigator_design",children:"Navigator Design"})]}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["Name matches",(0,r.jsx)(s.a,{href:"#name",children:"..."})]}),(0,r.jsxs)("li",{children:["Located in dependent module",(0,r.jsx)(s.a,{href:"#module",children:"..."})]}),(0,r.jsxs)("li",{children:["Located in specified namespace (if explicitly specified)",(0,r.jsx)(s.a,{href:"#namespace",children:"..."})]})]})}),(0,r.jsx)(s.td,{children:(0,r.jsx)("ul",{children:(0,r.jsxs)("li",{children:["Selection of a priority namespace (if the namespace is not explicitly specified)",(0,r.jsx)(s.a,{href:"#priority",children:"..."})]})})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/Metaprogramming",children:"Metacodes"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["Name matches",(0,r.jsx)(s.a,{href:"#name",children:"..."})]}),(0,r.jsxs)("li",{children:["Located in dependent module",(0,r.jsx)(s.a,{href:"#module",children:"..."})]}),(0,r.jsxs)("li",{children:["Located in specified namespace (if explicitly specified)",(0,r.jsx)(s.a,{href:"#namespace",children:"..."})]}),(0,r.jsxs)("li",{children:["Number of parameters matches",(0,r.jsx)(s.a,{href:"#metacode",children:"..."})]})]})}),(0,r.jsx)(s.td,{children:(0,r.jsx)("ul",{children:(0,r.jsxs)("li",{children:["Selection of a priority namespace (if the namespace is not explicitly specified)",(0,r.jsx)(s.a,{href:"#priority",children:"..."})]})})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.a,{href:"/Properties",children:"Properties"}),", ",(0,r.jsx)(s.a,{href:"/Actions",children:"Actions"})]}),(0,r.jsx)(s.td,{children:"Local"}),(0,r.jsx)(s.td,{children:(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["Search for property inside action",(0,r.jsx)(s.a,{href:"#locals",children:"..."})]}),(0,r.jsxs)("li",{children:["Namespace not specified explicitly",(0,r.jsx)(s.a,{href:"#nonamespace",children:"..."})]})]})}),(0,r.jsx)(s.td,{children:(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["Name matches",(0,r.jsx)(s.a,{href:"#name",children:"..."})]}),(0,r.jsxs)("li",{children:["Located upper in the stack",(0,r.jsx)(s.a,{href:"#stack",children:"..."})]}),(0,r.jsxs)("li",{children:["Parameters classes match",(0,r.jsx)(s.a,{href:"#direct",children:"..."})]})]})}),(0,r.jsx)(s.td,{children:(0,r.jsx)("ul",{children:(0,r.jsxs)("li",{children:["Selection of more specific classes of parameters",(0,r.jsx)(s.a,{href:"#concrete",children:"..."})]})})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Local common"}),(0,r.jsx)(s.td,{children:(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["Search for property inside action",(0,r.jsx)(s.a,{href:"#locals",children:"..."})]}),(0,r.jsxs)("li",{children:["Namespace not specified explicitly",(0,r.jsx)(s.a,{href:"#nonamespace",children:"..."})]})]})}),(0,r.jsx)(s.td,{children:(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["Name matches",(0,r.jsx)(s.a,{href:"#name",children:"..."})]}),(0,r.jsxs)("li",{children:["Located upper in the stack",(0,r.jsx)(s.a,{href:"#stack",children:"..."})]}),(0,r.jsxs)("li",{children:["Parameters classes intersect",(0,r.jsx)(s.a,{href:"#indirect",children:"..."})]})]})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Global"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["Name matches",(0,r.jsx)(s.a,{href:"#name",children:"..."})]}),(0,r.jsxs)("li",{children:["Located in dependent module",(0,r.jsx)(s.a,{href:"#module",children:"..."})]}),(0,r.jsxs)("li",{children:["Located in specified namespace (if explicitly specified)",(0,r.jsx)(s.a,{href:"#namespace",children:"..."})]}),(0,r.jsxs)("li",{children:["Parameters classes match",(0,r.jsx)(s.a,{href:"#direct",children:"..."})]}),(0,r.jsxs)("li",{children:["Abstract property (if an abstract property is being searched for)",(0,r.jsx)(s.a,{href:"#abstract",children:"..."})]})]})}),(0,r.jsx)(s.td,{children:(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["Selection of a priority namespace (if the namespace is not explicitly specified)",(0,r.jsx)(s.a,{href:"#priority",children:"..."})]}),(0,r.jsxs)("li",{children:["Selection of non-matching classes of parameters (if an abstract property is being searched for)",(0,r.jsx)(s.a,{href:"#notequals",children:"..."})]}),(0,r.jsxs)("li",{children:["Selection of more specific classes of parameters",(0,r.jsx)(s.a,{href:"#concrete",children:"..."})]})]})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Global common"}),(0,r.jsx)(s.td,{children:(0,r.jsx)("ul",{children:(0,r.jsxs)("li",{children:["Not searching for an abstract property",(0,r.jsx)(s.a,{href:"#notabstract",children:"..."})]})})}),(0,r.jsx)(s.td,{children:(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["Name matches",(0,r.jsx)(s.a,{href:"#name",children:"..."})]}),(0,r.jsxs)("li",{children:["Located in dependent module",(0,r.jsx)(s.a,{href:"#module",children:"..."})]}),(0,r.jsxs)("li",{children:["Located in specified namespace (if explicitly specified)",(0,r.jsx)(s.a,{href:"#namespace",children:"..."})]}),(0,r.jsxs)("li",{children:["Parameters classes intersect",(0,r.jsx)(s.a,{href:"#indirect",children:"..."})]})]})}),(0,r.jsx)(s.td,{children:(0,r.jsx)("ul",{children:(0,r.jsxs)("li",{children:["Selection of a priority namespace (if the namespace is not explicitly specified)",(0,r.jsx)(s.a,{href:"#priority",children:"..."})]})})})]})]})]}),"\n",(0,r.jsx)(s.p,{children:"Description of steps, conditions and operations of the search algorithm:"}),"\n",(0,r.jsx)(s.h3,{id:"name",children:"Name matches"}),"\n",(0,r.jsxs)(s.p,{children:["The name of the candidate matches the search name (must always be specified explicitly when searching). The comparison is case-sensitive (i.e. ",(0,r.jsx)(s.code,{children:"aA != AA"}),")."]}),"\n",(0,r.jsx)(s.h3,{id:"module",children:"Located in dependent module"}),"\n",(0,r.jsxs)(s.p,{children:["Candidate module ",(0,r.jsx)(s.a,{href:"/Modules#depends",children:"depends on"})," the module in which the search is performed."]}),"\n",(0,r.jsx)(s.h3,{id:"namespace",children:"Located in specified namespace (if explicitly specified)"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/Naming#namespace",children:"Namespace"})," of the candidate equals the namespace of the search (if this namespace is specified explicitly)."]}),"\n",(0,r.jsx)(s.h3,{id:"priority",children:"Selection of a priority namespace (if the namespace is not explicitly specified)"}),"\n",(0,r.jsxs)(s.p,{children:["If the current set contains candidates from the namespace in which the search is performed, all other candidates are deleted from the set of candidates, and the selection operation is completed. If not, a similar action is repeated for ",(0,r.jsx)(s.em,{children:"priority"})," namespaces of the module in which the search is being performed (in the order in which these priority namespaces were set). If nothing is found for them either, the set of candidates remains unchanged."]}),"\n",(0,r.jsx)(s.h3,{id:"metacode",children:"Number of parameters matches"}),"\n",(0,r.jsx)(s.p,{children:"The number of parameters of the candidate is equal to the number of parameters of the call."}),"\n",(0,r.jsx)(s.h3,{id:"locals",children:"Search for property inside action"}),"\n",(0,r.jsx)(s.p,{children:"This step is only executed to search for a property, and only if this search is inside some action (and not, for example, in a form declaration)."}),"\n",(0,r.jsx)(s.h3,{id:"nonamespace",children:"Namespace not specified explicitly"}),"\n",(0,r.jsx)(s.p,{children:"This step is only executed if no search namespace is specified."}),"\n",(0,r.jsx)(s.h3,{id:"stack",children:"Located upper in the stack"}),"\n",(0,r.jsxs)(s.p,{children:["The candidate is a ",(0,r.jsx)(s.a,{href:"/Data_properties_DATA#local",children:"local property"})," and:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["is declared inside an operator of a ",(0,r.jsx)(s.a,{href:"/Sequence",children:"sequence"})," that executes an action that refers to the required element."]}),"\n",(0,r.jsx)(s.li,{children:"is declared earlier than the action that directly refers to the required element."}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"direct",children:"Suitable classes of parameters"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"#call",children:"Classes of call parameters"})," ",(0,r.jsx)(s.a,{href:"#directclasses",children:"match"})," ",(0,r.jsx)(s.a,{href:"#decl",children:"the classes of the candidate's parameters"})," or classes of the referring parameters are unknown."]}),"\n",(0,r.jsx)(s.h3,{id:"indirect",children:"Classes of parameters intersect"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"#call",children:"Classes of the referring parameters"})," ",(0,r.jsx)(s.a,{href:"#indirectclasses",children:"intersect"})," with ",(0,r.jsx)(s.a,{href:"#decl",children:"classes of the candidate's parameters"}),"."]}),"\n",(0,r.jsx)(s.h3,{id:"concrete",children:"Selection of more specific classes of parameters"}),"\n",(0,r.jsxs)(s.p,{children:["If the set of candidates includes properties ",(0,r.jsx)(s.code,{children:"A"})," and ",(0,r.jsx)(s.code,{children:"B"})," such that ",(0,r.jsx)(s.code,{children:"A"}),"'s parameter classes match ",(0,r.jsx)(s.code,{children:"B"}),"'s, then property ",(0,r.jsx)(s.code,{children:"B"})," is removed from the set of candidates."]}),"\n",(0,r.jsx)(s.h3,{id:"notabstract",children:"Not searching for an abstract property"}),"\n",(0,r.jsxs)(s.p,{children:["This step is not executed if a property (action) is searched in the ",(0,r.jsx)(s.a,{href:"/Property_extension",children:"extension"})," operator of the property (action), and the searched property is an extensible (abstract) property (when searching for properties in the right one part of extension operator implementation the common search mechanism is used)."]}),"\n",(0,r.jsx)(s.h3,{id:"abstract",children:"Abstract property (if an abstract property is being searched for)"}),"\n",(0,r.jsxs)(s.p,{children:["The candidate is an ",(0,r.jsx)(s.a,{href:"/Property_extension",children:"abstract"})," property (action)."]}),"\n",(0,r.jsx)(s.h3,{id:"notequals",children:"Selection of non-matching classes of parameters (if an abstract property is being searched for)"}),"\n",(0,r.jsx)(s.p,{children:"If:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"the search is for an abstract property (action)"}),"\n",(0,r.jsx)(s.li,{children:"the referring parameter classes are not explicitly specified"}),"\n",(0,r.jsx)(s.li,{children:"the set of candidates includes properties (actions) whose parameter classes are equal to the classes of the call's parameters"}),"\n",(0,r.jsx)(s.li,{children:"the set of candidates includes properties (actions) whose parameter classes are not equal to the classes of the call's parameters"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Then: properties (actions) from the third section are deleted from the set of candidates (i.e., those for which the parameter classes are equal to the classes of the referring parameters)"}),"\n",(0,r.jsx)(s.h3,{id:"additional-operations-to-search-for-properties--actions",children:"Additional operations to search for properties / actions"}),"\n",(0,r.jsx)(s.h4,{id:"directclasses",children:"Matching parameter classes"}),"\n",(0,r.jsxs)(s.p,{children:["Let's say that the classes of parameters ",(0,r.jsx)(s.code,{children:"(A1, ..., An)"})," ",(0,r.jsx)(s.em,{children:"match"})," the classes of parameters ",(0,r.jsx)(s.code,{children:"(B1, ..., Bm)"})," if:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"n = m"}),", i.e. the number of parameters is the same"]}),"\n",(0,r.jsxs)(s.li,{children:["for each parameter ",(0,r.jsx)(s.code,{children:"i"}),", one of the following is true:","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Ai"})," is unknown (equal to ",(0,r.jsx)(s.code,{children:"?"}),")"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Bi"})," is unknown (equal to ",(0,r.jsx)(s.code,{children:"?"}),")"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Ai"})," ",(0,r.jsx)(s.a,{href:"/User_classes#inheritance",children:"inherits"})," from ",(0,r.jsx)(s.code,{children:"Bi"})," (more specifically, the set of descendant classes of ",(0,r.jsx)(s.code,{children:"Bi"})," includes the set of descendant classes of ",(0,r.jsx)(s.code,{children:"Ai"}),")"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"indirectclasses",children:"Intersection of parameter classes"}),"\n",(0,r.jsxs)(s.p,{children:["Let's say that the classes of parameters ",(0,r.jsx)(s.code,{children:"(A1, ..., An)"})," ",(0,r.jsx)(s.em,{children:"intersect with"})," the classes of parameters ",(0,r.jsx)(s.code,{children:"(B1, ..., Bm)"})," if:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"n = m"}),", i.e. the number of parameters is the same"]}),"\n",(0,r.jsxs)(s.li,{children:["for each parameter ",(0,r.jsx)(s.code,{children:"i"}),", one of the following is true:","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Ai"})," is unknown (equal to ",(0,r.jsx)(s.code,{children:"?"}),")"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Bi"})," is unknown (equal to ",(0,r.jsx)(s.code,{children:"?"}),")"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Ai"})," and ",(0,r.jsx)(s.code,{children:"Bi"})," have a common descendant (more specifically, the set of descendant classes of ",(0,r.jsx)(s.code,{children:"Bi"})," intersects with the set of descendant classes of ",(0,r.jsx)(s.code,{children:"Ai"}),")"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"call",children:"Defining the classes of the referring parameters"}),"\n",(0,r.jsx)(s.p,{children:"When a call is made a property (action), if the parameter classes are not explicitly set, the platform tries to automatically determine them from the reference context. The following is an (incomplete) list of possible contexts, and how the platform determines the referring parameter classes in these cases:"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Context"}),(0,r.jsx)(s.th,{children:"Call parameter classes"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Composition / Call"}),(0,r.jsx)(s.td,{children:"Classes of the values of argument properties"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Use on the form"}),(0,r.jsx)(s.td,{children:"Classes of objects taken by the required property/action"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Add actions to the navigator"}),(0,r.jsx)(s.td,{children:"Empty list"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Results of input, external access"}),(0,r.jsx)(s.td,{children:"Empty list"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Simple partitioning"}),(0,r.jsxs)(s.td,{children:["Classes of the values of group properties (",(0,r.jsx)(s.code,{children:"BY"})," block)"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Nested local properties in session operators"}),(0,r.jsx)(s.td,{children:"Unknown"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Data import"}),(0,r.jsxs)(s.td,{children:["If a list of values is imported (",(0,r.jsx)(s.code,{children:"LIST"}),"), the empty list, otherwise a list of a single ",(0,r.jsx)(s.code,{children:"INTEGER"})," element"]})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"decl",children:"Determining parameter classes of a property (action)"}),"\n",(0,r.jsx)(s.p,{children:"If the parameter classes of a property (action) are not explicitly specified, the platform tries to automatically determine them from the property (action) implementation. The following is an (incomplete) list of possible implementations, and how the platform determines property (action) parameter classes in these cases:"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Context"}),(0,r.jsx)(s.th,{children:"Call parameter classes"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Expressions"}),(0,r.jsx)(s.td,{children:"Classes of the parameters (in the order of their use)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Primary, Abstract"}),(0,r.jsx)(s.td,{children:"Classes are specified explicitly in the operator itself"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Formula, Internal Call"}),(0,r.jsxs)(s.td,{children:["The classes can be specified explicitly in the operator itself; if not specified, all parameter classes are considered unknown (",(0,r.jsx)(s.code,{children:"?"}),") and the number is determined by the specifics of the particular operator"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Grouping"}),(0,r.jsxs)(s.td,{children:["Classes of the values of group properties (",(0,r.jsx)(s.code,{children:"BY"})," block)"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Operations with object groups"}),(0,r.jsx)(s.td,{children:"Classes of objects belonging to the used objects group"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-lsf",children:"MODULE ResolveA;\n\nCLASS A;\nCLASS B : A;\nCLASS C : B;\n\nf = DATA INTEGER (A);\nf = DATA INTEGER (C);\n\nMETA defineSmth(prm1)\n    x = DATA INTEGER (prm1);\nEND\n\nMETA defineSmth(prm1, prm2)\n    x = DATA INTEGER (prm1, prm2);\nEND\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-lsf",children:"MODULE ResolveB;\n\nREQUIRE ResolveA;\n\nf = DATA INTEGER (B);\n\nh(C c) = f(c); // will find the upper declaration - ResolveB.f[B]\nj(C c) = ResolveA.f(c); // will find the declaration in ResolveA - ResolveA.f[C]\nz(C c) = f[A](c); // will find the declaration in ResolveA - ResolveA.f[A]\n\ntest(C c, A a) {\n    LOCAL f = INTEGER (B);\n\n    f(c) <- 1; // will find the upper declaration - f[B]\n    MESSAGE f(a); // will find the upper declaration - f[B]\n    ResolveB.f(c) <- 1; // will find the upper declaration in ResolveB - ResolveB.f[B]\n}\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-lsf",children:"MODULE ResolveC;\n\nREQUIRE ResolveB, ResolveA;\n\nNAMESPACE ResolveA;\n\nx(B b) = f(b); // will find the declaration in ResolveA - ResolveA.f[A]\ny(B b) = ResolveB.f(b); // will find the declaration in ResolveA - ResolveB.f[B]\n\n@defineSmth(A, B); // will find the declaration in ResolveA - ResolveA.defineSmth(prm1, prm2)\n"})})]})}function o(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>a,x:()=>l});var r=i(96540);const n={},t=r.createContext(n);function a(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);