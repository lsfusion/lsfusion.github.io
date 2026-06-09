# Оператор COLLAPSE

Оператор `COLLAPSE` создаёт [действие](/ru/Actions/.md), которое сворачивает либо [элементы](/ru/Object_tree_visibility_EXPAND_COLLAPSE/.md) [дерева объектов](/ru/Interactive_view/.md#tree) на форме, либо [сворачиваемый контейнер](/ru/Container_visibility_EXPAND_COLLAPSE/.md) формы.

### Синтаксис[​](#синтаксис "Прямая ссылка на этот заголовок")

```
COLLAPSE [collapseType] formObjectGroupId [OBJECTS objName1 = expr1, ..., objNameN = exprN]
```

Для сворачивания контейнера формы:

```
COLLAPSE CONTAINER formName.componentSelector
```

### Описание[​](#описание "Прямая ссылка на этот заголовок")

Первая форма создает действие, которое позволяет свернуть определенные элементы дерева объектов на форме. Эти элементы могут быть определены с помощью блока `OBJECTS`. Если этот блок не указан, то операция сворачивания будет применена либо к текущему элементу дерева, либо к верхнему уровню элементов указанной [группы объектов](/ru/Form_structure/.md#objects), в зависимости от типа операции.

Форма с ключевым словом `CONTAINER` создаёт действие, которое сворачивает контейнер формы, в контексте которой выполняется действие, скрывая его содержимое.

### Параметры[​](#параметры "Прямая ссылка на этот заголовок")

* `collapseType`

  Тип сворачивания. Задается одним из следующих способов:

  * `DOWN`

    Ключевое слово, при указании которого будет происходить сворачивание элементов дерева. Если блок `OBJECTS` не указан, то операция применяется к текущему элементу.

  * `ALL`

    Ключевое слово, при указании которого будет происходить рекурсивное сворачивание элементов дерева и всех их потомков. Если блок `OBJECTS` не указан, то операция применяется к текущему элементу.

  * `ALL TOP`

    Два ключевых слова, при указании которых будет происходить рекурсивное сворачивание всех верхних элементов указанной группы объектов. Блок `OBJECTS` игнорируется.

  Если не указывается, то значением по умолчанию является `DOWN`.

* `formObjectGroupId`

  [Идентификатор группы объектов](/ru/IDs/.md#groupobjectid), к которой применяется операция сворачивания.

* `objName1 ... objNameN`

  Имена объектов на форме. Объекты должны входить в указанную группу объектов. Имя объекта задается [простым идентификатором](/ru/IDs/.md#id).

* `expr1 ... exprN`

  [Выражения](/ru/Expression/.md), значения которых являются искомыми значениями соответствующих объектов в указанной группе объектов.

* `formName`

  Имя формы. [Составной идентификатор](/ru/IDs/.md#cid).

* `componentSelector`

  [Селектор](/ru/DESIGN_statement/.md#selector) компонента дизайна. Компонент должен быть сворачиваемым контейнером.

### Примеры[​](#примеры "Прямая ссылка на этот заголовок")

```
FORM expandCollapseTest
    TREE elements e = NavigatorElement PARENT parent(e)
    PROPERTIES(e) READONLY BACKGROUND NOT e IS NavigatorFolder VALUE, canonicalName, caption
;

collapseDown {
    COLLAPSE DOWN expandCollapseTest.e OBJECTS e = navigatorElementCanonicalName('System.administration');
}

collapseAllTop {
    COLLAPSE ALL TOP expandCollapseTest.e;
}

EXTEND FORM expandCollapseTest
    PROPERTIES() collapseDown, collapseAllTop
;
```

```
CLASS Store;
name = DATA ISTRING[100] (Store);

FORM dashboard
    OBJECTS s = Store
    PROPERTIES(s) name
;

DESIGN dashboard {
    NEW detailsBox {
        collapsible = TRUE;
        caption = 'Детали';
        MOVE BOX(s);
    }
}

collapseDetails {
    COLLAPSE CONTAINER dashboard.detailsBox;
}

EXTEND FORM dashboard
    PROPERTIES() collapseDetails
;
```
