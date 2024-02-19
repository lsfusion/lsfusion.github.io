"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[3365],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(n),c=a,f=d["".concat(s,".").concat(c)]||d[c]||m[c]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88863:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return l}});var r=n(83117),a=(n(67294),n(3905));const o={title:"Expression"},i=void 0,p={unversionedId:"Expression",id:"version-v4/Expression",title:"Expression",description:"An expression is a combination of property operators and parameters. When an expression is evaluated sequentially in priority order, all the operators are executed.",source:"@site/versioned_docs/version-v4/Expression.md",sourceDirName:".",slug:"/Expression",permalink:"/v4/Expression",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Expression.md",tags:[],version:"v4",lastUpdatedAt:1640850738,formattedLastUpdatedAt:"Dec 30, 2021",frontMatter:{title:"Expression"},sidebar:"learn",previous:{title:"= statement",permalink:"/v4/=_statement"},next:{title:"Operator priority",permalink:"/v4/Operator_priority"}},s={},l=[{value:"Examples",id:"examples",level:3}],u={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"An ",(0,a.kt)("em",{parentName:"p"},"expression")," is a combination of ",(0,a.kt)("a",{parentName:"p",href:"/v4/Property_operators"},"property operators")," and ",(0,a.kt)("a",{parentName:"p",href:"/v4/Properties"},"parameters"),". When an expression is evaluated sequentially in ",(0,a.kt)("a",{parentName:"p",href:"/v4/Operator_priority"},"priority")," order, all the operators are executed."),(0,a.kt)("p",null,"The result of that execution will be either a ",(0,a.kt)("a",{parentName:"p",href:"/v4/Properties"},"property")," or a parameter (in the case of single-parameter expression). Their value shall be called the ",(0,a.kt)("em",{parentName:"p"},"value")," of the expression."),(0,a.kt)("p",null,"An expression can be described by the following set of recursive rules:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Rule"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"expression")," := ",(0,a.kt)("inlineCode",{parentName:"td"},"parameter")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"constant")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"prefixOperator")),(0,a.kt)("td",{parentName:"tr",align:null},"A single parameter, ",(0,a.kt)("a",{parentName:"td",href:"/v4/Constant"},"constant"),", or non-arithmetic prefix operator")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"expression")," := ",(0,a.kt)("inlineCode",{parentName:"td"},"prefixArithmOp expression")),(0,a.kt)("td",{parentName:"tr",align:null},"A unary arithmetic prefix operator, with the expression passed to it as an operand")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"expression")," := ",(0,a.kt)("inlineCode",{parentName:"td"},"expression postfixOp")),(0,a.kt)("td",{parentName:"tr",align:null},"A unary postfix operator, with the expression passed to it as an operand")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"expression")," := ",(0,a.kt)("inlineCode",{parentName:"td"},"expression binaryOp expression")),(0,a.kt)("td",{parentName:"tr",align:null},"A binary operator with the expressions passed to it as operands")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"expression")," := ",(0,a.kt)("inlineCode",{parentName:"td"},"( expression )")),(0,a.kt)("td",{parentName:"tr",align:null},"Expression in parentheses")))),(0,a.kt)("p",null,"An expression cannot include ",(0,a.kt)("a",{parentName:"p",href:"/v4/Property_operators#contextindependent"},"context-independent")," property operators."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Team;\n\nwins(team) = DATA INTEGER(Team);\nties(team) = DATA INTEGER(Team);\n\n// The number of points received by the team for the matches played\npoints(Team team) = wins(team) * 3 + ties(team); \n// In this case, the expression is written to the right of the equal sign. It defines a new property called points.\n// When calculating the expression, two JOIN operators are first executed: wins(team) and ties(team), substituting \n// the team parameter in the wins and ties properties. Then the multiplication operator will be executed, \n// which will build a property that returns a number equal to the product of the return value of wins(team) \n// and the number 3. Then the addition operator will be executed, which will create a property that sums the return\n// values (wins(team) * 3) and ties(team). The resulting property will be the result of the expression.\n\nCLASS Game;\nCLASS BonusGame : Game;\n\n// The number of points per game. If the game is bonus, then 3, otherwise 2.\ngamePoints(Game game) = 2 (+) (1 IF game IS BonusGame); \n// In this example, the order of execution of the operators will be as follows: IS, IF, (+)\n")))}m.isMDXComponent=!0}}]);