# How-to: Navigator

## Example 1[​](#example-1 "Direct link to Example 1")

### Task[​](#task "Direct link to Task")

We have the forms with a list of books and categories.

```
FORM categories 'Categories';
FORM books 'Books';
```

We need to add them to the [navigator](/Navigator/.md) to the new folder called `'Application'` under the main toolbar.

### Solution[​](#solution "Direct link to Solution")

```
NAVIGATOR {
    NEW FOLDER application 'Application' WINDOW toolbar FIRST {
        NEW categories;
        NEW books;
    }
}
```

By specifying `WINDOW` for the `application` element, we indicated that all its child objects must be displayed in the system [window](/Navigator_design/.md) called `toolbar`. This will look like this:

![](/assets/images/How-to_Navigator_ex1-797e24949c7c66e314aadb659ac67a53.png)

## Example 2[​](#example-2 "Direct link to Example 2")

### Task[​](#task-1 "Direct link to Task")

Similar to [**Example 1**](#example-1).

We need to place the same forms in the subfolder called `'Directories'`.

### Solution[​](#solution-1 "Direct link to Solution")

```
NAVIGATOR {
    application {
        NEW FOLDER masterData 'Directories' {
            NEW categories;
            NEW books;
        }
    }
}
```

Result:

![](/assets/images/How-to_Navigator_ex2-ebc897605aa992807064b983c87ab7a1.png)
