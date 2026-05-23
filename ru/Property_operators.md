# Операторы-свойства

*Оператор-свойство* - это синтаксическая конструкция, описывающая [оператор](/ru/Property_operators_paradigm/.md), создающий [свойство](/ru/Properties/.md).

Все операторы-свойства можно разделить на *контекстно-зависимые* и *контекстно-независимые*.

### Контекстно-зависимые операторы[​](#контекстно-зависимые-операторы "Прямая ссылка на этот заголовок")

Контекстно-зависимые операторы-свойства могут являться частью [выражений](/ru/Expression/.md) и использовать общие параметры (контекст). Такими операторами являются:

* [Арифметические операторы](/ru/Arithmetic_operators/.md)
* [Оператор `[]`](/ru/Brackets_operator/.md)
* [Оператор `ACTIVE`](/ru/ACTIVE_operator/.md)
* [Оператор `AGGR`](/ru/AGGR_operator/.md)
* [Оператор `CASE`](/ru/CASE_operator/.md)
* [Оператор `CONCAT`](/ru/CONCAT_operator/.md)
* [Оператор `EXCLUSIVE`](/ru/EXCLUSIVE_operator/.md)
* [Оператор `GROUP`](/ru/GROUP_operator/.md) (без блока `BY`)
* [Оператор `IF`](/ru/IF_operator/.md)
* [Оператор `IF ... THEN`](/ru/IF_..._THEN_operator/.md)
* [Оператор `ISCLASS`](/ru/ISCLASS_operator/.md)
* [Оператор `JSON`](/ru/JSON_operator/.md)
* [Оператор `JOIN`](/ru/JOIN_operator/.md)
* [Оператор `JSON`](/ru/JSON_operator/.md)
* [Оператор `LIKE`](/ru/LIKE_operator/.md)
* [Оператор `MATCH`](/ru/MATCH_operator/.md)
* [Оператор `MAX`](/ru/MAX_operator/.md)
* [Оператор `MIN`](/ru/MIN_operator/.md)
* [Оператор `MULTI`](/ru/MULTI_operator/.md)
* [Оператор `OVERRIDE`](/ru/OVERRIDE_operator/.md)
* [Оператор `PARTITION`](/ru/PARTITION_operator/.md)
* [Оператор `PREV`](/ru/PREV_operator/.md)
* [Оператор `RECURSION`](/ru/RECURSION_operator/.md)
* [Оператор `ROUND`](/ru/ROUND_operator/.md)
* [Оператор `STRUCT`](/ru/STRUCT_operator/.md)
* [Оператор `UNGROUP`](/ru/UNGROUP_operator/.md)
* [Оператор преобразования типа](/ru/Type_conversion_operator/.md)
* [Операторы `AND`, `OR`, `NOT`, `XOR`](/ru/AND_OR_NOT_XOR_operators/.md)
* [Операторы `IS`, `AS`](/ru/IS_AS_operators/.md)
* [Операторы изменений](/ru/Change_operators/.md)
* [Операторы сравнения](/ru/Comparison_operators/.md)

### Контекстно-независимые операторы[​](#contextindependent "Прямая ссылка на этот заголовок")

Контекстно-независимые операторы-свойства отличаются от контекстно-зависимых тем, что сами определяют параметры (а не просто используют верхние). Как следствие, они не могут являться частью выражений, и могут быть использованы только в [инструкции `=`](/ru/=_statement/.md) и [операторе `JOIN`](/ru/JOIN_operator/.md):

* [Оператор `DATA`](/ru/DATA_operator/.md)
* [Оператор `GROUP`](/ru/GROUP_operator/.md) (с блоком `BY`)
* [Оператор `FORMULA`](/ru/FORMULA_operator/.md)
* [Оператор `ABSTRACT`](/ru/ABSTRACT_operator/.md)
* [Операторы групп объектов](/ru/Object_group_operator/.md)
