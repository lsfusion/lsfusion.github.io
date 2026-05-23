# BEFORE statement

The `BEFORE` statement calls an [action](/Actions/.md) before calling another action.

### Syntax[​](#syntax "Direct link to Syntax")

```
BEFORE action(param1, ..., paramN) DO aspectAction;
```

### Description[​](#description "Direct link to Description")

The `BEFORE` statement defines an action (let's call it an *aspect*) that will be called before the specified one.

### Parameters[​](#parameters "Direct link to Parameters")

* `action`

  The [ID](/IDs/.md#propertyid) of the action before which the aspect will be called.

* `param1, ..., paramN`

  List of action parameter names. Each name is defined [by a simple ID](/IDs/.md#id). These parameters can be accessed while defining an aspect.

* `aspectAction`

  A [context-dependent action operator](/Action_operators/.md#contextdependent) describing the aspect.

### Examples[​](#examples "Direct link to Examples")

```
changeName(Sku s, STRING[100] name)  { name(s) <- name; }

// The message will be shown before each call to changeName
BEFORE changeName(Sku s, STRING[100] name) DO MESSAGE 'Changing user name'; 
```
