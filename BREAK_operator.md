# BREAK operator

The `BREAK` operator creates an [action](/Actions/.md) that implements a [loop interruption](/Interruption_BREAK/.md).

### Syntax[​](#syntax "Direct link to Syntax")

```
BREAK
```

### Description[​](#description "Direct link to Description")

The `BREAK` operator creates an action that exits the most nested loop within which it is located.

### Examples[​](#examples "Direct link to Examples")

```
testBreak ()  {
    FOR iterate(INTEGER i, 1, 100) DO {
        IF i == 50 THEN BREAK; // will only come up to 50
    }
}
```
