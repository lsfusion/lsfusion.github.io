# Next iteration (CONTINUE)

The *next iteration* operator creates an [action](/Actions/.md) that skips the execution of the remaining code in the current iteration and moves to the next iteration of the innermost enclosing loop ([normal](/Loop_FOR/.md) or [recursive](/Recursive_loop_WHILE/.md)). If the created action is not inside a loop, it exits the innermost enclosing [action call](/Call_EXEC/.md), as the [exit operator](/Exit_RETURN/.md) does.

### Language[​](#language "Direct link to Language")

The next iteration operator syntax is described by the [`CONTINUE` operator](/CONTINUE_operator/.md).

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
