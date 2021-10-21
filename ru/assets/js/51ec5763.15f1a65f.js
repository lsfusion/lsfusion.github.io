(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[88850],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},45497:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=t(74034),a=t(79973),l=(t(67294),t(3905)),i=["components"],o={title:"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u0434\u0430"},p=void 0,c={unversionedId:"Coding_conventions",id:"Coding_conventions",isDocsHomePage:!1,title:"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u0434\u0430",description:"\u041e\u0431\u0449\u0438\u0435",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/Coding_conventions.md",sourceDirName:".",slug:"/Coding_conventions",permalink:"/ru/next/Coding_conventions",editUrl:"https://github.com/lsfusion/platform/edit/master/docs/ru/Coding_conventions.md",tags:[],version:"current",lastUpdatedAt:1622042248,formattedLastUpdatedAt:"26.05.2021",frontMatter:{title:"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u0434\u0430"},sidebar:"learn",previous:{title:"\u041f\u0443\u0441\u0442\u0430\u044f \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f",permalink:"/ru/next/Empty_statement"},next:{title:"IDE",permalink:"/ru/next/IDE"}},s=[{value:"\u041e\u0431\u0449\u0438\u0435",id:"\u043e\u0431\u0449\u0438\u0435",children:[],level:3},{value:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f",id:"\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f",children:[],level:3},{value:"\u0424\u043e\u0440\u043c\u044b",id:"\u0444\u043e\u0440\u043c\u044b",children:[],level:3}],u={toc:s};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"\u043e\u0431\u0449\u0438\u0435"},"\u041e\u0431\u0449\u0438\u0435"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u0418\u043c\u0435\u043d\u0430 \u043a\u043b\u0430\u0441\u0441\u043e\u0432, \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u0438 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432 \u0438\u043c\u0435\u043d \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0442\u0441\u044f \u0441 \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0431\u0443\u043a\u0432\u044b. \u041e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0438\u043c\u0435\u043d\u0430 (\u0441\u0432\u043e\u0439\u0441\u0442\u0432, \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439, \u0444\u043e\u0440\u043c, \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0438 \u0442. \u0434.) \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0442\u0441\u044f \u0441 \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u043e\u0439 \u0431\u0443\u043a\u0432\u044b. \u0415\u0441\u043b\u0438 \u0438\u043c\u044f \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0441\u043b\u043e\u0432, \u0442\u043e \u043a\u0430\u0436\u0434\u043e\u0435 \u043f\u043e\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 \u0441\u043b\u043e\u0432\u043e \u0432 \u0438\u043c\u0435\u043d\u0438 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0431\u0443\u043a\u0432\u044b."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-lsf"},"MODULE MyModule;\n\nNAMESPACE MyNamespace;\n\nCLASS MyClass 'My Class';\n\nmyProperty 'My Property' = DATA BOOLEAN (MyClass);\nmyAction 'My Action' (MyClass o) {\n    myProperty(o) <- TRUE;\n}\n\nFORM myForm\n;\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f \u043c\u043e\u0434\u0443\u043b\u044f, \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u0438 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432 \u0438\u043c\u0435\u043d \u0434\u043e\u043b\u0436\u043d\u044b \u0440\u0430\u0437\u0434\u0435\u043b\u044f\u0442\u044c\u0441\u044f \u043f\u0443\u0441\u0442\u044b\u043c\u0438 \u0441\u0442\u0440\u043e\u043a\u0430\u043c\u0438:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-lsf"},"MODULE MyModule;\n\nREQUIRE MyModule2;\n\nNAMESPACE MyNamespace;\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b ",(0,l.kt)("inlineCode",{parentName:"p"},"="),", ",(0,l.kt)("inlineCode",{parentName:"p"},"<"),", ",(0,l.kt)("inlineCode",{parentName:"p"},">"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"<="),", ",(0,l.kt)("inlineCode",{parentName:"p"},">="),", ",(0,l.kt)("inlineCode",{parentName:"p"},"+"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"-")," \u043e\u0442\u0434\u0435\u043b\u044f\u044e\u0442\u0441\u044f \u0441 \u043e\u0431\u0435\u0438\u0445 \u0441\u0442\u043e\u0440\u043e\u043d \u043f\u0440\u043e\u0431\u0435\u043b\u0430\u043c\u0438."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-lsf"},"value(x) = 324\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u041f\u043e\u0441\u043b\u0435 \u0437\u0430\u043f\u044f\u0442\u043e\u0439 \u0441\u0442\u0430\u0432\u0438\u0442\u0441\u044f \u043f\u0440\u043e\u0431\u0435\u043b. \u041f\u0435\u0440\u0435\u0434 \u0437\u0430\u043f\u044f\u0442\u043e\u0439 \u043f\u0440\u043e\u0431\u0435\u043b\u0430 \u0431\u044b\u0442\u044c \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-lsf"},"f(x, y, z) = g(x, y, z) + h(x, y);\n\nFORM test\n    OBJECTS a = Class1, b = Class2\n    PROPERTIES VALUE(a), VALUE(b), name(a), name(b)\n;\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043d\u043e\u0432\u043e\u0433\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0438\u043b\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043d\u043e\u0432\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438. \u0415\u0441\u043b\u0438 \u043f\u043e\u0441\u043b\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},";")," \u0435\u0441\u0442\u044c \u0434\u0440\u0443\u0433\u043e\u0439 \u043a\u043e\u0434, \u0442\u043e \u043f\u043e\u0441\u043b\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u0430 \u0441\u0442\u0430\u0432\u0438\u0442\u0441\u044f \u043f\u0440\u043e\u0431\u0435\u043b."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-lsf"},"runAction1 (X x) = { f(x) <- 1; g(x) <- 1; }\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u041f\u0440\u0438 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0438 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0438\u043b\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043c\u0435\u0436\u0434\u0443 \u0438\u043c\u0435\u043d\u0435\u043c \u0438\u043b\u0438 \u0442\u0438\u043f\u043e\u043c \u0438 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u043c ",(0,l.kt)("inlineCode",{parentName:"p"},"(")," \u0441\u0442\u0430\u0432\u0438\u0442\u0441\u044f \u043f\u0440\u043e\u0431\u0435\u043b. \u041f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u043f\u0440\u043e\u0431\u0435\u043b \u043d\u0435 \u0441\u0442\u0430\u0432\u0438\u0442\u0441\u044f."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-lsf"},"nameProperty (MyClass o) = name(property(o));\nmyProperty = DATA STRING[10] (MyClass);\n")))),(0,l.kt)("h3",{id:"\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f"},"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'\u041a\u0430\u0436\u0434\u0430\u044f "\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438 \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u0430\u044f" \u0441\u0442\u0440\u043e\u043a\u0430 \u0441\u043c\u0435\u0449\u0430\u0435\u0442\u0441\u044f \u043e\u0442 \u0432\u0435\u0440\u0445\u043d\u0435\u0439 \u0440\u043e\u0432\u043d\u043e \u043d\u0430 4 \u043f\u0440\u043e\u0431\u0435\u043b\u0430. \u0412\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u043c\u0438 \u0441\u0447\u0438\u0442\u0430\u044e\u0442\u0441\u044f \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043f\u043e\u0441\u043b\u0435 ',(0,l.kt)("inlineCode",{parentName:"li"},"IF"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"FOR"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"WHILE"),", \u0430 \u0442\u0430\u043a\u0436\u0435 \u043f\u043e\u0441\u043b\u0435 \u0441\u0430\u043c\u043e\u0433\u043e \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-lsf"},"IF x = 1 THEN\n    f(a) <- TRUE;\n"))),(0,l.kt)("li",{parentName:"ul"},"\u041f\u0435\u0440\u0435\u0434 \u0438 \u043f\u043e\u0441\u043b\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 ",(0,l.kt)("inlineCode",{parentName:"li"},"{")," \u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"<-")," \u0441\u0442\u0430\u0432\u044f\u0442\u0441\u044f \u043f\u0440\u043e\u0431\u0435\u043b\u044b.",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-lsf"},"FOR f(a) DO {\n    x(a) <- TRUE;\n}\n")),"  \u0438\u043b\u0438",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-lsf"},"FOR f(a) DO { x(a) <- TRUE; }\n")))),(0,l.kt)("h3",{id:"\u0444\u043e\u0440\u043c\u044b"},"\u0424\u043e\u0440\u043c\u044b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0443\u0441\u0442\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u043e\u0439."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM test\n    OBJECTS a = Object\n    PROPERTIES(a) VALUE\n\n    OBJECTS b = Object\n    PROPERTIES(b) VALUE\n;   \n")))))}m.isMDXComponent=!0}}]);