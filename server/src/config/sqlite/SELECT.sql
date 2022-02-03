SELECT * FROM Products where id=11;
UPDATE Products SET stock = 0 WHERE id=11;
PRAGMA table_info(Products);
PRAGMA table_info(sale_list_products);
DELETE FROM Products WHERE id >20;