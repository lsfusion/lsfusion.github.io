# STRUCT operator

The `STRUCT` operator creates a [property](/Properties/.md) that creates a [structure](/Structure_operators_STRUCT/.md).

### Syntax[​](#syntax "Direct link to Syntax")

```
STRUCT(expr1, ..., exprN)
```

### Description[​](#description "Direct link to Description")

The `STRUCT` operator creates a property whose value is the [structure](/Structure_operators_STRUCT/.md) made up of the operand values, in the order they are listed.

### Parameters[​](#parameters "Direct link to Parameters")

* `expr1, ..., exprN`

  List of [expressions](/Expression/.md) whose values become the elements of the structure. The list cannot be empty.

### Examples[​](#examples "Direct link to Examples")

```
objectStruct(a, b) = STRUCT(a, f(b));
stringStruct() = STRUCT(1, 'two', 3.0);
```
