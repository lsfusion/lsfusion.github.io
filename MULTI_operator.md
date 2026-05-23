# MULTI operator

The `MULTI` operator creates a [property](/Properties/.md) that implements [selection](/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE/.md#single) of one of the values (polymorphic form).

### Syntax[​](#syntax "Direct link to Syntax")

```
MULTI expr1, ..., exprN [exclusionType]
```

### Description[​](#description "Direct link to Description")

The `MULTI` operator creates a property which value will be the value of one of the properties specified in the operator. The property selection condition is that the parameters match this property [signature](/ISCLASS_operator/.md).

### Parameters[​](#parameters "Direct link to Parameters")

* `expr1, ..., exprN`

  A list of [expressions](/Expression/.md) defining the properties from which the selection is made.

* `exclusionType`

  [Type of mutual exclusion](/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE/.md#exclusive). Determines whether several conditions for the property selection can be met simultaneously with a certain set of parameters. It is specified by one of the keywords:

  * `EXCLUSIVE`
  * `OVERRIDE`

  The `EXCLUSIVE` type indicates that the conditions for the property selection cannot be met simultaneously. The `OVERRIDE` type allows several conditions to be met simultaneously, in which case the first property in the list which selection condition is met will be selected.

  The `EXCLUSIVE` type is used by default.

### Examples[​](#examples "Direct link to Examples")

```
nameMulti (Human h) = MULTI 'Male' IF h IS Male, 'Female' IF h IS Female;

CLASS Ledger;
CLASS InLedger : Ledger;
quantity = DATA INTEGER (InLedger);

CLASS OutLedger : Ledger;
quantity = DATA INTEGER (OutLedger);

signedQuantity (Ledger l) = MULTI quantity[InLedger](l), quantity[OutLedger](l);
```
