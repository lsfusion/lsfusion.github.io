"use strict";(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([["32298"],{31486:function(e,t,s){s.r(t),s.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>i,assets:()=>l,toc:()=>a,contentTitle:()=>c});var i=JSON.parse('{"id":"Security_policy","title":"Security policy","description":"Customizing user roles","source":"@site/docs/Security_policy.md","sourceDirName":".","slug":"/Security_policy","permalink":"/Security_policy","draft":false,"unlisted":false,"editUrl":"https://github.com/lsfusion/platform/edit/master/docs/en/Security_policy.md","tags":[],"version":"current","lastUpdatedAt":1701852660000,"frontMatter":{"title":"Security policy"},"sidebar":"learn","previous":{"title":"Interpreter","permalink":"/Interpreter"},"next":{"title":"Process monitor","permalink":"/Process_monitor"}}'),n=s("85893"),r=s("50065");let o={title:"Security policy"},c=void 0,l={},a=[{value:"Customizing user roles",id:"customizing-user-roles",level:3},{value:"Setting access to system elements",id:"setting-access-to-system-elements",level:3},{value:"Navigator Tab",id:"navigator-tab",level:4},{value:"Properties Tab",id:"properties-tab",level:4},{value:"Users Tab",id:"users-tab",level:4}];function d(e){let t={admonition:"admonition",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"customizing-user-roles",children:"Customizing user roles"}),"\n",(0,n.jsx)(t.p,{children:"The system uses the concept of User. A user is an object that contains information about one person working in the system."}),"\n",(0,n.jsx)(t.p,{children:"The functionality available to a User is determined by their Role or list of Roles. The Role determines which forms, fields, and buttons are available."}),"\n",(0,n.jsxs)(t.p,{children:["The User\u2019s card (",(0,n.jsx)(t.code,{children:"Administration > Security > Users"}),") indicates which roles are assigned to the user (Fig. 1.)."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(49096).Z+"",width:"1201",height:"698"})}),"\n",(0,n.jsx)(t.p,{children:"Fig. 1. Assigning Employee Roles"}),"\n",(0,n.jsx)(t.h3,{id:"setting-access-to-system-elements",children:"Setting access to system elements"}),"\n",(0,n.jsxs)(t.p,{children:["The security policy for each Role is configured in the ",(0,n.jsx)(t.code,{children:"Administration > Security > Security Policy"}),". This is where the composition of Roles is determined, using the ",(0,n.jsx)(t.code,{children:"Add"}),", ",(0,n.jsx)(t.code,{children:"Delete"}),", and ",(0,n.jsx)(t.code,{children:"Copy"})," buttons. When a Role is copied, all rights are copied too."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(90333).Z+"",width:"1145",height:"680"})}),"\n",(0,n.jsx)(t.p,{children:"Fig. 2. Configuring security policy by role"}),"\n",(0,n.jsxs)(t.p,{children:["For each Role you need to specify a name (",(0,n.jsx)(t.code,{children:"Name"}),") and a code (",(0,n.jsx)(t.code,{children:"Code"}),"), and you can also set the following parameters:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Show detailed property description"})," \u2013 if you hover over a property, button, field, etc., a description will be displayed in a popup window."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(1636).Z+"",width:"585",height:"155"})}),"\n",(0,n.jsx)(t.p,{children:"Fig. 3. Detailed property description"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Single form instance"})," - when selecting a form already open on the desktop in the navigator, the user will go to it, no additional window will be opened.  If there is a need to open several windows with this form, it is necessary to hold the ",(0,n.jsx)(t.code,{children:"Ctrl"})," key when calling the form. This restriction can also be set for a specific user on the ",(0,n.jsx)(t.code,{children:"Users"})," tab."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Forms on client\u2019s startup"})," - for a role it is possible to define the forms that will be opened immediately after the user logs into the program. For this purpose, on the ",(0,n.jsx)(t.code,{children:"Navigator"})," tab, in the ",(0,n.jsx)(t.code,{children:"Number on client\u2019s startup"})," field for the required forms the number in order is specified (see Fig. 2)."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:" Maximize on client's startup"})," - on logging in, the program will be opened in the full screen mode ( the navigation menu will be hidden)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Disable role"})," - access rights configured for the role will not be applicable."]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"navigator-tab",children:"Navigator Tab"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Navigator"})," tab displays all Forms that exist in the system. They are displayed either as a tree or as a table. In the tree view, the list of forms reflects the structure of existing modules and is most convenient to control access to them."]}),"\n",(0,n.jsxs)(t.p,{children:["You can set one of three statuses for each form in the ",(0,n.jsx)(t.code,{children:"Access"})," column:"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Permit"})," \u2013 a user can access the form"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Forbid"})," \u2013 a user cannot access the form"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Default"})," - the form will be available by default to the user with the given role. If a user has multiple roles, the form will be available if there is ",(0,n.jsx)(t.code,{children:"Permit"})," or no ",(0,n.jsx)(t.code,{children:"Forbid"})," among these roles."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(10139).Z+"",width:"991",height:"326"})}),"\n",(0,n.jsx)(t.p,{children:"Fig. 4. Example of configuring access to forms"}),"\n",(0,n.jsxs)(t.p,{children:["The status set for a tree branch automatically applies to child branches. If necessary, a child branch can be set to a different access status, in which case the status of the parent element will be highlighted with a gray background, so that the user can visually determine that there are elements with a different access status in the structure of this branch. According to the settings shown in Fig. 4 only ",(0,n.jsx)(t.code,{children:"Templates"})," forms are available to the user in the ",(0,n.jsx)(t.code,{children:"Master data"})," menu."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(22507).Z+"",width:"251",height:"357"})}),"\n",(0,n.jsx)(t.p,{children:"Fig. 5. Result of setting access to forms"}),"\n",(0,n.jsx)(t.h4,{id:"properties-tab",children:"Properties Tab"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Properties"})," tab displays all the form elements available in the system: fields, buttons, checkboxes, etc. Like the Forms themselves, Properties are presented in tree and table form."]}),"\n",(0,n.jsx)(t.p,{children:"A role can have one of three access statuses for actions on properties:"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"View"})," \u2013 defines whether the property is visible to a user"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Change"})," - defines whether a user can change the value of the property"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Follow"})," \u2013 if the property value is an object, defines whether a user can access the object to change it"]}),"\n",(0,n.jsxs)(t.p,{children:["The access status for Properties is set in the same way as for Forms. However, given the large number of different properties in the application, on the ",(0,n.jsx)(t.code,{children:"Properties"})," tab it is convenient to define the access level to the property group corresponding to the upper branches of the tree, or to view the status of role permissions in terms of properties."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(93589).Z+"",width:"1017",height:"325"})}),"\n",(0,n.jsx)(t.p,{children:"Fig. 6. Managing access rights to properties"}),"\n",(0,n.jsxs)(t.p,{children:["To set up access rights to a particular property on a form, it is convenient to use the context menu. To do this, right-click on the button or field you want to configure and select ",(0,n.jsx)(t.code,{children:"Setup property policy"})," in the context menu. The ",(0,n.jsx)(t.code,{children:"Security policy"})," window will open, where you can set the access level to the property for each role or for several roles, then click ",(0,n.jsx)(t.code,{children:"OK"}),". All changes made and saved via the context menu are also displayed on the ",(0,n.jsx)(t.code,{children:"Properties"})," tab of the ",(0,n.jsx)(t.code,{children:"Security Policy"})," form."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(32986).Z+"",width:"1201",height:"698"})}),"\n",(0,n.jsx)(t.p,{children:"Fig. 7. Option for configuring access to an individual property"}),"\n",(0,n.jsx)(t.h4,{id:"users-tab",children:"Users Tab"}),"\n",(0,n.jsx)(t.p,{children:"This tab displays all the users to whom the highlited role is assigned as a primary or secondary role."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{src:s(11645).Z+"",width:"997",height:"324"}),"\nFig. 8 . Users tab"]}),"\n",(0,n.jsxs)(t.p,{children:["All changes made on the ",(0,n.jsx)(t.code,{children:"Security policy"})," form are activated after the next user login."]}),"\n",(0,n.jsx)(t.p,{children:"By default, there are 4 roles pre-installed in the platform:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Administrator (admin)"}),"\n",(0,n.jsx)(t.li,{children:"Readonly (readonly)"}),"\n",(0,n.jsx)(t.li,{children:"Default (default)"}),"\n",(0,n.jsx)(t.li,{children:"Self register (selfregistar)"}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Note that when set for a form or property, ",(0,n.jsx)(t.code,{children:"Default"})," access applies permission or restriction, depending on the additional roles set. The set ",(0,n.jsx)(t.code,{children:"Default"})," access does not apply the value specified in the Default role settings. To have the accesses configured in the Default role applied to a user, the user must be assigned that role."]})})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},90333:function(e,t,s){s.d(t,{Z:function(){return i}});let i=s.p+"assets/images/Security_policy_config_role-2d20206f9e382ca7723fd967959265d3.png"},10139:function(e,t,s){s.d(t,{Z:function(){return i}});let i=s.p+"assets/images/Security_policy_forms_access-754de7bf4d8d6b6c33cdb125a50b405b.png"},22507:function(e,t,s){s.d(t,{Z:function(){return i}});let i=s.p+"assets/images/Security_policy_forms_result-8097e5ee9eeb984ab2be959a50329ecc.png"},1636:function(e,t,s){s.d(t,{Z:function(){return i}});let i=s.p+"assets/images/Security_policy_info_popup-ad95af996b280475f022f0095e8c3140.png"},93589:function(e,t,s){s.d(t,{Z:function(){return i}});let i=s.p+"assets/images/Security_policy_property_access-dedb89d62c56dab843934dcfc5f1ca58.png"},32986:function(e,t,s){s.d(t,{Z:function(){return i}});let i=s.p+"assets/images/Security_policy_property_access_option-32eeac5da4d074d342201fc3eaa60d0d.png"},49096:function(e,t,s){s.d(t,{Z:function(){return i}});let i=s.p+"assets/images/Security_policy_roles-4aad449a90946a38b6db37ddfba722a1.png"},11645:function(e,t,s){s.d(t,{Z:function(){return i}});let i=s.p+"assets/images/Security_policy_users-07f3b19f7458d92d5678fe9bcc9d8f24.png"},50065:function(e,t,s){s.d(t,{Z:function(){return c},a:function(){return o}});var i=s(67294);let n={},r=i.createContext(n);function o(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);