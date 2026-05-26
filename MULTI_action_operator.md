# MULTI operator

The `MULTI` operator creates an [action](/Actions/.md) that implements [branching](/Branching_CASE_IF_MULTI/.md#poly) (polymorphic form).

### Syntax[​](#syntax "Direct link to Syntax")

```
MULTI [exclusionType] action1, ..., actionN 
```

### Description[​](#description "Direct link to Description")

The `MULTI` operator creates an action that executes one of the actions passed to it depending on whether the selection conditions are met. The selection condition for each action is that the call parameters match that action's [signature](/Property_signature_ISCLASS/.md); the action whose condition is met is executed.

### Parameters[​](#parameters "Direct link to Parameters")

* `exclusionType`

  [Type of mutual exclusion](/Branching_CASE_IF_MULTI/.md#exclusive). Determines whether several action-selection conditions can be met simultaneously for a certain set of parameters:

  * `EXCLUSIVE` - the action-selection conditions cannot be met simultaneously. Used by default.
  * `OVERRIDE` - several conditions can be met simultaneously; in this case the first action in the list whose condition is met is selected.

* `action1, ..., actionN`

  A list of [context dependent action operators](/Action_operators/.md#contextdependent) which define the actions from which the selection is made.

### Example[​](#example "Direct link to Example")

```
CLASS Shape;

CLASS Square : Shape;
CLASS Circle : Shape;

message (Square s)  { MESSAGE 'Square'; }
message (Circle c)  { MESSAGE 'Circle'; }

message (Shape s) = MULTI message[Square](s), message[Circle](s);
```
