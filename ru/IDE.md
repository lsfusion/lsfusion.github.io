# IDE

### Создание нового lsFusion проекта[​](#newproject "Прямая ссылка на этот заголовок")

Выбираем пункт `Create New Project` при старте **IDEA**. Или, если **IDEA** уже запущена, выбираем в меню пункт `File > New > Project`.

![](/ru/assets/images/IDE_welcome_screen-d21f3e75944b268ebec12484fa3d4566.png)![](/ru/assets/images/IDE_create_project-345b4982dd7d51dc5e896399c331c43b.png)

Выбираем тип проекта `lsFusion`. Проверяем, что задан JDK и выбрана ссылка на библиотеку с сервером `lsFusion` (при [автоматической установке](/ru/Development_auto.md) эта ссылка устанавливается автоматически, если ее все же нет - скачиваем `Download` или выбираем уже скачанную библиотеку `Create`), нажимаем `Next`.

![](/ru/assets/images/IDE_project_type-118f09339391344ccca9db6a49d484ad.png)

Заполняем имя проекта и каталог, в котором будут находиться исходные файлы. При необходимости изменяем параметры подключения и пароли к базе данных и серверу приложений. Нажимаем `Create`.

![](/ru/assets/images/IDE_project_name-5459bfd58f14e444dd834da0364d0fac.png)

### Разработка приложения[​](#dev "Прямая ссылка на этот заголовок")

Весь исходный код на языке **lsFusion**, по умолчанию, находится в папке `src/main/lsfusion`.

Добавить новый [модуль](/ru/Modules.md) можно нажав правой кнопкой мыши на соответствующей папкой и выбрав пункт меню `New > lsFusion Module`:

![](/ru/assets/images/IDE_add_module-830d09677cb3aaf17947840b51a22567.png)

Аналогичным образом, при необходимости, можно создавать вложенные папки (пункт `Package`), группируя тем самым логически связанные модули в директории.

### Запуск сервера[​](#run "Прямая ссылка на этот заголовок")

По умолчанию, при создании нового проекта создается конфигурация запуска сервера. Соответственно запустить ее, можно выбрав пункт меню `Run -> Run 'Run lsFusion server'`, или нажав на значок ![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAIAAABL1vtsAAABUElEQVR4nGNU09BhoAwwUaifYbAYwYLGZxfjkfLS/P//3/tTjz9ef0WOK0Ss5Jm5WRn+M0j6aMlHGXJI8JJsBDMH66+33x4sPvtixw02AU75GCMJDw0WLjYSPAIF/xk+XH7x6eYbEUt5QWNpPjWRNycevj/79P/ffwzEGgEG/379eXXw7odLz8TsVcTslQX0pV4duPPl9lsGUmPk1/vvTzZcfrTywv+//2QCdGXD9NH8RWykfnv04f78My/33OaU5he1VyLHCAT4/5+BkeiwQAZccgLiLqrswtxfH75/tf8uaUawCXKK2avwqAr/+gAKFMzgxGcEExsLJFL///n36uBdEiOVkUFAR0LUVomJi/XjlZdvDt378+0XLpvQjfj79TenHL9CnDGHGO/3px9frrv848VnfP7ENOLtyYcSQuoMDIzPt1wjMpsxjpZaDDAAAHnJgr1LBlqaAAAAAElFTkSuQmCC) рядом с надписью `Run lsFusion server` в правом верхнем углу. При удачном старте самой последней строкой в логе должна быть `Server has successfully started`.

![](/ru/assets/images/IDE_run_command-3935bb054e87bbf98e26096e676d0abc.png)

![](/ru/assets/images/IDE_run_in_operationbar-e365802363c59fdf3a35a9962e80a2c2.png)

После того, как сервер успешно запущен, к нему можно подключаться при помощи веб или десктоп клиента через ярлык на рабочем столе.

### Создание конфигурации запуска сервера[​](#configuration "Прямая ссылка на этот заголовок")

Если платформа подключается к уже существующему проекту (например [через Maven](/ru/Development_manual.md#maven) к maven проекту), может потребоваться создать конфигурацию запуска сервера приложений вручную. Делается это следующим образом:

Выбираем пункт меню `Edit configurations`:

![](/ru/assets/images/IDE_edit_conf-9bda14bf5ab5b390276ebfe524008e64.png)

В открывшемся окне, жмем `+` в левом верхнем углу и в выпавшем списке выбираем `lsFusion Server`

![](/ru/assets/images/IDE_add_server-11d8cea35192d966992cba4a75bd07f3.png)

Задаем имя конфигурации и модуль (если их несколько), для которого необходимо стартовать сервер приложений lsFusion. Также в этом окне, при необходимости, можно задать процессы сборки, которые надо выполнить перед запуском конфигурации, дополнительные параметры виртуальной машины Java, и т.п.

![](/ru/assets/images/IDE_conf_name-e0f400ed6abd8ccf162f16f138334648.png)

### Сборка приложения (со встроенным сервером)[​](#build "Прямая ссылка на этот заголовок")

Для того, чтобы собрать единый jar-файл, который содержит как разработанный код, так и сам сервер приложений, можно воспользоваться следующей [инструкцией](https://blog.jetbrains.com/idea/2010/08/quickly-create-jar-artifact/). Полученный jar-файл (*artifact*) можно использовать для установки приложения на рабочий сервер в соответствии с пунктом [установка сервера приложений в качестве сервиса](/ru/Execution_manual.md#appservice). При этом так как все модули и сам сервер будут внутри одного jar-файла, процесс установки немного отличается:

* в первом пункте вместо jar-файла сервера необходимо скачать именно этот файл
* третий пункт (копирование файлов приложений на сервер) можно пропустить
