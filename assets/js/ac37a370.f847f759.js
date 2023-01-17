"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[35822],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(n),f=s,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8665:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return a},metadata:function(){return o},toc:function(){return l}});var r=n(83117),s=(n(67294),n(3905));const a={title:"Access from an internal system"},i=void 0,o={unversionedId:"Access_from_an_internal_system",id:"version-v4/Access_from_an_internal_system",title:"Access from an internal system",description:"Java interaction",source:"@site/versioned_docs/version-v4/Access_from_an_internal_system.md",sourceDirName:".",slug:"/Access_from_an_internal_system",permalink:"/v4/Access_from_an_internal_system",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Access_from_an_internal_system.md",tags:[],version:"v4",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"Jun 9, 2021",frontMatter:{title:"Access from an internal system"},sidebar:"version-v4/learn",previous:{title:"Access from an external system",permalink:"/v4/Access_from_an_external_system"},next:{title:"Access to an external system (EXTERNAL)",permalink:"/v4/Access_to_an_external_system_EXTERNAL"}},c={},l=[{value:"Java interaction",id:"java-interaction",level:3},{value:"SQL interaction",id:"sql-interaction",level:3},{value:"Examples",id:"examples",level:3}],u={toc:l};function m(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"java-interaction"},"Java interaction"),(0,s.kt)("p",null,"In this type of interaction, the internal system can directly access the Java elements of the lsFusion system (as with ordinary Java objects). This means you can perform all the same operations as when using network protocols, while avoiding the significant overhead of such interaction (such as serialization of parameters/deserialization of the result, etc.). In addition, this method of communication is much more convenient and efficient if the interaction is very close (i.e., the process of performing one operation requires constant access to both sides \u2013 from the lsFusion system to another system and vice versa) and/or requires access to particular platform units."),(0,s.kt)("p",null,"It is worth noting that in order to access the Java elements of the lsFusion system directly, you must first obtain a link to an object that will have interfaces for finding these Java elements. This is usually done in one of two ways:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"If the initial call comes from the lsFusion system via the ",(0,s.kt)("a",{parentName:"li",href:"/v4/Access_to_an_internal_system_INTERNAL_FORMULA#javato"},"Java interaction"),' mechanism, the action object "through which" the call is done may be used as the "search object" (the class of this action must be inherited from ',(0,s.kt)("inlineCode",{parentName:"li"},"lsfusion.server.physics.dev.integration.internal.to.InternalAction"),", which in turn has all the required interfaces)."),(0,s.kt)("li",{parentName:"ol"},"If the object from whose method the lsFusion system must be accessed is a Spring bean, a link to the business logic object can be obtained using dependency injection (the bean is accordingly called ",(0,s.kt)("inlineCode",{parentName:"li"},"businessLogics"),").")),(0,s.kt)("h3",{id:"sql-interaction"},"SQL interaction"),(0,s.kt)("p",null,"Systems that have access to the SQL server of the lsFusion system (one such system, for example, is the SQL server itself) can directly access ",(0,s.kt)("a",{parentName:"p",href:"/v4/Tables"},"tables")," and ",(0,s.kt)("a",{parentName:"p",href:"/v4/Materializations"},"fields")," created by the lsFusion system using SQL server means. It should be kept in mind that while reading data is relatively safe (except for possible deletion/modification of tables and their fields), when writing data no ",(0,s.kt)("a",{parentName:"p",href:"/v4/Events"},"events")," will be triggered (including all elements that use them - ",(0,s.kt)("a",{parentName:"p",href:"/v4/Constraints"},"constraints"),", ",(0,s.kt)("a",{parentName:"p",href:"/v4/Aggregations"},"aggregations"),", etc.), and also no ",(0,s.kt)("a",{parentName:"p",href:"/v4/Materializations"},"materializations")," will be recalculated. For this reason writing data directly to lsFusion system tables is highly discouraged. If doing so is necessary, all of the above factors should be taken into account."),(0,s.kt)("h3",{id:"examples"},"Examples"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'package lsfusion.server.logics.property.actions;\n\nimport lsfusion.base.BaseUtils;\nimport lsfusion.base.col.interfaces.immutable.ImMap;\nimport lsfusion.interop.remote.UserInfo;\nimport lsfusion.server.classes.ValueClass;\nimport lsfusion.server.data.SQLHandledException;\nimport lsfusion.server.logics.AuthenticationLogicsModule;\nimport lsfusion.server.logics.DataObject;\nimport lsfusion.server.logics.linear.LCP;\nimport lsfusion.server.logics.property.CalcProperty;\nimport lsfusion.server.logics.property.ClassPropertyInterface;\nimport lsfusion.server.logics.property.ExecutionContext;\nimport lsfusion.server.logics.scripted.ScriptingActionProperty;\nimport lsfusion.server.logics.scripted.ScriptingErrorLog;\n\nimport java.sql.SQLException;\nimport java.util.Iterator;\nimport java.util.Random;\n\npublic class GenerateLoginPasswordActionProperty extends ScriptingActionProperty {\n\n    private LCP email;\n    private LCP loginCustomUser;\n    private LCP sha256PasswordCustomUser;\n\n    private final ClassPropertyInterface customUserInterface;\n\n    public GenerateLoginPasswordActionProperty(AuthenticationLogicsModule LM, ValueClass... classes) throws ScriptingErrorLog.SemanticErrorException {\n        super(LM, classes);\n\n        this.email = findProperty("email[Contact]");\n        this.loginCustomUser = findProperty("login[CustomUser]");\n        this.sha256PasswordCustomUser = findProperty("sha256Password[CustomUser]");\n\n        Iterator<ClassPropertyInterface> i = interfaces.iterator();\n        customUserInterface = i.next();\n    }\n\n    public void executeCustom(ExecutionContext<ClassPropertyInterface> context) throws SQLException, SQLHandledException {\n        DataObject userObject = context.getDataKeyValue(customUserInterface);\n\n        String currentEmail = (String) email.read(context, userObject);\n\n        String login;\n        int indexMail;\n        if(currentEmail != null && (indexMail = currentEmail.indexOf("@"))>=0)\n            login = currentEmail.substring(0, indexMail);\n        else\n            login = "login" + userObject.object;\n\n        Random rand = new Random();\n        String chars = "0123456789abcdefghijklmnopqrstuvwxyz";\n        String password = "";\n        for(int i=0;i<8;i++)\n            password += chars.charAt(rand.nextInt(chars.length()));\n\n        if (loginCustomUser.read(context, userObject) == null)\n            loginCustomUser.change(login, context, userObject);\n        String sha256Password = BaseUtils.calculateBase64Hash("SHA-256", password, UserInfo.salt);\n        sha256PasswordCustomUser.change(sha256Password, context, userObject);\n    }\n}\n')))}m.isMDXComponent=!0}}]);