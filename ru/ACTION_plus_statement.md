# Инструкция ACTION+

Инструкция `ACTION+` добавляет реализацию к [абстрактному действию](/ru/Action_extension/.md).

### Синтаксис[​](#синтаксис "Прямая ссылка на этот заголовок")

```
[ACTION] abstractAction(param1, ..., paramN) +
    [WHEN conditionExpr THEN]
    { actionBody }
    [OPTIMISTICASYNC]
```

### Описание[​](#описание "Прямая ссылка на этот заголовок")

Инструкция `ACTION+` не создает новое действие, а добавляет еще одну реализацию к уже объявленному [абстрактному действию](/ru/Action_extension/.md).

Для абстрактного действия типа `CASE` используется блок `WHEN conditionExpr THEN`. Для действий типов `MULTI` и `LIST` реализация записывается без блока `WHEN ... THEN`.

### Параметры[​](#параметры "Прямая ссылка на этот заголовок")

* `ACTION`

  Необязательное ключевое слово. Явно показывает, что расширяется действие.

* `abstractAction`

  [Идентификатор](/ru/IDs/.md#propertyid) расширяемого абстрактного действия.

* `param1, ..., paramN`

  Список [типизированных параметров](/ru/IDs/.md#paramid) добавляемой реализации. Он задает ее сигнатуру. Список может быть пустым. Количество параметров и их классы должны быть совместимы с сигнатурой абстрактного действия. Эти параметры можно использовать в `actionBody` и, для формы `CASE`, в `conditionExpr`.

* `conditionExpr`

  [Выражение](/ru/Expression/.md) для условия выбора этой реализации. Используется только для абстрактного действия типа `CASE`.

* `actionBody`

  Тело добавляемой реализации: содержимое [оператора `{...}`](/ru/Braces_operator/.md), то есть последовательность [операторов-действий](/ru/Action_operators/.md) и, при необходимости, объявлений `LOCAL`. Если абстрактное действие объявляет результат, возвращаемое значение и его параметры должны быть совместимы с этим результатом.

* `OPTIMISTICASYNC`

  Ключевое слово, помечающее добавляемую реализацию как оптимистично-асинхронную. Используется только в формах, где из нескольких реализаций выбирается одна.

### Примеры[​](#примеры "Прямая ссылка на этот заголовок")

```
CLASS ABSTRACT Animal;
whoAmI ABSTRACT (Animal);

CLASS Dog : Animal;
whoAmI(Dog d) + {
    MESSAGE 'I am a dog!';
}

CLASS Cat : Animal;
whoAmI(Cat c) + {
    MESSAGE 'I am a cat!';
}
```

```
CLASS ABSTRACT Animal;
CLASS Dog : Animal;

notify(Animal a) ABSTRACT (Animal);
notify(Dog d) {
    MESSAGE 'Dog';
}

notify[Animal](Dog d) + {
    notify(d);
}
```

```
CLASS Human;
name = DATA STRING[100] (Human);

testName ABSTRACT CASE (Human);

testName(Human h) + WHEN name(h) == 'John' THEN {
    MESSAGE 'I am John';
}
testName(Human h) + WHEN name(h) == 'Bob' THEN {
    MESSAGE 'I am Bob';
}
```

```
onStarted ABSTRACT LIST ();

onStarted() + {
    MESSAGE 'Подготовка данных';
}
onStarted() + {
    MESSAGE 'Запуск обработчиков';
}
```

```
edit '{logics.edit}' ABSTRACT MULTI OVERRIDE FIRST (Object) TOOLBAR;

ACTION edit(Object o) + {
    SHOW EDIT Object = o DOCKED;
} OPTIMISTICASYNC
```
