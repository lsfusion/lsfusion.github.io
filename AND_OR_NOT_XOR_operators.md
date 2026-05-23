# AND, OR, NOT, XOR operators

`AND`, `OR`, `NOT`, `XOR` operators that create [properties](/Properties/.md) that implement [logical operations](/Logical_operators_AND_OR_NOT_XOR/.md).

### Syntax[​](#syntax "Direct link to Syntax")

```
expression1 AND expression2
expression1 OR expression2
expression1 XOR expression2
NOT expression1
```

### Parameters[​](#parameters "Direct link to Parameters")

* `expression1, expression2`

  [Expressions](/Expression/.md) whose values will be the operator arguments. Expression values are considered to be `BOOLEAN` class values depending on whether they are `NULL` or not.

### Examples[​](#examples "Direct link to Examples")

```
likes = DATA BOOLEAN (Person, Person);
likes(Person a, Person b, Person c) = likes(a, b) AND likes(a, c);
outOfInterval1(value, left, right) = value < left OR value > right;
outOfInterval2(value, left, right) = NOT (value >= left AND value <= right);
```
