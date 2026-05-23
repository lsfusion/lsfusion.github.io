# Операторы AND, OR, NOT, XOR

Операторы `AND`, `OR`, `NOT`, `XOR` - создание [свойств](/ru/Properties/.md), реализующих [логические операции](/ru/Logical_operators_AND_OR_NOT_XOR/.md).

### Синтаксис[​](#синтаксис "Прямая ссылка на этот заголовок")

```
expression1 AND expression2
expression1 OR expression2
expression1 XOR expression2
NOT expression1
```

### Параметры[​](#параметры "Прямая ссылка на этот заголовок")

* `expression1, expression2`

  [Выражения](/ru/Expression/.md), значения которых будут являться аргументами операторов. Значения выражений будут рассматриваться как значения [класса `BOOLEAN`](/ru/Built-in_classes/.md) в зависимости от того, равны они `NULL` или нет.

### Примеры[​](#примеры "Прямая ссылка на этот заголовок")

```
likes = DATA BOOLEAN (Person, Person);
likes(Person a, Person b, Person c) = likes(a, b) AND likes(a, c);
outOfInterval1(value, left, right) = value < left OR value > right;
outOfInterval2(value, left, right) = NOT (value >= left AND value <= right);
```
