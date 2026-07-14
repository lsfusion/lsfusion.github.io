# How-to: GROUP SUM

## Example 1[​](#example-1 "Direct link to Example 1")

### Task[​](#task "Direct link to Task")

We have a set of books associated with certain category.

```
CLASS Book 'Book';
CLASS Category 'Category';

category 'Category' = DATA Category (Book);
```

We need to calculate the number of books in the category.

### Solution[​](#solution "Direct link to Solution")

```
countBooks 'Number of books' (Category c) = GROUP SUM 1 BY category(Book book);
```

## Example 2[​](#example-2 "Direct link to Example 2")

### Task[​](#task-1 "Direct link to Task")

We have a set of books associated with certain tags. Each book can be associated with several tags at the same time.

```
CLASS Tag 'Tag';

in 'On' = DATA BOOLEAN (Tag, Book);
```

We need to calculate the number of books in the tag.

### Solution[​](#solution-1 "Direct link to Solution")

```
countBooks 'Number of books' (Tag t) = GROUP SUM 1 IF in(t, Book b);
```

## Example 3[​](#example-3 "Direct link to Example 3")

### Task[​](#task-2 "Direct link to Task")

We have the information about the movement of books: each record is linked to the book itself and the warehouse where the movement occured, and also contains quantity and types of operations (receipt/shipment).

```
CLASS Stock 'Warehouse';


CLASS Ledger 'Movement';
book 'Book' = DATA Book (Ledger);
stock 'Warehouse' = DATA Stock (Ledger);

quantity 'Qty' = DATA INTEGER (Ledger);
out 'Expenses' = DATA BOOLEAN (Ledger);
```

We need to calculate the current balance for a book at the warehouse.

### Solution[​](#solution-2 "Direct link to Solution")

```
TABLE bookStock (Book, Stock);
currentBalance 'Current balance' (Book b, Stock s) = GROUP SUM IF out(Ledger l) THEN -quantity(l) ELSE quantity(l) BY book(l), stock(l) MATERIALIZED;
```

It is recommended to mark the `currentBalance` property as [`MATERIALIZED`](/Materializations/.md), so that when reading the current balances, the system could take the calculated value from the `bookStock` table instead of recalculating this value based on all movements. Though this will slow down the writing process (since writing each movement will require updating the current balance), the reading process will become much faster.

Note that you do not need to define explicitly in which table to keep the `currentBalance` property, since the system will use the signature to find out the most suitable table for it (in this case, this will be `bookStock`).

## Example 4[​](#example-4 "Direct link to Example 4")

### Task[​](#task-3 "Direct link to Task")

Similar to [**Example 3**](#example-3), except that each movement is associated with the date of movement.

```
date 'Date' = DATA DATE (Ledger) INDEXED; // it is better to add an index to filter by date quickly
```

We need to calculate the current balance for a given book at the warehouse for the specific date (as of the morning, without the movements occured on that day).

### Solution[​](#solution-3 "Direct link to Solution")

```
// Option 1
balance1 'Balance as of date' (Book b, Stock s, DATE d) = GROUP SUM (IF out(Ledger l) THEN -quantity(l) ELSE quantity(l)) IF date(l) < d BY book(l), stock(l);

// Option 2
balance2 'Balance as of date' (Book b, Stock s, DATE d) = currentBalance(b, s) (-) [ GROUP SUM (IF out(Ledger l) THEN -quantity(l) ELSE quantity(l)) IF date(l) >= d BY book(l), stock(l)](b, s);
```

The second option is preferable. Since requests usually refer to recent dates, the server will be calculating the result "retrospectively" from the current balance, thereby analyzing fewer records.

## Example 5[​](#example-5 "Direct link to Example 5")

### Task[​](#task-4 "Direct link to Task")

Similar to [**Example 3**](#example-3), except that we need to calculate the current balance for a given book across all the warehouses.

### Solution[​](#solution-4 "Direct link to Solution")

```
currentBalance 'Current balance' (Book b) = GROUP SUM currentBalance(b, Stock s);
```

Unlike the current balance for all the warehouses, it is not reasonable to mark this property as `MATERIALIZED` if you have only few warehouses — otherwise, UPDATE CONFLICT may occur when several users try to write the movement of the same book at different warehouses simultaneously.

## Example 6[​](#example-6 "Direct link to Example 6")

### Task[​](#task-5 "Direct link to Task")

Similar to [**Example 3**](#example-3), except that we need to calculate the total value of the stock at a warehouse — the sum, across all the books, of each book's balance multiplied by its price.

```
price 'Price' = DATA NUMERIC[14,2] (Book);
```

### Solution[​](#solution-5 "Direct link to Solution")

```
stockValue 'Stock value' (Stock s) = GROUP SUM currentBalance(Book b, s) * price(b);
```

Here the `GROUP SUM` has no `BY` block: the parameters of the created property are taken from the outer (context) parameters used in the source — `s` — while the parameter declared inside the source — `b` — is summed over. Written this way, without `BY`, the grouping can also be used directly inside other expressions (with a `BY` block it cannot).

## Example 7[​](#example-7 "Direct link to Example 7")

### Task[​](#task-6 "Direct link to Task")

Books are marked with tags (a many-to-many relation).

```
CLASS Tag 'Tag';
in 'In' = DATA BOOLEAN (Book, Tag);
```

We need to count the number of tags of each book.

### Solution[​](#solution-6 "Direct link to Solution")

```
tagCount 'Number of tags' (Book b) = GROUP SUM 1 IF in(b, Tag t);
```

This is the standard way to count objects linked through a two-parameter relation: as in [**Example 6**](#example-6), the context parameter `b` becomes the parameter of the created property, and the parameter `t` declared inside the condition is counted. A `BY` block is needed when a parameter of the created property is given by an expression over the parameters declared inside the grouping (as in [**Example 1**](#example-1)) rather than by an outer parameter.
