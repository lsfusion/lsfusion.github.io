# MAX operator

The `MAX` operator creates a [property](/Properties/.md) that implements finding the [maximum](/Extremum_MAX_MIN/.md) value.

### Syntax[​](#syntax "Direct link to Syntax")

```
MAX expr1, ..., exprN
```

### Description[​](#description "Direct link to Description")

The `MAX` operator creates a property whose value is the maximum among the values of the specified operands. The skipping of `NULL` operands and the determination of the result class follow the [extremum](/Extremum_MAX_MIN/.md).

### Parameters[​](#parameters "Direct link to Parameters")

* `expr1, ..., exprN`

  [Expressions](/Expression/.md) whose values the maximum is selected among. At least one operand must be specified.

### Examples[​](#examples "Direct link to Examples")

```
date1 = DATA DATE(INTEGER);
date2 = DATA DATE(INTEGER);
maxDate (INTEGER i) = MAX date1(i), date2(i);

balance = DATA INTEGER (Item);
outcome 'Balance (non-negative)' (Item i) = MAX balance(i), 0;
```
