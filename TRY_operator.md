# TRY operator

The `TRY` operator creates an [action](/Actions/.md) that executes another action with [exception handling](/Exception_handling_TRY/.md).

### Syntax[​](#syntax "Direct link to Syntax")

```
TRY action [CATCH catchAction] [FINALLY finallyAction]
```

### Description[​](#description "Direct link to Description")

The `TRY` operator creates an action that executes another action and handles exceptions within it. The exception-handling behavior depends on whether the `FINALLY` keyword is present.

Without the `FINALLY` keyword, errors raised by the main action are intercepted and not propagated.

With the `FINALLY` keyword, `finallyAction` runs after the main action regardless of whether an error was raised. If an error was raised and no `CATCH` block is present, the error is re-raised to the surrounding action after `finallyAction` runs.

### Parameters[​](#parameters "Direct link to Parameters")

* `action`

  A [context-dependent operator](/Action_operators/.md#contextdependent) that describes an action to be executed with exception handling.

* `catchAction`

  A context-dependent operator that describes an action to be executed if an error is thrown while executing the action. Here the error message will be written to the property `messageCaughtException[]`, the java error stack will be written to `javaStackTraceCaughtException[]`, and the LSF stack will be written to `lsfStackTraceCaughtException[]`.

* `finallyAction`

  A context-dependent operator that describes an action to be executed after the action being executed, regardless of whether or not an error has been thrown.

### Examples[​](#examples "Direct link to Examples")

```
tryToImport(FILE f)  {
    TRY {
        LOCAL a = BPSTRING[10] (INTEGER);

        IMPORT XLS FROM f TO a = A;
    }
}

CLASS MyLock {
    lock 'Blocking'
}

singleDo ()  {
    NEWSESSION {
        lock(MyLock.lock);
        IF lockResult() THEN
        TRY {
            MESSAGE 'Lock Obtained';
        } CATCH {
            MESSAGE messageCaughtException();
        } FINALLY unlock(MyLock.lock);
    }
}
```
