# IDE

### Creating a new lsFusion project[​](#newproject "Direct link to Creating a new lsFusion project")

Launch **IDEA** and select `Create New Project`, or when **IDEA** is already opened, select `File > New > Project` from the menu.

![](/assets/images/IDE_welcome_screen-d21f3e75944b268ebec12484fa3d4566.png)![](/assets/images/IDE_create_project-345b4982dd7d51dc5e896399c331c43b.png)

Select project type `lsFusion`. Make sure that the JDK is set and the link to the library with the `lsFusion` is selected (when [automatic installation](/Development_auto.md) is used, this link is set automatically; otherwise, click `Download` or select the previously downloaded library `Create`) and then click `Next`.

![](/assets/images/IDE_project_type-118f09339391344ccca9db6a49d484ad.png)

Fill in the name of the project and the directory where the source files will be stored. Adjust the connection parameters and passwords for the database and application server when necessary. Click `Create`.

![](/assets/images/IDE_project_name-5459bfd58f14e444dd834da0364d0fac.png)

### Developing an application[​](#dev "Direct link to Developing an application")

All the source code written in **lsFusion** is stored by default in `src/main/lsfusion`.

To add a new [module](/Modules.md), right-click the corresponding folder and select `New > lsFusion Module` from the menu:

![](/assets/images/IDE_add_module-830d09677cb3aaf17947840b51a22567.png)

You can also create subfolders (by choosing `Package`) to group similar modules into a directory.

### Starting up a server[​](#run "Direct link to Starting up a server")

When you create a new project, a server startup configuration is also created by default. You can run it by selecting `Run -> Run 'Run lsFusion server'` or by clicking on the symbol ![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAIAAABL1vtsAAABUElEQVR4nGNU09BhoAwwUaifYbAYwYLGZxfjkfLS/P//3/tTjz9ef0WOK0Ss5Jm5WRn+M0j6aMlHGXJI8JJsBDMH66+33x4sPvtixw02AU75GCMJDw0WLjYSPAIF/xk+XH7x6eYbEUt5QWNpPjWRNycevj/79P/ffwzEGgEG/379eXXw7odLz8TsVcTslQX0pV4duPPl9lsGUmPk1/vvTzZcfrTywv+//2QCdGXD9NH8RWykfnv04f78My/33OaU5he1VyLHCAT4/5+BkeiwQAZccgLiLqrswtxfH75/tf8uaUawCXKK2avwqAr/+gAKFMzgxGcEExsLJFL///n36uBdEiOVkUFAR0LUVomJi/XjlZdvDt378+0XLpvQjfj79TenHL9CnDGHGO/3px9frrv848VnfP7ENOLtyYcSQuoMDIzPt1wjMpsxjpZaDDAAAHnJgr1LBlqaAAAAAElFTkSuQmCC) next to the caption `Run lsFusion server` in the upper right corner. If startup is successful, the last line in the log should be `Server has successfully started`.

![](/assets/images/IDE_run_command-3935bb054e87bbf98e26096e676d0abc.png)

![](/assets/images/IDE_run_in_operationbar-e365802363c59fdf3a35a9962e80a2c2.png)

After the server has been successfully started, you can connect to it over a web-based or desktop client via a shortcut on your desktop.

### Creating a server startup configuration[​](#configuration "Direct link to Creating a server startup configuration")

If the platform is embedded to an existing project (for example, [via Maven](/Development_manual.md#maven) for a Maven project), you may need to manually create a server startup configuration for the applications. This is done as follows:

In the menu, select `Edit configurations`:

![](/assets/images/IDE_edit_conf-9bda14bf5ab5b390276ebfe524008e64.png)

In the window that opens, click `+` in the upper left corner and select `lsFusion Server` from the drop-down list

![](/assets/images/IDE_add_server-11d8cea35192d966992cba4a75bd07f3.png)

Set the configuration name and the module (if there are several) for which you need to start the lsFusion application server. In the same window, if necessary, you can specify the build process to be followed at configuration startup, additional parameters for the Java virtual machine, etc.

![](/assets/images/IDE_conf_name-e0f400ed6abd8ccf162f16f138334648.png)

### Building an application (with embedded server)[​](#build "Direct link to Building an application (with embedded server)")

To compile a single JAR file that contains both the developed code and the application server itself, you can use the following [guide](https://blog.jetbrains.com/idea/2010/08/quickly-create-jar-artifact/). The result JAR file (*artifact*) can be used to install applications on a production server as described in the section [installing an applications server as a service](/Execution_manual.md#appservice). Note that since all modules and the server itself will be inside the same JAR file, the installation process is slightly different:

* in the first section instead of the server JAR file this file must be downloaded
* the third section (copying application files to the server) can be skipped
