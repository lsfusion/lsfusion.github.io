# CLOSE FORM operator

The `CLOSE FORM` operator creates an [action](/Actions/.md) that closes an open form instance with the given identifier in the [interactive view](/In_an_interactive_view_SHOW_DIALOG/.md).

### Syntax[​](#syntax "Direct link to Syntax")

```
CLOSE FORM formId
```

### Description[​](#description "Direct link to Description")

The `CLOSE FORM` operator creates an action that closes, for the user, the open form instance with the identifier `formId` (sent to the client as a request). The identifier is assigned when the form is opened by the [`SHOW` operator](/SHOW_operator/.md). The action has no parameters and uses no [context](/Action_operators/.md#contextdependent). If several instances with this identifier are open, all of them are closed; if no such instance is open, the action has no effect.

### Parameters[​](#parameters "Direct link to Parameters")

* `formId`

  A [string literal](/Literals/.md#strliteral) that identifies the form instance to close. This is the same identifier assigned when the form is opened by the `SHOW` operator.

### Examples[​](#examples "Direct link to Examples")

```
FORM orders
    OBJECTS o = Order
    PROPERTIES(o) number, customer
;

// open the form with an instance identifier
openOrders ()  {
    SHOW 'ordersInstance' = orders NOWAIT;
}

// close the previously opened instance by its identifier
closeOrders ()  {
    CLOSE FORM 'ordersInstance';
}
```
