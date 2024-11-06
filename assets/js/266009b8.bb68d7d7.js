"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[78618],{96055:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var t=o(74848),a=o(28453);const r={title:"How-to: Data entry"},s=void 0,i={id:"How-to_Data_entry",title:"How-to: Data entry",description:"Example 1",source:"@site/docs/How-to_Data_entry.md",sourceDirName:".",slug:"/How-to_Data_entry",permalink:"/How-to_Data_entry",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/How-to_Data_entry.md",tags:[],version:"current",lastUpdatedAt:1712682555e3,frontMatter:{title:"How-to: Data entry"},sidebar:"learn",previous:{title:"How-to: Trees",permalink:"/How-to_Trees"},next:{title:"How-to: Navigator",permalink:"/How-to_Navigator"}},l={},d=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3}];function c(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsx)(n.h3,{id:"task",children:"Task"}),"\n",(0,t.jsx)(n.p,{children:"We have a form that displays a list of books. We need to implement an option for entering a name only in upper case. Group change, copy&paste, and similar features must also be supported."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[100] (Book);\n\nFORM books\n     OBJECTS b = Book\n;\n\nNAVIGATOR {\n    NEW books;\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"solution",children:"Solution"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:'changeName(Book b)  {\n    // inputting ISTRING[100] "to parameter" s \n    // (automatically wrapped in REQUEST, that is, group changd, PASTE, etc. are available)\n    INPUT s = ISTRING[100] \n        DO // checking for requestCanceled\n             name(b) <- s;\n}\n\nEXTEND FORM books\n    PROPERTIES (b) name ON CHANGE changeName(b)\n;\n'})}),"\n",(0,t.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsx)(n.h3,{id:"task-1",children:"Task"}),"\n",(0,t.jsx)(n.p,{children:"We have a form that displays a list of books. In this form, the user can specify a genre, so that only books of this genre will be displayed. We also have a form containing the list of orders where you can also apply a filter by genre. Each book has a restricted/allowed flag, and the order may contain only allowed books."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:"CLASS Genre 'Genre';\nname 'Name' = DATA ISTRING[100] (Genre);\n\ngenre 'Genre' = DATA Genre (Book);\nisForbidden 'Prohibition' = DATA BOOLEAN (Book);\n\nCLASS Order 'Order';\nbook 'Book' = DATA Book (Order);\nnameBook 'Book name' (Order o) = name(book(o));\n\ndate 'Date' = DATA DATE (Order);\nnumber 'Number' = DATA STRING[100] (Order);\n\nCONSTRAINT isForbidden(book(Order o))\n    CHECKED BY book MESSAGE 'It is forbidden to choose this book';\n\nFORM booksByGenre\n     OBJECTS g = Genre PANEL\n     PROPERTIES (g) name\n     OBJECTS b = Book\n     PROPERTIES (b) name\n;\n\n\nFORM orders 'Orders'\n    OBJECTS g = Genre PANEL\n    PROPERTIES (g) name\n\n    OBJECTS o = Order\n    PROPERTIES(o) READONLY date, number\n    FILTERS g == genre(book(o))\n;\n\nNAVIGATOR {\n    NEW orders;\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"We need to replace the book selection mechanism on the order form so that the genre selection form is called. Additional requirements:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The genre specified in the order form must be set as default value for the filter by genre"}),"\n",(0,t.jsx)(n.li,{children:"The current book from the order must be set as default value (if it has been selected)"}),"\n",(0,t.jsx)(n.li,{children:'The book in the order must be resettable (i. e. it must be possible to set the "Undefined" value)'}),"\n",(0,t.jsx)(n.li,{children:"Only allowed books can be selected"}),"\n",(0,t.jsx)(n.li,{children:"Group change, copy&paste, and similar features must also be supported for the field."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"solution-1",children:"Solution"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lsf",children:'changeNameBook(Genre g, Order o)  {\n    // (automatically wrapped in REQUEST, that is, group changes, PASTE, etc. are available)\n    DIALOG booksByGenre OBJECTS \n          g = g NULL, // NULL input allowed\n          b = book(o) NULL INPUT bk NULL CONSTRAINTFILTER\n          // book(o) NULL - substituting book(o) to the input (if necessary, the input can be omitted, that is, \n          //   the user can simply write b INPUT ..., which in turn is equivalent to b=NULL NULL INPUT ...)\n          // INPUT bk NULL - returning the value of this object "to parameter" bk (return NULL is allowed, that is, \n          //   there will be a reset button). Since the TO option is not specified, the result will be written \n          //   to the requestedObject\n          // CONSTRAINTFILTER - taking into account the constraints for object b on the assumption that the result \n          //   will be written to the property passed to the input (in this case book(o)),\n          //   if necessary, another expression can be specified in the form CONSTRAINTFILTER = dataBook(o)\n    DO // checking for requestCanceled\n        book(o) <- bk;\n}\n\nEXTEND FORM orders\n    PROPERTIES (o) nameBook ON CHANGE changeNameBook(g, o)\n;\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>i});var t=o(96540);const a={},r=t.createContext(a);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);