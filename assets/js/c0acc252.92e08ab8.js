"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[3424],{27976:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var i=t(74848),s=t(28453);const r={title:"Pivot table settings block"},o=void 0,l={id:"Pivot_block",title:"Pivot table settings block",description:"Pivot table settings block of the FORM statement manages the initial settings of the *pivot table* view type in the interactive view of the form.",source:"@site/versioned_docs/version-v5/Pivot_block.md",sourceDirName:".",slug:"/Pivot_block",permalink:"/v5/Pivot_block",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v5/docs/en/Pivot_block.md",tags:[],version:"v5",lastUpdatedAt:1716559955e3,frontMatter:{title:"Pivot table settings block"},sidebar:"learn",previous:{title:"Event block",permalink:"/v5/Event_block"},next:{title:"DESIGN statement",permalink:"/v5/DESIGN_statement"}},c={},a=[{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Example",id:"example",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Pivot table settings block of the ",(0,i.jsxs)(n.a,{href:"/v5/FORM_statement",children:[(0,i.jsx)(n.code,{children:"FORM"})," statement"]})," manages the initial settings of the ",(0,i.jsxs)(n.a,{href:"/v5/Interactive_view#property",children:[(0,i.jsx)(n.em,{children:"pivot table"})," view type"]})," in the interactive view of the form."]}),"\n",(0,i.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"PIVOT \n    pivotSettingsBlock1\n    ... \n    pivotSettingsBlockN\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Where each ",(0,i.jsx)(n.code,{children:"pivotSettingsBlocki"})," is a settings block. These blocks can be listed in any order. Each block can have one of the following syntaxes:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"COLUMNS colFormPropertyList1, ..., colFormPropertyListM \nROWS rowFormPropertyList1, ..., rowFormPropertyListK \nMEASURES measureFormPropertyName1, ..., measureFormPropertyNameL\nobjectGroupId pivotOptions \n"})}),"\n",(0,i.jsxs)(n.p,{children:["Each of ",(0,i.jsx)(n.code,{children:"colFormPropertyListi"})," and ",(0,i.jsx)(n.code,{children:"rowFormPropertyListj"})," can describe either a single property on a form or a group of properties on a form:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"formPropertyName\n(formPropertyName1, ..., formPropertyNameX)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"pivotOptions"})," options can be listed one after another in any order. The following set of options is supported:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"pivotType\ncalcType\nsettingsType\n"})}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["Pivot table settings block allows you to set the initial settings for the form's pivot tables. It can be used to add properties on the form to the corresponding lists of columns (",(0,i.jsx)(n.code,{children:"COLUMNS"})," block), rows (",(0,i.jsx)(n.code,{children:"ROWS"})," block), and measures (",(0,i.jsx)(n.code,{children:"MEASURES"})," block) of the pivot table, as well as to specify initial values for some pivot table options."]}),"\n",(0,i.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"formPropertyName"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/v5/Properties_and_actions_block#name",children:"Name of the property on a form"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"measureFormPropertyName1, ..., measureFormPropertyNameL"})}),"\n",(0,i.jsx)(n.p,{children:"List of property on a form names. Defines the properties on the form that are added to the measures lists of the corresponding pivot tables."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"objectGroupId"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/v5/IDs#groupobjectid",children:"Object group ID"}),", to which the options from the described settings block apply."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"pivotType"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/v5/Literals#strliteral",children:"String literal"})," that defines the initial display mode of the pivot table. Can be equal to one of the following values:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"'Table'"})," (default value)"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"'Table Bar Chart'"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"'Table Heatmap'"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"'Table Row Heatmap'"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"'Table Col Heatmap'"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"'Bar Chart'"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"'Stacked Bar Chart'"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"'Line Chart'"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"'Area Chart'"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"'Scatter Chart'"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"'Multiple Pie Chart'"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"'Horizontal Bar Chart'"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"'Horizontal Stacked Bar Chart'"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"calcType"})}),"\n",(0,i.jsx)(n.p,{children:"Specifying the initial aggregation function. It can be set using one of the keywords:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"SUM"})," - sum of values (default value)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"MAX"})," - maximum of values"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"MIN"})," - minimum of values"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"settingsType"})}),"\n",(0,i.jsx)(n.p,{children:"Specifying whether the pivot table settings are shown to the user. It can be specified by one of the keywords:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"SETTINGS"})," - settings are shown (default value)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"NOSETTINGS"})," - settings are not shown"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"FORM PivotTest \n    OBJECTS s = Store\n    PROPERTIES(s) name, storeSizeCode, storeSizeName\n    PIVOT s 'Bar Chart' NOSETTINGS MAX\n        ROWS name(s) COLUMNS storeSizeName(s) MEASURES storeSizeCode(s)    \n;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(96540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);