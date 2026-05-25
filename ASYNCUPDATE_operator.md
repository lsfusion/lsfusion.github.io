# ASYNCUPDATE operator

The `ASYNCUPDATE` operator creates an [action](/Actions/.md) that implements [asynchronous update](/State_change/.md#asyncupdate).

### Syntax[​](#syntax "Direct link to Syntax")

```
ASYNCUPDATE expr
```

### Description[​](#description "Direct link to Description")

The `ASYNCUPDATE` operator creates an action that evaluates `expr` and sends the resulting value to the open editor on the client.

### Parameters[​](#parameters "Direct link to Parameters")

* `expr`

  [Expression](/Expression/.md) whose value is sent to the open editor.

### Examples[​](#examples "Direct link to Examples")

```
// pushing the new value of the displayed code back to the open editor
onChangeSizeCode(Store store)  {
    DIALOG SelectStoreSize OBJECTS ss INPUT DO {
        storeSize(store) <- ss;
    }
    ASYNCUPDATE storeSizeCode(store);
}
```
