# Оператор REQUEST

Оператор `REQUEST` - создание [действия](/ru/Actions/.md), осуществляющего [запрос значения](/ru/Value_request_REQUEST/.md).

### Синтаксис[​](#синтаксис "Прямая ссылка на этот заголовок")

```
REQUEST requestAction 
DO doAction [ELSE elseAction]
```

### Описание[​](#описание "Прямая ссылка на этот заголовок")

Оператор `REQUEST` создает действие, которое позволяет отделить запрос значения от его обработки.

### Параметры[​](#параметры "Прямая ссылка на этот заголовок")

* `requestAction`

  [Контекстно-зависимый оператор-действие](/ru/Action_operators/.md), выполняет запрос значения.

* `doAction`

  [Контекстно-зависимый оператор-действие](/ru/Action_operators/.md), выполняется, если ввод был успешно завершен.

* `elseAction`

  [Контекстно-зависимый оператор-действие](/ru/Action_operators/.md), выполняется, если ввод был [отменен](/ru/Value_input/.md#result).

### Примеры[​](#примеры "Прямая ссылка на этот заголовок")

```
requestCustomer (Order o)  {
    LOCAL resultValue = STRING[100] ();
    REQUEST {
        ASK 'Choose from list?' DO
            DIALOG customers OBJECTS c = resultValue() CHANGE;
        ELSE
            INPUT = resultValue() CHANGE;
    } DO
        customer(o) <- resultValue();
}

FORM request
    OBJECTS o = Order
    PROPERTIES(o) customer ON CHANGE requestCustomer(o) // будет работать, к примеру, групповая корректировка
;
```
