(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[97384],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71706:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(74034),a=n(79973),o=(n(67294),n(3905)),l=["components"],i={title:"Internal call (INTERNAL)"},s=void 0,c={unversionedId:"Internal_call_INTERNAL",id:"version-v4/Internal_call_INTERNAL",isDocsHomePage:!1,title:"Internal call (INTERNAL)",description:"The internal call operator allows to create actions in programming languages other than the lsFusion language. The platform currently supports external actions only in the Java language.",source:"@site/versioned_docs/version-v4/Internal_call_INTERNAL.md",sourceDirName:".",slug:"/Internal_call_INTERNAL",permalink:"/Internal_call_INTERNAL",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Internal_call_INTERNAL.md",tags:[],version:"v4",lastUpdatedAt:1625651520,formattedLastUpdatedAt:"7/7/2021",frontMatter:{title:"Internal call (INTERNAL)"},sidebar:"version-v4/learn",previous:{title:"Overview",permalink:"/Access_to_an_internal_system_INTERNAL_FORMULA"},next:{title:"Custom formula (FORMULA)",permalink:"/Custom_formula_FORMULA"}},u=[{value:"Language",id:"language",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"internal call")," operator allows to create actions in programming languages other than the lsFusion language. The platform currently supports external actions only in the Java language."),(0,o.kt)("p",null,"This operator also makes it possible to directly specify the source for an action in Java, as well as the name of a Java class for which the bytecode is located in a separate Java file. In the second case it is assumed that the file is within the classpath of the server's virtual machine; the Java class itself must inherit from ",(0,o.kt)("inlineCode",{parentName:"p"},"lsfusion.server.physics.dev.integration.internal.to.InternalAction"),". The class's ",(0,o.kt)("inlineCode",{parentName:"p"},"executeInternal(lsfusion.server.logics.action.controller.context.ExecutionContext context)")," method will be executed."),(0,o.kt)("p",null,"This operator allows to specify which classes the action created can take, and whether or not it can take ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL")," values. If the specified conditions are not met, the created action is not executed: control simply passes to the next action."),(0,o.kt)("h3",{id:"language"},"Language"),(0,o.kt)("p",null,"To declare an action implemented in Java use the  ",(0,o.kt)("a",{parentName:"p",href:"/INTERNAL_operator"},(0,o.kt)("inlineCode",{parentName:"a"},"INTERNAL")," operator"),"."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"showOnMap 'Show on map' \n    INTERNAL 'lsfusion.server.logics.classes.data.utils.geo.ShowOnMapAction' (DOUBLE, DOUBLE, MapProvider, BPSTRING[100]);\n\nserviceDBMT 'DB maintenance (multithreaded, threadCount, timeout)' \n    INTERNAL 'lsfusion.server.physics.admin.service.action.ServiceDBMultiThreadAction' (INTEGER, INTEGER) NULL;\n\nprintlnAction 'Print text to the console' INTERNAL <{System.out.println(\"action test\"); }>;\n// here context is a parameter of executeInternal method\nsetNoCancelInTransaction() INTERNAL <{ context.getSession().setNoCancelInTransaction(true); }>; \n")))}m.isMDXComponent=!0}}]);