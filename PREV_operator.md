# PREV operator

The `PREV` operator creates a [property](/Properties/.md) using a [previous value operator](/Previous_value_PREV/.md).

### Syntax[​](#syntax "Direct link to Syntax")

```
PREV(propExpr)
```

### Description[​](#description "Direct link to Description")

The `PREV` operator creates a property that returns the value of the given expression at the start of the current [change session](/Change_sessions/.md) — i.e., the value that existed before the changes made in this session. It always uses the session-start scope (it does not switch modes based on the surrounding context); see the paradigm article and [`Events.md#change`](/Events/.md#change) for how this relates to event-mode behavior of [change operators](/Change_operators_SET_CHANGED_etc/.md). It is a [context-dependent](/Property_operators/.md) property operator and can appear inside [expressions](/Expression/.md).

info

It's important to understand that `PREV` is not a built-in property with [composition](/Composition_JOIN/.md) but an operator. Thus, in particular `PREV(f(a))` is not equal to `[PREV(a)](f(a))`.

### Parameters[​](#parameters "Direct link to Parameters")

* `propExpr`

  The [expression](/Expression/.md) whose previous value is returned.

### Examples[​](#examples "Direct link to Examples")

```
CLASS A;
f = DATA INTEGER (A);
// outputs all changes f(a) in the session one by one
messageFChanges  {
    FOR CHANGED(f(A a)) DO
        MESSAGE 'In this session f(a) changed from ' + PREV(f(a)) + ' TO ' + f(a);
}

CLASS Document;
date = DATA DATE (Document);

CLASS Article;
price = DATA NUMERIC[14,2] (Document, Article);
// write in the price of the document the last used price in the database
// PREV is important to ignore the prices entered in this document
// this is especially important if the last used price is materialized, then the platform can simply read this value from the table
setPrice  {
    price(Document d, Article a) <- PREV((GROUP LAST price(d, a) ORDER date(d), d));
}
```
