# Операторы AND, OR, NOT, XOR

Операторы `AND`, `OR`, `NOT`, `XOR` создают [свойства](/ru/Properties/.md), реализующие [логические операции](/ru/Logical_operators_AND_OR_NOT_XOR/.md).

### Синтаксис[​](#синтаксис "Прямая ссылка на этот заголовок")

```
expression1 AND expression2
expression1 OR expression2
expression1 XOR expression2
NOT expression1
```

### Описание[​](#описание "Прямая ссылка на этот заголовок")

`AND`, `OR` и `XOR` - инфиксные операторы, принимающие два операнда; `NOT` - префиксный оператор, принимающий один операнд. Порядок вычисления относительно других операторов определяется [приоритетом операторов](/ru/Operator_priority/.md).

### Параметры[​](#параметры "Прямая ссылка на этот заголовок")

* `expression1, expression2`

  [Выражения](/ru/Expression/.md), используемые в качестве операндов.

### Примеры[​](#примеры "Прямая ссылка на этот заголовок")

```
likes = DATA BOOLEAN (Person, Person);
likes(Person a, Person b, Person c) = likes(a, b) AND likes(a, c);
outOfInterval1(value, left, right) = value < left OR value > right;
outOfInterval2(value, left, right) = NOT (value >= left AND value <= right);
```
