# Оператор ACTIVE

Оператор `ACTIVE` - создание [свойства](/ru/Properties/.md) или [действия](/ru/Actions/.md), возвращающего информацию об [активном](/ru/Activity_ACTIVE/.md) элементе формы: закладке, свойстве (или действии), форме либо текущем объекте в группе объектов.

### Синтаксис[​](#синтаксис "Прямая ссылка на этот заголовок")

```
ACTIVE TAB formName.componentSelector
ACTIVE PROPERTY formPropertyId
ACTIVE FORM formName

ACTIVE formObjectId
```

### Описание[​](#описание "Прямая ссылка на этот заголовок")

Синтаксис оператора `ACTIVE` зависит от вида проверяемой активности.

#### Активность закладки или свойства[​](#активность-закладки-или-свойства "Прямая ссылка на этот заголовок")

Формы `ACTIVE TAB` и `ACTIVE PROPERTY` создают свойство без параметров типа `BOOLEAN`, реализующее проверку активности закладки или свойства на форме. Платформа пересчитывает значение свойства автоматически:

* `TAB` — значение пересчитывается при переключении закладок на форме. Как правило, используется для вычисления значений других свойств (например, для `SHOWIF`, в условиях выгрузки и т. п.), чтобы избежать вычислений на неактивных закладках.
* `PROPERTY` — значение пересчитывается при изменении фокуса на форме и рассылается на клиент.

Если вместо чтения состояния закладки требуется выполнить действие в момент переключения на неё, используется обработчик [`EVENTS ON TAB`](/ru/Event_block/.md).

#### Активность формы[​](#активность-формы "Прямая ссылка на этот заголовок")

Форма `ACTIVE FORM` создаёт действие, выполняющее проверку активности указанной формы у пользователя и записывающее результат (`TRUE` или `FALSE`) во встроенное [локальное](/ru/Data_properties_DATA/.md#local) свойство `System.isActiveForm[]`. Результат доступен для чтения через свойство `isActiveForm()` в том же сеансе / блоке действия.

#### Значение активного объекта[​](#значение-активного-объекта "Прямая ссылка на этот заголовок")

Форма `ACTIVE formObjectId` (без уточнителей `TAB`/`PROPERTY`/`FORM`) создаёт свойство без параметров, возвращающее текущее значение указанного объекта формы.

### Параметры[​](#параметры "Прямая ссылка на этот заголовок")

* `formName`

  Имя формы. [Составной идентификатор](/ru/IDs/.md#cid).

* `componentSelector`

  [Селектор](/ru/DESIGN_statement/.md#selector) компонента дизайна. Компонент должен быть закладкой панели вкладок (то есть находиться внутри контейнера со свойством `tabbed = TRUE`).

* `formPropertyId`

  Глобальный [идентификатор свойства или действия на форме](/ru/IDs/.md#formpropertyid), активность которого проверяется.

* `formObjectId`

  Глобальный [идентификатор объекта на форме](/ru/IDs/.md#groupobjectid), значение которого возвращается.

### Примеры[​](#примеры "Прямая ссылка на этот заголовок")

```
//Форма с двумя закладками
FORM tabbedForm 'Форма с табами'
    OBJECTS u = CustomUser
    PROPERTIES(u) name

    OBJECTS c = Chat
    PROPERTIES(c) name
;

DESIGN tabbedForm {
    NEW tabPane FIRST {
        tabbed = TRUE;
        NEW contacts {
            caption = 'Контакты';
            MOVE BOX(u);
        }
        NEW recent {
            caption = 'Последние';
            MOVE BOX(c);
        }
    }
}

//Активна ли закладка 'Последние'
recentActive() = ACTIVE TAB tabbedForm.recent;

//Свойство вычисляется только когда активна закладка 'Последние'
//(за счет этого тяжелое вычисление не выполняется, пока закладка скрыта)
chatNameIfActive (Chat c) = name(c) IF ACTIVE TAB tabbedForm.recent;
```

```
FORM users
    OBJECTS c = CustomUser
    PROPERTIES(c) name, login
;

activeLogin = ACTIVE PROPERTY users.login(c);
EXTEND FORM users
    PROPERTIES() activeLogin
;

//Подсказку показываем только когда фокус на поле login
loginHint 'Введите логин в латинице' () = 'Введите логин в латинице' IF activeLogin();
EXTEND FORM users
    PROPERTIES() loginHint
;
```

```
FORM exampleForm;
testActive  {
    ACTIVE FORM exampleForm;
    IF isActiveForm() THEN MESSAGE 'Example form is active';
}
```

```
FORM report
    OBJECTS dFrom = DATE PANEL
    PROPERTIES VALUE(dFrom)
;

//Сохраняем текущее значение dFrom из формы отчета во внешнее свойство
savedFromDate = DATA DATE ();
saveFromDate { savedFromDate() <- ACTIVE report.dFrom; }
```
