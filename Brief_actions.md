# Brief: actions

## State changes (`<-`, NEW, DELETE)[​](#state-changes---new-delete "Direct link to state-changes---new-delete")

The [`CHANGE` operator](/CHANGE_operator.md) writes a value into a changeable property, the [`NEW` operator](/NEW_operator.md) adds an [object](/New_object_NEW.md) of a concrete class, and the [`DELETE`](/DELETE_operator.md) and [`CHANGECLASS`](/CHANGECLASS_operator.md) operators delete an object or move it to another class:

```
[CHANGE] propertyId(expr1, ..., exprN) <- valueExpr [WHERE whereExpr]
NEW className WHERE whereExpr [TO propertyId(prm1, ..., prmN)]
NEW [alias =] className [AUTOSET] action
DELETE expr [WHERE whereExpr]
CHANGECLASS expr TO className [WHERE whereExpr]
```

A [change](/Property_change_CHANGE.md) is written for all argument sets satisfying the condition at once, as a single set operation. **Analogy**: `UPDATE ... SET ... WHERE`, not an assignment to a variable. On a [class change or a deletion](/Class_change_CHANGECLASS_DELETE.md) the platform clears the stored values of the data properties the object is no longer valid in.

```
setDiscount () {
    discount(Customer c) <- 15 WHERE totalOrders(c) > 100;
    NEW o = Order { date(o) <- currentDate(); }
}
```

## Calls and sequencing[​](#calls-and-sequencing "Direct link to Calls and sequencing")

An [action](/Actions.md) is dual to a property: a property says what the value is, an action says how it changes. It is declared by the [`ACTION` statement](/ACTION_statement.md):

```
name [caption] [(param1, ..., paramN)] { actionBody } [options]
```

The body in braces is a [sequence](/Sequence.md): nested actions run in the order written; inside the block `LOCAL` properties can be declared that live only while the block runs. An [action call](/Call_EXEC.md) is written as the name with arguments, `[EXEC] actionId(expression1, ..., expressionN) [TO toProperty]`, or substituted directly as a value. **Analogy**: a procedure call.

## Loops (FOR, WHILE)[​](#loops-for-while "Direct link to Loops (FOR, WHILE)")

The [`FOR` operator](/FOR_operator.md) runs its body once per object set for which the condition is not `NULL`; the [`WHILE` operator](/WHILE_operator.md) recomputes the condition at every step, so the changes made by the body are taken into account:

```
FOR expression [ORDER [DESC] orderExpr1, ..., orderExprN]
[TOP topExpr] [OFFSET offsetExpr]
[NEW [alias =] className]
DO action
[ELSE alternativeAction]

WHILE expression [ORDER [DESC] orderExpr1, ..., orderExprN]
[NEW [alias =] className]
DO action
```

A loop is used when the body is genuinely row-by-row — a dialog, a message, an external call. The mechanisms are described in [loop](/Loop_FOR.md) and [recursive loop](/Recursive_loop_WHILE.md).

```
createDetails (Order o) {
    FOR in(Sku s) NEW d = OrderDetail DO {
        order(d) <- o;
        sku(d) <- s;
    }
}
```

## Branching (CASE, IF)[​](#branching-case-if "Direct link to Branching (CASE, IF)")

[Branching](/Branching_CASE_IF_MULTI.md) runs the action matching the condition that holds; a condition holds if its value is not `NULL`. In the [`IF ... THEN`](/IF_..._THEN_action_operator.md) and [`CASE`](/CASE_action_operator.md) operators the condition is written out; in the [`MULTI` operator](/MULTI_action_operator.md) it is that the call arguments match an action's signature, that is, dispatch by the argument class:

```
IF condition
THEN action
[ELSE alternativeAction]

CASE [exclusionType]
    WHEN condition1 THEN action1
    ...
    WHEN conditionN THEN actionN
    [ELSE elseAction]

MULTI [exclusionType] action1, ..., actionN
```

```
message (Shape s) { MULTI { message[Square](s); }, { message[Circle](s); } }
```

The deferred variant is an abstract action, [`ABSTRACT`](/ABSTRACT_action_operator.md): a base module declares the extension point and other modules add implementations to it ([action extension](/Action_extension.md)).

## Flow control[​](#flow-control "Direct link to Flow control")

* [`BREAK`](/Interruption_BREAK.md) exits the innermost loop, [`CONTINUE`](/Next_iteration_CONTINUE.md) moves to its next iteration, [`RETURN [expression]`](/Exit_RETURN.md) exits the innermost action call with the given value as its result.
* [`TRY action [CATCH catchAction] [FINALLY finallyAction]`](/TRY_operator.md) — `CATCH` swallows the [error](/Exception_handling_TRY.md), giving access to it through `messageCaughtException[]` and `lsfStackTraceCaughtException[]`; `FINALLY` runs in any case. **Analogy**: `try` / `catch` / `finally`.
* [`NEWTHREAD action [dispatchClause]`](/NEWTHREAD_operator.md) — execution in a [separate thread](/New_threads_NEWTHREAD_NEWEXECUTOR.md), at once or on a schedule (`SCHEDULE`: a delay and a period). [`NEWEXECUTOR`](/NEWEXECUTOR_operator.md) picks where the thread goes: a server pool, where the body runs in the caller's [change session](/Change_sessions.md), or the client connection (`CLIENT`), where it gets a new session of its own in that connection's navigator.

## Form actions[​](#form-actions "Direct link to Form actions")

* [`SHOW`](/SHOW_operator.md) — [opening a form](/In_an_interactive_view_SHOW_DIALOG.md) in the interactive view; the passed objects become the current ones.
* [`DIALOG`](/DIALOG_operator.md) — the same opening as a value-input dialog: every object marked `INPUT` or `CHANGE` returns its last current value to the `DO` block.
* [`ACTIVATE`](/ACTIVATE_operator.md) — [activation](/Activation_ACTIVATE.md) of a form, a tab, a property, or a set of objects in an object group.
* [`EXPAND`](/EXPAND_operator.md) / `COLLAPSE` — expanding and collapsing a [form container](/Container_visibility_EXPAND_COLLAPSE.md) and the nodes of an [object tree](/Object_tree_visibility_EXPAND_COLLAPSE.md).
* [`MESSAGE`](/Show_message_MESSAGE_ASK.md) and [`INPUT`](/Value_input.md) — a message and a value input without a separate form.

```
ACTIVATE FORM formName
ACTIVATE TAB formName.componentSelector
ACTIVATE PROPERTY formPropertyId

ACTIVATE [seekDirection] formObjectId = expr
ACTIVATE [seekDirection] formGroupObjectId [OBJECTS formObject1 = expr1, ..., formObjectK = exprK]
```
