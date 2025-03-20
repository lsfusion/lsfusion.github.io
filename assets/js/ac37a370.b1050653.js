"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["13648"],{765:function(e,t,s){s.r(t),s.d(t,{default:()=>u,frontMatter:()=>a,metadata:()=>n,assets:()=>c,toc:()=>l,contentTitle:()=>o});var n=JSON.parse('{"id":"Access_from_an_internal_system","title":"Access from an internal system","description":"Java interaction","source":"@site/versioned_docs/version-v4/Access_from_an_internal_system.md","sourceDirName":".","slug":"/Access_from_an_internal_system","permalink":"/v4/Access_from_an_internal_system","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/v4/docs/en/Access_from_an_internal_system.md","tags":[],"version":"v4","lastUpdatedAt":1623249583000,"frontMatter":{"title":"Access from an internal system"},"sidebar":"learn","previous":{"title":"Access from an external system","permalink":"/v4/Access_from_an_external_system"},"next":{"title":"Access to an external system (EXTERNAL)","permalink":"/v4/Access_to_an_external_system_EXTERNAL"}}'),i=s("85893"),r=s("50065");let a={title:"Access from an internal system"},o=void 0,c={},l=[{value:"Java interaction",id:"java-interaction",level:3},{value:"SQL interaction",id:"sql-interaction",level:3},{value:"Examples",id:"examples",level:3}];function d(e){let t={a:"a",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h3,{id:"java-interaction",children:"Java interaction"}),"\n",(0,i.jsx)(t.p,{children:"In this type of interaction, the internal system can directly access the Java elements of the lsFusion system (as with ordinary Java objects). This means you can perform all the same operations as when using network protocols, while avoiding the significant overhead of such interaction (such as serialization of parameters/deserialization of the result, etc.). In addition, this method of communication is much more convenient and efficient if the interaction is very close (i.e., the process of performing one operation requires constant access to both sides \u2013 from the lsFusion system to another system and vice versa) and/or requires access to particular platform units."}),"\n",(0,i.jsx)(t.p,{children:"It is worth noting that in order to access the Java elements of the lsFusion system directly, you must first obtain a link to an object that will have interfaces for finding these Java elements. This is usually done in one of two ways:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["If the initial call comes from the lsFusion system via the ",(0,i.jsx)(t.a,{href:"/v4/Access_to_an_internal_system_INTERNAL_FORMULA#javato",children:"Java interaction"}),' mechanism, the action object "through which" the call is done may be used as the "search object" (the class of this action must be inherited from ',(0,i.jsx)(t.code,{children:"lsfusion.server.physics.dev.integration.internal.to.InternalAction"}),", which in turn has all the required interfaces)."]}),"\n",(0,i.jsxs)(t.li,{children:["If the object from whose method the lsFusion system must be accessed is a Spring bean, a link to the business logic object can be obtained using dependency injection (the bean is accordingly called ",(0,i.jsx)(t.code,{children:"businessLogics"}),")."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"sql-interaction",children:"SQL interaction"}),"\n",(0,i.jsxs)(t.p,{children:["Systems that have access to the SQL server of the lsFusion system (one such system, for example, is the SQL server itself) can directly access ",(0,i.jsx)(t.a,{href:"/v4/Tables",children:"tables"})," and ",(0,i.jsx)(t.a,{href:"/v4/Materializations",children:"fields"})," created by the lsFusion system using SQL server means. It should be kept in mind that while reading data is relatively safe (except for possible deletion/modification of tables and their fields), when writing data no ",(0,i.jsx)(t.a,{href:"/v4/Events",children:"events"})," will be triggered (including all elements that use them - ",(0,i.jsx)(t.a,{href:"/v4/Constraints",children:"constraints"}),", ",(0,i.jsx)(t.a,{href:"/v4/Aggregations",children:"aggregations"}),", etc.), and also no ",(0,i.jsx)(t.a,{href:"/v4/Materializations",children:"materializations"})," will be recalculated. For this reason writing data directly to lsFusion system tables is highly discouraged. If doing so is necessary, all of the above factors should be taken into account."]}),"\n",(0,i.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'package lsfusion.server.logics.property.actions;\n\nimport lsfusion.base.BaseUtils;\nimport lsfusion.base.col.interfaces.immutable.ImMap;\nimport lsfusion.interop.remote.UserInfo;\nimport lsfusion.server.classes.ValueClass;\nimport lsfusion.server.data.SQLHandledException;\nimport lsfusion.server.logics.AuthenticationLogicsModule;\nimport lsfusion.server.logics.DataObject;\nimport lsfusion.server.logics.linear.LCP;\nimport lsfusion.server.logics.property.CalcProperty;\nimport lsfusion.server.logics.property.ClassPropertyInterface;\nimport lsfusion.server.logics.property.ExecutionContext;\nimport lsfusion.server.logics.scripted.ScriptingActionProperty;\nimport lsfusion.server.logics.scripted.ScriptingErrorLog;\n\nimport java.sql.SQLException;\nimport java.util.Iterator;\nimport java.util.Random;\n\npublic class GenerateLoginPasswordActionProperty extends ScriptingActionProperty {\n\n    private LCP email;\n    private LCP loginCustomUser;\n    private LCP sha256PasswordCustomUser;\n\n    private final ClassPropertyInterface customUserInterface;\n\n    public GenerateLoginPasswordActionProperty(AuthenticationLogicsModule LM, ValueClass... classes) throws ScriptingErrorLog.SemanticErrorException {\n        super(LM, classes);\n\n        this.email = findProperty("email[Contact]");\n        this.loginCustomUser = findProperty("login[CustomUser]");\n        this.sha256PasswordCustomUser = findProperty("sha256Password[CustomUser]");\n\n        Iterator<ClassPropertyInterface> i = interfaces.iterator();\n        customUserInterface = i.next();\n    }\n\n    public void executeCustom(ExecutionContext<ClassPropertyInterface> context) throws SQLException, SQLHandledException {\n        DataObject userObject = context.getDataKeyValue(customUserInterface);\n\n        String currentEmail = (String) email.read(context, userObject);\n\n        String login;\n        int indexMail;\n        if(currentEmail != null && (indexMail = currentEmail.indexOf("@"))>=0)\n            login = currentEmail.substring(0, indexMail);\n        else\n            login = "login" + userObject.object;\n\n        Random rand = new Random();\n        String chars = "0123456789abcdefghijklmnopqrstuvwxyz";\n        String password = "";\n        for(int i=0;i<8;i++)\n            password += chars.charAt(rand.nextInt(chars.length()));\n\n        if (loginCustomUser.read(context, userObject) == null)\n            loginCustomUser.change(login, context, userObject);\n        String sha256Password = BaseUtils.calculateBase64Hash("SHA-256", password, UserInfo.salt);\n        sha256PasswordCustomUser.change(sha256Password, context, userObject);\n    }\n}\n'})})]})}function u(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,s){s.d(t,{Z:function(){return o},a:function(){return a}});var n=s(67294);let i={},r=n.createContext(i);function a(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);