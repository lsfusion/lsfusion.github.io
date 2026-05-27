# Активность (ACTIVE)

Оператор *активности* создаёт свойство либо действие, возвращающее информацию об активном элементе формы. В качестве элемента может выступать:

* Свойство — возвращает `TRUE`, если фокус находится на заданном [свойстве](/ru/Properties/.md) (или [действии](/ru/Actions/.md)) на форме; `NULL` в остальных случаях, в том числе если форма не открыта.
* Закладка — возвращает `TRUE`, если заданная закладка активна в [панели закладок](/ru/Form_design/.md#containers); `NULL` в остальных случаях.
* Форма — записывает в локальное свойство `TRUE`, если у пользователя активна заданная [форма](/ru/Forms/.md) или форма, [расширяющая](/ru/Form_extension/.md) её, и `FALSE` в противном случае.
* Объекты — возвращает текущее значение указанного объекта в группе объектов формы.

Для закладки, свойства и объектов оператор создаёт обычное свойство; платформа автоматически обновляет его значение при изменении фокуса / переключении закладок / изменении текущего объекта, что позволяет использовать его в других свойствах — в частности, чтобы пропускать вычисление значений, зависящих от неактивных вкладок. Активность формы, напротив, определяется состоянием пользовательской сессии и реализуется через [действие](/ru/Actions/.md), которое записывает результат проверки в [локальное](/ru/Data_properties_DATA/.md#local) свойство `isActiveForm[]`.

### Язык[​](#язык "Прямая ссылка на этот заголовок")

Все формы активности реализуются единым [оператором `ACTIVE`](/ru/ACTIVE_operator/.md): `ACTIVE TAB` (активность закладки), `ACTIVE PROPERTY` (активность свойства), `ACTIVE FORM` (активность формы — создаёт действие), `ACTIVE formObjectId` (значение активного объекта в группе).

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
```

```
FORM users
OBJECTS c = CustomUser
PROPERTIES(c) name, login;

activeLogin = ACTIVE PROPERTY users.login(c);
EXTEND FORM users
PROPERTIES() activeLogin;
```

```
FORM exampleForm;
testActive  {
    ACTIVE FORM exampleForm;
    IF isActiveForm() THEN MESSAGE 'Example form is active';
}
```
