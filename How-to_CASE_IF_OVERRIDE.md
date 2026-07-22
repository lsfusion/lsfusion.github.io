# How-to: CASE/IF/OVERRIDE

## Example 1[​](#example-1 "Direct link to Example 1")

### Task[​](#task "Direct link to Task")

We have a set of white books and black books.

```
CLASS Color 'Color' {
    white 'White',
    black 'Black'
}

CLASS Book 'Book';

color 'Color' = DATA Color (Book);
```

We need to define a property that returns the color of a given book.

### Solution[​](#solution "Direct link to Solution")

```
// Option 1
nameColor1 'Color' (Book b) = caption(color(b));

// Option 2
nameColor2 'Color' (Book b) = IF color(b) == Color.white THEN 'White' ELSE 'Black';
```

These two expressions provide identical results.

## Example 2[​](#example-2 "Direct link to Example 2")

### Task[​](#task-1 "Direct link to Task")

We have multiple purchase orders to suppliers for books. For each purchase order defined it's status if it was placed, agreed and delivered. In this example these statuses are declared as [data](/Data_properties_DATA/.md) properties, but in more sophisticated cases they may be calculated.

```
CLASS Order 'Order';

sent 'Sent' = DATA BOOLEAN (Order);
agreed 'Agreed' = DATA BOOLEAN (Order);
accepted 'Accepted' = DATA BOOLEAN (Order);
```

We need to obtain the current status of an order.

### Solution[​](#solution-1 "Direct link to Solution")

```
// Option 1
nameStatus1 'Status' (Order o) = CASE WHEN accepted(o) THEN 'Accepted'
                                     WHEN agreed(o) THEN 'Agreed'
                                     WHEN sent(o) THEN 'Sent'
                                ELSE 'New';

// Option 2
CLASS Status 'Status' {
    new 'New',
    sent 'Sent',
    agreed 'Agreed',
    accepted 'Accepted'
}

status 'Status' (Order o) = CASE WHEN accepted(o) THEN Status.accepted
                                 WHEN agreed(o) THEN Status.agreed
                                 WHEN sent(o) THEN Status.sent
                            ELSE Status.new;
nameStatus2 'Status' (Order o) = caption(status(o));
```

## Example 3[​](#example-3 "Direct link to Example 3")

### Task[​](#task-2 "Direct link to Task")

We have a set of books described in [**Example 1**](#example-1).

We need to set a markup for the book and also provide an option for setting a default value.

### Solution[​](#solution-2 "Direct link to Solution")

```
dataMarkup 'Markup, %' = DATA NUMERIC[6,2] (Book);

defaultMarkup 'Default markup' = DATA NUMERIC[6,2] ();

markup1 'Markup, %' (Book b) = OVERRIDE dataMarkup(b), defaultMarkup();

// Equivalent to:
markup2 'Markup, %' (Book b) = IF dataMarkup(b) THEN dataMarkup(b) ELSE defaultMarkup();
```

## Example 4[​](#example-4 "Direct link to Example 4")

### Task[​](#task-3 "Direct link to Task")

The same set of books from [**Example 1**](#example-1), but categorized.

```
CLASS Category 'Category';

category 'Category' = DATA Category (Book);
```

We need to set a markup for a book and also provide an option for setting a default value for the corresponding category.

### Solution[​](#solution-3 "Direct link to Solution")

```
markup 'Markup, %' = DATA NUMERIC[6,2] (Category);

markup 'Markup, %' (Book b) = OVERRIDE dataMarkup(b), markup(category(b));
```

## Example 5[​](#example-5 "Direct link to Example 5")

### Task[​](#task-4 "Direct link to Task")

We have a set of enumerated books.

```
number 'Number' = DATA INTEGER (Book);
```

We need to find the number following the maximum book number.

### Solution[​](#solution-4 "Direct link to Solution")

```
freeNumber1 () = (GROUP MAX number(Book b)) (+) 1;

// Equivalent to:
freeNumber2() = (OVERRIDE (GROUP MAX number(Book b)), 0) + 1;
```

We use the operator `(+)` instead of the regular operator `+`, because otherwise if no books are found, then the standard increment by `1` will return `NULL`.

## Example 6[​](#example-6 "Direct link to Example 6")

### Task[​](#task-5 "Direct link to Task")

Documents are assigned to a period of one of two granularities — a quarter or a month; exactly one of the two ordinals is set for each document.

```
CLASS Doc 'Document';

quarterOrd 'Quarter ordinal' = DATA INTEGER (Doc);
monthOrd 'Month ordinal' = DATA INTEGER (Doc);

ord 'Period ordinal' (Doc d) = OVERRIDE quarterOrd(d), monthOrd(d);
```

We need to count, for each document, the documents of the same granularity whose period is not later than its own.

### Solution[​](#solution-5 "Direct link to Solution")

```
lePeriod (Doc a, Doc b) = quarterOrd(a) <= quarterOrd(b) OR monthOrd(a) <= monthOrd(b);

notLaterCount 'Not later' (Doc d) = GROUP SUM 1 IF lePeriod(Doc dd, d);
```

The straightforward condition `ord(dd) <= ord(d)` compares two multi-branch selections with each other: on compilation the product of their branches is expanded, so with more granularities and heavier branch properties the query text grows multiplicatively and can exceed the maximum query length. The branch-wise comparison compares each granularity only with itself: in a mixed pair one operand of each comparison is `NULL`, so the pair is not counted — here exactly the required semantics. Rewriting the comparison this way is possible only when values of different branches must not be compared with each other; otherwise, store the composed ordinal by marking the property [`MATERIALIZED`](/Materializations/.md).
