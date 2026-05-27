# Операторы сравнения

Операторы `==`, `=`, `!=`, `<`, `>`, `<=`, `>=` создают [свойства](/ru/Properties/.md), реализующие [операции сравнения](/ru/Comparison_operators_=_etc/.md).

### Синтаксис[​](#синтаксис "Прямая ссылка на этот заголовок")

```
expression1 == expression2
expression1 = expression2
expression1 != expression2
expression1 < expression2
expression1 > expression2
expression1 <= expression2
expression1 >= expression2
```

### Описание[​](#описание "Прямая ссылка на этот заголовок")

Формы `=` и `==` эквивалентны. Каждый оператор принимает два операнда и не может быть сцеплен — запись `expression1 < expression2 < expression3` недопустима. Порядок вычисления относительно других операторов определяется [приоритетом операторов](/ru/Operator_priority/.md).

### Параметры[​](#параметры "Прямая ссылка на этот заголовок")

* `expression1, expression2`

  [Выражения](/ru/Expression/.md), значения которых будут являться аргументами операторов сравнения.

### Примеры[​](#примеры "Прямая ссылка на этот заголовок")

```
equalBarcodes = barcode(a) == barcode(b);
outOfIntervalValue1(value, left, right) = value < left OR value > right;
outOfIntervalValue2(value, left, right) = NOT (value >= left AND value <= right);
```
