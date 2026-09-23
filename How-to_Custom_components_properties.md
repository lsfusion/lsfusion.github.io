# How-to: Custom components (properties)

For each [property](/Properties.md) type, by default, a predefined visual component is used to display and edit the data. However, it is possible to override components with your own, created with JavaScript. This functionality is only supported in the web client.

Consider the task of creating a chat room for communication between users to demonstrate this capability.

### Domain logic[​](#domain-logic "Direct link to Domain logic")

First, let's create a domain logic in which the *Message* entity is defined. Each message contains plain text, as well as information about the author and sending time.

```
CLASS Message 'Message';

dateTime 'Time' = DATA DATETIME (Message);
text 'Text' = DATA TEXT (Message);

author = DATA CustomUser (Message);
nameAuthor 'Author' (Message m) = name(author(m));
own (Message m) = author(m) = currentUser();

replyTo = DATA Message (Message);
nameAuthorReplyTo (Message m) = nameAuthor(replyTo(m));
textReplyTo (Message m) = text(replyTo(m)); 
```

### Message list display[​](#message-list-display "Direct link to Message list display")

The list of chat messages on the form will be displayed by a component written in JavaScript. Each message shows several values at once — the author, the time, the text, the quoted message — while a property component receives only the value of its own property. Therefore the message list is displayed by a [custom object group component](/How-to_Custom_components_objects.md): all the needed properties are added to the form as usual, and the component receives their values by the names of the properties on the form. A property component will be needed below — for the input field of a new message.

Let's create the chat form. The keyword **CUSTOM** specifies that the message list is to be displayed using the *chatMessages* function, which will be written in JavaScript:

```
FORM chat 'Chat'
    OBJECTS msg = Message CUSTOM 'chatMessages' LAST
    PROPERTIES(msg) READONLY nameAuthor, dateTime, text, own, nameAuthorReplyTo, textReplyTo
;
```

Next, customize the form design by placing the message list in a new container with the identifier *chat*, and remove unnecessary components created automatically:

```
DESIGN chat {
    OBJECTS {
        NEW chat {
            fill = 1; 
            MOVE GRID(msg);
            REMOVE BOX(msg);
        }
    }
    REMOVE TOOLBARBOX;       
}
```

Add the form to the navigator:

```
NAVIGATOR {
    NEW chat;
}
```

Next, use JavaScript and CSS to create a component that will display messages in the browser. The component will be created in the chat.js file, which will be located in the *resources/web* folder. This is the no-build path — a plain `.js` file, no JSX or bundling; see [How-to: Custom client JS modules](/How-to_Custom_client_JS_modules.md) for where custom JS goes and for the with-build alternative. The `controller` these classic components receive is described in [How-to: Custom view controller](/How-to_Custom_view_controller.md).

Inside the chat.js file, create the *chatMessages* function. It will return an object consisting of two functions: *render* and *update*.

The *render* function takes as input an element within which the new elements necessary to display the data should be created, as well as the controller. It creates and stores the container in which the messages will be displayed:

```
render: function (element, controller) { 
    let messages = document.createElement("div");
    messages.classList.add("chat-messages");

    element.messages = messages;
    element.appendChild(messages);
}
```

To update the displayed values, the platform will call the *update* function each time, in which the same *element* will be passed, as in the *render* function, the controller, as well as the message *list*. Each list item contains the values of the properties added to the form in the fields named after these properties: *nameAuthor*, *dateTime*, *text* and so on. The function removes the previously created elements and creates its own element structure for each message in the list:

```
update: function (element, controller, list) {
    while (element.messages.lastElementChild) {
        element.messages.removeChild(element.messages.lastElementChild);
    }

    for (let item of list) {
        let message = document.createElement("div");
        message.classList.add("chat-message");
        if (item.own)
            message.classList.add("chat-message-own");
        if (controller.isCurrent(item))
            message.classList.add("chat-message-current");

        let header = document.createElement("div");
        header.classList.add("chat-header");

        let author = document.createElement("div");
        author.classList.add("chat-author");
        author.innerText = item.nameAuthor || '';
        header.appendChild(author);

        let replyAction = document.createElement("a");
        replyAction.classList.add("chat-reply-action");
        replyAction.appendChild(document.createTextNode("Reply"));
        header.appendChild(replyAction);

        message.appendChild(header);

        let replyContent = document.createElement("div");
        replyContent.classList.add("chat-reply-content");

        let replyAuthor = document.createElement("div");
        replyAuthor.classList.add("chat-reply-author");
        replyAuthor.innerText = item.nameAuthorReplyTo || '';
        replyContent.appendChild(replyAuthor);

        let replyText = document.createElement("div");
        replyText.classList.add("chat-reply-text");
        replyText.innerText = item.textReplyTo || '';
        replyContent.appendChild(replyText);

        message.appendChild(replyContent);

        let text = document.createElement("div");
        text.classList.add("chat-text");
        text.innerText = item.text || '';
        message.appendChild(text);

        let time = document.createElement("div");
        time.classList.add("chat-time");
        time.innerText = item.dateTime ? item.dateTime.toLocaleString() : '';
        message.appendChild(time);

        element.messages.appendChild(message);
    }

    let current = element.messages.querySelector(".chat-message-current");
    if (current)
        current.scrollIntoView({ block: "nearest" });
}
```

The property values arrive converted to JS values: the text ones as strings, *own* as a boolean, *dateTime* as a `Date` object, so the time is formatted by the browser. The group's current message is determined by the *isCurrent* method of the controller and highlighted with the *chat-message-current* class; after the update it is scrolled into view. The result will be the following element structure for each message:

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
   <div class="chat-time">10/5/2021, 3:28:05 PM</div>
</div>
```

Each element has its own class, which is used to design with CSS:

```
.chat-messages {
    display: flex;
    flex-direction: column;
}

.chat-message {
    margin: 6px;
    border: 1px solid;
    border-radius: 10px;
    padding: 6px;

    display: flex;
    flex-direction: column;
}

.chat-message-current {
    border-color: blue;
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

To combine these two functions into one, a new function *chatMessages* is created, which returns them within the same object:

```
function chatMessages() {
    return {
        render: function (element, controller) {
            ...
        },
        update: function (element, controller, list) {
            ...
        }
    }
}
```

In order to load created js and css files when the page opens in the browser, you must add their initialization to the action *onWebClientInit* by adding the file name to the *onWebClientInit(STRING)* property. A numeric value is needed to specify the order of loading:

```
onWebClientInit() + {
    onWebClientInit('chat.js') <- 1;
    onWebClientInit('chat.css') <- 2;
}
```

The message displayed by the created component will look like this:

![](data:image/png;base64,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)

### Handling user actions[​](#handling-user-actions "Direct link to Handling user actions")

In this example, we will handle two user actions for any of the messages: clicking on the quoted message and clicking on the Reply button. In the first case, the transition to the original message will be done, and in the second case - storing the message in [local property](/Data_properties_DATA.md#---local) and setting the focus in the input field of the new message.

Let's declare [actions](/Actions.md) for them and add them to the form:

```
replyTo = DATA LOCAL Message ();

goToReply (Message m) { seek(replyTo(m)); } // go to the quoted message
reply (Message m) { replyTo() <- m; } // store the current message in a local property

EXTEND FORM chat
    PROPERTIES(msg) goToReply, reply
;
```

The *controller* parameter, passed to the *update* function, is used to execute these actions: its *changeProperty* method executes an action added to the form for the passed message. The handlers are added in the *update* function when the message elements are created:

```
replyAction.onclick = function(event) {
    controller.changeProperty('reply', item);
    $(this).closest("div[lsfusion-container='chat']").find(".chat-message-input-area").focus();
}

replyContent.onmousedown = function(event) {
    controller.changeProperty('goToReply', item);
}
```

Clicking on the Reply button also searches for the message input field using jQuery and sets the current focus to it. The DOM element with the class chat-message-input-area will be created later.

### Send a new message[​](#send-a-new-message "Direct link to Send a new message")

It remains to add to the form the ability for the user to create new messages.

First, let's create a `send[]` action that will create a new message in a separate [session](/Change_sessions.md) based on the local `message[]` property and the previously defined `replyTo[]` property, and then clear them:

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
    message() <- NULL;
    replyTo() <- NULL;
} 
```

The quoted message will be shown above the input field by ordinary form properties, and an action is declared to cancel the quoting:

```
replyAuthor 'Reply to' () = nameAuthor(replyTo());
replyText '' () = STRING(text(replyTo()));

removeReply 'Cancel reply' () { replyTo() <- NULL; }
```

The input field of a new message is a component of the `message[]` property: the platform passes the current property value into it, and the component returns the entered text through the controller. Let's create the *chatMessageInput* function that will generate this component. For the input we will use the *div* element with the *contentEditable* attribute:

```
function chatMessageInput() {
    return {
        render: function (element, controller) {
            let text = document.createElement("div");
            text.classList.add("chat-message-input-area");
            text.contentEditable = "true";

            element.text = text;
            element.appendChild(text);
        },
        update: function (element, controller, value) {
            element.text.innerText = value || '';
        }
    }
}
```

The *update* function receives as the *value* parameter the value of the `message[]` property — a string, or `null` when the property is empty.

The CSS for the created element will look like this:

```
.chat-message-input-area {
    flex: 1;
    align-self: stretch;
    max-height: 300px;
    min-height: 90px;
    padding: 4px;
    overflow: auto;
}
```

As a result, the component will look like this:

![](data:image/png;base64,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)

Then we add event handlers that will send the message when CTRL+ENTER is pressed, and write the entered message to the `message[]` property when the component loses focus. The entered text is passed by the *change* method of the controller: it goes into the change handling of the `message[]` property in the same way as a value entered by the standard editor — for a data property that is writing the value into it. The `send[]` action is executed by the *changeProperty* method of the [form controller](/How-to_Custom_view_controller.md), available as `controller.form`; the requests are executed on the server in the order of the calls, so by the time `send[]` runs the entered text is already written to `message[]`. The handlers are added in the *update* function:

```
element.text.onkeydown = function(event) {
    if (event.keyCode == 10 || event.keyCode == 13)
        if (event.ctrlKey) {
            controller.change(element.text.innerText);
            controller.form.changeProperty('send');
        } else
            event.stopPropagation(); // stop further processing after pressing ENTER
}

element.text.onblur = function (event) {
    controller.change(element.text.innerText);
}
```

Add the input field and the quoted message to the form, as well as the *Send* button. The keyword **CUSTOM** specifies that the value of the `message[]` property is to be displayed using the *chatMessageInput* function created earlier. If an action is specified after the property with the keyword **ON CHANGE**, it is executed instead of the standard change handling, and the value passed by the *change* method is substituted for the user input in its [value request](/Value_request_REQUEST.md):

```
EXTEND FORM chat
    PROPERTIES replyAuthor() READONLY SHOWIF replyTo(), replyText() READONLY SHOWIF replyTo(), removeReply() SHOWIF replyTo(),
               message() CUSTOM 'chatMessageInput', 
               send()
;
```

Change the design of the form, so that the quoted message, the field for entering a message and the *Send* button are under the list of messages:

```
DESIGN chat {
    chat {
        NEW reply {
            horizontal = TRUE;
            MOVE PROPERTY(replyAuthor());
            MOVE PROPERTY(replyText());
            MOVE PROPERTY(removeReply());
        }
        NEW chatMessage {
            horizontal = TRUE;
            alignment = STRETCH;
            MOVE PROPERTY(message()) {
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

By setting the *autoSize* and *width* attributes, the input component will stretch as the message size grows.

The final form will look like this:

![](/assets/images/How-to_Custom_components_form-5c7c961f05713a9ecacaed57c95ce75e.png)

### Controller methods[​](#controller-methods "Direct link to Controller methods")

The methods of the controller passed to the *update* function, internal helpers aside (optional arguments are bracketed):

| method                                            | what it does                                                                                                                                                                         |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `change([value])`                                 | pass a value change (see above); with no argument the change action is called without a value                                                                                        |
| `getValues(value, ok[, fail][, count])`           | a server suggestion list for the typed `value` — the same suggestions as when the property is edited normally                                                                        |
| `isReadOnly()`                                    | whether the property can be edited: `null` — editable, `false` — read-only, `true` — disabled                                                                                        |
| `diff(list, fnc[, noDiffObjects][, removeFirst])` | compute the changes of a value array — like the `diff` method in [Custom components (objects)](/How-to_Custom_components_objects.md); the items are matched by their `objects` field |
| `getColorThemeName()`                             | the current color theme name: `'LIGHT'` or `'DARK'`                                                                                                                                  |
| `form`                                            | the [form controller](/How-to_Custom_view_controller.md)                                                                                                                             |

The `ok` handler of `getValues` receives the result in the same format as the form controller's `getPropertyValues`. The *render* function and the optional *clear* function, invoked when the cell is cleared, receive a reduced controller as the second argument — of its methods, `clearDiff()` is the useful one, resetting the list remembered by `diff`.

### Custom editor[​](#custom-editor "Direct link to Custom editor")

By default the value is edited by the property's standard mechanism — a text input, for instance. The `CHANGE` keyword of the [`CUSTOM` value view](/Properties_and_actions_block.md) replaces or extends that mechanism with an editor of your own, written in JavaScript:

```
PROPERTIES(o) address CUSTOM CHANGE 'googleAutocomplete'
```

The editor function, like the display function, is registered as a wrapper and returns an object of several functions. The editor kind is determined by which rendering function that object contains:

| function                                   | editor                                                          |
| ------------------------------------------ | --------------------------------------------------------------- |
| `renderInput(element, controller, value)`  | extends the standard text input; `element` is that input itself |
| `renderDialog(element, controller, value)` | a window editor                                                 |
| `render(element, controller, value)`       | an editor replacing the cell content                            |

`value` is the current property value converted to a JS value. Besides the rendering function, the object may contain:

* `getValue(element)` — returns the value to commit; the string `'canceled'` cancels the edit. For an input editor, when this function is absent, the text of the input itself is taken.
* `clear(element, cancel)` — cleanup when the edit finishes; `cancel` is true on cancellation.
* `onBrowserEvent(event, element)` — handling browser events during the edit.

The editor controller provides:

| method                          | what it does                                                                                           |
| ------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `commit([value])`               | commit the edit: the passed value or, with no argument, the current one (from `getValue` or the input) |
| `cancel()`                      | cancel the edit                                                                                        |
| `setDeferredCommitOnBlur(true)` | defer the commit on focus loss — for picking from a suggestion list rendered outside `element`         |
| `getColorThemeName()`           | the current color theme name                                                                           |
| `form`                          | the [form controller](/How-to_Custom_view_controller.md)                                               |

The committed value goes through the property's ordinary change channel — the same way as a value entered by the standard editor.

For example, the built-in `googleAutocomplete` editor extends an address input with Google Maps suggestions:

```
function googleAutocomplete() {
    return {
        renderInput: (element, controller) => {
            // the suggestion list is rendered outside element, and picking from it ends with a focus loss,
            // so the commit on focus loss is deferred until the value is set
            controller.setDeferredCommitOnBlur(true);

            new google.maps.places.Autocomplete(element, { types: ['address'] });
        },
        clear: (element, cancel) => {
            // remove the suggestion list elements added to <body>
            $(".pac-container").remove();
        }
    };
}
```
