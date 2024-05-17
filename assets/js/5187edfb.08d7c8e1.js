"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[16821],{24583:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var i=t(74848),s=t(28453);const o={title:"Form design"},r=void 0,l={id:"Form_design",title:"Form design",description:"The form design defines how a form is displayed in the interactive view.",source:"@site/docs/Form_design.md",sourceDirName:".",slug:"/Form_design",permalink:"/next/Form_design",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Form_design.md",tags:[],version:"current",lastUpdatedAt:170185266e4,frontMatter:{title:"Form design"},sidebar:"learn",previous:{title:"Interactive view",permalink:"/next/Interactive_view"},next:{title:"Form events",permalink:"/next/Form_events"}},c={},a=[{value:"Containers",id:"containers",level:3},{value:"Base components",id:"base-components",level:3},{value:"Dimensions and components layout",id:"components",level:3},{value:"Property value cell sizes",id:"valueWidth",level:4},{value:"Default dimensions and layout",id:"default-dimensions-and-layout",level:3},{value:"Property value cell dimensions",id:"property-value-cell-dimensions",level:4},{value:"Window size",id:"window-size",level:3},{value:"Default design",id:"defaultDesign",level:3},{value:"Default design example",id:"default-design-example",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"form design"})," defines how a ",(0,i.jsx)(n.a,{href:"/next/Forms",children:"form"})," is displayed in the ",(0,i.jsx)(n.a,{href:"/next/Interactive_view",children:"interactive"})," view."]}),"\n",(0,i.jsxs)(n.p,{children:["As with any GUI, form design is a hierarchy whose nodes are ",(0,i.jsx)(n.em,{children:"components"}),". Components, in turn, can be:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"containers"}),": components that contain other components."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"base components"}),": graphical views of the elements described in the ",(0,i.jsx)(n.a,{href:"/next/Form_structure",children:"form structure"})," and the form ",(0,i.jsx)(n.a,{href:"/next/Interactive_view",children:"interactive view"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Each component must have its own unique name within ",(0,i.jsx)(n.em,{children:"the form"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"containers",children:"Containers"}),"\n",(0,i.jsx)(n.p,{children:"All children of any container make an ordered list. It is necessary to determine how the child components of each container on the form should be placed. To do this, horizontal, tabbed or lines options can be specified for a container."}),"\n",(0,i.jsx)(n.p,{children:"If at some point a container has no child components , or they are invisible, it is automatically hidden. In turn, if a component is not a child of any container, then it will not be shown on the form."}),"\n",(0,i.jsx)(n.h3,{id:"base-components",children:"Base components"}),"\n",(0,i.jsx)(n.p,{children:"When defining the form design, the developer can use the following base components, which are created automatically based on the form structure:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Object groups / trees"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Table/Tree"})," (",(0,i.jsx)(n.code,{children:"GRID"}),"): a component consisting of rows and columns in which the rows correspond to object collections of the corresponding ",(0,i.jsx)(n.a,{href:"/next/Form_structure",children:"group of objects"})," and columns correspond to ",(0,i.jsx)(n.a,{href:"/next/Properties",children:"properties"})," and ",(0,i.jsx)(n.a,{href:"/next/Actions",children:"actions"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"System toolbar"})," (",(0,i.jsx)(n.code,{children:"TOOLBARSYSTEM"}),"): a panel consisting of buttons with which the user can execute various system actions on the rows in the table. Automatically hidden if the table becomes invisible."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"User filter"})," (",(0,i.jsx)(n.code,{children:"FILTERS"}),"): a component with which the user can create and apply their own filters to a table."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Filter groups"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Filter group"})," (",(0,i.jsx)(n.code,{children:"FILTERGROUP"}),"): a component with which the user can activate the filters they need in a form's ",(0,i.jsx)(n.a,{href:"/next/Interactive_view#filtergroup",children:"filter groups"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Properties / Actions"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Property panel"})," (",(0,i.jsx)(n.code,{children:"PROPERTY"}),"): a component that displays the title and current value of a property. The caption can be either to the left of the value cell or at the top. Not shown if the property is displayed in the table."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"components",children:"Dimensions and components layout"}),"\n",(0,i.jsx)(n.p,{children:"The developer can control how the platform distributes the available container sizes between its internal components, as well as how these components will be located relative to each other."}),"\n",(0,i.jsxs)(n.p,{children:["First of all, for each component you can specify the ",(0,i.jsx)(n.em,{children:"base"})," size that this component will receive in any case, regardless of the algorithm for placing its container."]}),"\n",(0,i.jsx)(n.p,{children:"To determine the final size of the components and their location inside the container, the following algorithm is used:"}),"\n",(0,i.jsxs)(n.p,{children:["For each container, one of the directions is considered to be ",(0,i.jsx)(n.em,{children:"dynamic"}),", and the other ",(0,i.jsx)(n.em,{children:"static"}),". The dynamic direction is determined from the name of the container, for example, for a vertical container, the dynamic direction will be vertical; for a horizontal splitter it will be horizontal. For a columned or scrollable container, as well as a tab panel, the dynamic direction is considered to be the vertical. Further, depending on the direction:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Dynamic: all components are placed one after another, in the order they are added to the container. Also, ",(0,i.jsx)(n.em,{children:"extension coefficient"})," (",(0,i.jsx)(n.code,{children:"flex"}),") can be specified for each component. In this case, the space remaining in the container (that is, minus the basic dimensions of all internal components) is divided between all components in proportion to their extension coefficients."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Static: ",(0,i.jsx)(n.em,{children:"alignment"})," can be specified for each component (",(0,i.jsx)(n.code,{children:"alignment"}),"). Its values can be ",(0,i.jsx)(n.em,{children:"At the start"})," (",(0,i.jsx)(n.code,{children:"START"}),"), ",(0,i.jsx)(n.em,{children:"Center"})," (",(0,i.jsx)(n.code,{children:"CENTER"}),"), ",(0,i.jsx)(n.em,{children:"At the end"})," (",(0,i.jsx)(n.code,{children:"END"}),"), or ",(0,i.jsx)(n.em,{children:"Stretch"})," (",(0,i.jsx)(n.code,{children:"STRETCH"}),"). In the first three cases, the component gets its base size as the final size, and is positioned in accordance with the specified type of alignment (that is, at the beginning, center, or end). If Stretch is used as the type of alignment, the final size of the component will be the size of the top container (but not less than the base size), and it will be located exactly in the center."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"For example, in the case of a vertical upper container, if the component is set to align at the start then it will be located on the maximum left of the container; if it is set to Stretch, the component will occupy all the space from the left to the right border."})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["This component layout algorithm is a special case of ",(0,i.jsx)(n.a,{href:"https://www.w3.org/TR/css-flexbox-1/",children:"CSS Flexible Box Layout"})," (and is implemented using it in the web client). For example, the CSS ",(0,i.jsx)(n.code,{children:"flex-grow"})," property corresponds to the extension coefficient, and ",(0,i.jsx)(n.code,{children:"flex-basis"})," corresponds to the base size."]})}),"\n",(0,i.jsxs)(n.p,{children:["The column container breaks its static (horizontal) direction into ",(0,i.jsx)(n.code,{children:"N"})," identical parts (where ",(0,i.jsx)(n.code,{children:"N"})," is the number of columns): each part then has its own components, as if this part were a separate vertical container."]}),"\n",(0,i.jsxs)(n.p,{children:["For base components, you can specify the ",(0,i.jsx)(n.em,{children:"automatic size"})," option (",(0,i.jsx)(n.code,{children:"autoSize"}),"): in this case, the base size will change automatically in to enclose exactly the entire contents of this base component (for example, for a table: all its records plus a title)."]}),"\n",(0,i.jsx)(n.p,{children:"The properties layout in a table (or rather, the columns that display their values) is done the same way as if the table were a horizontal container, and the columns of the table were internal components of this container."}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Since the current implementation uses the ",(0,i.jsx)(n.a,{href:"https://www.w3schools.com/cssref/pr_tab_table-layout.asp",children:"CSS Table Layout Fixed"})," mechanism to place columns inside the table in the Web client, and its capabilities are significantly limited, the extension coefficient for properties displayed in the table can be equal either to ",(0,i.jsx)(n.code,{children:"0"})," or to the base size."]})}),"\n",(0,i.jsxs)(n.p,{children:["The caption and the value cell are placed inside the property panel in the same way as if the panel were a container (horizontal if the caption is on the left, vertical if at the top), in which the cell has an extension coefficient of ",(0,i.jsx)(n.code,{children:"1"}),", the caption is ",(0,i.jsx)(n.code,{children:"0"})," and the alignment of both is set to  ",(0,i.jsx)(n.code,{children:"STRETCH"})]}),"\n",(0,i.jsx)(n.h4,{id:"valueWidth",children:"Property value cell sizes"}),"\n",(0,i.jsxs)(n.p,{children:["When displaying properties, you can explicitly specify dimensions of the entire container (together with the caption, if the property is in a panel) and also the dimensions of the ",(0,i.jsx)(n.em,{children:"value cell"})," itself. To do this, add the prefix ",(0,i.jsx)(n.code,{children:"value"})," to the size name, e.g. ",(0,i.jsx)(n.code,{children:"valueWidth"}),"). Also, it is worth noting that these dimensions (those of the value cells, and not the entire container) are also used to determine the column widths if the property is displayed in a table."]}),"\n",(0,i.jsxs)(n.p,{children:["For property value cells, it is also possible to specify the base width not in pixels, but using a ",(0,i.jsx)(n.em,{children:"sample value"})," (",(0,i.jsx)(n.code,{children:"widthValue"}),") In this case, the platform takes into account the user's font/mask/locale to calculate and set the width in pixels so that the user can see exactly the specified sample value (no more, no less). It is assumed that the sample value must be either a string or of a class equal to the class of the property value."]}),"\n",(0,i.jsxs)(n.p,{children:["In addition, cell widths can be specified in ",(0,i.jsx)(n.em,{children:"characters"})," (",(0,i.jsx)(n.code,{children:"charWidth"}),"), which is equivalent to giving a string sample value consisting of the given number of zeros."]}),"\n",(0,i.jsxs)(n.p,{children:["In the last two cases (that is, when specifying the width as a sample value or in characters), if the property value class implies the presence of buttons on the right during ",(0,i.jsx)(n.a,{href:"/next/Primitive_input_INPUT",children:"input"})," (for example, ",(0,i.jsx)(n.code,{children:"DATE"})," class), then the width of this button (21 pixels) is added to the width of the property value cell."]}),"\n",(0,i.jsx)(n.h3,{id:"default-dimensions-and-layout",children:"Default dimensions and layout"}),"\n",(0,i.jsx)(n.p,{children:"By default, the extension coefficient and alignment for components are determined as follows:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Component"}),(0,i.jsx)(n.th,{children:"Extension coefficient"}),(0,i.jsx)(n.th,{children:"Alignment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Table / Tree"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"1"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"STRETCH"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Component inside scrollable containers, splitters and tabbed panel"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"1"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"STRETCH"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Property panel inside a horizontal container or property in a table. The property values are objects of ",(0,i.jsx)(n.a,{href:"/next/Built-in_classes",children:"built-in classes"})," of dynamic length (i.e. strings and numbers)"]}),(0,i.jsx)(n.td,{children:"With of the value cell"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"START"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Property panel inside a vertical container. The property values are objects of ",(0,i.jsx)(n.a,{href:"/next/Built-in_classes",children:"built-in classes"})," of dynamic length (i.e. strings and numbers)"]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"0"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"STRETCH"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"All others"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"0"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"START"})})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"The base container size (except the tab panel) is equal by default to the sum of the base sizes of all its child components for the dynamic direction, and the maximum for the static direction. The base height of the tab panel is the sum of the base height of its current tab and the height of the tab title bar, the base width is the same as the base width of the current tab."}),"\n",(0,i.jsxs)(n.p,{children:["The base width of tables/trees is ",(0,i.jsx)(n.code,{children:"130"})," pixels by default, and the height is ",(0,i.jsx)(n.code,{children:"70"})," pixels. The base size of the property panel is determined in the same way as if the panel was a container (horizontal if the caption is on the left, vertical if it is at the top) consisting of the caption and the value cell. The base size of the remaining base components (as well as the caption in the property panel) is determined in such a way as to enclose all the text contained in them."]}),"\n",(0,i.jsx)(n.h4,{id:"property-value-cell-dimensions",children:"Property value cell dimensions"}),"\n",(0,i.jsx)(n.p,{children:"The following formulas are used by default to determine the width of a property value cell:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property value class"}),(0,i.jsx)(n.th,{children:"Width unit"}),(0,i.jsx)(n.th,{children:"Width/Value"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Strings"}),(0,i.jsx)(n.td,{children:"In characters"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"IF length <= 12 result = length ELSE IF length = INFINITE result = 15 ELSE result = 12 + (length - 12) ^ 0.7"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Numbers"}),(0,i.jsx)(n.td,{children:"In characters"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"IF length <= 6 result = length ELSE IF this = DOUBLE result = 10 ELSE result = MIN(6 + (length - 6) ^ 0.7, 10)"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"COLOR"})}),(0,i.jsx)(n.td,{children:"In pixels"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"40"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Files and file links"}),(0,i.jsx)(n.td,{children:"In pixels"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"18"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"BOOLEAN"})}),(0,i.jsx)(n.td,{children:"In pixels"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"25"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"DATE"})}),(0,i.jsx)(n.td,{children:"Sample value"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"1991_11_21"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"DATETIME"})}),(0,i.jsx)(n.td,{children:"Sample value"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"1991_11_21_10:55:55"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"TIME"})}),(0,i.jsx)(n.td,{children:"Sample value"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"10:55:55"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"User classes"}),(0,i.jsx)(n.td,{children:"In characters"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"7"})})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["The default height of a property value cell is equal to the height of the font used, except properties whose values belong to the ",(0,i.jsx)(n.code,{children:"TEXT"})," class (in this case, the height is four times the font height)."]}),"\n",(0,i.jsx)(n.h3,{id:"window-size",children:"Window size"}),"\n",(0,i.jsxs)(n.p,{children:["If the form opens in ",(0,i.jsx)(n.a,{href:"/next/In_an_interactive_view_SHOW_DIALOG#location",children:"window"})," mode it does not have an upper container, so you need to determine this window's initial size. This size is determined similarly to the default base size, the only difference is that for tables/trees the default size is determined not as a constant (the default is ",(0,i.jsx)(n.code,{children:"130"}),", ",(0,i.jsx)(n.code,{children:"70"}),") but in such a way that it contains their whole contents (similar to the automatic sizing mechanism), but no less than ",(0,i.jsx)(n.code,{children:"130"})," in width and ",(0,i.jsx)(n.code,{children:"140"})," in height."]}),"\n",(0,i.jsx)(n.h3,{id:"defaultDesign",children:"Default design"}),"\n",(0,i.jsx)(n.p,{children:"An automatic design can be created for each form, based on the form's structure. The developer can modify the automatic design or create a design from scratch."}),"\n",(0,i.jsx)(n.p,{children:"The automatic design is generated as follows:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"BOX"}),": contains all the components of this form. Vertical container. Extension coefficient: ",(0,i.jsx)(n.code,{children:"1"}),", alignment: ",(0,i.jsx)(n.code,{children:"STRETCH"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"PANEL"}),": contains components of the properties that are displayed in ",(0,i.jsx)(n.code,{children:"PANEL"})," ",(0,i.jsx)(n.a,{href:"/next/Interactive_view#property",children:"view"}),"  and ",(0,i.jsx)(n.a,{href:"/next/Form_structure#drawgroup",children:"display group"})," of which is undefined (the property has no parameters). The internal structure and layout are similar to the internal structure and layout of the object group container.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"GROUP..."})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"OBJECTS"}),": contains all the components that are created for object groups/trees on this form. Vertical container. Extension coefficient: ",(0,i.jsx)(n.code,{children:"1"}),", alignment: ",(0,i.jsx)(n.code,{children:"STRETCH"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"BOX(<object group/tree>)"}),":  contains all the components of this group of objects. Vertical container. Extension coefficient: ",(0,i.jsx)(n.code,{children:"1"}),", alignment: ",(0,i.jsx)(n.code,{children:"STRETCH"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"GRID (<group of objects / tree>)"}),": the base component of a Table."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"TOOLBARBOX(<group of objects / tree>)"}),": contains all the components of a toolbar (responsible for layout inside the toolbar). Horizontal container. Alignment: ",(0,i.jsx)(n.code,{children:"STRETCH"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"TOOLBARLEFT(<group of objects / tree>)"}),": the left side of a toolbar. Horizontal container. Alignment: ",(0,i.jsx)(n.code,{children:"CENTER"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"TOOLBARSYSTEM(<group of objects / tree>)"}),": the base component of the System toolbar. Alignment: ",(0,i.jsx)(n.code,{children:"CENTER"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"TOOLBARRIGHT(<group of objects / tree>)"}),": the right side of a toolbar. Horizontal container. Extension coefficient: ",(0,i.jsx)(n.code,{children:"1"}),", alignment: ",(0,i.jsx)(n.code,{children:"CENTER"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"FILTERGROUPS(<group of filters>)"}),": contains all the components that are created for filter groups corresponding to a object group. Horizontal container. Alignment: ",(0,i.jsx)(n.code,{children:"CENTER"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"FILTERGROUP"}),": base component of a Filter group. Alignment: ",(0,i.jsx)(n.code,{children:"CENTER"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"TOOLBAR(<group of objects / tree>)"}),":  contains the components of the properties displayed in the ",(0,i.jsx)(n.code,{children:"TOOLBAR"})," ",(0,i.jsx)(n.a,{href:"/next/Interactive_view#property",children:"view"})," and ",(0,i.jsx)(n.a,{href:"/next/Form_structure#drawgroup",children:"display group"})," equal to the specified one. Horizontal container. Alignment: ",(0,i.jsx)(n.code,{children:"CENTER"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"PROPERTY(<property>)"}),": base component of the Property Panel."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"FILTERS(<group of objects / tree>)"}),":  base component of the User filter. Alignment: ",(0,i.jsx)(n.code,{children:"STRETCH"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"PANEL(<group of objects / tree>)"}),": contains the components of the properties displayed in the ",(0,i.jsx)(n.code,{children:"PANEL"})," ",(0,i.jsx)(n.a,{href:"/next/Interactive_view#property",children:"view"}),". Vertical container. Alignment: ",(0,i.jsx)(n.code,{children:"STRETCH"}),". If several properties belong to ",(0,i.jsx)(n.a,{href:"/next/Groups_of_properties_and_actions",children:"groups"})," for which it is necessary to create separate containers, then a corresponding hierarchy of containers is created for them and the components of these properties are placed in it:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"GROUP(<property group>, <group of objects / tree>)"}),": contains components of properties that belong to the specified object group and property group (or do not belong to any property group: in this case the property group is not specified, for example ",(0,i.jsx)(n.code,{children:"GROUP(,a))"}),". Column container.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"PROPERTY(<property>)"}),": base component of the Property Panel."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"TOOLBARBOX"}),": contains property components that are displayed in ",(0,i.jsx)(n.code,{children:"TOOLBAR"})," ",(0,i.jsx)(n.a,{href:"/next/Interactive_view#property",children:"view"})," and have no ",(0,i.jsx)(n.a,{href:"/next/Form_structure#drawgroup",children:"display group"})," (for example, the property has no parameters). The internal structure and layout are similar to the corresponding internal structure and layout of an object group (except for ",(0,i.jsx)(n.code,{children:"FILTERGROUPS"}),", which does not make sense when there is no object group, and therefore is not present in this container).","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"TOOLBARLEFT, TOOLBARRIGHT, TOOLBAR..."})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"default-design-example",children:"Default design example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"\nFORM myForm 'myForm'\n    OBJECTS myObject = myClass\n    PROPERTIES(myObject) myProperty1, myProperty2 PANEL\n    FILTERGROUP myFilter\n        FILTER 'myFilter' myProperty1(myObject)\n;\n"})}),"\n",(0,i.jsx)(n.p,{children:"The hierarchy of containers and components in the default design will look like this:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(48846).A+"",width:"1312",height:"570"})}),"\n",(0,i.jsx)(n.h3,{id:"language",children:"Language"}),"\n",(0,i.jsxs)(n.p,{children:["To set up the design of the form, use the ",(0,i.jsxs)(n.a,{href:"/next/DESIGN_statement",children:[(0,i.jsx)(n.code,{children:"DESIGN"})," statement"]}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"DESIGN order { // customizing the design of the form, starting with the default design\n    // marking that all changes to the hierarchy will occur for the topmost container\n    // creating a new container as the very first one before the system buttons, in which we \n    // put two containers - header and specifications\n    NEW orderPane FIRST { \n        fill = 1; // specifying that the container should occupy all the space available to it\n        MOVE BOX(o) { // moving everything related to the object o to the new container\n            PANEL(o) { // configuring how properties are displayed in the object o panel\n                horizontal = FALSE; // making all descendants go from top to bottom\n                NEW headerRow1 { // creating a container - the first row\n                    horizontal = TRUE;\n                    MOVE PROPERTY(date(o)) { // moving the order date property\n                        // \"override\" the property caption in the form design (instead of the standard one)\n                        caption = 'Date of the edited order'; \n                        //setting a hint for the order date property\n                        tooltip = 'Input here the date the order was made'; \n                        background = #00FFFF; // making the background red\n                    }\n                    MOVE PROPERTY(time(o)) { // moving the order time property\n                        foreground = #FF00FF; // making the color green\n                    }\n                    MOVE PROPERTY(number(o)) { // moving the order number property\n                        // setting that the user should preferably be shown 5 characters\n                        charWidth = 5; \n                    }\n                    MOVE PROPERTY(series(o)); // moving the order series property\n                }\n                NEW headerRow2 {\n                    horizontal = FALSE; // descendants - from top to bottom\n                }\n                MOVE PROPERTY(note(o));\n            }\n\n            size = (400, 300); //specifying that the container o.box should have a base size of 400x300 pixels\n        }\n        // creating a container that will store various specifications for the order\n        NEW detailPane { \n            // marking that this container should be a tab panel, where its descendats are tabs\n            tabbed = TRUE;\n            MOVE BOX(d) { // adding a container with order lines as one of the tabs in the top panel\n                caption = 'Lines'; // setting the caption of the tab panel\n                // making the row number column never have focus\n                PROPERTY(index(d)) { focusable = FALSE; } \n                GRID(d) {\n                    // making sure that by default the focus when opening the form is set to the row table\n                    defaultComponent = TRUE; \n                }\n            }\n            MOVE BOX(s) { // adding a container with sku totals as one of the detailPane tabs\n                caption = 'Selection';\n            }\n        }\n    }\n}\n\n// splitting the form definition into two statements (the second statement can be transferred to another module)\nDESIGN order {\n    // removing from the hierarchy the container with the print and export buttons to xls,\n    // thereby making them invisible\n    REMOVE TOOLBARLEFT; \n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"The output is the following form:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(94427).A+"",width:"790",height:"559"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},48846:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/Form_design_default_hierachy-6ecfe5a9355a0ffec21981bab1728b77.png"},94427:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/Form_design_example-7364b4b4c703078e55a694077d5ce2f7.jpg"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(96540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);