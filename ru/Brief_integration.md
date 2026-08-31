# Brief: integration

* [Импорт данных](#%D0%B8%D0%BC%D0%BF%D0%BE%D1%80%D1%82-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85)
* [Экспорт данных (EXPORT)](#%D1%8D%D0%BA%D1%81%D0%BF%D0%BE%D1%80%D1%82-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85-export)
* [Интеграция](#%D0%B8%D0%BD%D1%82%D0%B5%D0%B3%D1%80%D0%B0%D1%86%D0%B8%D1%8F)

## Импорт данных[​](#импорт-данных "Прямая ссылка на этот заголовок")

### Плоский импорт[​](#плоский-импорт "Прямая ссылка на этот заголовок")

[Оператор `IMPORT`](/ru/IMPORT_operator.md) создает действие, которое читает файл, разбирает на колонки (поля) и [записывает](/ru/Property_change_CHANGE.md) каждую в свое свойство или параметр.

```
IMPORT [importFormat] FROM fileExpr importDestination
```

Приемник задается одним из двух способов ([оператор `IMPORT`](/ru/IMPORT_operator.md)):

```
TO [(objClassId1, objClassId2, ..., objClassIdK)] propertyId1 [= columnId1], ..., propertyIdN [= columnIdN] [WHERE whereId]
FIELDS [(objClassId1 objAlias1, objClassId2 objAlias2, ..., objClassIdK objAliasK)] propClassId1 [propAlias1 =] columnId1 [NULL], ..., propClassIdN [propAliasN =] columnIdN [NULL] [DO actionOperator [ELSE elseActionOperator]]
```

Строки отображаются на импортируемые объекты: для числового класса это номер строки начиная с 0, для конкретного [пользовательского класса](/ru/User_classes.md) — новый объект на строку. Объект не более одного, по умолчанию `INTEGER` с именем `row`. Признак импортированной строки пишется в свойство из `WHERE whereId`, по умолчанию в `System.imported[INTEGER]` ([импорт данных](/ru/Data_import_IMPORT.md)).

```
importSkus (FILE f) {
    IMPORT XLS SHEET 2 FROM f TO field1 = C, field2, field3 = F, field4 = A;
}
```

### Структурированный импорт и формы[​](#структурированный-импорт-и-формы "Прямая ссылка на этот заголовок")

Импорт формы — операция, обратная ее открытию в [структурированном представлении](/ru/Structured_view.md): значения из файла пишутся в свойства формы так, чтобы обратный экспорт воссоздал исходный файл ([Brief: экспорт данных](/ru/Brief_integration.md#%D1%8D%D0%BA%D1%81%D0%BF%D0%BE%D1%80%D1%82-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85-export)).

```
IMPORT formName [importFormat] [FROM (fileExpr | groupId1 = fileExpr1 [, ..., groupIdM = fileExprM])]
```

Иерархические форматы (**JSON**, **XML**) читаются одним файлом, плоские (**CSV**, **XLS**, **DBF**, **TABLE**) — по файлу на каждую группу объектов; пустая группа называется `root`. Без `FROM` берется `System.importFile`.

Импортируемая форма ограничена: объекты только числовых или конкретных пользовательских классов, в группе ровно один объект, свойства и фильтры изменяемые (как правило, [первичные свойства](/ru/Brief_logic.md#%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%B0)). Плоский импорт — его частный случай: форму платформа строит сама. Механизм — [в структурированном представлении](/ru/In_a_structured_view_EXPORT_IMPORT.md), представления формы — [Brief: формы](/ru/Brief_view.md#%D1%84%D0%BE%D1%80%D0%BC%D1%8B).

### Форматы и сопоставление полей[​](#форматы-и-сопоставление-полей "Прямая ссылка на этот заголовок")

Формат задается ключевым словом и своими опциями:

```
JSON [ROOT rootExpr] [WHERE whereExpr] [CHARSET charsetStr]
XML [ROOT rootExpr] [ATTR] [WHERE whereExpr] [CHARSET charsetStr]
CSV [separator] [HEADER | NOHEADER] [ESCAPE | NOESCAPE] [WHERE whereExpr] [CHARSET charsetStr]
XLS [HEADER | NOHEADER] [SHEET (sheetExpr | ALL)] [WHERE whereExpr]
DBF [MEMO memoExpr] [WHERE whereExpr] [CHARSET charsetStr]
TABLE [WHERE whereExpr]
```

`XLS` читает и `xls`, и `xlsx`; отдельного ключевого слова `XLSX` на импорте нет. Без явного формата он определяется по классу файла — `JSONFILE`, `XMLFILE`, `CSVFILE`, `EXCELFILE`, `DBFFILE`, `TABLEFILE`, — а для класса `FILE` по расширению.

Колонка для свойства указывается как `= columnId` простым именем или строковым литералом; без нее берется колонка, следующая за указанной для предыдущего свойства. В `FIELDS` без псевдонима именем параметра становится имя поля файла. `WHERE whereExpr` отбирает строки текстовым условием вида `поле знак значение`.

### Обработка импортированных данных[​](#обработка-импортированных-данных "Прямая ссылка на этот заголовок")

`DO` относится к форме `FIELDS`: перечисленные в `FIELDS` имена становятся локальными параметрами, `DO` выполняется для каждой импортированной записи, и в его контексте доступны эти параметры, а `ELSE` — если не импортировано ни одной записи. У формы `TO` блока `DO` нет вовсе — значения остаются в перечисленных свойствах, а импортированные строки перебирают по свойству-признаку.

```
importOrders (FILE t) {
    IMPORT FROM t FIELDS INTEGER a, DATE b, BPSTRING[50] c DO
        NEW o = Order {
            number(o) <- a;
            date(o) <- b;
            customer(o) <- c;
        }
}
```

Импорт пишет значения обычным изменением свойства, поэтому записанное попадает в текущую [сессию изменений](/ru/Brief_logic.md#%D1%81%D0%B5%D1%81%D1%81%D0%B8%D0%B8-%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D0%B9) и применяется вместе с [событиями](/ru/Brief_logic.md#%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D1%8F) и [ограничениями](/ru/Brief_logic.md#%D0%BE%D0%B3%D1%80%D0%B0%D0%BD%D0%B8%D1%87%D0%B5%D0%BD%D0%B8%D1%8F).

Сам файл берется из значения свойства: по URL его читает [оператор `READ`](/ru/READ_operator.md), либо его возвращает [внешний вызов](/ru/Brief_integration.md#%D0%B8%D0%BD%D1%82%D0%B5%D0%B3%D1%80%D0%B0%D1%86%D0%B8%D1%8F), либо выбирает пользователь. Рекомендации по написанию импорта — [Правила: импорт данных](/ru/Rules_integration.md).

## Экспорт данных (EXPORT)[​](#экспорт-данных-export "Прямая ссылка на этот заголовок")

### Экспорт свойств и форм[​](#экспорт-свойств-и-форм "Прямая ссылка на этот заголовок")

[Оператор `EXPORT`](/ru/EXPORT_operator.md) создаёт действие, которое выгружает данные в файл — либо из списка свойств, либо из формы, [открытой в структурированном представлении](/ru/In_a_structured_view_EXPORT_IMPORT.md):

```
EXPORT [exportFormat] FROM [columnId1 =] propertyExpr1, ..., [columnIdN = ] propertyExprN
  [WHERE whereExpr] [ORDER orderExpr1 [DESC], ..., orderExprL [DESC]]
  [TOP topExpr] [OFFSET offsetExpr] [TO propertyId]
EXPORT formName [OBJECTS objName1 = expr1, ..., objNameK = exprK] [exportFormat]
  [TOP topSelect]
  [OFFSET offsetSelect]
  [TO exportTo]
```

В первой форме каждое перечисленное выражение становится колонкой результата, `WHERE` задаёт набор строк, `ORDER` — их порядок. Во второй форме структуру выгрузки задаёт сама форма: её группы объектов, отображаемые свойства и фильтры; объекты, зафиксированные в блоке `OBJECTS`, работают как дополнительные фильтры. Механизм — [экспорт данных](/ru/Data_export_EXPORT.md).

```
exportSkus (Store store) {
    EXPORT CSV FROM id = id(Sku s), name = name(s) WHERE in(store, s) ORDER name(s);
}
```

### Плоская и иерархическая структура[​](#плоская-и-иерархическая-структура "Прямая ссылка на этот заголовок")

Экспорт списка свойств всегда даёт плоский результат — одну таблицу строк.

Экспорт формы переносит в результат иерархию её групп объектов, но только в форматах **JSON** и **XML**. В плоские форматы (**CSV**, **XLS**, **XLSX**, **DBF**, **TABLE**) каждая группа объектов выгружается отдельным файлом, и выгрузка формы в плоском формате в один файл не поддерживается. Объекты, зафиксированные в блоке `OBJECTS`, в построении иерархии групп не участвуют.

Как форма превращается в структуру данных, описано в [структурированном представлении](/ru/Structured_view.md).

### Форматы и параметры[​](#форматы-и-параметры "Прямая ссылка на этот заголовок")

Формат записывается перед списком выгружаемых данных одним из вариантов [оператора `EXPORT`](/ru/EXPORT_operator.md):

```
JSON [CHARSET charsetStr]
XML [HEADER | NOHEADER] [ROOT rootExpr] [TAG tagExpr] [ATTR] [CHARSET charsetStr]
CSV [separator] [HEADER | NOHEADER] [ESCAPE | NOESCAPE] [CHARSET charsetStr]
XLS [SHEET sheetExpr] [HEADER | NOHEADER]
XLSX [SHEET sheetExpr] [HEADER | NOHEADER]
DBF [CHARSET charsetStr]
TABLE
```

| Формат            | Параметры и их умолчания                                                                                                              |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **JSON**          | `CHARSET` — `UTF-8`                                                                                                                   |
| **XML**           | `HEADER` — строка `<?xml ...?>`; `ROOT` — корневой элемент; `TAG` — элемент записи; `ATTR` — значения атрибутами; `CHARSET` — `UTF-8` |
| **CSV**           | разделитель — `;`; `NOHEADER`; `ESCAPE`; `CHARSET` — `UTF-8`                                                                          |
| **XLS**, **XLSX** | `SHEET` — имя листа; `NOHEADER`                                                                                                       |
| **DBF**           | `CHARSET` — `CP1251`                                                                                                                  |
| **TABLE**         | нет                                                                                                                                   |

### Назначение результата[​](#назначение-результата "Прямая ссылка на этот заголовок")

Блок `TO` задаёт свойство без параметров файлового класса (`FILE`, `RAWFILE`, `JSONFILE` и т. п.), в которое записывается результат. При выгрузке списка свойств, а также при выгрузке формы в иерархический формат (**JSON**, **XML**) формируется один файл, и без `TO` он попадает в свойство `System.exportFile`. Когда классом значения приёмника является `FILE`, расширение файла совпадает с названием формата в нижнем регистре (`json`, `xml`, `csv`, `xls`, `xlsx`, `dbf`, `table`).

При выгрузке формы в плоский формат каждая группа объектов даёт свой файл, поэтому приёмник задаётся отдельно для каждой группы — `TO groupId1 = propertyId1, ...`. Группы, не перечисленные в списке, не выгружаются: умолчания `System.exportFile` для них нет. [Пустая группа объектов](/ru/Static_view.md#empty) называется `root`.

```
exportSku (Store store) {
    LOCAL exportedFile = FILE ();
    // плоский формат: приёмник задаётся для группы объектов s формы exportSku
    EXPORT exportSku OBJECTS st = store DBF CHARSET 'CP866' TO s = exportedFile;
}
```

### Умолчания, влияющие на результат[​](#умолчания-влияющие-на-результат "Прямая ссылка на этот заголовок")

* Формат, если он не указан, — **JSON**.
* `WHERE`, если оно не указано, — дизъюнкция всех экспортируемых свойств: выгружаются наборы объектов, у которых не `NULL` хотя бы одно из них.
* Имена колонок, если они не заданы, — `expr1`, ..., `exprN` по номеру выражения в списке.
* Значение `NULL` в **JSON** и **XML** пропускается в записи (ключа или элемента нет), а в плоских форматах записывается пустой ячейкой; сама запись сохраняется, пока выполняется условие `WHERE`.
* В `ORDER` допускаются произвольные выражения: выражение, не входящее в список экспортируемых, добавляется во внутренний запрос скрытой колонкой и в результат не попадает.
* Выгрузка одного значения без имени колонки даёт в **JSON** само значение, а не объект с полем.

## Интеграция[​](#интеграция "Прямая ссылка на этот заголовок")

### Доступ извне[​](#доступ-извне "Прямая ссылка на этот заголовок")

Снаружи вызывается [действие](/ru/Actions.md) с параметрами, а результатом возвращаются значения указанных свойств без параметров. Действие задается тремя способами: `EXEC` — по имени, `EVAL` и `EVAL ACTION` — переданным кодом lsFusion (изнутри его выполняет [оператор `EVAL`](/ru/EVAL_operator.md)).

Запросы принимают сервер приложений (порт `7651`) и веб-сервер:

* Action API — `/exec`, `/eval`, `/eval/action`, оба сервера;
* Form API — `/form`, только веб-сервер: ведение формы в интерактивном представлении;
* File API — `/files/list`, `/files/read`, `/files/search`, только веб-сервер: чтение classpath приложения.

Принимается ли такой вызов вообще, задает настройка: [`enableAPI`](/ru/Working_parameters.md) — для Action API и File API, `enableUI` — для Form API, который платформа считает пользовательским интерфейсом, а не программным. Действие, оказавшееся интерактивным, маршрутизируется в запущенный клиент пользователя и требует `enableUI` вдобавок к проверке `enableAPI`. Опция действия [`@@api`](/ru/Action_options.md) разрешает конкретное действие при `enableAPI=0` (авторизованный пользователь при этом все равно нужен), а `@@noauth` обходит и проверку аутентификации, и `enableAPI`. Аннотация помечает именованное действие, поэтому она не распространяется ни на `/eval` и `/eval/action`, выполняющие произвольный код, ни на File API, где никакое действие не вызывается. Механизм — [обращение из внешней системы](/ru/Access_from_an_external_system.md).

Из той же JVM или того же SQL-сервера к элементам обращаются напрямую — Java-кодом ([Java API для интеграций](/ru/Java_integration_API.md)) либо запросом SQL к таблицам платформы ([обращение из внутренней системы](/ru/Access_from_an_internal_system.md)).

### Внешние вызовы (EXTERNAL)[​](#внешние-вызовы-external "Прямая ссылка на этот заголовок")

[Оператор `EXTERNAL`](/ru/EXTERNAL_operator.md) создает действие с одним вызовом внешней системы: параметры — в `PARAMS`, результаты — в свойства без параметров из `TO`.

```
EXTERNAL externalCall [PARAMS paramExpr1, ..., paramExprN] [TO propertyId1, ..., propertyIdM]
```

`externalCall`:

```
HTTP [CLIENT] [requestType] connectionStrExpr httpOption1 ... httpOptionN
TCP [CLIENT] connectionStrExpr
UDP [CLIENT] connectionStrExpr
SQL connectionStrExpr EXEC execStrExpr
LSF connectionStrExpr lsfExecType execStrExpr
DBF connectionStrExpr APPEND [CHARSET charsetLiteral]
```

`HTTP` — запрос по строке, `TCP` и `UDP` — байты файла в сокет, `SQL` — команда стороннему SQL-серверу, `LSF` — действие на другом сервере lsFusion, `DBF` — дозапись строк в `.dbf` ([обращение к внешней системе](/ru/Access_to_an_external_system_EXTERNAL.md)). Подключения `SQL`, `TCP`, `DBF` переиспользуются внутри блока [`NEWCONNECTION`](/ru/NEWCONNECTION_operator.md); файл по URL забирает [оператор `READ`](/ru/READ_operator.md).

```
readRate () {
    EXTERNAL HTTP GET r'https://www.lsfusion.org/rate?cur=$1' PARAMS r'USD' TO exportFile;
}
```

### Внутренние вызовы (INTERNAL)[​](#внутренние-вызовы-internal "Прямая ссылка на этот заголовок")

[Оператор `INTERNAL`](/ru/INTERNAL_operator.md) выполняет код внутри собственных компонент поставки: Java в JVM сервера приложений, JavaScript-функцию или ресурс в веб-клиенте пользователя (`CLIENT`), SQL к базе самой платформы (`DB`).

```
INTERNAL [CLIENT] [syncType] className [(classId1, ..., classIdN)] [NULL]
INTERNAL [syncType] <{anyTokens}> [NULL]
INTERNAL internalCall [PARAMS paramExpr1, ..., paramExprN] [TO propertyId1, ..., propertyIdM]
```

Java-цель — класс, наследующий `InternalAction`, заданный своим именем или встраиваемым фрагментом кода в `<{ }>`. Такой код пишет значения прямо в свойства lsFusion в той же [сессии изменений](/ru/Brief_logic.md#%D1%81%D0%B5%D1%81%D1%81%D0%B8%D0%B8-%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D0%B9); что ему доступно — [Java API для интеграций](/ru/Java_integration_API.md). Механизм всех трех типов — [внутренний вызов (`INTERNAL`)](/ru/Internal_call_INTERNAL.md), место оператора рядом с `FORMULA` — [обращение к внутренней системе](/ru/Access_to_an_internal_system_INTERNAL_FORMULA.md).

```
setNoCancelInTransaction() INTERNAL <{ context.getSession().setNoCancelInTransaction(true); }>;
```

### Декларативная интеграция (FORMULA, CUSTOM, JSON)[​](#декларативная-интеграция-formula-custom-json "Прямая ссылка на этот заголовок")

[Оператор `FORMULA`](/ru/FORMULA_operator.md) создает свойство, вычисляемое выражением на SQL, возможно разным для разных СУБД; табличная форма отображает свойство на целую таблицу ([пользовательская формула](/ru/Custom_formula_FORMULA.md)).

```
FORMULA [NULL] [className [valueId]] implList [( paramList )] [NULL]
```

`CUSTOM` отдает отрисовку JavaScript-функции клиента: у группы объектов — `CUSTOM renderFunction [OPTIONS optionsExpr]` ([блоки объектов](/ru/Object_blocks.md)), у свойства — `CUSTOM renderFunction [CHANGE [editFunction]]` ([блок свойств и действий](/ru/Properties_and_actions_block.md)). Функция получает собственный локальный контроллер представления, который читает и изменяет то, что это представление показывает; контроллер формы, а с ним и вызовы сервера, достается из него как `controller.form` ([How-to: Пользовательские компоненты](/ru/How-to_Custom_components_objects.md)).

[Операторы `JSON` и `JSONTEXT`](/ru/JSON_operator.md) создают свойство, собирающее JSON из списка свойств или из формы.

```
jsonKeyword FROM [columnId1 =] propertyExpr1, ..., [columnIdN =] propertyExprN
  [WHERE whereExpr]
  [ORDER orderExpr1 [DESC], ..., orderExprL [DESC]]
  [TOP topExpr] [OFFSET offsetExpr]
jsonKeyword ( formName [OBJECTS objName1 = expr1, ..., objNameK = exprK]
  [FILTERS filterExpr1, ..., filterExprP]
  [TOP topSelect] [OFFSET offsetSelect] )
```

`jsonKeyword` — это `JSON` или `JSONTEXT`.
