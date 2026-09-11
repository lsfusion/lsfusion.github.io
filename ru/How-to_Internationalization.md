# How-to: Интернационализация

Система поддерживает [интернационализацию](/ru/Internationalization.md) путем передачи на клиента значений, локализованных в зависимости от того, какой язык выбран у пользователя. Локализуются все значения, которые заключены в фигурные скобки. Предположим, необходимо реализовать простую форму со списком книг и их ценой, с возможностью добавления/удаления.

Объявим логику обычным способом, только вместо задания названий в явную, вместо них будем использовать идентификаторы.

```
CLASS Book '{use.case.i18n.book}';

name '{use.case.i18n.book.name}' = DATA STRING[40] (Book);
price '{use.case.i18n.book.price}' = DATA STRING[40] (Book);

FORM books '{use.case.i18n.books}'
    OBJECTS b = Book
    PROPERTIES(b) name, price, NEW, DELETE
;

NAVIGATOR {
    NEW books;
}
```

Затем создаем новый Resource Bundle, куда пропишем значения идентификаторов на разных языках:

![](/ru/assets/images/How-to_Internationalization_newRB-a53849e2f45ae9750383287406753c0a.png)

Называем его, например, `I18nResourceBundle` (система будет считывать только файлы, которые заканчиваются на `'ResourceBundle'`) и выбираем языки, которые будут использоваться :

![](/ru/assets/images/How-to_Internationalization_RBlang-d37ec718c26fd39a64d7ff6f9684fb3c.png)

Далее, для каждого идентификатора прописываем значения на каждом из выбранных языков:

![](/ru/assets/images/How-to_Internationalization_RBprop-76b4f65caa8b86004af59da4d614a110.png)

После запуска, по умолчанию, все названия будут показываться на языке сервера (который, в свою очередь, по умолчанию, определяется по языку операционной системы) :

![](/ru/assets/images/How-to_Internationalization_exRU-d6db6984030c01e73ec56e811007d1d0.png)

Для конкретного пользователя можно изменить язык и страну в его профиле:

![](/ru/assets/images/How-to_Internationalization_langChange-25a357e58f18fd4d2e89c06c989f3c2a.png)

В таком случае, когда пользователь зайдет заново в систему, то все названия будут показываться ему на выбранном языке:

![](/ru/assets/images/How-to_Internationalization_exEN-c8df6c1ed677e76f9a065abdc9fbd679.png)

Идентификаторы можно также использовать и в выражениях:

```
description '{use.case.i18n.book.description}' (Book b) = STRING[60] (name(b) + ', {use.case.i18n.book.price} : ' + price(b));
EXTEND FORM books
    PROPERTIES(b) READONLY description
;
```

При этом надо помнить, что такие выражения не следует использовать в [материализациях](/ru/Materializations.md).

Система не умеет автоматически локализовывать пользовательские данные. Ответственность за это несет непосредственно разработчик.
