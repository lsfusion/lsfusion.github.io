# Classification (IS/AS)

*Classification* operators create [properties](/Properties/.md) that determine whether an object belongs to the [class](/Classes/.md) specified, which can be a [user class](/User_classes/.md) or a [built-in class](/Built-in_classes/.md). The value of the created property depends on whether the object belongs to that class:

| Operator | Object belongs to the class               | Object does not belong |
| -------- | ----------------------------------------- | ---------------------- |
| `IS`     | the logical value `TRUE`                  | `NULL`                 |
| `AS`     | the object itself, of the class specified | `NULL`                 |

### Language[​](#language "Direct link to Language")

To implement classification operators, [`IS` and `AS` operators](/IS_AS_operators/.md) are used.

### Examples[​](#examples "Direct link to Examples")

```
asOrder(object) = object AS Order;

person = DATA Human (Order);
isMale (Order o) = person(o) IS Male;
```
