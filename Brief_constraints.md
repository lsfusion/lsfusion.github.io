# Brief: constraints

## Constraints (CONSTRAINT)[​](#constraints-constraint "Direct link to Constraints (CONSTRAINT)")

A [constraint](/Constraints.md) is a property whose value must always be `NULL`. It is checked on the event given by the [event description block](/Event_description_block.md) of the statement — by default, the global `APPLY` event; if by that moment it has become not `NULL` on at least one object set, the platform shows a message listing those sets and [cancels](/Cancel_changes_CANCEL.md) the changes. It is created by the [`CONSTRAINT` statement](/CONSTRAINT_statement.md):

```
CONSTRAINT [eventClause] constraintExpr [CHECKED [BY propertyId1, ..., propertyIdN]] MESSAGE messageExpr
    [PROPERTIES outExpr1, ..., outExprM];
```

The `CHECKED BY` option makes the dialog that changes the listed properties filter out the values that would violate the constraint.

[Simple constraints](/Simple_constraints.md) are set by the kind of relation between properties rather than by an expression, Two kinds are implemented: consequence — the [`=>` statement](/=gt_statement.md) — and definiteness — the [`NONULL` option](/Property_options.md). The consequence can resolve a violation itself: its `RESOLVE [LEFT] [RIGHT]` clause tells the platform which side to correct. `NONULL` has no such clause — it takes `[DELETE]`, which deletes the offending objects instead.

**Analogy**: `CHECK` and `NOT NULL` in SQL, except that the condition is an arbitrary property over the whole database.

```
CONSTRAINT balance(Sku s, Stock st) < 0 MESSAGE 'Balance cannot be negative';
```

## Aggregated objects and constraints[​](#aggregated-objects-and-constraints "Direct link to Aggregated objects and constraints")

An [aggregation](/Aggregations.md) creates an *aggregated* object when the aggregated property becomes not `NULL` on a combination of parameter values, and deletes that object once the property becomes `NULL` again. Only the [`AGGR` operator](/AGGR_operator.md) creates and deletes the object; [`GROUP AGGR`](/GROUP_operator.md) builds the reverse property — from the parameter values back to the object. Both are described in [Brief: properties](/Brief_properties.md).

For integrity this is one more invariant the platform maintains on its own: at most one aggregated object per combination of parameter values. `GROUP AGGR` adds it as a constraint over its group, and `AGGR` keeps the correspondence between the objects and the parameter values within it. How that constraint is maintained is described in [aggregations](/Aggregations.md) and [simple constraints](/Simple_constraints.md).

```
// a shipment is created for an invoice when the create-shipment flag is set, and deleted when it is dropped
shipment (Invoice i) = AGGR ShipmentInvoice WHERE createShipment(i);
```
