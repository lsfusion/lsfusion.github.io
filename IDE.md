# IDE

### Creating a new lsFusion project[​](#newproject "Direct link to Creating a new lsFusion project")

Launch **IDEA** and select `Create New Project`, or when **IDEA** is already opened, select `File > New > Project` from the menu.

![](/assets/images/IDE_welcome_screen-ff82581a9598bcaffd393dec5c788b8c.png)![](/assets/images/IDE_create_project-8640d4998e8033a35066de300b37fdb6.png)

Select project type `lsFusion`. Make sure that the JDK is set and the link to the library with the `lsFusion` is selected (when [automatic installation](/Development_auto/.md) is used, this link is set automatically; otherwise, click `Download` or select the previously downloaded library `Create`) and then click `Next`.

![](/assets/images/IDE_project_type-397757bad125a2cb7afa56c520966e89.png)

Fill in the name of the project and the directory where the source files will be stored. Adjust the connection parameters and passwords for the database and application server when necessary. Click `Create`.

![](/assets/images/IDE_project_name-10a2a5eabfa580965dd9e2250cf83c18.png)

### Developing an application[​](#dev "Direct link to Developing an application")

All the source code written in **lsFusion** is stored by default in `src/main/lsfusion`.

To add a new [module](/Modules/.md), right-click the corresponding folder and select `New > lsFusion Module` from the menu:

![](/assets/images/IDE_add_module-fa65855dcf14a8ad210a8e84f5708906.png)

You can also create subfolders (by choosing `Package`) to group similar modules into a directory.

### Starting up a server[​](#run "Direct link to Starting up a server")

When you create a new project, a server startup configuration is also created by default. You can run it by selecting `Run -> Run 'Run lsFusion server'` or by clicking on the symbol ![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAVCAYAAABLy77vAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACzSURBVDhPY7Sxd/zPQAXABKUpBiPNIE5HPgYmXtLswKqaRYaVgdtXgIFNn4uBgZkRKoof4LYWaAC7HifYQBZpNqggbkDQ/SAvcjrxEvQu0QFByLtEGwQGeLxLmkF4AGkG/f3P8PPSd4avmz8w/Hn6CyoIAUQb9OfJb7ABvy5+AxuIDgga9O/zP4bv+z4zfN//CczGBXAbhMcb2ABWgwh5AxvAahAhb2ADRAc2ITDYDGJgAACJ0j/l7e/1MQAAAABJRU5ErkJgggYzeynsXmc9QM0TfQdEVFImyymaq9IHw2AAUzxLpDCHHLBqtycE+qwYFrqn0OEL14eR2y9e+RQ0oWI6Oorx6DCY4lXlUqXKiBy4XjYBdAYiSPUk0GVFy9M/B3Vh7v5jkSEkYhPQmXR5mSnNus+BBEe71opUfBb94d5yQa2BFCa4g8G2AczHE7D0YK16T075/2k9/Wgk+ASZRpR4pMZctgAAAABJRU5ErkJggg==) next to the caption `Run lsFusion server` in the upper right corner. If startup is successful, the last line in the log should be `Server has successfully started`.

![](/assets/images/IDE_run_command-c7ccd47415cedef009039a6162e368f6.png)

![](/assets/images/IDE_run_in_operationbar-cb8d82ed2e4e6df5fe3246b73622c7ee.png)

After the server has been successfully started, you can connect to it over a web-based or desktop client via a shortcut on your desktop.

### Creating a server startup configuration[​](#configuration "Direct link to Creating a server startup configuration")

If the platform is embedded to an existing project (for example, [via Maven](/Development_manual/.md#maven) for a Maven project), you may need to manually create a server startup configuration for the applications. This is done as follows:

In the menu, select `Edit configurations`:

![](/assets/images/IDE_edit_conf-c1fd9d30fdae3b2b31896f42e68fe8e7.png)

In the window that opens, click `+` in the upper left corner and select `lsFusion Server` from the drop-down list

![](/assets/images/IDE_add_server-6cc3e286096aa956dc1ad54e141cba8a.png)

Set the configuration name and the module (if there are several) for which you need to start the lsFusion application server. In the same window, if necessary, you can specify the build process to be followed at configuration startup, additional parameters for the Java virtual machine, etc.

![](/assets/images/IDE_conf_name-3528ff77d50bc982583cf2f7d5ccca3b.png)

### Building an application (with embedded server)[​](#build "Direct link to Building an application (with embedded server)")

To compile a single JAR file that contains both the developed code and the application server itself, you can use the following [guide](https://blog.jetbrains.com/idea/2010/08/quickly-create-jar-artifact/). The result JAR file (*artifact*) can be used to install applications on a production server as described in the section [installing an applications server as a service](/Execution_manual/.md#appservice). Note that since all modules and the server itself will be inside the same JAR file, the installation process is slightly different:

* in the first section instead of the server JAR file this file must be downloaded
* the third section (copying application files to the server) can be skipped
