# Добавление объектов (NEW)

Оператор *добавления объектов* создает [действие](/ru/Actions/.md), которое добавляет объекты заданного [пользовательского класса](/ru/User_classes/.md) для всех наборов объектов, для которых значение некоторого [свойства](/ru/Properties/.md) (*условия*) не равно `NULL`. Условие можно не задавать, в этом случае оно считается равным `TRUE`.

Также в этом операторе можно задавать [первичное свойство](/ru/Data_properties_DATA/.md), в значения которого будут записаны добавленные объекты. Если условие не задано, по умолчанию этим свойством будет свойство `addedObject`.

Пользовательский класс, объекты которого будет создавать этот оператор, должен быть конкретным.

Добавлять объекты в систему также можно при помощи соответствующей [опции](/ru/Loop_FOR/.md#addobject) в операторе [цикла](/ru/Loop_FOR/.md).

### Язык[​](#язык "Прямая ссылка на этот заголовок")

Для объявления действия, реализующего добавление объектов, используется [оператор `NEW`](/ru/NEW_operator/.md). Для реализации схожей функциональности также используется опция `NEW` в [операторе `FOR`](/ru/FOR_operator/.md).

### Примеры[​](#примеры "Прямая ссылка на этот заголовок")

```

newSku ()  {
    LOCAL addedSkus = Sku (INTEGER);
    NEW Sku WHERE iterate(i, 1, 3) TO addedSkus(i);
    FOR Sku s = addedSkus(i) DO {
        id(s) <- 425;
        name(s) <- 'New Sku';
    }
}
```

```
name = DATA STRING[100] (Store);

testFor  {
    LOCAL sum = INTEGER ();
    FOR iterate(i, 1, 100) DO {
        sum() <- sum() (+) i;
    }

    FOR in(Sku s) DO {
        MESSAGE 'Sku ' + id(s) + ' was selected';
    }

    FOR Store st IS Store DO { // пробегаем по всем объектам класса Store
        FOR in(st, Sku s) DO { // пробегаем по всем Sku, для которых in задано
            MESSAGE 'There is Sku ' + id(s) + ' in store ' + name(st);
        }

    }
}

newSku ()  {
    NEW s = Sku {
        id(s) <- 425;
        name(s) <- 'New Sku';
    }
}

copy (Sku old)  {
    NEW new = Sku {
        id(new) <- id(old);
        name(new) <- name(old);
    }
}

createDetails (Order o)  {
    FOR in(Sku s) NEW d = OrderDetail DO {
        order(d) <- o;
        sku(d) <- s;
    }
}
```
