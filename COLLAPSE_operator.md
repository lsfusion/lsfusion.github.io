# COLLAPSE operator

The `COLLAPSE` operator is the creation of an [action](/Actions/.md), that implements the [collapse of elements](/Object_tree_visibility_EXPAND_COLLAPSE/.md) in the [object tree](/Interactive_view/.md#tree).

### Syntax[​](#syntax "Direct link to Syntax")

```
COLLAPSE [collapseType] formObjectGroupId [OBJECTS objName1 = expr1, ..., objNameN = exprN]
```

### Description[​](#description "Direct link to Description")

The `COLLAPSE` operator creates an action that is used to collapse specific elements of the object tree on a form. These elements can be determined using the `OBJECTS` block. If this block is not specified, the collapsing operation will be applied either to the current element of the tree or to the top-level elements of the specified [object group](/Form_structure/.md#objects), depending on the type of operation.

### Parameters[​](#parameters "Direct link to Parameters")

* `collapseType`

  Collapse type. Specified in one of the following ways:

  * `DOWN`

    Keyword that, when specified, will cause the elements of the tree to collapse. If the `OBJECTS` block is not specified, the operation is applied to the current element.

  * `ALL`

    Keyword that, when specified, will cause the recursive collapse of tree elements and all their descendants. If the `OBJECTS` block is not specified, the operation is applied to the current element.

  * `ALL TOP`

    Two keywords that, when specified, will cause the recursive collapse of all top-level elements of the specified object group. The `OBJECTS` block is ignored.

  If not specified, the default value is `DOWN`.

* `formObjectGroupId`

  [Object group ID](/IDs/.md#groupobjectid) that specifies the object group to which the collapse operation is applied.

* `objName1 ... objNameN`

  Names of objects on the form. The objects must belong to the specified object group. The object name is specified by a [simple ID](/IDs/.md#id).

* `expr1 ... exprN`

  [Expressions](/Expression/.md) whose values are the target values of the corresponding objects in the specified object group.

### Examples[​](#examples "Direct link to Examples")

```
FORM expandCollapseTest
    TREE elements e = NavigatorElement PARENT parent(e)
    PROPERTIES(e) READONLY BACKGROUND NOT e IS NavigatorFolder VALUE, canonicalName, caption
;

collapseDown {
    COLLAPSE DOWN expandCollapseTest.e OBJECTS e = navigatorElementCanonicalName('System.administration');
}

collapseAllTop {
    COLLAPSE ALL TOP expandCollapseTest.e;
}

EXTEND FORM expandCollapseTest
    PROPERTIES() collapseDown, collapseAllTop
;
```
