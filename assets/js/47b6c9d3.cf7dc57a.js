(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[15737],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return f},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},f=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,m=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return r?n.createElement(m,o(o({ref:t},f),{},{components:r})):n.createElement(m,o({ref:t},f))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},66301:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return f},default:function(){return u}});var n=r(74034),a=r(79973),i=(r(67294),r(3905)),o=["components"],l={title:"Read file (READ)"},p=void 0,s={unversionedId:"Read_file_READ",id:"version-v4/Read_file_READ",isDocsHomePage:!1,title:"Read file (READ)",description:"The read file operator creates an action that reads a file from a defined source and writes this file to the specified local data property without parameters.",source:"@site/versioned_docs/version-v4/Read_file_READ.md",sourceDirName:".",slug:"/Read_file_READ",permalink:"/Read_file_READ",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Read_file_READ.md",tags:[],version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{title:"Read file (READ)"},sidebar:"version-v4/learn",previous:{title:"Overview",permalink:"/File_operators"},next:{title:"Write file (WRITE)",permalink:"/Write_file_WRITE"}},f=[{value:"Language",id:"language",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],c={toc:f};function u(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"read file")," operator creates an ",(0,i.kt)("a",{parentName:"p",href:"/Actions"},"action")," that reads a file from a defined source and ",(0,i.kt)("a",{parentName:"p",href:"/Property_change_CHANGE"},"writes")," this file to the specified local ",(0,i.kt)("a",{parentName:"p",href:"/Data_properties_DATA"},"data")," property without parameters."),(0,i.kt)("p",null,"The source is defined as a ",(0,i.kt)("a",{parentName:"p",href:"/Properties"},"property")," which values are instances of ",(0,i.kt)("a",{parentName:"p",href:"/Built-in_classes"},"string classes"),". The following types of data sources (URLs) are supported: FILE, HTTP, HTTPS, FTP, SFTP, JDBC, MDB."),(0,i.kt)("h3",{id:"language"},"Language"),(0,i.kt)("p",null,"To declare an action that reads a file, use the ",(0,i.kt)("a",{parentName:"p",href:"/READ_operator"},(0,i.kt)("inlineCode",{parentName:"a"},"READ")," operator"),"."),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"readFiles()  {\n\n    LOCAL importFile = FILE ();\n\n    //reading from FTP\n    READ 'ftp://ftp.lsfusion.org/file.xlsx' TO importFile;\n    //reading from SFTP\n    READ 'sftp://sftp.lsfusion.org/file.xlsx' TO importFile;\n    //reading from FILE\n    READ 'D://lsfusion/file.xlsx' TO importFile;\n    READ 'file://D://lsfusion/file.xlsx' TO importFile;\n}\n\nconnectionString = DATA STRING[100]();\nimportXls 'Import markups'()  {\n    LOCAL importFile = FILE ();\n    READ connectionString() + '@SELECT field1, field2 FROM myTable' TO importFile;\n\n    LOCAL field1 = INTEGER (INTEGER);\n    LOCAL field2 = BPSTRING[10] (INTEGER);\n    IMPORT TABLE FROM importFile() TO field1, field2;\n}\n")))}u.isMDXComponent=!0}}]);