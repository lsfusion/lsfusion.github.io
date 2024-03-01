"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[12362],{51795:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=s(74848),r=s(28453);const i={title:"Access from an internal system"},a=void 0,o={id:"Access_from_an_internal_system",title:"Access from an internal system",description:"Java interaction",source:"@site/docs/Access_from_an_internal_system.md",sourceDirName:".",slug:"/Access_from_an_internal_system",permalink:"/next/Access_from_an_internal_system",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Access_from_an_internal_system.md",tags:[],version:"current",lastUpdatedAt:1623249583,formattedLastUpdatedAt:"Jun 9, 2021",frontMatter:{title:"Access from an internal system"},sidebar:"learn",previous:{title:"Access from an external system",permalink:"/next/Access_from_an_external_system"},next:{title:"Access to an external system (EXTERNAL)",permalink:"/next/Access_to_an_external_system_EXTERNAL"}},c={},l=[{value:"Java interaction",id:"java-interaction",level:3},{value:"SQL interaction",id:"sql-interaction",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"java-interaction",children:"Java interaction"}),"\n",(0,n.jsx)(t.p,{children:"In this type of interaction, the internal system can directly access the Java elements of the lsFusion system (as with ordinary Java objects). This means you can perform all the same operations as when using network protocols, while avoiding the significant overhead of such interaction (such as serialization of parameters/deserialization of the result, etc.). In addition, this method of communication is much more convenient and efficient if the interaction is very close (i.e., the process of performing one operation requires constant access to both sides \u2013 from the lsFusion system to another system and vice versa) and/or requires access to particular platform units."}),"\n",(0,n.jsx)(t.p,{children:"It is worth noting that in order to access the Java elements of the lsFusion system directly, you must first obtain a link to an object that will have interfaces for finding these Java elements. This is usually done in one of two ways:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["If the initial call comes from the lsFusion system via the ",(0,n.jsx)(t.a,{href:"/next/Access_to_an_internal_system_INTERNAL_FORMULA#javato",children:"Java interaction"}),' mechanism, the action object "through which" the call is done may be used as the "search object" (the class of this action must be inherited from ',(0,n.jsx)(t.code,{children:"lsfusion.server.physics.dev.integration.internal.to.InternalAction"}),", which in turn has all the required interfaces)."]}),"\n",(0,n.jsxs)(t.li,{children:["If the object from whose method the lsFusion system must be accessed is a Spring bean, a link to the business logic object can be obtained using dependency injection (the bean is accordingly called ",(0,n.jsx)(t.code,{children:"businessLogics"}),")."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"sql-interaction",children:"SQL interaction"}),"\n",(0,n.jsxs)(t.p,{children:["Systems that have access to the SQL server of the lsFusion system (one such system, for example, is the SQL server itself) can directly access ",(0,n.jsx)(t.a,{href:"/next/Tables",children:"tables"})," and ",(0,n.jsx)(t.a,{href:"/next/Materializations",children:"fields"})," created by the lsFusion system using SQL server means. It should be kept in mind that while reading data is relatively safe (except for possible deletion/modification of tables and their fields), when writing data no ",(0,n.jsx)(t.a,{href:"/next/Events",children:"events"})," will be triggered (including all elements that use them - ",(0,n.jsx)(t.a,{href:"/next/Constraints",children:"constraints"}),", ",(0,n.jsx)(t.a,{href:"/next/Aggregations",children:"aggregations"}),", etc.), and also no ",(0,n.jsx)(t.a,{href:"/next/Materializations",children:"materializations"})," will be recalculated. For this reason writing data directly to lsFusion system tables is highly discouraged. If doing so is necessary, all of the above factors should be taken into account."]}),"\n",(0,n.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'package lsfusion.server.logics.property.actions;\r\n\r\nimport lsfusion.base.BaseUtils;\r\nimport lsfusion.base.col.interfaces.immutable.ImMap;\r\nimport lsfusion.interop.remote.UserInfo;\r\nimport lsfusion.server.classes.ValueClass;\r\nimport lsfusion.server.data.SQLHandledException;\r\nimport lsfusion.server.logics.AuthenticationLogicsModule;\r\nimport lsfusion.server.logics.DataObject;\r\nimport lsfusion.server.logics.linear.LCP;\r\nimport lsfusion.server.logics.property.CalcProperty;\r\nimport lsfusion.server.logics.property.ClassPropertyInterface;\r\nimport lsfusion.server.logics.property.ExecutionContext;\r\nimport lsfusion.server.logics.scripted.ScriptingActionProperty;\r\nimport lsfusion.server.logics.scripted.ScriptingErrorLog;\r\n\r\nimport java.sql.SQLException;\r\nimport java.util.Iterator;\r\nimport java.util.Random;\r\n\r\npublic class GenerateLoginPasswordActionProperty extends ScriptingActionProperty {\r\n\r\n    private LCP email;\r\n    private LCP loginCustomUser;\r\n    private LCP sha256PasswordCustomUser;\r\n\r\n    private final ClassPropertyInterface customUserInterface;\r\n\r\n    public GenerateLoginPasswordActionProperty(AuthenticationLogicsModule LM, ValueClass... classes) throws ScriptingErrorLog.SemanticErrorException {\r\n        super(LM, classes);\r\n\r\n        this.email = findProperty("email[Contact]");\r\n        this.loginCustomUser = findProperty("login[CustomUser]");\r\n        this.sha256PasswordCustomUser = findProperty("sha256Password[CustomUser]");\r\n\r\n        Iterator<ClassPropertyInterface> i = interfaces.iterator();\r\n        customUserInterface = i.next();\r\n    }\r\n\r\n    public void executeCustom(ExecutionContext<ClassPropertyInterface> context) throws SQLException, SQLHandledException {\r\n        DataObject userObject = context.getDataKeyValue(customUserInterface);\r\n\r\n        String currentEmail = (String) email.read(context, userObject);\r\n\r\n        String login;\r\n        int indexMail;\r\n        if(currentEmail != null && (indexMail = currentEmail.indexOf("@"))>=0)\r\n            login = currentEmail.substring(0, indexMail);\r\n        else\r\n            login = "login" + userObject.object;\r\n\r\n        Random rand = new Random();\r\n        String chars = "0123456789abcdefghijklmnopqrstuvwxyz";\r\n        String password = "";\r\n        for(int i=0;i<8;i++)\r\n            password += chars.charAt(rand.nextInt(chars.length()));\r\n\r\n        if (loginCustomUser.read(context, userObject) == null)\r\n            loginCustomUser.change(login, context, userObject);\r\n        String sha256Password = BaseUtils.calculateBase64Hash("SHA-256", password, UserInfo.salt);\r\n        sha256PasswordCustomUser.change(sha256Password, context, userObject);\r\n    }\r\n}\n'})})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var n=s(96540);const r={},i=n.createContext(r);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);