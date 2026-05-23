# Оператор MULTI

Оператор `MULTI` - создание [свойства](/ru/Properties/.md), реализующего [выбор](/ru/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE/.md#single) одного из значений (полиморфная форма).

### Синтаксис[​](#синтаксис "Прямая ссылка на этот заголовок")

```
MULTI expr1, ..., exprN [exclusionType]
```

### Описание[​](#описание "Прямая ссылка на этот заголовок")

Оператор `MULTI` создает свойство, значением которого будет значение одного из указанных в операторе свойств. Условием выбора свойства является [принадлежность параметров сигнатуре](/ru/ISCLASS_operator/.md) этого свойства.

### Параметры[​](#параметры "Прямая ссылка на этот заголовок")

* `expr1, ..., exprN`

  Список [выражений](/ru/Expression/.md), определяющих свойства, из которых будет производиться выбор.

* `exclusionType`

  [Тип взаимоисключения](/ru/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE/.md#exclusive). Определяет, могут ли несколько условий выбора свойства одновременно выполняться при некотором наборе параметров. Задается одним из ключевых слов:

  * `EXCLUSIVE`
  * `OVERRIDE`

  Тип `EXCLUSIVE` указывает на то, что условия выбора свойства не могут одновременно выполняться. Тип `OVERRIDE` допускает несколько одновременно выполняющихся условий, в этом случае будет выбрано первое в списке свойство с выполняющимся условием выбора.

  Тип `EXCLUSIVE` используется по умолчанию.

### Примеры[​](#примеры "Прямая ссылка на этот заголовок")

```
nameMulti (Human h) = MULTI 'Male' IF h IS Male, 'Female' IF h IS Female;

CLASS Ledger;
CLASS InLedger : Ledger;
quantity = DATA INTEGER (InLedger);

CLASS OutLedger : Ledger;
quantity = DATA INTEGER (OutLedger);

signedQuantity (Ledger l) = MULTI quantity[InLedger](l), quantity[OutLedger](l);
```
