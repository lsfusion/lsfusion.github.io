# Оператор JSON

Оператор `JSON` - свойство, создающее из [заданных свойств](/ru/Data_export_EXPORT/.md) или, в общем случае, [из формы](/ru/In_a_structured_view_EXPORT_IMPORT/.md) JSON

## Синтаксис[​](#синтаксис "Прямая ссылка на этот заголовок")

```
JSON FROM [columnId1 =] propertyExpr1, ..., [columnIdN = ] propertyExprN 
  [WHERE whereExpr] [ORDER orderExpr1 [DESC], ..., orderExprL [DESC]]
  [TOP topExpr] [OFFSET offsetExpr]
JSON ( formName [OBJECTS objName1 = expr1, ..., objNameK = exprK] 
  [TOP (topExpr | (topGroupId1 = topPropertyExpr1, ..., topGroupIdT = topPropertyExprT))]
  [OFFSET (offsetExpr | (offsetGroupId1 = offsetPropertyExpr1, ..., offsetGroupIdF = offsetPropertyExprF))] )
```

## Описание[​](#описание "Прямая ссылка на этот заголовок")

Оператор `JSON` - свойство, создающее из заданных свойств или заданной формы JSON.

При экспорте формы в блоке `OBJECTS` можно объектам формы добавлять дополнительные фильтры на равенство этих объектов [переданным значениям](/ru/Open_form/.md#params). Также эти объекты [не будут участвовать](/ru/Structured_view/.md#objects) в построении иерархии групп объектов.

## Параметры[​](#параметры "Прямая ссылка на этот заголовок")

* `formName`

  Имя формы, из которой необходимо экспортировать данные. [Составной идентификатор](/ru/IDs/.md#cid).

* `objName1 ... objNameK`

  Имена объектов формы, для которых задаются фильтруемые (фиксированные) значения. [Простые идентификаторы](/ru/IDs/.md#id).

* `expr1 ... exprK`

  [Выражения](/ru/Expression/.md), значения которых определяют фильтруемые (фиксированные) значения для объектов формы.

* `propertyExpr1, ..., propertyExprN`

  Список [выражений](/ru/Expression/.md), из значений которых экспортируются данные.

* `columnId1, ..., columnIdN`

  Список идентификаторов колонок в результирующем JSON, в которые будут переноситься данные из соответствующего свойства. Каждый элемент списка задается либо [простым идентификатором](/ru/IDs/.md#id), либо [строковым литералом](/ru/Literals/.md#strliteral). Если идентификатор не задан, он по умолчанию считается равным `expr<Номер колонки>`.

* `whereExpr`

  Выражение, значение которого является условием создаваемого экспорта. Если не задано, считается равным [дизьюнкции](/ru/Logical_operators_AND_OR_NOT_XOR/.md) всех экспортируемых свойств (то есть хотя бы одно из свойств должно быть не `NULL`).

* `orderExpr1, ..., orderExprL`

  Список [выражений](/ru/Expression/.md), по которым производится сортировка экспортируемых данных. Могут использоваться только свойства, присутствующие в списке `propertyExpr1, ..., propertyExprN`.

* `DESC`

  Ключевое слово. Указывает на обратный порядок сортировки. По умолчанию используется сортировка по возрастанию.

* `TOP topExpr`

* `TOP (topExpr | (topGroupId1 = topPropertyExpr1, ..., topGroupIdT = topPropertyExprT))`

  Экспорт только первых `n` записей, где `n` - значение выражения `topExpr` или `topPropertyExprT` для группы объектов `topGroupIdT`.

* `OFFSET offsetExpr`

* `OFFSET (offsetExpr | (offsetGroupId1 = offsetPropertyExpr1, ..., offsetGroupIdF = offsetPropertyExprF))`

  Экспорт только записей со смещением `m`, где `m` - значение выражения `offsetExpr` или `offsetPropertyExprF` для группы объектов `offsetGroupIdF`.

## Примеры[​](#примеры "Прямая ссылка на этот заголовок")

```
FORM testF 
      OBJECTS j = INTEGER
      PROPERTIES ab='34'
      OBJECTS i = INTEGER
      PROPERTIES name = 'Name ' + (i AS INTEGER)
;

run() {
	MESSAGE JSON (testF OBJECTS j=4 FILTERS mod(i,2) = 0);
}
```

```
MESSAGE JSON FROM code = '1', message = 'OK';
```
