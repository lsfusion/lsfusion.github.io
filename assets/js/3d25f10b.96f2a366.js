"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[51505],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?i.createElement(m,a(a({ref:t},c),{},{components:n})):i.createElement(m,a({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5468:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var i=n(83117),r=(n(67294),n(3905));const o={title:"Security policy"},a=void 0,s={unversionedId:"Security_policy",id:"Security_policy",title:"Security policy",description:"Customizing user roles",source:"@site/docs/Security_policy.md",sourceDirName:".",slug:"/Security_policy",permalink:"/next/Security_policy",draft:!1,editUrl:"https://github.com/lsfusion/platform/edit/master/docs/en/Security_policy.md",tags:[],version:"current",lastUpdatedAt:1701852660,formattedLastUpdatedAt:"Dec 6, 2023",frontMatter:{title:"Security policy"},sidebar:"learn",previous:{title:"Interpreter",permalink:"/next/Interpreter"},next:{title:"Process monitor",permalink:"/next/Process_monitor"}},l={},p=[{value:"Customizing user roles",id:"customizing-user-roles",level:3},{value:"Setting access to system elements",id:"setting-access-to-system-elements",level:3},{value:"Navigator Tab",id:"navigator-tab",level:4},{value:"Properties Tab",id:"properties-tab",level:4},{value:"Users Tab",id:"users-tab",level:4}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"customizing-user-roles"},"Customizing user roles"),(0,r.kt)("p",null,"The system uses the concept of User. A user is an object that contains information about one person working in the system. "),(0,r.kt)("p",null,"The functionality available to a User is determined by their Role or list of Roles. The Role determines which forms, fields, and buttons are available."),(0,r.kt)("p",null,"The User\u2019s card (",(0,r.kt)("inlineCode",{parentName:"p"},"Administration > Security > Users"),") indicates which roles are assigned to the user (Fig. 1.)."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6177).Z,width:"1201",height:"698"})),(0,r.kt)("p",null,"Fig. 1. Assigning Employee Roles"),(0,r.kt)("h3",{id:"setting-access-to-system-elements"},"Setting access to system elements"),(0,r.kt)("p",null,"The security policy for each Role is configured in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Administration > Security > Security Policy"),". This is where the composition of Roles is determined, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Add"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Delete"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Copy")," buttons. When a Role is copied, all rights are copied too. "),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(27283).Z,width:"1145",height:"680"})),(0,r.kt)("p",null,"Fig. 2. Configuring security policy by role"),(0,r.kt)("p",null,"For each Role you need to specify a name (",(0,r.kt)("inlineCode",{parentName:"p"},"Name"),") and a code (",(0,r.kt)("inlineCode",{parentName:"p"},"Code"),"), and you can also set the following parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Show detailed property description")," \u2013 if you hover over a property, button, field, etc., a description will be displayed in a popup window.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6242).Z,width:"585",height:"155"})),(0,r.kt)("p",null,"Fig. 3. Detailed property description"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Single form instance")," - when selecting a form already open on the desktop in the navigator, the user will go to it, no additional window will be opened.  If there is a need to open several windows with this form, it is necessary to hold the ",(0,r.kt)("inlineCode",{parentName:"li"},"Ctrl")," key when calling the form. This restriction can also be set for a specific user on the ",(0,r.kt)("inlineCode",{parentName:"li"},"Users")," tab."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Forms on client\u2019s startup")," - for a role it is possible to define the forms that will be opened immediately after the user logs into the program. For this purpose, on the ",(0,r.kt)("inlineCode",{parentName:"li"},"Navigator")," tab, in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Number on client\u2019s startup")," field for the required forms the number in order is specified (see Fig. 2)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"}," Maximize on client's startup")," - on logging in, the program will be opened in the full screen mode ( the navigation menu will be hidden)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Disable role")," - access rights configured for the role will not be applicable. ")),(0,r.kt)("h4",{id:"navigator-tab"},"Navigator Tab"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Navigator")," tab displays all Forms that exist in the system. They are displayed either as a tree or as a table. In the tree view, the list of forms reflects the structure of existing modules and is most convenient to control access to them."),(0,r.kt)("p",null,"You can set one of three statuses for each form in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Access")," column:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Permit")," \u2013 a user can access the form"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Forbid")," \u2013 a user cannot access the form"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Default")," - the form will be available by default to the user with the given role. If a user has multiple roles, the form will be available if there is ",(0,r.kt)("inlineCode",{parentName:"p"},"Permit")," or no ",(0,r.kt)("inlineCode",{parentName:"p"},"Forbid")," among these roles."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(16758).Z,width:"991",height:"326"})),(0,r.kt)("p",null,"Fig. 4. Example of configuring access to forms"),(0,r.kt)("p",null,"The status set for a tree branch automatically applies to child branches. If necessary, a child branch can be set to a different access status, in which case the status of the parent element will be highlighted with a gray background, so that the user can visually determine that there are elements with a different access status in the structure of this branch. According to the settings shown in Fig. 4 only ",(0,r.kt)("inlineCode",{parentName:"p"},"Templates")," forms are available to the user in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Master data")," menu.  "),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6671).Z,width:"251",height:"357"})),(0,r.kt)("p",null,"Fig. 5. Result of setting access to forms"),(0,r.kt)("h4",{id:"properties-tab"},"Properties Tab"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Properties")," tab displays all the form elements available in the system: fields, buttons, checkboxes, etc. Like the Forms themselves, Properties are presented in tree and table form."),(0,r.kt)("p",null,"A role can have one of three access statuses for actions on properties:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"View")," \u2013 defines whether the property is visible to a user"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Change")," - defines whether a user can change the value of the property"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Follow")," \u2013 if the property value is an object, defines whether a user can access the object to change it"),(0,r.kt)("p",null,"The access status for Properties is set in the same way as for Forms. However, given the large number of different properties in the application, on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Properties")," tab it is convenient to define the access level to the property group corresponding to the upper branches of the tree, or to view the status of role permissions in terms of properties. "),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(85828).Z,width:"1017",height:"325"})),(0,r.kt)("p",null,"Fig. 6. Managing access rights to properties"),(0,r.kt)("p",null,"To set up access rights to a particular property on a form, it is convenient to use the context menu. To do this, right-click on the button or field you want to configure and select ",(0,r.kt)("inlineCode",{parentName:"p"},"Setup property policy")," in the context menu. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Security policy")," window will open, where you can set the access level to the property for each role or for several roles, then click ",(0,r.kt)("inlineCode",{parentName:"p"},"OK"),". All changes made and saved via the context menu are also displayed on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Properties")," tab of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Security Policy")," form."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9619).Z,width:"1201",height:"698"})),(0,r.kt)("p",null,"Fig. 7. Option for configuring access to an individual property"),(0,r.kt)("h4",{id:"users-tab"},"Users Tab"),(0,r.kt)("p",null,"This tab displays all the users to whom the highlited role is assigned as a primary or secondary role."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(75258).Z,width:"997",height:"324"}),"\nFig. 8 . Users tab"),(0,r.kt)("p",null,"All changes made on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Security policy")," form are activated after the next user login."),(0,r.kt)("p",null,"By default, there are 4 roles pre-installed in the platform:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Administrator (admin)"),(0,r.kt)("li",{parentName:"ul"},"Readonly (readonly)"),(0,r.kt)("li",{parentName:"ul"},"Default (default)"),(0,r.kt)("li",{parentName:"ul"},"Self register (selfregistar)")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Note that when set for a form or property, ",(0,r.kt)("inlineCode",{parentName:"p"},"Default")," access applies permission or restriction, depending on the additional roles set. The set ",(0,r.kt)("inlineCode",{parentName:"p"},"Default")," access does not apply the value specified in the Default role settings. To have the accesses configured in the Default role applied to a user, the user must be assigned that role.")))}u.isMDXComponent=!0},27283:function(e,t,n){t.Z=n.p+"assets/images/Security_policy_config_role-2d20206f9e382ca7723fd967959265d3.png"},16758:function(e,t,n){t.Z=n.p+"assets/images/Security_policy_forms_access-754de7bf4d8d6b6c33cdb125a50b405b.png"},6671:function(e,t,n){t.Z=n.p+"assets/images/Security_policy_forms_result-8097e5ee9eeb984ab2be959a50329ecc.png"},6242:function(e,t,n){t.Z=n.p+"assets/images/Security_policy_info_popup-ad95af996b280475f022f0095e8c3140.png"},85828:function(e,t,n){t.Z=n.p+"assets/images/Security_policy_property_access-dedb89d62c56dab843934dcfc5f1ca58.png"},9619:function(e,t,n){t.Z=n.p+"assets/images/Security_policy_property_access_option-32eeac5da4d074d342201fc3eaa60d0d.png"},6177:function(e,t,n){t.Z=n.p+"assets/images/Security_policy_roles-4aad449a90946a38b6db37ddfba722a1.png"},75258:function(e,t,n){t.Z=n.p+"assets/images/Security_policy_users-07f3b19f7458d92d5678fe9bcc9d8f24.png"}}]);