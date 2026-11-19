# Язык

*lsFusion* - это язык программирования, на котором описываются [модули](/ru/Modules.md) lsFusion.

Каждый модуль состоит из последовательности [инструкций](/ru/Statements.md), разделенных на [*заголовок*](/ru/Module_header.md) и *тело* модуля. Заголовок может включать в себя четыре специальные инструкции: `MODULE`, `REQUIRE`, `PRIORITY` и `NAMESPACE`, описывающие свойства модуля. После заголовка идет тело модуля, которое состоит из остальных инструкций и описывает логику работы этого модуля.

Кроме инструкций, в этом разделе описаны интерфейсы, с которыми работает клиентский код на JavaScript: [представления React](/ru/React_views.md) — что получает от формы и что вызывает компонент React, рисующий контейнер, компонент или окно клиента, — [функции отображения](/ru/Render_functions.md) и [функции редактирования](/ru/Edit_functions.md) классических пользовательских представлений, [контроллеры формы и навигатора](/ru/Form_and_navigator_controllers.md), которые получает любое представление на JavaScript, и [клиентские модули JavaScript](/ru/Client_JavaScript_modules.md), в которых такой код лежит.

### Пример[​](#пример "Прямая ссылка на этот заголовок")

```
// Заголовок модуля
MODULE LanguageExample;

REQUIRE System;

NAMESPACE Example;

// Тело модуля

// Объявление классов
CLASS Employee;
CLASS Company;

// Объявление свойств
name(employee) = DATA BPSTRING[100](Employee);
age(employee) = DATA INTEGER(Employee);
company(employee) = DATA Company(Employee);

name(company) = DATA BPSTRING[100](Company);

// Объявление формы
FORM employeeForm
    OBJECTS e = Employee
    PROPERTIES(e) name, age, company
;

// Добавление формы в навигатор
NAVIGATOR {
    NEW employeeForm;
}
```
