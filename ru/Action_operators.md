# Операторы-действия

*Оператор-действие* - это синтаксическая конструкция, описывающая [оператор](/ru/Action_operators_paradigm/.md), создающий [действие](/ru/Actions/.md).

Операторы-действия можно разделить на *контекстно-зависимые* и *контекстно-независимые*.

### Контекстно-зависимые операторы[​](#contextdependent "Прямая ссылка на этот заголовок")

Контекстно-зависимые операторы-действия могут использовать параметры из внешнего контекста. Они могут быть использованы везде, где необходимо описать действие, например, при создании другого действия либо [события](/ru/Events/.md). Такими операторами являются:

* [Оператор `{...}`](/ru/Braces_operator/.md)
* [Оператор `ACTIVATE`](/ru/ACTIVATE_operator/.md)
* [Оператор `ACTIVE`](/ru/ACTIVE_operator/.md)
* [Оператор `APPLY`](/ru/APPLY_operator/.md)
* [Оператор `ASK`](/ru/ASK_operator/.md)
* [Оператор `BREAK`](/ru/BREAK_operator/.md)
* [Оператор `CANCEL`](/ru/CANCEL_operator/.md)
* [Оператор `CASE`](/ru/CASE_action_operator/.md)
* [Оператор `CHANGE`](/ru/CHANGE_operator/.md)
* [Оператор `CHANGECLASS`](/ru/CHANGECLASS_operator/.md)
* [Оператор `CLOSE FORM`](/ru/CLOSE_FORM_operator/.md)
* [Оператор `COLLAPSE`](/ru/COLLAPSE_operator/.md)
* [Оператор `CONTINUE`](/ru/CONTINUE_operator/.md)
* [Оператор `DELETE`](/ru/DELETE_operator/.md)
* [Оператор `DIALOG`](/ru/DIALOG_operator/.md)
* [Оператор `EMAIL`](/ru/EMAIL_operator/.md)
* [Оператор `EVAL`](/ru/EVAL_operator/.md)
* [Оператор `EXEC`](/ru/EXEC_operator/.md)
* [Оператор `EXPAND`](/ru/EXPAND_operator/.md)
* [Оператор `EXPORT`](/ru/EXPORT_operator/.md)
* [Оператор `FOR`](/ru/FOR_operator/.md)
* [Оператор `IF ... THEN`](/ru/IF_..._THEN_action_operator/.md)
* [Оператор `IMPORT`](/ru/IMPORT_operator/.md)
* [Оператор `INPUT`](/ru/INPUT_operator/.md)
* [Оператор `MESSAGE`](/ru/MESSAGE_operator/.md)
* [Оператор `MULTI`](/ru/MULTI_action_operator/.md)
* [Оператор `NEW`](/ru/NEW_operator/.md)
* [Оператор `NESTEDSESSION`](/ru/NESTEDSESSION_operator/.md)
* [Оператор `NEWCONNECTION`](/ru/NEWCONNECTION_operator/.md)
* [Оператор `NEWEXECUTOR`](/ru/NEWEXECUTOR_operator/.md)
* [Оператор `NEWSESSION`](/ru/NEWSESSION_operator/.md)
* [Оператор `NEWTHREAD`](/ru/NEWTHREAD_operator/.md)
* [Оператор `PRINT`](/ru/PRINT_operator/.md)
* [Оператор `READ`](/ru/READ_operator/.md)
* [Оператор `RECALCULATE`](/ru/RECALCULATE_operator/.md)
* [Оператор `REQUEST`](/ru/REQUEST_operator/.md)
* [Оператор `RETURN`](/ru/RETURN_operator/.md)
* [Оператор `SCREENSHOT`](/ru/SCREENSHOT_operator/.md)
* [Оператор `SHOW`](/ru/SHOW_operator/.md)
* [Оператор `TRY`](/ru/TRY_operator/.md)
* [Оператор `WHILE`](/ru/WHILE_operator/.md)
* [Оператор `WRITE`](/ru/WRITE_operator/.md)

### Контекстно-независимые операторы[​](#contextindependent "Прямая ссылка на этот заголовок")

Контекстно-независимые операторы-действия не могут использовать параметры из внешнего контекста. Из-за этого они могут могут быть использованы только в [инструкции `ACTION`](/ru/ACTION_statement/.md):

* [Оператор `ABSTRACT`](/ru/ABSTRACT_action_operator/.md)
* [Оператор `INTERNAL`](/ru/INTERNAL_operator/.md)
