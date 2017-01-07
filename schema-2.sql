CREATE DATABASE bamazon-2;

USE DATABASE bamazon-2;

CREATE TABLE products-2(
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR (50) NOT NULL,
  department_name VARCHAR (50) NOT NULL,
  price DECIMAL (10,2) NOT NULL,
  stock_quantity INT (10) NOT NULL,
  primary key(item_id)
);

SELECT * FROM products-2;