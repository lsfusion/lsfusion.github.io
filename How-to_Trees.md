# How-to: Trees

## Example 1[​](#example-1 "Direct link to Example 1")

### Task[​](#task "Direct link to Task")

We have a set of books associated with certain categories.

```
CLASS Category 'Category';
name 'Name' = DATA ISTRING[50] (Category);

CLASS Book 'Book';
name 'Name' = DATA ISTRING[50] (Book);
category 'Category' = DATA Category (Book);
```

We need to build a form with a tree, where the category is shown above and the product is shown below.

### Solution[​](#solution "Direct link to Solution")

```
FORM books 'Books'
    TREE cb c = Category, b = Book
    PROPERTIES name(c), name(b)
    FILTERS category(b) == c
;
```

## Example 2[​](#example-2 "Direct link to Example 2")

### Task[​](#task-1 "Direct link to Task")

Similar to [**Example 1**](#example-1), except that each category has a parent in the hierarchy.

```
parent 'Parent' = DATA Category (Category);
```

We need to build a form with a tree, where the categories will be displayed as hierarchy.

### Solution[​](#solution-1 "Direct link to Solution")

```
FORM categories 'Categories'
    TREE categories c = Category PARENT parent(c)
    PROPERTIES(c) name
;
```

## Example 3[​](#example-3 "Direct link to Example 3")

### Task[​](#task-2 "Direct link to Task")

Similar to [**Example 2**](#example-2).

We need to create a form with a category tree, so that the books that belong to the current category and all its subcategories are shown to the right.

### Solution[​](#solution-2 "Direct link to Solution")

```
level 'Level' (Category child, Category parent) = RECURSION 1l IF child IS Category AND parent == child
                                                                 STEP 2l IF parent == parent($parent) MATERIALIZED;

FORM categoryBooks 'Books by category'
    TREE categories c = Category PARENT parent(c)
    PROPERTIES(c) name

    OBJECTS b = Book
    PROPERTIES(b) name
    FILTERS level(category(b), c)
;

DESIGN categoryBooks {
    NEW pane FIRST {
        fill = 1;
        horizontal = TRUE;
        MOVE BOX(TREE categories);
        MOVE BOX(b);
    }
}
```
