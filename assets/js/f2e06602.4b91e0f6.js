"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[88099],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,f=d["".concat(l,".").concat(u)]||d[u]||c[u]||o;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28520:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var r=n(83117),a=(n(67294),n(3905));const o={title:"GROUP operator"},i=void 0,p={unversionedId:"GROUP_operator",id:"version-v4/GROUP_operator",title:"GROUP operator",description:"The GROUP operator creates a property implementing grouping.",source:"@site/versioned_docs/version-v4/GROUP_operator.md",sourceDirName:".",slug:"/GROUP_operator",permalink:"/v4/GROUP_operator",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/GROUP_operator.md",tags:[],version:"v4",lastUpdatedAt:1708525070,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"GROUP operator"},sidebar:"learn",previous:{title:"FORMULA operator",permalink:"/v4/FORMULA_operator"},next:{title:"IF operator",permalink:"/v4/IF_operator"}},l={},s=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}],m={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"GROUP")," operator creates a ",(0,a.kt)("a",{parentName:"p",href:"/v4/Properties"},"property")," implementing ",(0,a.kt)("a",{parentName:"p",href:"/v4/Grouping_GROUP"},"grouping"),"."),(0,a.kt)("h3",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GROUP \ntype expr1, ..., exprN\n[ORDER [DESC] orderExpr1, ..., orderExprK]\n[WHERE whereExpr]\n[BY groupExpr1, ..., groupExprM]\n")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"GROUP")," operator creates a property implementing grouping. The type of grouping is determined by the type of the ",(0,a.kt)("a",{parentName:"p",href:"/v4/Set_operations"},"aggregate function"),". This operator differs from others in that it can implicitly declare its parameters in the expressions used (by analogy with the ",(0,a.kt)("a",{parentName:"p",href:"/v4/=_statement"},(0,a.kt)("inlineCode",{parentName:"a"},"=")," statement"),' when the parameters are not defined explicitly). At the same time, it is important to understand that these "implicitly declared" parameters are not parameters of the created property (which are actually determined by the ',(0,a.kt)("inlineCode",{parentName:"p"},"BY")," block and / or the upper parameters used)"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"BY")," block describes group expressions. Each expression corresponds to a parameter of the property being created. As in other operators, upper parameters can be used in this operator, and the used parameters also implicitly become groups of the created property. Accordingly, when using the operator in the ",(0,a.kt)("a",{parentName:"p",href:"/v4/=_statement"},(0,a.kt)("inlineCode",{parentName:"a"},"=")," statement")," and explicitly defining the parameters on the left, the expressions from the ",(0,a.kt)("inlineCode",{parentName:"p"},"BY")," block are mapped only for unused parameters. Moreover, if the classes or the number of these parameters do not match the number / classes of ",(0,a.kt)("inlineCode",{parentName:"p"},"BY")," expressions then the platform will throw an error. "),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If a ",(0,a.kt)("inlineCode",{parentName:"p"},"BY")," block is defined, this operator cannot be used inside ",(0,a.kt)("a",{parentName:"p",href:"/v4/Expression"},"expressions"),".")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ORDER")," block defines the order in which the aggregate function will be calculated. Can only be used for ",(0,a.kt)("a",{parentName:"p",href:"/v4/Set_operations"},"non-commutative")," aggregate functions (",(0,a.kt)("inlineCode",{parentName:"p"},"CONCAT"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"LAST")," ) and must be uniquely defined. If a new parameter is declared in the expressions specifying the order (i.e. parameter is not used in the remaining blocks or in the upper context), the condition of non-NULLness of all these expressions is automatically added."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"WHERE")," block defines the condition under which object collections will participate in the group operation. Can only be used for the aggregate functions ",(0,a.kt)("inlineCode",{parentName:"p"},"AGGR"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"NAGGR"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"LAST"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For ",(0,a.kt)("inlineCode",{parentName:"p"},"AGGR")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"NAGGR")," using this block explicitly (and not, say, an ",(0,a.kt)("a",{parentName:"p",href:"/v4/IF_operator"},(0,a.kt)("inlineCode",{parentName:"a"},"IF")," operator")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"GROUP")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"BY")," blocks) only makes sense from the perspective of being able to change the created property to non-",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," in some automatic mechanisms of the platform (for example, ",(0,a.kt)("a",{parentName:"p",href:"/v4/Simple_constraints"},"automatic resolution")," of simple constraints).")),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"type")),(0,a.kt)("p",{parentName:"li"},"  Type of aggregate function. Can be one of the following: ",(0,a.kt)("inlineCode",{parentName:"p"},"SUM"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"MAX"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"MIN"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"CONCAT"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"EQUAL"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"AGGR"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"NAGGR"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"LAST"),". ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"expr1, ..., exprN")),(0,a.kt)("p",{parentName:"li"},"  A list of expressions whose values are passed to the aggregate function as operands. The number of expressions should correspond to the number of operands of the function used. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"groupExpr1, ..., groupExprN"),"  "),(0,a.kt)("p",{parentName:"li"},"  List of group expressions. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"DESC")),(0,a.kt)("p",{parentName:"li"},"  Keyword. Specifies a reverse iteration order for object collections. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"orderExpr1, ..., orderExprM")),(0,a.kt)("p",{parentName:"li"},"  A list of expressions that define the order in which object collections will be iterated over when calculating the aggregate function. To determine the order, first the value of the first expression is used; then, if equal, the value of the second is used, etc. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"whereExpr")),(0,a.kt)("p",{parentName:"li"},"  Filtering expression. Only object groups for which the value of the filtering expression is not ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," will participate in the grouping."))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Game;\nCLASS Team;\nhostGoals = DATA INTEGER (Game);\nhostTeam = DATA Team (Game);\nhostGoalsScored(team) = GROUP SUM hostGoals(Game game) BY hostTeam(game);\n\nname = DATA STRING[100] (Country);\n// property (STRING[100]) -> Country is obtained\ncountryName = GROUP AGGR Country country WHERE country IS Country BY name(country); \n\nCLASS Book;\nCLASS Tag;\nname = DATA STRING[100] (Tag);\nin = DATA BOOLEAN (Book, Tag);\n\ntags(Book b) = GROUP CONCAT name(Tag t) IF in(b, t), ', ' ORDER name(t), t;\n")))}c.isMDXComponent=!0}}]);