# Comparison operators

The `==`, `=`, `!=`, `<`, `>`, `<=`, `>=` operators create [properties](/Properties/.md) that implement [comparison operations](/Comparison_operators_=_etc/.md).

### Syntax[​](#syntax "Direct link to Syntax")

```
expression1 == expression2
expression1 = expression2
expression1 != expression2
expression1 < expression2
expression1 > expression2
expression1 <= expression2
expression1 >= expression2
```

### Description[​](#description "Direct link to Description")

The `=` and `==` forms are equivalent. Each operator takes two operands and cannot be chained — `expression1 < expression2 < expression3` is not valid. The evaluation order relative to other operators follows [operator priority](/Operator_priority/.md).

### Parameters[​](#parameters "Direct link to Parameters")

* `expression1, expression2`

  [Expressions](/Expression/.md) which values are the arguments of a comparison operator.

### Examples[​](#examples "Direct link to Examples")

```
equalBarcodes = barcode(a) == barcode(b);
outOfIntervalValue1(value, left, right) = value < left OR value > right;
outOfIntervalValue2(value, left, right) = NOT (value >= left AND value <= right);
```
