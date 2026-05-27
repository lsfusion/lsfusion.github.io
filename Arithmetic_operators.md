# Arithmetic operators

The `+`, `-`, `*`, `/`, `(+)`, `(-)` operators create [properties](/Properties/.md) that implement [arithmetic operations](/Arithmetic_operators_plus_minus_etc/.md).

### Syntax[​](#syntax "Direct link to Syntax")

```
expression1 + expression2
expression1 - expression2
expression1 * expression2
expression1 / expression2
expression1 (+) expression2
expression1 (-) expression2
- expression1
```

### Description[​](#description "Direct link to Description")

The binary operators each take two operands and associate left to right; the unary minus takes a single operand. The evaluation order relative to other operators follows [operator priority](/Operator_priority/.md).

### Parameters[​](#parameters "Direct link to Parameters")

* `expression1, expression2`

  [Expressions](/Expression/.md) whose values will be arguments for arithmetic operators.

### Examples[​](#examples "Direct link to Examples")

```
sum(a, b) = a + b;
transform(a, b, c) = -a * (b (+) c);
```
