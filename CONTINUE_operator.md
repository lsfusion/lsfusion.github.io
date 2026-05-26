# CONTINUE operator

The `CONTINUE` operator creates an [action](/Actions/.md) that implements a move to the [next iteration of the loop](/Next_iteration_CONTINUE/.md).

### Syntax[​](#syntax "Direct link to Syntax")

```
CONTINUE
```

### Description[​](#description "Direct link to Description")

The `CONTINUE` operator creates an action that moves to the next iteration of the innermost enclosing loop.

### Example[​](#example "Direct link to Example")

```
testContinue ()  {
    FOR iterate(INTEGER i, 1, 5) DO {
        MESSAGE 'before';
        IF i == 3 THEN CONTINUE; // no message 'after' for i == 3
        MESSAGE 'after';
    }
}
```
