(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[3365],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return c}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(r),c=a,f=d["".concat(s,".").concat(c)]||d[c]||m[c]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88863:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(74034),a=r(79973),o=(r(67294),r(3905)),i=["components"],p={title:"Expression",sidebar_label:"Overview"},s=void 0,l={unversionedId:"Expression",id:"version-v4/Expression",isDocsHomePage:!1,title:"Expression",description:"An expression is a combination of property operators and parameters. When an expression is evaluated sequentially in priority order, all the operators are executed.",source:"@site/versioned_docs/version-v4/Expression.md",sourceDirName:".",slug:"/Expression",permalink:"/Expression",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Expression.md",tags:[],version:"v4",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"7/7/2021",frontMatter:{title:"Expression",sidebar_label:"Overview"},sidebar:"version-v4/learn",previous:{title:"Overview",permalink:"/=_statement"},next:{title:"Operator priority",permalink:"/Operator_priority"}},u=[{value:"Examples",id:"examples",children:[],level:3}],m={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An ",(0,o.kt)("em",{parentName:"p"},"expression")," is a combination of ",(0,o.kt)("a",{parentName:"p",href:"/Property_operators"},"property operators")," and ",(0,o.kt)("a",{parentName:"p",href:"/Properties"},"parameters"),". When an expression is evaluated sequentially in ",(0,o.kt)("a",{parentName:"p",href:"/Operator_priority"},"priority")," order, all the operators are executed."),(0,o.kt)("p",null,"The result of that execution will be either a ",(0,o.kt)("a",{parentName:"p",href:"/Properties"},"property")," or a parameter (in the case of single-parameter expression). Their value shall be called the ",(0,o.kt)("em",{parentName:"p"},"value")," of the expression."),(0,o.kt)("p",null,"An expression can be described by the following set of recursive rules:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Rule"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"expression")," := ",(0,o.kt)("inlineCode",{parentName:"td"},"parameter")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},"constant")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},"prefixOperator")),(0,o.kt)("td",{parentName:"tr",align:null},"A single parameter, ",(0,o.kt)("a",{parentName:"td",href:"/Constant"},"constant"),", or non-arithmetic prefix operator")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"expression")," := ",(0,o.kt)("inlineCode",{parentName:"td"},"prefixArithmOp expression")),(0,o.kt)("td",{parentName:"tr",align:null},"A unary arithmetic prefix operator, with the expression passed to it as an operand")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"expression")," := ",(0,o.kt)("inlineCode",{parentName:"td"},"expression postfixOp")),(0,o.kt)("td",{parentName:"tr",align:null},"A unary postfix operator, with the expression passed to it as an operand")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"expression")," := ",(0,o.kt)("inlineCode",{parentName:"td"},"expression binaryOp expression")),(0,o.kt)("td",{parentName:"tr",align:null},"A binary operator with the expressions passed to it as operands")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"expression")," := ",(0,o.kt)("inlineCode",{parentName:"td"},"( expression )")),(0,o.kt)("td",{parentName:"tr",align:null},"Expression in parentheses")))),(0,o.kt)("p",null,"An expression cannot include ",(0,o.kt)("a",{parentName:"p",href:"/Property_operators#contextindependent"},"context-independent")," property operators."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Team;\n\nwins(team) = DATA INTEGER(Team);\nties(team) = DATA INTEGER(Team);\n\n// The number of points received by the team for the matches played\npoints(Team team) = wins(team) * 3 + ties(team); \n// In this case, the expression is written to the right of the equal sign. It defines a new property called points.\n// When calculating the expression, two JOIN operators are first executed: wins(team) and ties(team), substituting \n// the team parameter in the wins and ties properties. Then the multiplication operator will be executed, \n// which will build a property that returns a number equal to the product of the return value of wins(team) \n// and the number 3. Then the addition operator will be executed, which will create a property that sums the return\n// values (wins(team) * 3) and ties(team). The resulting property will be the result of the expression.\n\nCLASS Game;\nCLASS BonusGame : Game;\n\n// The number of points per game. If the game is bonus, then 3, otherwise 2.\ngamePoints(Game game) = 2 (+) (1 IF game IS BonusGame); \n// In this example, the order of execution of the operators will be as follows: IS, IF, (+)\n")))}d.isMDXComponent=!0}}]);