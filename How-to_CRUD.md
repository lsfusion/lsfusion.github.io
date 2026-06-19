# How-to: CRUD

## Example 1[​](#example-1 "Direct link to Example 1")

### Task[​](#task "Direct link to Task")

We have a set of predefined book types.

```
CLASS Type 'Type' {
    novel 'Novel',
    thriller 'Thriller',
    fiction 'Fiction'
}
name 'Name' (Type g) = caption(g) IF g IS Type;
```

We need to create a form to select a type from the list.

### Solution[​](#solution "Direct link to Solution")

```
FORM types 'List of types'
    OBJECTS g = Type
    PROPERTIES(g) READONLY name

    LIST Type OBJECT g
;
```

`LIST` indicates that this form will be used for selecting a type from the list (e. g. when the user wants to change the book type).

## Example 2[​](#example-2 "Direct link to Example 2")

### Task[​](#task-1 "Direct link to Task")

We have a set of books with given titles.

```
CLASS Book 'Book';
name 'Name' = DATA ISTRING[30] (Book) IN id;
```

info

It is recommended that you add all the `name` properties to the `id` group. Values of this property will help identify the object in case of the constraint violations. It will also be added to automatic forms when no edit (`EDIT`) or list (`LIST`) forms are defined for the class.

We need to create a form with a list of books where the user can add, edit or delete them.

### Solution[​](#solution-1 "Direct link to Solution")

```
FORM book 'Book' // form for displaying "card' // form for displaying the book card
    OBJECTS b = Book PANEL
    PROPERTIES(b) name

    EDIT Book OBJECT b
;

FORM books 'Books'
    OBJECTS b = Book
    PROPERTIES(b) READONLY name
    PROPERTIES(b) NEWSESSION NEW, EDIT, DELETE

    LIST Book OBJECT b
;

NAVIGATOR {
    NEW books;
}
```

## Example 3[​](#example-3 "Direct link to Example 3")

### Task[​](#task-2 "Direct link to Task")

We have a set of book genres with given titles.

```
CLASS Genre 'Genre';
name 'Name' = DATA ISTRING[30] (Genre);
```

We need to create a form with a list of genres where the user can add, edit or delete them, and one more form with a list of genres but without these options.

### Solution[​](#solution-2 "Direct link to Solution")

```
FORM genre 'Genre'
    OBJECTS g = Genre PANEL
    PROPERTIES(g) name

    EDIT Genre OBJECT g
;

FORM genres 'Genres'
    OBJECTS g = Genre
    PROPERTIES(g) READONLY name
    PROPERTIES(g) NEWSESSION NEW, EDIT, DELETE
;

FORM dialogGenre 'Genres'
    OBJECTS g = Genre
    PROPERTIES(g) READONLY name

    LIST Genre OBJECT g
;

NAVIGATOR {
    NEW genres;
}
```

Use this scheme (with three forms instead of two) when you want to allow users to select genres and prevent any accidental changes to the genre information. In this case, the user will be able to edit genres only on a dedicated form.
