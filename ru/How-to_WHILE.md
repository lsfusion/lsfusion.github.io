# How-to: WHILE

## Пример 1[​](#пример-1 "Прямая ссылка на этот заголовок")

### Условие[​](#условие "Прямая ссылка на этот заголовок")

Есть заказ, для которого задана дата.

```
CLASS Order 'Заказ';

date 'Дата' = DATA DATE (Order);
```

Нужно для каждой даты из заданного интервала выдать сообщение пользователю с количеством заказов за эту дату.

### Решение[​](#решение "Прямая ссылка на этот заголовок")

```
countOrders (DATE date) = GROUP SUM 1 BY date(Order o);

messageCountOrders 'Посчитать кол-во заказов' (DATE dFrom, DATE dTo)  {
    // Вариант 1
    LOCAL date = DATE ();
    date() <- dFrom;

    WHILE date() <= dTo DO {
        MESSAGE 'Кол-во заказов за ' + date() + ' : ' + OVERRIDE countOrders(date()), 0.0;
        date() <- sum(date(), 1);
    }

    // Вариант 2
    FOR iterate(DATE date, dFrom, dTo) DO
        MESSAGE 'Кол-во заказов за ' + date + ' : ' + OVERRIDE countOrders(date()), 0.0;
}
```

Оба варианта идентичны с точки зрения полученного результата.

Для добавления к дате одного дня используется свойство `sum`, определенное в системном [модуле](/ru/Modules/.md) `Time`.

## Пример 2[​](#пример-2 "Прямая ссылка на этот заголовок")

### Условие[​](#условие-1 "Прямая ссылка на этот заголовок")

Аналогично [**Примеру 1**](#%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80-1). Также определены строки заказов, для каждой из которой определены сумма (полная) и сумма скидки.

```
CLASS OrderDetail 'Строка заказа';
order 'Заказ' = DATA Order (OrderDetail) NONULL DELETE;

sum 'Сумма' = DATA NUMERIC[14,2] (OrderDetail);
discountSum 'Сумма скидки' = DATA NUMERIC[14,2] (OrderDetail);
```

Нужно создать действие, которое "распишет" заданную сумму скидки по строкам, начиная со строки с наибольшей суммой.

### Решение[​](#решение-1 "Прямая ссылка на этот заголовок")

```
distributeDiscount 'Распределить скидку' (Order o, NUMERIC[14,2] discount)  {
    LOCAL discount = NUMERIC[14,2] ();
    discount() <- discount;

    LOCAL leftSum = NUMERIC[14,2] (OrderDetail);
    leftSum(OrderDetail d) <- sum(d) WHERE order(d) == o;

    WHILE discount() > 0 DO {
        // находим строку с наибольшей "оставшейся" суммой
        FOR OrderDetail d == [ GROUP LAST OrderDetail od ORDER leftSum(od), od BY order(od)](o) DO { 
            discountSum(d) <- MIN leftSum(d), discount();
            discount() <- discount() (-) discountSum(d);
        }
        IF (GROUP SUM 1 IF leftSum(OrderDetail d) > 0) THEN
            BREAK; // не осталось больше чего расписывать
    }
}
```

## Пример 3[​](#пример-3 "Прямая ссылка на этот заголовок")

### Условие[​](#условие-2 "Прямая ссылка на этот заголовок")

Задана логика изменения остатка для книги следующим образом :

```
CLASS Book 'Книга';

CLASS Ledger 'Изменение остатка';
date 'Дата' = DATA DATE (Ledger);
book 'Книга' = DATA Book (Ledger);
quantity 'Кол-во' = DATA NUMERIC[14,2] (Ledger);
```

Нужно создать действие, которое посчитает накопленный остаток (интеграл) за определенный интервал времени.

### Решение[​](#решение-2 "Прямая ссылка на этот заголовок")

```
calculateIntegral (DATE dFrom, DATE dTo)  {
    LOCAL date = DATE();
    date() <- dFrom;

    LOCAL balance = NUMERIC[14,2] (Book);
    balance(Book b) <- [ GROUP SUM quantity(Ledger l) IF date(l) < dFrom BY book(l)](b);

    LOCAL cumBalance = NUMERIC[14,2] (Book);

    WHILE date() <= dTo DO {
        cumBalance(Book b) <- cumBalance(b) (+) balance(b); //
        balance(Book b) <- balance(b) (+) [ GROUP SUM quantity(Ledger l) BY book(l), date(l)](b, date());
        date() <- sum(date(), 1);
    }

    FOR cumBalance(Book b) DO {
        MESSAGE 'Накопленный остаток по книге ' + b + ' : ' + cumBalance(b);
    }
}
```
