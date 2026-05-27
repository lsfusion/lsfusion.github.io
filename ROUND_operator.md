# ROUND operator

`ROUND` operator creates a [property](/Properties/.md) that implements the [rounding operation](/Rounding_operator_ROUND/.md).

### Syntax[​](#syntax "Direct link to Syntax")

```
ROUND(numExpr[, scaleExpr])
```

### Description[​](#description "Direct link to Description")

The `ROUND` operator creates a property whose value is the number rounded to the given precision. See the [rounding operation](/Rounding_operator_ROUND/.md) for the result class and the rounding behavior, including how the precision determines the rounding direction.

### Parameters[​](#parameters "Direct link to Parameters")

* `numExpr`

  [Expression](/Expression/.md) whose value determines the number to be rounded. The value must belong to one of the numeric [built-in classes](/Built-in_classes/.md).

* `scaleExpr`

  Expression whose value determines the number of digits to which the number is rounded. The value must belong to the `INTEGER` class. If not specified, the number is rounded to the nearest integer.

### Examples[​](#examples "Direct link to Examples")

```
number = DATA NUMERIC[10,3]();  //12345.678
rounded = ROUND(number());      //12346
rounded1 = ROUND(number(), 2);  //12345.68
rounded2 = ROUND(number(), -2); //12300

FORM roundTest
PROPERTIES() number, rounded, rounded1, rounded2;
```
