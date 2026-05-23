# How-to: GROUP MAX/MIN/AGGR

## Example 1[​](#example-1 "Direct link to Example 1")

### Task[​](#task "Direct link to Task")

We have a set of books, where each book has a unique ID.

```
CLASS Book 'Book';

id 'Number' = DATA INTEGER (Book);
```

We need to find the maximum book ID.

### Solution[​](#solution "Direct link to Solution")

```
maxId 'Maximum number' () = GROUP MAX id(Book b);
```

## Example 2[​](#example-2 "Direct link to Example 2")

### Task[​](#task-1 "Direct link to Task")

Similar to [**Example 1**](#example-1).

We need to find a `Book` object by book ID.

### Solution[​](#solution-1 "Direct link to Solution")

```
// Option 1
book1 'Book' (INTEGER i) = GROUP MAX Book b BY id(b);

// Option 2
book2 'Book' (INTEGER i) = GROUP AGGR Book b BY id(b);
```

The difference between Option 2 and Option 1 is that declaration of this property puts a [constraint](/Constraints/.md) on the uniqueness of book IDs. Any attempt to add two or more books with the same ID will result in the error message.

## Example 3[​](#example-3 "Direct link to Example 3")

### Task[​](#task-2 "Direct link to Task")

We have a set of books, where each book is associated with a category and price.

```
CLASS Category 'Category';

category 'Category' = DATA Category (Book);
price 'Price' = DATA NUMERIC[10,2] (Book);
```

We need to calculate the minimum price per category.

### Solution[​](#solution-2 "Direct link to Solution")

```
minPrice 'Minimum price' (Category c) = GROUP MIN price(Book b) BY category(b);
```

## Example 4[​](#example-4 "Direct link to Example 4")

### Task[​](#task-3 "Direct link to Task")

We have a book shipment document.

```
CLASS Shipment 'Shipment';
CLASS ShipmentDetail 'Shipment line';
shipment 'Shipment' = DATA Shipment (ShipmentDetail) NONULL DELETE;

book 'Book' = DATA Book (ShipmentDetail);
```

We need to find a line with a given shipment by shipment document and book.

### Solution[​](#solution-3 "Direct link to Solution")

```
shipmentDetail 'Shipment line' (Shipment s, Book b) = GROUP MAX ShipmentDetail d BY shipment(d), book(d);
```

You can use this property to implement the Search functionality when inputting a shipment document.
