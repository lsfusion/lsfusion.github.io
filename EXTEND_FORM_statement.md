# EXTEND FORM statement

The `EXTEND FORM` statement [extends](/Form_extension/.md) an existing [form](/Forms/.md).

## Syntax[​](#syntax "Direct link to Syntax")

```
EXTEND FORM formName 
    [formBlock1
    ...
    formBlockN]
;
```

## Description[​](#description "Direct link to Description")

The `EXTEND FORM` statement allows you to extend an existing form with additional [form blocks](/FORM_statement/.md#blocks), written just as in a form declaration. Within these blocks you can refer to the objects, properties, and actions already declared on the form — for example, to place a new element relative to an existing one, or to filter an added object group by an object already on the form.

Besides the blocks that add new elements to the form, the *extension blocks* described below can be used in the statement; they change the captions and options of the elements already added to the form.

## Parameters[​](#parameters "Direct link to Parameters")

* `formName`

  The name of the form being extended. [Composite ID](/IDs/.md#cid). It must refer to a form that already exists, declared in this or another [module](/Modules/.md); a new form is not created. The form keeps the caption and icon set at its declaration; they are not specified here.

* `formBlock1 ... formBlockN`

  Form blocks.

## Examples[​](#examples "Direct link to Examples")

```
CLASS ItemGroup;
name = DATA ISTRING[100] (ItemGroup);

itemGroup = DATA ItemGroup (Item);

EXTEND FORM items
    PROPERTIES(i) NEWSESSION DELETE // adding a delete button to the form

    OBJECTS g = ItemGroup BEFORE i // adding a product group object to the form before the product
    PROPERTIES(g) READONLY name
    // if the object was added after the object with products, then filtering would go by the group of products, 
    // and not by products
    FILTERS itemGroup(i) == g 
;
```

## Object extension block[​](#objects "Direct link to Object extension block")

### Syntax[​](#syntax-1 "Direct link to Syntax")

```
EXTEND OBJECTS extObjectDecl1, ..., extObjectDeclN
```

Where each `extObjectDecl` has the following syntax:

```
[caption =] name objectOptions groupOptions
```

The object options `objectOptions` and the object group options `groupOptions` are the same as in the [object block](/Object_blocks/.md#objects) and are written in the same way.

### Description[​](#description-1 "Direct link to Description")

The object extension block changes [object groups](/Form_structure/.md#objects) already added to the form. The specified options are applied to the existing object group in the same way as if they were specified when it was added. In particular, the [`insertPosition`](/Object_blocks/.md#insertPosition) option can be used to move an object group within the list of object groups of the form.

### Parameters[​](#parameters-1 "Direct link to Parameters")

* `caption`

  The new caption of the object. [String literal](/Literals/.md#strliteral). The caption and the object options `objectOptions` are applied only if the object group consists of a single object.

* `name`

  The name of an object or the name of an object group already added to the form. [Simple ID](/IDs/.md#id).

### Examples[​](#examples-1 "Direct link to Examples")

```
EXTEND FORM items
    // changing the caption of the object g and moving its group after the products
    EXTEND OBJECTS 'Product group' = g AFTER i
;
```

## Object tree extension block[​](#tree "Direct link to Object tree extension block")

### Syntax[​](#syntax-2 "Direct link to Syntax")

```
EXTEND TREE name [insertPosition]
```

### Description[​](#description-2 "Direct link to Description")

The object tree extension block moves an [object tree](/Interactive_view/.md#tree) already added to the form within the list of object groups of the form. New object groups cannot be added to an existing tree.

### Parameters[​](#parameters-2 "Direct link to Parameters")

* `name`

  The name of the object tree [specified at its declaration](/Object_blocks/.md#treeName). [Simple ID](/IDs/.md#id).

* `insertPosition`

  Specifying the position of the tree in the list of object groups. It has syntax fully analogous to the [same option in the object block](/Object_blocks/.md#insertPosition).

### Examples[​](#examples-2 "Direct link to Examples")

```
EXTEND FORM skus
    EXTEND TREE groupTree LAST // moving the groupTree tree to the end of the object group list
;
```

## Property and action extension block[​](#properties "Direct link to Property and action extension block")

### Syntax[​](#syntax-3 "Direct link to Syntax")

```
EXTEND PROPERTIES [formPropertyOptions] extPropertyDecl1, ..., extPropertyDeclM
```

Where each `extPropertyDecl` has the following syntax:

```
[caption =] formPropertyName [formPropertyOptions]
```

Where `formPropertyName` is the [name of a property (action) on the form](/Properties_and_actions_block/.md#name), specified in one of the following ways:

```
alias
propertyName(objectName1, ..., objectNameK)
```

The options `formPropertyOptions` are the same as in the [property and action block](/Properties_and_actions_block/.md) and are written in the same way.

### Description[​](#description-3 "Direct link to Description")

The property and action extension block changes properties and actions already added to the form structure. The specified options are applied to the existing property (action) in the same way as if they were specified when it was added. The options specified right after the `EXTEND PROPERTIES` keywords are applied to all the properties (actions) listed in the block; if an option is specified both for the entire block and for a specific element, the option value for the element is used.

### Parameters[​](#parameters-3 "Direct link to Parameters")

* `caption`

  The new caption of the property (action) on the form. [String literal](/Literals/.md#strliteral).

* `alias`

  The name of the property (action) on the form specified explicitly when it was added. [Simple ID](/IDs/.md#id).

* `propertyName(objectName1, ..., objectNameK)`

  The name of the property (action) on the form formed from the property name and the names of the objects passed to it as parameters. An [object operator](/Interactive_view/.md#objectoperators) (`NEW`, `EDIT`, `DELETE` and others) can be used instead of the property name.

### Examples[​](#examples-3 "Direct link to Examples")

```
EXTEND FORM items
    // changing the caption of the property name(g) and prohibiting its editing
    EXTEND PROPERTIES 'Group name' = name(g) READONLY

    // removing the icons of the buttons added to the form earlier
    EXTEND PROPERTIES NOIMAGE NEW(i), DELETE(i)
;
```
