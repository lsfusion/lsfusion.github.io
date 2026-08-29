# Brief: действия

## Изменение состояния (`<-`, NEW, DELETE)[​](#изменение-состояния---new-delete "Прямая ссылка на этот заголовок")

[Оператор `CHANGE`](/ru/CHANGE_operator/.md) пишет значение в изменяемое свойство, [оператор `NEW`](/ru/NEW_operator/.md) добавляет [объект](/ru/New_object_NEW/.md) конкретного класса, операторы [`DELETE`](/ru/DELETE_operator/.md) и [`CHANGECLASS`](/ru/CHANGECLASS_operator/.md) удаляют объект или переводят его в другой класс:

```
[CHANGE] propertyId(expr1, ..., exprN) <- valueExpr [WHERE whereExpr]
NEW className WHERE whereExpr [TO propertyId(prm1, ..., prmN)]
NEW [alias =] className [AUTOSET] action
DELETE expr [WHERE whereExpr]
CHANGECLASS expr TO className [WHERE whereExpr]
```

[Изменение](/ru/Property_change_CHANGE/.md) пишется сразу по всем наборам аргументов, удовлетворяющим условию, одной операцией над множеством. **Аналогия**: `UPDATE ... SET ... WHERE`, а не присваивание переменной. При [смене класса или удалении](/ru/Class_change_CHANGECLASS_DELETE/.md) платформа обнуляет хранимые значения первичных свойств, в которых объект стал недопустим.

```
setDiscount () {
    discount(Customer c) <- 15 WHERE totalOrders(c) > 100;
    NEW o = Order { date(o) <- currentDate(); }
}
```

## Вызов и последовательность[​](#вызов-и-последовательность "Прямая ссылка на этот заголовок")

[Действие](/ru/Actions/.md) двойственно свойству: свойство говорит, чему значение равно, действие — как оно меняется. Объявляется [инструкцией `ACTION`](/ru/ACTION_statement/.md):

```
name [caption] [(param1, ..., paramN)] { actionBody } [options]
```

Тело в фигурных скобках — [последовательность](/ru/Sequence/.md): вложенные действия выполняются в порядке записи; внутри блока можно объявить свойства `LOCAL`, живущие только во время его выполнения. [Вызов действия](/ru/Call_EXEC/.md) записывается именем с аргументами, `[EXEC] actionId(expression1, ..., expressionN) [TO toProperty]`, либо подставляется прямо как значение. **Аналогия**: вызов процедуры.

## Циклы (FOR, WHILE)[​](#циклы-for-while "Прямая ссылка на этот заголовок")

[Оператор `FOR`](/ru/FOR_operator/.md) выполняет тело по разу на каждый набор объектов, для которого условие не `NULL`; [оператор `WHILE`](/ru/WHILE_operator/.md) пересчитывает условие на каждом шаге, поэтому изменения из тела учитываются:

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

К циклу обращаются, когда тело действительно построчное — диалог, сообщение, внешний вызов. Механизмы — [цикл](/ru/Loop_FOR/.md) и [рекурсивный цикл](/ru/Recursive_loop_WHILE/.md).

```
createDetails (Order o) {
    FOR in(Sku s) NEW d = OrderDetail DO {
        order(d) <- o;
        sku(d) <- s;
    }
}
```

## Ветвление (CASE, IF)[​](#ветвление-case-if "Прямая ссылка на этот заголовок")

[Ветвление](/ru/Branching_CASE_IF_MULTI/.md) вызывает действие, соответствующее выполнившемуся условию; условие выполнено, если его значение не `NULL`. В операторах [`IF ... THEN`](/ru/IF_..._THEN_action_operator/.md) и [`CASE`](/ru/CASE_action_operator/.md) условие записывается явно, в [операторе `MULTI`](/ru/MULTI_action_operator/.md) условие — соответствие аргументов вызова сигнатуре действия, то есть диспетчеризация по классу аргумента:

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

Отложенный вариант — абстрактное действие [`ABSTRACT`](/ru/ABSTRACT_action_operator/.md): базовый модуль объявляет точку расширения, реализации к ней добавляют другие модули ([расширение действий](/ru/Action_extension/.md)).

## Управление потоком[​](#управление-потоком "Прямая ссылка на этот заголовок")

* [`BREAK`](/ru/Interruption_BREAK/.md) выходит из ближайшего цикла, [`CONTINUE`](/ru/Next_iteration_CONTINUE/.md) переходит к следующей итерации, [`RETURN [выражение]`](/ru/Exit_RETURN/.md) выходит из ближайшего вызова действия с указанным значением как результатом.
* [`TRY action [CATCH catchAction] [FINALLY finallyAction]`](/ru/TRY_operator/.md) — `CATCH` поглощает [ошибку](/ru/Exception_handling_TRY/.md), давая доступ к ней через `messageCaughtException[]` и `lsfStackTraceCaughtException[]`; `FINALLY` выполняется в любом случае. **Аналогия**: `try` / `catch` / `finally`.
* [`NEWTHREAD action [dispatchClause]`](/ru/NEWTHREAD_operator/.md) — выполнение в [отдельном потоке](/ru/New_threads_NEWTHREAD_NEWEXECUTOR/.md), сразу или по расписанию (`SCHEDULE`: задержка и период). [`NEWEXECUTOR`](/ru/NEWEXECUTOR_operator/.md) выбирает, куда отправить поток: в серверный пул, где тело работает в [сессии изменений](/ru/Change_sessions/.md) вызывающего кода, или в клиентское соединение (`CLIENT`), где оно получает собственную новую сессию в навигаторе этого соединения.

## Действия на форме[​](#действия-на-форме "Прямая ссылка на этот заголовок")

* [`SHOW`](/ru/SHOW_operator/.md) — [открытие формы](/ru/In_an_interactive_view_SHOW_DIALOG/.md) в интерактивном представлении; переданные объекты становятся текущими.
* [`DIALOG`](/ru/DIALOG_operator/.md) — то же открытие как диалог ввода значения: каждый объект, помеченный `INPUT` или `CHANGE`, возвращает в блок `DO` свое последнее текущее значение.
* [`ACTIVATE`](/ru/ACTIVATE_operator/.md) — [активация](/ru/Activation_ACTIVATE/.md) формы, вкладки, свойства или набора объектов в группе объектов.
* [`EXPAND`](/ru/EXPAND_operator/.md) / `COLLAPSE` — разворачивание и сворачивание [контейнера формы](/ru/Container_visibility_EXPAND_COLLAPSE/.md) и узлов [дерева объектов](/ru/Object_tree_visibility_EXPAND_COLLAPSE/.md).
* [`MESSAGE`](/ru/Show_message_MESSAGE_ASK/.md) и [`INPUT`](/ru/Value_input/.md) — сообщение и ввод значения без отдельной формы.

```
ACTIVATE FORM formName
ACTIVATE TAB formName.componentSelector
ACTIVATE PROPERTY formPropertyId

ACTIVATE [seekDirection] formObjectId = expr
ACTIVATE [seekDirection] formGroupObjectId [OBJECTS formObject1 = expr1, ..., formObjectK = exprK]
```
