# For production

## Installation[​](#installation "Direct link to Installation")

In addition to installing **lsFusion**, these installers/scripts also install **OpenJDK**, **PostgreSQL**, and **Tomcat**. Tomcat is embedded into the lsFusion Client installation, and OpenJDK and PostgreSQL are installed separately (in particular, in separate folders).

<!-- -->

* Windows
* Linux

Executable exe files: **lsFusion 6.2** (OpenJDK **25.0.2**, PostgreSQL **18.3**, Tomcat **9.0.117**, IntelliJ IDEA **2026.1**)

* [x64](https://download.lsfusion.org/exe/lsfusion-6.2-x64.exe)

* Older versions

  * lsFusion 5.1 Server & Client
    <!-- -->
    * [x64](https://download.lsfusion.org/exe/lsfusion-5.1-x64.exe)

  * lsFusion 4.1 Server & Client

    <!-- -->

    * [x32](https://download.lsfusion.org/exe/lsfusion-4.1.exe)
    * [x64](https://download.lsfusion.org/exe/lsfusion-4.1-x64.exe)

  * lsFusion 3.1 Server & Client

    <!-- -->

    * [x32](https://download.lsfusion.org/exe/lsfusion-3.1.exe)
    * [x64](https://download.lsfusion.org/exe/lsfusion-3.1-x64.exe)

  * lsFusion 2.4 Server & Client

    <!-- -->

    * [x32](https://download.lsfusion.org/exe/lsfusion-2.4.exe)
    * [x64](https://download.lsfusion.org/exe/lsfusion-2.4-x64.exe)

Subsequently, `$INSTALL_DIR$` refers to the folder selected during the installation of lsFusion (by default, `Program Files/lsFusion <version>`). It is also assumed that all parameters (ports, web context name) are left equal to default values.

Bash scripts using dnf / apt (the latest stable releases are used as minor versions):

lsFusion **6** Server & Client (+ OpenJDK (**default-jdk / java-openjdk**), PostgreSQL **18**, Tomcat **9.0.104**):

| OS                               | Command / Script                                                        |
| -------------------------------- | ----------------------------------------------------------------------- |
| RHEL 8+ / CentOS 8+ / Fedora 35+ | `source <(curl -s https://download.lsfusion.org/dnf/install-lsfusion6)` |
| Ubuntu 18+ / Debian 9+           | `source <(curl -s https://download.lsfusion.org/apt/install-lsfusion6)` |

## After Installation[​](#after-installation "Direct link to After Installation")

### Ports[​](#ports "Direct link to Ports")

After the installation is completed, the following will by default be locally installed on the computer and launched as services:

* DB server (PostgreSQL) on port `5432`
* application server (Server) on port `7652`
* web server (Client) on port `8080`

### Installing / updating an application[​](#installing--updating-an-application "Direct link to Installing / updating an application")

In order to upload the developed logic to the installed application server (Server), you must:

Place [modules](/Modules/.md) developed in the lsFusion language as files with an lsf extension in a folder located in the server's [classpath](/Launch_parameters/.md#appjava) (default value for automatic installation, see below). In addition, the rest of the resource files if any must also be placed there (e.g. report files, compiled Java files, images, etc.). These files may be placed in subfolders of the classpath, as well as inside jar files (zip archives with the jar extension). After all the files have been copied, you need to [restart](#restart) the server.

info

It is often convenient to place all project files inside a single jar file. To generate such a file automatically, you can use [Maven](/Development_manual/.md#maven) (with assemble and noserver profiles) or the build tools built into the [IDE](/IDE/.md#build).

By default, the server's classpath is equal to `$APP_DIR$;$APP_DIR$/*;server.jar`, i.e. the `$APP_DIR$` folder and all its subfolders, all jar files in the `$APP_DIR$` folder (but not its subfolders), and also the jar file of the application server itself.

* Windows
* Linux

`$APP_DIR$` is equal to `$INSTALL_DIR$/lib`

`$APP_DIR$` is equal to `/var/lib/lsfusion`

The application server is installed and started under the automatically created non-privileged user `lsfusion` so files in the folder should be accessible for this user to read.

### Installing / updating clients[​](#installing--updating-clients "Direct link to Installing / updating clients")

To give users access to the installed system, you must:

Send users a link to `http://<web address of the web server (Client)>:8080`. When users open this link, they will be redirected by default to the login page, where, if necessary, they can install the desktop client via Java Web Start (requires Java (JDK) installed, for example, by following [this](https://developers.redhat.com/products/openjdk/download) link with registration or this one [without](https://github.com/ojdkbuild/ojdkbuild)). Web and desktop clients are updated automatically with [updates to the web server](#update) (Client)

info

Under Windows, you can also use desktop client [installers](https://download.lsfusion.org/exe/) (`lsfusion-desktop-*` files with the correct OS version and bit width). However, unlike installing with Java Web Start, a desktop client installed in this way will not be automatically updated. Therefore, you will need to update it manually by downloading the file of the new version of the desktop client (`lsfusion-client-6.<new version>.jar`) from [the central server](https://download.lsfusion.org/java/) and replacing the `$INSTALL_DIR$/client.jar` file with it.

warning

All paths and commands are given below for the major version 6 of the platform (for other versions just replace 6 with the required number, for example `lsfusion6-server` → `lsfusion11-server`)

* Windows
* Linux

All paths by default

Paths changed (in particular with symlinks) in accordance with Linux ideology

### Updating[​](#update "Direct link to Updating")

Programs installed separately (OpenJDK, PostgreSQL) are also updated separately (for more details about this process, see the documentation for these programs)

* Windows
* Linux

Platform components are also updated separately from each other. To do this, you must download the file of the new version of the component from [the central server](https://download.lsfusion.org/java/) and replace the following file with it:

| Component                   | Files                                                                                                                                                                                                                                                                                                                                                 |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Application Server (Server) | File on the central server: `lsfusion-server-6.<new version>.jar`<br />File to replace: `$INSTALL_DIR$/Server/server.jar`                                                                                                                                                                                                                             |
| Web server (Client)         | File on the central server: `lsfusion-client-6.<new version>.war`<br />File to replace: `$INSTALL_DIR$/Client/webapps/ROOT.war`<br />To update Tomcat, you need to download the archive with the new version of Tomcat and unzip it to the `$INSTALL_DIR$/Client` folder without the `webapps` directory and the [startup parameters](#settings) file |

Platform components are also updated separately from each other. To do this, you must run the commands:

#### Application Server (Server)[​](#application-server-server "Direct link to Application Server (Server)")

| OS                               | Command                       |
| -------------------------------- | ----------------------------- |
| RHEL 8+ / CentOS 8+ / Fedora 35+ | `dnf update lsfusion6-server` |
| Ubuntu 18+ / Debian 9+           | `apt update lsfusion6-server` |

#### Web server (Client)[​](#web-server-client "Direct link to Web server (Client)")

| OS                               | Command                       |
| -------------------------------- | ----------------------------- |
| RHEL 8+ / CentOS 8+ / Fedora 35+ | `dnf update lsfusion6-client` |
| Ubuntu 18+ / Debian 9+           | `apt update lsfusion6-client` |

#### Unstable versions[​](#unstable-versions "Direct link to Unstable versions")

Upgrade platform to a SNAPSHOT version : `source <(curl -s https://download.lsfusion.org/apt/update-lsfusion6) <platform version>`.

For example, `source <(curl -s https://download.lsfusion.org/apt/update-lsfusion6) 6.2-SNAPSHOT`.

## Custom installation[​](#custom-installation "Direct link to Custom installation")

If any of the programs listed in the installation (platform components) do not need to be installed / are already installed on your computer:

* Windows
* Linux

These programs can be excluded during installation using the corresponding graphical interface.

The following are scripts for installing specific platform components:

Database Server - PostgreSQL **18**:

| OS                     | Command / Script                                                           |
| ---------------------- | -------------------------------------------------------------------------- |
| Ubuntu 18+ / Debian 9+ | `source <(curl -s https://download.lsfusion.org/apt/install-lsfusion6-db)` |

Application Server - lsFusion 6 Server (+ OpenJDK (**default-jdk**)):

| OS                   | Command / Script                                                               |
| -------------------- | ------------------------------------------------------------------------------ |
| Ubuntu 18 / Debian 9 | `source <(curl -s https://download.lsfusion.org/apt/install-lsfusion6-server)` |

Web server - lsFusion 6 Client (+ Tomcat 9.0.104):

| OS                   | Command / Script                                                               |
| -------------------- | ------------------------------------------------------------------------------ |
| Ubuntu 18 / Debian 9 | `source <(curl -s https://download.lsfusion.org/apt/install-lsfusion6-client)` |

When installing platform components on different computers, it is also necessary to [configure the parameters](#settings) to connect them to each other

| Components on different computers                   | Connection parameters                                                 | Configurable file                                                |
| --------------------------------------------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------- |
| DB server and application server (Server)           | [Application server to DB server](/Launch_parameters/.md)             | [File](#settings) lsFusion application server startup parameters |
| Application server (Server) and web server (Client) | [Web server to application server](/Launch_parameters/.md#connectapp) | [File](#settings) lsFusion web server startup parameters         |

info

When installing under Windows, the above parameters are requested during the installation process and the parameter files are configured automatically.

## Manual setup (file paths, service names)[​](#manual-setup-file-paths-service-names "Direct link to Manual setup (file paths, service names)")

### [Startup parameters](/Launch_parameters/.md)[​](#settings "Direct link to settings")

* Windows
* Linux

| Component                   | java                                                                                                                                                                             | lsfusion                                                    |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| Application server (Server) | Java tab in the graphical interface `$INSTALL_DIR/Server/bin/lsfusion6_serverw.exe`<br />[`classpath`](/Launch_parameters/.md#appjava) - the Classpath parameter in the same tab | `$INSTALL_DIR/Server/conf/settings.properties` file         |
| Web server (Client)         | Java tab in the graphical interface `$INSTALL_DIR/Client/bin/lsfusion6_serverw.exe`                                                                                              | `$INSTALL_DIR/Client/conf/catalina/localhost/ROOT.xml` file |
| Desktop client              | Java parameters are set inside the `j2se` tag in the jnlp file.                                                                                                                  |                                                             |

| Component                   | java                                                                                                                                                                          | lsfusion                                                 |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| Application server (Server) | The `FUSION_OPTS` parameter in the file `/etc/lsfusion6-server/lsfusion.conf`<br />[`classpath`](/Launch_parameters/.md#appjava) - the `CLASSPATH` parameter in the same file | `/etc/lsfusion6-server/settings.properties` file         |
| Web server (Client)         | The `CATALINA_OPTS` parameter in the file `/etc/lsfusion6-client/lsfusion.conf`                                                                                               | `/etc/lsfusion6-client/catalina/localhost/ROOT.xml` file |
| Desktop client              | Java parameters are set inside the `j2se` tag in the jnlp file.                                                                                                               |                                                          |

### Restart[​](#restart "Direct link to Restart")

Any changes made to the startup parameters, as well as changes to lsFusion modules, require a server restart (when changing lsFusion modules only the application server (Server)). This can be done with:

* Windows
* Linux

#### Application server (Server)[​](#application-server-server-1 "Direct link to Application server (Server)")

GUI

```
Control Panel > Admin > Services > lsFusion 6 Server
```

Command line

```
# Stop server
$INSTALL_DIR/Server/bin/lsfusion6_server.exe //SS//lsfusion6_server
 
# Start server
$INSTALL_DIR/Server/bin/lsfusion6_server.exe //ES//lsfusion6_server
```

#### Web server (Client)[​](#web-server-client-1 "Direct link to Web server (Client)")

GUI

```
Control Panel > Admin > Services > lsFusion 6 Client
```

Command line

```
# Stop server
$INSTALL_DIR/Client/bin/lsfusion6_client.exe //SS//lsfusion6_client
 
# Start server
$INSTALL_DIR/Client/bin/lsfusion6_client.exe //ES//lsfusion6_client
```

#### Application server (Server)[​](#application-server-server-2 "Direct link to Application server (Server)")

Command line

```
# Stop server
systemctl stop lsfusion6-server
 
# Start server
systemctl start lsfusion6-server
```

#### Web server (Client)[​](#web-server-client-2 "Direct link to Web server (Client)")

Command line

```
# Stop client
systemctl stop lsfusion6-client
 
# Start client
systemctl start lsfusion6-client
```

### [Logs](/Journals_and_logs/.md)[​](#logs "Direct link to logs")

Platform logs are written to the following folders:

* Windows
* Linux

| Component                   | Folder                          |
| --------------------------- | ------------------------------- |
| Application server (Server) | `$INSTALL_DIR$/Server/logs`     |
| Web server (Client)         | `$INSTALL_DIR$/Client/logs`     |
| Desktop client              | `Users/<username>/.fusion/logs` |

| Component                   | Folder                          |
| --------------------------- | ------------------------------- |
| Application server (Server) | `/var/log/lsfusion6-server`     |
| Web server (Client)         | `/var/log/lsfusion6-client`     |
| Desktop client              | `/home/<username>/.fusion/logs` |

The main logs (including the process of stopping and starting the server) are located in:

* Application server (Server) - `stdout`
* Web server (Client) - `catalina.out` (since the web server runs on Tomcat).

### HTTPS (Let's Encrypt)[​](#https-lets-encrypt "Direct link to HTTPS (Let's Encrypt)")

To configure HTTPS using [Let's Encrypt](https://letsencrypt.org/):

* Linux

1. Redirect port `443` to `8443`:
   <!-- -->
   ```
   sudo iptables -t nat -A PREROUTING -p tcp --dport 443 -j REDIRECT --to-ports 8443
   ```
2. Install [Certbot](https://certbot.eff.org/) and generate a certificate:
   <!-- -->
   ```
   apt install certbot
   certbot certonly --standalone -d myaddress.com
   ```
3. Grant read permissions to the certificates:
   <!-- -->
   ```
   chmod -R +r /etc/letsencrypt
   chmod +x /etc/letsencrypt/archive
   chmod +x /etc/letsencrypt/live
   ```
4. Update `/etc/lsfusion6-client/server.xml`:
   <!-- -->
   ```
   <Connector port="8443" protocol="org.apache.coyote.http11.Http11NioProtocol" 
              maxThreads="150" SSLEnabled="true" >
       <SSLHostConfig>
           <Certificate certificateKeyFile="/etc/letsencrypt/live/myaddress.com/privkey.pem" 
                        certificateFile="/etc/letsencrypt/live/myaddress.com/cert.pem" 
                        certificateChainFile="/etc/letsencrypt/live/myaddress.com/chain.pem" 
                        type="RSA" />
       </SSLHostConfig>
   </Connector>
   ```
5. Restart the web server (Client):
   <!-- -->
   ```
   systemctl stop lsfusion6-client
   systemctl start lsfusion6-client
   ```

### [Locale](/Internationalization/.md)[​](#locale "Direct link to locale")

The locale used by the platform is determined based on the locale installed in the operating system. If necessary, it can be changed with:

* Windows
* Linux

GUI

```
Control Panel > Language and Regional Standards
```

Command line

```
localectl set-locale LANG=en_US.utf8
```
