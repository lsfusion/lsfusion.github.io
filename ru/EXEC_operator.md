# Оператор EXEC

Оператор `EXEC` создает [действие](/ru/Actions/.md), [выполняющее](/ru/Call_EXEC/.md) другое действие.

### Синтаксис[​](#синтаксис "Прямая ссылка на этот заголовок")

```
[EXEC] actionId(expression1, ..., expressionN) [TO toProperty]
```

### Описание[​](#описание "Прямая ссылка на этот заголовок")

Оператор `EXEC` создает действие, которое выполняет другое действие, передавая ему значения [выражений](/ru/Expression/.md) в качестве параметров. Если у выполняемого действия есть [результат](/ru/Actions/.md), его можно записать в свойство, указанное после `TO`.

### Параметры[​](#параметры "Прямая ссылка на этот заголовок")

* `actionId`

  [Идентификатор действия](/ru/IDs/.md#propertyid).

* `expression1, ..., expressionN`

  Список выражений, значения которых будут передаваться выполняемому действию в качестве аргументов. Количество выражений должно соответствовать количеству параметров выполняемого действия.

* `toProperty`

  Опциональный [идентификатор свойства](/ru/IDs/.md#propertyid). Если указан, значение, возвращаемое выполняемым действием, записывается в это свойство. Класс возвращаемого значения и сигнатура `toProperty` должны соответствовать классу результата и параметрам результата выполняемого действия.

### Примеры[​](#примеры "Прямая ссылка на этот заголовок")

```
// объявление действия importData с двумя параметрами
importData(Sku sku, Order order)  {
    MESSAGE 'Run import for ' + id(sku) + ' ' + customer(order);
}

order = DATA Order (OrderDetail) NONULL DELETE;
// объявление действия runImport, которое будет вызывать importData
runImport(OrderDetail d)  { importData(sku(d), order(d)); }

// вызов действия с результатом и запись результата через TO
getPrice (Item i) ABSTRACT NUMERIC[10,2];
currentPrice = DATA LOCAL NUMERIC[10,2] ();

showPrice (Item i)  {
    getPrice(i) TO currentPrice;
    MESSAGE 'Price: ' + currentPrice();
}

// запись результата, зависящего от дополнительного параметра
captionByLanguage (Item i) ABSTRACT STRING[100] (Language);
caption = DATA LOCAL STRING[100] (Language);

fillCaption (Item i)  {
    captionByLanguage(i) TO caption;
}
```
