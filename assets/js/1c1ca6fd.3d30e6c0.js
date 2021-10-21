(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[1039],{3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return p},kt:function(){return d}});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=c(i),d=r,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return i?n.createElement(f,s(s({ref:t},p),{},{components:i})):n.createElement(f,s({ref:t},p))}));function d(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,s=new Array(o);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var c=2;c<o;c++)s[c]=i[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},23413:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=i(74034),r=i(79973),o=(i(67294),i(3905)),s=["components"],a={title:"Security policy"},l=void 0,c={unversionedId:"Security_policy",id:"version-v4/Security_policy",isDocsHomePage:!1,title:"Security policy",description:"Customizing user roles",source:"@site/versioned_docs/version-v4/Security_policy.md",sourceDirName:".",slug:"/Security_policy",permalink:"/Security_policy",editUrl:"https://github.com/lsfusion/platform/edit/v4/docs/en/Security_policy.md",tags:[],version:"v4",lastUpdatedAt:1620823281,formattedLastUpdatedAt:"5/12/2021",frontMatter:{title:"Security policy"},sidebar:"version-v4/learn",previous:{title:"Interpreter",permalink:"/Interpreter"},next:{title:"Process monitor",permalink:"/Process_monitor"}},p=[{value:"Customizing user roles",id:"customizing-user-roles",children:[],level:3},{value:"Setting access to system elements",id:"setting-access-to-system-elements",children:[],level:3}],u={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"customizing-user-roles"},"Customizing user roles"),(0,o.kt)("p",null,"The system uses the concept of User. A user is an object that contains information about one person working in the system. The system can store information about both its own employees and employees of other organizations."),(0,o.kt)("p",null,"The functionality available to a User is determined by their Role or list of  Roles. The Role determines which forms, fields, and buttons are available."),(0,o.kt)("p",null,"The User\u2019s card (",(0,o.kt)("inlineCode",{parentName:"p"},"Admin > Access > Users"),") indicates the Main role; if necessary, Additional roles are assigned (Fig. 1.)."),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(11774).Z})),(0,o.kt)("p",null,"Fig. 1. Assigning Employee Roles"),(0,o.kt)("h3",{id:"setting-access-to-system-elements"},"Setting access to system elements"),(0,o.kt)("p",null,"The security policy for each Role is configured in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Admin > Access > Security Policy > Roles tab"),". This is where the makeup of the Roles is determined, using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Add"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Delete"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"Copy")," buttons. When a Role is copied, all rights are copied too. If ",(0,o.kt)("inlineCode",{parentName:"p"},"default main role")," is specified, then when a new employee is saved without a primary role they will be assigned a role from this field."),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(69302).Z})),(0,o.kt)("p",null,"Fig. 2. Configuring security policy by role"),(0,o.kt)("p",null,"For each Role, you can define some initial rights:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Enable / disable all elements of the navigator")," \u2013 serves for initial installation of access rights to all forms. For Roles with limited access to functionality, it is recommended that you set ",(0,o.kt)("inlineCode",{parentName:"li"},"Disable all navigation elements"),". This facilitates further customization of access to specific forms: you only need to list the forms to which the user has access."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Enable / disable viewing of all properties")," \u2013 serves for initial setting of rights to view all form elements: buttons, fields, checkboxes, etc."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Enable / disable changing all properties")," \u2013 serves for initial installation of rights to use all form elements."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Prevent viewing / editing security policies")," \u2013 restricts access to security policy settings, i.e. an employee with this role will not be able to independently change access to form elements."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Disable password changes")," \u2013 employees with this role are not allowed to change their passwords. This restriction can be set for a specific user in the ",(0,o.kt)("inlineCode",{parentName:"li"},"Users")," tab."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Disable profile editing")," \u2013 employees with this role are not allowed to change their Login, First Name, Last Name, Email, or font size. This restriction can be set for a specific user in the \xabUsers\xbb tab."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Open form once")," \u2013 if the user repeatedly opens an already open form (usually by accident), an additional window for the form is not created. If you do need to open the same form again, then hold down the ",(0,o.kt)("inlineCode",{parentName:"li"},"Ctrl")," key when calling the form. This restriction can be set for a specific user in the ",(0,o.kt)("inlineCode",{parentName:"li"},"Users")," tab."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Forms when opened")," \u2013 for each role, you can define the Forms that will be opened immediately when the employee enters the program. To do this, use the ",(0,o.kt)("inlineCode",{parentName:"li"},"Display forms by default")," field; the number is then indicated for the forms in the ",(0,o.kt)("inlineCode",{parentName:"li"},"Default number")," field in the ",(0,o.kt)("inlineCode",{parentName:"li"},"Navigator")," tab. Usually used for a cashier's workstation.")),(0,o.kt)("p",null,"Tabs on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Security policy > Roles tab"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Navigator")," tab displays all Forms that exist in the system. They are displayed either as a tree or as a table. In the tree view, the list of forms reflects the structure of existing modules and is most convenient for controlling access to them. In addition, a deeper the tree branch, the higher the priority set to ",(0,o.kt)("inlineCode",{parentName:"li"},"Allow")," / ",(0,o.kt)("inlineCode",{parentName:"li"},"Deny"),". For example, on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Desktop"),", set the ",(0,o.kt)("inlineCode",{parentName:"li"},"Deny")," flag for the entire Sales section but the ",(0,o.kt)("inlineCode",{parentName:"li"},"Allow")," flag for the ",(0,o.kt)("inlineCode",{parentName:"li"},"Invoice")," form. (fig. 3.)")),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(74077).Z})),(0,o.kt)("p",null,"Fig. 3. Example of configuring access to forms"),(0,o.kt)("p",null,"As a result, when a user logs in with this role, they will be able to access the ",(0,o.kt)("inlineCode",{parentName:"p"},"Invoice")," form but they will not see the ",(0,o.kt)("inlineCode",{parentName:"p"},"Processing internal orders")," form. (fig. 4.)"),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(76393).Z})),(0,o.kt)("p",null,"Fig. 4. Result of setting access to forms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Properties")," tab displays all the form elements available in the system: fields, buttons, checkboxes, etc. Like the Forms themselves, Properties are presented in tree and table form. The functional content of the forms used can be set for a role by setting permissions / prohibitions on viewing and changing properties. As practice shows, using this tab is justified for setting access to the upper branches of the property tree, i.e. for whole property groups. To configure access by specific properties (on a specific form), it is better to use the context menu (right-click) on the form element of interest. For example, on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Invoice (purchase)")," form we need to set constraints on closing documents for some roles. To do this, hover the mouse over the ",(0,o.kt)("inlineCode",{parentName:"li"},"Close")," button and right-click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Security policy settings")," (fig. 5).")),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(9974).Z})),(0,o.kt)("p",null,"Fig. 5. How to configure access to an individual property"),(0,o.kt)("p",null,"In the window that opens, check ",(0,o.kt)("inlineCode",{parentName:"p"},"Disable view"),". in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Access")," section. This means that for all roles, by default, this button in this form will not be visible. And further, by checking permit against certain roles, we enable employees of only these roles to use this button (Fig.7.7.)."),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(94288).Z})),(0,o.kt)("p",null,"Fig. 6. Option for configuring access to an individual property"),(0,o.kt)("p",null,"In the same way, you can organize access to fields and columns on any form. All changes made when configuring access to an individual element of the Form are transmitted to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Properties")," tab on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Security policy")," form."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"On the tab ",(0,o.kt)("inlineCode",{parentName:"li"},"Additional Security Policy"),", you can set the highest priority rights (bypassing those previously described) for some features in the program. This is done by entering the number 1 in the ",(0,o.kt)("inlineCode",{parentName:"li"},"Order")," field (Fig. 7.).")),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(83499).Z})),(0,o.kt)("p",null,"Fig. 7. Setting an additional security policy"),(0,o.kt)("p",null,"For Forms and Properties for which access rights have not been set (the enable / disable flags are not specified) at the role level, the rights specified in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Default")," are applied (Fig. 8.)."),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(98516).Z})),(0,o.kt)("p",null,"Fig. 8. Setting a default security policy"),(0,o.kt)("p",null,"All changes made on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Security policy")," form are activated after the next user login."))}m.isMDXComponent=!0},83499:function(e,t,i){"use strict";t.Z=i.p+"assets/images/Security_policy_additional-0c86de253ab4738e0978cb4787b4856a.png"},69302:function(e,t,i){"use strict";t.Z=i.p+"assets/images/Security_policy_config_role-07098bf16173e36043cfe86de4f098b5.png"},98516:function(e,t,i){"use strict";t.Z=i.p+"assets/images/Security_policy_default-6e498f3567b3d2ae8ff5518704fc1a6f.png"},74077:function(e,t,i){"use strict";t.Z=i.p+"assets/images/Security_policy_forms_access-e22bfbc68ece6dbd097d4531d4503ea3.png"},76393:function(e,t,i){"use strict";t.Z=i.p+"assets/images/Security_policy_forms_result-e15960935673dd130913e5accf46b72e.png"},9974:function(e,t,i){"use strict";t.Z=i.p+"assets/images/Security_policy_property_access-18953e9ac8febe5161c3ca0ea999014e.png"},94288:function(e,t,i){"use strict";t.Z=i.p+"assets/images/Security_policy_property_access_option-5223bf8bbcb749143a1fae8edc88169e.png"},11774:function(e,t,i){"use strict";t.Z=i.p+"assets/images/Security_policy_roles-c7a8f222d016b37246b80cbc2fc97e79.png"}}]);