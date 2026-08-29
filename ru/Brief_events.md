# Brief: события

## События данных (WHEN)[​](#события-данных-when "Прямая ссылка на этот заголовок")

[Событие](/ru/Events.md) выполняет заданное действие — свою *обработку* — при изменении данных. [Блок описания события](/ru/Event_description_block.md) задает, глобальное событие или локальное — для всей базы или в пределах [сессии изменений](/ru/Change_sessions.md) — ключевыми словами `GLOBAL` и `LOCAL`, ограничивает событие заданными формами через `FORMS` и упорядочивает его обработку относительно других через `AFTER`.

Событие на изменение данных создают три инструкции:

* [`WHEN`](/ru/WHEN_statement.md) — [простое событие](/ru/Simple_event.md): обработка выполняется на каждый набор объектов, на котором условие не `NULL`;
* [`<- WHEN`](/ru/lt-_WHEN_statement.md) — [вычисляемое событие](/ru/Calculated_events.md): вместо обработки задается изменение первичного свойства;
* [`ON`](/ru/ON_statement.md) — событие общего вида: обработка выполняется один раз на все изменения.

```
WHEN eventClause eventExpr [ORDER [DESC] orderExpr1, ..., orderExprN] DO eventAction;
propertyId(param1, ..., paramN) <- valueExpr WHEN eventExpr;
ON eventClause eventAction;
```

**Аналогия**: триггер базы данных, но условием служит произвольное свойство над всей базой.

```
sum(OrderDetail d) <- quantity(d) * price(d) WHEN CHANGED(quantity(d)) OR CHANGED(price(d));
```

## События формы (ON)[​](#события-формы-on "Прямая ссылка на этот заголовок")

[События формы](/ru/Form_events.md) возникают на открытой форме: в точке её жизни (`INIT`, `APPLY`, `CANCEL`, `CLOSE`, `DROP`), на действие пользователя либо по таймеру через `SCHEDULE`. Обработка подключается опцией `ON` — в блоках [событий](/ru/Event_block.md), [свойств и действий](/ru/Properties_and_actions_block.md) и [объектов](/ru/Object_blocks.md#objects) инструкции `FORM` либо в [опциях свойства](/ru/Property_options.md).

| Что событие обслуживает | События                                                                                                        |
| ----------------------- | -------------------------------------------------------------------------------------------------------------- |
| форму целиком           | `INIT`, `QUERYCLOSE`, `QUERYOK`, `OK`, `APPLY`, `CANCEL`, `CLOSE`, `DROP`, `SCHEDULE`                          |
| объект формы            | `CHANGE`                                                                                                       |
| группу объектов         | `FILTER`, `ORDER`, `SELECT`, `FILTERS`, `ORDERS`                                                               |
| группу фильтров         | `FILTERGROUPS`                                                                                                 |
| свойство или действие   | `CHANGE`, `CHANGEWYS`, `GROUPCHANGE`, `EDIT`, `CONTEXTMENU`, `KEYPRESS`, `FILTERS PROPERTY`, `SELECT PROPERTY` |
| контейнер               | `EXPAND`, `COLLAPSE`, `TAB`                                                                                    |

Постфиксы `BEFORE` и `AFTER` дают моменты до и после операции. Для событий изменения свойства есть стандартные обработки `READONLY`, `READONLYIF` и `SELECTOR`.

```
FORM sku 'Товар'
    OBJECTS s = Sku
    PROPERTIES(s) price ON CHANGE changePrice(s)
    EVENTS ON INIT initSku()
;
```

## Порядок выполнения[​](#порядок-выполнения "Прямая ссылка на этот заголовок")

Обработки локальных событий выполняются не в момент изменения данных, а в определенные моменты жизни сессии — см. [выполнение локальных событий](/ru/Events.md#local). Обработки синхронных глобальных событий выполняются внутри транзакции [применения изменений](/ru/Apply_changes_APPLY.md), вместе с проверками [ограничений](/ru/Constraints.md).

Порядок между обработками, реагирующими на одно и то же изменение, определяют зависимости по данным; явно он задается ключевым словом `AFTER` (синоним `GOAFTER`) в [блоке описания события](/ru/Event_description_block.md).
