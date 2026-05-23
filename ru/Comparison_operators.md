# Операторы сравнения

Операторы `==`, `=`, `!=`, `<`, `>`, `<=`, `>=` - создание [свойств](/ru/Properties/.md), реализующих [операции сравнения](/ru/Comparison_operators_=_etc/.md).

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

### Параметры[​](#параметры "Прямая ссылка на этот заголовок")

* `expression1, expression2`

  [Выражения](/ru/Expression/.md), значения которых будут являться аргументами операторов сравнения.

### Примеры[​](#примеры "Прямая ссылка на этот заголовок")

```
equalBarcodes = barcode(a) == barcode(b);
outOfIntervalValue1(value, left, right) = value < left OR value > right;
outOfIntervalValue2(value, left, right) = NOT (value >= left AND value <= right);
```
