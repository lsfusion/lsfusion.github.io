# MIN operator

The `MIN` operator creates a [property](/Properties/.md) that implements finding the [minimum](/Extremum_MAX_MIN/.md) value.

### Syntax[​](#syntax "Direct link to Syntax")

```
MIN expr1, ..., exprN
```

### Description[​](#description "Direct link to Description")

The `MIN` operator creates a property that returns the minimum value of the values of the specified properties.

### Parameters[​](#parameters "Direct link to Parameters")

* `expr1, ..., exprN`

  A list of [expressions](/Expression/.md) of which values the minimum is selected.

### Examples[​](#examples "Direct link to Examples")

```
minPrice(Book b) = MIN price1(b), price2(b);

date (INTEGER i) = DATA DATE (INTEGER);
minDate (INTEGER i) = MIN date(i), 2001_01_01;
```
