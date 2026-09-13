# Политика безопасности

Политика безопасности определяет, к каким элементам системы — формам в навигаторе, свойствам форм и т.д. — имеет доступ каждый пользователь. Доступ задаётся не отдельному пользователю, а ролям; пользователю назначаются главная роль и, при необходимости, дополнительные роли. Итоговое право доступа складывается по всем ролям пользователя: оно есть, если хотя бы одна роль явно разрешает (`Разрешить`); иначе — если ни одна явно не запрещает (`Запретить`); в остальных случаях (роли указывают `По умолчанию`) — доступ есть. Для каждой роли отдельно настраиваются доступ к формам в навигаторе (`Разрешить` / `Запретить` / `По умолчанию`) и доступ к свойствам форм (`Просмотр` / `Изменение` / `Переход` / `Групповая корректировка`).

### Настройка ролей пользователя[​](#настройка-ролей-пользователя "Прямая ссылка на этот заголовок")

В системе используется понятие Пользователь. Пользователь - это объект, который содержит информацию об одном человеке, работающим в системе.

Функциональные возможности Пользователя определяются его Ролью или списком Ролей. Роль устанавливает какие формы, поля и кнопки будут доступны.

В карточке Пользователя (`Администрирование > Доступ > Пользователи`) указывается Главная роль, при необходимости назначаются Дополнительные роли (рис. 1.).

![](/ru/assets/images/Security_policy_roles-e015d7feb6547096765c9cb6a0743278.png)

Рис. 1. Назначение сотруднику ролей

### Настройка доступа к элементам системы[​](#настройка-доступа-к-элементам-системы "Прямая ссылка на этот заголовок")

Настройка политики безопасности для каждой Роли осуществляется в меню `Администрирование > Доступ > Политика безопасности`. На данной форме определяется состав Ролей – кнопки `Добавить`, `Удалить`, `Копировать`. При копировании Роли, копируются и все права.

![](/ru/assets/images/Security_policy_config_role-bc53a4a755e0119df87e956f904afb60.png)

Рис. 2. Настройка политики безопасности по ролям

Для каждой Роли нужно указать наименование (`Имя`) и код (`Код`), а также можно задать следующие параметры:

* `Показывать расширенное описание свойств во всплывающих подсказках` – при наведении на на свойство, кнопку, поле и т.д. во всплывающем окне будет отображаться описание.

![](/ru/assets/images/Security_policy_info_popup-1d34d9682919e69dfc540a423d8564a0.png)

Рис. 3. Расширенное описание сво-ва

* `Открывать форму один раз` – при выборе в навигаторе уже открытой на рабочем столе формы пользователь перейдет на нее, дополнительное окно открыто не будет. Если есть потребность открыть несколько окон с данной формой,необходимо удерживать клавишу `Ctrl` при вызове формы . Данное ограничение можно установить и для конкретного пользователя на вкладке `Пользователи`.
* `Автоматически переподключаться при потере соединения` – при разрыве соединения с сервером приложений клиент будет повторно подключаться к нему автоматически, без подтверждения пользователя.
* `Формы при открытии клиента `– для роли можно определить формы, которые будут открыты сразу после входа пользователя в программу. Для этого на вкладке `Навигатор`, в поле `Порядок` при открытии клиента для нужных форм указывается номер по порядку (см. рис. 2).
* `Развернуть на весь экран при открытии клиента` – при входе в систему у пользователя будет отображено только рабочее окно на весь экран без меню навигации.
* `Отключить роль` – доступы, настроенные для роли не будут применяться.

#### Вкладка Навигатор[​](#вкладка-навигатор "Прямая ссылка на этот заголовок")

На вкладке `Навигатор` отображаются все существующие в системе Формы. Они отображаются либо в виде дерева, либо в виде таблицы. В древовидном представлении список форм отражает структуру имеющихся модулей и наиболее удобен для управления доступом к ним.

Для каждой формы в колонке `Доступ` можно установить один из трех статусов:

`Разрешить` - форма будет доступна пользователю

`Запретить` - форма будет недоступна пользователю

`По умолчанию` - форма по умолчанию будет доступна пользователю с данной ролью. Если у пользователя несколько ролей, форма будет доступна если среди этих ролей есть `Разрешить` или нет `Запретить`.

![](/ru/assets/images/Security_policy_forms_access-0593d65d8a7e5c0f69e56c9099845c0f.png)

Рис. 4. Пример настройки доступа к формам

Статус, установленный для ветви дерева, автоматически действует на дочерние ветви. При необходимости, дочерней ветви можно установить другой статус доступа, в таком случае статус родительского элемента будет подсвечен серым фоном, чтобы пользователь мог визуально определить, что в структуре данной ветви есть элементы с отличным статусом допуска. В соответствии с настройками, приведенными на рис. 4 пользователь в модуле Розничная торговля не будет видеть и не сможет работать с блоком форм CRM.

![](data:image/png;base64,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)

Рис. 5. Результат настройки доступа к формам

#### Вкладка Свойства[​](#вкладка-свойства "Прямая ссылка на этот заголовок")

На вкладке `Свойства` отображены все существующие в системе свойства всех форм - это поля, кнопки, чекбоксы и т.д. Они также как и формы имеют иерархическое (Дерево) и табличное (Таблица) представление.

Для роли может быть установлен один из трех статусов доступа на действия в отношении свойств:

`Просмотр` - для пользователя свойство отображается или нет;

`Изменение` - пользователь может или нет изменить значение свойства;

`Редактирование объекта` - если значением свойства выступает объект, пользователь может или нет перейти к редактированию данного объекта.

Устанавливается статус доступа к свойствам аналогично доступу к формам. Однако, учитывая большое количество разнообразных свойств в приложении, на вкладке `Свойства` удобно определить уровень доступа к группе свойств, соответствующей верхним ветвям дерева, либо просмотреть статус допусков роли в разрезе свойств.

![](/ru/assets/images/Security_policy_property_access-20539bb7648fc7b1994254b7b6ee2796.png)

Рис. 6. Управление правами доступа к свойствам

Чтобы определить уровень доступа к конкретному свойству на форме удобно воспользоваться контекстным меню. Для этого необходимо нажать правой клавишей мыши на кнопку или поле, доступ к которому нужно настроить и в контекстном меню выбрать `Настройка политики свойств`. Откроется окно `Политики безопасности`, в котором можно установить уровень доступа к свойству для каждой роли или для нескольких, затем нажать `ОК`. Все изменения, внесенные и сохраненные через контекстное меню, также отображаются на вкладке `Свойства` формы `Политика безопасности`.

![](/ru/assets/images/Security_policy_property_access_option-cb2560612c1f25c0009f9cdd6febbc66.png)

Рис. 7. Вариант настройки доступа к отдельному свойству

Статусы `Просмотр` и `Изменение` связаны между собой, и связь настраивается двумя [рабочими параметрами](/ru/Working_parameters.md). Действие, изменение которого роли явно запрещено, по умолчанию ей и не показывается; `disableActionForbidViewOnForbidChange` (по умолчанию `false`) эту связь снимает, и запрещённое к выполнению действие остаётся видимым. Второй параметр, `disableDefaultChangeOnReadOnlyChange` (по умолчанию `false`), касается обработчиков изменения, которые на самом деле ничего не меняют, например выбора значения: по умолчанию такой обработчик считается не изменением, а навигацией, и статус `Изменение` к нему не применяется, а значение `true` заставляет проверять его наравне с обычными изменениями. На встроенную роль `Только чтение` оба параметра не влияют — для неё и связь статусов, и пропуск проверки действуют всегда.

#### Вкладка Пользователи[​](#вкладка-пользователи "Прямая ссылка на этот заголовок")

На этой вкладке отображены все пользователи системы, которым назначена выделенная роль в качестве главной либо дополнительной.

![](/ru/assets/images/Security_policy_users-f0bd13a82c0af2adafd863a83514b6d0.png)

Рис. 8. Вкладка "Пользователи"

Все изменения сделанные на форме `Политика безопасности` активизируются после очередного входа пользователя в систему.

По умолчанию в платформе предустановлены 4 роли:

* Администратор (admin)
* Только чтение (readonly)
* По умолчанию (default)
* Самостоятельная регистрация (selfRegister)

к сведению

Следует помнить, что при установке для формы или свойства доступа `По умолчанию` применяется разрешение или запрет, в зависимости от установленных дополнительных ролей. Установленный доступ `По умолчанию` не применяет значение, указанное в настройках роли По умолчанию. Чтобы для пользователя действовали доступы, настроенные в роли По умолчанию, ему необходимо назначить эту роль.

### Создание пользователей и ролей из кода[​](#создание-пользователей-и-ролей-из-кода "Прямая ссылка на этот заголовок")

Пользователи, роли и назначения ролей — обычные объекты и свойства системных модулей [`Authentication`](/ru/System_Authentication.md) и [`Security`](/ru/System_Security.md), поэтому всё, что настраивается на описанных выше формах, можно задать и в коде приложения — например, при заполнении начальных или демонстрационных данных. Такую инициализацию обычно подключают к обработчику [события запуска](/ru/Launch_events.md), например `onStarted[]`:

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

* Имя пользователя `name[Contact]` вычисляется как `firstName[Contact]` и `lastName[Contact]`, соединённые пробелом, поэтому записываются именно эти два свойства, а не само имя.
* Пароль хранится в виде хеша в `sha256Password[CustomUser]`; действие `setSHA256Password[CustomUser, STRING]` хеширует переданный пароль и записывает хеш туда.
* Главная роль записывается в `mainRole[User]`; дополнительная роль назначается записью `TRUE` в `in[CustomUser, UserRole]`. `userRoleSID[STRING]` находит роль по коду, а `customUserLogin[ISTRING]` — пользователя по логину. При сохранении изменений созданному пользователю автоматически назначается также дополнительная роль `default` (а при логине `admin` — ещё и роль `admin`).
* Объект приложения (например, сотрудник) связывается со своим пользователем обычным первичным свойством, объявляемым в приложении: `user = DATA CustomUser (Employee);`.
