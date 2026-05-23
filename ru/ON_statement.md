# Инструкция ON

Инструкция `ON` - добавление обработчика [события](/ru/Events/.md).

### Синтаксис[​](#синтаксис "Прямая ссылка на этот заголовок")

```
ON eventClause eventAction;
```

### Описание[​](#описание "Прямая ссылка на этот заголовок")

Инструкция `ON` добавляет обработчик для заданного события.

### Параметры[​](#параметры "Прямая ссылка на этот заголовок")

* `eventClause`

  [Блок описания события](/ru/Event_description_block/.md). Описывает событие, для которого необходимо добавить обработчик.

* `eventAction`

  [Контекстно-зависимый оператор-действие](/ru/Action_operators/.md#contextdependent), описывающий обработчик события.

### Примеры[​](#примеры "Прямая ссылка на этот заголовок")

```
CLASS Sku;
name = DATA STRING[100] (Sku);

ON {
    LOCAL changedName = BOOLEAN (Sku);
    changedName(Sku s) <- CHANGED(name(s));
    IF (GROUP SUM 1 IF changedName(Sku s)) THEN {
        MESSAGE 'Changed ' + (GROUP SUM 1 IF changedName(Sku s)) + ' skus!!!';
    }
}

CLASS Order;

CLASS Customer;
name = DATA STRING[50] (Customer);

customer = DATA Customer (Order);
discount = DATA NUMERIC[6,2] (Order);

ON LOCAL {
    FOR CHANGED(customer(Order o)) AND name(customer(o)) == 'Best customer' DO
        discount(o) <- 50;
}
```
