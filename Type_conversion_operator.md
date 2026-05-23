# Type conversion operator

The type conversion operator creates a [property](/Properties/.md) that performs [type conversion](/Type_conversion/.md).

### Syntax[​](#syntax "Direct link to Syntax")

```
typeName(expression) 
```

### Description[​](#description "Direct link to Description")

The operator creates a property that converts the value of a certain expression into a value of a specified [built-in class](/Built-in_classes/.md). If conversion is impossible, the value of the property will be `NULL`.

### Parameters[​](#parameters "Direct link to Parameters")

* `typeName`

  The name of the [built-in class](/Built-in_classes/.md) that the values will be converted into.

* `expression`

  The [expression](/Expression/.md) whose value will be converted into the value of the specified built-in class.

### Examples[​](#examples "Direct link to Examples")

```
itemCount = DATA INTEGER (Store);
itemCountToString(s) = BPSTRING[10](itemCount(s));

barcode = DATA STRING[15] (Item);
longBarcode(Item i) = LONG(barcode(i));
```
