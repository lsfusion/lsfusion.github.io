# How-to: EXEC

## Example 1[​](#example-1 "Direct link to Example 1")

### Task[​](#task "Direct link to Task")

We have a category of books for which a title, a numerical code, and a start date for sales are defined.

```
CLASS Category 'Category';

name 'Name' = DATA ISTRING[50] (Category);
id 'Code' = DATA INTEGER (Category);
saleDate 'Sales start date' = DATA DATE (Category);
```

We need to create an action that creates 3 new predefined categories.

### Solution[​](#solution "Direct link to Solution")

```
createCategory 'Create category' (ISTRING[50] name, INTEGER id, DATE saleDate)  {
    NEW c = Category {
        name(c) <- name;
        id(c) <- id;
        saleDate(c) <- saleDate;
    }
}

create3Categories 'Create 3 categories' ()  {
    createCategory('Category 1', 1, 2010_02_14);
    createCategory('Category 2', 2, 2011_03_08);
    createCategory('Category 3', 3, 2014_07_01);
}
```

## Example 2[​](#example-2 "Direct link to Example 2")

### Task[​](#task-1 "Direct link to Task")

Similar to [**Example 1**](#example-1), except that each category has a "parent".

```
parent 'Parent' = DATA Category (Category); // if the value is NULL, then there is no parent
```

We need to create an action that fills category depth for each category.

### Solution[​](#solution-1 "Direct link to Solution")

```
depth = DATA INTEGER (Category);
fillDepth (Category c, INTEGER depth)  {
    FOR parent(Category i) == c DO {
        depth(i) <- depth;
        fillDepth(i, depth + 1);
    }
}

run()  {
    fillDepth(NULL, 0);
}
```
