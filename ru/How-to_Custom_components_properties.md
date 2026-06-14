# How-to: Пользовательские компоненты (свойства)

Для каждого типа [свойства](/ru/Properties/.md) по умолчанию используется свой предопределенный визуальный компонент для отображения и редактирования данных. Однако, существует возможность переопределять компоненты на свои собственные, создаваемые при помощи JavaScript. Эта функциональность поддерживается только в веб-клиенте.

Рассмотрим задачу по созданию чата для общения между пользователями с целью демонстрации этой возможности.

### Доменная логика[​](#доменная-логика "Прямая ссылка на этот заголовок")

Для начала создадим доменную логику, в которой определена сущность *Сообщение*. Каждое сообщение содержит плоский текст, а также информацию об авторе и времени отправки.

```
CLASS Message 'Message';

dateTime 'Time' = DATA DATETIME (Message);
text 'Text' = DATA TEXT (Message);

author = DATA CustomUser (Message);
nameAuthor 'Author' (Message m) = name(author(m));

replyTo = DATA Message (Message);
nameAuthorReplyTo (Message m) = nameAuthor(replyTo(m));
textReplyTo (Message m) = text(replyTo(m)); 
```

### Отображение списка сообщений[​](#отображение-списка-сообщений "Прямая ссылка на этот заголовок")

Список сообщений в чате на форме будем отображать как записи в таблице с одной колонкой. Для этой колонки будет изменен компонент отображения значения на тот, который будет написан на JavaScript. Проще всего значение представить в виде строки формата JSON, в которой будут храниться все параметры сообщения. Для формирования этой строки воспользуемся оператором JSON :

```
json (Message m) = 
    JSON FROM
         author = nameAuthor(m), 
         time = dateTime(m), 
         text = text(m), 
         own = IF author(m) = currentUser() THEN 1 ELSE 0, 
         replyAuthor = nameAuthorReplyTo(m), 
         replyText = textReplyTo(m), 
         replyMessage = replyTo(m);
```

Пример значения:

```
{
    "author":"John Doe",
    "time":"2021-10-05T15:28:05",
    "text":"Hello, Jack!",
    "own":1,
    "replyAuthor":"Jack Smith",
    "replyText":"Hello, John",
    "replyMessage":31302
}
```

Далее создадим при помощи JavaScript и CSS компонент, который будет отображать сообщения в браузере. Компонент создадим в файле chat.js, который расположим в папке *resources/web*.

Внутри файла chat.js создадим функцию *chatMessageRender*. Она будет возвращать объект, состоящий из двух функций: *render* и *update*.

Функция *render* принимает на вход элемент, внутри которого должны создаваться новые элементы, необходимые для отображения данных:

```
render: function (element) { 
    let message = document.createElement("div")
    message.classList.add("chat-message");

    let header = document.createElement("div");
    header.classList.add("chat-header");

    let author = document.createElement("div");
    author.classList.add("chat-author");

    element.author = author;
    header.appendChild(author);

    let replyAction = document.createElement("a");
    replyAction.classList.add("chat-reply-action");

    let replyCaption = document.createTextNode("Reply");
    replyAction.appendChild(replyCaption);

    element.replyAction = replyAction;
    header.appendChild(replyAction);

    message.appendChild(header);

    let replyContent = document.createElement("div");
    replyContent.classList.add("chat-reply-content");

    let replyAuthor = document.createElement("div");
    replyAuthor.classList.add("chat-reply-author");

    element.replyAuthor = replyAuthor;
    replyContent.appendChild(replyAuthor);

    let replyText = document.createElement("div");
    replyText.classList.add("chat-reply-text");

    element.replyText = replyText;
    replyContent.appendChild(replyText);

    element.replyContent = replyContent;
    message.appendChild(replyContent);

    let text = document.createElement("div");
    text.classList.add("chat-text");

    element.text = text;
    message.appendChild(text);

    let time = document.createElement("div");
    time.classList.add("chat-time");

    element.time = time;
    message.appendChild(time);

    element.message = message;
    element.appendChild(message);
}
```

В этом коде внутри *element* создаются и сохраняются новые div для каждого сообщения, которые затем будут использованы для отрисовки частей сообщения. В результате будет создана следующая структура компонентов:

```
<div class="chat-message chat-message-own">
   <div class="chat-header">
      <div class="chat-author">John Doe</div>
      <a class="chat-reply-action">Reply</a>
   </div>
   <div class="chat-reply-content">
      <div class="chat-reply-author"></div>
      <div class="chat-reply-text"></div>
   </div>
   <div class="chat-text">Hello world !</div>
   <div class="chat-time">2021-10-05T15:28:05</div>
</div>
```

Для каждого элемента задается свой класс, который используется для дизайна при помощи CSS :

```
.chat-message {
    margin: 6px;
    border: 1px solid;
    border-radius: 10px;
    padding: 6px;

    display: flex;
    flex-direction: column;
}

.chat-header {
    display: flex;
    align-content: stretch;
    justify-content: space-around;
}

.chat-author {
    font-weight: bold
}

.chat-reply-action {
    cursor: pointer;
    margin-left: 4px;
}

.chat-reply {
    display: flex;
}

.chat-reply-content {
    border-left: 2px solid;
    padding-left: 4px;
    margin: 4px;
    border-color: blue;
    cursor: pointer;
    flex: 1;
}

.chat-reply-author {
    color: grey
}

.chat-reply-text {
    white-space: pre-wrap;
    max-height: 100px;
    overflow: clip;
}

.chat-text {
    white-space: pre-wrap;
}

.chat-message-own {
    background-color: lightblue;
    margin-left: 100px;
}

.chat-time {
    color: grey
}
```

Для обновления отображаемых значений платформа будет каждый раз вызывать функцию *update*, в которую будет передан тот же *element*, что и в функции *render*, а также само значение:

```
update: function (element, controller, value) {
    element.author.innerHTML = value.author || '';

    element.replyAuthor.innerHTML = value.replyAuthor || '';
    element.replyText.innerHTML = value.replyText || '';

    element.time.innerHTML = value.time;
    element.text.innerHTML = value.text || '';

    if (value.own)
        element.message.classList.add('chat-message-own');
    else
        element.message.classList.remove('chat-message-own');
}
```

В эту функцию параметром *value* передается JavaScript-объект, который рассчитан из ранее описанного свойства *json*. Значения всех полей записываются в элементы, которые были ранее построены в функции *render*.

Чтобы объединить эти две функции в одну, создается новая функция *chatMessageRender*, которая возвращает их внутри одного объекта:

```
function chatMessageRender() {
    return {
        render: function (element) {
            ...
        },
        update: function (element, controller, value) {
            ...
        }
    }
}
```

Для того, чтобы при открытии страницы в браузере, загрузились созданные js и css файлы, нужно добавить их инициализацию в действии *onWebClientInit* путем добавления имени файла в свойство *onWebClientInit(STRING)*. Числовое значение необходимо для задания порядка загрузки:

```
onWebClientInit() + {
    onWebClientInit('chat.js') <- 1;
    onWebClientInit('chat.css') <- 2;
}
```

Сообщение, отображаемое при помощи созданного компонента, будет выглядеть следующим образом:

![](data:image/png;base64,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)

### Обработка действий пользователя[​](#handling-user-actions "Прямая ссылка на этот заголовок")

В этом примере будем обрабатывать два действия пользователей для любого из сообщений: нажатие на цитируемое сообщение и нажатие на кнопку Reply. В первом случае будет осуществлен переход к исходному сообщению, а во втором - запоминание этого сообщения в [локальное свойство](/ru/Data_properties_DATA/.md#---local) и установка фокуса в поле ввода нового сообщения.

Для уведомления сервера о событии, сделанном пользователе, используется параметр *controller*, передаваемый в функцию *update*:

```
element.replyAction.onclick = function(event) {
    controller.change({ action : 'reply' });
    $(this).closest("div[lsfusion-container='chat']").find(".chat-message-input-area").focus();
}

element.replyContent.onmousedown = function(event) {
    controller.change({ action : 'goToReply' });
}
```

По нажатию на цитируемое сообщение также происходит поиск поля для ввода сообщения при помощи jQuery и установка в него текущего фокуса. Элемент DOM с классом chat-message-input-area будет создан позднее.

В зависимости от сделанного пользователем действия у контроллера вызывается метод *change*, в который передается информация о событии в виде JSON-объекта. Платформа автоматически передаст значение в объявленное [действие](/ru/Actions/.md) *changeMessage* :

```
replyTo = DATA LOCAL Message ();

changeMessage (Message m) {
    INPUT f = JSON DO
        IMPORT JSON FROM f FIELDS() STRING action DO { // импортируем файл как json в локальные свойства
            IF action = 'goToReply' THEN
                seek(replyTo(m)); // переходим к цитируемому сообщению
    
            IF action = 'reply' THEN
                replyTo() <- m; // запоминаем текущее сообщение в локальное свойство
        }
}
```

В этом действии происходит считывание объекта, передаваемого из JavaScript, разбор JSON, а затем выполнение соответствующих действий.

Наконец создаем форму чата и добавляем туда таблицу со списком сообщений. В таблице будет ровно одна колонка, значением в которой будет построенный ранее JSON. При помощи ключевого слова **CUSTOM** указывается, что значение должно отображаться при помощи созданной ранее функции *chatMessageRender*. Действие, указанное после ключевого слова **ON CHANGE**, вызывается при выполнении метода *controller.change* для соответствующего сообщения.

```
FORM chat 'Chat'
    OBJECTS msg = Message LAST
    PROPERTIES(msg) json CUSTOM 'chatMessageRender' ON CHANGE changeMessage(msg)
;
```

Далее настраиваем дизайн формы, помещая таблицу со списком сообщений в новый контейнер с идентификатором *chat*, а также удаляем ненужные компоненты, созданные автоматически:

```
DESIGN chat {
    OBJECTS {
        NEW chat {
            fill = 1; 
            MOVE GRID(msg) {
                captionHeight = 0;
                PROPERTY(json(msg)) {
                    autoSize = TRUE;
                }
            }
            REMOVE BOX(msg);
        }
    }
    REMOVE TOOLBARBOX;       
}
```

Добавляем форму в навигатор:

```
NAVIGATOR {
    NEW chat;
}
```

### Отправка нового сообщения[​](#отправка-нового-сообщения "Прямая ссылка на этот заголовок")

Осталось добавить на форму возможность пользователю создавать новые сообщения.

Для начала создадим действие *send*, которое будет создавать новое сообщение в отдельной [сессии](/ru/Change_sessions/.md) на основе локального свойства *message* и определенного ранее свойства *replyTo*:

```
message = DATA LOCAL TEXT ();

send 'Send' () { 
    NEWSESSION NESTED LOCAL {
        NEW m = Message {
            dateTime(m) <- currentDateTime();
            author(m) <- currentUser();
            replyTo(m) <- replyTo();
            text(m) <- message();
            seek(m);
            APPLY;
        }
    }
} 
```

По аналогии со свойством *json*, описанным ранее, создаем новое свойство *jsonInputMessage*, которое будет использоваться компонентом для ввода нового сообщения:

```
jsonInputMessage () = JSON FROM
            replyAuthor = nameAuthor(replyTo()),
            replyText = text(replyTo()),
            text = message();  
```

Далее создаем функцию, которая будет генерировать компонент, для отображения и ввода нового сообщения. Для этого будем использовать элемент *div* с атрибутом *contentEditable*:

```
function chatMessageInputRender() {
    return {
        render: function (element) {
        let input = document.createElement("div");
        input.classList.add("chat-message-input");

        let reply = document.createElement("div");
        reply.classList.add("chat-reply");

        let replyContent = document.createElement("div");
        replyContent.classList.add("chat-reply-content");

        let replyAuthor = document.createElement("div");
        replyAuthor.classList.add("chat-reply-author");

        element.replyAuthor = replyAuthor;
        replyContent.appendChild(replyAuthor);

        let replyText = document.createElement("div");
        replyText.classList.add("chat-reply-text");

        element.replyText = replyText;
        replyContent.appendChild(replyText);

        element.replyContent = replyContent;
        reply.appendChild(replyContent);

        let replyRemove = document.createElement("div");
        replyRemove.classList.add("chat-reply-remove");

        element.replyRemove = replyRemove;
        reply.appendChild(replyRemove);

        input.appendChild(reply);

        let text = document.createElement("div");
        text.classList.add("chat-message-input-area");
        text.contentEditable = "true";

        element.text = text;
        input.appendChild(text);

        element.appendChild(input);
    },
    update: function (element, controller, value) {
        if (value !== null) {
            element.replyAuthor.innerHTML = value.replyAuthor || '';
            element.replyText.innerHTML = value.replyText || '';

            element.replyRemove.innerHTML = value.replyAuthor ? '❌' : '';

            element.text.innerHTML = value.text || '';
        }
    }
}
```

CSS для создаваемых элементов будет выглядеть следующим образом:

```
.chat-message-input {
    display: flex;
    flex-direction: column;
    flex: 1;
    align-self: stretch;
    max-height: 300px;
    min-height: 90px;
}

.chat-reply-remove {
    justify-content: flex-end;
    align-items: center;
    display: flex;
    cursor: pointer;
    margin-right: 10px;
}

.chat-message-input-area {
    padding: 4px;
}
```

В результате компонент будет выглядеть следующим образом:

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPYAAABgCAIAAAChTxjBAAAFFUlEQVR4Xu3cv24aSRzA8S2uT3Hvck/gzi7zDKlCaYnSLUJEaUhDcYXd2alAOukkZCvRdRQ2pE6Vk66+F7ib2Z0/OzPLsiyLw/74rj6FM8CCku8Mw53Z7F8ODtFHFg9wcMg6TOLvFi9vPix/Gf0J9JrKWMUcJ66G3n5effn+Y/P3P0CvqYxVzOXKdeIqfPqGGCpmlXSQuFre0/sB/aWSJnFItiPxLPtPSR8G9AWJQzgSh3AkDuFaJj6f3UyX8WC154fx5OFrOl5Yzm7MMZunt6bU2dJ71j8FzttPTbzc6/PDbcMTGt9uJ5PbZ/PYrU+Bs/dTE1dL+OwpHmyKxNHIoYl/vZ8kOw0VnxnS93H96TX7Znz/rXSep2k8ok84vn8qzqBvsjsZM6PM2fxT6EmSD87NK7HdA7lDE3fyNHWs6qagWhOlqrkyPhOrO1s+Z4p76glglnkVupsnZsEOV3E7VfTD278zQKDDE89DdAuq/mP4cVBHORlX9+3ok7i3BTtDqrYi2xJ3GxU2LQi1TtwttLazYmOdFqaX2Ml4Eq/6MbsvJ3F0q13idqnW+Zo1W63reaN647Flo5JUvpwF+xMSR7X1aLpIBpXFaLpOBmP7Jh5vnXXZ+TGduf884rcuwcfN8t46PJs+bJeNE7efdKO3DhKXZj26yvRxHVW+GOTDF7sq3zdx4NWtPl3kNZcqN30n3VcgcfRCuek9+t6QOPrDlr1P3xsSR6/st34XSBx9wSoOyWzfV58eKz591iFxnL5S39FIg8pbJL4eXV2OVn7kcXo5mMfnNdSEK16W+6G5+ofU31pN/b0M7+JBnLi073B8V+UkjtO3GFT/Wy8Gu/rekDjE6zjxu+vizcP+b9WqxN19kreeUDni+dA+xj51fuvd9HL3oEfi56hd4rY3exSJq3Zt63YaJInrvu2bi5obdRsp91jdt01TDRY/6x/MRPLnqRz01qPr2kkFidolXrmKx+nrwThxdZ/yOlq7rNrHRhshM5HKa3z8LOGgR+LnqNvEk71BHN+eiefLcHeJ4xx1mHiwCTGS+JpvVNStZkO/baOS1lw56KkZlUxCSNdl4uFeJQzRB1e6j0twPgx+67f4cFkKVE8GcwSfLOOaKwc9Ej9HLRLv3uN0SHk4klNIPNqgA106hcSBI9qRONB3JA7hSBzCkTiEI3EIR+IQjsQhHIlDOAmJZ1mWDgIFEodwJA7hSBzC7Uy85rfDE5W/t93QPg8pfUlUI3HUIHEIR+IQ7qDEj3PVFH8BUv9tN3cdlfw+LvH85Pqm+GyA1SRxW5w9XF6lr2x2d9UUz34/f2W/kmwVT+1OSOKo0STxylU8Tj+48IP5Yc9LStjEoy8j+6/iWyrxiys/YTISx3aHJJ58m/3AxO1VU2y75iminffGJW6nBImjRuvEj3XVFJ2v29kX14QoX0cl5zcq+bOQOGq0T/xYV03RZRf3Hw7sU/uti505xWvIx/VN4WsGvJ2Jd6/zq6aQOGq8fuLRBr0DJI4ar59490gcNSQkDtQgcQhH4hCOxCEciUM4EodwJA7hSBzCkTiEI3EIR+IQjsQhHIlDOBKHcCQO4UgcwpE4hCNxCEfiEI7EIRyJQzgSh3AkDuFIHMKROIQjcUj2/o8XEodYRd8kDplc33Hibz4sv3z/kT4A6BHX968flyrpIPF3i5e3n1dUjv4q9/3b73+ppIPEi8pV+G6RB3pKZVzu2yfOwSH1IHEO4cf/zVnoBzHCVgQAAAAASUVORK5CYII=)

Далее добавляем обработчики событий, которые будут удалять цитируемое сообщение, отсылать сообщение по нажатию CTRL+ENTER, а также записывать введенное сообщение в локальное свойство при потере компонентом фокуса.

На стороне браузера будет следующий JavaScript код:

```
element.replyRemove.onclick = function(event) {
    controller.change({ action : 'replyRemove' });
}

element.text.onkeydown = function(event) {
    if (event.keyCode == 10 || event.keyCode == 13)
        if (event.ctrlKey)
            controller.change({ action : 'send', value : element.text.innerHTML })
        else
            event.stopPropagation(); // останавливаем дальнейшую обработку нажатия клавиши ENTER
}

element.text.onblur = function (event) {
    controller.change({ action : 'change', value : element.text.innerHTML });
}
```

Принимать на сервере эти события будет действие *changeInputMessage*:

```
changeInputMessage () {
    INPUT f = JSON DO
        IMPORT JSON FROM f FIELDS() STRING action, TEXT value DO {
            IF action = 'replyRemove' THEN
                replyTo() <- NULL;
    
            IF action = 'send' THEN {
                message() <- value;
                send();
            }
            
            IF action = 'change' THEN
                message() <- value;
        }
}
```

Добавляем поле для ввода на форму на основе объявленных ранее функций и действий, а также кнопку *Send*:

```
EXTEND FORM chat
    PROPERTIES jsonInputMessage() CUSTOM 'chatMessageInputRender' ON CHANGE changeInputMessage(), 
               send()
;
```

Изменяем дизайн формы, чтобы поле для ввода сообщения и кнопка *Send* располагались под списком сообщений:

```
DESIGN chat {
    chat {
        NEW chatMessage {
            horizontal = TRUE;
            alignment = STRETCH;
            MOVE PROPERTY(jsonInputMessage()) {
                fill = 1;
                autoSize = TRUE;
                width = 0;
                caption = '';
            }
            MOVE PROPERTY(send()) { fontSize = 32; alignment = STRETCH; }
        }
    }  
}
```

Благодаря установке атрибутов *autoSize* и *width* компонент ввода будет растягиваться по мере увеличения размера сообщения.

Итоговая форма будет выглядеть следующим образом:

![](data:image/png;base64,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)
