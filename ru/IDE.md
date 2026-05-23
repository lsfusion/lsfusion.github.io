# IDE

### Создание нового lsFusion проекта[​](#newproject "Прямая ссылка на этот заголовок")

Выбираем пункт `Create New Project` при старте **IDEA**. Или, если **IDEA** уже запущена, выбираем в меню пункт `File > New > Project`.

![](/ru/assets/images/IDE_welcome_screen-ff82581a9598bcaffd393dec5c788b8c.png)![](/ru/assets/images/IDE_create_project-8640d4998e8033a35066de300b37fdb6.png)

Выбираем тип проекта `lsFusion`. Проверяем, что задан JDK и выбрана ссылка на библиотеку с сервером `lsFusion` (при [автоматической установке](/ru/Development_auto/.md) эта ссылка устанавливается автоматически, если ее все же нет - скачиваем `Download` или выбираем уже скачанную библиотеку `Create`), нажимаем `Next`.

![](/ru/assets/images/IDE_project_type-397757bad125a2cb7afa56c520966e89.png)

Заполняем имя проекта и каталог, в котором будут находиться исходные файлы. При необходимости изменяем параметры подключения и пароли к базе данных и серверу приложений. Нажимаем `Create`.

![](/ru/assets/images/IDE_project_name-10a2a5eabfa580965dd9e2250cf83c18.png)

### Разработка приложения[​](#dev "Прямая ссылка на этот заголовок")

Весь исходный код на языке **lsFusion**, по умолчанию, находится в папке `src/main/lsfusion`.

Добавить новый [модуль](/ru/Modules/.md) можно нажав правой кнопкой мыши на соответствующей папкой и выбрав пункт меню `New > lsFusion Module`:

![](/ru/assets/images/IDE_add_module-fa65855dcf14a8ad210a8e84f5708906.png)

Аналогичным образом, при необходимости, можно создавать вложенные папки (пункт `Package`), группируя тем самым логически связанные модули в директории.

Более подробную информацию о процессе разработки можно найти в этой [статье](https://habr.com/ru/company/lsfusion/blog/465573/).

### Запуск сервера[​](#run "Прямая ссылка на этот заголовок")

По умолчанию, при создании нового проекта создается конфигурация запуска сервера. Соответственно запустить ее, можно выбрав пункт меню `Run -> Run 'Run lsFusion server'`, или нажав на значок ![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAVCAYAAABLy77vAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACzSURBVDhPY7Sxd/zPQAXABKUpBiPNIE5HPgYmXtLswKqaRYaVgdtXgIFNn4uBgZkRKoof4LYWaAC7HifYQBZpNqggbkDQ/SAvcjrxEvQu0QFByLtEGwQGeLxLmkF4AGkG/f3P8PPSd4avmz8w/Hn6CyoIAUQb9OfJb7ABvy5+AxuIDgga9O/zP4bv+z4zfN//CczGBXAbhMcb2ABWgwh5AxvAahAhb2ADRAc2ITDYDGJgAACJ0j/l7e/1MQAAAABJRU5ErkJgggYzeynsXmc9QM0TfQdEVFImyymaq9IHw2AAUzxLpDCHHLBqtycE+qwYFrqn0OEL14eR2y9e+RQ0oWI6Oorx6DCY4lXlUqXKiBy4XjYBdAYiSPUk0GVFy9M/B3Vh7v5jkSEkYhPQmXR5mSnNus+BBEe71opUfBb94d5yQa2BFCa4g8G2AczHE7D0YK16T075/2k9/Wgk+ASZRpR4pMZctgAAAABJRU5ErkJggg==) рядом с надписью `Run lsFusion server` в правом верхнем углу. При удачном старте самой последней строкой в логе должна быть `Server has successfully started`.

![](/ru/assets/images/IDE_run_command-c7ccd47415cedef009039a6162e368f6.png)

![](/ru/assets/images/IDE_run_in_operationbar-cb8d82ed2e4e6df5fe3246b73622c7ee.png)

После того, как сервер успешно запущен, к нему можно подключаться при помощи веб или десктоп клиента через ярлык на рабочем столе.

### Создание конфигурации запуска сервера[​](#configuration "Прямая ссылка на этот заголовок")

Если платформа подключается к уже существующему проекту (например [через Maven](/ru/Development_manual/.md#maven) к maven проекту), может потребоваться создать конфигурацию запуска сервера приложений вручную. Делается это следующим образом:

Выбираем пункт меню `Edit configurations`:

![](/ru/assets/images/IDE_edit_conf-c1fd9d30fdae3b2b31896f42e68fe8e7.png)

В открывшемся окне, жмем `+` в левом верхнем углу и в выпавшем списке выбираем `lsFusion Server`

![](/ru/assets/images/IDE_add_server-6cc3e286096aa956dc1ad54e141cba8a.png)

Задаем имя конфигурации и модуль (если их несколько), для которого необходимо стартовать сервер приложений lsFusion. Также в этом окне, при необходимости, можно задать процессы сборки, которые надо выполнить перед запуском конфигурации, дополнительные параметры виртуальной машины Java, и т.п.

![](/ru/assets/images/IDE_conf_name-3528ff77d50bc982583cf2f7d5ccca3b.png)

### Сборка приложения (со встроенным сервером)[​](#build "Прямая ссылка на этот заголовок")

Для того, чтобы собрать единый jar-файл, который содержит как разработанный код, так и сам сервер приложений, можно воспользоваться следующей [инструкцией](https://blog.jetbrains.com/idea/2010/08/quickly-create-jar-artifact/). Полученный jar-файл (*artifact*) можно использовать для установки приложения на рабочий сервер в соответствии с пунктом [установка сервера приложений в качестве сервиса](/ru/Execution_manual/.md#appservice). При этом так как все модули и сам сервер будут внутри одного jar-файла, процесс установки немного отличается:

* в первом пункте вместо jar-файла сервера необходимо скачать именно этот файл
* третий пункт (копирование файлов приложений на сервер) можно пропустить
