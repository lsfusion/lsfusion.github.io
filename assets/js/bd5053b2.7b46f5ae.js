"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["82225"],{78309:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>d,contentTitle:()=>r});var s=JSON.parse('{"id":"TABLE_statement","title":"TABLE statement","description":"The TABLE statement creates an new table.","source":"@site/versioned_docs/version-v5/TABLE_statement.md","sourceDirName":".","slug":"/TABLE_statement","permalink":"/v5/TABLE_statement","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v5/docs/en/TABLE_statement.md","tags":[],"version":"v5","lastUpdatedAt":1708525070000,"frontMatter":{"title":"TABLE statement"},"sidebar":"learn","previous":{"title":"@ statement","permalink":"/v5/commat_statement"},"next":{"title":"INDEX statement","permalink":"/v5/INDEX_statement"}}'),a=t("85893"),l=t("50065");let i={title:"TABLE statement"},r=void 0,c={},d=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3}];function o(e){let n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"TABLE"})," statement creates an new ",(0,a.jsx)(n.a,{href:"/v5/Tables",children:"table"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"TABLE name(className1, ..., classNameN) [FULL | NODEFAULT];\n"})}),"\n",(0,a.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"TABLE"})," statement declares a new table and adds it to the current ",(0,a.jsx)(n.a,{href:"/v5/Modules",children:"module"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"name"})}),"\n",(0,a.jsxs)(n.p,{children:["Table name. ",(0,a.jsx)(n.a,{href:"/v5/IDs#id",children:"Simple ID"}),". The name must be unique within the current ",(0,a.jsx)(n.a,{href:"/v5/Naming#namespace",children:"namespace"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"className1, ..., classNameN"})}),"\n",(0,a.jsxs)(n.p,{children:["List of class names. Each name is a ",(0,a.jsx)(n.a,{href:"/v5/IDs#classid",children:"class ID"}),". Specifies classes for the key fields of the table being created. Cannot be empty,"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"FULL"})}),"\n",(0,a.jsxs)(n.p,{children:["The keyword that, when specified, marks the table as ",(0,a.jsx)(n.a,{href:"/v5/Tables#full",children:"full"})," (that is, containing all objects belonging to the classes of the table's key fields)."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"NODEFAULT"})}),"\n",(0,a.jsxs)(n.p,{children:["The keyword that, when specified, excludes the table from the process of automatic ",(0,a.jsx)(n.a,{href:"/v5/Tables#property",children:"property table determining"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lsf",children:"TABLE book (Book);\n\nin = DATA BOOLEAN (Sku, Stock);\nTABLE skuStock (Sku, Stock); // it will store the in property\n\nprice = DATA NUMERIC[10,2] (Sku, DATE);\nTABLE skuDate (Sku, DATE); // it will store the Sku property\n\nTABLE sku (Sku) FULL;\n"})})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var s=t(67294);let a={},l=s.createContext(a);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);