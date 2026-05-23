# How-to: Фильтрация и сортировка

## Пример 1[​](#пример-1 "Прямая ссылка на этот заголовок")

### Условие[​](#условие "Прямая ссылка на этот заголовок")

Есть остатки книг на складах.

```
CLASS Book 'Книга';
name 'Наименование' = DATA ISTRING[100] (Book);

CLASS Stock 'Склад';
name 'Наименование' = DATA ISTRING[100] (Stock);

// для примера сделано первичным свойством, хотя обычно оно вычисляемое
balance 'Остаток' = DATA INTEGER (Book, Stock); 
```

Необходимо создать форму для отображения остатков книг на заданном складе в алфавитном порядке.

### Решение[​](#решение "Прямая ссылка на этот заголовок")

```
FORM onStockObject 'Остатки'
    OBJECTS s = Stock PANEL
    PROPERTIES(s) name SELECTOR

    OBJECTS b = Book
    PROPERTIES READONLY name(b), balance(b, s)
    ORDERS name(b)

    // Вариант 1
    FILTERS balance(b, s)

    // Вариант 2
    FILTERGROUP bal
        FILTER 'С положительным остатком' balance(b, s) > 0 'F10'
        FILTER 'С отрицательными остатком' balance(b, s) < 0 'F9'
        FILTER 'С остатком' balance(b, s) 'F8' DEFAULT
        FILTER 'Без остатка' NOT balance(b, s) 'F7'
;
```

Вариант 1 устанавливает принудительный фильтр, который пользователь не сможет снять. Вариант 2 дает пользователю возможность выбирать между предопределенными критериями (по умолчанию будет использоваться тот, для которого установлена опция `DEFAULT`).

## Пример 2[​](#пример-2 "Прямая ссылка на этот заголовок")

### Условие[​](#условие-1 "Прямая ссылка на этот заголовок")

Аналогично [**Примеру 1**](#%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80-1).

Необходимо создать форму для отображения остатков книг на нескольких складах, с возможностью фильтрации по одному складу. Сортировка должна быть сначала по складу, а внутри по наименованию книги.

### Решение[​](#решение-1 "Прямая ссылка на этот заголовок")

```
filterStock = DATA LOCAL Stock ();
nameFilterStock 'Склад' = name(filterStock());

FORM onStockLocal 'Остатки'
    PROPERTIES() nameFilterStock

    OBJECTS sb = (s = Stock, b = Book)
    PROPERTIES READONLY name(s), name(b), balance(b, s)
    ORDERS name(s), name(b)

    FILTERS s == filterStock() OR NOT filterStock()
;
```

В данном случае, склад нельзя объявлять через конструкцию `OBJECTS`, поскольку тогда не будет возможности не указывать склад для фильтрации.

## Пример 3[​](#пример-3 "Прямая ссылка на этот заголовок")

### Условие[​](#условие-2 "Прямая ссылка на этот заголовок")

Есть список заказов определенным покупателям

```
CLASS Customer 'Покупатель';
name 'Наименование' = DATA ISTRING[100] (Customer);

CLASS Order 'Заказ';
date 'Дата' = DATA DATE (Order);

customer 'Покупатель' = DATA Customer (Order);
nameCustomer 'Покупатель' (Order o) = name(customer(o));
```

Необходимо создать форму для отображения списка заказов с возможностью фильтрации по датам и/или покупателям. По умолчанию, заказы должны идти по убыванию даты.

### Решение[​](#решение-2 "Прямая ссылка на этот заголовок")

```
filterCustomer = DATA LOCAL Customer ();
nameFilterCustomer 'Покупатель' = name(filterCustomer());

FORM orders 'Заказы'
    PROPERTIES() nameFilterCustomer

    OBJECTS dates = (dateFrom = DATE, dateTo = DATE) PANEL
    PROPERTIES df = VALUE(dateFrom), dt = VALUE(dateTo)

    OBJECTS o = Order
    PROPERTIES(o) READONLY do = date, nameCustomer
    ORDERS do DESC
    FILTERS date(o) >= dateFrom, date(o) <= dateTo,
            customer(o) == filterCustomer() OR NOT filterCustomer()
;
```

Следует отметить, что даты в таком случае должны быть выбраны всегда (по умолчанию, при открытии формы будут проставлены текущая дата). Покупателя же можно не выбирать.

Кроме того, нужно обратить внимание, что в `ORDER BY` указывается не выражение, а конкретное добавленное свойство на форму. Таким образом, сортировать по свойству, которое не добавлено на форму, нельзя.
