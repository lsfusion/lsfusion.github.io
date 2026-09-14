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

Нужно сделать [печатную форму](/ru/Print_view.md), в которой будут отображаться все книги с разбивкой по категориям. Также нужно сделать экспорт этой формы в формат XLSX.

### Решение[​](#решение "Прямая ссылка на этот заголовок")

Сначала объявим [форму](/ru/Forms.md), которая описывает структуру печатной формы.

```
FORM booksByCategories 'Книги по категориям'
    OBJECTS c = Category
    PROPERTIES(c) name, countBooks

    OBJECTS b = Book
    PROPERTIES(b) name, nameCategory
    FILTERS category(b) == c
;
```

Затем добавим два действия, которые при помощи [оператора `PRINT`](/ru/PRINT_operator.md) формируют отчет и выводят его на предпросмотр и в XLSX соответственно.

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

Затем запускаем сервер из IDE, запускаем десктоп-клиент, открываем форму с книгами и жмем созданную кнопку печати. Система создаст автоматическую печатную форму и откроет ее в режиме [предпросмотра](/ru/In_a_print_view_PRINT.md#interactive). Далее нужно нажать указанную ниже кнопку :

![](/ru/assets/images/How-to_Reports_ex1_Preview-1f7e18f5754030380b2e4a5eb2937ae3.png)

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
    <style name="DefaultStyle" isDefault="true" vTextAlign="Middle" vImageAlign="Middle" fontName="DejaVu Sans" pdfFontName="DejaVu Sans" fontSize="10">
        <box>
            <pen lineWidth="0.5" lineStyle="Solid" lineColor="#000000"/>
        </box>
        <paragraph leftIndent="2" rightIndent="2"/>
    </style>
    <style name="GroupCellStyle2" vTextAlign="Middle" vImageAlign="Middle" fontName="DejaVu Sans" pdfFontName="DejaVu Sans" fontSize="10">
        <box>
            <pen lineWidth="0.5" lineStyle="Solid" lineColor="#000000"/>
        </box>
        <paragraph leftIndent="2" rightIndent="2"/>
    </style>
    <style name="GroupCellStyle1" mode="Opaque" backcolor="#DFDFDF" vTextAlign="Middle" vImageAlign="Middle" fontName="DejaVu Sans" pdfFontName="DejaVu Sans" fontSize="10">
        <box>
            <pen lineWidth="0.5" lineStyle="Solid" lineColor="#000000"/>
        </box>
        <paragraph leftIndent="2" rightIndent="2"/>
    </style>
    <style name="GroupCellStyle0" vTextAlign="Middle" vImageAlign="Middle" fontName="DejaVu Sans" pdfFontName="DejaVu Sans" fontSize="10">
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

![](/ru/assets/images/How-to_Reports_ex1_result-00fbc0e57d2d616e01191b47790d59b7.png)

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

Поскольку группы объектов `i` и `d` зависят друг от друга, формируется один плоский отчет, поэтому шаблон будет единственным и называется по [каноническому имени формы](/ru/Report_design.md#template) без постфикса (как и в [**Примере 1**](#%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80-1)).

**Шаблон** `Sample_invoice.jrxml`:

```
<?xml version="1.0" encoding="UTF-8"?>
<!-- Created with Jaspersoft Studio version 6.6.0.final using JasperReports Library version 6.6.0  -->
<jasperReport xmlns="http://jasperreports.sourceforge.net/jasperreports" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://jasperreports.sourceforge.net/jasperreports http://jasperreports.sourceforge.net/xsd/jasperreport.xsd" name="Счет" pageWidth="842" pageHeight="595" orientation="Landscape" columnWidth="555" leftMargin="20" rightMargin="20" topMargin="30" bottomMargin="30" uuid="f60eb956-09f7-45ef-a1e0-3345187967cb">
    <style name="DefaultStyle" isDefault="true" vTextAlign="Middle" vImageAlign="Middle" fontName="DejaVu Sans" pdfFontName="DejaVu Sans" fontSize="10">
        <box>
            <pen lineWidth="0.5" lineStyle="Solid" lineColor="#000000"/>
        </box>
        <paragraph leftIndent="2" rightIndent="2"/>
    </style>
    <style name="GroupCellStyle2" vTextAlign="Middle" vImageAlign="Middle" fontName="DejaVu Sans" pdfFontName="DejaVu Sans" fontSize="10">
        <box>
            <pen lineWidth="0.5" lineStyle="Solid" lineColor="#000000"/>
        </box>
        <paragraph leftIndent="2" rightIndent="2"/>
    </style>
    <style name="GroupCellStyle1" mode="Opaque" backcolor="#DFDFDF" vTextAlign="Middle" vImageAlign="Middle" fontName="DejaVu Sans" pdfFontName="DejaVu Sans" fontSize="10">
        <box>
            <pen lineWidth="0.5" lineStyle="Solid" lineColor="#000000"/>
        </box>
        <paragraph leftIndent="2" rightIndent="2"/>
    </style>
    <style name="GroupCellStyle0" vTextAlign="Middle" vImageAlign="Middle" fontName="DejaVu Sans" pdfFontName="DejaVu Sans" fontSize="10">
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

![](/ru/assets/images/How-to_Reports_ex2_result-80d16449c09f46f60f65ee15c8e3d467.png)

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
       <style name="DefaultStyle" isDefault="true" vTextAlign="Middle" vImageAlign="Middle" fontName="DejaVu Sans" pdfFontName="DejaVu Sans" fontSize="10">
           <box>
               <pen lineWidth="0.5" lineStyle="Solid" lineColor="#000000"/>
           </box>
           <paragraph leftIndent="2" rightIndent="2"/>
       </style>
       <style name="GroupCellStyle3" vTextAlign="Middle" vImageAlign="Middle" fontName="DejaVu Sans" pdfFontName="DejaVu Sans" fontSize="10">
           <box>
               <pen lineWidth="0.5" lineStyle="Solid" lineColor="#000000"/>
           </box>
           <paragraph leftIndent="2" rightIndent="2"/>
       </style>
       <style name="GroupCellStyle2" mode="Opaque" backcolor="#D5D5D5" vTextAlign="Middle" vImageAlign="Middle" fontName="DejaVu Sans" pdfFontName="DejaVu Sans" fontSize="10">
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
       <style name="DefaultStyle" isDefault="true" vTextAlign="Middle" vImageAlign="Middle" fontName="DejaVu Sans" pdfFontName="DejaVu Sans" fontSize="10">
           <box>
               <pen lineWidth="0.5" lineStyle="Solid" lineColor="#000000"/>
           </box>
           <paragraph leftIndent="2" rightIndent="2"/>
       </style>
       <style name="GroupCellStyle0" mode="Opaque" backcolor="#F0F0F0" vTextAlign="Middle" vImageAlign="Middle" fontName="DejaVu Sans" pdfFontName="DejaVu Sans" fontSize="10">
           <box>
               <pen lineWidth="0.5" lineStyle="Solid" lineColor="#000000"/>
           </box>
           <paragraph leftIndent="2" rightIndent="2"/>
       </style>
       <style name="GroupCellStyle1" mode="Opaque" backcolor="#FFFFFF" vTextAlign="Middle" vImageAlign="Middle" fontName="DejaVu Sans" pdfFontName="DejaVu Sans" fontSize="10">
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
       <style name="DefaultStyle" isDefault="true" vTextAlign="Middle" vImageAlign="Middle" fontName="DejaVu Sans" pdfFontName="DejaVu Sans" fontSize="10">
           <box>
               <pen lineWidth="0.5" lineStyle="Solid" lineColor="#000000"/>
           </box>
           <paragraph leftIndent="2" rightIndent="2"/>
       </style>
       <style name="GroupCellStyle0" mode="Opaque" backcolor="#F0F0F0" vTextAlign="Middle" vImageAlign="Middle" fontName="DejaVu Sans" pdfFontName="DejaVu Sans" fontSize="10">
           <box>
               <pen lineWidth="0.5" lineStyle="Solid" lineColor="#000000"/>
           </box>
           <paragraph leftIndent="2" rightIndent="2"/>
       </style>
       <style name="GroupCellStyle1" mode="Opaque" backcolor="#FFFFFF" vTextAlign="Middle" vImageAlign="Middle" fontName="DejaVu Sans" pdfFontName="DejaVu Sans" fontSize="10">
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

![](/ru/assets/images/How-to_Reports_ex3_result-12480db54b16f99bc783f01dd290d57c.png)
