# COLLAPSE operator

The `COLLAPSE` operator creates an [action](/Actions/.md) that collapses either [elements](/Object_tree_visibility_EXPAND_COLLAPSE/.md) of an [object tree](/Interactive_view/.md#tree) on a form, or a [collapsible container](/Container_visibility_EXPAND_COLLAPSE/.md) of a form.

### Syntax[​](#syntax "Direct link to Syntax")

```
COLLAPSE [collapseType] formObjectGroupId [OBJECTS objName1 = expr1, ..., objNameN = exprN]
```

To collapse a form container:

```
COLLAPSE CONTAINER formName.componentSelector
```

### Description[​](#description "Direct link to Description")

The first form creates an action that is used to collapse specific elements of the object tree on a form. These elements can be determined using the `OBJECTS` block. If this block is not specified, the collapsing operation will be applied either to the current element of the tree or to the top-level elements of the specified [object group](/Form_structure/.md#objects), depending on the type of operation.

The form with the `CONTAINER` keyword creates an action that collapses a container of the form in whose context the action is executing, hiding its contents.

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

* `formName`

  Form name. [Composite ID](/IDs/.md#cid).

* `componentSelector`

  Design component [selector](/DESIGN_statement/.md#selector). The component must be a collapsible container.

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

```
CLASS Store;
name = DATA ISTRING[100] (Store);

FORM dashboard
    OBJECTS s = Store
    PROPERTIES(s) name
;

DESIGN dashboard {
    NEW detailsBox {
        collapsible = TRUE;
        caption = 'Details';
        MOVE BOX(s);
    }
}

collapseDetails {
    COLLAPSE CONTAINER dashboard.detailsBox;
}

EXTEND FORM dashboard
    PROPERTIES() collapseDetails
;
```
