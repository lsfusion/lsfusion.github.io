# How-to: Отчеты

## Пример 1[​](#пример-1 "Прямая ссылка на этот заголовок")

### Условие[​](#условие "Прямая ссылка на этот заголовок")

Задана логика книг, разбитых по категориям.

```
NAMESPACE Sample;

CLASS Category 'Категория';
name 'Наименование' = DATA ISTRING[50] (Category) IN id;

CLASS Book 'Книга';
name 'Наименование' = DATA ISTRING[100] (Book) IN id;

category 'Категория' = DATA Category (Book) AUTOSET;
nameCategory 'Категория' (Book b) = name(category(b)) IN id;

countBooks 'Кол-во книг' (Category c) = GROUP SUM 1 BY category(Book b);

FORM books 'Книги'
    OBJECTS b = Book
    PROPERTIES(b) READONLY name, nameCategory
    PROPERTIES(b) NEWSESSION NEW, EDIT, DELETE
;

NAVIGATOR {
    NEW books;
}
```

Нужно сделать [печатную форму](/ru/Print_view/.md), в которой будут отображаться все книги с разбивкой по категориям. Также нужно сделать экспорт этой формы в формат XLSX.

### Решение[​](#решение "Прямая ссылка на этот заголовок")

Сначала объявим [форму](/ru/Forms/.md), которая описывает структуру печатной формы.

```
FORM booksByCategories 'Книги по категориям'
    OBJECTS c = Category
    PROPERTIES(c) name, countBooks

    OBJECTS b = Book
    PROPERTIES(b) name, nameCategory
    FILTERS category(b) == c
;
```

Затем добавим два действия, которые при помощи [оператора `PRINT`](/ru/PRINT_operator/.md) формируют отчет и выводят его на предпросмотр и в XLSX соответственно.

```
printBooksByCategories 'Книги по категориям' ()  {
    PRINT booksByCategories;
}

xlsxBooksByCategories 'Книги по категориям (XLSX)' ()  {
    PRINT booksByCategories XLSX;
}
```

Выведем их на форму `books` в тулбар таблицы с книгами.

```
EXTEND FORM books
    PROPERTIES() DRAW b TOOLBAR printBooksByCategories, xlsxBooksByCategories
;
```

Затем запускаем сервер из IDE, запускаем десктоп-клиент, открываем форму с книгами и жмем созданную кнопку печати. Система создаст автоматическую печатную форму и откроет ее в режиме [предпросмотра](/ru/In_a_print_view_PRINT/.md#interactive). Далее нужно нажать указанную ниже кнопку :

![](/ru/assets/images/How-to_Reports_ex1_Preview-ed1b04a703f6654a256a1130222582cc.png)

Система сохранит автоматические шаблоны для [Jasper Reports](https://community.jaspersoft.com/project/jasperreports-library) в папку исходников (src/main/lsfusion).

![](data:image/png;base64,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)

Затем откроется редактор, ассоциированный с форматом jrxml, в котором будут открыты эти файлы. В качестве редактора можно использовать [JasperSoft Studio](https://community.jaspersoft.com/project/jaspersoft-studio). Кроме того, будет запущен фоновый процесс, который будет в постоянном режиме синхронизировать файлы отчетов в каталогах src/main/lsfusion и out/production (или target/classes, если для запуска конфигурации используется Maven, а не IDEA Build), чтобы избавить от необходимости перестраивать проект после изменений шаблонов в редакторе.

Так как категории и книги зависят друг от друга, то будет создан один плоский отчет, где категории будут идти как группировка книг. Данные для отчета будут передаваться в плоском денормализованном виде, где для каждого свойства будет создано свое поле (**Field**). Для категорий будет создана группа (**Group**) и соответствующий блок заголовка (**Group Header**).

Внесем некоторые изменения в автоматическом шаблоне и сохраним :

![](/ru/assets/images/How-to_Reports_ex1_template_change-0f7af6f2a851a94748840ef82ed8a3e4.png)

**Шаблон** `Sample_booksByCategories.jrxml`:

```
<?xml version="1.0" encoding="UTF-8"?>
<!-- Created with Jaspersoft Studio version 6.6.0.final using JasperReports Library version 6.6.0  -->
<jasperReport xmlns="http://jasperreports.sourceforge.net/jasperreports" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://jasperreports.sourceforge.net/jasperreports http://jasperreports.sourceforge.net/xsd/jasperreport.xsd" name="Книги по категориям" pageWidth="842" pageHeight="595" orientation="Landscape" columnWidth="555" leftMargin="20" rightMargin="20" topMargin="30" bottomMargin="30" uuid="31977562-8391-4ea1-a6bd-a5081bbc75bb">
    <style name="DefaultStyle" isDefault="true" vTextAlign="Middle" vImageAlign="Middle" fontName="lsf.TimesNewRoman" fontSize="10">
        <box>
            <pen lineWidth="0.5" lineStyle="Solid" lineColor="#000000"/>
        </box>
        <paragraph leftIndent="2" rightIndent="2"/>
    </style>
    <style name="GroupCellStyle2" vTextAlign="Middle" vImageAlign="Middle" fontName="lsf.TimesNewRoman" fontSize="10">
        <box>
            <pen lineWidth="0.5" lineStyle="Solid" lineColor="#000000"/>
        </box>
        <paragraph leftIndent="2" rightIndent="2"/>
    </style>
    <style name="GroupCellStyle1" mode="Opaque" backcolor="#DFDFDF" vTextAlign="Middle" vImageAlign="Middle" fontName="lsf.TimesNewRoman" fontSize="10">
        <box>
            <pen lineWidth="0.5" lineStyle="Solid" lineColor="#000000"/>
        </box>
        <paragraph leftIndent="2" rightIndent="2"/>
    </style>
    <style name="GroupCellStyle0" vTextAlign="Middle" vImageAlign="Middle" fontName="lsf.TimesNewRoman" fontSize="10">
        <box>
            <pen lineWidth="0.5" lineStyle="Solid" lineColor="#000000"/>
        </box>
        <paragraph leftIndent="2" rightIndent="2"/>
    </style>
    <field name="c.object" class="java.lang.Long"/>
    <field name="name(c)" class="java.lang.String"/>
    <field name="countBooks(c)" class="java.lang.Integer"/>
    <field name="b.object" class="java.lang.Long"/>
    <field name="name(b)" class="java.lang.String"/>
    <field name="nameCategory(b)" class="java.lang.String"/>
    <group name="designGroup522">
        <groupExpression><![CDATA[String.valueOf($F{c.object})]]></groupExpression>
        <groupHeader>
            <band height="18" splitType="Prevent">
                <textField isStretchWithOverflow="true" isBlankWhenNull="true">
                    <reportElement style="GroupCellStyle1" stretchType="RelativeToBandHeight" x="0" y="0" width="96" height="18" uuid="5b282d01-48bf-4170-8cb5-358756cdd8fd"/>
                    <textElement textAlignment="Center"/>
                    <textFieldExpression><![CDATA["Наименование"]]></textFieldExpression>
                </textField>
                <textField isStretchWithOverflow="true" isBlankWhenNull="true">
                    <reportElement style="GroupCellStyle1" positionType="Float" stretchType="RelativeToBandHeight" x="96" y="0" width="459" height="18" backcolor="#FF0000" uuid="b8110564-b312-4096-bb6b-a466364ea2b9"/>
                    <textElement textAlignment="Left"/>
                    <textFieldExpression><![CDATA[$F{name(c)}]]></textFieldExpression>
                </textField>
                <textField isStretchWithOverflow="true" isBlankWhenNull="true">
                    <reportElement style="GroupCellStyle1" stretchType="RelativeToBandHeight" x="555" y="0" width="93" height="18" uuid="b2edb91d-7e15-4c69-8ed5-43f6ffa82208"/>
                    <textElement textAlignment="Center"/>
                    <textFieldExpression><![CDATA["Кол-во книг"]]></textFieldExpression>
                </textField>
                <textField isStretchWithOverflow="true" isBlankWhenNull="true">
                    <reportElement style="GroupCellStyle1" positionType="Float" stretchType="RelativeToBandHeight" x="648" y="0" width="154" height="18" uuid="6e18a055-237f-4845-8134-20ff20f182db"/>
                    <textElement textAlignment="Right"/>
                    <textFieldExpression><![CDATA[$F{countBooks(c)}]]></textFieldExpression>
                </textField>
            </band>
        </groupHeader>
    </group>
    <pageHeader>
        <band height="18">
            <textField isStretchWithOverflow="true" isBlankWhenNull="true">
                <reportElement style="GroupCellStyle0" stretchType="RelativeToBandHeight" x="0" y="0" width="555" height="18" uuid="f9243784-60ef-4031-8c73-4afeed320bab"/>
                <textElement textAlignment="Center"/>
                <textFieldExpression><![CDATA["Наименование"]]></textFieldExpression>
            </textField>
            <textField isStretchWithOverflow="true" isBlankWhenNull="true">
                <reportElement style="GroupCellStyle0" stretchType="RelativeToBandHeight" x="555" y="0" width="247" height="18" uuid="a1fd3130-9652-4f34-9d9b-d8508fe21663"/>
                <textElement textAlignment="Center"/>
                <textFieldExpression><![CDATA["Категория"]]></textFieldExpression>
            </textField>
        </band>
    </pageHeader>
    <detail>
        <band height="18">
            <textField isStretchWithOverflow="true" isBlankWhenNull="true">
                <reportElement style="GroupCellStyle0" positionType="Float" stretchType="RelativeToBandHeight" x="0" y="0" width="555" height="18" uuid="ca0e19c6-4400-465b-8af7-5dc6074dc82f"/>
                <textElement textAlignment="Left"/>
                <textFieldExpression><![CDATA[$F{name(b)}]]></textFieldExpression>
            </textField>
            <textField isStretchWithOverflow="true" isBlankWhenNull="true">
                <reportElement style="GroupCellStyle0" positionType="Float" stretchType="RelativeToBandHeight" x="555" y="0" width="247" height="18" uuid="3c9eb36e-c2d6-4b37-86ae-2eca4d14903d"/>
                <textElement textAlignment="Left"/>
                <textFieldExpression><![CDATA[$F{nameCategory(b)}]]></textFieldExpression>
            </textField>
        </band>
    </detail>
</jasperReport>
```

После этого, если повторно запустить формирование отчета, то будут использованы уже измененные шаблоны и результат будет выглядеть следующим образом :

![](/ru/assets/images/How-to_Reports_ex1_result-d9fbba45468ed0e1c70ae0ed3c4fbd98.png)

к сведению

Если по каким-то причинам фоновый процесс не может синхронизировать папки между директориями разработки и выполнения, то нужно просто перезапустить сервер, чтобы изменения применились вместе с перестроением проекта.

## Пример 2[​](#пример-2 "Прямая ссылка на этот заголовок")

### Условие[​](#условие-1 "Прямая ссылка на этот заголовок")

Задана логика счетов.

```
CLASS Invoice 'Счет';
date 'Дата' = DATA DATE (Invoice);
number 'Номер' = DATA STRING[10] (Invoice);

CLASS InvoiceDetail 'Строка счета';
invoice 'Счет' = DATA Invoice (InvoiceDetail) NONULL DELETE;

book 'Книга' = DATA Book (InvoiceDetail) NONULL;
nameBook 'Книга' (InvoiceDetail d) = name(book(d));

quantity 'Количество' = DATA INTEGER (InvoiceDetail);
price 'Цена' = DATA NUMERIC[14,2] (InvoiceDetail);

FORM invoice 'Счет'
    OBJECTS i = Invoice PANEL
    PROPERTIES(i) date, number

    OBJECTS d = InvoiceDetail
    PROPERTIES(d) nameBook, quantity, price, NEW, DELETE
    FILTERS invoice(d) == i

    EDIT Invoice OBJECT i
;

FORM invoices 'Счета'
    OBJECTS i = Invoice
    PROPERTIES(i) READONLY date, number
    PROPERTIES(i) NEWSESSION NEW, EDIT, DELETE
;

NAVIGATOR {
    NEW invoices;
}
```

Нужно сделать печатную форму счета, в которой будут отображаться его параметры и все строки. Также нужно сделать экспорт этой формы в формат DOCX.

### Решение[​](#решение-1 "Прямая ссылка на этот заголовок")

Для создания печатной формы воспользуемся уже существующей формой `invoice`, которая подходит нам по структуре. Однако, при необходимости можно было бы создать новую форму.

```
print 'Печать' (Invoice i)  {
    PRINT invoice OBJECTS i = i;
}
printWord 'Печать (DOCX)' (Invoice i)  {
    PRINT invoice OBJECTS i = i DOCX;
}

EXTEND FORM invoices
    PROPERTIES(i) print TOOLBAR, printWord TOOLBAR
;
```

Поскольку объекты `i` формы `invoice` отображается в панель, то в отчете будут данные только касательного того счета, который передается параметром в этот объект в операторе `PRINT`.

Перенесем данные о счете из заголовка группы (**Group Header**) в шапку всего отчета, чтобы он отрисовывался над названиями колонок.

![](/ru/assets/images/How-to_Reports_ex2_template_change-a50b92d9614f516cbfda93fb6cbcdea2.png)

**Шаблон** `Sample_invoice_i.jrxml`:

```
<?xml version="1.0" encoding="UTF-8"?>
<!-- Created with Jaspersoft Studio version 6.6.0.final using JasperReports Library version 6.6.0  -->
<jasperReport xmlns="http://jasperreports.sourceforge.net/jasperreports" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://jasperreports.sourceforge.net/jasperreports http://jasperreports.sourceforge.net/xsd/jasperreport.xsd" name="Счет" pageWidth="842" pageHeight="595" orientation="Landscape" columnWidth="555" leftMargin="20" rightMargin="20" topMargin="30" bottomMargin="30" uuid="f60eb956-09f7-45ef-a1e0-3345187967cb">
    <style name="DefaultStyle" isDefault="true" vTextAlign="Middle" vImageAlign="Middle" fontName="lsf.TimesNewRoman" fontSize="10">
        <box>
            <pen lineWidth="0.5" lineStyle="Solid" lineColor="#000000"/>
        </box>
        <paragraph leftIndent="2" rightIndent="2"/>
    </style>
    <style name="GroupCellStyle2" vTextAlign="Middle" vImageAlign="Middle" fontName="lsf.TimesNewRoman" fontSize="10">
        <box>
            <pen lineWidth="0.5" lineStyle="Solid" lineColor="#000000"/>
        </box>
        <paragraph leftIndent="2" rightIndent="2"/>
    </style>
    <style name="GroupCellStyle1" mode="Opaque" backcolor="#DFDFDF" vTextAlign="Middle" vImageAlign="Middle" fontName="lsf.TimesNewRoman" fontSize="10">
        <box>
            <pen lineWidth="0.5" lineStyle="Solid" lineColor="#000000"/>
        </box>
        <paragraph leftIndent="2" rightIndent="2"/>
    </style>
    <style name="GroupCellStyle0" vTextAlign="Middle" vImageAlign="Middle" fontName="lsf.TimesNewRoman" fontSize="10">
        <box>
            <pen lineWidth="0.5" lineStyle="Solid" lineColor="#000000"/>
        </box>
        <paragraph leftIndent="2" rightIndent="2"/>
    </style>
    <field name="i.object" class="java.lang.Long"/>
    <field name="date(i)" class="java.util.Date"/>
    <field name="number(i)" class="java.lang.String"/>
    <field name="nameCustomer(i)" class="java.lang.String"/>
    <field name="d.object" class="java.lang.Long"/>
    <field name="nameBook(d)" class="java.lang.String"/>
    <field name="quantity(d)" class="java.lang.Integer"/>
    <field name="price(d)" class="java.math.BigDecimal"/>
    <title>
        <band height="18">
            <textField isStretchWithOverflow="true" isBlankWhenNull="true">
                <reportElement style="GroupCellStyle1" stretchType="RelativeToBandHeight" x="0" y="0" width="802" height="18" uuid="798a30fc-f932-4434-a299-d289e5acf420"/>
                <textElement textAlignment="Center"/>
                <textFieldExpression><![CDATA["Счет №" + $F{number(i)} + " от " + $F{date(i)}]]></textFieldExpression>
            </textField>
        </band>
    </title>
    <pageHeader>
        <band height="18">
            <textField isStretchWithOverflow="true" isBlankWhenNull="true">
                <reportElement style="GroupCellStyle0" stretchType="RelativeToBandHeight" x="0" y="0" width="606" height="18" uuid="c151590a-a89b-464a-89ff-8bf91a7e652f"/>
                <textElement textAlignment="Center"/>
                <textFieldExpression><![CDATA["Книга"]]></textFieldExpression>
            </textField>
            <textField isStretchWithOverflow="true" isBlankWhenNull="true">
                <reportElement style="GroupCellStyle0" stretchType="RelativeToBandHeight" x="606" y="0" width="97" height="18" uuid="186213e1-9aa8-46e8-aa27-60e9e59dd03f"/>
                <textElement textAlignment="Center"/>
                <textFieldExpression><![CDATA["Количество"]]></textFieldExpression>
            </textField>
            <textField isStretchWithOverflow="true" isBlankWhenNull="true">
                <reportElement style="GroupCellStyle0" stretchType="RelativeToBandHeight" x="703" y="0" width="99" height="18" uuid="5d3c0f3a-fc6e-4182-b7ae-f3ad933029f8"/>
                <textElement textAlignment="Center"/>
                <textFieldExpression><![CDATA["Цена"]]></textFieldExpression>
            </textField>
        </band>
    </pageHeader>
    <detail>
        <band height="18">
            <textField isStretchWithOverflow="true" isBlankWhenNull="true">
                <reportElement style="GroupCellStyle0" positionType="Float" stretchType="RelativeToBandHeight" x="0" y="0" width="606" height="18" uuid="3b31443c-0422-40d4-b32c-82ac15259dd9"/>
                <textElement textAlignment="Left"/>
                <textFieldExpression><![CDATA[$F{nameBook(d)}]]></textFieldExpression>
            </textField>
            <textField isStretchWithOverflow="true" isBlankWhenNull="true">
                <reportElement style="GroupCellStyle0" positionType="Float" stretchType="RelativeToBandHeight" x="606" y="0" width="97" height="18" uuid="204da3de-446c-4c2c-ba1b-33262b64ef4b"/>
                <textElement textAlignment="Right"/>
                <textFieldExpression><![CDATA[$F{quantity(d)}]]></textFieldExpression>
            </textField>
            <textField isStretchWithOverflow="true" isBlankWhenNull="true">
                <reportElement style="GroupCellStyle0" positionType="Float" stretchType="RelativeToBandHeight" x="703" y="0" width="99" height="18" uuid="6fb33419-b7aa-46fb-9021-d13a8c906dc9"/>
                <textElement textAlignment="Right"/>
                <textFieldExpression><![CDATA[$F{price(d)}]]></textFieldExpression>
            </textField>
        </band>
    </detail>
</jasperReport>
```

Результирующий отчет будет выглядеть следующим образом :

![](/ru/assets/images/How-to_Reports_ex2_result-e5724099b7b12b36c21fdccb62742c35.png)

## Пример 3[​](#пример-3 "Прямая ссылка на этот заголовок")

### Условие[​](#условие-2 "Прямая ссылка на этот заголовок")

Аналогично [**Примеру 2**](#%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80-2), только добавлена логика покупателей и заказов.

```
CLASS Customer 'Покупатель';
name 'Наименование' = DATA ISTRING[50] (Customer) IN id;

FORM customers 'Покупатели'
    OBJECTS c = Customer
    PROPERTIES(c) READONLY name
    PROPERTIES(c) NEWSESSION NEW, EDIT, DELETE
;

NAVIGATOR {
    NEW customers;
}

customer 'Покупатель' = DATA Customer (Invoice);
nameCustomer 'Покупатель' (Invoice i) = name(customer(i));

EXTEND FORM invoice PROPERTIES(i) nameCustomer;

CLASS Order 'Заказ';
date 'Дата' = DATA DATE (Order);
number 'Номер' = DATA STRING[10] (Order);

customer 'Покупатель' = DATA Customer (Order);
nameCustomer 'Покупатель' (Order o) = name(customer(o));

CLASS OrderDetail 'Строка заказа';
order 'Заказ' = DATA Order (OrderDetail) NONULL DELETE;

book 'Книга' = DATA Book (OrderDetail) NONULL;
nameBook 'Книга' (OrderDetail d) = name(book(d));

quantity 'Количество' = DATA INTEGER (OrderDetail);
price 'Цена' = DATA NUMERIC[14,2] (OrderDetail);

FORM order 'Заказ'
    OBJECTS o = Order PANEL
    PROPERTIES(o) date, number, nameCustomer

    OBJECTS d = OrderDetail
    PROPERTIES(d) nameBook, quantity, price, NEW, DELETE
    FILTERS order(d) == o

    EDIT Order OBJECT o
;

FORM orders 'Заказы'
    OBJECTS i = Order
    PROPERTIES(i) READONLY date, number, nameCustomer
    PROPERTIES(i) NEWSESSION NEW, EDIT, DELETE
;

NAVIGATOR {
    NEW orders;
}
```

Нужно сделать печатную форму с информацией о клиенте, в которой будут показаны по нему все заказы и счета.

### Решение[​](#решение-2 "Прямая ссылка на этот заголовок")

Сначала создаем форму, структура которой должна соответствовать логике печатной формы. Объект покупателя отображаем в панель, поскольку необходимо выводить только данные по одному покупателю. Все же остальные объекты остаются таблицами.

```
FORM customerInfo 'Информация по клиенту'
    OBJECTS c = Customer PANEL
    PROPERTIES(c) name

    OBJECTS o = Order
    PROPERTIES(o) date, number
    FILTERS customer(o) == c

    OBJECTS od = OrderDetail
    PROPERTIES(od) nameBook, quantity, price
    FILTERS order(od) == o

    OBJECTS i = Invoice
    PROPERTIES(i) date, number
    FILTERS customer(i) == c

    OBJECTS id = InvoiceDetail
    PROPERTIES(id) nameBook, quantity, price
    FILTERS invoice(id) == i
;

printInfo 'Распечатать информацию' (Customer c)  {
    PRINT customerInfo OBJECTS c = c;
}

EXTEND FORM customers
    PROPERTIES(c) printInfo TOOLBAR
;
```

Специфика данного отчета заключается в том, что объекты со счетами и заказами не зависят друг от друга. Таким образом, они будут сформированы в разные подотчеты (**Subreport**).

Поскольку зависимость между объектами формирует дерево с двумя листьями, то всего будет сформировано три шаблона :

1. `Sample_customerInfo` - верхний отчет, который будет отображать данные по покупателям (в данном случае, по одному единственному покупателю). В нем будут содержаться ссылки на подотчеты `Sample_customerInfo_i` и `Sample_customerInfo_o`.<br />![](/ru/assets/images/How-to_Reports_ex3_templates-09d07c8b1384d59593eff61ab5a290de.png)

   **Шаблон** `Sample_customerInfo.jrxml`:

   ```
   <?xml version="1.0" encoding="UTF-8"?>
   <!-- Created with Jaspersoft Studio version 6.6.0.final using JasperReports Library version 6.6.0  -->
   <jasperReport xmlns="http://jasperreports.sourceforge.net/jasperreports" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://jasperreports.sourceforge.net/jasperreports http://jasperreports.sourceforge.net/xsd/jasperreport.xsd" name="Информация по клиенту" pageWidth="842" pageHeight="595" orientation="Landscape" columnWidth="555" leftMargin="20" rightMargin="20" topMargin="30" bottomMargin="30" uuid="06ed2f8a-ff5b-497a-925f-5a8722df2e57">
       <style name="DefaultStyle" isDefault="true" vTextAlign="Middle" vImageAlign="Middle" fontName="lsf.TimesNewRoman" fontSize="10">
           <box>
               <pen lineWidth="0.5" lineStyle="Solid" lineColor="#000000"/>
           </box>
           <paragraph leftIndent="2" rightIndent="2"/>
       </style>
       <style name="GroupCellStyle3" vTextAlign="Middle" vImageAlign="Middle" fontName="lsf.TimesNewRoman" fontSize="10">
           <box>
               <pen lineWidth="0.5" lineStyle="Solid" lineColor="#000000"/>
           </box>
           <paragraph leftIndent="2" rightIndent="2"/>
       </style>
       <style name="GroupCellStyle2" mode="Opaque" backcolor="#D5D5D5" vTextAlign="Middle" vImageAlign="Middle" fontName="lsf.TimesNewRoman" fontSize="10">
           <box>
               <pen lineWidth="0.5" lineStyle="Solid" lineColor="#000000"/>
           </box>
           <paragraph leftIndent="2" rightIndent="2"/>
       </style>
       <parameter name="o_report" class="net.sf.jasperreports.engine.JasperReport"/>
       <parameter name="o_source" class="net.sf.jasperreports.engine.JRDataSource"/>
       <parameter name="o_params" class="java.util.Map"/>
       <parameter name="i_report" class="net.sf.jasperreports.engine.JasperReport"/>
       <parameter name="i_source" class="net.sf.jasperreports.engine.JRDataSource"/>
       <parameter name="i_params" class="java.util.Map"/>
       <field name="c.object" class="java.lang.Long"/>
       <field name="name(c)" class="java.lang.String"/>
       <group name="designGroup">
           <groupExpression><![CDATA[]]></groupExpression>
           <groupHeader>
               <band height="18" splitType="Prevent"/>
           </groupHeader>
       </group>
       <group name="designGroup1153">
           <groupExpression><![CDATA[String.valueOf($F{c.object})]]></groupExpression>
           <groupHeader>
               <band height="46" splitType="Prevent">
                   <textField isStretchWithOverflow="true" isBlankWhenNull="true">
                       <reportElement style="GroupCellStyle2" positionType="Float" stretchType="RelativeToBandHeight" x="0" y="0" width="802" height="46" uuid="dacafbf4-9be5-4748-b8e7-c01b1e4d98ab"/>
                       <textElement textAlignment="Center">
                           <font size="20"/>
                       </textElement>
                       <textFieldExpression><![CDATA["Покупатель : " + $F{name(c)}]]></textFieldExpression>
                   </textField>
               </band>
           </groupHeader>
       </group>
       <detail>
           <band>
               <subreport>
                   <reportElement stretchType="RelativeToBandHeight" x="0" y="0" width="0" height="0" uuid="9a51a576-f72c-4ccc-bb2c-95966743b540"/>
                   <parametersMapExpression><![CDATA[$P{o_params}]]></parametersMapExpression>
                   <dataSourceExpression><![CDATA[$P{o_source}]]></dataSourceExpression>
                   <subreportExpression><![CDATA[$P{o_report}]]></subreportExpression>
               </subreport>
           </band>
           <band>
               <subreport>
                   <reportElement stretchType="RelativeToBandHeight" x="0" y="0" width="0" height="0" uuid="4d75be9a-a015-4b45-9ac8-bf383332dd2a"/>
                   <parametersMapExpression><![CDATA[$P{i_params}]]></parametersMapExpression>
                   <dataSourceExpression><![CDATA[$P{i_source}]]></dataSourceExpression>
                   <subreportExpression><![CDATA[$P{i_report}]]></subreportExpression>
               </subreport>
           </band>
       </detail>
   </jasperReport>
   ```

2. `Sample_customerInfo_o` - отчет, в котором будут отображаться все заказы вместе с их строками.

   **Шаблон** `Sample_customerInfo_o.jrxml`:

   ```
   <?xml version="1.0" encoding="UTF-8"?>
   <!-- Created with Jaspersoft Studio version 6.6.0.final using JasperReports Library version 6.6.0  -->
   <jasperReport xmlns="http://jasperreports.sourceforge.net/jasperreports" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://jasperreports.sourceforge.net/jasperreports http://jasperreports.sourceforge.net/xsd/jasperreport.xsd" name="o" pageWidth="842" pageHeight="595" orientation="Landscape" columnWidth="555" leftMargin="0" rightMargin="0" topMargin="0" bottomMargin="0" uuid="b5fa21a2-3583-4e69-9766-70ddacc9af1f">
       <style name="DefaultStyle" isDefault="true" vTextAlign="Middle" vImageAlign="Middle" fontName="lsf.TimesNewRoman" fontSize="10">
           <box>
               <pen lineWidth="0.5" lineStyle="Solid" lineColor="#000000"/>
           </box>
           <paragraph leftIndent="2" rightIndent="2"/>
       </style>
       <style name="GroupCellStyle0" mode="Opaque" backcolor="#F0F0F0" vTextAlign="Middle" vImageAlign="Middle" fontName="lsf.TimesNewRoman" fontSize="10">
           <box>
               <pen lineWidth="0.5" lineStyle="Solid" lineColor="#000000"/>
           </box>
           <paragraph leftIndent="2" rightIndent="2"/>
       </style>
       <style name="GroupCellStyle1" mode="Opaque" backcolor="#FFFFFF" vTextAlign="Middle" vImageAlign="Middle" fontName="lsf.TimesNewRoman" fontSize="10">
           <box>
               <pen lineWidth="0.5" lineStyle="Solid" lineColor="#000000"/>
           </box>
           <paragraph leftIndent="2" rightIndent="2"/>
       </style>
       <field name="o.object" class="java.lang.Long"/>
       <field name="date(o)" class="java.util.Date"/>
       <field name="number(o)" class="java.lang.String"/>
       <field name="od.object" class="java.lang.Long"/>
       <field name="nameBook(od)" class="java.lang.String"/>
       <field name="quantity(od)" class="java.lang.Integer"/>
       <field name="price(od)" class="java.math.BigDecimal"/>
       <group name="designGroup1560">
           <groupExpression><![CDATA[String.valueOf($F{o.object})]]></groupExpression>
           <groupHeader>
               <band height="18" splitType="Prevent">
                   <textField isStretchWithOverflow="true">
                       <reportElement style="GroupCellStyle0" stretchType="RelativeToBandHeight" x="0" y="0" width="32" height="18" uuid="7a140661-f62c-48e3-a050-2667b8215684"/>
                       <textElement textAlignment="Center"/>
                       <textFieldExpression><![CDATA["Дата"]]></textFieldExpression>
                   </textField>
                   <textField isStretchWithOverflow="true" isBlankWhenNull="true">
                       <reportElement style="GroupCellStyle0" positionType="Float" stretchType="RelativeToBandHeight" x="32" y="0" width="96" height="18" uuid="0764778b-b7e8-47af-9bb1-f8e8c0b3a50a"/>
                       <textElement textAlignment="Right"/>
                       <textFieldExpression><![CDATA[$F{date(o)}]]></textFieldExpression>
                   </textField>
                   <textField isStretchWithOverflow="true">
                       <reportElement style="GroupCellStyle0" stretchType="RelativeToBandHeight" x="128" y="0" width="40" height="18" uuid="9d4386c3-8b68-4d22-9a57-72a1b9f4edb0"/>
                       <textElement textAlignment="Center"/>
                       <textFieldExpression><![CDATA["Номер"]]></textFieldExpression>
                   </textField>
                   <textField isStretchWithOverflow="true" isBlankWhenNull="true">
                       <reportElement style="GroupCellStyle0" positionType="Float" stretchType="RelativeToBandHeight" x="168" y="0" width="634" height="18" uuid="bcc4aee3-1e1a-4373-bc23-2c71a5193277"/>
                       <textElement textAlignment="Left"/>
                       <textFieldExpression><![CDATA[$F{number(o)}]]></textFieldExpression>
                   </textField>
               </band>
           </groupHeader>
       </group>
       <title>
           <band height="45">
               <staticText>
                   <reportElement x="0" y="0" width="802" height="45" uuid="bedb580c-7ea1-4962-b012-273c455d18db"/>
                   <textElement textAlignment="Center">
                       <font size="20"/>
                   </textElement>
                   <text><![CDATA[Заказы]]></text>
               </staticText>
           </band>
       </title>
       <pageHeader>
           <band height="18">
               <textField isStretchWithOverflow="true">
                   <reportElement style="GroupCellStyle1" stretchType="RelativeToBandHeight" x="0" y="0" width="606" height="18" uuid="2ed4a155-b17f-4c87-93bb-ccb3c17f99d6"/>
                   <textElement textAlignment="Center"/>
                   <textFieldExpression><![CDATA["Книга"]]></textFieldExpression>
               </textField>
               <textField isStretchWithOverflow="true">
                   <reportElement style="GroupCellStyle1" stretchType="RelativeToBandHeight" x="606" y="0" width="97" height="18" uuid="55aeb106-a5f3-42ac-a43f-571457fc26c8"/>
                   <textElement textAlignment="Center"/>
                   <textFieldExpression><![CDATA["Количество"]]></textFieldExpression>
               </textField>
               <textField isStretchWithOverflow="true">
                   <reportElement style="GroupCellStyle1" stretchType="RelativeToBandHeight" x="703" y="0" width="99" height="18" uuid="186d6da9-1a7a-49e8-b7a4-6df9dcec61e6"/>
                   <textElement textAlignment="Center"/>
                   <textFieldExpression><![CDATA["Цена"]]></textFieldExpression>
               </textField>
           </band>
       </pageHeader>
       <detail>
           <band height="18">
               <textField isStretchWithOverflow="true" isBlankWhenNull="true">
                   <reportElement style="GroupCellStyle1" positionType="Float" stretchType="RelativeToBandHeight" x="0" y="0" width="606" height="18" uuid="4161551d-97d3-48d5-a26a-11b0a145f131"/>
                   <textElement textAlignment="Left"/>
                   <textFieldExpression><![CDATA[$F{nameBook(od)}]]></textFieldExpression>
               </textField>
               <textField isStretchWithOverflow="true" isBlankWhenNull="true">
                   <reportElement style="GroupCellStyle1" positionType="Float" stretchType="RelativeToBandHeight" x="606" y="0" width="97" height="18" uuid="8739e7c6-7536-4ff4-93a0-4dfe576a376e"/>
                   <textElement textAlignment="Right"/>
                   <textFieldExpression><![CDATA[$F{quantity(od)}]]></textFieldExpression>
               </textField>
               <textField isStretchWithOverflow="true" isBlankWhenNull="true">
                   <reportElement style="GroupCellStyle1" positionType="Float" stretchType="RelativeToBandHeight" x="703" y="0" width="99" height="18" uuid="345899e3-a8b5-4532-b8e5-ddadf1ca95b5"/>
                   <textElement textAlignment="Right"/>
                   <textFieldExpression><![CDATA[$F{price(od)}]]></textFieldExpression>
               </textField>
           </band>
       </detail>
   </jasperReport>
   ```

3. `Sample_customerInfo_i` - отчет, в котором будут отображаться все счета вместе с их строками.

   **Шаблон** `Sample_customerInfo_i.jrxml`:

   ```
   <?xml version="1.0" encoding="UTF-8"?>
   <!-- Created with Jaspersoft Studio version 6.6.0.final using JasperReports Library version 6.6.0  -->
   <jasperReport xmlns="http://jasperreports.sourceforge.net/jasperreports" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://jasperreports.sourceforge.net/jasperreports http://jasperreports.sourceforge.net/xsd/jasperreport.xsd" name="i" pageWidth="842" pageHeight="595" orientation="Landscape" columnWidth="555" leftMargin="0" rightMargin="0" topMargin="5" bottomMargin="0" uuid="82cf7f76-d161-47d0-a5eb-7c4c08a08c5f">
       <style name="DefaultStyle" isDefault="true" vTextAlign="Middle" vImageAlign="Middle" fontName="lsf.TimesNewRoman" fontSize="10">
           <box>
               <pen lineWidth="0.5" lineStyle="Solid" lineColor="#000000"/>
           </box>
           <paragraph leftIndent="2" rightIndent="2"/>
       </style>
       <style name="GroupCellStyle0" mode="Opaque" backcolor="#F0F0F0" vTextAlign="Middle" vImageAlign="Middle" fontName="lsf.TimesNewRoman" fontSize="10">
           <box>
               <pen lineWidth="0.5" lineStyle="Solid" lineColor="#000000"/>
           </box>
           <paragraph leftIndent="2" rightIndent="2"/>
       </style>
       <style name="GroupCellStyle1" mode="Opaque" backcolor="#FFFFFF" vTextAlign="Middle" vImageAlign="Middle" fontName="lsf.TimesNewRoman" fontSize="10">
           <box>
               <pen lineWidth="0.5" lineStyle="Solid" lineColor="#000000"/>
           </box>
           <paragraph leftIndent="2" rightIndent="2"/>
       </style>
       <field name="i.object" class="java.lang.Long"/>
       <field name="date(i)" class="java.util.Date"/>
       <field name="number(i)" class="java.lang.String"/>
       <field name="id.object" class="java.lang.Long"/>
       <field name="nameBook(id)" class="java.lang.String"/>
       <field name="quantity(id)" class="java.lang.Integer"/>
       <field name="price(id)" class="java.math.BigDecimal"/>
       <group name="designGroup1591">
           <groupExpression><![CDATA[String.valueOf($F{i.object})]]></groupExpression>
           <groupHeader>
               <band height="18" splitType="Prevent">
                   <textField isStretchWithOverflow="true">
                       <reportElement style="GroupCellStyle0" stretchType="RelativeToBandHeight" x="0" y="0" width="32" height="18" uuid="f4d356be-24a9-4ca9-851f-167c95ffc33c"/>
                       <textElement textAlignment="Center"/>
                       <textFieldExpression><![CDATA["Дата"]]></textFieldExpression>
                   </textField>
                   <textField isStretchWithOverflow="true" isBlankWhenNull="true">
                       <reportElement style="GroupCellStyle0" positionType="Float" stretchType="RelativeToBandHeight" x="32" y="0" width="88" height="18" uuid="97cebc8a-8bdd-4c8f-b90e-0dd3bcb6c4b1"/>
                       <textElement textAlignment="Right"/>
                       <textFieldExpression><![CDATA[$F{date(i)}]]></textFieldExpression>
                   </textField>
                   <textField isStretchWithOverflow="true">
                       <reportElement style="GroupCellStyle0" stretchType="RelativeToBandHeight" x="120" y="0" width="40" height="18" uuid="3098f851-ca96-45b9-9cf2-04e6e243528a"/>
                       <textElement textAlignment="Center"/>
                       <textFieldExpression><![CDATA["Номер"]]></textFieldExpression>
                   </textField>
                   <textField isStretchWithOverflow="true" isBlankWhenNull="true">
                       <reportElement style="GroupCellStyle0" positionType="Float" stretchType="RelativeToBandHeight" x="160" y="0" width="642" height="18" uuid="71a8d3eb-c29f-4363-a1e6-857af2784d5a"/>
                       <textElement textAlignment="Left"/>
                       <textFieldExpression><![CDATA[$F{number(i)}]]></textFieldExpression>
                   </textField>
               </band>
           </groupHeader>
       </group>
       <title>
           <band height="45">
               <staticText>
                   <reportElement x="0" y="0" width="802" height="45" uuid="ec3d75be-ea13-4ee3-a0f0-22e7612fe552"/>
                   <textElement textAlignment="Center">
                       <font size="20"/>
                   </textElement>
                   <text><![CDATA[Счета]]></text>
               </staticText>
           </band>
       </title>
       <pageHeader>
           <band height="18">
               <textField isStretchWithOverflow="true">
                   <reportElement style="GroupCellStyle1" stretchType="RelativeToBandHeight" x="0" y="0" width="606" height="18" uuid="768f5aa5-7a86-49aa-9c18-855e4e4d3d02"/>
                   <textElement textAlignment="Center"/>
                   <textFieldExpression><![CDATA["Книга"]]></textFieldExpression>
               </textField>
               <textField isStretchWithOverflow="true">
                   <reportElement style="GroupCellStyle1" stretchType="RelativeToBandHeight" x="606" y="0" width="97" height="18" uuid="032b4dad-5895-46e1-ba97-7e2af9ebecde"/>
                   <textElement textAlignment="Center"/>
                   <textFieldExpression><![CDATA["Количество"]]></textFieldExpression>
               </textField>
               <textField isStretchWithOverflow="true">
                   <reportElement style="GroupCellStyle1" stretchType="RelativeToBandHeight" x="703" y="0" width="99" height="18" uuid="092947c2-bbd0-464f-8048-4d800c05a6c6"/>
                   <textElement textAlignment="Center"/>
                   <textFieldExpression><![CDATA["Цена"]]></textFieldExpression>
               </textField>
           </band>
       </pageHeader>
       <detail>
           <band height="18">
               <textField isStretchWithOverflow="true" isBlankWhenNull="true">
                   <reportElement style="GroupCellStyle1" positionType="Float" stretchType="RelativeToBandHeight" x="0" y="0" width="606" height="18" uuid="86fa4116-b7e3-4aaf-a284-45a596a52f2b"/>
                   <textElement textAlignment="Left"/>
                   <textFieldExpression><![CDATA[$F{nameBook(id)}]]></textFieldExpression>
               </textField>
               <textField isStretchWithOverflow="true" isBlankWhenNull="true">
                   <reportElement style="GroupCellStyle1" positionType="Float" stretchType="RelativeToBandHeight" x="606" y="0" width="97" height="18" uuid="0c6acbce-c5ad-450f-a0be-23aa4b7e2ad0"/>
                   <textElement textAlignment="Right"/>
                   <textFieldExpression><![CDATA[$F{quantity(id)}]]></textFieldExpression>
               </textField>
               <textField isStretchWithOverflow="true" isBlankWhenNull="true">
                   <reportElement style="GroupCellStyle1" positionType="Float" stretchType="RelativeToBandHeight" x="703" y="0" width="99" height="18" uuid="7b44de1a-3656-43b5-904a-fee48f5fc245"/>
                   <textElement textAlignment="Right"/>
                   <textFieldExpression><![CDATA[$F{price(id)}]]></textFieldExpression>
               </textField>
           </band>
       </detail>
   </jasperReport>
   ```

Результат такого, слегка подправленного, отчета будет выглядеть следующим образом :

![](/ru/assets/images/How-to_Reports_ex3_result-d962d486ef473e7566b2570c78ce34d7.png)
