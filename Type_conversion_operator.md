# Type conversion operator

The type conversion operator creates a [property](/Properties/.md) that performs [type conversion](/Type_conversion/.md).

### Syntax[​](#syntax "Direct link to Syntax")

```
className(expr)
```

### Description[​](#description "Direct link to Description")

The operator creates a property whose value is the value of `expr` converted to the [built-in class](/Built-in_classes/.md) `className`. Which conversions are meaningful, and when the result is `NULL`, is determined by the [type conversion](/Type_conversion/.md) abstraction.

### Parameters[​](#parameters "Direct link to Parameters")

* `className`

  The target [built-in class](/Built-in_classes/.md) that the value is converted into. Any built-in class may be specified, including parameterized ones written with their parameters (for example, `STRING[15]`, `BPSTRING[10]`, or `NUMERIC[10,2]`).

* `expr`

  The [expression](/Expression/.md) whose value is converted.

### Examples[​](#examples "Direct link to Examples")

```
itemCount = DATA INTEGER (Store);
itemCountToString(s) = BPSTRING[10](itemCount(s));

barcode = DATA STRING[15] (Item);
longBarcode(Item i) = LONG(barcode(i));
```
