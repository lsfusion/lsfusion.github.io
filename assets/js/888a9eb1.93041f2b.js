(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[91946],{3905:function(t,n,e){"use strict";e.d(n,{Zo:function(){return p},kt:function(){return g}});var l=e(67294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,l)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function u(t,n){if(null==t)return{};var e,l,r=function(t,n){if(null==t)return{};var e,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)e=a[l],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)e=a[l],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var s=l.createContext({}),o=function(t){var n=l.useContext(s),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},p=function(t){var n=o(t.components);return l.createElement(s.Provider,{value:n},t.children)},k={inlineCode:"code",wrapper:function(t){var n=t.children;return l.createElement(l.Fragment,{},n)}},c=l.forwardRef((function(t,n){var e=t.components,r=t.mdxType,a=t.originalType,s=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),c=o(e),g=r,m=c["".concat(s,".").concat(g)]||c[g]||k[g]||a;return e?l.createElement(m,i(i({ref:n},p),{},{components:e})):l.createElement(m,i({ref:n},p))}));function g(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var a=e.length,i=new Array(a);i[0]=c;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=t,u.mdxType="string"==typeof t?t:r,i[1]=u;for(var o=2;o<a;o++)i[o]=e[o];return l.createElement.apply(null,i)}return l.createElement.apply(null,e)}c.displayName="MDXCreateElement"},57629:function(t,n,e){"use strict";e.r(n),e.d(n,{frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var l=e(22122),r=e(19756),a=(e(67294),e(3905)),i={title:"Literals"},u={unversionedId:"Literals",id:"Literals",isDocsHomePage:!1,title:"Literals",description:"|Name|Example|Class|Description|Constraints|",source:"@site/docs/Literals.md",sourceDirName:".",slug:"/Literals",permalink:"/next/Literals",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Literals.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",frontMatter:{title:"Literals"},sidebar:"learn",previous:{title:"IDs",permalink:"/next/IDs"},next:{title:"Instructions",permalink:"/next/Instructions"}},s=[],o={toc:s};function p(t){var n=t.components,e=(0,r.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,l.Z)({},o,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Example"),(0,a.kt)("th",{parentName:"tr",align:null},"Class"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Constraints"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{class:"content-wrapper"},(0,a.kt)("br",null),"String literal",(0,a.kt)("br",null))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("strong",null,"'text'")),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",null,"'line1\\nline2'")),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",null,"'{system.cancel}'"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",null,"STRING","[N]",", TEXT, ITEXT")),(0,a.kt)("td",{parentName:"tr",align:null},"A sequence of characters enclosed in single quotes, allowing to use the special sequences '\\n', '\\r', '\\t'. To specify single quote and backslash characters, use the escape sequences '\\'' and '","\\","'. A string literal can also be a ",(0,a.kt)("a",{parentName:"td",href:"/next/Internationalization"},"localizable")," string. In this case the literal's class will be ",(0,a.kt)("strong",null,"TEXT"),", and instead of the characters '{' and '}' it is necessary to use the special sequences '","{","' and '","}","' respectively. If a string literal does not use localization capabilities, then the literal's class will be ",(0,a.kt)("strong",null,"STRING","[N]")," where ",(0,a.kt)("strong",null,"N")," is the number of characters in the string."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("br",null),(0,a.kt)("br",null))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{class:"content-wrapper"},(0,a.kt)("br",null),"Integer literal (int)",(0,a.kt)("br",null))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("strong",null,"56")),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",null,"-32")),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",null,"1000000000"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",null,"INTEGER")),(0,a.kt)("td",{parentName:"tr",align:null},"A sequence of numbers with an optional minus sign at the beginning"),(0,a.kt)("td",{parentName:"tr",align:null},"32-bit signed integers")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{class:"content-wrapper"},(0,a.kt)("br",null),"Integer literal (long)",(0,a.kt)("br",null))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("strong",null,"56L")),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",null,"-32L")),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",null,"1000000000000L"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",null,"LONG")),(0,a.kt)("td",{parentName:"tr",align:null},"A sequence of numbers with an optional minus sign at the beginning and the letter L (uppercase or lowercase) at the end"),(0,a.kt)("td",{parentName:"tr",align:null},"64-bit signed integers")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{class:"content-wrapper"},(0,a.kt)("br",null),"Floating-point literal",(0,a.kt)("br",null))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("strong",null,"3d")),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",null,"4.25D")),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",null,"-2.125D"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",null,"DOUBLE")),(0,a.kt)("td",{parentName:"tr",align:null},"A sequence of numbers specifying the integer part, then a dot, then a sequence of numbers specifying the fractional part (possibly empty), then the letter D (uppercase or lowercase). With an optional minus sign at the beginning."),(0,a.kt)("td",{parentName:"tr",align:null},"64-bit floating point number")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{class:"content-wrapper"},(0,a.kt)("br",null),(0,a.kt)("strong",null,"NUMERIC")," class literal",(0,a.kt)("br",null))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("strong",null,"3")),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",null,"4.25")),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",null,"-2.125"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",null,"NUMERIC","[N,M]")),(0,a.kt)("td",{parentName:"tr",align:null},"A sequence of numbers specifying the integer part, then a dot, then a sequence of numbers specifying the fractional part (possibly empty). With an optional minus sign at the beginning."),(0,a.kt)("td",{parentName:"tr",align:null},"The number of digits of the integer and fractional parts of a literal is determined by its class")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{class:"content-wrapper"},(0,a.kt)("br",null),"Logical literal",(0,a.kt)("br",null))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",null,"TRUE")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",null,"BOOLEAN")),(0,a.kt)("td",{parentName:"tr",align:null},"Keyword ",(0,a.kt)("strong",null,"TRUE")),(0,a.kt)("td",{parentName:"tr",align:null},"The opposite value is the special value ",(0,a.kt)("strong",null,"NULL"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{class:"content-wrapper"},(0,a.kt)("br",null),(0,a.kt)("strong",null,"DATE")," class literal",(0,a.kt)("br",null))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("strong",null,"1982_07_13")),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",null,"2000_01_25"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",null,"DATE")),(0,a.kt)("td",{parentName:"tr",align:null},"Date in the format ",(0,a.kt)("strong",null,"YYYY_MM_DD"),". Four digits specifying the year, an underscore, two digits for the month, an underscore, and two digits for the day."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("br",null),(0,a.kt)("br",null))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{class:"content-wrapper"},(0,a.kt)("br",null),(0,a.kt)("strong",null,"TIME")," class literal",(0,a.kt)("br",null))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("strong",null,"12:05")),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",null,"00:59"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",null,"TIME")),(0,a.kt)("td",{parentName:"tr",align:null},"Time in the format ",(0,a.kt)("strong",null,"HH:mm"),". Two digits for the hours, a colon and two digits for the minutes."),(0,a.kt)("td",{parentName:"tr",align:null},"Hours from 0 to 23, minutes from 0 to 59")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{class:"content-wrapper"},(0,a.kt)("br",null),"Literal of class ",(0,a.kt)("strong",null,"DATETIME"),(0,a.kt)("br",null))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",null,"1982_07_13_12:05")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",null,"DATETIME")),(0,a.kt)("td",{parentName:"tr",align:null},"Date and time in the format ",(0,a.kt)("strong",null,"YYYY_MM_DD_HH:mm")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("br",null),(0,a.kt)("br",null))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{class:"content-wrapper"},(0,a.kt)("br",null),(0,a.kt)("strong",null,"COLOR")," class literal",(0,a.kt)("br",null))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("strong",null,"RGB(255, 0, 204)")),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",null,"#FF00CC"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",null,"COLOR")),(0,a.kt)("td",{parentName:"tr",align:null},"Two definition forms. The first is the keyword ",(0,a.kt)("strong",null,"RGB"),", then comma-separated values for the red, green, and blue components in parentheses. The second is the pound sign, then the values of the red, blue, and green components in hexadecimal format, using two characters per component. ",(0,a.kt)("strong",null)),(0,a.kt)("td",{parentName:"tr",align:null},"Each number is from 0 to 255. In hexadecimal representation, you can use both uppercase and lowercase characters")))))}p.isMDXComponent=!0}}]);