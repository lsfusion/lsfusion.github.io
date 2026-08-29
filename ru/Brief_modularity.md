# Brief: модули

## Модули и порядок[​](#модули-и-порядок "Прямая ссылка на этот заголовок")

*Модуль* — функционально законченная часть проекта: объявления классов, свойств, действий, форм, событий, ограничений ([модули](/ru/Modules/.md)). Один модуль — один файл `.lsf`, начинающийся с [заголовка модуля](/ru/Module_header/.md): `MODULE`, `REQUIRE`, `PRIORITY`, `NAMESPACE`.

`REQUIRE` перечисляет модули, от которых текущий [зависит](/ru/Modules/.md#depends). Зависимость транзитивна, циклы не допускаются, и по ней строится порядок инициализации: модуль инициализируется после всех своих зависимостей. От модуля `System` зависит любой модуль. Зависимость определяет и видимость: элемент можно найти по имени только в модуле-зависимости, поэтому расширять чужой функционал позволяет техника [расширений](/ru/Extensions/.md), см. [Brief: расширения](/ru/Brief_extensions/.md).

[Проект](/ru/Projects/.md) — совокупность модулей и сопутствующих файлов; по умолчанию модулями считаются все файлы `.lsf` в classpath сервера приложений, а параметры запуска `logics.includePaths`, `logics.topModule`, `logics.orderDependencies` сужают этот набор и переопределяют порядок.

**Аналогия**: пакет или сборка.

```
MODULE Sale;
REQUIRE System, Utils, Item;
NAMESPACE Sale;
```

## Системные модули[​](#системные-модули "Прямая ссылка на этот заголовок")

*Системные модули* поставляются вместе с платформой — это стандартная библиотека, которую проект подключает через `REQUIRE` и не переопределяет ([системные модули](/ru/System_modules/.md)). Двенадцать из них платформа загружает сама — `System`, `Service`, `Reflection`, `Authentication`, `Security`, `SystemEvents`, `Email`, `Icon`, `Scheduler`, `Time`, `Utils`, `UserEvents`, — но загруженность не означает зависимость: неявной зависимостью каждого модуля является только `System`, а объявление из любого другого требует `REQUIRE`.

| Модуль                                            | Для чего                                              |
| ------------------------------------------------- | ----------------------------------------------------- |
| [`System`](/ru/System_System/.md)                 | корневые типы, базовые классы, инфраструктура         |
| [`Utils`](/ru/System_Utils/.md)                   | вспомогательные свойства и действия общего назначения |
| [`Time`](/ru/System_Time/.md)                     | свойства и операции над датой и временем              |
| [`Authentication`](/ru/System_Authentication/.md) | пользователи, контакты, вход в систему                |
| [`Security`](/ru/System_Security/.md)             | роли и политики доступа                               |
| [`Service`](/ru/System_Service/.md)               | сервисные действия и настройки сервера                |
| [`SystemEvents`](/ru/System_SystemEvents/.md)     | события жизненного цикла сервера                      |
| [`UserEvents`](/ru/System_UserEvents/.md)         | программный доступ к фильтрам и сортировкам формы     |
| [`Reflection`](/ru/System_Reflection/.md)         | метаданные о навигаторе, формах, свойствах, таблицах  |
| [`Scheduler`](/ru/Scheduler/.md)                  | запуск действий по расписанию                         |
| [`Email`](/ru/System_Email/.md)                   | отправка и приём почты                                |
| [`Icon`](/ru/System_Icon/.md)                     | каталог иконок интерфейса                             |

Прикладные дополнения: `Backup`, `Chat`, [`Eval`](/ru/Eval_EVAL/.md), `Excel`, `Document` / `Word`, `Image` / `OpenCV`, `I18n`, `Integration`, `MasterData`, [`Numerator`](/ru/Utils_Numerator/.md), `Hierarchy`, `Historizable`, `Geo`, `Printer` / `QZTray` / `Sound` / `Com`, `ProcessMonitor` / `Profiler`, `RabbitMQ` / `WebSocket`, `Messenger` со своими `Telegram` / `Slack` / `Viber` / `Whatsapp` / `Skype`, `SQLUtils`, `DefaultData`, `Schedule`.

Всё это — обычные объявления в `.lsf`, а не примитивы языка: `lpad`, `currentDate`, `currentUser` — свойства, искать их следует в ветке `paradigm`.
