# CONCAT operator

The `CONCAT` operator creates a [property](/Properties/.md) that implements a string [concatenation](/String_operators_plus_CONCAT_SUBSTRING/.md).

### Syntax[​](#syntax "Direct link to Syntax")

```
CONCAT separatorExpr, concatExpr1, ..., concatExprN
```

### Description[​](#description "Direct link to Description")

The `CONCAT` operator creates a property that concatenates values using the `separatorExpr` separator. Here, `NULL` values are skipped and the separator is inserted only between non-`NULL` values.

### Parameters[​](#parameters "Direct link to Parameters")

* `separatorExpr`

  [Expression](/Expression/.md) to be used as a separator.

* `concatExpr1, ..., concatExprN`

  Expressions whose values are to be concatenated.

### Examples[​](#examples "Direct link to Examples")

```
CLASS Person;
firstName = DATA STRING[100] (Person);
middleName = DATA STRING[100] (Person);
lastName = DATA STRING[100] (Person);

// if some part of the name is not specified, then this part will be skipped along with a space
fullName(Person p) = CONCAT ' ', firstName(p), middleName(p), lastName(p);     
```
