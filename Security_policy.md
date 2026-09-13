# Security policy

The security policy determines which system elements — forms in the navigator, form properties, and so on — each user has access to. Access is granted not to individual users but to roles; a user is assigned a primary role and, where needed, additional roles. The effective access is combined across all of the user's roles: access is granted if any role explicitly permits it (`Permit`); otherwise, granted unless some role explicitly forbids it (`Forbid`); in the remaining case (every role says `Default`) — granted. For each role, access to navigator forms (`Permit` / `Forbid` / `Default`) and access to form properties (`View` / `Change` / `Follow` / `Group Change`) are configured separately.

### Customizing user roles[​](#customizing-user-roles "Direct link to Customizing user roles")

The system uses the concept of User. A user is an object that contains information about one person working in the system.

The functionality available to a User is determined by their Role or list of Roles. The Role determines which forms, fields, and buttons are available.

The User’s card (`Administration > Security > Users`) indicates which roles are assigned to the user (Fig. 1.).

![](/assets/images/Security_policy_roles-868876a1c4ef91abf4e36d555b1dc001.png)

Fig. 1. Assigning Employee Roles

### Setting access to system elements[​](#setting-access-to-system-elements "Direct link to Setting access to system elements")

The security policy for each Role is configured in the `Administration > Security > Security Policy`. This is where the composition of Roles is determined, using the `Add`, `Delete`, and `Copy` buttons. When a Role is copied, all rights are copied too.

![](/assets/images/Security_policy_config_role-9769262950947d11d308c38ea936ffcb.png)

Fig. 2. Configuring security policy by role

For each Role you need to specify a name (`Name`) and a code (`Code`), and you can also set the following parameters:

* `Show detailed property description` – if you hover over a property, button, field, etc., a description will be displayed in a popup window.

![](/assets/images/Security_policy_info_popup-436b8db23093dc3a64a96e642747c615.png)

Fig. 3. Detailed property description

* `Single form instance` - when selecting a form already open on the desktop in the navigator, the user will go to it, no additional window will be opened. If there is a need to open several windows with this form, it is necessary to hold the `Ctrl` key when calling the form. This restriction can also be set for a specific user on the `Users` tab.
* `Auto-reconnect on connection lost` – when the connection to the application server is dropped, the client reconnects to it automatically, without asking the user for confirmation.
* `Forms on client’s startup` - for a role it is possible to define the forms that will be opened immediately after the user logs into the program. For this purpose, on the `Navigator` tab, in the `Number on client’s startup` field for the required forms the number in order is specified (see Fig. 2).
* `Maximize on client's startup` - on logging in, the program will be opened in the full screen mode ( the navigation menu will be hidden)
* `Disable role` - access rights configured for the role will not be applicable.

#### Navigator Tab[​](#navigator-tab "Direct link to Navigator Tab")

The `Navigator` tab displays all Forms that exist in the system. They are displayed either as a tree or as a table. In the tree view, the list of forms reflects the structure of existing modules and is most convenient to control access to them.

You can set one of three statuses for each form in the `Access` column:

`Permit` – a user can access the form

`Forbid` – a user cannot access the form

`Default` - the form will be available by default to the user with the given role. If a user has multiple roles, the form will be available if there is `Permit` or no `Forbid` among these roles.

![](/assets/images/Security_policy_forms_access-bdf54f52279ab6723aaeabf5518afc13.png)

Fig. 4. Example of configuring access to forms

The status set for a tree branch automatically applies to child branches. If necessary, a child branch can be set to a different access status, in which case the status of the parent element will be highlighted with a gray background, so that the user can visually determine that there are elements with a different access status in the structure of this branch. According to the settings shown in Fig. 4 only `Templates` forms are available to the user in the `Master data` menu.

![](data:image/png;base64,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)

Fig. 5. Result of setting access to forms

#### Properties Tab[​](#properties-tab "Direct link to Properties Tab")

The `Properties` tab displays all the form elements available in the system: fields, buttons, checkboxes, etc. Like the Forms themselves, Properties are presented in tree and table form.

A role can have one of three access statuses for actions on properties:

`View` – defines whether the property is visible to a user

`Change` - defines whether a user can change the value of the property

`Follow` – if the property value is an object, defines whether a user can access the object to change it

The access status for Properties is set in the same way as for Forms. However, given the large number of different properties in the application, on the `Properties` tab it is convenient to define the access level to the property group corresponding to the upper branches of the tree, or to view the status of role permissions in terms of properties.

![](/assets/images/Security_policy_property_access-4187426bff2f02e721ba63b794112911.png)

Fig. 6. Managing access rights to properties

To set up access rights to a particular property on a form, it is convenient to use the context menu. To do this, right-click on the button or field you want to configure and select `Setup property policy` in the context menu. The `Security policy` window will open, where you can set the access level to the property for each role or for several roles, then click `OK`. All changes made and saved via the context menu are also displayed on the `Properties` tab of the `Security Policy` form.

![](/assets/images/Security_policy_property_access_option-6c2b4f6367d1fef68eb1d8b5e5c4269a.png)

Fig. 7. Option for configuring access to an individual property

The `View` and `Change` statuses are coupled, and the coupling is configured by two [working parameters](/Working_parameters.md). An action a role is explicitly forbidden to change is by default not shown to it either; `disableActionForbidViewOnForbidChange` (`false` by default) removes that coupling, and an action forbidden to run stays visible. The second parameter, `disableDefaultChangeOnReadOnlyChange` (`false` by default), concerns change handlers that do not actually change anything, a value selector for example: by default such a handler counts as navigation rather than a change, and the `Change` status is not applied to it, while a value of `true` makes it be checked on a par with ordinary changes. Neither parameter affects the built-in `Readonly` role — for it both the coupling of the statuses and the skipping of the check always apply.

#### Users Tab[​](#users-tab "Direct link to Users Tab")

This tab displays all the users to whom the highlited role is assigned as a primary or secondary role.

![](/assets/images/Security_policy_users-6b70c3d0bcb7c63a6f67d34b1187677a.png) Fig. 8 . Users tab

All changes made on the `Security policy` form are activated after the next user login.

By default, there are 4 roles pre-installed in the platform:

* Administrator (admin)
* Readonly (readonly)
* Default (default)
* Self register (selfRegister)

info

Note that when set for a form or property, `Default` access applies permission or restriction, depending on the additional roles set. The set `Default` access does not apply the value specified in the Default role settings. To have the accesses configured in the Default role applied to a user, the user must be assigned that role.

### Creating users and roles in code[​](#creating-users-and-roles-in-code "Direct link to Creating users and roles in code")

Users, roles, and role assignments are ordinary objects and properties of the system modules [`Authentication`](/System_Authentication.md) and [`Security`](/System_Security.md), so everything configured on the forms above can also be set up in application code — for example, when seeding initial or demo data. Such initialization is usually plugged into a [launch event](/Launch_events.md) handler such as `onStarted[]`:

```
IF NOT userRoleSID('manager') THEN
    NEW r = UserRole {
        name(r) <- 'Manager';
        sid(r) <- 'manager';
    }

IF NOT customUserLogin('jsmith') THEN
    NEW u = CustomUser {
        login(u) <- 'jsmith';
        firstName(u) <- 'John';
        lastName(u) <- 'Smith';
        email(u) <- 'jsmith@company.com';
        setSHA256Password(u, 'secret');
        mainRole(u) <- userRoleSID('manager');
        in(u, userRoleSID('readonly')) <- TRUE;
    }
```

* The user's name `name[Contact]` is computed as `firstName[Contact]` and `lastName[Contact]` joined by a space, so it is these two properties that are written, not the name itself.
* The password is stored as a hash in `sha256Password[CustomUser]`; the action `setSHA256Password[CustomUser, STRING]` hashes the given password and writes the hash there.
* The main role is written to `mainRole[User]`; an additional role is assigned by writing `TRUE` to `in[CustomUser, UserRole]`. `userRoleSID[STRING]` finds a role by its code, and `customUserLogin[ISTRING]` finds a user by login. When the changes are saved, a newly created user is also assigned the `default` additional role automatically (and the `admin` role too when the login is `admin`).
* An application object (for example, an employee) is linked to its user by an ordinary data property declared in the application: `user = DATA CustomUser (Employee);`.
