# @ statement

The `@` statement uses [metacode](/Metaprogramming/.md#metacode).

### Syntax[​](#syntax "Direct link to Syntax")

```
@name(param1, ..., paramN);
```

### Description[​](#description "Direct link to Description")

The `@` statement generates code obtained from the metacode with the name `name`, replacing metacode parameters with the values of its own parameters and executing the special [`##` and `###` operations](/Metaprogramming/.md#concat).

### Parameters[​](#parameters "Direct link to Parameters")

* `name`

  The name of the metacode used. [Composite ID](/IDs/.md#cid).

* `param1, ..., paramN`

  The list of statement parameters that will be substituted for the parameters of the metacode used. The parameters can be a [composite ID](/IDs/.md#cid), a [class ID](/IDs/.md#classid), a [literal](/Literals/.md) or the *empty parameter* when nothing is passed as a parameter.

### Examples[​](#examples "Direct link to Examples")

```
CLASS Book;
@objectProperties(book, INTEGER, 'Book');

CLASS Flower;
@objectProperties(flower, BPSTRING[100], ); // if the parameter is not passed, then it will be empty

CLASS Table;
@objectProperties(table, NUMERIC[14,2]);
```
