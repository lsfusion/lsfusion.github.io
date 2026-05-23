# Инструкция EXTEND FORM

Инструкция `EXTEND FORM` - [расширение](/ru/Form_extension/.md) существующей [формы](/ru/Forms/.md).

### Синтаксис[​](#синтаксис "Прямая ссылка на этот заголовок")

```
EXTEND FORM formName 
    formBlock1
    ...
    formBlockN
;
```

### Описание[​](#описание "Прямая ссылка на этот заголовок")

Инструкция `EXTEND FORM` позволяет расширять существующую форму дополнительными [блоками формы](/ru/FORM_statement/.md#blocks).

### Параметры[​](#параметры "Прямая ссылка на этот заголовок")

* `formName`

  Имя расширяемой формы. [Составной идентификатор](/ru/IDs/.md#cid).

* `formBlock1 ... formBlockN`

  Блоки формы.

### Пример[​](#пример "Прямая ссылка на этот заголовок")

```
CLASS ItemGroup;
name = DATA ISTRING[100] (ItemGroup);

itemGroup = DATA ItemGroup (Item);

EXTEND FORM items
    PROPERTIES(i) NEWSESSION DELETE // добавляем на форму кнопку удаления

    OBJECTS g = ItemGroup BEFORE i // добавляем на форму объект группы товаров перед товаром
    PROPERTIES(g) READONLY name
    // если бы объект был добавлен после объекта с товарами, то фильтрация шла бы по группе товаров, а не по товарам
    FILTERS itemGroup(i) == g 
;
```
