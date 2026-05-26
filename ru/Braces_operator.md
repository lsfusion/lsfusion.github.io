# Оператор {...}

Оператор `{...}` создает [действие](/ru/Actions/.md), реализующее [последовательность других действий](/ru/Sequence/.md).

### Синтаксис[​](#синтаксис "Прямая ссылка на этот заголовок")

```
{
    operator1
    ...
    operatorN
}
```

Операторы могут быть двух видов:

```
actionOperator
LOCAL [NESTED [manageType]] name1, ..., nameN = returnClass (paramClass1, ..., paramClassN)
```

### Описание[​](#описание "Прямая ссылка на этот заголовок")

Последовательность [операторов-действий](/ru/Action_operators/.md) и операторов `LOCAL`, заключенных в фигурные скобки, создает новое действие, выполнение которого - это последовательное выполнение перечисленных действий и создание [локальных свойств](/ru/Data_properties_DATA/.md). Область видимости созданных внутри оператора `{...}` локальных свойств заканчивается в конце этого оператора.

### Параметры[​](#параметры "Прямая ссылка на этот заголовок")

* `actionOperator`

  [Контекстно-зависимый оператор-действие](/ru/Action_operators/.md#contextdependent). После каждого оператора должна идти точка с запятой, за исключением операторов, заканчивающихся закрывающей фигурной скобкой. Лишние точки с запятой не являются ошибкой.

* `NESTED`

  Ключевое слово, помечающее локальное свойство как [вложенное](/ru/Session_management/.md#nested). Без дополнительных модификаторов свойство трактуется как вложенное и при пересечении [`NEWSESSION`](/ru/NEWSESSION_operator/.md), и при выполнении [`APPLY`](/ru/APPLY_operator/.md) / [`CANCEL`](/ru/CANCEL_operator/.md). Семантика та же, что и в [операторе `DATA`](/ru/DATA_operator/.md).

* `manageType`

  Определяет, когда сохраняются значения вложенного свойства:

  * `MANAGESESSION` - свойство трактуется как вложенное только для [`APPLY`](/ru/APPLY_operator/.md) / [`CANCEL`](/ru/CANCEL_operator/.md).
  * `NOMANAGESESSION` - свойство трактуется как вложенное только при пересечении [`NEWSESSION`](/ru/NEWSESSION_operator/.md).

* `name1, ..., nameN`

  Список имен создаваемых локальных свойств. Имена задаются [простыми идентификаторами](/ru/IDs/.md#id).

* `returnClass`

  [Идентификатор класса](/ru/IDs/.md#classid) возвращаемого значения локального свойства.

* `paramClass1, ..., paramClassN`

  Список идентификаторов классов параметров локального свойства.

### Примеры[​](#примеры "Прямая ссылка на этот заголовок")

```
CLASS Currency;
name = DATA STRING[30] (Currency);
code = DATA INTEGER (Currency);

CLASS Order;
currency = DATA Currency (Order);
customer = DATA STRING[100] (Order);
copy 'Копировать' (Order old)  {
    NEW new = Order {  // создается действие, состоящее из последовательного выполнения двух действий
        currency(new) <- currency(old); // точка с запятой указывается после каждого оператора
        customer(new) <- customer(old);
    } // в этой строке точка с запятой не ставится, потому что оператор заканчивается на }
}

loadDefaultCurrency(ISTRING[30] name, INTEGER code)  {
    NEW c = Currency {
        name(c) <- name;
        code(c) <- code;
    }
}
run ()  {
    loadDefaultCurrency('USD', 866);
    loadDefaultCurrency('EUR', 1251);
}
```
