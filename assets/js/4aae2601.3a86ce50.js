"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[40601],{53849:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=t(74848),s=t(28453);const a={title:"How-to: INTERNAL"},o=void 0,r={id:"How-to_INTERNAL",title:"How-to: INTERNAL",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_INTERNAL.md",sourceDirName:".",slug:"/How-to_INTERNAL",permalink:"/v4/How-to_INTERNAL",draft:!1,unlisted:!1,editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/How-to_INTERNAL.md",tags:[],version:"v4",lastUpdatedAt:161979085e4,frontMatter:{title:"How-to: INTERNAL"},sidebar:"learn",previous:{title:"How-to: FORMULA",permalink:"/v4/How-to_FORMULA"},next:{title:"How-to: Use Cases",permalink:"/v4/How-to_Use_Cases"}},l={},c=[{value:"Example 1",id:"example-1",level:2},{value:"Task",id:"task",level:3},{value:"Solution",id:"solution",level:3},{value:"GetIP.java",id:"getipjava",level:4},{value:"Example 2",id:"example-2",level:2},{value:"Task",id:"task-1",level:3},{value:"Solution",id:"solution-1",level:3},{value:"CalculateGCD.java",id:"calculategcdjava",level:4},{value:"Example 3",id:"example-3",level:2},{value:"Task",id:"task-2",level:3},{value:"Solution",id:"solution-2",level:3},{value:"CalculateGCDObject.java",id:"calculategcdobjectjava",level:4},{value:"Example 4",id:"example-4",level:2},{value:"Task",id:"task-3",level:3},{value:"Solution",id:"solution-3",level:3},{value:"Beep.java",id:"beepjava",level:4},{value:"ClientBeep.java",id:"clientbeepjava",level:4}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,i.jsx)(n.h3,{id:"task",children:"Task"}),"\n",(0,i.jsx)(n.p,{children:"We need to implement an action that will display a message with the server's name and IP address."}),"\n",(0,i.jsx)(n.h3,{id:"solution",children:"Solution"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"ip = DATA LOCAL TEXT();\ngetIPJava INTERNAL 'GetIP';\nshowIPJava 'Show computer name (Java)' {\n    getIPJava();\n    MESSAGE ip();\n}\n\nFORM info 'Information'\n    PROPERTIES() showIPJava\n;\n\nNAVIGATOR {\n    NEW info;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To solve the task, create an action using the ",(0,i.jsxs)(n.a,{href:"/v4/INTERNAL_operator",children:[(0,i.jsx)(n.code,{children:"INTERNAL"})," operator"]})," which will generate an object of the ",(0,i.jsx)(n.code,{children:"GetIP"}),' class (if the class has a package, then you must also specify "package" in the class name) and will call the ',(0,i.jsx)(n.code,{children:"executeInternal"})," method. The source code for this class will be as follows:"]}),"\n",(0,i.jsx)(n.h4,{id:"getipjava",children:"GetIP.java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'import lsfusion.server.data.sql.exception.SQLHandledException;\nimport lsfusion.server.language.ScriptingErrorLog;\nimport lsfusion.server.language.ScriptingLogicsModule;\nimport lsfusion.server.logics.action.controller.context.ExecutionContext;\nimport lsfusion.server.logics.property.classes.ClassPropertyInterface;\nimport lsfusion.server.physics.dev.integration.internal.to.InternalAction;\n\nimport java.net.InetAddress;\nimport java.net.UnknownHostException;\nimport java.sql.SQLException;\n\npublic class GetIP extends InternalAction {\n\n    public GetIP(ScriptingLogicsModule LM) {\n        super(LM);\n    }\n\n    @Override\n    protected void executeInternal(ExecutionContext<ClassPropertyInterface> context) throws SQLException, SQLHandledException {\n        try {\n            findProperty("ip").change(InetAddress.getLocalHost().toString(), context);\n        } catch (UnknownHostException | ScriptingErrorLog.SemanticErrorException ignored) {\n        }\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["First, the action reads the server parameters using the built-in ",(0,i.jsx)(n.code,{children:"InetAddress"})," class. Then it finds the local property ",(0,i.jsx)(n.code,{children:"ip"})," declared in the same module as an action and writes the resulting value to it using the ",(0,i.jsx)(n.code,{children:"change"})," method."]}),"\n",(0,i.jsx)(n.p,{children:"There is also an alternative way to set this property:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"getIPFusion INTERNAL <{ findProperty(\"ip\").change((Object)java.net.InetAddress.getLocalHost().toString(), context); }>;\nshowIPFusion 'Show computer name (Fusion)' {\n    getIPFusion();\n    MESSAGE ip();\n}\n\nEXTEND FORM info\n    PROPERTIES() showIPFusion\n;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The platform will generate the target class, insert the specified code into it and then compile it using the Janino ",(0,i.jsx)(n.a,{href:"https://janino-compiler.github.io/janino/",children:"compiler"}),". The advantage of this approach is that building the project does not require a dedicated step for compiling the Java code. However, the approach has a number of significant limitations and can be used only in the simplest cases."]}),"\n",(0,i.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,i.jsx)(n.h3,{id:"task-1",children:"Task"}),"\n",(0,i.jsx)(n.p,{children:"We need to implement an action that calculates the maximum common divisor of the two integers."}),"\n",(0,i.jsx)(n.h3,{id:"solution-1",children:"Solution"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"gcd = DATA LOCAL INTEGER();\ncalculateGCD 'Calculate GCD' INTERNAL 'CalculateGCD' (INTEGER, INTEGER);\n\nFORM gcd 'GCD'\n    OBJECTS (a = INTEGER, b = INTEGER) PANEL\n    PROPERTIES 'A' = VALUE(a), 'B' = VALUE(b)\n\n    PROPERTIES gcd(), calculateGCD(a, b)\n;\n\nNAVIGATOR {\n    NEW gcd;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The key difference from the previous example is that the action has two ",(0,i.jsx)(n.code,{children:"INTEGER"})," arguments. Keep this in mind when writing your own ",(0,i.jsx)(n.code,{children:"CalculateGCD"})," class. Here is the source code:"]}),"\n",(0,i.jsx)(n.h4,{id:"calculategcdjava",children:"CalculateGCD.java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'import lsfusion.server.data.sql.exception.SQLHandledException;\nimport lsfusion.server.language.ScriptingErrorLog;\nimport lsfusion.server.language.ScriptingLogicsModule;\nimport lsfusion.server.logics.action.controller.context.ExecutionContext;\nimport lsfusion.server.logics.classes.ValueClass;\nimport lsfusion.server.logics.property.classes.ClassPropertyInterface;\nimport lsfusion.server.physics.dev.integration.internal.to.InternalAction;\n\nimport java.math.BigInteger;\nimport java.sql.SQLException;\n\npublic class CalculateGCD extends InternalAction {\n\n    public CalculateGCD(ScriptingLogicsModule LM, ValueClass... classes) {\n        super(LM, classes);\n    }\n\n    @Override\n    protected void executeInternal(ExecutionContext<ClassPropertyInterface> context) throws SQLException, SQLHandledException {\n        BigInteger b1 = BigInteger.valueOf((Integer)getParam(0, context));\n        BigInteger b2 = BigInteger.valueOf((Integer)getParam(1, context));\n        BigInteger gcd = b1.gcd(b2);\n        try {\n            findProperty("gcd[]").change(gcd.intValue(), context);\n        } catch (ScriptingErrorLog.SemanticErrorException ignored) {\n        }\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Values of input properties are read using the ",(0,i.jsx)(n.code,{children:"getParam"})," method, in which the first parameter passed is a 0-based index of the property to be read. This method returns an object of class ",(0,i.jsx)(n.code,{children:"Object"}),", so explicit type casting is required."]}),"\n",(0,i.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,i.jsx)(n.h3,{id:"task-2",children:"Task"}),"\n",(0,i.jsx)(n.p,{children:"We need to implement an action that calculates the greatest common divisor of two integers, but they are specified as properties for an object."}),"\n",(0,i.jsx)(n.h3,{id:"solution-2",children:"Solution"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"CLASS Calculation;\na = DATA INTEGER (Calculation);\nb = DATA INTEGER (Calculation);\ngcd = DATA INTEGER (Calculation);\ncalculateGCD 'Calculate GCD' INTERNAL 'CalculateGCDObject' (Calculation);\n\nEXTEND FORM gcd\n    OBJECTS c = Calculation\n    PROPERTIES(c) a, b, gcd, calculateGCD GRID, NEW, DELETE\n;\n"})}),"\n",(0,i.jsx)(n.p,{children:"In this example we first need to read the values of the properties for the passed object, and then to write the result to a property with one input. This is done as follows:"}),"\n",(0,i.jsx)(n.h4,{id:"calculategcdobjectjava",children:"CalculateGCDObject.java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'import lsfusion.server.data.sql.exception.SQLHandledException;\nimport lsfusion.server.data.value.DataObject;\nimport lsfusion.server.language.ScriptingErrorLog;\nimport lsfusion.server.language.ScriptingLogicsModule;\nimport lsfusion.server.logics.action.controller.context.ExecutionContext;\nimport lsfusion.server.logics.classes.ValueClass;\nimport lsfusion.server.logics.property.classes.ClassPropertyInterface;\nimport lsfusion.server.physics.dev.integration.internal.to.InternalAction;\n\nimport java.math.BigInteger;\nimport java.sql.SQLException;\n\npublic class CalculateGCDObject extends InternalAction {\n\n    public CalculateGCDObject(ScriptingLogicsModule LM, ValueClass... classes) {\n        super(LM, classes);\n    }\n\n    @Override\n    protected void executeInternal(ExecutionContext<ClassPropertyInterface> context) throws SQLException, SQLHandledException {\n        try {\n            DataObject calculation = (DataObject)getParamValue(0, context);\n            BigInteger a = BigInteger.valueOf((Integer)findProperty("a").read(context, calculation));\n            BigInteger b = BigInteger.valueOf((Integer)findProperty("b").read(context, calculation));\n            BigInteger gcd = a.gcd(b);\n            findProperty("gcd[Calculation]").change(gcd.intValue(), context, calculation);\n        } catch (ScriptingErrorLog.SemanticErrorException ignored) {\n        }\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The object that is passed is first written to the variable ",(0,i.jsx)(n.code,{children:"calculation"}),". This is done using the special ",(0,i.jsx)(n.code,{children:"getParamValue"})," method, which returns an object of class ",(0,i.jsx)(n.code,{children:"DataObject"}),". This stores the object's ID and class. It will then be used to read and write properties, by passing it as the last parameter to the ",(0,i.jsx)(n.code,{children:"read"})," and ",(0,i.jsx)(n.code,{children:"change"})," methods. If the property took several objects as input, every of them would need to be passed as the last parameter."]}),"\n",(0,i.jsxs)(n.p,{children:["The full canonical name of the property is used in the ",(0,i.jsx)(n.code,{children:"findProperty"})," method, because several ",(0,i.jsx)(n.code,{children:"gcd"})," properties are declared in the module. If you only specify the name, then a corresponding error will be issued saying it is impossible to determine the required property."]}),"\n",(0,i.jsx)(n.h2,{id:"example-4",children:"Example 4"}),"\n",(0,i.jsx)(n.h3,{id:"task-3",children:"Task"}),"\n",(0,i.jsx)(n.p,{children:"We need to implement an action that will generate a sound signal 5 times on the client machine."}),"\n",(0,i.jsx)(n.h3,{id:"solution-3",children:"Solution"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lsf",children:"beep INTERNAL 'Beep';\nFORM beep 'Signal'\n    PROPERTIES() beep\n;\n\nNAVIGATOR {\n    NEW beep;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The Java code for an action created using the ",(0,i.jsx)(n.code,{children:"INTERNAL"})," operator, runs on the server's virtual machine. So the signal cannot be called directly from the code of a class that inherits from ",(0,i.jsx)(n.code,{children:"InternalAction"}),". For this purpose there is a method called ",(0,i.jsx)(n.code,{children:"requestUserInteraction"}),", which must be passed a class that inherits from class ",(0,i.jsx)(n.code,{children:"ClientAction"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"beepjava",children:"Beep.java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"import lsfusion.server.data.sql.exception.SQLHandledException;\nimport lsfusion.server.language.ScriptingLogicsModule;\nimport lsfusion.server.logics.action.controller.context.ExecutionContext;\nimport lsfusion.server.logics.property.classes.ClassPropertyInterface;\nimport lsfusion.server.physics.dev.integration.internal.to.InternalAction;\n\nimport java.sql.SQLException;\n\npublic class Beep extends InternalAction {\n\n    public Beep(ScriptingLogicsModule LM) {\n        super(LM);\n    }\n\n    @Override\n    protected void executeInternal(ExecutionContext<ClassPropertyInterface> context) throws SQLException, SQLHandledException {\n        String result = (String) context.requestUserInteraction(new ClientBeep(5));\n        System.out.println(result);\n    }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The system halts code execution when this method is called, then passes ",(0,i.jsx)(n.code,{children:"ClientBeep"})," (and all classes it uses that are not present in JRE) to the client application, constructs an object with the parameters passed (in this case just the number 5), and calls its ",(0,i.jsx)(n.code,{children:"dispatch"})," method. Source code of class ",(0,i.jsx)(n.code,{children:"ClientBeep"}),":"]}),"\n",(0,i.jsx)(n.h4,{id:"clientbeepjava",children:"ClientBeep.java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'import lsfusion.interop.action.ClientAction;\nimport lsfusion.interop.action.ClientActionDispatcher;\n\nimport java.awt.*;\nimport java.io.IOException;\n\npublic class ClientBeep implements ClientAction {\n    \n    int times;\n\n    public ClientBeep(int times) {\n        this.times = times;\n    }\n\n    @Override\n    public Object dispatch(ClientActionDispatcher dispatcher) throws IOException {\n        for (int i = 0; i < times; i++) {\n            try {\n                Thread.sleep(1000);\n                Toolkit.getDefaultToolkit().beep();\n            } catch (InterruptedException ignored) {\n            }\n        }\n        return "succeed";\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The object returned by the ",(0,i.jsx)(n.code,{children:"dispatch"})," method is returned to the server as the result of executing the ",(0,i.jsx)(n.code,{children:"requestUserInteraction"})," method. In this example, the message ",(0,i.jsx)(n.code,{children:"succeed"})," will be displayed on the server's standard console. Thus, results of code execution on the client can be read on the server."]}),"\n",(0,i.jsx)(n.p,{children:"Since java code cannot be executed directly in the browser, this action will only work with a desktop client."})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var i=t(96540);const s={},a=i.createContext(s);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);