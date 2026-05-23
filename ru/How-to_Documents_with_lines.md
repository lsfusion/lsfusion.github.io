# How-to: Документы со строками

## Пример 1[​](#пример-1 "Прямая ссылка на этот заголовок")

### Условие[​](#условие "Прямая ссылка на этот заголовок")

Есть заказы и их спецификация в виде строк.

```
CLASS Book 'Книга';
name 'Наименование' = DATA ISTRING[100] (Book) IN id;

CLASS Order 'Заказ';
date 'Дата' = DATA DATE (Order);
number 'Номер' = DATA STRING[10] (Order);

CLASS OrderDetail 'Строка заказа';
order 'Заказ' = DATA Order (OrderDetail) NONULL DELETE;

book 'Книга' = DATA Book (OrderDetail) NONULL;
nameBook 'Книга' (OrderDetail d) = name(book(d));

quantity 'Количество' = DATA INTEGER (OrderDetail);
price 'Цена' = DATA NUMERIC[14,2] (OrderDetail);
```

Необходимо создать форму со списком заказов с возможностью их добавления, редактирования и удаления.

### Решение[​](#решение "Прямая ссылка на этот заголовок")

```
FORM order 'Заказ'
    OBJECTS o = Order PANEL
    PROPERTIES(o) date, number

    OBJECTS d = OrderDetail
    PROPERTIES(d) nameBook, quantity, price, NEW, DELETE
    FILTERS order(d) == o

    EDIT Order OBJECT o
;


FORM orders 'Заказы'
    OBJECTS o = Order
    PROPERTIES(o) READONLY date, number
    PROPERTIES(o) NEWSESSION NEW, EDIT, DELETE
;

NAVIGATOR {
    NEW orders;
}
```

На форме `order` для объекта строки не добавляется ссылка на заказ, так как при добавлении объекта через `NEW`, ссылка будет автоматически проставлена на основании конструкции `FILTERS`.

## Пример 2[​](#пример-2 "Прямая ссылка на этот заголовок")

### Условие[​](#условие-1 "Прямая ссылка на этот заголовок")

Аналогично [**Примеру 1**](#%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80-1).

Необходимо добавить на форму со списком заказов их спецификацию.

### Решение[​](#решение-1 "Прямая ссылка на этот заголовок")

```
EXTEND FORM orders
    OBJECTS d = OrderDetail
    PROPERTIES(d) READONLY nameBook, quantity, price
    FILTERS order(d) == o
;
```

Это бывает удобно, чтобы пользователь мог смотреть состав заказа, не редактируя его.
