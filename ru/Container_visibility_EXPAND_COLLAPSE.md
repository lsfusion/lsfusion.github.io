# Видимость контейнеров (EXPAND, COLLAPSE)

Операторы *разворачивания* и *сворачивания* контейнеров управляют тем, показывается ли содержимое *сворачиваемого* [контейнера](/ru/Form_design/.md#containers) на [форме](/ru/Forms/.md). Сворачиваемый контейнер можно свернуть, скрыв его содержимое, и развернуть, снова показав его; это состояние является частью [интерактивного](/ru/Interactive_view/.md) представления формы для пользователя.

В качестве входных данных этим операторам передаётся один контейнер формы. Контейнер должен быть сворачиваемым. Полученное [действие](/ru/Actions/.md) разворачивает или сворачивает этот контейнер для пользователя, работающего с формой, и ожидает наличия формы в контексте.

### Язык[​](#язык "Прямая ссылка на этот заголовок")

Для объявления действий, разворачивающих или сворачивающих контейнер, используются операторы [`EXPAND`](/ru/EXPAND_operator/.md) и [`COLLAPSE`](/ru/COLLAPSE_operator/.md).

### Примеры[​](#примеры "Прямая ссылка на этот заголовок")

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

expandDetails {
    EXPAND CONTAINER dashboard.detailsBox;
}

collapseDetails {
    COLLAPSE CONTAINER dashboard.detailsBox;
}

EXTEND FORM dashboard
    PROPERTIES() expandDetails, collapseDetails
;
```
