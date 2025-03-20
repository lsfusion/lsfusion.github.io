"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["53317"],{23883:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>c,metadata:()=>t,assets:()=>l,toc:()=>a,contentTitle:()=>d});var t=JSON.parse('{"id":"How-to_Custom_components_objects","title":"How-to: \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B (\u043E\u0431\u044A\u0435\u043A\u0442\u044B)","description":"\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u043A\u0430\u0436\u0434\u044B\u0439 \u043E\u0431\u044A\u0435\u043A\u0442 \u043D\u0430 \u0444\u043E\u0440\u043C\u0435 \u0441 \u0432\u0438\u0434\u043E\u043C \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F GRID \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u0444\u043E\u0440\u043C\u0435 \u0432 \u0432\u0438\u0434\u0435 \u043F\u043B\u043E\u0441\u043A\u043E\u0439 \u0442\u0430\u0431\u043B\u0438\u0446\u044B \u0441\u043E \u0441\u0442\u043E\u043B\u0431\u0446\u0430\u043C\u0438.","source":"@site/i18n/ru/docusaurus-plugin-content-docs/version-v5/How-to_Custom_components_objects.md","sourceDirName":".","slug":"/How-to_Custom_components_objects","permalink":"/ru/v5/How-to_Custom_components_objects","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v5/docs/ru/How-to_Custom_components_objects.md","tags":[],"version":"v5","lastUpdatedAt":1702535805000,"frontMatter":{"title":"How-to: \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B (\u043E\u0431\u044A\u0435\u043A\u0442\u044B)"},"sidebar":"learn","previous":{"title":"How-to: \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B (\u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430)","permalink":"/ru/v5/How-to_Custom_components_properties"},"next":{"title":"How-to: \u041E\u0442\u0447\u0435\u0442\u044B","permalink":"/ru/v5/How-to_Reports"}}'),i=r("85893"),s=r("50065");let c={title:"How-to: \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B (\u043E\u0431\u044A\u0435\u043A\u0442\u044B)"},d=void 0,l={},a=[{value:"\u0414\u043E\u043C\u0435\u043D\u043D\u0430\u044F \u043B\u043E\u0433\u0438\u043A\u0430",id:"\u0434\u043E\u043C\u0435\u043D\u043D\u0430\u044F-\u043B\u043E\u0433\u0438\u043A\u0430",level:3},{value:"\u0418\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441",id:"\u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441",level:3}];function o(e){let n={code:"code",em:"em",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u043A\u0430\u0436\u0434\u044B\u0439 \u043E\u0431\u044A\u0435\u043A\u0442 \u043D\u0430 \u0444\u043E\u0440\u043C\u0435 \u0441 \u0432\u0438\u0434\u043E\u043C \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F GRID \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u0444\u043E\u0440\u043C\u0435 \u0432 \u0432\u0438\u0434\u0435 \u043F\u043B\u043E\u0441\u043A\u043E\u0439 \u0442\u0430\u0431\u043B\u0438\u0446\u044B \u0441\u043E \u0441\u0442\u043E\u043B\u0431\u0446\u0430\u043C\u0438.\n\u041E\u0434\u043D\u0430\u043A\u043E, \u0432 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C \u0441\u0432\u043E\u0438 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B \u0434\u043B\u044F \u0432\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u0441\u043F\u0438\u0441\u043A\u0430 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432."}),"\n",(0,i.jsx)(n.p,{children:'\u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043D\u0430\u0433\u043B\u044F\u0434\u043D\u043E\u0433\u043E \u043F\u0440\u0438\u043C\u0435\u0440\u0430 \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0438\u043C \u0437\u0430\u0434\u0430\u0447\u0443 \u043F\u043E \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044E \u0432 \u0432\u0438\u0434\u0435 "\u043F\u043B\u0438\u0442\u043A\u0438" \u0441\u043F\u0438\u0441\u043A\u0430 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0441 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F\u043C\u0438.'}),"\n",(0,i.jsx)(n.h3,{id:"\u0434\u043E\u043C\u0435\u043D\u043D\u0430\u044F-\u043B\u043E\u0433\u0438\u043A\u0430",children:"\u0414\u043E\u043C\u0435\u043D\u043D\u0430\u044F \u043B\u043E\u0433\u0438\u043A\u0430"}),"\n",(0,i.jsx)(n.p,{children:"\u0414\u043B\u044F \u043D\u0430\u0447\u0430\u043B\u0430 \u0441\u043E\u0437\u0434\u0430\u0434\u0438\u043C \u043A\u043B\u0430\u0441\u0441\u044B \u0438 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 \u0442\u043E\u0432\u0430\u0440\u043E\u0432, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0444\u043E\u0440\u043C\u0443 \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"CLASS Item 'Item';\n\nname 'Name' = DATA STRING (Item) NONULL;\nprice 'Price' = DATA NUMERIC[12,2] (Item) NONULL;\nimage '' = DATA IMAGEFILE (Item);\n\nFORM item 'Item'\n    OBJECTS i = Item PANEL\n    PROPERTIES(i) name, price, image\n    \n    EDIT Item OBJECT i\n;\n\nDESIGN item {\n    OBJECTS {\n        MOVE PROPERTY(image(i)) {\n            fill = 1;\n        }\n    }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u0414\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0442\u043E\u0432\u0430\u0440\u0430 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0437\u0430\u0434\u0430\u043D\u044B \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435, \u0446\u0435\u043D\u0430 \u0438 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435."}),"\n",(0,i.jsx)(n.h3,{id:"\u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441",children:"\u0418\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441"}),"\n",(0,i.jsxs)(n.p,{children:["\u0421\u043E\u0437\u0434\u0430\u0434\u0438\u043C \u0444\u043E\u0440\u043C\u0443 \u0441\u043E \u0441\u043F\u0438\u0441\u043A\u043E\u043C \u0442\u043E\u0432\u0430\u0440\u043E\u0432. \u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0434\u043E\u0431\u0430\u0432\u0438\u043C \u043D\u0430 \u0444\u043E\u0440\u043C\u0443 \u043E\u0431\u044A\u0435\u043A\u0442 ",(0,i.jsx)(n.em,{children:"\u0422\u043E\u0432\u0430\u0440"}),", \u0435\u0433\u043E \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u043F\u043E \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044E, \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E \u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044E:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"FORM items 'Items'\n    OBJECTS i = Item CUSTOM 'itemCards'\n    PROPERTIES(i) READONLY image, price, name\n    PROPERTIES(i) NEWSESSION new = NEW, edit = EDIT GRID, DELETE GRID\n;\n\nNAVIGATOR {\n    NEW items;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u041F\u0440\u0438 \u043F\u043E\u043C\u043E\u0449\u0438 \u043A\u043B\u044E\u0447\u0435\u0432\u043E\u0433\u043E \u0441\u043B\u043E\u0432\u0430 ",(0,i.jsx)(n.strong,{children:"CUSTOM"})," \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F, \u0447\u0442\u043E \u0434\u043B\u044F \u043E\u0442\u0440\u0438\u0441\u043E\u0432\u043A\u0438 \u0441\u043F\u0438\u0441\u043A\u0430 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0434\u043E\u043B\u0436\u0435\u043D \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0442\u0430\u0431\u043B\u0438\u0447\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441,\n\u0430 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B, \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0435\u0439 ",(0,i.jsx)(n.em,{children:"itemCards"}),". \u042D\u0442\u0443 \u0444\u0443\u043D\u043A\u0446\u0438\u044E \u043E\u0431\u044A\u044F\u0432\u0438\u043C \u0432 \u0444\u0430\u0439\u043B\u0435 ",(0,i.jsx)(n.em,{children:"itemcards.js"}),", \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u043E\u043C\u0435\u0441\u0442\u0438\u043C \u0432 \u043F\u0430\u043F\u043A\u0443 ",(0,i.jsx)(n.em,{children:"resources/web"}),".\n\u041E\u043D\u0430 \u0431\u0443\u0434\u0435\u0442 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044C \u043E\u0431\u044A\u0435\u043A\u0442, \u0441\u043E\u0441\u0442\u043E\u044F\u0449\u0438\u0439 \u0438\u0437 \u0434\u0432\u0443\u0445 \u0444\u0443\u043D\u043A\u0446\u0438\u0439: ",(0,i.jsx)(n.em,{children:"render"})," \u0438 ",(0,i.jsx)(n.em,{children:"update"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["\u0424\u0443\u043D\u043A\u0446\u0438\u044F ",(0,i.jsx)(n.em,{children:"render"})," \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u043D\u0430 \u0432\u0445\u043E\u0434 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u043B\u0435\u0440 \u0438 \u044D\u043B\u0435\u043C\u0435\u043D\u0442, \u0432\u043D\u0443\u0442\u0440\u0438 \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0434\u043E\u043B\u0436\u043D\u044B \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u043E\u0432\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'render: (element, controller) => {\n    let cards = document.createElement("div")\n    cards.classList.add("item-cards");\n\n    element.cards = cards;\n    element.appendChild(cards);\n},\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u0412 \u0434\u0430\u043D\u043D\u043E\u043C \u043F\u0440\u0438\u043C\u0435\u0440\u0435 \u043C\u044B \u0441\u043E\u0437\u0434\u0430\u0435\u043C \u043D\u043E\u0432\u044B\u0439 ",(0,i.jsx)(n.em,{children:"div"})," ",(0,i.jsx)(n.em,{children:"cards"}),", \u0437\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u0435\u043C \u0435\u0433\u043E \u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u043C \u0432\u043D\u0443\u0442\u0440\u044C ",(0,i.jsx)(n.em,{children:"element"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["\u0414\u043B\u044F \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u043C\u044B\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0431\u0443\u0434\u0435\u0442 \u043A\u0430\u0436\u0434\u044B\u0439 \u0440\u0430\u0437 \u0432\u044B\u0437\u044B\u0432\u0430\u0442\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u044E ",(0,i.jsx)(n.em,{children:"update"}),", \u0432 \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0431\u0443\u0434\u0435\u0442 \u043F\u0435\u0440\u0435\u0434\u0430\u043D \u0442\u043E\u0442 \u0436\u0435 ",(0,i.jsx)(n.em,{children:"element"}),",\n\u0447\u0442\u043E \u0438 \u0432 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 ",(0,i.jsx)(n.em,{children:"render"}),", \u0430 \u0442\u0430\u043A\u0436\u0435 \u0441\u043F\u0438\u0441\u043E\u043A \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 ",(0,i.jsx)(n.em,{children:"list"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'update: (element, controller, list) => {\n    while (element.cards.lastElementChild) {\n        element.cards.removeChild(element.cards.lastElementChild);\n    }\n\n    for (let item of list) {\n        let card = document.createElement("div")\n        card.classList.add("item-card");\n\n        if (controller.isCurrent(item))\n            card.classList.add("item-card-current");\n\n        let cardImage = document.createElement("img")\n        cardImage.classList.add("item-card-image");\n        cardImage.src = item.image;\n        card.appendChild(cardImage);\n\n        let cardPrice = document.createElement("div")\n        cardPrice.classList.add("item-card-price");\n        cardPrice.innerHTML = item.price;\n        card.appendChild(cardPrice);\n\n        let cardName = document.createElement("div")\n        cardName.classList.add("item-card-name");\n        cardName.innerHTML = item.name;\n        card.appendChild(cardName);\n\n        element.cards.appendChild(card);\n\n        card.onclick = function(event) {\n            if (!controller.isCurrent(item)) controller.changeObject(item);\n        }\n        card.ondblclick = function(event) {\n            controller.changeProperty(\'edit\', item);\n        }\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u0422\u0430\u043A \u043A\u0430\u043A \u0444\u0443\u043D\u043A\u0446\u0438\u044F ",(0,i.jsx)(n.em,{children:"update"})," \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043A\u0430\u0436\u0434\u044B\u0439 \u0440\u0430\u0437, \u043A\u043E\u0433\u0434\u0430 \u0438\u0437\u043C\u0435\u043D\u044F\u044E\u0442\u0441\u044F \u0434\u0430\u043D\u043D\u044B\u0435, \u0442\u043E \u043F\u0435\u0440\u0432\u044B\u043C \u0434\u0435\u043B\u043E\u043C \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0432\u0441\u0435\u0445 \u0440\u0430\u043D\u0435\u0435 \u0441\u043E\u0437\u0434\u0430\u043D\u043D\u044B\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 (\u0430 \u0438\u043C\u0435\u043D\u043D\u043E \u043A\u0430\u0440\u0442\u043E\u0447\u0435\u043A \u0442\u043E\u0432\u0430\u0440\u043E\u0432)."]}),"\n",(0,i.jsxs)(n.p,{children:["\u0412 \u0434\u0430\u043D\u043D\u043E\u043C \u043F\u0440\u0438\u043C\u0435\u0440\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0441\u0430\u043C\u0430\u044F \u043F\u0440\u043E\u0441\u0442\u0430\u044F \u0441\u0445\u0435\u043C\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F, \u043D\u043E \u043F\u0440\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u0435\u0435 \u043C\u043E\u0436\u043D\u043E \u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u0443\u0442\u0435\u043C \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F DOM \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u0438\u0437\u043C\u0435\u043D\u0438\u0432\u0448\u0438\u0445\u0441\u044F \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439.\n\u0414\u043B\u044F \u044D\u0442\u043E\u0439 \u0446\u0435\u043B\u0438 \u0443 ",(0,i.jsx)(n.em,{children:"controller"})," \u0435\u0441\u0442\u044C \u043C\u0435\u0442\u043E\u0434 ",(0,i.jsx)(n.em,{children:"getDiff"}),", \u0432 \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u043C \u043D\u0443\u0436\u043D\u043E \u043F\u0435\u0440\u0435\u0434\u0430\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 ",(0,i.jsx)(n.em,{children:"list"}),".\n\u042D\u0442\u043E\u0442 \u043C\u0435\u0442\u043E\u0434 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430 \u0432\u0435\u0440\u043D\u0435\u0442 \u043E\u0431\u044A\u0435\u043A\u0442 \u0441 \u043C\u0430\u0441\u0441\u0438\u0432\u0430\u043C\u0438 ",(0,i.jsx)(n.em,{children:"add"}),", ",(0,i.jsx)(n.em,{children:"update"}),", ",(0,i.jsx)(n.em,{children:"remove"}),", \u0432 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0431\u0443\u0434\u0443\u0442 \u0445\u0440\u0430\u043D\u0438\u0442\u044C\u0441\u044F \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435, \u0438\u0437\u043C\u0435\u043D\u0438\u0432\u0448\u0438\u0435\u0441\u044F \u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u043D\u044B\u0435 \u043E\u0431\u044A\u0435\u043A\u0442\u044B.\n\u041F\u0440\u0438\u043C\u0435\u0440:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"let diff = controller.getDiff(list);\nfor (let object of diff.add) { ... }\nfor (let object of diff.update) { ... }\nfor (let object of diff.remove) { ... }\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u041F\u043E\u0441\u043B\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u0441\u0442\u0430\u0440\u044B\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u0438\u0437 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 ",(0,i.jsx)(n.em,{children:"list"})," \u0441\u043E\u0437\u0434\u0430\u0435\u0442\u0441\u044F \u0441\u0432\u043E\u0439 ",(0,i.jsx)(n.em,{children:"div"})," ",(0,i.jsx)(n.em,{children:"card"}),", \u0432 \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u043E\u043C\u0435\u0449\u0430\u044E\u0442\u0441\u044F \u043D\u0443\u0436\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430.\n\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u044F \u043F\u043E\u043B\u0435\u0439 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0442 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044E \u0441\u0432\u043E\u0439\u0441\u0442\u0432 \u043D\u0430 \u0444\u043E\u0440\u043C\u0435. \u041F\u0440\u0438 \u043F\u043E\u043C\u043E\u0449\u0438 \u043C\u0435\u0442\u043E\u0434\u0430 ",(0,i.jsx)(n.em,{children:"isCurrent"})," \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442\u0441\u044F, \u043A\u0430\u043A\u043E\u0439 \u043E\u0431\u044A\u0435\u043A\u0442 \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0442\u0435\u043A\u0443\u0449\u0438\u043C."]}),"\n",(0,i.jsx)(n.p,{children:"\u0412 \u0441\u0430\u043C\u043E\u043C \u043A\u043E\u043D\u0446\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0438 \u043D\u0430\u0436\u0430\u0442\u0438\u044F \u043A\u043D\u043E\u043F\u043A\u0438 \u043C\u044B\u0448\u0438 \u043D\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443 \u0442\u043E\u0432\u0430\u0440\u0430."}),"\n",(0,i.jsxs)(n.p,{children:["\u041F\u043E \u043E\u0434\u0438\u043D\u043E\u0447\u043D\u043E\u043C\u0443 \u043D\u0430\u0436\u0430\u0442\u0438\u044E \u0443 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u043B\u0435\u0440\u0430 \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043C\u0435\u0442\u043E\u0434 ",(0,i.jsx)(n.em,{children:"changeObject"}),",\n\u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0438\u0437\u043C\u0435\u043D\u044F\u0435\u0442 \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u043E\u0431\u044A\u0435\u043A\u0442. \u0412\u0442\u043E\u0440\u043E\u0439 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 (",(0,i.jsx)(n.em,{children:"rendered"}),") \u043D\u0435 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F (\u0442\u043E \u0435\u0441\u0442\u044C \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \u0440\u0430\u0432\u043D\u044B\u043C ",(0,i.jsx)(n.em,{children:"false"}),"), \u0447\u0442\u043E \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043E \u0441\u0435\u0440\u0432\u0435\u0440 \u0434\u043E\u043B\u0436\u0435\u043D \u0432 \u0438\u0442\u043E\u0433\u0435 \u0432\u044B\u0437\u0432\u0430\u0442\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u044E ",(0,i.jsx)(n.em,{children:"update"})," \u0441 \u043D\u043E\u0432\u044B\u043C \u0441\u043F\u0438\u0441\u043A\u043E\u043C \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 (\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0442\u0435\u043C \u0436\u0435).\n\u0422\u0430\u043A \u043A\u0430\u043A \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043C\u0435\u0442\u043E\u0434\u0430 ",(0,i.jsx)(n.em,{children:"isCurrent"})," \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u0441\u044F, \u0442\u043E \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E\u0435 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043A\u0430\u0440\u0442\u043E\u0447\u0435\u043A \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0438\u0437\u043C\u0435\u043D\u0438\u0442 \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0439 \u043E\u0431\u044A\u0435\u043A\u0442 \u0432 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0435."]}),"\n",(0,i.jsxs)(n.p,{children:["\u041F\u043E \u0434\u0432\u043E\u0439\u043D\u043E\u043C\u0443 \u043D\u0430\u0436\u0430\u0442\u0438\u044E \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043C\u0435\u0442\u043E\u0434 ",(0,i.jsx)(n.em,{children:"changeProperty"}),", \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0438\u0437\u043C\u0435\u043D\u044F\u0435\u0442 \u0442\u0435\u043A\u0443\u0449\u0435\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 ",(0,i.jsx)(n.em,{children:"edit"})," \u0434\u043B\u044F \u043E\u0431\u044A\u0435\u043A\u0442\u0430, \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u043D\u043E\u0433\u043E \u0432\u0442\u043E\u0440\u044B\u043C \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u043C.\n\u041F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 ",(0,i.jsx)(n.em,{children:"edit"})," \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435\u043C, \u0442\u043E \u0442\u0440\u0435\u0442\u0438\u0439 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 - \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0442\u0435\u043A\u0443\u0449\u0435\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430, \u043D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0435\u0442\u0441\u044F, \u0438 \u0432\u043C\u0435\u0441\u0442\u043E \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0431\u0443\u0434\u0435\u0442 \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D \u0432\u044B\u0437\u043E\u0432 \u044D\u0442\u043E\u0433\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F.\n\u0412 \u0434\u0430\u043D\u043D\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043A\u0440\u044B\u0442\u0430 \u0444\u043E\u0440\u043C\u0430 \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0442\u043E\u0432\u0430\u0440\u0430."]}),"\n",(0,i.jsxs)(n.p,{children:["\u0427\u0442\u043E\u0431\u044B \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u0438\u0442\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u0438 ",(0,i.jsx)(n.em,{children:"render"})," \u0438 ",(0,i.jsx)(n.em,{children:"update"})," \u0432 \u043E\u0434\u043D\u0443, \u0441\u043E\u0437\u0434\u0430\u0435\u0442\u0441\u044F \u0444\u0443\u043D\u043A\u0446\u0438\u044F ",(0,i.jsx)(n.em,{children:"itemCards"}),", \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0438\u0445 \u0432\u043D\u0443\u0442\u0440\u0438 \u043E\u0434\u043D\u043E\u0433\u043E \u043E\u0431\u044A\u0435\u043A\u0442\u0430:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"function itemCards() {\n    return {\n        render: function (element, controller) => {\n            ...\n        },\n        update: function (element, controller, list) {\n            ...\n        }\n    }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u0414\u043B\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0434\u0438\u0437\u0430\u0439\u043D\u0430 \u0441\u043E\u0437\u0434\u0430\u0434\u0438\u043C \u0444\u0430\u0439\u043B ",(0,i.jsx)(n.em,{children:"itemcards.css"}),", \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0442\u0430\u043A\u0436\u0435 \u043F\u043E\u043C\u0435\u0441\u0442\u0438\u043C \u0432 \u043F\u0430\u043F\u043A\u0443 ",(0,i.jsx)(n.em,{children:"resources/web"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".item-cards {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n    grid-auto-rows: 200px;\n    grid-gap: 10px;\n}\n\n.item-card {\n    cursor: pointer;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n    align-items: center;\n    padding: 8px;\n}\n.item-card-current {\n    background-color: lightblue;\n}\n\n.item-card-image {\n    flex: 1;\n    min-height: 100px;\n}\n\n.item-card-price {\n    font-weight: bold;\n}\n\n.item-card-name {\n    color: gray;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u0414\u043B\u044F \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u0438 \u043E\u0442\u043A\u0440\u044B\u0442\u0438\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435, \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0438\u0441\u044C \u0441\u043E\u0437\u0434\u0430\u043D\u043D\u044B\u0435 js \u0438 css \u0444\u0430\u0439\u043B\u044B, \u043D\u0443\u0436\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0438\u0445 \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044E \u0432 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0438 ",(0,i.jsx)(n.em,{children:"onWebClientInit"})," \u043F\u0443\u0442\u0435\u043C \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0438\u043C\u0435\u043D\u0438 \u0444\u0430\u0439\u043B\u0430 \u0432 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E ",(0,i.jsx)(n.em,{children:"onWebClientInit(STRING)"}),". \u0427\u0438\u0441\u043B\u043E\u0432\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0434\u043B\u044F \u0437\u0430\u0434\u0430\u043D\u0438\u044F \u043F\u043E\u0440\u044F\u0434\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"onWebClientInit() + {\n    onWebClientInit('itemcards.js') <- 1;\n    onWebClientInit('itemcards.css') <- 2;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u0412 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u0432\u0448\u0430\u044F\u0441\u044F \u0444\u043E\u0440\u043C\u0430 \u0431\u0443\u0434\u0435\u0442 \u0432\u044B\u0433\u043B\u044F\u0434\u0435\u0442\u044C \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C:\n",(0,i.jsx)(n.img,{src:r(40429).Z+"",width:"1509",height:"679"})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},40429:function(e,n,r){r.d(n,{Z:function(){return t}});let t=r.p+"assets/images/How-to_Custom_components_objects-bd4ea5401bf0f161e5521d35011f8e5d.png"},50065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return c}});var t=r(67294);let i={},s=t.createContext(i);function c(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);