# How-to: Reports

## Example 1[​](#example-1 "Direct link to Example 1")

### Task[​](#task "Direct link to Task")

We have a logic for books split into categories.

```
NAMESPACE Sample;

CLASS Category 'Category';
name 'Name' = DATA ISTRING[50] (Category) IN id;

CLASS Book 'Book';
name 'Name' = DATA ISTRING[100] (Book) IN id;

category 'Category' = DATA Category (Book) AUTOSET;
nameCategory 'Category' (Book b) = name(category(b)) IN id;

countBooks 'Number of books' (Category c) = GROUP SUM 1 BY category(Book b);

FORM books 'Books'
    OBJECTS b = Book
    PROPERTIES(b) READONLY name, nameCategory
    PROPERTIES(b) NEWSESSION NEW, EDIT, DELETE
;

NAVIGATOR {
    NEW books;
}
```

We need to create a [print form](/Print_view.md) to display all the books by category. We also need to export this form to the XLSX format.

### Solution[​](#solution "Direct link to Solution")

First, we need to declare a [form](/Forms.md) to define the print form structure.

```
FORM booksByCategories 'Books by category'
    OBJECTS c = Category
    PROPERTIES(c) name, countBooks

    OBJECTS b = Book
    PROPERTIES(b) name, nameCategory
    FILTERS category(b) == c
;
```

Then, we add two actions that use the [`PRINT` operator](/PRINT_operator.md) for creating a report and for previewing it and exporting to XLSX respectively.

```
printBooksByCategories 'Books by category' ()  {
    PRINT booksByCategories;
}

xlsxBooksByCategories 'Books by category (XLSX)' ()  {
    PRINT booksByCategories XLSX;
}
```

Now let's display them on the `books` form in the toolbar of the table of books.

```
EXTEND FORM books
    PROPERTIES() DRAW b TOOLBAR printBooksByCategories, xlsxBooksByCategories
;
```

Then, we start the server from the IDE, launch the desktop client, open the form with books and click the created "Print" button. The system will automatically create a print-ready form and open it in the [preview](/In_a_print_view_PRINT.md#interactive) mode. Then, click the button below:

![](/assets/images/How-to_Reports_ex1_Preview-ed1b04a703f6654a256a1130222582cc.png)

The system will save automatic templates for [Jasper Reports](https://community.jaspersoft.com/project/jasperreports-library) to the source code folder (src/main/lsfusion).

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcMAAACSCAYAAAA5I6E4AAAkqUlEQVR4nO3dCVhUVf/A8e8wMOybgCIu4C6mloqVtpBpuZRL5kLhQpqV5VZq2V8rlzdzqyzTTM1dU3PfsrK0t1fNXDMTFTcMFJAdkUVm7v+5AyKbMKis8/s88jDcc+527ji/Oeeec65GURQFIYQQwgxFRcQbf1uU9YEIIYQQZU2CoRBCCPOlyfwlwVAIIYTZk2AohBDC7EkwFEIIYfYsK1MJ/G//YTZv/ZG0tPTsZW5urgwbOhB3N9cyPTYhhBDlj0YdT6FQuYLh1u27ee3VflRxdcleduTYCebMW8qo4YNwdXEu0+MTQghRPlWqYJiSkpIrEKpatWhORoaeiVNmYzAYcqU5Ozvyct/uNPFtUMpHKoQQotzQlJNgGBefiKuLU7HTTPVI6xbGn7zC/r3Cd2u3MmXi6ALXM6TGciXagEcNd6yzut9CGonRqVi7OWOREMq/aVWpW802K01PcmQ4cZYeeLnZyg1ZIYQo95Ty04Fm7fqdHDh4LN9ydZmaVlJq1vIiPiGxgJR0zqwcQqs6zenR91maNmnPxF/jMpP0uxnlEcTUWd2p4/s0w9ddMC5OPb+JUU/UpkG7brRrUINWryzmVGqJHboQQoj7qFwEw8CArhw9dipXQFRfq8vUtFKX+hPTXjtB4J5LHN53lH829Sfht4NEZWfYzUHDexy+eJ4dwx8Aw1nmBQ0jPGgP508d52zYH7wWM5ahC8+X/rELIYQotnLRTOroYM+Afj1YvnJz9jI1EKrL1LRSZ+1D/QZhHNi+h9Me/jRuHMTnk3JmeIKAV9riaZP15+nNLI8axLeDGmJsMLVryNBNVxlsKBfFK4QQ4g6UrCloykXNMGdAVINgmQZClaYpw1bMoNHRj+na0BPfru+y9FAUt7vfWKPT5ch/NZyzdWpRI/u+IqDVobMqN8UrhBCiEOXq0/pWQCzTQJjFuXkgU1fvJSTyAhv7JzKt13QO3B6+mFv1GjQMucjlHJ1VlfRkklJultbhCiGEqExzk6pBsKwDIaGreOmxYWyL0oOlEzVreaCLjCDqTsGwcQ8Gei1l6jenSFYD4Y1gvuxWix5Lw0r5wIUQQtyNSnVTy9bWlti4+HxjDe9Ezauuk493R4Z02cy4tg14T5fOv/HeDF61gq4OxtET+Vk05M3l3xA2qBN1Z9pjE3ONagFfsmJwnXs/KSGEECVOU5ke7lvQdGyFsbbW0aNbRx5v61dwBiWFmMhkbNzdsTfpa4NCWlwkCZZuVHW0KtaxCyGEKH1RkfHGoYaVKhgKIYQQdxMMy909QyGEEMIsp2MTQgghyuypFeWxN6kQQghR2iQYCiGEMHsSDIUQQpg9CYZCCCHMV3mdgUYIIYQobdKbVAghhNm6NdBegqEQQggzVo6edC+EEEKUJQmGQgghzJvMQFO8Sb/d3FwZNnQg7m6upXJ9hBBClA65Z3gHW7fv5rVX++V6HNSRYyeYM28po4YPwtXFmVKVuJ9P3/+RByZMolP10t21EEJUdhIM7yAlJSXfcxFbtWhORoaeiVNmYzDkeKw94OzsyMt9u9PEt0HJXCmNJdY6a6ykYVsIIe77QMNKFwzj4hNxdXEqdpqpHmndwviTV9i/V/hu7VamTBydJyWNxOhUrN2csUyOJCqjCtVdMp91aLgRRXi8NdW8nNHlWied+PBwkuy8qOVqnbnI8UEGjG+Ezi33NnVp0YTHaPHwcsU6a/CoEEKI4ql09Yy163dy4OCxfMvVZWpaSalZy4v4hMT8CfrdjPIYzKfz+tLc73FaetWg02f72P9lDx5o5c/jDavz0OANhBszZ3Bx0yjaeXvRtEtP/Ov40O6jvcRlbyeIjQm3tzl74RDaPvEM/k3cqfvMDA4ll9jpCSFEpX1qhfpT6YJhYEBXjh47lSsgqq/VZWpa2djAjtix7D8VwqVDY4gf/Tgjosbyx8lgLpz7hoarprDqlBoLQ/ht53V6rD/H5b+OEXJxHrXnfMDqiwVtcye7k0aw+9Axzl4+wKCE95m87mrpn5oQQlQCla6Z1NHBngH9erB85ebsZWogVJepaWXDn/4D/XBWv3o88DTt69RH98JjOGsBz6fp9PjrBKtxrIkvQQsXqQ2o3IgO5fL5BDQufxAcAtTOu8229AlohvGMnB+md89mrAi5BEjvGiGEMJl6e0mphMGwoIBYtoFQ5YpT9q1KDRYWtthk3QpUL4HWyoCiToKgxLJvznimrdzDeQsfmjRtiN4hA7vcfXWyOGKf45QcHV1Ij80o8TMRQojKqFIGw5wB8dbrCuH4XAZNimHC0eP097YBIljQaQ7Hy/q4hBCikqt09wxzUoNghQmEKn0GGfbueBp7kCrEH1rMqv+W9UEJIUTlV2lrhvfK1taW2Lj4fGMN70TNq65zT1q9zuyeL/BSLR9q1KuC/UP9eNIfCuijKoQQ4n5N061Re5QqxrtVwoTp2Apjba2jR7eOPN7W7x7L0kBqXATxFh54OmeORxRCCFEyoiLjjb8lGAohhMDcg2GlvmcohBBCmELuGQohhDBj8nBfIYQQwkiaSYUQQpg9CYZCCCHMV9bTfiQYCiGEMHvSgUYIIYTZUh/fpPahkZqhEEII86aRoRVCCCHMWuZNQ6kZCiGEMHtyz1AIIYTZujU5twTDUrDzSDozN6eSnHp7TnTfmlpmBdnh4SyVcyGEKGsyUXcpeGZiIpMCbKnrqc1etuXPdHYducm8N+yp7mpiQIzfx8zxv9Lyow9oX7XkjlcIIcxtom6pGZaChGQlVyBUdX9Yh9ZCw4vTk8jQ587v4WTB+N62tG2c5/JotFhbW2MplUkhhLivpGZYCh4em8DW8Y4m5w8O0/Pp5lS2T8i7ThqJ0ano3JyxyZo1AdKJDw8nyc6LWq7WxiU3k+NIMNjj7qjLXlNJTSAmVUcVF9usXlP51xNCCHMjj3Aqx9T7iVEJhvwJ+t2M8ghiY4L6RwYXN42inbcXTbv0xL+OD+0+2kucGjL3vEv9jvO4cHtF9k9sweOf/o1SyHpCCGF2ZDq2Ci4jhN92XqfH+nNc/usYIRfnUXvOB6y+CA7PBNDv4mq2nL2V9w82rnYgqE9rtIWsJ4QQ5kruGVZUlr4ELVwEGLgRHcrl8wloXP4gOASo409A/2je2RLM22N9Sd+3kTU1gvitmfoVqLD1yvqkhBCibEgwrKiUWPbNGc+0lXs4b+FDk6YN0TtkYGdsXbWkbd+BJLy6heCx9biyaQ1NBu6nfpHrCSGEGZLp2Cqw43MZNCmGCUeP09/bBohgQac5HM9KtmjVmyD6svmwH2HrWtD/mLdJ6wkhhHmRJ91XbPoMMuzd8TT2BFWIP7SYVf/NmaEJvYNcWPbm/7H5iX50q2bqekIIYV5PrVB/ZMRaKXC213AhIs9gwkKoedV1CtXqdWb3PMJLtXx4sGVLunxtTRv/3Fnq9xpAzSNn6BT4HC7FWE8IIcyNjDMso+nYCmNvo2FsDxu6tLo9TtDoxgZesv+OHgnr6eukLjCQGhdBvIUHns5WxTiiu11PCCEql2uRmQPLJBhWFEnBbJg6gtd3PMXeE+NpWtbHI4QQlSgYSm/SiuL6JUKUzizd8LoEQiGEuE9utddJzVAIIYTZisqqGUoHGiGEEOZLpmMTQgghMsk9QyGEEGZMY/wnzaRCCCHMngRDIYQQZk+CoRBCCLMnwVAIIYTZk2AohBDC7ElvUiGEEGZLfWKFSoJhGU3U7VtTy6wgOzycpXIuhBBlTT6JS8Hn21L5ONCWreMds3/a+lry2rxkrsYV4xHzynl+nL+N4FQT8t74hzUTgmjv58e43cn3cviQuJ9P3/qIXVfvbTNCCFFeSc2wFCQkK9T11OZa1v1hHVoLDS9OTyIjz6MOPZwsGN/blraN81wew2nWDl1Mh4Cu+KoPqS9ExNpxBP7egj0rJ+Jb2/7eTkBjibXOGiv56iSEqGSUrKm6JRgWIi4+EVcXp2Knmep5PyvjT17BYXqmrk9h+wTHIrdhSI3lSrQBjxruWGfNsZeWGE3IhVDqPDySJu4u2KkPtSeNxOhUdG7O2GTly0iOIxEHqthbFbo9HB9kwPhG6Nxy7llPcuQVEmw98XLKeQ6Z+7F2c0aXFk14jBYPL9fb2xJCiPJE/WySJ90Xbu36nRw4eCzfcnWZmlZS1PuJUQlFNZ+mc2blEFrVaU6Pvs/StEl7Jv6aOfv6wdndGbH8AmFrR9O9+ztsUZs39bsZ5RHExoTbWzj9VXsem3WiyO3lXTf13AZGPlaLuk91p6NvDVoM/pa/k8iRdzCzFw6h7RPP4N/EnbrPzODQPbbUCiFEiZHp2AoXGNCVo8dO5QqI6mt1mZpWplJ/YtprJwjcc4nD+47yz6b+JPx2kCjgyQ/3seLNhtQZvJh9+xbzUs17214u+jPMHTiSK4P3Ehp8lL9Dj/GRdiYvT/uDtOxMO9mdNILdh45x9vIBBiW8z+R1csNRCFF+yV2gQjg62DOgX4/sgHgrEKrL1LQyZe1D/QZhHNi+h9Mx6egaB/H5pE5ULentndnCiqgg3gtqiPG2pWUNerz3Jg5LNnAkO1Nb+gQ0Qy0hrfPD9O7ZjL9DLt39uQohRAmTYFiMgFhuAqFK05RhK2bQ6OjHdG3oiW/Xd1l6KApDSW/vajhn63tTK+c7p2Zt6l29zJXsplBH7HMUkaOjC+k3M+72yIQQosRJMCxGQCw3gTCLc/NApq7eS0jkBTb2T2Rar+kcSL9DZgsrdLooYrNuA6pir0UUf3teNWl07hL/5oyS/4ZyvnptvMpP0QghRLFIMDSRGgTLUyAkdBUvPTaMbVF6sHSiZi0PdJERRN0pGGrq09hvP8vn7uRiQgIX9s7iy/WJxd9eox4M9FrG1IXB3FD/Tr/M+k/mcWNIH/xK8HSFEKIkSTAsBc72Gi5E5BlMWAg1r7pOobw7MqRLJFPaNqBJk9p4vfgrT6+aQleHO61Ql6CZ03H7/gXq12hGwDJX+gQ1LP72LBowdOnX1FvXER+fJtSv9Qif6iaw5t3W6Ew+QyGEKF80iqLcniNMlNp0bIWxt9EwtocNXVqZEF6UFGIik7Fxd8felFGjSjopaVpsbbT3uD2FtLgorlt74GYn36mEEBVTVFTmvSMJhkIIITD3YCgz0AghhDBbGnXEvcxAI4QQQkgHGiGEEEKaSYUQQpgvY7dGmZtUCCGEkGZSIYQQQppJhRBCmLPM8d8yWloIIYTZk2AohBDC7Mmg+wqkzf5U9Ipi/Abzn0Y6OrhnTqn2yvaTbAzJ9xheI8WQ+XgJSwstsW+3K9XjFUKIikKCYQWSmqGgV/sAqw+czzHNabpB4cbNwicCt1JMnyhcCCHMjTSTmguZj10IIfLLekCQBMNKYLhfbVZ1a57vZ4Rf7ew8Gou8j4SK4c/V81n6e3jBG00/w47589n2j/GphYVL3M+nb33Erqt3cfDKeX6cv43gVBPy3viHNROCaO/nx7jdyXexMyGEKJg0k1YCj3o5G3/y0mrgy8OXja81St5geI09s4YyLjWCh/6eyEN5nuiU9NMs+g9dhP/yXnR9wK7wA9BYYq2zxupuvloZTrN26GI6BHTF16bwrBFrxxH4ewv2rJyIb+1y9KBlIUTFppFgWKm19HRiQacmxtcW+WqGKmtsLy1k6d73mN3eNsfyKDYu3EB6gfEmnfjwcJLsvKjlap25yPFBBoxvhM5N/SONxOhUrN2c0aVFEx6jxcPLFesinlWckyE1livRBjxquGevl5YYTciFUOo8PJIm7i7YZe1aCCHuhSar/4XUDCuBlStWcOz4sey/LSwsUJTMXqTZyzRamDkzz5p1CHq1MSsX72Bi+1643Fp8bg3zj/RjSK8FXMrOm8HFTWMYNGolIS610IVG4D3yOzZOegpX/W5GeSyiQ9wmXnZUXy+h0TeubF54mKizJ0ht/Qmbt7xL6yIrc+mcWfkWAWN/QFu3KgmxrgTOXc/Ep105OLs7I5dfIEwZTff9rRi2djEv1bzHghNCiCwSDCuBv078xY+7dhWaRw2QM/IFQ6jRZwg9Xvyc9WG9eNUYXPQcXjGf5NdX0eHqAhbdypgRwm87r9Nj/TmGt3ZBidvEoHofsDrod966fWsyy052Jx1k96Fm2CT8ycQObZi8rj/bXqle+Imk/sS0104QePQSYxpbkn56Ke99d5Copzvx5If7WGHdkt6pC9n3UatilY8QQhRFOtBUUBpNMdodC+P4DIMGXWL+qpOZkxKl7mXpIg+G9mtBrtuIlr4ELVzEyNZOpEaHEnI2AY3LHwSHFLTRtvQJaIZaEdQ6P0zvns34O+R2HfOOrH2o3yCMA9v3cDomHV3jID6f1Imq9+dMhRAiHyXrR2qGlYBfKz90Vrp8y8OvXOHwoT+LWNuKNkFvoOm8jANvz8R3+2LWtX2d4DpwKGc2JZZ9c8YzbeUezlv40KRpQ/QOGdjlbo3N4oh9jiZRR0cX0mMzij4RTVOGrZjB9Gkf0/WTvli2fZX3PhzDgNZV5VubEKJESTCsBPoGBBh/8vpl924TgiFoGgUytMmDLPlpMH4L9tB79AKMfWFyOj6XQZNimHD0OP291W6fESzoNIfj3F/OzQOZujqQqRnxBG8cxwu9ptMg5FMeyx/rhRDivpFm0grKcF8H0XvS67Xn2frei8wKfYVX2hfQ00WfQYa9O57GHqQK8YcWs+q/d7OveI6unsfWMyn5k0JX8dJjw9gWpQdLJ2rW8kAXGUFU+t3sRwghTKHectJIzbCiOhJvICNHPKxrZwGXg7lw/nz2spP/nDR5e06dBtF/xGL2j9yEX0HtBa1eZ3bPF3iplg816lXB/qF+POkPicU9cOU8W//zf/xvREe6NaqXO827I0O6bGZc2wa8p0vn33hvBq9aQVeH4u5ECCGKR6MoMk9XRdHivynZc5PmNaCmJWz8nKVLltyxN+mJv00PjgUzkBoXQbyFB57OVne/Gb0evVabu4NOTkoKMZHJ2Li7Yy8N+UKIEhQVFW/8LR81lYT6neY+9S8thAU2rl543utmCguEKo0tbp45JwEQQogSon5wKhIMKxRHKw031d6bBUQ9a/Xur06Hg4NDyQ7FEEKISkUxfqZKM6kQQgizFXUtzvhbepMKIYQwexIMhRBCmD3pQCOEEMJs3dVTK25mwJU4heRUuKkvoSMTQgghTGClBXsb8HLVYHWPVTvL4gTCM1cU9AXORSmEEEKULrVSFp8MSSkKjbzuLiAqxb1nqNYIJRAKIYQob9TYpMaoe2FyMFSbRoUQQojy6F5jlMnBUO4RCiGEKK/uOkZlzUciQyuEEEKYN40EQyGEEELGGVZE65bNITE+xqS8Ti5u9Bk4vMA0RTGQfGkPe38/THiiDo9G/rR7ugWu2tKbx1RRznFgdTCevZ6nrvXd7VdRojm5dSeGtv150ENTbo4x87jWE3w9a4GVI1W9W9GydSOcLEzbjqIkEXb4F46eOMU1xR3vll14qkUNrCrIXLNK0n5WzPiResMn8ljV+3fMSuI+ls38lcajJvCom6Zcvz9FxSCD7iugOwW34lAUPVE/vsaQySfx7dyD5tUiOb64N1+vHs2Cb4ZSR1dK//ENZ9g1YTFtuqofNne7kWscXjSFtHpqMKQcHaN6XKPZ2/hd2tQA5caf/LJgFNPqz2DR3CBqFvGlQ0k7zY4PAvjsL286dHwUT4u/2PTOeBb5L2HuxOdwLyIg/rthEF9njGVqX1/KjEaLlbU1WosS2K6NDZaaivD+FBWBBEOz9TebZu3j2bnHGdbCxrhEGRzE6ldfYteJIQz1y3xeoaKkkxQZRrKtF9Wds/IpqSTHpaFzdUJ7I5JYvRseTpn59amRRCXY4F7VyVh7yZlXc/0q0Tfss9PuRFEySIkJJ8mqGu5O1miLUQvSp14jKhaqVHfHOs96mdu9QrJ1dTwc8z+Psaj02/kMpF+PIcXCCRf7zE9IfVoM12INVPF0R5drv3Y81OdD3miduUwZvZcZT/Vn84kgXm8Uy3WDPa4Otz9lDWkJJKRZ4eigI2z1G8y8FsTijSOpZ5+5/iuDB/BVYEc+/eE8n3Rxu+M1upkczbXQI5xMv0JcrBd2rk7Z5VFU+SpKGokREdx09sLN5iZJCXpsXRyyr9mdyinXtU4KJTK9KjXcHqTrm42xcs1bznfe/53LMgeHh+g+1Ne43YL2W90hncR0HU6Otsbtq/tMTYojQ1cFB+ubJr9/hfmQYFjJmkkLaxbNLY20G3r0ObpgabSNCVxyzPhaUW4S/tO7TJy8kstOtbC8EoHXK6v5dKQ/ToZfmNFqCbUnadm57BgJ4Qk0HLORNyxnMXHlGVKvhGL7/ArmT38BD2PeZdSb6czOOYewsLxKpFNfxn8xk/a183/VTgvdxBdjRrE7qRquCeFo/aczdXIgPibUVBMPfcLrw1aSbJtMeEpr3vhyIS83z/wUTru0kdljhvNjvCeuSWFY+k/lPx8OooGDxqT0nOL+GM+IDy4QsHAZz/mkc2nLW4ybuguL2lVJjnely+R1vNG2SsEHqatO1apVwB7SD7xH168fYM33I6mZ9YF94ouWfGS5mg0j01k/N47+y9/KDoTGa+T4CAMmf8WO+BgyDE5E/FzwNbr6/SCmb7hAhDKaUYef5tUln/KEY9Hle/30t3wy8j3+oA4uaZY8NrQzp79MYfj/ptKsqHIyXutFVH9fYdOikzR8czNz+ocal7X5ayOdnQrfvxrUTS7LrH2p2+1kX8B+O59gcrdFPLruZ/p6azGELmB435/puWUDnT2K8f4t8l0nKgsJhmbaTAp+vDihPaPfeZyx3YbQ6ekOtG7RAKdbTXeGEI7sSaLdvBACmjtD4mY+8v+QH3r9Rt/qaoaN/B5/kOU/+6E7N5PBHZ9g2rD/seLHNtjGrmT041PYMeQFgupm5t1weD3f/roAd4sbXFjWlyETluK77DWMm8qiGM6ybuwwYgL2saOnN5Y3/2XXuHZMWt2aJUGNijif82z61YoVO/+hnq2e6D3DGTxqKg/snEFzq7OsHTOSa3328EPvBugMV9gzvgPj5j/Ad6MfwcpQRHqOvcQf+oBRH5yj78IVPF/HBiVtO0vG/U2XHRcYWM+Km+eXMnvbn8S06UjmR/hNIk7u5c8M0F+/yIlda/jLbzIfNAA77wA6v/d/7Lk0kv511DI/yO7NDnRf0hptzBLO3XiMgY3y/xd1fqgfL6vlpT91x2sUELSVj1NaMTZtActGtTKpfJWM46x8ZzK8dYhdXX2wTL/A5neeZDkDMtfXnzGhnH7hhH4Xq39vg7u1BkUfavr1Tf/pjmXpVmQtLc9+lSaMGb2GV2euo8Ocdvw5cyb2Y/bQqZoatIv7/hWVW+Z7S4ZWmCmNRkvNLvNZufVbOjieZufH7enasTuzNh4nWVHQaJvQfdoiXm7uSHpcKKEXE9A4/cGFi7e24M9zL/rhYKHBqkE7HqlVH/+ObXDQarBwf5q2fmeJirqVtykvDOqOh1aDRmNP3cC3aX9iA39kp2c5v4XtYT3o8pgNCTGRxCTqaN25Mxd+30+cUtTsEjqeHfAW9e3UfVji3m40vVxW899TwIWt7IgeyCu9GhibCjXaGrQbOhT77zcQjAnpWeIOT2HUuH/o+c1yutbJbI5E503tOmGc+HUvF+LSsKoXxNhRnXJ8eKcSsmcxW75fzPZt2/jzVDRYJJOWpq77JJ1fjOKHnzP3knF4Iz96DqRDQw0kxhLn6oxDIf9Di75GxSzfcz/w081BDOjqY2wi1FjXo1tQIJmNsaaW0xN06p0ZkIq9/yLLsjC596vRWOD14mcMjJvE7KnjWJA8jrEvemORva3ivH9F5aZ+tihSMzTn3qQqqyot6Ti0Jc++MZOYf9bw5Yjn+NrrAqMfuc7xZRNYsmkvYRY+1GnYAINdBjbZc9O64Oh467UFGo0t1rpbf2vRWhm4Hb9q4+6eY6eW1ale4xLXooGcy6PCuHTjJ74Z9leu2piPR1PigRy3nQrgSVUP2xx/V6dajaucjUqBlDAu+TRFrRTczl6bWlH7iEzJ2m9h6cbW3B3MnX4etyQfFO3t2ppG04yAz6azZP5URs0NQNtqMEEjxvB8c4+sb5qOPDF8OW/fumeYfoktIx9lyprWfBvUgAefG8D197dyYUh9rv24lrq99lFbbTKtUY86EYe4egOa2Rd8xooSU8Q1yqOI8nWJiSDc64HbwU+9su7VqUZWVDCpnHTodHe3f9dCyrLo+8b596vR1uf5AY/yxRtb6LJkHjVz9eAtzvtXVGZ39dQKUYl6k8Ye4edfk2j2oj/V1W/5Gmvcmw6ke4f3+fKfUHBcy0ezYxiy4yhda9iiKFfZEPQVZ+5qb+eJuKpAlawPo/TLhIXVo3nVPNk8auBdbSCTvh9Pg2J3XrjClavX4aFbn3CXuXKpBp7VbMGxJj6XLhGhgPutzV4N5d+qtVGTqVZEujG4PM6IxTtp/UtPBo+YRL3vptA8616eg28gw78IZJg+nou7xvH2m9OpvXcWDxXwv0uj8+HJDm34z6Ez6JX6WDTrRTdDIHv+9iNiR0ue31E7M6ONH36Pvca2HZd5to939vrqvdyTXzzKf5jHqg4/FXmNDNnTEBddvkp1b+qFBHM5A9yzolVq6BnCbn0NMamcCmHC9b1TWba4c3+mO1JunmDN13t5MrAj+7+ay/nHx1CvxLufiopKmknNlV0Ch2cOZM73R4lJ1aNkJBB2ZD7rdtjR8kFv0Gegt3M39vZTe08mnVjCDwfvdmchbPp2NeHpCoqSQPC3s/ilZS/a5KwVqur14HmnRSxeH0KKoqDoozk4qwvDlhwlw4Sv6b8u+4yTieo+0gnfMZ11Kf3wbwLU7U7XastZvCY4c7s3Q/l53tekvtQbNbnIdCNnnBytqdN/MR82WsO4DzdxTc0bvopxvYbxW0wGWDhStboHVtERxKbfWk9Br9ej12eQcTOZuIu/sm7jflo18zXWdtSaZYcXHdj6wXj2PhyIf1a1TKOpTbcxI4ia8TKzdv5lvEaG9ChObx7BpNVV6dvDD62h8GtkY+9M+KkTROsV08q3Tm/6+H7H5zPWExwWRtjfa5mz+Odbs1WZWE6FKGL/hZWlosQTvGUeey/cMGVPxi8NF5ePYG2taYydMpsR1b/kkxWnTXofCXNsJJWaodn2JtXYPM3whf/HzA+78MyHWtztY4m1fISeYzcwpJXaXvQ673buybi2danmUwXbxoG0fBRujR8vni70bvsnY56eTJoSQ0LNICZ/1p9qanNgzmPSNiTg86/4+v0uPP+VHfb6FFweDOSN/s2xLLKm2IyBfZyY260+kVwn2ro9w78YRzPjPaSG9Pl0Htfe7UyXeQ44pMbh2nEG015rndl9XlN4eq5j1Hjy1KTVnH65KxOWNmTOwGfp+dRmZvdsxBe6dK4metNj9jL87W6tEcvKl3SsVF/qnKnu8yCtui1jYt/bPTO8Ow/A/eNx1BzWGacc52nVbDzfLHLns//0pNvbURjIwKXlIIZ8u5KePloUpfBr5NVpDP12v0PPJtsYe2AjXasUVb616Pb5TvhqGp8Pm4m+1jMMfGMY/4zNbCbVWJheTgUp6voqXoWV5Xl++2o8x4Ke5am69Yt8xxkuL2b6Nw4M29QHd40FHcdNZkf34Wx4ahd9sirfQhhl/ZfTKIppX5X+uiTfqCoj4/ir+Ajibzrg5uGca1yXOjA/PTGSJAsP3AsZd1fo9vU7+Kh+Zhf4Z3UxxN2wxdXVrsh7QDeTorhh5Y6zTWbjhZK+hQmNXmBH3oz1PmLtzx/SKGt7hvQEYhPB2S3/ODG19nQzMYob1h642GgLKIvC0ws9T+UGCdHJWFdxx7aYM/gokYsY2u0oA/87lzZ3mOUkI/kaSbjgap/7OhR1jdT0m2k30aoD33OUR97yvUWfnES6nQO2t8YUnpxE9/dtmL31XepmjzO8+3Iqav+FlaWiz8Bgoc0cN5i6kfd9V9PuxPd0dJSmT5HpQZ/ivxeirsUZf8s9QzOn9ry0da2JbYFpWqydvTL7RdwHWht33LM6YRbFyrEqzrkWPM/EMylMzJfTgpwfxxY659yddXJQexjqnD25U/+OotILo9HY4eKRXR00iaJc49Su7ezf9hkM28zDhezY0t6jwA5ERV0jNV1XQMDKV77G47nCztFPsqPRDN58vjHaK4fZ/e1C7J7dQu37VE6F7b+ostRoLY3XWrl+il++ns+BRv686nAPByFEDhIMRcnSeNKs75N43uM7Tf1Qt9LdXS2k3NJf4dzR01g+8y1TujUo1kw7JUGj8eK5T9agX/wNy6YuJM3Wi0ad1zCnd0sTmqlL0Y1QLiudmPz169QvT8clKjSTm0lP/avIMw2FEEKUS1ZaaFLr7ptJTe5Nam9i85YQQghR2u41RpkcDL1cNfd/5nkhhBDiHqmxSY1R98Lk8GZlCY28NLjYZ1ZHhRBCiLKkxiI1JqmxSY1R96JYq6s78y6Bh6cKIYQQZUkaPoUQQmDu/h++K/iP65N3TQAAAABJRU5ErkJggg==)

The system will then start the editor associated with the jrxml format where these files will be opened. You can use [JasperSoft Studio](https://community.jaspersoft.com/project/jaspersoft-studio) as an editor. In addition, a background process will be launched to constantly synchronize report files in the src / main / lsfusion and out / production folders (or target / classes if Maven is used to start the configuration instead of IDEA Build) to eliminate the need for rebuilding the project after the templates are modified in the editor.

Since categories and books are associated, a single flat report will be created with categories represented as groups of books. Report data will be transmitted in a flat, denormalized form, where a separate (**Field**) field will be created for each property. A group (**Group**) and a corresponding header block (**Group Header**) will be created for categories.

Let's make a few changes in the automatic template and save it:

![](/assets/images/How-to_Reports_ex1_template_change-0f7af6f2a851a94748840ef82ed8a3e4.png)

**Template** `Sample_booksByCategories.jrxml`:

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
        <groupExpression><![CDATA[String.valueOf($F{c.object})]]></groupExpression>\n\t\t<groupHeader>\n\t\t\t<band height="18" splitType="Prevent">\n\t\t\t\t<textField isStretchWithOverflow="true" isBlankWhenNull="true">\n\t\t\t\t\t<reportElement style="GroupCellStyle1" stretchType="RelativeToBandHeight" x="0" y="0" width="96" height="18" uuid="5b282d01-48bf-4170-8cb5-358756cdd8fd"/>\n\t\t\t\t\t<textElement textAlignment="Center"/>\n\t\t\t\t\t<textFieldExpression><![CDATA["Name"]]></textFieldExpression>\n\t\t\t\t</textField>\n\t\t\t\t<textField isStretchWithOverflow="true" isBlankWhenNull="true">\n\t\t\t\t\t<reportElement style="GroupCellStyle1" positionType="Float" stretchType="RelativeToBandHeight" x="96" y="0" width="459" height="18" backcolor="#FF0000" uuid="b8110564-b312-4096-bb6b-a466364ea2b9"/>\n\t\t\t\t\t<textElement textAlignment="Left"/>\n\t\t\t\t\t<textFieldExpression><![CDATA[$F{name(c)}]]></textFieldExpression>\n\t\t\t\t</textField>\n\t\t\t\t<textField isStretchWithOverflow="true" isBlankWhenNull="true">\n\t\t\t\t\t<reportElement style="GroupCellStyle1" stretchType="RelativeToBandHeight" x="555" y="0" width="93" height="18" uuid="b2edb91d-7e15-4c69-8ed5-43f6ffa82208"/>\n\t\t\t\t\t<textElement textAlignment="Center"/>\n\t\t\t\t\t<textFieldExpression><![CDATA["Quantity of books"]]></textFieldExpression>\n\t\t\t\t</textField>\n\t\t\t\t<textField isStretchWithOverflow="true" isBlankWhenNull="true">\n\t\t\t\t\t<reportElement style="GroupCellStyle1" positionType="Float" stretchType="RelativeToBandHeight" x="648" y="0" width="154" height="18" uuid="6e18a055-237f-4845-8134-20ff20f182db"/>\n\t\t\t\t\t<textElement textAlignment="Right"/>\n\t\t\t\t\t<textFieldExpression><![CDATA[$F{countBooks(c)}]]></textFieldExpression>\n\t\t\t\t</textField>\n\t\t\t</band>\n\t\t</groupHeader>\n\t</group>\n\t<pageHeader>\n\t\t<band height="18">\n\t\t\t<textField isStretchWithOverflow="true" isBlankWhenNull="true">\n\t\t\t\t<reportElement style="GroupCellStyle0" stretchType="RelativeToBandHeight" x="0" y="0" width="555" height="18" uuid="f9243784-60ef-4031-8c73-4afeed320bab"/>\n\t\t\t\t<textElement textAlignment="Center"/>\n\t\t\t\t<textFieldExpression><![CDATA["Name"]]></textFieldExpression>\n\t\t\t</textField>\n\t\t\t<textField isStretchWithOverflow="true" isBlankWhenNull="true">\n\t\t\t\t<reportElement style="GroupCellStyle0" stretchType="RelativeToBandHeight" x="555" y="0" width="247" height="18" uuid="a1fd3130-9652-4f34-9d9b-d8508fe21663"/>\n\t\t\t\t<textElement textAlignment="Center"/>\n\t\t\t\t<textFieldExpression><![CDATA["Category"]]></textFieldExpression>\n\t\t\t</textField>\n\t\t</band>\n\t</pageHeader>\n\t<detail>\n\t\t<band height="18">\n\t\t\t<textField isStretchWithOverflow="true" isBlankWhenNull="true">\n\t\t\t\t<reportElement style="GroupCellStyle0" positionType="Float" stretchType="RelativeToBandHeight" x="0" y="0" width="555" height="18" uuid="ca0e19c6-4400-465b-8af7-5dc6074dc82f"/>\n\t\t\t\t<textElement textAlignment="Left"/>\n\t\t\t\t<textFieldExpression><![CDATA[$F{name(b)}]]></textFieldExpression>\n\t\t\t</textField>\n\t\t\t<textField isStretchWithOverflow="true" isBlankWhenNull="true">\n\t\t\t\t<reportElement style="GroupCellStyle0" positionType="Float" stretchType="RelativeToBandHeight" x="555" y="0" width="247" height="18" uuid="3c9eb36e-c2d6-4b37-86ae-2eca4d14903d"/>\n\t\t\t\t<textElement textAlignment="Left"/>\n\t\t\t\t<textFieldExpression><![CDATA[$F{nameCategory(b)}]]></textFieldExpression>\n\t\t\t</textField>\n\t\t</band>\n\t</detail>\n</jasperReport>
```

Once done, if you re-run the report generation procedure, it will use modified templates and the result will look as follows:

![](/assets/images/How-to_Reports_ex1_result-d9fbba45468ed0e1c70ae0ed3c4fbd98.png)

info

If the background process fails to synchronize development and execution folders for some reason, you just need to restart the server so that the project is re-built and changes are applied.

## Example 2[​](#example-2 "Direct link to Example 2")

### Task[​](#task-1 "Direct link to Task")

The invoice logic has been defined.

```
CLASS Invoice 'Invoice';
date 'Date' = DATA DATE (Invoice);
number 'Number' = DATA STRING[10] (Invoice);

CLASS InvoiceDetail 'Invoice line';
invoice 'Invoice' = DATA Invoice (InvoiceDetail) NONULL DELETE;

book 'Book' = DATA Book (InvoiceDetail) NONULL;
nameBook 'Book' (InvoiceDetail d) = name(book(d));

quantity 'Quantity' = DATA INTEGER (InvoiceDetail);
price 'Price' = DATA NUMERIC[14,2] (InvoiceDetail);

FORM invoice 'Invoice'
    OBJECTS i = Invoice PANEL
    PROPERTIES(i) date, number

    OBJECTS d = InvoiceDetail
    PROPERTIES(d) nameBook, quantity, price, NEW, DELETE
    FILTERS invoice(d) == i

    EDIT Invoice OBJECT i
;

FORM invoices 'Invoices'
    OBJECTS i = Invoice
    PROPERTIES(i) READONLY date, number
    PROPERTIES(i) NEWSESSION NEW, EDIT, DELETE
;

NAVIGATOR {
    NEW invoices;
}
```

We need to create a print form for invoices that will contain all of their parameters and lines. We also need to be able to export this form to the DOCX format.

### Solution[​](#solution-1 "Direct link to Solution")

To create a print form, let's use the existing `invoice` form that works for us in terms of structure. However, we can create a new form, if necessary.

```
print 'Print' (Invoice i)  {
    PRINT invoice OBJECTS i = i;
}
printWord 'Print (DOCX)' (Invoice i)  {
    PRINT invoice OBJECTS i = i DOCX;
}

EXTEND FORM invoices
    PROPERTIES(i) print TOOLBAR, printWord TOOLBAR
;
```

Since the `i` objects of the `invoice` form are displayed on the panel, the report will only contain data for the invoice that is passed to this object as a parameter in the `PRINT` operator.

Let's move the invoice data from the group header (**Group Header**) to the invoice header so that it gets displayed above the columns.

![](/assets/images/How-to_Reports_ex2_template_change-a50b92d9614f516cbfda93fb6cbcdea2.png)

Since the `i` and `d` object groups depend on each other, a single flat report is generated, so there is only one template, named by the [form's canonical name](/Report_design.md#template) without a postfix (as in [**Example 1**](#example-1)).

**Template** `Sample_invoice.jrxml`:

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
                <textFieldExpression><![CDATA["Invoice No." + $F{number(i)} + " dated " + $F{date(i)}]]></textFieldExpression>\n\t\t\t</textField>\n\t\t</band>\n\t</title>\n\t<pageHeader>\n\t\t<band height="18">\n\t\t\t<textField isStretchWithOverflow="true" isBlankWhenNull="true">\n\t\t\t\t<reportElement style="GroupCellStyle0" stretchType="RelativeToBandHeight" x="0" y="0" width="606" height="18" uuid="c151590a-a89b-464a-89ff-8bf91a7e652f"/>\n\t\t\t\t<textElement textAlignment="Center"/>\n\t\t\t\t<textFieldExpression><![CDATA["Book"]]></textFieldExpression>\n\t\t\t</textField>\n\t\t\t<textField isStretchWithOverflow="true" isBlankWhenNull="true">\n\t\t\t\t<reportElement style="GroupCellStyle0" stretchType="RelativeToBandHeight" x="606" y="0" width="97" height="18" uuid="186213e1-9aa8-46e8-aa27-60e9e59dd03f"/>\n\t\t\t\t<textElement textAlignment="Center"/>\n\t\t\t\t<textFieldExpression><![CDATA["Quantity"]]></textFieldExpression>\n\t\t\t</textField>\n\t\t\t<textField isStretchWithOverflow="true" isBlankWhenNull="true">\n\t\t\t\t<reportElement style="GroupCellStyle0" stretchType="RelativeToBandHeight" x="703" y="0" width="99" height="18" uuid="5d3c0f3a-fc6e-4182-b7ae-f3ad933029f8"/>\n\t\t\t\t<textElement textAlignment="Center"/>\n\t\t\t\t<textFieldExpression><![CDATA["Price"]]></textFieldExpression>\n\t\t\t</textField>\n\t\t</band>\n\t</pageHeader>\n\t<detail>\n\t\t<band height="18">\n\t\t\t<textField isStretchWithOverflow="true" isBlankWhenNull="true">\n\t\t\t\t<reportElement style="GroupCellStyle0" positionType="Float" stretchType="RelativeToBandHeight" x="0" y="0" width="606" height="18" uuid="3b31443c-0422-40d4-b32c-82ac15259dd9"/>\n\t\t\t\t<textElement textAlignment="Left"/>\n\t\t\t\t<textFieldExpression><![CDATA[$F{nameBook(d)}]]></textFieldExpression>\n\t\t\t</textField>\n\t\t\t<textField isStretchWithOverflow="true" isBlankWhenNull="true">\n\t\t\t\t<reportElement style="GroupCellStyle0" positionType="Float" stretchType="RelativeToBandHeight" x="606" y="0" width="97" height="18" uuid="204da3de-446c-4c2c-ba1b-33262b64ef4b"/>\n\t\t\t\t<textElement textAlignment="Right"/>\n\t\t\t\t<textFieldExpression><![CDATA[$F{quantity(d)}]]></textFieldExpression>\n\t\t\t</textField>\n\t\t\t<textField isStretchWithOverflow="true" isBlankWhenNull="true">\n\t\t\t\t<reportElement style="GroupCellStyle0" positionType="Float" stretchType="RelativeToBandHeight" x="703" y="0" width="99" height="18" uuid="6fb33419-b7aa-46fb-9021-d13a8c906dc9"/>\n\t\t\t\t<textElement textAlignment="Right"/>\n\t\t\t\t<textFieldExpression><![CDATA[$F{price(d)}]]></textFieldExpression>\n\t\t\t</textField>\n\t\t</band>\n\t</detail>\n</jasperReport>\n
```

The resulting report will look like this:

![](/assets/images/How-to_Reports_ex2_result-e5724099b7b12b36c21fdccb62742c35.png)

## Example 3[​](#example-3 "Direct link to Example 3")

### Task[​](#task-2 "Direct link to Task")

Similar to [**Example 2**](#example-2), plus the buyer and order logic.

```
CLASS Customer 'Customer';
name 'Name' = DATA ISTRING[50] (Customer) IN id;

FORM customers 'Customers'
    OBJECTS c = Customer
    PROPERTIES(c) READONLY name
    PROPERTIES(c) NEWSESSION NEW, EDIT, DELETE
;

NAVIGATOR {
    NEW customers;
}

customer 'Customer' = DATA Customer (Invoice);
nameCustomer 'Customer' (Invoice i) = name(customer(i));

EXTEND FORM invoice PROPERTIES(i) nameCustomer;

CLASS Order 'Order';
date 'Date' = DATA DATE (Order);
number 'Number' = DATA STRING[10] (Order);

customer 'Customer' = DATA Customer (Order);
nameCustomer 'Customer' (Order o) = name(customer(o));

CLASS OrderDetail 'Order line';
order 'Order' = DATA Order (OrderDetail) NONULL DELETE;

book 'Book' = DATA Book (OrderDetail) NONULL;
nameBook 'Book' (OrderDetail d) = name(book(d));

quantity 'Quantity' = DATA INTEGER (OrderDetail);
price 'Price' = DATA NUMERIC[14,2] (OrderDetail);

FORM order 'Order'
    OBJECTS o = Order PANEL
    PROPERTIES(o) date, number, nameCustomer

    OBJECTS d = OrderDetail
    PROPERTIES(d) nameBook, quantity, price, NEW, DELETE
    FILTERS order(d) == o

    EDIT Order OBJECT o
;

FORM orders 'Orders'
    OBJECTS i = Order
    PROPERTIES(i) READONLY date, number, nameCustomer
    PROPERTIES(i) NEWSESSION NEW, EDIT, DELETE
;

NAVIGATOR {
    NEW orders;
}
```

We need to create a print form with customer information that will include all orders and invoices.

### Solution[​](#solution-2 "Direct link to Solution")

First, let's create a form whose structure will correspond to the logic of the required print form. We will display the buyer object in the panel, as we only need to show data for a single buyer. The rest of the objects remain tables.

```
FORM customerInfo 'Customer information'
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

printInfo 'Print information' (Customer c)  {
    PRINT customerInfo OBJECTS c = c;
}

EXTEND FORM customers
    PROPERTIES(c) printInfo TOOLBAR
;
```

The principle of this report is that objects with invoices and orders are independent of each other. Thus, they will be generated as different subreports (**Subreport**).

Since the dependency between objects forms a tree with two leaf nodes, a total of three templates will be formed:

1. `Sample_customerInfo` is a top report that will show buyer data (in this case, for a single buyer). It will contain links to subreports `Sample_customerInfo_i` and `Sample_customerInfo_o`.<br />![](/assets/images/How-to_Reports_ex3_templates-09d07c8b1384d59593eff61ab5a290de.png)

   **Template** `Sample_customerInfo.jrxml`:

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
           <groupExpression><![CDATA[]]></groupExpression>\n\t\t<groupHeader>\n\t\t\t<band height="18" splitType="Prevent"/>\n\t\t</groupHeader>\n\t</group>\n\t<group name="designGroup1153">\n\t\t<groupExpression><![CDATA[String.valueOf($F{c.object})]]></groupExpression>\n\t\t<groupHeader>\n\t\t\t<band height="46" splitType="Prevent">\n\t\t\t\t<textField isStretchWithOverflow="true" isBlankWhenNull="true">\n\t\t\t\t\t<reportElement style="GroupCellStyle2" positionType="Float" stretchType="RelativeToBandHeight" x="0" y="0" width="802" height="46" uuid="dacafbf4-9be5-4748-b8e7-c01b1e4d98ab"/>\n\t\t\t\t\t<textElement textAlignment="Center">\n\t\t\t\t\t\t<font size="20"/>\n\t\t\t\t\t</textElement>\n\t\t\t\t\t<textFieldExpression><![CDATA["Customer : " + $F{name(c)}]]></textFieldExpression>\n\t\t\t\t</textField>\n\t\t\t</band>\n\t\t</groupHeader>\n\t</group>\n\t<detail>\n\t\t<band>\n\t\t\t<subreport>\n\t\t\t\t<reportElement stretchType="RelativeToBandHeight" x="0" y="0" width="0" height="0" uuid="9a51a576-f72c-4ccc-bb2c-95966743b540"/>\n\t\t\t\t<parametersMapExpression><![CDATA[$P{o_params}]]></parametersMapExpression>\n\t\t\t\t<dataSourceExpression><![CDATA[$P{o_source}]]></dataSourceExpression>\n\t\t\t\t<subreportExpression><![CDATA[$P{o_report}]]></subreportExpression>\n\t\t\t</subreport>\n\t\t</band>\n\t\t<band>\n\t\t\t<subreport>\n\t\t\t\t<reportElement stretchType="RelativeToBandHeight" x="0" y="0" width="0" height="0" uuid="4d75be9a-a015-4b45-9ac8-bf383332dd2a"/>\n\t\t\t\t<parametersMapExpression><![CDATA[$P{i_params}]]></parametersMapExpression>\n\t\t\t\t<dataSourceExpression><![CDATA[$P{i_source}]]></dataSourceExpression>\n\t\t\t\t<subreportExpression><![CDATA[$P{i_report}]]></subreportExpression>\n\t\t\t</subreport>\n\t\t</band>\n\t</detail>\n</jasperReport>\n
   ```

2. `Sample_customerInfo_o` is a report that will contain all the orders along with their lines.

   **Template** `Sample_customerInfo_o.jrxml`:

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
           <groupExpression><![CDATA[String.valueOf($F{o.object})]]></groupExpression>\n\t\t<groupHeader>\n\t\t\t<band height="18" splitType="Prevent">\n\t\t\t\t<textField isStretchWithOverflow="true">\n\t\t\t\t\t<reportElement style="GroupCellStyle0" stretchType="RelativeToBandHeight" x="0" y="0" width="32" height="18" uuid="7a140661-f62c-48e3-a050-2667b8215684"/>\n\t\t\t\t\t<textElement textAlignment="Center"/>\n\t\t\t\t\t<textFieldExpression><![CDATA["Date"]]></textFieldExpression>\n\t\t\t\t</textField>\n\t\t\t\t<textField isStretchWithOverflow="true" isBlankWhenNull="true">\n\t\t\t\t\t<reportElement style="GroupCellStyle0" positionType="Float" stretchType="RelativeToBandHeight" x="32" y="0" width="96" height="18" uuid="0764778b-b7e8-47af-9bb1-f8e8c0b3a50a"/>\n\t\t\t\t\t<textElement textAlignment="Right"/>\n\t\t\t\t\t<textFieldExpression><![CDATA[$F{date(o)}]]></textFieldExpression>\n\t\t\t\t</textField>\n\t\t\t\t<textField isStretchWithOverflow="true">\n\t\t\t\t\t<reportElement style="GroupCellStyle0" stretchType="RelativeToBandHeight" x="128" y="0" width="40" height="18" uuid="9d4386c3-8b68-4d22-9a57-72a1b9f4edb0"/>\n\t\t\t\t\t<textElement textAlignment="Center"/>\n\t\t\t\t\t<textFieldExpression><![CDATA["ID"]]></textFieldExpression>\n\t\t\t\t</textField>\n\t\t\t\t<textField isStretchWithOverflow="true" isBlankWhenNull="true">\n\t\t\t\t\t<reportElement style="GroupCellStyle0" positionType="Float" stretchType="RelativeToBandHeight" x="168" y="0" width="634" height="18" uuid="bcc4aee3-1e1a-4373-bc23-2c71a5193277"/>\n\t\t\t\t\t<textElement textAlignment="Left"/>\n\t\t\t\t\t<textFieldExpression><![CDATA[$F{number(o)}]]></textFieldExpression>\n\t\t\t\t</textField>\n\t\t\t</band>\n\t\t</groupHeader>\n\t</group>\n\t<title>\n\t\t<band height="45">\n\t\t\t<staticText>\n\t\t\t\t<reportElement x="0" y="0" width="802" height="45" uuid="bedb580c-7ea1-4962-b012-273c455d18db"/>\n\t\t\t\t<textElement textAlignment="Center">\n\t\t\t\t\t<font size="20"/>\n\t\t\t\t</textElement>\n\t\t\t\t<text><![CDATA[Orders]]></text>\n\t\t\t</staticText>\n\t\t</band>\n\t</title>\n\t<pageHeader>\n\t\t<band height="18">\n\t\t\t<textField isStretchWithOverflow="true">\n\t\t\t\t<reportElement style="GroupCellStyle1" stretchType="RelativeToBandHeight" x="0" y="0" width="606" height="18" uuid="2ed4a155-b17f-4c87-93bb-ccb3c17f99d6"/>\n\t\t\t\t<textElement textAlignment="Center"/>\n\t\t\t\t<textFieldExpression><![CDATA["Book"]]></textFieldExpression>\n\t\t\t</textField>\n\t\t\t<textField isStretchWithOverflow="true">\n\t\t\t\t<reportElement style="GroupCellStyle1" stretchType="RelativeToBandHeight" x="606" y="0" width="97" height="18" uuid="55aeb106-a5f3-42ac-a43f-571457fc26c8"/>\n\t\t\t\t<textElement textAlignment="Center"/>\n\t\t\t\t<textFieldExpression><![CDATA["Quantity"]]></textFieldExpression>\n\t\t\t</textField>\n\t\t\t<textField isStretchWithOverflow="true">\n\t\t\t\t<reportElement style="GroupCellStyle1" stretchType="RelativeToBandHeight" x="703" y="0" width="99" height="18" uuid="186d6da9-1a7a-49e8-b7a4-6df9dcec61e6"/>\n\t\t\t\t<textElement textAlignment="Center"/>\n\t\t\t\t<textFieldExpression><![CDATA["Price"]]></textFieldExpression>\n\t\t\t</textField>\n\t\t</band>\n\t</pageHeader>\n\t<detail>\n\t\t<band height="18">\n\t\t\t<textField isStretchWithOverflow="true" isBlankWhenNull="true">\n\t\t\t\t<reportElement style="GroupCellStyle1" positionType="Float" stretchType="RelativeToBandHeight" x="0" y="0" width="606" height="18" uuid="4161551d-97d3-48d5-a26a-11b0a145f131"/>\n\t\t\t\t<textElement textAlignment="Left"/>\n\t\t\t\t<textFieldExpression><![CDATA[$F{nameBook(od)}]]></textFieldExpression>\n\t\t\t</textField>\n\t\t\t<textField isStretchWithOverflow="true" isBlankWhenNull="true">\n\t\t\t\t<reportElement style="GroupCellStyle1" positionType="Float" stretchType="RelativeToBandHeight" x="606" y="0" width="97" height="18" uuid="8739e7c6-7536-4ff4-93a0-4dfe576a376e"/>\n\t\t\t\t<textElement textAlignment="Right"/>\n\t\t\t\t<textFieldExpression><![CDATA[$F{quantity(od)}]]></textFieldExpression>\n\t\t\t</textField>\n\t\t\t<textField isStretchWithOverflow="true" isBlankWhenNull="true">\n\t\t\t\t<reportElement style="GroupCellStyle1" positionType="Float" stretchType="RelativeToBandHeight" x="703" y="0" width="99" height="18" uuid="345899e3-a8b5-4532-b8e5-ddadf1ca95b5"/>\n\t\t\t\t<textElement textAlignment="Right"/>\n\t\t\t\t<textFieldExpression><![CDATA[$F{price(od)}]]></textFieldExpression>\n\t\t\t</textField>\n\t\t</band>\n\t</detail>\n</jasperReport>\n
   ```

3. `Sample_customerInfo_i` is a report that will contain all the invoices with their lines.

   **Template** `Sample_customerInfo_i.jrxml`:

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
           <groupExpression><![CDATA[String.valueOf($F{i.object})]]></groupExpression>\n\t\t<groupHeader>\n\t\t\t<band height="18" splitType="Prevent">\n\t\t\t\t<textField isStretchWithOverflow="true">\n\t\t\t\t\t<reportElement style="GroupCellStyle0" stretchType="RelativeToBandHeight" x="0" y="0" width="32" height="18" uuid="f4d356be-24a9-4ca9-851f-167c95ffc33c"/>\n\t\t\t\t\t<textElement textAlignment="Center"/>\n\t\t\t\t\t<textFieldExpression><![CDATA["Date"]]></textFieldExpression>\n\t\t\t\t</textField>\n\t\t\t\t<textField isStretchWithOverflow="true" isBlankWhenNull="true">\n\t\t\t\t\t<reportElement style="GroupCellStyle0" positionType="Float" stretchType="RelativeToBandHeight" x="32" y="0" width="88" height="18" uuid="97cebc8a-8bdd-4c8f-b90e-0dd3bcb6c4b1"/>\n\t\t\t\t\t<textElement textAlignment="Right"/>\n\t\t\t\t\t<textFieldExpression><![CDATA[$F{date(i)}]]></textFieldExpression>\n\t\t\t\t</textField>\n\t\t\t\t<textField isStretchWithOverflow="true">\n\t\t\t\t\t<reportElement style="GroupCellStyle0" stretchType="RelativeToBandHeight" x="120" y="0" width="40" height="18" uuid="3098f851-ca96-45b9-9cf2-04e6e243528a"/>\n\t\t\t\t\t<textElement textAlignment="Center"/>\n\t\t\t\t\t<textFieldExpression><![CDATA["ID"]]></textFieldExpression>\n\t\t\t\t</textField>\n\t\t\t\t<textField isStretchWithOverflow="true" isBlankWhenNull="true">\n\t\t\t\t\t<reportElement style="GroupCellStyle0" positionType="Float" stretchType="RelativeToBandHeight" x="160" y="0" width="642" height="18" uuid="71a8d3eb-c29f-4363-a1e6-857af2784d5a"/>\n\t\t\t\t\t<textElement textAlignment="Left"/>\n\t\t\t\t\t<textFieldExpression><![CDATA[$F{number(i)}]]></textFieldExpression>\n\t\t\t\t</textField>\n\t\t\t</band>\n\t\t</groupHeader>\n\t</group>\n\t<title>\n\t\t<band height="45">\n\t\t\t<staticText>\n\t\t\t\t<reportElement x="0" y="0" width="802" height="45" uuid="ec3d75be-ea13-4ee3-a0f0-22e7612fe552"/>\n\t\t\t\t<textElement textAlignment="Center">\n\t\t\t\t\t<font size="20"/>\n\t\t\t\t</textElement>\n\t\t\t\t<text><![CDATA[Invoices]]></text>\n\t\t\t</staticText>\n\t\t</band>\n\t</title>\n\t<pageHeader>\n\t\t<band height="18">\n\t\t\t<textField isStretchWithOverflow="true">\n\t\t\t\t<reportElement style="GroupCellStyle1" stretchType="RelativeToBandHeight" x="0" y="0" width="606" height="18" uuid="768f5aa5-7a86-49aa-9c18-855e4e4d3d02"/>\n\t\t\t\t<textElement textAlignment="Center"/>\n\t\t\t\t<textFieldExpression><![CDATA["Book"]]></textFieldExpression>\n\t\t\t</textField>\n\t\t\t<textField isStretchWithOverflow="true">\n\t\t\t\t<reportElement style="GroupCellStyle1" stretchType="RelativeToBandHeight" x="606" y="0" width="97" height="18" uuid="032b4dad-5895-46e1-ba97-7e2af9ebecde"/>\n\t\t\t\t<textElement textAlignment="Center"/>\n\t\t\t\t<textFieldExpression><![CDATA["Quantity"]]></textFieldExpression>\n\t\t\t</textField>\n\t\t\t<textField isStretchWithOverflow="true">\n\t\t\t\t<reportElement style="GroupCellStyle1" stretchType="RelativeToBandHeight" x="703" y="0" width="99" height="18" uuid="092947c2-bbd0-464f-8048-4d800c05a6c6"/>\n\t\t\t\t<textElement textAlignment="Center"/>\n\t\t\t\t<textFieldExpression><![CDATA["Price"]]></textFieldExpression>\n\t\t\t</textField>\n\t\t</band>\n\t</pageHeader>\n\t<detail>\n\t\t<band height="18">\n\t\t\t<textField isStretchWithOverflow="true" isBlankWhenNull="true">\n\t\t\t\t<reportElement style="GroupCellStyle1" positionType="Float" stretchType="RelativeToBandHeight" x="0" y="0" width="606" height="18" uuid="86fa4116-b7e3-4aaf-a284-45a596a52f2b"/>\n\t\t\t\t<textElement textAlignment="Left"/>\n\t\t\t\t<textFieldExpression><![CDATA[$F{nameBook(id)}]]></textFieldExpression>\n\t\t\t</textField>\n\t\t\t<textField isStretchWithOverflow="true" isBlankWhenNull="true">\n\t\t\t\t<reportElement style="GroupCellStyle1" positionType="Float" stretchType="RelativeToBandHeight" x="606" y="0" width="97" height="18" uuid="0c6acbce-c5ad-450f-a0be-23aa4b7e2ad0"/>\n\t\t\t\t<textElement textAlignment="Right"/>\n\t\t\t\t<textFieldExpression><![CDATA[$F{quantity(id)}]]></textFieldExpression>\n\t\t\t</textField>\n\t\t\t<textField isStretchWithOverflow="true" isBlankWhenNull="true">\n\t\t\t\t<reportElement style="GroupCellStyle1" positionType="Float" stretchType="RelativeToBandHeight" x="703" y="0" width="99" height="18" uuid="7b44de1a-3656-43b5-904a-fee48f5fc245"/>\n\t\t\t\t<textElement textAlignment="Right"/>\n\t\t\t\t<textFieldExpression><![CDATA[$F{price(id)}]]></textFieldExpression>\n\t\t\t</textField>\n\t\t</band>\n\t</detail>\n</jasperReport>
   ```

The result of this slightly modified report will look like this:

![](/assets/images/How-to_Reports_ex3_result-d962d486ef473e7566b2570c78ce34d7.png)
