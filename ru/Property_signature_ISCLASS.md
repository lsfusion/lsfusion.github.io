# Принадлежность сигнатуре (ISCLASS)

Оператор принадлежности сигнатуре создает [свойство](/ru/Properties/.md), которое определяет, может ли, с точки зрения [классов](/ru/Classes/.md), указанное в операторе свойство иметь не `NULL` значение для переданных аргументов или нет. Фактически данный оператор выводит возможные классы указанного свойства из его семантики, после чего при помощи [логических](/ru/Logical_operators_AND_OR_NOT_XOR/.md) операторов и оператора [классификации](/ru/Classification_IS_AS/.md) создает требуемое свойство.

### Язык[​](#язык "Прямая ссылка на этот заголовок")

Для реализации этого оператора используется [оператор `ISCLASS`](/ru/ISCLASS_operator/.md).

### Пример[​](#пример "Прямая ссылка на этот заголовок")

```
CLASS Person;
name = ABSTRACT CASE STRING[100] (Person);

CLASS Student : Person;
studentName = DATA STRING[100] (Student);

name(s) += WHEN ISCLASS(studentName(s)) THEN studentName(s); // равносильно WHEN s IS Student THEN studentName(s)
```
