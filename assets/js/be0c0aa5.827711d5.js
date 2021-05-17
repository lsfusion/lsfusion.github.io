(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[36895],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(f,o(o({ref:e},s),{},{components:n})):r.createElement(f,o({ref:e},s))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60250:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return p},default:function(){return s}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),o={title:"Set operations",sidebar_label:"Overview"},i={unversionedId:"Set_operations",id:"Set_operations",isDocsHomePage:!1,title:"Set operations",description:"One of the key features of the platform is the ability to execute certain operations for all object collections for which the values of one or more properties are not\xa0NULL. In the property logic such an operation is the calculation of various\xa0aggregate functions.",source:"@site/docs/Set_operations.md",sourceDirName:".",slug:"/Set_operations",permalink:"/next/Set_operations",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Set_operations.md",version:"current",lastUpdatedAt:1617721389,formattedLastUpdatedAt:"4/6/2021",sidebar_label:"Overview",frontMatter:{title:"Set operations",sidebar_label:"Overview"},sidebar:"learn",previous:{title:"Selection (CASE, IF, MULTI, OVERRIDE, EXCLUSIVE)",permalink:"/next/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_"},next:{title:"Grouping (GROUP)",permalink:"/next/Grouping_GROUP_"}},p=[{value:"Aggregate functions",id:"func",children:[]},{value:"Operation correctness",id:"correct",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:p};function s(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"One of the key features of the platform is the ability to execute certain operations for all object collections for which the values of one or more ",(0,l.kt)("a",{parentName:"p",href:"/next/Properties"},"properties")," are not\xa0",(0,l.kt)("strong",{parentName:"p"},"NULL"),". In the property logic such an operation is the calculation of various\xa0",(0,l.kt)("em",{parentName:"p"},"aggregate functions"),".\xa0"),(0,l.kt)("h3",{id:"func"},"Aggregate functions"),(0,l.kt)("p",null,"An aggregate function\xa0calculates a certain\xa0",(0,l.kt)("em",{parentName:"p"},"result"),"\xa0as a single object on a set of object collections. This function is defined by the\xa0",(0,l.kt)("em",{parentName:"p"},"initial value"),"\xa0(typically\xa0",(0,l.kt)("strong",{parentName:"p"},"NULL"),"),\xa0",(0,l.kt)("a",{parentName:"p",href:"/next/Properties"},"properties"),"\xa0that it uses (",(0,l.kt)("em",{parentName:"p"},"operands"),"),\xa0",(0,l.kt)("em",{parentName:"p"},"operation of addition"),"\xa0to the\xa0",(0,l.kt)("em",{parentName:"p"},"intermediate result"),"\xa0of the current operand values, and\xa0",(0,l.kt)("em",{parentName:"p"},"conversion function"),"\xa0of the intermediate result to the final (typically the intermediate result is the final result)."),(0,l.kt)("p",null,"Aggregate function is\xa0",(0,l.kt)("em",{parentName:"p"},"commutative")," if the order in which the object collections of the original set are iterated over does not matter when calculating the result.\xa0"),(0,l.kt)("p",null,"The table below shows the currently supported types of aggregate functions:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type/instruction option"),(0,l.kt)("th",{parentName:"tr",align:null},"Initial value"),(0,l.kt)("th",{parentName:"tr",align:null},"Names of the operands"),(0,l.kt)("th",{parentName:"tr",align:null},"Add operation"),(0,l.kt)("th",{parentName:"tr",align:null},"Conversion function"),(0,l.kt)("th",{parentName:"tr",align:null},"Commutativity"),(0,l.kt)("th",{parentName:"tr",align:null},"Data type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SUM"),(0,l.kt)("td",{parentName:"tr",align:null},"NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"operand"),(0,l.kt)("td",{parentName:"tr",align:null},"result = result (+) operand"),(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},"+"),(0,l.kt)("td",{parentName:"tr",align:null},"number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MAX"),(0,l.kt)("td",{parentName:"tr",align:null},"NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"operand"),(0,l.kt)("td",{parentName:"tr",align:null},"result = max(result, operand)"),(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},"+"),(0,l.kt)("td",{parentName:"tr",align:null},"any comparable")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MIN"),(0,l.kt)("td",{parentName:"tr",align:null},"NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"operand"),(0,l.kt)("td",{parentName:"tr",align:null},"result = min(result, operand)"),(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},"+"),(0,l.kt)("td",{parentName:"tr",align:null},"any comparable")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"CONCAT")),(0,l.kt)("td",{parentName:"tr",align:null},"NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"separator, operand"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"result = CONCAT separator, result, operand")),(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LAST / PREV"),(0,l.kt)("td",{parentName:"tr",align:null},"NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"where, operand"),(0,l.kt)("td",{parentName:"tr",align:null},"result = IF where THEN operand ELSE result"),(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"any"))))),(0,l.kt)("p",null,"From the perspective of determining the set of object collections and the result display method, four main operators for working with sets can be distinguished:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/next/Grouping_GROUP_"},"Group (GROUP)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/next/Partitioning_sorting_PARTITION_..._ORDER_"},"Partition/order (PARTITION ... ORDER)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/next/Recursion_RECURSION_"},"Recursion (RECURSION)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/next/Distribution_UNGROUP_"},"Distribution (UNGROUP)"))),(0,l.kt)("h3",{id:"correct"},"Operation correctness"),(0,l.kt)("p",null,"You should consider that during each operation on a set of object collections, this set must be finite. In this case, the operation is called\xa0",(0,l.kt)("em",{parentName:"p"},"correct"),"."),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS A;\nd = DATA INTEGER (A);\n\nf (b) = GROUP SUM 1 IF d(a) < b;\nmessageF  { MESSAGE f(5); } // will be executed successfully\n\ng = GROUP SUM f(b);\nmessageG  { MESSAGE g(); } // f(b) is not NULL for infinite number b, the platform will throw an error\n\nFORM f\n    OBJECTS d=DATE\n;\n\nprintFWithD { PRINT f OBJECTS d=currentDate(); } // will be executed successfully\n\nprintFWithoutD { PRINT f; } // there is no filter for dates, and d IS DATE is not NULL for an infinite number d, the platform will throw an error\n")),(0,l.kt)("p",null,"There are several non-trivial cases when the operation is correct but the platform cannot determine this. For example, if the only limiting condition for a parameter is whether it falls within the range:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lsf"},"hs = GROUP SUM 1 IF (a AS INTEGER) >= 4 AND a <= 6;\nmessageHS  { MESSAGE hs(); } // theoretically, it should return 3, but the platform will still throw an error\nhi = GROUP SUM 1 IF iterate(a, 4, 6); // workaround: to work with intervals, the iterate property can be used (which, in turn, is implemented through recursion)\n")))}s.isMDXComponent=!0}}]);