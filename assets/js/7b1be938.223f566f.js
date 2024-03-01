"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[74618],{81808:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=t(74848),i=t(28453);const s={title:"How-to: Custom Components (objects)"},c=void 0,a={id:"How-to_Custom_components_objects",title:"How-to: Custom Components (objects)",description:"By default, each object on a form with GRID view is displayed on the form as a flat table with columns.",source:"@site/docs/How-to_Custom_components_objects.md",sourceDirName:".",slug:"/How-to_Custom_components_objects",permalink:"/next/How-to_Custom_components_objects",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/How-to_Custom_components_objects.md",tags:[],version:"current",lastUpdatedAt:1702535805,formattedLastUpdatedAt:"Dec 14, 2023",frontMatter:{title:"How-to: Custom Components (objects)"},sidebar:"learn",previous:{title:"How-to: Custom components (properties)",permalink:"/next/How-to_Custom_components_properties"},next:{title:"How-to: Reports",permalink:"/next/How-to_Reports"}},o={},d=[{value:"Domain Logic",id:"domain-logic",level:3},{value:"Interface",id:"interface",level:3}];function l(e){const n={code:"code",em:"em",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"By default, each object on a form with GRID view is displayed on the form as a flat table with columns.\r\nHowever, it is possible to create your own components in the platform to visualize the list of objects."}),"\n",(0,r.jsx)(n.p,{children:'As an illustrative example, let\'s consider the task of displaying a list of products with images in the form of "tiles".'}),"\n",(0,r.jsx)(n.h3,{id:"domain-logic",children:"Domain Logic"}),"\n",(0,r.jsx)(n.p,{children:"First let's create classes and properties of items, as well as edit form:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"CLASS Item 'Item';\r\n\r\nname 'Name' = DATA STRING (Item) NONULL;\r\nprice 'Price' = DATA NUMERIC[12,2] (Item) NONULL;\r\nimage '' = DATA IMAGEFILE (Item);\r\n\r\nFORM item 'Item'\r\n    OBJECTS i = Item PANEL\r\n    PROPERTIES(i) name, price, image\r\n    \r\n    EDIT Item OBJECT i\r\n;\r\n\r\nDESIGN item {\r\n    OBJECTS {\r\n        MOVE PROPERTY(image(i)) {\r\n            fill = 1;\r\n        }\r\n    }\r\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"The name, price and image must be specified for each item."}),"\n",(0,r.jsx)(n.h3,{id:"interface",children:"Interface"}),"\n",(0,r.jsxs)(n.p,{children:["Let's create a form with a list of items. To do this let's add to the form an object ",(0,r.jsx)(n.em,{children:"Item"}),", its properties, and actions to add, edit, and delete:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"FORM items 'Items'\r\n    OBJECTS i = Item CUSTOM 'itemCards'\r\n    PROPERTIES(i) READONLY image, price, name\r\n    PROPERTIES(i) NEWSESSION new = NEW, edit = EDIT GRID, DELETE GRID\r\n;\r\n\r\nNAVIGATOR {\r\n    NEW items;\r\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The keyword ",(0,r.jsx)(n.strong,{children:"CUSTOM"})," specifies that not the standard tabular interface should be used to draw the list of items,\r\nbut the components created by the function ",(0,r.jsx)(n.em,{children:"itemCards"}),". Let's declare this function in the file ",(0,r.jsx)(n.em,{children:"itemcards.js"}),", which we'll place in the folder ",(0,r.jsx)(n.em,{children:"resources/web"}),".\r\nIt will return an object consisting of two functions: ",(0,r.jsx)(n.em,{children:"render"})," and ",(0,r.jsx)(n.em,{children:"update"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The function ",(0,r.jsx)(n.em,{children:"render"})," takes as input the controller and the element inside which the new elements necessary to display the data are to be created:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'render: (element, controller) => {\r\n    let cards = document.createElement("div")\r\n    cards.classList.add("item-cards");\r\n\r\n    element.cards = cards;\r\n    element.appendChild(cards);\r\n},\n'})}),"\n",(0,r.jsxs)(n.p,{children:["In this example we create a new ",(0,r.jsx)(n.em,{children:"div"})," ",(0,r.jsx)(n.em,{children:"cards"}),", remember it, and append it to ",(0,r.jsx)(n.em,{children:"element"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["To update the displayed values, the platform will call the ",(0,r.jsx)(n.em,{children:"update"})," function each time, and the same ",(0,r.jsx)(n.em,{children:"element"})," will be passed to it,\r\nas in the ",(0,r.jsx)(n.em,{children:"render"})," function, and the ",(0,r.jsx)(n.em,{children:"list"})," of objects:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'update: (element, controller, list) => {\r\n    while (element.cards.lastElementChild) {\r\n        element.cards.removeChild(element.cards.lastElementChild);\r\n    }\r\n\r\n    for (let item of list) {\r\n        let card = document.createElement("div")\r\n        card.classList.add("item-card");\r\n\r\n        if (controller.isCurrent(item))\r\n            card.classList.add("item-card-current");\r\n\r\n        let cardImage = document.createElement("img")\r\n        cardImage.classList.add("item-card-image");\r\n        cardImage.src = item.image;\r\n        card.appendChild(cardImage);\r\n\r\n        let cardPrice = document.createElement("div")\r\n        cardPrice.classList.add("item-card-price");\r\n        cardPrice.innerHTML = item.price;\r\n        card.appendChild(cardPrice);\r\n\r\n        let cardName = document.createElement("div")\r\n        cardName.classList.add("item-card-name");\r\n        cardName.innerHTML = item.name;\r\n        card.appendChild(cardName);\r\n\r\n        element.cards.appendChild(card);\r\n\r\n        card.onclick = function(event) {\r\n            if (!controller.isCurrent(item)) controller.changeObject(item);\r\n        }\r\n        card.ondblclick = function(event) {\r\n            controller.changeProperty(\'edit\', item);\r\n        }\r\n    }\r\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Because the ",(0,r.jsx)(n.em,{children:"update"})," function is called whenever the data changes, the first thing that happens is that all previously created elements (namely, item cards) are deleted."]}),"\n",(0,r.jsxs)(n.p,{children:["This example uses the simplest update scheme, but if necessary, it can be optimized by updating the DOM only for changed values.\r\nTo do that, the ",(0,r.jsx)(n.em,{children:"controller"})," has ",(0,r.jsx)(n.em,{children:"getDiff"})," method, where you pass a new ",(0,r.jsx)(n.em,{children:"list"})," of objects as a parameter.\r\nThis method will return as a result an object with arrays ",(0,r.jsx)(n.em,{children:"add"}),", ",(0,r.jsx)(n.em,{children:"update"}),", ",(0,r.jsx)(n.em,{children:"remove"}),", which store added, changed and deleted objects respectively.\r\nExample:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"let diff = controller.getDiff(list);\r\nfor (let object of diff.add) { ... }\r\nfor (let object of diff.update) { ... }\r\nfor (let object of diff.remove) { ... }\n"})}),"\n",(0,r.jsxs)(n.p,{children:["After removing the old elements, for each object in the ",(0,r.jsx)(n.em,{children:"list"})," array a ",(0,r.jsx)(n.em,{children:"div"})," ",(0,r.jsx)(n.em,{children:"card"})," is created, in which the desired display elements of each property are placed.\r\nThe names of the object fields correspond to the names of the properties on the form. The ",(0,r.jsx)(n.em,{children:"isCurrent"})," method determines which object from the list is current."]}),"\n",(0,r.jsx)(n.p,{children:"At the very end of the function, mouse click handlers are added to the item card."}),"\n",(0,r.jsxs)(n.p,{children:["On a single click ",(0,r.jsx)(n.em,{children:"changeObject"})," method is called on the controller, which changes the current object.\r\nThe second parameter (",(0,r.jsx)(n.em,{children:"rendered"}),") is not specified (i.e. it is assumed to be ",(0,r.jsx)(n.em,{children:"false"}),"), which means that the server must eventually call the ",(0,r.jsx)(n.em,{children:"update"})," function with a new list of objects (probably the same one).\r\nSince the value of the ",(0,r.jsx)(n.em,{children:"isCurrent"})," method will change, re-creating the item cards will change the currently selected object in the interface."]}),"\n",(0,r.jsxs)(n.p,{children:["On double-click, the ",(0,r.jsx)(n.em,{children:"changeProperty"})," method is called, which changes the current value of the ",(0,r.jsx)(n.em,{children:"edit"})," property for the object passed in the second parameter.\r\nSince ",(0,r.jsx)(n.em,{children:"edit"})," is an action, the third parameter, the value by which the current value of the property should be changed, is not passed, and the action will be called instead of the change.\r\nIn this case the item editing form will be opened."]}),"\n",(0,r.jsxs)(n.p,{children:["To combine the ",(0,r.jsx)(n.em,{children:"render"})," and ",(0,r.jsx)(n.em,{children:"update"})," functions into one, ",(0,r.jsx)(n.em,{children:"itemCards"})," function is created, which returns them within the same object:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"function itemCards() {\r\n    return {\r\n        render: function (element, controller) => {\r\n            ...\r\n        },\r\n        update: function (element, controller, list) {\r\n            ...\r\n        }\r\n    }\r\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To complete the design setup, create a file ",(0,r.jsx)(n.em,{children:"itemcards.css"}),", which we will also place in the ",(0,r.jsx)(n.em,{children:"resources/web"})," folder:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:".item-cards {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\r\n    grid-auto-rows: 200px;\r\n    grid-gap: 10px;\r\n}\r\n\r\n.item-card {\r\n    cursor: pointer;\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow: hidden;\r\n    align-items: center;\r\n    padding: 8px;\r\n}\r\n.item-card-current {\r\n    background-color: lightblue;\r\n}\r\n\r\n.item-card-image {\r\n    flex: 1;\r\n    min-height: 100px;\r\n}\r\n\r\n.item-card-price {\r\n    font-weight: bold;\r\n}\r\n\r\n.item-card-name {\r\n    color: gray;\r\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In order to load created js and css files when the page opens in the browser, you must add their initialization to the action ",(0,r.jsx)(n.em,{children:"onWebClientInit"}),"  by adding the file name to the ",(0,r.jsx)(n.em,{children:"onWebClientInit(STRING)"})," property. A numeric value is needed to specify the order of loading:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lsf",children:"onWebClientInit() + {\r\n    onWebClientInit('itemcards.js') <- 1;\r\n    onWebClientInit('itemcards.css') <- 2;\r\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The resulting form will look like this:\r\n",(0,r.jsx)(n.img,{src:t(57402).A+"",width:"1509",height:"679"})]})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},57402:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/How-to_Custom_components_objects-bd4ea5401bf0f161e5521d35011f8e5d.png"},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var r=t(96540);const i={},s=r.createContext(i);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);