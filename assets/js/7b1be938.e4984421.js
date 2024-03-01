"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[74618],{81808:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=t(74848),s=t(28453);const r={title:"How-to: Custom Components (objects)"},c=void 0,a={id:"How-to_Custom_components_objects",title:"How-to: Custom Components (objects)",description:"By default, each object on a form with GRID view is displayed on the form as a flat table with columns.",source:"@site/docs/How-to_Custom_components_objects.md",sourceDirName:".",slug:"/How-to_Custom_components_objects",permalink:"/next/How-to_Custom_components_objects",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/How-to_Custom_components_objects.md",tags:[],version:"current",lastUpdatedAt:1702535805,formattedLastUpdatedAt:"Dec 14, 2023",frontMatter:{title:"How-to: Custom Components (objects)"},sidebar:"learn",previous:{title:"How-to: Custom components (properties)",permalink:"/next/How-to_Custom_components_properties"},next:{title:"How-to: Reports",permalink:"/next/How-to_Reports"}},o={},d=[{value:"Domain Logic",id:"domain-logic",level:3},{value:"Interface",id:"interface",level:3}];function l(e){const n={code:"code",em:"em",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"By default, each object on a form with GRID view is displayed on the form as a flat table with columns.\nHowever, it is possible to create your own components in the platform to visualize the list of objects."}),"\n",(0,i.jsx)(n.p,{children:'As an illustrative example, let\'s consider the task of displaying a list of products with images in the form of "tiles".'}),"\n",(0,i.jsx)(n.h3,{id:"domain-logic",children:"Domain Logic"}),"\n",(0,i.jsx)(n.p,{children:"First let's create classes and properties of items, as well as edit form:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"CLASS Item 'Item';\n\nname 'Name' = DATA STRING (Item) NONULL;\nprice 'Price' = DATA NUMERIC[12,2] (Item) NONULL;\nimage '' = DATA IMAGEFILE (Item);\n\nFORM item 'Item'\n    OBJECTS i = Item PANEL\n    PROPERTIES(i) name, price, image\n    \n    EDIT Item OBJECT i\n;\n\nDESIGN item {\n    OBJECTS {\n        MOVE PROPERTY(image(i)) {\n            fill = 1;\n        }\n    }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"The name, price and image must be specified for each item."}),"\n",(0,i.jsx)(n.h3,{id:"interface",children:"Interface"}),"\n",(0,i.jsxs)(n.p,{children:["Let's create a form with a list of items. To do this let's add to the form an object ",(0,i.jsx)(n.em,{children:"Item"}),", its properties, and actions to add, edit, and delete:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"FORM items 'Items'\n    OBJECTS i = Item CUSTOM 'itemCards'\n    PROPERTIES(i) READONLY image, price, name\n    PROPERTIES(i) NEWSESSION new = NEW, edit = EDIT GRID, DELETE GRID\n;\n\nNAVIGATOR {\n    NEW items;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The keyword ",(0,i.jsx)(n.strong,{children:"CUSTOM"})," specifies that not the standard tabular interface should be used to draw the list of items,\nbut the components created by the function ",(0,i.jsx)(n.em,{children:"itemCards"}),". Let's declare this function in the file ",(0,i.jsx)(n.em,{children:"itemcards.js"}),", which we'll place in the folder ",(0,i.jsx)(n.em,{children:"resources/web"}),".\nIt will return an object consisting of two functions: ",(0,i.jsx)(n.em,{children:"render"})," and ",(0,i.jsx)(n.em,{children:"update"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The function ",(0,i.jsx)(n.em,{children:"render"})," takes as input the controller and the element inside which the new elements necessary to display the data are to be created:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'render: (element, controller) => {\n    let cards = document.createElement("div")\n    cards.classList.add("item-cards");\n\n    element.cards = cards;\n    element.appendChild(cards);\n},\n'})}),"\n",(0,i.jsxs)(n.p,{children:["In this example we create a new ",(0,i.jsx)(n.em,{children:"div"})," ",(0,i.jsx)(n.em,{children:"cards"}),", remember it, and append it to ",(0,i.jsx)(n.em,{children:"element"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["To update the displayed values, the platform will call the ",(0,i.jsx)(n.em,{children:"update"})," function each time, and the same ",(0,i.jsx)(n.em,{children:"element"})," will be passed to it,\nas in the ",(0,i.jsx)(n.em,{children:"render"})," function, and the ",(0,i.jsx)(n.em,{children:"list"})," of objects:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'update: (element, controller, list) => {\n    while (element.cards.lastElementChild) {\n        element.cards.removeChild(element.cards.lastElementChild);\n    }\n\n    for (let item of list) {\n        let card = document.createElement("div")\n        card.classList.add("item-card");\n\n        if (controller.isCurrent(item))\n            card.classList.add("item-card-current");\n\n        let cardImage = document.createElement("img")\n        cardImage.classList.add("item-card-image");\n        cardImage.src = item.image;\n        card.appendChild(cardImage);\n\n        let cardPrice = document.createElement("div")\n        cardPrice.classList.add("item-card-price");\n        cardPrice.innerHTML = item.price;\n        card.appendChild(cardPrice);\n\n        let cardName = document.createElement("div")\n        cardName.classList.add("item-card-name");\n        cardName.innerHTML = item.name;\n        card.appendChild(cardName);\n\n        element.cards.appendChild(card);\n\n        card.onclick = function(event) {\n            if (!controller.isCurrent(item)) controller.changeObject(item);\n        }\n        card.ondblclick = function(event) {\n            controller.changeProperty(\'edit\', item);\n        }\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Because the ",(0,i.jsx)(n.em,{children:"update"})," function is called whenever the data changes, the first thing that happens is that all previously created elements (namely, item cards) are deleted."]}),"\n",(0,i.jsxs)(n.p,{children:["This example uses the simplest update scheme, but if necessary, it can be optimized by updating the DOM only for changed values.\nTo do that, the ",(0,i.jsx)(n.em,{children:"controller"})," has ",(0,i.jsx)(n.em,{children:"getDiff"})," method, where you pass a new ",(0,i.jsx)(n.em,{children:"list"})," of objects as a parameter.\nThis method will return as a result an object with arrays ",(0,i.jsx)(n.em,{children:"add"}),", ",(0,i.jsx)(n.em,{children:"update"}),", ",(0,i.jsx)(n.em,{children:"remove"}),", which store added, changed and deleted objects respectively.\nExample:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"let diff = controller.getDiff(list);\nfor (let object of diff.add) { ... }\nfor (let object of diff.update) { ... }\nfor (let object of diff.remove) { ... }\n"})}),"\n",(0,i.jsxs)(n.p,{children:["After removing the old elements, for each object in the ",(0,i.jsx)(n.em,{children:"list"})," array a ",(0,i.jsx)(n.em,{children:"div"})," ",(0,i.jsx)(n.em,{children:"card"})," is created, in which the desired display elements of each property are placed.\nThe names of the object fields correspond to the names of the properties on the form. The ",(0,i.jsx)(n.em,{children:"isCurrent"})," method determines which object from the list is current."]}),"\n",(0,i.jsx)(n.p,{children:"At the very end of the function, mouse click handlers are added to the item card."}),"\n",(0,i.jsxs)(n.p,{children:["On a single click ",(0,i.jsx)(n.em,{children:"changeObject"})," method is called on the controller, which changes the current object.\nThe second parameter (",(0,i.jsx)(n.em,{children:"rendered"}),") is not specified (i.e. it is assumed to be ",(0,i.jsx)(n.em,{children:"false"}),"), which means that the server must eventually call the ",(0,i.jsx)(n.em,{children:"update"})," function with a new list of objects (probably the same one).\nSince the value of the ",(0,i.jsx)(n.em,{children:"isCurrent"})," method will change, re-creating the item cards will change the currently selected object in the interface."]}),"\n",(0,i.jsxs)(n.p,{children:["On double-click, the ",(0,i.jsx)(n.em,{children:"changeProperty"})," method is called, which changes the current value of the ",(0,i.jsx)(n.em,{children:"edit"})," property for the object passed in the second parameter.\nSince ",(0,i.jsx)(n.em,{children:"edit"})," is an action, the third parameter, the value by which the current value of the property should be changed, is not passed, and the action will be called instead of the change.\nIn this case the item editing form will be opened."]}),"\n",(0,i.jsxs)(n.p,{children:["To combine the ",(0,i.jsx)(n.em,{children:"render"})," and ",(0,i.jsx)(n.em,{children:"update"})," functions into one, ",(0,i.jsx)(n.em,{children:"itemCards"})," function is created, which returns them within the same object:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"function itemCards() {\n    return {\n        render: function (element, controller) => {\n            ...\n        },\n        update: function (element, controller, list) {\n            ...\n        }\n    }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To complete the design setup, create a file ",(0,i.jsx)(n.em,{children:"itemcards.css"}),", which we will also place in the ",(0,i.jsx)(n.em,{children:"resources/web"})," folder:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".item-cards {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n    grid-auto-rows: 200px;\n    grid-gap: 10px;\n}\n\n.item-card {\n    cursor: pointer;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n    align-items: center;\n    padding: 8px;\n}\n.item-card-current {\n    background-color: lightblue;\n}\n\n.item-card-image {\n    flex: 1;\n    min-height: 100px;\n}\n\n.item-card-price {\n    font-weight: bold;\n}\n\n.item-card-name {\n    color: gray;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In order to load created js and css files when the page opens in the browser, you must add their initialization to the action ",(0,i.jsx)(n.em,{children:"onWebClientInit"}),"  by adding the file name to the ",(0,i.jsx)(n.em,{children:"onWebClientInit(STRING)"})," property. A numeric value is needed to specify the order of loading:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"onWebClientInit() + {\n    onWebClientInit('itemcards.js') <- 1;\n    onWebClientInit('itemcards.css') <- 2;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The resulting form will look like this:\n",(0,i.jsx)(n.img,{src:t(43027).A+"",width:"1509",height:"679"})]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},43027:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/How-to_Custom_components_objects-bd4ea5401bf0f161e5521d35011f8e5d.png"},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var i=t(96540);const s={},r=i.createContext(s);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);