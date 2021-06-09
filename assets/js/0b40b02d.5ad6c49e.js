(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[50916],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},N=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),N=s(n),u=a,c=N["".concat(p,".").concat(u)]||N[u]||m[u]||i;return n?r.createElement(c,l(l({ref:t},d),{},{components:n})):r.createElement(c,l({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=N;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}N.displayName="MDXCreateElement"},98232:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p},default:function(){return d}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),l={title:"String operators (+, CONCAT, SUBSTRING)"},o={unversionedId:"String_operators_+_CONCAT_SUBSTRING_",id:"version-v4/String_operators_+_CONCAT_SUBSTRING_",isDocsHomePage:!1,title:"String operators (+, CONCAT, SUBSTRING)",description:"String operators are operators which parameters and result are the properties which values are instances of the string classes. The platform currently supports the following string operators:",source:"@site/versioned_docs/version-v4/String_operators_+_CONCAT_SUBSTRING_.md",sourceDirName:".",slug:"/String_operators_+_CONCAT_SUBSTRING_",permalink:"/String_operators_+_CONCAT_SUBSTRING_",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/String_operators_+_CONCAT_SUBSTRING_.md",version:"v4",lastUpdatedAt:1620140923,formattedLastUpdatedAt:"5/4/2021",frontMatter:{title:"String operators (+, CONCAT, SUBSTRING)"},sidebar:"version-v4/learn",previous:{title:"Extremum (MAX, MIN)",permalink:"/Extremum_MAX_MIN_"},next:{title:"Structure operators (STRUCT, [])",permalink:"/Structure_operations_STRUCT_"}},p=[{value:"Determining the result class",id:"determining-the-result-class",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"String operators are operators which parameters and result are the properties which values are instances of the string classes. The platform currently supports the following string operators:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Operator"),(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"),(0,i.kt)("th",{parentName:"tr",align:null},"Result"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"+"),",","\xa0",(0,i.kt)("a",{parentName:"td",href:"/CONCAT_operator"},(0,i.kt)("inlineCode",{parentName:"a"},"CONCAT"))),(0,i.kt)("td",{parentName:"tr",align:null},"Concatenation"),(0,i.kt)("td",{parentName:"tr",align:null},"Takes two operands and returns a string obtained by concatenating the strings specified in the operands"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'a' + 'b'")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'ab'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"SUBSTRING")),(0,i.kt)("td",{parentName:"tr",align:null},"Substring"),(0,i.kt)("td",{parentName:"tr",align:null},"Takes three operands and returns a substring obtained from the string specified in the first operand, starting with the character specified in the second operand, and having length specified in the third operand"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"SUBSTRING('abc', 2, 2)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'bc'"))))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"SUBSTRING")," operators return ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL")," if one of the operands is ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"CONCAT")," operator treats ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL")," value of the operand as an empty string (however, concatenation of two ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL")," values still returns ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL"),"). Also, in the ",(0,i.kt)("inlineCode",{parentName:"p"},"CONCAT")," operator you can optionally specify the third operand (",(0,i.kt)("em",{parentName:"p"},"delimiter"),") which will be inserted if and only if both operands are not ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL"),". For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"CONCAT ' ', 'John', 'Smith'")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"'John Smith'"),", but ",(0,i.kt)("inlineCode",{parentName:"p"},"CONCAT ' ', 'John', NULL")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"'John'"),"."),(0,i.kt)("h3",{id:"determining-the-result-class"},"Determining the result class"),(0,i.kt)("p",null,"The result class is defined as:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Operator"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"+"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"CONCAT")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"result = STRING[p1.blankPadded AND p2.blankPadded, p1.caseInsensitive OR p2.caseInsensitive, p1.length + p2.length]"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"SUBSTRING(p, from, length)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"result = STRING[p.blankPadded, p.caseInsensitive, length]"))))),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"blankPadded"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"caseInsensitive")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"length")," are determined similarly to the rules for construction of a common ancestor for two built-in classes (Strings family)."),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," operator, operands which classes are other than string are cast to strings in accordance with the following table:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Class"),(0,i.kt)("th",{parentName:"tr",align:null},"Cast class"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DATE"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"DATETIME"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"TIME")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STRING[25]"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"NUMERIC")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STRING[p.length]"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"LOGICAL")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STRING[1]"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"FILE")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"TEXT"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/User_classes"},"Object")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STRING[10]"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Other"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STRING[8]"))))),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Person;\nfirstName = DATA STRING[100] (Person);\nmiddleName = DATA STRING[100] (Person);\nlastName = DATA STRING[100] (Person);\n\nfullName(Person p) = CONCAT ' ', firstName(p), middleName(p), lastName(p);     // if some part of the name is not specified, then this part will be skipped along with a space\n")))}d.isMDXComponent=!0}}]);