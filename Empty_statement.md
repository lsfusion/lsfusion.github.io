# Empty statement

*Empty statement* is a special statement that consists of a single semicolon.

### Syntax[​](#syntax "Direct link to Syntax")

```
;
```

### Description[​](#description "Direct link to Description")

An empty statement is intended to prevent extra semicolons from being diagnosed as an error. For example, statements in which the last character is a closing brace should not end with a semicolon. If a semicolon is inserted, however, no error will be thrown, since this will be interpreted as two different statements.

### Example[​](#example "Direct link to Example")

```
CLASS Result {
    yes 'Yes',
    no 'No'
};  // semicolon is not needed here, but its presence is not an error

;;;; // this is valid lsFusion code
```
