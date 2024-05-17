"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[76642],{70194:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=r(74848),t=r(28453);const s={title:"GROUP operator"},i=void 0,a={id:"GROUP_operator",title:"GROUP operator",description:"The GROUP operator creates a property implementing grouping.",source:"@site/versioned_docs/version-v4/GROUP_operator.md",sourceDirName:".",slug:"/GROUP_operator",permalink:"/v4/GROUP_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/GROUP_operator.md",tags:[],version:"v4",lastUpdatedAt:170852507e4,frontMatter:{title:"GROUP operator"},sidebar:"learn",previous:{title:"FORMULA operator",permalink:"/v4/FORMULA_operator"},next:{title:"IF operator",permalink:"/v4/IF_operator"}},c={},d=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"GROUP"})," operator creates a ",(0,o.jsx)(n.a,{href:"/v4/Properties",children:"property"})," implementing ",(0,o.jsx)(n.a,{href:"/v4/Grouping_GROUP",children:"grouping"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"GROUP \ntype expr1, ..., exprN\n[ORDER [DESC] orderExpr1, ..., orderExprK]\n[WHERE whereExpr]\n[BY groupExpr1, ..., groupExprM]\n"})}),"\n",(0,o.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"GROUP"})," operator creates a property implementing grouping. The type of grouping is determined by the type of the ",(0,o.jsx)(n.a,{href:"/v4/Set_operations",children:"aggregate function"}),". This operator differs from others in that it can implicitly declare its parameters in the expressions used (by analogy with the ",(0,o.jsxs)(n.a,{href:"/v4/=_statement",children:[(0,o.jsx)(n.code,{children:"="})," statement"]}),' when the parameters are not defined explicitly). At the same time, it is important to understand that these "implicitly declared" parameters are not parameters of the created property (which are actually determined by the ',(0,o.jsx)(n.code,{children:"BY"})," block and / or the upper parameters used)"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"BY"})," block describes group expressions. Each expression corresponds to a parameter of the property being created. As in other operators, upper parameters can be used in this operator, and the used parameters also implicitly become groups of the created property. Accordingly, when using the operator in the ",(0,o.jsxs)(n.a,{href:"/v4/=_statement",children:[(0,o.jsx)(n.code,{children:"="})," statement"]})," and explicitly defining the parameters on the left, the expressions from the ",(0,o.jsx)(n.code,{children:"BY"})," block are mapped only for unused parameters. Moreover, if the classes or the number of these parameters do not match the number / classes of ",(0,o.jsx)(n.code,{children:"BY"})," expressions then the platform will throw an error."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["If a ",(0,o.jsx)(n.code,{children:"BY"})," block is defined, this operator cannot be used inside ",(0,o.jsx)(n.a,{href:"/v4/Expression",children:"expressions"}),"."]})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"ORDER"})," block defines the order in which the aggregate function will be calculated. Can only be used for ",(0,o.jsx)(n.a,{href:"/v4/Set_operations",children:"non-commutative"})," aggregate functions (",(0,o.jsx)(n.code,{children:"CONCAT"}),", ",(0,o.jsx)(n.code,{children:"LAST"})," ) and must be uniquely defined. If a new parameter is declared in the expressions specifying the order (i.e. parameter is not used in the remaining blocks or in the upper context), the condition of non-NULLness of all these expressions is automatically added."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"WHERE"})," block defines the condition under which object collections will participate in the group operation. Can only be used for the aggregate functions ",(0,o.jsx)(n.code,{children:"AGGR"}),", ",(0,o.jsx)(n.code,{children:"NAGGR"}),", ",(0,o.jsx)(n.code,{children:"LAST"}),"."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["For ",(0,o.jsx)(n.code,{children:"AGGR"})," and ",(0,o.jsx)(n.code,{children:"NAGGR"})," using this block explicitly (and not, say, an ",(0,o.jsxs)(n.a,{href:"/v4/IF_operator",children:[(0,o.jsx)(n.code,{children:"IF"})," operator"]})," in ",(0,o.jsx)(n.code,{children:"GROUP"})," and ",(0,o.jsx)(n.code,{children:"BY"})," blocks) only makes sense from the perspective of being able to change the created property to non-",(0,o.jsx)(n.code,{children:"NULL"})," in some automatic mechanisms of the platform (for example, ",(0,o.jsx)(n.a,{href:"/v4/Simple_constraints",children:"automatic resolution"})," of simple constraints)."]})}),"\n",(0,o.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"type"})}),"\n",(0,o.jsxs)(n.p,{children:["Type of aggregate function. Can be one of the following: ",(0,o.jsx)(n.code,{children:"SUM"}),", ",(0,o.jsx)(n.code,{children:"MAX"}),", ",(0,o.jsx)(n.code,{children:"MIN"}),", ",(0,o.jsx)(n.code,{children:"CONCAT"}),", ",(0,o.jsx)(n.code,{children:"EQUAL"}),", ",(0,o.jsx)(n.code,{children:"AGGR"}),", ",(0,o.jsx)(n.code,{children:"NAGGR"}),", ",(0,o.jsx)(n.code,{children:"LAST"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"expr1, ..., exprN"})}),"\n",(0,o.jsx)(n.p,{children:"A list of expressions whose values are passed to the aggregate function as operands. The number of expressions should correspond to the number of operands of the function used."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"groupExpr1, ..., groupExprN"})}),"\n",(0,o.jsx)(n.p,{children:"List of group expressions."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"DESC"})}),"\n",(0,o.jsx)(n.p,{children:"Keyword. Specifies a reverse iteration order for object collections."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"orderExpr1, ..., orderExprM"})}),"\n",(0,o.jsx)(n.p,{children:"A list of expressions that define the order in which object collections will be iterated over when calculating the aggregate function. To determine the order, first the value of the first expression is used; then, if equal, the value of the second is used, etc."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"whereExpr"})}),"\n",(0,o.jsxs)(n.p,{children:["Filtering expression. Only object groups for which the value of the filtering expression is not ",(0,o.jsx)(n.code,{children:"NULL"})," will participate in the grouping."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lsf",children:"CLASS Game;\nCLASS Team;\nhostGoals = DATA INTEGER (Game);\nhostTeam = DATA Team (Game);\nhostGoalsScored(team) = GROUP SUM hostGoals(Game game) BY hostTeam(game);\n\nname = DATA STRING[100] (Country);\n// property (STRING[100]) -> Country is obtained\ncountryName = GROUP AGGR Country country WHERE country IS Country BY name(country); \n\nCLASS Book;\nCLASS Tag;\nname = DATA STRING[100] (Tag);\nin = DATA BOOLEAN (Book, Tag);\n\ntags(Book b) = GROUP CONCAT name(Tag t) IF in(b, t), ', ' ORDER name(t), t;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var o=r(96540);const t={},s=o.createContext(t);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);