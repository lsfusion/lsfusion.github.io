"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["80933"],{82062:function(e,t,r){r.r(t),r.d(t,{default:()=>c,frontMatter:()=>o,metadata:()=>n,assets:()=>l,toc:()=>p,contentTitle:()=>a});var n=JSON.parse('{"id":"Expression","title":"Expression","description":"An expression is a combination of property operators and parameters. When an expression is evaluated sequentially in priority order, all the operators are executed.","source":"@site/docs/Expression.md","sourceDirName":".","slug":"/Expression","permalink":"/Expression","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/master/docs/en/Expression.md","tags":[],"version":"current","lastUpdatedAt":1640850738000,"frontMatter":{"title":"Expression"},"sidebar":"learn","previous":{"title":"= statement","permalink":"/=_statement"},"next":{"title":"Operator priority","permalink":"/Operator_priority"}}'),s=r("85893"),i=r("50065");let o={title:"Expression"},a=void 0,l={},p=[{value:"Examples",id:"examples",level:3}];function d(e){let t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["An ",(0,s.jsx)(t.em,{children:"expression"})," is a combination of ",(0,s.jsx)(t.a,{href:"/Property_operators",children:"property operators"})," and ",(0,s.jsx)(t.a,{href:"/Properties",children:"parameters"}),". When an expression is evaluated sequentially in ",(0,s.jsx)(t.a,{href:"/Operator_priority",children:"priority"})," order, all the operators are executed."]}),"\n",(0,s.jsxs)(t.p,{children:["The result of that execution will be either a ",(0,s.jsx)(t.a,{href:"/Properties",children:"property"})," or a parameter (in the case of single-parameter expression). Their value shall be called the ",(0,s.jsx)(t.em,{children:"value"})," of the expression."]}),"\n",(0,s.jsx)(t.p,{children:"An expression can be described by the following set of recursive rules:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Rule"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"expression"})," := ",(0,s.jsx)(t.code,{children:"parameter"})," | ",(0,s.jsx)(t.code,{children:"constant"})," | ",(0,s.jsx)(t.code,{children:"prefixOperator"})]}),(0,s.jsxs)(t.td,{children:["A single parameter, ",(0,s.jsx)(t.a,{href:"/Constant",children:"constant"}),", or non-arithmetic prefix operator"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"expression"})," := ",(0,s.jsx)(t.code,{children:"prefixArithmOp expression"})]}),(0,s.jsx)(t.td,{children:"A unary arithmetic prefix operator, with the expression passed to it as an operand"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"expression"})," := ",(0,s.jsx)(t.code,{children:"expression postfixOp"})]}),(0,s.jsx)(t.td,{children:"A unary postfix operator, with the expression passed to it as an operand"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"expression"})," := ",(0,s.jsx)(t.code,{children:"expression binaryOp expression"})]}),(0,s.jsx)(t.td,{children:"A binary operator with the expressions passed to it as operands"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"expression"})," := ",(0,s.jsx)(t.code,{children:"( expression )"})]}),(0,s.jsx)(t.td,{children:"Expression in parentheses"})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["An expression cannot include ",(0,s.jsx)(t.a,{href:"/Property_operators#contextindependent",children:"context-independent"})," property operators."]}),"\n",(0,s.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lsf",children:"CLASS Team;\n\nwins(team) = DATA INTEGER(Team);\nties(team) = DATA INTEGER(Team);\n\n// The number of points received by the team for the matches played\npoints(Team team) = wins(team) * 3 + ties(team); \n// In this case, the expression is written to the right of the equal sign. It defines a new property called points.\n// When calculating the expression, two JOIN operators are first executed: wins(team) and ties(team), substituting \n// the team parameter in the wins and ties properties. Then the multiplication operator will be executed, \n// which will build a property that returns a number equal to the product of the return value of wins(team) \n// and the number 3. Then the addition operator will be executed, which will create a property that sums the return\n// values (wins(team) * 3) and ties(team). The resulting property will be the result of the expression.\n\nCLASS Game;\nCLASS BonusGame : Game;\n\n// The number of points per game. If the game is bonus, then 3, otherwise 2.\ngamePoints(Game game) = 2 (+) (1 IF game IS BonusGame); \n// In this example, the order of execution of the operators will be as follows: IS, IF, (+)\n"})})]})}function c(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return a},a:function(){return o}});var n=r(67294);let s={},i=n.createContext(s);function o(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);