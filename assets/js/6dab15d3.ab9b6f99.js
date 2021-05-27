(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[15502],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},99521:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i={title:"Recursion (RECURSION)"},l={unversionedId:"Recursion_RECURSION_",id:"Recursion_RECURSION_",isDocsHomePage:!1,title:"Recursion (RECURSION)",description:"The recursion operator is an operator that creates a property which sequentially performs two operations:",source:"@site/docs/Recursion_RECURSION_.md",sourceDirName:".",slug:"/Recursion_RECURSION_",permalink:"/next/Recursion_RECURSION_",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Recursion_RECURSION_.md",version:"current",lastUpdatedAt:1622042248,formattedLastUpdatedAt:"5/26/2021",frontMatter:{title:"Recursion (RECURSION)"},sidebar:"learn",previous:{title:"Partitioning / sorting (PARTITION ... ORDER)",permalink:"/next/Partitioning_sorting_PARTITION_..._ORDER_"},next:{title:"Distribution (UNGROUP)",permalink:"/next/Distribution_UNGROUP_"}},s=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:s};function c(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"recursion")," operator is an operator that creates a ",(0,o.kt)("a",{parentName:"p",href:"/next/Properties"},"property")," which sequentially performs two operations:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Recursively builds an intermediate property (result) with an additional first parameter (operation number) as follows:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"result(0, o1, o2, ..., oN) = initial(o1, ..., oN)"),", where ",(0,o.kt)("inlineCode",{parentName:"li"},"initial")," is an ",(0,o.kt)("em",{parentName:"li"},"initial")," property."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"result(i+1, o1, o2, ..., oN) = step(o1, ..., oN, $o1, $o2, ..., $oN) IF result(i, $o1, $o2, ..., $oN)"),", where ",(0,o.kt)("inlineCode",{parentName:"li"},"step")," is a ",(0,o.kt)("em",{parentName:"li"},"step")," property."))),(0,o.kt)("li",{parentName:"ol"},"For all values of the obtained property, it calculates the given ",(0,o.kt)("a",{parentName:"li",href:"/next/Set_operations#func"},"aggregate function")," grouping by all its parameters except the operation number.")),(0,o.kt)("p",null,"Currently, only two types of aggregate functions are supported for the recursion operator: ",(0,o.kt)("inlineCode",{parentName:"p"},"SUM")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"OR"),". The latter is used in the case when the initial value and step are of class ",(0,o.kt)("inlineCode",{parentName:"p"},"BOOLEAN"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"SUM")," is used in all other cases."),(0,o.kt)("p",null,"Note that sets of objects may begin to repeat after a certain number of iterations. In this case, we say that a cycle is formed. There are three policies for working with cycles:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"CYCLES YES")," - cycles are allowed. In this case, when a cycle is detected, the value of the property will be equal to the maximum allowed value for the value class of this property. This policy is not supported when the initial value and step are of class ",(0,o.kt)("inlineCode",{parentName:"li"},"BOOLEAN"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"CYCLES NO")," (default) - cycles are not allowed. It works similarly to the previous policy, but an additional constraint is created that the value of the obtained property should not be equal to the maximum value (which just means that a cycle has formed for this set of objects)."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"CYCLES IMPOSSIBLE")," - cycles are impossible. As a rule, it is used if there is a counter among the objects which increases at each iteration and, as a result, cannot be repeated.")),(0,o.kt)("p",null,"When using the recursion operator, it is important to make sure that the first step execution process is finite, that is, the step value will sooner or later become ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL"),". (This refers primarily to a ",(0,o.kt)("inlineCode",{parentName:"p"},"CYCLES IMPOSSIBLE")," policy because otherwise the recursion will stop at the first cycle found). If this condition is not met, the operation will be forced to stop depending on the settings of the SQL server."),(0,o.kt)("h3",{id:"language"},"Language"),(0,o.kt)("p",null,"To declare a property that implements recursion, use the ",(0,o.kt)("a",{parentName:"p",href:"/next/RECURSION_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"RECURSION")," operator"),"."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Node;\nedge = DATA BOOLEAN (Node, Node);\n\n// iteration over an integer from 'from' to 'to' (this property is by default included in the System module)\niterate(i, from, to) = RECURSION i==from AND from IS INTEGER AND to IS INTEGER STEP i==$i+1 AND i<=to CYCLES IMPOSSIBLE;\n\n// counts the number of different paths from a to b in the graph\npathes 'Number of paths' (a, b) = RECURSION 1 AND a IS Node AND b==a STEP 1 IF edge(b, $b);\n\n// defines at what level child is from parent, and null if it is not a child (thus this property can be used to define all children)\nparent = DATA Group (Group);\nlevel 'Level' (Group child, Group parent) = RECURSION 1 IF child IS Group AND parent == child\n                                                                  STEP 1 IF parent == parent($parent);\n\n// Fibonacci numbers, the property calculates all Fibonacci numbers up to the value to, (afterwards it will return null)\nfib(i, to) = RECURSION 1 IF (i==0 OR i==1) AND to IS INTEGER STEP 1 IF (i==$i+1 OR i==$i+2) AND i<to CYCLES IMPOSSIBLE;\n")))}c.isMDXComponent=!0}}]);