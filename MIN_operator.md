# MIN operator

The `MIN` operator creates a [property](/Properties/.md) that implements finding the [minimum](/Extremum_MAX_MIN/.md) value.

### Syntax[​](#syntax "Direct link to Syntax")

```
MIN expr1, ..., exprN
```

### Description[​](#description "Direct link to Description")

The `MIN` operator creates a property whose value is the minimum among the values of the specified operands. The skipping of `NULL` operands and the determination of the result class follow the [extremum](/Extremum_MAX_MIN/.md).

### Parameters[​](#parameters "Direct link to Parameters")

* `expr1, ..., exprN`

  [Expressions](/Expression/.md) whose values the minimum is selected among. At least one operand must be specified.

### Examples[​](#examples "Direct link to Examples")

```
price1 = DATA NUMERIC[10,2] (Book);
price2 = DATA NUMERIC[10,2] (Book);
minPrice (Book b) = MIN price1(b), price2(b);

date = DATA DATE (INTEGER);
minDate (INTEGER i) = MIN date(i), 2001_01_01;
```
