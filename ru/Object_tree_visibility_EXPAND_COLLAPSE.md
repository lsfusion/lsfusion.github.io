# Видимость в дереве объектов (EXPAND, COLLAPSE)

Операторы *разворачивания* и *сворачивания* элементов [дерева объектов](/ru/Interactive_view/.md#tree) позволяют управлять видимостью элементов дерева на [форме](/ru/Forms/.md). В качестве входных данных этим операторам передается [группа объектов](/ru/Form_structure/.md#objects), к которой применяется операция. Также указывается над какими элементами дерева (каждый из которых соответствует определенному набору объектов указанной группы) необходимо выполнить операцию:

* над [текущим](/ru/Form_structure/.md#currentObject) элементом
* над указанным множеством элементов
* над всеми верхними элементами указанной группы объектов

Возможные операции включают в себя:

* разворачивание или сворачивание элемента
* разворачивание или сворачивание элемента и всех его потомков
* разворачивание всех предков элемента

### Язык[​](#язык "Прямая ссылка на этот заголовок")

Для объявления действий, реализующих операции разворачивания и сворачивания элементов дерева объектов, используются операторы [`EXPAND`](/ru/EXPAND_operator/.md) и [`COLLAPSE`](/ru/COLLAPSE_operator/.md).

### Примеры[​](#примеры "Прямая ссылка на этот заголовок")

```
FORM expandCollapseTest
    TREE elements e = NavigatorElement PARENT parent(e)
    PROPERTIES(e) READONLY BACKGROUND NOT e IS NavigatorFolder VALUE, canonicalName, caption
;

expandDown {
    EXPAND DOWN expandCollapseTest.e OBJECTS e = navigatorElementCanonicalName('System.administration');
}

expandAllTop {
    EXPAND ALL TOP expandCollapseTest.e;
}

collapseDown {
    COLLAPSE DOWN expandCollapseTest.e OBJECTS e = navigatorElementCanonicalName('System.administration');
}

EXTEND FORM expandCollapseTest
    PROPERTIES() expandDown, expandAllTop, collapseDown
;
```
