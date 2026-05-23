# Арифметические операторы

Операторы `+`, `-`, `*`, `/`, `(+)`, `(-)` - создание [свойств](/ru/Properties/.md), реализующих [арифметические операции](/ru/Arithmetic_operators_plus_minus_etc/.md).

### Синтаксис[​](#синтаксис "Прямая ссылка на этот заголовок")

```
expression1 + expression2  
expression1 - expression2  
expression1 / expression2  
expression1 * expression2  
-expression1
expression1 (+) expression2  
expression1 (-) expression2  
```

### Параметры[​](#параметры "Прямая ссылка на этот заголовок")

* `expression1, expression2`

  [Выражения](/ru/Expression/.md), значения которых будут являться аргументами арифметических операторов.

### Примеры[​](#примеры "Прямая ссылка на этот заголовок")

```
sum(a, b) = a + b;
transform(a, b, c) = -a * (b (+) c);
```
