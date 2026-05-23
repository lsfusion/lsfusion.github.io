# How-to: ACTIVATE

## Пример 1[​](#пример-1 "Прямая ссылка на этот заголовок")

### Условие[​](#условие "Прямая ссылка на этот заголовок")

Определена логика книг и категорий. Создана форма со списком книг, разбитых по категориям.

```
REQUIRE Time;

CLASS Category 'Категория';
name 'Наименование' = DATA ISTRING[50] (Category) IN id;

CLASS Book 'Книга';
name 'Наименование' = DATA ISTRING[50] (Book) IN id;

category 'Категория' = DATA Category (Book) NONULL;
nameCategory 'Категория' (Book b) = name(category(b));

FORM book 'Книга'
    OBJECTS b = Book PANEL
    PROPERTIES(b) name, nameCategory

    EDIT Book OBJECT b
;

FORM books 'Книги'
    OBJECTS c = Category
    PROPERTIES(c) READONLY name
    PROPERTIES(c) NEWSESSION NEW, EDIT, DELETE

    OBJECTS b = Book
    PROPERTIES(b) READONLY name
    FILTERS category(b) == c
;

NAVIGATOR {
    NEW books;
}
```

Нужно создать действие, которое создаст новую книгу, автоматически проставит текущую категорию и выберет ее активной после того, как пользователь сохранит и закроет форму.

### Решение[​](#решение "Прямая ссылка на этот заголовок")

```
createBook 'Создать книгу' (Category c)  {
    NEWSESSION {
        NEW newBook = Book {
            category(newBook) <- c;
            DIALOG book OBJECTS b = newBook INPUT DO {
                ACTIVATE books.b = newBook;
            }
        }
    }
}

EXTEND FORM books
    PROPERTIES(c) createBook DRAW b TOOLBAR
;
```

После закрытия формы вызывается [оператор `ACTIVATE`](/ru/ACTIVATE_operator/.md), который делает добавленный объект активным.

## Пример 2[​](#пример-2 "Прямая ссылка на этот заголовок")

### Условие[​](#условие-1 "Прямая ссылка на этот заголовок")

Аналогично [**Примеру 1**](#%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80-1). Также добавлена логика покупателей. Для каждого покупателя и книги можно задать цену в определенной форме.

```
CLASS Customer 'Покупатель';
name 'Наименование' = DATA ISTRING[50] (Customer) IN id;

price 'Цена' = DATA NUMERIC[14,2] (Customer, Book);

FORM prices 'Цены'
    OBJECTS c = Customer PANEL
    PROPERTIES(c) name SELECTOR

    OBJECTS b = Book
    PROPERTIES name(b) READONLY, price(c, b)
;

NAVIGATOR {
    NEW prices;
}
```

Нужно добавить покупателя по умолчанию, который будет проставляться при открытии формы.

### Решение[​](#решение-1 "Прямая ссылка на этот заголовок")

```
defaultCustomer 'Покупатель по умолчанию' = DATA Customer ();
nameDefaultCustomer 'Покупатель по умолчанию' () = name(defaultCustomer());

EXTEND FORM options PROPERTIES() nameDefaultCustomer;
DESIGN options { commons { MOVE PROPERTY(nameDefaultCustomer()); } }

EXTEND FORM prices
    EVENTS ON INIT { ACTIVATE prices.c = defaultCustomer(); }
;
```

Свойство с покупателем по умолчанию добавляется на форму `'Настройка'` во вкладку `'Общие'`. Текущий объект изменится при входе на форму, так как сработает [событие `ON INIT`](/ru/Event_block/.md).

## Пример 3[​](#пример-3 "Прямая ссылка на этот заголовок")

### Условие[​](#условие-2 "Прямая ссылка на этот заголовок")

Предположим, что есть некоторая форма отчетов, в котором задан интервал дат.

```
FORM report 'Отчет'
    OBJECTS dFrom = DATE PANEL, dTo = DATE PANEL
    PROPERTIES VALUE(dFrom), VALUE(dTo)
;

NAVIGATOR {
    NEW report;
}
```

Нужно сделать кнопки, которые будут изменять интервал на последнюю неделю, текущий месяц и последний месяц.

### Решение[​](#решение-2 "Прямая ссылка на этот заголовок")

```
setReportLastWeek 'Последняя неделя' ()  {
    ACTIVATE report.dFrom = subtract(currentDate(), 7);
    ACTIVATE report.dTo = subtract(currentDate(), 1);
}
setReportCurrentMonth 'Текущий месяц' ()  {
    ACTIVATE report.dFrom = firstDayOfMonth(currentDate());
    ACTIVATE report.dTo = lastDayOfMonth(currentDate());
}
setReportLastMonth 'Последний месяц' ()  {
    ACTIVATE report.dFrom = firstDayOfMonth(subtract(firstDayOfMonth(currentDate()), 1));
    ACTIVATE report.dTo = subtract(firstDayOfMonth(currentDate()), 1);
}

EXTEND FORM report
    PROPERTIES() setReportLastWeek, setReportCurrentMonth, setReportLastMonth
;
```

Свойства по работе с датами находятся в [системном модуле](/ru/Modules/.md) `Time`, который подключается в самом начале через инструкцию `REQUIRE`.

## Пример 4[​](#пример-4 "Прямая ссылка на этот заголовок")

### Условие[​](#условие-3 "Прямая ссылка на этот заголовок")

Пользователь открывает форму отчета и сразу должен ввести дату начала; фокус нужно поставить на соответствующее поле без клика мышью.

```
FORM report 'Отчет'
    OBJECTS dFrom = DATE PANEL, dTo = DATE PANEL
    PROPERTIES VALUE(dFrom), VALUE(dTo)
;
```

### Решение[​](#решение-3 "Прямая ссылка на этот заголовок")

```
EXTEND FORM report
    EVENTS ON INIT { ACTIVATE PROPERTY report.dFrom; }
;
```

При открытии формы срабатывает событие [`ON INIT`](/ru/Event_block/.md) и [оператор `ACTIVATE`](/ru/ACTIVATE_operator/.md) переводит фокус на поле `dFrom`. `ACTIVATE PROPERTY` работает с любым свойством, отображаемым на форме — как с панельным, так и с гридовым или древовидным.

## Пример 5[​](#пример-5 "Прямая ссылка на этот заголовок")

### Условие[​](#условие-4 "Прямая ссылка на этот заголовок")

На форме CRM две закладки — `'Клиенты'` и `'Заказы'`. После создания нового заказа нужно автоматически переключиться на закладку `'Заказы'` и выделить созданный заказ.

```
CLASS Customer 'Клиент';
name 'Наименование' = DATA ISTRING[50] (Customer);

CLASS Order 'Заказ';
number 'Номер' = DATA INTEGER (Order);
customer 'Клиент' = DATA Customer (Order);

FORM crm 'CRM'
    OBJECTS c = Customer
    PROPERTIES(c) name

    OBJECTS o = Order
    PROPERTIES(o) number, nameCustomer = name(customer(o))
;

DESIGN crm {
    NEW tabs FIRST {
        tabbed = TRUE;
        NEW customersTab { caption = 'Клиенты'; MOVE BOX(c); }
        NEW ordersTab { caption = 'Заказы'; MOVE BOX(o); }
    }
}
```

### Решение[​](#решение-4 "Прямая ссылка на этот заголовок")

```
createOrder 'Создать заказ' (Customer c)  {
    NEW o = Order {
        customer(o) <- c;
        ACTIVATE TAB crm.ordersTab;
        ACTIVATE crm.o = o;
    }
}

EXTEND FORM crm
    PROPERTIES(c) createOrder
;
```

`ACTIVATE TAB` переключает активную закладку панели на `'Заказы'`, после чего `ACTIVATE crm.o = o` делает созданный заказ текущим объектом.
