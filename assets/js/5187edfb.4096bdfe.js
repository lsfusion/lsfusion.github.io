"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[16934],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=i,u=c["".concat(s,".").concat(h)]||c[h]||d[h]||r;return n?a.createElement(u,o(o({ref:t},m),{},{components:n})):a.createElement(u,o({ref:t},m))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},25283:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return p}});var a=n(83117),i=(n(67294),n(3905));const r={title:"Form design"},o=void 0,l={unversionedId:"Form_design",id:"Form_design",title:"Form design",description:"The form design defines how a form is displayed in the interactive view.",source:"@site/docs/Form_design.md",sourceDirName:".",slug:"/Form_design",permalink:"/next/Form_design",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Form_design.md",tags:[],version:"current",lastUpdatedAt:1701332378,formattedLastUpdatedAt:"Nov 30, 2023",frontMatter:{title:"Form design"},sidebar:"learn",previous:{title:"Interactive view",permalink:"/next/Interactive_view"},next:{title:"Form events",permalink:"/next/Form_events"}},s={},p=[{value:"Containers",id:"containers",level:3},{value:"Base components",id:"base-components",level:3},{value:"Dimensions and components layout",id:"components",level:3},{value:"Property value cell sizes",id:"valueWidth",level:4},{value:"Default dimensions and layout",id:"default-dimensions-and-layout",level:3},{value:"Property value cell dimensions",id:"property-value-cell-dimensions",level:4},{value:"Window size",id:"window-size",level:3},{value:"Default design",id:"defaultDesign",level:3},{value:"Default design example",id:"default-design-example",level:3},{value:"Language",id:"language",level:3},{value:"Examples",id:"examples",level:3}],m={toc:p};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"form design")," defines how a ",(0,i.kt)("a",{parentName:"p",href:"/next/Forms"},"form")," is displayed in the ",(0,i.kt)("a",{parentName:"p",href:"/next/Interactive_view"},"interactive")," view."),(0,i.kt)("p",null,"As with any GUI, form design is a hierarchy whose nodes are ",(0,i.kt)("em",{parentName:"p"},"components"),". Components, in turn, can be:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"containers"),": components that contain other components."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"base components"),": graphical views of the elements described in the ",(0,i.kt)("a",{parentName:"li",href:"/next/Form_structure"},"form structure")," and the form ",(0,i.kt)("a",{parentName:"li",href:"/next/Interactive_view"},"interactive view"),".")),(0,i.kt)("p",null,"Each component must have its own unique name within ",(0,i.kt)("em",{parentName:"p"},"the form"),". "),(0,i.kt)("h3",{id:"containers"},"Containers"),(0,i.kt)("p",null,"All children of any container make an ordered list. It is necessary to determine how the child components of each container on the form should be placed. To do this, horizontal, tabbed or lines options can be specified for a container."),(0,i.kt)("p",null,"If at some point a container has no child components , or they are invisible, it is automatically hidden. In turn, if a component is not a child of any container, then it will not be shown on the form."),(0,i.kt)("h3",{id:"base-components"},"Base components"),(0,i.kt)("p",null,"When defining the form design, the developer can use the following base components, which are created automatically based on the form structure:"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Object groups / trees"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Table/Tree")," (",(0,i.kt)("inlineCode",{parentName:"li"},"GRID"),"): a component consisting of rows and columns in which the rows correspond to object collections of the corresponding ",(0,i.kt)("a",{parentName:"li",href:"/next/Form_structure"},"group of objects")," and columns correspond to ",(0,i.kt)("a",{parentName:"li",href:"/next/Properties"},"properties")," and ",(0,i.kt)("a",{parentName:"li",href:"/next/Actions"},"actions"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"System toolbar")," (",(0,i.kt)("inlineCode",{parentName:"li"},"TOOLBARSYSTEM"),"): a panel consisting of buttons with which the user can execute various system actions on the rows in the table. Automatically hidden if the table becomes invisible."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"User filter")," (",(0,i.kt)("inlineCode",{parentName:"li"},"USERFILTER"),"): a component with which the user can create and apply their own filters to a table.")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Filter groups")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Filter group")," (",(0,i.kt)("inlineCode",{parentName:"li"},"FILTERGROUP"),"): a component with which the user can activate the filters they need in a form's ",(0,i.kt)("a",{parentName:"li",href:"/next/Interactive_view#filtergroup"},"filter groups"),".")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Properties / Actions")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Property panel")," (",(0,i.kt)("inlineCode",{parentName:"li"},"PROPERTY"),"): a component that displays the title and current value of a property. The caption can be either to the left of the value cell or at the top. Not shown if the property is displayed in the table.")),(0,i.kt)("h3",{id:"components"},"Dimensions and components layout"),(0,i.kt)("p",null,"The developer can control how the platform distributes the available container sizes between its internal components, as well as how these components will be located relative to each other."),(0,i.kt)("p",null,"First of all, for each component you can specify the ",(0,i.kt)("em",{parentName:"p"},"base")," size that this component will receive in any case, regardless of the algorithm for placing its container."),(0,i.kt)("p",null,"To determine the final size of the components and their location inside the container, the following algorithm is used:"),(0,i.kt)("p",null,"For each container, one of the directions is considered to be ",(0,i.kt)("em",{parentName:"p"},"dynamic"),", and the other ",(0,i.kt)("em",{parentName:"p"},"static"),". The dynamic direction is determined from the name of the container, for example, for a vertical container, the dynamic direction will be vertical; for a horizontal splitter it will be horizontal. For a columned or scrollable container, as well as a tab panel, the dynamic direction is considered to be the vertical. Further, depending on the direction:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Dynamic: all components are placed one after another, in the order they are added to the container. Also, ",(0,i.kt)("em",{parentName:"p"},"extension coefficient")," (",(0,i.kt)("inlineCode",{parentName:"p"},"flex"),") can be specified for each component. In this case, the space remaining in the container (that is, minus the basic dimensions of all internal components) is divided between all components in proportion to their extension coefficients.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Static: ",(0,i.kt)("em",{parentName:"p"},"alignment")," can be specified for each component (",(0,i.kt)("inlineCode",{parentName:"p"},"alignment"),"). Its values can be ",(0,i.kt)("em",{parentName:"p"},"At the start")," (",(0,i.kt)("inlineCode",{parentName:"p"},"START"),"), ",(0,i.kt)("em",{parentName:"p"},"Center")," (",(0,i.kt)("inlineCode",{parentName:"p"},"CENTER"),"), ",(0,i.kt)("em",{parentName:"p"},"At the end")," (",(0,i.kt)("inlineCode",{parentName:"p"},"END"),"), or ",(0,i.kt)("em",{parentName:"p"},"Stretch")," (",(0,i.kt)("inlineCode",{parentName:"p"},"STRETCH"),"). In the first three cases, the component gets its base size as the final size, and is positioned in accordance with the specified type of alignment (that is, at the beginning, center, or end). If Stretch is used as the type of alignment, the final size of the component will be the size of the top container (but not less than the base size), and it will be located exactly in the center. "))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For example, in the case of a vertical upper container, if the component is set to align at the start then it will be located on the maximum left of the container; if it is set to Stretch, the component will occupy all the space from the left to the right border.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This component layout algorithm is a special case of ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/css-flexbox-1/"},"CSS Flexible Box Layout")," (and is implemented using it in the web client). For example, the CSS ",(0,i.kt)("inlineCode",{parentName:"p"},"flex-grow")," property corresponds to the extension coefficient, and ",(0,i.kt)("inlineCode",{parentName:"p"},"flex-basis")," corresponds to the base size.")),(0,i.kt)("p",null,"The column container breaks its static (horizontal) direction into ",(0,i.kt)("inlineCode",{parentName:"p"},"N")," identical parts (where ",(0,i.kt)("inlineCode",{parentName:"p"},"N")," is the number of columns): each part then has its own components, as if this part were a separate vertical container."),(0,i.kt)("p",null,"For base components, you can specify the ",(0,i.kt)("em",{parentName:"p"},"automatic size")," option (",(0,i.kt)("inlineCode",{parentName:"p"},"autoSize"),"): in this case, the base size will change automatically in to enclose exactly the entire contents of this base component (for example, for a table: all its records plus a title)."),(0,i.kt)("p",null,"The properties layout in a table (or rather, the columns that display their values) is done the same way as if the table were a horizontal container, and the columns of the table were internal components of this container. "),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Since the current implementation uses the ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3schools.com/cssref/pr_tab_table-layout.asp"},"CSS Table Layout Fixed")," mechanism to place columns inside the table in the Web client, and its capabilities are significantly limited, the extension coefficient for properties displayed in the table can be equal either to ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," or to the base size.")),(0,i.kt)("p",null,"The caption and the value cell are placed inside the property panel in the same way as if the panel were a container (horizontal if the caption is on the left, vertical if at the top), in which the cell has an extension coefficient of ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),", the caption is ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," and the alignment of both is set to  ",(0,i.kt)("inlineCode",{parentName:"p"},"STRETCH")," "),(0,i.kt)("h4",{id:"valueWidth"},"Property value cell sizes"),(0,i.kt)("p",null,"When displaying properties, you can explicitly specify dimensions of the entire container (together with the caption, if the property is in a panel) and also the dimensions of the ",(0,i.kt)("em",{parentName:"p"},"value cell")," itself. To do this, add the prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," to the size name, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"valueWidth"),"). Also, it is worth noting that these dimensions (those of the value cells, and not the entire container) are also used to determine the column widths if the property is displayed in a table."),(0,i.kt)("p",null,"For property value cells, it is also possible to specify the base width not in pixels, but using a ",(0,i.kt)("em",{parentName:"p"},"sample value")," (",(0,i.kt)("inlineCode",{parentName:"p"},"widthValue"),") In this case, the platform takes into account the user's font/mask/locale to calculate and set the width in pixels so that the user can see exactly the specified sample value (no more, no less). It is assumed that the sample value must be either a string or of a class equal to the class of the property value."),(0,i.kt)("p",null,"In addition, cell widths can be specified in ",(0,i.kt)("em",{parentName:"p"},"characters")," (",(0,i.kt)("inlineCode",{parentName:"p"},"charWidth"),"), which is equivalent to giving a string sample value consisting of the given number of zeros."),(0,i.kt)("p",null,"In the last two cases (that is, when specifying the width as a sample value or in characters), if the property value class implies the presence of buttons on the right during ",(0,i.kt)("a",{parentName:"p",href:"/next/Primitive_input_INPUT"},"input")," (for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"DATE")," class), then the width of this button (21 pixels) is added to the width of the property value cell."),(0,i.kt)("h3",{id:"default-dimensions-and-layout"},"Default dimensions and layout"),(0,i.kt)("p",null,"By default, the extension coefficient and alignment for components are determined as follows:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Component"),(0,i.kt)("th",{parentName:"tr",align:null},"Extension coefficient"),(0,i.kt)("th",{parentName:"tr",align:null},"Alignment"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Table / Tree"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STRETCH"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Component inside scrollable containers, splitters and tabbed panel"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STRETCH"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Property panel inside a horizontal container or property in a table. The property values are objects of ",(0,i.kt)("a",{parentName:"td",href:"/next/Built-in_classes"},"built-in classes")," of dynamic length (i.e. strings and numbers)"),(0,i.kt)("td",{parentName:"tr",align:null},"With of the value cell"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"START"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Property panel inside a vertical container. The property values are objects of ",(0,i.kt)("a",{parentName:"td",href:"/next/Built-in_classes"},"built-in classes")," of dynamic length (i.e. strings and numbers)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STRETCH"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"All others"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"START"))))),(0,i.kt)("p",null,"The base container size (except the tab panel) is equal by default to the sum of the base sizes of all its child components for the dynamic direction, and the maximum for the static direction. The base height of the tab panel is the sum of the base height of its current tab and the height of the tab title bar, the base width is the same as the base width of the current tab."),(0,i.kt)("p",null,"The base width of tables/trees is ",(0,i.kt)("inlineCode",{parentName:"p"},"130")," pixels by default, and the height is ",(0,i.kt)("inlineCode",{parentName:"p"},"70")," pixels. The base size of the property panel is determined in the same way as if the panel was a container (horizontal if the caption is on the left, vertical if it is at the top) consisting of the caption and the value cell. The base size of the remaining base components (as well as the caption in the property panel) is determined in such a way as to enclose all the text contained in them."),(0,i.kt)("h4",{id:"property-value-cell-dimensions"},"Property value cell dimensions"),(0,i.kt)("p",null,"The following formulas are used by default to determine the width of a property value cell:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property value class"),(0,i.kt)("th",{parentName:"tr",align:null},"Width unit"),(0,i.kt)("th",{parentName:"tr",align:null},"Width/Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Strings"),(0,i.kt)("td",{parentName:"tr",align:null},"In characters"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"IF length <= 12 result = length ELSE IF length = INFINITE result = 15 ELSE result = 12 + (length - 12) ^ 0.7"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Numbers"),(0,i.kt)("td",{parentName:"tr",align:null},"In characters"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"IF length <= 6 result = length ELSE IF this = DOUBLE result = 10 ELSE result = MIN(6 + (length - 6) ^ 0.7, 10)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"COLOR")),(0,i.kt)("td",{parentName:"tr",align:null},"In pixels"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"40"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Files and file links"),(0,i.kt)("td",{parentName:"tr",align:null},"In pixels"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"18"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"BOOLEAN")),(0,i.kt)("td",{parentName:"tr",align:null},"In pixels"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"25"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DATE")),(0,i.kt)("td",{parentName:"tr",align:null},"Sample value"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1991_11_21"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DATETIME")),(0,i.kt)("td",{parentName:"tr",align:null},"Sample value"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1991_11_21_10:55:55"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"TIME")),(0,i.kt)("td",{parentName:"tr",align:null},"Sample value"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"10:55:55"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"User classes"),(0,i.kt)("td",{parentName:"tr",align:null},"In characters"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"7"))))),(0,i.kt)("p",null,"The default height of a property value cell is equal to the height of the font used, except properties whose values belong to the ",(0,i.kt)("inlineCode",{parentName:"p"},"TEXT")," class (in this case, the height is four times the font height)."),(0,i.kt)("h3",{id:"window-size"},"Window size"),(0,i.kt)("p",null,"If the form opens in ",(0,i.kt)("a",{parentName:"p",href:"/next/In_an_interactive_view_SHOW_DIALOG#location"},"window")," mode it does not have an upper container, so you need to determine this window's initial size. This size is determined similarly to the default base size, the only difference is that for tables/trees the default size is determined not as a constant (the default is ",(0,i.kt)("inlineCode",{parentName:"p"},"130"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"70"),") but in such a way that it contains their whole contents (similar to the automatic sizing mechanism), but no less than ",(0,i.kt)("inlineCode",{parentName:"p"},"130")," in width and ",(0,i.kt)("inlineCode",{parentName:"p"},"140")," in height."),(0,i.kt)("h3",{id:"defaultDesign"},"Default design"),(0,i.kt)("p",null,"An automatic design can be created for each form, based on the form's structure. The developer can modify the automatic design or create a design from scratch."),(0,i.kt)("p",null,"The automatic design is generated as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BOX"),": contains all the components of this form. Vertical container. Extension coefficient: ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),", alignment: ",(0,i.kt)("inlineCode",{parentName:"li"},"STRETCH"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PANEL"),": contains components of the properties that are displayed in ",(0,i.kt)("inlineCode",{parentName:"li"},"PANEL")," ",(0,i.kt)("a",{parentName:"li",href:"/next/Interactive_view#property"},"view"),"  and ",(0,i.kt)("a",{parentName:"li",href:"/next/Form_structure#drawgroup"},"display group")," of which is undefined (the property has no parameters). The internal structure and layout are similar to the internal structure and layout of the object group container. ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GROUP...")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"OBJECTS"),": contains all the components that are created for object groups/trees on this form. Vertical container. Extension coefficient: ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),", alignment: ",(0,i.kt)("inlineCode",{parentName:"li"},"STRETCH"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BOX(<object group/tree>)"),":  contains all the components of this group of objects. Vertical container. Extension coefficient: ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),", alignment: ",(0,i.kt)("inlineCode",{parentName:"li"},"STRETCH"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GRID (<group of objects / tree>)"),": the base component of a Table."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TOOLBARBOX(<group of objects / tree>)"),": contains all the components of a toolbar (responsible for layout inside the toolbar). Horizontal container. Alignment: ",(0,i.kt)("inlineCode",{parentName:"li"},"STRETCH"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TOOLBARLEFT(<group of objects / tree>)"),": the left side of a toolbar. Horizontal container. Alignment: ",(0,i.kt)("inlineCode",{parentName:"li"},"CENTER"),".  ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TOOLBARSYSTEM(<group of objects / tree>)"),": the base component of the System toolbar. Alignment: ",(0,i.kt)("inlineCode",{parentName:"li"},"CENTER"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TOOLBARRIGHT(<group of objects / tree>)"),": the right side of a toolbar. Horizontal container. Extension coefficient: ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),", alignment: ",(0,i.kt)("inlineCode",{parentName:"li"},"CENTER"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FILTERGROUPS(<group of filters>)"),": contains all the components that are created for filter groups corresponding to a object group. Horizontal container. Alignment: ",(0,i.kt)("inlineCode",{parentName:"li"},"CENTER"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FILTERGROUP"),": base component of a Filter group. Alignment: ",(0,i.kt)("inlineCode",{parentName:"li"},"CENTER"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TOOLBAR(<group of objects / tree>)"),":  contains the components of the properties displayed in the ",(0,i.kt)("inlineCode",{parentName:"li"},"TOOLBAR")," ",(0,i.kt)("a",{parentName:"li",href:"/next/Interactive_view#property"},"view")," and ",(0,i.kt)("a",{parentName:"li",href:"/next/Form_structure#drawgroup"},"display group")," equal to the specified one. Horizontal container. Alignment: ",(0,i.kt)("inlineCode",{parentName:"li"},"CENTER"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PROPERTY(<property>)"),": base component of the Property Panel."))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"USERFILTER(<group of objects / tree>)"),":  base component of the User filter. Alignment: ",(0,i.kt)("inlineCode",{parentName:"li"},"STRETCH"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PANEL(<group of objects / tree>)"),": contains the components of the properties displayed in the ",(0,i.kt)("inlineCode",{parentName:"li"},"PANEL")," ",(0,i.kt)("a",{parentName:"li",href:"/next/Interactive_view#property"},"view"),". Vertical container. Alignment: ",(0,i.kt)("inlineCode",{parentName:"li"},"STRETCH"),". If several properties belong to ",(0,i.kt)("a",{parentName:"li",href:"/next/Groups_of_properties_and_actions"},"groups")," for which it is necessary to create separate containers, then a corresponding hierarchy of containers is created for them and the components of these properties are placed in it:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GROUP(<property group>, <group of objects / tree>)"),": contains components of properties that belong to the specified object group and property group (or do not belong to any property group: in this case the property group is not specified, for example ",(0,i.kt)("inlineCode",{parentName:"li"},"GROUP(,a))"),". Column container.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PROPERTY(<property>)"),": base component of the Property Panel."))))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TOOLBARBOX"),": contains property components that are displayed in ",(0,i.kt)("inlineCode",{parentName:"li"},"TOOLBAR")," ",(0,i.kt)("a",{parentName:"li",href:"/next/Interactive_view#property"},"view")," and have no ",(0,i.kt)("a",{parentName:"li",href:"/next/Form_structure#drawgroup"},"display group")," (for example, the property has no parameters). The internal structure and layout are similar to the corresponding internal structure and layout of an object group (except for ",(0,i.kt)("inlineCode",{parentName:"li"},"FILTERGROUPS"),", which does not make sense when there is no object group, and therefore is not present in this container).",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TOOLBARLEFT, TOOLBARRIGHT, TOOLBAR..."))))))),(0,i.kt)("h3",{id:"default-design-example"},"Default design example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"\nFORM myForm 'myForm'\n    OBJECTS myObject = myClass\n    PROPERTIES(myObject) myProperty1, myProperty2 PANEL\n    FILTERGROUP myFilter\n        FILTER 'myFilter' myProperty1(myObject)\n;\n")),(0,i.kt)("p",null,"The hierarchy of containers and components in the default design will look like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(64698).Z,width:"1312",height:"570"})),(0,i.kt)("h3",{id:"language"},"Language"),(0,i.kt)("p",null,"To set up the design of the form, use the ",(0,i.kt)("a",{parentName:"p",href:"/next/DESIGN_statement"},(0,i.kt)("inlineCode",{parentName:"a"},"DESIGN")," statement"),"."),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"DESIGN order { // customizing the design of the form, starting with the default design\n    // marking that all changes to the hierarchy will occur for the topmost container\n    // creating a new container as the very first one before the system buttons, in which we \n    // put two containers - header and specifications\n    NEW orderPane FIRST { \n        fill = 1; // specifying that the container should occupy all the space available to it\n        MOVE BOX(o) { // moving everything related to the object o to the new container\n            PANEL(o) { // configuring how properties are displayed in the object o panel\n                horizontal = FALSE; // making all descendants go from top to bottom\n                NEW headerRow1 { // creating a container - the first row\n                    horizontal = TRUE;\n                    MOVE PROPERTY(date(o)) { // moving the order date property\n                        // \"override\" the property caption in the form design (instead of the standard one)\n                        caption = 'Date of the edited order'; \n                        //setting a hint for the order date property\n                        tooltip = 'Input here the date the order was made'; \n                        background = #00FFFF; // making the background red\n                    }\n                    MOVE PROPERTY(time(o)) { // moving the order time property\n                        foreground = #FF00FF; // making the color green\n                    }\n                    MOVE PROPERTY(number(o)) { // moving the order number property\n                        // setting that the user should preferably be shown 5 characters\n                        charWidth = 5; \n                    }\n                    MOVE PROPERTY(series(o)); // moving the order series property\n                }\n                NEW headerRow2 {\n                    horizontal = FALSE; // descendants - from top to bottom\n                }\n                MOVE PROPERTY(note(o));\n            }\n\n            size = (400, 300); //specifying that the container o.box should have a base size of 400x300 pixels\n        }\n        // creating a container that will store various specifications for the order\n        NEW detailPane { \n            // marking that this container should be a tab panel, where its descendats are tabs\n            tabbed = TRUE;\n            MOVE BOX(d) { // adding a container with order lines as one of the tabs in the top panel\n                caption = 'Lines'; // setting the caption of the tab panel\n                // making the row number column never have focus\n                PROPERTY(index(d)) { focusable = FALSE; } \n                GRID(d) {\n                    // making sure that by default the focus when opening the form is set to the row table\n                    defaultComponent = TRUE; \n                }\n            }\n            MOVE BOX(s) { // adding a container with sku totals as one of the detailPane tabs\n                caption = 'Selection';\n            }\n        }\n    }\n}\n\n// splitting the form definition into two statements (the second statement can be transferred to another module)\nDESIGN order {\n    // removing from the hierarchy the container with the print and export buttons to xls,\n    // thereby making them invisible\n    REMOVE TOOLBARLEFT; \n}\n")),(0,i.kt)("p",null,"The output is the following form:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(50450).Z,width:"790",height:"559"})))}d.isMDXComponent=!0},64698:function(e,t,n){t.Z=n.p+"assets/images/Form_design_default_hierachy-6ecfe5a9355a0ffec21981bab1728b77.png"},50450:function(e,t,n){t.Z=n.p+"assets/images/Form_design_example-7364b4b4c703078e55a694077d5ce2f7.jpg"}}]);