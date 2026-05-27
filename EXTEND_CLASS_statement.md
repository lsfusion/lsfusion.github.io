# EXTEND CLASS statement

The `EXTEND CLASS` statement [extends](/Class_extension/.md) an existing class.

### Syntax[​](#syntax "Direct link to Syntax")

```
EXTEND CLASS name 
[{
    objectName1 [objectCaption1] [imageSetting],
    ...
    objectNameM [objectCaptionM] [imageSetting]
}] 
[: parent1, ..., parentN];
```

Where `imageSetting` is one of:

```
IMAGE [imageLiteral]
NOIMAGE
```

### Description[​](#description "Direct link to Description")

The `EXTEND CLASS` statement extends an existing [custom class](/User_classes/.md) with additional parent classes and new [static objects](/Static_objects/.md). You can also extend [abstract classes](/User_classes/.md#abstract) by adding parent classes to them.

### Parameters[​](#parameters "Direct link to Parameters")

* `name`

  Class name. A [composite ID](/IDs/.md#cid).

* `objectName1, ..., objectNameM`

  Names of new static objects of the specified class. Each name is defined [by a simple ID](/IDs/.md#id). The name of each static object is available through the `name[StaticObject]` property.

* `objectCaption1, ..., objectCaptionM`

  Captions of new static objects of the specified class. Each caption is a [string literal](/Literals/.md#strliteral). If the caption is not defined, the name of the static object will be its caption. The caption of each static object is available through the `caption[StaticObject]` property.

* `imageSetting`

  Icon setting for a static object. One of:

  * `IMAGE`

    [Manual icon specification](/Icons/.md#manual), optionally followed by `imageLiteral` — a [string literal](/Literals/.md#strliteral) whose value defines the icon. If `imageLiteral` is omitted, the [automatic assignment](/Icons/.md#auto) mode is enabled.

  * `NOIMAGE`

    The static object has no icon.

* `parent1, ..., parentN`

  A list of names of new parent classes. Each name is defined by a composite ID.

### Examples[​](#examples "Direct link to Examples")

```
CLASS ABSTRACT Shape;
CLASS Box : Shape;

CLASS Quadrilateral;
EXTEND CLASS Box : Quadrilateral; // Adding inheritance

CLASS ShapeType {
	point 'Dot',
	segment 'Line segment'
}

EXTEND CLASS ShapeType { // Adding a static object
	circle 'Circle'
}
```
